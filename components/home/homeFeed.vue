<template>
    <UContainer>
        <h2 class="font-mono font-bold text-2xl leading-10 ml-10 my-10">
            {{titulo}}
        </h2>
        <div class="flex justify-center items-center">
            <div class="flex flex-wrap gap-3">
                <div v-for="item in 3" :key="item"
                    class="border border-b-2 h-[470px] w-[350px] rounded-2xl overflow-clip relative">
                    <div class="bg-gray-50 dark:bg-neutral-900 h-[480px] w-[350px] rounded-t-2xl transform transition
                translate-y-2/3 hover:translate-y-1/3"> <!--- DIV1-->
                        <div class="flex flex-col items-center"> <!-- DIV2-->
                            <span
                                class="flex justify-center items-center h-16 w-16 rounded-full bg-blue-300 absolute -top-5">
                                <UIcon name="i-heroicons-arrow-up" class="h-6 w-6" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script>
export default {
	props: {
		titulo: String
	}
}
</script>
  