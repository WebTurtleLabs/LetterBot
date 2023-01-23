import {defineStore} from 'pinia'
import {useFetch} from "nuxt/app";

export const useCurrentStateStore = defineStore('currentStateStore', {
    state: () => ({
        loading: false,
        generated: false,
        form: {
            organization: "",
            currentPosition: "",
            personalityTraits: ""
        },
        letter: ""
    }),
    actions: {
        async generate() {
            this.loading = true
            this.generated = false
            const {data} = await useFetch('/api/generate',{
                method: 'POST',
                body:{
                    form: this.form
                }
            })
            this.letter = data.value.letter
            this.loading = false
            this.generated = true
        },
    }
})
