<template>
  <span class="folder-icon">
    <svg
      class="svg-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :style="{
        width: computedSize,
        height: computedSize,
        fill: computedFill,
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
import type { ColorNames, IconProps } from './Icon.ts';

const props = withDefaults(defineProps<IconProps>(), {
  color: 'text',
  size: 'md'
})

const colorMap = {
  text: 'var(--p-text-color)',
  "text-inverse": 'var(--p-app-color-inverse)',
  primary: 'var(--primary-color-500)',
  secondary: 'var(--secondary-color-500)',
  success: 'var(--success-color-500)',
  danger: 'var(--error-color-500)',
  warn: 'var(--warn-color-500)'
}

const sizeMap = {
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px'
}

const computedSize = computed(() => {
  if (typeof props.size === 'string' && props.size in sizeMap) {
    return sizeMap[props.size as keyof typeof sizeMap];
  }
  if (typeof props.size === 'number') {
    return `${props.size}px`;
  }
  if (/^[0-9]+$/.test(props.size)) {
    return `${props.size}px`;
  }
  return props.size;
});

const computedFill = computed(() => {
  if (props.color && Object.keys(colorMap).includes(props.color)) {
    return colorMap[props.color as ColorNames];
  } else {
    return `var(${props.color})` || 'currentColor';
  }

});

const iconPath = computed(() => {
  return icons[props.name]
})

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
