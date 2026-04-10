<template>
  <div class="card" :style="{ animationDelay: `${delay}s` }" style="animation: slideUp 0.6s ease-out forwards; opacity: 0;">
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
      <div>
        <h3 class="text-2xl font-bold text-primary-900">{{ job.position }}</h3>
        <p class="text-accent-600 font-semibold text-lg">{{ job.company }}</p>
        <p class="text-gray-600 text-sm mt-1">{{ job.location }}</p>
      </div>
      <div class="md:text-right">
        <span class="inline-block px-4 py-2 bg-accent-50 text-accent-600 rounded-full font-semibold text-sm whitespace-nowrap">
          {{ job.period }}
        </span>
      </div>
    </div>
    
    <ul class="space-y-2">
      <li v-for="(highlight, index) in job.highlights" :key="index" class="flex gap-3 text-gray-700">
        <span class="text-accent-500 font-bold text-lg flex-shrink-0 -mt-0.5">→</span>
        <span>{{ highlight }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>
