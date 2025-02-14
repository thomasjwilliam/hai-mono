<template>
  <Button
    :disabled="disabled"
    :icon="icon"
    :label="text"
    :rounded="rounded"
    :severity="color"
    :size="size"
    :variant="variant"
    @click="onClick"
  >
    <template #icon v-if="icon">
      <Icon :name="icon" :size="iconSize" :color="iconColor" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import {computed} from "vue";
// https://primevue.org/button/
import Button from 'primevue/button';
import Icon, { IconNames }  from "../icon/Icon.vue";

const props = withDefaults(defineProps<{
  color?: "primary" | "secondary" | "success" | "danger" | "warn" | "text";
  disabled?: boolean;
  icon?: IconNames;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "outlined" | "text" | "link";
  text?: string;
}>(), {
  color: "primary",
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const color = computed(() => {
  if (props.color === "text") {
    return "contrast"
  } else if (props.color === "danger") {
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

const iconColor = computed(() => {
  if (!props.variant) {
    return `--p-button-${props.color}-color`
  } else {
    return props.color
  }
})

const iconSize = computed(() => {
  if (props.size === "sm") {
    return "sm"
  } else if (props.size === "lg") {
    return "lg"
  } else {
    return "md"
  }
})

const onClick = () => {
  emit("click");
};
</script>

<style>
</style>
