<template>
  <UCard class="container mx-auto">
      <!-- <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard>
  </UContainer> -->
      <template #header>
      <Navbar></Navbar>

      </template>
      <NuxtPage />

      <template #footer>
        <Footer></Footer>
      </template>
  </UCard>
</template>
