<script setup>
</script>

<template>
  <nav class="flex justify-between p-4">
    <RouterLink class="link text-xl flex gap-2" to="/"> 
      <img src="../assets//spaceKitty.png" width="40" alt="logo">
      <h1>Catstronauts</h1>
    </RouterLink>
    <span class="flex justify-between items-center gap-8">
      <RouterLink class="link" to="/about"> About </RouterLink>
      <RouterLink class="link" to="/contact"> Contact </RouterLink>
    </span>
  </nav>
</template>

<style></style>
