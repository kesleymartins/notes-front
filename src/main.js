import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/reset.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
  MdDelete,
  IoCloseCircleSharp,
  CoNotes,
  BiPlusSquare
} from "oh-vue-icons/icons";

addIcons(
  MdDelete,
  IoCloseCircleSharp,
  CoNotes,
  BiPlusSquare
)

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const toastOptions = {
  position: "bottom-right",
  transition: "Vue-Toastification__fade",
  newestOnTop: true
};

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Toast, toastOptions)
app.component("v-icon", OhVueIcon)
app.mount('#app')
