<script setup lang="ts">
import Icon from "../../atoms/icon/Icon.vue";
import Button from "../../atoms/button/Button.vue";
import Navigation from "../../organisms/navigation/Navigation.vue";

import {clientApp} from "@hai/client-app";
const title = clientApp();

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
  <div>
    <Navigation :items="navItems" />
    <h1>Test Page</h1>
    <h2>{{title}}</h2>
    <Icon name="home" color="primary" />
    <Button label="Click Me" icon="home" color="warn" />
  </div>
</template>

<style>
</style>
