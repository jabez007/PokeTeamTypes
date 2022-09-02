<template>
  <div>
    <va-sidebar id="sidebar" color="_dark" width="75vw" hoverable>
      <va-sidebar-item
        class="row align--center justify--center"
        style="height: 100vh"
      >
        <va-sidebar-item-content>
          <va-icon name="groups" />
          <va-sidebar-item-title style="width: 50vw">
            <va-carousel
              v-if="teams.length > 0"
              height="50vh"
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
  </div>
</template>

<script>
//https://pokemondb.net/type/dual
import TypeCard from "./components/TypeCard.vue";
import TeamCard from "./components/TeamCard.vue";
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
  },
  data: () => ({
    loading: false,
    types: [],
    selectedPokemon: {},
    openSidebar: true,
    teams: [],
  }),
  watch: {
    selectedPokemon: {
      handler(newVal, oldVal) {
        const self = this;
        setTimeout(() => {
          const teamSize = 6;
          const totalTypesOnTeam = 11;
          const typesOnTeam = [
            //"fighting"
          ];
          const typesNotOnTeam = [
            //"fairy"
          ];

          const resistantTeams = generateTeams({
            allowedTypes: self.types.map((t) => ({
              ...t,
              pokemon: newVal[t.name],
            })),
            teamComposition: {
              allowSharedTypes: false,
              allowSharedWeaknesses: true,
              coverWeaknesses: false,
            },
          });

          console.log(`${resistantTeams.length} possible teams`);

          const teamStatistics = statistics(resistantTeams.map((t) => t.score));

          console.log(`Average team score: ${teamStatistics.mean}`);
          console.log(
            `Standard deviation of team scores: ${teamStatistics.standardDeviation}`
          );

          self.teams.splice(
            0,
            self.teams.length,
            ...resistantTeams
              .filter(
                (tm) =>
                  tm.typesTotal >=
                  Math.min(Math.max(totalTypesOnTeam, teamSize), teamSize * 2)
              )
              .filter(
                (tm) =>
                  typesOnTeam.length === 0 ||
                  tm.types.some((t) =>
                    typesOnTeam.some((tt) => t.split("/").includes(tt))
                  )
              )
              .filter(
                (tm) =>
                  typesNotOnTeam.length === 0 ||
                  tm.types.every((t) =>
                    typesNotOnTeam.every((tt) => !t.split("/").includes(tt))
                  )
              )
              .filter((tm) => tm.score >= teamStatistics.mean)
          );
        }, 100);
      },
      deep: true,
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
  methods: {},
};
</script>

<style scoped>
#sidebar {
  position: fixed;
}
.item {
  margin: 1rem;
}
</style>
