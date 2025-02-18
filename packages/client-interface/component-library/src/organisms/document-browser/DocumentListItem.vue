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
    <h2 class="document__title">{{ document.title }}</h2>
    <p class="document__content">{{ document.content }}</p>
    <div>
      <Button
          @click="viewDoc"
          label="View"
          size="small"
          variant="text"
      />
      <Button
          @click="editDoc"
          label="Edit"
          size="small"
          variant="text"
      />
      <Button
          @click="deleteDoc"
          label="Delete"
          size="small"
          color="danger"
          variant="text"
      />
    </div>
  </div>
</template>

<style>
@reference '../../assets/styles/style.css';

.document__title {
  @apply
  text-xl font-bold
}

</style>
