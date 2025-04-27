import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import i18n from './i18n'
import { createHead } from '@vueuse/head'

const app = createApp(App);
const head = createHead()
app.use(head)
app.use(router);
app.use(i18n)
app.mount('#app');
