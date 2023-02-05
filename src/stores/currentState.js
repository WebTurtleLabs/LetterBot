import {defineStore} from 'pinia'
import {useFetch} from "nuxt/app";

export const useCurrentStateStore = defineStore('currentStateStore', {
    state: () => ({
        loading: false,
        generated: false,
        rewardGranted: false,
        form: {
            organization: "",
            currentPosition: "",
            personalityTraits: ""
        },
        letter: "",
        adBlocking: false
    }),
    actions: {
        async generate() {
            this.loading = true
            this.generated = false
            this.rewardGranted = false
            const {data, error} = await useFetch('/api/generate',{
                method: 'POST',
                body:{
                    form: this.form
                }
            })
            if (error.value){
                this.letter = "An error occured while generating your motivation letter. Please try again."
            }
            else {
                this.letter = data.value.letter
            }
            this.loading = false
            this.generated = true
        },
    }
})
