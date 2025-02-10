<script setup lang="ts">
import AppButton from "primevue/button";

export interface Props {
  label: string;
}

defineProps<Props>()

</script>

<template>
  <AppButton
    :label="label"
    class="px-2 rounded-sm"
  />
</template>

<style scoped>
</style>
