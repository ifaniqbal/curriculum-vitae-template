<script setup>
import {ref} from 'vue';
import EditPage from './pages/EditPage.vue';
import CurriculumVitae from './pages/CurriculumVitae.vue';
import FlexCol from './components/FlexCol.vue';
import {TransitionRoot} from '@headlessui/vue'
import NavigationSection from './pages/NavigationSection.vue';

const editMode = ref(false)
</script>

<template>
  <FlexCol>
    <NavigationSection class="border-b" />
    <TransitionRoot
      :show="editMode"
      enter="transition-opacity duration-75"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-150"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <EditPage />
    </TransitionRoot>
    <CurriculumVitae v-if="!editMode" />
    <NavigationSection class="border-t" />
  </FlexCol>
</template>
