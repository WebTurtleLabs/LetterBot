<template>
  <v-snackbar v-model="adBlocking" timeout="-1">
    To maintain a free service, ads are utilized. We kindly ask you to disable the adblocker and refresh the page.
  </v-snackbar>
</template>

<script setup>
import {useCurrentStateStore} from "../stores/currentState";
import {storeToRefs} from "pinia";

const {adBlocking} = storeToRefs(useCurrentStateStore())
</script>

<style scoped>

</style>