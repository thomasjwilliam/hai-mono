<script setup lang="ts">
import DashboardFooter from './DashboardFooter.vue';
import DashboardTopbar from './DashboardTopbar.vue';
import DocumentList from "../../views/dashboard/DocumentList.vue";
</script>

<template>
  <div>
    <DashboardTopbar class="fixed top-0 w-full border" />
    <div class="py-10 border">
      <DocumentList />
    </div>
    <DashboardFooter class="fixed bottom-0 w-full border"/>
  </div>
</template>