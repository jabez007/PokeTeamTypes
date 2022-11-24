<template>
  <va-button icon="add" round @click="showModal = !showModal" />
  <va-modal background-color="_dark" v-model="showModal" @ok="handleSubmit">
    <template #content="{ ok }">
      <va-form
        tag="form"
        ref="pokemonStats"
        @submit.prevent="ok"
      >
        <va-card color="_dark">
          <va-card-title class="justify--space-evenly">
            <va-input label="Name" v-model="name" :rules="[(v) => (v && v.trim().length > 0) || 'Field is required']" :tabindex="1" required />
          </va-card-title>
          <va-card-content>
            <div class="row justify--space-evenly">
              <div class="flex md3">
                <va-input
                  class="item"
                  label="HP"
                  v-model="hp"
                  :rules="rules"
                  :tabindex="2"
                  type="number"
                  min="0"
                  step="1"
                />
              </div>
            </div>
            <div class="row justify--space-evenly">
              <div class="flex md3">
                <va-input
                  class="item"
                  label="Sp. Attack"
                  v-model="spAttack"
                  :rules="rules"
                  :tabindex="5"
                  type="number"
                  min="0"
                  step="1"
                />
              </div>
              <div class="flex md3">
                <va-input
                  class="item"
                  label="Attack"
                  v-model="attack"
                  :rules="rules"
                  :tabindex="3"
                  type="number"
                  min="0"
                  step="1"
                />
              </div>
            </div>
            <div class="row justify--space-evenly">
              <div class="flex md3">
                <va-input
                  class="item"
                  label="Sp. Defense"
                  v-model="spDefense"
                  :rules="rules"
                  :tabindex="6"
                  type="number"
                  min="0"
                  step="1"
                />
              </div>
              <div class="flex md3">
                <va-input
                  class="item"
                  label="Defense"
                  v-model="defense"
                  :rules="rules"
                  :tabindex="4"
                  type="number"
                  min="0"
                  step="1"
                />
              </div>
            </div>
            <div class="row justify--space-evenly">
              <div class="flex md3">
                <va-input
                  class="item"
                  label="Speed"
                  v-model="speed"
                  :rules="rules"
                  :tabindex="7"
                  type="number"
                  min="0"
                  step="1"
                />
              </div>
            </div>
          </va-card-content>
          <va-card-actions>
            <va-button type="submit" @click="$refs.pokemonStats.validate()" :tabindex="8">Submit</va-button>
          </va-card-actions>
        </va-card>
      </va-form>
    </template>
  </va-modal>
</template>

<script>
export default {
  data: () => ({
    showModal: false,
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    spAttack: 0,
    spDefense: 0,
    speed: 0,
    rules: [
        (v) => Number.isInteger(parseFloat(v)) || "Only Integer Values",
        (v) => v > 0 || "Only positive values"
    ],
  }),
  methods: {
    handleSubmit() {
      alert(` Form Submit `);
    },
  },
};
</script>