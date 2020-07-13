import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PollsPage from '../views/PollsPage.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/polls',
    name: 'PollsPage',
    component: PollsPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
