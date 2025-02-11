<script setup lang="ts">
import DesignFooter from './DesignFooter.vue';
import DesignTopbar from './DesignTopbar.vue';
import Library from "./library/Library.vue";

</script>

<template>
  <div>
    <DesignTopbar class="w-full border" />
    <div class="py-10 border">
      <Library />
    </div>
    <DesignFooter class="w-full border"/>
  </div>
</template>

<style scoped>
</style>
