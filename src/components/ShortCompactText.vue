<script setup>
import {paramCase} from 'change-case';
const props = defineProps(['label', 'modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative">
    <div class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
      <label
        :for="paramCase(props.label)"
        class=""
      >{{ props.label }}</label>
      <slot name="extra" />
    </div>
    <input
      :id="paramCase(props.label)"
      type="text"
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>
