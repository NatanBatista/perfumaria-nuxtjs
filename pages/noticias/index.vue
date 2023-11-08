<template>
    <UContainer class="">
        <NoticeFeed></NoticeFeed>
        <div class="flex justify-center flex-wrap gap-32 md:flex-nowrap">
            <NoticeFeed></NoticeFeed>
            <NoticeFeed></NoticeFeed>
        </div>
        <NoticeCardSkeleton v-if="isLoading"></NoticeCardSkeleton>
        <div v-else class="flex flex-col items-center gap-2">
            <div class="min-w-full">
                <NoticeCard/>
            </div>

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

// eslint-disable-next-line no-undef

const isLoading = ref(false)
const page = ref(1)
const items = ref(Array(55))

</script>