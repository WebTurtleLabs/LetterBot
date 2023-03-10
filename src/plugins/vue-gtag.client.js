import VueGtag from 'vue-gtag'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: useRuntimeConfig().public.gaMeasurementId,
            params: {
                anonymize_ip: true
            }
        }
    }, nuxtApp.$router)
})