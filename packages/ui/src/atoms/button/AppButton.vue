<template>
  <Button
      :label="label"
      :severity="color"
      :size="size"
      @click="onClick"
  />
</template>

<script setup lang="ts">
import Button from 'primevue/button';

export interface Props {
  label: string;
  // defines the color, defaults to primary
  color?: string;
  size?: "small" | "large";
}

interface Emits {
  (event: "click"): void;
}

const props = withDefaults(defineProps<Props>(), { });

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

// defineProps<{}>()
</script>

<style>
</style>
