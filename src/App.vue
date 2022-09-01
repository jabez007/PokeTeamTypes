<template>
  <div class="row justify--space-evenly">
    <va-progress-circle v-if="loading" indeterminate />
    <div v-for="(t, k) in types" :key="k" class="flex sm2">
      <va-card class="item" color="dark" gradient>
        {{ t.name }}
      </va-card>
    </div>
  </div>
</template>

<script>
import { getResistantTypes, generateTeams } from "./lib/pokedex.js";

export default {
  data: () => ({
    loading: false,
    types: [],
  }),
  created() {
    this.loading = true;
    const self = this;
    getResistantTypes().then((data) => {
      self.types.splice(0, self.types.length, ...data.slice(0, 30));
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
