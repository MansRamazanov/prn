<template>
  <footer>
    <div class="footer-content">
      <div class="ip">
        188.166.47.48 YOUR IP ADDRESS IS LOGGED FOR FRAUD PREVENTION AND INVESTIGATION.
      </div>
      <div class="address">
        Flat 12, Shaftesbury House, 29 Moscow Road, London, England, W2 4AH. <br />© 2023 VECTOR
        INNOVATIONS LTD.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 24px 0;
  width: 100%;
  text-align: center;
  flex-shrink: 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ip {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}

.address {
  padding-top: 16px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  max-width: 332px;
  text-align: center;
}

@media (max-width: 540px) {
  footer {
    padding: 20px 0;
  }
  .footer-content {
    padding: 0 20px;
  }

  .ip {
    font-size: 14px;
  }

  .address {
    font-size: 12px;
    padding-top: 8px;
  }
}
</style>
