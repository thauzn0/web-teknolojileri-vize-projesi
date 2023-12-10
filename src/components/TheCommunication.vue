<template>
  <q-page style="background-color: black">
    <div class="row">
      <div class="col-3">1</div>
      <div class="col-6">
        <p class="mainTitle">Bize Ulaşın</p>
        <p class="Title">
          Görüş, öneri ya da şikayetiniz paylaşmak isterseniz, "İletişim
          Formu"nu doldurarak bize ulaştırabilirsiniz. En kısa sürede
          değerlendirip size geri döneceğiz.
        </p>
        <q-card-section class="input-section">
          <div class="row">
            <div class="col-6">
              <input-component
                v-model="name"
                :field-label="'Ad'"
              ></input-component>
            </div>
            <div class="col-6">
              <input-component
                style="margin-left: 30px"
                v-model="surname"
                :field-label="'Soyad'"
              ></input-component>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <input-component
                v-model="email"
                :field-label="'Email'"
              ></input-component>
            </div>
            <div class="col-6">
              <input-component
                style="margin-left: 30px"
                v-model="phone"
                :field-label="'Telefon'"
                :field-type="'tel'"
              ></input-component>
            </div>
          </div>

          <q-card-section class="input-section">
            <div class="row" style="margin-top: 20px">
              <p class="required">*</p>
              <p class="label">Mesaj</p>
            </div>
            <q-input
              v-model="text"
              dense
              borderless
              type="textarea"
              :field-label="'Mesaj'"
              class="white-input"
              style="width: 950px; height: 200px"
              :input-class="['input-text']"
            />
          </q-card-section>

          <q-toggle
            v-model="accept"
            style="color: white"
            label="Kişisel verilerin korunması kanunu okudum, onaylıyorum"
          />

          <button-component
            @button-click="login"
            :button-label="'Gönder'"
            class="login-button"
            style="
              height: 50px;
              width: 950px;
              color: white;
              margin-top: 50px;
              size: 50px;
            "
          ></button-component>
        </q-card-section>
      </div>
      <div class="col-3">1</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from './TheButton.vue';
import InputComponent from './TextInput.vue';

export default defineComponent({
  components: {
    'input-component': InputComponent,
    'button-component': ButtonComponent,
  },
  data() {
    return {
      email: '',
      password: '',
      name: '',
      surname: '',
      phone: '',
      text: '',
      accept: '',
    };
  },
  methods: {
    login() {
      console.log('Gönder butonuna tıklandı');
    },
  },
});
</script>

<style scoped>
.mainTitle {
  text-align: center;
  font-size: 28px;
  color: white;
  margin-top: 60px;
}
.Title {
  font-size: 18px;
  text-align: center;
  color: white;
}
.input-section {
  margin-top: 6px;
}
.required {
  color: red;
  display: inline;
}

.label,
.forgot-password {
  color: white;
  display: inline;
}
.white-input {
  width: 400px;
  font-weight: bold;
  background-color: white;
  height: 25px;
}
.button-section {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: white;
}
</style>
