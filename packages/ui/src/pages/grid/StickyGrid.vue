<!--suppress ALL -->

<template>
  <div class="container">
    <div class="app-grid">
      <header class="app-grid-span-24">
        <span class="logo">Logo</span>
        <span>Link</span>
        <span>Link</span>
      </header>
    </div>
    <main class="app-grid">

      <div class="app-grid-span-6 d-flex flex-col">

        <div>
          <div>simple</div>
          <div>static</div>
        </div>

        <!-- Panel with scrollable section -->
        <section class="height-100 d-flex flex-col">
          <h4>Scrollable content</h4>
          <p>Good for long contents</p>
          <div class="height-100 pos-relative">
            <div class="scrollable">
              <div>inside scrollable</div>
              <div v-for="index in 300" :key="index">
                Document {{ index }}
              </div>
            </div>
          </div>
        </section>

        <div>
          <div>simple</div>
          <div>static</div>
        </div>

        <!-- Scrollable section -->
        <div class="height-100 pos-relative">
          <div class="scrollable">
            <div>inside scrollable</div>
            <section>
              <div v-for="index in 100" :key="index">
                Document {{ index }}
              </div>
            </section>
          </div>
        </div>

      </div>

      <div class="app-grid-span-6">
        <div class="height-100 min-height-0 pos-relative">
          <div class="scrollable min-height-0">
            <section>
              <div v-for="index in 300" :key="index">
                Context {{ index }}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="app-grid-span-6 d-flex flex-col">
        <!-- Panel with scrollable section -->
        <div class="d-flex flex-col height-100">
          <div class="height-100">
            <section class="d-flex flex-col height-100">
              <h4>Scrollable content</h4>
              <p>Good for long contents</p>
              <div class="height-100 pos-relative">
                <div class="scrollable">
                  <div>inside scrollable</div>
                  <div v-for="index in 3" :key="index">
                    Document {{ index }}
                  </div>
                </div>
              </div>
              <div>footer stuff</div>
            </section>
          </div>
        </div>
      </div>

      <div class="app-grid-span-6 d-flex flex-col">
        <div>foo</div>
        <div class="pos-relative d-flex flex-col min-height-0 height-100">
          <div class="scrollable min-height-0 height-100">
            <div v-for="index in 300" :key="index">
              Document {{ index }}
            </div>
          </div>
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
</script>

<style>

.pos-absolute {
  position: absolute;
}

.pos-relative {
  position: relative;
}

.height-100 {
  height: 100%;
}

.min-height-0 {
  min-height: 0;
}

.d-flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

.flex-shrink {
  flex-shrink: 1;
}

.app-grid-span-6 {
  grid-column: span 6;
}

.app-grid-span-12 {
  grid-column: span 12;
}

.app-grid-span-24 {
  grid-column: span 24;
}

.app-grid {
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

.scrollable {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
}

.border {
  border: solid 1px grey;
}
</style>
