<script setup lang="ts">
import ComposerFooter from './ComposerFooter.vue';
import ComposerTopbar from './ComposerTopbar.vue';
</script>

<template>
  <div>
    <ComposerTopbar class="fixed top-0 w-full border" />
    <div class="py-10 border">
      <router-view/>
    </div>
    <ComposerFooter class="fixed bottom-0 w-full border"/>
  </div>
</template>

