<template>
  <div class="info-item">
    <span class="info-icon">
      <component :is="icon" />
    </span>
    <span class="info-text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: [Object, Function],
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #828282;
}
.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  min-height: 18px;
}
.info-text {
  color: #828282;
}
</style>
