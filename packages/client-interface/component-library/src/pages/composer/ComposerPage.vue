<script setup lang="ts">
import Button from "../../atoms/button/Button.vue";
import Navigation from "../../organisms/navigation/Navigation.vue";

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
    <textarea
        class="w-[500px] h-[500px] border border-gray-300 rounded-md p-2"
        placeholder="Enter your text here">
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
</style>
