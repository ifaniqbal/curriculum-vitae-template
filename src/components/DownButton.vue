<script setup>
import {ArrowDownIcon} from '@heroicons/vue/20/solid';
</script>

<template>
  <button
    type="button"
    class="disabled:bg-opacity-50 disabled:grayscale rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    <ArrowDownIcon
      class="h-5 w-5"
      aria-hidden="true"
    />
  </button>
</template>
