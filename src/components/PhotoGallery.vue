<template>
  <div class="photo-gallery">
    <div class="photo-gallery-item" v-for="photo in photos" :key="photo.src">
      <img :src="photo.src" alt="Photo Gallery" />
    </div>
    <div class="photo-gallery-solo">
      <img :src="photoSolo" alt="Photo Gallery" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import photo1 from '@/assets/images/6.png'
import photo2 from '@/assets/images/7.png'
import photo3 from '@/assets/images/8.png'
import photo4 from '@/assets/images/9.png'
import photo5 from '@/assets/images/9.png'
import photo6 from '@/assets/images/10.png'
import photo7 from '@/assets/images/12.png'
import photo8 from '@/assets/images/13.png'
import photo9 from '@/assets/images/13.png'
import photoSolo from '@/assets/images/13_big.png'

const photos = ref([
  {
    src: photo1,
  },
  {
    src: photo2,
  },
  {
    src: photo3,
  },
  {
    src: photo4,
  },
  {
    src: photo5,
  },
  {
    src: photo6,
  },
  {
    src: photo7,
  },
  {
    src: photo8,
  },
  {
    src: photo9,
  },
])
</script>

<style scoped>
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(5, 230px);
  grid-template-rows: repeat(2, 144px);
  gap: 12px;
  margin: 12px auto 32px;
  width: fit-content;
  max-width: 100%;
}

.photo-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

/* .photo-gallery-item {
  width: 230px;
  height: 144px;
} */

.photo-gallery-item:nth-child(2) {
  grid-row: span 2;
  height: 100%;
}

.photo-gallery-solo {
  display: none;
}

@media (max-width: 1280px) {
  .photo-gallery {
    grid-template-columns: repeat(4, 230px);
  }
  .photo-gallery-item:nth-child(2) {
    display: none;
  }
  .photo-gallery-solo {
    display: none;
  }
}

@media (max-width: 980px) {
  .photo-gallery {
    grid-template-columns: repeat(3, 230px);
  }
  .photo-gallery-item:nth-child(2) {
    display: none;
  }
  .photo-gallery-item:nth-child(4) {
    display: none;
  }
  .photo-gallery-item:nth-child(8) {
    display: none;
  }
  .photo-gallery-solo {
    display: none;
  }
}

@media (max-width: 740px) {
  .photo-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  .photo-gallery-item:nth-child(2) {
    display: none;
  }
  .photo-gallery-item:nth-child(4) {
    display: none;
  }
  .photo-gallery-item:nth-child(8) {
    display: none;
  }
  .photo-gallery-item:nth-child(3) {
    display: none;
  }
  .photo-gallery-item:nth-child(6) {
    display: none;
  }
  .photo-gallery-solo {
    display: none;
  }
}

@media (max-width: 540px) {
  .photo-gallery-item {
    display: none;
  }
  .photo-gallery-solo {
    display: block;
    width: 100%;
  }
  .photo-gallery {
    display: block;
    margin-bottom: 40px;
    margin-top: 16px;
  }
  .photo-gallery-solo img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

/* @media (min-width: 741px) {
  .photo-gallery {
    display: grid;
  }
  .photo-gallery-solo {
    display: none;
  }
} */
</style>
