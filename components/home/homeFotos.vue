<template>
<div>
    <div class="grid grid-rows-6 grid-cols-10 grid-flow-col h-96 gap-4">
      <div class="row-span-6 col-span-4 rounded-xl transition-transform hover:scale-110">
        <div class="relative h-full">
          <img 
            src="/perfume.jpg"
            @click="modalPerfume = true"
            alt="PERFUME"
            class="rounded-2xl object-cover w-full h-full">
        </div>
      </div>

      <!-- SEGUNDA IMAGEM -->
      <div class="row-span-4 col-span-6 transition-transform hover:scale-110">
        <div class="h-full">
          <img 
            src="/perfumes.jpg" 
            @click="modalPerfumes = true"
            alt="perfumes" 
            class="rounded-2xl object-cover w-full h-full">
        </div>
      </div>
      <div class="row-span-2 col-span-6">
        <img 
          src="/perfumes2.jpg"
          @click="modalPerfumes2 = true"
          alt="perfumes"
           class="rounded-2xl object-cover w-full h-full">
      </div>
    </div>
  </div>
  <UModal v-model="modalPerfume">
    <img src="/perfume.jpg" 
      alt="perfumes" 
      class="rounded-2xl">
  </UModal>
  <UModal v-model="modalPerfumes">
    <img src="/perfumes.jpg" 
      alt="perfumes" 
      class="rounded-2xl">
  </UModal>
  <UModal v-model="modalPerfumes2">
    <img src="/perfumes2.jpg" 
      alt="perfumes" 
      class="rounded-2xl">
  </UModal>
</template>

<script setup>
const modalPerfume = ref(false)
const modalPerfumes = ref(false)
const modalPerfumes2 = ref(false)
</script>