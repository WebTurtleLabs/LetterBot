<template>
  <div class="text-md-h4 text-h6 text-white font-weight-regular mt-10">{{ letter }}</div>
</template>

<script setup>
import {useCurrentStateStore} from "../stores/currentState";
import {storeToRefs} from "pinia";

const {letter} = storeToRefs(useCurrentStateStore())

</script>

<style scoped>

</style>