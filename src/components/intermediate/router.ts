import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import dashboardVue from './Dashboard.vue';
import postVue from './Post.vue';
import postDetailsVue from './PostDetails.vue';
import AboutPageVue from './AboutPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: dashboardVue, name:'dashboard' },
  { path: '/post', component: postVue, name:'post' },
  { path: '/post/:id', component: postDetailsVue, name:'postDetails' },
  { path: '/about', component: AboutPageVue, name:'about' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

