import * as ie from 'react';
import we, {
  createContext as Mn,
  useContext as pr,
  useEffect as ee,
  useState as ye,
  useMemo as q,
  useCallback as _e,
  useRef as Yr,
} from 'react';
import { Checkbox as Fn, Spin as Nn, Empty as Ln } from 'antd';
var Ae =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  T = { exports: {} },
  ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function Wn() {
  if (qr) return ve;
  qr = 1;
  var e = we,
    r = Symbol.for('react.element'),
    t = Symbol.for('react.fragment'),
    n = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, f, v) {
    var d,
      p = {},
      C = null,
      b = null;
    v !== void 0 && (C = '' + v),
      f.key !== void 0 && (C = '' + f.key),
      f.ref !== void 0 && (b = f.ref);
    for (d in f) n.call(f, d) && !o.hasOwnProperty(d) && (p[d] = f[d]);
    if (s && s.defaultProps)
      for (d in ((f = s.defaultProps), f)) p[d] === void 0 && (p[d] = f[d]);
    return {
      $$typeof: r,
      type: s,
      key: C,
      ref: b,
      props: p,
      _owner: i.current,
    };
  }
  return (ve.Fragment = t), (ve.jsx = c), (ve.jsxs = c), ve;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function Bn() {
  return (
    Jr ||
      ((Jr = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var e = we,
            r = Symbol.for('react.element'),
            t = Symbol.for('react.portal'),
            n = Symbol.for('react.fragment'),
            i = Symbol.for('react.strict_mode'),
            o = Symbol.for('react.profiler'),
            c = Symbol.for('react.provider'),
            s = Symbol.for('react.context'),
            f = Symbol.for('react.forward_ref'),
            v = Symbol.for('react.suspense'),
            d = Symbol.for('react.suspense_list'),
            p = Symbol.for('react.memo'),
            C = Symbol.for('react.lazy'),
            b = Symbol.for('react.offscreen'),
            S = Symbol.iterator,
            B = '@@iterator';
          function H(a) {
            if (a === null || typeof a != 'object') return null;
            var l = (S && a[S]) || a[B];
            return typeof l == 'function' ? l : null;
          }
          var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function g(a) {
            {
              for (
                var l = arguments.length,
                  u = new Array(l > 1 ? l - 1 : 0),
                  h = 1;
                h < l;
                h++
              )
                u[h - 1] = arguments[h];
              w('error', a, u);
            }
          }
          function w(a, l, u) {
            {
              var h = M.ReactDebugCurrentFrame,
                _ = h.getStackAddendum();
              _ !== '' && ((l += '%s'), (u = u.concat([_])));
              var x = u.map(function (y) {
                return String(y);
              });
              x.unshift('Warning: ' + l),
                Function.prototype.apply.call(console[a], console, x);
            }
          }
          var F = !1,
            P = !1,
            J = !1,
            Ve = !1,
            cn = !1,
            Or;
          Or = Symbol.for('react.module.reference');
          function ln(a) {
            return !!(
              typeof a == 'string' ||
              typeof a == 'function' ||
              a === n ||
              a === o ||
              cn ||
              a === i ||
              a === v ||
              a === d ||
              Ve ||
              a === b ||
              F ||
              P ||
              J ||
              (typeof a == 'object' &&
                a !== null &&
                (a.$$typeof === C ||
                  a.$$typeof === p ||
                  a.$$typeof === c ||
                  a.$$typeof === s ||
                  a.$$typeof === f ||
                  a.$$typeof === Or ||
                  a.getModuleId !== void 0))
            );
          }
          function fn(a, l, u) {
            var h = a.displayName;
            if (h) return h;
            var _ = l.displayName || l.name || '';
            return _ !== '' ? u + '(' + _ + ')' : u;
          }
          function Tr(a) {
            return a.displayName || 'Context';
          }
          function z(a) {
            if (a == null) return null;
            if (
              (typeof a.tag == 'number' &&
                g(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                ),
              typeof a == 'function')
            )
              return a.displayName || a.name || null;
            if (typeof a == 'string') return a;
            switch (a) {
              case n:
                return 'Fragment';
              case t:
                return 'Portal';
              case o:
                return 'Profiler';
              case i:
                return 'StrictMode';
              case v:
                return 'Suspense';
              case d:
                return 'SuspenseList';
            }
            if (typeof a == 'object')
              switch (a.$$typeof) {
                case s:
                  var l = a;
                  return Tr(l) + '.Consumer';
                case c:
                  var u = a;
                  return Tr(u._context) + '.Provider';
                case f:
                  return fn(a, a.render, 'ForwardRef');
                case p:
                  var h = a.displayName || null;
                  return h !== null ? h : z(a.type) || 'Memo';
                case C: {
                  var _ = a,
                    x = _._payload,
                    y = _._init;
                  try {
                    return z(y(x));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var Z = Object.assign,
            ue = 0,
            $r,
            jr,
            Sr,
            Er,
            Ar,
            Pr,
            Rr;
          function kr() {}
          kr.__reactDisabledLog = !0;
          function un() {
            {
              if (ue === 0) {
                ($r = console.log),
                  (jr = console.info),
                  (Sr = console.warn),
                  (Er = console.error),
                  (Ar = console.group),
                  (Pr = console.groupCollapsed),
                  (Rr = console.groupEnd);
                var a = {
                  configurable: !0,
                  enumerable: !0,
                  value: kr,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: a,
                  log: a,
                  warn: a,
                  error: a,
                  group: a,
                  groupCollapsed: a,
                  groupEnd: a,
                });
              }
              ue++;
            }
          }
          function dn() {
            {
              if ((ue--, ue === 0)) {
                var a = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: Z({}, a, {
                    value: $r,
                  }),
                  info: Z({}, a, {
                    value: jr,
                  }),
                  warn: Z({}, a, {
                    value: Sr,
                  }),
                  error: Z({}, a, {
                    value: Er,
                  }),
                  group: Z({}, a, {
                    value: Ar,
                  }),
                  groupCollapsed: Z({}, a, {
                    value: Pr,
                  }),
                  groupEnd: Z({}, a, {
                    value: Rr,
                  }),
                });
              }
              ue < 0 &&
                g(
                  'disabledDepth fell below zero. This is a bug in React. Please file an issue.',
                );
            }
          }
          var ze = M.ReactCurrentDispatcher,
            Ke;
          function Te(a, l, u) {
            {
              if (Ke === void 0)
                try {
                  throw Error();
                } catch (_) {
                  var h = _.stack.trim().match(/\n( *(at )?)/);
                  Ke = (h && h[1]) || '';
                }
              return (
                `
` +
                Ke +
                a
              );
            }
          }
          var Ye = !1,
            $e;
          {
            var vn = typeof WeakMap == 'function' ? WeakMap : Map;
            $e = new vn();
          }
          function Ir(a, l) {
            if (!a || Ye) return '';
            {
              var u = $e.get(a);
              if (u !== void 0) return u;
            }
            var h;
            Ye = !0;
            var _ = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var x;
            (x = ze.current), (ze.current = null), un();
            try {
              if (l) {
                var y = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(y.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(y, []);
                  } catch (K) {
                    h = K;
                  }
                  Reflect.construct(a, [], y);
                } else {
                  try {
                    y.call();
                  } catch (K) {
                    h = K;
                  }
                  a.call(y.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (K) {
                  h = K;
                }
                a();
              }
            } catch (K) {
              if (K && h && typeof K.stack == 'string') {
                for (
                  var m = K.stack.split(`
`),
                    R = h.stack.split(`
`),
                    $ = m.length - 1,
                    j = R.length - 1;
                  $ >= 1 && j >= 0 && m[$] !== R[j];

                )
                  j--;
                for (; $ >= 1 && j >= 0; $--, j--)
                  if (m[$] !== R[j]) {
                    if ($ !== 1 || j !== 1)
                      do
                        if (($--, j--, j < 0 || m[$] !== R[j])) {
                          var N =
                            `
` + m[$].replace(' at new ', ' at ');
                          return (
                            a.displayName &&
                              N.includes('<anonymous>') &&
                              (N = N.replace('<anonymous>', a.displayName)),
                            typeof a == 'function' && $e.set(a, N),
                            N
                          );
                        }
                      while ($ >= 1 && j >= 0);
                    break;
                  }
              }
            } finally {
              (Ye = !1), (ze.current = x), dn(), (Error.prepareStackTrace = _);
            }
            var ne = a ? a.displayName || a.name : '',
              Kr = ne ? Te(ne) : '';
            return typeof a == 'function' && $e.set(a, Kr), Kr;
          }
          function hn(a, l, u) {
            return Ir(a, !1);
          }
          function pn(a) {
            var l = a.prototype;
            return !!(l && l.isReactComponent);
          }
          function je(a, l, u) {
            if (a == null) return '';
            if (typeof a == 'function') return Ir(a, pn(a));
            if (typeof a == 'string') return Te(a);
            switch (a) {
              case v:
                return Te('Suspense');
              case d:
                return Te('SuspenseList');
            }
            if (typeof a == 'object')
              switch (a.$$typeof) {
                case f:
                  return hn(a.render);
                case p:
                  return je(a.type, l, u);
                case C: {
                  var h = a,
                    _ = h._payload,
                    x = h._init;
                  try {
                    return je(x(_), l, u);
                  } catch {}
                }
              }
            return '';
          }
          var Se = Object.prototype.hasOwnProperty,
            Dr = {},
            Mr = M.ReactDebugCurrentFrame;
          function Ee(a) {
            if (a) {
              var l = a._owner,
                u = je(a.type, a._source, l ? l.type : null);
              Mr.setExtraStackFrame(u);
            } else Mr.setExtraStackFrame(null);
          }
          function gn(a, l, u, h, _) {
            {
              var x = Function.call.bind(Se);
              for (var y in a)
                if (x(a, y)) {
                  var m = void 0;
                  try {
                    if (typeof a[y] != 'function') {
                      var R = Error(
                        (h || 'React class') +
                          ': ' +
                          u +
                          ' type `' +
                          y +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof a[y] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                      );
                      throw ((R.name = 'Invariant Violation'), R);
                    }
                    m = a[y](
                      l,
                      y,
                      h,
                      u,
                      null,
                      'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
                    );
                  } catch ($) {
                    m = $;
                  }
                  m &&
                    !(m instanceof Error) &&
                    (Ee(_),
                    g(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      h || 'React class',
                      u,
                      y,
                      typeof m,
                    ),
                    Ee(null)),
                    m instanceof Error &&
                      !(m.message in Dr) &&
                      ((Dr[m.message] = !0),
                      Ee(_),
                      g('Failed %s type: %s', u, m.message),
                      Ee(null));
                }
            }
          }
          var bn = Array.isArray;
          function qe(a) {
            return bn(a);
          }
          function mn(a) {
            {
              var l = typeof Symbol == 'function' && Symbol.toStringTag,
                u =
                  (l && a[Symbol.toStringTag]) ||
                  a.constructor.name ||
                  'Object';
              return u;
            }
          }
          function yn(a) {
            try {
              return Fr(a), !1;
            } catch {
              return !0;
            }
          }
          function Fr(a) {
            return '' + a;
          }
          function Nr(a) {
            if (yn(a))
              return (
                g(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  mn(a),
                ),
                Fr(a)
              );
          }
          var de = M.ReactCurrentOwner,
            _n = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            Lr,
            Wr,
            Je;
          Je = {};
          function Cn(a) {
            if (Se.call(a, 'ref')) {
              var l = Object.getOwnPropertyDescriptor(a, 'ref').get;
              if (l && l.isReactWarning) return !1;
            }
            return a.ref !== void 0;
          }
          function xn(a) {
            if (Se.call(a, 'key')) {
              var l = Object.getOwnPropertyDescriptor(a, 'key').get;
              if (l && l.isReactWarning) return !1;
            }
            return a.key !== void 0;
          }
          function wn(a, l) {
            if (
              typeof a.ref == 'string' &&
              de.current &&
              l &&
              de.current.stateNode !== l
            ) {
              var u = z(de.current.type);
              Je[u] ||
                (g(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  z(de.current.type),
                  a.ref,
                ),
                (Je[u] = !0));
            }
          }
          function On(a, l) {
            {
              var u = function () {
                Lr ||
                  ((Lr = !0),
                  g(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    l,
                  ));
              };
              (u.isReactWarning = !0),
                Object.defineProperty(a, 'key', {
                  get: u,
                  configurable: !0,
                });
            }
          }
          function Tn(a, l) {
            {
              var u = function () {
                Wr ||
                  ((Wr = !0),
                  g(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    l,
                  ));
              };
              (u.isReactWarning = !0),
                Object.defineProperty(a, 'ref', {
                  get: u,
                  configurable: !0,
                });
            }
          }
          var $n = function (a, l, u, h, _, x, y) {
            var m = {
              $$typeof: r,
              type: a,
              key: l,
              ref: u,
              props: y,
              _owner: x,
            };
            return (
              (m._store = {}),
              Object.defineProperty(m._store, 'validated', {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(m, '_self', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: h,
              }),
              Object.defineProperty(m, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: _,
              }),
              Object.freeze && (Object.freeze(m.props), Object.freeze(m)),
              m
            );
          };
          function jn(a, l, u, h, _) {
            {
              var x,
                y = {},
                m = null,
                R = null;
              u !== void 0 && (Nr(u), (m = '' + u)),
                xn(l) && (Nr(l.key), (m = '' + l.key)),
                Cn(l) && ((R = l.ref), wn(l, _));
              for (x in l)
                Se.call(l, x) && !_n.hasOwnProperty(x) && (y[x] = l[x]);
              if (a && a.defaultProps) {
                var $ = a.defaultProps;
                for (x in $) y[x] === void 0 && (y[x] = $[x]);
              }
              if (m || R) {
                var j =
                  typeof a == 'function'
                    ? a.displayName || a.name || 'Unknown'
                    : a;
                m && On(y, j), R && Tn(y, j);
              }
              return $n(a, m, R, _, h, de.current, y);
            }
          }
          var Xe = M.ReactCurrentOwner,
            Br = M.ReactDebugCurrentFrame;
          function te(a) {
            if (a) {
              var l = a._owner,
                u = je(a.type, a._source, l ? l.type : null);
              Br.setExtraStackFrame(u);
            } else Br.setExtraStackFrame(null);
          }
          var Ze;
          Ze = !1;
          function Qe(a) {
            return typeof a == 'object' && a !== null && a.$$typeof === r;
          }
          function Hr() {
            {
              if (Xe.current) {
                var a = z(Xe.current.type);
                if (a)
                  return (
                    `

Check the render method of \`` +
                    a +
                    '`.'
                  );
              }
              return '';
            }
          }
          function Sn(a) {
            {
              if (a !== void 0) {
                var l = a.fileName.replace(/^.*[\\\/]/, ''),
                  u = a.lineNumber;
                return (
                  `

Check your code at ` +
                  l +
                  ':' +
                  u +
                  '.'
                );
              }
              return '';
            }
          }
          var Ur = {};
          function En(a) {
            {
              var l = Hr();
              if (!l) {
                var u = typeof a == 'string' ? a : a.displayName || a.name;
                u &&
                  (l =
                    `

Check the top-level render call using <` +
                    u +
                    '>.');
              }
              return l;
            }
          }
          function Gr(a, l) {
            {
              if (!a._store || a._store.validated || a.key != null) return;
              a._store.validated = !0;
              var u = En(l);
              if (Ur[u]) return;
              Ur[u] = !0;
              var h = '';
              a &&
                a._owner &&
                a._owner !== Xe.current &&
                (h = ' It was passed a child from ' + z(a._owner.type) + '.'),
                te(a),
                g(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  u,
                  h,
                ),
                te(null);
            }
          }
          function Vr(a, l) {
            {
              if (typeof a != 'object') return;
              if (qe(a))
                for (var u = 0; u < a.length; u++) {
                  var h = a[u];
                  Qe(h) && Gr(h, l);
                }
              else if (Qe(a)) a._store && (a._store.validated = !0);
              else if (a) {
                var _ = H(a);
                if (typeof _ == 'function' && _ !== a.entries)
                  for (var x = _.call(a), y; !(y = x.next()).done; )
                    Qe(y.value) && Gr(y.value, l);
              }
            }
          }
          function An(a) {
            {
              var l = a.type;
              if (l == null || typeof l == 'string') return;
              var u;
              if (typeof l == 'function') u = l.propTypes;
              else if (
                typeof l == 'object' &&
                (l.$$typeof === f || l.$$typeof === p)
              )
                u = l.propTypes;
              else return;
              if (u) {
                var h = z(l);
                gn(u, a.props, 'prop', h, a);
              } else if (l.PropTypes !== void 0 && !Ze) {
                Ze = !0;
                var _ = z(l);
                g(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  _ || 'Unknown',
                );
              }
              typeof l.getDefaultProps == 'function' &&
                !l.getDefaultProps.isReactClassApproved &&
                g(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                );
            }
          }
          function Pn(a) {
            {
              for (var l = Object.keys(a.props), u = 0; u < l.length; u++) {
                var h = l[u];
                if (h !== 'children' && h !== 'key') {
                  te(a),
                    g(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      h,
                    ),
                    te(null);
                  break;
                }
              }
              a.ref !== null &&
                (te(a),
                g('Invalid attribute `ref` supplied to `React.Fragment`.'),
                te(null));
            }
          }
          function zr(a, l, u, h, _, x) {
            {
              var y = ln(a);
              if (!y) {
                var m = '';
                (a === void 0 ||
                  (typeof a == 'object' &&
                    a !== null &&
                    Object.keys(a).length === 0)) &&
                  (m +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var R = Sn(_);
                R ? (m += R) : (m += Hr());
                var $;
                a === null
                  ? ($ = 'null')
                  : qe(a)
                  ? ($ = 'array')
                  : a !== void 0 && a.$$typeof === r
                  ? (($ = '<' + (z(a.type) || 'Unknown') + ' />'),
                    (m =
                      ' Did you accidentally export a JSX literal instead of a component?'))
                  : ($ = typeof a),
                  g(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    $,
                    m,
                  );
              }
              var j = jn(a, l, u, _, x);
              if (j == null) return j;
              if (y) {
                var N = l.children;
                if (N !== void 0)
                  if (h)
                    if (qe(N)) {
                      for (var ne = 0; ne < N.length; ne++) Vr(N[ne], a);
                      Object.freeze && Object.freeze(N);
                    } else
                      g(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                      );
                  else Vr(N, a);
              }
              return a === n ? Pn(j) : An(j), j;
            }
          }
          function Rn(a, l, u) {
            return zr(a, l, u, !0);
          }
          function kn(a, l, u) {
            return zr(a, l, u, !1);
          }
          var In = kn,
            Dn = Rn;
          (he.Fragment = n), (he.jsx = In), (he.jsxs = Dn);
        })()),
    he
  );
}
(function (e) {
  process.env.NODE_ENV === 'production'
    ? (e.exports = Wn())
    : (e.exports = Bn());
})(T);
function Hn() {
  (this.__data__ = []), (this.size = 0);
}
var Un = Hn;
function Gn(e, r) {
  return e === r || (e !== e && r !== r);
}
var Fe = Gn,
  Vn = Fe;
function zn(e, r) {
  for (var t = e.length; t--; ) if (Vn(e[t][0], r)) return t;
  return -1;
}
var Ne = zn,
  Kn = Ne,
  Yn = Array.prototype,
  qn = Yn.splice;
function Jn(e) {
  var r = this.__data__,
    t = Kn(r, e);
  if (t < 0) return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : qn.call(r, t, 1), --this.size, !0;
}
var Xn = Jn,
  Zn = Ne;
function Qn(e) {
  var r = this.__data__,
    t = Zn(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var ea = Qn,
  ra = Ne;
function ta(e) {
  return ra(this.__data__, e) > -1;
}
var na = ta,
  aa = Ne;
function ia(e, r) {
  var t = this.__data__,
    n = aa(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : (t[n][1] = r), this;
}
var oa = ia,
  sa = Un,
  ca = Xn,
  la = ea,
  fa = na,
  ua = oa;
function oe(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
oe.prototype.clear = sa;
oe.prototype.delete = ca;
oe.prototype.get = la;
oe.prototype.has = fa;
oe.prototype.set = ua;
var Le = oe,
  da = Le;
function va() {
  (this.__data__ = new da()), (this.size = 0);
}
var ha = va;
function pa(e) {
  var r = this.__data__,
    t = r.delete(e);
  return (this.size = r.size), t;
}
var ga = pa;
function ba(e) {
  return this.__data__.get(e);
}
var ma = ba;
function ya(e) {
  return this.__data__.has(e);
}
var _a = ya,
  Ca = typeof Ae == 'object' && Ae && Ae.Object === Object && Ae,
  Et = Ca,
  xa = Et,
  wa = typeof self == 'object' && self && self.Object === Object && self,
  Oa = xa || wa || Function('return this')(),
  se = Oa,
  Ta = se,
  $a = Ta.Symbol,
  At = $a,
  Xr = At,
  Pt = Object.prototype,
  ja = Pt.hasOwnProperty,
  Sa = Pt.toString,
  pe = Xr ? Xr.toStringTag : void 0;
function Ea(e) {
  var r = ja.call(e, pe),
    t = e[pe];
  try {
    e[pe] = void 0;
    var n = !0;
  } catch {}
  var i = Sa.call(e);
  return n && (r ? (e[pe] = t) : delete e[pe]), i;
}
var Aa = Ea,
  Pa = Object.prototype,
  Ra = Pa.toString;
function ka(e) {
  return Ra.call(e);
}
var Ia = ka,
  Zr = At,
  Da = Aa,
  Ma = Ia,
  Fa = '[object Null]',
  Na = '[object Undefined]',
  Qr = Zr ? Zr.toStringTag : void 0;
function La(e) {
  return e == null
    ? e === void 0
      ? Na
      : Fa
    : Qr && Qr in Object(e)
    ? Da(e)
    : Ma(e);
}
var We = La;
function Wa(e) {
  var r = typeof e;
  return e != null && (r == 'object' || r == 'function');
}
var re = Wa,
  Ba = We,
  Ha = re,
  Ua = '[object AsyncFunction]',
  Ga = '[object Function]',
  Va = '[object GeneratorFunction]',
  za = '[object Proxy]';
function Ka(e) {
  if (!Ha(e)) return !1;
  var r = Ba(e);
  return r == Ga || r == Va || r == Ua || r == za;
}
var gr = Ka,
  Ya = se,
  qa = Ya['__core-js_shared__'],
  Ja = qa,
  er = Ja,
  et = (function () {
    var e = /[^.]+$/.exec((er && er.keys && er.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function Xa(e) {
  return !!et && et in e;
}
var Za = Xa,
  Qa = Function.prototype,
  ei = Qa.toString;
function ri(e) {
  if (e != null) {
    try {
      return ei.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var ti = ri,
  ni = gr,
  ai = Za,
  ii = re,
  oi = ti,
  si = /[\\^$.*+?()[\]{}|]/g,
  ci = /^\[object .+?Constructor\]$/,
  li = Function.prototype,
  fi = Object.prototype,
  ui = li.toString,
  di = fi.hasOwnProperty,
  vi = RegExp(
    '^' +
      ui
        .call(di)
        .replace(si, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  );
function hi(e) {
  if (!ii(e) || ai(e)) return !1;
  var r = ni(e) ? vi : ci;
  return r.test(oi(e));
}
var pi = hi;
function gi(e, r) {
  return e == null ? void 0 : e[r];
}
var bi = gi,
  mi = pi,
  yi = bi;
function _i(e, r) {
  var t = yi(e, r);
  return mi(t) ? t : void 0;
}
var br = _i,
  Ci = br,
  xi = se,
  wi = Ci(xi, 'Map'),
  Rt = wi,
  Oi = br,
  Ti = Oi(Object, 'create'),
  Be = Ti,
  rt = Be;
function $i() {
  (this.__data__ = rt ? rt(null) : {}), (this.size = 0);
}
var ji = $i;
function Si(e) {
  var r = this.has(e) && delete this.__data__[e];
  return (this.size -= r ? 1 : 0), r;
}
var Ei = Si,
  Ai = Be,
  Pi = '__lodash_hash_undefined__',
  Ri = Object.prototype,
  ki = Ri.hasOwnProperty;
function Ii(e) {
  var r = this.__data__;
  if (Ai) {
    var t = r[e];
    return t === Pi ? void 0 : t;
  }
  return ki.call(r, e) ? r[e] : void 0;
}
var Di = Ii,
  Mi = Be,
  Fi = Object.prototype,
  Ni = Fi.hasOwnProperty;
function Li(e) {
  var r = this.__data__;
  return Mi ? r[e] !== void 0 : Ni.call(r, e);
}
var Wi = Li,
  Bi = Be,
  Hi = '__lodash_hash_undefined__';
function Ui(e, r) {
  var t = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (t[e] = Bi && r === void 0 ? Hi : r),
    this
  );
}
var Gi = Ui,
  Vi = ji,
  zi = Ei,
  Ki = Di,
  Yi = Wi,
  qi = Gi;
function ce(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = Vi;
ce.prototype.delete = zi;
ce.prototype.get = Ki;
ce.prototype.has = Yi;
ce.prototype.set = qi;
var Ji = ce,
  tt = Ji,
  Xi = Le,
  Zi = Rt;
function Qi() {
  (this.size = 0),
    (this.__data__ = {
      hash: new tt(),
      map: new (Zi || Xi)(),
      string: new tt(),
    });
}
var eo = Qi;
function ro(e) {
  var r = typeof e;
  return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var to = ro,
  no = to;
function ao(e, r) {
  var t = e.__data__;
  return no(r) ? t[typeof r == 'string' ? 'string' : 'hash'] : t.map;
}
var He = ao,
  io = He;
function oo(e) {
  var r = io(this, e).delete(e);
  return (this.size -= r ? 1 : 0), r;
}
var so = oo,
  co = He;
function lo(e) {
  return co(this, e).get(e);
}
var fo = lo,
  uo = He;
function vo(e) {
  return uo(this, e).has(e);
}
var ho = vo,
  po = He;
function go(e, r) {
  var t = po(this, e),
    n = t.size;
  return t.set(e, r), (this.size += t.size == n ? 0 : 1), this;
}
var bo = go,
  mo = eo,
  yo = so,
  _o = fo,
  Co = ho,
  xo = bo;
function le(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
le.prototype.clear = mo;
le.prototype.delete = yo;
le.prototype.get = _o;
le.prototype.has = Co;
le.prototype.set = xo;
var wo = le,
  Oo = Le,
  To = Rt,
  $o = wo,
  jo = 200;
function So(e, r) {
  var t = this.__data__;
  if (t instanceof Oo) {
    var n = t.__data__;
    if (!To || n.length < jo - 1)
      return n.push([e, r]), (this.size = ++t.size), this;
    t = this.__data__ = new $o(n);
  }
  return t.set(e, r), (this.size = t.size), this;
}
var Eo = So,
  Ao = Le,
  Po = ha,
  Ro = ga,
  ko = ma,
  Io = _a,
  Do = Eo;
function fe(e) {
  var r = (this.__data__ = new Ao(e));
  this.size = r.size;
}
fe.prototype.clear = Po;
fe.prototype.delete = Ro;
fe.prototype.get = ko;
fe.prototype.has = Io;
fe.prototype.set = Do;
var Mo = fe,
  Fo = br,
  No = (function () {
    try {
      var e = Fo(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  kt = No,
  nt = kt;
function Lo(e, r, t) {
  r == '__proto__' && nt
    ? nt(e, r, {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      })
    : (e[r] = t);
}
var mr = Lo,
  Wo = mr,
  Bo = Fe;
function Ho(e, r, t) {
  ((t !== void 0 && !Bo(e[r], t)) || (t === void 0 && !(r in e))) &&
    Wo(e, r, t);
}
var It = Ho;
function Uo(e) {
  return function (r, t, n) {
    for (var i = -1, o = Object(r), c = n(r), s = c.length; s--; ) {
      var f = c[e ? s : ++i];
      if (t(o[f], f, o) === !1) break;
    }
    return r;
  };
}
var Go = Uo,
  Vo = Go,
  zo = Vo(),
  Ko = zo,
  lr = { exports: {} };
(function (e, r) {
  var t = se,
    n = r && !r.nodeType && r,
    i = n && !0 && e && !e.nodeType && e,
    o = i && i.exports === n,
    c = o ? t.Buffer : void 0,
    s = c ? c.allocUnsafe : void 0;
  function f(v, d) {
    if (d) return v.slice();
    var p = v.length,
      C = s ? s(p) : new v.constructor(p);
    return v.copy(C), C;
  }
  e.exports = f;
})(lr, lr.exports);
var Yo = se,
  qo = Yo.Uint8Array,
  Jo = qo,
  at = Jo;
function Xo(e) {
  var r = new e.constructor(e.byteLength);
  return new at(r).set(new at(e)), r;
}
var Zo = Xo,
  Qo = Zo;
function es(e, r) {
  var t = r ? Qo(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var rs = es;
function ts(e, r) {
  var t = -1,
    n = e.length;
  for (r || (r = Array(n)); ++t < n; ) r[t] = e[t];
  return r;
}
var ns = ts,
  as = re,
  it = Object.create,
  is = (function () {
    function e() {}
    return function (r) {
      if (!as(r)) return {};
      if (it) return it(r);
      e.prototype = r;
      var t = new e();
      return (e.prototype = void 0), t;
    };
  })(),
  os = is;
function ss(e, r) {
  return function (t) {
    return e(r(t));
  };
}
var cs = ss,
  ls = cs,
  fs = ls(Object.getPrototypeOf, Object),
  Dt = fs,
  us = Object.prototype;
function ds(e) {
  var r = e && e.constructor,
    t = (typeof r == 'function' && r.prototype) || us;
  return e === t;
}
var Mt = ds,
  vs = os,
  hs = Dt,
  ps = Mt;
function gs(e) {
  return typeof e.constructor == 'function' && !ps(e) ? vs(hs(e)) : {};
}
var bs = gs;
function ms(e) {
  return e != null && typeof e == 'object';
}
var Oe = ms,
  ys = We,
  _s = Oe,
  Cs = '[object Arguments]';
function xs(e) {
  return _s(e) && ys(e) == Cs;
}
var ws = xs,
  ot = ws,
  Os = Oe,
  Ft = Object.prototype,
  Ts = Ft.hasOwnProperty,
  $s = Ft.propertyIsEnumerable,
  js = ot(
    (function () {
      return arguments;
    })(),
  )
    ? ot
    : function (e) {
        return Os(e) && Ts.call(e, 'callee') && !$s.call(e, 'callee');
      },
  Nt = js,
  Ss = Array.isArray,
  Lt = Ss,
  Es = 9007199254740991;
function As(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Es;
}
var Wt = As,
  Ps = gr,
  Rs = Wt;
function ks(e) {
  return e != null && Rs(e.length) && !Ps(e);
}
var yr = ks,
  Is = yr,
  Ds = Oe;
function Ms(e) {
  return Ds(e) && Is(e);
}
var Fs = Ms,
  De = { exports: {} };
function Ns() {
  return !1;
}
var Ls = Ns;
(function (e, r) {
  var t = se,
    n = Ls,
    i = r && !r.nodeType && r,
    o = i && !0 && e && !e.nodeType && e,
    c = o && o.exports === i,
    s = c ? t.Buffer : void 0,
    f = s ? s.isBuffer : void 0,
    v = f || n;
  e.exports = v;
})(De, De.exports);
var Ws = We,
  Bs = Dt,
  Hs = Oe,
  Us = '[object Object]',
  Gs = Function.prototype,
  Vs = Object.prototype,
  Bt = Gs.toString,
  zs = Vs.hasOwnProperty,
  Ks = Bt.call(Object);
function Ys(e) {
  if (!Hs(e) || Ws(e) != Us) return !1;
  var r = Bs(e);
  if (r === null) return !0;
  var t = zs.call(r, 'constructor') && r.constructor;
  return typeof t == 'function' && t instanceof t && Bt.call(t) == Ks;
}
var qs = Ys,
  Js = We,
  Xs = Wt,
  Zs = Oe,
  Qs = '[object Arguments]',
  ec = '[object Array]',
  rc = '[object Boolean]',
  tc = '[object Date]',
  nc = '[object Error]',
  ac = '[object Function]',
  ic = '[object Map]',
  oc = '[object Number]',
  sc = '[object Object]',
  cc = '[object RegExp]',
  lc = '[object Set]',
  fc = '[object String]',
  uc = '[object WeakMap]',
  dc = '[object ArrayBuffer]',
  vc = '[object DataView]',
  hc = '[object Float32Array]',
  pc = '[object Float64Array]',
  gc = '[object Int8Array]',
  bc = '[object Int16Array]',
  mc = '[object Int32Array]',
  yc = '[object Uint8Array]',
  _c = '[object Uint8ClampedArray]',
  Cc = '[object Uint16Array]',
  xc = '[object Uint32Array]',
  O = {};
O[hc] = O[pc] = O[gc] = O[bc] = O[mc] = O[yc] = O[_c] = O[Cc] = O[xc] = !0;
O[Qs] =
  O[ec] =
  O[dc] =
  O[rc] =
  O[vc] =
  O[tc] =
  O[nc] =
  O[ac] =
  O[ic] =
  O[oc] =
  O[sc] =
  O[cc] =
  O[lc] =
  O[fc] =
  O[uc] =
    !1;
function wc(e) {
  return Zs(e) && Xs(e.length) && !!O[Js(e)];
}
var Oc = wc;
function Tc(e) {
  return function (r) {
    return e(r);
  };
}
var $c = Tc,
  fr = { exports: {} };
(function (e, r) {
  var t = Et,
    n = r && !r.nodeType && r,
    i = n && !0 && e && !e.nodeType && e,
    o = i && i.exports === n,
    c = o && t.process,
    s = (function () {
      try {
        var f = i && i.require && i.require('util').types;
        return f || (c && c.binding && c.binding('util'));
      } catch {}
    })();
  e.exports = s;
})(fr, fr.exports);
var jc = Oc,
  Sc = $c,
  st = fr.exports,
  ct = st && st.isTypedArray,
  Ec = ct ? Sc(ct) : jc,
  Ht = Ec;
function Ac(e, r) {
  if (!(r === 'constructor' && typeof e[r] == 'function') && r != '__proto__')
    return e[r];
}
var Ut = Ac,
  Pc = mr,
  Rc = Fe,
  kc = Object.prototype,
  Ic = kc.hasOwnProperty;
function Dc(e, r, t) {
  var n = e[r];
  (!(Ic.call(e, r) && Rc(n, t)) || (t === void 0 && !(r in e))) && Pc(e, r, t);
}
var Mc = Dc,
  Fc = Mc,
  Nc = mr;
function Lc(e, r, t, n) {
  var i = !t;
  t || (t = {});
  for (var o = -1, c = r.length; ++o < c; ) {
    var s = r[o],
      f = n ? n(t[s], e[s], s, t, e) : void 0;
    f === void 0 && (f = e[s]), i ? Nc(t, s, f) : Fc(t, s, f);
  }
  return t;
}
var Wc = Lc;
function Bc(e, r) {
  for (var t = -1, n = Array(e); ++t < e; ) n[t] = r(t);
  return n;
}
var Hc = Bc,
  Uc = 9007199254740991,
  Gc = /^(?:0|[1-9]\d*)$/;
function Vc(e, r) {
  var t = typeof e;
  return (
    (r = r == null ? Uc : r),
    !!r &&
      (t == 'number' || (t != 'symbol' && Gc.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < r
  );
}
var Gt = Vc,
  zc = Hc,
  Kc = Nt,
  Yc = Lt,
  qc = De.exports,
  Jc = Gt,
  Xc = Ht,
  Zc = Object.prototype,
  Qc = Zc.hasOwnProperty;
function el(e, r) {
  var t = Yc(e),
    n = !t && Kc(e),
    i = !t && !n && qc(e),
    o = !t && !n && !i && Xc(e),
    c = t || n || i || o,
    s = c ? zc(e.length, String) : [],
    f = s.length;
  for (var v in e)
    (r || Qc.call(e, v)) &&
      !(
        c &&
        (v == 'length' ||
          (i && (v == 'offset' || v == 'parent')) ||
          (o && (v == 'buffer' || v == 'byteLength' || v == 'byteOffset')) ||
          Jc(v, f))
      ) &&
      s.push(v);
  return s;
}
var rl = el;
function tl(e) {
  var r = [];
  if (e != null) for (var t in Object(e)) r.push(t);
  return r;
}
var nl = tl,
  al = re,
  il = Mt,
  ol = nl,
  sl = Object.prototype,
  cl = sl.hasOwnProperty;
function ll(e) {
  if (!al(e)) return ol(e);
  var r = il(e),
    t = [];
  for (var n in e) (n == 'constructor' && (r || !cl.call(e, n))) || t.push(n);
  return t;
}
var fl = ll,
  ul = rl,
  dl = fl,
  vl = yr;
function hl(e) {
  return vl(e) ? ul(e, !0) : dl(e);
}
var Vt = hl,
  pl = Wc,
  gl = Vt;
function bl(e) {
  return pl(e, gl(e));
}
var ml = bl,
  lt = It,
  yl = lr.exports,
  _l = rs,
  Cl = ns,
  xl = bs,
  ft = Nt,
  ut = Lt,
  wl = Fs,
  Ol = De.exports,
  Tl = gr,
  $l = re,
  jl = qs,
  Sl = Ht,
  dt = Ut,
  El = ml;
function Al(e, r, t, n, i, o, c) {
  var s = dt(e, t),
    f = dt(r, t),
    v = c.get(f);
  if (v) {
    lt(e, t, v);
    return;
  }
  var d = o ? o(s, f, t + '', e, r, c) : void 0,
    p = d === void 0;
  if (p) {
    var C = ut(f),
      b = !C && Ol(f),
      S = !C && !b && Sl(f);
    (d = f),
      C || b || S
        ? ut(s)
          ? (d = s)
          : wl(s)
          ? (d = Cl(s))
          : b
          ? ((p = !1), (d = yl(f, !0)))
          : S
          ? ((p = !1), (d = _l(f, !0)))
          : (d = [])
        : jl(f) || ft(f)
        ? ((d = s), ft(s) ? (d = El(s)) : (!$l(s) || Tl(s)) && (d = xl(f)))
        : (p = !1);
  }
  p && (c.set(f, d), i(d, f, n, o, c), c.delete(f)), lt(e, t, d);
}
var Pl = Al,
  Rl = Mo,
  kl = It,
  Il = Ko,
  Dl = Pl,
  Ml = re,
  Fl = Vt,
  Nl = Ut;
function zt(e, r, t, n, i) {
  e !== r &&
    Il(
      r,
      function (o, c) {
        if ((i || (i = new Rl()), Ml(o))) Dl(e, r, c, t, zt, n, i);
        else {
          var s = n ? n(Nl(e, c), o, c + '', e, r, i) : void 0;
          s === void 0 && (s = o), kl(e, c, s);
        }
      },
      Fl,
    );
}
var Ll = zt;
function Wl(e) {
  return e;
}
var Kt = Wl;
function Bl(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var Hl = Bl,
  Ul = Hl,
  vt = Math.max;
function Gl(e, r, t) {
  return (
    (r = vt(r === void 0 ? e.length - 1 : r, 0)),
    function () {
      for (
        var n = arguments, i = -1, o = vt(n.length - r, 0), c = Array(o);
        ++i < o;

      )
        c[i] = n[r + i];
      i = -1;
      for (var s = Array(r + 1); ++i < r; ) s[i] = n[i];
      return (s[r] = t(c)), Ul(e, this, s);
    }
  );
}
var Vl = Gl;
function zl(e) {
  return function () {
    return e;
  };
}
var Kl = zl,
  Yl = Kl,
  ht = kt,
  ql = Kt,
  Jl = ht
    ? function (e, r) {
        return ht(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: Yl(r),
          writable: !0,
        });
      }
    : ql,
  Xl = Jl,
  Zl = 800,
  Ql = 16,
  ef = Date.now;
function rf(e) {
  var r = 0,
    t = 0;
  return function () {
    var n = ef(),
      i = Ql - (n - t);
    if (((t = n), i > 0)) {
      if (++r >= Zl) return arguments[0];
    } else r = 0;
    return e.apply(void 0, arguments);
  };
}
var tf = rf,
  nf = Xl,
  af = tf,
  of = af(nf),
  sf = of,
  cf = Kt,
  lf = Vl,
  ff = sf;
function uf(e, r) {
  return ff(lf(e, r, cf), e + '');
}
var df = uf,
  vf = Fe,
  hf = yr,
  pf = Gt,
  gf = re;
function bf(e, r, t) {
  if (!gf(t)) return !1;
  var n = typeof r;
  return (n == 'number' ? hf(t) && pf(r, t.length) : n == 'string' && r in t)
    ? vf(t[r], e)
    : !1;
}
var mf = bf,
  yf = df,
  _f = mf;
function Cf(e) {
  return yf(function (r, t) {
    var n = -1,
      i = t.length,
      o = i > 1 ? t[i - 1] : void 0,
      c = i > 2 ? t[2] : void 0;
    for (
      o = e.length > 3 && typeof o == 'function' ? (i--, o) : void 0,
        c && _f(t[0], t[1], c) && ((o = i < 3 ? void 0 : o), (i = 1)),
        r = Object(r);
      ++n < i;

    ) {
      var s = t[n];
      s && e(r, s, n, o);
    }
    return r;
  });
}
var xf = Cf,
  wf = Ll,
  Of = xf,
  Tf = Of(function (e, r, t) {
    wf(e, r, t);
  }),
  Ie = Tf;
function Yt(e = [], r, t = 'childList', n, i) {
  let o = n == null ? 0 : i + 1;
  e.forEach((c) => {
    const s = c[t];
    r(c, n, o), s && Yt(s, r, t, c, o);
  });
}
function Ce(e, ...r) {
  return e && e(...r);
}
let rr;
function $f(e, r = 'normal 14px Robot') {
  rr = rr || document.createElement('canvas');
  const t = rr.getContext('2d');
  return t == null ? 0 : (r && (t.font = r), t.measureText(e).width);
}
const _r = we.createContext({}),
  jf = _r.Provider;
var qt = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function (e) {
  (function () {
    var r = {}.hasOwnProperty;
    function t() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (!!o) {
          var c = typeof o;
          if (c === 'string' || c === 'number') n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = t.apply(null, o);
              s && n.push(s);
            }
          } else if (c === 'object')
            if (o.toString === Object.prototype.toString)
              for (var f in o) r.call(o, f) && o[f] && n.push(f);
            else n.push(o.toString());
        }
      }
      return n.join(' ');
    }
    e.exports ? ((t.default = t), (e.exports = t)) : (window.classNames = t);
  })();
})(qt);
const L = qt.exports,
  Sf = '40px',
  Ef = '_permissionContainer_1g7io_1',
  Af = '_flexAuto_1g7io_13',
  Pf = '_flex_1g7io_13',
  Rf = '_tableHeaderbox_1g7io_27',
  kf = '_tableItem_1g7io_33',
  If = '_tableBody_1g7io_81',
  Df = '_firstCol_1g7io_98',
  Mf = '_lastCol_1g7io_113',
  Ff = '_centerColWrap_1g7io_121',
  Nf = '_centerCol_1g7io_121',
  Lf = '_authCol_1g7io_141',
  Wf = '_row_1g7io_155',
  Bf = '_borderTop_1g7io_164',
  Hf = '_minCol_1g7io_173',
  A = {
    rowHeight: Sf,
    permissionContainer: Ef,
    flexAuto: Af,
    flex: Pf,
    'flex-col': '_flex-col_1g7io_22',
    tableHeaderbox: Rf,
    tableItem: kf,
    tableBody: If,
    firstCol: Df,
    lastCol: Mf,
    centerColWrap: Ff,
    centerCol: Nf,
    authCol: Lf,
    row: Wf,
    borderTop: Bf,
    minCol: Hf,
  },
  Uf = [
    {
      title: '\u4E00\u7EA7\u83DC\u5355',
    },
    {
      title: '\u4E8C\u7EA7\u83DC\u5355',
    },
    {
      title: '\u6A21\u5757\u6743\u9650',
    },
    {
      title: '\u5177\u4F53\u6743\u9650',
    },
  ],
  Gf = (e) => {
    const { columns: r } = e;
    return T.exports.jsx(
      'div',
      Object.assign(
        { className: A.tableHeaderbox },
        {
          children: r.map((t, n) =>
            T.exports.jsx(
              'div',
              Object.assign(
                {
                  className: L(A.tableItem, {
                    [A.flexAuto]: n === r.length - 1,
                  }),
                },
                { children: t.title },
              ),
              n,
            ),
          ),
        },
      ),
    );
  };
var Vf = /* @__PURE__ */ Mn({});
const Jt = Vf;
function ur(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function pt(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function V(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? pt(Object(t), !0).forEach(function (n) {
          ur(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : pt(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function zf(e) {
  if (Array.isArray(e)) return e;
}
function Kf(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      i = !0,
      o = !1,
      c,
      s;
    try {
      for (
        t = t.call(e);
        !(i = (c = t.next()).done) && (n.push(c.value), !(r && n.length === r));
        i = !0
      );
    } catch (f) {
      (o = !0), (s = f);
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (o) throw s;
      }
    }
    return n;
  }
}
function gt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Yf(e, r) {
  if (!!e) {
    if (typeof e == 'string') return gt(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return gt(e, r);
  }
}
function qf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xt(e, r) {
  return zf(e) || Kf(e, r) || Yf(e, r) || qf();
}
function Jf(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function Zt(e, r) {
  if (e == null) return {};
  var t = Jf(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function Me(e) {
  return (
    (Me =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    Me(e)
  );
}
function W(e, r) {
  Xf(e) && (e = '100%');
  var t = Zf(e);
  return (
    (e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e)))),
    t && (e = parseInt(String(e * r), 10) / 100),
    Math.abs(e - r) < 1e-6
      ? 1
      : (r === 360
          ? (e = (e < 0 ? (e % r) + r : e % r) / parseFloat(String(r)))
          : (e = (e % r) / parseFloat(String(r))),
        e)
  );
}
function Xf(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function Zf(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function Qf(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Pe(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function tr(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function eu(e, r, t) {
  return {
    r: W(e, 255) * 255,
    g: W(r, 255) * 255,
    b: W(t, 255) * 255,
  };
}
function nr(e, r, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? e + (r - e) * (6 * t)
      : t < 1 / 2
      ? r
      : t < 2 / 3
      ? e + (r - e) * (2 / 3 - t) * 6
      : e
  );
}
function ru(e, r, t) {
  var n, i, o;
  if (((e = W(e, 360)), (r = W(r, 100)), (t = W(t, 100)), r === 0))
    (i = t), (o = t), (n = t);
  else {
    var c = t < 0.5 ? t * (1 + r) : t + r - t * r,
      s = 2 * t - c;
    (n = nr(s, c, e + 1 / 3)), (i = nr(s, c, e)), (o = nr(s, c, e - 1 / 3));
  }
  return { r: n * 255, g: i * 255, b: o * 255 };
}
function tu(e, r, t) {
  (e = W(e, 255)), (r = W(r, 255)), (t = W(t, 255));
  var n = Math.max(e, r, t),
    i = Math.min(e, r, t),
    o = 0,
    c = n,
    s = n - i,
    f = n === 0 ? 0 : s / n;
  if (n === i) o = 0;
  else {
    switch (n) {
      case e:
        o = (r - t) / s + (r < t ? 6 : 0);
        break;
      case r:
        o = (t - e) / s + 2;
        break;
      case t:
        o = (e - r) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: f, v: c };
}
function nu(e, r, t) {
  (e = W(e, 360) * 6), (r = W(r, 100)), (t = W(t, 100));
  var n = Math.floor(e),
    i = e - n,
    o = t * (1 - r),
    c = t * (1 - i * r),
    s = t * (1 - (1 - i) * r),
    f = n % 6,
    v = [t, c, o, o, s, t][f],
    d = [s, t, t, c, o, o][f],
    p = [o, o, s, t, t, c][f];
  return { r: v * 255, g: d * 255, b: p * 255 };
}
function au(e, r, t, n) {
  var i = [
    tr(Math.round(e).toString(16)),
    tr(Math.round(r).toString(16)),
    tr(Math.round(t).toString(16)),
  ];
  return n &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('');
}
function bt(e) {
  return D(e) / 255;
}
function D(e) {
  return parseInt(e, 16);
}
var mt = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function ge(e) {
  var r = { r: 0, g: 0, b: 0 },
    t = 1,
    n = null,
    i = null,
    o = null,
    c = !1,
    s = !1;
  return (
    typeof e == 'string' && (e = su(e)),
    typeof e == 'object' &&
      (Y(e.r) && Y(e.g) && Y(e.b)
        ? ((r = eu(e.r, e.g, e.b)),
          (c = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Y(e.h) && Y(e.s) && Y(e.v)
        ? ((n = Pe(e.s)),
          (i = Pe(e.v)),
          (r = nu(e.h, n, i)),
          (c = !0),
          (s = 'hsv'))
        : Y(e.h) &&
          Y(e.s) &&
          Y(e.l) &&
          ((n = Pe(e.s)),
          (o = Pe(e.l)),
          (r = ru(e.h, n, o)),
          (c = !0),
          (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (t = e.a)),
    (t = Qf(t)),
    {
      ok: c,
      format: e.format || s,
      r: Math.min(255, Math.max(r.r, 0)),
      g: Math.min(255, Math.max(r.g, 0)),
      b: Math.min(255, Math.max(r.b, 0)),
      a: t,
    }
  );
}
var iu = '[-\\+]?\\d+%?',
  ou = '[-\\+]?\\d*\\.\\d+%?',
  X = '(?:'.concat(ou, ')|(?:').concat(iu, ')'),
  ar = '[\\s|\\(]+('
    .concat(X, ')[,|\\s]+(')
    .concat(X, ')[,|\\s]+(')
    .concat(X, ')\\s*\\)?'),
  ir = '[\\s|\\(]+('
    .concat(X, ')[,|\\s]+(')
    .concat(X, ')[,|\\s]+(')
    .concat(X, ')[,|\\s]+(')
    .concat(X, ')\\s*\\)?'),
  U = {
    CSS_UNIT: new RegExp(X),
    rgb: new RegExp('rgb' + ar),
    rgba: new RegExp('rgba' + ir),
    hsl: new RegExp('hsl' + ar),
    hsla: new RegExp('hsla' + ir),
    hsv: new RegExp('hsv' + ar),
    hsva: new RegExp('hsva' + ir),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function su(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var r = !1;
  if (mt[e]) (e = mt[e]), (r = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var t = U.rgb.exec(e);
  return t
    ? { r: t[1], g: t[2], b: t[3] }
    : ((t = U.rgba.exec(e)),
      t
        ? { r: t[1], g: t[2], b: t[3], a: t[4] }
        : ((t = U.hsl.exec(e)),
          t
            ? { h: t[1], s: t[2], l: t[3] }
            : ((t = U.hsla.exec(e)),
              t
                ? { h: t[1], s: t[2], l: t[3], a: t[4] }
                : ((t = U.hsv.exec(e)),
                  t
                    ? { h: t[1], s: t[2], v: t[3] }
                    : ((t = U.hsva.exec(e)),
                      t
                        ? { h: t[1], s: t[2], v: t[3], a: t[4] }
                        : ((t = U.hex8.exec(e)),
                          t
                            ? {
                                r: D(t[1]),
                                g: D(t[2]),
                                b: D(t[3]),
                                a: bt(t[4]),
                                format: r ? 'name' : 'hex8',
                              }
                            : ((t = U.hex6.exec(e)),
                              t
                                ? {
                                    r: D(t[1]),
                                    g: D(t[2]),
                                    b: D(t[3]),
                                    format: r ? 'name' : 'hex',
                                  }
                                : ((t = U.hex4.exec(e)),
                                  t
                                    ? {
                                        r: D(t[1] + t[1]),
                                        g: D(t[2] + t[2]),
                                        b: D(t[3] + t[3]),
                                        a: bt(t[4] + t[4]),
                                        format: r ? 'name' : 'hex8',
                                      }
                                    : ((t = U.hex3.exec(e)),
                                      t
                                        ? {
                                            r: D(t[1] + t[1]),
                                            g: D(t[2] + t[2]),
                                            b: D(t[3] + t[3]),
                                            format: r ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function Y(e) {
  return Boolean(U.CSS_UNIT.exec(String(e)));
}
var Re = 2,
  yt = 0.16,
  cu = 0.05,
  lu = 0.05,
  fu = 0.15,
  Qt = 5,
  en = 4,
  uu = [
    {
      index: 7,
      opacity: 0.15,
    },
    {
      index: 6,
      opacity: 0.25,
    },
    {
      index: 5,
      opacity: 0.3,
    },
    {
      index: 5,
      opacity: 0.45,
    },
    {
      index: 5,
      opacity: 0.65,
    },
    {
      index: 5,
      opacity: 0.85,
    },
    {
      index: 4,
      opacity: 0.9,
    },
    {
      index: 3,
      opacity: 0.95,
    },
    {
      index: 2,
      opacity: 0.97,
    },
    {
      index: 1,
      opacity: 0.98,
    },
  ];
function _t(e) {
  var r = e.r,
    t = e.g,
    n = e.b,
    i = tu(r, t, n);
  return {
    h: i.h * 360,
    s: i.s,
    v: i.v,
  };
}
function ke(e) {
  var r = e.r,
    t = e.g,
    n = e.b;
  return '#'.concat(au(r, t, n, !1));
}
function du(e, r, t) {
  var n = t / 100,
    i = {
      r: (r.r - e.r) * n + e.r,
      g: (r.g - e.g) * n + e.g,
      b: (r.b - e.b) * n + e.b,
    };
  return i;
}
function Ct(e, r, t) {
  var n;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (n = t ? Math.round(e.h) - Re * r : Math.round(e.h) + Re * r)
      : (n = t ? Math.round(e.h) + Re * r : Math.round(e.h) - Re * r),
    n < 0 ? (n += 360) : n >= 360 && (n -= 360),
    n
  );
}
function xt(e, r, t) {
  if (e.h === 0 && e.s === 0) return e.s;
  var n;
  return (
    t ? (n = e.s - yt * r) : r === en ? (n = e.s + yt) : (n = e.s + cu * r),
    n > 1 && (n = 1),
    t && r === Qt && n > 0.1 && (n = 0.1),
    n < 0.06 && (n = 0.06),
    Number(n.toFixed(2))
  );
}
function wt(e, r, t) {
  var n;
  return (
    t ? (n = e.v + lu * r) : (n = e.v - fu * r),
    n > 1 && (n = 1),
    Number(n.toFixed(2))
  );
}
function dr(e) {
  for (
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = [],
      n = ge(e),
      i = Qt;
    i > 0;
    i -= 1
  ) {
    var o = _t(n),
      c = ke(
        ge({
          h: Ct(o, i, !0),
          s: xt(o, i, !0),
          v: wt(o, i, !0),
        }),
      );
    t.push(c);
  }
  t.push(ke(n));
  for (var s = 1; s <= en; s += 1) {
    var f = _t(n),
      v = ke(
        ge({
          h: Ct(f, s),
          s: xt(f, s),
          v: wt(f, s),
        }),
      );
    t.push(v);
  }
  return r.theme === 'dark'
    ? uu.map(function (d) {
        var p = d.index,
          C = d.opacity,
          b = ke(du(ge(r.backgroundColor || '#141414'), ge(t[p]), C * 100));
        return b;
      })
    : t;
}
var or = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  sr = {},
  cr = {};
Object.keys(or).forEach(function (e) {
  (sr[e] = dr(or[e])),
    (sr[e].primary = sr[e][5]),
    (cr[e] = dr(or[e], {
      theme: 'dark',
      backgroundColor: '#141414',
    })),
    (cr[e].primary = cr[e][5]);
});
var Ot = {};
function vu(e, r) {
  process.env.NODE_ENV !== 'production' &&
    !e &&
    console !== void 0 &&
    console.error('Warning: '.concat(r));
}
function hu(e, r, t) {
  !r && !Ot[t] && (e(!1, t), (Ot[t] = !0));
}
function pu(e, r) {
  hu(vu, e, r);
}
function gu() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
var bu = 'rc-util-key';
function rn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = e.mark;
  return r ? (r.startsWith('data-') ? r : 'data-'.concat(r)) : bu;
}
function Cr(e) {
  if (e.attachTo) return e.attachTo;
  var r = document.querySelector('head');
  return r || document.body;
}
function Tt(e) {
  var r,
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!gu()) return null;
  var n = document.createElement('style');
  if (!((r = t.csp) === null || r === void 0) && r.nonce) {
    var i;
    n.nonce = (i = t.csp) === null || i === void 0 ? void 0 : i.nonce;
  }
  n.innerHTML = e;
  var o = Cr(t),
    c = o.firstChild;
  return (
    t.prepend && o.prepend
      ? o.prepend(n)
      : t.prepend && c
      ? o.insertBefore(n, c)
      : o.appendChild(n),
    n
  );
}
var vr = /* @__PURE__ */ new Map();
function mu(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = Cr(r);
  return Array.from(vr.get(t).children).find(function (n) {
    return n.tagName === 'STYLE' && n.getAttribute(rn(r)) === e;
  });
}
function yu(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    n = Cr(t);
  if (!vr.has(n)) {
    var i = Tt('', t),
      o = i.parentNode;
    vr.set(n, o), o.removeChild(i);
  }
  var c = mu(r, t);
  if (c) {
    var s, f;
    if (
      ((s = t.csp) === null || s === void 0 ? void 0 : s.nonce) &&
      c.nonce !== ((f = t.csp) === null || f === void 0 ? void 0 : f.nonce)
    ) {
      var v;
      c.nonce = (v = t.csp) === null || v === void 0 ? void 0 : v.nonce;
    }
    return c.innerHTML !== e && (c.innerHTML = e), c;
  }
  var d = Tt(e, t);
  return d.setAttribute(rn(t), r), d;
}
function _u(e, r) {
  pu(e, '[@ant-design/icons] '.concat(r));
}
function $t(e) {
  return (
    Me(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (Me(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function jt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (r, t) {
    var n = e[t];
    switch (t) {
      case 'class':
        (r.className = n), delete r.class;
        break;
      default:
        r[t] = n;
    }
    return r;
  }, {});
}
function hr(e, r, t) {
  return t
    ? /* @__PURE__ */ we.createElement(
        e.tag,
        V(
          V(
            {
              key: r,
            },
            jt(e.attrs),
          ),
          t,
        ),
        (e.children || []).map(function (n, i) {
          return hr(n, ''.concat(r, '-').concat(e.tag, '-').concat(i));
        }),
      )
    : /* @__PURE__ */ we.createElement(
        e.tag,
        V(
          {
            key: r,
          },
          jt(e.attrs),
        ),
        (e.children || []).map(function (n, i) {
          return hr(n, ''.concat(r, '-').concat(e.tag, '-').concat(i));
        }),
      );
}
function tn(e) {
  return dr(e)[0];
}
function nn(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Cu = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  xu = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cu,
      t = pr(Jt),
      n = t.csp;
    ee(function () {
      yu(r, '@ant-design-icons', {
        prepend: !0,
        csp: n,
      });
    }, []);
  },
  wu = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  xe = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: !1,
  };
function Ou(e) {
  var r = e.primaryColor,
    t = e.secondaryColor;
  (xe.primaryColor = r),
    (xe.secondaryColor = t || tn(r)),
    (xe.calculated = !!t);
}
function Tu() {
  return V({}, xe);
}
var Ue = function (r) {
  var t = r.icon,
    n = r.className,
    i = r.onClick,
    o = r.style,
    c = r.primaryColor,
    s = r.secondaryColor,
    f = Zt(r, wu),
    v = xe;
  if (
    (c &&
      (v = {
        primaryColor: c,
        secondaryColor: s || tn(c),
      }),
    xu(),
    _u($t(t), 'icon should be icon definiton, but got '.concat(t)),
    !$t(t))
  )
    return null;
  var d = t;
  return (
    d &&
      typeof d.icon == 'function' &&
      (d = V(
        V({}, d),
        {},
        {
          icon: d.icon(v.primaryColor, v.secondaryColor),
        },
      )),
    hr(
      d.icon,
      'svg-'.concat(d.name),
      V(
        {
          className: n,
          onClick: i,
          style: o,
          'data-icon': d.name,
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
        },
        f,
      ),
    )
  );
};
Ue.displayName = 'IconReact';
Ue.getTwoToneColors = Tu;
Ue.setTwoToneColors = Ou;
const xr = Ue;
function an(e) {
  var r = nn(e),
    t = Xt(r, 2),
    n = t[0],
    i = t[1];
  return xr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: i,
  });
}
function $u() {
  var e = xr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ju = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
an('#1890ff');
var Ge = /* @__PURE__ */ ie.forwardRef(function (e, r) {
  var t,
    n = e.className,
    i = e.icon,
    o = e.spin,
    c = e.rotate,
    s = e.tabIndex,
    f = e.onClick,
    v = e.twoToneColor,
    d = Zt(e, ju),
    p = ie.useContext(Jt),
    C = p.prefixCls,
    b = C === void 0 ? 'anticon' : C,
    S = L(
      b,
      ((t = {}),
      ur(t, ''.concat(b, '-').concat(i.name), !!i.name),
      ur(t, ''.concat(b, '-spin'), !!o || i.name === 'loading'),
      t),
      n,
    ),
    B = s;
  B === void 0 && f && (B = -1);
  var H = c
      ? {
          msTransform: 'rotate('.concat(c, 'deg)'),
          transform: 'rotate('.concat(c, 'deg)'),
        }
      : void 0,
    M = nn(v),
    g = Xt(M, 2),
    w = g[0],
    F = g[1];
  return /* @__PURE__ */ ie.createElement(
    'span',
    V(
      V(
        {
          role: 'img',
          'aria-label': i.name,
        },
        d,
      ),
      {},
      {
        ref: r,
        tabIndex: B,
        onClick: f,
        className: S,
      },
    ),
    /* @__PURE__ */ ie.createElement(xr, {
      icon: i,
      primaryColor: w,
      secondaryColor: F,
      style: H,
    }),
  );
});
Ge.displayName = 'AntdIcon';
Ge.getTwoToneColor = $u;
Ge.setTwoToneColor = an;
const Su = Ge;
var Eu = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z',
        },
      },
    ],
  },
  name: 'caret-right',
  theme: 'outlined',
};
const Au = Eu;
var on = function (r, t) {
  return /* @__PURE__ */ ie.createElement(
    Su,
    V(
      V({}, r),
      {},
      {
        ref: t,
        icon: Au,
      },
    ),
  );
};
on.displayName = 'CaretRightOutlined';
const Pu = /* @__PURE__ */ ie.forwardRef(on),
  Ru = '_rotate90_16cnn_1',
  ku = '_checkbox_16cnn_4',
  Iu = '_icon_16cnn_8',
  Du = '_checkboxContainer_16cnn_12',
  Mu = '_noLeaf_16cnn_19',
  be = {
    rotate90: Ru,
    checkbox: ku,
    icon: Iu,
    checkboxContainer: Du,
    noLeaf: Mu,
  },
  St = (e) => {
    const {
        data: r,
        isLeaf: t,
        className: n,
        firstCenterCol: i,
        expand: o,
        onExpand: c,
      } = e,
      [s, f] = ye(!0),
      v = q(() => {
        var P;
        return (
          (!t && s) ||
          (i &&
            ((P = r == null ? void 0 : r.parent) === null || P === void 0
              ? void 0
              : P.childList) &&
            r.parent.childList.length > 1)
        );
      }, [t, i, s]),
      {
        onChange: d,
        dispatchMap: p,
        dispatchWithDiff: C,
        authWidth: b,
        maxLevel: S,
      } = pr(_r),
      [B, H] = ye(!1),
      [M, g] = ye(!1);
    q(() => {
      p[r.id] == null
        ? (p[r.id] = {
            checked: H,
            indeterminate: g,
          })
        : ((p[r.id].checked = H), (p[r.id].indeterminate = g));
    }, [p, r]);
    const w = _e(
        (P) => {
          const J = P.target.checked,
            Ve = r.setCheckedReturnDiff(r.id, J);
          C(Ve), d();
        },
        [d, C, r],
      ),
      F = _e(() => {
        Ce(c, !o);
      }, [o]);
    return (
      ee(() => {
        if (b <= 0 || r.level !== S - 1) return;
        let P = 0;
        r.each(({ name: J }) => {
          P += $f(J) + 16 + 37 + 16;
        }),
          b > P && ((r.authOverLong = !1), f(!1));
      }, [b, r]),
      T.exports.jsxs(
        'div',
        Object.assign(
          { className: L(be.checkboxContainer, n), title: r.name },
          {
            children: [
              v &&
                T.exports.jsx(Pu, {
                  className: L(
                    {
                      [be.rotate90]: o,
                    },
                    be.icon,
                  ),
                  onClick: F,
                }),
              T.exports.jsx(
                Fn,
                Object.assign({}, e, {
                  indeterminate: M,
                  checked: B,
                  className: L(be.checkbox, {
                    [be.noLeaf]: !v,
                  }),
                  onChange: w,
                }),
              ),
            ],
          },
        ),
      )
    );
  },
  sn = (e) => {
    var r;
    const { data: t, list: n, firstCenterCol: i, expand: o, setExpand: c } = e,
      { maxLevel: s, dispatchMap: f } = pr(_r),
      v = q(() => t && t.level >= s - 1, [s]),
      [d, p] = ye(
        (r = t == null ? void 0 : t.options.expand) !== null && r !== void 0
          ? r
          : !1,
      ),
      C = q(
        () => ({
          [A.minCol]: t && !d,
        }),
        [d, t],
      );
    return (
      q(() => {
        t != null &&
          (f[t.id]
            ? (f[t.id].expand = p)
            : (f[t.id] = {
                expand: p,
              }));
      }, [f, t]),
      ee(() => {
        if (!(t == null || o == null)) {
          if (o === !1) {
            p(!1);
            return;
          }
          i && t.childList.length === 1 && p(o);
        }
      }, [o, i, t]),
      ee(() => {
        d
          ? Ce(c, !0)
          : (t && t.level === 1 && i && Ce(c, !1),
            t &&
              i &&
              (t.authOverLong === !1 || t.childList.length <= 1) &&
              Ce(c, !1));
      }, [d, i, f, t]),
      T.exports.jsxs(
        'div',
        Object.assign(
          { className: L(A.borderTop, t == null ? void 0 : t.className, C) },
          {
            children: [
              t &&
                T.exports.jsx(
                  St,
                  Object.assign(
                    {
                      className: L(t.level === 0 ? A.firstCol : A.centerCol, {
                        firstCenterCol: i,
                      }),
                      firstCenterCol: i,
                      data: t,
                      isLeaf: n.length <= 1,
                      expand: d,
                      onExpand: p,
                    },
                    { children: t.name },
                  ),
                ),
              v
                ? T.exports.jsx(
                    'div',
                    Object.assign(
                      { className: L(A.authCol, C) },
                      {
                        children: n.map((b) =>
                          T.exports.jsx(
                            St,
                            Object.assign(
                              { data: b, isLeaf: !0 },
                              { children: b.name },
                            ),
                            b.id,
                          ),
                        ),
                      },
                    ),
                  )
                : T.exports.jsxs(
                    'div',
                    Object.assign(
                      { className: L(A.lastCol) },
                      {
                        children: [
                          n.map((b, S) =>
                            T.exports.jsx(
                              sn,
                              {
                                data: b,
                                list: b.childList,
                                firstCenterCol: S === 0,
                                expand: d,
                                setExpand: p,
                              },
                              b.id,
                            ),
                          ),
                          t &&
                            n.length === 0 &&
                            T.exports.jsx(
                              'div',
                              Object.assign(
                                { className: L(A.borderTop) },
                                {
                                  children: Array.from({
                                    length: s - t.level,
                                  }).map((b, S) =>
                                    T.exports.jsx(
                                      'div',
                                      {
                                        className: L(
                                          S === s - t.level - 1
                                            ? A.authCol
                                            : A.centerCol,
                                        ),
                                      },
                                      S,
                                    ),
                                  ),
                                },
                              ),
                            ),
                        ],
                      },
                    ),
                  ),
            ],
          },
        ),
        t == null ? void 0 : t.id,
      )
    );
  },
  Fu = (e) => {
    const { data: r } = e;
    return T.exports.jsx(
      'div',
      Object.assign(
        { className: A.row },
        { children: T.exports.jsx(sn, { data: null, list: [r] }) },
      ),
    );
  },
  Nu = (e) => {
    const { list: r = [], columns: t } = e;
    return T.exports.jsx(
      'div',
      Object.assign(
        { className: L('tableBody', A.tableBody) },
        { children: r.map((n) => T.exports.jsx(Fu, { data: n }, n.id)) },
      ),
    );
  };
function I(e, r, t, n) {
  if (t === 'a' && !n)
    throw new TypeError('Private accessor was defined without a getter');
  if (typeof r == 'function' ? e !== r || !n : !r.has(e))
    throw new TypeError(
      'Cannot read private member from an object whose class did not declare it',
    );
  return t === 'm' ? n : t === 'a' ? n.call(e) : n ? n.value : r.get(e);
}
function E(e, r, t, n, i) {
  if (n === 'm') throw new TypeError('Private method is not writable');
  if (n === 'a' && !i)
    throw new TypeError('Private accessor was defined without a setter');
  if (typeof r == 'function' ? e !== r || !i : !r.has(e))
    throw new TypeError(
      'Cannot write private member to an object whose class did not declare it',
    );
  return n === 'a' ? i.call(e, t) : i ? (i.value = t) : r.set(e, t), t;
}
var k, Q, G, ae;
let me = {};
class wr {
  constructor(r, t) {
    k.set(this, !1),
      Q.set(this, !1),
      G.set(this, !1),
      ae.set(this, !1),
      Object.defineProperty(this, 'id', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'pId', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'level', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'options', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'childList', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'parent', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'className', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'map', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.options = Object.assign({}, r)),
      (this.name = r.name),
      (this.className = r.className),
      (this.id = r.id),
      (this.pId = r.pId),
      (this.parent = t),
      (this.level = t == null ? 0 : t.level + 1),
      (this.map = t == null ? { [this.id]: this } : t.map),
      (this.childList = r.childList.map((n) => {
        const i = new wr(n, this);
        return (this.map[i.id] = i), i;
      }));
  }
  isRoot() {
    return this.level === 0;
  }
  get checked() {
    return I(this, k, 'f');
  }
  get indeterminate() {
    return I(this, G, 'f');
  }
  diff() {
    let r = me[this.id];
    return (
      I(this, Q, 'f') !== I(this, k, 'f') &&
        ((r = r != null ? r : {}),
        (r.checked = I(this, k, 'f')),
        I(this, k, 'f') && (r.indeterminate = !1)),
      I(this, ae, 'f') !== I(this, G, 'f') &&
        ((r = r != null ? r : {}), (r.indeterminate = I(this, G, 'f'))),
      r && (me[this.id] = r),
      r
    );
  }
  setChecked(r, t) {
    E(this, Q, I(this, k, 'f'), 'f'),
      E(this, k, r, 'f'),
      r && this.setIndeterminate(!1, !0),
      this.diff() && this.parent && !t && this.calcParentStatus(),
      r
        ? this.each((n) => {
            n.setIndeterminate(!1, !0), n.setChecked(!0, !0);
          })
        : this.indeterminate ||
          this.each((n) => {
            n.setIndeterminate(!1, !0), n.setChecked(!1, !0);
          });
  }
  setIndeterminate(r, t) {
    E(this, ae, I(this, G, 'f'), 'f'),
      E(this, G, r, 'f'),
      r &&
        !t &&
        (E(this, Q, I(this, k, 'f'), 'f'),
        E(this, k, !1, 'f'),
        this.parent && this.parent.setIndeterminate(!0)),
      t || this.diff();
  }
  setCheckedReturnDiff(r, t) {
    me = {};
    const n = this.map[r != null ? r : this.id];
    if (n == null) return {};
    n.setChecked(t != null ? t : !0);
    const i = Object.assign({}, me);
    return (me = {}), i;
  }
  selectKeys(r) {
    const t = this.clean();
    return (
      r.forEach((n) => {
        Ie(t, this.setCheckedReturnDiff(n));
      }),
      t
    );
  }
  getSelectKeys() {
    const r = [];
    return (
      Object.values(this.map).forEach((t) => {
        t.checked && r.push(t.id);
      }),
      r
    );
  }
  calcParentStatus() {
    const { parent: r } = this;
    if (r == null) return;
    const { childList: t } = r,
      { length: n } = t;
    if (n <= 0) return;
    E(r, Q, I(r, k, 'f'), 'f'), E(r, ae, I(r, G, 'f'), 'f');
    const i = t.filter((c) => c.checked).length;
    i === n
      ? (E(r, k, !0, 'f'), E(r, G, !1, 'f'))
      : i > 0
      ? (r.setIndeterminate(!0), E(r, k, !1, 'f'))
      : (E(r, G, !1, 'f'), E(r, k, !1, 'f')),
      r.diff() && !r.indeterminate && r.calcParentStatus();
  }
  clean() {
    const r = {};
    return (
      Object.values(this.map).forEach((t) => {
        let n = r[t.id];
        t.checked && ((n = n != null ? n : {}), (n.checked = !1)),
          t.indeterminate && ((n = n != null ? n : {}), (n.indeterminate = !1)),
          n && (r[t.id] = n),
          E(t, Q, E(t, k, !1, 'f'), 'f'),
          E(t, ae, E(t, G, !1, 'f'), 'f');
      }),
      r
    );
  }
  each(r) {
    this.childList.forEach((t, n) => {
      r(t, this, n);
    });
  }
  eachDeep(r) {
    this.childList.forEach((t, n) => {
      r(t, this, n), t.eachDeep(r);
    });
  }
  eachDeepAfter(r) {
    this.childList.forEach((t, n) => {
      t.eachDeep(r), r(t, this, n);
    });
  }
}
(k = /* @__PURE__ */ new WeakMap()),
  (Q = /* @__PURE__ */ new WeakMap()),
  (G = /* @__PURE__ */ new WeakMap()),
  (ae = /* @__PURE__ */ new WeakMap());
const Bu = (e) => {
  const {
      value: r,
      dataSource: t,
      columns: n,
      loading: i = !1,
      defaultSelectedKeys: o = [],
      onChange: c,
    } = e,
    s = Yr([]),
    f = Yr(null),
    [v, d] = ye(0),
    p = q(() => {
      const g = Ie(
          Array.from({ length: n == null ? void 0 : n.length }).map(() => ({
            title: 'default title',
          })),
          Uf,
        ),
        w = n ? g.slice(0, n.length) : g;
      return Ie([], w, n);
    }, [n]),
    C = q(() => p.length - 1, [p]),
    b = q(() => {
      const g = Ie([], t);
      return (
        Yt(g, (w, F, P) => {
          (w.childList = w.childList || []), (w.level = P), (w.parent = F);
        }),
        g.map((w) => new wr(w))
      );
    }, [t]),
    S = q(() => ({}), [b]),
    B = _e(
      (g) => {
        for (const w in g) {
          const F = S[w],
            P = g[w];
          if (F == null) return;
          for (const J in P) F[J](P[J]);
        }
      },
      [S],
    ),
    H = _e(
      (g) => {
        !Array.isArray(g) ||
          b.forEach((w) => {
            const F = w.selectKeys(g);
            B(F);
          });
      },
      [b, B],
    ),
    M = _e(() => {
      const g = [];
      b.forEach((w) => {
        g.push(...w.getSelectKeys());
      }),
        (s.current = g),
        Ce(c, g);
    }, [c, b]);
  return (
    ee(() => {
      r || H(o);
    }, [b, H]),
    ee(() => {
      r == null || r === s.current || H(r);
    }, [b, H, r]),
    ee(() => {
      var g;
      const w =
        (g = f.current) === null || g === void 0
          ? void 0
          : g.querySelector(`.${A.tableItem}:last-child`);
      w && d(w == null ? void 0 : w.getBoundingClientRect().width);
    }, [b]),
    T.exports.jsx(
      Nn,
      Object.assign(
        { spinning: i },
        {
          children: T.exports.jsx(
            'div',
            Object.assign(
              { ref: f, className: A.permissionContainer },
              {
                children: T.exports.jsxs(
                  jf,
                  Object.assign(
                    {
                      value: {
                        columns: p,
                        onChange: M,
                        maxLevel: C,
                        dataSource: b,
                        dispatchMap: S,
                        dispatchWithDiff: B,
                        authWidth: v,
                      },
                    },
                    {
                      children: [
                        T.exports.jsx(Gf, { columns: p }),
                        i
                          ? T.exports.jsx(Ln, { description: !0 })
                          : T.exports.jsx(Nu, { columns: p, list: b }),
                      ],
                    },
                  ),
                ),
              },
            ),
          ),
        },
      ),
    )
  );
};
export { Bu as default };
