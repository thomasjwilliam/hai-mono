<!--suppress ALL -->
<template>
  <nav>
    <ul>
      <li v-for="item in items">
        <a :href="item.link">{{item.text}}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

interface NavItem {
  icon?: string;
  text: string;
  link?: string;
}

defineProps<{
  items: NavItem[]
}>()

</script>

<style scoped>
nav {
  border-bottom: 1px solid var(--p-content-border-color);
  padding: 8px 16px;
}

ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 16px;
}

a {
  text-decoration: none;
  color: var(--p-text-color);
  transition: color var(--p-transition-duration) ease;
  cursor: pointer;
}

a:hover {
  color: var(--p-primary-500);
}
</style>
