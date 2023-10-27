<template>
    <div v-if="!isLoading" class="m-10">
      <div class="flex gap-6 justify-center mt-2 mb-4">
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
      <div class="flex gap-6 justify-center mt-16 mb-4">
        <h2><USkeleton class="h-4 w-[125px]" /></h2>
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