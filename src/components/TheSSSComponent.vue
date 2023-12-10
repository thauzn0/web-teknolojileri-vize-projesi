<!-- AccordionItem.vue -->

<template>
  <div class="q-pa-md row items-start q-gutter-md" @click="toggleSection">
    <q-card class="my-card" flat bordered>
      <q-card-actions style="background: rgb(248, 211, 211); height: 50px">
        <p style="font-size: 18px">{{ title }}</p>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click.stop="toggleSection"
        />
      </q-card-actions>
      <q-slide-transition style="background-color: black; color: white">
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">{{ content }}</q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps(['title', 'content']);
const expanded = ref(false);

const toggleSection = () => {
  expanded.value = !expanded.value;
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px

.q-slide-transition
  max-width: 800px

.text-subtitle2
  font-size: 14px
  line-height: 1.4
</style>
