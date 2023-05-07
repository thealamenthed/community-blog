import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// Connect to router
import router from './router'
import axios from 'axios'

import '@/assets/main.css'

axios.defaults.withCredentials = true // définie le comportement d'axios pour chaque request
axios.defaults.baseURL = 'https://simpledev.one/api' // définie une BaseURL pour connecter l'api côté server

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
