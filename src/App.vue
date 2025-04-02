
<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
<div id="app">
  <Header></Header>

  <div class="p-6 text-center text-2xl text-blue-600 font-bold">
    Tailwind 설치 완료! 🎉
  </div>

  
  <router-view></router-view>
  <Footer></Footer>
</div>
</template>
