<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="my-6">
    <nav class="flex justify-between items-center">
      <div class="flex gap-10 items-center p-3">
        <UIcon @click="slideover = true" name="i-heroicons-bars-3" class="w-10 h-10" />
        <NuxtLink to="/">
          <img class=" w-12 h-12 rounded-full cursor-pointer" src="/logo.jpg">
        </NuxtLink>
        <span class=" font-bold text-2xl tracking-tight"> Perfumaria </span>
      </div>

      <!-- Menu user -->
      <div class="flex items-center gap-10">
        <NavbarColorMode></NavbarColorMode>
        <UDropdown v-if="authenticated" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
          :popper="{ placement: 'bottom-start' }">
          <UIcon name="i-heroicons-user-circle" class="w-8 h-8" />

          <template #account="{ item }">
            <div class="text-left">
              <p>
                Logado como
              </p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
            </div>
          </template>

          <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>

            <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
          </template>
        </UDropdown>
        <div v-else class="flex gap-2">
          <UButton color="white" @click="signInModal = true"> Entrar </UButton>
          <UButton color="white" @click="signUpModal = true"> Cadastrar-se </UButton>
        </div>
      </div>
    </nav>
    <div class="bg-[#333] h-1"></div>
  </div>

  <USlideover v-model="slideover" side="left" :ui="{ width: 'max-w-sm' }">
    <UCard class="flex flex-col flex-1"
      :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex justify-between items-center">
          <span> PERFUMARIA </span>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
            @click="slideover = false" />
        </div>
      </template>
      <ul class="flex flex-col gap-3 ml-5">
        <NuxtLink to="/oi" class="hover:text-gray-500"> Perfumes </NuxtLink>
        <NuxtLink to="/noticias" class="hover:text-gray-500"> Notícias </NuxtLink>
        <NuxtLink to="sobre-nos" class="hover:text-gray-500"> Sobre-nós </NuxtLink>
      </ul>
      <template #footer>
        <!-- Content -->
      </template>
    </UCard>
  </USlideover>

  <UModal v-model="signInModal" :overlay="false" :transition="false">
    <NavbarSignin />
  </UModal>

  <UModal v-model="signUpModal" :overlay="false" :transition="false">
    <NavbarSignup />
  </UModal>
</template>

<script setup lang="ts">
import { ref } from "vue"

const authenticated = ref(false)
const signInModal = ref(false)
const signUpModal = ref(false)
const items = [
	[{
		label: "natan@example.com",
		slot: "account",
		disabled: true,
	}],
	[{
		label: "Configurações",
		icon: "i-heroicons-cog-8-tooth",
	}],
	//   [{
	//     label: 'Documentation',
	//     icon: 'i-heroicons-book-open'
	//   }, {
	//     label: 'Changelog',
	//     icon: 'i-heroicons-megaphone'
	//   }, {
	//     label: 'Status',
	//     icon: 'i-heroicons-signal'
	//   }],
	[{
		label: "Sair",
		icon: "i-heroicons-arrow-left-on-rectangle",
	}],
]

const slideover = ref(false)
</script>
