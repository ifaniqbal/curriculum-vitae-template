<script setup>
import { defineProps, toRefs } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/solid'

const props = defineProps({
  items: Array,
})
</script>
<template>
  <div
    v-for="item in props.items"
    class="mt-5 flex flex-col text-sm"
    style="page-break-inside: avoid;">
    <div class="flex flex-row space-x-6">
      <div class="w-24 flex-shrink-0 text-right tabular-nums">
        <template v-if="item.from">
          {{ item.from }} - {{ item.to }}
        </template>
        <template v-if="!item.from && item.to">
          {{ item.to }}
        </template>
      </div>
      <div class="flex flex-col leading-relaxed">
        <div class="mb-1">
          <span class="font-bold">{{ item.name }}</span>
          <template v-if="item.description">
            <span>, </span>
            <span class="inline-block">{{ item.description }}</span>
          </template>
        </div>
        <template v-if="item.details">
          <div
            v-for="detail in item.details"
            class="flex flex-row items-start mt-1">
            <ChevronRightIcon class="-ml-1 mt-0.5 mr-1 w-4 h-4 flex-shrink-0 text-blue-600" />
            <div>
              <a
                v-if="detail.startsWith('http')"
                :href="detail"
                class="text-blue-500 underline">{{ detail }}</a>
              <template v-else>
                {{ detail }}
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>