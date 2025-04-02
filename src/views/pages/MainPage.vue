<template>
    <div class="main-page">
      <h1>마음 상태 분석 시스템</h1>
      <p>상담 글을 작성하면 AI가 감정과 상황을 분석해줍니다.</p>
      <router-link to="/write">
        <button>상담 작성하기</button>
      </router-link>
    </div>
  </template>
  
  <script setup>
  // 현재는 단순 UI 구성, 나중에 데이터 또는 안내 추가 가능
  </script>
  
  <style scoped>
  .main-page {
    text-align: center;
    padding: 40px;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  