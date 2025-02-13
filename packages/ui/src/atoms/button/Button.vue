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
  >
    <template #icon v-if="icon">
      <AppIcon :name="icon" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import {computed} from "vue";
// https://primevue.org/button/
import Button from 'primevue/button';
import AppIcon, { IconNames }  from "../../atoms/icon/AppIcon.vue";

export interface Props {
  color?: "primary" | "secondary" | "success" | "error" | "warn" | "text";
  disabled?: boolean;
  icon?: IconNames;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
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
  if (props.color === "text") {
    return "contrast"
  } else if (props.color === "error") {
    return "danger"
  } else {
    return props.color
  }
})

const size = computed(() => {
  if (props.size === "sm") {
    return "small"
  } else if (props.size === "lg") {
    return "large"
  } else {
    return undefined
  }
})
</script>

<style>
</style>
