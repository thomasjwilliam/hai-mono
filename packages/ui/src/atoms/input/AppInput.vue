<template>
  <div>
    <InputText type="text" v-model="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';

const value = ref(null);
</script>