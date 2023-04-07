import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/reset.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { MdDelete } from "oh-vue-icons/icons";

addIcons(MdDelete)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component("v-icon", OhVueIcon)
app.mount('#app')
