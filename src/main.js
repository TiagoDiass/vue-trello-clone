import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/_main.scss';
import './plugins/sweetAlert';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');