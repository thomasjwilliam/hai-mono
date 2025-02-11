<template>
  <Button
    :disabled="disabled"
    :icon="icon"
    :iconPos="iconPosition"
    :label="text"
    :severity="color"
    :size="size"
    :variant="style"
    @click="onClick"
    :style="styleObject"
  />
</template>

<script setup lang="ts">
import {computed} from "vue";
import Button from 'primevue/button';

export interface Props {
  color?: "text" | "primary" | "secondary" | "success" | "error" | "warn";
  disabled?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  size?: "small" | "large";
  style?: "outlined" | "text" | "link";
  text?: string;
}

interface Emits {
  (event: "click"): void;
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
});

const emit = defineEmits<Emits>();
const onClick = () => {
  emit("click");
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

  // backgroundColor: colorMap[props.color],

  // ...(props.color === "text" && props.style === "outlined" && {
  //   color: colorMap[props.color],
  //   borderColor: "#c2c2c2",
  // }),
  // ...(props.color === "text" && props.style === "link" && {
  //   color: colorMap[props.color],
  // })
}))

</script>

<style>
</style>
