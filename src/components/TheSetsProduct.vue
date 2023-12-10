<!-- Carousel.vue -->
<template>
  <q-responsive
    :ratio="16 / 9"
    style="width: 400px; max-width: 100%; height: 600px"
  >
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <q-carousel-slide :name="1" :img-src="images[0]">
        <q-btn
          v-if="isMouseOver"
          color="white"
          textColor="black"
          label="Stok yok"
          class="q-mt-md"
          style="
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 350px;
          "
        />
      </q-carousel-slide>
      <q-carousel-slide :name="2" :img-src="images[1]">
        <q-btn
          v-if="isMouseOver"
          color="white"
          textColor="black"
          label="Stok yok"
          class="q-mt-md"
          style="
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 350px;
          "
        />
      </q-carousel-slide>
    </q-carousel>
  </q-responsive>
  <div>
    <p style="font-size: 18px; margin: 0; padding: 0">
      <b>Bushido</b>
    </p>
    <p style="font-size: 12px; margin: 0; padding: 0">
      <b>The Berserkir (Kral Zinciri Bileklik)</b>
    </p>
    <div style="display: flex">
      <div
        style="
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <p style="font-size: 17px; margin: 0"><b>%10</b></p>
      </div>
      <div style="margin-left: 22px">
        <div>
          <b style="text-decoration: line-through; margin: 0; font-size: 15px"
            >1,500.00TL</b
          >
        </div>
        <div>
          <b style="margin: 0; font-size: 18px">1,350.00TL</b>
        </div>
      </div>
    </div>
    <p v-if="showSize">4 Bileklik boyutu</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slide = ref(1);
const isMouseOver = ref(false);

// Veriyi tanımla (örneğin resim URL'leri)
const images = ref(['../src/assets/a1.webp', '../src/assets/a2.webp']);

const onMouseOver = () => {
  isMouseOver.value = true;
  slide.value = 2;
};

const onMouseLeave = () => {
  isMouseOver.value = false;
  slide.value = 1;
};
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
