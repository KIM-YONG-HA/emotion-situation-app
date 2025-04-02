<template>
  <!-- 배경 전환 Hero 영역 -->
  <section id="visual" class="relative min-h-[65vh] overflow-hidden text-white">
    <div
      v-for="(bg, index) in bgImages"
      :key="index"
      :id="'bg' + (index + 1)"
      class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 z-0"
      :class="{ 'opacity-100': current === index, 'opacity-0': current !== index }"
      :style="{ backgroundImage: `url('${bg}')` }"
    ></div>

    <div class="absolute inset-0 bg-black opacity-75 z-5"></div>

    <div class="relative z-10 flex flex-col items-center justify-center min-h-[65vh] px-4 text-center">
      <h1 class="text-3xl md:text-4xl font-bold leading-relaxed">
        당신의 마음을 분석하고,<br />
        <span class="text-blue-600">가장 적절한 도움을 드릴게요.</span>
      </h1>
      <p class="mt-4 text-gray-200 text-xl">어떤 방법으로 상담하시겠어요?</p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="/write"
          class="w-48 h-16 bg-blue-700 text-white rounded-lg flex items-center justify-center space-x-2 font-bold text-base hover:bg-blue-800 transition duration-200 shadow-md"
        >
          <i class="fas fa-pencil-alt text-xl"></i>
          <span>글로 시작하기</span>
        </a>
        <a
          href="#"
          @click.prevent="alert('준비중입니다.')"
          class="w-48 h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center space-x-2 font-bold text-base hover:bg-orange-400 transition duration-200 shadow-md"
        >
          <i class="fas fa-microphone text-xl"></i>
          <span>음성으로 시작하기</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 카운트 애니메이션 -->
  <section class="bg-gray-0 py-20 px-4">
    <div class="max-w-[1200px] mx-auto">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        지금까지 <span class="text-blue-600">{{ displayCount }}</span>건의 AI분석이 이루어졌어요!
      </h2>

      <!-- 상담 카드 예시 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="bg-white p-5 rounded-lg shadow-sm border select-none transition-shadow duration-500 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
        >
          <div :class="['text-xs font-medium mb-1', card.color]">{{ card.category }}</div>
          <h3 class="font-semibold text-gray-900 mb-2 truncate">{{ card.title }}</h3>
          <p class="text-sm text-gray-600 filter blur-sm mb-5">
            {{ card.preview }}
          </p>
          <div class="text-xs text-gray-500 flex flex-wrap gap-1">
            <span v-for="(tag, tIdx) in card.tags" :key="tIdx">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 프로세스 안내 -->
  <!-- How it works -->
  <section class="bg-gray-50 py-24">
    <div class="max-w-[1200px] mx-auto px-4 text-center">
        <h2 class="text-2xl font-semibold mb-10">어떻게 작동하나요?</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div class="text-4xl mb-2 text-gray-600"><i class="fas fa-comments"></i></div>
            <p class="font-semibold">1. 상담 글 입력</p>
          </div>
          <div>
            <div class="text-4xl mb-2 text-gray-600"><i class="fas fa-brain"></i></div>
            <p class="font-semibold">2. 감정 상황 분석</p>
          </div>
          <div>
            <div class="text-4xl mb-2 text-gray-600"><i class="fas fa-clipboard-check"></i></div>
            <p class="font-semibold">3. 자가검진 및 상담 추천</p>
          </div>
          <div>
            <div class="text-4xl mb-2 text-gray-600"><i class="fas fa-phone"></i></div>
            <p class="font-semibold">4. 맞춤 상담 연결</p>
          </div>
        </div>
      </div>
      
  </section>



</template>

<script setup>
import { ref, onMounted } from 'vue'

// 배경 이미지 순환
const bgImages = [
  'img/main/visual_bg_01.jpg',
  'img/main/visual_bg_02.jpg',
  'img/main/visual_bg_03.jpg'
]

const current = ref(0)
onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % bgImages.length
  }, 8000)
})

// 카운터 애니메이션
const count = ref(0)
const displayCount = ref(0)
onMounted(() => {
  const target = 5220
  const step = 25
  const interval = setInterval(() => {
    count.value += step
    displayCount.value = count.value.toLocaleString()
    if (count.value >= target) clearInterval(interval)
  }, Math.floor(1500 / (target / step)))
})

// 상담 카드 목록 (예시)
const cards = [
  {
    category: '정신 건강 문제',
    color: 'text-blue-500',
    title: '댓글 좀 달아주세요 도대체 어떻게 해야할지 모르겠어요',
    preview: 'orem ipsum, dolor sit amet consectetur adipisicing elit. Ex a nihil debitis facilis corporis dolorem ullam quis ut earum sequi ',
    tags: ['응원', '절실', '정신병']
  },
  {
    category: '가족 및 대인관계 문제',
    color: 'text-green-500',
    title: '사람들의 눈치를 너무 많이 봐서 힘들어요',
    preview: 'orem ipsum, dolor sit amet consectetur adipisicing elit. Ex a nihil debitis facilis corporis dolorem ullam quis ut earum sequi ',
    tags: ['자존감', '상처', '사회적']
  },
  {
    category: '기타',
    color: 'text-purple-500',
    title: '가장 나다울 때가 가장',
    preview: 'orem ipsum, dolor sit amet consectetur adipisicing elit. Ex a nihil debitis facilis corporis dolorem ullam quis ut earum sequi ',
    tags: ['나다움', '자기표현']
  },
  {
    category: '학교폭력 및 학대',
    color: 'text-red-500',
    title: '학교에서 따돌림을 당하고 있어요',
    preview: 'orem ipsum, dolor sit amet consectetur adipisicing elit. Ex a nihil debitis facilis corporis dolorem ullam quis ut earum sequi ',
    tags: ['왕따', '전학고민', '외로움']
  },
  {
    category: '민감한 피해 경험',
    color: 'text-orange-500',
    title: '아직도 그날의 기억에서 벗어나지 못해요',
    preview: 'orem ipsum, dolor sit amet consectetur adipisicing elit. Ex a nihil debitis facilis corporis dolorem ullam quis ut earum sequi ',
    tags: ['소음', '스트레스', '예민']
  },
  {
    category: '진로 고민',
    color: 'text-yellow-500',
    title: '진로에 대한 고민이 끝이 없어요',
    preview: 'orem ipsum, dolor sit amet consectetur adipisicing elit. Ex a nihil debitis facilis corporis dolorem ullam quis ut earum sequi ',
    tags: ['진로고민', '불안', '자기이해']
  }
]



</script>
