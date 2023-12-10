import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import mitt from "mitt"
// import store from './store'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import router from './router'
import { useuserStore } from './stores/userstore'
import elementPlus from './plugins/element-plus'
// import axios from 'axios'
// Vue.prototype.$http = axios
import { createPinia } from 'pinia'
import { setRem } from './utils/resize'

const resize = () => setRem(656, 852)

resize()
window.addEventListener('resize', resize)
router.beforeEach((to, from, next) => {
  
    const game = useuserStore()
    const ifuser = game.isAuthenticated; /* 根据你的登录逻辑判断用户是否已登录 */
    
    if (to.matched.some(record => record.meta.requiresAuth) && !ifuser) {
      // 如果访问的路由需要进行身份验证且用户未登录，则重定向到登录页面
      next('/register')
    } else {
      // 其他情况下直接进行路由跳转
      next()
    }
  })

const app = createApp(App);
// app.config.globalProperties.$EventBus = mitt();
    app.use(router).use(createPinia()).use(autoAnimatePlugin).use(elementPlus).mount('#app')
// app.use(store);
