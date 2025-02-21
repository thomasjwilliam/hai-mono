<script setup lang="ts">
import {computed} from 'vue';
import PrimeButton from 'primevue/button';
import type {IconNames, IconSize} from "../icon/Icon";
import SvgIcon from "../icon/SvgIcon.vue";
import {CoreSemanticColor} from "../tokens";
import type {CoreSemanticColors} from "../tokens";

const props = withDefaults(defineProps<{
  color?: CoreSemanticColors;
  icon?: IconNames;
  text: string;
}>(), {
  color: CoreSemanticColor.Primary,
});

const buttonLinkStyle = computed(() => {
  if (!props.color) return
  return {
    color: `var(--color-${props.color}-500)`,
    gap: '0.1rem',
  }
})

const pButtonLabel = computed(() => {
  return props.text;
})

const emit = defineEmits<{
  (e: 'click', event: Event): void
}>()

const iconColor = computed(() => {
  return props.color;
})

const onClick = (event: Event) => {
  emit("click", event);
};
</script>

<template>
  <PrimeButton
      :label="pButtonLabel"
      variant="link"
      @click="onClick"
      :style="buttonLinkStyle"
  >
    <span class="p-button-label">{{ text }}</span>
    <SvgIcon
        v-if="icon"
        :color="iconColor"
        :name="icon"
    />
  </PrimeButton>
</template>

<style scoped>
</style>
