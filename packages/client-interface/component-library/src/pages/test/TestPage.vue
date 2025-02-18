<script setup lang="ts">
import Navigation from "../../organisms/navigation/Navigation.vue";

const navItems = [{
  text: 'HAI',
  link: '/'
}, {
  text: 'Dashboard',
  link: '/dashboard'
}, {
  text: 'Composer',
  link: '/composer'
}, {
  text: 'Test',
  link: '/test'
}]
</script>

<template>
  <div>
    <Navigation :items="navItems" />
    <h1 class="text-4xl">Test Page</h1>
  </div>
</template>

<style>
</style>
