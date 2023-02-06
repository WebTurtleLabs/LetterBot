<template>
  <v-footer class="d-flex flex-column pa-0">
    <div class="px-4 py-2 bg-grey-darken-4 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>WebTurtleLabs</strong>
    </div>
    <div class="px-4 py-2 bg-grey-darken-4 text-center w-100">
      <NuxtLink style="text-decoration:none; color: white" to="privacy-policy">
        <v-btn variant="text">Privacy Policy</v-btn>
      </NuxtLink>
    </div>
  </v-footer>
</template>

<script>
</script>

<style scoped>

</style>