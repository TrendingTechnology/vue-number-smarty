import NumberInput from './NumberInput.vue';

NumberInput.install = (Vue) => {
  Vue.component('number-input', NumberInput);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NumberInput);
}

export default NumberInput;
