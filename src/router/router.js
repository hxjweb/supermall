import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter);

const home = () => import('../views/home/home.vue')
const cate = () => import('../views/cate/cate')
const profile = () => import('../views/profile/profile')
const category = () => import('../views/category/category')
const router = new VueRouter({
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/cate',
            component: cate
        },
        {
            path: '/category',
            component: category
        },
        {
            path: '/profile',
            component: profile
        },
    ],
    mode: 'history'
})
export default router