<script setup lang="ts">
import {computed} from "vue";
import {icons} from "./icons";
import {IconNames, IconSize} from "./Icon";
import {CoreColor, SemanticColor} from "../tokens";

const SvgIconColor = {
  ...CoreColor,
  ...SemanticColor
} as const
type SvgIconColors = typeof SvgIconColor[keyof typeof SvgIconColor];

const props = withDefaults(defineProps<{
  color?: SvgIconColors,
  name: IconNames
  size?: IconSize
}>(), {
  size: 'md',
})

const iconColor = computed(() => {
  return 'var(--color-primary-500)'
})

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

const iconPath = computed(() => {
  return icons[props.name]
})

</script>

<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :style="{
        width: computedSize,
        height: computedSize,
        fill: iconColor,
      }"
  >
    <title>{{name}}</title>
    <path :d="iconPath"/>
  </svg>
</template>

<style>

</style>
