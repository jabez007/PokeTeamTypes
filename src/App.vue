<template>
  <div>
    <va-sidebar class="sidebar" color="_dark" width="75vw" gradient hoverable>
      <va-sidebar-item
        hover-color="_dark"
        class="row align--center justify--center"
        style="height: 100vh"
      >
        <va-sidebar-item-content>
          <va-icon name="groups" />
          <va-sidebar-item-title style="width: 50vw">
            <va-card v-if="teams.length > 0" color="background">
              <va-card-title class="justify--space-evenly">
                <span> Average Score: {{ averageScore.toFixed(4) }} </span>
                <span>
                  Standard Deviation: {{ standardDeviation.toFixed(4) }}
                </span>
              </va-card-title>
              <va-card-content>
                <va-carousel
                  height="29rem"
                  color="_dark"
                  :items="new Array(teams.length)"
                  class="align--center"
                  stateful
                  infinite
                >
                  <template #default="{ index }">
                    <team-card :team="teams[index] || {}" />
                  </template>
                </va-carousel>
                <va-divider>
                  <span class="px-2">Out of {{ totalPossibleTeams }}</span>
                </va-divider>
              </va-card-content>
            </va-card>
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </va-sidebar>
    <div class="row justify--space-evenly">
      <va-progress-circle v-if="loading" indeterminate />
      <div v-for="(t, k) in types" :key="k" class="flex sm3">
        <type-card class="item" v-model="selectedPokemon[t.name]" :type="t" />
      </div>
    </div>
    <va-sidebar
      class="sidebar"
      color="_dark"
      width="23rem"
      position="right"
      gradient
      hoverable
    >
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="group_add" />
          <va-sidebar-item-title>
            <va-input
              label="Team Size"
              v-model="teamSize"
              type="number"
              min="3"
              max="6"
            />
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="format_size" />
          <va-sidebar-item-title>
            <va-input
              label="Minimum Number of Types"
              v-model="totalTypesOnTeam"
              type="number"
              :min="teamSize"
              :max="teamSize * 2"
            />
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="playlist_add" />
          <va-sidebar-item-title>
            <type-selector
              label="Specific Types to Include"
              v-model="typesOnTeam"
            />
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="playlist_remove" />
          <va-sidebar-item-title>
            <type-selector
              label="Specific Types to Exclude"
              v-model="typesNotOnTeam"
            />
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </va-sidebar>
  </div>
</template>

<script>
//https://pokemondb.net/type/dual
import TypeCard from "./components/TypeCard.vue";
import TeamCard from "./components/TeamCard.vue";
import TypeSelector from "./components/TypeSelector.vue";
import { getResistantTypes, generateTeams } from "./lib/pokedex.js";

function statistics(arr) {
  if (!arr || arr.length === 0) {
    return {
      mean: 0,
      standardDeviation: 0,
    };
  }

  const n = arr.length;
  const mean = arr.reduce((a, b) => a + b) / n;

  return {
    mean: parseFloat(mean.toFixed(2)),
    standardDeviation: parseFloat(
      Math.sqrt(
        arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
      ).toFixed(2)
    ),
  };
}

export default {
  components: {
    TypeCard,
    TeamCard,
    TypeSelector,
  },
  data: () => ({
    loading: false,
    types: [],
    selectedPokemon: {},
    openSidebar: true,
    teamSize: 6,
    teams: [],
    averageScore: 0,
    standardDeviation: 0,
    totalPossibleTeams: 0,
    totalTypesOnTeam: 11,
    typesOnTeam: [],
    typesNotOnTeam: [],
  }),
  watch: {
    selectedPokemon: {
      handler(newVal) {
        this.updateTeams({
          newSelectedPokemon: newVal,
        });
      },
      deep: true,
    },
    totalTypesOnTeam(newVal) {
      this.updateTeams({
        newTotalTypesOnTeam: newVal
      });
    },
    typesOnTeam(newVal) {
      this.updateTeams({
        newTypesOnTeam: newVal
      });
    },
    typesNotOnTeam(newVal) {
      this.updateTeams({
        newTypesNotOnTeam: newVal
      });
    },
  },
  created() {
    this.loading = true;
    const self = this;
    getResistantTypes().then((data) => {
      self.types.splice(0, self.types.length, ...data.slice(0, 30));
      self.types.forEach((t) => (self.selectedPokemon[t.name] = t.pokemon[0]));
      self.loading = false;
    });
  },
  methods: {
    updateTeams({
      newSelectedPokemon = this.selectedPokemon,
      newTeamSize = this.teamSize,
      newTotalTypesOnTeam = this.totalTypesOnTeam,
      newTypesOnTeam = this.typesOnTeam,
      newTypesNotOnTeam = this.typesNotOnTeam,
    } = {}) {
      const self = this;
      setTimeout(() => {
        const resistantTeams = generateTeams({
          allowedTypes: self.types.map((t) => ({
            ...t,
            pokemon: newSelectedPokemon[t.name],
          })),
          teamSize: newTeamSize,
          teamComposition: {
            allowSharedTypes: false,
            allowSharedWeaknesses: true,
            coverWeaknesses: false,
          },
        });

        self.totalPossibleTeams = resistantTeams.length;

        const teamStatistics = statistics(resistantTeams.map((t) => t.score));

        self.averageScore = teamStatistics.mean;
        self.standardDeviation = teamStatistics.standardDeviation;

        self.teams.splice(
          0,
          self.teams.length,
          ...resistantTeams
            .filter(
              (tm) =>
                tm.typesTotal >=
                Math.min(
                  Math.max(newTotalTypesOnTeam, newTeamSize),
                  newTeamSize * 2
                )
            )
            .filter(
              (tm) =>
                newTypesOnTeam.length === 0 ||
                tm.types.some((t) =>
                  newTypesOnTeam.some((tt) => t.split("/").includes(tt))
                )
            )
            .filter(
              (tm) =>
                newTypesNotOnTeam.length === 0 ||
                tm.types.every((t) =>
                  newTypesNotOnTeam.every((tt) => !t.split("/").includes(tt))
                )
            )
            .filter((tm) => tm.score >= teamStatistics.mean)
            .slice(0, 10)
        );
      }, 100);
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
}
.item {
  margin: 1rem;
}
</style>

<style>
.va-sidebar__menu {
  height: 100vh;
}
</style>
