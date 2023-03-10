<script setup>
import {paramCase} from 'change-case';
const props = defineProps(['label', 'modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label
      :for="paramCase(props.label)"
      class="block text-sm font-medium leading-6 text-gray-900"
    >{{ props.label }}</label>
    <div class="mt-2">
      <textarea
        :id="paramCase(props.label)"
        rows="2"
        class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
