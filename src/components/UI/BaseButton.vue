<template>
  <button :type="type" class="base-button" :disabled="disabled">
    <span v-if="icon" class="button-icon">
      <component :is="icon" />
    </span>
    <span class="button-text">
      {{ label || $slots.default?.() }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  icon: {
    type: [Object, Function],
    default: null,
  },
  disabled: Boolean,
  label: String,
})
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-white);
  border: none;
  border-radius: 6px;
  padding: 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    opacity 0.2s;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #e91e63 1.5%, #d81b60 94.83%);
}
.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.button-icon {
  display: flex;
  align-items: center;
}
.button-text {
  display: flex;
  align-items: center;
}
</style>
