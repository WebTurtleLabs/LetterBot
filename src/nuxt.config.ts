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
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/google-adsense',
    ],
    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css",
        "animate.css/animate.min.css"],
    build: {
        transpile: ["vuetify"],
    },
    'google-adsense': {
        id: process.env.CA_ID
    }

})