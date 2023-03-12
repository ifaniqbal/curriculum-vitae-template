<script setup>
import ContainerComponent from '../components/ContainerComponent.vue'
import SectionTitle from '../components/SectionTitle.vue';
import WorkExperiences from '../components/WorkExperiences.vue';
import ExperienceItems from '../components/ExperienceItems.vue';
import {useCvStore} from '../stores/cv';

const cvStore = useCvStore()
</script>

<template>
  <ContainerComponent v-if="!cvStore.editMode">
    <div class="flex justify-between items-center w-full">
      <div>
        <div class="text-6xl tracking-wide font-extrabold">
          {{ cvStore.profile.name }}
        </div>
        <div class="mt-3 tracking-wide text-gray-700">
          <div>{{ cvStore.profile.address }}</div>
          <div><a :href="'mailto:'+cvStore.profile.email">{{ cvStore.profile.email }}</a></div>
          <div><a :href="'https://wa.me/'+cvStore.profile.phone">{{ cvStore.profile.phone }}</a></div>
        </div>
      </div>
      <img
        :src="cvStore.profile.preview ? cvStore.profile.preview : cvStore.profile.photo"
        class="w-44 ring-1 ring-gray-300 ring-offset-1 mr-2"
      >
    </div>
    <div>
      <SectionTitle>Work Experiences</SectionTitle>
      <WorkExperiences :items="cvStore.workExperiences" />
    </div>
    <div
      v-for="(section, index) in cvStore.sections"
      :key="index"
    >
      <SectionTitle>{{ section.name }}</SectionTitle>
      <ExperienceItems :items="section.data" />
    </div>
  </ContainerComponent>
</template>

