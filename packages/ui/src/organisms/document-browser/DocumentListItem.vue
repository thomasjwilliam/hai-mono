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

<template>
  <div class="document">
    <p class="document__title">{{ document.title }}</p>
    <p class="document__content">{{ document.content }}</p>
    <div>
      <Button @click="viewDoc" label="View" size="small"/>
      <Button @click="editDoc" label="Edit" size="small"/>
      <Button @click="deleteDoc" label="Delete" size="small" color="danger"/>
    </div>
  </div>
</template>

<style>
@reference '../../styles/app.css';

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
