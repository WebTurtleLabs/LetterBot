// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Motivation Generator",
            meta: [
                {name: "description", content: "Generate your motivation letter with the help of AI."}
            ]
        }
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '123',
        // Keys within public, will be also exposed to the client-side
        public: {
            gaMeasurementId: process.env.GA_MEASUREMENT_ID
        }
    },
    modules: [
        '@pinia/nuxt',
    ],
    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css",
        "animate.css/animate.min.css"],
    build: {
        transpile: ["vuetify"],
    },

})