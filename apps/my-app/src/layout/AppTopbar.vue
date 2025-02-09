<script setup lang="ts">
import AppButton from 'primevue/button';
import { useLayout } from './layout';
// import AppConfigurator from './AppConfigurator.vue';

const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
  <div>
    <div>
      <AppButton @click="toggleMenu" size="small">
        <i class="pi pi-bars"></i>
      </AppButton>
      <router-link to="/">
        <span>SAKAI & HAI</span>
      </router-link>
    </div>

    <div>
      <div>
        <AppButton @click="toggleDarkMode"  size="small">
          <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
        </AppButton>
        <div>
          <AppButton
              size="small"
              :style="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
          >
            <i class="pi pi-palette"></i>
          </AppButton>
        </div>
      </div>

      <AppButton
          size="small"
          :style="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
      >
        <i class="pi pi-ellipsis-v"></i>
      </AppButton>

      <div>
        <div>
          <AppButton size="small">
            <i class="pi pi-calendar"></i>
            <span>Calendar</span>
          </AppButton>
          <AppButton size="small">
            <i class="pi pi-inbox"></i>
            <span>Messages</span>
          </AppButton>
          <AppButton size="small">
            <i class="pi pi-user"></i>
            <span>Profile</span>
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>