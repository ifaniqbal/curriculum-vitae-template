<script setup>
import EditPage from './pages/EditPage.vue';
import data from './data.js'
import {reactive, ref} from 'vue';
import CurriculumVitae from './pages/CurriculumVitae.vue';

const profile = reactive({
  name: data.name,
  photo: data.photo,
  address: data.address,
  phone: data.phone,
  email: data.email,
})
const sections = ref(data.sections)
const workExperiences = ref(data.workExperiences)
</script>

<template>
  <div>
    <EditPage class="hidden" />
    <CurriculumVitae
      :profile="profile"
      :work-experiences="workExperiences"
      :sections="sections"
    />
  </div>
</template>
