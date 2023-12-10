<template>
  <q-btn @click="onClick" :class="[buttonClass]">
    <b>{{ buttonLabel }}</b>
  </q-btn>
</template>

<script lang="ts">
export default {
  props: {
    buttonLabel: {
      type: String,
      required: true,
    },
    buttonClass: {
      type: String,
      default: '',
    },
    buttonStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onClick() {
      this.$emit('button-click');
    },
  },
};
</script>
