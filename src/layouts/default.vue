<template>
  <v-app theme="myThemeLight">
    <v-navigation-drawer v-model="drawer" temporary></v-navigation-drawer>

    <v-app-bar absolute flat color="transparent">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Motivation</v-app-bar-title>
      <div v-if="mdAndUp">
      <v-btn variant="plain" @click="$goTo('generate')">Generate</v-btn>
      <v-btn variant="plain" @click="$goTo('about')">About</v-btn>
      </div>
    </v-app-bar>

    <v-main class="pt-0">
      <slot/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay();
const drawer = ref(null)

</script>

<style>
.half-over-button{
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-over-svg{
  position:relative;
  z-index: 1;
}
</style>