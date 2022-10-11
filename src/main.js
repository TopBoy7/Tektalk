import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '../includes/axios'
import VeeValidatePlugin from '../includes/Validation'
import ProgressBar from '../includes/progress-bar'
import 'nprogress/nprogress.css'
import { MotionPlugin } from '@vueuse/motion'
import {createHead} from '@vueuse/head'
import meta from 'vue-headful'

import './assets/main.css'

ProgressBar(router);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)
app.use(MotionPlugin)
app.use(createHead())
app.component('vue-headful', meta)

app.mount('#app')
