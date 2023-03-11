<script setup>
import {ref} from 'vue';
import EditPage from './pages/EditPage.vue';
import CurriculumVitae from './pages/CurriculumVitae.vue';
import FlexRow from './components/FlexRow.vue';
import FlexCol from './components/FlexCol.vue';
import { TransitionRoot } from '@headlessui/vue'
import PrimaryButton from './components/PrimaryButton.vue';
import NavBar from './components/NavBar.vue';
import SecondaryButton from './components/SecondaryButton.vue';
import {useCvStore} from './stores/cv';

const editMode = ref(false)
const cvStore = useCvStore()
</script>

<template>
  <FlexCol>
    <NavBar class="border-b">
      <FlexRow>
        <PrimaryButton
          v-if="!editMode"
          @click="editMode=true"
        >
          Edit
        </PrimaryButton>
        <PrimaryButton
          v-else
          @click="editMode=false"
        >
          Preview
        </PrimaryButton>
        <SecondaryButton
          v-if="editMode"
          @click="cvStore.empty()"
        >
          Clear
        </SecondaryButton>
      </FlexRow>
    </NavBar>
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
    <NavBar class="border-t">
      <FlexRow>
        <PrimaryButton
          v-if="!editMode"
          @click="editMode=true"
        >
          Edit
        </PrimaryButton>
        <PrimaryButton
          v-else
          @click="editMode=false"
        >
          Preview
        </PrimaryButton>
        <SecondaryButton
          v-if="editMode"
          @click="cvStore.empty()"
        >
          Clear
        </SecondaryButton>
      </FlexRow>
    </NavBar>
  </FlexCol>
</template>
