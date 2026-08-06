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

height: 100vh;

overflow-y: auto;

padding: 30px;

background: #f5f6fa;

box-sizing: border-box;
}

</style>