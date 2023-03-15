<script setup>
import {XMarkIcon} from '@heroicons/vue/20/solid';
</script>

<template>
  <button
    type="button"
    class="disabled:bg-opacity-50 disabled:grayscale rounded-full bg-white p-1 text-red-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-50"
  >
    <XMarkIcon
      class="h-5 w-5"
      aria-hidden="true"
    />
  </button>
</template>
