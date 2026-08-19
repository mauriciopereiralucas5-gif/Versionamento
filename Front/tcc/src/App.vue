<script setup>
import Sidebar from './components/Sidebar.vue';
import Alert from './components/Alert.vue';
</script>

<template>
  <alert/>
  <sidebar/>
  <router-view/>
</template>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css");
</style>