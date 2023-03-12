<script setup>
import NavBar from '../components/NavBar.vue';
import FlexRow from '../components/FlexRow.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import {useCvStore} from '../stores/cv';

const cvStore = useCvStore()
</script>

<template>
  <NavBar>
    <FlexRow>
      <PrimaryButton
        v-if="!cvStore.editMode"
        @click="cvStore.editMode=true"
      >
        Edit
      </PrimaryButton>
      <PrimaryButton
        v-else
        @click="cvStore.editMode=false"
      >
        Preview
      </PrimaryButton>
      <SecondaryButton
        v-if="cvStore.editMode"
        @click="cvStore.empty()"
      >
        Clear
      </SecondaryButton>
    </FlexRow>
  </NavBar>
</template>
