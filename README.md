# vue-number-smarty

## Features

1. integer/float
2. signed/unsigned
3. step size
4. increment/decrement value by scrolling when focused
5. align variants
6. min and max boundaries
7. max length of integer part (only for float type)
8. max length of float part (only for float type)
9. max length of string

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

```
<vue-number-input
  v-model="test0"
  placeholder="Write some text"
  numberType="integer"
  unsigned
  align="center"
  :step="2"
  :maxLen="2"
/>
```
```
<vue-number-input
  v-model="test1"
  placeholder="Write some text"
  numberType="float"
  align="right"
  :step="2"
  :intPartMaxLen="2"
  :floatPartMaxLen="2"
  :maxValue="20"
/>
```
```
<vue-number-input
  v-model="test2"
  placeholder="Write some text"
  numberType="integer"
/>
```
```
<vue-number-input
  v-model="test3"
  placeholder="Write some text"
  numberType="integer"
  :maxValue="10"
  :minValue="-10"
  :step="5"
/>
```

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
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
