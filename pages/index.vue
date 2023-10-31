<template>
  <HomeFotos></HomeFotos>
  <HomeFeed titulo="Notícias" feedType="1" :data="responseData"></HomeFeed>
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

let responseData = ref([]) // Defina uma variável para armazenar os dados da resposta
console.log(responseData)
// Esta função fará a requisição GET para o endpoint /articles no servidor local
const fetchData = async () => {
	try {
		const response = await axios.get("http://localhost:3001/articles")
		console.log("Dados recebidos:", response.data)
		responseData.value = response.data // Atribua os dados à variável responseData
	} catch (error) {
		console.error("Erro ao buscar os dados:", error)
	}
}

// Chama a função para buscar os dados assim que o componente for montado
fetchData()
</script>
