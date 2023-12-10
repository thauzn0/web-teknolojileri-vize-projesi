<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <div style="padding: 20px">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div
            style="
              color: black;
              font-size: 18px;
              font-family: 'Poppins', -apple-system, system-ui,
                BlinkMacSystemFont;
            "
          >
            <b>Sepetimdekiler(0)</b>
          </div>
          <q-btn
            flat
            dense
            round
            icon="close"
            @click="toggleRightDrawer"
            style="height: fit-content; width: fit-content"
          />
        </div>

        <q-img
          src="../assets/shopping-cart5929.jpg"
          alt="Image Alt Text"
          style="
            max-width: 150px;
            max-height: 80px;
            display: inline-block;
            margin-top: 150px;
            margin-left: 60px;
          "
        />
        <q-btn color="black" class="full-width" label="ALIŞVERİŞE BAŞLA" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
