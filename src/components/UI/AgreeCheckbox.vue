<template>
  <label class="checkbox-root" :class="{ disabled, checked: modelValue }">
    <input
      type="checkbox"
      class="checkbox-input"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="checkbox-box">
      <svg v-if="modelValue" width="10" height="7" viewBox="0 0 10 7" fill="none">
        <image href="/src/assets/images/icons/Path.svg" width="10" height="7" />
      </svg>
    </span>
    <span class="checkbox-label">
      Accept our <a href="#" class="checkbox-link" @click.prevent>Terms and Conditions</a>
    </span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
})
const emit = defineEmits(['update:modelValue'])
function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
.checkbox-root {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 10px;
}
.checkbox-root.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.checkbox-input {
  display: none;
}
.checkbox-box {
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-dark-gray);
  border-radius: 4px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.2s,
    background 0.2s;
  box-sizing: border-box;
}
.checkbox-root.checked .checkbox-box {
  border-color: var(--color-pink);
  background: var(--color-pink);
}
.checkbox-root:not(.disabled):hover .checkbox-box {
  border-color: var(--color-pink);
}
.checkbox-label {
  color: var(--color-gray);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
}
.checkbox-link {
  color: var(--color-gray);
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
}

@media (max-width: 540px) {
  .checkbox-label {
    font-size: 12px;
    font-weight: 400;
  }
}
</style>
