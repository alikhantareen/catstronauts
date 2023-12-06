<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['id', 'thumbnail', 'topic', "likes", "modules"])

</script>
<template>
  <div className="card card-image-cover shadow-2xl shadow-indigo-500/50">
	<img :src="props.thumbnail" alt="cats" />
	<div className="card-body">
		<h2 className="card-header">{{ props.topic }}</h2>
		<p className="text-content2">Likes: {{ props.likes }} 💖</p>
    <p className="text-content2">Modules Count: {{ props.modules }}</p>
		<div className="card-footer">
      <RouterLink :to="{ name: 'SingleTrack', params: { id: props.id } }">
        <button className="btn-secondary btn">Learn More</button>
      </RouterLink>
		</div>
	</div>
</div>
</template>
<style lang=""></style>


<!-- <RouterLink :to="{ name: 'SingleProperty', params: { id: props.id } }">
  <div class="max-w-xs mx-auto overflow-hidden bg-slate-800 text-white rounded-lg shadow-lg">
    <img class="object-cover w-full h-48" :src="props.url" alt="Card image" />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ props.title }}</h3>
      <p class="text-white">Category: {{ props.category }}</p>
    </div>
  </div>
</RouterLink> -->