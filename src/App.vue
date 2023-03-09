<script setup>
import SectionTitle from './components/SectionTitle.vue'
import ExperienceItems from './components/ExperienceItems.vue'
import WorkExperiences from "./components/WorkExperiences.vue";
import data from './data.js'

const name = data.name
const photo = data.photo
const address = data.address
const phone = data.phone
const email = data.email
const sections = data.sections
const workExperiences = data.workExperiences

</script>

<template>
  <div class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 text-gray-900">
    <div class="flex justify-between items-center w-full">
      <div>
        <div class="text-6xl tracking-wide font-extrabold">
          {{ name }}
        </div>
        <div class="mt-3 tracking-wide text-gray-700">
          <div>{{ address }}</div>
          <div><a :href="'mailto:'+email">{{ email }}</a></div>
          <div><a :href="'https://wa.me/'+phone">{{ phone }}</a></div>
        </div>
      </div>
      <img
        :src="photo"
        class="w-44 ring-1 ring-gray-300 ring-offset-1 mr-2">
    </div>
    <div>
      <SectionTitle>Work Experiences</SectionTitle>
      <WorkExperiences :items="workExperiences" />
    </div>
    <div v-for="section in sections">
      <SectionTitle>{{ section.name }}</SectionTitle>
      <ExperienceItems :items="section.data" />
    </div>
  </div>
</template>
