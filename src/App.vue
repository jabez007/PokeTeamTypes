<template>
  <div class="row justify--space-evenly">
    <va-progress-circle v-if="loading" indeterminate />
    <div v-for="(t, k) in types" :key="k" class="flex sm3">
      <va-card class="item" color="_dark" gradient>
        <va-card-title class="justify--space-evenly">
          <type-chip
            v-for="tn in t.name.split('/')"
            :key="tn"
            :type="tn"
          ></type-chip>
        </va-card-title>
        <va-card-content>
          <va-divider>
            <span class="px-2">Damage from other types</span>
          </va-divider>
          <p>Score:</p>
          {{ t.damage_from_score }}
          <p>Weaknesses:</p>
          <type-chip
            v-for="w in t.weaknesses"
            :key="w"
            :type="w"
            size="small"
          ></type-chip>
          <p>Resistances:</p>
          <type-chip
            v-for="r in t.resistances"
            :key="r"
            :type="r"
            size="small"
          ></type-chip>
          <va-divider>
            <span class="px-2">Damage to other types</span>
          </va-divider>
          <p>Score:</p>
          {{ t.damage_to_score }}
          <p>Coverages:</p>
          <type-chip
            v-for="c in t.coverages"
            :key="c"
            :type="c"
            size="small"
          ></type-chip>
        </va-card-content>
        <va-card-actions>
          <va-select
            v-model="selectedPokemon[t.name]"
            :options="t.pokemon"
            :text-by="(option) => option.pokemon.name"
            :track-by="(option) => option.pokemon.name"
          >
            <template #prependInner>
              <va-avatar
                color="background"
                :src="selectedPokemon[t.name].sprite"
              />
            </template>
          </va-select>
        </va-card-actions>
      </va-card>
    </div>
  </div>
</template>

<script>
//https://pokemondb.net/type/dual
import TypeChip from "./components/TypeChip.vue";
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
    TypeChip,
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
            coverWeaknesses: false 
          }
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
          .filter((tm) =>
            typesOnTeam.length === 0
            ||
            tm.types.some((t) =>
              typesOnTeam.some((tt) => t.split("/").includes(tt))
            )
          )
          .filter((tm) => 
            typesNotOnTeam.length === 0
            ||
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
