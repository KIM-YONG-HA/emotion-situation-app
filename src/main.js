import './assets/main.css' // 전역 스타일

import { createApp } from 'vue'
import { createPinia } from 'pinia' // 상태관리 

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // 상태관리 시스템 연결
app.use(router) // 라터 연결

app.mount('#app') // dom에 마운트 