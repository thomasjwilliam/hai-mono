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
  />
</template>

<script setup lang="ts">
import {computed} from "vue";
// https://primevue.org/button/
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

const color = computed(() => {
  if (props.color === "error") {
    return "danger"
  } else {
    return props.color
  }
})
</script>

<style>
</style>
