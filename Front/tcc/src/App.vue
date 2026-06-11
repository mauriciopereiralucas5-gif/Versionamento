<script setup>
import {BApp} from 'bootstrap-vue-next';
import mycard from './components/mycard.vue';
import mybutton from './components/mybutton.vue';
import Registerform from './components/Registerform.vue';
import Mynavbar from './components/Mynavbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Mynavbar/>
  <div class="container">
    <div class="row">
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
@import './estilo.css';
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css")
</style>