<template>
  <div class="flex flex-col gap-4 bg-slate-900 rounded-lg p-4">
    <!-- Error message -->
    <div v-if="hasError" class="bg-red-900 border border-red-700 text-red-400 text-sm px-3 py-2 rounded">
      {{ errorMessage }}
    </div>

    <!-- Textarea input -->
    <textarea
      v-model="question"
      :disabled="isLoading"
      placeholder="Ask a question..."
      maxlength="500"
      rows="2"
      class="bg-slate-800 text-slate-100 border border-slate-700 rounded-xl px-3 py-2 resize-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      @keydown.enter.exact="submitQuestion"
    />

    <!-- Character count -->
    <div class="text-xs text-slate-500 text-right">
      {{ question.length }}/500
    </div>

    <!-- Send button -->
    <button
      @click="submitQuestion"
      :disabled="isLoading || question.trim() === ''"
      :class="[
        'bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded-lg transition-colors',
        isLoading && 'flex items-center justify-center gap-2'
      ]"
    >
      <span v-if="isLoading" class="inline-block w-4 h-4 border-2 border-slate-300 border-t-indigo-300 rounded-full animate-spin"></span>
      {{ isLoading ? 'Asking...' : 'Ask' }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

const store = useStore()
const question = ref('')
const isLoading = computed(() => store.getters.isLoading)
const hasError = computed(() => store.getters.hasError)
const errorMessage = computed(() => store.getters.errorMessage)

async function submitQuestion() {
  const trimmedQuestion = question.value.trim()
  
  if (!trimmedQuestion) {
    return
  }

  await store.dispatch('sendQuestion', trimmedQuestion)
  question.value = ''
}
</script>
