<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>

  <Sidebar />

  <main class="content">
    <router-view />
  </main>

</template>

<style scoped>

.content {
  margin-left: 300px;

  width: calc(100vw - 300px);

  min-height: 100vh;

  padding: 30px;

  background: #f5f6fa;
}

</style>