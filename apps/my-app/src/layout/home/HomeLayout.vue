<script setup lang="ts">
import AppButton from 'primevue/button'
import HomeFooter from './HomeFooter.vue';
import HomeTopbar from './HomeTopbar.vue';
</script>

<template>
  <div>
    <HomeTopbar class="w-full border" />
    <div class="py-10 border">
      <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
        <div class="text-surface-700 dark:text-surface-100 text-center">
          <div class="text-primary font-bold mb-4"><i class="pi pi-users" />&nbsp;POWERED BY YOU</div>
          <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-4">Human Accepted Interaction</div>
          <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">A place to write and help your fellow humans.</div>
          <AppButton label="Get Started" raised rounded class="font-bold px-8 py-4 whitespace-nowrap" />
        </div>
      </div>
    </div>
    <HomeFooter class="w-full border"/>
  </div>
</template>