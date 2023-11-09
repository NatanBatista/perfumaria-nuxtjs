<template>
  <HomeFotos></HomeFotos>
  <HomeFeed v-if="!isLoadingNotice" titulo="Notícias" feedType="1" :data="responseData"></HomeFeed>
  <HomeFeed v-else titulo="Notícias" feedType="1" isLoading></HomeFeed>
  <HomeFeed titulo="Perfumes" feedType="2"></HomeFeed>
  <HomeFeed titulo="Notas" feedType="3"></HomeFeed>

</template>

<script>
export default {
	name: "HomePage"
}
</script>

<script setup>
import axios from "axios"
import {ref} from "vue"


// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const responseData = ref([]) // Defina uma variável para armazenar os dados da resposta
const isLoadingNotice = ref(true)

// Esta função fará a requisição GET para o endpoint /articles no servidor local
const fetchData = async () => {
	try {
		const response = await axios.get(config.public.appUrl + "/articles3")
		responseData.value = response.data // Atribua os dados à variável responseData
		isLoadingNotice.value = false
	} catch (error) {
		console.error("Erro ao buscar os dados:", error)
	}
}

// Chama a função para buscar os dados assim que o componente for montado
fetchData()
</script>
