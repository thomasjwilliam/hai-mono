<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref} from "vue";
import { useRouter } from 'vue-router'
import {ClientCore} from "@hai/client-app";
import type {DocumentBrowserState} from "@hai/client-dashboard";
import DocumentBrowser from "./DocumentBrowser.vue";

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

const router = useRouter()
const startNewDocument = () => {
  router.push('/composer/new')
}

const openDocument = (id: string) => {
  router.push(`/composer/${id}`)
}

</script>

<template>
  <div>
    <DocumentBrowser
        :documents="vState.documents"
        @delete-doc="deleteDocument"
        @start-doc="startNewDocument"
        @view-doc="openDocument"
    />
  </div>
</template>
