import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#3B125F",
        // secondary: "#8B5FBF",
        // accent: "#BF653F",
        // error: "#722530",
        // warning: "#A37513",
        // info: "#396893",
        // success: "#4caf50"
        primary: "#009688",
        secondary: "#4caf50",
        accent: "#FFCBA4",
        error: "#f44336",
        warning: "#ffc107",
        info: "#2196f3",
        success: "#8bc34a"
      },
    },
  },
});

export default vuetify;