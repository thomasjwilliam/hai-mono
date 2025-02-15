<template>
  <div class="document">
    <p class="document__title">{{ document.title }}</p>
    <p class="document__content">{{ document.content }}</p>
    <div>
      <Button @click="viewDoc" text="View" variant="text" size="sm"/>
      <Button @click="editDoc" text="Edit" variant="text" size="sm"/>
      <Button @click="deleteDoc" text="Delete" variant="text" size="sm" color="danger"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../../atoms/button/Button.vue";
import type {DocumentListItem} from "./DocumentBrowser.state";

const props = defineProps<{
  document: DocumentListItem
}>()

const emit = defineEmits<{
  (e: 'delete-doc', id: string): void
  (e: 'edit-doc', id: string): void
  (e: 'view-doc', id: string): void
}>()

const deleteDoc = () => {
  emit('delete-doc', props.document.id);
};

const editDoc = () => {
  emit('edit-doc', props.document.id);
};

const viewDoc = () => {
  emit('view-doc', props.document.id);
};
</script>

<style>
@reference 'tailwindcss';

.document {
  @apply p-4
}

.document__title {
  color: var(--p-text-color);
  @apply
  text-xl font-bold
}

.document__content {
  color: var(--p-text-color);
}

</style>
