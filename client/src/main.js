import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faLinkedin,
  faFacebookSquare,
  faMeetup,
  faSlackHash,
  faInstagram,
  faGithub,
  faYoutube,
  faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';

import {
  faBars,
  faTimes,
  faUser,
  faEnvelope,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

import vuetify from './plugins/vuetify';

library.add(
  faLinkedin,
  faFacebookSquare,
  faTimes,
  faBars,
  faUser,
  faEnvelope,
  faPencilAlt,
  faMeetup,
  faSlackHash,
  faInstagram,
  faGithub,
  faYoutube,
  faFreeCodeCamp
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
