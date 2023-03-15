<script setup>
import NavBar from '../components/NavBar.vue';
import FlexRow from '../components/FlexRow.vue';
import FlexCol from '../components/FlexCol.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import {useCvStore} from '../stores/cv';
import {ref} from 'vue';
import {paramCase} from 'change-case';

const cvStore = useCvStore()

const formatDate = (date) => {
  let year = date.getFullYear()
  let month = String(date.getMonth() + 1).padStart(2, '0')
  let day = String(date.getDate()).padStart(2, '0')
  let hours = String(date.getHours()).padStart(2, '0')
  let minutes = String(date.getMinutes()).padStart(2, '0')
  let seconds = String(date.getSeconds()).padStart(2, '0')
  return `${year}${month}${day}${hours}${minutes}${seconds}`
}

const exportData = () => {
  const {profile, sections, workExperiences} = cvStore
  const data = {profile, workExperiences, sections}
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], {type:'application/json'})
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  const name = paramCase(profile.name)
  const timestamp = formatDate(new Date())
  link.download = `curriculum-vitae-template-data_${name}_${timestamp}.json`
  document.body.appendChild(link)
  link.click()
  URL.revokeObjectURL(url)
}

const importFile = ref(null)
const chooseImportFile = () => {
  importFile.value.click()
}
const importData = (event) => {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onload = () => {
    if (typeof reader.result === 'string') {
      const data = JSON.parse(reader.result)
      cvStore.profile.name = data.profile.name
      cvStore.profile.preview = data.profile.preview
      cvStore.profile.address = data.profile.address
      cvStore.profile.phone = data.profile.phone
      cvStore.profile.email = data.profile.email
      cvStore.sections = data.sections
      cvStore.workExperiences = data.workExperiences
    }
  }
  reader.readAsText(file)
}
const print = () => {
  cvStore.editMode = false
  setTimeout(() => {
    window.print()
  }, 200);
}
</script>

<template>
  <NavBar>
    <FlexRow>
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
        <PrimaryButton
          v-if="!cvStore.editMode"
          @click="print()"
        >
          Print
        </PrimaryButton>
        <SecondaryButton
          v-if="cvStore.editMode"
          @click="cvStore.empty()"
        >
          Clear Form
        </SecondaryButton>
      </FlexRow>
      <FlexRow class="border-l pl-4">
        <SecondaryButton
          @click="exportData()"
        >
          Save JSON
        </SecondaryButton>
        <SecondaryButton
          @click="chooseImportFile()"
        >
          Load JSON
        </SecondaryButton>
        <input
          ref="importFile"
          type="file"
          class="hidden"
          @change="importData"
        >
      </FlexRow>
    </FlexRow>
  </NavBar>
</template>
