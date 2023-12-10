<!-- MainPage.vue -->

<template>
  <q-page style="background-color: black">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6" style="margin-top: 100px">
        <TheSSSComponent
          title="Kargo Takip Numaramı Nereden Bulabilirim?"
          :content="first"
        />
        <TheSSSComponent
          title="Hangi Ödeme Yöntemlerini Kullanabilirim?"
          :content="second"
        />
        <TheSSSComponent
          title="Ürün Hasarlı Geldi. Ne Yapmalıyım?"
          :content="third"
        />
        <TheSSSComponent
          title="Beğendiğim Koleksiyonun Ürünlerini Tek Tek Almak Mümkün Müdür?"
          :content="fourth"
        />
      </div>
      <div class="col-3"></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TheSSSComponent from './TheSSSComponent.vue';

const first =
  'Siteye kayıt olurken bize verdiğin email üzerine sistemimiz kargo numaranı otomatik olarak gönderir. Lütfen emailini kontrol et.';
const second =
  'Kredi kartı veya banka kartın ile ödemeni güvenli bir şekilde yapabilirsin.';
const third =
  'Lütfen destek bölümünden kargo ve iade bölümüne gözat. Yapman gerekenler orada adım adım bulunmakta.';
const fourth =
  'Şu anda böyle bir satışımız yok. Koleksiyonlar set olarak sınırlı sayıda ve seri numarasıyla üretilmektedir.';
</script>
