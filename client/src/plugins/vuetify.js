import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },

  theme: {
    primary: 'rgba(25, 25, 112, 1)',
    primaryLight: 'rgba(79, 65, 159, 1)',
    primaryDark: 'rgba(0, 0, 68, 1)',
    secondary: 'rgba(49, 129, 185, 1)',
    secondaryLight: 'rgba(107, 176, 236, 1)',
    secondaryDark: 'rgba(0, 85, 137, 1)',
    accent: 'rgba(45, 182, 227, 1)',
    accentLight: 'rgba(114, 232, 255, 1)',
    accentDark: 'rgba(0, 134, 177, 1)',
  },
});
