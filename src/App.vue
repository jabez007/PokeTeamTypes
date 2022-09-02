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
              <va-avatar color="background" :src="selectedPokemon[t.name].sprite" />
            </template>
          </va-select>
        </va-card-actions>
      </va-card>
    </div>
  </div>
</template>

<script>
import TypeChip from "./components/TypeChip.vue";
import { getResistantTypes, generateTeams } from "./lib/pokedex.js";

export default {
  components: {
    TypeChip,
  },
  data: () => ({
    loading: false,
    types: [],
    selectedPokemon: {},
  }),
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
