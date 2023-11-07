<template>
    <div class="border border-b-2 m-2">
        <img src="/perfume.jpg" @click="modalImage = true" class="p-1 w-full h-96 rounded-2xl object-cover">
        <NuxtLink :to="`/noticias/${id}`">
            <h1 class="font-bold text-lg m-6"> Titulo monstruoso </h1>

            <h3 class="p-6">At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
                et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </h3>

            <div>
                <h3 class="m-7"> Publicado por Natan Batista</h3>
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