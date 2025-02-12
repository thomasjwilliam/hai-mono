<template>
  <div class="container">
    <div class="grid">
      <header class="header grid-span-24">
        <span class="logo">Logo</span>
        <span>Link</span>
        <span>Link</span>
      </header>
    </div>
    <main class="grid">
      <div class="grid-span-12">
        <div class="content">
          <section>
            <div v-for="index in 100" :key="index">
              Document {{ index }}
            </div>
          </section>
        </div>
      </div>
      <div class="grid-span-12">
        <div class="content">
          <section>
            <div>Context</div>
          </section>
        </div>
      </div>
    </main>
    <footer>
      <span>Link</span>
      <span>Link</span>
      <span>Link</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from "../../organisms/header/Header.vue";
</script>

<style>
.grid-span-12 {
  grid-column: span 12;
  position: relative;
}

.grid-span-24 {
  grid-column: span 24;
}

.grid {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;
  /* Padding for edge spacing */
  /* padding-inline: 24px; */
}


.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  column-gap: 16px;
  /* Padding for edge spacing */
  /* padding-inline: 24px; */

  height: 100vh;
  overflow: auto;
}

header,
footer {
  position: sticky;
  top: 0;
}

main {
  position: relative;
}

.content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  margin: auto;
  overflow-y: scroll;
}

.border {
  border: solid 1px grey;
}
</style>
