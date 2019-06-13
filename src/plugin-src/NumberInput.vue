<template>
  <div class="vue-number-input__wrapper">
    <input
      v-model="model"
      type="text"
      class="vue-number-input__input"
      :placeholder="placeholder"
      :style="stylesComputed"
      @wheel="onNumInputWheel($event)"
      @blur="onBlur"
    >

    <div class="vue-number-input__arrows-wrapper">
      <button class="vue-number-input__arrow-up"
        @click="increment"
      />
      <button class="vue-number-input__arrow-down"
        @click="decrement"
      />
    </div>
  </div>
</template>


<script>
/* eslint-disable consistent-return, no-restricted-globals, no-lonely-if */
export default {
  name: 'VueNumberInput',
  props: {
    align: {
      required: false,
      type: String,
      default: 'left',
      validator: value => (['left', 'center', 'right', 'justify'].includes(value)),
    },
    value: {
      required: false,
      type: String,
      default: '',
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
      type: String,
      validator: value => (['integer', 'float'].includes(value)),
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
    errorred: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: this.value,
    };
  },
  watch: {
    value(val) {
      this.model = val;
    },
    model(val) {
      if (this.unsigned && val === '-') {
        this.$nextTick(() => {
          this.model = '';
        });
      }

      // cut the string if the user manually entered too many characters
      if (this.numberType === 'integer' && (val.length > this.maxLenComputed)) {
        this.$nextTick(() => {
          this.model = val.substr(0, this.maxLenComputed);
        });
      }

      // control compliance with the intPartMaxLen and floatPartMaxLen
      // if necessary - bring the string to the regulated form
      if (this.numberType === 'float') {
        let intPart = val.split('.')[0];
        let floatPart = val.split('.')[1] || '';

        // processing integer part of number
        if (intPart.length > this.intPartMaxLenComputed) {
          intPart = intPart.slice(0, this.intPartMaxLenComputed);
          this.$nextTick(() => {
            this.model = `${intPart}.${floatPart}`;
          });
        }

        // processing float part of number
        if (floatPart.length > this.floatPartMaxLen) {
          floatPart = floatPart.slice(0, this.floatPartMaxLen);
          this.$nextTick(() => {
            this.model = `${intPart}.${floatPart}`;
          });
        }
      }

      this.$nextTick(() => {
        this.emitValue();
      });
    },
  },
  computed: {
    stylesComputed() {
      return {
        textAlign: this.align,
      };
    },
    /* string max length without minus sign */
    maxLenComputed() {
      if (this.model[0] === '-') {
        return this.maxLen + 1;
      }
      return this.maxLen;
    },
    /* integer part of string max length without minus sign */
    intPartMaxLenComputed() {
      if (this.model[0] === '-') {
        return this.intPartMaxLen + 1;
      }
      return this.intPartMaxLen;
    },
  },
  methods: {
    formatModelForEmit() {
      const checkFuncName = (this.numberType === 'float') ? 'isCorrectFloat' : 'isCorrectInteger';

      if (!this[checkFuncName](this.model)) {
        this.model = '';
      } else {
        // clean the line from incorrect characters
        this.model = String(+this.model);
        // control compliance with max and min boundaries
        this.model = (+this.model > this.maxValue)
          ? String(this.maxValue)
          : this.model;
        this.model = (+this.model < this.minValue)
          ? String(this.minValue)
          : this.model;
      }
    },
    emitValue() {
      this.$emit('input', this.model);
    },
    onBlur() {
      this.formatModelForEmit();
      this.emitValue();
    },
    isCorrectFloat(n) {
      const reFloatUnsigned = new RegExp(`\\d{1,${this.intPartMaxLen}}(\\.\\d{0,${this.floatPartMaxLen}})?$`, 'g');
      const reFloatSigned = new RegExp(`^-?\\d{1,${this.intPartMaxLen}}(\\.\\d{0,${this.floatPartMaxLen}})?$`, 'g');

      let regExpToUse = '';

      if (this.unsigned) {
        regExpToUse = reFloatUnsigned;
      } else {
        regExpToUse = reFloatSigned;
      }

      const matches = n.match(regExpToUse);

      if (matches) {
        return matches[0] === n;
      }
      return false;
    },
    isCorrectInteger(n) {
      const reIntegerUnsigned = new RegExp(`^(\\d){1,${this.maxLen}}$`, 'g');
      const reIntegerSigned = new RegExp(`^-?(\\d){1,${this.maxLen}}$`, 'g');

      let regExpToUse = '';

      if (this.unsigned) {
        regExpToUse = reIntegerUnsigned;
      } else {
        regExpToUse = reIntegerSigned;
      }

      const matches = n.match(regExpToUse);

      if (matches) {
        return matches[0] === n;
      }
      return false;
    },
    isLetterThanMaxValue(n) {
      return +n <= this.maxValue;
    },
    isGreaterThanMinValue(n) {
      return +n >= this.minValue;
    },
    onNumInputWheel(e) {
      // only if field is focused
      const { classList } = document.activeElement;
      if (classList[0] && classList[0] === 'vue-number-input__input') {
        e.preventDefault();
        if (e.deltaY < 0) {
          this.increment();
        } else if (e.deltaY > 0) {
          this.decrement();
        }
        return false;
      }
      return false;
    },
    increment() {
      // put decrement's result to temp variable for validation
      const testModel = String(+this.model + this.step);

      // reject decrement if max length exceeded
      if (this.numberType === 'integer' && testModel.length > this.maxLenComputed) {
        return false;
      }

      if (this.numberType === 'float') {
        const intPart = testModel.split('.')[0];

        if (intPart.length > this.intPartMaxLenComputed) {
          return false;
        }
      }

      if (this.isLetterThanMaxValue(testModel)) {
        // if all is good then just increment
        this.model = String(+this.model + this.step);
      }
    },
    decrement() {
      // put decrement's result to temp variable for validation
      const testModel = String(+this.model - this.step);

      // if the number after the decrement becomes negative
      if (+this.model <= 0) {
        if (this.unsigned) {
          this.model = '0';
          return false;
        }

        // reject decrement if max length exceeded
        if (this.numberType === 'integer' && testModel.length > this.maxLenComputed) {
          return false;
        }

        if (this.numberType === 'float') {
          const intPart = testModel.split('.')[0];

          if (intPart.length > this.intPartMaxLenComputed) {
            return false;
          }
        }
      }

      if (this.isGreaterThanMinValue(testModel)) {
        this.model = String(+this.model - this.step);
      }
    },
  },
};
</script>

<style lang="scss">
  .vue-number-input__wrapper {
    display: inline-block;
    position: relative;
    .vue-number-input__input {
      padding: 3px 10px;
      padding-right: 20px;
      font-size: 1rem;
    }
    .vue-number-input__arrows-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      padding: 3px 0;
      .vue-number-input__arrow-up {
        position: relative;
        background: transparent;
        box-shadow: none;
        border: none;
        outline: none;
        flex-grow: 1;
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
        &:after {
          display: block;
          border-bottom: 6px solid rgba(0,0,0,.6);
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          content: "";
          width: 0;
          top: 0;
          bottom: 0;
        }
      }
      .vue-number-input__arrow-down {
        position: relative;
        background: transparent;
        box-shadow: none;
        border: none;
        outline: none;
        flex-grow: 1;
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
        &:after {
          display: block;
          border-top: 6px solid rgba(0,0,0,.6);
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          content: "";
          width: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
  }
</style>
