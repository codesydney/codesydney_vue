import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },

  theme: {
    primary: 'rgba(25, 25, 112, 1)',
    secondary: 'rgba(49, 129, 185, 1)',
    accent: 'rgba(45, 182, 227, 1)',
  },
});
