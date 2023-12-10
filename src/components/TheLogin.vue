<template>
  <q-page class="login-page">
    <q-card class="login-card">
      <h5 class="login-title"><b>Üye Girişi</b></h5>

      <InputField v-model="email" field-label="Email" />
      <InputField
        v-model="password"
        field-label="Şifre"
        :field-type="'password'"
      />

      <ButtonGroup
        @button-click="login"
        @forgot-password-click="forgotPassword"
        button-label="Üye Girişi"
        :show-forgot-password="true"
      />
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputField from './TextInput.vue';
import ButtonGroup from './TheButton.vue';

export default defineComponent({
  components: {
    InputField,
    ButtonGroup,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Giriş Yap butonuna tıklandı');
    },
    forgotPassword() {
      console.log('Parolamı Unuttum butonuna tıklandı');
    },
  },
});
</script>

<style scoped>
.login-page {
  background-color: black;
  color: white;
  min-height: 100vh;
  padding-left: 200px;
  padding-top: 100px;
}

.login-title {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.login-card {
  background-color: black;
  color: white;
  padding: 10px;
}
</style>
