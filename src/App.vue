<script setup>
import EditPage from './pages/EditPage.vue';
import CurriculumVitae from './pages/CurriculumVitae.vue';
import FlexCol from './components/FlexCol.vue';
import NavigationSection from './pages/NavigationSection.vue';
</script>

<template>
  <FlexCol>
    <NavigationSection class="border-b" />
    <EditPage />
    <CurriculumVitae />
    <NavigationSection class="border-t" />
  </FlexCol>
</template>
