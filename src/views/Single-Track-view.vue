<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const api_data = reactive({ data: {} })
const route = useRoute()
const id = route.params.id

async function getSingleTrack(id) {
  const properties = await fetch(`http://localhost:5050/single_track/${id}`)
  const res = await properties.json()
  if (res.success) {
    api_data.data = { ...res.track[0] }
    console.log(api_data.data)
  }
}

onMounted(() => {
  getSingleTrack(id)
})
</script>
<template>
  <main className="flex flex-col gap-4 p-4 justify-center items-center">
    <img class="shadow-2xl shadow-indigo-500/50 rounded-lg" :src="api_data.data.thumbnail" width="1080" alt="banner">
    <section class="shadow-2xl shadow-indigo-500/50 p-4 w-full flex flex-col gap-4 justify-center rounded-lg max-w-[68rem]">
        <h1 class="text-4xl font-bold">{{ api_data.data.topic }}</h1>
        <p class="text-lg">{{ api_data.data.description }} <span class="text-slate-500 italic">Written by: {{ api_data.data.authorId }}</span></p>
        <div class="flex justify-around w-full p-4 items-center">
            <p class="text-xl">Modules Count: {{ api_data.data.modulesCount }}</p>
            <p class="text-xl">Total Views: {{ api_data.data.numberOfViews }}</p>
            <p class="text-xl">Total Likes: {{ api_data.data.numberOfLikes }} 💖</p>
        </div>
    </section>
  </main>
</template>
<style lang=""></style>
