import Vue from 'vue';
import swal from 'sweetalert2';

Vue.use({
  install(Vue) {
    Vue.prototype.$swal = swal;
  },
});
