<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="custom-slide-right"
      transition-next="custom-slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="width: 1895px; height: 865px"
    >
      <q-carousel-slide :name="1" img-src="../assets/firstcarousel.png" />
      <q-carousel-slide :name="2" img-src="../assets/secondCarousel.png" />
    </q-carousel>

    <!-- Özel geçiş butonu -->
    <div class="custom-carousel-button" @click="prevSlide">❮</div>
    <div class="custom-carousel-button right" @click="nextSlide">❯</div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  methods: {
    prevSlide() {
      this.slide = this.slide - 1 > 0 ? this.slide - 1 : 2;
    },
    nextSlide() {
      this.slide = this.slide + 1 <= 2 ? this.slide + 1 : 1;
    },
  },
};
</script>

<style scoped>
.custom-carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  user-select: none;
}

.custom-carousel-button.right {
  right: 0;
}
</style>
