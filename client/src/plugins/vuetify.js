import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },

  theme: {
    themes: {
      light: {
        primary: '#3181b9',
        secondary: '#2db6e3',
        accent: '#191970',
      },
    },
  },
});
