import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@vuepic/vue-datepicker/dist/main.css'

createApp(App).use(createPinia()).use(router).mount('#app')
