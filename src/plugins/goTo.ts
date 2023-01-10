import {decimal} from "vscode-languageserver-types";

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            goTo: (div: string) => {
                console.log(div)
                const el = document.querySelector(`#${div}`)
                if (el !== null) {
                    el.scrollIntoView({behavior: "smooth"})
                }
            }
        }
    }
})