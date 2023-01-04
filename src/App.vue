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
      <div class="flex sm12">
        <div class="row justify--center">
          <div class="flex" style="margin: 1rem;">
            <va-switch v-model="showEmpty">
              <template #innerLabel>
                Show Types without Pokemon
              </template>
            </va-switch>
          </div>
        </div>
      </div> 
      <transition-group name="list">
        <div 
          v-for="t in types.filter((t) => (t.pokemon.length > 0) || showEmpty)"
          :key="t.name" 
          class="flex sm3"
        >
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
          <va-icon name="score" />
          <va-sidebar-item-title>
            <va-switch v-model="maxDamageFromScore">
              <template #innerLabel>Max Damage From Score = 18</template>
            </va-switch>
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="looks_4" />
          <va-sidebar-item-title>
            <va-switch v-model="allowQuadrupleDamage">
              <template #innerLabel>Allow Quadruple Damage</template>
            </va-switch>
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="network_locked" />
          <va-sidebar-item-title>
            <va-switch v-model="limitQuadrupleDamage">
              <template #innerLabel>Limit Quadruple Damage</template>
            </va-switch>
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <!-- -->
      <va-divider />
      <!-- -->
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
      <!-- -->
      <va-divider />
      <!-- -->
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
          <va-icon name="share" />
          <va-sidebar-item-title>
            <va-switch v-model="allowSharedTypes">
              <template #innerLabel> Allow Shared Types </template>
            </va-switch>
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="share" />
          <va-sidebar-item-title>
            <va-switch v-model="allowSharedWeaknesses">
              <template #innerLabel> Allow Shared Weaknesses </template>
            </va-switch>
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="curtains" />
          <va-sidebar-item-title>
            <va-switch v-model="coverWeaknesses">
              <template #innerLabel> Cover Weaknesses </template>
            </va-switch>
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
    maxDamageFromScore: true,
    allowQuadrupleDamage: true,
    limitQuadrupleDamage: false,
    minimumStatsTotal: 500,
    minimumAttacks: 80,
    minimumDefenses: 80,
    showEmpty: false,
    types: [],
    selectedPokemon: {},
    teamSize: 6,
    allowSharedTypes: true,
    allowSharedWeaknesses: false,
    coverWeaknesses: false,
    teams: [],
    totalTypesOnTeam: 6,
    typesOnTeam: [],
    typesNotOnTeam: [],
  }),
  watch: {
    maxDamageFromScore(newVal) {
      this.updateTypes({
        newMaxDamageFromScore: newVal,
      });
    },
    allowQuadrupleDamage(newVal) {
      this.updateTypes({
        newAllowQuadrupleDamage: newVal,
      });
    },
    limitQuadrupleDamage(newVal) {
      this.updateTypes({
        newLimitQuadrupleDamage: newVal,
      });
    },
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
    allowSharedTypes(newVal) {
      this.updateTeams({
        newAllowSharedTypes: newVal,
      });
    },
    allowSharedWeaknesses(newVal) {
      this.updateTeams({
        newAllowSharedWeaknesses: newVal,
      });
    },
    coverWeaknesses(newVal) {
      this.updateTeams({
        newCoverWeaknesses: newVal,
      });
    },
  },
  created() {
    this.updateTypes();
  },
  methods: {
    updateTypes({
      newMaxDamageFromScore = this.maxDamageFromScore,
      newAllowQuadrupleDamage = this.allowQuadrupleDamage,
      newLimitQuadrupleDamage = this.limitQuadrupleDamage,
      newMinimumStatsTotal = this.minimumStatsTotal,
      newMinimumAttacks = this.minimumAttacks,
      newMinimumDefenses = this.minimumDefenses,
    } = {}) {
      this.loading = true;
      const self = this;
      getResistantTypes({
        typeFilters: {
          maxDamageFromScore: newMaxDamageFromScore,
          allowQuadrupleDamage: newAllowQuadrupleDamage,
          limitQuadrupleDamage: newLimitQuadrupleDamage,
        },
        statsFilters: {
          minimumStatsTotal: newMinimumStatsTotal,
          minimumAttacks: newMinimumAttacks,
          minimumDefenses: newMinimumDefenses,
        },
      })
        .then((data) => {
          self.types.splice(0, self.types.length, ...data);
          self.types.forEach(
            (t) => (self.selectedPokemon[t.name] = t.pokemon.find((p) => !!p.sprite))
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
      newAllowSharedTypes = this.allowSharedTypes,
      newAllowSharedWeaknesses = this.allowSharedWeaknesses,
      newCoverWeaknesses = this.coverWeaknesses,
    } = {}) {
      const self = this;
      setTimeout(() => {
        self.teams.splice(
          0,
          self.teams.length,
          ...generateTeams({
            allowedTypes: self.types
              .map((t) => ({
                ...t,
                pokemon: newSelectedPokemon[t.name],
              }))
              .filter((t) => !!t.pokemon),
            teamSize: newTeamSize,
            teamComposition: {
              allowSharedTypes: newAllowSharedTypes,
              allowSharedWeaknesses: newAllowSharedWeaknesses,
              coverWeaknesses: newCoverWeaknesses,
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
