<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from "../../atoms/button/Button.vue";

const router = useRouter()
const goToDashboard = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div class="hero">
    <div class="text-center">
      <div class="hero__caption">POWERED BY YOU</div>
      <div class="hero__title">Human Accepted Interaction</div>
      <div class="hero__subtitle">A place to write and help your fellow human.</div>
      <Button label="Get Started" @click="goToDashboard" />
    </div>
  </div>
</template>

<style>
@reference '../../assets/styles/style.css';

.hero {
  @apply px-6 py-20 md:px-12 lg:px-20
}

.hero__caption {
  color: var(--primary-color-500);
  @apply font-bold mb-4
}

.hero__title {
  color: var(--p-text-color);
  @apply font-bold text-5xl mb-4
}

.hero__subtitle {
  color: var(--p-text-color);
  @apply text-2xl mb-8
}
</style>
