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
    :class="classList"
    unstyled
  />
</template>

<script setup lang="ts">
import {computed} from "vue";
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

const classList = computed(() => {
  return [
    'btn',
    props.color && `btn--color-${props.color}`,
    props.disabled && 'btn--disabled',
    props.size && `btn--size-${props.size}`,
    props.style && `btn--type-${props.style}`,
  ]
})
</script>

<style>

.btn {
  border-radius: 0.25rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }

  &.btn--disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}

.btn--color-error {
  background-color: var(--error-color-500);
  border: 1px solid var(--error-color-600);

}
.btn--color-primary {
  background-color: var(--primary-color-500);
  border: 1px solid var(--primary-color-600);
  &:hover {
    background-color: var(--primary-color-600);
  }
}
.btn--color-secondary {
  background-color: var(--secondary-color-500);
  border: 1px solid var(--secondary-color-600);
  &:hover {
    background-color: var(--secondary-color-600);
  }
}
.btn--color-success {
  background-color: var(--success-color-500);
  border: 1px solid var(--success-color-600);
  &:hover {
    background-color: var(--success-color-600);
  }
}
.btn--color-warn {
  background-color: var(--warn-color-500);
  border: 1px solid var(--warn-color-600);
  &:hover {
    background-color: var(--warn-color-600);
  }
}

.btn--size-large {
  font-size: 1.25rem;
  padding: 1rem 2rem;
}

.btn--size-small {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

.btn--type-outlined {
  background-color: transparent;
}
.btn--type-text {
  background-color: transparent;
}

</style>
