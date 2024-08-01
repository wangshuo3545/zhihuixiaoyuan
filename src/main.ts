import { createSSRApp } from 'vue'
import TnIcon from '@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
  // 如果 router 文件夹中有 index.js 或 index.ts
// 或者
import router from "./route/index";  // 显式指定文件


import './static/style/index.scss'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)
  app.use(ElementPlus)
  app.component('TnIcon', TnIcon)

  return {
    app,
    pinia,
    router
  }
}
