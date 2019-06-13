# vue-number-smarty

[Demo page](http://seokky-workflow.ru/vue-number-smarty/)

## Features

1. integer/float
2. signed/unsigned
3. step size
4. **increment/decrement value by scrolling when focused**
5. align variants
6. min and max boundaries
7. max length of integer part (only for float type)
8. max length of float part (only for float type)
9. max length of string
10. error state
11. readonly state
12. theme options

## Installation
```
npm i vue-number-smarty
```
or with yarn:
```
yarn add vue-number-smarty
```
Then paste it in your main.js file:
```
import VueNumberInput from 'vue-number-smarty';

Vue.use(VueNumberInput);
```
That's all!

## Usage

![](http://seokky-workflow.ru/vue-number-smarty/preview.png)

### Props
```
align: {
  required: false,
  type: one of ['left', 'center', 'right', 'justify'],
  default: 'left',
},
placeholder: {
  required: false,
  type: String,
  default: 'Placeholder',
},
unsigned: {
  required: false,
  type: Boolean,
  default: false,
},
numberType: {
  required: true,
  type: one of ['integer', 'float'],
},
minValue: {
  required: false,
  type: Number,
  default: -9999999,
},
maxValue: {
  required: false,
  type: Number,
  default: 9999999,
},
step: {
  required: false,
  type: Number,
  default: 1,
},
/* only for integer | max length of string */
maxLen: {
  required: false,
  type: Number,
  default: 6,
},
/* max length of string before float part */
intPartMaxLen: {
  required: false,
  type: Number,
  default: 4,
},
/* max length of string after float part */
floatPartMaxLen: {
  required: false,
  type: Number,
  default: 2,
},
error: {
  required: false,
  type: Boolean,
  default: false,
},
readonly: {
  required: false,
  type: Boolean,
  default: false,
},
<!-- border-bottom color -->
color: {
  required: false,
  type: String,
  default: 'rgba(0,0,0,.4)',
},
<!-- text-color -->
textColor: {
  required: false,
  type: String,
  default: 'rgba(0,0,0,.9)',
},
fontWeight: {
  required: false,
  type: String,
  default: 'normal',
},
```
### Styles
Component styles are override-friendly. So you can configure the desired field style.

The css classes of the component are listed here:
```
.vue-number-input__wrapper
  .vue-number-input__input (.vue-number-input__input-error)
  .vue-number-input__arrows-wrapper
    .vue-number-input__arrow-up
    .vue-number-input__arrow-down
```

## Project setup
```
yarn install || npm i
```

### Compiles and hot-reloads for development
```
yarn serve || npm run serve
```
Go to /src/main.js and do it:
```
// import VueNumberInput from 'vue-number-smarty';
import VueNumberInput from '@/plugin-src/main.js';
```
Now you can go to the root folder and type:
```
yarn serve || npm run serve
```
You can work with /src/plugin-src/NumberInput.vue and see it in your browser.

### Compiles and minifies for production
Go to /src/plugin-src/ and do:
```
npx bili
```
Then go to /src/plugin-src/dist/main.js and at the end replace
```
module.exports
```
with
```
export default
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
