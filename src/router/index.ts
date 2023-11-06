import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import axios from "axios";
const routes: Array<RouteRecordRaw> = [{
    
    path: '/index',
    component: () => import('../components-view/index.vue'),
    // meta: { requiresAuth: true } // 这个路由需要身份验证
}, {

    path: '/',
    component: () => import('../components-view/index.vue')
}, {
    path: '/details',
    component: () => import('../components-view/details.vue'),
    // meta: { requiresAuth: true } // 这个路由需要身份验证
}, {
    path: '/classic',
    component: () => import('../components/ClassicGame.vue'),
    meta: { requiresAuth: true } // 这个路由需要身份验证
}, {
    path: '/battle',
    component: () => import('../components/Battle.vue'),
    // meta: { requiresAuth: true } // 这个路由需要身份验证
}, {
    path: '/PlayerChart',
    component: () => import('../components-view/PlayerChart.vue'),
    
}, {
    path: '/achievement',
    component: () => import('../components-view/playachievement.vue'),
    meta: { requiresAuth: true } // 这个路由需要身份验证
}, {
    path: '/offline',
    component: () => import('../components-view/offline.vue')
}, {
    path: '/register',
    component: () => import('../components-view/PlayerRegister.vue')

}, {
//     path: '/login',
//     component: () => import('../components-view/PlayerLogin.vue')
// }, {
    path: '/local',
    component: () => import('../components/LocalGame.vue')
}, {
    path: '/remote',
    component: () => import('../components/RemoteGame.vue')
}, {
    path: '/start',
    component: () => import('../components-view/PlayerRegister.vue')
}, {
    path: '/Navigation',
    component: () => import('../components-view/Navigation.vue')

}]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router