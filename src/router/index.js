import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PollsPage from '../views/PollsPage.vue';
import PartiesPage from '../views/PartiesPage.vue';

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
  {
    path: '/parties',
    name: 'PartiesPage',
    component: PartiesPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
