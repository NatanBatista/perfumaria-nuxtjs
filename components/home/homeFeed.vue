<template>
    <UContainer>
        <div class="flex justify-between font-mono font-bold text-2xl leading-10">
            <span>{{ titulo }}</span>
            <NuxtLink v-if="feedType == 1" to="/noticias" class="ml-10">
                <UIcon class="" name="i-heroicons-chevron-double-right"> </UIcon>
            </NuxtLink>
            <NuxtLink v-if="feedType == 2" to="/perfumes" class="ml-10">
                <UIcon class="" name="i-heroicons-chevron-double-right"> </UIcon>
            </NuxtLink>
            <NuxtLink v-if="feedType == 3" to="/notas" class="ml-10">
                <UIcon class="" name="i-heroicons-chevron-double-right"> </UIcon>
            </NuxtLink>
        </div>
        <div class="bg-[#333] w-32 h-1"></div>
        <div>
            <div class="flex flex-wrap justify-center gap-6 my-10">
                <div v-for="item in data" :key="item"
                    class="border border-b-2 h-[350px] w-[330px] rounded-2xl overflow-clip relative">
                    <div class="absolute -top-0 bg-gray-300 dark:bg-neutral-700 h-full w-full rounded-t-2xl transform transition
                translate-y-2/3 duration-700 ease-in-out hover:translate-y-1/3">
                        <div class="flex flex-col items-center text-black">
                            <span
                                class="flex justify-center items-center h-16 w-16 rounded-full animate-bounce bg-gray-100 dark:bg-neutral-800 absolute -top-5">
                                <UIcon name="i-heroicons-arrow-up" class="h-6 w-6" />
                            </span>
                        </div>
                        <HomeFeedNotice v-if="feedType == 1" :isLoading="false" :author="item.author" :title="item.title"
                        :description="item.description">
                        </HomeFeedNotice>
                        <HomeFeedCard v-if="feedType == 2 || 3" :isLoading="true"></HomeFeedCard>
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script>

export default {
	props: {
		titulo: String,
		feedType: Number,
		isLoading: Boolean,
		data: Object
	},
}
</script>

<script setup>
</script>
  