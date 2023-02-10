export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            goTo: (div: string) => {
                const el = document.querySelector(`#${div}`)
                if (el !== null) {
                    el.scrollIntoView({behavior: "smooth"})
                }
            }
        }
    }
})