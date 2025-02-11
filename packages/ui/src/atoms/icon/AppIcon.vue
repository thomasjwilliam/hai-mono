<template>
  <span class="folder-icon">
    <svg
      class="svg-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :style="{
        width: computedSize,
        height: computedSize,
        fill: colorMap[props.color]
      }"
    >
      <title>{{name}}</title>
      <path :d="iconPath" />
    </svg>
  </span>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {icons} from "./icons";

export type IconNames = keyof typeof icons;
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | string | number;

export interface Props {
  color?: "text" | "primary" | "secondary" | "success" | "error" | "warn"
  name: IconNames
  size?: IconSize;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'text'
})

const sizeMap = {
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px'
}

const computedSize = computed(() => {
  // If size is one of the predefined sizes
  if (typeof props.size === 'string' && props.size in sizeMap) {
    return sizeMap[props.size as keyof typeof sizeMap];
  }

  // If size is a number, convert to pixels
  if (typeof props.size === 'number') {
    return `${props.size}px`;
  }

  // If size is a string that represents a number (e.g., '12' or '48') and does not include 'em' or 'rem'
  if (typeof props.size === 'string' && /^[0-9]+$/.test(props.size)) {
    return `${props.size}px`;
  }

  // If size is a custom string value (e.g., '2em', '3rem')
  return props.size;
});

const iconPath = computed(() => {
  return icons[props.name]
})

const colorMap = {
  text: 'var(--text-color, darkslategrey)',
  primary: 'var(--primary-color, #007bff)',
  secondary: 'var(--secondary-color, #6c757d)',
  success: 'var(--success-color, #28a745)',
  error: 'var(--error-color, #dc3545)',
  warn: 'var(--warn-color, #ffc107)'
}

</script>

<style>
.folder-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.svg-icon {
  display: block;
}
</style>
