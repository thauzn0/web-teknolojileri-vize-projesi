<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item clickable @click="toggleComponent('MyHeader')">Header </q-item>
        <q-item clickable @click="toggleComponent('InfiniteCarousel')"
          >Carousel
        </q-item>
        <q-item clickable @click="toggleComponent('BushidoDesc')"
          >BushidoDesc
        </q-item>
        <q-item clickable @click="toggleComponent('ImageCards')"
          >ImageCards
        </q-item>
        <q-item clickable @click="toggleComponent('BottomCards')"
          >BottomCards
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const leftDrawerOpen = ref(false);
const currentComponent = ref(null);

const router = useRouter();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleComponent(componentName: string | null) {
  if (currentComponent.value === componentName) {
    // Açıksa, kapatma işlemi yap
    currentComponent.value = null;
  } else {
    // Açık değilse, açma işlemi yap
    currentComponent.value = componentName as string; // Type assertion
    // Sayfaya git
    router.push({ name: componentName });
  }
}
</script>
