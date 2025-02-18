<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref} from "vue";
import {ClientCore} from "@hai/client-app";
import type {DocumentBrowserState} from "@hai/client-dashboard";
import DocumentList from "../../organisms/document-browser/DocumentList.vue";

const core = inject('core') as ClientCore
const vModel = core.getDocumentBrowser()
const vState = ref(vModel.getState())
const vStateSub = (s: DocumentBrowserState) => {
  vState.value = s
}

onMounted(() => {
  vModel.subscribe(vStateSub)
  vModel.loadDocuments()
})

onUnmounted(() => {
  vModel.unsubscribe(vStateSub)
})

const deleteDocument = (id: string) => {
  vModel.deleteDocument(id)
}

</script>

<template>
  <div>
    <DocumentList
        :documents="vState.documents"
        @delete-doc="deleteDocument"
    />
  </div>
</template>
