<script setup lang="ts">
import Navigation from "../../organisms/navigation/Navigation.vue";
import DocumentBrowserComponent from "./DocumentBrowser.component.vue"

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
  <div class="container">
    <Navigation :items="navItems" />
    <h1 class="text-4xl">Dashboard Page!</h1>
    <DocumentBrowserComponent />
  </div>
</template>
