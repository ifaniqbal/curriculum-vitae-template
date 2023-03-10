<script setup>
import {ChevronRightIcon} from '@heroicons/vue/24/solid'

const props = defineProps({
  items: Array,
})
</script>
<template>
  <div
    v-for="(item, i) in props.items"
    :key="i"
    class="mt-5 flex flex-col text-sm"
    style="page-break-inside: avoid;"
  >
    <div class="flex flex-col space-y-1">
      <div class="font-bold">
        {{ item.name }}
      </div>
      <div class="flex flex-row space-x-1">
        <span>{{ item.company }}</span>
        <span>·</span>
        <span>{{ item.employmentType }}</span>
      </div>
      <div class="flex flex-row space-x-1 text-gray-600">
        <span>{{ item.from }}</span>
        <span>-</span>
        <span>{{ item.to }}</span>
        <template v-if="item.duration">
          <span>·</span>
          <span>{{ item.duration }}</span>
        </template>
      </div>
      <div class="flex flex-col leading-relaxed">
        <template v-if="item.details">
          <div
            v-for="(detail, j) in item.details"
            :key="j"
            class="flex flex-row items-start mt-1"
          >
            <ChevronRightIcon class="-ml-1 mt-0.5 mr-1 w-4 h-4 flex-shrink-0 text-blue-600" />
            <div>
              <a
                v-if="detail.startsWith('http')"
                :href="detail"
                class="text-blue-500 underline"
              >{{ detail }}</a>
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
