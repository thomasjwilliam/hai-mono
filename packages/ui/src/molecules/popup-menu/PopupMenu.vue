<template>
  <div class="">
    <Button
      type="button"
      :disabled="disabled"
      :icon="icon"
      :severity="color"
      :size="size"
      :variant="style"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      :style="styleObject"
    >
      <template #icon>
        <AppIcon name="dots-vertical" :color="color" />
      </template>
    </Button>
    <Menu
      ref="menu"
      id="overlay_menu"
      :model="items"
      :popup="true" />
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import AppIcon from "../../atoms/icon/AppIcon.vue";

interface MenuItem {
  icon?: string;
  label: string;
  onClick?: () => void;
}

export interface Props {
  color?: "text" | "primary" | "secondary" | "success" | "error" | "warn";
  disabled?: boolean;
  icon?: string;
  items: MenuItem[];
  size?: "small" | "large";
  style?: "outlined" | "text" | "link";
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  disabled: false,
  icon: "pi pi-ellipsis-v",
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

const colorMap = {
  text: 'var(--p-text-color)',
  primary: 'var(--primary-color-500)',
  secondary: 'var(--secondary-color-500)',
  success: 'var(--success-color-500)',
  error: 'var(--error-color-500)',
  warn: 'var(--warn-color-500)'
}

const styleObject = computed(() => ({
  ...((props.style === "outlined" || props.style === "text" || props.style === "link") && {
    color: colorMap[props.color],
  }),
}))

</script>

<style>
</style>
