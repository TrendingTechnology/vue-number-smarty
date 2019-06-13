import Vue from 'vue';
import VueNumberInput from '@/plugin-src/';
import App from './App.vue';

Vue.use(VueNumberInput);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
