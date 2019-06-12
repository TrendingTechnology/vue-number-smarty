import Vue from 'vue';
import VueNumInput from '@/plugin-src/';
import App from './App.vue';

Vue.use(VueNumInput);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
