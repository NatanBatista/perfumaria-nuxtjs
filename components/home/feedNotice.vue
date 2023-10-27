<template>
    <div v-if="!isLoading" class="m-10">
      <div class="flex gap-6 items-center mt-16 mb-4">
        <UAvatar class="transition duration-700 ease-in-out hover:scale-150" size="md" alt="Avatar" icon="i-heroicons-photo" />
        <h2>Natan Batista</h2>
      </div>
      <span>
        "At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti quos dolores et quas molestias excepturi
        sint occaecati cupiditate non provident.
      </span>
    </div>
  
    <div v-else class="m-10">
      <div class="flex gap-6 items-center mt-16 mb-4">
        <USkeleton class="h-10 w-10" :ui="{ rounded: 'rounded-full' }" />
        <h2><USkeleton class="h-4 w-[150px]" /></h2>
      </div>
      <span>
        <USkeleton v-for="item in 5" :key="item" class="h-4 w-[250px] mb-4" />
      </span>
    </div>
  </template>
  
<script>
export default {
	props: {
		isLoading: Boolean
	}
}
</script>
  