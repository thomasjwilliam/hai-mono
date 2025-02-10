<script setup lang="ts">
import DesignFooter from './DesignFooter.vue';
import DesignTopbar from './DesignTopbar.vue';
import AppButton from "primevue/button";
import MyButton from "./Button.vue";

</script>

<template>
  <div>
    <DesignTopbar class="w-full border" />
    <div class="py-10 border">
      <template>
        <AppButton
          label="Get Started"
          class="px-2 rounded-sm"
        />
      </template>
      <MyButton label="Click me" />
    </div>
    <DesignFooter class="w-full border"/>
  </div>
</template>

<style scoped>
</style>
