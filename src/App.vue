<template>
  <div class="row justify--space-evenly">
    <va-progress-circle v-if="loading" indeterminate />
    <div v-for="(t, k) in types" :key="k" class="flex sm3">
      <type-card
        class="item"
        v-model="selectedPokemon[t.name]"
        :type="t"
      ></type-card>
    </div>
  </div>
</template>

<script>
//https://pokemondb.net/type/dual
import TypeCard from "./components/TypeCard.vue";
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
  },
  data: () => ({
    loading: false,
    types: [],
    selectedPokemon: {},
  }),
  watch: {
    selectedPokemon: {
      handler(newVal, oldVal) {
        const teamSize = 6;
        const totalTypesOnTeam = 11;
        const typesOnTeam = [
          //"fighting"
        ];
        const typesNotOnTeam = [
          //"fairy"
        ];

        const resistantTeams = generateTeams({
          allowedTypes: [...this.types].map((t) => ({
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

        const selectedTeams = resistantTeams
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
          );

        console.log(`${selectedTeams.length} teams selected`);

        const aboveAverageSelectedTeams = selectedTeams.filter(
          (t) => t.score >= teamStatistics.mean
        );

        console.log(`Much above average teams selected`);
        console.log(
          JSON.stringify(
            aboveAverageSelectedTeams
              .filter(
                (t) =>
                  t.score >=
                  teamStatistics.mean + teamStatistics.standardDeviation
              )
              .slice(0, 5),
            null,
            2
          )
        );

        console.log(`Above average teams selected`);
        console.log(
          JSON.stringify(
            aboveAverageSelectedTeams
              .filter(
                (t) =>
                  t.score <=
                  teamStatistics.mean + teamStatistics.standardDeviation
              )
              .slice(0, 5),
            null,
            2
          )
        );
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
};
</script>

<style scoped>
.item {
  margin: 1rem;
}
</style>
