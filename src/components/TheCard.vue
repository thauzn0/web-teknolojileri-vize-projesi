<template>
  <q-card class="my-card" style="flex: 1">
    <q-card-section>
      <q-img class="hoverable" :src="image" />
      <div class="center-buttons">
        <q-btn style="" color="black" :label="buttonText" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    image: String,
    buttonText: String,
  },
};
</script>

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
