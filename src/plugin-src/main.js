import VueNumberInput from './NumberInput.vue';

const NumInpPlugin = {
  install(Vue, options) {
    Vue.component(VueNumberInput.name, VueNumberInput);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueNumberInput);
}

export default NumInpPlugin;
