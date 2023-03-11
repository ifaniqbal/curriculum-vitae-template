<script setup>
import {paramCase} from 'change-case';
const props = defineProps(['label', 'modelValue', 'initial'])
const emit = defineEmits(['update:modelValue'])
const previewImage = ($event) => {
  let reader = new FileReader();
  reader.onload = function() {
    emit('update:modelValue', reader.result)
  }
  reader.readAsDataURL($event.target.files[0])
}
</script>

<template>
  <div>
    <div class="flex flex-row">
      <label
        :for="paramCase(props.label)"
        class="block text-sm font-medium leading-6 text-gray-900"
      >{{ props.label }}</label>
      <slot name="extra" />
    </div>

    <div class="mt-2 flex items-center">
      <div>
        <img
          v-if="props.modelValue === ''"
          :src="props.initial"
          class="w-44 ring-1 ring-gray-300 ring-offset-1 mr-2"
        >
        <img
          v-else
          :src="props.modelValue"
          class="w-44 ring-1 ring-gray-300 ring-offset-1 mr-2"
        >
      </div>
      <input
        :id="paramCase(props.label)"
        type="file"
        class="ml-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        @input="previewImage($event)"
      >
    </div>
  </div>
</template>
