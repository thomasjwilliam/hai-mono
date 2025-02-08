<script setup lang="ts">
import { AppButton } from '@tuskdesign/ui'

// defineProps<{}>()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AppButton label="Button" size="large"/>
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
