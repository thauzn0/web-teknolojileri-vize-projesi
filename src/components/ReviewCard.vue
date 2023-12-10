<template>
  <div class="review-card">
    <q-input
      v-model="review.fullName"
      label="Ad Soyad"
      outlined
      dense
      style="margin-bottom: 10px; background-color: white"
    />

    <q-input
      v-model="review.rating"
      label="Puan (1-5)"
      outlined
      dense
      type="number"
      :rules="[
        (val: number) => (val >= 1 && val <= 5) || 'Puan 1 ile 5 arasında olmalı',
      ]"
      style="margin-bottom: 10px; background-color: white"
    />

    <q-input
      v-model="review.comment"
      label="Yorumunuz"
      outlined
      dense
      type="textarea"
      style="margin-bottom: 10px; background-color: white"
    />

    <q-btn
      @click="submitReview"
      style="color: black; background-color: white; position: absolute"
    >
      Gönder
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    modelValue: Object,
  },
  emits: ['update:modelValue', 'submit', 'closeCard'],
  data() {
    return {
      review: { ...this.modelValue },
    };
  },
  methods: {
    submitReview() {
      this.$emit('update:modelValue', { ...this.review });
      this.$emit('submit');
      this.closeReviewCard();
    },
    closeReviewCard() {
      this.$emit('closeCard');
    },
  },
});
</script>

<style scoped></style>
