import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.scss'

import router from '@/routes'
import store from '@/store'

createApp(App).use(store).use(router).mount('#app')
