import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use({
  // eslint-disable-next-line no-shadow
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$api = axios.create({
      baseURL: 'http://3.124.170.43/api/polls',
    });
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
