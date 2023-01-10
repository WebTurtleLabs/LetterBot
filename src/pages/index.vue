<template>
  <Header/>

  <!-- Personal Details -->
  <v-container id="generate" style="position: relative; overflow:hidden;">
    <v-row class="py-8">
      <v-col cols="12" align-self="center" class="v-col-md-4">
        <div class="text-h2 text-center font-weight-regular text-over-svg">Tell us about yourself</div>
      </v-col>
      <v-col cols="12" align-self="center" class="v-col-md-8">
        <DetailsForm/>
      </v-col>
      <v-img class="blob" src="blob1.svg"></v-img>
    </v-row>
  </v-container>

  <!-- Motivation Letter Output -->
  <v-container v-if="generated" class="animate__animated animate__fadeInUp px-0" fluid
               style="background: #7E57C2; position: relative">
    <div class="custom-shape-divider-top-1672446038">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"></path>
      </svg>
    </div>
    <v-container id="letter">
      <v-row class="py-8">
        <v-col cols="12" align-self="center">
          <div class="text-h2 text-white text-center font-weight-regular mt-5">Collect your motivation letter</div>
          <MotivationLetterForm/>
        </v-col>
      </v-row>
    </v-container>
    <div class="custom-shape-divider-bottom-1672446660">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
      </svg>
    </div>
    <v-btn @click="navigator.clipboard.writeText(letter);" class="text-white half-over-button" size="x-large" icon="mdi-content-copy" color="orange"/>
  </v-container>

  <!-- About -->
  <v-container id="about">
    <v-row class="py-8">
      <v-col cols="12" align-self="center">
        <div class="text-h2 text-center font-weight-regular">About</div>
      </v-col>

      <AboutSection title="International Team" icon="mdi-account-multiple" description="This is description"/>
      <AboutSection title="Powered by AI" icon="mdi-brain" description="This is description" animation-delay="200"/>
      <v-col cols="12" class="v-col-md-6" align-self="center">
        <div class="text-h4 text-center"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import {useCurrentStateStore} from "../stores/currentState";
import {storeToRefs} from "pinia";

const {loading, generated, letter} = storeToRefs(useCurrentStateStore())
const { $goTo } = useNuxtApp()

watch(generated, ( newValue, oldValue ) => {
  if (!oldValue && newValue){
    setTimeout(()=>{
      $goTo("letter")
    },1000)
  }
})

</script>

<style scoped>

.blob {
  position: absolute;
  left: 5%;
  top: 0;
  bottom: 0;
  height: 100%;
  aspect-ratio: 1/1;
}

.custom-shape-divider-top-1672446038 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1672446038 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 99px;
}

.custom-shape-divider-top-1672446038 .shape-fill {
  fill: #FFFFFF;
}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-top-1672446038 svg {
    width: calc(100% + 1.3px);
    height: 58px;
  }
}

.custom-shape-divider-bottom-1672446660 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1672446660 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 62px;
}

.custom-shape-divider-bottom-1672446660 .shape-fill {
  fill: #FFFFFF;
}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-bottom-1672446660 svg {
    width: calc(100% + 1.3px);
    height: 58px;
  }
}

</style>