import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// Connect to router
import router from './router'
import axios from 'axios'

import '@/assets/main.css'

axios.defaults.withCredentials = true // définie le comportement d'axios pour chaque request
axios.defaults.baseURL = 'https://simpledev.one/api' // définie une BaseURL pour connecter l'api côté server

const app = createApp(App)

app.use(createPinia().use(({store}) => {
    store.$router = markRaw(router) // markRaw empêche le routeur d'être réactif, ce qui empêche le retour d'un proxy
}))
app.use(router)

app.mount('#app')
