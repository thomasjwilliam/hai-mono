<script setup lang="ts">
import ComposerFooter from './ComposerFooter.vue';
import ComposerTopbar from './ComposerTopbar.vue';
import MyButton from "../design/Button.vue";
</script>

<template>
  <div>
    <ComposerTopbar class="fixed top-0 w-full border" />
    <div class="py-10 border">
      <MyButton label="Click me" />
      <router-view/>
    </div>
    <ComposerFooter class="fixed bottom-0 w-full border"/>
  </div>
</template>

