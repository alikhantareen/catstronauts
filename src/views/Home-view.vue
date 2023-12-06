<script setup>
import Card from '../components/Card-component.vue'
import HeroComponent from '../components/Hero-component.vue';
import { onMounted, reactive } from 'vue'

const api_data = reactive({ data: [] })

async function getAllTracks() {
  const properties = await fetch('http://localhost:5050/getAllTracks')
  const res = await properties.json()
  if (res.success) {
    api_data.data = [...res.tracks]
  }
}

onMounted(() => {
  getAllTracks()
})
</script>

<template>
  <main>
    <HeroComponent />
    <h1 id="cats" class="text-center text-3xl md:text-5xl m-16 underline">Our Famouse Catstronauts 🚀</h1>
    <section class="p-4 flex gap-4 justify-around flex-wrap">
      <Card
      v-for="item in api_data.data"
      :key="item.id"
      :id="item.id"
      :thumbnail="item.thumbnail"
      :topic="item.topic"
      :likes="item.numberOfLikes"
      :modules="item.modulesCount"
       />
    </section>
  </main>
</template>

<style scoped></style>
