<template>
  <q-card-section class="input-section">
    <p class="required">*</p>
    <p class="label">{{ fieldLabel }}</p>
    <q-input
      v-model="internalValue"
      dense
      borderless
      :type="fieldType"
      class="thin-input white-input"
      :input-class="['input-text']"
    />
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    fieldLabel: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    fieldType: {
      type: String as PropType<
        | 'number'
        | 'text'
        | 'search'
        | 'email'
        | 'password'
        | 'textarea'
        | 'time'
        | 'tel'
        | 'file'
        | 'url'
        | 'date'
        | 'datetime-local'
        | undefined
      >,
      default: 'text',
    },
  },
  data() {
    return {
      internalValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.internalValue = newVal;
    },
  },
});
</script>

<style scoped>
.input-section {
  margin-top: 6px;
}

.required {
  color: red;
  display: inline;
}

.label {
  color: white;
  display: inline;
}

.white-input {
  width: 400px;
  font-weight: bold;
  background-color: white;
  height: 25px;
}

.input-text {
  height: 100%;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
