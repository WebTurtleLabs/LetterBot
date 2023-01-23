<template>
  <v-app theme="myThemeLight">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item title="Generate" @click="(drawer = false) || $goTo('generate')"></v-list-item>
        <v-list-item title="About" @click="(drawer = false) || $goTo('about')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ce na serverju se vedno utripa: class="hidden-md-and-up" -->
    <v-app-bar class="hidden-md-and-up" absolute flat color="transparent">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>LetterBot</v-app-bar-title>
    </v-app-bar>

    <v-main class="pt-0">
      <slot/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay();
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