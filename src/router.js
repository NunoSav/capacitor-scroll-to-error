import Vue from 'vue';
import { IonicVueRouter } from '@modus/ionic-vue';
import Home from './views/Home.vue';

Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
  ],
});

export default router;
