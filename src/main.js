import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Ionic from '@modus/ionic-vue';
import { Plugins } from '@capacitor/core';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';

addIcons({
  'information-circle-outline': informationCircleOutline,
});

import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);

Vue.config.productionTip = false;

/*
 * Capacitor
 */
const { SplashScreen } = Plugins;

new Vue({
  router,
  mounted() {
    SplashScreen.hide();
  },
  render: (h) => h(App),
}).$mount('#app');
