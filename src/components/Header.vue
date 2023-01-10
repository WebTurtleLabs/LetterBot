<template>
  <div style="height:100vh; position:relative;">
    <v-container style="height:100%">
      <v-row style="height:100%;">
        <v-col cols="12" align-self="center" class="v-col-md-8">
          <div class="text-h2 text-sm-h1 text-over-svg">Motivation Letter Generator</div>
          <v-btn class="my-4 text-over-svg" size="x-large" rounded="pill" color="primary" @click="$goTo('generate')">Begin</v-btn>
        </v-col>
        <v-col cols="12" align-self="center" class="v-col-md-4">
          <v-img :cover="!mdAndUp" :class="mdAndUp ? 'hero-banner-image': 'hero-banner-image-mobile' " src="motivation_banner.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay();
</script>

<style scoped>
.hero-banner-image {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  aspect-ratio: 507/477;
}

.hero-banner-image-mobile {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 70%;
  aspect-ratio: 507/477;
}

</style>