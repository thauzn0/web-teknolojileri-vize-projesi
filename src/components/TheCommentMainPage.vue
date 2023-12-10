<template>
  <q-page style="background-color: black">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8" style="margin-top: 150px">
        <div class="row">
          <div class="col-10">
            <div class="evaluation-summary">
              <p style="color: white; font-size: 18px; margin-bottom: 10px">
                Yorumlar ({{ evaluations.length }})
              </p>
              <p style="color: white; font-size: 16px; margin-bottom: 10px">
                Ortalama Puan: {{ averageRating }}/5.0
              </p>
            </div>
          </div>
          <div class="col-2">
            <q-btn
              @click="openReviewCard"
              style="color: white; text-align: right"
            >
              <b>Yorum Yap</b>
            </q-btn>
          </div>
        </div>

        <q-dialog v-model="showReviewCard">
          <ReviewCard
            v-model="newReview"
            style="width: 700px"
            @closeCard="closeReviewCard"
          ></ReviewCard>
        </q-dialog>
        <TheComments :evaluations="evaluations" />
      </div>
      <div class="col-2"></div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReviewCard from './ReviewCard.vue';
import TheComments from './TheComments.vue';

export default defineComponent({
  components: {
    ReviewCard,
    TheComments,
  },
  data() {
    return {
      evaluations: [
        {
          rating: 5,
          date: '2023-03-15',
          fullName: 'Ayşe Yılmaz',
          purchased: true,
          comment:
            'Harika bir ürün! Çok memnun kaldım, kaliteli malzeme kullanılmış.',
        },
        {
          rating: 4,
          date: '2023-03-10',
          fullName: 'Mehmet Can',
          purchased: false,
          comment:
            'Fiyat performans açısından iyi, ancak biraz daha dayanıklı olabilirdi.',
        },
        {
          rating: 5,
          date: '2023-03-05',
          fullName: 'Zeynep Demir',
          purchased: true,
          comment:
            'Beklediğimden daha hızlı geldi ve paketleme çok iyiydi. Teşekkür ederim!',
        },
        {
          rating: 3,
          date: '2023-03-01',
          fullName: 'Ali Kaya',
          purchased: true,
          comment: 'Fena değil, ama biraz daha fazla renk seçeneği olabilirdi.',
        },
        {
          rating: 5,
          date: '2023-02-25',
          fullName: 'Fatma Tekin',
          purchased: true,
          comment: 'Kesinlikle harika bir ürün! Herkese tavsiye ederim.',
        },
      ],
      showReviewCard: false,
      newReview: {
        fullName: '',
        rating: null,
        comment: '',
      },
    };
  },
  computed: {
    averageRating() {
      const totalRating = this.evaluations.reduce(
        (sum, evaluation) => sum + evaluation.rating,
        0
      );
      return (totalRating / this.evaluations.length || 0).toFixed(1);
    },
  },
  methods: {
    openReviewCard() {
      this.showReviewCard = true;
    },
    closeReviewCard() {
      this.newReview = {
        fullName: '',
        rating: null,
        comment: '',
      };
      this.showReviewCard = false;
    },
  },
});
</script>

<style scoped>
.evaluation-summary {
  margin-bottom: 20px;
}
</style>
