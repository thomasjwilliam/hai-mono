<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navigation from "../../organisms/navigation/Navigation.vue";
import ComposerEditor from "./ComposerEditor.vue";

const route = useRoute()

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

const emit = defineEmits<{
  (e: 'save-doc'): void
}>()

const saveDoc = () => {
  emit('save-doc');
};
</script>

<template>
  <div>
    <Navigation :items="navItems" />
    <h1 class="text-4xl">Composer Page</h1>
    <h2>{{route.params.id}}</h2>
    <ComposerEditor
        @save-doc="saveDoc"
    />
  </div>
</template>

<style>
</style>
