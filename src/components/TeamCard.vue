<template>
  <va-card color="_dark" gradient>
    <va-card-title class="justify--space-evenly">
      <type-chip v-for="tn in types" :key="tn" :type="tn" />
    </va-card-title>
    <va-divider>
      <span class="px-2"
        >Total Stats Score: {{ (team.score || 0).toFixed(4) }}</span
      >
    </va-divider>
    <va-card-content class="row justify--space-evenly">
      <va-card color="_dark" v-for="p in team.pokemon" :key="p.name">
        <va-card-title class="justify--space-evenly">
          <type-chip v-for="pt in p.types" :key="pt" :type="pt" size="small" />
        </va-card-title>
        <va-card-content class="row justify--center">
          <va-avatar color="background" :src="p.sprite" />
        </va-card-content>
      </va-card>
    </va-card-content>
  </va-card>
</template>

<script>
import TypeChip from "./TypeChip.vue";

export default {
  props: {
    team: Object,
  },
  components: {
    TypeChip,
  },
  computed: {
    types: {
      get() {
        const typeNames = (this.team.types || []).flatMap((t) => t.split("/"));
        typeNames.sort();
        return new Set(typeNames);
      },
    },
  },
};
</script>