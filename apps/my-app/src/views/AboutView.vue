<script setup lang="ts">
import { ref } from 'vue';
import { AppButton } from '@tuskdesign/ui'
import { AppInput } from '@tuskdesign/ui'

const value = ref(null);

// defineProps<{}>()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AppInput label="Input" />
    <AppButton text="Button" size="large"/>
    <hr>
    <InputText type="text" v-model="value" />
  </div>
</template>

<style>
@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
}
</style>
