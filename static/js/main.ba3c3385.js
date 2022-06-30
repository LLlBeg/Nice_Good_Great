/*! For license information please see main.ba3c3385.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, i, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = l);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          A = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          M = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var I = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var O = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (O && e[O]) || e["@@iterator"])
            ? e
            : null;
        }
        var B,
          R = Object.assign;
        function D(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var F = !1;
        function _(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  l = a.length - 1,
                  o = i.length - 1;
                1 <= l && 0 <= o && a[l] !== i[o];

              )
                o--;
              for (; 1 <= l && 0 <= o; l--, o--)
                if (a[l] !== i[o]) {
                  if (1 !== l || 1 !== o)
                    do {
                      if ((l--, 0 > --o || a[l] !== i[o])) {
                        var s = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= l && 0 <= o);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function Q(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = _(e.type, !1));
            case 11:
              return (e = _(e.type.render, !1));
            case 1:
              return (e = _(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case A:
              return "Fragment";
            case S:
              return "Portal";
            case E:
              return "Profiler";
            case k:
              return "StrictMode";
            case j:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case M:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          Ae = null,
          ke = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Se) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = xa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Ae ? (ke ? ke.push(e) : (ke = [e])) : (Ae = e);
        }
        function Te() {
          if (Ae) {
            var e = Ae,
              t = ke;
            if (((ke = Ae = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Me(e, t) {
          return e(t);
        }
        function je() {}
        var Ne = !1;
        function Pe(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Me(e, t, n);
          } finally {
            (Ne = !1), (null !== Ae || null !== ke) && (je(), Te());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ie = !1;
        if (c)
          try {
            var Oe = {};
            Object.defineProperty(Oe, "passive", {
              get: function () {
                Ie = !0;
              },
            }),
              window.addEventListener("test", Oe, Oe),
              window.removeEventListener("test", Oe, Oe);
          } catch (ce) {
            Ie = !1;
          }
        function ze(e, t, n, r, a, i, l, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Be = !1,
          Re = null,
          De = !1,
          Fe = null,
          _e = {
            onError: function (e) {
              (Be = !0), (Re = e);
            },
          };
        function Qe(e, t, n, r, a, i, l, o, s) {
          (Be = !1), (Re = null), ze.apply(_e, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ve(e) !== e) throw Error(i(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return He(a), e;
                    if (l === r) return He(a), t;
                    l = l.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = l);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = l);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = l.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = l), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = l), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Je = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var o = l & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (i &= l) && (r = dt(i));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          St,
          At,
          kt,
          Et,
          Ct = !1,
          Tt = [],
          Mt = null,
          jt = null,
          Nt = null,
          Pt = new Map(),
          Lt = new Map(),
          It = [],
          Ot =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Mt = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function Bt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Rt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      At(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function _t() {
          (Ct = !1),
            null !== Mt && Dt(Mt) && (Mt = null),
            null !== jt && Dt(jt) && (jt = null),
            null !== Nt && Dt(Nt) && (Nt = null),
            Pt.forEach(Ft),
            Lt.forEach(Ft);
        }
        function Qt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, _t)));
        }
        function Vt(e) {
          function t(t) {
            return Qt(t, e);
          }
          if (0 < Tt.length) {
            Qt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Mt && Qt(Mt, e),
              null !== jt && Qt(jt, e),
              null !== Nt && Qt(Nt, e),
              Pt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < It.length;
            n++
          )
            (r = It[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < It.length && null === (n = It[0]).blockedOn; )
            Rt(n), null === n.blockedOn && It.shift();
        }
        var Ut = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            i = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Ut.transition = i);
          }
        }
        function Gt(e, t, n, r) {
          var a = bt,
            i = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Ut.transition = i);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Jt(e, t, n, r);
            if (null === a) Hr(e, t, r, Yt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Mt = Bt(Mt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (jt = Bt(jt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Nt = Bt(Nt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Pt.set(i, Bt(Pt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Lt.set(i, Bt(Lt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && xt(i),
                  null === (i = Jt(e, t, n, r)) && Hr(e, t, r, Yt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Jt(e, t, n, r) {
          if (((Yt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Zt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[i - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = R({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = R({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(R({}, pn, { dataTransfer: 0 })),
          vn = an(R({}, dn, { relatedTarget: 0 })),
          gn = an(
            R({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = R({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(R({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          An = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = An[e]) && !!t[e];
        }
        function En() {
          return kn;
        }
        var Cn = R({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Cn),
          Mn = an(
            R({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = an(
            R({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Nn = an(
            R({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = R({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = an(Pn),
          In = [9, 13, 27, 32],
          On = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var Bn = c && "TextEvent" in window && !zn,
          Rn = c && (!On || (zn && 8 < zn && 11 >= zn)),
          Dn = String.fromCharCode(32),
          Fn = !1;
        function _n(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Qn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          qn = null;
        function Yn(e) {
          Dr(e, 0);
        }
        function Jn(e) {
          if (q(wa(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Zn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Zn = $n;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Gn && (Gn.detachEvent("onpropertychange", nr), (qn = Gn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(qn)) {
            var t = [];
            Wn(t, qn, e, xe(e)), Pe(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Gn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(qn);
        }
        function ir(e, t) {
          if ("click" === e) return Jn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== Y(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Gr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Ar = {},
          kr = {};
        function Er(e) {
          if (Ar[e]) return Ar[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Ar[e] = n[t]);
          return e;
        }
        c &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Cr = Er("animationend"),
          Tr = Er("animationiteration"),
          Mr = Er("animationstart"),
          jr = Er("transitionend"),
          Nr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          Nr.set(e, t), s(t, [e]);
        }
        for (var Ir = 0; Ir < Pr.length; Ir++) {
          var Or = Pr[Ir];
          Lr(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
        }
        Lr(Cr, "onAnimationEnd"),
          Lr(Tr, "onAnimationIteration"),
          Lr(Mr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(jr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Br = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, o, s, u) {
              if ((Qe.apply(this, arguments), Be)) {
                if (!Be) throw Error(i(198));
                var c = Re;
                (Be = !1), (Re = null), De || ((De = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var o = r[l],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  Rr(a, o, u), (i = s);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (o = r[l]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, o, u), (i = s);
                }
            }
          }
          if (De) throw ((e = Fe), (De = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function _r(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Qr = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Qr]) {
            (e[Qr] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Br.has(t) || _r(t, !1, e), _r(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Qr] || ((t[Qr] = !0), _r("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Gt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ie ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== o; ) {
                  if (null === (l = ya(o))) return;
                  if (5 === (s = l.tag) || 6 === s) {
                    r = i = l;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = i,
              a = xe(n),
              l = [];
            e: {
              var o = Nr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = jn;
                    break;
                  case Cr:
                  case Tr:
                  case Mr:
                    s = gn;
                    break;
                  case jr:
                    s = Nn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Mn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Le(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  l.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Mn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? o : wa(s)),
                  (p = null == u ? o : wa(u)),
                  ((o = new c(m, h + "leave", s, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Yr(l, o, s, c, !1),
                  null !== u && null !== d && Yr(l, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var v = Kn;
              else if (Hn(o))
                if (Xn) v = lr;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (v = ir);
              switch (
                (v && (v = v(e, r))
                  ? Wn(l, v, n, a)
                  : (g && g(e, o, r),
                    "focusout" === e &&
                      (g = o._wrapperState) &&
                      g.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var y;
              if (On)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? _n(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = en())
                    : ((Zt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Vn = !0))),
                0 < (g = Gr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Qn(n)) && (b.data = y))),
                (y = Bn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Qn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!On && _n(e, t))
                          ? ((e = en()), ($t = Zt = Xt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(l, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Le(e, n)) && r.unshift(Wr(e, i, a)),
              null != (i = Le(e, t)) && r.push(Wr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var i = t._reactName, l = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Le(n, i)) && l.unshift(Wr(n, s, o))
                : a || (null != (s = Le(n, i)) && l.push(Wr(n, s, o)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Jr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Kr, "");
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(i(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          Aa = -1;
        function ka(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Aa || ((e.current = Sa[Aa]), (Sa[Aa] = null), Aa--);
        }
        function Ca(e, t) {
          Aa++, (Sa[Aa] = e.current), (e.current = t);
        }
        var Ta = {},
          Ma = ka(Ta),
          ja = ka(!1),
          Na = Ta;
        function Pa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function La(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ia() {
          Ea(ja), Ea(Ma);
        }
        function Oa(e, t, n) {
          if (Ma.current !== Ta) throw Error(i(168));
          Ca(Ma, t), Ca(ja, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, U(e) || "Unknown", a));
          return R({}, n, r);
        }
        function Ba(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Na = Ma.current),
            Ca(Ma, e),
            Ca(ja, ja.current),
            !0
          );
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = za(e, t, Na)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(ja),
              Ea(Ma),
              Ca(Ma, e))
            : Ea(ja),
            Ca(ja, n);
        }
        var Da = null,
          Fa = !1,
          _a = !1;
        function Qa(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Va() {
          if (!_a && null !== Da) {
            _a = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Fa = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe($e, Va), a);
            } finally {
              (bt = t), (_a = !1);
            }
          }
          return null;
        }
        var Ua = [],
          Ha = 0,
          Wa = null,
          Ga = 0,
          qa = [],
          Ya = 0,
          Ja = null,
          Ka = 1,
          Xa = "";
        function Za(e, t) {
          (Ua[Ha++] = Ga), (Ua[Ha++] = Wa), (Wa = e), (Ga = t);
        }
        function $a(e, t, n) {
          (qa[Ya++] = Ka), (qa[Ya++] = Xa), (qa[Ya++] = Ja), (Ja = e);
          var r = Ka;
          e = Xa;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - lt(t) + a;
          if (30 < i) {
            var l = a - (a % 5);
            (i = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ka = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Xa = i + e);
          } else (Ka = (1 << i) | (n << a) | r), (Xa = e);
        }
        function ei(e) {
          null !== e.return && (Za(e, 1), $a(e, 1, 0));
        }
        function ti(e) {
          for (; e === Wa; )
            (Wa = Ua[--Ha]), (Ua[Ha] = null), (Ga = Ua[--Ha]), (Ua[Ha] = null);
          for (; e === Ja; )
            (Ja = qa[--Ya]),
              (qa[Ya] = null),
              (Xa = qa[--Ya]),
              (qa[Ya] = null),
              (Ka = qa[--Ya]),
              (qa[Ya] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function li(e, t) {
          var n = Pu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function oi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ja ? { id: Ka, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!oi(e, t)) {
                if (si(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && oi(e, t)
                  ? li(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (si(e)) throw (fi(), Error(i(418)));
            for (; t; ) li(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var mi = w.ReactCurrentBatchConfig;
        function vi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gi = ka(null),
          yi = null,
          bi = null,
          wi = null;
        function xi() {
          wi = bi = yi = null;
        }
        function Si(e) {
          var t = gi.current;
          Ea(gi), (e._currentValue = t);
        }
        function Ai(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ki(e, t) {
          (yi = e),
            (wi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wo = !0), (e.firstContext = null));
        }
        function Ei(e) {
          var t = e._currentValue;
          if (wi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === yi) throw Error(i(308));
              (bi = e), (yi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Ci = null;
        function Ti(e) {
          null === Ci ? (Ci = [e]) : Ci.push(e);
        }
        function Mi(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ti(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            ji(e, r)
          );
        }
        function ji(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ni = !1;
        function Pi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Li(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ii(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Oi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ms))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              ji(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ti(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            ji(e, n)
          );
        }
        function zi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Bi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = l) : (i = i.next = l), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ri(e, t, n, r) {
          var a = e.updateQueue;
          Ni = !1;
          var i = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === l ? (i = u) : (l.next = u), (l = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== i) {
            var d = a.baseState;
            for (l = 0, c = u = s = null, o = i; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = R({}, d, f);
                      break e;
                    case 2:
                      Ni = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Bs |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Di(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Fi = new r.Component().refs;
        function _i(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Qi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ii(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Oi(e, i, a)) && (nu(t, e, a, r), zi(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ii(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Oi(e, i, a)) && (nu(t, e, a, r), zi(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ii(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Oi(e, a, r)) && (nu(t, e, r, n), zi(t, e, r));
          },
        };
        function Vi(e, t, n, r, a, i, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, i);
        }
        function Ui(e, t, n) {
          var r = !1,
            a = Ta,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ei(i))
              : ((a = La(t) ? Na : Ma.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Pa(e, a)
                  : Ta)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Qi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Hi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Qi.enqueueReplaceState(t, t.state, null);
        }
        function Wi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Fi), Pi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ei(i))
            : ((i = La(t) ? Na : Ma.current), (a.context = Pa(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (_i(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Qi.enqueueReplaceState(a, a.state, null),
              Ri(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Gi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Fi && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yi(e) {
          return (0, e._init)(e._payload);
        }
        function Ji(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ru(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === A
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === L &&
                    Yi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Gi(e, t, n)), (r.return = e), r)
              : (((r = Ou(n.type, n.key, n.props, null, e.mode, r)).ref = Gi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = zu(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ru("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Ou(t.type, t.key, t.props, null, e.mode, n)).ref = Gi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Du(t, e.mode, n)).return = e), t;
                case L:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = zu(t, e.mode, n, null)).return = e), t;
              qi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case L:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : d(e, t, n, r, null);
              qi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case L:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              qi(t, r);
            }
            return null;
          }
          function m(a, i, o, s) {
            for (
              var u = null, c = null, d = i, m = (i = 0), v = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, o[m], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (i = l(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (m === o.length) return n(a, d), ai && Za(a, m), u;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((i = l(d, i, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ai && Za(a, m), u;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (v = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (i = l(v, i, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, m),
              u
            );
          }
          function v(a, o, s, u) {
            var c = z(s);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (s = c.call(s))) throw Error(i(151));
            for (
              var d = (c = null), m = o, v = (o = 0), g = null, y = s.next();
              null !== m && !y.done;
              v++, y = s.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (o = l(b, o, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(a, m), ai && Za(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((o = l(y, o, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return ai && Za(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = s.next())
              null !== (y = h(m, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (o = l(y, o, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, v),
              c
            );
          }
          return function e(r, i, l, s) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === A &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case x:
                  e: {
                    for (var u = l.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === A) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, l.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Yi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, l.props)).ref = Gi(r, c, l)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === A
                      ? (((i = zu(l.props.children, r.mode, s, l.key)).return =
                          r),
                        (r = i))
                      : (((s = Ou(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          s
                        )).ref = Gi(r, i, l)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case S:
                  e: {
                    for (c = l.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === l.containerInfo &&
                          i.stateNode.implementation === l.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, l.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Du(l, r.mode, s)).return = r), (r = i);
                  }
                  return o(r);
                case L:
                  return e(r, i, (c = l._init)(l._payload), s);
              }
              if (te(l)) return m(r, i, l, s);
              if (z(l)) return v(r, i, l, s);
              qi(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, l)).return = r), (r = i))
                  : (n(r, i), ((i = Ru(l, r.mode, s)).return = r), (r = i)),
                o(r))
              : n(r, i);
          };
        }
        var Ki = Ji(!0),
          Xi = Ji(!1),
          Zi = {},
          $i = ka(Zi),
          el = ka(Zi),
          tl = ka(Zi);
        function nl(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function rl(e, t) {
          switch ((Ca(tl, t), Ca(el, e), Ca($i, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea($i), Ca($i, t);
        }
        function al() {
          Ea($i), Ea(el), Ea(tl);
        }
        function il(e) {
          nl(tl.current);
          var t = nl($i.current),
            n = se(t, e.type);
          t !== n && (Ca(el, e), Ca($i, n));
        }
        function ll(e) {
          el.current === e && (Ea($i), Ea(el));
        }
        var ol = ka(0);
        function sl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ul = [];
        function cl() {
          for (var e = 0; e < ul.length; e++)
            ul[e]._workInProgressVersionPrimary = null;
          ul.length = 0;
        }
        var dl = w.ReactCurrentDispatcher,
          fl = w.ReactCurrentBatchConfig,
          pl = 0,
          hl = null,
          ml = null,
          vl = null,
          gl = !1,
          yl = !1,
          bl = 0,
          wl = 0;
        function xl() {
          throw Error(i(321));
        }
        function Sl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function Al(e, t, n, r, a, l) {
          if (
            ((pl = l),
            (hl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? lo : oo),
            (e = n(r, a)),
            yl)
          ) {
            l = 0;
            do {
              if (((yl = !1), (bl = 0), 25 <= l)) throw Error(i(301));
              (l += 1),
                (vl = ml = null),
                (t.updateQueue = null),
                (dl.current = so),
                (e = n(r, a));
            } while (yl);
          }
          if (
            ((dl.current = io),
            (t = null !== ml && null !== ml.next),
            (pl = 0),
            (vl = ml = hl = null),
            (gl = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function kl() {
          var e = 0 !== bl;
          return (bl = 0), e;
        }
        function El() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vl ? (hl.memoizedState = vl = e) : (vl = vl.next = e), vl
          );
        }
        function Cl() {
          if (null === ml) {
            var e = hl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ml.next;
          var t = null === vl ? hl.memoizedState : vl.next;
          if (null !== t) (vl = t), (ml = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ml = e).memoizedState,
              baseState: ml.baseState,
              baseQueue: ml.baseQueue,
              queue: ml.queue,
              next: null,
            }),
              null === vl ? (hl.memoizedState = vl = e) : (vl = vl.next = e);
          }
          return vl;
        }
        function Tl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ml(e) {
          var t = Cl(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ml,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var o = a.next;
              (a.next = l.next), (l.next = o);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = l;
            do {
              var d = c.lane;
              if ((pl & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (hl.lanes |= d),
                  (Bs |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (wo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (hl.lanes |= l), (Bs |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function jl(e) {
          var t = Cl(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (l = e(l, o.action)), (o = o.next);
            } while (o !== a);
            or(l, t.memoizedState) || (wo = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Nl() {}
        function Pl(e, t) {
          var n = hl,
            r = Cl(),
            a = t(),
            l = !or(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (wo = !0)),
            (r = r.queue),
            Ul(Ol.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== vl && 1 & vl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Dl(9, Il.bind(null, n, r, a, t), void 0, null),
              null === js)
            )
              throw Error(i(349));
            0 !== (30 & pl) || Ll(n, t, a);
          }
          return a;
        }
        function Ll(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Il(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), zl(t) && Bl(e);
        }
        function Ol(e, t, n) {
          return n(function () {
            zl(t) && Bl(e);
          });
        }
        function zl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Bl(e) {
          var t = ji(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Rl(e) {
          var t = El();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Tl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, hl, e)),
            [t.memoizedState, e]
          );
        }
        function Dl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fl() {
          return Cl().memoizedState;
        }
        function _l(e, t, n, r) {
          var a = El();
          (hl.flags |= e),
            (a.memoizedState = Dl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ql(e, t, n, r) {
          var a = Cl();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ml) {
            var l = ml.memoizedState;
            if (((i = l.destroy), null !== r && Sl(r, l.deps)))
              return void (a.memoizedState = Dl(t, n, i, r));
          }
          (hl.flags |= e), (a.memoizedState = Dl(1 | t, n, i, r));
        }
        function Vl(e, t) {
          return _l(8390656, 8, e, t);
        }
        function Ul(e, t) {
          return Ql(2048, 8, e, t);
        }
        function Hl(e, t) {
          return Ql(4, 2, e, t);
        }
        function Wl(e, t) {
          return Ql(4, 4, e, t);
        }
        function Gl(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ql(4, 4, Gl.bind(null, t, e), n)
          );
        }
        function Yl() {}
        function Jl(e, t) {
          var n = Cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Kl(e, t) {
          var n = Cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xl(e, t, n) {
          return 0 === (21 & pl)
            ? (e.baseState && ((e.baseState = !1), (wo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (hl.lanes |= n), (Bs |= n), (e.baseState = !0)),
              t);
        }
        function Zl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fl.transition;
          fl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (fl.transition = r);
          }
        }
        function $l() {
          return Cl().memoizedState;
        }
        function eo(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = Mi(e, t, n, r))) {
            nu(n, e, r, eu()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  o = i(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, l))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Ti(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Mi(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === hl || (null !== t && t === hl);
        }
        function ro(e, t) {
          yl = gl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var io = {
            readContext: Ei,
            useCallback: xl,
            useContext: xl,
            useEffect: xl,
            useImperativeHandle: xl,
            useInsertionEffect: xl,
            useLayoutEffect: xl,
            useMemo: xl,
            useReducer: xl,
            useRef: xl,
            useState: xl,
            useDebugValue: xl,
            useDeferredValue: xl,
            useTransition: xl,
            useMutableSource: xl,
            useSyncExternalStore: xl,
            useId: xl,
            unstable_isNewReconciler: !1,
          },
          lo = {
            readContext: Ei,
            useCallback: function (e, t) {
              return (El().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ei,
            useEffect: Vl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                _l(4194308, 4, Gl.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return _l(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return _l(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = El();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = El();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, hl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (El().memoizedState = e);
            },
            useState: Rl,
            useDebugValue: Yl,
            useDeferredValue: function (e) {
              return (El().memoizedState = e);
            },
            useTransition: function () {
              var e = Rl(!1),
                t = e[0];
              return (
                (e = Zl.bind(null, e[1])), (El().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hl,
                a = El();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === js)) throw Error(i(349));
                0 !== (30 & pl) || Ll(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Vl(Ol.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Dl(9, Il.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = El(),
                t = js.identifierPrefix;
              if (ai) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - lt(Ka) - 1))).toString(32) + n)),
                  0 < (n = bl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Ei,
            useCallback: Jl,
            useContext: Ei,
            useEffect: Ul,
            useImperativeHandle: ql,
            useInsertionEffect: Hl,
            useLayoutEffect: Wl,
            useMemo: Kl,
            useReducer: Ml,
            useRef: Fl,
            useState: function () {
              return Ml(Tl);
            },
            useDebugValue: Yl,
            useDeferredValue: function (e) {
              return Xl(Cl(), ml.memoizedState, e);
            },
            useTransition: function () {
              return [Ml(Tl)[0], Cl().memoizedState];
            },
            useMutableSource: Nl,
            useSyncExternalStore: Pl,
            useId: $l,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Ei,
            useCallback: Jl,
            useContext: Ei,
            useEffect: Ul,
            useImperativeHandle: ql,
            useInsertionEffect: Hl,
            useLayoutEffect: Wl,
            useMemo: Kl,
            useReducer: jl,
            useRef: Fl,
            useState: function () {
              return jl(Tl);
            },
            useDebugValue: Yl,
            useDeferredValue: function (e) {
              var t = Cl();
              return null === ml
                ? (t.memoizedState = e)
                : Xl(t, ml.memoizedState, e);
            },
            useTransition: function () {
              return [jl(Tl)[0], Cl().memoizedState];
            },
            useMutableSource: Nl,
            useSyncExternalStore: Pl,
            useId: $l,
            unstable_isNewReconciler: !1,
          };
        function uo(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Q(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var po = "function" === typeof WeakMap ? WeakMap : Map;
        function ho(e, t, n) {
          ((n = Ii(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Ws = r)), fo(0, t);
            }),
            n
          );
        }
        function mo(e, t, n) {
          (n = Ii(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fo(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vo(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new po();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function go(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ii(-1, 1)).tag = 2), Oi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bo = w.ReactCurrentOwner,
          wo = !1;
        function xo(e, t, n, r) {
          t.child = null === e ? Xi(t, null, n, r) : Ki(t, e.child, n, r);
        }
        function So(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            ki(t, a),
            (r = Al(e, t, n, r, i, a)),
            (n = kl()),
            null === e || wo
              ? (ai && n && ei(t), (t.flags |= 1), xo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ho(e, t, a))
          );
        }
        function Ao(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Lu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ou(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), ko(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var l = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(l, r) &&
              e.ref === t.ref
            )
              return Ho(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Iu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ko(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === t.ref) {
              if (((wo = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ho(e, t, a);
              0 !== (131072 & e.flags) && (wo = !0);
            }
          }
          return To(e, t, n, r, a);
        }
        function Eo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Is, Ls),
                (Ls |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Is, Ls),
                  (Ls |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ca(Is, Ls),
                (Ls |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Is, Ls),
              (Ls |= r);
          return xo(e, t, a, n), t.child;
        }
        function Co(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function To(e, t, n, r, a) {
          var i = La(n) ? Na : Ma.current;
          return (
            (i = Pa(t, i)),
            ki(t, a),
            (n = Al(e, t, n, r, i, a)),
            (r = kl()),
            null === e || wo
              ? (ai && r && ei(t), (t.flags |= 1), xo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ho(e, t, a))
          );
        }
        function Mo(e, t, n, r, a) {
          if (La(n)) {
            var i = !0;
            Ba(t);
          } else i = !1;
          if ((ki(t, a), null === t.stateNode))
            Uo(e, t), Ui(t, n, r), Wi(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              o = t.memoizedProps;
            l.props = o;
            var s = l.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ei(u))
              : (u = Pa(t, (u = La(n) ? Na : Ma.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Hi(t, l, r, u)),
              (Ni = !1);
            var f = t.memoizedState;
            (l.state = f),
              Ri(t, r, l, a),
              (s = t.memoizedState),
              o !== r || f !== s || ja.current || Ni
                ? ("function" === typeof c &&
                    (_i(t, n, c, r), (s = t.memoizedState)),
                  (o = Ni || Vi(t, n, o, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = u),
                  (r = o))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Li(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : vi(t.type, o)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ei(s))
                : (s = Pa(t, (s = La(n) ? Na : Ma.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((o !== d || f !== s) && Hi(t, l, r, s)),
              (Ni = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ri(t, r, l, a);
            var h = t.memoizedState;
            o !== d || f !== h || ja.current || Ni
              ? ("function" === typeof p &&
                  (_i(t, n, p, r), (h = t.memoizedState)),
                (u = Ni || Vi(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, s),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = s),
                (r = u))
              : ("function" !== typeof l.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return jo(e, t, n, r, i, a);
        }
        function jo(e, t, n, r, a, i) {
          Co(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ra(t, n, !1), Ho(e, t, i);
          (r = t.stateNode), (bo.current = t);
          var o =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Ki(t, e.child, null, i)),
                (t.child = Ki(t, null, o, i)))
              : xo(e, t, o, i),
            (t.memoizedState = r.state),
            a && Ra(t, n, !0),
            t.child
          );
        }
        function No(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oa(0, t.context, !1),
            rl(e, t.containerInfo);
        }
        function Po(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), xo(e, t, n, r), t.child;
        }
        var Lo,
          Io,
          Oo,
          zo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Bo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ro(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ol.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Ca(ol, 1 & l),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Bu(s, a, 0, null)),
                      (e = zu(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Bo(n)),
                      (t.memoizedState = zo),
                      e)
                    : Do(t, s))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fo(e, t, o, (r = co(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Bu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = zu(l, a, o, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ki(t, e.child, null, o),
                    (t.child.memoizedState = Bo(o)),
                    (t.memoizedState = zo),
                    l);
              if (0 === (1 & t.mode)) return Fo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fo(e, t, o, (r = co((l = Error(i(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), wo || s)) {
                if (null !== (r = js)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), ji(e, a), nu(r, e, a, -1));
                }
                return mu(), Fo(e, t, o, (r = co(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((qa[Ya++] = Ka),
                    (qa[Ya++] = Xa),
                    (qa[Ya++] = Ja),
                    (Ka = e.id),
                    (Xa = e.overflow),
                    (Ja = t)),
                  ((t = Do(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, a, r, l, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (l = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Iu(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (o = Iu(r, o))
                : ((o = zu(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Bo(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = zo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Iu(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Do(e, t) {
          return (
            ((t = Bu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fo(e, t, n, r) {
          return (
            null !== r && hi(r),
            Ki(t, e.child, null, n),
            ((e = Do(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function _o(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ai(e.return, t, n);
        }
        function Qo(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Vo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((xo(e, t, r.children, n), 0 !== (2 & (r = ol.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && _o(e, n, t);
                else if (19 === e.tag) _o(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(ol, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === sl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Qo(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === sl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Qo(t, !0, n, null, i);
                break;
              case "together":
                Qo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Uo(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ho(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Bs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Iu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Iu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wo(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Go(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qo(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Go(t), null;
            case 1:
            case 17:
              return La(t.type) && Ia(), Go(t), null;
            case 3:
              return (
                (r = t.stateNode),
                al(),
                Ea(ja),
                Ea(Ma),
                cl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (lu(ii), (ii = null)))),
                Go(t),
                null
              );
            case 5:
              ll(t);
              var a = nl(tl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Io(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Go(t), null;
                }
                if (((e = nl($i.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Fr(zr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      K(r, l), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Fr("invalid", r);
                  }
                  for (var s in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var u = l[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), $(r, l, !0);
                      break;
                    case "textarea":
                      G(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Lo(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Fr(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = J(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (l in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l];
                        "style" === l
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (o.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && Fr("scroll", e)
                              : null != c && b(e, l, c, s));
                      }
                    switch (n) {
                      case "input":
                        G(e), $(e, r, !1);
                        break;
                      case "textarea":
                        G(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Go(t), null;
            case 6:
              if (e && null != t.stateNode) Oo(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = nl(tl.current)), nl($i.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Go(t), null;
            case 13:
              if (
                (Ea(ol),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), pi(), (t.flags |= 98560), (l = !1);
                else if (((l = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(i(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(i(317));
                    l[fa] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Go(t), (l = !1);
                } else null !== ii && (lu(ii), (ii = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ol.current)
                        ? 0 === Os && (Os = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Go(t),
                  null);
            case 4:
              return (
                al(), null === e && Vr(t.stateNode.containerInfo), Go(t), null
              );
            case 10:
              return Si(t.type._context), Go(t), null;
            case 19:
              if ((Ea(ol), null === (l = t.memoizedState))) return Go(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (r) Wo(l, !1);
                else {
                  if (0 !== Os || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = sl(e))) {
                        for (
                          t.flags |= 128,
                            Wo(l, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(ol, (1 & ol.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Vs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wo(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = sl(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wo(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !s.alternate &&
                        !ai)
                    )
                      return Go(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wo(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s),
                    (l.last = s));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ol.current),
                  Ca(ol, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Go(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ls) &&
                    (Go(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Go(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Yo(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                La(t.type) && Ia(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                al(),
                Ea(ja),
                Ea(Ma),
                cl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ll(t), null;
            case 13:
              if (
                (Ea(ol),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(ol), null;
            case 4:
              return al(), null;
            case 10:
              return Si(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Lo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Io = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), nl($i.current);
              var i,
                l = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case "select":
                  (a = R({}, a, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          s[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (l || (l = []), l.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (l = l || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (l = l || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            l || s === u || (l = []))
                          : (l = l || []).push(c, u));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Oo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Jo = !1,
          Ko = !1,
          Xo = "function" === typeof WeakSet ? WeakSet : Set,
          Zo = null;
        function $o(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ku(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            ku(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && es(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function os(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Ko || $o(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Vt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ko &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    l = i.destroy;
                  (i = i.tag),
                    void 0 !== l &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      es(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Ko &&
                ($o(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  ku(n, t, o);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ko = (r = Ko) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Ko = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xo()),
              t.forEach(function (t) {
                var r = Mu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(i(160));
                ps(l, o, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ku(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (v) {
                  ku(e, e.return, v);
                }
                try {
                  ns(5, e, e.return);
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              break;
            case 1:
              ms(t, e), gs(e), 512 & r && null !== n && $o(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                gs(e),
                512 & r && null !== n && $o(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : l,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      be(s, o);
                    var c = be(s, l);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        Z(a, l);
                        break;
                      case "textarea":
                        ie(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (v) {
                    ku(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (v) {
                  ku(e, e.return, v);
                }
              break;
            case 4:
            default:
              ms(t, e), gs(e);
              break;
            case 13:
              ms(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Qs = Xe())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ko = (c = Ko) || d), ms(t, e), (Ko = c))
                  : ms(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zo = e, d = e.child; null !== d; ) {
                    for (f = Zo = d; null !== Zo; ) {
                      switch (((h = (p = Zo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          $o(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              ku(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          $o(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zo = h)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", o)));
                      } catch (v) {
                        ku(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (v) {
                        ku(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), gs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, os(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ss(e, os(e), l);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (o) {
              ku(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Zo = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zo; ) {
            var a = Zo,
              i = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Jo;
              if (!l) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Ko;
                o = Jo;
                var u = Ko;
                if (((Jo = l), (Ko = s) && !u))
                  for (Zo = a; null !== Zo; )
                    (s = (l = Zo).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = l), (Zo = s))
                        : Ss(a);
                for (; null !== i; ) (Zo = i), bs(i, t, n), (i = i.sibling);
                (Zo = a), (Jo = o), (Ko = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Zo = i))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ko || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ko)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Di(t, l, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Di(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Ko || (512 & t.flags && as(t));
              } catch (p) {
                ku(t, t.return, p);
              }
            }
            if (t === e) {
              Zo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function xs(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (t === e) {
              Zo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    ku(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ku(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, i, s);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, l, s);
                  }
              }
            } catch (s) {
              ku(t, t.return, s);
            }
            if (t === e) {
              Zo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Zo = o);
              break;
            }
            Zo = t.return;
          }
        }
        var As,
          ks = Math.ceil,
          Es = w.ReactCurrentDispatcher,
          Cs = w.ReactCurrentOwner,
          Ts = w.ReactCurrentBatchConfig,
          Ms = 0,
          js = null,
          Ns = null,
          Ps = 0,
          Ls = 0,
          Is = ka(0),
          Os = 0,
          zs = null,
          Bs = 0,
          Rs = 0,
          Ds = 0,
          Fs = null,
          _s = null,
          Qs = 0,
          Vs = 1 / 0,
          Us = null,
          Hs = !1,
          Ws = null,
          Gs = null,
          qs = !1,
          Ys = null,
          Js = 0,
          Ks = 0,
          Xs = null,
          Zs = -1,
          $s = 0;
        function eu() {
          return 0 !== (6 & Ms) ? Xe() : -1 !== Zs ? Zs : (Zs = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ms) && 0 !== Ps
            ? Ps & -Ps
            : null !== mi.transition
            ? (0 === $s && ($s = mt()), $s)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Xs = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & Ms) && e === js) ||
              (e === js && (0 === (2 & Ms) && (Rs |= n), 4 === Os && ou(e, Ps)),
              ru(e, r),
              1 === n &&
                0 === Ms &&
                0 === (1 & t.mode) &&
                ((Vs = Xe() + 500), Fa && Va()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var l = 31 - lt(i),
                o = 1 << l,
                s = a[l];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[l] = pt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (i &= ~o);
            }
          })(e, t);
          var r = ft(e, e === js ? Ps : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Qa(e);
                  })(su.bind(null, e))
                : Qa(su.bind(null, e)),
                la(function () {
                  0 === (6 & Ms) && Va();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = ju(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Zs = -1), ($s = 0), 0 !== (6 & Ms))) throw Error(i(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ft(e, e === js ? Ps : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = Ms;
            Ms |= 2;
            var l = hu();
            for (
              (js === e && Ps === t) ||
              ((Us = null), (Vs = Xe() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            xi(),
              (Es.current = l),
              (Ms = a),
              null !== Ns ? (t = 0) : ((js = null), (Ps = 0), (t = Os));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = zs), fu(e, 0), ou(e, r), ru(e, Xe()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(i(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = iu(e, l))),
                  1 === t))
              )
                throw ((n = zs), fu(e, 0), ou(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  xu(e, _s, Us);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = Qs + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, _s, Us), t);
                    break;
                  }
                  xu(e, _s, Us);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - lt(r);
                    (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * ks(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, _s, Us), r);
                    break;
                  }
                  xu(e, _s, Us);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = _s), (_s = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === _s ? (_s = e) : _s.push.apply(_s, e);
        }
        function ou(e, t) {
          for (
            t &= ~Ds,
              t &= ~Rs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ms)) throw Error(i(327));
          Su();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = zs), fu(e, 0), ou(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, _s, Us),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = Ms;
          Ms |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ms = n) && ((Vs = Xe() + 500), Fa && Va());
          }
        }
        function cu(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & Ms) && Su();
          var t = Ms;
          Ms |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (Ms = t)) && Va();
          }
        }
        function du() {
          (Ls = Is.current), Ea(Is);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ns))
            for (n = Ns.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ia();
                  break;
                case 3:
                  al(), Ea(ja), Ea(Ma), cl();
                  break;
                case 5:
                  ll(r);
                  break;
                case 4:
                  al();
                  break;
                case 13:
                case 19:
                  Ea(ol);
                  break;
                case 10:
                  Si(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((js = e),
            (Ns = e = Iu(e.current, null)),
            (Ps = Ls = t),
            (Os = 0),
            (zs = null),
            (Ds = Rs = Bs = 0),
            (_s = Fs = null),
            null !== Ci)
          ) {
            for (t = 0; t < Ci.length; t++)
              if (null !== (r = (n = Ci[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var l = i.next;
                  (i.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Ci = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ns;
            try {
              if ((xi(), (dl.current = io), gl)) {
                for (var r = hl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gl = !1;
              }
              if (
                ((pl = 0),
                (vl = ml = hl = null),
                (yl = !1),
                (bl = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Os = 1), (zs = t), (Ns = null);
                break;
              }
              e: {
                var l = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ps),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = go(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      yo(h, o, s, 0, t),
                      1 & h.mode && vo(l, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vo(l, c, t), mu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & s.mode) {
                  var g = go(o);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yo(g, o, s, 0, t),
                      hi(uo(u, s));
                    break e;
                  }
                }
                (l = u = uo(u, s)),
                  4 !== Os && (Os = 2),
                  null === Fs ? (Fs = [l]) : Fs.push(l),
                  (l = o);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Bi(l, ho(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Bi(l, mo(l, s, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              wu(n);
            } catch (w) {
              (t = w), Ns === n && null !== n && (Ns = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Es.current;
          return (Es.current = io), null === e ? io : e;
        }
        function mu() {
          (0 !== Os && 3 !== Os && 2 !== Os) || (Os = 4),
            null === js ||
              (0 === (268435455 & Bs) && 0 === (268435455 & Rs)) ||
              ou(js, Ps);
        }
        function vu(e, t) {
          var n = Ms;
          Ms |= 2;
          var r = hu();
          for ((js === e && Ps === t) || ((Us = null), fu(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((xi(), (Ms = n), (Es.current = r), null !== Ns))
            throw Error(i(261));
          return (js = null), (Ps = 0), Os;
        }
        function gu() {
          for (; null !== Ns; ) bu(Ns);
        }
        function yu() {
          for (; null !== Ns && !Je(); ) bu(Ns);
        }
        function bu(e) {
          var t = As(e.alternate, e, Ls);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ns = t),
            (Cs.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qo(n, t, Ls))) return void (Ns = n);
            } else {
              if (null !== (n = Yo(n, t)))
                return (n.flags &= 32767), void (Ns = n);
              if (null === e) return (Os = 6), void (Ns = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ns = t);
            Ns = t = e;
          } while (null !== t);
          0 === Os && (Os = 5);
        }
        function xu(e, t, n) {
          var r = bt,
            a = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Ys);
                if (0 !== (6 & Ms)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, l),
                  e === js && ((Ns = js = null), (Ps = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    ju(tt, function () {
                      return Su(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Ts.transition), (Ts.transition = null);
                  var o = bt;
                  bt = 1;
                  var s = Ms;
                  (Ms |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = o),
                                    p === l && ++d === r && (u = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zo = t;
                        null !== Zo;

                      )
                        if (
                          ((e = (t = Zo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zo = e);
                        else
                          for (; null !== Zo; ) {
                            t = Zo;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : vi(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (x) {
                              ku(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zo = e);
                              break;
                            }
                            Zo = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    vs(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ke(),
                    (Ms = s),
                    (bt = o),
                    (Ts.transition = l);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Ys = e), (Js = a)),
                  0 === (l = e.pendingLanes) && (Gs = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Hs) throw ((Hs = !1), (e = Ws), (Ws = null), e);
                0 !== (1 & Js) && 0 !== e.tag && Su(),
                  0 !== (1 & (l = e.pendingLanes))
                    ? e === Xs
                      ? Ks++
                      : ((Ks = 0), (Xs = e))
                    : (Ks = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Ts.transition = a), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Ys) {
            var e = wt(Js),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Js = 0), 0 !== (6 & Ms)))
                  throw Error(i(331));
                var a = Ms;
                for (Ms |= 4, Zo = e.current; null !== Zo; ) {
                  var l = Zo,
                    o = l.child;
                  if (0 !== (16 & Zo.flags)) {
                    var s = l.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zo = c; null !== Zo; ) {
                          var d = Zo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zo = f);
                          else
                            for (; null !== Zo; ) {
                              var p = (d = Zo).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Zo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zo = p);
                                break;
                              }
                              Zo = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Zo = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== o)
                    (o.return = l), (Zo = o);
                  else
                    e: for (; null !== Zo; ) {
                      if (0 !== (2048 & (l = Zo).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Zo = y);
                        break e;
                      }
                      Zo = l.return;
                    }
                }
                var b = e.current;
                for (Zo = b; null !== Zo; ) {
                  var w = (o = Zo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), (Zo = w);
                  else
                    e: for (o = b; null !== Zo; ) {
                      if (0 !== (2048 & (s = Zo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (S) {
                          ku(s, s.return, S);
                        }
                      if (s === o) {
                        Zo = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Zo = x);
                        break e;
                      }
                      Zo = s.return;
                    }
                }
                if (
                  ((Ms = a),
                  Va(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function Au(e, t, n) {
          (e = Oi(e, (t = ho(0, (t = uo(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function ku(e, t, n) {
          if (3 === e.tag) Au(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Au(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (t = Oi(t, (e = mo(t, (e = uo(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            js === e &&
              (Ps & n) === n &&
              (4 === Os ||
              (3 === Os && (130023424 & Ps) === Ps && 500 > Xe() - Qs)
                ? fu(e, 0)
                : (Ds |= n)),
            ru(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = ji(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Mu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function ju(e, t) {
          return qe(e, t);
        }
        function Nu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pu(e, t, n, r) {
          return new Nu(e, t, n, r);
        }
        function Lu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Iu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ou(e, t, n, r, a, l) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Lu(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case A:
                return zu(n.children, a, l, t);
              case k:
                (o = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Pu(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e
                );
              case j:
                return (
                  ((e = Pu(13, n, t, a)).elementType = j), (e.lanes = l), e
                );
              case N:
                return (
                  ((e = Pu(19, n, t, a)).elementType = N), (e.lanes = l), e
                );
              case I:
                return Bu(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      o = 10;
                      break e;
                    case T:
                      o = 9;
                      break e;
                    case M:
                      o = 11;
                      break e;
                    case P:
                      o = 14;
                      break e;
                    case L:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pu(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function zu(e, t, n, r) {
          return ((e = Pu(7, e, r, t)).lanes = n), e;
        }
        function Bu(e, t, n, r) {
          return (
            ((e = Pu(22, e, r, t)).elementType = I),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ru(e, t, n) {
          return ((e = Pu(6, e, null, t)).lanes = n), e;
        }
        function Du(e, t, n) {
          return (
            ((t = Pu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function _u(e, t, n, r, a, i, l, o, s) {
          return (
            (e = new Fu(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Pu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Pi(i),
            e
          );
        }
        function Qu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Vu(e) {
          if (!e) return Ta;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (La(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (La(n)) return za(e, n, t);
          }
          return t;
        }
        function Uu(e, t, n, r, a, i, l, o, s) {
          return (
            ((e = _u(n, r, !0, e, 0, i, 0, o, s)).context = Vu(null)),
            (n = e.current),
            ((i = Ii((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Oi(n, i, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            i = eu(),
            l = tu(a);
          return (
            (n = Vu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ii(i, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Oi(a, t, l)) && (nu(e, a, l, i), zi(e, a, l)),
            l
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Gu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Gu(e, t), (e = e.alternate) && Gu(e, t);
        }
        As = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ja.current) wo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        No(t), pi();
                        break;
                      case 5:
                        il(t);
                        break;
                      case 1:
                        La(t.type) && Ba(t);
                        break;
                      case 4:
                        rl(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(gi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(ol, 1 & ol.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ro(e, t, n)
                            : (Ca(ol, 1 & ol.current),
                              null !== (e = Ho(e, t, n)) ? e.sibling : null);
                        Ca(ol, 1 & ol.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(ol, ol.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Eo(e, t, n);
                    }
                    return Ho(e, t, n);
                  })(e, t, n)
                );
              wo = 0 !== (131072 & e.flags);
            }
          else (wo = !1), ai && 0 !== (1048576 & t.flags) && $a(t, Ga, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Uo(e, t), (e = t.pendingProps);
              var a = Pa(t, Ma.current);
              ki(t, n), (a = Al(null, t, r, e, a, n));
              var l = kl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    La(r) ? ((l = !0), Ba(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Pi(t),
                    (a.updater = Qi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wi(t, r, e, n),
                    (t = jo(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ai && l && ei(t),
                    xo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Uo(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === M) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vi(r, e)),
                  a)
                ) {
                  case 0:
                    t = To(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Mo(null, t, r, e, n);
                    break e;
                  case 11:
                    t = So(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ao(null, t, r, vi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                To(e, t, r, (a = t.elementType === r ? a : vi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Mo(e, t, r, (a = t.elementType === r ? a : vi(r, a)), n)
              );
            case 3:
              e: {
                if ((No(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Li(e, t),
                  Ri(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Po(e, t, r, n, (a = uo(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Po(e, t, r, n, (a = uo(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Xi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = Ho(e, t, n);
                    break e;
                  }
                  xo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                il(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Co(e, t),
                xo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Ro(e, t, n);
            case 4:
              return (
                rl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ki(t, null, r, n)) : xo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                So(e, t, r, (a = t.elementType === r ? a : vi(r, a)), n)
              );
            case 7:
              return xo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (o = a.value),
                  Ca(gi, r._currentValue),
                  (r._currentValue = o),
                  null !== l)
                )
                  if (or(l.value, o)) {
                    if (l.children === a.children && !ja.current) {
                      t = Ho(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        o = l.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === l.tag) {
                              (u = Ii(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              Ai(l.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === l.tag)
                        o = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (o = l.return)) throw Error(i(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          Ai(o, n, t),
                          (o = l.sibling);
                      } else o = l.child;
                      if (null !== o) o.return = l;
                      else
                        for (o = l; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (l = o.sibling)) {
                            (l.return = o.return), (o = l);
                            break;
                          }
                          o = o.return;
                        }
                      l = o;
                    }
                xo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                ki(t, n),
                (r = r((a = Ei(a)))),
                (t.flags |= 1),
                xo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = vi((r = t.type), t.pendingProps)),
                Ao(e, t, r, (a = vi(r.type, a)), n)
              );
            case 15:
              return ko(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vi(r, a)),
                Uo(e, t),
                (t.tag = 1),
                La(r) ? ((e = !0), Ba(t)) : (e = !1),
                ki(t, n),
                Ui(t, r, a),
                Wi(t, r, a, n),
                jo(null, t, r, !0, e, n)
              );
            case 19:
              return Vo(e, t, n);
            case 22:
              return Eo(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Yu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ju(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var l = i;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Wu(l);
                o.call(e);
              };
            }
            Hu(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Wu(l);
                    i.call(e);
                  };
                }
                var l = Uu(t, r, e, 0, null, !1, 0, "", $u);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Wu(s);
                  o.call(e);
                };
              }
              var s = _u(e, 0, !1, null, 0, !1, 0, "", $u);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Hu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Wu(l);
        }
        (Ku.prototype.render = Ju.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Hu(e, t, null, null);
          }),
          (Ku.prototype.unmount = Ju.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < It.length && 0 !== t && t < It[n].priority;
                n++
              );
              It.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Xe()),
                    0 === (6 & Ms) && ((Vs = Xe() + 500), Va()));
                }
                break;
              case 13:
                cu(function () {
                  var t = ji(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ji(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              qu(e, 134217728);
            }
          }),
          (At = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = ji(e, t);
              if (null !== n) nu(n, e, t, eu());
              qu(e, t);
            }
          }),
          (kt = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(i(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Me = uu),
          (je = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ce, Te, uu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(i(200));
            return Qu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Yu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = _u(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Ju(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              o = Yu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Uu(t, null, e, 1, null != n ? n : null, a, 0, l, o)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: o.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          A = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            i = {},
            l = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              S.call(t, a) && !k.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: o,
            props: i,
            _owner: A.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function M(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, a, i, l) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = "" === i ? "." + M(s, 0) : i),
              x(l)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  j(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (C(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ""
                          : ("" + l.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + M((o = e[u]), u);
              s += j(o, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += j((o = o.value), t, a, (c = i + M(o, u++)), l);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          I = { transition: null },
          O = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: A,
          };
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              i = e.key,
              l = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (o = A.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !k.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = I.transition;
            I.transition = {};
            try {
              e();
            } finally {
              I.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > i(s, n))
                u < a && 0 > i(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(u)) (m = !0), I(S);
            else {
              var t = r(c);
              null !== t && O(x, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), v && ((v = !1), y(C), (C = -1)), (h = !0);
          var i = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !j()));

            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var o = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && O(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var A,
          k = !1,
          E = null,
          C = -1,
          T = 5,
          M = -1;
        function j() {
          return !(t.unstable_now() - M < T);
        }
        function N() {
          if (null !== E) {
            var e = t.unstable_now();
            M = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? A() : ((k = !1), (E = null));
            }
          } else k = !1;
        }
        if ("function" === typeof b)
          A = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            L = P.port2;
          (P.port1.onmessage = N),
            (A = function () {
              L.postMessage(null);
            });
        } else
          A = function () {
            g(N, 0);
          };
        function I(e) {
          (E = e), k || ((k = !0), A());
        }
        function O(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), I(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? l + i : l)
                : (i = l),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (o = i + o),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (y(C), (C = -1)) : (v = !0), O(x, i - l)))
                : ((e.sortIndex = o), n(u, e), m || h || ((m = !0), I(S))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.p = "/"),
    (function () {
      var e = n(164),
        t = n(791),
        r = n.p + "static/media/cv.1676dcdc83730930d888.pdf",
        a = n(184),
        i = function () {
          return (0, a.jsxs)("div", {
            className: "cta",
            children: [
              (0, a.jsx)("a", {
                href: r,
                download: !0,
                className: "btn",
                children: " Download CV",
              }),
              (0, a.jsx)("a", {
                href: "#contact",
                className: "btn btn-primary",
                children: " Let's Talk",
              }),
            ],
          });
        },
        l = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = t.createContext && t.createContext(l),
        s = function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            s.apply(this, arguments)
          );
        },
        u = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function c(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, s({ key: n }, e.attr), c(e.child));
          })
        );
      }
      function d(e) {
        return function (n) {
          return t.createElement(f, s({ attr: s({}, e.attr) }, n), c(e.child));
        };
      }
      function f(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            i = e.size,
            l = e.title,
            o = u(e, ["attr", "size", "title"]),
            c = i || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                o,
                {
                  className: r,
                  style: s(s({ color: e.color || n.color }, n.style), e.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && t.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== o
          ? t.createElement(o.Consumer, null, function (e) {
              return n(e);
            })
          : n(l);
      }
      function p(e) {
        return d({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
              },
            },
          ],
        })(e);
      }
      function h(e) {
        return d({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
              },
            },
          ],
        })(e);
      }
      function m(e) {
        return d({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
              },
            },
          ],
        })(e);
      }
      function v(e) {
        return d({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z",
              },
            },
          ],
        })(e);
      }
      var g = function () {
          return (0, a.jsxs)("div", {
            className: "header__socials",
            children: [
              (0, a.jsx)("a", {
                href: "https://linkedin.com",
                target: "blank",
                children: (0, a.jsx)(m, {}),
              }),
              (0, a.jsx)("a", {
                href: "https://github.com",
                target: "blank",
                children: (0, a.jsx)(h, {}),
              }),
              (0, a.jsx)("a", {
                href: "https://facebook.com",
                target: "blank",
                children: (0, a.jsx)(p, {}),
              }),
            ],
          });
        },
        y = function () {
          return (0, a.jsx)("header", {
            children: (0, a.jsxs)("div", {
              className: "container header__container",
              children: [
                (0, a.jsx)("h5", { children: " Hello I'm" }),
                (0, a.jsx)("h1", { children: "Oleksii Shved" }),
                (0, a.jsx)("h5", {
                  className: "text-light",
                  children: "Front End Developer ",
                }),
                (0, a.jsx)(i, {}),
                (0, a.jsx)(g, {}),
                (0, a.jsx)("div", { className: "me" }),
                (0, a.jsx)("a", {
                  href: "#contact",
                  className: "scroll__down",
                  children: " Scroll Down",
                }),
              ],
            }),
          });
        };
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function w(e, t) {
        if (e) {
          if ("string" === typeof e) return b(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? b(e, t)
              : void 0
          );
        }
      }
      function x(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                l = !0,
                o = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  l = !0
                );
              } catch (s) {
                (o = !0), (a = s);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          w(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function S(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z",
              },
            },
          ],
        })(e);
      }
      function A(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",
              },
            },
          ],
        })(e);
      }
      function k(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z",
              },
            },
            { tag: "path", attr: { d: "M8 6h9v2H8z" } },
          ],
        })(e);
      }
      function E(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z",
              },
            },
          ],
        })(e);
      }
      function C(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z",
              },
            },
            { tag: "path", attr: { d: "M7 9h10v2H7zm0 4h7v2H7z" } },
          ],
        })(e);
      }
      function T(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    d: "M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      function M(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    fillRule: "nonzero",
                    d: "M7.764 19.225c.59-.26 1.25-.309 1.868-.139.77.21 1.565.316 2.368.314 4.585 0 8-3.287 8-7.7S16.585 4 12 4s-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006l.356-.157zM12 2c5.634 0 10 4.127 10 9.7 0 5.573-4.366 9.7-10 9.7a10.894 10.894 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.984.876a.8.8 0 0 1-1.123-.707l-.055-1.78a.797.797 0 0 0-.268-.57C3.195 17.135 2 14.617 2 11.7 2 6.127 6.367 2 12 2zM5.995 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.396c.421-.319.971.185.689.633l-2.937 4.66a1.5 1.5 0 0 1-2.17.4l-2.336-1.75a.6.6 0 0 0-.723 0l-3.155 2.395c-.421.319-.971-.185-.689-.633z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      var j = function () {
          var e = x((0, t.useState)("#"), 2),
            n = e[0],
            r = e[1];
          return (0, a.jsxs)("nav", {
            children: [
              (0, a.jsx)("a", {
                href: "#",
                onClick: function () {
                  return r("#");
                },
                className: "#" === n ? "active" : "",
                children: (0, a.jsx)(S, {}),
              }),
              (0, a.jsx)("a", {
                href: "#about",
                onClick: function () {
                  return r("#about");
                },
                className: "#about" === n ? "active" : "",
                children: (0, a.jsx)(A, {}),
              }),
              (0, a.jsx)("a", {
                href: "#experience",
                onClick: function () {
                  return r("#experience");
                },
                className: "#experience" === n ? "active" : "",
                children: (0, a.jsx)(k, {}),
              }),
              (0, a.jsx)("a", {
                href: "#services",
                onClick: function () {
                  return r("#services");
                },
                className: "#services" === n ? "active" : "",
                children: (0, a.jsx)(T, {}),
              }),
              (0, a.jsx)("a", {
                href: "#contact",
                onClick: function () {
                  return r("#contact");
                },
                className: "#contact" === n ? "active" : "",
                children: (0, a.jsx)(C, {}),
              }),
            ],
          });
        },
        N = n.p + "static/media/DSC_8851.ac1e5c17d1b0589ecc07.png";
      function P(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 320 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
              },
            },
          ],
        })(e);
      }
      function L(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 384 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z",
              },
            },
          ],
        })(e);
      }
      function I(e) {
        return d({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
            },
            { tag: "circle", attr: { cx: "9", cy: "7", r: "4" } },
            { tag: "path", attr: { d: "M23 21v-2a4 4 0 0 0-3-3.87" } },
            { tag: "path", attr: { d: "M16 3.13a4 4 0 0 1 0 7.75" } },
          ],
        })(e);
      }
      function O(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 16 16", fill: "currentColor" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.70996 3H14.5L15.01 3.5V7H14V5.98999H7.68994L6.82996 6.84998L6.47998 7H1.98999V7.48999V11.49V13H7V14H1.51001L1.01001 13.5V6.5V2.5L1.51001 2H6.51001L6.85999 2.15002L7.70996 3ZM7.48999 5H13.99L14 4.01001H7.5L7.14001 3.85999L6.29004 3.01001H2V6.01001H6.28003L7.14001 5.15002L7.48999 5Z",
              },
            },
            { tag: "rect", attr: { x: "8", y: "8", width: "1", height: "6" } },
            { tag: "rect", attr: { x: "10", y: "8", width: "1", height: "6" } },
            {
              tag: "rect",
              attr: {
                x: "12.0041",
                y: "8.35193",
                width: "1",
                height: "6",
                transform: "rotate(-20 12.0041 8.35193)",
              },
            },
          ],
        })(e);
      }
      var z = function () {
          return (0, a.jsxs)("section", {
            id: "about",
            children: [
              (0, a.jsx)("h5", { children: " Get To Know" }),
              (0, a.jsx)("h2", { children: "About Me" }),
              (0, a.jsxs)("div", {
                className: "container about__container",
                children: [
                  (0, a.jsx)("div", {
                    className: "about__me",
                    children: (0, a.jsx)("div", {
                      className: "about__me-image",
                      children: (0, a.jsx)("img", {
                        src: "./static/media/meme.png",
                        alt: "About Image",
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "about__content",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "about__cards",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "about__card",
                            children: [
                              (0, a.jsx)(L, { className: "about__icon" }),
                              (0, a.jsx)("h5", { children: "Experiense" }),
                              (0, a.jsx)("small", {
                                children: "1+ Year Working",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "about__card",
                            children: [
                              (0, a.jsx)(I, { className: "about__icon" }),
                              (0, a.jsx)("h5", { children: "Clients" }),
                              (0, a.jsx)("small", {
                                children: "15+ WorldWide",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "about__card",
                            children: [
                              (0, a.jsx)(O, { className: "about__icon" }),
                              (0, a.jsx)("h5", { children: "Projects" }),
                              (0, a.jsx)("small", {
                                children: "10+ Completed Worker",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        children:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae cumque, laborum eveniet sapiente mollitia nemo eligendi. Non iure fugiat, rerum eius doloribus hic a enim et expedita facilis ratione?",
                      }),
                      (0, a.jsx)("a", {
                        href: "#contact",
                        className: "btn btn-primary",
                        children: "Let's Talk",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        B = function () {
          return (0, a.jsxs)("section", {
            id: "experience",
            children: [
              (0, a.jsx)("h5", { children: "What Skills I Have" }),
              (0, a.jsx)("h2", { children: "My Experience" }),
              (0, a.jsxs)("div", {
                className: "container experience__container",
                children: [
                  (0, a.jsxs)("div", {
                    className: "experience__frontend",
                    children: [
                      (0, a.jsx)("h3", { children: "Frontend Development" }),
                      (0, a.jsxs)("div", {
                        className: "experience__content",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "HTML" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "CSS" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Intermediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "JavaScript" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Bootstrap" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "React" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Linux" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "experience__skills",
                    children: [
                      (0, a.jsx)("h3", { children: "Additional skills" }),
                      (0, a.jsxs)("div", {
                        className: "experience__content",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Node JS" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "MongoDB" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Intermediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "MySQL" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Intermediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Soft Skills" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Jira" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "experience__details",
                            children: [
                              (0, a.jsx)(v, {
                                className: "experience__details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "SCSS" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        R = function () {
          return (0, a.jsxs)("section", {
            id: "services",
            children: [
              (0, a.jsx)("h5", { children: "What I Offer" }),
              (0, a.jsx)("h2", { children: "Services" }),
              (0, a.jsxs)("div", {
                className: "container services__container",
                children: [
                  (0, a.jsxs)("article", {
                    className: "service",
                    children: [
                      (0, a.jsx)("div", {
                        className: "service__head",
                        children: (0, a.jsx)("h3", {
                          children: "UI/UX Design",
                        }),
                      }),
                      (0, a.jsxs)("ul", {
                        className: "service__list",
                        children: [
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("article", {
                    className: "service",
                    children: [
                      (0, a.jsx)("div", {
                        className: "service__head",
                        children: (0, a.jsx)("h3", {
                          children: "WEB DEVELOPMENT",
                        }),
                      }),
                      (0, a.jsxs)("ul", {
                        className: "service__list",
                        children: [
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("article", {
                    className: "service",
                    children: [
                      (0, a.jsx)("div", {
                        className: "service__head",
                        children: (0, a.jsx)("h3", {
                          children: "Content Creation",
                        }),
                      }),
                      (0, a.jsxs)("ul", {
                        className: "service__list",
                        children: [
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)(E, {
                                className: "service__list-icon",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        D = [
          {
            id: 1,
            image: "./static/media/portfolio1.f5e72352e5aa840702b8.jpg",
            title: "Hello World",
            github: "https://github.com",
            demo: "https://facebook.com",
          },
          {
            id: 2,
            image: "./static/media/portfolio2.ae187bc4e43ae6dbc263.jpg",
            title: "Hello World",
            github: "https://github.com",
            demo: "https://facebook.com",
          },
          {
            id: 3,
            image: "./static/media/portfolio3.cbab42559fe73e73906f.jpg",
            title: "Hello World",
            github: "https://github.com",
            demo: "https://facebook.com",
          },
          {
            id: 4,
            image: "./static/media/portfolio4.6bf60cbb8fe5f7d7af5d.jpg",
            title: "Hello World",
            github: "https://github.com",
            demo: "https://facebook.com",
          },
          {
            id: 5,
            image: "./static/media/portfolio5.a82ae9a163c1ac5e3a07.png",
            title: "Hello World",
            github: "https://github.com",
            demo: "https://facebook.com",
          },
          {
            id: 6,
            image: "./static/media/portfolio6.72d1107e313049cf15a7.jpg",
            title: "Hello World",
            github: "https://github.com",
            demo: "https://facebook.com",
          },
        ],
        F = function () {
          return (0, a.jsxs)("section", {
            id: "portfolio",
            children: [
              (0, a.jsx)("h5", { children: "My Recent Work" }),
              (0, a.jsx)("h2", { children: "Portfolio" }),
              (0, a.jsx)("div", {
                className: "container portfolio__container",
                children: D.map(function (e) {
                  var t = e.id,
                    n = e.image,
                    r = e.title,
                    i = e.github,
                    l = e.demo;
                  return (0,
                  a.jsxs)("article", { className: "portfolio__item", children: [(0, a.jsx)("div", { className: "portfolio__item-image", children: (0, a.jsx)("img", { src: n, alt: r }) }), (0, a.jsx)("h3", { children: "This is a portfolio item title" }), (0, a.jsxs)("div", { className: "portfolio__item-cta", children: [(0, a.jsx)("a", { href: i, className: "btn", target: "_blank", children: "Github" }), (0, a.jsx)("a", { href: l, className: "btn btn-primary", target: "_blank", children: "Live Demo" })] })] }, t);
                }),
              }),
            ],
          });
        };
      function _(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return b(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          w(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Q(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function U(e, t, n) {
        return (
          t && V(e.prototype, t),
          n && V(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function H(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function W() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : H(t[n]) &&
              H(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              W(e[n], t[n]);
        });
      }
      var G = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function q() {
        var e = "undefined" !== typeof document ? document : {};
        return W(e, G), e;
      }
      var Y = {
        document: G,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" === typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function J() {
        var e = "undefined" !== typeof window ? window : {};
        return W(e, Y), e;
      }
      function K(e) {
        return (
          (K =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          K(e)
        );
      }
      function X(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Z(e, t) {
        if (t && ("object" === K(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return X(e);
      }
      function $(e, t) {
        return (
          ($ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          $(e, t)
        );
      }
      function ee(e) {
        return (
          (ee = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ee(e)
        );
      }
      function te() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function ne(e, t, n) {
        return (
          (ne = te()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && $(a, n.prototype), a;
              }),
          ne.apply(null, arguments)
        );
      }
      function re(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (re = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return ne(e, arguments, ee(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              $(r, e)
            );
          }),
          re(e)
        );
      }
      var ae = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && $(e, t);
        })(n, e);
        var t = (function (e) {
          var t = te();
          return function () {
            var n,
              r = ee(e);
            if (t) {
              var a = ee(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Z(this, n);
          };
        })(n);
        function n(e) {
          var r;
          return (
            Q(this, n),
            "number" === typeof e
              ? (r = t.call(this, e))
              : (function (e) {
                  var t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: function () {
                      return t;
                    },
                    set: function (e) {
                      t.__proto__ = e;
                    },
                  });
                })(X((r = t.call.apply(t, [this].concat(_(e || [])))))),
            Z(r)
          );
        }
        return U(n);
      })(re(Array));
      function ie() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, _(ie(e))) : t.push(e);
          }),
          t
        );
      }
      function le(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function oe(e, t) {
        var n = J(),
          r = q(),
          a = [];
        if (!t && e instanceof ae) return e;
        if (!e) return new ae(a);
        if ("string" === typeof e) {
          var i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            var l = "div";
            0 === i.indexOf("<li") && (l = "ul"),
              0 === i.indexOf("<tr") && (l = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (l = "tr"),
              0 === i.indexOf("<tbody") && (l = "table"),
              0 === i.indexOf("<option") && (l = "select");
            var o = r.createElement(l);
            o.innerHTML = i;
            for (var s = 0; s < o.childNodes.length; s += 1)
              a.push(o.childNodes[s]);
          } else
            a = (function (e, t) {
              if ("string" !== typeof e) return [e];
              for (
                var n = [], r = t.querySelectorAll(e), a = 0;
                a < r.length;
                a += 1
              )
                n.push(r[a]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) a.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof ae) return e;
          a = e;
        }
        return new ae(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(a)
        );
      }
      oe.fn = ae.prototype;
      var se = "resize scroll".split(" ");
      function ue(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          if ("undefined" === typeof n[0]) {
            for (var a = 0; a < this.length; a += 1)
              se.indexOf(e) < 0 &&
                (e in this[a] ? this[a][e]() : oe(this[a]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      ue("click"),
        ue("blur"),
        ue("focus"),
        ue("focusin"),
        ue("focusout"),
        ue("keyup"),
        ue("keydown"),
        ue("keypress"),
        ue("submit"),
        ue("change"),
        ue("mousedown"),
        ue("mousemove"),
        ue("mouseup"),
        ue("mouseenter"),
        ue("mouseleave"),
        ue("mouseout"),
        ue("mouseover"),
        ue("touchstart"),
        ue("touchend"),
        ue("touchmove"),
        ue("resize"),
        ue("scroll");
      var ce = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = ie(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, _(r));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = ie(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, _(r));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = ie(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            le(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = ie(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var r in e)
                (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), oe(t).is(a)))
                i.apply(t, n);
              else
                for (var r = oe(t).parents(), l = 0; l < r.length; l += 1)
                  oe(r[l]).is(a) && i.apply(r[l], n);
            }
          }
          function s(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (l = t[2]), (a = void 0)),
            l || (l = !1);
          for (var u, c = r.split(" "), d = 0; d < this.length; d += 1) {
            var f = this[d];
            if (a)
              for (u = 0; u < c.length; u += 1) {
                var p = c[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                  f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []),
                  f.dom7LiveListeners[p].push({
                    listener: i,
                    proxyListener: o,
                  }),
                  f.addEventListener(p, o, l);
              }
            else
              for (u = 0; u < c.length; u += 1) {
                var h = c[u];
                f.dom7Listeners || (f.dom7Listeners = {}),
                  f.dom7Listeners[h] || (f.dom7Listeners[h] = []),
                  f.dom7Listeners[h].push({ listener: i, proxyListener: s }),
                  f.addEventListener(h, s, l);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3];
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (l = t[2]), (a = void 0)),
            l || (l = !1);
          for (var o = r.split(" "), s = 0; s < o.length; s += 1)
            for (var u = o[s], c = 0; c < this.length; c += 1) {
              var d = this[c],
                f = void 0;
              if (
                (!a && d.dom7Listeners
                  ? (f = d.dom7Listeners[u])
                  : a && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]),
                f && f.length)
              )
                for (var p = f.length - 1; p >= 0; p -= 1) {
                  var h = f[p];
                  (i && h.listener === i) ||
                  (i &&
                    h.listener &&
                    h.listener.dom7proxy &&
                    h.listener.dom7proxy === i)
                    ? (d.removeEventListener(u, h.proxyListener, l),
                      f.splice(p, 1))
                    : i ||
                      (d.removeEventListener(u, h.proxyListener, l),
                      f.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = J(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = n[0].split(" "), i = n[1], l = 0; l < a.length; l += 1)
            for (var o = a[l], s = 0; s < this.length; s += 1) {
              var u = this[s];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(o, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (u.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  u.dispatchEvent(c),
                  (u.dom7EventData = []),
                  delete u.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = J();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = J(),
              t = q(),
              n = this[0],
              r = n.getBoundingClientRect(),
              a = t.body,
              i = n.clientTop || a.clientTop || 0,
              l = n.clientLeft || a.clientLeft || 0,
              o = n === e ? e.scrollY : n.scrollTop,
              s = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + o - i, left: r.left + s - l };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            r = J();
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var a in e) this[n].style[a] = e[a];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            r = J(),
            a = q(),
            i = this[0];
          if (!i || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (t = oe(e), n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          if (e === a) return i === a;
          if (e === r) return i === r;
          if (e.nodeType || e instanceof ae) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t = this.length;
          if (e > t - 1) return oe([]);
          if (e < 0) {
            var n = t + e;
            return oe(n < 0 ? [] : [this[n]]);
          }
          return oe([this[e]]);
        },
        append: function () {
          for (var e, t = q(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" === typeof e) {
                var a = t.createElement("div");
                for (a.innerHTML = e; a.firstChild; )
                  this[r].appendChild(a.firstChild);
              } else if (e instanceof ae)
                for (var i = 0; i < e.length; i += 1) this[r].appendChild(e[i]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            r = q();
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var a = r.createElement("div");
              for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof ae)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                oe(this[0].nextElementSibling).is(e)
                ? oe([this[0].nextElementSibling])
                : oe([])
              : this[0].nextElementSibling
              ? oe([this[0].nextElementSibling])
              : oe([])
            : oe([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return oe([]);
          for (; n.nextElementSibling; ) {
            var r = n.nextElementSibling;
            e ? oe(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return oe(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && oe(t.previousElementSibling).is(e)
                ? oe([t.previousElementSibling])
                : oe([])
              : t.previousElementSibling
              ? oe([t.previousElementSibling])
              : oe([]);
          }
          return oe([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return oe([]);
          for (; n.previousElementSibling; ) {
            var r = n.previousElementSibling;
            e ? oe(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return oe(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? oe(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return oe(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r; )
              e ? oe(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return oe(t);
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? oe([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(e), a = 0;
              a < r.length;
              a += 1
            )
              t.push(r[a]);
          return oe(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, a = 0; a < r.length; a += 1)
              (e && !oe(r[a]).is(e)) || t.push(r[a]);
          return oe(t);
        },
        filter: function (e) {
          return oe(le(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(ce).forEach(function (e) {
        Object.defineProperty(oe.fn, e, { value: ce[e], writable: !0 });
      });
      var de,
        fe,
        pe,
        he = oe;
      function me(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ve(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function ge() {
        return Date.now();
      }
      function ye(e, t) {
        void 0 === t && (t = "x");
        var n,
          r,
          a,
          i = J(),
          l = (function (e) {
            var t,
              n = J();
            return (
              n.getComputedStyle && (t = n.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          i.WebKitCSSMatrix
            ? ((r = l.transform || l.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (a = new i.WebKitCSSMatrix("none" === r ? "" : r)))
            : (n = (a =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m41
              : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
          "y" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m42
              : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
          r || 0
        );
      }
      function be(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function we(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function xe() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            n = 1;
          n < arguments.length;
          n += 1
        ) {
          var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !we(r))
            for (
              var a = Object.keys(Object(r)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                i = 0,
                l = a.length;
              i < l;
              i += 1
            ) {
              var o = a[i],
                s = Object.getOwnPropertyDescriptor(r, o);
              void 0 !== s &&
                s.enumerable &&
                (be(e[o]) && be(r[o])
                  ? r[o].__swiper__
                    ? (e[o] = r[o])
                    : xe(e[o], r[o])
                  : !be(e[o]) && be(r[o])
                  ? ((e[o] = {}),
                    r[o].__swiper__ ? (e[o] = r[o]) : xe(e[o], r[o]))
                  : (e[o] = r[o]));
            }
        }
        return e;
      }
      function Se(e, t, n) {
        e.style.setProperty(t, n);
      }
      function Ae(e) {
        var t,
          n = e.swiper,
          r = e.targetPosition,
          a = e.side,
          i = J(),
          l = -n.translate,
          o = null,
          s = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(n.cssModeFrameID);
        var u = r > l ? "next" : "prev",
          c = function (e, t) {
            return ("next" === u && e >= t) || ("prev" === u && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === o && (o = t);
          var u = Math.max(Math.min((t - o) / s, 1), 0),
            d = 0.5 - Math.cos(u * Math.PI) / 2,
            f = l + d * (r - l);
          if ((c(f, r) && (f = r), n.wrapperEl.scrollTo(me({}, a, f)), c(f, r)))
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo(me({}, a, f));
              }),
              void i.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = i.requestAnimationFrame(e);
        })();
      }
      function ke() {
        return (
          de ||
            (de = (function () {
              var e = J(),
                t = q();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (r) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          de
        );
      }
      function Ee(e) {
        return (
          void 0 === e && (e = {}),
          fe ||
            (fe = (function (e) {
              var t = (void 0 === e ? {} : e).userAgent,
                n = ke(),
                r = J(),
                a = r.navigator.platform,
                i = t || r.navigator.userAgent,
                l = { ios: !1, android: !1 },
                o = r.screen.width,
                s = r.screen.height,
                u = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = i.match(/(iPad).*OS\s([\d_]+)/),
                d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === a,
                h = "MacIntel" === a;
              return (
                !c &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(o, "x").concat(s)) >= 0 &&
                  ((c = i.match(/(Version)\/([\d.]+)/)) ||
                    (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                u && !p && ((l.os = "android"), (l.android = !0)),
                (c || f || d) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          fe
        );
      }
      function Ce() {
        return (
          pe ||
            (pe = (function () {
              var e = J();
              return {
                isSafari: (function () {
                  var t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          pe
        );
      }
      var Te = {
        on: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          var a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++)
              i[l] = arguments[l];
            t.apply(r, i);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny: function (e, t) {
          var n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          var r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (r, a) {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if (!r.eventsListeners) return r;
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          "string" === typeof i[0] || Array.isArray(i[0])
            ? ((e = i[0]), (t = i.slice(1, i.length)), (n = r))
            : ((e = i[0].events), (t = i[0].data), (n = i[0].context || r)),
            t.unshift(n);
          var o = Array.isArray(e) ? e : e.split(" ");
          return (
            o.forEach(function (e) {
              r.eventsAnyListeners &&
                r.eventsAnyListeners.length &&
                r.eventsAnyListeners.forEach(function (r) {
                  r.apply(n, [e].concat(_(t)));
                }),
                r.eventsListeners &&
                  r.eventsListeners[e] &&
                  r.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            r
          );
        },
      };
      var Me = {
        updateSize: function () {
          var e,
            t,
            n = this,
            r = n.$el;
          (e =
            "undefined" !== typeof n.params.width && null !== n.params.width
              ? n.params.width
              : r[0].clientWidth),
            (t =
              "undefined" !== typeof n.params.height && null !== n.params.height
                ? n.params.height
                : r[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var r = e.params,
            a = e.$wrapperEl,
            i = e.size,
            l = e.rtlTranslate,
            o = e.wrongRTL,
            s = e.virtual && r.virtual.enabled,
            u = s ? e.virtual.slides.length : e.slides.length,
            c = a.children(".".concat(e.params.slideClass)),
            d = s ? e.virtual.slides.length : c.length,
            f = [],
            p = [],
            h = [],
            m = r.slidesOffsetBefore;
          "function" === typeof m && (m = r.slidesOffsetBefore.call(e));
          var v = r.slidesOffsetAfter;
          "function" === typeof v && (v = r.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            y = e.slidesGrid.length,
            b = r.spaceBetween,
            w = -m,
            x = 0,
            S = 0;
          if ("undefined" !== typeof i) {
            "string" === typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * i),
              (e.virtualSize = -b),
              l
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              r.centeredSlides &&
                r.cssMode &&
                (Se(e.wrapperEl, "--swiper-centered-offset-before", ""),
                Se(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var A,
              k = r.grid && r.grid.rows > 1 && e.grid;
            k && e.grid.initSlides(d);
            for (
              var E =
                  "auto" === r.slidesPerView &&
                  r.breakpoints &&
                  Object.keys(r.breakpoints).filter(function (e) {
                    return (
                      "undefined" !== typeof r.breakpoints[e].slidesPerView
                    );
                  }).length > 0,
                C = 0;
              C < d;
              C += 1
            ) {
              A = 0;
              var T = c.eq(C);
              if (
                (k && e.grid.updateSlide(C, T, d, t),
                "none" !== T.css("display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  E && (c[C].style[t("width")] = "");
                  var M = getComputedStyle(T[0]),
                    j = T[0].style.transform,
                    N = T[0].style.webkitTransform;
                  if (
                    (j && (T[0].style.transform = "none"),
                    N && (T[0].style.webkitTransform = "none"),
                    r.roundLengths)
                  )
                    A = e.isHorizontal() ? T.outerWidth(!0) : T.outerHeight(!0);
                  else {
                    var P = n(M, "width"),
                      L = n(M, "padding-left"),
                      I = n(M, "padding-right"),
                      O = n(M, "margin-left"),
                      z = n(M, "margin-right"),
                      B = M.getPropertyValue("box-sizing");
                    if (B && "border-box" === B) A = P + O + z;
                    else {
                      var R = T[0],
                        D = R.clientWidth;
                      A = P + L + I + O + z + (R.offsetWidth - D);
                    }
                  }
                  j && (T[0].style.transform = j),
                    N && (T[0].style.webkitTransform = N),
                    r.roundLengths && (A = Math.floor(A));
                } else
                  (A = (i - (r.slidesPerView - 1) * b) / r.slidesPerView),
                    r.roundLengths && (A = Math.floor(A)),
                    c[C] && (c[C].style[t("width")] = "".concat(A, "px"));
                c[C] && (c[C].swiperSlideSize = A),
                  h.push(A),
                  r.centeredSlides
                    ? ((w = w + A / 2 + x / 2 + b),
                      0 === x && 0 !== C && (w = w - i / 2 - b),
                      0 === C && (w = w - i / 2 - b),
                      Math.abs(w) < 0.001 && (w = 0),
                      r.roundLengths && (w = Math.floor(w)),
                      S % r.slidesPerGroup === 0 && f.push(w),
                      p.push(w))
                    : (r.roundLengths && (w = Math.floor(w)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                        e.params.slidesPerGroup ===
                        0 && f.push(w),
                      p.push(w),
                      (w = w + A + b)),
                  (e.virtualSize += A + b),
                  (x = A),
                  (S += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + v),
              l &&
                o &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                a.css({
                  width: "".concat(e.virtualSize + r.spaceBetween, "px"),
                }),
              r.setWrapperSize &&
                a.css(
                  me(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + r.spaceBetween, "px")
                  )
                ),
              k && e.grid.updateWrapperSize(A, f, t),
              !r.centeredSlides)
            ) {
              for (var F = [], _ = 0; _ < f.length; _ += 1) {
                var Q = f[_];
                r.roundLengths && (Q = Math.floor(Q)),
                  f[_] <= e.virtualSize - i && F.push(Q);
              }
              (f = F),
                Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) >
                  1 && f.push(e.virtualSize - i);
            }
            if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
              var V = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
              c.filter(function (e, t) {
                return !r.cssMode || t !== c.length - 1;
              }).css(me({}, V, "".concat(b, "px")));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var U = 0;
              h.forEach(function (e) {
                U += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var H = (U -= r.spaceBetween) - i;
              f = f.map(function (e) {
                return e < 0 ? -m : e > H ? H + v : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var W = 0;
              if (
                (h.forEach(function (e) {
                  W += e + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                (W -= r.spaceBetween) < i)
              ) {
                var G = (i - W) / 2;
                f.forEach(function (e, t) {
                  f[t] = e - G;
                }),
                  p.forEach(function (e, t) {
                    p[t] = e + G;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: f,
                slidesGrid: p,
                slidesSizesGrid: h,
              }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              Se(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-f[0], "px")
              ),
                Se(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
                );
              var q = -e.snapGrid[0],
                Y = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + q;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + Y;
                }));
            }
            if (
              (d !== u && e.emit("slidesLengthChange"),
              f.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              p.length !== y && e.emit("slidesGridLengthChange"),
              r.watchSlidesProgress && e.updateSlidesOffset(),
              !s && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
            ) {
              var J = "".concat(r.containerModifierClass, "backface-hidden"),
                K = e.$el.hasClass(J);
              d <= r.maxBackfaceHiddenSlides
                ? K || e.$el.addClass(J)
                : K && e.$el.removeClass(J);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            r = [],
            a = n.virtual && n.params.virtual.enabled,
            i = 0;
          "number" === typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var l = function (e) {
            return a
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              (n.visibleSlides || he([])).each(function (e) {
                r.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var o = n.activeIndex + t;
                if (o > n.slides.length && !a) break;
                r.push(l(o));
              }
          else r.push(l(n.activeIndex));
          for (t = 0; t < r.length; t += 1)
            if ("undefined" !== typeof r[t]) {
              var s = r[t].offsetHeight;
              i = s > i ? s : i;
            }
          (i || 0 === i) && n.$wrapperEl.css("height", "".concat(i, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            r = t.slides,
            a = t.rtlTranslate,
            i = t.snapGrid;
          if (0 !== r.length) {
            "undefined" === typeof r[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var l = -e;
            a && (l = e),
              r.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var o = 0; o < r.length; o += 1) {
              var s = r[o],
                u = s.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
              var c =
                  (l + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                d =
                  (l - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                f = -(l - u),
                p = f + t.slidesSizesGrid[o];
              ((f >= 0 && f < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (f <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(s),
                t.visibleSlidesIndexes.push(o),
                r.eq(o).addClass(n.slideVisibleClass)),
                (s.progress = a ? -c : c),
                (s.originalProgress = a ? -d : d);
            }
            t.visibleSlides = he(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var r = t.params,
            a = t.maxTranslate() - t.minTranslate(),
            i = t.progress,
            l = t.isBeginning,
            o = t.isEnd,
            s = l,
            u = o;
          0 === a
            ? ((i = 0), (l = !0), (o = !0))
            : ((l = (i = (e - t.minTranslate()) / a) <= 0), (o = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: l, isEnd: o }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            l && !s && t.emit("reachBeginning toEdge"),
            o && !u && t.emit("reachEnd toEdge"),
            ((s && !l) || (u && !o)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            r = t.params,
            a = t.$wrapperEl,
            i = t.activeIndex,
            l = t.realIndex,
            o = t.virtual && r.virtual.enabled;
          n.removeClass(
            ""
              .concat(r.slideActiveClass, " ")
              .concat(r.slideNextClass, " ")
              .concat(r.slidePrevClass, " ")
              .concat(r.slideDuplicateActiveClass, " ")
              .concat(r.slideDuplicateNextClass, " ")
              .concat(r.slideDuplicatePrevClass)
          ),
            (e = o
              ? t.$wrapperEl.find(
                  "."
                    .concat(r.slideClass, '[data-swiper-slide-index="')
                    .concat(i, '"]')
                )
              : n.eq(i)).addClass(r.slideActiveClass),
            r.loop &&
              (e.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(l, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(l, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass));
          var s = e
            .nextAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop && 0 === s.length && (s = n.eq(0)).addClass(r.slideNextClass);
          var u = e
            .prevAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop && 0 === u.length && (u = n.eq(-1)).addClass(r.slidePrevClass),
            r.loop &&
              (s.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass),
              u.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            r = n.rtlTranslate ? n.translate : -n.translate,
            a = n.slidesGrid,
            i = n.snapGrid,
            l = n.params,
            o = n.activeIndex,
            s = n.realIndex,
            u = n.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var d = 0; d < a.length; d += 1)
              "undefined" !== typeof a[d + 1]
                ? r >= a[d] && r < a[d + 1] - (a[d + 1] - a[d]) / 2
                  ? (c = d)
                  : r >= a[d] && r < a[d + 1] && (c = d + 1)
                : r >= a[d] && (c = d);
            l.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (i.indexOf(r) >= 0) t = i.indexOf(r);
          else {
            var f = Math.min(l.slidesPerGroupSkip, c);
            t = f + Math.floor((c - f) / l.slidesPerGroup);
          }
          if ((t >= i.length && (t = i.length - 1), c !== o)) {
            var p = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: p,
              previousIndex: o,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              s !== p && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== u && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            r = n.params,
            a = he(e).closest(".".concat(r.slideClass))[0],
            i = !1;
          if (a)
            for (var l = 0; l < n.slides.length; l += 1)
              if (n.slides[l] === a) {
                (i = !0), (t = l);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  he(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = t),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var je = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            n = t.params,
            r = t.rtlTranslate,
            a = t.translate,
            i = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -a : a;
          if (n.cssMode) return a;
          var l = ye(i[0], e);
          return r && (l = -l), l || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            r = n.rtlTranslate,
            a = n.params,
            i = n.$wrapperEl,
            l = n.wrapperEl,
            o = n.progress,
            s = 0,
            u = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (u = e),
            a.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
            a.cssMode
              ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -s : -u)
              : a.virtualTranslate ||
                i.transform(
                  "translate3d("
                    .concat(s, "px, ")
                    .concat(u, "px, ")
                    .concat(0, "px)")
                ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : u);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== o &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          var i = this,
            l = i.params,
            o = i.wrapperEl;
          if (i.animating && l.preventInteractionOnTransition) return !1;
          var s,
            u = i.minTranslate(),
            c = i.maxTranslate();
          if (
            ((s = r && e > u ? u : r && e < c ? c : e),
            i.updateProgress(s),
            l.cssMode)
          ) {
            var d = i.isHorizontal();
            if (0 === t) o[d ? "scrollLeft" : "scrollTop"] = -s;
            else {
              var f;
              if (!i.support.smoothScroll)
                return (
                  Ae({
                    swiper: i,
                    targetPosition: -s,
                    side: d ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo(
                (me((f = {}), d ? "left" : "top", -s),
                me(f, "behavior", "smooth"),
                f)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (i.setTransition(0),
                i.setTranslate(s),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionEnd")))
              : (i.setTransition(t),
                i.setTranslate(s),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionStart")),
                i.animating ||
                  ((i.animating = !0),
                  i.onTranslateToWrapperTransitionEnd ||
                    (i.onTranslateToWrapperTransitionEnd = function (e) {
                      i &&
                        !i.destroyed &&
                        e.target === this &&
                        (i.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        i.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        (i.onTranslateToWrapperTransitionEnd = null),
                        delete i.onTranslateToWrapperTransitionEnd,
                        n && i.emit("transitionEnd"));
                    }),
                  i.$wrapperEl[0].addEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    i.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Ne(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          r = e.direction,
          a = e.step,
          i = t.activeIndex,
          l = t.previousIndex,
          o = r;
        if (
          (o || (o = i > l ? "next" : i < l ? "prev" : "reset"),
          t.emit("transition".concat(a)),
          n && i !== l)
        ) {
          if ("reset" === o)
            return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === o
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var Pe = {
        slideTo: function (e, t, n, r, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" === typeof e) {
            var i = parseInt(e, 10);
            if (!isFinite(i))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = i;
          }
          var l = this,
            o = e;
          o < 0 && (o = 0);
          var s = l.params,
            u = l.snapGrid,
            c = l.slidesGrid,
            d = l.previousIndex,
            f = l.activeIndex,
            p = l.rtlTranslate,
            h = l.wrapperEl,
            m = l.enabled;
          if (
            (l.animating && s.preventInteractionOnTransition) ||
            (!m && !r && !a)
          )
            return !1;
          var v = Math.min(l.params.slidesPerGroupSkip, o),
            g = v + Math.floor((o - v) / l.params.slidesPerGroup);
          g >= u.length && (g = u.length - 1),
            (f || s.initialSlide || 0) === (d || 0) &&
              n &&
              l.emit("beforeSlideChangeStart");
          var y,
            b = -u[g];
          if ((l.updateProgress(b), s.normalizeSlideIndex))
            for (var w = 0; w < c.length; w += 1) {
              var x = -Math.floor(100 * b),
                S = Math.floor(100 * c[w]),
                A = Math.floor(100 * c[w + 1]);
              "undefined" !== typeof c[w + 1]
                ? x >= S && x < A - (A - S) / 2
                  ? (o = w)
                  : x >= S && x < A && (o = w + 1)
                : x >= S && (o = w);
            }
          if (l.initialized && o !== f) {
            if (!l.allowSlideNext && b < l.translate && b < l.minTranslate())
              return !1;
            if (
              !l.allowSlidePrev &&
              b > l.translate &&
              b > l.maxTranslate() &&
              (f || 0) !== o
            )
              return !1;
          }
          if (
            ((y = o > f ? "next" : o < f ? "prev" : "reset"),
            (p && -b === l.translate) || (!p && b === l.translate))
          )
            return (
              l.updateActiveIndex(o),
              s.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== s.effect && l.setTranslate(b),
              "reset" !== y && (l.transitionStart(n, y), l.transitionEnd(n, y)),
              !1
            );
          if (s.cssMode) {
            var k = l.isHorizontal(),
              E = p ? b : -b;
            if (0 === t) {
              var C = l.virtual && l.params.virtual.enabled;
              C &&
                ((l.wrapperEl.style.scrollSnapType = "none"),
                (l._immediateVirtual = !0)),
                (h[k ? "scrollLeft" : "scrollTop"] = E),
                C &&
                  requestAnimationFrame(function () {
                    (l.wrapperEl.style.scrollSnapType = ""),
                      (l._swiperImmediateVirtual = !1);
                  });
            } else {
              var T;
              if (!l.support.smoothScroll)
                return (
                  Ae({
                    swiper: l,
                    targetPosition: E,
                    side: k ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo(
                (me((T = {}), k ? "left" : "top", E),
                me(T, "behavior", "smooth"),
                T)
              );
            }
            return !0;
          }
          return (
            l.setTransition(t),
            l.setTranslate(b),
            l.updateActiveIndex(o),
            l.updateSlidesClasses(),
            l.emit("beforeTransitionStart", t, r),
            l.transitionStart(n, y),
            0 === t
              ? l.transitionEnd(n, y)
              : l.animating ||
                ((l.animating = !0),
                l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      (l.onSlideToWrapperTransitionEnd = null),
                      delete l.onSlideToWrapperTransitionEnd,
                      l.transitionEnd(n, y));
                  }),
                l.$wrapperEl[0].addEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                l.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  l.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" === typeof e)
          ) {
            var a = parseInt(e, 10);
            if (!isFinite(a))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = a;
          }
          var i = this,
            l = e;
          return i.params.loop && (l += i.loopedSlides), i.slideTo(l, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.animating,
            i = r.enabled,
            l = r.params;
          if (!i) return r;
          var o = l.slidesPerGroup;
          "auto" === l.slidesPerView &&
            1 === l.slidesPerGroup &&
            l.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o;
          if (l.loop) {
            if (a && l.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return l.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.params,
            i = r.animating,
            l = r.snapGrid,
            o = r.slidesGrid,
            s = r.rtlTranslate;
          if (!r.enabled) return r;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            d = u(s ? r.translate : -r.translate),
            f = l.map(function (e) {
              return u(e);
            }),
            p = l[f.indexOf(d) - 1];
          "undefined" === typeof p &&
            a.cssMode &&
            (l.forEach(function (e, t) {
              d >= e && (c = t);
            }),
            "undefined" !== typeof c && (p = l[c > 0 ? c - 1 : c]));
          var h = 0;
          if (
            ("undefined" !== typeof p &&
              ((h = o.indexOf(p)) < 0 && (h = r.activeIndex - 1),
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            a.rewind && r.isBeginning)
          ) {
            var m =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(m, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          var a = this,
            i = a.activeIndex,
            l = Math.min(a.params.slidesPerGroupSkip, i),
            o = l + Math.floor((i - l) / a.params.slidesPerGroup),
            s = a.rtlTranslate ? a.translate : -a.translate;
          if (s >= a.snapGrid[o]) {
            var u = a.snapGrid[o];
            s - u > (a.snapGrid[o + 1] - u) * r &&
              (i += a.params.slidesPerGroup);
          } else {
            var c = a.snapGrid[o - 1];
            s - c <= (a.snapGrid[o] - c) * r && (i -= a.params.slidesPerGroup);
          }
          return (
            (i = Math.max(i, 0)),
            (i = Math.min(i, a.slidesGrid.length - 1)),
            a.slideTo(i, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            r = t.$wrapperEl,
            a =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            i = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              he(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? i < t.loopedSlides - a / 2 ||
                  i > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (i = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    ve(function () {
                      t.slideTo(i);
                    }))
                  : t.slideTo(i)
                : i > t.slides.length - a
                ? (t.loopFix(),
                  (i = r
                    .children(
                      "."
                        .concat(n.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(n.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  ve(function () {
                    t.slideTo(i);
                  }))
                : t.slideTo(i);
          } else t.slideTo(i);
        },
      };
      var Le = {
        loopCreate: function () {
          var e = this,
            t = q(),
            n = e.params,
            r = e.$wrapperEl,
            a = r.children().length > 0 ? he(r.children()[0].parentNode) : r;
          a.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var i = a.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var l = n.slidesPerGroup - (i.length % n.slidesPerGroup);
            if (l !== n.slidesPerGroup) {
              for (var o = 0; o < l; o += 1) {
                var s = he(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                a.append(s);
              }
              i = a.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = i.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > i.length && (e.loopedSlides = i.length);
          var u = [],
            c = [];
          i.each(function (t, n) {
            var r = he(t);
            n < e.loopedSlides && c.push(t),
              n < i.length && n >= i.length - e.loopedSlides && u.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (var d = 0; d < c.length; d += 1)
            a.append(he(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var f = u.length - 1; f >= 0; f -= 1)
            a.prepend(he(u[f].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            r = e.slides,
            a = e.loopedSlides,
            i = e.allowSlidePrev,
            l = e.allowSlideNext,
            o = e.snapGrid,
            s = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var u = -o[n] - e.getTranslate();
          if (n < a)
            (t = r.length - 3 * a + n),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          else if (n >= r.length - a) {
            (t = -r.length + n + a),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = l), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function Ie(e) {
        var t = this,
          n = q(),
          r = J(),
          a = t.touchEventsData,
          i = t.params,
          l = t.touches;
        if (t.enabled && (!t.animating || !i.preventInteractionOnTransition)) {
          !t.animating && i.cssMode && i.loop && t.loopFix();
          var o = e;
          o.originalEvent && (o = o.originalEvent);
          var s = he(o.target);
          if (
            ("wrapper" !== i.touchEventsTarget ||
              s.closest(t.wrapperEl).length) &&
            ((a.isTouchEvent = "touchstart" === o.type),
            (a.isTouchEvent || !("which" in o) || 3 !== o.which) &&
              !(!a.isTouchEvent && "button" in o && o.button > 0) &&
              (!a.isTouched || !a.isMoved))
          ) {
            !!i.noSwipingClass &&
              "" !== i.noSwipingClass &&
              o.target &&
              o.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (s = he(e.path[0]));
            var u = i.noSwipingSelector
                ? i.noSwipingSelector
                : ".".concat(i.noSwipingClass),
              c = !(!o.target || !o.target.shadowRoot);
            if (
              i.noSwiping &&
              (c
                ? (function (e, t) {
                    return (
                      void 0 === t && (t = this),
                      (function t(n) {
                        if (!n || n === q() || n === J()) return null;
                        n.assignedSlot && (n = n.assignedSlot);
                        var r = n.closest(e);
                        return r || n.getRootNode
                          ? r || t(n.getRootNode().host)
                          : null;
                      })(t)
                    );
                  })(u, s[0])
                : s.closest(u)[0])
            )
              t.allowClick = !0;
            else if (!i.swipeHandler || s.closest(i.swipeHandler)[0]) {
              (l.currentX =
                "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
                (l.currentY =
                  "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
              var d = l.currentX,
                f = l.currentY,
                p = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (p && (d <= h || d >= r.innerWidth - h)) {
                if ("prevent" !== p) return;
                e.preventDefault();
              }
              if (
                (Object.assign(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (l.startX = d),
                (l.startY = f),
                (a.touchStartTime = ge()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                i.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== o.type)
              ) {
                var m = !0;
                s.is(a.focusableElements) &&
                  ((m = !1), "SELECT" === s[0].nodeName && (a.isTouched = !1)),
                  n.activeElement &&
                    he(n.activeElement).is(a.focusableElements) &&
                    n.activeElement !== s[0] &&
                    n.activeElement.blur();
                var v = m && t.allowTouchMove && i.touchStartPreventDefault;
                (!i.touchStartForcePreventDefault && !v) ||
                  s[0].isContentEditable ||
                  o.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !i.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", o);
            }
          }
        }
      }
      function Oe(e) {
        var t = q(),
          n = this,
          r = n.touchEventsData,
          a = n.params,
          i = n.touches,
          l = n.rtlTranslate;
        if (n.enabled) {
          var o = e;
          if ((o.originalEvent && (o = o.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || "touchmove" === o.type) {
              var s =
                  "touchmove" === o.type &&
                  o.targetTouches &&
                  (o.targetTouches[0] || o.changedTouches[0]),
                u = "touchmove" === o.type ? s.pageX : o.pageX,
                c = "touchmove" === o.type ? s.pageY : o.pageY;
              if (o.preventedByNestedSwiper)
                return (i.startX = u), void (i.startY = c);
              if (!n.allowTouchMove)
                return (
                  he(o.target).is(r.focusableElements) || (n.allowClick = !1),
                  void (
                    r.isTouched &&
                    (Object.assign(i, {
                      startX: u,
                      startY: c,
                      currentX: u,
                      currentY: c,
                    }),
                    (r.touchStartTime = ge()))
                  )
                );
              if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                if (n.isVertical()) {
                  if (
                    (c < i.startY && n.translate <= n.maxTranslate()) ||
                    (c > i.startY && n.translate >= n.minTranslate())
                  )
                    return (r.isTouched = !1), void (r.isMoved = !1);
                } else if (
                  (u < i.startX && n.translate <= n.maxTranslate()) ||
                  (u > i.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                r.isTouchEvent &&
                t.activeElement &&
                o.target === t.activeElement &&
                he(o.target).is(r.focusableElements)
              )
                return (r.isMoved = !0), void (n.allowClick = !1);
              if (
                (r.allowTouchCallbacks && n.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1))
              ) {
                (i.currentX = u), (i.currentY = c);
                var d = i.currentX - i.startX,
                  f = i.currentY - i.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) <
                      n.params.threshold
                  )
                ) {
                  var p;
                  if ("undefined" === typeof r.isScrolling)
                    (n.isHorizontal() && i.currentY === i.startY) ||
                    (n.isVertical() && i.currentX === i.startX)
                      ? (r.isScrolling = !1)
                      : d * d + f * f >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(f), Math.abs(d))) /
                          Math.PI),
                        (r.isScrolling = n.isHorizontal()
                          ? p > a.touchAngle
                          : 90 - p > a.touchAngle));
                  if (
                    (r.isScrolling && n.emit("touchMoveOpposite", o),
                    "undefined" === typeof r.startMoving &&
                      ((i.currentX === i.startX && i.currentY === i.startY) ||
                        (r.startMoving = !0)),
                    r.isScrolling)
                  )
                    r.isTouched = !1;
                  else if (r.startMoving) {
                    (n.allowClick = !1),
                      !a.cssMode && o.cancelable && o.preventDefault(),
                      a.touchMoveStopPropagation &&
                        !a.nested &&
                        o.stopPropagation(),
                      r.isMoved ||
                        (a.loop && !a.cssMode && n.loopFix(),
                        (r.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                          n.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (r.allowMomentumBounce = !1),
                        !a.grabCursor ||
                          (!0 !== n.allowSlideNext &&
                            !0 !== n.allowSlidePrev) ||
                          n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", o)),
                      n.emit("sliderMove", o),
                      (r.isMoved = !0);
                    var h = n.isHorizontal() ? d : f;
                    (i.diff = h),
                      (h *= a.touchRatio),
                      l && (h = -h),
                      (n.swipeDirection = h > 0 ? "prev" : "next"),
                      (r.currentTranslate = h + r.startTranslate);
                    var m = !0,
                      v = a.resistanceRatio;
                    if (
                      (a.touchReleaseOnEdges && (v = 0),
                      h > 0 && r.currentTranslate > n.minTranslate()
                        ? ((m = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + r.startTranslate + h,
                                v
                              )))
                        : h < 0 &&
                          r.currentTranslate < n.maxTranslate() &&
                          ((m = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - r.startTranslate - h,
                                v
                              ))),
                      m && (o.preventedByNestedSwiper = !0),
                      !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        r.currentTranslate < r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        r.currentTranslate > r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (r.currentTranslate = r.startTranslate),
                      a.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
                        return void (r.currentTranslate = r.startTranslate);
                      if (!r.allowThresholdMove)
                        return (
                          (r.allowThresholdMove = !0),
                          (i.startX = i.currentX),
                          (i.startY = i.currentY),
                          (r.currentTranslate = r.startTranslate),
                          void (i.diff = n.isHorizontal()
                            ? i.currentX - i.startX
                            : i.currentY - i.startY)
                        );
                    }
                    a.followFinger &&
                      !a.cssMode &&
                      (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
                        a.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                      n.params.freeMode &&
                        a.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                      n.updateProgress(r.currentTranslate),
                      n.setTranslate(r.currentTranslate));
                  }
                }
              }
            }
          } else
            r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
        }
      }
      function ze(e) {
        var t = this,
          n = t.touchEventsData,
          r = t.params,
          a = t.touches,
          i = t.rtlTranslate,
          l = t.slidesGrid;
        if (t.enabled) {
          var o = e;
          if (
            (o.originalEvent && (o = o.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", o),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && r.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          r.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var s,
            u = ge(),
            c = u - n.touchStartTime;
          if (t.allowClick) {
            var d = o.path || (o.composedPath && o.composedPath());
            t.updateClickedSlide((d && d[0]) || o.target),
              t.emit("tap click", o),
              c < 300 &&
                u - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", o);
          }
          if (
            ((n.lastClickTime = ge()),
            ve(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (s = r.followFinger
              ? i
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            !r.cssMode)
          )
            if (t.params.freeMode && r.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: s });
            else {
              for (
                var f = 0, p = t.slidesSizesGrid[0], h = 0;
                h < l.length;
                h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
              ) {
                var m = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                "undefined" !== typeof l[h + m]
                  ? s >= l[h] &&
                    s < l[h + m] &&
                    ((f = h), (p = l[h + m] - l[h]))
                  : s >= l[h] &&
                    ((f = h), (p = l[l.length - 1] - l[l.length - 2]));
              }
              var v = null,
                g = null;
              r.rewind &&
                (t.isBeginning
                  ? (g =
                      t.params.virtual && t.params.virtual.enabled && t.virtual
                        ? t.virtual.slides.length - 1
                        : t.slides.length - 1)
                  : t.isEnd && (v = 0));
              var y = (s - l[f]) / p,
                b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              if (c > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (y >= r.longSwipesRatio
                    ? t.slideTo(r.rewind && t.isEnd ? v : f + b)
                    : t.slideTo(f)),
                  "prev" === t.swipeDirection &&
                    (y > 1 - r.longSwipesRatio
                      ? t.slideTo(f + b)
                      : null !== g && y < 0 && Math.abs(y) > r.longSwipesRatio
                      ? t.slideTo(g)
                      : t.slideTo(f));
              } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                (o.target === t.navigation.nextEl ||
                  o.target === t.navigation.prevEl)
                  ? o.target === t.navigation.nextEl
                    ? t.slideTo(f + b)
                    : t.slideTo(f)
                  : ("next" === t.swipeDirection &&
                      t.slideTo(null !== v ? v : f + b),
                    "prev" === t.swipeDirection &&
                      t.slideTo(null !== g ? g : f));
              }
            }
        }
      }
      function Be() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            a = e.allowSlidePrev,
            i = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = r),
            e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
        }
      }
      function Re(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function De() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var Fe = !1;
      function _e() {}
      var Qe = function (e, t) {
        var n = q(),
          r = e.params,
          a = e.touchEvents,
          i = e.el,
          l = e.wrapperEl,
          o = e.device,
          s = e.support,
          u = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (s.touch) {
          var f = !(
            "touchstart" !== a.start ||
            !s.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          i[c](a.start, e.onTouchStart, f),
            i[c](
              a.move,
              e.onTouchMove,
              s.passiveListener ? { passive: !1, capture: u } : u
            ),
            i[c](a.end, e.onTouchEnd, f),
            a.cancel && i[c](a.cancel, e.onTouchEnd, f);
        } else
          i[c](a.start, e.onTouchStart, !1),
            n[c](a.move, e.onTouchMove, u),
            n[c](a.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          i[c]("click", e.onClick, !0),
          r.cssMode && l[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[d](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Be,
                !0
              )
            : e[d]("observerUpdate", Be, !0);
      };
      var Ve = {
          attachEvents: function () {
            var e = this,
              t = q(),
              n = e.params,
              r = e.support;
            (e.onTouchStart = Ie.bind(e)),
              (e.onTouchMove = Oe.bind(e)),
              (e.onTouchEnd = ze.bind(e)),
              n.cssMode && (e.onScroll = De.bind(e)),
              (e.onClick = Re.bind(e)),
              r.touch &&
                !Fe &&
                (t.addEventListener("touchstart", _e), (Fe = !0)),
              Qe(e, "on");
          },
          detachEvents: function () {
            Qe(this, "off");
          },
        },
        Ue = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var He = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            r = e.loopedSlides,
            a = void 0 === r ? 0 : r,
            i = e.params,
            l = e.$el,
            o = i.breakpoints;
          if (o && (!o || 0 !== Object.keys(o).length)) {
            var s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (s && e.currentBreakpoint !== s) {
              var u = (s in o ? o[s] : void 0) || e.originalParams,
                c = Ue(e, i),
                d = Ue(e, u),
                f = i.enabled;
              c && !d
                ? (l.removeClass(
                    ""
                      .concat(i.containerModifierClass, "grid ")
                      .concat(i.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !c &&
                  d &&
                  (l.addClass("".concat(i.containerModifierClass, "grid")),
                  ((u.grid.fill && "column" === u.grid.fill) ||
                    (!u.grid.fill && "column" === i.grid.fill)) &&
                    l.addClass(
                      "".concat(i.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach(function (t) {
                  var n = i[t] && i[t].enabled,
                    r = u[t] && u[t].enabled;
                  n && !r && e[t].disable(), !n && r && e[t].enable();
                });
              var p = u.direction && u.direction !== i.direction,
                h = i.loop && (u.slidesPerView !== i.slidesPerView || p);
              p && n && e.changeDirection(), xe(e.params, u);
              var m = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !m ? e.disable() : !f && m && e.enable(),
                (e.currentBreakpoint = s),
                e.emit("_beforeBreakpoint", u),
                h &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", u);
            }
          }
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || n))) {
            var r = !1,
              a = J(),
              i = "window" === t ? a.innerHeight : n.clientHeight,
              l = Object.keys(e).map(function (e) {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: i * t, point: e };
                }
                return { value: e, point: e };
              });
            l.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var o = 0; o < l.length; o += 1) {
              var s = l[o],
                u = s.point,
                c = s.value;
              "window" === t
                ? a.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                  (r = u)
                : c <= n.clientWidth && (r = u);
            }
            return r || "max";
          }
        },
      };
      var We = {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            n = e.params,
            r = e.rtl,
            a = e.$el,
            i = e.device,
            l = e.support,
            o = (function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  "object" === typeof e
                    ? Object.keys(e).forEach(function (r) {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !l.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: i.android },
                { ios: i.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push.apply(t, _(o)),
            a.addClass(_(t).join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var Ge = {
        loadImage: function (e, t, n, r, a, i) {
          var l,
            o = J();
          function s() {
            i && i();
          }
          he(e).parent("picture")[0] || (e.complete && a)
            ? s()
            : t
            ? (((l = new o.Image()).onload = s),
              (l.onerror = s),
              r && (l.sizes = r),
              n && (l.srcset = n),
              t && (l.src = t))
            : s();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            "undefined" !== typeof e &&
              null !== e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var n = 0; n < e.imagesToLoad.length; n += 1) {
            var r = e.imagesToLoad[n];
            e.loadImage(
              r,
              r.currentSrc || r.getAttribute("src"),
              r.srcset || r.getAttribute("srcset"),
              r.sizes || r.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      };
      var qe = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function Ye(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          var r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in a
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  xe(t, n))
                : xe(t, n))
            : xe(t, n);
        };
      }
      var Je = {
          eventsEmitter: Te,
          update: Me,
          translate: je,
          transition: {
            setTransition: function (e, t) {
              var n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                Ne({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  Ne({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Pe,
          loop: Le,
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Ve,
          breakpoints: He,
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                n = e.params,
                r = n.slidesOffsetBefore;
              if (r) {
                var a = e.slides.length - 1,
                  i = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * r;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: We,
          images: Ge,
        },
        Ke = {},
        Xe = (function () {
          function e() {
            var t, n;
            Q(this, e);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            if (
              (1 === a.length &&
              a[0].constructor &&
              "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
                ? (n = a[0])
                : ((t = a[0]), (n = a[1])),
              n || (n = {}),
              (n = xe({}, n)),
              t && !n.el && (n.el = t),
              n.el && he(n.el).length > 1)
            ) {
              var l = [];
              return (
                he(n.el).each(function (t) {
                  var r = xe({}, n, { el: t });
                  l.push(new e(r));
                }),
                l
              );
            }
            var o,
              s = this;
            ((s.__swiper__ = !0),
            (s.support = ke()),
            (s.device = Ee({ userAgent: n.userAgent })),
            (s.browser = Ce()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = _(s.__modules__)),
            n.modules && Array.isArray(n.modules)) &&
              (o = s.modules).push.apply(o, _(n.modules));
            var u = {};
            s.modules.forEach(function (e) {
              e({
                swiper: s,
                extendParams: Ye(n, u),
                on: s.on.bind(s),
                once: s.once.bind(s),
                off: s.off.bind(s),
                emit: s.emit.bind(s),
              });
            });
            var c = xe({}, qe, u);
            return (
              (s.params = xe({}, c, Ke, n)),
              (s.originalParams = xe({}, s.params)),
              (s.passedParams = xe({}, n)),
              s.params &&
                s.params.on &&
                Object.keys(s.params.on).forEach(function (e) {
                  s.on(e, s.params.on[e]);
                }),
              s.params && s.params.onAny && s.onAny(s.params.onAny),
              (s.$ = he),
              Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: he(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === s.params.direction;
                },
                isVertical: function () {
                  return "vertical" === s.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (s.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (s.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    s.support.touch || !s.params.simulateTouch
                      ? s.touchEventsTouch
                      : s.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: s.params.focusableElements,
                  lastClickTime: ge(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              s.emit("_swiper"),
              s.params.init && s.init(),
              s
            );
          }
          return (
            U(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                      e.params.grabCursor && e.unsetGrabCursor(),
                      e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = n.minTranslate(),
                      a = (n.maxTranslate() - r) * e + r;
                    n.translateTo(a, "undefined" === typeof t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return t.destroyed
                      ? ""
                      : e.className
                          .split(" ")
                          .filter(function (e) {
                            return (
                              0 === e.indexOf("swiper-slide") ||
                              0 === e.indexOf(t.params.slideClass)
                            );
                          })
                          .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var r = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: r }),
                          e.emit("_slideClass", n, r);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function (e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    var n = this,
                      r = n.params,
                      a = n.slides,
                      i = n.slidesGrid,
                      l = n.slidesSizesGrid,
                      o = n.size,
                      s = n.activeIndex,
                      u = 1;
                    if (r.centeredSlides) {
                      for (
                        var c, d = a[s].swiperSlideSize, f = s + 1;
                        f < a.length;
                        f += 1
                      )
                        a[f] &&
                          !c &&
                          ((u += 1),
                          (d += a[f].swiperSlideSize) > o && (c = !0));
                      for (var p = s - 1; p >= 0; p -= 1)
                        a[p] &&
                          !c &&
                          ((u += 1),
                          (d += a[p].swiperSlideSize) > o && (c = !0));
                    } else if ("current" === e)
                      for (var h = s + 1; h < a.length; h += 1) {
                        (t ? i[h] + l[h] - i[s] < o : i[h] - i[s] < o) &&
                          (u += 1);
                      }
                    else
                      for (var m = s - 1; m >= 0; m -= 1) {
                        i[s] - i[m] < o && (u += 1);
                      }
                    return u;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (r(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function r() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e, t) {
                    void 0 === t && (t = !0);
                    var n = this,
                      r = n.params.direction;
                    return (
                      e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                      e === r ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (n.$el
                          .removeClass(
                            "".concat(n.params.containerModifierClass).concat(r)
                          )
                          .addClass(
                            "".concat(n.params.containerModifierClass).concat(e)
                          ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "changeLanguageDirection",
                  value: function (e) {
                    var t = this;
                    (t.rtl && "rtl" === e) ||
                      (!t.rtl && "ltr" === e) ||
                      ((t.rtl = "rtl" === e),
                      (t.rtlTranslate =
                        "horizontal" === t.params.direction && t.rtl),
                      t.rtl
                        ? (t.$el.addClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "rtl"))
                        : (t.$el.removeClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "ltr")),
                      t.update());
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = he(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var r = function () {
                        return ".".concat(
                          (t.params.wrapperClass || "")
                            .trim()
                            .split(" ")
                            .join(".")
                        );
                      },
                      a = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = he(e.shadowRoot.querySelector(r()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children
                          ? n.children(r())
                          : he(n).children(r());
                      })();
                    if (0 === a.length && t.params.createElements) {
                      var i = q().createElement("div");
                      (a = he(i)),
                        (i.className = t.params.wrapperClass),
                        n.append(i),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            a.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: a,
                        wrapperEl: a[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === a.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                              t.params.initialSlide + t.loopedSlides,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            )
                          : t.slideTo(
                              t.params.initialSlide,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                      r = n.params,
                      a = n.$el,
                      i = n.$wrapperEl,
                      l = n.slides;
                    return (
                      "undefined" === typeof n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        r.loop && n.loopDestroy(),
                        t &&
                          (n.removeClasses(),
                          a.removeAttr("style"),
                          i.removeAttr("style"),
                          l &&
                            l.length &&
                            l
                              .removeClass(
                                [
                                  r.slideVisibleClass,
                                  r.slideActiveClass,
                                  r.slideNextClass,
                                  r.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e &&
                          ((n.$el[0].swiper = null),
                          (function (e) {
                            var t = e;
                            Object.keys(t).forEach(function (e) {
                              try {
                                t[e] = null;
                              } catch (n) {}
                              try {
                                delete t[e];
                              } catch (n) {}
                            });
                          })(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    xe(Ke, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return Ke;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return qe;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" === typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                          return e.installModule(t);
                        }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys(Je).forEach(function (e) {
        Object.keys(Je[e]).forEach(function (t) {
          Xe.prototype[t] = Je[e][t];
        });
      }),
        Xe.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              r = e.emit,
              a = J(),
              i = null,
              l = null,
              o = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              s = function () {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((i = new ResizeObserver(function (e) {
                    l = a.requestAnimationFrame(function () {
                      var n = t.width,
                        r = t.height,
                        a = n,
                        i = r;
                      e.forEach(function (e) {
                        var n = e.contentBoxSize,
                          r = e.contentRect,
                          l = e.target;
                        (l && l !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (i = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && i === r) || o();
                    });
                  })),
                  i.observe(t.el))
                : (a.addEventListener("resize", o),
                  a.addEventListener("orientationchange", s));
            }),
              n("destroy", function () {
                l && a.cancelAnimationFrame(l),
                  i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                  a.removeEventListener("resize", o),
                  a.removeEventListener("orientationchange", s);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              r = e.on,
              a = e.emit,
              i = [],
              l = J(),
              o = function (e, t) {
                void 0 === t && (t = {});
                var n = new (l.MutationObserver || l.WebkitMutationObserver)(
                  function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        a("observerUpdate", e[0]);
                      };
                      l.requestAnimationFrame
                        ? l.requestAnimationFrame(t)
                        : l.setTimeout(t, 0);
                    } else a("observerUpdate", e[0]);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  i.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      o(e[n]);
                  o(t.$el[0], { childList: t.params.observeSlideChildren }),
                    o(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", function () {
                i.forEach(function (e) {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      var Ze = Xe;
      function $e(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!\/])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function et(e) {
        var t,
          n = e.swiper,
          r = e.extendParams,
          a = e.on,
          i = e.emit,
          l = "swiper-pagination";
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "".concat(l, "-bullet"),
            bulletActiveClass: "".concat(l, "-bullet-active"),
            modifierClass: "".concat(l, "-"),
            currentClass: "".concat(l, "-current"),
            totalClass: "".concat(l, "-total"),
            hiddenClass: "".concat(l, "-hidden"),
            progressbarFillClass: "".concat(l, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(l, "-progressbar-opposite"),
            clickableClass: "".concat(l, "-clickable"),
            lockClass: "".concat(l, "-lock"),
            horizontalClass: "".concat(l, "-horizontal"),
            verticalClass: "".concat(l, "-vertical"),
            paginationDisabledClass: "".concat(l, "-disabled"),
          },
        }),
          (n.pagination = { el: null, $el: null, bullets: [] });
        var o = 0;
        function s() {
          return (
            !n.params.pagination.el ||
            !n.pagination.el ||
            !n.pagination.$el ||
            0 === n.pagination.$el.length
          );
        }
        function u(e, t) {
          var r = n.params.pagination.bulletActiveClass;
          e[t]()
            .addClass("".concat(r, "-").concat(t))
            [t]()
            .addClass("".concat(r, "-").concat(t, "-").concat(t));
        }
        function c() {
          var e = n.rtl,
            r = n.params.pagination;
          if (!s()) {
            var a,
              l =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              c = n.pagination.$el,
              d = n.params.loop
                ? Math.ceil((l - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
            if (
              (n.params.loop
                ? ((a = Math.ceil(
                    (n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup
                  )) >
                    l - 1 - 2 * n.loopedSlides && (a -= l - 2 * n.loopedSlides),
                  a > d - 1 && (a -= d),
                  a < 0 && "bullets" !== n.params.paginationType && (a = d + a))
                : (a =
                    "undefined" !== typeof n.snapIndex
                      ? n.snapIndex
                      : n.activeIndex || 0),
              "bullets" === r.type &&
                n.pagination.bullets &&
                n.pagination.bullets.length > 0)
            ) {
              var f,
                p,
                h,
                m = n.pagination.bullets;
              if (
                (r.dynamicBullets &&
                  ((t = m
                    .eq(0)
                    [n.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  c.css(
                    n.isHorizontal() ? "width" : "height",
                    "".concat(t * (r.dynamicMainBullets + 4), "px")
                  ),
                  r.dynamicMainBullets > 1 &&
                    void 0 !== n.previousIndex &&
                    ((o += a - (n.previousIndex - n.loopedSlides || 0)) >
                    r.dynamicMainBullets - 1
                      ? (o = r.dynamicMainBullets - 1)
                      : o < 0 && (o = 0)),
                  (f = Math.max(a - o, 0)),
                  (h =
                    ((p = f + (Math.min(m.length, r.dynamicMainBullets) - 1)) +
                      f) /
                    2)),
                m.removeClass(
                  ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                    .map(function (e) {
                      return "".concat(r.bulletActiveClass).concat(e);
                    })
                    .join(" ")
                ),
                c.length > 1)
              )
                m.each(function (e) {
                  var t = he(e),
                    n = t.index();
                  n === a && t.addClass(r.bulletActiveClass),
                    r.dynamicBullets &&
                      (n >= f &&
                        n <= p &&
                        t.addClass("".concat(r.bulletActiveClass, "-main")),
                      n === f && u(t, "prev"),
                      n === p && u(t, "next"));
                });
              else {
                var v = m.eq(a),
                  g = v.index();
                if ((v.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                  for (var y = m.eq(f), b = m.eq(p), w = f; w <= p; w += 1)
                    m.eq(w).addClass("".concat(r.bulletActiveClass, "-main"));
                  if (n.params.loop)
                    if (g >= m.length) {
                      for (var x = r.dynamicMainBullets; x >= 0; x -= 1)
                        m.eq(m.length - x).addClass(
                          "".concat(r.bulletActiveClass, "-main")
                        );
                      m.eq(m.length - r.dynamicMainBullets - 1).addClass(
                        "".concat(r.bulletActiveClass, "-prev")
                      );
                    } else u(y, "prev"), u(b, "next");
                  else u(y, "prev"), u(b, "next");
                }
              }
              if (r.dynamicBullets) {
                var S = Math.min(m.length, r.dynamicMainBullets + 4),
                  A = (t * S - t) / 2 - h * t,
                  k = e ? "right" : "left";
                m.css(n.isHorizontal() ? k : "top", "".concat(A, "px"));
              }
            }
            if (
              ("fraction" === r.type &&
                (c
                  .find($e(r.currentClass))
                  .text(r.formatFractionCurrent(a + 1)),
                c.find($e(r.totalClass)).text(r.formatFractionTotal(d))),
              "progressbar" === r.type)
            ) {
              var E;
              E = r.progressbarOpposite
                ? n.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : n.isHorizontal()
                ? "horizontal"
                : "vertical";
              var C = (a + 1) / d,
                T = 1,
                M = 1;
              "horizontal" === E ? (T = C) : (M = C),
                c
                  .find($e(r.progressbarFillClass))
                  .transform(
                    "translate3d(0,0,0) scaleX("
                      .concat(T, ") scaleY(")
                      .concat(M, ")")
                  )
                  .transition(n.params.speed);
            }
            "custom" === r.type && r.renderCustom
              ? (c.html(r.renderCustom(n, a + 1, d)),
                i("paginationRender", c[0]))
              : i("paginationUpdate", c[0]),
              n.params.watchOverflow &&
                n.enabled &&
                c[n.isLocked ? "addClass" : "removeClass"](r.lockClass);
          }
        }
        function d() {
          var e = n.params.pagination;
          if (!s()) {
            var t =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              r = n.pagination.$el,
              a = "";
            if ("bullets" === e.type) {
              var l = n.params.loop
                ? Math.ceil((t - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
              n.params.freeMode &&
                n.params.freeMode.enabled &&
                !n.params.loop &&
                l > t &&
                (l = t);
              for (var o = 0; o < l; o += 1)
                e.renderBullet
                  ? (a += e.renderBullet.call(n, o, e.bulletClass))
                  : (a += "<"
                      .concat(e.bulletElement, ' class="')
                      .concat(e.bulletClass, '"></')
                      .concat(e.bulletElement, ">"));
              r.html(a), (n.pagination.bullets = r.find($e(e.bulletClass)));
            }
            "fraction" === e.type &&
              ((a = e.renderFraction
                ? e.renderFraction.call(n, e.currentClass, e.totalClass)
                : '<span class="'.concat(e.currentClass, '"></span>') +
                  " / " +
                  '<span class="'.concat(e.totalClass, '"></span>')),
              r.html(a)),
              "progressbar" === e.type &&
                ((a = e.renderProgressbar
                  ? e.renderProgressbar.call(n, e.progressbarFillClass)
                  : '<span class="'.concat(
                      e.progressbarFillClass,
                      '"></span>'
                    )),
                r.html(a)),
              "custom" !== e.type && i("paginationRender", n.pagination.$el[0]);
          }
        }
        function f() {
          n.params.pagination = (function (e, t, n, r) {
            var a = q();
            return (
              e.params.createElements &&
                Object.keys(r).forEach(function (i) {
                  if (!n[i] && !0 === n.auto) {
                    var l = e.$el.children(".".concat(r[i]))[0];
                    l ||
                      (((l = a.createElement("div")).className = r[i]),
                      e.$el.append(l)),
                      (n[i] = l),
                      (t[i] = l);
                  }
                }),
              n
            );
          })(n, n.originalParams.pagination, n.params.pagination, {
            el: "swiper-pagination",
          });
          var e = n.params.pagination;
          if (e.el) {
            var t = he(e.el);
            0 !== t.length &&
              (n.params.uniqueNavElements &&
                "string" === typeof e.el &&
                t.length > 1 &&
                (t = n.$el.find(e.el)).length > 1 &&
                (t = t.filter(function (e) {
                  return he(e).parents(".swiper")[0] === n.el;
                })),
              "bullets" === e.type &&
                e.clickable &&
                t.addClass(e.clickableClass),
              t.addClass(e.modifierClass + e.type),
              t.addClass(
                n.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              "bullets" === e.type &&
                e.dynamicBullets &&
                (t.addClass(
                  "".concat(e.modifierClass).concat(e.type, "-dynamic")
                ),
                (o = 0),
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
              "progressbar" === e.type &&
                e.progressbarOpposite &&
                t.addClass(e.progressbarOppositeClass),
              e.clickable &&
                t.on("click", $e(e.bulletClass), function (e) {
                  e.preventDefault();
                  var t = he(this).index() * n.params.slidesPerGroup;
                  n.params.loop && (t += n.loopedSlides), n.slideTo(t);
                }),
              Object.assign(n.pagination, { $el: t, el: t[0] }),
              n.enabled || t.addClass(e.lockClass));
          }
        }
        function p() {
          var e = n.params.pagination;
          if (!s()) {
            var t = n.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              t.removeClass(
                n.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              n.pagination.bullets &&
                n.pagination.bullets.removeClass &&
                n.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off("click", $e(e.bulletClass));
          }
        }
        a("init", function () {
          !1 === n.params.pagination.enabled ? h() : (f(), d(), c());
        }),
          a("activeIndexChange", function () {
            (n.params.loop || "undefined" === typeof n.snapIndex) && c();
          }),
          a("snapIndexChange", function () {
            n.params.loop || c();
          }),
          a("slidesLengthChange", function () {
            n.params.loop && (d(), c());
          }),
          a("snapGridLengthChange", function () {
            n.params.loop || (d(), c());
          }),
          a("destroy", function () {
            p();
          }),
          a("enable disable", function () {
            var e = n.pagination.$el;
            e &&
              e[n.enabled ? "removeClass" : "addClass"](
                n.params.pagination.lockClass
              );
          }),
          a("lock unlock", function () {
            c();
          }),
          a("click", function (e, t) {
            var r = t.target,
              a = n.pagination.$el;
            if (
              n.params.pagination.el &&
              n.params.pagination.hideOnClick &&
              a &&
              a.length > 0 &&
              !he(r).hasClass(n.params.pagination.bulletClass)
            ) {
              if (
                n.navigation &&
                ((n.navigation.nextEl && r === n.navigation.nextEl) ||
                  (n.navigation.prevEl && r === n.navigation.prevEl))
              )
                return;
              var l = a.hasClass(n.params.pagination.hiddenClass);
              i(!0 === l ? "paginationShow" : "paginationHide"),
                a.toggleClass(n.params.pagination.hiddenClass);
            }
          });
        var h = function () {
          n.$el.addClass(n.params.pagination.paginationDisabledClass),
            n.pagination.$el &&
              n.pagination.$el.addClass(
                n.params.pagination.paginationDisabledClass
              ),
            p();
        };
        Object.assign(n.pagination, {
          enable: function () {
            n.$el.removeClass(n.params.pagination.paginationDisabledClass),
              n.pagination.$el &&
                n.pagination.$el.removeClass(
                  n.params.pagination.paginationDisabledClass
                ),
              f(),
              d(),
              c();
          },
          disable: h,
          render: d,
          update: c,
          init: f,
          destroy: p,
        });
      }
      function tt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function nt(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function rt(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : nt(t[n]) && nt(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : rt(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function at(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function it(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function lt(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function ot(e) {
        void 0 === e && (e = "");
        var t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var st = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function ut(e, t) {
        var n = t.slidesPerView;
        if (t.breakpoints) {
          var r = Ze.prototype.getBreakpoint(t.breakpoints),
            a = r in t.breakpoints ? t.breakpoints[r] : void 0;
          a && a.slidesPerView && (n = a.slidesPerView);
        }
        var i = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (i += t.loopAdditionalSlides) > e.length && (i = e.length), i;
      }
      function ct(e) {
        var n = [];
        return (
          t.Children.toArray(e).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? n.push(e)
              : e.props &&
                e.props.children &&
                ct(e.props.children).forEach(function (e) {
                  return n.push(e);
                });
          }),
          n
        );
      }
      function dt(e) {
        var n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          t.Children.toArray(e).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var t = ct(e.props.children);
              t.length > 0
                ? t.forEach(function (e) {
                    return n.push(e);
                  })
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function ft(e) {
        var t,
          n,
          r,
          a,
          i,
          l = e.swiper,
          o = e.slides,
          s = e.passedParams,
          u = e.changedParams,
          c = e.nextEl,
          d = e.prevEl,
          f = e.scrollbarEl,
          p = e.paginationEl,
          h = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          m = l.params,
          v = l.pagination,
          g = l.navigation,
          y = l.scrollbar,
          b = l.virtual,
          w = l.thumbs;
        u.includes("thumbs") &&
          s.thumbs &&
          s.thumbs.swiper &&
          m.thumbs &&
          !m.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
            s.controller &&
            s.controller.control &&
            m.controller &&
            !m.controller.control &&
            (n = !0),
          u.includes("pagination") &&
            s.pagination &&
            (s.pagination.el || p) &&
            (m.pagination || !1 === m.pagination) &&
            v &&
            !v.el &&
            (r = !0),
          u.includes("scrollbar") &&
            s.scrollbar &&
            (s.scrollbar.el || f) &&
            (m.scrollbar || !1 === m.scrollbar) &&
            y &&
            !y.el &&
            (a = !0),
          u.includes("navigation") &&
            s.navigation &&
            (s.navigation.prevEl || d) &&
            (s.navigation.nextEl || c) &&
            (m.navigation || !1 === m.navigation) &&
            g &&
            !g.prevEl &&
            !g.nextEl &&
            (i = !0);
        (h.forEach(function (e) {
          if (nt(m[e]) && nt(s[e])) rt(m[e], s[e]);
          else {
            var t = s[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (m[e] = s[e])
              : !1 === t &&
                l[(n = e)] &&
                (l[n].destroy(),
                "navigation" === n
                  ? ((m[n].prevEl = void 0),
                    (m[n].nextEl = void 0),
                    (l[n].prevEl = void 0),
                    (l[n].nextEl = void 0))
                  : ((m[n].el = void 0), (l[n].el = void 0)));
          }
          var n;
        }),
        h.includes("controller") &&
          !n &&
          l.controller &&
          l.controller.control &&
          m.controller &&
          m.controller.control &&
          (l.controller.control = m.controller.control),
        u.includes("children") && b && m.virtual.enabled
          ? ((b.slides = o), b.update(!0))
          : u.includes("children") &&
            l.lazy &&
            l.params.lazy.enabled &&
            l.lazy.load(),
        t) &&
          w.init() &&
          w.update(!0);
        n && (l.controller.control = m.controller.control),
          r && (p && (m.pagination.el = p), v.init(), v.render(), v.update()),
          a &&
            (f && (m.scrollbar.el = f),
            y.init(),
            y.updateSize(),
            y.setTranslate()),
          i &&
            (c && (m.navigation.nextEl = c),
            d && (m.navigation.prevEl = d),
            g.init(),
            g.update()),
          u.includes("allowSlideNext") && (l.allowSlideNext = s.allowSlideNext),
          u.includes("allowSlidePrev") && (l.allowSlidePrev = s.allowSlidePrev),
          u.includes("direction") && l.changeDirection(s.direction, !1),
          l.update();
      }
      function pt(e, n) {
        return "undefined" === typeof window
          ? (0, t.useEffect)(e, n)
          : (0, t.useLayoutEffect)(e, n);
      }
      var ht = (0, t.createContext)(null),
        mt = (0, t.createContext)(null),
        vt = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function gt() {
        return (
          (gt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          gt.apply(this, arguments)
        );
      }
      var yt = (0, t.forwardRef)(function (e, n) {
        var r = void 0 === e ? {} : e,
          a = r.className,
          i = r.tag,
          l = void 0 === i ? "div" : i,
          o = r.wrapperTag,
          s = void 0 === o ? "div" : o,
          u = r.children,
          c = r.onSwiper,
          d = tt(r, vt),
          f = !1,
          p = x((0, t.useState)("swiper"), 2),
          h = p[0],
          m = p[1],
          v = x((0, t.useState)(null), 2),
          g = v[0],
          y = v[1],
          b = x((0, t.useState)(!1), 2),
          w = b[0],
          S = b[1],
          A = (0, t.useRef)(!1),
          k = (0, t.useRef)(null),
          E = (0, t.useRef)(null),
          C = (0, t.useRef)(null),
          T = (0, t.useRef)(null),
          M = (0, t.useRef)(null),
          j = (0, t.useRef)(null),
          N = (0, t.useRef)(null),
          P = (0, t.useRef)(null),
          L = (function (e) {
            void 0 === e && (e = {});
            var t = { on: {} },
              n = {},
              r = {};
            rt(t, Ze.defaults),
              rt(t, Ze.extendedDefaults),
              (t._emitClasses = !0),
              (t.init = !1);
            var a = {},
              i = st.map(function (e) {
                return e.replace(/_/, "");
              });
            return (
              Object.keys(e).forEach(function (l) {
                i.indexOf(l) >= 0
                  ? nt(e[l])
                    ? ((t[l] = {}), (r[l] = {}), rt(t[l], e[l]), rt(r[l], e[l]))
                    : ((t[l] = e[l]), (r[l] = e[l]))
                  : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l]
                  ? (n["".concat(l[2].toLowerCase()).concat(l.substr(3))] =
                      e[l])
                  : (a[l] = e[l]);
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
              }),
              { params: t, passedParams: r, rest: a, events: n }
            );
          })(d),
          I = L.params,
          O = L.passedParams,
          z = L.rest,
          B = L.events,
          R = dt(u),
          D = R.slides,
          F = R.slots,
          Q = function () {
            S(!w);
          };
        Object.assign(I.on, {
          _containerClasses: function (e, t) {
            m(t);
          },
        });
        var V = function () {
          if (
            (Object.assign(I.on, B),
            (f = !0),
            (E.current = new Ze(I)),
            (E.current.loopCreate = function () {}),
            (E.current.loopDestroy = function () {}),
            I.loop && (E.current.loopedSlides = ut(D, I)),
            E.current.virtual && E.current.params.virtual.enabled)
          ) {
            E.current.virtual.slides = D;
            var e = {
              cache: !1,
              slides: D,
              renderExternal: y,
              renderExternalUpdate: !1,
            };
            rt(E.current.params.virtual, e),
              rt(E.current.originalParams.virtual, e);
          }
        };
        k.current || V(), E.current && E.current.on("_beforeBreakpoint", Q);
        return (
          (0, t.useEffect)(function () {
            return function () {
              E.current && E.current.off("_beforeBreakpoint", Q);
            };
          }),
          (0, t.useEffect)(function () {
            !A.current &&
              E.current &&
              (E.current.emitSlidesClasses(), (A.current = !0));
          }),
          pt(function () {
            if ((n && (n.current = k.current), k.current))
              return (
                E.current.destroyed && V(),
                (function (e, t) {
                  var n = e.el,
                    r = e.nextEl,
                    a = e.prevEl,
                    i = e.paginationEl,
                    l = e.scrollbarEl,
                    o = e.swiper;
                  at(t) &&
                    r &&
                    a &&
                    ((o.params.navigation.nextEl = r),
                    (o.originalParams.navigation.nextEl = r),
                    (o.params.navigation.prevEl = a),
                    (o.originalParams.navigation.prevEl = a)),
                    it(t) &&
                      i &&
                      ((o.params.pagination.el = i),
                      (o.originalParams.pagination.el = i)),
                    lt(t) &&
                      l &&
                      ((o.params.scrollbar.el = l),
                      (o.originalParams.scrollbar.el = l)),
                    o.init(n);
                })(
                  {
                    el: k.current,
                    nextEl: M.current,
                    prevEl: j.current,
                    paginationEl: N.current,
                    scrollbarEl: P.current,
                    swiper: E.current,
                  },
                  I
                ),
                c && c(E.current),
                function () {
                  E.current &&
                    !E.current.destroyed &&
                    E.current.destroy(!0, !1);
                }
              );
          }, []),
          pt(function () {
            !f &&
              B &&
              E.current &&
              Object.keys(B).forEach(function (e) {
                E.current.on(e, B[e]);
              });
            var e = (function (e, t, n, r) {
              var a = [];
              if (!t) return a;
              var i = function (e) {
                  a.indexOf(e) < 0 && a.push(e);
                },
                l = r.map(function (e) {
                  return e.key;
                }),
                o = n.map(function (e) {
                  return e.key;
                });
              return (
                l.join("") !== o.join("") && i("children"),
                r.length !== n.length && i("children"),
                st
                  .filter(function (e) {
                    return "_" === e[0];
                  })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (n) {
                    if (n in e && n in t)
                      if (nt(e[n]) && nt(t[n])) {
                        var r = Object.keys(e[n]),
                          a = Object.keys(t[n]);
                        r.length !== a.length
                          ? i(n)
                          : (r.forEach(function (r) {
                              e[n][r] !== t[n][r] && i(n);
                            }),
                            a.forEach(function (r) {
                              e[n][r] !== t[n][r] && i(n);
                            }));
                      } else e[n] !== t[n] && i(n);
                  }),
                a
              );
            })(O, C.current, D, T.current);
            return (
              (C.current = O),
              (T.current = D),
              e.length &&
                E.current &&
                !E.current.destroyed &&
                ft({
                  swiper: E.current,
                  slides: D,
                  passedParams: O,
                  changedParams: e,
                  nextEl: M.current,
                  prevEl: j.current,
                  scrollbarEl: P.current,
                  paginationEl: N.current,
                }),
              function () {
                B &&
                  E.current &&
                  Object.keys(B).forEach(function (e) {
                    E.current.off(e, B[e]);
                  });
              }
            );
          }),
          pt(
            function () {
              var e;
              !(e = E.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [g]
          ),
          t.createElement(
            l,
            gt(
              {
                ref: k,
                className: ot("".concat(h).concat(a ? " ".concat(a) : "")),
              },
              z
            ),
            t.createElement(
              mt.Provider,
              { value: E.current },
              F["container-start"],
              t.createElement(
                s,
                { className: "swiper-wrapper" },
                F["wrapper-start"],
                I.virtual
                  ? (function (e, n, r) {
                      if (!r) return null;
                      var a = e.isHorizontal()
                        ? me(
                            {},
                            e.rtlTranslate ? "right" : "left",
                            "".concat(r.offset, "px")
                          )
                        : { top: "".concat(r.offset, "px") };
                      return n
                        .filter(function (e, t) {
                          return t >= r.from && t <= r.to;
                        })
                        .map(function (n) {
                          return t.cloneElement(n, { swiper: e, style: a });
                        });
                    })(E.current, D, g)
                  : !I.loop || (E.current && E.current.destroyed)
                  ? D.map(function (e) {
                      return t.cloneElement(e, { swiper: E.current });
                    })
                  : (function (e, n, r) {
                      var a = n.map(function (n, r) {
                        return t.cloneElement(n, {
                          swiper: e,
                          "data-swiper-slide-index": r,
                        });
                      });
                      function i(e, n, a) {
                        return t.cloneElement(e, {
                          key: ""
                            .concat(e.key, "-duplicate-")
                            .concat(n, "-")
                            .concat(a),
                          className: ""
                            .concat(e.props.className || "", " ")
                            .concat(r.slideDuplicateClass),
                        });
                      }
                      if (r.loopFillGroupWithBlank) {
                        var l =
                          r.slidesPerGroup - (a.length % r.slidesPerGroup);
                        if (l !== r.slidesPerGroup)
                          for (var o = 0; o < l; o += 1) {
                            var s = t.createElement("div", {
                              className: ""
                                .concat(r.slideClass, " ")
                                .concat(r.slideBlankClass),
                            });
                            a.push(s);
                          }
                      }
                      "auto" !== r.slidesPerView ||
                        r.loopedSlides ||
                        (r.loopedSlides = a.length);
                      var u = ut(a, r),
                        c = [],
                        d = [];
                      return (
                        a.forEach(function (e, t) {
                          t < u && d.push(i(e, t, "prepend")),
                            t < a.length &&
                              t >= a.length - u &&
                              c.push(i(e, t, "append"));
                        }),
                        e && (e.loopedSlides = u),
                        [].concat(c, _(a), d)
                      );
                    })(E.current, D, I),
                F["wrapper-end"]
              ),
              at(I) &&
                t.createElement(
                  t.Fragment,
                  null,
                  t.createElement("div", {
                    ref: j,
                    className: "swiper-button-prev",
                  }),
                  t.createElement("div", {
                    ref: M,
                    className: "swiper-button-next",
                  })
                ),
              lt(I) &&
                t.createElement("div", {
                  ref: P,
                  className: "swiper-scrollbar",
                }),
              it(I) &&
                t.createElement("div", {
                  ref: N,
                  className: "swiper-pagination",
                }),
              F["container-end"]
            )
          )
        );
      });
      yt.displayName = "Swiper";
      var bt = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function wt() {
        return (
          (wt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          wt.apply(this, arguments)
        );
      }
      var xt = (0, t.forwardRef)(function (e, n) {
        var r = void 0 === e ? {} : e,
          a = r.tag,
          i = void 0 === a ? "div" : a,
          l = r.children,
          o = r.className,
          s = void 0 === o ? "" : o,
          u = r.swiper,
          c = r.zoom,
          d = r.virtualIndex,
          f = tt(r, bt),
          p = (0, t.useRef)(null),
          h = x((0, t.useState)("swiper-slide"), 2),
          m = h[0],
          v = h[1];
        function g(e, t, n) {
          t === p.current && v(n);
        }
        pt(function () {
          if ((n && (n.current = p.current), p.current && u)) {
            if (!u.destroyed)
              return (
                u.on("_slideClass", g),
                function () {
                  u && u.off("_slideClass", g);
                }
              );
            "swiper-slide" !== m && v("swiper-slide");
          }
        }),
          pt(
            function () {
              u && p.current && !u.destroyed && v(u.getSlideClasses(p.current));
            },
            [u]
          );
        var y = {
            isActive:
              m.indexOf("swiper-slide-active") >= 0 ||
              m.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: m.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              m.indexOf("swiper-slide-prev") >= 0 ||
              m.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              m.indexOf("swiper-slide-next") >= 0 ||
              m.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          b = function () {
            return "function" === typeof l ? l(y) : l;
          };
        return t.createElement(
          i,
          wt(
            {
              ref: p,
              className: ot("".concat(m).concat(s ? " ".concat(s) : "")),
              "data-swiper-slide-index": d,
            },
            f
          ),
          t.createElement(
            ht.Provider,
            { value: y },
            c
              ? t.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof c ? c : void 0,
                  },
                  b()
                )
              : b()
          )
        );
      });
      xt.displayName = "SwiperSlide";
      var St = [
          {
            avatar:
              "data:image/jpeg;base64,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",
            name: "Inna Boiko",
            review:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!",
          },
          {
            avatar:
              "data:image/jpeg;base64,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",
            name: "Inna Boiko",
            review:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!",
          },
          {
            avatar:
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYGBgYHBwYJCgkKCQ0MCwsMDRQODw4PDhQfExYTExYTHxshGxkbIRsxJiIiJjE4Ly0vOEQ9PURWUVZwcJYBBgYGBgYGBgcHBgkKCQoJDQwLCwwNFA4PDg8OFB8TFhMTFhMfGyEbGRshGzEmIiImMTgvLS84RD09RFZRVnBwlv/CABEIAJYAlgMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQMGBwIBCAD/2gAIAQEAAAAAomaIfJnT6usyGe/gjWLShQxfm7L0vJLK0qHUsP0WQKXoowYvzVmKjmRvZ1RoMbNrrN00GAYX5kzJREXYhYISxzpbV9AaPHEN8u5kr5YFhdKPeSW5+7bZ4TB8uZkti9E4/NZrmnprK7/Qx4L3B8wVj+gd2bSrcyU5rmtx3URZpORZet5lVltudNWqLJiulbqh9npGcgQ/jOWHugRVLTcg2q4K+ystzhZFFcPLja5rROMj1BXMqX5Zm4EfVlGN0HM9BslT3tjn68ZKlz4OHh9GPI1bdX/boKx70syDPhxBm+n5X06cc/RFo98psL757oXIo5+u5EM3c9bnoXtARK2+X0WaAew2rNufzq3v1txKMsVFzeltHJ43FAKOaTvixYNsvC/5n8iQiaBXki6awG2IyqoNBf2z53EmHE0cB6tKf1pxSRYTXLrIS5IYdcrV+hPZ5slV+hGkw//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/aAAgBAhAAAADr5hmUVbHjD1s7GfMMQtsG4y9bOWnBMVlbbAalXJWM80y+22R6liIzxGI2zbW2cRkdsJCZ6TumpE5QJw5OYFOj0N3UyxlHOsUbma0e1u11fnlE0lzK8Rbl7bdbBklEPHkkLCS9PZTUdpR1eZOWfVPmp3P1HoMZRFIW4Wcc9utcKbplHMr8qTTdTHk6Ix96UdVKcImiV6XJ3n+wkTXlnto8/TO3o0mlV5ITrYTWLWSW6+wr58n13Eg/XxLEq95DY9VOyRrHzoHZdZNj107dtz+QrsDv/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMAAQQFBgf/2gAIAQMQAAAAQySjtMlPulAAxzbGEaitT6FYAMc24JtAqhUCQoRfbJTJVXJZ51VAcZSFUqSFY55KO2SSW+9IYbLIqraTqkvfuuzx8m8YXT7dBt7g2ijRypjlU+3QD2tB7M+rm5M8gOjoLOpqIblZeQEoSp0BuvVqyPcnk56tEsnUDR6V7DTh5tvJd546qs9LXNnKSOkSLDTqApuJrrLkIcVMxi2g7fU4QzRp6npON4vC6qHuek7PF8/zmGy+92+zy/PeRy9H3/VxY/O4uewhy+46+7D0Mnmu9WrLg89l4rRXr9z3wzaHr810mozeZXw4N9v6SQc/c3P/AP/EACsQAAIDAAIBBAEDAwUAAAAAAAECAwQFBhEAEhMUIQcVFiIQIyQxMjM0Qv/aAAgBAQABBQCJfrfHVz+kQ7GeQr6Ch6lxOjJGPYyg8UR2dRrMPGsho5+OZKSPgZQHGkMeu48ceSDxh9qCE3P+yB4R9wDsQFle2vdCzSnn8+CGhr0GiT4qCzm7eZf8thC4iI8wAV1HHjjxx9MPtv8AZtgNZUeOPSYZEXyuyTNpWDWqfNp6M8pgSqbkiNZloPFWljyUyuZ6Ud7jvKcvVkyI/b1mA8YDx1HjIO5OgNv6sAdgg+VI1YVokhSw5D+7PFFQeZZpNGCGyl2pDPDfvOnzKUo4uUybvHNSnt2WPXhAIdO/GT7lBZdsEWEL9MXAzEDeWLVISz2UKwMixPI3uAhg7Kxp3ZqU9a/XJN961n8ZWLcr6DMIaDO0DeN348Rcbaei1/oj9elO/jM4J8CsxrZcs6vhW1SnxKGelqcWFaMho2VZ5UxNSz7GHz6rJmPz2mnl38h1hFjbF7WoqCRv9m8VJEiBRFFK9dwFaGIzPTzXc4uJ34mDB2MpPReyvWNXjyMXcqOLca1t8VkvS1ZYnUywP3xffxszKjI73h3fQOwt12SLLYgX4Er2cZA9qQ6U7mxv5T8S5Je103+Ya1KxW1+YXRnXNO8GUtN+Op4KHJREjmaJw0kThq2RQsQIfvbAOiAYzbcumYOxo0prRwqSG1f49fhlpYE5g/GmII9HlvEXbXr415bGDxKxnC/xN4JOAZkulnRqjNLWBLxeqSqEirADvdBF9UcGwD6Kkc7HFinV6yCnJmbEsh0Jwc7je3xjKfQ1sHQMFmmFsaIYcQyJW10ggigSKqF+JWZNBKiKiUwo79e/0L6SAi2pSLMH3FOYDHJJNTzZPRLZeCbOTjVuObivEFpXdkBoaE+hPZxcyzRpSgGCSpUZbFOOQTY47jz09Qf+W0vqvRKrC2e1ze/UXCGox+IkxhlexpyvSyLU6jJ+MPdlz3/G1EvfZy6mIvGeNEAcbUNJgAiTi8LMPp9tur8QJSX+C0Z5Y5XneXzfiSjwaeUs8aTkVM6eyYMrRheSm8EvEoY4OOu5RIfsTS1q8V3lsCSjlhC09OjeiD/z2SBpKR1cBMWb/wA192V+R9fsa4AWhtPEKuq8fickmCZyT2LPF92CExS17kQYwpPryzWdNUlWK2/fyo4/BKPc2GP6ioDJbdRXyh6pny55JfaTG47XYyV2Udw1Y5DTrhGpBIxxjRA5W9i1g78H5K1Ioc4TaTqFkn/SaSpzvPpVagQs+uAL9LF0LMUXHMgFpIaMfG6UfJN3muvJo0qzFYT0RXVCIpUXz9QZF4SjmDmYNTliLFBPxrVnxdXP5OUuR6tbSr2q1CykQZgiUY5rd0qz27Ezzn1Px4rkcJ5lUEOnYxLNFK4DuHSF6WdYtjVpR5dLi0XscZ5wIhy2tOlnLnVxBn6Jnr0NR1lj22CNfczWJJGaV+/CfSOyAEP7Z1h8zn87ojnNqSSx060LVqVmc8krRQVc0ipwXV05tDRz3KvU/ujGsOoeyA0euqKsrtIztJExPcjHv/zZRFer/k83+MPQ+dWBhrop+x5y6QBItO1JnyqLEkBK30cppU26lmkbuCxOr//EADkQAAICAQMCBAIIBQIHAAAAAAECAAMRBBIhMUEFE1FhInEGEBQyQlKBsSAjcpHBB6IkM1RiobKz/9oACAEBAAY/AMeqy0ejH+DB6HM0BA6KZX/XDnjiGwcMGyCJpqTqmKM6gyovpyxKAkkwgaaZGlXgytR0CEQ/wHnB2mOSc5Y/wLj3nhxP5JV5Ve7Ng5BAwIubFw2BkHIAPGYRlACFwAwIxNNcdTTsVwzEOBgA8kyqrSalLWCqCqsMg4iknhvu46nEYZPIleeoBEP1H6ifRTHI7t9fMXZnjM8L23oGFeShQPkg8A/llNoe2t0AGwqAGEAa6trShzUrHcT/AJHXIi1FhRptoAYVEke4J+csNT2WIzpgFAHyTlunGJZbptRqFFiAOzAkBfvYBHyxKrr7G1NwOHd3Bwg4KifYq9W7Xbd4W1MEAnlAfaVA9wT/AA49Qwlg/wC6ZAMOQYciMQQrkHaShIU5xlpallalzwXBwMDCn9ZWaLEUgknCEWAZx8RPaed5iqR8CuwJwT7DOZtamqysAr5altnPJB+Zllw0VDJYWIoJJRQRx78RX0mq2vVXsKAbgyE8g57TR0UaNEsJ23EsNuMY4I6SvVlmtrUBrEBCvg8gc4lOu0i2CsO9eLFKsGE5MyD9YAPdpaM9HnDGMC39xGY/dXrC/l+YWUbkZiMf27z4/hDEjarZYgepEByFtAyfiAPAwMg9YWUkEnIwekyW5znnmEyu6psFSTgjIII/zADRWNxAIAA6mV31BlrIIww5K9CD7GWPbqGTTBl8ug8gOerAzKIWPoODMuhXn61APO5v1l6kdHij2hEYhyMNnA4JzCQxMzOBCSJvVN2SJQ70gWFBujNSCGGTMEEGC7AKIoySxySB+/EWqm+wXptFS7/gI5HwY5zNKmvovXWpXi2t1+PK5Xf8mmE0F549J/w+lsFmfxLgRNUmkBViQISOoLGXk92E4hxHFKk/F8QB5IhHpxFQdzAFTuO0UHb07iYKDgzJUcZHGBCBV65IGZYQgDAHqMCWV++CT1ABlw8Ov04er4yj2bXBHQ/KIfEhWNTtAYoByAMAn5zIbnp1mNsq02r1lddik5RjD3+/Lx7iAYiuSMGOB0PHBxHrrztAGMwAjopMKpqUoUHCqHxA412R/XkSyl2zcq8x9Npiiuo7w22eJrXV6kkAS7S6002qanNdqMC3H7iBByWbA9yZUmt1SVYR0UYJFrOMKgMJYEGWA1ZIb1gArIwI1tun3vvxmH5vLs+0DKQTMGP7GYqqQ7eXc43BRMrYT8LI2VIwTBYi2WIT0RSZeDoNWxYAebb8K1+4msdjyVAxNffTU7lmV8ZwWwOkb7HX4tXYxOEwSqk/uBPtOqsUsy8qE2YJ9pqU0er+06mitr7aQmClS9Wz3IlHjHiHk26nTVvpqHCfEqZywszwX9GlbPW5JPHtLn+zOQHA69Y1ZrZVCZJM2Bvx+ohHqzy0E+kyDMkxvLsKy82vu+AxCSQNoFY6AgcsRFQhSAflkSxsqPhxk9ATNNSniIdwuLHKY3N3MF2j8QpstrPx155ZD/kTKhAQMgmMtjIBjAx3Mu1NyZ8mq9VcgEslrg4eNXTUldYXAVFCqPkBK/5teFJ/EOIw86jls43CWONRUeAPviJjU0j4em4Q/NpYT6CY5mSI8uIGSUmnILECx94wCPQEekAJxzH04tJZ0Ilj1+ZweSOpEr8T1KuxCnCYJAJ7mO+ksKsvVTHQI19gBKVKCxZuwlr6u1m1F5Q2AgAIE4VFA7CWjH4TMhwpVv7xUpwHJyWMcW6hV3LhQBGrNmCnfHWH+oxycdBOwhGe0sHylhJAGyKSpCmw8kcGZMDJqxVW2BvUEkTzB4+UszwW7/8AkRdv0p1Rt7pRwST75MYHxC7UM4O42EEgy/xBgSlClA2MA2vCAsdC2MjEJOuUgn8sONcOnHETfrgQvtC32w8+0OPzGMAOqiDEYHnMcpWGJlhur2YXoOcz6M216VGazBMUtXtLAcDtifB0/cQAvXX7NkzbUlSg87xF827c7HA9szw1EUADeT7ktDxkngQ5jWO3SAafTscHvGN+iIT1BgNVnzB6ie+6KB+WZIgYAASw/KKq8bln0TUMC21OIwxyvB9iIQTxAcg/rNiDc8GovfJJ/QSzwvUMFVNMupR8dAWKuD7DGYbNPqK7VXIJRgcEcEH0jEjoMy5jUWXkBM8DBiWJSVsycxUuVmRTkcQWrtXcMYhHuID7CZJhUmOBknAwByYr6hDVWEzucYJB9BBq7vNZzS7aOuw5KoSE85/Ytwi/MxSxOSWJ/UwiEntz84CBAZfqcKy6emirkZBD3V1uP1FhE8Ro0FjJfprbBWdxxYKTja3rlTn5iJfrNJTq9Mw5ZF8qxfzLxwWEt1eltW2iwlkK9QD2I6gyvT3lq3JxyIVLMVK4YhOTNB9kNgBs5GICD1IgBPaBlQVVEZ8y3Kgj2HUxRqNRbqHA6FvKQn98TZQ2j0qYORTUCT82aU6MmwafLWX2McEVJyx9s9JXqEwlGt1Nj01gYC6bSDyKAB2xloo9CRMiAkz4Vx7mYRSzHgKBkkzxbVvy2dFk+9usR/2WeKXp1q1a2Y9Qy8zUaZznSald3sp6hhLNC1x8tzmt1b+xBlT69K9RlNlV5AB/paWDTWojKcOjLh0PusRdSQ23kHbGcD4awGY+ghveuvzsA72AYrn0jNXebOxzziZNkFYYsfxNmfSbxfpbqWGio9gepH954T4N30nh+motA7O+bHP+6OdpentYvIHs3oY1Z6/uJsLf5JgLA0oRw1gIJHsvUx9tbq1lZDMWBtcH/wBVmos73+NeHUfpTl/8zxAMRhraSf0QSnf/AMyhGTjuOkp1SMf5N7L8h6QBxuVgNwiVvbi1V/kW5wWT8jTFrRl7BVHHHQw7j+IQjMJjsPQ4n0E0v4dT4q7svqBaUniBL/duPJH5ExCr1Gp+m4YAP+DDc2n0tjBjljWQf9sBSulfZECkfqeYTXWqJt+KxhktiXsSWsIwWb1PpPD9X5ZYJ9IEtI9Qiy/V3sDbfqBY/oMtma+k9rDPFdIx6gOvzEasnpBlsYOQfQwBiS3eHMLnrx9QH1f6UUDhcbz7kmtp44zf9Rqv/piNWdu0r0xFzRWc47cQMtVQ5BGEHSHt8I6dxFV8nL/sZo9DZax0dTM9dAOFDOeWb1aVkItaNYcBfb1mr9zzLsfirMP1HyyM479MCf/EAC4RAAICAQQABAQFBQAAAAAAAAABAgMSEBEiMgQTISMgQkNTFDEzUmNEYnKCsv/aAAgBAgEBPwAfb4GuRU+VhMl1KSSN5ZGUhMq7C0Wr1RI8OuVhNjsjjiVSx7DsibSy0iV9haLRj1RNlP1NNtX2GhEOwhabjJ6omshaLVaMh2Ebm5uMnqmb6L4mV9hI2FoywYvg3JXCuiO6WRHxH7hPLWK8w8kVQ4xT20notESeMScxuUtdyq3EWkHLHkbxExwm3uvy0s0SIo2LnxE64m9cvplteMiFcZdhuuP0ySrlyiIXYcpGQmOUt9LNEQJvGRdPiQtiO4sl5nlkbfL4jujiSlyKrsvpifIeQnL7gshv10sGxMSLlyJDWJ2F2J4yN4xFLKRRylYIdVn3DybPuEabPuHlW/c0noiBe/crJVS7RLCJ5vElLKOIyMf2lcPLiI3Iy5CiNeulmiIniVlKsr6ko/KRVfzHtjdZLGX0yiPLLTY8080XiZRPxktJ6ITLHLIipRiTfuWG8RyiOURPIqfE3G+JFylLifhrJfUJRsjxMpL00nrAtXIh1Jv3BxyHAdRJx6lMuIsZDRUo19axyJLzIjrknsbk9EQLro5cfU5SjyJLGQhyJSGUdhry5cReIl83qQ8TTjXiXVRlHKJFE6o5s2Jkrq4j8RZLr6Dyl2Kq8pYm+XImuWjGhQykLtZ/p/0XfqWaf3FXjLIxxl6kLa7Ouk7o19i26y7/ABEta+NNkjH3K4ltcoyH+42yI0WSFVGuJHrZP+SJf+pYMgbCYr7diTyllL4Uvb8OV8vEjxHVGQq4x6mxdxrsE8aMv5Byyllo/pjNjYaXwr+nKf17NNkJLTxL9sbfXfiIR8uiS0//xABDEQABAwIEAgYFBwkJAAAAAAACAAEDBBIQESIyBRMhI0JDUlMGIDEzURQkQWJyobFjcYKSo7LC0fAVNERhkaLB0uH/2gAIAQMBAT8ATeoymbTGgQblJtTSYu6NOnxZNi6ZT7Y0ApobSuUsdyaEk7acHRp0+LJvUFlJ3azwzTrspnRCKLbjkskyHdi6HanwZZ6lmtRLNM2lG1o24ZLJZIUO7HL1M8c1mmdTNpwzxZ0O6T1skMBEnpiQ0w26lLSDbpTtbhnpRsUfd6VzVzExFlgHqOha4kESERtWWGSmguT4HbdpVv5NOyYmZrX9uEe7B07p1T7kQzSd5kspo+8UEvMHUppiHSKZqku8UTzDpl2p0+1Mydk7K0cI92JMmbSoIbSUtOSCm+0oQ5YyEpIeZqTU5CVwySIRtFTU3LG7mIkLCnYfLTsN3u8HUe5MnToE+6MkB3J1yrht5nSo4pB3exOxJxERVbaNNH4sGkFMY+WnMbvdq4cI92DolE2lBNcMYkgdO1woachK4UEVpXLPSiLxKpn5xfVwyThpTlqWeANg6PaoX0qRCXaWcl3vEEBEP94RQkP+IW3vM1WSWx24MmYVpTjH5asj8vAd3qCyMhIYxUXu401yESJMBCnFVbddIstKHcnYUxCPdprVaL9OA7sSQ7UXdimAo44xJMSGVc5AxXXKo4eVRBHUwbuZyj/hU0M9LpnjKP7SZ0WrcmZbVmKyTbkydO12kVQcCraobpY+RF4z/wCBTvSUJcikj937yYt13hb4JjKTUX04CAkgFCox5nDKiLzCP9mDmP3sg5fEKen5kemaC63s3ZNn+Kq/RWgIZDgklhf9dlXcIr6OT5zs7Eg7VBMQlyiRS2ppiyWaz1Ki4FxGsG4Y+WHjl0/cqf0XooxunklmL9QVFT01GPVxxwt/X0riHFBhp6iWLdtj+sXxTjyYJB7QR6vtHqJRPpwFM6eW0VE1tFwse0ccx/sy/muFdZwfh8vajH/x/uTsmYeZJRy9Paj+z8FX+jNNN1tN1J+DsqsoKuhLr49Pmdn/AFwoeHVfEpLYI9Pbk7IrhnA6Lh43cvmTeYX8LIpR/OnnmkLT0KfUXKH9NVpfKOI0cHYj63+SeS+lq5fMI/8AqgcS0oX1Wq61PPGKvKRS6aunj8qgm/C1ejzl/YtHd/n+8qMuZBTl/WlVLaY6ke5n/wBq3alPBGQyDy8wfeCqPR2mORjhZxZ26Rb2MoCjpS+TQR5AAqoIu34lISd7RuTvpkL6qc/ndeXgjUvV8MjTXJjJOZEndULcyppx/KMmbncaqIB+mgtVsdLHT00e0LB/RVC9pVEXgn/eUXWT8UpiVMRFHaX0J3WSCplObVkjM5Ke53yLoRu9ylM88s+hP7tE78zi/wAen7mVb0UFPl9X8E6zdO7plwOFp6kJHJ2aKRrx+P5lRwQgTT8ob5BbM/aTs3xzUw8+WJsmFnkfK3o9nxUPRW1mSzceM1GXlKHdIpE5nm/Sv//Z",
            name: "Inna Boiko",
            review:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!",
          },
          {
            avatar:
              "data:image/jpeg;base64,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",
            name: "Inna Boiko",
            review:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!",
          },
        ],
        At = function () {
          return (0, a.jsxs)("section", {
            id: "testimonials",
            children: [
              (0, a.jsx)("h5", { children: "Review from clients" }),
              (0, a.jsx)("h2", { children: "Testimonials" }),
              (0, a.jsx)(yt, {
                className: "container testimonials__container",
                modules: [et],
                spaceBetween: 40,
                slidesPerView: 1,
                navigation: !0,
                pagination: { clickable: !0 },
                children: St.map(function (e, t) {
                  var n = e.avatar,
                    r = e.name,
                    i = e.review;
                  return (0,
                  a.jsxs)(xt, { className: "testimonial", children: [(0, a.jsx)("div", { className: "client__avatar", children: (0, a.jsx)("img", { src: n, alt: "Avatar" }) }), (0, a.jsx)("h5", { className: "client__name", children: r }), (0, a.jsx)("small", { className: "client__review", children: i })] }, t);
                }),
              }),
            ],
          });
        };
      function kt(e) {
        return d({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
            {
              tag: "path",
              attr: {
                d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z",
              },
            },
          ],
        })(e);
      }
      function Et(e) {
        return d({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "desc", attr: {}, child: [] },
            {
              tag: "path",
              attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            {
              tag: "path",
              attr: { d: "M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" },
            },
          ],
        })(e);
      }
      var Ct = function () {
          return (0, a.jsxs)("section", {
            id: "contact",
            children: [
              (0, a.jsx)("h5", { children: "Get In Touch" }),
              (0, a.jsx)("h2", { children: "Contact Me" }),
              (0, a.jsxs)("div", {
                className: "container contact__container",
                children: [
                  (0, a.jsxs)("div", {
                    className: "contact__options",
                    children: [
                      (0, a.jsxs)("article", {
                        className: "contact__option",
                        children: [
                          (0, a.jsx)(kt, { className: "contact__option-icon" }),
                          (0, a.jsx)("h4", { children: "Email" }),
                          (0, a.jsx)("h5", { children: "Help@help.com" }),
                          (0, a.jsx)("a", {
                            href: "mailto:help@help.com",
                            children: "Send massage",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("article", {
                        className: "contact__option",
                        children: [
                          (0, a.jsx)(M, { className: "contact__option-icon" }),
                          (0, a.jsx)("h4", { children: "Messenger" }),
                          (0, a.jsx)("h5", { children: "Oleksii Shved" }),
                          (0, a.jsx)("a", {
                            href: "https://www.facebook.com/profile.php?id=100011448066049",
                            target: "_blank",
                            children: "Send massage",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("article", {
                        className: "contact__option",
                        children: [
                          (0, a.jsx)(Et, { className: "contact__option-icon" }),
                          (0, a.jsx)("h4", { children: "Telegram" }),
                          (0, a.jsx)("h5", { children: "+380634092070" }),
                          (0, a.jsx)("a", {
                            href: "https://t.me/LLlBeg",
                            target: "_blank",
                            children: "Send massage",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("form", {
                    action: "",
                    children: [
                      (0, a.jsx)("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Your Full Name",
                        required: !0,
                      }),
                      (0, a.jsx)("input", {
                        type: "email",
                        name: "email",
                        placeholder: '"Your Email',
                        required: !0,
                      }),
                      (0, a.jsx)("textarea", {
                        name: "message",
                        rows: "7",
                        placeholder: "Your Massage require",
                      }),
                      (0, a.jsx)("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        children: "Send Message",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Tt = function () {
          return (0, a.jsxs)("footer", {
            children: [
              (0, a.jsx)("a", {
                href: "#",
                className: "footer__logo",
                children: "Shved",
              }),
              (0, a.jsxs)("ul", {
                className: "permalinks",
                children: [
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)("a", { href: "#", children: "Home" }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)("a", {
                      href: "#about",
                      children: "About",
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)("a", {
                      href: "#experience",
                      children: "Experience",
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)("a", {
                      href: "#services",
                      children: "Services",
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)("a", {
                      href: "#portfolio",
                      children: "Portfolio",
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)("a", {
                      href: "#testimonials",
                      children: "Testimonials",
                    }),
                  }),
                  (0, a.jsxs)("li", {
                    children: [
                      (0, a.jsx)("a", { href: "#contact" }),
                      "Contact",
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "footer__socials",
                children: [
                  (0, a.jsx)("a", {
                    href: "https://facebook.com",
                    children: (0, a.jsx)(P, {}),
                  }),
                  (0, a.jsx)("a", {
                    href: "https://linkedIn.com",
                    children: (0, a.jsx)(m, {}),
                  }),
                  (0, a.jsx)("a", {
                    href: "https://github.com",
                    children: (0, a.jsx)(h, {}),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "footer__copyright",
                children: (0, a.jsx)("small", {
                  children: "All right reserved",
                }),
              }),
            ],
          });
        },
        Mt = function () {
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(y, {}),
              (0, a.jsx)(j, {}),
              (0, a.jsx)(z, {}),
              (0, a.jsx)(B, {}),
              (0, a.jsx)(R, {}),
              (0, a.jsx)(F, {}),
              (0, a.jsx)(At, {}),
              (0, a.jsx)(Ct, {}),
              (0, a.jsx)(Tt, {}),
            ],
          });
        };
      e.render((0, a.jsx)(Mt, {}), document.querySelector("#root"));
    })();
})();
//# sourceMappingURL=main.ba3c3385.js.map
