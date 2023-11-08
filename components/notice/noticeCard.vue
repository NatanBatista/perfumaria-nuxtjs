<template>
    <div v-if="!isLoading">
        <div v-for="item in responseData" :key="item.id" class="border border-b-2 m-2">
            <NuxtLink :to="`/noticias/${item.id}`">
                <img :src="$config.public.appUrl + item.image.url" @click="modalImage = true"
                    class="p-1 w-full h-96 rounded-2xl object-cover">
                <h1 class="font-bold text-lg m-6"> {{ item.title }} </h1>

                <h3 class="p-6">
                    {{ item.description }}
                </h3>

                <div>
                    <h3 class="m-7"> Publicado por Natan Batista</h3>
                </div>
            </NuxtLink>
        </div>
    </div>

    <NoticeCardSkeleton v-else />
</template>

<script lang="ts">
export default {
	name: "noticeCardPage",
	props: {
		id: Number,
	}
}
interface Article {
    id: number
    title: string
    description: string
    image: {
        url: string
    }
}
</script>

<script setup lang="ts">

import { ref } from "vue"
import axios from "axios"
const modalImage = ref(false)

// eslint-disable-next-line no-undef
const config = useRuntimeConfig()

const responseData = ref(<Article[]>[])
const isLoading = ref(true)

const fetchData = async () => {
	try {
		const response = await axios.get(config.public.appUrl + "/articles")
		responseData.value = response.data
		console.log("DADOS: ", responseData.value)
		isLoading.value = false
	} catch (error) {
		console.error("Erro ao buscar os artigos: ", error)
	}
}
fetchData()
</script>