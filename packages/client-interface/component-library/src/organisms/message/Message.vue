<script setup lang="ts">
import {computed} from "vue";
import PrimeVueMessage from 'primevue/message';
import AppIcon from "../../atoms/icon/SvgIcon.vue";

const props = defineProps<{
  title: string;
  icon?: string;
}>()

const iconColor = computed(() => {
  return 'primary' as const
})

</script>

<template>
  <PrimeVueMessage closable>
    <template #icon v-if="props.icon">
      <AppIcon name="account" size="md" :color="iconColor" />
    </template>
    {{props.title}}
  </PrimeVueMessage>
</template>
