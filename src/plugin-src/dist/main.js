/*!
 * vue-number-smarty v1.2.3
 * (c) Maxim Noverin
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));
var __vue_create_injector__ = _interopDefault(require('vue-runtime-helpers/dist/inject-style/browser.js'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable consistent-return, no-restricted-globals, no-lonely-if */
var script = {
  name: 'VueNumberInput',
  props: {
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    align: {
      required: false,
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right', 'justify'].includes(value);
      }
    },
    value: {
      required: false,
      type: String,
      default: ''
    },
    placeholder: {
      required: false,
      type: String,
      default: 'Placeholder'
    },
    unsigned: {
      required: false,
      type: Boolean,
      default: false
    },
    numberType: {
      required: true,
      type: String,
      validator: function validator(value) {
        return ['integer', 'float'].includes(value);
      }
    },
    minValue: {
      required: false,
      type: Number,
      default: -9999999
    },
    maxValue: {
      required: false,
      type: Number,
      default: 9999999
    },
    step: {
      required: false,
      type: Number,
      default: 1
    },

    /* only for integer | max length of string */
    maxLen: {
      required: false,
      type: Number,
      default: 6
    },

    /* max length of string before float part */
    intPartMaxLen: {
      required: false,
      type: Number,
      default: 4
    },

    /* max length of string after float part */
    floatPartMaxLen: {
      required: false,
      type: Number,
      default: 2
    },
    error: {
      required: false,
      type: Boolean,
      default: false
    },
    color: {
      required: false,
      type: String,
      default: 'rgba(0,0,0,.4)'
    },
    textColor: {
      required: false,
      type: String,
      default: 'rgba(0,0,0,.9)'
    },
    fontWeight: {
      required: false,
      type: String,
      default: 'normal'
    }
  },
  data: function data() {
    return {
      model: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.model = val;
    },
    model: function model(val) {
      var _this = this;

      if (this.unsigned && val === '-') {
        this.$nextTick(function () {
          _this.model = '';
        });
      } // cut the string if the user manually entered too many characters


      if (this.numberType === 'integer' && val.length > this.maxLenComputed) {
        this.$nextTick(function () {
          _this.model = val.substr(0, _this.maxLenComputed);
        });
      } // control compliance with the intPartMaxLen and floatPartMaxLen
      // if necessary - bring the string to the regulated form


      if (this.numberType === 'float') {
        var intPart = val.split('.')[0];
        var floatPart = val.split('.')[1] || ''; // processing integer part of number

        if (intPart.length > this.intPartMaxLenComputed) {
          intPart = intPart.slice(0, this.intPartMaxLenComputed);
          this.$nextTick(function () {
            _this.model = "".concat(intPart, ".").concat(floatPart);
          });
        } // processing float part of number


        if (floatPart.length > this.floatPartMaxLen) {
          floatPart = floatPart.slice(0, this.floatPartMaxLen);
          this.$nextTick(function () {
            _this.model = "".concat(intPart, ".").concat(floatPart);
          });
        }
      }

      this.$nextTick(function () {
        _this.emitValue();
      });
    }
  },
  computed: {
    inputClassesComputed: function inputClassesComputed() {
      return {
        'vue-number-input__input': true,
        'vue-number-input__input-error': this.error
      };
    },
    stylesComputed: function stylesComputed() {
      return {
        textAlign: this.align,
        borderBottomColor: this.error ? 'crimson' : this.color,
        color: this.textColor,
        fontWeight: this.fontWeight
      };
    },

    /* string max length without minus sign */
    maxLenComputed: function maxLenComputed() {
      if (this.model[0] === '-') {
        return this.maxLen + 1;
      }

      return this.maxLen;
    },

    /* integer part of string max length without minus sign */
    intPartMaxLenComputed: function intPartMaxLenComputed() {
      if (this.model[0] === '-') {
        return this.intPartMaxLen + 1;
      }

      return this.intPartMaxLen;
    }
  },
  methods: {
    formatModelForEmit: function formatModelForEmit() {
      var checkFuncName = this.numberType === 'float' ? 'isCorrectFloat' : 'isCorrectInteger';

      if (!this[checkFuncName](this.model)) {
        this.model = '';
      } else {
        // clean the line from incorrect characters
        this.model = String(+this.model); // control compliance with max and min boundaries

        this.model = +this.model > this.maxValue ? String(this.maxValue) : this.model;
        this.model = +this.model < this.minValue ? String(this.minValue) : this.model;
      }
    },
    emitValue: function emitValue() {
      this.$emit('input', this.model);
    },
    onBlur: function onBlur() {
      this.formatModelForEmit();
      this.emitValue();
    },
    isCorrectFloat: function isCorrectFloat(n) {
      var reFloatUnsigned = new RegExp("\\d{1,".concat(this.intPartMaxLen, "}(\\.\\d{0,").concat(this.floatPartMaxLen, "})?$"), 'g');
      var reFloatSigned = new RegExp("^-?\\d{1,".concat(this.intPartMaxLen, "}(\\.\\d{0,").concat(this.floatPartMaxLen, "})?$"), 'g');
      var regExpToUse = '';

      if (this.unsigned) {
        regExpToUse = reFloatUnsigned;
      } else {
        regExpToUse = reFloatSigned;
      }

      var matches = n.match(regExpToUse);

      if (matches) {
        return matches[0] === n;
      }

      return false;
    },
    isCorrectInteger: function isCorrectInteger(n) {
      var reIntegerUnsigned = new RegExp("^(\\d){1,".concat(this.maxLen, "}$"), 'g');
      var reIntegerSigned = new RegExp("^-?(\\d){1,".concat(this.maxLen, "}$"), 'g');
      var regExpToUse = '';

      if (this.unsigned) {
        regExpToUse = reIntegerUnsigned;
      } else {
        regExpToUse = reIntegerSigned;
      }

      var matches = n.match(regExpToUse);

      if (matches) {
        return matches[0] === n;
      }

      return false;
    },
    isLetterThanMaxValue: function isLetterThanMaxValue(n) {
      return +n <= this.maxValue;
    },
    isGreaterThanMinValue: function isGreaterThanMinValue(n) {
      return +n >= this.minValue;
    },
    onNumInputWheel: function onNumInputWheel(e) {
      // only if field is focused
      var classList = document.activeElement.classList;

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
    increment: function increment() {
      // put decrement's result to temp variable for validation
      var testModel = String(+this.model + this.step); // reject decrement if max length exceeded

      if (this.numberType === 'integer' && testModel.length > this.maxLenComputed) {
        return false;
      }

      if (this.numberType === 'float') {
        var intPart = testModel.split('.')[0];

        if (intPart.length > this.intPartMaxLenComputed) {
          return false;
        }
      }

      if (this.isLetterThanMaxValue(testModel)) {
        // if all is good then just increment
        this.model = String(+this.model + this.step);
      }
    },
    decrement: function decrement() {
      // put decrement's result to temp variable for validation
      var testModel = String(+this.model - this.step); // if the number after the decrement becomes negative

      if (+this.model <= 0) {
        if (this.unsigned) {
          this.model = '0';
          return false;
        } // reject decrement if max length exceeded


        if (this.numberType === 'integer' && testModel.length > this.maxLenComputed) {
          return false;
        }

        if (this.numberType === 'float') {
          var intPart = testModel.split('.')[0];

          if (intPart.length > this.intPartMaxLenComputed) {
            return false;
          }
        }
      }

      if (this.isGreaterThanMinValue(testModel)) {
        this.model = String(+this.model - this.step);
      }
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-number-input__wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.model,
      expression: "model"
    }],
    class: _vm.inputClassesComputed,
    style: _vm.stylesComputed,
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "disabled": _vm.readonly
    },
    domProps: {
      "value": _vm.model
    },
    on: {
      "wheel": function wheel($event) {
        return _vm.onNumInputWheel($event);
      },
      "blur": _vm.onBlur,
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.model = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "vue-number-input__arrows-wrapper"
  }, [_c('button', {
    staticClass: "vue-number-input__arrow-up",
    on: {
      "click": _vm.increment
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "vue-number-input__arrow-down",
    on: {
      "click": _vm.decrement
    }
  })])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-961236ee_0", {
    source: ".vue-number-input__wrapper{display:inline-block;position:relative}.vue-number-input__wrapper .vue-number-input__input{padding:5px 10px;padding-right:20px;font-size:1rem;box-shadow:none;border:1px solid rgba(0,0,0,.1);border-bottom:2px solid rgba(128,128,128,.8);outline:0}.vue-number-input__wrapper .vue-number-input__input:focus{box-shadow:0 -1px 4px rgba(0,0,0,.1)}.vue-number-input__wrapper .vue-number-input__input-error{border-bottom-color:#dc143c;background:rgba(220,20,60,.1)}.vue-number-input__wrapper .vue-number-input__arrows-wrapper{position:absolute;right:0;top:0;bottom:3px;display:flex;flex-direction:column;padding:3px 0;min-width:13px}.vue-number-input__wrapper .vue-number-input__arrows-wrapper .vue-number-input__arrow-up{position:relative;background:0 0;box-shadow:none;border:none;outline:0;flex-grow:1}.vue-number-input__wrapper .vue-number-input__arrows-wrapper .vue-number-input__arrow-up:hover:after{border-bottom-color:rgba(0,0,0,.5)}.vue-number-input__wrapper .vue-number-input__arrows-wrapper .vue-number-input__arrow-up:after{content:\"\";display:block;border-bottom:6px solid rgba(0,0,0,.7);border-left:4px solid transparent;border-right:4px solid transparent}.vue-number-input__wrapper .vue-number-input__arrows-wrapper .vue-number-input__arrow-down{position:relative;background:0 0;box-shadow:none;border:none;outline:0;flex-grow:1}.vue-number-input__wrapper .vue-number-input__arrows-wrapper .vue-number-input__arrow-down:hover:after{border-top-color:rgba(0,0,0,.5)}.vue-number-input__wrapper .vue-number-input__arrows-wrapper .vue-number-input__arrow-down:after{content:\"\";display:block;border-top:6px solid rgba(0,0,0,.7);border-left:4px solid transparent;border-right:4px solid transparent}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var VueNumberInput = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

var NumInpPlugin = {
  install: function install(Vue, options) {
    Vue.component(VueNumberInput.name, VueNumberInput);
  }
};
VueNumberInput.install = NumInpPlugin.install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueNumberInput);
}

export default NumInpPlugin;
