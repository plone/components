import q, { createContext as vr, useContext as pr, forwardRef as br } from "react";
import { Link as mr, Breadcrumbs as hr, Breadcrumb as gr, TextField as yr, Input as Er, Label as Rr, Text as Se } from "react-aria-components";
import { baseStyleProps as _r, useSlotProps as Tr, useStyleProps as xr } from "@react-spectrum/utils";
import Q from "classnames";
var ee = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function wr() {
  if (Pe)
    return D;
  Pe = 1;
  var n = q, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(T, m, O) {
    var E, x = {}, P = null, I = null;
    O !== void 0 && (P = "" + O), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (I = m.ref);
    for (E in m)
      i.call(m, E) && !R.hasOwnProperty(E) && (x[E] = m[E]);
    if (T && T.defaultProps)
      for (E in m = T.defaultProps, m)
        x[E] === void 0 && (x[E] = m[E]);
    return { $$typeof: o, type: T, key: P, ref: I, props: x, _owner: d.current };
  }
  return D.Fragment = s, D.jsx = b, D.jsxs = b, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Sr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var n = q, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), T = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), re = Symbol.iterator, ke = "@@iterator";
    function Le(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var De = !1, Fe = !1, Ne = !1, Ie = !1, Ve = !1, te;
    te = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === R || Ve || e === d || e === O || e === E || Ie || e === I || De || Fe || Ne || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === x || e.$$typeof === b || e.$$typeof === T || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case R:
          return "Profiler";
        case d:
          return "StrictMode";
        case O:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ne(r) + ".Consumer";
          case b:
            var t = e;
            return ne(t._context) + ".Provider";
          case m:
            return Me(e, e.render, "ForwardRef");
          case x:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case P: {
            var c = e, f = c._payload, u = c._init;
            try {
              return w(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, L = 0, ae, ie, oe, se, le, ue, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (L === 0) {
          ae = console.log, ie = console.info, oe = console.warn, se = console.error, le = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function Ue() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ae
            }),
            info: C({}, e, {
              value: ie
            }),
            warn: C({}, e, {
              value: oe
            }),
            error: C({}, e, {
              value: se
            }),
            group: C({}, e, {
              value: le
            }),
            groupCollapsed: C({}, e, {
              value: ue
            }),
            groupEnd: C({}, e, {
              value: ce
            })
          });
        }
        L < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = j.ReactCurrentDispatcher, H;
    function V(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            H = a && a[1] || "";
          }
        return `
` + H + e;
      }
    }
    var z = !1, W;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      W = new qe();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      z = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = B.current, B.current = null, Ye();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (S) {
              a = S;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (S) {
              a = S;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            a = S;
          }
          e();
        }
      } catch (S) {
        if (S && a && typeof S.stack == "string") {
          for (var l = S.stack.split(`
`), g = a.stack.split(`
`), v = l.length - 1, p = g.length - 1; v >= 1 && p >= 0 && l[v] !== g[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (l[v] !== g[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || l[v] !== g[p]) {
                    var _ = `
` + l[v].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, _), _;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        z = !1, B.current = f, Ue(), Error.prepareStackTrace = c;
      }
      var k = e ? e.displayName || e.name : "", we = k ? V(k) : "";
      return typeof e == "function" && W.set(e, we), we;
    }
    function Be(e, r, t) {
      return de(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, He(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case E:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Be(e.render);
          case x:
            return M(e.type, r, t);
          case P: {
            var a = e, c = a._payload, f = a._init;
            try {
              return M(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ve = {}, pe = j.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function ze(e, r, t, a, c) {
      {
        var f = Function.call.bind(Y);
        for (var u in e)
          if (f(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var g = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              l = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              l = v;
            }
            l && !(l instanceof Error) && (U(c), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof l), U(null)), l instanceof Error && !(l.message in ve) && (ve[l.message] = !0, U(c), h("Failed %s type: %s", t, l.message), U(null));
          }
      }
    }
    var Je = Array.isArray;
    function J(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function me(e) {
      if (Ke(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), be(e);
    }
    var A = j.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, G;
    G = {};
    function Ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = w(A.current.type);
        G[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(A.current.type), e.ref), G[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          he || (he = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, a, c, f, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ar(e, r, t, a, c) {
      {
        var f, u = {}, l = null, g = null;
        t !== void 0 && (me(t), l = "" + t), Qe(r) && (me(r.key), l = "" + r.key), Ze(r) && (g = r.ref, er(r, c));
        for (f in r)
          Y.call(r, f) && !Xe.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            u[f] === void 0 && (u[f] = v[f]);
        }
        if (l || g) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && rr(u, p), g && tr(u, p);
        }
        return nr(e, l, g, c, a, A.current, u);
      }
    }
    var K = j.ReactCurrentOwner, ye = j.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ee() {
      {
        if (K.current) {
          var e = w(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function or(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + w(e._owner.type) + "."), $(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), $(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Z(a) && _e(a, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Le(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), u; !(u = f.next()).done; )
              Z(u.value) && _e(u.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var c = w(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            $(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function xe(e, r, t, a, c, f) {
      {
        var u = We(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = ir(c);
          g ? l += g : l += Ee();
          var v;
          e === null ? v = "null" : J(e) ? v = "array" : e !== void 0 && e.$$typeof === o ? (v = "<" + (w(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, l);
        }
        var p = ar(e, r, t, c, f);
        if (p == null)
          return p;
        if (u) {
          var _ = r.children;
          if (_ !== void 0)
            if (a)
              if (J(_)) {
                for (var k = 0; k < _.length; k++)
                  Te(_[k], e);
                Object.freeze && Object.freeze(_);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(_, e);
        }
        return e === i ? lr(p) : sr(p), p;
      }
    }
    function ur(e, r, t) {
      return xe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var fr = cr, dr = ur;
    F.Fragment = i, F.jsx = fr, F.jsxs = dr;
  }()), F;
}
process.env.NODE_ENV === "production" ? ee.exports = wr() : ee.exports = Sr();
var y = ee.exports;
const Pr = vr({
  flattenToAppURL: (n) => n
});
function Cr() {
  return pr(Pr);
}
const Or = (n, o) => {
  const { flattenToAppURL: s } = Cr(), i = s(n.href);
  return /* @__PURE__ */ y.jsx(mr, { ref: o, ...n, href: i, children: n.children });
}, jr = /* @__PURE__ */ br(Or);
function $e(n) {
  var o, s, i = "";
  if (typeof n == "string" || typeof n == "number")
    i += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (o = 0; o < n.length; o++)
        n[o] && (s = $e(n[o])) && (i && (i += " "), i += s);
    else
      for (o in n)
        n[o] && (i && (i += " "), i += o);
  return i;
}
function $r() {
  for (var n, o, s = 0, i = ""; s < arguments.length; )
    (n = arguments[s++]) && (o = $e(n)) && (i && (i += " "), i += o);
  return i;
}
typeof document < "u" && q.useLayoutEffect;
const kr = /* @__PURE__ */ new Set([
  "id"
]), Lr = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Ar = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Dr = /^(data-.*)$/;
function Fr(n, o = {}) {
  let { labelable: s, isLink: i, propNames: d } = o, R = {};
  for (const b in n)
    Object.prototype.hasOwnProperty.call(n, b) && (kr.has(b) || s && Lr.has(b) || i && Ar.has(b) || d != null && d.has(b) || Dr.test(b)) && (R[b] = n[b]);
  return R;
}
let N = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Set();
function je() {
  if (typeof window > "u")
    return;
  let n = (s) => {
    let i = N.get(s.target);
    i || (i = /* @__PURE__ */ new Set(), N.set(s.target, i), s.target.addEventListener("transitioncancel", o)), i.add(s.propertyName);
  }, o = (s) => {
    let i = N.get(s.target);
    if (i && (i.delete(s.propertyName), i.size === 0 && (s.target.removeEventListener("transitioncancel", o), N.delete(s.target)), N.size === 0)) {
      for (let d of Oe)
        d();
      Oe.clear();
    }
  };
  document.body.addEventListener("transitionrun", n), document.body.addEventListener("transitionend", o);
}
typeof document < "u" && (document.readyState !== "loading" ? je() : document.addEventListener("DOMContentLoaded", je));
function Nr(n) {
  return `var(--semantic-${n}-color-icon)`;
}
const Ir = {
  ..._r,
  color: ["color", Nr]
};
function Vr(n) {
  n = Tr(n, "icon");
  let {
    children: o,
    size: s,
    "aria-label": i,
    "aria-hidden": d,
    ...R
  } = n, { styleProps: b } = xr(R, Ir);
  d || (d = void 0);
  let T = s || "M";
  return q.cloneElement(o, {
    ...Fr(R),
    ...b,
    focusable: "false",
    "aria-label": i,
    "aria-hidden": i ? d || void 0 : !0,
    role: "img",
    className: $r(
      "q icon",
      `icon--size${T}`,
      o.props.className,
      b.className
    )
  });
}
const Wr = (n) => /* @__PURE__ */ y.jsx(Vr, { ...n, children: /* @__PURE__ */ y.jsx(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "home-icon",
    children: /* @__PURE__ */ y.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.5855 9.68946L12 2.7666L2.41455 9.68946L3.58553 11.3108L12 5.23367L20.4146 11.3108L21.5855 9.68946ZM7 12.0001H5V21.0001H11V16.0001H13V21.0001H19V12.0001H17V19.0001H15V14.0001H9V19.0001H7V12.0001Z"
      }
    )
  }
) });
function zr({
  items: n,
  root: o,
  includeRoot: s
}) {
  let i;
  return s && (i = [{
    "@id": o || "/",
    title: "Home"
  }, ...n]), /* @__PURE__ */ y.jsx("nav", { "aria-label": "breadcrumbs", role: "navigation", children: /* @__PURE__ */ y.jsx(hr, { className: "q breadcrumbs", items: i || n, children: (d) => /* @__PURE__ */ y.jsx(gr, { className: "q breadcrumb", children: /* @__PURE__ */ y.jsxs(jr, { href: d["@id"], children: [
    d["@id"] === (o || "/") && /* @__PURE__ */ y.jsx(Wr, { size: "S" }),
    d.title
  ] }) }, d["@id"]) }) });
}
function Mr(n, o) {
  const { defaultProps: s = {} } = n;
  return o.as && o.as !== s.as ? o.as : s.as || "div";
}
const Yr = (n) => {
  const { children: o, className: s, layout: i, narrow: d, ...R } = n, b = Q("a", "container", s, { layout: i, narrow: d }), T = Mr(Yr, n);
  return /* @__PURE__ */ y.jsx(T, { ...R, className: b, children: o });
};
function Jr({
  title: n,
  description: o,
  error: s,
  ...i
}) {
  return /* @__PURE__ */ y.jsxs(yr, { ...i, className: Q("q field", `field-${i.name}`), children: [
    /* @__PURE__ */ y.jsx(Er, { className: Q("q input", { error: s }) }),
    /* @__PURE__ */ y.jsx(Rr, { className: "q label", children: n }),
    o && /* @__PURE__ */ y.jsx(Se, { slot: "description", className: "q hint", children: o }),
    s == null ? void 0 : s.map((d) => /* @__PURE__ */ y.jsx(Se, { slot: "errorMessage", className: "q assist", children: d }, d))
  ] });
}
export {
  zr as Breadcrumbs,
  Yr as Container,
  Vr as Icon,
  Jr as Input,
  jr as Link
};
