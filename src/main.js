import Vue from 'vue';
import VueNumberInput from 'vue-smarty1-number';
import App from './App.vue';

Vue.use(VueNumberInput);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
