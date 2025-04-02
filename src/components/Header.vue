<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>


<template>
    <header class="w-full bg-white border-b border-gray-300 relative z-50">
      <div class="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4">
        <a href="/maumcheck">
          <img src="/img/main/maumcheck_logo.png" alt="MAUM CHECK Logo" class="h-8">
        </a>
  
        <button @click="toggleMenu" class="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
  
        <nav class="hidden md:flex space-x-6 text-lg font-medium">
          <a href="/maumcheck/s0101.php" class="hover:text-blue-600">이용 안내</a>
          <a href="/maumcheck/write.php" class="hover:text-blue-600">상담 시작</a>
          <a href="javascript:alert('준비중입니다');" class="hover:text-blue-600">자가검진</a>
          <a href="javascript:alert('준비중입니다');" class="hover:text-blue-600">마이페이지</a>
        </nav>
      </div>
  
      <div
        v-show="isMobileMenuOpen"
        class="absolute top-full left-0 w-full bg-white shadow-md px-4 py-4 space-y-3 text-base font-medium border-t border-gray-200 md:hidden"
      >
        <a href="/maumcheck/s0101.php" class="block hover:text-blue-600">이용 안내</a>
        <a href="/maumcheck/write.php" class="block hover:text-blue-600">상담 시작</a>
        <a href="javascript:alert('준비중입니다');" class="block hover:text-blue-600">자가검진</a>
        <a href="javascript:alert('준비중입니다');" class="block hover:text-blue-600">마이페이지</a>
      </div>
    </header>
  </template>
  