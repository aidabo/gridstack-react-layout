var Du = Object.defineProperty;
var _u = (e, t, n) => t in e ? Du(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fr = (e, t, n) => _u(e, typeof t != "symbol" ? t + "" : t, n);
import * as b from "react";
import jt, { createContext as la, useContext as Vo, useState as St, useCallback as Gt, useRef as Or, useLayoutEffect as Ha, useMemo as Bu, forwardRef as kl, Children as Lu, isValidElement as ho, cloneElement as yo, useEffect as Co, useImperativeHandle as zu } from "react";
import { GridStack as Rr } from "gridstack";
import * as Fu from "react-dom";
import ro, { createPortal as Wu } from "react-dom";
function $l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ji = { exports: {} }, mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function Vu() {
  if (Ga) return mr;
  Ga = 1;
  var e = jt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, p) {
    var d, f = {}, h = null, y = null;
    p !== void 0 && (h = "" + p), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (d in c) o.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: h, ref: y, props: f, _owner: i.current };
  }
  return mr.Fragment = n, mr.jsx = s, mr.jsxs = s, mr;
}
var gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya;
function Uu() {
  return Ya || (Ya = 1, process.env.NODE_ENV !== "production" && function() {
    var e = jt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, u = "@@iterator";
    function v(C) {
      if (C === null || typeof C != "object")
        return null;
      var G = g && C[g] || C[u];
      return typeof G == "function" ? G : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(C) {
      {
        for (var G = arguments.length, te = new Array(G > 1 ? G - 1 : 0), ue = 1; ue < G; ue++)
          te[ue - 1] = arguments[ue];
        w("error", C, te);
      }
    }
    function w(C, G, te) {
      {
        var ue = T.ReactDebugCurrentFrame, Oe = ue.getStackAddendum();
        Oe !== "" && (G += "%s", te = te.concat([Oe]));
        var Ae = te.map(function(Ee) {
          return String(Ee);
        });
        Ae.unshift("Warning: " + G), Function.prototype.apply.call(console[C], console, Ae);
      }
    }
    var E = !1, S = !1, k = !1, R = !1, A = !1, N;
    N = Symbol.for("react.module.reference");
    function m(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === o || C === a || A || C === i || C === p || C === d || R || C === y || E || S || k || typeof C == "object" && C !== null && (C.$$typeof === h || C.$$typeof === f || C.$$typeof === s || C.$$typeof === l || C.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === N || C.getModuleId !== void 0));
    }
    function $(C, G, te) {
      var ue = C.displayName;
      if (ue)
        return ue;
      var Oe = G.displayName || G.name || "";
      return Oe !== "" ? te + "(" + Oe + ")" : te;
    }
    function _(C) {
      return C.displayName || "Context";
    }
    function M(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case l:
            var G = C;
            return _(G) + ".Consumer";
          case s:
            var te = C;
            return _(te._context) + ".Provider";
          case c:
            return $(C, C.render, "ForwardRef");
          case f:
            var ue = C.displayName || null;
            return ue !== null ? ue : M(C.type) || "Memo";
          case h: {
            var Oe = C, Ae = Oe._payload, Ee = Oe._init;
            try {
              return M(Ee(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, I = 0, j, V, U, F, P, L, K;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function Q() {
      {
        if (I === 0) {
          j = console.log, V = console.info, U = console.warn, F = console.error, P = console.group, L = console.groupCollapsed, K = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        I++;
      }
    }
    function re() {
      {
        if (I--, I === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, C, {
              value: j
            }),
            info: z({}, C, {
              value: V
            }),
            warn: z({}, C, {
              value: U
            }),
            error: z({}, C, {
              value: F
            }),
            group: z({}, C, {
              value: P
            }),
            groupCollapsed: z({}, C, {
              value: L
            }),
            groupEnd: z({}, C, {
              value: K
            })
          });
        }
        I < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = T.ReactCurrentDispatcher, Y;
    function X(C, G, te) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (Oe) {
            var ue = Oe.stack.trim().match(/\n( *(at )?)/);
            Y = ue && ue[1] || "";
          }
        return `
` + Y + C;
      }
    }
    var le = !1, q;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      q = new ie();
    }
    function W(C, G) {
      if (!C || le)
        return "";
      {
        var te = q.get(C);
        if (te !== void 0)
          return te;
      }
      var ue;
      le = !0;
      var Oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = B.current, B.current = null, Q();
      try {
        if (G) {
          var Ee = function() {
            throw Error();
          };
          if (Object.defineProperty(Ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ee, []);
            } catch (pt) {
              ue = pt;
            }
            Reflect.construct(C, [], Ee);
          } else {
            try {
              Ee.call();
            } catch (pt) {
              ue = pt;
            }
            C.call(Ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            ue = pt;
          }
          C();
        }
      } catch (pt) {
        if (pt && ue && typeof pt.stack == "string") {
          for (var ve = pt.stack.split(`
`), st = ue.stack.split(`
`), Ke = ve.length - 1, Je = st.length - 1; Ke >= 1 && Je >= 0 && ve[Ke] !== st[Je]; )
            Je--;
          for (; Ke >= 1 && Je >= 0; Ke--, Je--)
            if (ve[Ke] !== st[Je]) {
              if (Ke !== 1 || Je !== 1)
                do
                  if (Ke--, Je--, Je < 0 || ve[Ke] !== st[Je]) {
                    var Tt = `
` + ve[Ke].replace(" at new ", " at ");
                    return C.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", C.displayName)), typeof C == "function" && q.set(C, Tt), Tt;
                  }
                while (Ke >= 1 && Je >= 0);
              break;
            }
        }
      } finally {
        le = !1, B.current = Ae, re(), Error.prepareStackTrace = Oe;
      }
      var zn = C ? C.displayName || C.name : "", Cn = zn ? X(zn) : "";
      return typeof C == "function" && q.set(C, Cn), Cn;
    }
    function ae(C, G, te) {
      return W(C, !1);
    }
    function de(C) {
      var G = C.prototype;
      return !!(G && G.isReactComponent);
    }
    function xe(C, G, te) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return W(C, de(C));
      if (typeof C == "string")
        return X(C);
      switch (C) {
        case p:
          return X("Suspense");
        case d:
          return X("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case c:
            return ae(C.render);
          case f:
            return xe(C.type, G, te);
          case h: {
            var ue = C, Oe = ue._payload, Ae = ue._init;
            try {
              return xe(Ae(Oe), G, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, $e = {}, ze = T.ReactDebugCurrentFrame;
    function We(C) {
      if (C) {
        var G = C._owner, te = xe(C.type, C._source, G ? G.type : null);
        ze.setExtraStackFrame(te);
      } else
        ze.setExtraStackFrame(null);
    }
    function qe(C, G, te, ue, Oe) {
      {
        var Ae = Function.call.bind(Ve);
        for (var Ee in C)
          if (Ae(C, Ee)) {
            var ve = void 0;
            try {
              if (typeof C[Ee] != "function") {
                var st = Error((ue || "React class") + ": " + te + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              ve = C[Ee](G, Ee, ue, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              ve = Ke;
            }
            ve && !(ve instanceof Error) && (We(Oe), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", te, Ee, typeof ve), We(null)), ve instanceof Error && !(ve.message in $e) && ($e[ve.message] = !0, We(Oe), O("Failed %s type: %s", te, ve.message), We(null));
          }
      }
    }
    var ke = Array.isArray;
    function se(C) {
      return ke(C);
    }
    function Dt(C) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, te = G && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return te;
      }
    }
    function _t(C) {
      try {
        return Jt(C), !1;
      } catch {
        return !0;
      }
    }
    function Jt(C) {
      return "" + C;
    }
    function Qt(C) {
      if (_t(C))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(C)), Jt(C);
    }
    var ut = T.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bt, un, Ze;
    Ze = {};
    function Lt(C) {
      if (Ve.call(C, "ref")) {
        var G = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function It(C) {
      if (Ve.call(C, "key")) {
        var G = Object.getOwnPropertyDescriptor(C, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function rt(C, G) {
      if (typeof C.ref == "string" && ut.current && G && ut.current.stateNode !== G) {
        var te = M(ut.current.type);
        Ze[te] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ut.current.type), C.ref), Ze[te] = !0);
      }
    }
    function pn(C, G) {
      {
        var te = function() {
          Bt || (Bt = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        te.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function En(C, G) {
      {
        var te = function() {
          un || (un = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        te.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var pr = function(C, G, te, ue, Oe, Ae, Ee) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: C,
        key: G,
        ref: te,
        props: Ee,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function Zt(C, G, te, ue, Oe) {
      {
        var Ae, Ee = {}, ve = null, st = null;
        te !== void 0 && (Qt(te), ve = "" + te), It(G) && (Qt(G.key), ve = "" + G.key), Lt(G) && (st = G.ref, rt(G, Oe));
        for (Ae in G)
          Ve.call(G, Ae) && !Mt.hasOwnProperty(Ae) && (Ee[Ae] = G[Ae]);
        if (C && C.defaultProps) {
          var Ke = C.defaultProps;
          for (Ae in Ke)
            Ee[Ae] === void 0 && (Ee[Ae] = Ke[Ae]);
        }
        if (ve || st) {
          var Je = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          ve && pn(Ee, Je), st && En(Ee, Je);
        }
        return pr(C, ve, st, Oe, ue, ut.current, Ee);
      }
    }
    var zt = T.ReactCurrentOwner, _n = T.ReactDebugCurrentFrame;
    function Ft(C) {
      if (C) {
        var G = C._owner, te = xe(C.type, C._source, G ? G.type : null);
        _n.setExtraStackFrame(te);
      } else
        _n.setExtraStackFrame(null);
    }
    var en;
    en = !1;
    function Sn(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function Bn() {
      {
        if (zt.current) {
          var C = M(zt.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function dr(C) {
      return "";
    }
    var Ln = {};
    function ce(C) {
      {
        var G = Bn();
        if (!G) {
          var te = typeof C == "string" ? C : C.displayName || C.name;
          te && (G = `

Check the top-level render call using <` + te + ">.");
        }
        return G;
      }
    }
    function ot(C, G) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var te = ce(G);
        if (Ln[te])
          return;
        Ln[te] = !0;
        var ue = "";
        C && C._owner && C._owner !== zt.current && (ue = " It was passed a child from " + M(C._owner.type) + "."), Ft(C), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, ue), Ft(null);
      }
    }
    function ee(C, G) {
      {
        if (typeof C != "object")
          return;
        if (se(C))
          for (var te = 0; te < C.length; te++) {
            var ue = C[te];
            Sn(ue) && ot(ue, G);
          }
        else if (Sn(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Oe = v(C);
          if (typeof Oe == "function" && Oe !== C.entries)
            for (var Ae = Oe.call(C), Ee; !(Ee = Ae.next()).done; )
              Sn(Ee.value) && ot(Ee.value, G);
        }
      }
    }
    function oe(C) {
      {
        var G = C.type;
        if (G == null || typeof G == "string")
          return;
        var te;
        if (typeof G == "function")
          te = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === f))
          te = G.propTypes;
        else
          return;
        if (te) {
          var ue = M(G);
          qe(te, C.props, "prop", ue, C);
        } else if (G.PropTypes !== void 0 && !en) {
          en = !0;
          var Oe = M(G);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function he(C) {
      {
        for (var G = Object.keys(C.props), te = 0; te < G.length; te++) {
          var ue = G[te];
          if (ue !== "children" && ue !== "key") {
            Ft(C), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Ft(null);
            break;
          }
        }
        C.ref !== null && (Ft(C), O("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var Te = {};
    function Fe(C, G, te, ue, Oe, Ae) {
      {
        var Ee = m(C);
        if (!Ee) {
          var ve = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = dr();
          st ? ve += st : ve += Bn();
          var Ke;
          C === null ? Ke = "null" : se(C) ? Ke = "array" : C !== void 0 && C.$$typeof === t ? (Ke = "<" + (M(C.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof C, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, ve);
        }
        var Je = Zt(C, G, te, Oe, Ae);
        if (Je == null)
          return Je;
        if (Ee) {
          var Tt = G.children;
          if (Tt !== void 0)
            if (ue)
              if (se(Tt)) {
                for (var zn = 0; zn < Tt.length; zn++)
                  ee(Tt[zn], C);
                Object.freeze && Object.freeze(Tt);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ee(Tt, C);
        }
        if (Ve.call(G, "key")) {
          var Cn = M(C), pt = Object.keys(G).filter(function(Au) {
            return Au !== "key";
          }), fi = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[Cn + fi]) {
            var Nu = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fi, Cn, Nu, Cn), Te[Cn + fi] = !0;
          }
        }
        return C === o ? he(Je) : oe(Je), Je;
      }
    }
    function xt(C, G, te) {
      return Fe(C, G, te, !0);
    }
    function tn(C, G, te) {
      return Fe(C, G, te, !1);
    }
    var wn = tn, no = xt;
    gr.Fragment = o, gr.jsx = wn, gr.jsxs = no;
  }()), gr;
}
process.env.NODE_ENV === "production" ? ji.exports = Vu() : ji.exports = Uu();
var x = ji.exports;
const Ml = la(null);
function Ur() {
  const e = Vo(Ml);
  if (!e)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return e;
}
function Hu({
  children: e,
  initialOptions: t
}) {
  const [n, o] = St(null), [i, a] = St(() => {
    var h;
    const d = /* @__PURE__ */ new Map(), f = (y) => {
      var g;
      y.id && y.content && d.set(y.id, y), (g = y.subGridOpts) != null && g.children && y.subGridOpts.children.forEach((u) => {
        f(u);
      });
    };
    return (h = t.children) == null || h.forEach((y) => {
      f(y);
    }), d;
  }), s = Gt(
    (d) => {
      const f = `widget-${Math.random().toString(36).substring(2, 15)}`, h = d(f);
      n == null || n.addWidget({ ...h, id: f }), a((y) => {
        const g = new Map(y);
        return g.set(f, h), g;
      });
    },
    [n]
  ), l = Gt(
    (d) => {
      const f = `sub-grid-${Math.random().toString(36).substring(2, 15)}`, h = /* @__PURE__ */ new Map(), y = d(f, (g) => {
        const u = `widget-${Math.random().toString(36).substring(2, 15)}`;
        return h.set(u, g), { ...g, id: u };
      });
      n == null || n.addWidget({ ...y, id: f }), a((g) => {
        const u = new Map(g);
        return h.forEach((v, T) => {
          u.set(T, v);
        }), u;
      });
    },
    [n]
  ), c = Gt(
    (d) => {
      n == null || n.removeWidget(d), a((f) => {
        const h = new Map(f);
        return h.delete(d), h;
      });
    },
    [n]
  ), p = Gt(() => n == null ? void 0 : n.save(!0, !0, (d, f) => f), [n]);
  return /* @__PURE__ */ x.jsx(
    Ml.Provider,
    {
      value: {
        initialOptions: t,
        gridStack: n,
        addWidget: s,
        removeWidget: c,
        addSubGrid: l,
        saveOptions: p,
        _gridStack: {
          value: n,
          set: o
        },
        _rawWidgetMetaMap: {
          value: i,
          set: a
        }
      },
      children: e
    }
  );
}
const Il = la(null);
function Gu() {
  const e = Vo(Il);
  if (!e)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return e;
}
var Yu = typeof Element < "u", qu = typeof Map == "function", Ku = typeof Set == "function", Xu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function bo(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, o, i;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!bo(e[o], t[o])) return !1;
      return !0;
    }
    var a;
    if (qu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(o = a.next()).done; )
        if (!t.has(o.value[0])) return !1;
      for (a = e.entries(); !(o = a.next()).done; )
        if (!bo(o.value[1], t.get(o.value[0]))) return !1;
      return !0;
    }
    if (Ku && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(o = a.next()).done; )
        if (!t.has(o.value[0])) return !1;
      return !0;
    }
    if (Xu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length) return !1;
      for (o = n; o-- !== 0; )
        if (e[o] !== t[o]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[o])) return !1;
    if (Yu && e instanceof Element) return !1;
    for (o = n; o-- !== 0; )
      if (!((i[o] === "_owner" || i[o] === "__v" || i[o] === "__o") && e.$$typeof) && !bo(e[i[o]], t[i[o]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Ju = function(t, n) {
  try {
    return bo(t, n);
  } catch (o) {
    if ((o.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw o;
  }
};
const Qu = /* @__PURE__ */ $l(Ju), et = [];
for (let e = 0; e < 256; ++e)
  et.push((e + 256).toString(16).slice(1));
function Zu(e, t = 0) {
  return (et[e[t + 0]] + et[e[t + 1]] + et[e[t + 2]] + et[e[t + 3]] + "-" + et[e[t + 4]] + et[e[t + 5]] + "-" + et[e[t + 6]] + et[e[t + 7]] + "-" + et[e[t + 8]] + et[e[t + 9]] + "-" + et[e[t + 10]] + et[e[t + 11]] + et[e[t + 12]] + et[e[t + 13]] + et[e[t + 14]] + et[e[t + 15]]).toLowerCase();
}
let mi;
const ep = new Uint8Array(16);
function tp() {
  if (!mi) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    mi = crypto.getRandomValues.bind(crypto);
  }
  return mi(ep);
}
const np = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), qa = { randomUUID: np };
function ca(e, t, n) {
  var i;
  if (qa.randomUUID && !t && !e)
    return qa.randomUUID();
  e = e || {};
  const o = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? tp();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Zu(o);
}
const rp = Rr.prototype.resizeToContent;
Rr.prototype.resizeToContent = function(e) {
  const t = e.querySelector(".grid-stack-item-content");
  if (t != null && t.firstElementChild)
    return rp.call(this, e);
};
function op({
  children: e,
  onGridStackDropEvent: t
}) {
  const {
    _gridStack: { value: n, set: o },
    initialOptions: i
  } = Ur(), a = Or(/* @__PURE__ */ new Map()), s = Or(null), l = Or(i), c = Gt(
    (d, f) => {
      f.id && a.current.set(f.id, d);
    },
    []
  ), p = Gt(() => {
    if (s.current) {
      Rr.renderCB = c;
      const d = Rr.init(l.current, s.current);
      return Rr.setupDragIn(".grid-stack-item-widget", {
        appendTo: "body",
        helper: "clone",
        scroll: !1
      }), d.on("dropped", function(f, h, y) {
        if (y) {
          const g = y.el, u = g.dataset.gsType;
          if (u && t) {
            const v = {
              name: u,
              id: ca(),
              x: y.x || 0,
              y: y.y || 0,
              w: 4,
              h: 4
            };
            t(v), d.removeWidget(g, !0);
          }
        }
      }), d;
    }
    return null;
  }, [c, t]);
  return Ha(() => {
    if (!Qu(i, l.current) && n)
      try {
        n.removeAll(!1), n.destroy(!1), a.current.clear(), l.current = i, o(p());
      } catch (d) {
        console.error("Error reinitializing gridstack", d);
      }
  }, [i, n, p, o]), Ha(() => {
    if (!n)
      try {
        o(p());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [n, p, o]), /* @__PURE__ */ x.jsx(
    Il.Provider,
    {
      value: Bu(
        () => ({
          getWidgetContainer: (d) => a.current.get(d) || null
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [n]
      ),
      children: /* @__PURE__ */ x.jsx("div", { ref: s, children: n ? e : null })
    }
  );
}
const jl = la(null);
function Y0() {
  const e = Vo(jl);
  if (!e)
    throw new Error(
      "useGridStackWidgetContext must be used within a GridStackWidgetProvider"
    );
  return e;
}
var Ni = { exports: {} }, Me = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function ip() {
  if (Ka) return Me;
  Ka = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function g(u) {
    if (typeof u == "object" && u !== null) {
      var v = u.$$typeof;
      switch (v) {
        case e:
          switch (u = u.type, u) {
            case n:
            case i:
            case o:
            case c:
            case p:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case l:
                case f:
                case d:
                  return u;
                case a:
                  return u;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Me.ContextConsumer = a, Me.ContextProvider = s, Me.Element = e, Me.ForwardRef = l, Me.Fragment = n, Me.Lazy = f, Me.Memo = d, Me.Portal = t, Me.Profiler = i, Me.StrictMode = o, Me.Suspense = c, Me.SuspenseList = p, Me.isContextConsumer = function(u) {
    return g(u) === a;
  }, Me.isContextProvider = function(u) {
    return g(u) === s;
  }, Me.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, Me.isForwardRef = function(u) {
    return g(u) === l;
  }, Me.isFragment = function(u) {
    return g(u) === n;
  }, Me.isLazy = function(u) {
    return g(u) === f;
  }, Me.isMemo = function(u) {
    return g(u) === d;
  }, Me.isPortal = function(u) {
    return g(u) === t;
  }, Me.isProfiler = function(u) {
    return g(u) === i;
  }, Me.isStrictMode = function(u) {
    return g(u) === o;
  }, Me.isSuspense = function(u) {
    return g(u) === c;
  }, Me.isSuspenseList = function(u) {
    return g(u) === p;
  }, Me.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === c || u === p || typeof u == "object" && u !== null && (u.$$typeof === f || u.$$typeof === d || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === y || u.getModuleId !== void 0);
  }, Me.typeOf = g, Me;
}
var Ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function ap() {
  return Xa || (Xa = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var v = u.$$typeof;
        switch (v) {
          case t:
            switch (u = u.type, u) {
              case o:
              case a:
              case i:
              case p:
              case d:
              case y:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case h:
                  case f:
                    return u;
                  case s:
                    return u;
                  default:
                    return v;
                }
            }
          case n:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Ie.ContextConsumer = s, Ie.ContextProvider = l, Ie.Element = t, Ie.ForwardRef = c, Ie.Fragment = o, Ie.Lazy = h, Ie.Memo = f, Ie.Portal = n, Ie.Profiler = a, Ie.StrictMode = i, Ie.Suspense = p, Ie.SuspenseList = d, Ie.isContextConsumer = function(u) {
      return e(u) === s;
    }, Ie.isContextProvider = function(u) {
      return e(u) === l;
    }, Ie.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Ie.isForwardRef = function(u) {
      return e(u) === c;
    }, Ie.isFragment = function(u) {
      return e(u) === o;
    }, Ie.isLazy = function(u) {
      return e(u) === h;
    }, Ie.isMemo = function(u) {
      return e(u) === f;
    }, Ie.isPortal = function(u) {
      return e(u) === n;
    }, Ie.isProfiler = function(u) {
      return e(u) === a;
    }, Ie.isStrictMode = function(u) {
      return e(u) === i;
    }, Ie.isSuspense = function(u) {
      return e(u) === p;
    }, Ie.isSuspenseList = function(u) {
      return e(u) === d;
    }, Ie.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === o || u === a || u === i || u === p || u === d || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === f || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === g || u.getModuleId !== void 0);
    }, Ie.typeOf = e;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? Ni.exports = ip() : Ni.exports = ap();
var ua = Ni.exports, Ai = { exports: {} }, oo = { exports: {} }, Re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function sp() {
  if (Ja) return Re;
  Ja = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function w(S) {
    if (typeof S == "object" && S !== null) {
      var k = S.$$typeof;
      switch (k) {
        case t:
          switch (S = S.type, S) {
            case c:
            case p:
            case o:
            case a:
            case i:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case d:
                case g:
                case y:
                case s:
                  return S;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function E(S) {
    return w(S) === p;
  }
  return Re.AsyncMode = c, Re.ConcurrentMode = p, Re.ContextConsumer = l, Re.ContextProvider = s, Re.Element = t, Re.ForwardRef = d, Re.Fragment = o, Re.Lazy = g, Re.Memo = y, Re.Portal = n, Re.Profiler = a, Re.StrictMode = i, Re.Suspense = f, Re.isAsyncMode = function(S) {
    return E(S) || w(S) === c;
  }, Re.isConcurrentMode = E, Re.isContextConsumer = function(S) {
    return w(S) === l;
  }, Re.isContextProvider = function(S) {
    return w(S) === s;
  }, Re.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Re.isForwardRef = function(S) {
    return w(S) === d;
  }, Re.isFragment = function(S) {
    return w(S) === o;
  }, Re.isLazy = function(S) {
    return w(S) === g;
  }, Re.isMemo = function(S) {
    return w(S) === y;
  }, Re.isPortal = function(S) {
    return w(S) === n;
  }, Re.isProfiler = function(S) {
    return w(S) === a;
  }, Re.isStrictMode = function(S) {
    return w(S) === i;
  }, Re.isSuspense = function(S) {
    return w(S) === f;
  }, Re.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === o || S === p || S === a || S === i || S === f || S === h || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === y || S.$$typeof === s || S.$$typeof === l || S.$$typeof === d || S.$$typeof === v || S.$$typeof === T || S.$$typeof === O || S.$$typeof === u);
  }, Re.typeOf = w, Re;
}
var Pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa;
function lp() {
  return Qa || (Qa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function w(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === o || W === p || W === a || W === i || W === f || W === h || typeof W == "object" && W !== null && (W.$$typeof === g || W.$$typeof === y || W.$$typeof === s || W.$$typeof === l || W.$$typeof === d || W.$$typeof === v || W.$$typeof === T || W.$$typeof === O || W.$$typeof === u);
    }
    function E(W) {
      if (typeof W == "object" && W !== null) {
        var ae = W.$$typeof;
        switch (ae) {
          case t:
            var de = W.type;
            switch (de) {
              case c:
              case p:
              case o:
              case a:
              case i:
              case f:
                return de;
              default:
                var xe = de && de.$$typeof;
                switch (xe) {
                  case l:
                  case d:
                  case g:
                  case y:
                  case s:
                    return xe;
                  default:
                    return ae;
                }
            }
          case n:
            return ae;
        }
      }
    }
    var S = c, k = p, R = l, A = s, N = t, m = d, $ = o, _ = g, M = y, z = n, I = a, j = i, V = f, U = !1;
    function F(W) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(W) || E(W) === c;
    }
    function P(W) {
      return E(W) === p;
    }
    function L(W) {
      return E(W) === l;
    }
    function K(W) {
      return E(W) === s;
    }
    function J(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function Q(W) {
      return E(W) === d;
    }
    function re(W) {
      return E(W) === o;
    }
    function B(W) {
      return E(W) === g;
    }
    function Y(W) {
      return E(W) === y;
    }
    function X(W) {
      return E(W) === n;
    }
    function le(W) {
      return E(W) === a;
    }
    function q(W) {
      return E(W) === i;
    }
    function ie(W) {
      return E(W) === f;
    }
    Pe.AsyncMode = S, Pe.ConcurrentMode = k, Pe.ContextConsumer = R, Pe.ContextProvider = A, Pe.Element = N, Pe.ForwardRef = m, Pe.Fragment = $, Pe.Lazy = _, Pe.Memo = M, Pe.Portal = z, Pe.Profiler = I, Pe.StrictMode = j, Pe.Suspense = V, Pe.isAsyncMode = F, Pe.isConcurrentMode = P, Pe.isContextConsumer = L, Pe.isContextProvider = K, Pe.isElement = J, Pe.isForwardRef = Q, Pe.isFragment = re, Pe.isLazy = B, Pe.isMemo = Y, Pe.isPortal = X, Pe.isProfiler = le, Pe.isStrictMode = q, Pe.isSuspense = ie, Pe.isValidElementType = w, Pe.typeOf = E;
  }()), Pe;
}
var Za;
function pa() {
  return Za || (Za = 1, process.env.NODE_ENV === "production" ? oo.exports = sp() : oo.exports = lp()), oo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gi, es;
function cp() {
  if (es) return gi;
  es = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        p[d] = d;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gi = i() ? Object.assign : function(a, s) {
    for (var l, c = o(a), p, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        p = e(l);
        for (var h = 0; h < p.length; h++)
          n.call(l, p[h]) && (c[p[h]] = l[p[h]]);
      }
    }
    return c;
  }, gi;
}
var hi, ts;
function da() {
  if (ts) return hi;
  ts = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return hi = e, hi;
}
var yi, ns;
function Nl() {
  return ns || (ns = 1, yi = Function.call.bind(Object.prototype.hasOwnProperty)), yi;
}
var bi, rs;
function up() {
  if (rs) return bi;
  rs = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = da(), n = {}, o = Nl();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, c, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (o(a, d)) {
          var f;
          try {
            if (typeof a[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = a[d](s, d, c, l, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var y = p ? p() : "";
            e(
              "Failed " + l + " type: " + f.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, bi = i, bi;
}
var vi, os;
function pp() {
  if (os) return vi;
  os = 1;
  var e = pa(), t = cp(), n = da(), o = Nl(), i = up(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return vi = function(l, c) {
    var p = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(P) {
      var L = P && (p && P[p] || P[d]);
      if (typeof L == "function")
        return L;
    }
    var h = "<<anonymous>>", y = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: O(),
      arrayOf: w,
      element: E(),
      elementType: S(),
      instanceOf: k,
      node: m(),
      objectOf: A,
      oneOf: R,
      oneOfType: N,
      shape: _,
      exact: M
    };
    function g(P, L) {
      return P === L ? P !== 0 || 1 / P === 1 / L : P !== P && L !== L;
    }
    function u(P, L) {
      this.message = P, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function v(P) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, K = 0;
      function J(re, B, Y, X, le, q, ie) {
        if (X = X || h, q = q || Y, ie !== n) {
          if (c) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = X + ":" + Y;
            !L[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            K < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[ae] = !0, K++);
          }
        }
        return B[Y] == null ? re ? B[Y] === null ? new u("The " + le + " `" + q + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new u("The " + le + " `" + q + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : P(B, Y, X, le, q);
      }
      var Q = J.bind(null, !1);
      return Q.isRequired = J.bind(null, !0), Q;
    }
    function T(P) {
      function L(K, J, Q, re, B, Y) {
        var X = K[J], le = j(X);
        if (le !== P) {
          var q = V(X);
          return new u(
            "Invalid " + re + " `" + B + "` of type " + ("`" + q + "` supplied to `" + Q + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return v(L);
    }
    function O() {
      return v(s);
    }
    function w(P) {
      function L(K, J, Q, re, B) {
        if (typeof P != "function")
          return new u("Property `" + B + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var Y = K[J];
        if (!Array.isArray(Y)) {
          var X = j(Y);
          return new u("Invalid " + re + " `" + B + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var le = 0; le < Y.length; le++) {
          var q = P(Y, le, Q, re, B + "[" + le + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return v(L);
    }
    function E() {
      function P(L, K, J, Q, re) {
        var B = L[K];
        if (!l(B)) {
          var Y = j(B);
          return new u("Invalid " + Q + " `" + re + "` of type " + ("`" + Y + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(P);
    }
    function S() {
      function P(L, K, J, Q, re) {
        var B = L[K];
        if (!e.isValidElementType(B)) {
          var Y = j(B);
          return new u("Invalid " + Q + " `" + re + "` of type " + ("`" + Y + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(P);
    }
    function k(P) {
      function L(K, J, Q, re, B) {
        if (!(K[J] instanceof P)) {
          var Y = P.name || h, X = F(K[J]);
          return new u("Invalid " + re + " `" + B + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return v(L);
    }
    function R(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function L(K, J, Q, re, B) {
        for (var Y = K[J], X = 0; X < P.length; X++)
          if (g(Y, P[X]))
            return null;
        var le = JSON.stringify(P, function(ie, W) {
          var ae = V(W);
          return ae === "symbol" ? String(W) : W;
        });
        return new u("Invalid " + re + " `" + B + "` of value `" + String(Y) + "` " + ("supplied to `" + Q + "`, expected one of " + le + "."));
      }
      return v(L);
    }
    function A(P) {
      function L(K, J, Q, re, B) {
        if (typeof P != "function")
          return new u("Property `" + B + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var Y = K[J], X = j(Y);
        if (X !== "object")
          return new u("Invalid " + re + " `" + B + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected an object."));
        for (var le in Y)
          if (o(Y, le)) {
            var q = P(Y, le, Q, re, B + "." + le, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return v(L);
    }
    function N(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var L = 0; L < P.length; L++) {
        var K = P[L];
        if (typeof K != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(K) + " at index " + L + "."
          ), s;
      }
      function J(Q, re, B, Y, X) {
        for (var le = [], q = 0; q < P.length; q++) {
          var ie = P[q], W = ie(Q, re, B, Y, X, n);
          if (W == null)
            return null;
          W.data && o(W.data, "expectedType") && le.push(W.data.expectedType);
        }
        var ae = le.length > 0 ? ", expected one of type [" + le.join(", ") + "]" : "";
        return new u("Invalid " + Y + " `" + X + "` supplied to " + ("`" + B + "`" + ae + "."));
      }
      return v(J);
    }
    function m() {
      function P(L, K, J, Q, re) {
        return z(L[K]) ? null : new u("Invalid " + Q + " `" + re + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return v(P);
    }
    function $(P, L, K, J, Q) {
      return new u(
        (P || "React class") + ": " + L + " type `" + K + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function _(P) {
      function L(K, J, Q, re, B) {
        var Y = K[J], X = j(Y);
        if (X !== "object")
          return new u("Invalid " + re + " `" + B + "` of type `" + X + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var le in P) {
          var q = P[le];
          if (typeof q != "function")
            return $(Q, re, B, le, V(q));
          var ie = q(Y, le, Q, re, B + "." + le, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return v(L);
    }
    function M(P) {
      function L(K, J, Q, re, B) {
        var Y = K[J], X = j(Y);
        if (X !== "object")
          return new u("Invalid " + re + " `" + B + "` of type `" + X + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var le = t({}, K[J], P);
        for (var q in le) {
          var ie = P[q];
          if (o(P, q) && typeof ie != "function")
            return $(Q, re, B, q, V(ie));
          if (!ie)
            return new u(
              "Invalid " + re + " `" + B + "` key `" + q + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(K[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var W = ie(Y, q, Q, re, B + "." + q, n);
          if (W)
            return W;
        }
        return null;
      }
      return v(L);
    }
    function z(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(z);
          if (P === null || l(P))
            return !0;
          var L = f(P);
          if (L) {
            var K = L.call(P), J;
            if (L !== P.entries) {
              for (; !(J = K.next()).done; )
                if (!z(J.value))
                  return !1;
            } else
              for (; !(J = K.next()).done; ) {
                var Q = J.value;
                if (Q && !z(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function I(P, L) {
      return P === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function j(P) {
      var L = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : I(L, P) ? "symbol" : L;
    }
    function V(P) {
      if (typeof P > "u" || P === null)
        return "" + P;
      var L = j(P);
      if (L === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function U(P) {
      var L = V(P);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function F(P) {
      return !P.constructor || !P.constructor.name ? h : P.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, vi;
}
var xi, is;
function dp() {
  if (is) return xi;
  is = 1;
  var e = da();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, xi = function() {
    function o(s, l, c, p, d, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    o.isRequired = o;
    function i() {
      return o;
    }
    var a = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, xi;
}
if (process.env.NODE_ENV !== "production") {
  var fp = pa(), mp = !0;
  Ai.exports = pp()(fp.isElement, mp);
} else
  Ai.exports = dp()();
var gp = Ai.exports;
const r = /* @__PURE__ */ $l(gp);
function Al(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Al(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function ne() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Al(e)) && (o && (o += " "), o += t);
  return o;
}
function be(e, t, n = void 0) {
  const o = {};
  for (const i in e) {
    const a = e[i];
    let s = "", l = !0;
    for (let c = 0; c < a.length; c += 1) {
      const p = a[c];
      p && (s += (l === !0 ? "" : " ") + t(p), l = !1, n && n[p] && (s += " " + n[p]));
    }
    o[i] = s;
  }
  return o;
}
function Kt(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const hp = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (r.node, r.bool);
const ar = () => b.useContext(hp) ?? !1;
function nt(...e) {
  const t = b.useRef(void 0), n = b.useCallback((o) => {
    const i = e.map((a) => {
      if (a == null)
        return null;
      if (typeof a == "function") {
        const s = a, l = s(o);
        return typeof l == "function" ? l : () => {
          s(null);
        };
      }
      return a.current = o, () => {
        a.current = null;
      };
    });
    return () => {
      i.forEach((a) => a == null ? void 0 : a());
    };
  }, e);
  return b.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = n(o));
  }, e);
}
function yp(e) {
  return typeof e == "string";
}
function Dl(e, t, n) {
  return e === void 0 || yp(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Oo(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function as(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function _l(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const y = ne(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, o == null ? void 0 : o.className), g = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...o == null ? void 0 : o.style
    }, u = {
      ...n,
      ...i,
      ...o
    };
    return y.length > 0 && (u.className = y), Object.keys(g).length > 0 && (u.style = g), {
      props: u,
      internalRef: void 0
    };
  }
  const s = Oo({
    ...i,
    ...o
  }), l = as(o), c = as(i), p = t(s), d = ne(p == null ? void 0 : p.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, o == null ? void 0 : o.className), f = {
    ...p == null ? void 0 : p.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...o == null ? void 0 : o.style
  }, h = {
    ...p,
    ...n,
    ...c,
    ...l
  };
  return d.length > 0 && (h.className = d), Object.keys(f).length > 0 && (h.style = f), {
    props: h,
    internalRef: p.ref
  };
}
function Bl(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Jn(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : Bl(n, o), {
    props: l,
    internalRef: c
  } = _l({
    ...a,
    externalSlotProps: s
  }), p = nt(c, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return Dl(t, {
    ...l,
    ref: p
  }, o);
}
function at(e) {
  return e && e.ownerDocument || document;
}
function hn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function H(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : hn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Di = { exports: {} }, je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss;
function bp() {
  if (ss) return je;
  ss = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function g(u) {
    if (typeof u == "object" && u !== null) {
      var v = u.$$typeof;
      switch (v) {
        case e:
          switch (u = u.type, u) {
            case n:
            case i:
            case o:
            case c:
            case p:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case l:
                case f:
                case d:
                  return u;
                case a:
                  return u;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return je.ContextConsumer = a, je.ContextProvider = s, je.Element = e, je.ForwardRef = l, je.Fragment = n, je.Lazy = f, je.Memo = d, je.Portal = t, je.Profiler = i, je.StrictMode = o, je.Suspense = c, je.SuspenseList = p, je.isContextConsumer = function(u) {
    return g(u) === a;
  }, je.isContextProvider = function(u) {
    return g(u) === s;
  }, je.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, je.isForwardRef = function(u) {
    return g(u) === l;
  }, je.isFragment = function(u) {
    return g(u) === n;
  }, je.isLazy = function(u) {
    return g(u) === f;
  }, je.isMemo = function(u) {
    return g(u) === d;
  }, je.isPortal = function(u) {
    return g(u) === t;
  }, je.isProfiler = function(u) {
    return g(u) === i;
  }, je.isStrictMode = function(u) {
    return g(u) === o;
  }, je.isSuspense = function(u) {
    return g(u) === c;
  }, je.isSuspenseList = function(u) {
    return g(u) === p;
  }, je.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === c || u === p || typeof u == "object" && u !== null && (u.$$typeof === f || u.$$typeof === d || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === y || u.getModuleId !== void 0);
  }, je.typeOf = g, je;
}
var Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function vp() {
  return ls || (ls = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var v = u.$$typeof;
        switch (v) {
          case t:
            switch (u = u.type, u) {
              case o:
              case a:
              case i:
              case p:
              case d:
              case y:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case h:
                  case f:
                    return u;
                  case s:
                    return u;
                  default:
                    return v;
                }
            }
          case n:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Ne.ContextConsumer = s, Ne.ContextProvider = l, Ne.Element = t, Ne.ForwardRef = c, Ne.Fragment = o, Ne.Lazy = h, Ne.Memo = f, Ne.Portal = n, Ne.Profiler = a, Ne.StrictMode = i, Ne.Suspense = p, Ne.SuspenseList = d, Ne.isContextConsumer = function(u) {
      return e(u) === s;
    }, Ne.isContextProvider = function(u) {
      return e(u) === l;
    }, Ne.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Ne.isForwardRef = function(u) {
      return e(u) === c;
    }, Ne.isFragment = function(u) {
      return e(u) === o;
    }, Ne.isLazy = function(u) {
      return e(u) === h;
    }, Ne.isMemo = function(u) {
      return e(u) === f;
    }, Ne.isPortal = function(u) {
      return e(u) === n;
    }, Ne.isProfiler = function(u) {
      return e(u) === a;
    }, Ne.isStrictMode = function(u) {
      return e(u) === i;
    }, Ne.isSuspense = function(u) {
      return e(u) === p;
    }, Ne.isSuspenseList = function(u) {
      return e(u) === d;
    }, Ne.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === o || u === a || u === i || u === p || u === d || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === f || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === g || u.getModuleId !== void 0);
    }, Ne.typeOf = e;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? Di.exports = bp() : Di.exports = vp();
var Ro = Di.exports;
function Ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ll(e) {
  if (/* @__PURE__ */ b.isValidElement(e) || Ro.isValidElementType(e) || !Ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ll(e[n]);
  }), t;
}
function yt(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return Ht(e) && Ht(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ b.isValidElement(t[i]) || Ro.isValidElementType(t[i]) ? o[i] = t[i] : Ht(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Ht(e[i]) ? o[i] = yt(e[i], t[i], n) : n.clone ? o[i] = Ht(t[i]) ? Ll(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
function Pr(e, t) {
  return t ? yt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const bn = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {};
function cs(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    var s, l;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((s = o.match(a)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(a)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((o, i) => {
    const a = t[i];
    return delete o[i], o[i] = a, o;
  }, {
    ...t
  }) : t;
}
function xp(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Tp(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : hn(18, `(${t})`));
    return null;
  }
  const [, o, i] = n, a = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(a);
}
function Ep(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function n(a, s) {
    a.up = (...l) => t(e.breakpoints.up(...l), s), a.down = (...l) => t(e.breakpoints.down(...l), s), a.between = (...l) => t(e.breakpoints.between(...l), s), a.only = (...l) => t(e.breakpoints.only(...l), s), a.not = (...l) => {
      const c = t(e.breakpoints.not(...l), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, i = (a) => (n(o, a), o);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const Uo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, us = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Uo[e]}px)`
}, Sp = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Uo[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function on(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const a = o.breakpoints || us;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = o.breakpoints || us;
    return Object.keys(t).reduce((s, l) => {
      if (xp(a.keys, l)) {
        const c = Tp(o.containerQueries ? o : Sp, l);
        c && (s[c] = n(t[l], l));
      } else if (Object.keys(a.values || Uo).includes(l)) {
        const c = a.up(l);
        s[c] = n(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function wp(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, i) => {
    const a = e.up(i);
    return o[a] = {}, o;
  }, {})) || {};
}
function ps(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function Ho(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function Po(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = Ho(e, n) || o, t && (i = t(i, o, e)), i;
}
function Xe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, p = Ho(c, o) || {};
    return on(s, l, (f) => {
      let h = Po(p, i, f);
      return f === h && typeof f == "string" && (h = Po(p, i, `${t}${f === "default" ? "" : H(f)}`, f)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: bn
  } : {}, a.filterProps = [t], a;
}
function Cp(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Op = {
  m: "margin",
  p: "padding"
}, Rp = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ds = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Pp = Cp((e) => {
  if (e.length > 2)
    if (ds[e])
      e = ds[e];
    else
      return [e];
  const [t, n] = e.split(""), o = Op[t], i = Rp[n] || "";
  return Array.isArray(i) ? i.map((a) => o + a) : [o + i];
}), Go = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Yo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], kp = [...Go, ...Yo];
function Hr(e, t, n, o) {
  const i = Ho(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${a}.`), typeof i == "string" ? i.startsWith("var(") && a === 0 ? 0 : i.startsWith("var(") && a === 1 ? i : `calc(${a} * ${i})` : i * a) : Array.isArray(i) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[s];
    return a >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function fa(e) {
  return Hr(e, "spacing", 8, "spacing");
}
function Gr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function $p(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = Gr(t, n), o), {});
}
function Mp(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const i = Pp(n), a = $p(i, o), s = e[n];
  return on(e, s, a);
}
function zl(e, t) {
  const n = fa(e.theme);
  return Object.keys(e).map((o) => Mp(e, t, o, n)).reduce(Pr, {});
}
function He(e) {
  return zl(e, Go);
}
He.propTypes = process.env.NODE_ENV !== "production" ? Go.reduce((e, t) => (e[t] = bn, e), {}) : {};
He.filterProps = Go;
function Ge(e) {
  return zl(e, Yo);
}
Ge.propTypes = process.env.NODE_ENV !== "production" ? Yo.reduce((e, t) => (e[t] = bn, e), {}) : {};
Ge.filterProps = Yo;
process.env.NODE_ENV !== "production" && kp.reduce((e, t) => (e[t] = bn, e), {});
function qo(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((a) => {
    o[a] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, a) => t[a] ? Pr(i, t[a](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function Ct(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function kt(e, t) {
  return Xe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ip = kt("border", Ct), jp = kt("borderTop", Ct), Np = kt("borderRight", Ct), Ap = kt("borderBottom", Ct), Dp = kt("borderLeft", Ct), _p = kt("borderColor"), Bp = kt("borderTopColor"), Lp = kt("borderRightColor"), zp = kt("borderBottomColor"), Fp = kt("borderLeftColor"), Wp = kt("outline", Ct), Vp = kt("outlineColor"), Ko = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hr(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: Gr(t, o)
    });
    return on(e, e.borderRadius, n);
  }
  return null;
};
Ko.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: bn
} : {};
Ko.filterProps = ["borderRadius"];
qo(Ip, jp, Np, Ap, Dp, _p, Bp, Lp, zp, Fp, Ko, Wp, Vp);
const Xo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hr(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: Gr(t, o)
    });
    return on(e, e.gap, n);
  }
  return null;
};
Xo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: bn
} : {};
Xo.filterProps = ["gap"];
const Jo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hr(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: Gr(t, o)
    });
    return on(e, e.columnGap, n);
  }
  return null;
};
Jo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: bn
} : {};
Jo.filterProps = ["columnGap"];
const Qo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hr(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: Gr(t, o)
    });
    return on(e, e.rowGap, n);
  }
  return null;
};
Qo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: bn
} : {};
Qo.filterProps = ["rowGap"];
const Up = Xe({
  prop: "gridColumn"
}), Hp = Xe({
  prop: "gridRow"
}), Gp = Xe({
  prop: "gridAutoFlow"
}), Yp = Xe({
  prop: "gridAutoColumns"
}), qp = Xe({
  prop: "gridAutoRows"
}), Kp = Xe({
  prop: "gridTemplateColumns"
}), Xp = Xe({
  prop: "gridTemplateRows"
}), Jp = Xe({
  prop: "gridTemplateAreas"
}), Qp = Xe({
  prop: "gridArea"
});
qo(Xo, Jo, Qo, Up, Hp, Gp, Yp, qp, Kp, Xp, Jp, Qp);
function qn(e, t) {
  return t === "grey" ? t : e;
}
const Zp = Xe({
  prop: "color",
  themeKey: "palette",
  transform: qn
}), ed = Xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qn
}), td = Xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qn
});
qo(Zp, ed, td);
function ht(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const nd = Xe({
  prop: "width",
  transform: ht
}), ma = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const o = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || Uo[n];
      return o ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: ht(n)
      };
    };
    return on(e, e.maxWidth, t);
  }
  return null;
};
ma.filterProps = ["maxWidth"];
const rd = Xe({
  prop: "minWidth",
  transform: ht
}), od = Xe({
  prop: "height",
  transform: ht
}), id = Xe({
  prop: "maxHeight",
  transform: ht
}), ad = Xe({
  prop: "minHeight",
  transform: ht
});
Xe({
  prop: "size",
  cssProperty: "width",
  transform: ht
});
Xe({
  prop: "size",
  cssProperty: "height",
  transform: ht
});
const sd = Xe({
  prop: "boxSizing"
});
qo(nd, ma, rd, od, id, ad, sd);
const Yr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ct
  },
  borderTop: {
    themeKey: "borders",
    transform: Ct
  },
  borderRight: {
    themeKey: "borders",
    transform: Ct
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ct
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ct
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ct
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ko
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qn
  },
  // spacing
  p: {
    style: Ge
  },
  pt: {
    style: Ge
  },
  pr: {
    style: Ge
  },
  pb: {
    style: Ge
  },
  pl: {
    style: Ge
  },
  px: {
    style: Ge
  },
  py: {
    style: Ge
  },
  padding: {
    style: Ge
  },
  paddingTop: {
    style: Ge
  },
  paddingRight: {
    style: Ge
  },
  paddingBottom: {
    style: Ge
  },
  paddingLeft: {
    style: Ge
  },
  paddingX: {
    style: Ge
  },
  paddingY: {
    style: Ge
  },
  paddingInline: {
    style: Ge
  },
  paddingInlineStart: {
    style: Ge
  },
  paddingInlineEnd: {
    style: Ge
  },
  paddingBlock: {
    style: Ge
  },
  paddingBlockStart: {
    style: Ge
  },
  paddingBlockEnd: {
    style: Ge
  },
  m: {
    style: He
  },
  mt: {
    style: He
  },
  mr: {
    style: He
  },
  mb: {
    style: He
  },
  ml: {
    style: He
  },
  mx: {
    style: He
  },
  my: {
    style: He
  },
  margin: {
    style: He
  },
  marginTop: {
    style: He
  },
  marginRight: {
    style: He
  },
  marginBottom: {
    style: He
  },
  marginLeft: {
    style: He
  },
  marginX: {
    style: He
  },
  marginY: {
    style: He
  },
  marginInline: {
    style: He
  },
  marginInlineStart: {
    style: He
  },
  marginInlineEnd: {
    style: He
  },
  marginBlock: {
    style: He
  },
  marginBlockStart: {
    style: He
  },
  marginBlockEnd: {
    style: He
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Xo
  },
  rowGap: {
    style: Qo
  },
  columnGap: {
    style: Jo
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ht
  },
  maxWidth: {
    style: ma
  },
  minWidth: {
    transform: ht
  },
  height: {
    transform: ht
  },
  maxHeight: {
    transform: ht
  },
  minHeight: {
    transform: ht
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ld(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function cd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ud() {
  function e(n, o, i, a) {
    const s = {
      [n]: o,
      theme: i
    }, l = a[n];
    if (!l)
      return {
        [n]: o
      };
    const {
      cssProperty: c = n,
      themeKey: p,
      transform: d,
      style: f
    } = l;
    if (o == null)
      return null;
    if (p === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const h = Ho(i, p) || {};
    return f ? f(s) : on(s, o, (g) => {
      let u = Po(h, d, g);
      return g === u && typeof g == "string" && (u = Po(h, d, `${n}${g === "default" ? "" : H(g)}`, g)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function t(n) {
    const {
      sx: o,
      theme: i = {},
      nested: a
    } = n || {};
    if (!o)
      return null;
    const s = i.unstable_sxConfig ?? Yr;
    function l(c) {
      let p = c;
      if (typeof c == "function")
        p = c(i);
      else if (typeof c != "object")
        return c;
      if (!p)
        return null;
      const d = wp(i.breakpoints), f = Object.keys(d);
      let h = d;
      return Object.keys(p).forEach((y) => {
        const g = cd(p[y], i);
        if (g != null)
          if (typeof g == "object")
            if (s[y])
              h = Pr(h, e(y, g, i, s));
            else {
              const u = on({
                theme: i
              }, g, (v) => ({
                [y]: v
              }));
              ld(u, g) ? h[y] = t({
                sx: g,
                theme: i,
                nested: !0
              }) : h = Pr(h, u);
            }
          else
            h = Pr(h, e(y, g, i, s));
      }), !a && i.modularCssLayers ? {
        "@layer sx": cs(i, ps(f, h))
      } : cs(i, ps(f, h));
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Nn = ud();
Nn.filterProps = ["sx"];
const pd = (e) => {
  var o;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((o = e == null ? void 0 : e.theme) == null ? void 0 : o.unstable_sxConfig) ?? Yr;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function ga(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: o,
    otherProps: i
  } = pd(n);
  let a;
  return Array.isArray(t) ? a = [o, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return Ht(l) ? {
      ...o,
      ...l
    } : o;
  } : a = {
    ...o,
    ...t
  }, {
    ...i,
    sx: a
  };
}
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ko.apply(null, arguments);
}
var dd = !1;
function fd(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function md(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var gd = /* @__PURE__ */ function() {
  function e(n) {
    var o = this;
    this._insertTag = function(i) {
      var a;
      o.tags.length === 0 ? o.insertionPoint ? a = o.insertionPoint.nextSibling : o.prepend ? a = o.container.firstChild : a = o.before : a = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(i, a), o.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !dd : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(md(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = fd(i);
      try {
        a.insertRule(o, a.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(o));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(o) {
      var i;
      return (i = o.parentNode) == null ? void 0 : i.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), it = "-ms-", $o = "-moz-", we = "-webkit-", Fl = "comm", ha = "rule", ya = "decl", hd = "@import", Wl = "@keyframes", yd = "@layer", bd = Math.abs, Zo = String.fromCharCode, vd = Object.assign;
function xd(e, t) {
  return tt(e, 0) ^ 45 ? (((t << 2 ^ tt(e, 0)) << 2 ^ tt(e, 1)) << 2 ^ tt(e, 2)) << 2 ^ tt(e, 3) : 0;
}
function Vl(e) {
  return e.trim();
}
function Td(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ce(e, t, n) {
  return e.replace(t, n);
}
function _i(e, t) {
  return e.indexOf(t);
}
function tt(e, t) {
  return e.charCodeAt(t) | 0;
}
function jr(e, t, n) {
  return e.slice(t, n);
}
function Vt(e) {
  return e.length;
}
function ba(e) {
  return e.length;
}
function io(e, t) {
  return t.push(e), e;
}
function Ed(e, t) {
  return e.map(t).join("");
}
var ei = 1, Qn = 1, Ul = 0, gt = 0, Qe = 0, sr = "";
function ti(e, t, n, o, i, a, s) {
  return { value: e, root: t, parent: n, type: o, props: i, children: a, line: ei, column: Qn, length: s, return: "" };
}
function hr(e, t) {
  return vd(ti("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Sd() {
  return Qe;
}
function wd() {
  return Qe = gt > 0 ? tt(sr, --gt) : 0, Qn--, Qe === 10 && (Qn = 1, ei--), Qe;
}
function bt() {
  return Qe = gt < Ul ? tt(sr, gt++) : 0, Qn++, Qe === 10 && (Qn = 1, ei++), Qe;
}
function Yt() {
  return tt(sr, gt);
}
function vo() {
  return gt;
}
function qr(e, t) {
  return jr(sr, e, t);
}
function Nr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Hl(e) {
  return ei = Qn = 1, Ul = Vt(sr = e), gt = 0, [];
}
function Gl(e) {
  return sr = "", e;
}
function xo(e) {
  return Vl(qr(gt - 1, Bi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Cd(e) {
  for (; (Qe = Yt()) && Qe < 33; )
    bt();
  return Nr(e) > 2 || Nr(Qe) > 3 ? "" : " ";
}
function Od(e, t) {
  for (; --t && bt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return qr(e, vo() + (t < 6 && Yt() == 32 && bt() == 32));
}
function Bi(e) {
  for (; bt(); )
    switch (Qe) {
      case e:
        return gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bi(Qe);
        break;
      case 40:
        e === 41 && Bi(e);
        break;
      case 92:
        bt();
        break;
    }
  return gt;
}
function Rd(e, t) {
  for (; bt() && e + Qe !== 57; )
    if (e + Qe === 84 && Yt() === 47)
      break;
  return "/*" + qr(t, gt - 1) + "*" + Zo(e === 47 ? e : bt());
}
function Pd(e) {
  for (; !Nr(Yt()); )
    bt();
  return qr(e, gt);
}
function kd(e) {
  return Gl(To("", null, null, null, [""], e = Hl(e), 0, [0], e));
}
function To(e, t, n, o, i, a, s, l, c) {
  for (var p = 0, d = 0, f = s, h = 0, y = 0, g = 0, u = 1, v = 1, T = 1, O = 0, w = "", E = i, S = a, k = o, R = w; v; )
    switch (g = O, O = bt()) {
      case 40:
        if (g != 108 && tt(R, f - 1) == 58) {
          _i(R += Ce(xo(O), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += xo(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Cd(g);
        break;
      case 92:
        R += Od(vo() - 1, 7);
        continue;
      case 47:
        switch (Yt()) {
          case 42:
          case 47:
            io($d(Rd(bt(), vo()), t, n), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * u:
        l[p++] = Vt(R) * T;
      case 125 * u:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            T == -1 && (R = Ce(R, /\f/g, "")), y > 0 && Vt(R) - f && io(y > 32 ? ms(R + ";", o, n, f - 1) : ms(Ce(R, " ", "") + ";", o, n, f - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (io(k = fs(R, t, n, p, d, i, l, w, E = [], S = [], f), a), O === 123)
              if (d === 0)
                To(R, t, k, k, E, a, f, l, S);
              else
                switch (h === 99 && tt(R, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    To(e, k, k, o && io(fs(e, k, k, 0, 0, i, l, w, i, E = [], f), S), i, S, f, l, o ? E : S);
                    break;
                  default:
                    To(R, k, k, k, [""], S, 0, l, S);
                }
        }
        p = d = y = 0, u = T = 1, w = R = "", f = s;
        break;
      case 58:
        f = 1 + Vt(R), y = g;
      default:
        if (u < 1) {
          if (O == 123)
            --u;
          else if (O == 125 && u++ == 0 && wd() == 125)
            continue;
        }
        switch (R += Zo(O), O * u) {
          case 38:
            T = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[p++] = (Vt(R) - 1) * T, T = 1;
            break;
          case 64:
            Yt() === 45 && (R += xo(bt())), h = Yt(), d = f = Vt(w = R += Pd(vo())), O++;
            break;
          case 45:
            g === 45 && Vt(R) == 2 && (u = 0);
        }
    }
  return a;
}
function fs(e, t, n, o, i, a, s, l, c, p, d) {
  for (var f = i - 1, h = i === 0 ? a : [""], y = ba(h), g = 0, u = 0, v = 0; g < o; ++g)
    for (var T = 0, O = jr(e, f + 1, f = bd(u = s[g])), w = e; T < y; ++T)
      (w = Vl(u > 0 ? h[T] + " " + O : Ce(O, /&\f/g, h[T]))) && (c[v++] = w);
  return ti(e, t, n, i === 0 ? ha : l, c, p, d);
}
function $d(e, t, n) {
  return ti(e, t, n, Fl, Zo(Sd()), jr(e, 2, -2), 0);
}
function ms(e, t, n, o) {
  return ti(e, t, n, ya, jr(e, 0, o), jr(e, o + 1, -1), o);
}
function Kn(e, t) {
  for (var n = "", o = ba(e), i = 0; i < o; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Md(e, t, n, o) {
  switch (e.type) {
    case yd:
      if (e.children.length) break;
    case hd:
    case ya:
      return e.return = e.return || e.value;
    case Fl:
      return "";
    case Wl:
      return e.return = e.value + "{" + Kn(e.children, o) + "}";
    case ha:
      e.value = e.props.join(",");
  }
  return Vt(n = Kn(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Id(e) {
  var t = ba(e);
  return function(n, o, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, o, i, a) || "";
    return s;
  };
}
function jd(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Nd = function(t, n, o) {
  for (var i = 0, a = 0; i = a, a = Yt(), i === 38 && a === 12 && (n[o] = 1), !Nr(a); )
    bt();
  return qr(t, gt);
}, Ad = function(t, n) {
  var o = -1, i = 44;
  do
    switch (Nr(i)) {
      case 0:
        i === 38 && Yt() === 12 && (n[o] = 1), t[o] += Nd(gt - 1, n, o);
        break;
      case 2:
        t[o] += xo(i);
        break;
      case 4:
        if (i === 44) {
          t[++o] = Yt() === 58 ? "&\f" : "", n[o] = t[o].length;
          break;
        }
      default:
        t[o] += Zo(i);
    }
  while (i = bt());
  return t;
}, Dd = function(t, n) {
  return Gl(Ad(Hl(t), n));
}, gs = /* @__PURE__ */ new WeakMap(), _d = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, o = t.parent, i = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !gs.get(o)) && !i) {
      gs.set(t, !0);
      for (var a = [], s = Dd(n, a), l = o.props, c = 0, p = 0; c < s.length; c++)
        for (var d = 0; d < l.length; d++, p++)
          t.props[p] = a[c] ? s[c].replace(/&\f/g, l[d]) : l[d] + " " + s[c];
    }
  }
}, Bd = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ql(e, t) {
  switch (xd(e, t)) {
    case 5103:
      return we + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return we + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + e + $o + e + it + e + e;
    case 6828:
    case 4268:
      return we + e + it + e + e;
    case 6165:
      return we + e + it + "flex-" + e + e;
    case 5187:
      return we + e + Ce(e, /(\w+).+(:[^]+)/, we + "box-$1$2" + it + "flex-$1$2") + e;
    case 5443:
      return we + e + it + "flex-item-" + Ce(e, /flex-|-self/, "") + e;
    case 4675:
      return we + e + it + "flex-line-pack" + Ce(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return we + e + it + Ce(e, "shrink", "negative") + e;
    case 5292:
      return we + e + it + Ce(e, "basis", "preferred-size") + e;
    case 6060:
      return we + "box-" + Ce(e, "-grow", "") + we + e + it + Ce(e, "grow", "positive") + e;
    case 4554:
      return we + Ce(e, /([^-])(transform)/g, "$1" + we + "$2") + e;
    case 6187:
      return Ce(Ce(Ce(e, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ce(e, /(image-set\([^]*)/, we + "$1$`$1");
    case 4968:
      return Ce(Ce(e, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + it + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + we + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ce(e, /(.+)-inline(.+)/, we + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Vt(e) - 1 - t > 6) switch (tt(e, t + 1)) {
        case 109:
          if (tt(e, t + 4) !== 45) break;
        case 102:
          return Ce(e, /(.+:)(.+)-([^]+)/, "$1" + we + "$2-$3$1" + $o + (tt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~_i(e, "stretch") ? ql(Ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (tt(e, t + 1) !== 115) break;
    case 6444:
      switch (tt(e, Vt(e) - 3 - (~_i(e, "!important") && 10))) {
        case 107:
          return Ce(e, ":", ":" + we) + e;
        case 101:
          return Ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + we + (tt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + we + "$2$3$1" + it + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (tt(e, t + 11)) {
        case 114:
          return we + e + it + Ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return we + e + it + Ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return we + e + it + Ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return we + e + it + e + e;
  }
  return e;
}
var Ld = function(t, n, o, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ya:
      t.return = ql(t.value, t.length);
      break;
    case Wl:
      return Kn([hr(t, {
        value: Ce(t.value, "@", "@" + we)
      })], i);
    case ha:
      if (t.length) return Ed(t.props, function(a) {
        switch (Td(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Kn([hr(t, {
              props: [Ce(a, /:(read-\w+)/, ":" + $o + "$1")]
            })], i);
          case "::placeholder":
            return Kn([hr(t, {
              props: [Ce(a, /:(plac\w+)/, ":" + we + "input-$1")]
            }), hr(t, {
              props: [Ce(a, /:(plac\w+)/, ":" + $o + "$1")]
            }), hr(t, {
              props: [Ce(a, /:(plac\w+)/, it + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, zd = [Ld], Fd = function(t) {
  var n = t.key;
  if (n === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(u) {
      var v = u.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || zd, a = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(u) {
      for (var v = u.getAttribute("data-emotion").split(" "), T = 1; T < v.length; T++)
        a[v[T]] = !0;
      l.push(u);
    }
  );
  var c, p = [_d, Bd];
  {
    var d, f = [Md, jd(function(u) {
      d.insert(u);
    })], h = Id(p.concat(i, f)), y = function(v) {
      return Kn(kd(v), h);
    };
    c = function(v, T, O, w) {
      d = O, y(v ? v + "{" + T.styles + "}" : T.styles), w && (g.inserted[T.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new gd({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return g.sheet.hydrate(l), g;
}, Kl = pa(), Wd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Vd = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xl = {};
Xl[Kl.ForwardRef] = Wd;
Xl[Kl.Memo] = Vd;
var Ud = !0;
function Jl(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (o += i + " ");
  }), o;
}
var va = function(t, n, o) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ud === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, xa = function(t, n, o) {
  va(t, n, o);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Hd(e) {
  for (var t = 0, n, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Gd = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Yd = !1, qd = /[A-Z]|^ms/g, Kd = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ql = function(t) {
  return t.charCodeAt(1) === 45;
}, hs = function(t) {
  return t != null && typeof t != "boolean";
}, Ti = /* @__PURE__ */ Yl(function(e) {
  return Ql(e) ? e : e.replace(qd, "-$&").toLowerCase();
}), ys = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Kd, function(o, i, a) {
          return Ut = {
            name: i,
            styles: a,
            next: Ut
          }, i;
        });
  }
  return Gd[t] !== 1 && !Ql(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Xd = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ar(e, t, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return Ut = {
          name: i.name,
          styles: i.styles,
          next: Ut
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ut = {
              name: s.name,
              styles: s.styles,
              next: Ut
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return Jd(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ut, p = n(e);
        return Ut = c, Ar(e, t, p);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function Jd(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      o += Ar(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? o += a + "{" + t[l] + "}" : hs(l) && (o += Ti(a) + ":" + ys(a, l) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && Yd)
          throw new Error(Xd);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            hs(s[c]) && (o += Ti(a) + ":" + ys(a, s[c]) + ";");
        else {
          var p = Ar(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              o += Ti(a) + ":" + p + ";";
              break;
            }
            default:
              o += a + "{" + p + "}";
          }
        }
      }
    }
  return o;
}
var bs = /label:\s*([^\s;{]+)\s*(;|$)/g, Ut;
function Kr(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  Ut = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    o = !1, i += Ar(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Ar(n, t, e[l]), o) {
      var c = a;
      i += c[l];
    }
  bs.lastIndex = 0;
  for (var p = "", d; (d = bs.exec(i)) !== null; )
    p += "-" + d[1];
  var f = Hd(i) + p;
  return {
    name: f,
    styles: i,
    next: Ut
  };
}
var Qd = function(t) {
  return t();
}, Zl = b.useInsertionEffect ? b.useInsertionEffect : !1, ec = Zl || Qd, vs = Zl || b.useLayoutEffect, Zd = !1, tc = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Fd({
    key: "css"
  }) : null
);
tc.Provider;
var Ta = function(t) {
  return /* @__PURE__ */ kl(function(n, o) {
    var i = Vo(tc);
    return t(n, i, o);
  });
}, ni = /* @__PURE__ */ b.createContext({}), Ea = {}.hasOwnProperty, Li = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ef = function(t, n) {
  var o = {};
  for (var i in n)
    Ea.call(n, i) && (o[i] = n[i]);
  return o[Li] = t, o;
}, tf = function(t) {
  var n = t.cache, o = t.serialized, i = t.isStringTag;
  return va(n, o, i), ec(function() {
    return xa(n, o, i);
  }), null;
}, nf = /* @__PURE__ */ Ta(function(e, t, n) {
  var o = e.css;
  typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
  var i = e[Li], a = [o], s = "";
  typeof e.className == "string" ? s = Jl(t.registered, a, e.className) : e.className != null && (s = e.className + " ");
  var l = Kr(a, void 0, b.useContext(ni));
  s += t.key + "-" + l.name;
  var c = {};
  for (var p in e)
    Ea.call(e, p) && p !== "css" && p !== Li && !Zd && (c[p] = e[p]);
  return c.className = s, n && (c.ref = n), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(tf, {
    cache: t,
    serialized: l,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ b.createElement(i, c));
}), rf = nf, xs = function(t, n) {
  var o = arguments;
  if (n == null || !Ea.call(n, "css"))
    return b.createElement.apply(void 0, o);
  var i = o.length, a = new Array(i);
  a[0] = rf, a[1] = ef(t, n);
  for (var s = 2; s < i; s++)
    a[s] = o[s];
  return b.createElement.apply(null, a);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(xs || (xs = {}));
var of = /* @__PURE__ */ Ta(function(e, t) {
  var n = e.styles, o = Kr([n], void 0, b.useContext(ni)), i = b.useRef();
  return vs(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + o.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), vs(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (o.next !== void 0 && xa(t, o.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", o, s, !1);
  }, [t, o.name]), null;
});
function Sa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Kr(t);
}
function Xr() {
  var e = Sa.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var af = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sf = /* @__PURE__ */ Yl(
  function(e) {
    return af.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), lf = !1, cf = sf, uf = function(t) {
  return t !== "theme";
}, Ts = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? cf : uf;
}, Es = function(t, n, o) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && o && (i = t.__emotion_forwardProp), i;
}, pf = function(t) {
  var n = t.cache, o = t.serialized, i = t.isStringTag;
  return va(n, o, i), ec(function() {
    return xa(n, o, i);
  }), null;
}, df = function e(t, n) {
  var o = t.__emotion_real === t, i = o && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = Es(t, n, o), c = l || Ts(i), p = !c("as");
  return function() {
    var d = arguments, f = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && f.push("label:" + a + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      var h = d[0];
      f.push(h[0]);
      for (var y = d.length, g = 1; g < y; g++)
        f.push(d[g], h[g]);
    }
    var u = Ta(function(v, T, O) {
      var w = p && v.as || i, E = "", S = [], k = v;
      if (v.theme == null) {
        k = {};
        for (var R in v)
          k[R] = v[R];
        k.theme = b.useContext(ni);
      }
      typeof v.className == "string" ? E = Jl(T.registered, S, v.className) : v.className != null && (E = v.className + " ");
      var A = Kr(f.concat(S), T.registered, k);
      E += T.key + "-" + A.name, s !== void 0 && (E += " " + s);
      var N = p && l === void 0 ? Ts(w) : c, m = {};
      for (var $ in v)
        p && $ === "as" || N($) && (m[$] = v[$]);
      return m.className = E, O && (m.ref = O), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(pf, {
        cache: T,
        serialized: A,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ b.createElement(w, m));
    });
    return u.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", u.defaultProps = t.defaultProps, u.__emotion_real = u, u.__emotion_base = i, u.__emotion_styles = f, u.__emotion_forwardProp = l, Object.defineProperty(u, "toString", {
      value: function() {
        return s === void 0 && lf ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), u.withComponent = function(v, T) {
      var O = e(v, ko({}, n, T, {
        shouldForwardProp: Es(u, T, !0)
      }));
      return O.apply(void 0, f);
    }, u;
  };
}, ff = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], zi = df.bind(null);
ff.forEach(function(e) {
  zi[e] = zi(e);
});
function mf(e) {
  return e == null || Object.keys(e).length === 0;
}
function nc(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, o = typeof t == "function" ? (i) => t(mf(i) ? n : i) : t;
  return /* @__PURE__ */ x.jsx(of, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (nc.propTypes = {
  defaultTheme: r.object,
  styles: r.oneOfType([r.array, r.string, r.object, r.func])
});
/**
 * @mui/styled-engine v7.2.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function rc(e, t) {
  const n = zi(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function gf(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ss = [];
function gn(e) {
  return Ss[0] = e, Kr(Ss);
}
const hf = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function yf(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: o = 5,
    ...i
  } = e, a = hf(t), s = Object.keys(a);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - o / 100}${n})`;
  }
  function p(h, y) {
    const g = s.indexOf(y);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - o / 100}${n})`;
  }
  function d(h) {
    return s.indexOf(h) + 1 < s.length ? p(h, s[s.indexOf(h) + 1]) : l(h);
  }
  function f(h) {
    const y = s.indexOf(h);
    return y === 0 ? l(s[1]) : y === s.length - 1 ? c(s[y]) : p(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: p,
    only: d,
    not: f,
    unit: n,
    ...i
  };
}
const bf = {
  borderRadius: 4
};
function oc(e = 8, t = fa({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function vf(e, t) {
  var o;
  const n = this;
  if (n.vars) {
    if (!((o = n.colorSchemes) != null && o[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Jr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = yf(n), c = oc(i);
  let p = yt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: c,
    shape: {
      ...bf,
      ...a
    }
  }, s);
  return p = Ep(p), p.applyStyles = vf, p = t.reduce((d, f) => yt(d, f), p), p.unstable_sxConfig = {
    ...Yr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, p.unstable_sx = function(f) {
    return Nn({
      sx: f,
      theme: this
    });
  }, p;
}
function xf(e) {
  return Object.keys(e).length === 0;
}
function ic(e = null) {
  const t = b.useContext(ni);
  return !t || xf(t) ? e : t;
}
const Tf = Jr();
function Qr(e = Tf) {
  return ic(e);
}
function Ei(e) {
  const t = gn(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function ac({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const o = Qr(n), i = t && o[t] || o;
  let a = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => Ei(typeof s == "function" ? s(i) : s)) : a = Ei(a)), /* @__PURE__ */ x.jsx(nc, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: r.object,
  /**
   * @ignore
   */
  styles: r.oneOfType([r.array, r.func, r.number, r.object, r.string, r.bool]),
  /**
   * @ignore
   */
  themeId: r.string
});
const ws = (e) => e, Ef = () => {
  let e = ws;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ws;
    }
  };
}, sc = Ef();
function Sf(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: i
  } = e, a = rc("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Nn);
  return /* @__PURE__ */ b.forwardRef(function(c, p) {
    const d = Qr(n), {
      className: f,
      component: h = "div",
      ...y
    } = ga(c);
    return /* @__PURE__ */ x.jsx(a, {
      as: h,
      ref: p,
      className: ne(f, i ? i(o) : o),
      theme: t && d[t] || d,
      ...y
    });
  });
}
const wf = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function fe(e, t, n = "Mui") {
  const o = wf[t];
  return o ? `${n}-${o}` : `${sc.generate(e)}-${t}`;
}
function me(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = fe(e, i, n);
  }), o;
}
function lc(e, t = "") {
  return e.displayName || e.name || t;
}
function Cs(e, t, n) {
  const o = lc(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Cf(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return lc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ro.ForwardRef:
          return Cs(e, e.render, "ForwardRef");
        case Ro.Memo:
          return Cs(e, e.type, "memo");
        default:
          return;
      }
  }
}
function cc(e) {
  const {
    variants: t,
    ...n
  } = e, o = {
    variants: t,
    style: gn(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = gn(i.style));
  }), o;
}
const Of = Jr();
function Si(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function $n(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Rf(e) {
  return e ? (t, n) => n[e] : null;
}
function Pf(e, t, n) {
  e.theme = Mf(e.theme) ? n : e.theme[t] || e.theme;
}
function Eo(e, t, n) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((i) => Eo(e, i, n));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let i;
    if (o.isProcessed)
      i = n ? $n(o.style, n) : o.style;
    else {
      const {
        variants: a,
        ...s
      } = o;
      i = n ? $n(gn(s), n) : s;
    }
    return uc(e, o.variants, [i], n);
  }
  return o != null && o.isProcessed ? n ? $n(gn(o.style), n) : o.style : n ? $n(gn(o), n) : o;
}
function uc(e, t, n = [], o = void 0) {
  var a;
  let i;
  e: for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    if (typeof l.props == "function") {
      if (i ?? (i = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(i))
        continue;
    } else
      for (const c in l.props)
        if (e[c] !== l.props[c] && ((a = e.ownerState) == null ? void 0 : a[c]) !== l.props[c])
          continue e;
    typeof l.style == "function" ? (i ?? (i = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(o ? $n(gn(l.style(i)), o) : l.style(i))) : n.push(o ? $n(gn(l.style), o) : l.style);
  }
  return n;
}
function pc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Of,
    rootShouldForwardProp: o = Si,
    slotShouldForwardProp: i = Si
  } = e;
  function a(l) {
    Pf(l, t, n);
  }
  return (l, c = {}) => {
    gf(l, (k) => k.filter((R) => R !== Nn));
    const {
      name: p,
      slot: d,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = Rf(dc(d)),
      ...g
    } = c, u = p && p.startsWith("Mui") || d ? "components" : "custom", v = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), T = h || !1;
    let O = Si;
    d === "Root" || d === "root" ? O = o : d ? O = i : If(l) && (O = void 0);
    const w = rc(l, {
      shouldForwardProp: O,
      label: $f(p, d),
      ...g
    }), E = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(A) {
          return Eo(A, k, A.theme.modularCssLayers ? u : void 0);
        };
      if (Ht(k)) {
        const R = cc(k);
        return function(N) {
          return R.variants ? Eo(N, R, N.theme.modularCssLayers ? u : void 0) : N.theme.modularCssLayers ? $n(R.style, u) : R.style;
        };
      }
      return k;
    }, S = (...k) => {
      const R = [], A = k.map(E), N = [];
      if (R.push(a), p && y && N.push(function(M) {
        var V, U;
        const I = (U = (V = M.theme.components) == null ? void 0 : V[p]) == null ? void 0 : U.styleOverrides;
        if (!I)
          return null;
        const j = {};
        for (const F in I)
          j[F] = Eo(M, I[F], M.theme.modularCssLayers ? "theme" : void 0);
        return y(M, j);
      }), p && !v && N.push(function(M) {
        var j, V;
        const z = M.theme, I = (V = (j = z == null ? void 0 : z.components) == null ? void 0 : j[p]) == null ? void 0 : V.variants;
        return I ? uc(M, I, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), T || N.push(Nn), Array.isArray(A[0])) {
        const _ = A.shift(), M = new Array(R.length).fill(""), z = new Array(N.length).fill("");
        let I;
        I = [...M, ..._, ...z], I.raw = [...M, ..._.raw, ...z], R.unshift(I);
      }
      const m = [...R, ...A, ...N], $ = w(...m);
      return l.muiName && ($.muiName = l.muiName), process.env.NODE_ENV !== "production" && ($.displayName = kf(p, d, l)), $;
    };
    return w.withConfig && (S.withConfig = w.withConfig), S;
  };
}
function kf(e, t, n) {
  return e ? `${e}${H(t || "")}` : `Styled(${Cf(n)})`;
}
function $f(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${dc(t || "Root")}`), n;
}
function Mf(e) {
  for (const t in e)
    return !1;
  return !0;
}
function If(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function dc(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const fc = pc();
function Dr(e, t, n = !1) {
  const o = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const a = i;
      if (a === "components" || a === "slots")
        o[a] = {
          ...e[a],
          ...o[a]
        };
      else if (a === "componentsProps" || a === "slotProps") {
        const s = e[a], l = t[a];
        if (!l)
          o[a] = s || {};
        else if (!s)
          o[a] = l;
        else {
          o[a] = {
            ...l
          };
          for (const c in s)
            if (Object.prototype.hasOwnProperty.call(s, c)) {
              const p = c;
              o[a][p] = Dr(s[p], l[p], n);
            }
        }
      } else a === "className" && n && t.className ? o.className = ne(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : a === "style" && n && t.style ? o.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : o[a] === void 0 && (o[a] = e[a]);
    }
  return o;
}
function mc(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : Dr(t.components[n].defaultProps, o);
}
function wa({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let i = Qr(n);
  return o && (i = i[o] || i), mc({
    theme: i,
    name: t,
    props: e
  });
}
const an = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function jf(e, t, n, o, i) {
  const [a, s] = b.useState(() => i && n ? n(e).matches : o ? o(e).matches : t);
  return an(() => {
    if (!n)
      return;
    const l = n(e), c = () => {
      s(l.matches);
    };
    return c(), l.addEventListener("change", c), () => {
      l.removeEventListener("change", c);
    };
  }, [e, n]), a;
}
const Nf = {
  ...b
}, gc = Nf.useSyncExternalStore;
function Af(e, t, n, o, i) {
  const a = b.useCallback(() => t, [t]), s = b.useMemo(() => {
    if (i && n)
      return () => n(e).matches;
    if (o !== null) {
      const {
        matches: d
      } = o(e);
      return () => d;
    }
    return a;
  }, [a, e, o, i, n]), [l, c] = b.useMemo(() => {
    if (n === null)
      return [a, () => () => {
      }];
    const d = n(e);
    return [() => d.matches, (f) => (d.addEventListener("change", f), () => {
      d.removeEventListener("change", f);
    })];
  }, [a, n, e]);
  return gc(c, l, s);
}
function Df(e = {}) {
  const {
    themeId: t
  } = e;
  return function(o, i = {}) {
    let a = ic();
    a && t && (a = a[t] || a);
    const s = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: l = !1,
      matchMedia: c = s ? window.matchMedia : null,
      ssrMatchMedia: p = null,
      noSsr: d = !1
    } = mc({
      name: "MuiUseMediaQuery",
      props: i,
      theme: a
    });
    process.env.NODE_ENV !== "production" && typeof o == "function" && a === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let f = typeof o == "function" ? o(a) : o;
    f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`));
    const y = (gc !== void 0 ? Af : jf)(f, l, c, p, d);
    return process.env.NODE_ENV !== "production" && b.useDebugValue({
      query: f,
      match: y
    }), y;
  };
}
function _f(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Ca(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), _f(e, t, n);
}
function Bf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function yn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return yn(Bf(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : hn(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : hn(10, i));
  } else
    o = o.split(",");
  return o = o.map((a) => parseFloat(a)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
const Lf = (e) => {
  const t = yn(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, Er = (e, t) => {
  try {
    return Lf(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ri(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function hc(e) {
  e = yn(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, a = o * Math.min(i, 1 - i), s = (p, d = (p + n / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ri({
    type: l,
    values: c
  });
}
function Fi(e) {
  e = yn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? yn(hc(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Os(e, t) {
  const n = Fi(e), o = Fi(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function Be(e, t) {
  return e = yn(e), t = Ca(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ri(e);
}
function ao(e, t, n) {
  try {
    return Be(e, t);
  } catch {
    return e;
  }
}
function _r(e, t) {
  if (e = yn(e), t = Ca(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ri(e);
}
function De(e, t, n) {
  try {
    return _r(e, t);
  } catch {
    return e;
  }
}
function Br(e, t) {
  if (e = yn(e), t = Ca(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ri(e);
}
function _e(e, t, n) {
  try {
    return Br(e, t);
  } catch {
    return e;
  }
}
function Wi(e, t = 0.15) {
  return Fi(e) > 0.5 ? _r(e, t) : Br(e, t);
}
function so(e, t, n) {
  try {
    return Wi(e, t);
  } catch {
    return e;
  }
}
const zf = "exact-prop: ​";
function Oa(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [zf]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Ff = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (r.node, r.object);
function Wf(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const i = t.components[n];
  return i.defaultProps ? Dr(i.defaultProps, o, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Dr(i, o, t.components.mergeClassNameAndStyle) : o;
}
function Vf({
  props: e,
  name: t
}) {
  const n = b.useContext(Ff);
  return Wf({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Rs = 0;
function Uf(e) {
  const [t, n] = b.useState(e), o = e || t;
  return b.useEffect(() => {
    t == null && (Rs += 1, n(`mui-${Rs}`));
  }, [t]), o;
}
const Hf = {
  ...b
}, Ps = Hf.useId;
function oi(e) {
  if (Ps !== void 0) {
    const t = Ps();
    return e ?? t;
  }
  return Uf(e);
}
const ks = {
  theme: void 0
};
function Gf(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (ks.theme = i.theme, a = cc(e(ks)), t = a, n = i.theme), a;
  };
}
function Yf(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const $s = (e, t, n, o = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = o.includes(a) ? [] : {}), i = i[a]);
  });
}, qf = (e, t, n) => {
  function o(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  o(e);
}, Kf = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function wi(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, a = {}, s = {};
  return qf(
    e,
    (l, c, p) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(l, c))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, f = Kf(l, c);
        Object.assign(i, {
          [d]: f
        }), $s(a, l, `var(${d})`, p), $s(s, l, `var(${d}, ${f})`, p);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: a,
    varsWithDefaults: s
  };
}
function Xf(e, t = {}) {
  const {
    getSelector: n = v,
    disableCssColorScheme: o,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: p,
    css: d,
    varsWithDefaults: f
  } = wi(c, t);
  let h = f;
  const y = {}, {
    [l]: g,
    ...u
  } = a;
  if (Object.entries(u || {}).forEach(([w, E]) => {
    const {
      vars: S,
      css: k,
      varsWithDefaults: R
    } = wi(E, t);
    h = yt(h, R), y[w] = {
      css: k,
      vars: S
    };
  }), g) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: S
    } = wi(g, t);
    h = yt(h, S), y[l] = {
      css: w,
      vars: E
    };
  }
  function v(w, E) {
    var k, R;
    let S = i;
    if (i === "class" && (S = ".%s"), i === "data" && (S = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (S = `[${i}="%s"]`), w) {
      if (S === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (k = a[w]) == null ? void 0 : k.palette) == null ? void 0 : R.mode) || w})`]: {
            ":root": E
          }
        };
      if (S)
        return e.defaultColorScheme === w ? `:root, ${S.replace("%s", String(w))}` : S.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let w = {
        ...p
      };
      return Object.entries(y).forEach(([, {
        vars: E
      }]) => {
        w = yt(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      var A, N;
      const w = [], E = e.defaultColorScheme || "light";
      function S(m, $) {
        Object.keys($).length && w.push(typeof m == "string" ? {
          [m]: {
            ...$
          }
        } : m);
      }
      S(n(void 0, {
        ...d
      }), d);
      const {
        [E]: k,
        ...R
      } = y;
      if (k) {
        const {
          css: m
        } = k, $ = (N = (A = a[E]) == null ? void 0 : A.palette) == null ? void 0 : N.mode, _ = !o && $ ? {
          colorScheme: $,
          ...m
        } : {
          ...m
        };
        S(n(E, {
          ..._
        }), _);
      }
      return Object.entries(R).forEach(([m, {
        css: $
      }]) => {
        var z, I;
        const _ = (I = (z = a[m]) == null ? void 0 : z.palette) == null ? void 0 : I.mode, M = !o && _ ? {
          colorScheme: _,
          ...$
        } : {
          ...$
        };
        S(n(m, {
          ...M
        }), M);
      }), w;
    }
  };
}
function Jf(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Qf = Jr(), Zf = fc("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${H(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), em = (e) => wa({
  props: e,
  name: "MuiContainer",
  defaultTheme: Qf
}), tm = (e, t) => {
  const n = (c) => fe(t, c), {
    classes: o,
    fixed: i,
    disableGutters: a,
    maxWidth: s
  } = e, l = {
    root: ["root", s && `maxWidth${H(String(s))}`, i && "fixed", a && "disableGutters"]
  };
  return be(l, n, o);
};
function nm(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Zf,
    useThemeProps: n = em,
    componentName: o = "MuiContainer"
  } = e, i = t(({
    theme: s,
    ownerState: l
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!l.disableGutters && {
      paddingLeft: s.spacing(2),
      paddingRight: s.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [s.breakpoints.up("sm")]: {
        paddingLeft: s.spacing(3),
        paddingRight: s.spacing(3)
      }
    }
  }), ({
    theme: s,
    ownerState: l
  }) => l.fixed && Object.keys(s.breakpoints.values).reduce((c, p) => {
    const d = p, f = s.breakpoints.values[d];
    return f !== 0 && (c[s.breakpoints.up(d)] = {
      maxWidth: `${f}${s.breakpoints.unit}`
    }), c;
  }, {}), ({
    theme: s,
    ownerState: l
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...l.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [s.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(s.breakpoints.values.xs, 444)
      }
    },
    ...l.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    l.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [s.breakpoints.up(l.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${s.breakpoints.values[l.maxWidth]}${s.breakpoints.unit}`
      }
    }
  })), a = /* @__PURE__ */ b.forwardRef(function(l, c) {
    const p = n(l), {
      className: d,
      component: f = "div",
      disableGutters: h = !1,
      fixed: y = !1,
      maxWidth: g = "lg",
      classes: u,
      ...v
    } = p, T = {
      ...p,
      component: f,
      disableGutters: h,
      fixed: y,
      maxWidth: g
    }, O = tm(T, o);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ x.jsx(i, {
        as: f,
        ownerState: T,
        className: ne(O.root, d),
        ref: c,
        ...v
      })
    );
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: r.node,
    classes: r.object,
    className: r.string,
    component: r.elementType,
    disableGutters: r.bool,
    fixed: r.bool,
    maxWidth: r.oneOfType([r.oneOf(["xs", "sm", "md", "lg", "xl", !1]), r.string]),
    sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
  }), a;
}
function rm(e, t) {
  var n, o, i;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (o = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : o.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
const om = (e, t) => e.filter((n) => t.includes(n)), lr = (e, t, n) => {
  const o = e.keys[0];
  Array.isArray(t) ? t.forEach((i, a) => {
    n((s, l) => {
      a <= e.keys.length - 1 && (a === 0 ? Object.assign(s, l) : s[e.up(e.keys[a])] = l);
    }, i);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : om(e.keys, Object.keys(t))).forEach((a) => {
    if (e.keys.includes(a)) {
      const s = t[a];
      s !== void 0 && n((l, c) => {
        o === a ? Object.assign(l, c) : l[e.up(a)] = c;
      }, s);
    }
  }) : (typeof t == "number" || typeof t == "string") && n((i, a) => {
    Object.assign(i, a);
  }, t);
};
function Mo(e) {
  return `--Grid-${e}Spacing`;
}
function ii(e) {
  return `--Grid-parent-${e}Spacing`;
}
const Ms = "--Grid-columns", Xn = "--Grid-parent-columns", im = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return lr(e.breakpoints, t.size, (o, i) => {
    let a = {};
    i === "grow" && (a = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), i === "auto" && (a = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof i == "number" && (a = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${i} / var(${Xn}) - (var(${Xn}) - ${i}) * (var(${ii("column")}) / var(${Xn})))`
    }), o(n, a);
  }), n;
}, am = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return lr(e.breakpoints, t.offset, (o, i) => {
    let a = {};
    i === "auto" && (a = {
      marginLeft: "auto"
    }), typeof i == "number" && (a = {
      marginLeft: i === 0 ? "0px" : `calc(100% * ${i} / var(${Xn}) + var(${ii("column")}) * ${i} / var(${Xn}))`
    }), o(n, a);
  }), n;
}, sm = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {
    [Ms]: 12
  };
  return lr(e.breakpoints, t.columns, (o, i) => {
    const a = i ?? 12;
    o(n, {
      [Ms]: a,
      "> *": {
        [Xn]: a
      }
    });
  }), n;
}, lm = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return lr(e.breakpoints, t.rowSpacing, (o, i) => {
    var s;
    const a = typeof i == "string" ? i : (s = e.spacing) == null ? void 0 : s.call(e, i);
    o(n, {
      [Mo("row")]: a,
      "> *": {
        [ii("row")]: a
      }
    });
  }), n;
}, cm = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return lr(e.breakpoints, t.columnSpacing, (o, i) => {
    var s;
    const a = typeof i == "string" ? i : (s = e.spacing) == null ? void 0 : s.call(e, i);
    o(n, {
      [Mo("column")]: a,
      "> *": {
        [ii("column")]: a
      }
    });
  }), n;
}, um = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return lr(e.breakpoints, t.direction, (o, i) => {
    o(n, {
      flexDirection: i
    });
  }), n;
}, pm = ({
  ownerState: e
}) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...e.container && {
    display: "flex",
    flexWrap: "wrap",
    ...e.wrap && e.wrap !== "wrap" && {
      flexWrap: e.wrap
    },
    gap: `var(${Mo("row")}) var(${Mo("column")})`
  }
}), dm = (e) => {
  const t = [];
  return Object.entries(e).forEach(([n, o]) => {
    o !== !1 && o !== void 0 && t.push(`grid-${n}-${String(o)}`);
  }), t;
}, fm = (e, t = "xs") => {
  function n(o) {
    return o === void 0 ? !1 : typeof o == "string" && !Number.isNaN(Number(o)) || typeof o == "number" && o > 0;
  }
  if (n(e))
    return [`spacing-${t}-${String(e)}`];
  if (typeof e == "object" && !Array.isArray(e)) {
    const o = [];
    return Object.entries(e).forEach(([i, a]) => {
      n(a) && o.push(`spacing-${i}-${String(a)}`);
    }), o;
  }
  return [];
}, mm = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`) : [`direction-xs-${String(e)}`], gm = (e) => ["item", "zeroMinWidth"].includes(e) ? `The \`${e}\` prop has been removed and is no longer necessary. You can safely remove it.` : `The \`${e}\` prop has been removed. See https://mui.com/material-ui/migration/upgrade-to-grid-v2/ for migration instructions.`, Is = [];
function hm(e, t) {
  const n = [];
  e.item !== void 0 && (delete e.item, n.push("item")), e.zeroMinWidth !== void 0 && (delete e.zeroMinWidth, n.push("zeroMinWidth")), t.keys.forEach((o) => {
    e[o] !== void 0 && (n.push(o), delete e[o]);
  }), process.env.NODE_ENV !== "production" && n.forEach((o) => {
    Is.includes(o) || (Is.push(o), console.warn(`MUI Grid: ${gm(o)}
`));
  });
}
const ym = Jr(), bm = fc("div", {
  name: "MuiGrid",
  slot: "Root"
});
function vm(e) {
  return wa({
    props: e,
    name: "MuiGrid",
    defaultTheme: ym
  });
}
function xm(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = bm,
    useThemeProps: n = vm,
    useTheme: o = Qr,
    componentName: i = "MuiGrid"
  } = e, a = (p, d) => {
    const {
      container: f,
      direction: h,
      spacing: y,
      wrap: g,
      size: u
    } = p, v = {
      root: ["root", f && "container", g !== "wrap" && `wrap-xs-${String(g)}`, ...mm(h), ...dm(u), ...f ? fm(y, d.breakpoints.keys[0]) : []]
    };
    return be(v, (T) => fe(i, T), {});
  };
  function s(p, d, f = () => !0) {
    const h = {};
    return p === null || (Array.isArray(p) ? p.forEach((y, g) => {
      y !== null && f(y) && d.keys[g] && (h[d.keys[g]] = y);
    }) : typeof p == "object" ? Object.keys(p).forEach((y) => {
      const g = p[y];
      g != null && f(g) && (h[y] = g);
    }) : h[d.keys[0]] = p), h;
  }
  const l = t(sm, cm, lm, im, um, pm, am), c = /* @__PURE__ */ b.forwardRef(function(d, f) {
    const h = o(), y = n(d), g = ga(y);
    hm(g, h.breakpoints);
    const {
      className: u,
      children: v,
      columns: T = 12,
      container: O = !1,
      component: w = "div",
      direction: E = "row",
      wrap: S = "wrap",
      size: k = {},
      offset: R = {},
      spacing: A = 0,
      rowSpacing: N = A,
      columnSpacing: m = A,
      unstable_level: $ = 0,
      ..._
    } = g, M = s(k, h.breakpoints, (L) => L !== !1), z = s(R, h.breakpoints), I = d.columns ?? ($ ? void 0 : T), j = d.spacing ?? ($ ? void 0 : A), V = d.rowSpacing ?? d.spacing ?? ($ ? void 0 : N), U = d.columnSpacing ?? d.spacing ?? ($ ? void 0 : m), F = {
      ...g,
      level: $,
      columns: I,
      container: O,
      direction: E,
      wrap: S,
      spacing: j,
      rowSpacing: V,
      columnSpacing: U,
      size: M,
      offset: z
    }, P = a(F, h);
    return /* @__PURE__ */ x.jsx(l, {
      ref: f,
      as: w,
      ownerState: F,
      className: ne(P.root, u),
      ..._,
      children: b.Children.map(v, (L) => {
        var K;
        return /* @__PURE__ */ b.isValidElement(L) && rm(L, ["Grid"]) && O && L.props.container ? /* @__PURE__ */ b.cloneElement(L, {
          unstable_level: ((K = L.props) == null ? void 0 : K.unstable_level) ?? $ + 1
        }) : L;
      })
    });
  });
  return process.env.NODE_ENV !== "production" && (c.propTypes = {
    children: r.node,
    className: r.string,
    columns: r.oneOfType([r.arrayOf(r.number), r.number, r.object]),
    columnSpacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
    component: r.elementType,
    container: r.bool,
    direction: r.oneOfType([r.oneOf(["column-reverse", "column", "row-reverse", "row"]), r.arrayOf(r.oneOf(["column-reverse", "column", "row-reverse", "row"])), r.object]),
    offset: r.oneOfType([r.string, r.number, r.arrayOf(r.oneOfType([r.string, r.number])), r.object]),
    rowSpacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
    size: r.oneOfType([r.string, r.bool, r.number, r.arrayOf(r.oneOfType([r.string, r.bool, r.number])), r.object]),
    spacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
    sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
    wrap: r.oneOf(["nowrap", "wrap-reverse", "wrap"])
  }), c.muiName = "Grid", c;
}
const Lr = {
  black: "#000",
  white: "#fff"
}, Tm = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Fn = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Wn = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, yr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Vn = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Un = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Hn = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
function yc() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Lr.white,
      default: Lr.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Em = yc();
function bc() {
  return {
    text: {
      primary: Lr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Lr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const js = bc();
function Ns(e, t, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Br(e.main, i) : t === "dark" && (e.dark = _r(e.main, a)));
}
function Sm(e = "light") {
  return e === "dark" ? {
    main: Vn[200],
    light: Vn[50],
    dark: Vn[400]
  } : {
    main: Vn[700],
    light: Vn[400],
    dark: Vn[800]
  };
}
function wm(e = "light") {
  return e === "dark" ? {
    main: Fn[200],
    light: Fn[50],
    dark: Fn[400]
  } : {
    main: Fn[500],
    light: Fn[300],
    dark: Fn[700]
  };
}
function Cm(e = "light") {
  return e === "dark" ? {
    main: Wn[500],
    light: Wn[300],
    dark: Wn[700]
  } : {
    main: Wn[700],
    light: Wn[400],
    dark: Wn[800]
  };
}
function Om(e = "light") {
  return e === "dark" ? {
    main: Un[400],
    light: Un[300],
    dark: Un[700]
  } : {
    main: Un[700],
    light: Un[500],
    dark: Un[900]
  };
}
function Rm(e = "light") {
  return e === "dark" ? {
    main: Hn[400],
    light: Hn[300],
    dark: Hn[700]
  } : {
    main: Hn[800],
    light: Hn[500],
    dark: Hn[900]
  };
}
function Pm(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: yr[500],
    dark: yr[900]
  };
}
function Ra(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    ...i
  } = e, a = e.primary || Sm(t), s = e.secondary || wm(t), l = e.error || Cm(t), c = e.info || Om(t), p = e.success || Rm(t), d = e.warning || Pm(t);
  function f(u) {
    const v = Os(u, js.text.primary) >= n ? js.text.primary : Em.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Os(u, v);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${v} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const h = ({
    color: u,
    name: v,
    mainShade: T = 500,
    lightShade: O = 300,
    darkShade: w = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[T] && (u.main = u[T]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : hn(11, v ? ` (${v})` : "", T));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : hn(12, v ? ` (${v})` : "", JSON.stringify(u.main)));
    return Ns(u, "light", O, o), Ns(u, "dark", w, o), u.contrastText || (u.contrastText = f(u.main)), u;
  };
  let y;
  return t === "light" ? y = yc() : t === "dark" && (y = bc()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), yt({
    // A collection of common colors.
    common: {
      ...Lr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Tm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...y
  }, i);
}
function km(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, a] = o;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function $m(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Mm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const As = {
  textTransform: "uppercase"
}, Ds = '"Roboto", "Helvetica", "Arial", sans-serif';
function Im(e, t) {
  const {
    fontFamily: n = Ds,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = o / 14, y = d || ((v) => `${v / c * h}rem`), g = (v, T, O, w, E) => ({
    fontFamily: n,
    fontWeight: v,
    fontSize: y(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ds ? {
      letterSpacing: `${Mm(w / T)}em`
    } : {},
    ...E,
    ...p
  }), u = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(a, 48, 1.167, 0),
    h4: g(a, 34, 1.235, 0.25),
    h5: g(a, 24, 1.334, 0),
    h6: g(s, 20, 1.6, 0.15),
    subtitle1: g(a, 16, 1.75, 0.15),
    subtitle2: g(s, 14, 1.57, 0.1),
    body1: g(a, 16, 1.5, 0.15),
    body2: g(a, 14, 1.43, 0.15),
    button: g(s, 14, 1.75, 0.4, As),
    caption: g(a, 12, 1.66, 0.4),
    overline: g(a, 12, 2.66, 1, As),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return yt({
    htmlFontSize: c,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...u
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const jm = 0.2, Nm = 0.14, Am = 0.12;
function Ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${jm})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Nm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Am})`].join(",");
}
const Dm = ["none", Ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _m = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Bm = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function _s(e) {
  return `${Math.round(e)}ms`;
}
function Lm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function zm(e) {
  const t = {
    ..._m,
    ...e.easing
  }, n = {
    ...Bm,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Lm,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...p
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", f = (h) => !Number.isNaN(parseFloat(h));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(p).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(p).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof s == "string" ? s : _s(s)} ${l} ${typeof c == "string" ? c : _s(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Fm = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Wm(e) {
  return Ht(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function vc(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const i = Object.entries(o);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !Wm(l) || s.startsWith("unstable_") ? delete o[s] : Ht(l) && (o[s] = {
        ...l
      }, n(o[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Vi(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: o = {},
    spacing: i,
    palette: a = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : hn(20));
  const d = Ra(a), f = Jr(e);
  let h = yt(f, {
    mixins: $m(f.breakpoints, o),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Dm.slice(),
    typography: Im(d, l),
    transitions: zm(s),
    zIndex: {
      ...Fm
    }
  });
  if (h = yt(h, p), h = t.reduce((y, g) => yt(y, g), h), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (u, v) => {
      let T;
      for (T in u) {
        const O = u[T];
        if (y.includes(T) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = fe("", T);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[T] = {};
        }
      }
    };
    Object.keys(h.components).forEach((u) => {
      const v = h.components[u].styleOverrides;
      v && u.startsWith("Mui") && g(v, u);
    });
  }
  return h.unstable_sxConfig = {
    ...Yr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, h.unstable_sx = function(g) {
    return Nn({
      sx: g,
      theme: this
    });
  }, h.toRuntimeSource = vc, h;
}
function Ui(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Vm = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Ui(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function xc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Tc(e) {
  return e === "dark" ? Vm : [];
}
function Um(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    ...i
  } = e, a = Ra(t);
  return {
    palette: a,
    opacity: {
      ...xc(a.mode),
      ...n
    },
    overlays: o || Tc(a.mode),
    ...i
  };
}
function Hm(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Gm = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ym = (e) => (t, n) => {
  const o = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Gm(e.cssVarPrefix).forEach((l) => {
        s[l] = n[l], delete n[l];
      }), a === "media" ? {
        [o]: n,
        "@media (prefers-color-scheme: dark)": {
          [o]: s
        }
      } : a ? {
        [a.replace("%s", t)]: s,
        [`${o}, ${a.replace("%s", t)}`]: n
      } : {
        [o]: {
          ...n,
          ...s
        }
      };
    }
    if (a && a !== "media")
      return `${o}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [o]: n
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return o;
};
function qm(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function D(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Sr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : hc(e);
}
function nn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Er(Sr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Km(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Wt = (e) => {
  try {
    return e();
  } catch {
  }
}, Xm = (e = "mui") => Yf(e);
function Ci(e, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    e[o] = Um({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: a,
    ...s
  } = Vi({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[o] = {
    ...t,
    palette: a,
    opacity: {
      ...xc(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Tc(i)
  }, s;
}
function Jm(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = Hm,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...p
  } = e, d = Object.keys(n)[0], f = o || (n.light && d !== "light" ? "light" : d), h = Xm(a), {
    [f]: y,
    light: g,
    dark: u,
    ...v
  } = n, T = {
    ...v
  };
  let O = y;
  if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : hn(21, f));
  const w = Ci(T, O, p, f);
  g && !T.light && Ci(T, g, void 0, "light"), u && !T.dark && Ci(T, u, void 0, "dark");
  let E = {
    defaultColorScheme: f,
    ...w,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: T,
    font: {
      ...km(w.typography),
      ...w.font
    },
    spacing: Km(p.spacing)
  };
  Object.keys(E.colorSchemes).forEach((N) => {
    const m = E.colorSchemes[N].palette, $ = (_) => {
      const M = _.split("-"), z = M[1], I = M[2];
      return h(_, m[z][I]);
    };
    if (m.mode === "light" && (D(m.common, "background", "#fff"), D(m.common, "onBackground", "#000")), m.mode === "dark" && (D(m.common, "background", "#000"), D(m.common, "onBackground", "#fff")), qm(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      D(m.Alert, "errorColor", De(m.error.light, 0.6)), D(m.Alert, "infoColor", De(m.info.light, 0.6)), D(m.Alert, "successColor", De(m.success.light, 0.6)), D(m.Alert, "warningColor", De(m.warning.light, 0.6)), D(m.Alert, "errorFilledBg", $("palette-error-main")), D(m.Alert, "infoFilledBg", $("palette-info-main")), D(m.Alert, "successFilledBg", $("palette-success-main")), D(m.Alert, "warningFilledBg", $("palette-warning-main")), D(m.Alert, "errorFilledColor", Wt(() => m.getContrastText(m.error.main))), D(m.Alert, "infoFilledColor", Wt(() => m.getContrastText(m.info.main))), D(m.Alert, "successFilledColor", Wt(() => m.getContrastText(m.success.main))), D(m.Alert, "warningFilledColor", Wt(() => m.getContrastText(m.warning.main))), D(m.Alert, "errorStandardBg", _e(m.error.light, 0.9)), D(m.Alert, "infoStandardBg", _e(m.info.light, 0.9)), D(m.Alert, "successStandardBg", _e(m.success.light, 0.9)), D(m.Alert, "warningStandardBg", _e(m.warning.light, 0.9)), D(m.Alert, "errorIconColor", $("palette-error-main")), D(m.Alert, "infoIconColor", $("palette-info-main")), D(m.Alert, "successIconColor", $("palette-success-main")), D(m.Alert, "warningIconColor", $("palette-warning-main")), D(m.AppBar, "defaultBg", $("palette-grey-100")), D(m.Avatar, "defaultBg", $("palette-grey-400")), D(m.Button, "inheritContainedBg", $("palette-grey-300")), D(m.Button, "inheritContainedHoverBg", $("palette-grey-A100")), D(m.Chip, "defaultBorder", $("palette-grey-400")), D(m.Chip, "defaultAvatarColor", $("palette-grey-700")), D(m.Chip, "defaultIconColor", $("palette-grey-700")), D(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), D(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), D(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), D(m.LinearProgress, "primaryBg", _e(m.primary.main, 0.62)), D(m.LinearProgress, "secondaryBg", _e(m.secondary.main, 0.62)), D(m.LinearProgress, "errorBg", _e(m.error.main, 0.62)), D(m.LinearProgress, "infoBg", _e(m.info.main, 0.62)), D(m.LinearProgress, "successBg", _e(m.success.main, 0.62)), D(m.LinearProgress, "warningBg", _e(m.warning.main, 0.62)), D(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), D(m.Slider, "primaryTrack", _e(m.primary.main, 0.62)), D(m.Slider, "secondaryTrack", _e(m.secondary.main, 0.62)), D(m.Slider, "errorTrack", _e(m.error.main, 0.62)), D(m.Slider, "infoTrack", _e(m.info.main, 0.62)), D(m.Slider, "successTrack", _e(m.success.main, 0.62)), D(m.Slider, "warningTrack", _e(m.warning.main, 0.62));
      const _ = so(m.background.default, 0.8);
      D(m.SnackbarContent, "bg", _), D(m.SnackbarContent, "color", Wt(() => m.getContrastText(_))), D(m.SpeedDialAction, "fabHoverBg", so(m.background.paper, 0.15)), D(m.StepConnector, "border", $("palette-grey-400")), D(m.StepContent, "border", $("palette-grey-400")), D(m.Switch, "defaultColor", $("palette-common-white")), D(m.Switch, "defaultDisabledColor", $("palette-grey-100")), D(m.Switch, "primaryDisabledColor", _e(m.primary.main, 0.62)), D(m.Switch, "secondaryDisabledColor", _e(m.secondary.main, 0.62)), D(m.Switch, "errorDisabledColor", _e(m.error.main, 0.62)), D(m.Switch, "infoDisabledColor", _e(m.info.main, 0.62)), D(m.Switch, "successDisabledColor", _e(m.success.main, 0.62)), D(m.Switch, "warningDisabledColor", _e(m.warning.main, 0.62)), D(m.TableCell, "border", _e(ao(m.divider, 1), 0.88)), D(m.Tooltip, "bg", ao(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      D(m.Alert, "errorColor", _e(m.error.light, 0.6)), D(m.Alert, "infoColor", _e(m.info.light, 0.6)), D(m.Alert, "successColor", _e(m.success.light, 0.6)), D(m.Alert, "warningColor", _e(m.warning.light, 0.6)), D(m.Alert, "errorFilledBg", $("palette-error-dark")), D(m.Alert, "infoFilledBg", $("palette-info-dark")), D(m.Alert, "successFilledBg", $("palette-success-dark")), D(m.Alert, "warningFilledBg", $("palette-warning-dark")), D(m.Alert, "errorFilledColor", Wt(() => m.getContrastText(m.error.dark))), D(m.Alert, "infoFilledColor", Wt(() => m.getContrastText(m.info.dark))), D(m.Alert, "successFilledColor", Wt(() => m.getContrastText(m.success.dark))), D(m.Alert, "warningFilledColor", Wt(() => m.getContrastText(m.warning.dark))), D(m.Alert, "errorStandardBg", De(m.error.light, 0.9)), D(m.Alert, "infoStandardBg", De(m.info.light, 0.9)), D(m.Alert, "successStandardBg", De(m.success.light, 0.9)), D(m.Alert, "warningStandardBg", De(m.warning.light, 0.9)), D(m.Alert, "errorIconColor", $("palette-error-main")), D(m.Alert, "infoIconColor", $("palette-info-main")), D(m.Alert, "successIconColor", $("palette-success-main")), D(m.Alert, "warningIconColor", $("palette-warning-main")), D(m.AppBar, "defaultBg", $("palette-grey-900")), D(m.AppBar, "darkBg", $("palette-background-paper")), D(m.AppBar, "darkColor", $("palette-text-primary")), D(m.Avatar, "defaultBg", $("palette-grey-600")), D(m.Button, "inheritContainedBg", $("palette-grey-800")), D(m.Button, "inheritContainedHoverBg", $("palette-grey-700")), D(m.Chip, "defaultBorder", $("palette-grey-700")), D(m.Chip, "defaultAvatarColor", $("palette-grey-300")), D(m.Chip, "defaultIconColor", $("palette-grey-300")), D(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), D(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), D(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), D(m.LinearProgress, "primaryBg", De(m.primary.main, 0.5)), D(m.LinearProgress, "secondaryBg", De(m.secondary.main, 0.5)), D(m.LinearProgress, "errorBg", De(m.error.main, 0.5)), D(m.LinearProgress, "infoBg", De(m.info.main, 0.5)), D(m.LinearProgress, "successBg", De(m.success.main, 0.5)), D(m.LinearProgress, "warningBg", De(m.warning.main, 0.5)), D(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), D(m.Slider, "primaryTrack", De(m.primary.main, 0.5)), D(m.Slider, "secondaryTrack", De(m.secondary.main, 0.5)), D(m.Slider, "errorTrack", De(m.error.main, 0.5)), D(m.Slider, "infoTrack", De(m.info.main, 0.5)), D(m.Slider, "successTrack", De(m.success.main, 0.5)), D(m.Slider, "warningTrack", De(m.warning.main, 0.5));
      const _ = so(m.background.default, 0.98);
      D(m.SnackbarContent, "bg", _), D(m.SnackbarContent, "color", Wt(() => m.getContrastText(_))), D(m.SpeedDialAction, "fabHoverBg", so(m.background.paper, 0.15)), D(m.StepConnector, "border", $("palette-grey-600")), D(m.StepContent, "border", $("palette-grey-600")), D(m.Switch, "defaultColor", $("palette-grey-300")), D(m.Switch, "defaultDisabledColor", $("palette-grey-600")), D(m.Switch, "primaryDisabledColor", De(m.primary.main, 0.55)), D(m.Switch, "secondaryDisabledColor", De(m.secondary.main, 0.55)), D(m.Switch, "errorDisabledColor", De(m.error.main, 0.55)), D(m.Switch, "infoDisabledColor", De(m.info.main, 0.55)), D(m.Switch, "successDisabledColor", De(m.success.main, 0.55)), D(m.Switch, "warningDisabledColor", De(m.warning.main, 0.55)), D(m.TableCell, "border", De(ao(m.divider, 1), 0.68)), D(m.Tooltip, "bg", ao(m.grey[700], 0.92));
    }
    nn(m.background, "default"), nn(m.background, "paper"), nn(m.common, "background"), nn(m.common, "onBackground"), nn(m, "divider"), Object.keys(m).forEach((_) => {
      const M = m[_];
      _ !== "tonalOffset" && M && typeof M == "object" && (M.main && D(m[_], "mainChannel", Er(Sr(M.main))), M.light && D(m[_], "lightChannel", Er(Sr(M.light))), M.dark && D(m[_], "darkChannel", Er(Sr(M.dark))), M.contrastText && D(m[_], "contrastTextChannel", Er(Sr(M.contrastText))), _ === "text" && (nn(m[_], "primary"), nn(m[_], "secondary")), _ === "action" && (M.active && nn(m[_], "active"), M.selected && nn(m[_], "selected")));
    });
  }), E = t.reduce((N, m) => yt(N, m), E);
  const S = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: Ym(E)
  }, {
    vars: k,
    generateThemeVars: R,
    generateStyleSheets: A
  } = Xf(E, S);
  return E.vars = k, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([N, m]) => {
    E[N] = m;
  }), E.generateThemeVars = R, E.generateStyleSheets = A, E.generateSpacing = function() {
    return oc(p.spacing, fa(this));
  }, E.getColorSchemeSelector = Jf(l), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = s, E.unstable_sxConfig = {
    ...Yr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, E.unstable_sx = function(m) {
    return Nn({
      sx: m,
      theme: this
    });
  }, E.toRuntimeSource = vc, E;
}
function Bs(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ra({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ec(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = n == null ? void 0 : n.mode,
    ...s
  } = e, l = a || "light", c = i == null ? void 0 : i[l], p = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return Vi(e, ...t);
    let d = n;
    "palette" in e || p[l] && (p[l] !== !0 ? d = p[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = Vi({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = p, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: f.palette
    }, Bs(f, "dark", p.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: f.palette
    }, Bs(f, "light", p.light)), f;
  }
  return !n && !("light" in p) && l === "light" && (p.light = !0), Jm({
    ...s,
    colorSchemes: p,
    defaultColorScheme: l,
    ...typeof o != "boolean" && o
  }, ...t);
}
const ai = Ec(), cr = "$$material";
function $t() {
  const e = Qr(ai);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[cr] || e;
}
function Sc(e) {
  return /* @__PURE__ */ x.jsx(ac, {
    ...e,
    defaultTheme: ai,
    themeId: cr
  });
}
process.env.NODE_ENV !== "production" && (Sc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: r.oneOfType([r.array, r.func, r.number, r.object, r.string, r.bool])
});
function Qm(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ur = (e) => Qm(e) && e !== "classes", Z = pc({
  themeId: cr,
  defaultTheme: ai,
  rootShouldForwardProp: ur
});
function wc(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ x.jsx(Sc, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...n
        }) : e
      })
    );
  };
}
function Zm() {
  return ga;
}
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function ge(e) {
  return Vf(e);
}
const zr = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (zr.displayName = "ListContext");
function eg(e) {
  return fe("MuiList", e);
}
me("MuiList", ["root", "padding", "dense", "subheader"]);
const tg = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: i
  } = e;
  return be({
    root: ["root", !n && "padding", o && "dense", i && "subheader"]
  }, eg, t);
}, ng = Z("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Cc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: p,
    ...d
  } = o, f = b.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...o,
    component: s,
    dense: l,
    disablePadding: c
  }, y = tg(h);
  return /* @__PURE__ */ x.jsx(zr.Provider, {
    value: f,
    children: /* @__PURE__ */ x.jsxs(ng, {
      as: s,
      className: ne(y.root, a),
      ref: n,
      ownerState: h,
      ...d,
      children: [p, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Cc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: r.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: r.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function Oc(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Ls(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
const Se = Gf;
function rg(e) {
  return fe("MuiSvgIcon", e);
}
me("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const og = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${H(t)}`, `fontSize${H(n)}`]
  };
  return be(i, rg, o);
}, ig = Z("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${H(n.color)}`], t[`fontSize${H(n.fontSize)}`]];
  }
})(Se(({
  theme: e
}) => {
  var t, n, o, i, a, s, l, c, p, d, f, h, y, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (o = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : o.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((d = (p = e.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : d.call(p, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var v, T;
        return {
          props: {
            color: u
          },
          style: {
            color: (T = (v = (e.vars ?? e).palette) == null ? void 0 : v[u]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (g = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : g.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Io = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: p,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: h = "0 0 24 24",
    ...y
  } = o, g = /* @__PURE__ */ b.isValidElement(i) && i.type === "svg", u = {
    ...o,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: g
  }, v = {};
  d || (v.viewBox = h);
  const T = og(u);
  return /* @__PURE__ */ x.jsxs(ig, {
    as: l,
    className: ne(T.root, a),
    focusable: "false",
    color: p,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...v,
    ...y,
    ...g && i.props,
    ownerState: u,
    children: [g ? i.props.children : i, f ? /* @__PURE__ */ x.jsx("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: r.oneOfType([r.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: r.oneOfType([r.oneOf(["inherit", "large", "medium", "small"]), r.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: r.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: r.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: r.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: r.string
});
Io.muiName = "SvgIcon";
function Le(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ x.jsx(Io, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Io.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(n));
}
function si(e, t = 166) {
  let n;
  function o(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function Nt(e) {
  return at(e).defaultView || window;
}
function ag(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => () => null;
  const n = t ? {
    ...t.propTypes
  } : null;
  return (i) => (a, s, l, c, p, ...d) => {
    const f = p || s, h = n == null ? void 0 : n[f];
    if (h) {
      const y = h(a, s, l, c, p, ...d);
      if (y)
        return y;
    }
    return typeof a[s] < "u" && !a[i] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function zs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Rc(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function sg(e) {
  const {
    controlled: t,
    default: n,
    name: o,
    state: i = "value"
  } = e, {
    current: a
  } = b.useRef(t !== void 0), [s, l] = b.useState(n), c = a ? t : s;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      a !== (t !== void 0) && console.error([`MUI: A component is changing the ${a ? "" : "un"}controlled ${i} state of ${o} to be ${a ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, o, t]);
    const {
      current: d
    } = b.useRef(n);
    b.useEffect(() => {
      !a && !Object.is(d, n) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const p = b.useCallback((d) => {
    a || l(d);
  }, []);
  return [c, p];
}
function dt(e) {
  const t = b.useRef(e);
  return an(() => {
    t.current = e;
  }), b.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function lg(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Pc(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const c = {};
    return Object.keys(l).forEach((p) => {
      lg(p, l[p]) && typeof s[p] == "function" && (c[p] = (...d) => {
        s[p](...d), l[p](...d);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, c = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, p = ne(s == null ? void 0 : s.className, l == null ? void 0 : l.className, c == null ? void 0 : c.className), d = n(c, l);
      return {
        ...l,
        ...c,
        ...d,
        ...!!p && {
          className: p
        },
        ...(l == null ? void 0 : l.style) && (c == null ? void 0 : c.style) && {
          style: {
            ...l.style,
            ...c.style
          }
        },
        ...(l == null ? void 0 : l.sx) && (c == null ? void 0 : c.sx) && {
          sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(c.sx) ? c.sx : [c.sx]]
        }
      };
    };
  const o = t, i = n(e, o), a = ne(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...i,
    ...!!a && {
      className: a
    },
    ...(o == null ? void 0 : o.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...o.style,
        ...e.style
      }
    },
    ...(o == null ? void 0 : o.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(o.sx) ? o.sx : [o.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
function Oi(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Fs(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function kc(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function br(e, t, n, o, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = o ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !kc(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const $c = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: p = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...h
  } = t, y = b.useRef(null), g = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  an(() => {
    i && y.current.focus();
  }, [i]), b.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (w, {
      direction: E
    }) => {
      const S = !y.current.style.width;
      if (w.clientHeight < y.current.clientHeight && S) {
        const k = `${Oc(Nt(w))}px`;
        y.current.style[E === "rtl" ? "paddingLeft" : "paddingRight"] = k, y.current.style.width = `calc(100% + ${k})`;
      }
      return y.current;
    }
  }), []);
  const u = (w) => {
    const E = y.current, S = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      d && d(w);
      return;
    }
    const R = at(E).activeElement;
    if (S === "ArrowDown")
      w.preventDefault(), br(E, R, p, c, Oi);
    else if (S === "ArrowUp")
      w.preventDefault(), br(E, R, p, c, Fs);
    else if (S === "Home")
      w.preventDefault(), br(E, null, p, c, Oi);
    else if (S === "End")
      w.preventDefault(), br(E, null, p, c, Fs);
    else if (S.length === 1) {
      const A = g.current, N = S.toLowerCase(), m = performance.now();
      A.keys.length > 0 && (m - A.lastTime > 500 ? (A.keys = [], A.repeating = !0, A.previousKeyMatched = !0) : A.repeating && N !== A.keys[0] && (A.repeating = !1)), A.lastTime = m, A.keys.push(N);
      const $ = R && !A.repeating && kc(R, A);
      A.previousKeyMatched && ($ || br(E, R, !1, c, Oi, A)) ? w.preventDefault() : A.previousKeyMatched = !1;
    }
    d && d(w);
  }, v = nt(y, n);
  let T = -1;
  b.Children.forEach(s, (w, E) => {
    if (!/* @__PURE__ */ b.isValidElement(w)) {
      T === E && (T += 1, T >= s.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && ua.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (f === "selectedMenu" && w.props.selected || T === -1) && (T = E), T === E && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (T += 1, T >= s.length && (T = -1));
  });
  const O = b.Children.map(s, (w, E) => {
    if (E === T) {
      const S = {};
      return a && (S.autoFocus = !0), w.props.tabIndex === void 0 && f === "selectedMenu" && (S.tabIndex = 0), /* @__PURE__ */ b.cloneElement(w, S);
    }
    return w;
  });
  return /* @__PURE__ */ x.jsx(Cc, {
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: u,
    tabIndex: i ? 0 : -1,
    ...h,
    children: O
  });
});
process.env.NODE_ENV !== "production" && ($c.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: r.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
const Zr = r.oneOfType([r.func, r.object]);
function cn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function cg(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ug(e, t, n, o, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !cg(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Mc = cn(r.elementType, ug);
function pg(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Ic(e, t, n, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = pg(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function jc(e, t, n, o) {
  return e[t] === void 0 ? null : Ic(e, t, n, o);
}
function Hi() {
  return null;
}
jc.isRequired = Ic;
Hi.isRequired = Hi;
const Pa = process.env.NODE_ENV === "production" ? Hi : jc;
function dg(e) {
  return typeof e == "string";
}
const Ws = {};
function Nc(e, t) {
  const n = b.useRef(Ws);
  return n.current === Ws && (n.current = e(t)), n;
}
const fg = [];
function mg(e) {
  b.useEffect(e, fg);
}
class li {
  constructor() {
    fr(this, "currentId", null);
    fr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    fr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new li();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Mn() {
  const e = Nc(li.create).current;
  return mg(e.disposeEffect), e;
}
function gg(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ac(e, t, n, o, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !gg(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const vn = cn(r.element, Ac);
vn.isRequired = cn(r.element.isRequired, Ac);
function Dn(e) {
  var t;
  return parseInt(b.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function Dc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.indexOf(o) !== -1) continue;
    n[o] = e[o];
  }
  return n;
}
function Gi(e, t) {
  return Gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Gi(e, t);
}
function _c(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Gi(e, t);
}
const Vs = {
  disabled: !1
};
var hg = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
  enter: r.number,
  exit: r.number,
  appear: r.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && r.oneOfType([r.string, r.shape({
  enter: r.string,
  exit: r.string,
  active: r.string
}), r.shape({
  enter: r.string,
  enterDone: r.string,
  enterActive: r.string,
  exit: r.string,
  exitDone: r.string,
  exitActive: r.string
})]);
const jo = jt.createContext(null);
var yg = function(t) {
  return t.scrollTop;
}, wr = "unmounted", Rn = "exited", Pn = "entering", Yn = "entered", Yi = "exiting", At = /* @__PURE__ */ function(e) {
  _c(t, e);
  function t(o, i) {
    var a;
    a = e.call(this, o, i) || this;
    var s = i, l = s && !s.isMounting ? o.enter : o.appear, c;
    return a.appearStatus = null, o.in ? l ? (c = Rn, a.appearStatus = Pn) : c = Yn : o.unmountOnExit || o.mountOnEnter ? c = wr : c = Rn, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === wr ? {
      status: Rn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Pn && s !== Yn && (a = Pn) : (s === Pn || s === Yn) && (a = Yi);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, s, l;
    return a = s = l = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, l = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Pn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ro.findDOMNode(this);
          s && yg(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Rn && this.setState({
      status: wr
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [ro.findDOMNode(this), l], p = c[0], d = c[1], f = this.getTimeouts(), h = l ? f.appear : f.enter;
    if (!i && !s || Vs.disabled) {
      this.safeSetState({
        status: Yn
      }, function() {
        a.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, d), this.safeSetState({
      status: Pn
    }, function() {
      a.props.onEntering(p, d), a.onTransitionEnd(h, function() {
        a.safeSetState({
          status: Yn
        }, function() {
          a.props.onEntered(p, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : ro.findDOMNode(this);
    if (!a || Vs.disabled) {
      this.safeSetState({
        status: Rn
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Yi
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: Rn
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ro.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], p = c[0], d = c[1];
      this.props.addEndListener(p, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === wr)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = Dc(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ jt.createElement(jo.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : jt.cloneElement(jt.Children.only(s), l))
    );
  }, t;
}(jt.Component);
At.contextType = jo;
At.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: r.shape({
    current: typeof Element > "u" ? r.any : function(e, t, n, o, i, a) {
      var s = e[t];
      return r.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, o, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: r.oneOfType([r.func.isRequired, r.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: r.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: r.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: r.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: r.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: r.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: r.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = hg;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: r.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: r.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: r.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: r.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: r.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: r.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: r.func
} : {};
function Gn() {
}
At.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Gn,
  onEntering: Gn,
  onEntered: Gn,
  onExit: Gn,
  onExiting: Gn,
  onExited: Gn
};
At.UNMOUNTED = wr;
At.EXITED = Rn;
At.ENTERING = Pn;
At.ENTERED = Yn;
At.EXITING = Yi;
function bg(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ka(e, t) {
  var n = function(a) {
    return t && ho(a) ? t(a) : a;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && Lu.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function vg(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var o = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (o[a] = i, i = []) : i.push(a);
  var s, l = {};
  for (var c in t) {
    if (o[c])
      for (s = 0; s < o[c].length; s++) {
        var p = o[c][s];
        l[o[c][s]] = n(p);
      }
    l[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = n(i[s]);
  return l;
}
function In(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function xg(e, t) {
  return ka(e.children, function(n) {
    return yo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: In(n, "appear", e),
      enter: In(n, "enter", e),
      exit: In(n, "exit", e)
    });
  });
}
function Tg(e, t, n) {
  var o = ka(e.children), i = vg(t, o);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (ho(s)) {
      var l = a in t, c = a in o, p = t[a], d = ho(p) && !p.props.in;
      c && (!l || d) ? i[a] = yo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: In(s, "exit", e),
        enter: In(s, "enter", e)
      }) : !c && l && !d ? i[a] = yo(s, {
        in: !1
      }) : c && l && ho(p) && (i[a] = yo(s, {
        onExited: n.bind(null, s),
        in: p.props.in,
        exit: In(s, "exit", e),
        enter: In(s, "enter", e)
      }));
    }
  }), i;
}
var Eg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Sg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, $a = /* @__PURE__ */ function(e) {
  _c(t, e);
  function t(o, i) {
    var a;
    a = e.call(this, o, i) || this;
    var s = a.handleExited.bind(bg(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? xg(i, l) : Tg(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = ka(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = ko({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = Dc(i, ["component", "childFactory"]), c = this.state.contextValue, p = Eg(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ jt.createElement(jo.Provider, {
      value: c
    }, p) : /* @__PURE__ */ jt.createElement(jo.Provider, {
      value: c
    }, /* @__PURE__ */ jt.createElement(a, l, p));
  }, t;
}(jt.Component);
$a.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: r.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: r.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: r.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: r.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: r.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: r.func
} : {};
$a.defaultProps = Sg;
const Ma = (e) => e.scrollTop;
function Zn(e, t) {
  const {
    timeout: n,
    easing: o,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: i.transitionDelay
  };
}
function qi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const wg = {
  entering: {
    opacity: 1,
    transform: qi(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ri = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), er = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: p,
    onEntering: d,
    onExit: f,
    onExited: h,
    onExiting: y,
    style: g,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = At,
    ...T
  } = t, O = Mn(), w = b.useRef(), E = $t(), S = b.useRef(null), k = nt(S, Dn(a), n), R = (I) => (j) => {
    if (I) {
      const V = S.current;
      j === void 0 ? I(V) : I(V, j);
    }
  }, A = R(d), N = R((I, j) => {
    Ma(I);
    const {
      duration: V,
      delay: U,
      easing: F
    } = Zn({
      style: g,
      timeout: u,
      easing: s
    }, {
      mode: "enter"
    });
    let P;
    u === "auto" ? (P = E.transitions.getAutoHeightDuration(I.clientHeight), w.current = P) : P = V, I.style.transition = [E.transitions.create("opacity", {
      duration: P,
      delay: U
    }), E.transitions.create("transform", {
      duration: Ri ? P : P * 0.666,
      delay: U,
      easing: F
    })].join(","), c && c(I, j);
  }), m = R(p), $ = R(y), _ = R((I) => {
    const {
      duration: j,
      delay: V,
      easing: U
    } = Zn({
      style: g,
      timeout: u,
      easing: s
    }, {
      mode: "exit"
    });
    let F;
    u === "auto" ? (F = E.transitions.getAutoHeightDuration(I.clientHeight), w.current = F) : F = j, I.style.transition = [E.transitions.create("opacity", {
      duration: F,
      delay: V
    }), E.transitions.create("transform", {
      duration: Ri ? F : F * 0.666,
      delay: Ri ? V : V || F * 0.333,
      easing: U
    })].join(","), I.style.opacity = 0, I.style.transform = qi(0.75), f && f(I);
  }), M = R(h), z = (I) => {
    u === "auto" && O.start(w.current || 0, I), o && o(S.current, I);
  };
  return /* @__PURE__ */ x.jsx(v, {
    appear: i,
    in: l,
    nodeRef: S,
    onEnter: N,
    onEntered: m,
    onEntering: A,
    onExit: _,
    onExited: M,
    onExiting: $,
    addEndListener: z,
    timeout: u === "auto" ? null : u,
    ...T,
    children: (I, {
      ownerState: j,
      ...V
    }) => /* @__PURE__ */ b.cloneElement(a, {
      style: {
        opacity: 0,
        transform: qi(0.75),
        visibility: I === "exited" && !l ? "hidden" : void 0,
        ...wg[I],
        ...g,
        ...a.props.style
      },
      ref: k,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (er.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: vn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
er && (er.muiSupportAuto = !0);
function Cg(e) {
  const t = at(e);
  return t.body === e ? Nt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function kr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Us(e) {
  return parseInt(Nt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Og(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function Hs(e, t, n, o, i) {
  const a = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !Og(s);
    l && c && kr(s, i);
  });
}
function Pi(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function Rg(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Cg(o)) {
      const s = Oc(Nt(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Us(o) + s}px`;
      const l = at(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Us(c) + s}px`;
      });
    }
    let a;
    if (o.parentNode instanceof DocumentFragment)
      a = at(o).body;
    else {
      const s = o.parentElement, l = Nt(o);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : o;
    }
    n.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: a,
      el: s,
      property: l
    }) => {
      a ? s.style.setProperty(l, a) : s.style.removeProperty(l);
    });
  };
}
function Pg(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class kg {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && kr(t.modalRef, !1);
    const i = Pg(n);
    Hs(n, t.mount, t.modalRef, i, !0);
    const a = Pi(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = Pi(this.containers, (a) => a.modals.includes(t)), i = this.containers[o];
    i.restore || (i.restore = Rg(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = Pi(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(o, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && kr(t.modalRef, n), Hs(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && kr(s.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const $g = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Mg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Ig(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function jg(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ig(e));
}
function Ng(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll($g)).forEach((o, i) => {
    const a = Mg(o);
    a === -1 || !jg(o) || (a === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function Ag() {
  return !0;
}
function No(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Ng,
    isEnabled: s = Ag,
    open: l
  } = e, c = b.useRef(!1), p = b.useRef(null), d = b.useRef(null), f = b.useRef(null), h = b.useRef(null), y = b.useRef(!1), g = b.useRef(null), u = nt(Dn(t), g), v = b.useRef(null);
  b.useEffect(() => {
    !l || !g.current || (y.current = !n);
  }, [n, l]), b.useEffect(() => {
    if (!l || !g.current)
      return;
    const w = at(g.current);
    return g.current.contains(w.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), y.current && g.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !g.current)
      return;
    const w = at(g.current), E = (R) => {
      v.current = R, !(o || !s() || R.key !== "Tab") && w.activeElement === g.current && R.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, S = () => {
      var N, m;
      const R = g.current;
      if (R === null)
        return;
      if (!w.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(w.activeElement) || o && w.activeElement !== p.current && w.activeElement !== d.current)
        return;
      if (w.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!y.current)
        return;
      let A = [];
      if ((w.activeElement === p.current || w.activeElement === d.current) && (A = a(g.current)), A.length > 0) {
        const $ = !!((N = v.current) != null && N.shiftKey && ((m = v.current) == null ? void 0 : m.key) === "Tab"), _ = A[0], M = A[A.length - 1];
        typeof _ != "string" && typeof M != "string" && ($ ? M.focus() : _.focus());
      } else
        R.focus();
    };
    w.addEventListener("focusin", S), w.addEventListener("keydown", E, !0);
    const k = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && S();
    }, 50);
    return () => {
      clearInterval(k), w.removeEventListener("focusin", S), w.removeEventListener("keydown", E, !0);
    };
  }, [n, o, i, s, l, a]);
  const T = (w) => {
    f.current === null && (f.current = w.relatedTarget), y.current = !0, h.current = w.target;
    const E = t.props.onFocus;
    E && E(w);
  }, O = (w) => {
    f.current === null && (f.current = w.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ x.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ x.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: p,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: u,
      onFocus: T
    }), /* @__PURE__ */ x.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (No.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: vn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: r.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: r.func,
  /**
   * If `true`, focus is locked.
   */
  open: r.bool.isRequired
});
process.env.NODE_ENV !== "production" && (No.propTypes = Oa(No.propTypes));
function Dg(e) {
  return typeof e == "function" ? e() : e;
}
const Fr = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = b.useState(null), c = nt(/* @__PURE__ */ b.isValidElement(o) ? Dn(o) : null, n);
  if (an(() => {
    a || l(Dg(i) || document.body);
  }, [i, a]), an(() => {
    if (s && !a)
      return zs(n, s), () => {
        zs(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ b.isValidElement(o)) {
      const p = {
        ref: c
      };
      return /* @__PURE__ */ b.cloneElement(o, p);
    }
    return o;
  }
  return s && /* @__PURE__ */ Fu.createPortal(o, s);
});
process.env.NODE_ENV !== "production" && (Fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: r.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Kt, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (Fr.propTypes = Oa(Fr.propTypes));
function pe(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: i,
    externalForwardedProps: a,
    internalForwardedProps: s,
    shouldForwardComponentProp: l = !1,
    ...c
  } = t, {
    component: p,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...h
  } = a, y = d[e] || o, g = Bl(f[e], i), {
    props: {
      component: u,
      ...v
    },
    internalRef: T
  } = _l({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: g
  }), O = nt(T, g == null ? void 0 : g.ref, t.ref), w = e === "root" ? u || p : u, E = Dl(y, {
    ...e === "root" && !p && !d[e] && s,
    ...e !== "root" && !d[e] && s,
    ...v,
    ...w && !l && {
      as: w
    },
    ...w && l && {
      component: w
    },
    ref: O
  }, i);
  return [y, E];
}
const _g = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ao = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = $t(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: p,
    onEnter: d,
    onEntered: f,
    onEntering: h,
    onExit: y,
    onExited: g,
    onExiting: u,
    style: v,
    timeout: T = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = At,
    ...w
  } = t, E = b.useRef(null), S = nt(E, Dn(l), n), k = (z) => (I) => {
    if (z) {
      const j = E.current;
      I === void 0 ? z(j) : z(j, I);
    }
  }, R = k(h), A = k((z, I) => {
    Ma(z);
    const j = Zn({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = o.transitions.create("opacity", j), z.style.transition = o.transitions.create("opacity", j), d && d(z, I);
  }), N = k(f), m = k(u), $ = k((z) => {
    const I = Zn({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = o.transitions.create("opacity", I), z.style.transition = o.transitions.create("opacity", I), y && y(z);
  }), _ = k(g), M = (z) => {
    a && a(E.current, z);
  };
  return /* @__PURE__ */ x.jsx(O, {
    appear: s,
    in: p,
    nodeRef: E,
    onEnter: A,
    onEntered: N,
    onEntering: R,
    onExit: $,
    onExited: _,
    onExiting: m,
    addEndListener: M,
    timeout: T,
    ...w,
    children: (z, {
      ownerState: I,
      ...j
    }) => /* @__PURE__ */ b.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: z === "exited" && !p ? "hidden" : void 0,
        ..._g[z],
        ...v,
        ...l.props.style
      },
      ref: S,
      ...j
    })
  });
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: vn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function Bg(e) {
  return fe("MuiBackdrop", e);
}
me("MuiBackdrop", ["root", "invisible"]);
const Lg = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return be({
    root: ["root", n && "invisible"]
  }, Bg, t);
}, zg = Z("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Ia = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: s = "div",
    invisible: l = !1,
    open: c,
    components: p = {},
    componentsProps: d = {},
    slotProps: f = {},
    slots: h = {},
    TransitionComponent: y,
    transitionDuration: g,
    ...u
  } = o, v = {
    ...o,
    component: s,
    invisible: l
  }, T = Lg(v), O = {
    transition: y,
    root: p.Root,
    ...h
  }, w = {
    ...d,
    ...f
  }, E = {
    component: s,
    slots: O,
    slotProps: w
  }, [S, k] = pe("root", {
    elementType: zg,
    externalForwardedProps: E,
    className: ne(T.root, a),
    ownerState: v
  }), [R, A] = pe("transition", {
    elementType: Ao,
    externalForwardedProps: E,
    ownerState: v
  });
  return /* @__PURE__ */ x.jsx(R, {
    in: c,
    timeout: g,
    ...u,
    ...A,
    children: /* @__PURE__ */ x.jsx(S, {
      "aria-hidden": !0,
      ...k,
      classes: T,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ia.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    root: r.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: r.bool,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function Fg(e) {
  return typeof e == "function" ? e() : e;
}
function Wg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Gs = () => {
}, lo = new kg();
function Vg(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: l,
    onClose: c,
    open: p,
    rootRef: d
  } = e, f = b.useRef({}), h = b.useRef(null), y = b.useRef(null), g = nt(y, d), [u, v] = b.useState(!p), T = Wg(l);
  let O = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (O = !1);
  const w = () => at(h.current), E = () => (f.current.modalRef = y.current, f.current.mount = h.current, f.current), S = () => {
    lo.mount(E(), {
      disableScrollLock: o
    }), y.current && (y.current.scrollTop = 0);
  }, k = dt(() => {
    const I = Fg(t) || w().body;
    lo.add(E(), I), y.current && S();
  }), R = () => lo.isTopModal(E()), A = dt((I) => {
    h.current = I, I && (p && R() ? S() : y.current && kr(y.current, O));
  }), N = b.useCallback(() => {
    lo.remove(E(), O);
  }, [O]);
  b.useEffect(() => () => {
    N();
  }, [N]), b.useEffect(() => {
    p ? k() : (!T || !i) && N();
  }, [p, N, T, i, k]);
  const m = (I) => (j) => {
    var V;
    (V = I.onKeyDown) == null || V.call(I, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !R()) && (n || (j.stopPropagation(), c && c(j, "escapeKeyDown")));
  }, $ = (I) => (j) => {
    var V;
    (V = I.onClick) == null || V.call(I, j), j.target === j.currentTarget && c && c(j, "backdropClick");
  };
  return {
    getRootProps: (I = {}) => {
      const j = Oo(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const V = {
        ...j,
        ...I
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...V,
        onKeyDown: m(V),
        ref: g
      };
    },
    getBackdropProps: (I = {}) => {
      const j = I;
      return {
        "aria-hidden": !0,
        ...j,
        onClick: $(j),
        open: p
      };
    },
    getTransitionProps: () => {
      const I = () => {
        v(!1), a && a();
      }, j = () => {
        v(!0), s && s(), i && N();
      };
      return {
        onEnter: Ls(I, (l == null ? void 0 : l.props.onEnter) ?? Gs),
        onExited: Ls(j, (l == null ? void 0 : l.props.onExited) ?? Gs)
      };
    },
    rootRef: g,
    portalRef: A,
    isTopModal: R,
    exited: u,
    hasTransition: T
  };
}
function Ug(e) {
  return fe("MuiModal", e);
}
me("MuiModal", ["root", "hidden", "backdrop"]);
const Hg = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return be({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Ug, o);
}, Gg = Z("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Se(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Yg = Z(Ia, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), ci = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Yg,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: p,
    container: d,
    component: f,
    components: h = {},
    componentsProps: y = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: T = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: w = !1,
    hideBackdrop: E = !1,
    keepMounted: S = !1,
    onClose: k,
    onTransitionEnter: R,
    onTransitionExited: A,
    open: N,
    slotProps: m = {},
    slots: $ = {},
    // eslint-disable-next-line react/prop-types
    theme: _,
    ...M
  } = o, z = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: g,
    disableEnforceFocus: u,
    disableEscapeKeyDown: v,
    disablePortal: T,
    disableRestoreFocus: O,
    disableScrollLock: w,
    hideBackdrop: E,
    keepMounted: S
  }, {
    getRootProps: I,
    getBackdropProps: j,
    getTransitionProps: V,
    portalRef: U,
    isTopModal: F,
    exited: P,
    hasTransition: L
  } = Vg({
    ...z,
    rootRef: n
  }), K = {
    ...z,
    exited: P
  }, J = Hg(K), Q = {};
  if (p.props.tabIndex === void 0 && (Q.tabIndex = "-1"), L) {
    const {
      onEnter: q,
      onExited: ie
    } = V();
    Q.onEnter = q, Q.onExited = ie;
  }
  const re = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...$
    },
    slotProps: {
      ...y,
      ...m
    }
  }, [B, Y] = pe("root", {
    ref: n,
    elementType: Gg,
    externalForwardedProps: {
      ...re,
      ...M,
      component: f
    },
    getSlotProps: I,
    ownerState: K,
    className: ne(l, J == null ? void 0 : J.root, !K.open && K.exited && (J == null ? void 0 : J.hidden))
  }), [X, le] = pe("backdrop", {
    ref: a == null ? void 0 : a.ref,
    elementType: i,
    externalForwardedProps: re,
    shouldForwardComponentProp: !0,
    additionalProps: a,
    getSlotProps: (q) => j({
      ...q,
      onClick: (ie) => {
        q != null && q.onClick && q.onClick(ie);
      }
    }),
    className: ne(a == null ? void 0 : a.className, J == null ? void 0 : J.backdrop),
    ownerState: K
  });
  return !S && !N && (!L || P) ? null : /* @__PURE__ */ x.jsx(Fr, {
    ref: U,
    container: d,
    disablePortal: T,
    children: /* @__PURE__ */ x.jsxs(B, {
      ...Y,
      children: [!E && i ? /* @__PURE__ */ x.jsx(X, {
        ...le
      }) : null, /* @__PURE__ */ x.jsx(No, {
        disableEnforceFocus: u,
        disableAutoFocus: g,
        disableRestoreFocus: O,
        isEnabled: F,
        open: N,
        children: /* @__PURE__ */ b.cloneElement(p, Q)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * A single child content element.
   */
  children: vn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: r.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Backdrop: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Kt, r.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: r.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function qg(e) {
  return fe("MuiPaper", e);
}
me("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Kg = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, a = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return be(a, qg, i);
}, Xg = Z("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Se(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), xn = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var y;
  const o = ge({
    props: t,
    name: "MuiPaper"
  }), i = $t(), {
    className: a,
    component: s = "div",
    elevation: l = 1,
    square: c = !1,
    variant: p = "elevation",
    ...d
  } = o, f = {
    ...o,
    component: s,
    elevation: l,
    square: c,
    variant: p
  }, h = Kg(f);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ x.jsx(Xg, {
    as: s,
    ownerState: f,
    className: ne(h.root, a),
    ref: n,
    ...d,
    style: {
      ...p === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (y = i.vars.overlays) == null ? void 0 : y[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Be("#fff", Ui(l))}, ${Be("#fff", Ui(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: cn(Pa, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: r.oneOfType([r.oneOf(["elevation", "outlined"]), r.string])
});
function Jg(e) {
  return fe("MuiPopover", e);
}
me("MuiPopover", ["root", "paper"]);
function Ys(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function qs(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ks(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Cr(e) {
  return typeof e == "function" ? e() : e;
}
const Qg = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    paper: ["paper"]
  }, Jg, t);
}, Zg = Z(ci, {
  name: "MuiPopover",
  slot: "Root"
})({}), Bc = Z(xn, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Lc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: a,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: p,
    className: d,
    container: f,
    elevation: h = 8,
    marginThreshold: y = 16,
    open: g,
    PaperProps: u = {},
    // TODO: remove in v7
    slots: v = {},
    slotProps: T = {},
    transformOrigin: O = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w,
    // TODO: remove in v7
    transitionDuration: E = "auto",
    TransitionProps: S = {},
    // TODO: remove in v7
    disableScrollLock: k = !1,
    ...R
  } = o, A = b.useRef(), N = {
    ...o,
    anchorOrigin: s,
    anchorReference: c,
    elevation: h,
    marginThreshold: y,
    transformOrigin: O,
    TransitionComponent: w,
    transitionDuration: E,
    TransitionProps: S
  }, m = Qg(N), $ = b.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const q = Cr(a), ie = q && q.nodeType === 1 ? q : at(A.current).body, W = ie.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ae = ie.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ae.top === 0 && ae.left === 0 && ae.right === 0 && ae.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: W.top + Ys(W, s.vertical),
      left: W.left + qs(W, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), _ = b.useCallback((q) => ({
    vertical: Ys(q, O.vertical),
    horizontal: qs(q, O.horizontal)
  }), [O.horizontal, O.vertical]), M = b.useCallback((q) => {
    const ie = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, W = _(ie);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ks(W)
      };
    const ae = $();
    let de = ae.top - W.vertical, xe = ae.left - W.horizontal;
    const Ve = de + ie.height, $e = xe + ie.width, ze = Nt(Cr(a)), We = ze.innerHeight - y, qe = ze.innerWidth - y;
    if (y !== null && de < y) {
      const ke = de - y;
      de -= ke, W.vertical += ke;
    } else if (y !== null && Ve > We) {
      const ke = Ve - We;
      de -= ke, W.vertical += ke;
    }
    if (process.env.NODE_ENV !== "production" && ie.height > We && ie.height && We && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ie.height - We}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && xe < y) {
      const ke = xe - y;
      xe -= ke, W.horizontal += ke;
    } else if ($e > qe) {
      const ke = $e - qe;
      xe -= ke, W.horizontal += ke;
    }
    return {
      top: `${Math.round(de)}px`,
      left: `${Math.round(xe)}px`,
      transformOrigin: Ks(W)
    };
  }, [a, c, $, _, y]), [z, I] = b.useState(g), j = b.useCallback(() => {
    const q = A.current;
    if (!q)
      return;
    const ie = M(q);
    ie.top !== null && q.style.setProperty("top", ie.top), ie.left !== null && (q.style.left = ie.left), q.style.transformOrigin = ie.transformOrigin, I(!0);
  }, [M]);
  b.useEffect(() => (k && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [a, k, j]);
  const V = () => {
    j();
  }, U = () => {
    I(!1);
  };
  b.useEffect(() => {
    g && j();
  }), b.useImperativeHandle(i, () => g ? {
    updatePosition: () => {
      j();
    }
  } : null, [g, j]), b.useEffect(() => {
    if (!g)
      return;
    const q = si(() => {
      j();
    }), ie = Nt(Cr(a));
    return ie.addEventListener("resize", q), () => {
      q.clear(), ie.removeEventListener("resize", q);
    };
  }, [a, g, j]);
  let F = E;
  const P = {
    slots: {
      transition: w,
      ...v
    },
    slotProps: {
      transition: S,
      paper: u,
      ...T
    }
  }, [L, K] = pe("transition", {
    elementType: er,
    externalForwardedProps: P,
    ownerState: N,
    getSlotProps: (q) => ({
      ...q,
      onEntering: (ie, W) => {
        var ae;
        (ae = q.onEntering) == null || ae.call(q, ie, W), V();
      },
      onExited: (ie) => {
        var W;
        (W = q.onExited) == null || W.call(q, ie), U();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  E === "auto" && !L.muiSupportAuto && (F = void 0);
  const J = f || (a ? at(Cr(a)).body : void 0), [Q, {
    slots: re,
    slotProps: B,
    ...Y
  }] = pe("root", {
    ref: n,
    elementType: Zg,
    externalForwardedProps: {
      ...P,
      ...R
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: v.backdrop
      },
      slotProps: {
        backdrop: Pc(typeof T.backdrop == "function" ? T.backdrop(N) : T.backdrop, {
          invisible: !0
        })
      },
      container: J,
      open: g
    },
    ownerState: N,
    className: ne(m.root, d)
  }), [X, le] = pe("paper", {
    ref: A,
    className: m.paper,
    elementType: Bc,
    externalForwardedProps: P,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: z ? void 0 : {
        opacity: 0
      }
    },
    ownerState: N
  });
  return /* @__PURE__ */ x.jsx(Q, {
    ...Y,
    ...!dg(Q) && {
      slots: re,
      slotProps: B,
      disableScrollLock: k
    },
    children: /* @__PURE__ */ x.jsx(L, {
      ...K,
      timeout: F,
      children: /* @__PURE__ */ x.jsx(X, {
        ...le,
        children: p
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Zr,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: cn(r.oneOfType([Kt, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Cr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: r.shape({
    left: r.number.isRequired,
    top: r.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: r.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: r.object,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Kt, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Pa,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: r.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: r.shape({
    component: Mc
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: r.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object
});
function eh(e) {
  return fe("MuiMenu", e);
}
me("MuiMenu", ["root", "paper", "list"]);
const th = {
  vertical: "top",
  horizontal: "right"
}, nh = {
  vertical: "top",
  horizontal: "left"
}, rh = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, eh, t);
}, oh = Z(Lc, {
  shouldForwardProp: (e) => ur(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), ih = Z(Bc, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), ah = Z($c, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), zc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: s,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: p,
    open: d,
    PaperProps: f = {},
    PopoverClasses: h,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: g,
      ...u
    } = {},
    variant: v = "selectedMenu",
    slots: T = {},
    slotProps: O = {},
    ...w
  } = o, E = ar(), S = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: g,
    PaperProps: f,
    transitionDuration: y,
    TransitionProps: u,
    variant: v
  }, k = rh(S), R = i && !l && d, A = b.useRef(null), N = (F, P) => {
    A.current && A.current.adjustStyleForScrollbar(F, {
      direction: E ? "rtl" : "ltr"
    }), g && g(F, P);
  }, m = (F) => {
    F.key === "Tab" && (F.preventDefault(), p && p(F, "tabKeyDown"));
  };
  let $ = -1;
  b.Children.map(a, (F, P) => {
    /* @__PURE__ */ b.isValidElement(F) && (process.env.NODE_ENV !== "production" && ua.isFragment(F) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), F.props.disabled || (v === "selectedMenu" && F.props.selected || $ === -1) && ($ = P));
  });
  const _ = {
    slots: T,
    slotProps: {
      list: c,
      transition: u,
      paper: f,
      ...O
    }
  }, M = Jn({
    elementType: T.root,
    externalSlotProps: O.root,
    ownerState: S,
    className: [k.root, s]
  }), [z, I] = pe("paper", {
    className: k.paper,
    elementType: ih,
    externalForwardedProps: _,
    shouldForwardComponentProp: !0,
    ownerState: S
  }), [j, V] = pe("list", {
    className: ne(k.list, c.className),
    elementType: ah,
    shouldForwardComponentProp: !0,
    externalForwardedProps: _,
    getSlotProps: (F) => ({
      ...F,
      onKeyDown: (P) => {
        var L;
        m(P), (L = F.onKeyDown) == null || L.call(F, P);
      }
    }),
    ownerState: S
  }), U = typeof _.slotProps.transition == "function" ? _.slotProps.transition(S) : _.slotProps.transition;
  return /* @__PURE__ */ x.jsx(oh, {
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: E ? "right" : "left"
    },
    transformOrigin: E ? th : nh,
    slots: {
      root: T.root,
      paper: z,
      backdrop: T.backdrop,
      ...T.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: T.transition
      }
    },
    slotProps: {
      root: M,
      paper: I,
      backdrop: typeof O.backdrop == "function" ? O.backdrop(S) : O.backdrop,
      transition: {
        ...U,
        onEntering: (...F) => {
          var P;
          N(...F), (P = U == null ? void 0 : U.onEntering) == null || P.call(U, ...F);
        }
      }
    },
    open: d,
    ref: n,
    transitionDuration: y,
    ownerState: S,
    ...w,
    classes: h,
    children: /* @__PURE__ */ x.jsx(j, {
      actions: A,
      autoFocus: i && ($ === -1 || l),
      autoFocusItem: R,
      variant: v,
      ...V,
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([Kt, r.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: r.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: r.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: r.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: r.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    list: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    list: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
function Do(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
class _o {
  constructor() {
    fr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new _o();
  }
  static use() {
    const t = Nc(_o.create).current, [n, o] = b.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, b.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = lh(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function sh() {
  return _o.use();
}
function lh() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Fc(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: p
  } = e, [d, f] = b.useState(!1), h = ne(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, g = ne(n.child, d && n.childLeaving, o && n.childPulsate);
  return !l && !d && f(!0), b.useEffect(() => {
    if (!l && c != null) {
      const u = setTimeout(c, p);
      return () => {
        clearTimeout(u);
      };
    }
  }, [c, l, p]), /* @__PURE__ */ x.jsx("span", {
    className: h,
    style: y,
    children: /* @__PURE__ */ x.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object.isRequired,
  className: r.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: r.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: r.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: r.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: r.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: r.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: r.number,
  /**
   * exit delay
   */
  timeout: r.number.isRequired
});
const wt = me("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ki = 550, ch = 80, uh = Xr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ph = Xr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, dh = Xr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, fh = Z("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), mh = Z(Fc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${wt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${uh};
    animation-duration: ${Ki}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${wt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${wt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${wt.childLeaving} {
    opacity: 0;
    animation-name: ${ph};
    animation-duration: ${Ki}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${wt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${dh};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Wc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = o, [c, p] = b.useState([]), d = b.useRef(0), f = b.useRef(null);
  b.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const h = b.useRef(!1), y = Mn(), g = b.useRef(null), u = b.useRef(null), v = b.useCallback((E) => {
    const {
      pulsate: S,
      rippleX: k,
      rippleY: R,
      rippleSize: A,
      cb: N
    } = E;
    p((m) => [...m, /* @__PURE__ */ x.jsx(mh, {
      classes: {
        ripple: ne(a.ripple, wt.ripple),
        rippleVisible: ne(a.rippleVisible, wt.rippleVisible),
        ripplePulsate: ne(a.ripplePulsate, wt.ripplePulsate),
        child: ne(a.child, wt.child),
        childLeaving: ne(a.childLeaving, wt.childLeaving),
        childPulsate: ne(a.childPulsate, wt.childPulsate)
      },
      timeout: Ki,
      pulsate: S,
      rippleX: k,
      rippleY: R,
      rippleSize: A
    }, d.current)]), d.current += 1, f.current = N;
  }, [a]), T = b.useCallback((E = {}, S = {}, k = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: A = i || S.pulsate,
      fakeElement: N = !1
      // For test purposes
    } = S;
    if ((E == null ? void 0 : E.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (h.current = !0);
    const m = N ? null : u.current, $ = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let _, M, z;
    if (A || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      _ = Math.round($.width / 2), M = Math.round($.height / 2);
    else {
      const {
        clientX: I,
        clientY: j
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      _ = Math.round(I - $.left), M = Math.round(j - $.top);
    }
    if (A)
      z = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const I = Math.max(Math.abs((m ? m.clientWidth : 0) - _), _) * 2 + 2, j = Math.max(Math.abs((m ? m.clientHeight : 0) - M), M) * 2 + 2;
      z = Math.sqrt(I ** 2 + j ** 2);
    }
    E != null && E.touches ? g.current === null && (g.current = () => {
      v({
        pulsate: R,
        rippleX: _,
        rippleY: M,
        rippleSize: z,
        cb: k
      });
    }, y.start(ch, () => {
      g.current && (g.current(), g.current = null);
    })) : v({
      pulsate: R,
      rippleX: _,
      rippleY: M,
      rippleSize: z,
      cb: k
    });
  }, [i, v, y]), O = b.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), w = b.useCallback((E, S) => {
    if (y.clear(), (E == null ? void 0 : E.type) === "touchend" && g.current) {
      g.current(), g.current = null, y.start(0, () => {
        w(E, S);
      });
      return;
    }
    g.current = null, p((k) => k.length > 0 ? k.slice(1) : k), f.current = S;
  }, [y]);
  return b.useImperativeHandle(n, () => ({
    pulsate: O,
    start: T,
    stop: w
  }), [O, T, w]), /* @__PURE__ */ x.jsx(fh, {
    className: ne(wt.root, a.root, s),
    ref: u,
    ...l,
    children: /* @__PURE__ */ x.jsx($a, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Wc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string
});
function gh(e) {
  return fe("MuiButtonBase", e);
}
const hh = me("MuiButtonBase", ["root", "disabled", "focusVisible"]), yh = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, s = be({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, gh, i);
  return n && o && (s.root += ` ${o}`), s;
}, bh = Z("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${hh.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), sn = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: p = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: h = !1,
    focusVisibleClassName: y,
    LinkComponent: g = "a",
    onBlur: u,
    onClick: v,
    onContextMenu: T,
    onDragLeave: O,
    onFocus: w,
    onFocusVisible: E,
    onKeyDown: S,
    onKeyUp: k,
    onMouseDown: R,
    onMouseLeave: A,
    onMouseUp: N,
    onTouchEnd: m,
    onTouchMove: $,
    onTouchStart: _,
    tabIndex: M = 0,
    TouchRippleProps: z,
    touchRippleRef: I,
    type: j,
    ...V
  } = o, U = b.useRef(null), F = sh(), P = nt(F.ref, I), [L, K] = b.useState(!1);
  p && L && K(!1), b.useImperativeHandle(i, () => ({
    focusVisible: () => {
      K(!0), U.current.focus();
    }
  }), []);
  const J = F.shouldMount && !d && !p;
  b.useEffect(() => {
    L && h && !d && F.pulsate();
  }, [d, h, L, F]);
  const Q = rn(F, "start", R, f), re = rn(F, "stop", T, f), B = rn(F, "stop", O, f), Y = rn(F, "stop", N, f), X = rn(F, "stop", (se) => {
    L && se.preventDefault(), A && A(se);
  }, f), le = rn(F, "start", _, f), q = rn(F, "stop", m, f), ie = rn(F, "stop", $, f), W = rn(F, "stop", (se) => {
    Do(se.target) || K(!1), u && u(se);
  }, !1), ae = dt((se) => {
    U.current || (U.current = se.currentTarget), Do(se.target) && (K(!0), E && E(se)), w && w(se);
  }), de = () => {
    const se = U.current;
    return c && c !== "button" && !(se.tagName === "A" && se.href);
  }, xe = dt((se) => {
    h && !se.repeat && L && se.key === " " && F.stop(se, () => {
      F.start(se);
    }), se.target === se.currentTarget && de() && se.key === " " && se.preventDefault(), S && S(se), se.target === se.currentTarget && de() && se.key === "Enter" && !p && (se.preventDefault(), v && v(se));
  }), Ve = dt((se) => {
    h && se.key === " " && L && !se.defaultPrevented && F.stop(se, () => {
      F.pulsate(se);
    }), k && k(se), v && se.target === se.currentTarget && de() && se.key === " " && !se.defaultPrevented && v(se);
  });
  let $e = c;
  $e === "button" && (V.href || V.to) && ($e = g);
  const ze = {};
  $e === "button" ? (ze.type = j === void 0 ? "button" : j, ze.disabled = p) : (!V.href && !V.to && (ze.role = "button"), p && (ze["aria-disabled"] = p));
  const We = nt(n, U), qe = {
    ...o,
    centerRipple: a,
    component: c,
    disabled: p,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: M,
    focusVisible: L
  }, ke = yh(qe);
  return /* @__PURE__ */ x.jsxs(bh, {
    as: $e,
    className: ne(ke.root, l),
    ownerState: qe,
    onBlur: W,
    onClick: v,
    onContextMenu: re,
    onFocus: ae,
    onKeyDown: xe,
    onKeyUp: Ve,
    onMouseDown: Q,
    onMouseLeave: X,
    onMouseUp: Y,
    onDragLeave: B,
    onTouchEnd: q,
    onTouchMove: ie,
    onTouchStart: le,
    ref: We,
    tabIndex: p ? -1 : M,
    type: j,
    ...ze,
    ...V,
    children: [s, J ? /* @__PURE__ */ x.jsx(Wc, {
      ref: P,
      center: a,
      ...z
    }) : null]
  });
});
function rn(e, t, n, o = !1) {
  return dt((i) => (n && n(i), o || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Zr,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Mc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: r.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  href: r.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: r.elementType,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onContextMenu: r.func,
  /**
   * @ignore
   */
  onDragLeave: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * @ignore
   */
  onMouseDown: r.func,
  /**
   * @ignore
   */
  onMouseLeave: r.func,
  /**
   * @ignore
   */
  onMouseUp: r.func,
  /**
   * @ignore
   */
  onTouchEnd: r.func,
  /**
   * @ignore
   */
  onTouchMove: r.func,
  /**
   * @ignore
   */
  onTouchStart: r.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: r.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: r.oneOfType([r.func, r.shape({
    current: r.shape({
      pulsate: r.func.isRequired,
      start: r.func.isRequired,
      stop: r.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string])
});
function vh(e) {
  return fe("MuiDivider", e);
}
const Xs = me("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), xh = (e) => {
  const {
    absolute: t,
    children: n,
    classes: o,
    flexItem: i,
    light: a,
    orientation: s,
    textAlign: l,
    variant: c
  } = e;
  return be({
    root: ["root", t && "absolute", c, a && "light", s === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && s === "vertical" && "withChildrenVertical", l === "right" && s !== "vertical" && "textAlignRight", l === "left" && s !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
  }, vh, o);
}, Th = Z("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(Se(({
  theme: e
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: !0
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: !0
    },
    style: {
      borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Be(e.palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: e.spacing(2),
      marginRight: e.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: !0
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.children && t.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(e.vars || e).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.orientation === "vertical" && t.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "right" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "left" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), Eh = Z("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(Se(({
  theme: e
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${e.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${e.spacing(1)} * 1.2)`
    }
  }]
}))), tr = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: i = !1,
    children: a,
    className: s,
    orientation: l = "horizontal",
    component: c = a || l === "vertical" ? "div" : "hr",
    flexItem: p = !1,
    light: d = !1,
    role: f = c !== "hr" ? "separator" : void 0,
    textAlign: h = "center",
    variant: y = "fullWidth",
    ...g
  } = o, u = {
    ...o,
    absolute: i,
    component: c,
    flexItem: p,
    light: d,
    orientation: l,
    role: f,
    textAlign: h,
    variant: y
  }, v = xh(u);
  return /* @__PURE__ */ x.jsx(Th, {
    as: c,
    className: ne(v.root, s),
    role: f,
    ref: n,
    ownerState: u,
    "aria-orientation": f === "separator" && (c !== "hr" || l === "vertical") ? l : void 0,
    ...g,
    children: a ? /* @__PURE__ */ x.jsx(Eh, {
      className: v.wrapper,
      ownerState: u,
      children: a
    }) : null
  });
});
tr && (tr.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: r.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  light: r.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: r.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: r.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: r.oneOfType([r.oneOf(["fullWidth", "inset", "middle"]), r.string])
});
function Sh(e) {
  return fe("MuiListItemIcon", e);
}
const Js = me("MuiListItemIcon", ["root", "alignItemsFlexStart"]), wh = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return be({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Sh, n);
}, Ch = Z("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(Se(({
  theme: e
}) => ({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
}))), Vc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: i,
    ...a
  } = o, s = b.useContext(zr), l = {
    ...o,
    alignItems: s.alignItems
  }, c = wh(l);
  return /* @__PURE__ */ x.jsx(Ch, {
    className: ne(c.root, i),
    ownerState: l,
    ref: n,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function Oh(e) {
  return typeof e.main == "string";
}
function Rh(e, t = []) {
  if (!Oh(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function ct(e = []) {
  return ([, t]) => t && Rh(t, e);
}
function Ph(e) {
  return fe("MuiTypography", e);
}
me("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const kh = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, $h = Zm(), Mh = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: i,
    variant: a,
    classes: s
  } = e, l = {
    root: ["root", a, e.align !== "inherit" && `align${H(t)}`, n && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return be(l, Ph, s);
}, Ih = Z("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${H(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Se(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([n, o]) => n !== "inherit" && o && typeof o == "object").map(([n, o]) => ({
      props: {
        variant: n
      },
      style: o
    })), ...Object.entries(e.palette).filter(ct()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${H(n)}`
      },
      style: {
        color: (e.vars || e).palette.text[n]
      }
    })), {
      props: ({
        ownerState: n
      }) => n.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), Qs = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, ui = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    color: o,
    ...i
  } = ge({
    props: t,
    name: "MuiTypography"
  }), a = !kh[o], s = $h({
    ...i,
    ...a && {
      color: o
    }
  }), {
    align: l = "inherit",
    className: c,
    component: p,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: h = !1,
    variant: y = "body1",
    variantMapping: g = Qs,
    ...u
  } = s, v = {
    ...s,
    align: l,
    color: o,
    className: c,
    component: p,
    gutterBottom: d,
    noWrap: f,
    paragraph: h,
    variant: y,
    variantMapping: g
  }, T = p || (h ? "p" : g[y] || Qs[y]) || "span", O = Mh(v);
  return /* @__PURE__ */ x.jsx(Ih, {
    as: T,
    ref: n,
    className: ne(O.root, c),
    ...u,
    ownerState: v,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...u.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: r.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: r.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: r.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: r.oneOfType([r.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), r.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: r.object
});
const Zs = me("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function jh(e) {
  return fe("MuiMenuItem", e);
}
const vr = me("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Nh = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Ah = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: i,
    selected: a,
    classes: s
  } = e, c = be({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", o && "divider", a && "selected"]
  }, jh, s);
  return {
    ...s,
    ...c
  };
}, Dh = Z(sn, {
  shouldForwardProp: (e) => ur(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Nh
})(Se(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${vr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Be(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${vr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Be(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${vr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Be(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Be(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${vr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${vr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Xs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Xs.inset}`]: {
    marginLeft: 52
  },
  [`& .${Zs.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Zs.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Js.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Js.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Uc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: p,
    role: d = "menuitem",
    tabIndex: f,
    className: h,
    ...y
  } = o, g = b.useContext(zr), u = b.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: c
  }), [g.dense, s, c]), v = b.useRef(null);
  an(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const T = {
    ...o,
    dense: u.dense,
    divider: l,
    disableGutters: c
  }, O = Ah(o), w = nt(v, n);
  let E;
  return o.disabled || (E = f !== void 0 ? f : -1), /* @__PURE__ */ x.jsx(zr.Provider, {
    value: u,
    children: /* @__PURE__ */ x.jsx(Dh, {
      ref: w,
      role: d,
      tabIndex: E,
      component: a,
      focusVisibleClassName: ne(O.focusVisible, p),
      className: ne(O.root, h),
      ...y,
      ownerState: T,
      classes: O
    })
  });
});
process.env.NODE_ENV !== "production" && (Uc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: r.bool,
  /**
   * @ignore
   */
  disabled: r.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  role: r.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number
});
function _h(e) {
  return fe("MuiCircularProgress", e);
}
me("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const dn = 44, Xi = Xr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ji = Xr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Bh = typeof Xi != "string" ? Sa`
        animation: ${Xi} 1.4s linear infinite;
      ` : null, Lh = typeof Ji != "string" ? Sa`
        animation: ${Ji} 1.4s ease-in-out infinite;
      ` : null, zh = (e) => {
  const {
    classes: t,
    variant: n,
    color: o,
    disableShrink: i
  } = e, a = {
    root: ["root", n, `color${H(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${H(n)}`, i && "circleDisableShrink"]
  };
  return be(a, _h, t);
}, Fh = Z("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${H(n.color)}`]];
  }
})(Se(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Bh || {
      animation: `${Xi} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Wh = Z("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Vh = Z("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${H(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Se(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Lh || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ji} 1.4s ease-in-out infinite`
    }
  }]
}))), ja = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: a = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: c,
    thickness: p = 3.6,
    value: d = 0,
    variant: f = "indeterminate",
    ...h
  } = o, y = {
    ...o,
    color: a,
    disableShrink: s,
    size: l,
    thickness: p,
    value: d,
    variant: f
  }, g = zh(y), u = {}, v = {}, T = {};
  if (f === "determinate") {
    const O = 2 * Math.PI * ((dn - p) / 2);
    u.strokeDasharray = O.toFixed(3), T["aria-valuenow"] = Math.round(d), u.strokeDashoffset = `${((100 - d) / 100 * O).toFixed(3)}px`, v.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ x.jsx(Fh, {
    className: ne(g.root, i),
    style: {
      width: l,
      height: l,
      ...v,
      ...c
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...T,
    ...h,
    children: /* @__PURE__ */ x.jsx(Wh, {
      className: g.svg,
      ownerState: y,
      viewBox: `${dn / 2} ${dn / 2} ${dn} ${dn}`,
      children: /* @__PURE__ */ x.jsx(Vh, {
        className: g.circle,
        style: u,
        ownerState: y,
        cx: dn,
        cy: dn,
        r: (dn - p) / 2,
        fill: "none",
        strokeWidth: p
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ja.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: cn(r.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: r.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: r.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: r.oneOf(["determinate", "indeterminate"])
});
function Uh(e) {
  return fe("MuiIconButton", e);
}
const el = me("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Hh = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: i,
    size: a,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", o !== "default" && `color${H(o)}`, i && `edge${H(i)}`, `size${H(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return be(l, Uh, t);
}, Gh = Z(sn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${H(n.color)}`], n.edge && t[`edge${H(n.edge)}`], t[`size${H(n.size)}`]];
  }
})(Se(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Se(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${el.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${el.loading}`]: {
    color: "transparent"
  }
}))), Yh = Z("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), lt = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: p = !1,
    size: d = "medium",
    id: f,
    loading: h = null,
    loadingIndicator: y,
    ...g
  } = o, u = oi(f), v = y ?? /* @__PURE__ */ x.jsx(ja, {
    "aria-labelledby": u,
    color: "inherit",
    size: 16
  }), T = {
    ...o,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: p,
    loading: h,
    loadingIndicator: v,
    size: d
  }, O = Hh(T);
  return /* @__PURE__ */ x.jsxs(Gh, {
    id: h ? u : f,
    className: ne(O.root, s),
    centerRipple: !0,
    focusRipple: !p,
    disabled: c || h,
    ref: n,
    ...g,
    ownerState: T,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ x.jsx("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ x.jsx(Yh, {
        className: O.loadingIndicator,
        ownerState: T,
        children: h && v
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (lt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: cn(r.node, (e) => b.Children.toArray(e.children).some((n) => /* @__PURE__ */ b.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: r.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: r.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: r.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const qh = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), "DeleteForever"), Kh = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "MoreVert"), Xh = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1q-.09-.03-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
}), "SettingsOutlined");
function Jh({
  widgetId: e
}) {
  const { removeWidget: t } = Ur(), [n, o] = b.useState(null), i = !!n, a = (c) => {
    c.stopPropagation(), o(c.currentTarget);
  }, s = () => {
    o(null);
  }, l = () => {
    var p;
    t(e);
    const c = document.querySelector(`[gs-id="${e}"]`);
    c && ((p = c.gridstackNode) != null && p.grid) && c.gridstackNode.grid.removeWidget(c, !0, !0), s();
  };
  return /* @__PURE__ */ x.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ x.jsxs("div", { className: "flex justify-end size-4", children: [
      /* @__PURE__ */ x.jsx(lt, { children: /* @__PURE__ */ x.jsx(Xh, {}) }),
      /* @__PURE__ */ x.jsx(
        lt,
        {
          onClick: a,
          size: "small",
          "aria-controls": i ? "widget-menu" : void 0,
          "aria-haspopup": "true",
          "aria-expanded": i ? "true" : void 0,
          children: /* @__PURE__ */ x.jsx(Kh, { sx: { width: 20, height: 20 } })
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx(
      zc,
      {
        anchorEl: n,
        open: i,
        onClose: s,
        onClick: (c) => c.stopPropagation(),
        slotProps: {
          paper: {
            sx: {
              mt: 1,
              minWidth: 120,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.15)"
            }
          }
        },
        transformOrigin: { horizontal: "right", vertical: "top" },
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
        children: /* @__PURE__ */ x.jsxs(Uc, { onClick: l, children: [
          /* @__PURE__ */ x.jsx(Vc, { children: /* @__PURE__ */ x.jsx(qh, { fontSize: "small" }) }),
          "Delete"
        ] })
      }
    )
  ] });
}
function Qh({ widgetId: e, children: t }) {
  const n = Or(null);
  return Co(() => {
    var l;
    const o = n.current;
    if (!o) return;
    const i = o.closest(".grid-stack-item");
    if (!i || !((l = i.gridstackNode) != null && l.grid)) return;
    const a = () => {
      var p, d;
      const c = i.querySelector(".grid-stack-item-content");
      c != null && c.firstElementChild && i.gridstackNode && i.gridstackNode.grid && ((d = (p = i.gridstackNode) == null ? void 0 : p.grid) == null || d.resizeToContent(i));
    }, s = new ResizeObserver(() => a());
    return s.observe(o), a(), () => s.disconnect();
  }, [e]), /* @__PURE__ */ x.jsx(
    "div",
    {
      ref: n,
      className: "gridstack-measured-container",
      style: { width: "100%" },
      children: t
    }
  );
}
function Zh(e) {
  let t = null, n = "", o = {};
  try {
    if (e.content) {
      const i = JSON.parse(e.content);
      n = i.name, o = i.props;
    }
  } catch (i) {
    t = i;
  }
  return { name: n, props: o, error: t };
}
function ey({
  id: e,
  meta: t,
  WidgetComponent: n,
  widgetContainer: o,
  showMenubar: i
}) {
  var c;
  const a = Zh(t), s = ((c = a.props) == null ? void 0 : c.title) || `Widget ${e.slice(0, 4)}`, l = /* @__PURE__ */ x.jsxs(Qh, { widgetId: e, children: [
    i && /* @__PURE__ */ x.jsxs("div", { className: "widget-header flex items-center justify-between bg-gray-100 border-b px-2 min-h-[36px]", children: [
      /* @__PURE__ */ x.jsx("div", { className: "font-medium truncate text-sm px-1", children: s }),
      /* @__PURE__ */ x.jsx(Jh, { widgetId: e })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "widget-body flex-1 min-h-[40px]", children: /* @__PURE__ */ x.jsx(n, { ...a.props }) })
  ] });
  return /* @__PURE__ */ x.jsx(jl.Provider, { value: { widget: { id: e } }, children: Wu(l, o) });
}
function ty(e) {
  let t = null, n = "", o = {};
  try {
    if (e.content) {
      const i = JSON.parse(e.content);
      n = i.name, o = i.props;
    }
  } catch (i) {
    t = i;
  }
  return { name: n, props: o, error: t };
}
function ny({
  componentMap: e,
  showMenubar: t = !1
}) {
  const { _rawWidgetMetaMap: n } = Ur(), { getWidgetContainer: o } = Gu();
  return /* @__PURE__ */ x.jsx(x.Fragment, { children: Array.from(n.value.entries()).map(([i, a]) => {
    const { name: s } = ty(a), l = e[s], c = o(i);
    return !l || !c ? null : /* @__PURE__ */ x.jsx(
      ey,
      {
        id: i,
        meta: a,
        WidgetComponent: l,
        widgetContainer: c,
        showMenubar: t
      },
      i
    );
  }) });
}
function ry({
  props: e,
  name: t
}) {
  return wa({
    props: e,
    name: t,
    defaultTheme: ai,
    themeId: cr
  });
}
const oy = me("MuiBox", ["root"]), iy = Ec(), kn = Sf({
  themeId: cr,
  defaultTheme: iy,
  defaultClassName: oy.root,
  generateClassName: sc.generate
});
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: r.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function ay(e, t, n) {
  const o = t.getBoundingClientRect(), i = n && n.getBoundingClientRect(), a = Nt(t);
  let s;
  if (t.fakeTransform)
    s = t.fakeTransform;
  else {
    const p = a.getComputedStyle(t);
    s = p.getPropertyValue("-webkit-transform") || p.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (s && s !== "none" && typeof s == "string") {
    const p = s.split("(")[1].split(")")[0].split(",");
    l = parseInt(p[4], 10), c = parseInt(p[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + l - o.left}px)` : `translateX(${a.innerWidth + l - o.left}px)` : e === "right" ? i ? `translateX(-${o.right - i.left - l}px)` : `translateX(-${o.left + o.width - l}px)` : e === "up" ? i ? `translateY(${i.bottom + c - o.top}px)` : `translateY(${a.innerHeight + c - o.top}px)` : i ? `translateY(-${o.top - i.top + o.height - c}px)` : `translateY(-${o.top + o.height - c}px)`;
}
function Hc(e) {
  return typeof e == "function" ? e() : e;
}
function co(e, t, n) {
  const o = Hc(n), i = ay(e, t, o);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const Gc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = $t(), i = {
    enter: o.transitions.easing.easeOut,
    exit: o.transitions.easing.sharp
  }, a = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: l = !0,
    children: c,
    container: p,
    direction: d = "down",
    easing: f = i,
    in: h,
    onEnter: y,
    onEntered: g,
    onEntering: u,
    onExit: v,
    onExited: T,
    onExiting: O,
    style: w,
    timeout: E = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = At,
    ...k
  } = t, R = b.useRef(null), A = nt(Dn(c), R, n), N = (U) => (F) => {
    U && (F === void 0 ? U(R.current) : U(R.current, F));
  }, m = N((U, F) => {
    co(d, U, p), Ma(U), y && y(U, F);
  }), $ = N((U, F) => {
    const P = Zn({
      timeout: E,
      style: w,
      easing: f
    }, {
      mode: "enter"
    });
    U.style.webkitTransition = o.transitions.create("-webkit-transform", {
      ...P
    }), U.style.transition = o.transitions.create("transform", {
      ...P
    }), U.style.webkitTransform = "none", U.style.transform = "none", u && u(U, F);
  }), _ = N(g), M = N(O), z = N((U) => {
    const F = Zn({
      timeout: E,
      style: w,
      easing: f
    }, {
      mode: "exit"
    });
    U.style.webkitTransition = o.transitions.create("-webkit-transform", F), U.style.transition = o.transitions.create("transform", F), co(d, U, p), v && v(U);
  }), I = N((U) => {
    U.style.webkitTransition = "", U.style.transition = "", T && T(U);
  }), j = (U) => {
    s && s(R.current, U);
  }, V = b.useCallback(() => {
    R.current && co(d, R.current, p);
  }, [d, p]);
  return b.useEffect(() => {
    if (h || d === "down" || d === "right")
      return;
    const U = si(() => {
      R.current && co(d, R.current, p);
    }), F = Nt(R.current);
    return F.addEventListener("resize", U), () => {
      U.clear(), F.removeEventListener("resize", U);
    };
  }, [d, h, p]), b.useEffect(() => {
    h || V();
  }, [h, V]), /* @__PURE__ */ x.jsx(S, {
    nodeRef: R,
    onEnter: m,
    onEntered: _,
    onEntering: $,
    onExit: z,
    onExited: I,
    onExiting: M,
    addEndListener: j,
    appear: l,
    in: h,
    timeout: E,
    ...k,
    children: (U, {
      ownerState: F,
      ...P
    }) => /* @__PURE__ */ b.cloneElement(c, {
      ref: A,
      style: {
        visibility: U === "exited" && !h ? "hidden" : void 0,
        ...w,
        ...c.props.style
      },
      ...P
    })
  });
});
process.env.NODE_ENV !== "production" && (Gc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: vn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: cn(r.oneOfType([Kt, r.func]), (e) => {
    if (e.open) {
      const t = Hc(e.container);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: r.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function sy(e) {
  return fe("MuiDrawer", e);
}
me("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Yc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, ly = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: o
  } = e, i = {
    root: ["root", `anchor${H(n)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${H(n)}`, o !== "temporary" && `paperAnchorDocked${H(n)}`]
  };
  return be(i, sy, t);
}, cy = Z(ci, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Yc
})(Se(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), uy = Z("div", {
  shouldForwardProp: ur,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Yc
})({
  flex: "0 0 auto"
}), py = Z(xn, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${H(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${H(n.anchor)}`]];
  }
})(Se(({
  theme: e
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "left" && t.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "top" && t.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "right" && t.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "bottom" && t.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(e.vars || e).palette.divider}`
    }
  }]
}))), qc = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function dy(e) {
  return ["left", "right"].includes(e);
}
function fy({
  direction: e
}, t) {
  return e === "rtl" && dy(t) ? qc[t] : t;
}
const Kc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiDrawer"
  }), i = $t(), a = ar(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: p,
    className: d,
    elevation: f = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: y,
      ...g
    } = {},
    onClose: u,
    open: v = !1,
    PaperProps: T = {},
    SlideProps: O,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w,
    transitionDuration: E = s,
    variant: S = "temporary",
    slots: k = {},
    slotProps: R = {},
    ...A
  } = o, N = b.useRef(!1);
  b.useEffect(() => {
    N.current = !0;
  }, []);
  const m = fy({
    direction: a ? "rtl" : "ltr"
  }, l), _ = {
    ...o,
    anchor: l,
    elevation: f,
    open: v,
    variant: S,
    ...A
  }, M = ly(_), z = {
    slots: {
      transition: w,
      ...k
    },
    slotProps: {
      paper: T,
      transition: O,
      ...R,
      backdrop: Pc(R.backdrop || {
        ...c,
        ...y
      }, {
        transitionDuration: E
      })
    }
  }, [I, j] = pe("root", {
    ref: n,
    elementType: cy,
    className: ne(M.root, M.modal, d),
    shouldForwardComponentProp: !0,
    ownerState: _,
    externalForwardedProps: {
      ...z,
      ...A,
      ...g
    },
    additionalProps: {
      open: v,
      onClose: u,
      hideBackdrop: h,
      slots: {
        backdrop: z.slots.backdrop
      },
      slotProps: {
        backdrop: z.slotProps.backdrop
      }
    }
  }), [V, U] = pe("paper", {
    elementType: py,
    shouldForwardComponentProp: !0,
    className: ne(M.paper, T.className),
    ownerState: _,
    externalForwardedProps: z,
    additionalProps: {
      elevation: S === "temporary" ? f : 0,
      square: !0
    }
  }), [F, P] = pe("docked", {
    elementType: uy,
    ref: n,
    className: ne(M.root, M.docked, d),
    ownerState: _,
    externalForwardedProps: z,
    additionalProps: A
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [L, K] = pe("transition", {
    elementType: Gc,
    ownerState: _,
    externalForwardedProps: z,
    additionalProps: {
      in: v,
      direction: qc[m],
      timeout: E,
      appear: N.current
    }
  }), J = /* @__PURE__ */ x.jsx(V, {
    ...U,
    children: p
  });
  if (S === "permanent")
    return /* @__PURE__ */ x.jsx(F, {
      ...P,
      children: J
    });
  const Q = /* @__PURE__ */ x.jsx(L, {
    ...K,
    children: J
  });
  return S === "persistent" ? /* @__PURE__ */ x.jsx(F, {
    ...P,
    children: Q
  }) : /* @__PURE__ */ x.jsx(I, {
    ...j,
    children: Q
  });
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: r.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: r.object,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Pa,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: r.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: r.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: r.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    docked: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    docked: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: r.oneOf(["permanent", "persistent", "temporary"])
});
function my(e) {
  return fe("MuiAppBar", e);
}
me("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const gy = (e) => {
  const {
    color: t,
    position: n,
    classes: o
  } = e, i = {
    root: ["root", `color${H(t)}`, `position${H(n)}`]
  };
  return be(i, my, o);
}, tl = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, hy = Z(xn, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${H(n.position)}`], t[`color${H(n.color)}`]];
  }
})(Se(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  // Prevent padding issue with the Modal and fixed positioned AppBar.
  flexShrink: 0,
  variants: [{
    props: {
      position: "fixed"
    },
    style: {
      position: "fixed",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute"
      }
    }
  }, {
    props: {
      position: "absolute"
    },
    style: {
      position: "absolute",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "sticky"
    },
    style: {
      position: "sticky",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "static"
    },
    style: {
      position: "static"
    }
  }, {
    props: {
      position: "relative"
    },
    style: {
      position: "relative"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      "--AppBar-color": "inherit"
    }
  }, {
    props: {
      color: "default"
    },
    style: {
      "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[100],
      "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[100]),
      ...e.applyStyles("dark", {
        "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[900],
        "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[900])
      })
    }
  }, ...Object.entries(e.palette).filter(ct(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--AppBar-background": (e.vars ?? e).palette[t].main,
      "--AppBar-color": (e.vars ?? e).palette[t].contrastText
    }
  })), {
    props: (t) => t.enableColorOnDark === !0 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)"
    }
  }, {
    props: (t) => t.enableColorOnDark === !1 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundColor: e.vars ? tl(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? tl(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
      })
    }
  }, {
    props: {
      color: "transparent"
    },
    style: {
      "--AppBar-background": "transparent",
      "--AppBar-color": "inherit",
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundImage: "none"
      })
    }
  }]
}))), Xc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiAppBar"
  }), {
    className: i,
    color: a = "primary",
    enableColorOnDark: s = !1,
    position: l = "fixed",
    ...c
  } = o, p = {
    ...o,
    color: a,
    position: l,
    enableColorOnDark: s
  }, d = gy(p);
  return /* @__PURE__ */ x.jsx(hy, {
    square: !0,
    component: "header",
    ownerState: p,
    elevation: 4,
    className: ne(d.root, i, l === "fixed" && "mui-fixed"),
    ref: n,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), r.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: r.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: r.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function yy(e) {
  return fe("MuiToolbar", e);
}
me("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const by = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: o
  } = e;
  return be({
    root: ["root", !n && "gutters", o]
  }, yy, t);
}, vy = Z("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(Se(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2),
      [e.breakpoints.up("sm")]: {
        paddingLeft: e.spacing(3),
        paddingRight: e.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: e.mixins.toolbar
  }]
}))), Jc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: a = "div",
    disableGutters: s = !1,
    variant: l = "regular",
    ...c
  } = o, p = {
    ...o,
    component: a,
    disableGutters: s,
    variant: l
  }, d = by(p);
  return /* @__PURE__ */ x.jsx(vy, {
    as: a,
    className: ne(d.root, i),
    ref: n,
    ownerState: p,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (Jc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: r.oneOfType([r.oneOf(["dense", "regular"]), r.string])
});
const Qi = typeof wc({}) == "function", xy = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), Ty = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Qc = (e, t = !1) => {
  var a, s;
  const n = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    var d, f;
    const p = e.getColorSchemeSelector(l);
    p.startsWith("@") ? n[p] = {
      ":root": {
        colorScheme: (d = c.palette) == null ? void 0 : d.mode
      }
    } : n[p.replace(/\s*&/, "")] = {
      colorScheme: (f = c.palette) == null ? void 0 : f.mode
    };
  });
  let o = {
    html: xy(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...Ty(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...n
  };
  const i = (s = (a = e.components) == null ? void 0 : a.MuiCssBaseline) == null ? void 0 : s.styleOverrides;
  return i && (o = [o, i]), o;
}, So = "mui-ecs", Ey = (e) => {
  const t = Qc(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${So})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([o, i]) => {
    var s, l;
    const a = e.getColorSchemeSelector(o);
    a.startsWith("@") ? n[a] = {
      [`:root:not(:has(.${So}))`]: {
        colorScheme: (s = i.palette) == null ? void 0 : s.mode
      }
    } : n[a.replace(/\s*&/, "")] = {
      [`&:not(:has(.${So}))`]: {
        colorScheme: (l = i.palette) == null ? void 0 : l.mode
      }
    };
  }), t;
}, Sy = wc(Qi ? ({
  theme: e,
  enableColorScheme: t
}) => Qc(e, t) : ({
  theme: e
}) => Ey(e));
function Zc(e) {
  const t = ge({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: o = !1
  } = t;
  return /* @__PURE__ */ x.jsxs(b.Fragment, {
    children: [Qi && /* @__PURE__ */ x.jsx(Sy, {
      enableColorScheme: o
    }), !Qi && !o && /* @__PURE__ */ x.jsx("span", {
      className: So,
      style: {
        display: "none"
      }
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: r.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: r.bool
});
const wy = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), Cy = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "ChevronLeft"), Oy = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight"), Ry = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), "Edit");
var ft = "top", Rt = "bottom", Pt = "right", mt = "left", Na = "auto", eo = [ft, Rt, Pt, mt], nr = "start", Wr = "end", Py = "clippingParents", eu = "viewport", xr = "popper", ky = "reference", nl = /* @__PURE__ */ eo.reduce(function(e, t) {
  return e.concat([t + "-" + nr, t + "-" + Wr]);
}, []), tu = /* @__PURE__ */ [].concat(eo, [Na]).reduce(function(e, t) {
  return e.concat([t, t + "-" + nr, t + "-" + Wr]);
}, []), $y = "beforeRead", My = "read", Iy = "afterRead", jy = "beforeMain", Ny = "main", Ay = "afterMain", Dy = "beforeWrite", _y = "write", By = "afterWrite", Ly = [$y, My, Iy, jy, Ny, Ay, Dy, _y, By];
function Xt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function An(e) {
  var t = vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ot(e) {
  var t = vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Aa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function zy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !Ot(a) || !Xt(a) || (Object.assign(a.style, o), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Fy(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var i = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = s.reduce(function(c, p) {
        return c[p] = "", c;
      }, {});
      !Ot(i) || !Xt(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Wy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: zy,
  effect: Fy,
  requires: ["computeStyles"]
};
function qt(e) {
  return e.split("-")[0];
}
var jn = Math.max, Bo = Math.min, rr = Math.round;
function Zi() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function nu() {
  return !/^((?!chrome|android).)*safari/i.test(Zi());
}
function or(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, a = 1;
  t && Ot(e) && (i = e.offsetWidth > 0 && rr(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && rr(o.height) / e.offsetHeight || 1);
  var s = An(e) ? vt(e) : window, l = s.visualViewport, c = !nu() && n, p = (o.left + (c && l ? l.offsetLeft : 0)) / i, d = (o.top + (c && l ? l.offsetTop : 0)) / a, f = o.width / i, h = o.height / a;
  return {
    width: f,
    height: h,
    top: d,
    right: p + f,
    bottom: d + h,
    left: p,
    x: p,
    y: d
  };
}
function Da(e) {
  var t = or(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function ru(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Aa(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function ln(e) {
  return vt(e).getComputedStyle(e);
}
function Vy(e) {
  return ["table", "td", "th"].indexOf(Xt(e)) >= 0;
}
function Tn(e) {
  return ((An(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function pi(e) {
  return Xt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Aa(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Tn(e)
  );
}
function rl(e) {
  return !Ot(e) || // https://github.com/popperjs/popper-core/issues/837
  ln(e).position === "fixed" ? null : e.offsetParent;
}
function Uy(e) {
  var t = /firefox/i.test(Zi()), n = /Trident/i.test(Zi());
  if (n && Ot(e)) {
    var o = ln(e);
    if (o.position === "fixed")
      return null;
  }
  var i = pi(e);
  for (Aa(i) && (i = i.host); Ot(i) && ["html", "body"].indexOf(Xt(i)) < 0; ) {
    var a = ln(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function to(e) {
  for (var t = vt(e), n = rl(e); n && Vy(n) && ln(n).position === "static"; )
    n = rl(n);
  return n && (Xt(n) === "html" || Xt(n) === "body" && ln(n).position === "static") ? t : n || Uy(e) || t;
}
function _a(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $r(e, t, n) {
  return jn(e, Bo(t, n));
}
function Hy(e, t, n) {
  var o = $r(e, t, n);
  return o > n ? n : o;
}
function ou() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function iu(e) {
  return Object.assign({}, ou(), e);
}
function au(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Gy = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, iu(typeof t != "number" ? t : au(t, eo));
};
function Yy(e) {
  var t, n = e.state, o = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = qt(n.placement), c = _a(l), p = [mt, Pt].indexOf(l) >= 0, d = p ? "height" : "width";
  if (!(!a || !s)) {
    var f = Gy(i.padding, n), h = Da(a), y = c === "y" ? ft : mt, g = c === "y" ? Rt : Pt, u = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], v = s[c] - n.rects.reference[c], T = to(a), O = T ? c === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, w = u / 2 - v / 2, E = f[y], S = O - h[d] - f[g], k = O / 2 - h[d] / 2 + w, R = $r(E, k, S), A = c;
    n.modifiersData[o] = (t = {}, t[A] = R, t.centerOffset = R - k, t);
  }
}
function qy(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || ru(t.elements.popper, i) && (t.elements.arrow = i));
}
const Ky = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Yy,
  effect: qy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ir(e) {
  return e.split("-")[1];
}
var Xy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jy(e, t) {
  var n = e.x, o = e.y, i = t.devicePixelRatio || 1;
  return {
    x: rr(n * i) / i || 0,
    y: rr(o * i) / i || 0
  };
}
function ol(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, p = e.adaptive, d = e.roundOffsets, f = e.isFixed, h = s.x, y = h === void 0 ? 0 : h, g = s.y, u = g === void 0 ? 0 : g, v = typeof d == "function" ? d({
    x: y,
    y: u
  }) : {
    x: y,
    y: u
  };
  y = v.x, u = v.y;
  var T = s.hasOwnProperty("x"), O = s.hasOwnProperty("y"), w = mt, E = ft, S = window;
  if (p) {
    var k = to(n), R = "clientHeight", A = "clientWidth";
    if (k === vt(n) && (k = Tn(n), ln(k).position !== "static" && l === "absolute" && (R = "scrollHeight", A = "scrollWidth")), k = k, i === ft || (i === mt || i === Pt) && a === Wr) {
      E = Rt;
      var N = f && k === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      u -= N - o.height, u *= c ? 1 : -1;
    }
    if (i === mt || (i === ft || i === Rt) && a === Wr) {
      w = Pt;
      var m = f && k === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[A]
      );
      y -= m - o.width, y *= c ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, p && Xy), _ = d === !0 ? Jy({
    x: y,
    y: u
  }, vt(n)) : {
    x: y,
    y: u
  };
  if (y = _.x, u = _.y, c) {
    var M;
    return Object.assign({}, $, (M = {}, M[E] = O ? "0" : "", M[w] = T ? "0" : "", M.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + u + "px)" : "translate3d(" + y + "px, " + u + "px, 0)", M));
  }
  return Object.assign({}, $, (t = {}, t[E] = O ? u + "px" : "", t[w] = T ? y + "px" : "", t.transform = "", t));
}
function Qy(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, p = {
    placement: qt(t.placement),
    variation: ir(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ol(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ol(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Zy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qy,
  data: {}
};
var uo = {
  passive: !0
};
function eb(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, a = i === void 0 ? !0 : i, s = o.resize, l = s === void 0 ? !0 : s, c = vt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && p.forEach(function(d) {
    d.addEventListener("scroll", n.update, uo);
  }), l && c.addEventListener("resize", n.update, uo), function() {
    a && p.forEach(function(d) {
      d.removeEventListener("scroll", n.update, uo);
    }), l && c.removeEventListener("resize", n.update, uo);
  };
}
const tb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: eb,
  data: {}
};
var nb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return nb[t];
  });
}
var rb = {
  start: "end",
  end: "start"
};
function il(e) {
  return e.replace(/start|end/g, function(t) {
    return rb[t];
  });
}
function Ba(e) {
  var t = vt(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function La(e) {
  return or(Tn(e)).left + Ba(e).scrollLeft;
}
function ob(e, t) {
  var n = vt(e), o = Tn(e), i = n.visualViewport, a = o.clientWidth, s = o.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var p = nu();
    (p || !p && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + La(e),
    y: c
  };
}
function ib(e) {
  var t, n = Tn(e), o = Ba(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = jn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = jn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -o.scrollLeft + La(e), c = -o.scrollTop;
  return ln(i || n).direction === "rtl" && (l += jn(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function za(e) {
  var t = ln(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function su(e) {
  return ["html", "body", "#document"].indexOf(Xt(e)) >= 0 ? e.ownerDocument.body : Ot(e) && za(e) ? e : su(pi(e));
}
function Mr(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = su(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = vt(o), s = i ? [a].concat(a.visualViewport || [], za(o) ? o : []) : o, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Mr(pi(s)))
  );
}
function ea(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ab(e, t) {
  var n = or(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function al(e, t, n) {
  return t === eu ? ea(ob(e, n)) : An(t) ? ab(t, n) : ea(ib(Tn(e)));
}
function sb(e) {
  var t = Mr(pi(e)), n = ["absolute", "fixed"].indexOf(ln(e).position) >= 0, o = n && Ot(e) ? to(e) : e;
  return An(o) ? t.filter(function(i) {
    return An(i) && ru(i, o) && Xt(i) !== "body";
  }) : [];
}
function lb(e, t, n, o) {
  var i = t === "clippingParents" ? sb(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, p) {
    var d = al(e, p, o);
    return c.top = jn(d.top, c.top), c.right = Bo(d.right, c.right), c.bottom = Bo(d.bottom, c.bottom), c.left = jn(d.left, c.left), c;
  }, al(e, s, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function lu(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? qt(o) : null, a = o ? ir(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case ft:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Rt:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Pt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case mt:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var p = i ? _a(i) : null;
  if (p != null) {
    var d = p === "y" ? "height" : "width";
    switch (a) {
      case nr:
        c[p] = c[p] - (t[d] / 2 - n[d] / 2);
        break;
      case Wr:
        c[p] = c[p] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Vr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? Py : l, p = n.rootBoundary, d = p === void 0 ? eu : p, f = n.elementContext, h = f === void 0 ? xr : f, y = n.altBoundary, g = y === void 0 ? !1 : y, u = n.padding, v = u === void 0 ? 0 : u, T = iu(typeof v != "number" ? v : au(v, eo)), O = h === xr ? ky : xr, w = e.rects.popper, E = e.elements[g ? O : h], S = lb(An(E) ? E : E.contextElement || Tn(e.elements.popper), c, d, s), k = or(e.elements.reference), R = lu({
    reference: k,
    element: w,
    strategy: "absolute",
    placement: i
  }), A = ea(Object.assign({}, w, R)), N = h === xr ? A : k, m = {
    top: S.top - N.top + T.top,
    bottom: N.bottom - S.bottom + T.bottom,
    left: S.left - N.left + T.left,
    right: N.right - S.right + T.right
  }, $ = e.modifiersData.offset;
  if (h === xr && $) {
    var _ = $[i];
    Object.keys(m).forEach(function(M) {
      var z = [Pt, Rt].indexOf(M) >= 0 ? 1 : -1, I = [ft, Rt].indexOf(M) >= 0 ? "y" : "x";
      m[M] += _[I] * z;
    });
  }
  return m;
}
function cb(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, p = c === void 0 ? tu : c, d = ir(o), f = d ? l ? nl : nl.filter(function(g) {
    return ir(g) === d;
  }) : eo, h = f.filter(function(g) {
    return p.indexOf(g) >= 0;
  });
  h.length === 0 && (h = f);
  var y = h.reduce(function(g, u) {
    return g[u] = Vr(e, {
      placement: u,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[qt(u)], g;
  }, {});
  return Object.keys(y).sort(function(g, u) {
    return y[g] - y[u];
  });
}
function ub(e) {
  if (qt(e) === Na)
    return [];
  var t = wo(e);
  return [il(e), t, il(t)];
}
function pb(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, p = n.padding, d = n.boundary, f = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, u = n.allowedAutoPlacements, v = t.options.placement, T = qt(v), O = T === v, w = c || (O || !g ? [wo(v)] : ub(v)), E = [v].concat(w).reduce(function(Q, re) {
      return Q.concat(qt(re) === Na ? cb(t, {
        placement: re,
        boundary: d,
        rootBoundary: f,
        padding: p,
        flipVariations: g,
        allowedAutoPlacements: u
      }) : re);
    }, []), S = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), A = !0, N = E[0], m = 0; m < E.length; m++) {
      var $ = E[m], _ = qt($), M = ir($) === nr, z = [ft, Rt].indexOf(_) >= 0, I = z ? "width" : "height", j = Vr(t, {
        placement: $,
        boundary: d,
        rootBoundary: f,
        altBoundary: h,
        padding: p
      }), V = z ? M ? Pt : mt : M ? Rt : ft;
      S[I] > k[I] && (V = wo(V));
      var U = wo(V), F = [];
      if (a && F.push(j[_] <= 0), l && F.push(j[V] <= 0, j[U] <= 0), F.every(function(Q) {
        return Q;
      })) {
        N = $, A = !1;
        break;
      }
      R.set($, F);
    }
    if (A)
      for (var P = g ? 3 : 1, L = function(re) {
        var B = E.find(function(Y) {
          var X = R.get(Y);
          if (X)
            return X.slice(0, re).every(function(le) {
              return le;
            });
        });
        if (B)
          return N = B, "break";
      }, K = P; K > 0; K--) {
        var J = L(K);
        if (J === "break") break;
      }
    t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const db = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pb,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function sl(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function ll(e) {
  return [ft, Pt, Rt, mt].some(function(t) {
    return e[t] >= 0;
  });
}
function fb(e) {
  var t = e.state, n = e.name, o = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = Vr(t, {
    elementContext: "reference"
  }), l = Vr(t, {
    altBoundary: !0
  }), c = sl(s, o), p = sl(l, i, a), d = ll(c), f = ll(p);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: p,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const mb = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: fb
};
function gb(e, t, n) {
  var o = qt(e), i = [mt, ft].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [mt, Pt].indexOf(o) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function hb(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = tu.reduce(function(d, f) {
    return d[f] = gb(f, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, p = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = s;
}
const yb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: hb
};
function bb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = lu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const vb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bb,
  data: {}
};
function xb(e) {
  return e === "x" ? "y" : "x";
}
function Tb(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, p = n.rootBoundary, d = n.altBoundary, f = n.padding, h = n.tether, y = h === void 0 ? !0 : h, g = n.tetherOffset, u = g === void 0 ? 0 : g, v = Vr(t, {
    boundary: c,
    rootBoundary: p,
    padding: f,
    altBoundary: d
  }), T = qt(t.placement), O = ir(t.placement), w = !O, E = _a(T), S = xb(E), k = t.modifiersData.popperOffsets, R = t.rects.reference, A = t.rects.popper, N = typeof u == "function" ? u(Object.assign({}, t.rects, {
    placement: t.placement
  })) : u, m = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _ = {
    x: 0,
    y: 0
  };
  if (k) {
    if (a) {
      var M, z = E === "y" ? ft : mt, I = E === "y" ? Rt : Pt, j = E === "y" ? "height" : "width", V = k[E], U = V + v[z], F = V - v[I], P = y ? -A[j] / 2 : 0, L = O === nr ? R[j] : A[j], K = O === nr ? -A[j] : -R[j], J = t.elements.arrow, Q = y && J ? Da(J) : {
        width: 0,
        height: 0
      }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ou(), B = re[z], Y = re[I], X = $r(0, R[j], Q[j]), le = w ? R[j] / 2 - P - X - B - m.mainAxis : L - X - B - m.mainAxis, q = w ? -R[j] / 2 + P + X + Y + m.mainAxis : K + X + Y + m.mainAxis, ie = t.elements.arrow && to(t.elements.arrow), W = ie ? E === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, ae = (M = $ == null ? void 0 : $[E]) != null ? M : 0, de = V + le - ae - W, xe = V + q - ae, Ve = $r(y ? Bo(U, de) : U, V, y ? jn(F, xe) : F);
      k[E] = Ve, _[E] = Ve - V;
    }
    if (l) {
      var $e, ze = E === "x" ? ft : mt, We = E === "x" ? Rt : Pt, qe = k[S], ke = S === "y" ? "height" : "width", se = qe + v[ze], Dt = qe - v[We], _t = [ft, mt].indexOf(T) !== -1, Jt = ($e = $ == null ? void 0 : $[S]) != null ? $e : 0, Qt = _t ? se : qe - R[ke] - A[ke] - Jt + m.altAxis, ut = _t ? qe + R[ke] + A[ke] - Jt - m.altAxis : Dt, Mt = y && _t ? Hy(Qt, qe, ut) : $r(y ? Qt : se, qe, y ? ut : Dt);
      k[S] = Mt, _[S] = Mt - qe;
    }
    t.modifiersData[o] = _;
  }
}
const Eb = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Tb,
  requiresIfExists: ["offset"]
};
function Sb(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wb(e) {
  return e === vt(e) || !Ot(e) ? Ba(e) : Sb(e);
}
function Cb(e) {
  var t = e.getBoundingClientRect(), n = rr(t.width) / e.offsetWidth || 1, o = rr(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Ob(e, t, n) {
  n === void 0 && (n = !1);
  var o = Ot(t), i = Ot(t) && Cb(t), a = Tn(t), s = or(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((Xt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  za(a)) && (l = wb(t)), Ot(t) ? (c = or(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = La(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Rb(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), o;
}
function Pb(e) {
  var t = Rb(e);
  return Ly.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function kb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function $b(e) {
  var t = e.reduce(function(n, o) {
    var i = n[o.name];
    return n[o.name] = i ? Object.assign({}, i, o, {
      options: Object.assign({}, i.options, o.options),
      data: Object.assign({}, i.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var cl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ul() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Mb(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? cl : i;
  return function(l, c, p) {
    p === void 0 && (p = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cl, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], h = !1, y = {
      state: d,
      setOptions: function(T) {
        var O = typeof T == "function" ? T(d.options) : T;
        u(), d.options = Object.assign({}, a, d.options, O), d.scrollParents = {
          reference: An(l) ? Mr(l) : l.contextElement ? Mr(l.contextElement) : [],
          popper: Mr(c)
        };
        var w = Pb($b([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(E) {
          return E.enabled;
        }), g(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var T = d.elements, O = T.reference, w = T.popper;
          if (ul(O, w)) {
            d.rects = {
              reference: Ob(O, to(w), d.options.strategy === "fixed"),
              popper: Da(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(m) {
              return d.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var S = d.orderedModifiers[E], k = S.fn, R = S.options, A = R === void 0 ? {} : R, N = S.name;
              typeof k == "function" && (d = k({
                state: d,
                options: A,
                name: N,
                instance: y
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: kb(function() {
        return new Promise(function(v) {
          y.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        u(), h = !0;
      }
    };
    if (!ul(l, c))
      return y;
    y.setOptions(p).then(function(v) {
      !h && p.onFirstUpdate && p.onFirstUpdate(v);
    });
    function g() {
      d.orderedModifiers.forEach(function(v) {
        var T = v.name, O = v.options, w = O === void 0 ? {} : O, E = v.effect;
        if (typeof E == "function") {
          var S = E({
            state: d,
            name: T,
            instance: y,
            options: w
          }), k = function() {
          };
          f.push(S || k);
        }
      });
    }
    function u() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return y;
  };
}
var Ib = [tb, vb, Zy, Wy, yb, db, Eb, Ky, mb], jb = /* @__PURE__ */ Mb({
  defaultModifiers: Ib
});
function Nb(e) {
  return fe("MuiPopper", e);
}
me("MuiPopper", ["root"]);
function Ab(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Lo(e) {
  return typeof e == "function" ? e() : e;
}
function di(e) {
  return e.nodeType !== void 0;
}
function Db(e) {
  return !di(e);
}
const _b = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"]
  }, Nb, t);
}, Bb = {}, Lb = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: p,
    popperOptions: d,
    popperRef: f,
    slotProps: h = {},
    slots: y = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: u,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = t, T = b.useRef(null), O = nt(T, n), w = b.useRef(null), E = nt(w, f), S = b.useRef(E);
  an(() => {
    S.current = E;
  }, [E]), b.useImperativeHandle(f, () => w.current, []);
  const k = Ab(p, a), [R, A] = b.useState(k), [N, m] = b.useState(Lo(o));
  b.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), b.useEffect(() => {
    o && m(Lo(o));
  }, [o]), an(() => {
    if (!N || !c)
      return;
    const I = (U) => {
      A(U.placement);
    };
    if (process.env.NODE_ENV !== "production" && N && di(N) && N.nodeType === 1) {
      const U = N.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && U.top === 0 && U.left === 0 && U.right === 0 && U.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let j = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: U
      }) => {
        I(U);
      }
    }];
    l != null && (j = j.concat(l)), d && d.modifiers != null && (j = j.concat(d.modifiers));
    const V = jb(N, T.current, {
      placement: k,
      ...d,
      modifiers: j
    });
    return S.current(V), () => {
      V.destroy(), S.current(null);
    };
  }, [N, s, l, c, d, k]);
  const $ = {
    placement: R
  };
  g !== null && ($.TransitionProps = g);
  const _ = _b(t), M = y.root ?? "div", z = Jn({
    elementType: M,
    externalSlotProps: h.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: O
    },
    ownerState: t,
    className: _.root
  });
  return /* @__PURE__ */ x.jsx(M, {
    ...z,
    children: typeof i == "function" ? i($) : i
  });
}), cu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: p,
    open: d,
    placement: f = "bottom",
    popperOptions: h = Bb,
    popperRef: y,
    style: g,
    transition: u = !1,
    slotProps: v = {},
    slots: T = {},
    ...O
  } = t, [w, E] = b.useState(!0), S = () => {
    E(!1);
  }, k = () => {
    E(!0);
  };
  if (!c && !d && (!u || w))
    return null;
  let R;
  if (a)
    R = a;
  else if (o) {
    const m = Lo(o);
    R = m && di(m) ? at(m).body : at(null).body;
  }
  const A = !d && c && (!u || w) ? "none" : void 0, N = u ? {
    in: d,
    onEnter: S,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ x.jsx(Fr, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ x.jsx(Lb, {
      anchorEl: o,
      direction: s,
      disablePortal: l,
      modifiers: p,
      ref: n,
      open: u ? !w : d,
      placement: f,
      popperOptions: h,
      popperRef: y,
      slotProps: v,
      slots: T,
      ...O,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: A,
        ...g
      },
      TransitionProps: N,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (cu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: cn(r.oneOfType([Kt, r.object, r.func]), (e) => {
    if (e.open) {
      const t = Lo(e.anchorEl);
      if (t && di(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Db(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Kt, r.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: r.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Zr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
const zb = Z(cu, {
  name: "MuiPopper",
  slot: "Root"
})({}), Fa = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ar(), i = ge({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: p,
    disablePortal: d,
    keepMounted: f,
    modifiers: h,
    open: y,
    placement: g,
    popperOptions: u,
    popperRef: v,
    transition: T,
    slots: O,
    slotProps: w,
    ...E
  } = i, S = (O == null ? void 0 : O.root) ?? (l == null ? void 0 : l.Root), k = {
    anchorEl: a,
    container: p,
    disablePortal: d,
    keepMounted: f,
    modifiers: h,
    open: y,
    placement: g,
    popperOptions: u,
    popperRef: v,
    transition: T,
    ...E
  };
  return /* @__PURE__ */ x.jsx(zb, {
    as: s,
    direction: o ? "rtl" : "ltr",
    slots: {
      root: S
    },
    slotProps: w ?? c,
    ...k,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Fa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: r.oneOfType([Kt, r.object, r.func]),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Kt, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Zr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
function Fb(e) {
  return fe("MuiTooltip", e);
}
const Ye = me("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Wb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Vb = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: o,
    touch: i,
    placement: a
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", o && "popperArrow"],
    tooltip: ["tooltip", o && "tooltipArrow", i && "touch", `tooltipPlacement${H(a.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return be(s, Fb, t);
}, Ub = Z(Fa, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Se(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${Ye.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Ye.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Ye.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Ye.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ye.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ye.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ye.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ye.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Hb = Z("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${H(n.placement.split("-")[0])}`]];
  }
})(Se(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Be(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Ye.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Ye.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${Wb(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Gb = Z("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(Se(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Be(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let po = !1;
const pl = new li();
let Tr = {
  x: 0,
  y: 0
};
function fo(e, t) {
  return (n, ...o) => {
    t && t(n, ...o), e(n, ...o);
  };
}
const mn = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: a,
    classes: s,
    components: l = {},
    componentsProps: c = {},
    describeChild: p = !1,
    disableFocusListener: d = !1,
    disableHoverListener: f = !1,
    disableInteractive: h = !1,
    disableTouchListener: y = !1,
    enterDelay: g = 100,
    enterNextDelay: u = 0,
    enterTouchDelay: v = 700,
    followCursor: T = !1,
    id: O,
    leaveDelay: w = 0,
    leaveTouchDelay: E = 1500,
    onClose: S,
    onOpen: k,
    open: R,
    placement: A = "bottom",
    PopperComponent: N,
    PopperProps: m = {},
    slotProps: $ = {},
    slots: _ = {},
    title: M,
    TransitionComponent: z,
    TransitionProps: I,
    ...j
  } = o, V = /* @__PURE__ */ b.isValidElement(a) ? a : /* @__PURE__ */ x.jsx("span", {
    children: a
  }), U = $t(), F = ar(), [P, L] = b.useState(), [K, J] = b.useState(null), Q = b.useRef(!1), re = h || T, B = Mn(), Y = Mn(), X = Mn(), le = Mn(), [q, ie] = sg({
    controlled: R,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let W = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ce
    } = b.useRef(R !== void 0);
    b.useEffect(() => {
      P && P.disabled && !ce && M !== "" && P.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [M, P, ce]);
  }
  const ae = oi(O), de = b.useRef(), xe = dt(() => {
    de.current !== void 0 && (document.body.style.WebkitUserSelect = de.current, de.current = void 0), le.clear();
  });
  b.useEffect(() => xe, [xe]);
  const Ve = (ce) => {
    pl.clear(), po = !0, ie(!0), k && !W && k(ce);
  }, $e = dt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ce) => {
      pl.start(800 + w, () => {
        po = !1;
      }), ie(!1), S && W && S(ce), B.start(U.transitions.duration.shortest, () => {
        Q.current = !1;
      });
    }
  ), ze = (ce) => {
    Q.current && ce.type !== "touchstart" || (P && P.removeAttribute("title"), Y.clear(), X.clear(), g || po && u ? Y.start(po ? u : g, () => {
      Ve(ce);
    }) : Ve(ce));
  }, We = (ce) => {
    Y.clear(), X.start(w, () => {
      $e(ce);
    });
  }, [, qe] = b.useState(!1), ke = (ce) => {
    Do(ce.target) || (qe(!1), We(ce));
  }, se = (ce) => {
    P || L(ce.currentTarget), Do(ce.target) && (qe(!0), ze(ce));
  }, Dt = (ce) => {
    Q.current = !0;
    const ot = V.props;
    ot.onTouchStart && ot.onTouchStart(ce);
  }, _t = (ce) => {
    Dt(ce), X.clear(), B.clear(), xe(), de.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", le.start(v, () => {
      document.body.style.WebkitUserSelect = de.current, ze(ce);
    });
  }, Jt = (ce) => {
    V.props.onTouchEnd && V.props.onTouchEnd(ce), xe(), X.start(E, () => {
      $e(ce);
    });
  };
  b.useEffect(() => {
    if (!W)
      return;
    function ce(ot) {
      ot.key === "Escape" && $e(ot);
    }
    return document.addEventListener("keydown", ce), () => {
      document.removeEventListener("keydown", ce);
    };
  }, [$e, W]);
  const Qt = nt(Dn(V), L, n);
  !M && M !== 0 && (W = !1);
  const ut = b.useRef(), Mt = (ce) => {
    const ot = V.props;
    ot.onMouseMove && ot.onMouseMove(ce), Tr = {
      x: ce.clientX,
      y: ce.clientY
    }, ut.current && ut.current.update();
  }, Bt = {}, un = typeof M == "string";
  p ? (Bt.title = !W && un && !f ? M : null, Bt["aria-describedby"] = W ? ae : null) : (Bt["aria-label"] = un ? M : null, Bt["aria-labelledby"] = W && !un ? ae : null);
  const Ze = {
    ...Bt,
    ...j,
    ...V.props,
    className: ne(j.className, V.props.className),
    onTouchStart: Dt,
    ref: Qt,
    ...T ? {
      onMouseMove: Mt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Ze["data-mui-internal-clone-element"] = !0, b.useEffect(() => {
    P && !P.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [P]));
  const Lt = {};
  y || (Ze.onTouchStart = _t, Ze.onTouchEnd = Jt), f || (Ze.onMouseOver = fo(ze, Ze.onMouseOver), Ze.onMouseLeave = fo(We, Ze.onMouseLeave), re || (Lt.onMouseOver = ze, Lt.onMouseLeave = We)), d || (Ze.onFocus = fo(se, Ze.onFocus), Ze.onBlur = fo(ke, Ze.onBlur), re || (Lt.onFocus = se, Lt.onBlur = ke)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const It = {
    ...o,
    isRtl: F,
    arrow: i,
    disableInteractive: re,
    placement: A,
    PopperComponentProp: N,
    touch: Q.current
  }, rt = typeof $.popper == "function" ? $.popper(It) : $.popper, pn = b.useMemo(() => {
    var ot, ee;
    let ce = [{
      name: "arrow",
      enabled: !!K,
      options: {
        element: K,
        padding: 4
      }
    }];
    return (ot = m.popperOptions) != null && ot.modifiers && (ce = ce.concat(m.popperOptions.modifiers)), (ee = rt == null ? void 0 : rt.popperOptions) != null && ee.modifiers && (ce = ce.concat(rt.popperOptions.modifiers)), {
      ...m.popperOptions,
      ...rt == null ? void 0 : rt.popperOptions,
      modifiers: ce
    };
  }, [K, m.popperOptions, rt == null ? void 0 : rt.popperOptions]), En = Vb(It), pr = typeof $.transition == "function" ? $.transition(It) : $.transition, Zt = {
    slots: {
      popper: l.Popper,
      transition: l.Transition ?? z,
      tooltip: l.Tooltip,
      arrow: l.Arrow,
      ..._
    },
    slotProps: {
      arrow: $.arrow ?? c.arrow,
      popper: {
        ...m,
        ...rt ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: $.tooltip ?? c.tooltip,
      transition: {
        ...I,
        ...pr ?? c.transition
      }
    }
  }, [zt, _n] = pe("popper", {
    elementType: Ub,
    externalForwardedProps: Zt,
    ownerState: It,
    className: ne(En.popper, m == null ? void 0 : m.className)
  }), [Ft, en] = pe("transition", {
    elementType: er,
    externalForwardedProps: Zt,
    ownerState: It
  }), [Sn, Bn] = pe("tooltip", {
    elementType: Hb,
    className: En.tooltip,
    externalForwardedProps: Zt,
    ownerState: It
  }), [dr, Ln] = pe("arrow", {
    elementType: Gb,
    className: En.arrow,
    externalForwardedProps: Zt,
    ownerState: It,
    ref: J
  });
  return /* @__PURE__ */ x.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ b.cloneElement(V, Ze), /* @__PURE__ */ x.jsx(zt, {
      as: N ?? Fa,
      placement: A,
      anchorEl: T ? {
        getBoundingClientRect: () => ({
          top: Tr.y,
          left: Tr.x,
          right: Tr.x,
          bottom: Tr.y,
          width: 0,
          height: 0
        })
      } : P,
      popperRef: ut,
      open: P ? W : !1,
      id: ae,
      transition: !0,
      ...Lt,
      ..._n,
      popperOptions: pn,
      children: ({
        TransitionProps: ce
      }) => /* @__PURE__ */ x.jsx(Ft, {
        timeout: U.transitions.duration.shorter,
        ...ce,
        ...en,
        children: /* @__PURE__ */ x.jsxs(Sn, {
          ...Bn,
          children: [M, i ? /* @__PURE__ */ x.jsx(dr, {
            ...Ln
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: r.bool,
  /**
   * Tooltip reference element.
   */
  children: vn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Arrow: r.elementType,
    Popper: r.elementType,
    Tooltip: r.elementType,
    Transition: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    arrow: r.object,
    popper: r.object,
    tooltip: r.object,
    transition: r.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: r.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: r.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: r.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: r.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: r.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: r.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: r.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: r.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: r.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: r.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: r.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: r.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: r.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    arrow: r.oneOfType([r.func, r.object]),
    popper: r.oneOfType([r.func, r.object]),
    tooltip: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    arrow: r.elementType,
    popper: r.elementType,
    tooltip: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: r.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: r.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object
});
function Yb(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: o,
    open: i,
    resumeHideDuration: a
  } = e, s = Mn();
  b.useEffect(() => {
    if (!i)
      return;
    function T(O) {
      O.defaultPrevented || O.key === "Escape" && (o == null || o(O, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", T), () => {
      document.removeEventListener("keydown", T);
    };
  }, [i, o]);
  const l = dt((T, O) => {
    o == null || o(T, O);
  }), c = dt((T) => {
    !o || T == null || s.start(T, () => {
      l(null, "timeout");
    });
  });
  b.useEffect(() => (i && c(t), s.clear), [i, t, c, s]);
  const p = (T) => {
    o == null || o(T, "clickaway");
  }, d = s.clear, f = b.useCallback(() => {
    t != null && c(a ?? t * 0.5);
  }, [t, a, c]), h = (T) => (O) => {
    const w = T.onBlur;
    w == null || w(O), f();
  }, y = (T) => (O) => {
    const w = T.onFocus;
    w == null || w(O), d();
  }, g = (T) => (O) => {
    const w = T.onMouseEnter;
    w == null || w(O), d();
  }, u = (T) => (O) => {
    const w = T.onMouseLeave;
    w == null || w(O), f();
  };
  return b.useEffect(() => {
    if (!n && i)
      return window.addEventListener("focus", f), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", f), window.removeEventListener("blur", d);
      };
  }, [n, i, f, d]), {
    getRootProps: (T = {}) => {
      const O = {
        ...Oo(e),
        ...Oo(T)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...T,
        ...O,
        onBlur: h(O),
        onFocus: y(O),
        onMouseEnter: g(O),
        onMouseLeave: u(O)
      };
    },
    onClickAway: p
  };
}
function dl(e) {
  return e.substring(2).toLowerCase();
}
function qb(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function zo(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: o = "onClick",
    onClickAway: i,
    touchEvent: a = "onTouchEnd"
  } = e, s = b.useRef(!1), l = b.useRef(null), c = b.useRef(!1), p = b.useRef(!1);
  b.useEffect(() => (setTimeout(() => {
    c.current = !0;
  }, 0), () => {
    c.current = !1;
  }), []);
  const d = nt(Dn(t), l), f = dt((g) => {
    const u = p.current;
    p.current = !1;
    const v = at(l.current);
    if (!c.current || !l.current || "clientX" in g && qb(g, v))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let T;
    g.composedPath ? T = g.composedPath().includes(l.current) : T = !v.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ) || l.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ), !T && (n || !u) && i(g);
  }), h = (g) => (u) => {
    p.current = !0;
    const v = t.props[g];
    v && v(u);
  }, y = {
    ref: d
  };
  return a !== !1 && (y[a] = h(a)), b.useEffect(() => {
    if (a !== !1) {
      const g = dl(a), u = at(l.current), v = () => {
        s.current = !0;
      };
      return u.addEventListener(g, f), u.addEventListener("touchmove", v), () => {
        u.removeEventListener(g, f), u.removeEventListener("touchmove", v);
      };
    }
  }, [f, a]), o !== !1 && (y[o] = h(o)), b.useEffect(() => {
    if (o !== !1) {
      const g = dl(o), u = at(l.current);
      return u.addEventListener(g, f), () => {
        u.removeEventListener(g, f);
      };
    }
  }, [f, o]), /* @__PURE__ */ b.cloneElement(t, y);
}
process.env.NODE_ENV !== "production" && (zo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: vn.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: r.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: r.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", !1]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: r.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: r.oneOf(["onTouchEnd", "onTouchStart", !1])
});
process.env.NODE_ENV !== "production" && (zo.propTypes = Oa(zo.propTypes));
function Kb(e) {
  return fe("MuiSnackbarContent", e);
}
me("MuiSnackbarContent", ["root", "message", "action"]);
const Xb = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, Kb, t);
}, Jb = Z(xn, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(Se(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Wi(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Wi(e.palette.background.default, t),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
})), Qb = Z("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), Zb = Z("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), uu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: i,
    className: a,
    message: s,
    role: l = "alert",
    ...c
  } = o, p = o, d = Xb(p);
  return /* @__PURE__ */ x.jsxs(Jb, {
    role: l,
    elevation: 6,
    className: ne(d.root, a),
    ownerState: p,
    ref: n,
    ...c,
    children: [/* @__PURE__ */ x.jsx(Qb, {
      className: d.message,
      ownerState: p,
      children: s
    }), i ? /* @__PURE__ */ x.jsx(Zb, {
      className: d.action,
      ownerState: p,
      children: i
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (uu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The message to display.
   */
  message: r.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function ev(e) {
  return fe("MuiSnackbar", e);
}
me("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const tv = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, o = {
    root: ["root", `anchorOrigin${H(n.vertical)}${H(n.horizontal)}`]
  };
  return be(o, ev, t);
}, nv = Z("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${H(n.anchorOrigin.vertical)}${H(n.anchorOrigin.horizontal)}`]];
  }
})(Se(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.snackbar,
  position: "fixed",
  display: "flex",
  left: 8,
  right: 8,
  justifyContent: "center",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top",
    style: {
      top: 8,
      [e.breakpoints.up("sm")]: {
        top: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical !== "top",
    style: {
      bottom: 8,
      [e.breakpoints.up("sm")]: {
        bottom: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "left",
    style: {
      justifyContent: "flex-start",
      [e.breakpoints.up("sm")]: {
        left: 24,
        right: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "right",
    style: {
      justifyContent: "flex-end",
      [e.breakpoints.up("sm")]: {
        right: 24,
        left: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "center",
    style: {
      [e.breakpoints.up("sm")]: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)"
      }
    }
  }]
}))), pu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiSnackbar"
  }), i = $t(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    action: s,
    anchorOrigin: {
      vertical: l,
      horizontal: c
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: p = null,
    children: d,
    className: f,
    ClickAwayListenerProps: h,
    ContentProps: y,
    disableWindowBlurListener: g = !1,
    message: u,
    onBlur: v,
    onClose: T,
    onFocus: O,
    onMouseEnter: w,
    onMouseLeave: E,
    open: S,
    resumeHideDuration: k,
    slots: R = {},
    slotProps: A = {},
    TransitionComponent: N,
    transitionDuration: m = a,
    TransitionProps: {
      onEnter: $,
      onExited: _,
      ...M
    } = {},
    ...z
  } = o, I = {
    ...o,
    anchorOrigin: {
      vertical: l,
      horizontal: c
    },
    autoHideDuration: p,
    disableWindowBlurListener: g,
    TransitionComponent: N,
    transitionDuration: m
  }, j = tv(I), {
    getRootProps: V,
    onClickAway: U
  } = Yb({
    ...I
  }), [F, P] = b.useState(!0), L = (ae) => {
    P(!0), _ && _(ae);
  }, K = (ae, de) => {
    P(!1), $ && $(ae, de);
  }, J = {
    slots: {
      transition: N,
      ...R
    },
    slotProps: {
      content: y,
      clickAwayListener: h,
      transition: M,
      ...A
    }
  }, [Q, re] = pe("root", {
    ref: n,
    className: [j.root, f],
    elementType: nv,
    getSlotProps: V,
    externalForwardedProps: {
      ...J,
      ...z
    },
    ownerState: I
  }), [B, {
    ownerState: Y,
    ...X
  }] = pe("clickAwayListener", {
    elementType: zo,
    externalForwardedProps: J,
    getSlotProps: (ae) => ({
      onClickAway: (...de) => {
        var Ve;
        const xe = de[0];
        (Ve = ae.onClickAway) == null || Ve.call(ae, ...de), !(xe != null && xe.defaultMuiPrevented) && U(...de);
      }
    }),
    ownerState: I
  }), [le, q] = pe("content", {
    elementType: uu,
    shouldForwardComponentProp: !0,
    externalForwardedProps: J,
    additionalProps: {
      message: u,
      action: s
    },
    ownerState: I
  }), [ie, W] = pe("transition", {
    elementType: er,
    externalForwardedProps: J,
    getSlotProps: (ae) => ({
      onEnter: (...de) => {
        var xe;
        (xe = ae.onEnter) == null || xe.call(ae, ...de), K(...de);
      },
      onExited: (...de) => {
        var xe;
        (xe = ae.onExited) == null || xe.call(ae, ...de), L(...de);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: m,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: I
  });
  return !S && F ? null : /* @__PURE__ */ x.jsx(B, {
    ...X,
    ...R.clickAwayListener && {
      ownerState: Y
    },
    children: /* @__PURE__ */ x.jsx(Q, {
      ...re,
      children: /* @__PURE__ */ x.jsx(ie, {
        ...W,
        children: d || /* @__PURE__ */ x.jsx(le, {
          ...q
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (pu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: r.node,
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin: r.shape({
    horizontal: r.oneOf(["center", "left", "right"]).isRequired,
    vertical: r.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: r.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: r.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   * @deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ClickAwayListenerProps: r.object,
  /**
   * Props applied to the [`SnackbarContent`](https://mui.com/material-ui/api/snackbar-content/) element.
   * @deprecated Use `slotProps.content` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContentProps: r.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: r.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * The message to display.
   */
  message: r.node,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * @ignore
   */
  onMouseEnter: r.func,
  /**
   * @ignore
   */
  onMouseLeave: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: r.number,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    clickAwayListener: r.oneOfType([r.func, r.shape({
      children: r.element.isRequired,
      disableReactTree: r.bool,
      mouseEvent: r.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", !1]),
      onClickAway: r.func,
      touchEvent: r.oneOf(["onTouchEnd", "onTouchStart", !1])
    })]),
    content: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    clickAwayListener: r.elementType,
    content: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object
});
function rv(e) {
  return fe("MuiAlert", e);
}
const fl = me("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), ov = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), iv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), av = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), sv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), lv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), cv = (e) => {
  const {
    variant: t,
    color: n,
    severity: o,
    classes: i
  } = e, a = {
    root: ["root", `color${H(n || o)}`, `${t}${H(n || o)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return be(a, rv, i);
}, uv = Z(xn, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${H(n.color || n.severity)}`]];
  }
})(Se(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? _r : Br, n = e.palette.mode === "light" ? Br : _r;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(ct(["light"])).map(([o]) => ({
      props: {
        colorSeverity: o,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
        [`& .${fl.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${o}IconColor`]
        } : {
          color: e.palette[o].main
        }
      }
    })), ...Object.entries(e.palette).filter(ct(["light"])).map(([o]) => ({
      props: {
        colorSeverity: o,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[o].light}`,
        [`& .${fl.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${o}IconColor`]
        } : {
          color: e.palette[o].main
        }
      }
    })), ...Object.entries(e.palette).filter(ct(["dark"])).map(([o]) => ({
      props: {
        colorSeverity: o,
        variant: "filled"
      },
      style: {
        fontWeight: e.typography.fontWeightMedium,
        ...e.vars ? {
          color: e.vars.palette.Alert[`${o}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
        } : {
          backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main,
          color: e.palette.getContrastText(e.palette[o].main)
        }
      }
    }))]
  };
})), pv = Z("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), dv = Z("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), fv = Z("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), ml = {
  success: /* @__PURE__ */ x.jsx(ov, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ x.jsx(iv, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ x.jsx(av, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ x.jsx(sv, {
    fontSize: "inherit"
  })
}, du = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiAlert"
  }), {
    action: i,
    children: a,
    className: s,
    closeText: l = "Close",
    color: c,
    components: p = {},
    componentsProps: d = {},
    icon: f,
    iconMapping: h = ml,
    onClose: y,
    role: g = "alert",
    severity: u = "success",
    slotProps: v = {},
    slots: T = {},
    variant: O = "standard",
    ...w
  } = o, E = {
    ...o,
    color: c,
    severity: u,
    variant: O,
    colorSeverity: c || u
  }, S = cv(E), k = {
    slots: {
      closeButton: p.CloseButton,
      closeIcon: p.CloseIcon,
      ...T
    },
    slotProps: {
      ...d,
      ...v
    }
  }, [R, A] = pe("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: ne(S.root, s),
    elementType: uv,
    externalForwardedProps: {
      ...k,
      ...w
    },
    ownerState: E,
    additionalProps: {
      role: g,
      elevation: 0
    }
  }), [N, m] = pe("icon", {
    className: S.icon,
    elementType: pv,
    externalForwardedProps: k,
    ownerState: E
  }), [$, _] = pe("message", {
    className: S.message,
    elementType: dv,
    externalForwardedProps: k,
    ownerState: E
  }), [M, z] = pe("action", {
    className: S.action,
    elementType: fv,
    externalForwardedProps: k,
    ownerState: E
  }), [I, j] = pe("closeButton", {
    elementType: lt,
    externalForwardedProps: k,
    ownerState: E
  }), [V, U] = pe("closeIcon", {
    elementType: lv,
    externalForwardedProps: k,
    ownerState: E
  });
  return /* @__PURE__ */ x.jsxs(R, {
    ...A,
    children: [f !== !1 ? /* @__PURE__ */ x.jsx(N, {
      ...m,
      children: f || h[u] || ml[u]
    }) : null, /* @__PURE__ */ x.jsx($, {
      ..._,
      children: a
    }), i != null ? /* @__PURE__ */ x.jsx(M, {
      ...z,
      children: i
    }) : null, i == null && y ? /* @__PURE__ */ x.jsx(M, {
      ...z,
      children: /* @__PURE__ */ x.jsx(I, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: y,
        ...j,
        children: /* @__PURE__ */ x.jsx(V, {
          fontSize: "small",
          ...U
        })
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (du.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: r.node,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: r.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["error", "info", "success", "warning"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    CloseButton: r.elementType,
    CloseIcon: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    closeButton: r.object,
    closeIcon: r.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: r.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: r.shape({
    error: r.node,
    info: r.node,
    success: r.node,
    warning: r.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: r.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: r.oneOfType([r.oneOf(["error", "info", "success", "warning"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    action: r.oneOfType([r.func, r.object]),
    closeButton: r.oneOfType([r.func, r.object]),
    closeIcon: r.oneOfType([r.func, r.object]),
    icon: r.oneOfType([r.func, r.object]),
    message: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    action: r.elementType,
    closeButton: r.elementType,
    closeIcon: r.elementType,
    icon: r.elementType,
    message: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: r.oneOfType([r.oneOf(["filled", "outlined", "standard"]), r.string])
});
function mv(e) {
  return fe("MuiFab", e);
}
const gl = me("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), gv = (e) => {
  const {
    color: t,
    variant: n,
    classes: o,
    size: i
  } = e, a = {
    root: ["root", n, `size${H(i)}`, t === "inherit" ? "colorInherit" : t]
  }, s = be(a, mv, o);
  return {
    ...o,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...s
  };
}, hv = Z(sn, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => ur(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${H(n.size)}`], n.color === "inherit" && t.colorInherit, t[H(n.size)], t[n.color]];
  }
})(Se(({
  theme: e
}) => {
  var t, n;
  return {
    ...e.typography.button,
    minHeight: 36,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: e.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (e.vars || e).zIndex.fab,
    boxShadow: (e.vars || e).shadows[6],
    "&:active": {
      boxShadow: (e.vars || e).shadows[12]
    },
    color: e.vars ? e.vars.palette.grey[900] : (n = (t = e.palette).getContrastText) == null ? void 0 : n.call(t, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${gl.focusVisible}`]: {
      boxShadow: (e.vars || e).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), Se(({
  theme: e
}) => ({
  variants: [...Object.entries(e.palette).filter(ct(["dark", "contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].contrastText,
      backgroundColor: (e.vars || e).palette[t].main,
      "&:hover": {
        backgroundColor: (e.vars || e).palette[t].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette[t].main
        }
      }
    }
  }))]
})), Se(({
  theme: e
}) => ({
  [`&.${gl.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), Wa = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiFab"
  }), {
    children: i,
    className: a,
    color: s = "default",
    component: l = "button",
    disabled: c = !1,
    disableFocusRipple: p = !1,
    focusVisibleClassName: d,
    size: f = "large",
    variant: h = "circular",
    ...y
  } = o, g = {
    ...o,
    color: s,
    component: l,
    disabled: c,
    disableFocusRipple: p,
    size: f,
    variant: h
  }, u = gv(g);
  return /* @__PURE__ */ x.jsx(hv, {
    className: ne(u.root, a),
    component: l,
    disabled: c,
    focusRipple: !p,
    focusVisibleClassName: ne(u.focusVisible, d),
    ownerState: g,
    ref: n,
    ...y,
    classes: u,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: r.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: r.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: r.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: r.oneOfType([r.oneOf(["circular", "extended"]), r.string])
});
const fu = Df({
  themeId: cr
}), ta = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), yv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"
}), "VisibilityOutlined"), bv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M6 6h9v4H6z"
}), "SaveOutlined"), vv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear"), xv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"
}), "KeyboardReturn"), Tv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), "InfoOutline"), Ev = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26"
}), "Autorenew");
function Sv(e) {
  return fe("MuiTab", e);
}
const Et = me("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), wv = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: o,
    wrapped: i,
    icon: a,
    label: s,
    selected: l,
    disabled: c
  } = e, p = {
    root: ["root", a && s && "labelIcon", `textColor${H(n)}`, o && "fullWidth", i && "wrapped", l && "selected", c && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return be(p, Sv, t);
}, Cv = Z(sn, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${H(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Et.iconWrapper}`]: t.iconWrapper
    }, {
      [`& .${Et.icon}`]: t.icon
    }];
  }
})(Se(({
  theme: e
}) => ({
  ...e.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState: t
    }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.icon && t.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "top",
    style: {
      [`& > .${Et.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Et.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Et.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Et.icon}`]: {
        marginLeft: e.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${Et.selected}`]: {
        opacity: 1
      },
      [`&.${Et.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Et.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Et.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Et.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Et.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.wrapped,
    style: {
      fontSize: e.typography.pxToRem(12)
    }
  }]
}))), na = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiTab"
  }), {
    className: i,
    disabled: a = !1,
    disableFocusRipple: s = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: l,
    icon: c,
    iconPosition: p = "top",
    // eslint-disable-next-line react/prop-types
    indicator: d,
    label: f,
    onChange: h,
    onClick: y,
    onFocus: g,
    // eslint-disable-next-line react/prop-types
    selected: u,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: v,
    // eslint-disable-next-line react/prop-types
    textColor: T = "inherit",
    value: O,
    wrapped: w = !1,
    ...E
  } = o, S = {
    ...o,
    disabled: a,
    disableFocusRipple: s,
    selected: u,
    icon: !!c,
    iconPosition: p,
    label: !!f,
    fullWidth: l,
    textColor: T,
    wrapped: w
  }, k = wv(S), R = c && f && /* @__PURE__ */ b.isValidElement(c) ? /* @__PURE__ */ b.cloneElement(c, {
    className: ne(k.icon, c.props.className)
  }) : c, A = (m) => {
    !u && h && h(m, O), y && y(m);
  }, N = (m) => {
    v && !u && h && h(m, O), g && g(m);
  };
  return /* @__PURE__ */ x.jsxs(Cv, {
    focusRipple: !s,
    className: ne(k.root, i),
    ref: n,
    role: "tab",
    "aria-selected": u,
    disabled: a,
    onClick: A,
    onFocus: N,
    ownerState: S,
    tabIndex: u ? 0 : -1,
    ...E,
    children: [p === "top" || p === "start" ? /* @__PURE__ */ x.jsxs(b.Fragment, {
      children: [R, f]
    }) : /* @__PURE__ */ x.jsxs(b.Fragment, {
      children: [f, R]
    }), d]
  });
});
process.env.NODE_ENV !== "production" && (na.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Rc,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * The icon to display.
   */
  icon: r.oneOfType([r.element, r.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: r.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: r.node,
  /**
   * @ignore
   */
  onChange: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: r.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: r.bool
});
const Va = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Va.displayName = "TabContext");
function Ov() {
  const [e, t] = b.useState(null);
  return b.useEffect(() => {
    t(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []), e;
}
function mu(e) {
  const {
    children: t,
    value: n
  } = e, o = Ov(), i = b.useMemo(() => ({
    idPrefix: o,
    value: n
  }), [o, n]);
  return /* @__PURE__ */ x.jsx(Va.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (mu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * The value of the currently selected `Tab`.
   */
  value: r.oneOfType([r.number, r.string]).isRequired
});
function gu() {
  return b.useContext(Va);
}
function hu(e, t) {
  const {
    idPrefix: n
  } = e;
  return n === null ? null : `${e.idPrefix}-P-${t}`;
}
function yu(e, t) {
  const {
    idPrefix: n
  } = e;
  return n === null ? null : `${e.idPrefix}-T-${t}`;
}
function Rv(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Pv(e, t, n, o = {}, i = () => {
}) {
  const {
    ease: a = Rv,
    duration: s = 300
    // standard
  } = o;
  let l = null;
  const c = t[e];
  let p = !1;
  const d = () => {
    p = !0;
  }, f = (h) => {
    if (p) {
      i(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = h);
    const y = Math.min(1, (h - l) / s);
    if (t[e] = a(y) * (n - c) + c, y >= 1) {
      requestAnimationFrame(() => {
        i(null);
      });
      return;
    }
    requestAnimationFrame(f);
  };
  return c === n ? (i(new Error("Element already at target position")), d) : (requestAnimationFrame(f), d);
}
const kv = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function bu(e) {
  const {
    onChange: t,
    ...n
  } = e, o = b.useRef(), i = b.useRef(null), a = () => {
    o.current = i.current.offsetHeight - i.current.clientHeight;
  };
  return an(() => {
    const s = si(() => {
      const c = o.current;
      a(), c !== o.current && t(o.current);
    }), l = Nt(i.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), b.useEffect(() => {
    a(), t(o.current);
  }, [t]), /* @__PURE__ */ x.jsx("div", {
    style: kv,
    ...n,
    ref: i
  });
}
process.env.NODE_ENV !== "production" && (bu.propTypes = {
  onChange: r.func.isRequired
});
const $v = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), Mv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function Iv(e) {
  return fe("MuiTabScrollButton", e);
}
const jv = me("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), Nv = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: o
  } = e;
  return be({
    root: ["root", n, o && "disabled"]
  }, Iv, t);
}, Av = Z(sn, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.orientation && t[n.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${jv.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
}), vu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: i,
    slots: a = {},
    slotProps: s = {},
    direction: l,
    orientation: c,
    disabled: p,
    ...d
  } = o, f = ar(), h = {
    isRtl: f,
    ...o
  }, y = Nv(h), g = a.StartScrollButtonIcon ?? $v, u = a.EndScrollButtonIcon ?? Mv, v = Jn({
    elementType: g,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  }), T = Jn({
    elementType: u,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  });
  return /* @__PURE__ */ x.jsx(Av, {
    component: "div",
    className: ne(y.root, i),
    ref: n,
    role: null,
    ownerState: h,
    tabIndex: null,
    ...d,
    style: {
      ...d.style,
      ...c === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ x.jsx(g, {
      ...v
    }) : /* @__PURE__ */ x.jsx(u, {
      ...T
    })
  });
});
process.env.NODE_ENV !== "production" && (vu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The direction the button should indicate.
   */
  direction: r.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: r.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: r.shape({
    endScrollButtonIcon: r.oneOfType([r.func, r.object]),
    startScrollButtonIcon: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    EndScrollButtonIcon: r.elementType,
    StartScrollButtonIcon: r.elementType
  }),
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function Dv(e) {
  return fe("MuiTabs", e);
}
const ki = me("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), hl = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, yl = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, mo = (e, t, n) => {
  let o = !1, i = n(e, t);
  for (; i; ) {
    if (i === e.firstChild) {
      if (o)
        return;
      o = !0;
    }
    const a = i.disabled || i.getAttribute("aria-disabled") === "true";
    if (!i.hasAttribute("tabindex") || a)
      i = n(e, i);
    else {
      i.focus();
      return;
    }
  }
}, _v = (e) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: o,
    scrollableX: i,
    scrollableY: a,
    centered: s,
    scrollButtonsHideMobile: l,
    classes: c
  } = e;
  return be({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", o && "hideScrollbar", i && "scrollableX", a && "scrollableY"],
    list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [i && "scrollableX"],
    hideScrollbar: [o && "hideScrollbar"]
  }, Dv, c);
}, Bv = Z("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ki.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${ki.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(Se(({
  theme: e
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.scrollButtonsHideMobile,
    style: {
      [`& .${ki.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), Lv = Z("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState: e
    }) => e.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
}), zv = Z("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.list, t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState: e
    }) => e.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.centered,
    style: {
      justifyContent: "center"
    }
  }]
}), Fv = Z("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(Se(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: e.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.secondary.main
    }
  }, {
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
}))), Wv = Z(bu)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), bl = {};
let vl = !1;
const xu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiTabs"
  }), i = $t(), a = ar(), {
    "aria-label": s,
    "aria-labelledby": l,
    action: c,
    centered: p = !1,
    children: d,
    className: f,
    component: h = "div",
    allowScrollButtonsMobile: y = !1,
    indicatorColor: g = "primary",
    onChange: u,
    orientation: v = "horizontal",
    ScrollButtonComponent: T,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons: O = "auto",
    selectionFollowsFocus: w,
    slots: E = {},
    slotProps: S = {},
    TabIndicatorProps: k = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps: R = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor: A = "primary",
    value: N,
    variant: m = "standard",
    visibleScrollbar: $ = !1,
    ..._
  } = o, M = m === "scrollable", z = v === "vertical", I = z ? "scrollTop" : "scrollLeft", j = z ? "top" : "left", V = z ? "bottom" : "right", U = z ? "clientHeight" : "clientWidth", F = z ? "height" : "width", P = {
    ...o,
    component: h,
    allowScrollButtonsMobile: y,
    indicatorColor: g,
    orientation: v,
    vertical: z,
    scrollButtons: O,
    textColor: A,
    variant: m,
    visibleScrollbar: $,
    fixed: !M,
    hideScrollbar: M && !$,
    scrollableX: M && !z,
    scrollableY: M && z,
    centered: p && !M,
    scrollButtonsHideMobile: !y
  }, L = _v(P), K = Jn({
    elementType: E.StartScrollButtonIcon,
    externalSlotProps: S.startScrollButtonIcon,
    ownerState: P
  }), J = Jn({
    elementType: E.EndScrollButtonIcon,
    externalSlotProps: S.endScrollButtonIcon,
    ownerState: P
  });
  process.env.NODE_ENV !== "production" && p && M && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [Q, re] = b.useState(!1), [B, Y] = b.useState(bl), [X, le] = b.useState(!1), [q, ie] = b.useState(!1), [W, ae] = b.useState(!1), [de, xe] = b.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Ve = /* @__PURE__ */ new Map(), $e = b.useRef(null), ze = b.useRef(null), We = {
    slots: E,
    slotProps: {
      indicator: k,
      scrollButton: R,
      ...S
    }
  }, qe = () => {
    const ee = $e.current;
    let oe;
    if (ee) {
      const Te = ee.getBoundingClientRect();
      oe = {
        clientWidth: ee.clientWidth,
        scrollLeft: ee.scrollLeft,
        scrollTop: ee.scrollTop,
        scrollWidth: ee.scrollWidth,
        top: Te.top,
        bottom: Te.bottom,
        left: Te.left,
        right: Te.right
      };
    }
    let he;
    if (ee && N !== !1) {
      const Te = ze.current.children;
      if (Te.length > 0) {
        const Fe = Te[Ve.get(N)];
        process.env.NODE_ENV !== "production" && (Fe || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${N}".`, Ve.keys ? `You can provide one of the following values: ${Array.from(Ve.keys()).join(", ")}.` : null].join(`
`))), he = Fe ? Fe.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !vl && he && he.width === 0 && he.height === 0 && // if the whole Tabs component is hidden, don't warn
        oe.clientWidth !== 0 && (oe = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${N}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), vl = !0);
      }
    }
    return {
      tabsMeta: oe,
      tabMeta: he
    };
  }, ke = dt(() => {
    const {
      tabsMeta: ee,
      tabMeta: oe
    } = qe();
    let he = 0, Te;
    z ? (Te = "top", oe && ee && (he = oe.top - ee.top + ee.scrollTop)) : (Te = a ? "right" : "left", oe && ee && (he = (a ? -1 : 1) * (oe[Te] - ee[Te] + ee.scrollLeft)));
    const Fe = {
      [Te]: he,
      // May be wrong until the font is loaded.
      [F]: oe ? oe[F] : 0
    };
    if (typeof B[Te] != "number" || typeof B[F] != "number")
      Y(Fe);
    else {
      const xt = Math.abs(B[Te] - Fe[Te]), tn = Math.abs(B[F] - Fe[F]);
      (xt >= 1 || tn >= 1) && Y(Fe);
    }
  }), se = (ee, {
    animation: oe = !0
  } = {}) => {
    oe ? Pv(I, $e.current, ee, {
      duration: i.transitions.duration.standard
    }) : $e.current[I] = ee;
  }, Dt = (ee) => {
    let oe = $e.current[I];
    z ? oe += ee : oe += ee * (a ? -1 : 1), se(oe);
  }, _t = () => {
    const ee = $e.current[U];
    let oe = 0;
    const he = Array.from(ze.current.children);
    for (let Te = 0; Te < he.length; Te += 1) {
      const Fe = he[Te];
      if (oe + Fe[U] > ee) {
        Te === 0 && (oe = ee);
        break;
      }
      oe += Fe[U];
    }
    return oe;
  }, Jt = () => {
    Dt(-1 * _t());
  }, Qt = () => {
    Dt(_t());
  }, [ut, {
    onChange: Mt,
    ...Bt
  }] = pe("scrollbar", {
    className: ne(L.scrollableX, L.hideScrollbar),
    elementType: Wv,
    shouldForwardComponentProp: !0,
    externalForwardedProps: We,
    ownerState: P
  }), un = b.useCallback((ee) => {
    Mt == null || Mt(ee), xe({
      overflow: null,
      scrollbarWidth: ee
    });
  }, [Mt]), [Ze, Lt] = pe("scrollButtons", {
    className: ne(L.scrollButtons, R.className),
    elementType: vu,
    externalForwardedProps: We,
    ownerState: P,
    additionalProps: {
      orientation: v,
      slots: {
        StartScrollButtonIcon: E.startScrollButtonIcon || E.StartScrollButtonIcon,
        EndScrollButtonIcon: E.endScrollButtonIcon || E.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: K,
        endScrollButtonIcon: J
      }
    }
  }), It = () => {
    const ee = {};
    ee.scrollbarSizeListener = M ? /* @__PURE__ */ x.jsx(ut, {
      ...Bt,
      onChange: un
    }) : null;
    const he = M && (O === "auto" && (X || q) || O === !0);
    return ee.scrollButtonStart = he ? /* @__PURE__ */ x.jsx(Ze, {
      direction: a ? "right" : "left",
      onClick: Jt,
      disabled: !X,
      ...Lt
    }) : null, ee.scrollButtonEnd = he ? /* @__PURE__ */ x.jsx(Ze, {
      direction: a ? "left" : "right",
      onClick: Qt,
      disabled: !q,
      ...Lt
    }) : null, ee;
  }, rt = dt((ee) => {
    const {
      tabsMeta: oe,
      tabMeta: he
    } = qe();
    if (!(!he || !oe)) {
      if (he[j] < oe[j]) {
        const Te = oe[I] + (he[j] - oe[j]);
        se(Te, {
          animation: ee
        });
      } else if (he[V] > oe[V]) {
        const Te = oe[I] + (he[V] - oe[V]);
        se(Te, {
          animation: ee
        });
      }
    }
  }), pn = dt(() => {
    M && O !== !1 && ae(!W);
  });
  b.useEffect(() => {
    const ee = si(() => {
      $e.current && ke();
    });
    let oe;
    const he = (xt) => {
      xt.forEach((tn) => {
        tn.removedNodes.forEach((wn) => {
          oe == null || oe.unobserve(wn);
        }), tn.addedNodes.forEach((wn) => {
          oe == null || oe.observe(wn);
        });
      }), ee(), pn();
    }, Te = Nt($e.current);
    Te.addEventListener("resize", ee);
    let Fe;
    return typeof ResizeObserver < "u" && (oe = new ResizeObserver(ee), Array.from(ze.current.children).forEach((xt) => {
      oe.observe(xt);
    })), typeof MutationObserver < "u" && (Fe = new MutationObserver(he), Fe.observe(ze.current, {
      childList: !0
    })), () => {
      ee.clear(), Te.removeEventListener("resize", ee), Fe == null || Fe.disconnect(), oe == null || oe.disconnect();
    };
  }, [ke, pn]), b.useEffect(() => {
    const ee = Array.from(ze.current.children), oe = ee.length;
    if (typeof IntersectionObserver < "u" && oe > 0 && M && O !== !1) {
      const he = ee[0], Te = ee[oe - 1], Fe = {
        root: $e.current,
        threshold: 0.99
      }, xt = (C) => {
        le(!C[0].isIntersecting);
      }, tn = new IntersectionObserver(xt, Fe);
      tn.observe(he);
      const wn = (C) => {
        ie(!C[0].isIntersecting);
      }, no = new IntersectionObserver(wn, Fe);
      return no.observe(Te), () => {
        tn.disconnect(), no.disconnect();
      };
    }
  }, [M, O, W, d == null ? void 0 : d.length]), b.useEffect(() => {
    re(!0);
  }, []), b.useEffect(() => {
    ke();
  }), b.useEffect(() => {
    rt(bl !== B);
  }, [rt, B]), b.useImperativeHandle(c, () => ({
    updateIndicator: ke,
    updateScrollButtons: pn
  }), [ke, pn]);
  const [En, pr] = pe("indicator", {
    className: ne(L.indicator, k.className),
    elementType: Fv,
    externalForwardedProps: We,
    ownerState: P,
    additionalProps: {
      style: B
    }
  }), Zt = /* @__PURE__ */ x.jsx(En, {
    ...pr
  });
  let zt = 0;
  const _n = b.Children.map(d, (ee) => {
    if (!/* @__PURE__ */ b.isValidElement(ee))
      return null;
    process.env.NODE_ENV !== "production" && ua.isFragment(ee) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const oe = ee.props.value === void 0 ? zt : ee.props.value;
    Ve.set(oe, zt);
    const he = oe === N;
    return zt += 1, /* @__PURE__ */ b.cloneElement(ee, {
      fullWidth: m === "fullWidth",
      indicator: he && !Q && Zt,
      selected: he,
      selectionFollowsFocus: w,
      onChange: u,
      textColor: A,
      value: oe,
      ...zt === 1 && N === !1 && !ee.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  }), Ft = (ee) => {
    if (ee.altKey || ee.shiftKey || ee.ctrlKey || ee.metaKey)
      return;
    const oe = ze.current, he = at(oe).activeElement;
    if (he.getAttribute("role") !== "tab")
      return;
    let Fe = v === "horizontal" ? "ArrowLeft" : "ArrowUp", xt = v === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (v === "horizontal" && a && (Fe = "ArrowRight", xt = "ArrowLeft"), ee.key) {
      case Fe:
        ee.preventDefault(), mo(oe, he, yl);
        break;
      case xt:
        ee.preventDefault(), mo(oe, he, hl);
        break;
      case "Home":
        ee.preventDefault(), mo(oe, null, hl);
        break;
      case "End":
        ee.preventDefault(), mo(oe, null, yl);
        break;
    }
  }, en = It(), [Sn, Bn] = pe("root", {
    ref: n,
    className: ne(L.root, f),
    elementType: Bv,
    externalForwardedProps: {
      ...We,
      ..._,
      component: h
    },
    ownerState: P
  }), [dr, Ln] = pe("scroller", {
    ref: $e,
    className: L.scroller,
    elementType: Lv,
    externalForwardedProps: We,
    ownerState: P,
    additionalProps: {
      style: {
        overflow: de.overflow,
        [z ? `margin${a ? "Left" : "Right"}` : "marginBottom"]: $ ? void 0 : -de.scrollbarWidth
      }
    }
  }), [ce, ot] = pe("list", {
    ref: ze,
    className: ne(L.list, L.flexContainer),
    elementType: zv,
    externalForwardedProps: We,
    ownerState: P,
    getSlotProps: (ee) => ({
      ...ee,
      onKeyDown: (oe) => {
        var he;
        Ft(oe), (he = ee.onKeyDown) == null || he.call(ee, oe);
      }
    })
  });
  return /* @__PURE__ */ x.jsxs(Sn, {
    ...Bn,
    children: [en.scrollButtonStart, en.scrollbarSizeListener, /* @__PURE__ */ x.jsxs(dr, {
      ...Ln,
      children: [/* @__PURE__ */ x.jsx(ce, {
        "aria-label": s,
        "aria-labelledby": l,
        "aria-orientation": v === "vertical" ? "vertical" : null,
        role: "tablist",
        ...ot,
        children: _n
      }), Q && Zt]
    }), en.scrollButtonEnd]
  });
});
process.env.NODE_ENV !== "production" && (xu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: Zr,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: r.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": r.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": r.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: r.oneOfType([r.oneOf(["primary", "secondary"]), r.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: r.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: r.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @deprecated use the `slots.scrollButtons` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default TabScrollButton
   */
  ScrollButtonComponent: r.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: r.oneOf(["auto", !1, !0]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: r.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    endScrollButtonIcon: r.oneOfType([r.func, r.object]),
    indicator: r.oneOfType([r.func, r.object]),
    list: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    scrollbar: r.oneOfType([r.func, r.object]),
    scrollButtons: r.oneOfType([r.func, r.object]),
    scroller: r.oneOfType([r.func, r.object]),
    startScrollButtonIcon: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    endScrollButtonIcon: r.elementType,
    EndScrollButtonIcon: r.elementType,
    indicator: r.elementType,
    list: r.elementType,
    root: r.elementType,
    scrollbar: r.elementType,
    scrollButtons: r.elementType,
    scroller: r.elementType,
    startScrollButtonIcon: r.elementType,
    StartScrollButtonIcon: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Props applied to the tab indicator element.
   * @deprecated use the `slotProps.indicator` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default  {}
   */
  TabIndicatorProps: r.object,
  /**
   * Props applied to the [`TabScrollButton`](https://mui.com/material-ui/api/tab-scroll-button/) element.
   * @deprecated use the `slotProps.scrollButtons` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TabScrollButtonProps: r.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: r.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: r.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: r.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: r.bool
});
const Tu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    children: o,
    ...i
  } = t, a = gu();
  if (a === null)
    throw new TypeError("No TabContext provided");
  const s = b.Children.map(o, (l) => /* @__PURE__ */ b.isValidElement(l) ? /* @__PURE__ */ b.cloneElement(l, {
    // SOMEDAY: `Tabs` will set those themselves
    "aria-controls": hu(a, l.props.value),
    id: yu(a, l.props.value)
  }) : null);
  return /* @__PURE__ */ x.jsx(xu, {
    ...i,
    ref: n,
    value: a.value,
    children: s
  });
});
process.env.NODE_ENV !== "production" && (Tu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A list of `<Tab />` elements.
   */
  children: r.node
});
function Vv(e) {
  return fe("MuiTabPanel", e);
}
me("MuiTabPanel", ["root", "hidden"]);
const Uv = (e) => {
  const {
    classes: t,
    hidden: n
  } = e;
  return be({
    root: ["root", n && "hidden"]
  }, Vv, t);
}, Hv = Z("div", {
  name: "MuiTabPanel",
  slot: "Root"
})(({
  theme: e
}) => ({
  padding: e.spacing(3)
})), ra = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ry({
    props: t,
    name: "MuiTabPanel"
  }), {
    children: i,
    className: a,
    value: s,
    keepMounted: l = !1,
    ...c
  } = o, p = {
    ...o
  }, d = Uv(p), f = gu();
  if (f === null)
    throw new TypeError("No TabContext provided");
  const h = hu(f, s), y = yu(f, s);
  return /* @__PURE__ */ x.jsx(Hv, {
    "aria-labelledby": y,
    className: ne(d.root, a),
    hidden: s !== f.value,
    id: h,
    ref: n,
    role: "tabpanel",
    ownerState: p,
    ...c,
    children: (l || s === f.value) && i
  });
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Always keep the children in the DOM.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The `value` of the corresponding `Tab`. Must use the index of the `Tab` when
   * no `value` was passed to `Tab`.
   */
  value: r.oneOfType([r.number, r.string]).isRequired
});
const Fo = xm({
  createStyledComponent: Z("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.container && t.container];
    }
  }),
  componentName: "MuiGrid",
  useThemeProps: (e) => ge({
    props: e,
    name: "MuiGrid"
  }),
  useTheme: $t
});
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * The number of columns.
   * @default 12
   */
  columns: r.oneOfType([r.arrayOf(r.number), r.number, r.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: r.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: r.oneOfType([r.oneOf(["column-reverse", "column", "row-reverse", "row"]), r.arrayOf(r.oneOf(["column-reverse", "column", "row-reverse", "row"])), r.object]),
  /**
   * Defines the offset value for the type `item` components.
   */
  offset: r.oneOfType([r.string, r.number, r.arrayOf(r.oneOfType([r.string, r.number])), r.object]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
  /**
   * Defines the size of the the type `item` components.
   */
  size: r.oneOfType([r.string, r.bool, r.number, r.arrayOf(r.oneOfType([r.string, r.bool, r.number])), r.object]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
  /**
   * @ignore
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @internal
   * The level of the grid starts from `0` and increases when the grid nests
   * inside another grid. Nesting is defined as a container Grid being a direct
   * child of a container Grid.
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid container> // level 1
   *     <Grid container> // level 2
   * ```
   *
   * Only consecutive grid is considered nesting. A grid container will start at
   * `0` if there are non-Grid container element above it.
   *
   * ```js
   * <Grid container> // level 0
   *   <div>
   *     <Grid container> // level 0
   * ```
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid>
   *     <Grid container> // level 0
   * ```
   */
  unstable_level: r.number,
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: r.oneOf(["nowrap", "wrap-reverse", "wrap"])
});
if (process.env.NODE_ENV !== "production") {
  const e = Fo, t = ag("Grid", e);
  e.propTypes = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    ...e.propTypes,
    direction: t("container"),
    spacing: t("container"),
    wrap: t("container")
  };
}
const xl = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "Check"), Eu = (e) => {
  const t = b.useRef({});
  return b.useEffect(() => {
    t.current = e;
  }), t.current;
}, Gv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Yv(e) {
  return fe("MuiChip", e);
}
const ye = me("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), qv = (e) => {
  const {
    classes: t,
    disabled: n,
    size: o,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, p = {
    root: ["root", c, n && "disabled", `size${H(o)}`, `color${H(i)}`, l && "clickable", l && `clickableColor${H(i)}`, s && "deletable", s && `deletableColor${H(i)}`, `${c}${H(i)}`],
    label: ["label", `label${H(o)}`],
    avatar: ["avatar", `avatar${H(o)}`, `avatarColor${H(i)}`],
    icon: ["icon", `icon${H(o)}`, `iconColor${H(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${H(o)}`, `deleteIconColor${H(i)}`, `deleteIcon${H(c)}Color${H(i)}`]
  };
  return be(p, Yv, t);
}, Kv = Z("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: o,
      iconColor: i,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${ye.avatar}`]: t.avatar
    }, {
      [`& .${ye.avatar}`]: t[`avatar${H(l)}`]
    }, {
      [`& .${ye.avatar}`]: t[`avatarColor${H(o)}`]
    }, {
      [`& .${ye.icon}`]: t.icon
    }, {
      [`& .${ye.icon}`]: t[`icon${H(l)}`]
    }, {
      [`& .${ye.icon}`]: t[`iconColor${H(i)}`]
    }, {
      [`& .${ye.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ye.deleteIcon}`]: t[`deleteIcon${H(l)}`]
    }, {
      [`& .${ye.deleteIcon}`]: t[`deleteIconColor${H(o)}`]
    }, {
      [`& .${ye.deleteIcon}`]: t[`deleteIcon${H(c)}Color${H(o)}`]
    }, t.root, t[`size${H(l)}`], t[`color${H(o)}`], a && t.clickable, a && o !== "default" && t[`clickableColor${H(o)})`], s && t.deletable, s && o !== "default" && t[`deletableColor${H(o)}`], t[c], t[`${c}${H(o)}`]];
  }
})(Se(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    lineHeight: 1.5,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${ye.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ye.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ye.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ye.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ye.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ye.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ye.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Be(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Be(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${ye.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ye.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(ct(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${ye.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : Be(e.palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${ye.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${ye.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${ye.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(ct(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${ye.focusVisible}`]: {
          background: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${ye.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(ct(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${ye.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${ye.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${ye.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${ye.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ye.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${ye.icon}`]: {
          marginLeft: 4
        },
        [`& .${ye.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${ye.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${ye.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(ct()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Be(e.palette[n].main, 0.7)}`,
        [`&.${ye.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette[n].main, e.palette.action.hoverOpacity)
        },
        [`&.${ye.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Be(e.palette[n].main, e.palette.action.focusOpacity)
        },
        [`& .${ye.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Be(e.palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), Xv = Z("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: o
    } = n;
    return [t.label, t[`label${H(o)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Tl(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Su = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: p,
    disabled: d = !1,
    icon: f,
    label: h,
    onClick: y,
    onDelete: g,
    onKeyDown: u,
    onKeyUp: v,
    size: T = "medium",
    variant: O = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: E = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: S = {},
    slotProps: k = {},
    ...R
  } = o, A = b.useRef(null), N = nt(A, n), m = (B) => {
    B.stopPropagation(), g && g(B);
  }, $ = (B) => {
    B.currentTarget === B.target && Tl(B) && B.preventDefault(), u && u(B);
  }, _ = (B) => {
    B.currentTarget === B.target && g && Tl(B) && g(B), v && v(B);
  }, M = s !== !1 && y ? !0 : s, z = M || g ? sn : c || "div", I = {
    ...o,
    component: z,
    disabled: d,
    size: T,
    color: l,
    iconColor: /* @__PURE__ */ b.isValidElement(f) && f.props.color || l,
    onDelete: !!g,
    clickable: M,
    variant: O
  }, j = qv(I), V = z === sn ? {
    component: c || "div",
    focusVisibleClassName: j.focusVisible,
    ...g && {
      disableRipple: !0
    }
  } : {};
  let U = null;
  g && (U = p && /* @__PURE__ */ b.isValidElement(p) ? /* @__PURE__ */ b.cloneElement(p, {
    className: ne(p.props.className, j.deleteIcon),
    onClick: m
  }) : /* @__PURE__ */ x.jsx(Gv, {
    className: j.deleteIcon,
    onClick: m
  }));
  let F = null;
  i && /* @__PURE__ */ b.isValidElement(i) && (F = /* @__PURE__ */ b.cloneElement(i, {
    className: ne(j.avatar, i.props.className)
  }));
  let P = null;
  f && /* @__PURE__ */ b.isValidElement(f) && (P = /* @__PURE__ */ b.cloneElement(f, {
    className: ne(j.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && F && P && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
  const L = {
    slots: S,
    slotProps: k
  }, [K, J] = pe("root", {
    elementType: Kv,
    externalForwardedProps: {
      ...L,
      ...R
    },
    ownerState: I,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: N,
    className: ne(j.root, a),
    additionalProps: {
      disabled: M && d ? !0 : void 0,
      tabIndex: E && d ? -1 : w,
      ...V
    },
    getSlotProps: (B) => ({
      ...B,
      onClick: (Y) => {
        var X;
        (X = B.onClick) == null || X.call(B, Y), y == null || y(Y);
      },
      onKeyDown: (Y) => {
        var X;
        (X = B.onKeyDown) == null || X.call(B, Y), $ == null || $(Y);
      },
      onKeyUp: (Y) => {
        var X;
        (X = B.onKeyUp) == null || X.call(B, Y), _ == null || _(Y);
      }
    })
  }), [Q, re] = pe("label", {
    elementType: Xv,
    externalForwardedProps: L,
    ownerState: I,
    className: j.label
  });
  return /* @__PURE__ */ x.jsxs(K, {
    as: z,
    ...J,
    children: [F || P, /* @__PURE__ */ x.jsx(Q, {
      ...re,
      children: h
    }), U]
  });
});
process.env.NODE_ENV !== "production" && (Su.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: r.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Rc,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: r.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: r.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * Icon element.
   */
  icon: r.element,
  /**
   * The content of the component.
   */
  label: r.node,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: r.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    label: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    label: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  tabIndex: r.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: r.oneOfType([r.oneOf(["filled", "outlined"]), r.string])
});
const Jv = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Qv(e) {
  return fe("MuiAvatar", e);
}
me("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Zv = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: o
  } = e;
  return be({
    root: ["root", n, o && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Qv, t);
}, e0 = Z("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(Se(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: !0
    },
    style: {
      color: (e.vars || e).palette.background.default,
      ...e.vars ? {
        backgroundColor: e.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: e.palette.grey[400],
        ...e.applyStyles("dark", {
          backgroundColor: e.palette.grey[600]
        })
      }
    }
  }]
}))), t0 = Z("img", {
  name: "MuiAvatar",
  slot: "Img"
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), n0 = Z(Jv, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function r0({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: o
}) {
  const [i, a] = b.useState(!1);
  return b.useEffect(() => {
    if (!n && !o)
      return;
    a(!1);
    let s = !0;
    const l = new Image();
    return l.onload = () => {
      s && a("loaded");
    }, l.onerror = () => {
      s && a("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = n, o && (l.srcset = o), () => {
      s = !1;
    };
  }, [e, t, n, o]), i;
}
const wu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: a,
    className: s,
    component: l = "div",
    slots: c = {},
    slotProps: p = {},
    imgProps: d,
    sizes: f,
    src: h,
    srcSet: y,
    variant: g = "circular",
    ...u
  } = o;
  let v = null;
  const T = {
    ...o,
    component: l,
    variant: g
  }, O = r0({
    ...d,
    ...typeof p.img == "function" ? p.img(T) : p.img,
    src: h,
    srcSet: y
  }), w = h || y, E = w && O !== "error";
  T.colorDefault = !E, delete T.ownerState;
  const S = Zv(T), [k, R] = pe("root", {
    ref: n,
    className: ne(S.root, s),
    elementType: e0,
    externalForwardedProps: {
      slots: c,
      slotProps: p,
      component: l,
      ...u
    },
    ownerState: T
  }), [A, N] = pe("img", {
    className: S.img,
    elementType: t0,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: {
          ...d,
          ...p.img
        }
      }
    },
    additionalProps: {
      alt: i,
      src: h,
      srcSet: y,
      sizes: f
    },
    ownerState: T
  }), [m, $] = pe("fallback", {
    className: S.fallback,
    elementType: n0,
    externalForwardedProps: {
      slots: c,
      slotProps: p
    },
    shouldForwardComponentProp: !0,
    ownerState: T
  });
  return E ? v = /* @__PURE__ */ x.jsx(A, {
    ...N
  }) : a || a === 0 ? v = a : w && i ? v = i[0] : v = /* @__PURE__ */ x.jsx(m, {
    ...$
  }), /* @__PURE__ */ x.jsx(k, {
    ...R,
    children: v
  });
});
process.env.NODE_ENV !== "production" && (wu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: r.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: r.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: r.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    fallback: r.oneOfType([r.func, r.object]),
    img: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    fallback: r.elementType,
    img: r.elementType,
    root: r.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: r.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: r.oneOfType([r.oneOf(["circular", "rounded", "square"]), r.string])
});
function o0(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: o = 99,
    showZero: i = !1
  } = e, a = Eu({
    badgeContent: t,
    max: o
  });
  let s = n;
  n === !1 && t === 0 && !i && (s = !0);
  const {
    badgeContent: l,
    max: c = o
  } = s ? a : e, p = l && Number(l) > c ? `${c}+` : l;
  return {
    badgeContent: l,
    invisible: s,
    max: c,
    displayValue: p
  };
}
function i0(e) {
  return fe("MuiBadge", e);
}
const fn = me("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), $i = 10, Mi = 4, a0 = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: o,
    overlap: i,
    variant: a,
    classes: s = {}
  } = e, l = {
    root: ["root"],
    badge: ["badge", a, o && "invisible", `anchorOrigin${H(n.vertical)}${H(n.horizontal)}`, `anchorOrigin${H(n.vertical)}${H(n.horizontal)}${H(i)}`, `overlap${H(i)}`, t !== "default" && `color${H(t)}`]
  };
  return be(l, i0, s);
}, s0 = Z("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), l0 = Z("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${H(n.anchorOrigin.vertical)}${H(n.anchorOrigin.horizontal)}${H(n.overlap)}`], n.color !== "default" && t[`color${H(n.color)}`], n.invisible && t.invisible];
  }
})(Se(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(12),
  minWidth: $i * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: $i * 2,
  borderRadius: $i,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(ct(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: (e.vars || e).palette[t].main,
      color: (e.vars || e).palette[t].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: Mi,
      height: Mi * 2,
      minWidth: Mi * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${fn.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeInOut,
        duration: e.transitions.duration.leavingScreen
      })
    }
  }]
})));
function El(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const oa = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: i,
    className: a,
    classes: s,
    component: l,
    components: c = {},
    componentsProps: p = {},
    children: d,
    overlap: f = "rectangular",
    color: h = "default",
    invisible: y = !1,
    max: g = 99,
    badgeContent: u,
    slots: v,
    slotProps: T,
    showZero: O = !1,
    variant: w = "standard",
    ...E
  } = o, {
    badgeContent: S,
    invisible: k,
    max: R,
    displayValue: A
  } = o0({
    max: g,
    invisible: y,
    badgeContent: u,
    showZero: O
  }), N = Eu({
    anchorOrigin: El(i),
    color: h,
    overlap: f,
    variant: w,
    badgeContent: u
  }), m = k || S == null && w !== "dot", {
    color: $ = h,
    overlap: _ = f,
    anchorOrigin: M,
    variant: z = w
  } = m ? N : o, I = El(M), j = z !== "dot" ? A : void 0, V = {
    ...o,
    badgeContent: S,
    invisible: m,
    max: R,
    displayValue: j,
    showZero: O,
    anchorOrigin: I,
    color: $,
    overlap: _,
    variant: z
  }, U = a0(V), F = {
    slots: {
      root: (v == null ? void 0 : v.root) ?? c.Root,
      badge: (v == null ? void 0 : v.badge) ?? c.Badge
    },
    slotProps: {
      root: (T == null ? void 0 : T.root) ?? p.root,
      badge: (T == null ? void 0 : T.badge) ?? p.badge
    }
  }, [P, L] = pe("root", {
    elementType: s0,
    externalForwardedProps: {
      ...F,
      ...E
    },
    ownerState: V,
    className: ne(U.root, a),
    ref: n,
    additionalProps: {
      as: l
    }
  }), [K, J] = pe("badge", {
    elementType: l0,
    externalForwardedProps: F,
    ownerState: V,
    className: U.badge
  });
  return /* @__PURE__ */ x.jsxs(P, {
    ...L,
    children: [d, /* @__PURE__ */ x.jsx(K, {
      ...J,
      children: j
    })]
  });
});
process.env.NODE_ENV !== "production" && (oa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: r.shape({
    horizontal: r.oneOf(["left", "right"]),
    vertical: r.oneOf(["bottom", "top"])
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: r.node,
  /**
   * The badge will be added relative to this node.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Badge: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    badge: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: r.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: r.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: r.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: r.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    badge: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    badge: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: r.oneOfType([r.oneOf(["dot", "standard"]), r.string])
});
function c0(e) {
  return fe("MuiButton", e);
}
const On = me("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Cu = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Cu.displayName = "ButtonGroupContext");
const Ou = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ou.displayName = "ButtonGroupButtonContext");
const u0 = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: i,
    variant: a,
    loading: s,
    loadingPosition: l,
    classes: c
  } = e, p = {
    root: ["root", s && "loading", a, `${a}${H(t)}`, `size${H(i)}`, `${a}Size${H(i)}`, `color${H(t)}`, n && "disableElevation", o && "fullWidth", s && `loadingPosition${H(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${H(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${H(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = be(p, c0, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Ru = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], p0 = Z(sn, {
  shouldForwardProp: (e) => ur(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${H(n.color)}`], t[`size${H(n.size)}`], t[`${n.variant}Size${H(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Se(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${On.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${On.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${On.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${On.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(ct()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[o].main,
        "--variant-outlinedColor": (e.vars || e).palette[o].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.5)` : Be(e.palette[o].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[o].contrastText,
        "--variant-containedBg": (e.vars || e).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[o].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette[o].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[o].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette[o].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${On.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${On.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${On.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), d0 = Z("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${H(n.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Ru]
})), f0 = Z("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${H(n.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Ru]
})), m0 = Z("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Sl = Z("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Wo = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = b.useContext(Cu), i = b.useContext(Ou), a = Dr(o, t), s = ge({
    props: a,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: p = "button",
    className: d,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: y = !1,
    endIcon: g,
    focusVisibleClassName: u,
    fullWidth: v = !1,
    id: T,
    loading: O = null,
    loadingIndicator: w,
    loadingPosition: E = "center",
    size: S = "medium",
    startIcon: k,
    type: R,
    variant: A = "text",
    ...N
  } = s, m = oi(T), $ = w ?? /* @__PURE__ */ x.jsx(ja, {
    "aria-labelledby": m,
    color: "inherit",
    size: 16
  }), _ = {
    ...s,
    color: c,
    component: p,
    disabled: f,
    disableElevation: h,
    disableFocusRipple: y,
    fullWidth: v,
    loading: O,
    loadingIndicator: $,
    loadingPosition: E,
    size: S,
    type: R,
    variant: A
  }, M = u0(_), z = (k || O && E === "start") && /* @__PURE__ */ x.jsx(d0, {
    className: M.startIcon,
    ownerState: _,
    children: k || /* @__PURE__ */ x.jsx(Sl, {
      className: M.loadingIconPlaceholder,
      ownerState: _
    })
  }), I = (g || O && E === "end") && /* @__PURE__ */ x.jsx(f0, {
    className: M.endIcon,
    ownerState: _,
    children: g || /* @__PURE__ */ x.jsx(Sl, {
      className: M.loadingIconPlaceholder,
      ownerState: _
    })
  }), j = i || "", V = typeof O == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ x.jsx("span", {
      className: M.loadingWrapper,
      style: {
        display: "contents"
      },
      children: O && /* @__PURE__ */ x.jsx(m0, {
        className: M.loadingIndicator,
        ownerState: _,
        children: $
      })
    })
  ) : null;
  return /* @__PURE__ */ x.jsxs(p0, {
    ownerState: _,
    className: ne(o.className, M.root, d, j),
    component: p,
    disabled: f || O,
    focusRipple: !y,
    focusVisibleClassName: ne(M.focusVisible, u),
    ref: n,
    type: R,
    id: O ? m : T,
    ...N,
    classes: M,
    children: [z, E !== "end" && V, l, E === "end" && V, I]
  });
});
process.env.NODE_ENV !== "production" && (Wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * Element placed after the children.
   */
  endIcon: r.node,
  /**
   * @ignore
   */
  focusVisibleClassName: r.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: r.string,
  /**
   * @ignore
   */
  id: r.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: r.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: r.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: r.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * Element placed before the children.
   */
  startIcon: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: r.oneOfType([r.oneOf(["contained", "outlined", "text"]), r.string])
});
const Pu = nm({
  createStyledComponent: Z("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${H(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => ge({
    props: e,
    name: "MuiContainer"
  })
});
process.env.NODE_ENV !== "production" && (Pu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: r.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: r.oneOfType([r.oneOf(["xs", "sm", "md", "lg", "xl", !1]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function g0(e) {
  return fe("MuiDialog", e);
}
const Ii = me("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Ua = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Ua.displayName = "DialogContext");
const h0 = Z(Ia, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), y0 = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: o,
    fullWidth: i,
    fullScreen: a
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${H(n)}`],
    paper: ["paper", `paperScroll${H(n)}`, `paperWidth${H(String(o))}`, i && "paperFullWidth", a && "paperFullScreen"]
  };
  return be(s, g0, t);
}, b0 = Z(ci, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), v0 = Z("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${H(n.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), x0 = Z(xn, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${H(n.scroll)}`], t[`paperWidth${H(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Se(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${Ii.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${Ii.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${Ii.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), ku = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiDialog"
  }), i = $t(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": c = !0,
    BackdropComponent: p,
    BackdropProps: d,
    children: f,
    className: h,
    disableEscapeKeyDown: y = !1,
    fullScreen: g = !1,
    fullWidth: u = !1,
    maxWidth: v = "sm",
    onClick: T,
    onClose: O,
    open: w,
    PaperComponent: E = xn,
    PaperProps: S = {},
    scroll: k = "paper",
    slots: R = {},
    slotProps: A = {},
    TransitionComponent: N = Ao,
    transitionDuration: m = a,
    TransitionProps: $,
    ..._
  } = o, M = {
    ...o,
    disableEscapeKeyDown: y,
    fullScreen: g,
    fullWidth: u,
    maxWidth: v,
    scroll: k
  }, z = y0(M), I = b.useRef(), j = (ae) => {
    I.current = ae.target === ae.currentTarget;
  }, V = (ae) => {
    T && T(ae), I.current && (I.current = null, O && O(ae, "backdropClick"));
  }, U = oi(l), F = b.useMemo(() => ({
    titleId: U
  }), [U]), P = {
    transition: N,
    ...R
  }, L = {
    transition: $,
    paper: S,
    backdrop: d,
    ...A
  }, K = {
    slots: P,
    slotProps: L
  }, [J, Q] = pe("root", {
    elementType: b0,
    shouldForwardComponentProp: !0,
    externalForwardedProps: K,
    ownerState: M,
    className: ne(z.root, h),
    ref: n
  }), [re, B] = pe("backdrop", {
    elementType: h0,
    shouldForwardComponentProp: !0,
    externalForwardedProps: K,
    ownerState: M
  }), [Y, X] = pe("paper", {
    elementType: x0,
    shouldForwardComponentProp: !0,
    externalForwardedProps: K,
    ownerState: M,
    className: ne(z.paper, S.className)
  }), [le, q] = pe("container", {
    elementType: v0,
    externalForwardedProps: K,
    ownerState: M,
    className: z.container
  }), [ie, W] = pe("transition", {
    elementType: Ao,
    externalForwardedProps: K,
    ownerState: M,
    additionalProps: {
      appear: !0,
      in: w,
      timeout: m,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ x.jsx(J, {
    closeAfterTransition: !0,
    slots: {
      backdrop: re
    },
    slotProps: {
      backdrop: {
        transitionDuration: m,
        as: p,
        ...B
      }
    },
    disableEscapeKeyDown: y,
    onClose: O,
    open: w,
    onClick: V,
    ...Q,
    ..._,
    children: /* @__PURE__ */ x.jsx(ie, {
      ...W,
      children: /* @__PURE__ */ x.jsx(le, {
        onMouseDown: j,
        ...q,
        children: /* @__PURE__ */ x.jsx(Y, {
          as: E,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": U,
          "aria-modal": c,
          ...X,
          children: /* @__PURE__ */ x.jsx(Ua.Provider, {
            value: F,
            children: f
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ku.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": r.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": r.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": r.oneOfType([r.oneOf(["false", "true"]), r.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * @ignore
   */
  BackdropProps: r.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: r.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: r.oneOfType([r.oneOf(["xs", "sm", "md", "lg", "xl", !1]), r.string]),
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: r.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: r.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: r.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    container: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    container: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: r.object
});
function T0(e) {
  return fe("MuiDialogActions", e);
}
me("MuiDialogActions", ["root", "spacing"]);
const E0 = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return be({
    root: ["root", !n && "spacing"]
  }, T0, t);
}, S0 = Z("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), $u = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: a = !1,
    ...s
  } = o, l = {
    ...o,
    disableSpacing: a
  }, c = E0(l);
  return /* @__PURE__ */ x.jsx(S0, {
    className: ne(c.root, i),
    ownerState: l,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && ($u.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function w0(e) {
  return fe("MuiDialogContent", e);
}
me("MuiDialogContent", ["root", "dividers"]);
function C0(e) {
  return fe("MuiDialogTitle", e);
}
const O0 = me("MuiDialogTitle", ["root"]), R0 = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return be({
    root: ["root", n && "dividers"]
  }, w0, t);
}, P0 = Z("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Se(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${O0.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Mu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: a = !1,
    ...s
  } = o, l = {
    ...o,
    dividers: a
  }, c = R0(l);
  return /* @__PURE__ */ x.jsx(P0, {
    className: ne(c.root, i),
    ownerState: l,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Mu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const k0 = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"]
  }, C0, t);
}, $0 = Z(ui, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Iu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const o = ge({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: a,
    ...s
  } = o, l = o, c = k0(l), {
    titleId: p = a
  } = b.useContext(Ua);
  return /* @__PURE__ */ x.jsx($0, {
    component: "h2",
    className: ne(c.root, i),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: a ?? p,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Iu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * @ignore
   */
  id: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function M0({ content: e }) {
  return /* @__PURE__ */ x.jsx("div", { className: "flex items-start p-2 bg-white border rounded shadow-sm text-left", children: /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx("p", { className: "text-sm", children: e }) }) });
}
const ia = "2rem", aa = [
  //{ c: 1, w: 300 },   // 1 column on screens < 300px
  { c: 1, w: 500 },
  // 2 columns between 300px - 500px
  { c: 3, w: 800 },
  // 4 columns between 500px - 800px
  { c: 6, w: 1024 }
  // 6 columns between 800px - 1024px
  //{ c: 8, w: 1200 },  // 8 columns on screens > 1200px
], sa = {
  acceptWidgets: !0,
  removable: "#trash",
  sizeToContent: !0,
  minRow: 5,
  columnOpts: {
    breakpointForWindow: !0,
    breakpoints: aa,
    layout: "moveScale",
    columnMax: 12
  },
  margin: 5,
  cellHeight: ia,
  subGridOpts: {
    acceptWidgets: !0,
    removable: "#trash",
    sizeToContent: !0,
    columnOpts: {
      breakpoints: aa,
      layout: "moveScale"
    },
    margin: 5,
    minRow: 1,
    cellHeight: ia
  },
  children: []
}, ju = {
  acceptWidgets: !0,
  removable: "#trash",
  sizeToContent: !0,
  subGridOpts: {
    acceptWidgets: !0,
    removable: "#trash",
    columnOpts: {
      breakpoints: aa,
      layout: "moveScale"
    },
    margin: 5,
    minRow: 3,
    cellHeight: ia,
    children: []
  },
  children: []
}, go = () => ({
  id: `${ca()}`,
  title: "untitled page",
  grids: sa
}), wl = {
  Text: {
    content: "Any content other than text are what we call cards. Cards can be accessed by clicking the ➕ button or typing / at the beginning of a paragraph.\nEven better, continue typing to find the card you're looking for, hit enter, and avoid dragging your mouse altogether.\nSome cards have a handy little shortcut, to keep you on track and in flow. Use --- to divide your paragraphs with a line, or ``` to add a code block. You can also drag and drop images directly into the editor to bypass the menu. \nAny content other than text are what we call cards. Cards can be accessed by clicking the ➕ button or typing / at the beginning of a paragraph.",
    title: "This is text card"
  }
}, Cl = {
  Text: M0
}, Ol = (e) => {
  if (e) {
    const t = e();
    return { ...Cl, ...t };
  }
  return Cl;
}, Rl = (e) => {
  if (e) {
    const t = e();
    return { ...wl, ...t };
  }
  return wl;
};
function I0({
  componentMap: e,
  componentProps: t
}) {
  const [n, o] = b.useState("widget"), [i, a] = b.useState([]), { addWidget: s, addSubGrid: l } = Ur(), c = $t(), p = fu(c.breakpoints.down("sm")), d = (v, T) => {
    o(T);
  }, f = (v, T) => {
    v.dataTransfer.setData("text/plain", T), v.target.style.opacity = "0.4";
  }, h = (v) => {
    v.target.style.opacity = "1";
  }, y = (v) => {
    a(
      (T) => T.includes(v) ? T.filter((O) => O !== v) : [...T, v]
    );
  }, g = () => {
    i.forEach((v) => {
      if (v === "SubGrid")
        l((T) => ({
          h: 3,
          w: 12,
          x: 0,
          y: 0,
          ...ju
        }));
      else {
        const T = ca();
        s((O) => ({
          h: 4,
          w: 4,
          x: 0,
          y: 0,
          id: T,
          sizeToContent: !0,
          content: JSON.stringify({
            name: v,
            props: t[v]
          })
        }));
      }
    }), a([]);
  }, u = () => i.length === 0 ? "Add Widgets" : i.length === 1 ? `Add ${i[0]}` : `Add ${i.length} Widgets`;
  return /* @__PURE__ */ x.jsxs(kn, { sx: { width: "100%", typography: "body1", position: "relative", pb: p ? 8 : 0 }, children: [
    /* @__PURE__ */ x.jsxs(mu, { value: n, children: [
      /* @__PURE__ */ x.jsx(kn, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ x.jsxs(Tu, { onChange: d, "aria-label": "tablist", children: [
        /* @__PURE__ */ x.jsx(na, { label: "Widget", value: "widget" }),
        /* @__PURE__ */ x.jsx(na, { label: "Properties", value: "properties" })
      ] }) }),
      /* @__PURE__ */ x.jsxs(
        ra,
        {
          value: "widget",
          className: "sidepanel",
          sx: {
            overflowX: "auto",
            maxWidth: "100%",
            padding: { xs: 1, sm: 2 }
          },
          children: [
            i.length > 0 && /* @__PURE__ */ x.jsxs(kn, { sx: { mb: 2, display: "flex", alignItems: "center" }, children: [
              /* @__PURE__ */ x.jsx(
                Su,
                {
                  label: `${i.length} selected`,
                  color: "primary",
                  size: "small",
                  sx: { mr: 1 }
                }
              ),
              /* @__PURE__ */ x.jsx(
                Wo,
                {
                  size: "small",
                  variant: "text",
                  onClick: () => a([]),
                  children: "Clear"
                }
              )
            ] }),
            /* @__PURE__ */ x.jsx(
              kn,
              {
                component: "section",
                sx: {
                  p: 2,
                  border: "1px dashed grey",
                  backgroundColor: i.includes("SubGrid") ? "action.selected" : "background.paper",
                  cursor: "pointer",
                  position: "relative",
                  mb: 2
                },
                onClick: () => y("SubGrid"),
                children: /* @__PURE__ */ x.jsx(
                  "div",
                  {
                    className: "grid-stack-item grid-stack-item-widget",
                    draggable: !0,
                    onDragStart: (v) => f(v, "SubGrid"),
                    onDragEnd: h,
                    "data-gs-type": "SubGrid",
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%"
                    },
                    children: /* @__PURE__ */ x.jsxs("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ x.jsx("div", { style: {
                        position: "absolute",
                        top: 4,
                        right: 4,
                        visibility: i.includes("SubGrid") ? "visible" : "hidden"
                      }, children: /* @__PURE__ */ x.jsx(xl, { color: "success" }) }),
                      /* @__PURE__ */ x.jsx("div", { children: "SubGrid" })
                    ] })
                  }
                )
              }
            ),
            /* @__PURE__ */ x.jsx(tr, { sx: { my: 2 } }),
            /* @__PURE__ */ x.jsx(
              Fo,
              {
                container: !0,
                spacing: { xs: 2, md: 3 },
                columns: { xs: 4, sm: 8, md: 12 },
                children: Array.from(Object.keys(e)).map((v, T) => /* @__PURE__ */ x.jsx(Fo, { size: { xs: 2, sm: 4, md: 4 }, children: /* @__PURE__ */ x.jsx(
                  kn,
                  {
                    component: "section",
                    sx: {
                      p: 2,
                      border: "1px dashed grey",
                      backgroundColor: i.includes(v) ? "action.selected" : "background.paper",
                      cursor: "pointer",
                      position: "relative"
                    },
                    onClick: () => y(v),
                    children: /* @__PURE__ */ x.jsxs(
                      "div",
                      {
                        className: "grid-stack-item grid-stack-item-widget",
                        draggable: !0,
                        onDragStart: (O) => f(O, v),
                        onDragEnd: h,
                        "data-gs-type": v,
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: [
                          /* @__PURE__ */ x.jsx("div", { style: {
                            position: "absolute",
                            top: 4,
                            right: 4,
                            visibility: i.includes(v) ? "visible" : "hidden"
                          }, children: /* @__PURE__ */ x.jsx(xl, { color: "success" }) }),
                          /* @__PURE__ */ x.jsx(
                            "div",
                            {
                              style: {
                                whiteSpace: "normal",
                                wordBreak: "break-word",
                                textAlign: "center"
                              },
                              children: v
                            }
                          )
                        ]
                      }
                    )
                  }
                ) }, T))
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ x.jsx(ra, { value: "properties", children: "Item Two" })
    ] }),
    i.length > 0 && (p ? /* @__PURE__ */ x.jsx(
      Wa,
      {
        color: "primary",
        "aria-label": "add",
        onClick: g,
        sx: {
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1e3
        },
        children: /* @__PURE__ */ x.jsx(
          oa,
          {
            badgeContent: i.length,
            color: "secondary",
            overlap: "circular",
            anchorOrigin: { vertical: "top", horizontal: "right" },
            children: /* @__PURE__ */ x.jsx(ta, {})
          }
        )
      }
    ) : /* @__PURE__ */ x.jsx(
      Wo,
      {
        variant: "contained",
        color: "primary",
        startIcon: /* @__PURE__ */ x.jsx(
          oa,
          {
            badgeContent: i.length,
            color: "secondary",
            overlap: "circular",
            sx: { mr: 1 },
            children: /* @__PURE__ */ x.jsx(ta, {})
          }
        ),
        onClick: g,
        sx: {
          position: "absolute",
          bottom: 16,
          right: 16,
          zIndex: 1e3
        },
        children: u()
      }
    ))
  ] });
}
const j0 = kl((e, t) => {
  const { addWidget: n, addSubGrid: o, saveOptions: i } = Ur();
  return zu(t, () => ({
    saveLayout: () => i(),
    addWidget: n,
    addSubGrid: o
  })), null;
}), N0 = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
}), "DeleteOutline");
function A0({ onDropDelete: e }) {
  const t = Gt((o) => {
    o.preventDefault(), e();
  }, [e]), n = (o) => {
    o.preventDefault();
  };
  return /* @__PURE__ */ x.jsx(
    Pu,
    {
      id: "trash",
      onDrop: t,
      onDragOver: n,
      disableGutters: !0,
      sx: {
        bgcolor: "rgba(255, 205, 210, 0.5)",
        // light red background
        minHeight: "3.5rem",
        height: "4.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 0
      },
      children: /* @__PURE__ */ x.jsx(
        wu,
        {
          sx: {
            bgcolor: "#ffcdd2",
            // light red background
            width: "100%",
            height: "100%",
            m: 3
          },
          variant: "rounded",
          children: /* @__PURE__ */ x.jsx(
            N0,
            {
              sx: {
                fontSize: "3.5rem",
                width: "3.5rem",
                color: "rgba(100, 100, 100, 0.4)"
                // red icon
              }
            }
          )
        }
      )
    }
  );
}
const D0 = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), _0 = Le(/* @__PURE__ */ x.jsx("path", {
  d: "M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2"
}), "CopyAllOutlined");
function B0({ pageInfo: e }) {
  const [t, n] = St(void 0);
  return Co(() => {
    e && n(e);
  }, [e]), /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(
    "div",
    {
      style: {
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(2, 1fr)"
      },
      children: /* @__PURE__ */ x.jsx("div", { id: "pageinfo", children: /* @__PURE__ */ x.jsx(
        "pre",
        {
          style: {
            backgroundColor: "#f3f4f6",
            padding: "1rem",
            borderRadius: "0.25rem",
            overflow: "auto"
          },
          children: JSON.stringify(t || {}, null, 2)
        }
      ) })
    }
  ) });
}
const L0 = Z(ku)(({ theme: e }) => ({
  "& .MuiDialogContent-root": {
    padding: e.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: e.spacing(1)
  }
}));
function z0({
  isOpen: e,
  pageInfo: t,
  resetOpenInfo: n
}) {
  const [o, i] = b.useState(!1), [a, s] = b.useState(!1);
  b.useEffect(() => {
    e && i(!0);
  }, [e, t]);
  const l = () => {
    i(!1), n(!1);
  }, c = () => {
    var p;
    navigator.clipboard.writeText(
      ((p = document.getElementById("pageinfo")) == null ? void 0 : p.innerText) || ""
    ), s(!0), setTimeout(() => {
      s(!1);
    }, 3e3);
  };
  return /* @__PURE__ */ x.jsxs(
    L0,
    {
      onClose: l,
      "aria-labelledby": "customized-dialog-title",
      open: o,
      children: [
        /* @__PURE__ */ x.jsxs(Iu, { sx: { m: 0, p: 2 }, id: "customized-dialog-title", children: [
          "Page Information",
          /* @__PURE__ */ x.jsxs(
            lt,
            {
              "aria-label": "share",
              onClick: c,
              sx: {
                marginLeft: "30px"
              },
              children: [
                /* @__PURE__ */ x.jsx(_0, {}),
                a && /* @__PURE__ */ x.jsx(ui, { children: "copied" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx(
          lt,
          {
            "aria-label": "close",
            onClick: l,
            sx: (p) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: p.palette.grey[500]
            }),
            children: /* @__PURE__ */ x.jsx(D0, {})
          }
        ),
        /* @__PURE__ */ x.jsx(Mu, { dividers: !0, children: /* @__PURE__ */ x.jsx(B0, { pageInfo: t }) }),
        /* @__PURE__ */ x.jsx($u, { children: /* @__PURE__ */ x.jsx(Wo, { autoFocus: !0, onClick: l, children: "Close" }) })
      ]
    }
  );
}
const Ir = 360, F0 = Z("main", {
  shouldForwardProp: (e) => e !== "open" && e !== "mode"
})(({ theme: e, open: t, mode: n }) => ({
  flexGrow: 1,
  padding: e.spacing(3),
  position: "relative",
  // Default transitions for all modes
  transition: e.transitions.create("margin", {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.leavingScreen
  }),
  // Only apply desktop drawer behavior in edit mode
  ...n === "edit" && t && {
    transition: e.transitions.create("margin", {
      easing: e.transitions.easing.easeOut,
      duration: e.transitions.duration.enteringScreen
    })
  },
  // Reset margin for non-edit modes and mobile
  marginRight: 0
})), W0 = Z(Xc, {
  shouldForwardProp: (e) => e !== "open"
})(({ theme: e }) => ({
  transition: e.transitions.create(["margin", "width"], {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.leavingScreen
  }),
  variants: [
    {
      props: ({ open: t }) => t,
      style: {
        width: `calc(100% - ${Ir}px)`,
        transition: e.transitions.create(["margin", "width"], {
          easing: e.transitions.easing.easeOut,
          duration: e.transitions.duration.enteringScreen
        }),
        marginRight: Ir
      }
    }
  ]
})), Pl = Z("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  padding: e.spacing(0, 1),
  // necessary for content to be below app bar
  ...e.mixins.toolbar,
  justifyContent: "flex-start"
}));
function q0({
  pageid: e,
  pageMode: t,
  onLoadLayout: n,
  onSaveLayout: o,
  componentMapProvider: i,
  componentPropsProvider: a,
  gobackList: s
}) {
  var re;
  const l = $t(), c = fu(l.breakpoints.down("sm")), p = c ? "100%" : Ir, [d, f] = St(!1), [h, y] = St(t || "edit"), [g, u] = St(go()), [v, T] = St(0), [O, w] = St(sa), E = Or(null), [S, k] = St(), [R, A] = St(!1), [
    N
    /*setShowMenubar*/
  ] = St(!0), [m, $] = St({
    save: { show: !1, message: "" },
    reload: { show: !1, message: "" }
  }), _ = Gt(
    (B, Y) => {
      $((X) => ({
        ...X,
        [B]: { show: !0, message: Y }
      })), setTimeout(() => {
        $((X) => ({
          ...X,
          [B]: { ...X[B], show: !1 }
        }));
      }, 2e3);
    },
    [$]
  ), M = () => h === "edit", z = () => {
    f(!0);
  }, I = () => {
    f(!1);
  }, j = Gt(async (B) => {
    const Y = await n(B) || go();
    return u(Y), Y.grids;
  }, [n]), V = Gt(async () => {
    try {
      const B = await j(e);
      w(B), T((Y) => Y + 1), _("reload", "Layout reloaded!");
    } catch {
      _("reload", "Reload failed!");
    }
  }, [e, j, _]);
  Co(() => {
    e ? (async () => {
      try {
        await V();
      } catch (Y) {
        console.error("Failed to fetch pages:", Y);
      }
    })() : u(go());
  }, [e, V]);
  const U = async (B) => {
    var Y;
    try {
      if (o) {
        const X = (Y = E.current) == null ? void 0 : Y.saveLayout();
        X && (g.grids = X, console.log("Saving layout:", g.id, e), await o(e, g), _("save", B || "Layout saved successfully!"));
      }
    } catch {
      _("save", "Failed to save layout!");
    }
  }, F = async () => {
    w(sa), T((B) => B + 1);
  }, P = async () => {
    await F(), u(go()), await U("New page created!");
  }, L = () => {
    s && s();
  }, K = (B) => {
    y(B);
  }, J = (B) => {
    k(B);
  }, Q = () => {
    var Y;
    const B = JSON.parse(JSON.stringify(g));
    return B.grids = (Y = E.current) == null ? void 0 : Y.saveLayout(), B;
  };
  return Co(() => {
    S && E.current && (S.name !== "SubGrid" ? E.current.addWidget((B) => ({
      ...S,
      sizeToContent: !0,
      // Ensure the widget is sized to its content
      content: JSON.stringify({
        name: S.name,
        props: Rl(a)[S.name]
      })
    })) : E.current.addSubGrid((B) => ({
      h: 4,
      w: 12,
      x: 0,
      y: 0,
      ...ju
    })));
  }, [S, a]), /* @__PURE__ */ x.jsx(Hu, { initialOptions: O, children: /* @__PURE__ */ x.jsxs(kn, { sx: { display: "flex" }, children: [
    M() && /* @__PURE__ */ x.jsx(Zc, {}),
    M() && /* @__PURE__ */ x.jsx(W0, { position: "fixed", open: d, children: /* @__PURE__ */ x.jsxs(Jc, { children: [
      /* @__PURE__ */ x.jsx(
        ui,
        {
          variant: "h6",
          noWrap: !0,
          sx: { flexGrow: 1 },
          component: "div",
          children: g.title || "Untitled Page"
        }
      ),
      /* @__PURE__ */ x.jsx(mn, { title: "Create new page", children: /* @__PURE__ */ x.jsx(
        lt,
        {
          color: "inherit",
          edge: "end",
          onClick: P,
          children: /* @__PURE__ */ x.jsx(ta, {})
        }
      ) }),
      /* @__PURE__ */ x.jsx(
        pu,
        {
          open: Object.values(m).some((B) => B.show),
          autoHideDuration: 3e3,
          onClose: () => $({
            save: { show: !1, message: "" },
            reload: { show: !1, message: "" }
          }),
          anchorOrigin: { vertical: "top", horizontal: "center" },
          children: /* @__PURE__ */ x.jsx(du, { severity: "info", sx: { width: "100%" }, children: ((re = Object.values(m).find((B) => B.show)) == null ? void 0 : re.message) || "" })
        }
      ),
      /* @__PURE__ */ x.jsx(mn, { title: "Save page", children: /* @__PURE__ */ x.jsx(
        lt,
        {
          color: "inherit",
          edge: "end",
          onClick: () => U(),
          children: /* @__PURE__ */ x.jsx(bv, { sx: { marginX: 1 } })
        }
      ) }),
      /* @__PURE__ */ x.jsx(
        mn,
        {
          title: "Preview page",
          onClick: () => K("preview"),
          children: /* @__PURE__ */ x.jsx(lt, { color: "inherit", edge: "end", children: /* @__PURE__ */ x.jsx(yv, { sx: { marginX: 1 } }) })
        }
      ),
      /* @__PURE__ */ x.jsx(mn, { title: "reload page", onClick: () => V(), children: /* @__PURE__ */ x.jsx(lt, { color: "inherit", edge: "end", children: /* @__PURE__ */ x.jsx(Ev, { sx: { marginX: 1 } }) }) }),
      /* @__PURE__ */ x.jsx(mn, { title: "Clear page", children: /* @__PURE__ */ x.jsx(
        lt,
        {
          color: "inherit",
          edge: "end",
          onClick: F,
          children: /* @__PURE__ */ x.jsx(vv, { sx: { marginX: 1 } })
        }
      ) }),
      /* @__PURE__ */ x.jsx(mn, { title: "Page Info", onClick: () => A(!0), children: /* @__PURE__ */ x.jsx(lt, { color: "inherit", edge: "end", children: /* @__PURE__ */ x.jsx(Tv, { sx: { marginX: 1 } }) }) }),
      /* @__PURE__ */ x.jsx(
        mn,
        {
          title: "Back to page list",
          onClick: () => L(),
          children: /* @__PURE__ */ x.jsx(lt, { color: "inherit", edge: "end", children: /* @__PURE__ */ x.jsx(xv, { sx: { marginLeft: 1, marginRight: 2 } }) })
        }
      ),
      /* @__PURE__ */ x.jsx(
        lt,
        {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "end",
          onClick: () => z(),
          sx: [d && { display: "none" }],
          children: /* @__PURE__ */ x.jsx(wy, {})
        }
      )
    ] }) }),
    h === "preview" && /* @__PURE__ */ x.jsx(
      Wa,
      {
        color: "secondary",
        "aria-label": "edit",
        sx: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1200
        },
        children: /* @__PURE__ */ x.jsx(Ry, { onClick: () => K("edit") })
      }
    ),
    /* @__PURE__ */ x.jsxs(
      F0,
      {
        open: d,
        mode: h,
        sx: {
          padding: 0.5,
          marginRight: h === "edit" && !c && !d ? `-${Ir}px` : 0
        },
        className: `grid-stack-mode-${h}`,
        children: [
          M() && /* @__PURE__ */ x.jsx(Pl, {}),
          /* @__PURE__ */ x.jsx(j0, { ref: E }),
          /* @__PURE__ */ x.jsx(op, { onGridStackDropEvent: J, children: /* @__PURE__ */ x.jsx(
            ny,
            {
              componentMap: Ol(i),
              showMenubar: N
            }
          ) })
        ]
      }
    ),
    M() && /* @__PURE__ */ x.jsxs(
      Kc,
      {
        sx: {
          // On mobile: full width when open, hidden when closed
          // On desktop: fixed width always 'unset'
          width: c ? d ? "unset" : 0 : Ir,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: p,
            boxSizing: "border-box"
          }
        },
        variant: "persistent",
        anchor: "right",
        open: d,
        children: [
          /* @__PURE__ */ x.jsx(Pl, { children: /* @__PURE__ */ x.jsx(lt, { onClick: () => I(), children: l.direction === "rtl" ? /* @__PURE__ */ x.jsx(Cy, {}) : /* @__PURE__ */ x.jsx(Oy, {}) }) }),
          /* @__PURE__ */ x.jsx(tr, {}),
          /* @__PURE__ */ x.jsx(A0, { onDropDelete: () => {
          } }),
          /* @__PURE__ */ x.jsx(tr, {}),
          /* @__PURE__ */ x.jsx(
            I0,
            {
              componentMap: Ol(i),
              componentProps: Rl(a)
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ x.jsx(
      z0,
      {
        isOpen: R,
        pageInfo: Q(),
        resetOpenInfo: A
      }
    )
  ] }) }, v);
}
export {
  Hu as GridStackProvider,
  ny as GridStackRender,
  op as GridStackRenderProvider,
  q0 as StackPage,
  Ur as useGridStackContext,
  Y0 as useGridStackWidgetContext
};
//# sourceMappingURL=gridstack-page.es.js.map
