<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navigation from "../../organisms/navigation/Navigation.vue";
import ComposerEditor from "./ComposerEditor.vue";
import {onMounted, ref} from "vue";

const route = useRoute()

const fakeComposerState = ref({
  document: '',
})

onMounted(() => {
  if (route.params.id === 'new') {
    fakeComposerState.value.document = 'new document'
  } else {
    fakeComposerState.value.document = 'existing document'
  }
})

/**
 * Then watch for route changes
 * https://router.vuejs.org/guide/essentials/dynamic-matching#Reacting-to-Params-Changes
 */

const navItems = [{
  text: 'HAI',
  link: '/'
}, {
  text: 'Dashboard',
  link: '/dashboard'
}, {
  text: 'Composer',
  link: '/composer'
}, {
  text: 'Test',
  link: '/test'
}]

const saveDoc = () => {};
</script>

<template>
  <div>
    <Navigation :items="navItems" />
    <h1 class="text-4xl">Composer Page</h1>
    <h2>{{route.params.id}}</h2>
    <ComposerEditor
        :document-content="fakeComposerState.document"
        @save-doc="saveDoc"
    />
  </div>
</template>

<style>
</style>
