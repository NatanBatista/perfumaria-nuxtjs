<template>
    <div class="border border-b-2 m-2">
        <USkeleton class="p-1 w-full h-96 rounded-2xl" :ui=" { background: 'bg-gray-300 dark:bg-neutral-700'}"/>
        <NuxtLink :to="`/noticias/${id}`">
            <USkeleton class="m-6 w-32 h-4" :ui=" { background: 'bg-gray-300 dark:bg-neutral-700'}"/>
            <USkeleton class="m-6 h-4 w-72" :ui=" { background: 'bg-gray-300 dark:bg-neutral-700'}"/>

            <div>
                <USkeleton class="m-7 h-4 w-44" :ui=" { background: 'bg-gray-300 dark:bg-neutral-700'}"/>
            </div>
        </NuxtLink>
    </div>

    <UModal v-model="modalImage">
        <img src="/perfume.jpg" />
    </UModal>
</template>

<script lang="ts">
export default {
	name: "noticeCardPage",
	props: {
		id: Number
	}
}
</script>

<script setup lang="ts">
import { ref } from "vue"
const modalImage = ref(false)
</script>