<template>
  <div class="q-pa-md row items-start q-gutter-md" style="width: 100%">
    <q-card class="my-card" style="flex: 1">
      <q-card-section> </q-card-section>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  flex: 1
  max-width: none

.my-card:hover
  transform: scale(1.1)
  transition: transform 0.3s ease

.q-card
  background-color: transparent !important

.center-buttons
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
</style>
