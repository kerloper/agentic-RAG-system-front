<template>
  <div :class="['flex mb-4 animate-fadeIn', message.role === 'user' ? 'justify-end' : 'justify-start']">
    <div
      :class="[
        'rounded-2xl px-4 py-3 max-w-[75%]',
        message.role === 'user'
          ? 'bg-indigo-600 text-white rounded-tr-sm'
          : 'bg-slate-800 text-slate-100 rounded-tl-sm'
      ]"
    >
      <p class="text-sm leading-relaxed">{{ message.text }}</p>

      <!-- Sources for assistant messages -->
      <div v-if="message.role === 'assistant' && message.sources && message.sources.length > 0" class="mt-3">
        <p class="text-xs text-slate-400 mb-2">Sources:</p>
        <div class="flex flex-wrap gap-2">
          <SourceBadge v-for="source in message.sources" :key="source" :source="source" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SourceBadge from './SourceBadge.vue'

defineProps({
  message: {
    type: Object,
    required: true,
    validator: (msg) => msg.role && msg.text !== undefined
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease;
}
</style>
