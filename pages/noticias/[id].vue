<template>
    <div>
        <img alt="Notícia" :src="$config.public.appUrl + responseData?.image.url" class="p-1 w-full h-[452px] rounded-2xl object-cover">
        <h1 class="font-bold text-lg m-6"> {{ responseData?.title }}</h1>
        <div class="m-6 leading-relaxed">
            {{ responseData?.description }}
        </div>
        <div class="flex justify-end items-center gap-2 m-7 mt-10">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
            <h3 class=""> Publicado por Natan Batista</h3>
        </div>

        <span class="font-bold m-6 pb-6">
            Comentários
        </span>
        <Comments />
    </div>
</template>

<script lang="ts">
export default {
	name: "showNoticePage"
}

interface ArticleData {
    id: number
    title: string
    description: string
    image: {
        url: string
    }
}

</script>

<script setup lang="ts">
import axios from "axios"
import {ref, onMounted} from "vue"

const responseData = ref<ArticleData>() // Defina uma variável para armazenar os dados da resposta
// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
// eslint-disable-next-line no-undef
const route = useRoute()
const id = route.params.id

// Esta função fará a requisição GET para o endpoint /articles no servidor local
const fetchData = async () => {
	try {
		const response = await axios.get(config.public.appUrl + `/articles/${id}`)
		responseData.value = response.data // Atribua os dados à variável responseData
		// isLoadingNotice.value = false
		console.log(responseData.value)
	} catch (error) {
		console.error("Erro ao buscar os dados:", error)
	}
}

// Chama a função para buscar os dados assim que o componente for montado
onMounted(fetchData)
</script>