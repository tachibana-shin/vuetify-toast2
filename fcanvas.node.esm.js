function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  module.exports = _arrayLikeToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }

  module.exports = _arrayWithoutHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  module.exports = _iterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  module.exports = _unsupportedIterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableSpread;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }

  module.exports = _toConsumableArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _toConsumableArray = unwrapExports(toConsumableArray);

var defineProperty = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _defineProperty = unwrapExports(defineProperty);

var _props;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var props = (_props = {
  name: {
    type: String,
    "default": "default"
  },
  color: {
    type: [String, undefined],
    "default": undefined
  },
  timeout: {
    type: [Number, undefined],
    "default": undefined
  },
  app: {
    type: Boolean,
    "default": true
  },
  bottom: {
    type: Boolean,
    "default": false
  },
  centered: {
    type: Boolean,
    "default": false
  },
  contentClass: {
    type: [String, undefined],
    "default": undefined
  },
  dark: {
    type: Boolean,
    "default": false
  },
  elevation: {
    type: [Number, String, undefined],
    "default": undefined
  },
  height: {
    type: [Number, String, undefined],
    "default": undefined
  },
  left: {
    type: Boolean,
    "default": false
  },
  light: {
    type: Boolean,
    "default": false
  },
  minWidth: {
    type: [Number, String, undefined],
    "default": undefined
  },
  maxWidth: {
    type: [Number, String, undefined],
    "default": undefined
  },
  minHeight: {
    type: [Number, String, undefined],
    "default": undefined
  },
  maxHeight: {
    type: [Number, String, undefined],
    "default": undefined
  },
  multiLine: {
    type: Boolean,
    "default": false
  },
  outlined: {
    type: Boolean,
    "default": false
  },
  right: {
    type: Boolean,
    "default": false
  },
  rounded: {
    type: [Boolean, String, undefined],
    "default": undefined
  },
  shaped: {
    type: Boolean,
    "default": false
  },
  tag: {
    type: String,
    "default": "div"
  },
  text: {
    type: Boolean,
    "default": false
  },
  tile: {
    type: Boolean,
    "default": false
  }
}, _defineProperty(_props, "timeout", {
  type: [Number, String],
  "default": 5e3
}), _defineProperty(_props, "top", {
  type: Boolean,
  "default": false
}), _defineProperty(_props, "transition", {
  type: [Boolean, String],
  "default": "v-snack-transition"
}), _defineProperty(_props, "vertical", {
  type: Boolean,
  "default": false
}), _defineProperty(_props, "width", {
  type: [Number, String, undefined],
  "default": undefined
}), _props);
var propsName = [];

for (var name in props) {
  propsName.push(name);
}

function toArray(array) {
  if ("length" in array) {
    return array;
  }

  return [array];
}

function mergeProps(a, b) {
  var current = {};
  propsName.forEach(function (name) {
    current[name] = a[name];

    if (name in b) {
      current[name] = b[name];
    }
  });
  return current;
}

var VueToastGroup = {
  props: props,
  created: function created() {
    var name = this.name;
    var toastProp = {
      value: false,
      $text: undefined,
      $html: undefined
    };

    for (var _name in props) {
      toastProp[_name] = props[_name]["default"];
    }

    this.$set(this.$toasts, name, toastProp);
  },
  beforeDestroy: function beforeDestroy() {
    this.$delete(this, this.name);
  },
  render: function render(h) {
    var _this = this;

    return h("div", toArray(this.$toasts[this.name] || []).map(function (item) {
      return h("v-snackbar", {
        domProps: _defineProperty({}, !!item.$html ? "innerHTML" : "innerText", !!item.$html ? item.$html : item.$text),
        props: _objectSpread(_objectSpread({}, mergeProps(_this, item)), {}, {
          value: item.value
        }),
        on: {
          input: function input($event) {
            item.value = $event;
          }
        }
      });
    }) /////
    );
  }
};
function index (Vue) {
  var _arguments = arguments;
  var toasts = {};
  var toast = {
    show: function show(group, prop, color) {
      if (_arguments.length === 1) {
        prop = group;
        group = "default";
      }

      if (typeof prop === "string" || typeof prop === "number") {
        prop = {
          $text: prop + ""
        };
      }

      if (group in toasts) {
        toasts[group] = Object.assign.apply(Object, [{}, toasts[group], prop].concat(_toConsumableArray(color ? {
          color: color
        } : {}), [{
          value: true
        }]));
      }
    },
    success: function success(group, prop) {
      toast.show(group, prop, "success");
    },
    info: function info(group, prop) {
      toast.show(group, prop, "info");
    },
    warn: function warn(group, prop) {
      toast.show(group, prop, "warning");
    },
    error: function error(group, prop) {
      toast.show(group, prop, "error");
    }
  };
  Object.defineProperty(Vue.prototype, "_toasts", {
    get: function get() {
      return toasts;
    }
  });
  Object.defineProperty(Vue.prototype, "$toast", {
    get: function get() {
      return toast;
    }
  });
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      Vue.util.defineReactive(this, "$toasts", this._toasts);
    }
  });
  Vue.component("vue-toast-group", VueToastGroup);
}

export default index;
