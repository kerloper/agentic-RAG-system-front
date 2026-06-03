<template>
  <div class="flex flex-col h-full bg-slate-900 rounded-lg p-4">
    <!-- Message list -->
    <div class="flex-1 overflow-y-auto space-y-4 mb-4">
      <MessageBubble v-for="msg in messages" :key="msg.id" :message="msg" />

      <!-- Loading indicator -->
      <LoadingDots v-if="isLoading" />

      <!-- Placeholder when no messages -->
      <div v-if="messages.length === 0 && !isLoading" class="flex items-center justify-center h-full">
        <p class="text-slate-500 text-sm">Ask anything about Kerloper</p>
      </div>

      <!-- Auto-scroll anchor -->
      <div ref="bottomAnchor" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, watchEffect, nextTick, ref } from 'vue'
import MessageBubble from './MessageBubble.vue'
import LoadingDots from './LoadingDots.vue'

const store = useStore()
const bottomAnchor = ref(null)
const messages = computed(() => store.getters.allMessages)
const isLoading = computed(() => store.getters.isLoading)

// Auto-scroll to bottom when messages change or loading state changes
watchEffect(async () => {
  // Trigger when messages array or loading state updates
  messages.value
  isLoading.value
  await nextTick()
  if (bottomAnchor.value) {
    bottomAnchor.value.scrollIntoView({ behavior: 'smooth' })
  }
})
</script>
