<script setup lang="ts">
// import AppButton from 'primevue/button';
// import { useLayout } from '../layout';
// const { toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-4">
      <router-link to="/">
        <span class="">HAI SAKAI</span>
      </router-link>
      <router-link to="/dashboard">
        <span class="">dashboard</span>
      </router-link>
      <router-link to="/composer">
        <span class="">composer</span>
      </router-link>
      <router-link to="/grid">
        <span class="">grid</span>
      </router-link>
    </div>
<!--    <AppButton-->
<!--        size="small"-->
<!--        @click="toggleDarkMode"-->
<!--        :icon="`pi ${isDarkTheme ? 'pi-moon' : 'pi-sun'}`"-->
<!--    />-->
  </div>
</template>
