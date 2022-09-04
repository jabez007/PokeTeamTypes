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
            <teams-carousel
              v-if="teams.length > 0"
              :teams="teams"
              :totalTypesOnTeam="
                Math.min(Math.max(totalTypesOnTeam, teamSize), teamSize * 2)
              "
              :typesOnTeam="typesOnTeam"
              :typesNotOnTeam="typesNotOnTeam"
            />
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
          <va-icon name="bar_chart" />
          <va-sidebar-item-title>
            <va-input
              label="Minimum Total Stats"
              v-model="minimumStatsTotal"
              type="number"
              min="0"
              step="10"
            />
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="crisis_alert" />
          <va-sidebar-item-title>
            <va-input
              label="Minimum of Attacks"
              v-model="minimumAttacks"
              type="number"
              min="0"
              step="10"
            />
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="shield" />
          <va-sidebar-item-title>
            <va-input
              label="Minimum average Defense"
              v-model="minimumDefenses"
              type="number"
              min="0"
              step="10"
            />
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
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
import TeamsCarousel from "./components/TeamsCarousel.vue";
import TypeSelector from "./components/TypeSelector.vue";
import { getResistantTypes, generateTeams } from "./lib/pokedex.js";

export default {
  components: {
    TypeCard,
    TeamsCarousel,
    TypeSelector,
  },
  data: () => ({
    loading: false,
    types: [],
    minimumStatsTotal: 500,
    minimumAttacks: 90,
    minimumDefenses: 70,
    selectedPokemon: {},
    teamSize: 6,
    teams: [],
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
    teamSize(newVal) {
      this.updateTeams({
        newTeamSize: newVal,
      });
    },
  },
  created() {
    this.loading = true;
    const self = this;
    getResistantTypes()
      .then((data) => {
        self.types.splice(0, self.types.length, ...data.slice(0, 30));
        self.types.forEach(
          (t) => (self.selectedPokemon[t.name] = t.pokemon[0])
        );
        self.loading = false;
      })
      .catch((err) => {
        console.log(err);
        self.loading = false;
      });
  },
  methods: {
    updateTeams({
      newSelectedPokemon = this.selectedPokemon,
      newTeamSize = this.teamSize,
    } = {}) {
      const self = this;
      setTimeout(() => {
        self.teams.splice(
          0,
          self.teams.length,
          ...generateTeams({
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
          })
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
