import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
// @ts-ignore
createApp(App).use(router).use(axios).mount('#app')
