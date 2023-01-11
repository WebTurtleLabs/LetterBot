<template>
  <v-col ref="section" cols="12" class="v-col-md-6 text-center animate__animated" align-self="start"
         style="visibility: hidden"
         v-intersect="{handler: onIntersect,options: {threshold: 0}}">
    <v-avatar class="colo" color="primary" size="100">
      <v-icon size="40">{{ icon }}</v-icon>
    </v-avatar>
    <div class="py-2 text-h4 text-center">{{ title }}</div>
    <div class="py-2 text-body-1 text-center">{{ description }}</div>
  </v-col>
</template>

<script setup>
import {ref} from 'vue'

const section = ref(null)
const props = defineProps({
  title: String,
  icon: String,
  description: String,
  animationDelay: Number
})

function onIntersect(isIntersecting, entries, observer) {
  if (isIntersecting) {
    setTimeout(()=>{
      entries[0].target.style.visibility="visible"
      entries[0].target.classList.add("animate__fadeInUp")
      console.log(true)
    },props.animationDelay || 0)

  }
  else {
    console.log(false)
  }

}
</script>

<style scoped>

</style>