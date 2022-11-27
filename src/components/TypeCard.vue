<template>
  <va-card color="_dark" gradient>
    <va-card-title class="justify--space-evenly">
      <type-chip v-for="tn in type.name.split('/')" :key="tn" :type="tn" />
    </va-card-title>
    <va-card-content>
      <va-divider>
        <span class="px-2">Damage from other types</span>
      </va-divider>
      <p>Score:</p>
      {{ type.damage_from_score }}
      <p>Weaknesses:</p>
      <type-chip v-for="w in type.weaknesses" :key="w" :type="w" size="small" />
      <p>Resistances:</p>
      <type-chip
        v-for="r in type.resistances"
        :key="r"
        :type="r"
        size="small"
      />
      <va-divider>
        <span class="px-2">Damage to other types</span>
      </va-divider>
      <p>Score:</p>
      {{ type.damage_to_score }}
      <p>Coverages:</p>
      <type-chip v-for="c in type.coverages" :key="c" :type="c" size="small" />
    </va-card-content>
    <va-card-actions>
      <pokemon-form
        @update:modelValue="type.pokemon.push($event)"
      ></pokemon-form>
      <va-select
        v-model="selectedPokemon"
        :options="[...pokemonOptions, { pokemon: { name: '' } }]"
        :text-by="(option) => option.pokemon.name"
        :track-by="(option) => option.pokemon.name"
      >
        <template #prependInner>
          <va-avatar color="background" :src="selectedPokemon.sprite" />
        </template>
      </va-select>
    </va-card-actions>
  </va-card>
</template>

<script>
import TypeChip from "./TypeChip.vue";
import PokemonForm from "./PokemonForm.vue";

export default {
  props: {
    type: Object,
    modelValue: Object,
  },
  emits: ["update:modelValue"],
  components: {
    TypeChip,
    PokemonForm,
  },
  computed: {
    pokemonOptions() {
      const pkmn = [...this.type.pokemon]
      
      const stats = pkmn.reduce((acc, p) => {
        Object.keys(p.stats).forEach((k) => {
          acc[k] = [...(acc[k] || []), p.stats[k]];
        });
        return acc;
      }, {});
      
      const maxStats = Object.keys(stats).reduce((acc, s) => {
        acc[s] = Math.max(...(stats[s] || []))
        return acc; 
      }, {})
      
      const minStats = Object.keys(stats).reduce((acc, s) => {
        acc[s] = Math.min(...(stats[s] || []))
        return acc; 
      }, {})

      pkmn.sort((a, b) => {
        function normalizedStatsTotal(p) {
          return Object.keys(p.stats).reduce((acc, s) => 
            acc + (
              (p.stats[s] - minStats[s])
              /
              (maxStats[s] - minStats[s])
            ), 0)
        }
        return normalizedStatsTotal(b) - normalizedStatsTotal(a)
      })
      return pkmn || [];
    },
    selectedPokemon: {
      get() {
        return this.modelValue || { pokemon: { name: "" } };
      },
      set(value) {
        if (value.pokemon.name === "") {
          this.$emit("update:modelValue", null);
        } else {
          this.$emit("update:modelValue", value);
        }
      },
    },
  },
};
</script>