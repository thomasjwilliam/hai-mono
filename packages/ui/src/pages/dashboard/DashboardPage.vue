<script setup lang="ts">
import Navigation from "../../organisms/navigation/Navigation.vue";

const navItems = [{
  text: 'HAI SAKAI',
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
  <div class="container">
    <Navigation :items="navItems" />
    <h1>Dashboard Page</h1>
  </div>
</template>
