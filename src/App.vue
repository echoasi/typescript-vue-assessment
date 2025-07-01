<template>
  <header class="flex justify-center p-6 bg-sky-500">
    <nav class="flex gap-6 text-white uppercase font-bold">
      <RouterLink to="/">Home</RouterLink>
      <span>&bull;</span>
      <RouterLink to="/reports">Reports</RouterLink>
      <span>&bull;</span>
      <a to="#">About</a>
    </nav>
  </header>
  <main class="container max-w-screen-xl mx-auto p-6">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
