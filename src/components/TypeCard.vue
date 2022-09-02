<template>
  <va-card color="_dark" gradient>
    <va-card-title class="justify--space-evenly">
      <type-chip
        v-for="tn in type.name.split('/')"
        :key="tn"
        :type="tn"
      ></type-chip>
    </va-card-title>
    <va-card-content>
      <va-divider>
        <span class="px-2">Damage from other types</span>
      </va-divider>
      <p>Score:</p>
      {{ type.damage_from_score }}
      <p>Weaknesses:</p>
      <type-chip
        v-for="w in type.weaknesses"
        :key="w"
        :type="w"
        size="small"
      ></type-chip>
      <p>Resistances:</p>
      <type-chip
        v-for="r in type.resistances"
        :key="r"
        :type="r"
        size="small"
      ></type-chip>
      <va-divider>
        <span class="px-2">Damage to other types</span>
      </va-divider>
      <p>Score:</p>
      {{ type.damage_to_score }}
      <p>Coverages:</p>
      <type-chip
        v-for="c in type.coverages"
        :key="c"
        :type="c"
        size="small"
      ></type-chip>
    </va-card-content>
    <va-card-actions>
      <va-select
        v-model="selectedPokemon"
        :options="type.pokemon"
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

export default {
  props: {
    type: Object,
    modelValue: Object,
  },
  emits: ["update:modelValue"],
  components: {
    TypeChip,
  },
  computed: {
    selectedPokemon: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>