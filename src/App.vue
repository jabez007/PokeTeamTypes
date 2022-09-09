<template>
  <div>
    <va-sidebar class="sidebar" color="_dark" width="75vw" gradient hoverable>
      <va-sidebar-item
        hover-color="_dark"
        class="row align--center justify--center"
        style="display: flex; height: 100vh"
      >
        <va-sidebar-item-content style="width: 75vw">
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
      <transition-group name="list">
        <div v-for="t in types" :key="t.name" class="flex sm3">
          <type-card class="item" v-model="selectedPokemon[t.name]" :type="t" />
        </div>
      </transition-group>
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
              step="3"
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
    minimumAttacks: 80,
    minimumDefenses: 80,
    selectedPokemon: {},
    teamSize: 6,
    teams: [],
    totalTypesOnTeam: 11,
    typesOnTeam: [],
    typesNotOnTeam: [],
  }),
  watch: {
    minimumStatsTotal(newVal) {
      this.updateTypes({
        newMinimumStatsTotal: newVal,
      });
    },
    minimumAttacks(newVal) {
      this.updateTypes({
        newMinimumAttacks: newVal,
      });
    },
    minimumDefenses(newVal) {
      this.updateTypes({
        newMinimumDefenses: newVal,
      });
    },
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
    this.updateTypes();
  },
  methods: {
    updateTypes({
      newMinimumStatsTotal = this.minimumStatsTotal,
      newMinimumAttacks = this.minimumAttacks,
      newMinimumDefenses = this.minimumDefenses,
    } = {}) {
      this.loading = true;
      const self = this;
      getResistantTypes({
        statsFilters: {
          minimumStatsTotal: newMinimumStatsTotal,
          minimumAttacks: newMinimumAttacks,
          minimumDefenses: newMinimumDefenses,
        },
      })
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

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>

<style>
.va-sidebar__menu {
  height: 100vh;
}
</style>
