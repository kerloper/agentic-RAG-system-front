<template>
  <span class="inline-block bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">
    {{ source }}
  </span>
</template>

<script setup>
defineProps({
  source: {
    type: String,
    required: true
  }
})
</script>
