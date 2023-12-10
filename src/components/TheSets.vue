<template>
  <q-page style="background-color: rgb(0, 0, 0)">
    <div
      style="
        text-align: center;
        font-size: 24px;
        padding-top: 30px;
        color: white;
      "
    >
      <b>THE BERSERKER</b>
    </div>
    <div style="font-size: 24px; padding-top: 30px; color: white">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8" style="margin-top: 30px; color: white; width: 400px">
          <div style="display: flex">
            <div style="margin-left: 50px"><TheProduct /></div>
            <div style="margin-left: 50px"><TheProduct /></div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TheProduct from './TheSetsProduct.vue';
</script>

<style scoped></style>
