<script setup lang="ts">
import Button from "../../atoms/button/Button.vue";

defineProps<{
  documentContent: string;
}>()

const emit = defineEmits<{
  (e: 'save-doc'): void
}>()

const saveDoc = () => {
  emit('save-doc');
};
</script>

<template>
  <div>
    <textarea
        class="composer-editor__textarea"
        placeholder="Enter your text here"
        v-model="documentContent"
    >
    </textarea>
    <br>
    <Button
        @click="saveDoc"
        label="Save"
        color="primary"
    />
  </div>
</template>

<style>
@reference '../../assets/styles/style.css';

.composer-editor__textarea {
  @apply w-[500px] h-[500px] border border-gray-300 rounded-md p-2
}
</style>
