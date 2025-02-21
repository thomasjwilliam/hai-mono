<script setup lang="ts">
import DocumentList from "../../organisms/document-browser/DocumentList.vue";
import type {DocumentListItem as DocumentListItemType} from "../../organisms/document-browser/DocumentBrowser.state";
import AppButton from "../../atoms/button/Button.vue";

withDefaults(defineProps<{
  documents: DocumentListItemType[]
  loading?: boolean
}>(), {
  loading: false,
})

const emit = defineEmits<{
  (e: 'delete-doc', id: string): void
  (e: 'edit-doc', id: string): void
  (e: 'start-doc'): void
  (e: 'view-doc', id: string): void
}>()

const onDeleteDoc = (id: string) => {
  emit('delete-doc', id);
};

const onEditDoc = (id: string) => {
  emit('edit-doc', id);
};

const onStartDoc = () => {
  emit('start-doc');
};

const onViewDoc = (id: string) => {
  emit('view-doc', id);
};
</script>

<template>
  <div>
    <div>
      <AppButton
          @click="onStartDoc"
          label="Start a new document"
          variant="text"
      />
    </div>
    <DocumentList
        :documents="documents"
        @delete-doc="onDeleteDoc"
        @edit-doc="onEditDoc"
        @view-doc="onViewDoc"

    />
  </div>
</template>
