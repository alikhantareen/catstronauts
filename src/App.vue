<script setup>
import Navbar from './components/Navbar-component.vue'
import Footer from "./components/Footer-Component.vue"
</script>

<template>
  <main class="font-mono flex flex-col gap-4">
    <Navbar />
    <router-view>
    </router-view>
    <Footer />
  </main>
</template>

<style scoped></style>
