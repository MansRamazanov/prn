<template>
  <div class="form-container">
    <div class="form-header">
      <div class="header-title">Lifetime Membership just for</div>
      <div class="header-price">$999 — One Charge. No Rebill!</div>
    </div>
    <div class="form-content">
      <form class="form-inputs" @submit="handleSubmit">
        <div class="form-group">
          <BaseInput
            v-model="fullName"
            label="Full Name"
            placeholder="John Smith"
            :rules="fullNameRules"
          />
        </div>
        <div class="form-group">
          <BaseInput
            v-model="email"
            label="Email"
            placeholder="example@email.com"
            type="email"
            :rules="emailRules"
          />
        </div>
      </form>
    </div>
    <div class="form-checkbox">
      <BaseCheckbox v-model="isAgree" label="I agree to the terms and conditions" />
    </div>
    <div class="form-button">
      <BaseButton
        label="Pay $999"
        :icon="LockIcon"
        :disabled="!isFormValid"
        @click="handleSubmit"
      />
      <div class="price-info">Price is in USD (United States Dollar).</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from './UI/BaseInput.vue'
import BaseCheckbox from './UI/AgreeCheckbox.vue'
import BaseButton from './UI/BaseButton.vue'
import LockIcon from '@/assets/images/icons/LockIcon.vue'

const fullName = ref('')
const email = ref('')
const isAgree = ref(false)

const fullNameValid = ref(false)
const emailValid = ref(false)

const isFormValid = computed(() => {
  return fullNameValid.value && emailValid.value && isAgree.value
})

const fullNameRules = [
  (v: string | undefined) => {
    const isValid = !!v && v.trim().split(' ').length >= 2 && v.length <= 60
    fullNameValid.value = isValid
    return isValid || 'Full name is required'
  },
]

const emailRules = [
  (v: string | undefined) => {
    const isValid = !!v && /.+@.+\..+/.test(v)
    emailValid.value = isValid
    return isValid || 'Email is required'
  },
]

const handleSubmit = () => {
  if (isFormValid.value) {
    console.log('окак')
  }
}
</script>

<style scoped>
.form-container {
  padding: 40px;
  background-color: var(--color-black);
  border-radius: 6px;
  box-shadow: 0px 1px 6px 0px rgba(11, 11, 11, 0.8);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: var(--color-white);
}

.header-price {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: var(--color-pink);
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.price-info {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-gray);
  text-align: center;
  margin-top: 16px;
}

@media (max-width: 540px) {
  .form-container {
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    padding-top: 16px;
    gap: 16px;
  }

  .header-title {
    color: var(--color-black);
  }

  .form-inputs {
    gap: 16px;
  }

  .price-info {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    margin-top: 12px;
  }
}
</style>
