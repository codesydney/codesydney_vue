import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
