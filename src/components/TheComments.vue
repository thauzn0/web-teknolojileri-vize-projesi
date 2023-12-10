<template>
  <div>
    <div
      v-for="(evaluation, index) in evaluations"
      :key="index"
      class="evaluation-box"
    >
      <div class="star-rating">
        <p style="font-size: 24px; margin-bottom: 5px">★★★★★</p>
        <p style="font-size: 14px; margin-bottom: 5px">{{ evaluation.date }}</p>
        <p style="font-size: 16px; margin-bottom: 5px">
          {{ evaluation.fullName }}
        </p>
        <p style="font-size: 14px; margin-bottom: 10px">
          {{ evaluation.purchased ? 'Satın Alınmış' : 'Satın Alınmamış' }}
        </p>
        <p class="comment" style="font-size: 14px; margin-bottom: 10px">
          {{ evaluation.comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Review {
  fullName: string;
  rating: number | null;
  comment: string;
  date?: string;
  purchased?: boolean;
}

export default defineComponent({
  props: {
    evaluations: Array as PropType<Array<Review>>,
  },
});
</script>

<style scoped>
.evaluation-box {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.star-rating {
  color: white;
}

.comment {
  color: white;
  font-size: 16px;
}
</style>
