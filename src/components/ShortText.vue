<script setup>
import {paramCase} from 'change-case';
const props = defineProps(['label', 'modelValue'])
const emit = defineEmits(['update:modelValue'])
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

    <div class="mt-2">
      <input
        :id="paramCase(props.label)"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      >
    </div>
  </div>
</template>
