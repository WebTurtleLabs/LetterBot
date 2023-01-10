import {defineStore} from 'pinia'

export const useCurrentStateStore = defineStore('currentStateStore', {
    state: () => ({
        loading: false,
        generated: false,
        form: {
            name : ""
        },
        letter: ""
    }),
    actions: {
        generate(name) {
            this.loading = true
            this.generated = false
            this.form.name = name
            setTimeout(() => {
                this.letter = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea. Neque viverra justo nec ultrices. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Dui id ornare arcu odio ut sem nulla pharetra diam. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Eget lorem dolor sed viverra ipsum nunc aliquet. Habitasse platea dictumst quisque sagittis. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Aliquam id diam maecenas ultricies mi eget. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Mauris sit amet massa vitae tortor condimentum lacinia quis vel."
                this.loading = false
                this.generated = true
            }, 2000)
        },
    }
})
