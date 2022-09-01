<template>
  <va-avatar :color="type" :src="imgSrc" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'TypeChip',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require(`../assets/${this.type}.png`);
    },
  },
};
</script>

<style scoped>
</style>
