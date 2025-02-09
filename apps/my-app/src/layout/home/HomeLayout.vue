<script setup lang="ts">
import AppButton from 'primevue/button'
import HomeFooter from './HomeFooter.vue';
import HomeTopbar from './HomeTopbar.vue';
</script>

<template>
  <div>
    <HomeTopbar class="w-full border" />
    <div class="py-10 border">
      <div class="px-6 py-20 md:px-12 lg:px-20">
        <div class="text-center">
          <div class="text-primary font-bold mb-4"><i class="pi pi-users" />&nbsp;POWERED BY YOU</div>
          <div class="font-bold text-5xl mb-4">Human Accepted Interaction</div>
          <div class="text-2xl mb-8">A place to write and help your fellow human.</div>
          <AppButton label="Get Started" raised rounded class="font-bold px-8 py-4 whitespace-nowrap" />
        </div>
      </div>

      <div class="px-6 py-20 md:px-12 lg:px-20 text-center">
        <div class="mb-4 font-bold text-3xl">
          <span class="">One Product, </span>
          <span class="text-primary-600 dark:text-primary-400">Many Solutions</span>
        </div>
        <div class="mb-[3rem]">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3.5 gap-y-6">
          <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto"
                >
                    <i class="pi pi-desktop text-primary-500 dark:text-primary-400" style="font-size: 2rem" />
                </span>
            <div class="text-xl mb-2 font-medium">Built for Developers</div>
            <p class="leading-normal max-w-sm mx-auto text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto"
                >
                    <i class="pi pi-lock text-primary-500 dark:text-primary-400" style="font-size: 2rem" />
                </span>
            <div class="text-xl mb-2 font-medium">End-to-End Encryption</div>
            <p class="leading-normal max-w-sm mx-auto text-center">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
          </div>
          <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto"
                >
                    <i class="pi pi-check-circle text-primary-500 dark:text-primary-400" style="font-size: 2rem" />
                </span>
            <div class="text-xl mb-2 font-medium">Easy to Use</div>
            <p class="leading-normal max-w-sm mx-auto text-center">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
          </div>
          <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto"
                >
                    <i class="pi pi-globe text-primary-500 dark:text-primary-400" style="font-size: 2rem" />
                </span>
            <div class="text-xl mb-2 font-medium">Fast & Global Support</div>
            <p class="leading-normal max-w-sm mx-auto text-center">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</p>
          </div>
          <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto"
                >
                    <i class="pi pi-github text-primary-500 dark:text-primary-400" style="font-size: 2rem" />
                </span>
            <div class="text-xl mb-2 font-medium">Open Source</div>
            <p class="leading-normal max-w-sm mx-auto text-center">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
          </div>
          <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto"
                >
                    <i class="pi pi-shield text-primary-500 dark:text-primary-400" style="font-size: 2rem" />
                </span>
            <div class="text-xl mb-2 font-medium">Trusted Security</div>
            <p class="leading-normal max-w-sm mx-auto text-center">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</p>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter class="w-full border"/>
  </div>
</template>