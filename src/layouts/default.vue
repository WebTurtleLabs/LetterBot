<template>
  <v-app theme="myThemeLight">
    <div id="preroll"></div>
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
import {useHead} from "nuxt/app";
const { smAndDown } = useDisplay();
const drawer = ref(null)

onMounted(() => {

  // Initialize global aiptag.cmd function
  window.aiptag = window.aiptag || {};
  window.aiptag.cmd = window.aiptag.cmd || [];
  window.aiptag.cmd.display = window.aiptag.cmd.display || [];
  window.aiptag.cmd.player = window.aiptag.cmd.player || [];
  window.aiptag.cmp = { show: true, position: 'centered', button: true, buttonText: 'Privacy settings', buttonPosition: 'bottom-left'};

  // Download the AdinPlay Ads JavaScript library
  let aipScript = document.createElement('script');
  aipScript.async = true
  aipScript.src = process.env.AIP_ID
  //aipScript.addEventListener("load", () => { adsLoaded() });
  document.head.appendChild(aipScript)

  // Init video player
  window.aiptag.cmd.player.push(function() {
    window.aiptag.adplayer = new window.aipPlayer({
      AIP_REWARDEDCOMPLETE: function (evt)  {
        //evt can be: timeout, empty or closed
        console.log("Rewarded Ad Completed: " + evt);
      },
      AIP_REWARDEDGRANTED: function ()  {
        console.log("Reward Granted");
      },
      AD_WIDTH: 960,
      AD_HEIGHT: 540,
      AD_DISPLAY: 'default', //default, fullscreen, center, fill
      LOADING_TEXT: 'loading advertisement',
      PREROLL_ELEM: function(){return document.getElementById('preroll')},
      AIP_COMPLETE: function ()  {
        console.log("Ad Completed, load your content here");
      }
    });
  });

  /*function adsLoaded(){
    //check if the adslib is loaded correctly or blocked by adblockers etc.
    if (typeof window.aiptag.adplayer !== 'undefined') {
      window.aiptag.cmd.player.push(function() { window.aiptag.adplayer.startRewardedAd(); });
    } else {
      //Adlib didnt load this could be due to an adblocker, timeout etc.
      //Please add your script here that starts the content, this usually is the same script as added in AIP_REWARDEDCOMPLETE.
      console.log("Rewarded Ad Could not be loaded, load your content here");
    }
  }*/
});

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