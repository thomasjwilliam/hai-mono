<script setup lang="ts">
import HomeFooter from './HomeFooter.vue';
import HomeTopbar from './HomeTopbar.vue';
import HomeBanner from "../../views/home/HomeBanner.vue";
import HomeFeatures from "../../views/home/HomeFeatures.v2.vue";
</script>

<template>
  <div>
    <HomeTopbar class="w-full border" />
    <div class="py-10 border">
      <HomeBanner/>
      <HomeFeatures />
    </div>
    <HomeFooter class="w-full border"/>
  </div>
</template>