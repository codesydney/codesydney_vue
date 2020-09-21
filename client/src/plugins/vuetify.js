import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },

  theme: {
    primary: '#191970',
    primaryLight: '#4f419F',
    primaryDark: '#000044',
    secondary: '#3181B9',
    secondaryLight: '#6BB0EC',
    secondaryDark: '#005589',
    accent: '#2DB6E3',
    accentLight: '#72e8ff',
    accentDark: '#0086B1',
  },
});
