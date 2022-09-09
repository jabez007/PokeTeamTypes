<template>
  <va-card color="_dark" gradient>
    <va-card-title class="justify--space-evenly">
      <span> Average Score: {{ averageScore.toFixed(4) }} </span>
      <span> Standard Deviation: {{ standardDeviation.toFixed(4) }} </span>
    </va-card-title>
    <va-card-content>
      <va-carousel
        height="29rem"
        color="_dark"
        :items="new Array(filteredTeams.length)"
        class="align--center"
        stateful
        infinite
      >
        <template #default="{ index }">
          <team-card
            :color="
              ((filteredTeams[index] || {}).score || 0) >
              averageScore + standardDeviation
                ? 'success'
                : 'warning'
            "
            :team="filteredTeams[index] || {}"
          />
        </template>
      </va-carousel>
      <va-divider>
        <span class="px-2">Out of {{ teams.length }}</span>
      </va-divider>
    </va-card-content>
  </va-card>
</template>

<script>
import TeamCard from "./TeamCard.vue";

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
  props: {
    teams: Array,
    totalTypesOnTeam: Number,
    typesOnTeam: Array,
    typesNotOnTeam: Array,
  },
  components: {
    TeamCard,
  },
  data: () => ({}),
  computed: {
    teamsStatistics() {
      const self = this;
      return statistics(self.teams.map((t) => t.score));
    },
    averageScore() {
      return this.teamsStatistics.mean;
    },
    standardDeviation() {
      return this.teamsStatistics.standardDeviation;
    },
    filteredTeams() {
      const self = this;
      return this.teams
        .filter((tm) => tm.typesTotal >= self.totalTypesOnTeam)
        .filter(
          (tm) =>
            self.typesOnTeam.length === 0 ||
            self.typesOnTeam.every((tt) =>
              tm.types.some((t) => t.split("/").includes(tt))
            )
        )
        .filter(
          (tm) =>
            self.typesNotOnTeam.length === 0 ||
            self.typesNotOnTeam.every((tt) =>
              tm.types.every((t) => !t.split("/").includes(tt))
            )
        )
        .filter((tm) => tm.score >= self.averageScore)
        .slice(0, 10);
    },
  },
};
</script>

<style>
.va-carousel {
  background-color: var(--va-_dark);
}
</style>