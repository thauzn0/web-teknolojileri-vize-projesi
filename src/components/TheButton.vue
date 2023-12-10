<template>
  <q-card-section class="button-section">
    <q-btn @click="onButtonClick" class="login-button">
      <b>{{ buttonLabel }}</b>
    </q-btn>

    <q-btn
      v-if="showForgotPassword"
      @click="onForgotPasswordClick"
      class="forgot-password-button"
    >
      <b>Parolamı Unuttum</b>
    </q-btn>
  </q-card-section>
</template>

<script lang="ts">
export default {
  props: {
    buttonLabel: {
      type: String,
      required: true,
    },
    showForgotPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onButtonClick() {
      this.$emit('button-click');
    },
    onForgotPasswordClick() {
      this.$emit('forgot-password-click');
    },
  },
};
</script>

<style scoped>
.button-section {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

.login-button,
.forgot-password-button {
  width: 400px;
  height: 50px;
  font-size: 18px;
  margin-bottom: 10px;
}

.forgot-password-button {
  width: 200px;
  height: 30px;
  font-size: 14px;
  text-align: left;
}
</style>
