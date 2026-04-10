<template>
  <div class="card" :style="{ animationDelay: `${delay}s` }" style="animation: slideUp 0.6s ease-out forwards; opacity: 0;">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-3xl">{{ category.icon }}</span>
      <h3 class="text-xl font-bold text-primary-900">{{ category.name }}</h3>
    </div>
    <div class="flex flex-wrap gap-2">
      <span 
        v-for="skill in category.skills" 
        :key="skill"
        class="badge"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>
