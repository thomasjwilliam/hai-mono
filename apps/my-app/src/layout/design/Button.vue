<script setup lang="ts">
import AppButton from "primevue/button";

interface Props {
  label: string;
}

defineProps<Props>()

</script>

<template>
  <AppButton
    :label="label"
    class="button"
  />
</template>

<style scoped>
/* https://tailwind.primevue.org/button/ */
.button {
  /* tailwind */
  @apply
    border-none
  ;
  /* css */
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
}
</style>
