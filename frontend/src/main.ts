import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap-utilities.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

// mount 메서드 호출로 렌더링 시작 => nest bootstrap
app.mount('#app')
