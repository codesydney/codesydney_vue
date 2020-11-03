import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Friends from '../views/Friends.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'home',
    component: Home,
  },
  {
    path: '/friends',
    name: 'Friends',
    icon: 'user-tie',
    component: Friends,
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: 'envelope',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
export const Routes = routes;