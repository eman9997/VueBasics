import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ModalContainerVue from './ModalContainer.vue';
import ModalItemVue from './ModalItem.vue';


const routes: RouteRecordRaw[] = [
  { path: '/', component: ModalContainerVue, name:'dashboard' },

  // { path: '/modal', component: ModalItemVue, name:'modalItem' },
  // need to make a page not found component
  // { path: '/:pathMatch(.*)*', component: ModalItemVue, name:'modalItem' },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

