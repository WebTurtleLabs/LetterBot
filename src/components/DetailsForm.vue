<template>
  <v-card style="overflow: visible; z-index: 1">
    <v-form class="pa-4 text-center" ref="form" v-model="valid" lazy-validation style="position: relative">
      <v-text-field
          v-model="name"
          variant="outlined"
          :rules="nameRules"
          label="Full Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          variant="outlined"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-select
          v-model="select"
          variant="outlined"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
      ></v-select>
    </v-form>
    <v-btn
        class="half-over-button"
        rounded="pill"
        append-icon="mdi-arrow-down"
        color="primary"
        size="x-large"
        @click="validate"
        :loading="loading"
    >Generate</v-btn>
  </v-card>

</template>

<script setup>

import {useCurrentStateStore} from "../stores/currentState";
import {storeToRefs} from "pinia";

const {loading, generated} = storeToRefs(useCurrentStateStore())

function validate() {
  useCurrentStateStore().generate("Lan")
}
</script>

<style scoped>
</style>