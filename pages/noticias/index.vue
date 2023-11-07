<template>
    <UContainer class="">
        <NoticeFeed></NoticeFeed>
        <div class="flex justify-center flex-wrap gap-10 md:flex-nowrap">
            <NoticeFeed></NoticeFeed>
            <NoticeFeed></NoticeFeed>
        </div>
        <div class="flex flex-col items-center gap-2">
            <NoticeCard v-for="items in 5" :key="items" :id="items"></NoticeCard>

            <UPagination v-model="page" :page-count="5" :total="items.length" />
        </div>
    </UContainer>
</template>

<script lang="ts">

export default {
	name: "NoticePage"
}
</script>

<script setup lang="ts">
import {ref} from "vue"
const page = ref(1)
const items = ref(Array(55))
</script>