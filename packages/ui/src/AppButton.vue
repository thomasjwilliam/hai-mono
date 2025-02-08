<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Size = "small" | "medium" | "large";

export interface Props {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
  size: Size;
}

interface Emits {
  (event: "click"): void;
}

const props = withDefaults(defineProps<Props>(), { primary: false });

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

// defineProps<{}>()
</script>

<style>
.storybook-button--primary {
  color: white;
  background-color: blue;
}

.storybook-button--secondary {
  color: white;
  background-color: grey;
}

.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}

.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}

.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
