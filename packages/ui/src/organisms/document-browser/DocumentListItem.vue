<template>
  <div class="document">
    <div class="date-created">{{document.dateCreated}}</div>
    <div>{{document.title}}</div>
    <div>{{document.content}}</div>
    <div>
      <Button @click="viewDoc" text="View" variant="text" size="sm" />
      <Button @click="editDoc" text="Edit" variant="text" size="sm" />
      <Button @click="deleteDoc" text="Delete" variant="text" size="sm" color="danger" />
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

.date-created {
  @apply text-sm
}
</style>
