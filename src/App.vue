<template>
  <div class="flex flex-col h-screen bg-slate-900">
    <!-- Header -->
    <header class="border-b border-slate-700 px-6 py-4">
      <h1 class="text-white font-semibold text-lg">🧠 Kerloper RAG</h1>
      <p class="text-slate-400 text-sm">Financial Knowledge Assistant</p>
    </header>

    <!-- Message List -->
    <div class="flex-1 overflow-y-auto px-4 py-6">
      <div class="max-w-3xl mx-auto w-full">
        <MessageList />
      </div>
    </div>

    <!-- Chat Box -->
    <div class="sticky bottom-0 bg-slate-900 border-t border-slate-700 px-4 py-4">
      <div class="max-w-3xl mx-auto w-full">
        <ChatBox />
      </div>
    </div>
  </div>
</template>

<script setup>
import MessageList from './components/MessageList.vue'
import ChatBox from './components/ChatBox.vue'
</script>
