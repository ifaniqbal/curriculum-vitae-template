<script setup>
import SectionTitle from './components/SectionTitle.vue'
import ExperienceItems from './components/ExperienceItems.vue'
import data from './data.js'

const name = data.name
const photo = data.photo
const address = data.address
const phone = data.phone
const email = data.email
const sections = data.sections
const educations = data.educations
const workExperiences = data.workExperiences
const softwareProjects = data.softwareProjects
const computerSkills = data.computerSkills
const languages = data.languages
const researchInterest = data.researchInterest

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
        class="w-44 ring-2 ring-gray-500 ring-offset-4 mr-2"
        :src="photo">
    </div>
    <div v-for="section in sections">
      <SectionTitle>{{ section.name }}</SectionTitle>
      <ExperienceItems :items="section.data" />
    </div>
  </div>
</template>