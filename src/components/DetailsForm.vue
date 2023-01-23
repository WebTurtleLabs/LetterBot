<template>
  <v-card style="overflow: visible; z-index: 1">
    <v-form class="pa-4 pb-8 text-center" ref="inputForm" v-model="valid" lazy-validation style="position: relative">
      <v-text-field
          v-model="organization"
          label="Name of the organization you are applying to"
          hint="Google, Tesla, Harvard, ..."
          variant="outlined"
          required
          :rules="organizationRules"
      ></v-text-field>

      <v-text-field
          v-model="currentPosition"
          label="Current position/education"
          hint="student, developer, secretary, ..."
          variant="outlined"
          require
          :rules="currentPositionRules"
      ></v-text-field>

      <v-autocomplete
          v-model="personalityTraits"
          chips
          multiple
          clearable
          closable-chips
          label="Personality traits"
          :items="personalityTraitsItems"
          variant="outlined"
          required
          :rules="personalityTraitsRules"
      ></v-autocomplete>
    </v-form>
    <v-btn
        class="half-over-button"
        rounded="pill"
        append-icon="mdi-arrow-down"
        color="primary"
        size="x-large"
        @click="validate"
        :loading="loading"
    >Generate
    </v-btn>
  </v-card>

</template>

<script setup>

import {useCurrentStateStore} from "../stores/currentState";
import {storeToRefs} from "pinia";
import {ref} from "vue";

const inputForm = ref(null);
const organization = ref("");
const currentPosition = ref("");
const personalityTraits = ref([]);
const valid = ref(true)
const personalityTraitsItems = ref([
  "Adaptable",
  "Adventurous",
  "Ambitious",
  "Approachable",
  "Assertive",
  "Caring",
  "Charismatic",
  "Compassionate",
  "Confident",
  "Considerate",
  "Cooperative",
  "Courageous",
  "Creative",
  "Curious",
  "Determined",
  "Disciplined",
  "Empathetic",
  "Encouraging",
  "Energetic",
  "Enthusiastic",
  "Ethical",
  "Fair",
  "Friendly",
  "Generous",
  "Grateful",
  "Hardworking",
  "Helpful",
  "Honest",
  "Humble",
  "Independent",
  "Innovative",
  "Insightful",
  "Intelligent",
  "Kind",
  "Leadership",
  "Logical",
  "Loyal",
  "Mature",
  "Motivated",
  "Open-minded",
  "Optimistic",
  "Patient",
  "Patriotic",
  "Peaceful",
  "Persevering",
  "Persistent",
  "Polite",
  "Positive",
  "Practical",
  "Proactive",
  "Resourceful",
  "Responsible",
  "Respectful",
  "Self-aware",
  "Selfless",
  "Sensitive",
  "Sociable",
  "Supportive",
  "Thorough",
  "Tolerant",
  "Trustworthy"
])
const {loading, form} = storeToRefs(useCurrentStateStore())

const organizationRules = [
  v => !!v || "Required Field",
  v => !!v && v.length <= 32 || "Organization name too long",
]

const currentPositionRules = [
  v => !!v || "Required Field",
  v => !!v && v.length <= 32 || "Current position/education too long",
]

const personalityTraitsRules = [
  v => (v && v.length > 0) || "Required Field",
  v => (v && v.length <= 5) || 'You can select up to 5 personality traits',
]

async function validate () {
  const { valid } = await inputForm.value.validate()
  if (valid){
    form.value.organization = organization.value
    form.value.currentPosition = currentPosition.value
    form.value.personalityTraits = personalityTraits.value
    await useCurrentStateStore().generate()
  }
}
</script>

<style scoped>
</style>