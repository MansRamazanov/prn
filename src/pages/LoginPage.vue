<template>
  <div class="login-page">
    <div class="form-block">
      <FormComponent />
      <div class="form-info">
        <JAVHDIcon style="margin-left: 26px" class="info-header-icon" />
        <div class="info-container">
          <InfoItem :icon="SecurityIcon" text="Your payment safe & secure." />
          <InfoItem :icon="NotIcon" text="Cancel your account anytime.." />
          <InfoItem :icon="CreditIcon" text="We do not store card number." />
          <InfoItem
            :icon="InfoIcon"
            text="Charges will appear on your statement as “JVBILL.com-1-855-2762399”"
          />
          <InfoItem
            :icon="InfoIcon"
            text="We are using secure protocol with SSL technology (Secure Socket Layer) for personal information and billing 
information to send data on world wide web."
          />
          <InfoItem :icon="OkIcon" text="Regular Updates New Videos Daily" />
          <InfoItem :icon="OkIcon" text="TOP 3 Asian Site on RabbitsReview" />
        </div>
      </div>
    </div>
    <div class="photo-gallery-block">
      <PhotoGallery />
    </div>
  </div>
</template>

<script setup lang="ts">
import FormComponent from '../components/FormComponent.vue'
import InfoItem from '../components/UI/InfoItem.vue'
import SecurityIcon from '@/assets/images/icons/SecurityIcon.vue'
import JAVHDIcon from '@/assets/images/icons/JAVHDIcon.vue'
import NotIcon from '@/assets/images/icons/NotIcon.vue'
import CreditIcon from '@/assets/images/icons/CreditIcon.vue'
import InfoIcon from '@/assets/images/icons/InfoIcon.vue'
import OkIcon from '@/assets/images/icons/OkIcon.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
}

.form-block {
  padding-top: 64px;
  display: flex;
  gap: 44px;
}

.form-info {
  max-width: 264px;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
}

@media (max-width: 800px) {
  .form-block {
    flex-direction: column;
    gap: 16px;
  }

  .info-header-icon {
    display: none;
  }

  .info-container {
    margin-top: 0;
  }
}

@media (max-width: 540px) {
  .form-block {
    padding-top: 0;
  }
}
</style>
