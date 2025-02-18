<script setup lang="ts">
import { reactive } from 'vue';
import Button from "../../atoms/button/Button.vue";

const layoutConfig = reactive({
  darkTheme: false,
});

const toggleDarkMode = () => {
  if (!('startViewTransition' in document)) {
    executeDarkModeToggle();
    return;
  }
  (document as any).startViewTransition(() => executeDarkModeToggle());
};

const executeDarkModeToggle = () => {
  layoutConfig.darkTheme = !layoutConfig.darkTheme;
  document.documentElement.classList.toggle('dark');
};

</script>

<template>
  <div class="flex">
    <Button
        color="secondary"
        label="Toggle Theme"
        @click="toggleDarkMode"
    />
  </div>
</template>
