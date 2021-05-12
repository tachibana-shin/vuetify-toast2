const props = {
  name: {
    type: String,
    default: "default"
  },
  color: {
    type: [String, undefined],
    default: undefined
  },
  timeout: {
    type: [Number, undefined],
    default: undefined
  },
  app: {
    type: Boolean,
    default: true
  },
  bottom: {
    type: Boolean,
    default: false
  },
  centered: {
    type: Boolean,
    default: false
  },
  contentClass: {
    type: [String, undefined],
    default: undefined
  },
  dark: {
    type: Boolean,
    default: false
  },
  elevation: {
    type: [Number, String, undefined],
    default: undefined
  },
  height: {
    type: [Number, String, undefined],
    default: undefined
  },
  left: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  minWidth: {
    type: [Number, String, undefined],
    default: undefined
  },
  maxWidth: {
    type: [Number, String, undefined],
    default: undefined
  },
  minHeight: {
    type: [Number, String, undefined],
    default: undefined
  },
  maxHeight: {
    type: [Number, String, undefined],
    default: undefined
  },
  multiLine: {
    type: Boolean,
    default: false
  },
  outlined: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: [Boolean, String, undefined],
    default: undefined
  },
  shaped: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: "div"
  },
  text: {
    type: Boolean,
    default: false
  },
  tile: {
    type: Boolean,
    default: false
  },
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  top: {
    type: Boolean,
    default: false
  },
  transition: {
    type: [Boolean, String],
    default: "v-snack-transition"
  },
  vertical: {
    type: Boolean,
    default: false
  },
  width: {
    type: [Number, String, undefined],
    default: undefined
  }
};
const propsName = [];

for (const name in props) {
  propsName.push(name);
}

function toArray(array) {
  if ("length" in array) {
    return array;
  }

  return [array];
}

function mergeProps(a, b) {
  const current = {};
  propsName.forEach(name => {
    current[name] = a[name];

    if (name in b) {
      current[name] = b[name];
    }
  });
  return current;
}

const VueToastGroup = {
  props,

  created() {
    const {
      name
    } = this;
    const toastProp = {
      value: false,
      $text: undefined,
      $html: undefined
    };

    for (const name in props) {
      toastProp[name] = props[name].default;
    }

    this.$set(this.$toasts, name, toastProp);
  },

  beforeDestroy() {
    this.$delete(this, this.name);
  },

  render(h) {
    return h("div", toArray(this.$toasts[this.name] || []).map(item => {
      return h("v-snackbar", {
        domProps: {
          [!!item.$html ? "innerHTML" : "innerText"]: !!item.$html ? item.$html : item.$text
        },
        props: { ...mergeProps(this, item),
          value: item.value
        },
        on: {
          input: $event => {
            item.value = $event;
          }
        }
      });
    }) /////
    );
  }

};
function index (Vue) {
  const toasts = {};
  const toast = {
    show: (group, prop, color) => {
      if (arguments.length === 1) {
        prop = group;
        group = "default";
      }

      if (typeof prop === "string" || typeof prop === "number") {
        prop = {
          $text: prop + ""
        };
      }

      if (group in toasts) {
        toasts[group] = { ...toasts[group],
          ...prop,
          ...(color ? {
            color
          } : {}),
          value: true
        };
      }
    },
    success: (group, prop) => {
      toast.show(group, prop, "success");
    },
    info: (group, prop) => {
      toast.show(group, prop, "info");
    },
    warn: (group, prop) => {
      toast.show(group, prop, "warning");
    },
    error: (group, prop) => {
      toast.show(group, prop, "error");
    }
  };
  Object.defineProperty(Vue.prototype, "_toasts", {
    get() {
      return toasts;
    }

  });
  Object.defineProperty(Vue.prototype, "$toast", {
    get() {
      return toast;
    }

  });
  Vue.mixin({
    beforeCreate() {
      Vue.util.defineReactive(this, "$toasts", this._toasts);
    }

  });
  Vue.component("vue-toast-group", VueToastGroup);
}

export default index;
