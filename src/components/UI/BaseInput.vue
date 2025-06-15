<template>
  <div class="input-wrapper" :class="{ error: !!errorText, focused: isFocused }">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="modelValueProxy"
      class="input-field"
      :disabled="disabled"
      :autocomplete="autocomplete"
      @focus="onFocus"
      @blur="onBlur"
      @input="validate"
    />
  </div>
  <div v-if="errorText" class="input-error">{{ errorText }}</div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, watch } from 'vue'

// eslint-disable-next-line @typescript-eslint/ban-types
interface RuleFn {
  (value: string | undefined): true | string
}

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  error: String,
  type: {
    type: String,
    default: 'text',
  },
  disabled: Boolean,
  autocomplete: {
    type: String,
    default: 'off',
  },
  rules: {
    type: Array as () => RuleFn[],
    default: () => [],
  },
})
const emit = defineEmits(['update:modelValue'])
const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
})

const isFocused = ref(false)
const errorText = ref('')

function validate() {
  errorText.value = ''
  for (const rule of props.rules as RuleFn[]) {
    const result = rule(modelValueProxy.value)
    if (result !== true) {
      errorText.value = result
      break
    }
  }
}

function onFocus() {
  isFocused.value = true
}
function onBlur() {
  isFocused.value = false
  validate()
}

watch(() => props.modelValue, validate)
</script>

<style scoped>
.input-wrapper {
  background: var(--color-dark-gray);
  padding: 8px 12px 10px 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid var(--color-white);
  transition: border-color 0.2s;
}
.input-wrapper.focused,
.input-wrapper.error {
  border-bottom: 1px solid var(--color-pink);
}
.input-label {
  color: rgba(167, 167, 167, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
}
.input-field {
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  width: 100%;
}
.input-field::placeholder {
  color: rgba(65, 65, 65, 1);
  opacity: 1;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
}
.input-error {
  color: var(--color-pink);
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  margin-left: 12px;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 540px) {
  .input-wrapper {
    padding: 4px 12px 6px 12px;
    background: var(--color-light-gray);
    border-bottom: 1px solid rgba(201, 201, 201, 1);
  }

  .input-wrapper.focused {
    background: rgba(248, 248, 248, 1);
  }

  .input-wrapper.focused,
  .input-wrapper.error {
    border-bottom: 1px solid rgba(65, 65, 65, 1);
  }

  .input-field {
    color: var(--color-black);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  .input-field::placeholder {
    color: rgba(201, 201, 201, 1);
  }

  .input-label {
    color: rgba(100, 100, 100, 1);
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
  }
}
</style>
