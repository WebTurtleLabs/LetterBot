import VueGtag from 'vue-gtag'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: useRuntimeConfig().public.gaMeasurementId
        },
        bootstrap: false,
    }, nuxtApp.$router)
})