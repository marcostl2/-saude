import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: true,
  theme: {
    themes: {
      light: {
        heat_color_1: '#e84118',
        heat_color_2: '#e1b12c',
        heat_color_3: '#44bd32',
      }
    }
  }
});
