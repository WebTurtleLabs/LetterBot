<template>
  <v-app theme="myThemeLight">
    <div id="preroll"></div>
    <!--<v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item title="Generate" @click="(drawer = false) || $goTo('generate')"></v-list-item>
        <v-list-item title="About" @click="(drawer = false) || $goTo('about')"></v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <!-- ce na serverju se vedno utripa: class="hidden-md-and-up" -->
    <!-- <v-app-bar class="hidden-md-and-up" absolute flat color="transparent">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>LetterBot</v-app-bar-title>
    </v-app-bar> -->

    <v-main class="pt-0">
      <slot/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import {useCurrentStateStore} from "../stores/currentState";
import {storeToRefs} from "pinia";
const { smAndDown } = useDisplay();
const drawer = ref(null)

const {loading, rewardGranted, adBlocking} = storeToRefs(useCurrentStateStore())

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
  aipScript.src = "//api.adinplay.com/libs/aiptag/pub/WBT/webturtlelabs.com/tag.min.js"
  document.head.appendChild(aipScript)

  // Init video player
  window.aiptag.cmd.player.push(function() {
    window.aiptag.adplayer = new window.aipPlayer({
      AIP_REWARDEDCOMPLETE: function (evt)  {
        //evt can be: timeout, empty or closed
        console.log("Rewarded Ad Completed: " + evt);
      },
      AIP_REWARDEDGRANTED: async function () {
        console.log("Reward Granted");
        rewardGranted.value= true
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

  adBlockCheck()
});

function adBlockCheck() {
  setTimeout(function() {
    let testAd = document.createElement("div");
    testAd.innerHTML = "&nbsp;";
    testAd.className = "adsbygoogle";
    document.body.appendChild(testAd);
    const testAdStyle = getComputedStyle(testAd);

    if (testAdStyle.display !== 'none') {
      adBlocking.value = false
      console.log("adblocking enabled")
    }
  },1000)
}

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