import Vue from 'vue';
// import VueNumberInput from 'vue-number-smarty';
import VueNumberInput from '@/plugin-src/main.js';
import App from './App.vue';

Vue.use(VueNumberInput);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
