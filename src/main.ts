import { createApp } from 'vue'
import * as xxhash from 'xxhash'
import App from './App.vue'
import router from './router'
import store from './store'

const xx64 = xxhash.XXHash64
createApp(App).use(store).use(router).mount('#app')
