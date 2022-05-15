import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import elementPlus from './plugins/element'
// 引入公共样式
import './styles/index.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(elementPlus)

app.mount('#app')
