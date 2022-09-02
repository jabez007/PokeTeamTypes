<template>
  <va-select
    :label="label"
    v-model="selectedTypes"
    :options="typeOptions"
    multiple
    searchable
    hide-selected
    clearable
  >
    <template #content="{ value }">
      <type-chip v-for="t in value" :key="t" :type="t" size="1rem" />
    </template>
  </va-select>
</template>

<script>
import { getBaseTypes } from "../lib/pokedex.js";
import TypeChip from "./TypeChip.vue";

export default {
  props: {
    label: String,
    modelValue: Object,
  },
  emits: ["update:modelValue"],
  components: {
    TypeChip,
  },
  data: () => ({
    typeOptions: [],
  }),
  computed: {
    selectedTypes: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  created() {
    const self = this;
    getBaseTypes().then((data) => {
      self.typeOptions.splice(
        0,
        self.typeOptions.length,
        ...data.map((t) => t.name)
      );
    });
  },
};
</script>