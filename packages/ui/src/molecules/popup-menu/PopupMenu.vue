<script setup lang="ts">
import {ref} from "vue";
import Button from '../../atoms/button/Button.vue';
// https://primevue.org/menu/#popup
import Menu from 'primevue/menu';

interface MenuItem {
  icon?: string;
  label: string;
  onClick?: () => void;
}

const props = withDefaults(defineProps<{
  color?: "primary" | "secondary" | "success" | "danger" | "warn";
  disabled?: boolean;
  icon?: "home" | "dots-vertical";
  items: MenuItem[];
  size?: "sm"| "md" | "lg";
  variant?: "outlined" | "text";
}>(), {
  color: "primary",
  disabled: false,
  icon: "dots-vertical",
});

const menu = ref();
const items = ref([
  {
    items: props.items.map(item => ({
      label: item.label,
      icon: item.icon,
      command: item.onClick,
    }))
  }
]);

const toggle = (event: Event) => {
  menu.value.toggle(event);
};

</script>

<template>
  <div class="">
    <Button
      type="button"
      :disabled="disabled"
      :icon="icon"
      :severity="color"
      :size="size"
      :variant="variant"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      @click="toggle"
    />
    <Menu
      ref="menu"
      id="overlay_menu"
      :model="items"
      :popup="true" />
  </div>
</template>

<style>
</style>