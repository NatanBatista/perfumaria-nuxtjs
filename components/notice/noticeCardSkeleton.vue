<template>
    <div class="border border-b-2 m-2">
        <USkeleton class="p-1 w-full h-96 rounded-2xl"/>
        <NuxtLink :to="`/noticias/${id}`">
            <USkeleton class="m-6 w-32 h-4"/>
            <USkeleton class="m-6 h-4 w-72" />

            <div>
                <USkeleton class="m-7 h-4 w-44" />
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