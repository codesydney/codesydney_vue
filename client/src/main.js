import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faTimes,
  faUser,
  faEnvelope,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faLinkedin,
  faFacebookSquare,
  faTimes,
  faBars,
  faUser,
  faEnvelope,
  faPencilAlt
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
