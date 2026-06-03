<template>
  <div class="flex justify-start mb-4">
    <div class="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
      <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
      <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce dot-delay-150"></div>
      <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce dot-delay-300"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dot-delay-150 {
  animation-delay: 150ms;
}

.dot-delay-300 {
  animation-delay: 300ms;
}
</style>

