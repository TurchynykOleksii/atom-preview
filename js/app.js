/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    s = Object.getPrototypeOf,
    i = n.slice,
    r = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    a = n.push,
    o = n.indexOf,
    l = {},
    d = l.toString,
    c = l.hasOwnProperty,
    p = c.toString,
    u = p.call(Object),
    f = {},
    h = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    m = function (e) {
      return null != e && e === e.window;
    },
    g = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var s,
      i,
      r = (n = n || g).createElement("script");
    if (((r.text = e), t))
      for (s in v)
        (i = t[s] || (t.getAttribute && t.getAttribute(s))) &&
          r.setAttribute(s, i);
    n.head.appendChild(r).parentNode.removeChild(r);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[d.call(e)] || "object"
      : typeof e;
  }
  var w = "3.6.0",
    x = function (e, t) {
      return new x.fn.init(e, t);
    };
  function E(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !h(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (x.fn = x.prototype =
    {
      jquery: w,
      constructor: x,
      length: 0,
      toArray: function () {
        return i.call(this);
      },
      get: function (e) {
        return null == e
          ? i.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = x.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return x.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          x.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(i.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          x.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          x.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (x.extend = x.fn.extend =
      function () {
        var e,
          t,
          n,
          s,
          i,
          r,
          a = arguments[0] || {},
          o = 1,
          l = arguments.length,
          d = !1;
        for (
          "boolean" == typeof a && ((d = a), (a = arguments[o] || {}), o++),
            "object" == typeof a || h(a) || (a = {}),
            o === l && ((a = this), o--);
          o < l;
          o++
        )
          if (null != (e = arguments[o]))
            for (t in e)
              (s = e[t]),
                "__proto__" !== t &&
                  a !== s &&
                  (d && s && (x.isPlainObject(s) || (i = Array.isArray(s)))
                    ? ((n = a[t]),
                      (r =
                        i && !Array.isArray(n)
                          ? []
                          : i || x.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = x.extend(d, r, s)))
                    : void 0 !== s && (a[t] = s));
        return a;
      }),
    x.extend({
      expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== d.call(e) ||
          ((t = s(e)) &&
            ("function" !=
              typeof (n = c.call(t, "constructor") && t.constructor) ||
              p.call(n) !== u))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          s = 0;
        if (E(e))
          for (n = e.length; s < n && !1 !== t.call(e[s], s, e[s]); s++);
        else for (s in e) if (!1 === t.call(e[s], s, e[s])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (E(Object(e))
              ? x.merge(n, "string" == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : o.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, s = 0, i = e.length; s < n; s++) e[i++] = t[s];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var s = [], i = 0, r = e.length, a = !n; i < r; i++)
          !t(e[i], i) !== a && s.push(e[i]);
        return s;
      },
      map: function (e, t, n) {
        var s,
          i,
          a = 0,
          o = [];
        if (E(e))
          for (s = e.length; a < s; a++)
            null != (i = t(e[a], a, n)) && o.push(i);
        else for (a in e) null != (i = t(e[a], a, n)) && o.push(i);
        return r(o);
      },
      guid: 1,
      support: f,
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = (function (e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o,
      l,
      d,
      c,
      p,
      u,
      f,
      h,
      m,
      g,
      v,
      y,
      b,
      w = "sizzle" + 1 * new Date(),
      x = e.document,
      E = 0,
      T = 0,
      C = le(),
      S = le(),
      $ = le(),
      M = le(),
      k = function (e, t) {
        return e === t && (p = !0), 0;
      },
      P = {}.hasOwnProperty,
      L = [],
      A = L.pop,
      D = L.push,
      O = L.push,
      I = L.slice,
      z = function (e, t) {
        for (var n = 0, s = e.length; n < s; n++) if (e[n] === t) return n;
        return -1;
      },
      N =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      j = "[\\x20\\t\\r\\n\\f]",
      H =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        j +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      q =
        "\\[" +
        j +
        "*(" +
        H +
        ")(?:" +
        j +
        "*([*^$|!~]?=)" +
        j +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        H +
        "))|)" +
        j +
        "*\\]",
      B =
        ":(" +
        H +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        q +
        ")*)|.*)\\)|)",
      _ = new RegExp(j + "+", "g"),
      R = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
      W = new RegExp("^" + j + "*," + j + "*"),
      X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
      G = new RegExp(j + "|>"),
      F = new RegExp(B),
      Y = new RegExp("^" + H + "$"),
      V = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + q),
        PSEUDO: new RegExp("^" + B),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            j +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            j +
            "*(?:([+-]|)" +
            j +
            "*(\\d+)|))" +
            j +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + N + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            j +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            j +
            "*((?:-\\d)?\\d*)" +
            j +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      U = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        u();
      },
      ae = we(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((L = I.call(x.childNodes)), x.childNodes),
        L[x.childNodes.length].nodeType;
    } catch (t) {
      O = {
        apply: L.length
          ? function (e, t) {
              D.apply(e, I.call(t));
            }
          : function (e, t) {
              for (var n = e.length, s = 0; (e[n++] = t[s++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, s, i) {
      var r,
        o,
        d,
        c,
        p,
        h,
        v,
        y = t && t.ownerDocument,
        x = t ? t.nodeType : 9;
      if (
        ((s = s || []),
        "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
      )
        return s;
      if (!i && (u(t), (t = t || f), m)) {
        if (11 !== x && (p = Z.exec(e)))
          if ((r = p[1])) {
            if (9 === x) {
              if (!(d = t.getElementById(r))) return s;
              if (d.id === r) return s.push(d), s;
            } else if (y && (d = y.getElementById(r)) && b(t, d) && d.id === r)
              return s.push(d), s;
          } else {
            if (p[2]) return O.apply(s, t.getElementsByTagName(e)), s;
            if (
              (r = p[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(s, t.getElementsByClassName(r)), s;
          }
        if (
          n.qsa &&
          !M[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== x || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === x && (G.test(e) || X.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                ((c = t.getAttribute("id"))
                  ? (c = c.replace(se, ie))
                  : t.setAttribute("id", (c = w))),
                o = (h = a(e)).length;
              o--;

            )
              h[o] = (c ? "#" + c : ":scope") + " " + be(h[o]);
            v = h.join(",");
          }
          try {
            return O.apply(s, y.querySelectorAll(v)), s;
          } catch (t) {
            M(e, !0);
          } finally {
            c === w && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(R, "$1"), t, s, i);
    }
    function le() {
      var e = [];
      return function t(n, i) {
        return (
          e.push(n + " ") > s.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      };
    }
    function de(e) {
      return (e[w] = !0), e;
    }
    function ce(e) {
      var t = f.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function pe(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) s.attrHandle[n[i]] = t;
    }
    function ue(e, t) {
      var n = t && e,
        s =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (s) return s;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function me(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return de(function (t) {
        return (
          (t = +t),
          de(function (n, s) {
            for (var i, r = e([], n.length, t), a = r.length; a--; )
              n[(i = r[a])] && (n[i] = !(s[i] = n[i]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = oe.support = {}),
    (r = oe.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !U.test(t || (n && n.nodeName) || "HTML");
      }),
    (u = oe.setDocument =
      function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : x;
        return (
          a != f &&
            9 === a.nodeType &&
            a.documentElement &&
            ((h = (f = a).documentElement),
            (m = !r(f)),
            x != f &&
              (i = f.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", re, !1)
                : i.attachEvent && i.attachEvent("onunload", re)),
            (n.scope = ce(function (e) {
              return (
                h.appendChild(e).appendChild(f.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = J.test(f.getElementsByClassName)),
            (n.getById = ce(function (e) {
              return (
                (h.appendChild(e).id = w),
                !f.getElementsByName || !f.getElementsByName(w).length
              );
            })),
            n.getById
              ? ((s.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (s.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((s.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (s.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n,
                      s,
                      i,
                      r = t.getElementById(e);
                    if (r) {
                      if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
                      for (i = t.getElementsByName(e), s = 0; (r = i[s++]); )
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                    }
                    return [];
                  }
                })),
            (s.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    s = [],
                    i = 0,
                    r = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = r[i++]); ) 1 === n.nodeType && s.push(n);
                    return s;
                  }
                  return r;
                }),
            (s.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (g = []),
            (n.qsa = J.test(f.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + j + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + j + "*(?:value|" + N + ")"),
                  e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                  (t = f.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    g.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + w + "+*").length ||
                    g.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  g.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + j + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (n.matchesSelector = J.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ce(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", B);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = J.test(h.compareDocumentPosition)),
            (b =
              t || J.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      s = t && t.parentNode;
                    return (
                      e === s ||
                      !(
                        !s ||
                        1 !== s.nodeType ||
                        !(n.contains
                          ? n.contains(s)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(s))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (k = t
              ? function (e, t) {
                  if (e === t) return (p = !0), 0;
                  var s =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    s ||
                    (1 &
                      (s =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === s)
                      ? e == f || (e.ownerDocument == x && b(x, e))
                        ? -1
                        : t == f || (t.ownerDocument == x && b(x, t))
                        ? 1
                        : c
                        ? z(c, e) - z(c, t)
                        : 0
                      : 4 & s
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (p = !0), 0;
                  var n,
                    s = 0,
                    i = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    o = [t];
                  if (!i || !r)
                    return e == f
                      ? -1
                      : t == f
                      ? 1
                      : i
                      ? -1
                      : r
                      ? 1
                      : c
                      ? z(c, e) - z(c, t)
                      : 0;
                  if (i === r) return ue(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) o.unshift(n);
                  for (; a[s] === o[s]; ) s++;
                  return s
                    ? ue(a[s], o[s])
                    : a[s] == x
                    ? -1
                    : o[s] == x
                    ? 1
                    : 0;
                })),
          f
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        (u(e),
        n.matchesSelector &&
          m &&
          !M[t + " "] &&
          (!v || !v.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var s = y.call(e, t);
          if (
            s ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return s;
        } catch (e) {
          M(t, !0);
        }
      return 0 < oe(t, f, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) != f && u(e), b(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) != f && u(e);
      var i = s.attrHandle[t.toLowerCase()],
        r = i && P.call(s.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
      return void 0 !== r
        ? r
        : n.attributes || !m
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + "").replace(se, ie);
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        s = [],
        i = 0,
        r = 0;
      if (
        ((p = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(k),
        p)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (i = s.push(r));
        for (; i--; ) e.splice(s[i], 1);
      }
      return (c = null), e;
    }),
    (i = oe.getText =
      function (e) {
        var t,
          n = "",
          s = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[s++]); ) n += i(t);
        return n;
      }),
    ((s = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: de,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    F.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = C[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) &&
                C(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (s) {
              var i = oe.attr(s, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && -1 < i.indexOf(n)
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + i.replace(_, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, s, i) {
            var r = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              o = "of-type" === t;
            return 1 === s && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var d,
                    c,
                    p,
                    u,
                    f,
                    h,
                    m = r !== a ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = o && t.nodeName.toLowerCase(),
                    y = !l && !o,
                    b = !1;
                  if (g) {
                    if (r) {
                      for (; m; ) {
                        for (u = t; (u = u[m]); )
                          if (
                            o
                              ? u.nodeName.toLowerCase() === v
                              : 1 === u.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                      for (
                        b =
                          (f =
                            (d =
                              (c =
                                (p = (u = g)[w] || (u[w] = {}))[u.uniqueID] ||
                                (p[u.uniqueID] = {}))[e] || [])[0] === E &&
                            d[1]) && d[2],
                          u = f && g.childNodes[f];
                        (u = (++f && u && u[m]) || (b = f = 0) || h.pop());

                      )
                        if (1 === u.nodeType && ++b && u === t) {
                          c[e] = [E, f, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = f =
                          (d =
                            (c =
                              (p = (u = t)[w] || (u[w] = {}))[u.uniqueID] ||
                              (p[u.uniqueID] = {}))[e] || [])[0] === E && d[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (u = (++f && u && u[m]) || (b = f = 0) || h.pop()) &&
                        ((o
                          ? u.nodeName.toLowerCase() !== v
                          : 1 !== u.nodeType) ||
                          !++b ||
                          (y &&
                            ((c =
                              (p = u[w] || (u[w] = {}))[u.uniqueID] ||
                              (p[u.uniqueID] = {}))[e] = [E, b]),
                          u !== t));

                      );
                    return (b -= i) === s || (b % s == 0 && 0 <= b / s);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                s.pseudos[e] ||
                s.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return i[w]
              ? i(t)
              : 1 < i.length
              ? ((n = [e, e, "", t]),
                s.setFilters.hasOwnProperty(e.toLowerCase())
                  ? de(function (e, n) {
                      for (var s, r = i(e, t), a = r.length; a--; )
                        e[(s = z(e, r[a]))] = !(n[s] = r[a]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: de(function (e) {
            var t = [],
              n = [],
              s = o(e.replace(R, "$1"));
            return s[w]
              ? de(function (e, t, n, i) {
                  for (var r, a = s(e, null, i, []), o = e.length; o--; )
                    (r = a[o]) && (e[o] = !(t[o] = r));
                })
              : function (e, i, r) {
                  return (t[0] = e), s(t, null, r, n), (t[0] = null), !n.pop();
                };
          }),
          has: de(function (e) {
            return function (t) {
              return 0 < oe(e, t).length;
            };
          }),
          contains: de(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || i(t)).indexOf(e);
              }
            );
          }),
          lang: de(function (e) {
            return (
              Y.test(e || "") || oe.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = m
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !s.pseudos.empty(e);
          },
          header: function (e) {
            return Q.test(e.nodeName);
          },
          input: function (e) {
            return K.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ge(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ge(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ge(function (e, t, n) {
            for (var s = n < 0 ? n + t : t < n ? t : n; 0 <= --s; ) e.push(s);
            return e;
          }),
          gt: ge(function (e, t, n) {
            for (var s = n < 0 ? n + t : n; ++s < t; ) e.push(s);
            return e;
          }),
        },
      }).pseudos.nth = s.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      s.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) s.pseudos[t] = he(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, s = ""; t < n; t++) s += e[t].value;
      return s;
    }
    function we(e, t, n) {
      var s = t.dir,
        i = t.next,
        r = i || s,
        a = n && "parentNode" === r,
        o = T++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[s]); ) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, l) {
            var d,
              c,
              p,
              u = [E, o];
            if (l) {
              for (; (t = t[s]); )
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
            } else
              for (; (t = t[s]); )
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (p = t[w] || (t[w] = {}))[t.uniqueID] ||
                      (p[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[s] || t;
                  else {
                    if ((d = c[r]) && d[0] === E && d[1] === o)
                      return (u[2] = d[2]);
                    if (((c[r] = u)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return 1 < e.length
        ? function (t, n, s) {
            for (var i = e.length; i--; ) if (!e[i](t, n, s)) return !1;
            return !0;
          }
        : e[0];
    }
    function Ee(e, t, n, s, i) {
      for (var r, a = [], o = 0, l = e.length, d = null != t; o < l; o++)
        (r = e[o]) && ((n && !n(r, s, i)) || (a.push(r), d && t.push(o)));
      return a;
    }
    function Te(e, t, n, s, i, r) {
      return (
        s && !s[w] && (s = Te(s)),
        i && !i[w] && (i = Te(i, r)),
        de(function (r, a, o, l) {
          var d,
            c,
            p,
            u = [],
            f = [],
            h = a.length,
            m =
              r ||
              (function (e, t, n) {
                for (var s = 0, i = t.length; s < i; s++) oe(e, t[s], n);
                return n;
              })(t || "*", o.nodeType ? [o] : o, []),
            g = !e || (!r && t) ? m : Ee(m, u, e, o, l),
            v = n ? (i || (r ? e : h || s) ? [] : a) : g;
          if ((n && n(g, v, o, l), s))
            for (d = Ee(v, f), s(d, [], o, l), c = d.length; c--; )
              (p = d[c]) && (v[f[c]] = !(g[f[c]] = p));
          if (r) {
            if (i || e) {
              if (i) {
                for (d = [], c = v.length; c--; )
                  (p = v[c]) && d.push((g[c] = p));
                i(null, (v = []), d, l);
              }
              for (c = v.length; c--; )
                (p = v[c]) &&
                  -1 < (d = i ? z(r, p) : u[c]) &&
                  (r[d] = !(a[d] = p));
            }
          } else (v = Ee(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, l) : O.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          r = e.length,
          a = s.relative[e[0].type],
          o = a || s.relative[" "],
          l = a ? 1 : 0,
          c = we(
            function (e) {
              return e === t;
            },
            o,
            !0
          ),
          p = we(
            function (e) {
              return -1 < z(t, e);
            },
            o,
            !0
          ),
          u = [
            function (e, n, s) {
              var i =
                (!a && (s || n !== d)) ||
                ((t = n).nodeType ? c(e, n, s) : p(e, n, s));
              return (t = null), i;
            },
          ];
        l < r;
        l++
      )
        if ((n = s.relative[e[l].type])) u = [we(xe(u), n)];
        else {
          if ((n = s.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (i = ++l; i < r && !s.relative[e[i].type]; i++);
            return Te(
              1 < l && xe(u),
              1 < l &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              n,
              l < i && Ce(e.slice(l, i)),
              i < r && Ce((e = e.slice(i))),
              i < r && be(e)
            );
          }
          u.push(n);
        }
      return xe(u);
    }
    return (
      (ye.prototype = s.filters = s.pseudos),
      (s.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            r,
            a,
            o,
            l,
            d,
            c = S[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (o = e, l = [], d = s.preFilter; o; ) {
            for (a in ((n && !(i = W.exec(o))) ||
              (i && (o = o.slice(i[0].length) || o), l.push((r = []))),
            (n = !1),
            (i = X.exec(o)) &&
              ((n = i.shift()),
              r.push({ value: n, type: i[0].replace(R, " ") }),
              (o = o.slice(n.length))),
            s.filter))
              !(i = V[a].exec(o)) ||
                (d[a] && !(i = d[a](i))) ||
                ((n = i.shift()),
                r.push({ value: n, type: a, matches: i }),
                (o = o.slice(n.length)));
            if (!n) break;
          }
          return t ? o.length : o ? oe.error(e) : S(e, l).slice(0);
        }),
      (o = oe.compile =
        function (e, t) {
          var n,
            i,
            r,
            o,
            l,
            c,
            p = [],
            h = [],
            g = $[e + " "];
          if (!g) {
            for (t || (t = a(e)), n = t.length; n--; )
              (g = Ce(t[n]))[w] ? p.push(g) : h.push(g);
            (g = $(
              e,
              ((i = h),
              (o = 0 < (r = p).length),
              (l = 0 < i.length),
              (c = function (e, t, n, a, c) {
                var p,
                  h,
                  g,
                  v = 0,
                  y = "0",
                  b = e && [],
                  w = [],
                  x = d,
                  T = e || (l && s.find.TAG("*", c)),
                  C = (E += null == x ? 1 : Math.random() || 0.1),
                  S = T.length;
                for (
                  c && (d = t == f || t || c);
                  y !== S && null != (p = T[y]);
                  y++
                ) {
                  if (l && p) {
                    for (
                      h = 0, t || p.ownerDocument == f || (u(p), (n = !m));
                      (g = i[h++]);

                    )
                      if (g(p, t || f, n)) {
                        a.push(p);
                        break;
                      }
                    c && (E = C);
                  }
                  o && ((p = !g && p) && v--, e && b.push(p));
                }
                if (((v += y), o && y !== v)) {
                  for (h = 0; (g = r[h++]); ) g(b, w, t, n);
                  if (e) {
                    if (0 < v) for (; y--; ) b[y] || w[y] || (w[y] = A.call(a));
                    w = Ee(w);
                  }
                  O.apply(a, w),
                    c &&
                      !e &&
                      0 < w.length &&
                      1 < v + r.length &&
                      oe.uniqueSort(a);
                }
                return c && ((E = C), (d = x)), b;
              }),
              o ? de(c) : c)
            )).selector = e;
          }
          return g;
        }),
      (l = oe.select =
        function (e, t, n, i) {
          var r,
            l,
            d,
            c,
            p,
            u = "function" == typeof e && e,
            f = !i && a((e = u.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              2 < (l = f[0] = f[0].slice(0)).length &&
              "ID" === (d = l[0]).type &&
              9 === t.nodeType &&
              m &&
              s.relative[l[1].type]
            ) {
              if (!(t = (s.find.ID(d.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              u && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              r = V.needsContext.test(e) ? 0 : l.length;
              r-- && ((d = l[r]), !s.relative[(c = d.type)]);

            )
              if (
                (p = s.find[c]) &&
                (i = p(
                  d.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(r, 1), !(e = i.length && be(l))))
                  return O.apply(n, i), n;
                break;
              }
          }
          return (
            (u || o(e, f))(
              i,
              t,
              !m,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = w.split("").sort(k).join("") === w),
      (n.detectDuplicates = !!p),
      u(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        pe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        pe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        pe(N, function (e, t, n) {
          var s;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (s = e.getAttributeNode(t)) && s.specified
              ? s.value
              : null;
        }),
      oe
    );
  })(e);
  (x.find = T),
    (x.expr = T.selectors),
    (x.expr[":"] = x.expr.pseudos),
    (x.uniqueSort = x.unique = T.uniqueSort),
    (x.text = T.getText),
    (x.isXMLDoc = T.isXML),
    (x.contains = T.contains),
    (x.escapeSelector = T.escape);
  var C = function (e, t, n) {
      for (var s = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && x(e).is(n)) break;
          s.push(e);
        }
      return s;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    $ = x.expr.match.needsContext;
  function M(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function P(e, t, n) {
    return h(t)
      ? x.grep(e, function (e, s) {
          return !!t.call(e, s, e) !== n;
        })
      : t.nodeType
      ? x.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? x.grep(e, function (e) {
          return -1 < o.call(t, e) !== n;
        })
      : x.filter(t, e, n);
  }
  (x.filter = function (e, t, n) {
    var s = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === s.nodeType
        ? x.find.matchesSelector(s, e)
          ? [s]
          : []
        : x.find.matches(
            e,
            x.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    x.fn.extend({
      find: function (e) {
        var t,
          n,
          s = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            x(e).filter(function () {
              for (t = 0; t < s; t++) if (x.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < s; t++) x.find(e, i[t], n);
        return 1 < s ? x.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(P(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(P(this, e || [], !0));
      },
      is: function (e) {
        return !!P(this, "string" == typeof e && $.test(e) ? x(e) : e || [], !1)
          .length;
      },
    });
  var L,
    A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((x.fn.init = function (e, t, n) {
    var s, i;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (
        !(s =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : A.exec(e)) ||
        (!s[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (s[1]) {
        if (
          ((t = t instanceof x ? t[0] : t),
          x.merge(
            this,
            x.parseHTML(s[1], t && t.nodeType ? t.ownerDocument || t : g, !0)
          ),
          k.test(s[1]) && x.isPlainObject(t))
        )
          for (s in t) h(this[s]) ? this[s](t[s]) : this.attr(s, t[s]);
        return this;
      }
      return (
        (i = g.getElementById(s[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : h(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(x)
      : x.makeArray(e, this);
  }).prototype = x.fn),
    (L = x(g));
  var D = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function I(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  x.fn.extend({
    has: function (e) {
      var t = x(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        s = 0,
        i = this.length,
        r = [],
        a = "string" != typeof e && x(e);
      if (!$.test(e))
        for (; s < i; s++)
          for (n = this[s]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && x.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(1 < r.length ? x.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? o.call(x(e), this[0])
          : o.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    x.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return C(e, "parentNode", n);
        },
        next: function (e) {
          return I(e, "nextSibling");
        },
        prev: function (e) {
          return I(e, "previousSibling");
        },
        nextAll: function (e) {
          return C(e, "nextSibling");
        },
        prevAll: function (e) {
          return C(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return C(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return C(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && s(e.contentDocument)
            ? e.contentDocument
            : (M(e, "template") && (e = e.content || e),
              x.merge([], e.childNodes));
        },
      },
      function (e, t) {
        x.fn[e] = function (n, s) {
          var i = x.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (s = n),
            s && "string" == typeof s && (i = x.filter(s, i)),
            1 < this.length &&
              (O[e] || x.uniqueSort(i), D.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var z = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function j(e) {
    throw e;
  }
  function H(e, t, n, s) {
    var i;
    try {
      e && h((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && h((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(s));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (x.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          x.each(t.match(z) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : x.extend({}, e);
    var s,
      i,
      r,
      a,
      o = [],
      l = [],
      d = -1,
      c = function () {
        for (a = a || e.once, r = s = !0; l.length; d = -1)
          for (i = l.shift(); ++d < o.length; )
            !1 === o[d].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((d = o.length), (i = !1));
        e.memory || (i = !1), (s = !1), a && (o = i ? [] : "");
      },
      p = {
        add: function () {
          return (
            o &&
              (i && !s && ((d = o.length - 1), l.push(i)),
              (function t(n) {
                x.each(n, function (n, s) {
                  h(s)
                    ? (e.unique && p.has(s)) || o.push(s)
                    : s && s.length && "string" !== b(s) && t(s);
                });
              })(arguments),
              i && !s && c()),
            this
          );
        },
        remove: function () {
          return (
            x.each(arguments, function (e, t) {
              for (var n; -1 < (n = x.inArray(t, o, n)); )
                o.splice(n, 1), n <= d && d--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < x.inArray(e, o) : 0 < o.length;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (a = l = []), (o = i = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (a = l = []), i || s || (o = i = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              s || c()),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return p;
  }),
    x.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              x.Callbacks("memory"),
              x.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              x.Callbacks("once memory"),
              x.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              x.Callbacks("once memory"),
              x.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          s = "pending",
          i = {
            state: function () {
              return s;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return x
                .Deferred(function (t) {
                  x.each(n, function (n, s) {
                    var i = h(e[s[4]]) && e[s[4]];
                    r[s[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && h(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[s[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, s, i) {
              var r = 0;
              function a(t, n, s, i) {
                return function () {
                  var o = this,
                    l = arguments,
                    d = function () {
                      var e, d;
                      if (!(t < r)) {
                        if ((e = s.apply(o, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (d =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          h(d)
                            ? i
                              ? d.call(e, a(r, n, N, i), a(r, n, j, i))
                              : (r++,
                                d.call(
                                  e,
                                  a(r, n, N, i),
                                  a(r, n, j, i),
                                  a(r, n, N, n.notifyWith)
                                ))
                            : (s !== N && ((o = void 0), (l = [e])),
                              (i || n.resolveWith)(o, l));
                      }
                    },
                    c = i
                      ? d
                      : function () {
                          try {
                            d();
                          } catch (e) {
                            x.Deferred.exceptionHook &&
                              x.Deferred.exceptionHook(e, c.stackTrace),
                              r <= t + 1 &&
                                (s !== j && ((o = void 0), (l = [e])),
                                n.rejectWith(o, l));
                          }
                        };
                  t
                    ? c()
                    : (x.Deferred.getStackHook &&
                        (c.stackTrace = x.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return x
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, h(i) ? i : N, e.notifyWith)),
                    n[1][3].add(a(0, e, h(t) ? t : N)),
                    n[2][3].add(a(0, e, h(s) ? s : j));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? x.extend(e, i) : i;
            },
          },
          r = {};
        return (
          x.each(n, function (e, t) {
            var a = t[2],
              o = t[5];
            (i[t[1]] = a.add),
              o &&
                a.add(
                  function () {
                    s = o;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = a.fireWith);
          }),
          i.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          s = Array(n),
          r = i.call(arguments),
          a = x.Deferred(),
          o = function (e) {
            return function (n) {
              (s[e] = this),
                (r[e] = 1 < arguments.length ? i.call(arguments) : n),
                --t || a.resolveWith(s, r);
            };
          };
        if (
          t <= 1 &&
          (H(e, a.done(o(n)).resolve, a.reject, !t),
          "pending" === a.state() || h(r[n] && r[n].then))
        )
          return a.then();
        for (; n--; ) H(r[n], o(n), a.reject);
        return a.promise();
      },
    });
  var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (x.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      q.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (x.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var B = x.Deferred();
  function _() {
    g.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      x.ready();
  }
  (x.fn.ready = function (e) {
    return (
      B.then(e).catch(function (e) {
        x.readyException(e);
      }),
      this
    );
  }),
    x.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --x.readyWait : x.isReady) ||
          ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
          B.resolveWith(g, [x]);
      },
    }),
    (x.ready.then = B.then),
    "complete" === g.readyState ||
    ("loading" !== g.readyState && !g.documentElement.doScroll)
      ? e.setTimeout(x.ready)
      : (g.addEventListener("DOMContentLoaded", _),
        e.addEventListener("load", _));
  var R = function (e, t, n, s, i, r, a) {
      var o = 0,
        l = e.length,
        d = null == n;
      if ("object" === b(n))
        for (o in ((i = !0), n)) R(e, t, o, n[o], !0, r, a);
      else if (
        void 0 !== s &&
        ((i = !0),
        h(s) || (a = !0),
        d &&
          (a
            ? (t.call(e, s), (t = null))
            : ((d = t),
              (t = function (e, t, n) {
                return d.call(x(e), n);
              }))),
        t)
      )
        for (; o < l; o++) t(e[o], n, a ? s : s.call(e[o], o, t(e[o], n)));
      return i ? e : d ? t.call(e) : l ? t(e[0], n) : r;
    },
    W = /^-ms-/,
    X = /-([a-z])/g;
  function G(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(W, "ms-").replace(X, G);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function V() {
    this.expando = x.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var s,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (s in t) i[F(s)] = t[s];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          s = e[this.expando];
        if (void 0 !== s) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in s
              ? [t]
              : t.match(z) || []).length;
            for (; n--; ) delete s[t[n]];
          }
          (void 0 === t || x.isEmptyObject(s)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !x.isEmptyObject(t);
      },
    });
  var U = new V(),
    K = new V(),
    Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var s, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((s = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(s)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : Q.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  x.extend({
    hasData: function (e) {
      return K.hasData(e) || U.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return U.access(e, t, n);
    },
    _removeData: function (e, t) {
      U.remove(e, t);
    },
  }),
    x.fn.extend({
      data: function (e, t) {
        var n,
          s,
          i,
          r = this[0],
          a = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = K.get(r)), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (s = a[n].name).indexOf("data-") &&
                ((s = F(s.slice(5))), Z(r, s, i[s]));
            U.set(r, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : R(
              this,
              function (t) {
                var n;
                if (r && void 0 === t)
                  return void 0 !== (n = K.get(r, e)) ||
                    void 0 !== (n = Z(r, e))
                    ? n
                    : void 0;
                this.each(function () {
                  K.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    x.extend({
      queue: function (e, t, n) {
        var s;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (s = U.get(e, t)),
            n &&
              (!s || Array.isArray(n)
                ? (s = U.access(e, t, x.makeArray(n)))
                : s.push(n)),
            s || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = x.queue(e, t),
          s = n.length,
          i = n.shift(),
          r = x._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), s--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            i.call(
              e,
              function () {
                x.dequeue(e, t);
              },
              r
            )),
          !s && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          U.get(e, n) ||
          U.access(e, n, {
            empty: x.Callbacks("once memory").add(function () {
              U.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    x.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? x.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          x.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          s = 1,
          i = x.Deferred(),
          r = this,
          a = this.length,
          o = function () {
            --s || i.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = U.get(r[a], e + "queueHooks")) &&
            n.empty &&
            (s++, n.empty.add(o));
        return o(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    se = g.documentElement,
    ie = function (e) {
      return x.contains(e.ownerDocument, e);
    },
    re = { composed: !0 };
  se.getRootNode &&
    (ie = function (e) {
      return (
        x.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === x.css(e, "display"))
    );
  };
  function oe(e, t, n, s) {
    var i,
      r,
      a = 20,
      o = s
        ? function () {
            return s.cur();
          }
        : function () {
            return x.css(e, t, "");
          },
      l = o(),
      d = (n && n[3]) || (x.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (x.cssNumber[t] || ("px" !== d && +l)) &&
        te.exec(x.css(e, t));
    if (c && c[3] !== d) {
      for (l /= 2, d = d || c[3], c = +l || 1; a--; )
        x.style(e, t, c + d),
          (1 - r) * (1 - (r = o() / l || 0.5)) <= 0 && (a = 0),
          (c /= r);
      (c *= 2), x.style(e, t, c + d), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        s && ((s.unit = d), (s.start = c), (s.end = i))),
      i
    );
  }
  var le = {};
  function de(e, t) {
    for (var n, s, i, r, a, o, l, d = [], c = 0, p = e.length; c < p; c++)
      (s = e[c]).style &&
        ((n = s.style.display),
        t
          ? ("none" === n &&
              ((d[c] = U.get(s, "display") || null),
              d[c] || (s.style.display = "")),
            "" === s.style.display &&
              ae(s) &&
              (d[c] =
                ((l = a = r = void 0),
                (a = (i = s).ownerDocument),
                (o = i.nodeName),
                (l = le[o]) ||
                  ((r = a.body.appendChild(a.createElement(o))),
                  (l = x.css(r, "display")),
                  r.parentNode.removeChild(r),
                  "none" === l && (l = "block"),
                  (le[o] = l)))))
          : "none" !== n && ((d[c] = "none"), U.set(s, "display", n)));
    for (c = 0; c < p; c++) null != d[c] && (e[c].style.display = d[c]);
    return e;
  }
  x.fn.extend({
    show: function () {
      return de(this, !0);
    },
    hide: function () {
      return de(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? x(this).show() : x(this).hide();
          });
    },
  });
  var ce,
    pe,
    ue = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = g.createDocumentFragment().appendChild(g.createElement("div"))),
    (pe = g.createElement("input")).setAttribute("type", "radio"),
    pe.setAttribute("checked", "checked"),
    pe.setAttribute("name", "t"),
    ce.appendChild(pe),
    (f.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (f.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (f.option = !!ce.lastChild);
  var me = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ge(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && M(e, t)) ? x.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, s = e.length; n < s; n++)
      U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"));
  }
  (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td),
    f.option ||
      (me.optgroup = me.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, s, i) {
    for (
      var r,
        a,
        o,
        l,
        d,
        c,
        p = t.createDocumentFragment(),
        u = [],
        f = 0,
        h = e.length;
      f < h;
      f++
    )
      if ((r = e[f]) || 0 === r)
        if ("object" === b(r)) x.merge(u, r.nodeType ? [r] : r);
        else if (ye.test(r)) {
          for (
            a = a || p.appendChild(t.createElement("div")),
              o = (fe.exec(r) || ["", ""])[1].toLowerCase(),
              l = me[o] || me._default,
              a.innerHTML = l[1] + x.htmlPrefilter(r) + l[2],
              c = l[0];
            c--;

          )
            a = a.lastChild;
          x.merge(u, a.childNodes), ((a = p.firstChild).textContent = "");
        } else u.push(t.createTextNode(r));
    for (p.textContent = "", f = 0; (r = u[f++]); )
      if (s && -1 < x.inArray(r, s)) i && i.push(r);
      else if (
        ((d = ie(r)), (a = ge(p.appendChild(r), "script")), d && ve(a), n)
      )
        for (c = 0; (r = a[c++]); ) he.test(r.type || "") && n.push(r);
    return p;
  }
  var we = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Te(e, t) {
    return (
      (e ===
        (function () {
          try {
            return g.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ce(e, t, n, s, i, r) {
    var a, o;
    if ("object" == typeof t) {
      for (o in ("string" != typeof n && ((s = s || n), (n = void 0)), t))
        Ce(e, o, n, s, t[o], r);
      return e;
    }
    if (
      (null == s && null == i
        ? ((i = n), (s = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = s), (s = void 0))
            : ((i = s), (s = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === r &&
        ((a = i),
        ((i = function (e) {
          return x().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = x.guid++))),
      e.each(function () {
        x.event.add(this, t, i, s, n);
      })
    );
  }
  function Se(e, t, n) {
    n
      ? (U.set(e, t, !1),
        x.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var s,
              r,
              a = U.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length)
                (x.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = i.call(arguments)),
                U.set(this, t, a),
                (s = n(this, t)),
                this[t](),
                a !== (r = U.get(this, t)) || s ? U.set(this, t, !1) : (r = {}),
                a !== r)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                );
            } else
              a.length &&
                (U.set(this, t, {
                  value: x.event.trigger(
                    x.extend(a[0], x.Event.prototype),
                    a.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === U.get(e, t) && x.event.add(e, t, xe);
  }
  (x.event = {
    global: {},
    add: function (e, t, n, s, i) {
      var r,
        a,
        o,
        l,
        d,
        c,
        p,
        u,
        f,
        h,
        m,
        g = U.get(e);
      if (Y(e))
        for (
          n.handler && ((n = (r = n).handler), (i = r.selector)),
            i && x.find.matchesSelector(se, i),
            n.guid || (n.guid = x.guid++),
            (l = g.events) || (l = g.events = Object.create(null)),
            (a = g.handle) ||
              (a = g.handle =
                function (t) {
                  return void 0 !== x && x.event.triggered !== t.type
                    ? x.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            d = (t = (t || "").match(z) || [""]).length;
          d--;

        )
          (f = m = (o = we.exec(t[d]) || [])[1]),
            (h = (o[2] || "").split(".").sort()),
            f &&
              ((p = x.event.special[f] || {}),
              (f = (i ? p.delegateType : p.bindType) || f),
              (p = x.event.special[f] || {}),
              (c = x.extend(
                {
                  type: f,
                  origType: m,
                  data: s,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && x.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                r
              )),
              (u = l[f]) ||
                (((u = l[f] = []).delegateCount = 0),
                (p.setup && !1 !== p.setup.call(e, s, h, a)) ||
                  (e.addEventListener && e.addEventListener(f, a))),
              p.add &&
                (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? u.splice(u.delegateCount++, 0, c) : u.push(c),
              (x.event.global[f] = !0));
    },
    remove: function (e, t, n, s, i) {
      var r,
        a,
        o,
        l,
        d,
        c,
        p,
        u,
        f,
        h,
        m,
        g = U.hasData(e) && U.get(e);
      if (g && (l = g.events)) {
        for (d = (t = (t || "").match(z) || [""]).length; d--; )
          if (
            ((f = m = (o = we.exec(t[d]) || [])[1]),
            (h = (o[2] || "").split(".").sort()),
            f)
          ) {
            for (
              p = x.event.special[f] || {},
                u = l[(f = (s ? p.delegateType : p.bindType) || f)] || [],
                o =
                  o[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = r = u.length;
              r--;

            )
              (c = u[r]),
                (!i && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (o && !o.test(c.namespace)) ||
                  (s && s !== c.selector && ("**" !== s || !c.selector)) ||
                  (u.splice(r, 1),
                  c.selector && u.delegateCount--,
                  p.remove && p.remove.call(e, c));
            a &&
              !u.length &&
              ((p.teardown && !1 !== p.teardown.call(e, h, g.handle)) ||
                x.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) x.event.remove(e, f + t[d], n, s, !0);
        x.isEmptyObject(l) && U.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        s,
        i,
        r,
        a,
        o = new Array(arguments.length),
        l = x.event.fix(e),
        d = (U.get(this, "events") || Object.create(null))[l.type] || [],
        c = x.event.special[l.type] || {};
      for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, l))
      ) {
        for (
          a = x.event.handlers.call(this, l, d), t = 0;
          (i = a[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = i.elem, n = 0;
            (r = i.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== r.namespace &&
              !l.rnamespace.test(r.namespace)) ||
              ((l.handleObj = r),
              (l.data = r.data),
              void 0 !==
                (s = (
                  (x.event.special[r.origType] || {}).handle || r.handler
                ).apply(i.elem, o)) &&
                !1 === (l.result = s) &&
                (l.preventDefault(), l.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        s,
        i,
        r,
        a,
        o = [],
        l = t.delegateCount,
        d = e.target;
      if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
        for (; d !== this; d = d.parentNode || this)
          if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
            for (r = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(i = (s = t[n]).selector + " ")] &&
                (a[i] = s.needsContext
                  ? -1 < x(i, this).index(d)
                  : x.find(i, this, null, [d]).length),
                a[i] && r.push(s);
            r.length && o.push({ elem: d, handlers: r });
          }
      return (
        (d = this), l < t.length && o.push({ elem: d, handlers: t.slice(l) }), o
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(x.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: h(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[x.expando] ? e : new x.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            ue.test(t.type) && t.click && M(t, "input") && Se(t, "click", xe),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            ue.test(t.type) && t.click && M(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (ue.test(t.type) &&
              t.click &&
              M(t, "input") &&
              U.get(t, "click")) ||
            M(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (x.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (x.Event = function (e, t) {
      if (!(this instanceof x.Event)) return new x.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? xe
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && x.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
      constructor: x.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    x.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      x.event.addProp
    ),
    x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      x.event.special[e] = {
        setup: function () {
          return Se(this, e, Te), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    x.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        x.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              s = e.relatedTarget,
              i = e.handleObj;
            return (
              (s && (s === this || x.contains(this, s))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    x.fn.extend({
      on: function (e, t, n, s) {
        return Ce(this, e, t, n, s);
      },
      one: function (e, t, n, s) {
        return Ce(this, e, t, n, s, 1);
      },
      off: function (e, t, n) {
        var s, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (s = e.handleObj),
            x(e.delegateTarget).off(
              s.namespace ? s.origType + "." + s.namespace : s.origType,
              s.selector,
              s.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            x.event.remove(this, e, n, t);
          })
        );
      },
    });
  var $e = /<script|<style|<link/i,
    Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Pe(e, t) {
    return (
      (M(e, "table") &&
        M(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        x(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Ae(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function De(e, t) {
    var n, s, i, r, a, o;
    if (1 === t.nodeType) {
      if (U.hasData(e) && (o = U.get(e).events))
        for (i in (U.remove(t, "handle events"), o))
          for (n = 0, s = o[i].length; n < s; n++) x.event.add(t, i, o[i][n]);
      K.hasData(e) && ((r = K.access(e)), (a = x.extend({}, r)), K.set(t, a));
    }
  }
  function Oe(e, t, n, s) {
    t = r(t);
    var i,
      a,
      o,
      l,
      d,
      c,
      p = 0,
      u = e.length,
      m = u - 1,
      g = t[0],
      v = h(g);
    if (v || (1 < u && "string" == typeof g && !f.checkClone && Me.test(g)))
      return e.each(function (i) {
        var r = e.eq(i);
        v && (t[0] = g.call(this, i, r.html())), Oe(r, t, n, s);
      });
    if (
      u &&
      ((a = (i = be(t, e[0].ownerDocument, !1, e, s)).firstChild),
      1 === i.childNodes.length && (i = a),
      a || s)
    ) {
      for (l = (o = x.map(ge(i, "script"), Le)).length; p < u; p++)
        (d = i),
          p !== m &&
            ((d = x.clone(d, !0, !0)), l && x.merge(o, ge(d, "script"))),
          n.call(e[p], d, p);
      if (l)
        for (c = o[o.length - 1].ownerDocument, x.map(o, Ae), p = 0; p < l; p++)
          (d = o[p]),
            he.test(d.type || "") &&
              !U.access(d, "globalEval") &&
              x.contains(c, d) &&
              (d.src && "module" !== (d.type || "").toLowerCase()
                ? x._evalUrl &&
                  !d.noModule &&
                  x._evalUrl(
                    d.src,
                    { nonce: d.nonce || d.getAttribute("nonce") },
                    c
                  )
                : y(d.textContent.replace(ke, ""), d, c));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var s, i = t ? x.filter(t, e) : e, r = 0; null != (s = i[r]); r++)
      n || 1 !== s.nodeType || x.cleanData(ge(s)),
        s.parentNode &&
          (n && ie(s) && ve(ge(s, "script")), s.parentNode.removeChild(s));
    return e;
  }
  x.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var s,
        i,
        r,
        a,
        o,
        l,
        d,
        c = e.cloneNode(!0),
        p = ie(e);
      if (
        !(
          f.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          x.isXMLDoc(e)
        )
      )
        for (a = ge(c), s = 0, i = (r = ge(e)).length; s < i; s++)
          (o = r[s]),
            "input" === (d = (l = a[s]).nodeName.toLowerCase()) &&
            ue.test(o.type)
              ? (l.checked = o.checked)
              : ("input" !== d && "textarea" !== d) ||
                (l.defaultValue = o.defaultValue);
      if (t)
        if (n)
          for (r = r || ge(e), a = a || ge(c), s = 0, i = r.length; s < i; s++)
            De(r[s], a[s]);
        else De(e, c);
      return (
        0 < (a = ge(c, "script")).length && ve(a, !p && ge(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, s, i = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Y(n)) {
          if ((t = n[U.expando])) {
            if (t.events)
              for (s in t.events)
                i[s] ? x.event.remove(n, s) : x.removeEvent(n, s, t.handle);
            n[U.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    x.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return R(
          this,
          function (e) {
            return void 0 === e
              ? x.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Oe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Pe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Oe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Pe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (x.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return x.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return R(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              s = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !$e.test(e) &&
              !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = x.htmlPrefilter(e);
              try {
                for (; n < s; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (x.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Oe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            x.inArray(this, e) < 0 &&
              (x.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    x.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        x.fn[e] = function (e) {
          for (var n, s = [], i = x(e), r = i.length - 1, o = 0; o <= r; o++)
            (n = o === r ? this : this.clone(!0)),
              x(i[o])[t](n),
              a.apply(s, n.get());
          return this.pushStack(s);
        };
      }
    );
  var ze = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ne = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    je = function (e, t, n) {
      var s,
        i,
        r = {};
      for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((s = n.call(e)), t)) e.style[i] = r[i];
      return s;
    },
    He = new RegExp(ne.join("|"), "i");
  function qe(e, t, n) {
    var s,
      i,
      r,
      a,
      o = e.style;
    return (
      (n = n || Ne(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = x.style(e, t)),
        !f.pixelBoxStyles() &&
          ze.test(a) &&
          He.test(t) &&
          ((s = o.width),
          (i = o.minWidth),
          (r = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = a),
          (a = n.width),
          (o.width = s),
          (o.minWidth = i),
          (o.maxWidth = r))),
      void 0 !== a ? a + "" : a
    );
  }
  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (d.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          se.appendChild(d).appendChild(c);
        var t = e.getComputedStyle(c);
        (s = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (a = 36 === n(t.right)),
          (i = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (r = 12 === n(c.offsetWidth / 3)),
          se.removeChild(d),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var s,
      i,
      r,
      a,
      o,
      l,
      d = g.createElement("div"),
      c = g.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === c.style.backgroundClip),
      x.extend(f, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), s;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), r;
        },
        reliableTrDimensions: function () {
          var t, n, s, i;
          return (
            null == o &&
              ((t = g.createElement("table")),
              (n = g.createElement("tr")),
              (s = g.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (s.style.height = "9px"),
              (s.style.display = "block"),
              se.appendChild(t).appendChild(n).appendChild(s),
              (i = e.getComputedStyle(n)),
              (o =
                parseInt(i.height, 10) +
                  parseInt(i.borderTopWidth, 10) +
                  parseInt(i.borderBottomWidth, 10) ===
                n.offsetHeight),
              se.removeChild(t)),
            o
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    Re = g.createElement("div").style,
    We = {};
  function Xe(e) {
    return (
      x.cssProps[e] ||
      We[e] ||
      (e in Re
        ? e
        : (We[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = _e.length;
                n--;

              )
                if ((e = _e[n] + t) in Re) return e;
            })(e) || e))
    );
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Fe = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" };
  function Ue(e, t, n) {
    var s = te.exec(t);
    return s ? Math.max(0, s[2] - (n || 0)) + (s[3] || "px") : t;
  }
  function Ke(e, t, n, s, i, r) {
    var a = "width" === t ? 1 : 0,
      o = 0,
      l = 0;
    if (n === (s ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += x.css(e, n + ne[a], !0, i)),
        s
          ? ("content" === n && (l -= x.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (l -= x.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((l += x.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (l += x.css(e, "border" + ne[a] + "Width", !0, i))
              : (o += x.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !s &&
        0 <= r &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - o - 0.5
            )
          ) || 0),
      l
    );
  }
  function Qe(e, t, n) {
    var s = Ne(e),
      i =
        (!f.boxSizingReliable() || n) &&
        "border-box" === x.css(e, "boxSizing", !1, s),
      r = i,
      a = qe(e, t, s),
      o = "offset" + t[0].toUpperCase() + t.slice(1);
    if (ze.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!f.boxSizingReliable() && i) ||
        (!f.reliableTrDimensions() && M(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === x.css(e, "display", !1, s))) &&
        e.getClientRects().length &&
        ((i = "border-box" === x.css(e, "boxSizing", !1, s)),
        (r = o in e) && (a = e[o])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), r, s, a) +
        "px"
    );
  }
  function Je(e, t, n, s, i) {
    return new Je.prototype.init(e, t, n, s, i);
  }
  x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = qe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, s) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          r,
          a,
          o = F(t),
          l = Fe.test(t),
          d = e.style;
        if (
          (l || (t = Xe(o)), (a = x.cssHooks[t] || x.cssHooks[o]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, s)) ? i : d[t];
        "string" == (r = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = oe(e, t, i)), (r = "number")),
          null != n &&
            n == n &&
            ("number" !== r ||
              l ||
              (n += (i && i[3]) || (x.cssNumber[o] ? "" : "px")),
            f.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (d[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, s))) ||
              (l ? d.setProperty(t, n) : (d[t] = n)));
      }
    },
    css: function (e, t, n, s) {
      var i,
        r,
        a,
        o = F(t);
      return (
        Fe.test(t) || (t = Xe(o)),
        (a = x.cssHooks[t] || x.cssHooks[o]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = qe(e, t, s)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i)
          : i
      );
    },
  }),
    x.each(["height", "width"], function (e, t) {
      x.cssHooks[t] = {
        get: function (e, n, s) {
          if (n)
            return !Ge.test(x.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Qe(e, t, s)
              : je(e, Ye, function () {
                  return Qe(e, t, s);
                });
        },
        set: function (e, n, s) {
          var i,
            r = Ne(e),
            a = !f.scrollboxSize() && "absolute" === r.position,
            o = (a || s) && "border-box" === x.css(e, "boxSizing", !1, r),
            l = s ? Ke(e, t, s, o, r) : 0;
          return (
            o &&
              a &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  Ke(e, t, "border", !1, r) -
                  0.5
              )),
            l &&
              (i = te.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = x.css(e, t))),
            Ue(0, n, l)
          );
        },
      };
    }),
    (x.cssHooks.marginLeft = Be(f.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(qe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              je(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (x.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var s = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n];
            s < 4;
            s++
          )
            i[e + ne[s] + t] = r[s] || r[s - 2] || r[0];
          return i;
        },
      }),
        "margin" !== e && (x.cssHooks[e + t].set = Ue);
    }),
    x.fn.extend({
      css: function (e, t) {
        return R(
          this,
          function (e, t, n) {
            var s,
              i,
              r = {},
              a = 0;
            if (Array.isArray(t)) {
              for (s = Ne(e), i = t.length; a < i; a++)
                r[t[a]] = x.css(e, t[a], !1, s);
              return r;
            }
            return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((x.Tween = Je).prototype = {
      constructor: Je,
      init: function (e, t, n, s, i, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || x.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = s),
          (this.unit = r || (x.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Je.propHooks[this.prop];
        return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Je.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                x.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Je.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Je.prototype),
    ((Je.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = x.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          x.fx.step[e.prop]
            ? x.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!x.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : x.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Je.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (x.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (x.fx = Je.prototype.init),
    (x.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    st = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function rt() {
    et &&
      (!1 === g.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(rt)
        : e.setTimeout(rt, x.fx.interval),
      x.fx.tick());
  }
  function at() {
    return (
      e.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function ot(e, t) {
    var n,
      s = 0,
      i = { height: e };
    for (t = t ? 1 : 0; s < 4; s += 2 - t)
      i["margin" + (n = ne[s])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var s,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        r = 0,
        a = i.length;
      r < a;
      r++
    )
      if ((s = i[r].call(n, t, e))) return s;
  }
  function dt(e, t, n) {
    var s,
      i,
      r = 0,
      a = dt.prefilters.length,
      o = x.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (i) return !1;
        for (
          var t = Ze || at(),
            n = Math.max(0, d.startTime + d.duration - t),
            s = 1 - (n / d.duration || 0),
            r = 0,
            a = d.tweens.length;
          r < a;
          r++
        )
          d.tweens[r].run(s);
        return (
          o.notifyWith(e, [d, s, n]),
          s < 1 && a
            ? n
            : (a || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
        );
      },
      d = o.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || at(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var s = x.Tween(
            e,
            d.opts,
            t,
            n,
            d.opts.specialEasing[t] || d.opts.easing
          );
          return d.tweens.push(s), s;
        },
        stop: function (t) {
          var n = 0,
            s = t ? d.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < s; n++) d.tweens[n].run(1);
          return (
            t
              ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t]))
              : o.rejectWith(e, [d, t]),
            this
          );
        },
      }),
      c = d.props;
    for (
      (function (e, t) {
        var n, s, i, r, a;
        for (n in e)
          if (
            ((i = t[(s = F(n))]),
            (r = e[n]),
            Array.isArray(r) && ((i = r[1]), (r = e[n] = r[0])),
            n !== s && ((e[s] = r), delete e[n]),
            (a = x.cssHooks[s]) && ("expand" in a))
          )
            for (n in ((r = a.expand(r)), delete e[s], r))
              (n in e) || ((e[n] = r[n]), (t[n] = i));
          else t[s] = i;
      })(c, d.opts.specialEasing);
      r < a;
      r++
    )
      if ((s = dt.prefilters[r].call(d, e, c, d.opts)))
        return (
          h(s.stop) &&
            (x._queueHooks(d.elem, d.opts.queue).stop = s.stop.bind(s)),
          s
        );
    return (
      x.map(c, lt, d),
      h(d.opts.start) && d.opts.start.call(e, d),
      d
        .progress(d.opts.progress)
        .done(d.opts.done, d.opts.complete)
        .fail(d.opts.fail)
        .always(d.opts.always),
      x.fx.timer(x.extend(l, { elem: e, anim: d, queue: d.opts.queue })),
      d
    );
  }
  (x.Animation = x.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return oe(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      h(e) ? ((t = e), (e = ["*"])) : (e = e.match(z));
      for (var n, s = 0, i = e.length; s < i; s++)
        (n = e[s]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var s,
          i,
          r,
          a,
          o,
          l,
          d,
          c,
          p = "width" in t || "height" in t,
          u = this,
          f = {},
          h = e.style,
          m = e.nodeType && ae(e),
          g = U.get(e, "fxshow");
        for (s in (n.queue ||
          (null == (a = x._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (o = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || o();
            })),
          a.unqueued++,
          u.always(function () {
            u.always(function () {
              a.unqueued--, x.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[s]), st.test(i))) {
            if (
              (delete t[s],
              (r = r || "toggle" === i),
              i === (m ? "hide" : "show"))
            ) {
              if ("show" !== i || !g || void 0 === g[s]) continue;
              m = !0;
            }
            f[s] = (g && g[s]) || x.style(e, s);
          }
        if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
          for (s in (p &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (d = g && g.display) && (d = U.get(e, "display")),
            "none" === (c = x.css(e, "display")) &&
              (d
                ? (c = d)
                : (de([e], !0),
                  (d = e.style.display || d),
                  (c = x.css(e, "display")),
                  de([e]))),
            ("inline" === c || ("inline-block" === c && null != d)) &&
              "none" === x.css(e, "float") &&
              (l ||
                (u.done(function () {
                  h.display = d;
                }),
                null == d && ((c = h.display), (d = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            u.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = U.access(e, "fxshow", { display: d })),
              r && (g.hidden = !m),
              m && de([e], !0),
              u.done(function () {
                for (s in (m || de([e]), U.remove(e, "fxshow"), f))
                  x.style(e, s, f[s]);
              })),
              (l = lt(m ? g[s] : 0, s, u)),
              s in g ||
                ((g[s] = l.start), m && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (x.speed = function (e, t, n) {
      var s =
        e && "object" == typeof e
          ? x.extend({}, e)
          : {
              complete: n || (!n && t) || (h(e) && e),
              duration: e,
              easing: (n && t) || (t && !h(t) && t),
            };
      return (
        x.fx.off
          ? (s.duration = 0)
          : "number" != typeof s.duration &&
            (s.duration in x.fx.speeds
              ? (s.duration = x.fx.speeds[s.duration])
              : (s.duration = x.fx.speeds._default)),
        (null != s.queue && !0 !== s.queue) || (s.queue = "fx"),
        (s.old = s.complete),
        (s.complete = function () {
          h(s.old) && s.old.call(this), s.queue && x.dequeue(this, s.queue);
        }),
        s
      );
    }),
    x.fn.extend({
      fadeTo: function (e, t, n, s) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, s);
      },
      animate: function (e, t, n, s) {
        var i = x.isEmptyObject(e),
          r = x.speed(t, n, s),
          a = function () {
            var t = dt(this, x.extend({}, e), r);
            (i || U.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        );
      },
      stop: function (e, t, n) {
        var s = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              r = x.timers,
              a = U.get(this);
            if (i) a[i] && a[i].stop && s(a[i]);
            else for (i in a) a[i] && a[i].stop && it.test(i) && s(a[i]);
            for (i = r.length; i--; )
              r[i].elem !== this ||
                (null != e && r[i].queue !== e) ||
                (r[i].anim.stop(n), (t = !1), r.splice(i, 1));
            (!t && n) || x.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = U.get(this),
              s = n[e + "queue"],
              i = n[e + "queueHooks"],
              r = x.timers,
              a = s ? s.length : 0;
            for (
              n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < a; t++)
              s[t] && s[t].finish && s[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    x.each(["toggle", "show", "hide"], function (e, t) {
      var n = x.fn[t];
      x.fn[t] = function (e, s, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ot(t, !0), e, s, i);
      };
    }),
    x.each(
      {
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        x.fn[e] = function (e, n, s) {
          return this.animate(t, e, n, s);
        };
      }
    ),
    (x.timers = []),
    (x.fx.tick = function () {
      var e,
        t = 0,
        n = x.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || x.fx.stop(), (Ze = void 0);
    }),
    (x.fx.timer = function (e) {
      x.timers.push(e), x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function () {
      et || ((et = !0), rt());
    }),
    (x.fx.stop = function () {
      et = null;
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fn.delay = function (t, n) {
      return (
        (t = (x.fx && x.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, s) {
          var i = e.setTimeout(n, t);
          s.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (tt = g.createElement("input")),
    (nt = g.createElement("select").appendChild(g.createElement("option"))),
    (tt.type = "checkbox"),
    (f.checkOn = "" !== tt.value),
    (f.optSelected = nt.selected),
    ((tt = g.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (f.radioValue = "t" === tt.value);
  var ct,
    pt = x.expr.attrHandle;
  x.fn.extend({
    attr: function (e, t) {
      return R(this, x.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
  }),
    x.extend({
      attr: function (e, t, n) {
        var s,
          i,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? x.prop(e, t, n)
            : ((1 === r && x.isXMLDoc(e)) ||
                (i =
                  x.attrHooks[t.toLowerCase()] ||
                  (x.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void x.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (s = i.set(e, n, t))
                  ? s
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (s = i.get(e, t))
                ? s
                : null == (s = x.find.attr(e, t))
                ? void 0
                : s);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!f.radioValue && "radio" === t && M(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          s = 0,
          i = t && t.match(z);
        if (i && 1 === e.nodeType) for (; (n = i[s++]); ) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = pt[t] || x.find.attr;
      pt[t] = function (e, t, s) {
        var i,
          r,
          a = t.toLowerCase();
        return (
          s ||
            ((r = pt[a]),
            (pt[a] = i),
            (i = null != n(e, t, s) ? a : null),
            (pt[a] = r)),
          i
        );
      };
    });
  var ut = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(z) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function gt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(z)) || [];
  }
  x.fn.extend({
    prop: function (e, t) {
      return R(this, x.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[x.propFix[e] || e];
      });
    },
  }),
    x.extend({
      prop: function (e, t, n) {
        var s,
          i,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && x.isXMLDoc(e)) ||
              ((t = x.propFix[t] || t), (i = x.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (s = i.set(e, n, t))
                ? s
                : (e[t] = n)
              : i && "get" in i && null !== (s = i.get(e, t))
              ? s
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = x.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ut.test(e.nodeName) || (ft.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.optSelected ||
      (x.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    x.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.fn.extend({
      addClass: function (e) {
        var t,
          n,
          s,
          i,
          r,
          a,
          o,
          l = 0;
        if (h(e))
          return this.each(function (t) {
            x(this).addClass(e.call(this, t, mt(this)));
          });
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((i = mt(n)), (s = 1 === n.nodeType && " " + ht(i) + " "))) {
              for (a = 0; (r = t[a++]); )
                s.indexOf(" " + r + " ") < 0 && (s += r + " ");
              i !== (o = ht(s)) && n.setAttribute("class", o);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          s,
          i,
          r,
          a,
          o,
          l = 0;
        if (h(e))
          return this.each(function (t) {
            x(this).removeClass(e.call(this, t, mt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((i = mt(n)), (s = 1 === n.nodeType && " " + ht(i) + " "))) {
              for (a = 0; (r = t[a++]); )
                for (; -1 < s.indexOf(" " + r + " "); )
                  s = s.replace(" " + r + " ", " ");
              i !== (o = ht(s)) && n.setAttribute("class", o);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          s = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && s
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : h(e)
          ? this.each(function (n) {
              x(this).toggleClass(e.call(this, n, mt(this), t), t);
            })
          : this.each(function () {
              var t, i, r, a;
              if (s)
                for (i = 0, r = x(this), a = gt(e); (t = a[i++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = mt(this)) && U.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : U.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          s = 0;
        for (t = " " + e + " "; (n = this[s++]); )
          if (1 === n.nodeType && -1 < (" " + ht(mt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var vt = /\r/g;
  x.fn.extend({
    val: function (e) {
      var t,
        n,
        s,
        i = this[0];
      return arguments.length
        ? ((s = h(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = s ? e.call(this, n, x(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = x.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                x.valHooks[this.type] ||
                x.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(vt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    x.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = x.find.attr(e, "value");
            return null != t ? t : ht(x.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              s,
              i = e.options,
              r = e.selectedIndex,
              a = "select-one" === e.type,
              o = a ? null : [],
              l = a ? r + 1 : i.length;
            for (s = r < 0 ? l : a ? r : 0; s < l; s++)
              if (
                ((n = i[s]).selected || s === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))
              ) {
                if (((t = x(n).val()), a)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (
              var n, s, i = e.options, r = x.makeArray(t), a = i.length;
              a--;

            )
              ((s = i[a]).selected =
                -1 < x.inArray(x.valHooks.option.get(s), r)) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    x.each(["radio", "checkbox"], function () {
      (x.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < x.inArray(x(e).val(), t));
        },
      }),
        f.checkOn ||
          (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (f.focusin = "onfocusin" in e);
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  x.extend(x.event, {
    trigger: function (t, n, s, i) {
      var r,
        a,
        o,
        l,
        d,
        p,
        u,
        f,
        v = [s || g],
        y = c.call(t, "type") ? t.type : t,
        b = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = f = o = s = s || g),
        3 !== s.nodeType &&
          8 !== s.nodeType &&
          !yt.test(y + x.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
          (d = y.indexOf(":") < 0 && "on" + y),
          ((t = t[x.expando]
            ? t
            : new x.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = s),
          (n = null == n ? [t] : x.makeArray(n, [t])),
          (u = x.event.special[y] || {}),
          i || !u.trigger || !1 !== u.trigger.apply(s, n)))
      ) {
        if (!i && !u.noBubble && !m(s)) {
          for (
            l = u.delegateType || y, yt.test(l + y) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            v.push(a), (o = a);
          o === (s.ownerDocument || g) &&
            v.push(o.defaultView || o.parentWindow || e);
        }
        for (r = 0; (a = v[r++]) && !t.isPropagationStopped(); )
          (f = a),
            (t.type = 1 < r ? l : u.bindType || y),
            (p =
              (U.get(a, "events") || Object.create(null))[t.type] &&
              U.get(a, "handle")) && p.apply(a, n),
            (p = d && a[d]) &&
              p.apply &&
              Y(a) &&
              ((t.result = p.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          i ||
            t.isDefaultPrevented() ||
            (u._default && !1 !== u._default.apply(v.pop(), n)) ||
            !Y(s) ||
            (d &&
              h(s[y]) &&
              !m(s) &&
              ((o = s[d]) && (s[d] = null),
              (x.event.triggered = y),
              t.isPropagationStopped() && f.addEventListener(y, bt),
              s[y](),
              t.isPropagationStopped() && f.removeEventListener(y, bt),
              (x.event.triggered = void 0),
              o && (s[d] = o))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var s = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
      x.event.trigger(s, null, t);
    },
  }),
    x.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          x.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return x.event.trigger(e, t, n, !0);
      },
    }),
    f.focusin ||
      x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          x.event.simulate(t, e.target, x.event.fix(e));
        };
        x.event.special[t] = {
          setup: function () {
            var s = this.ownerDocument || this.document || this,
              i = U.access(s, t);
            i || s.addEventListener(e, n, !0), U.access(s, t, (i || 0) + 1);
          },
          teardown: function () {
            var s = this.ownerDocument || this.document || this,
              i = U.access(s, t) - 1;
            i
              ? U.access(s, t, i)
              : (s.removeEventListener(e, n, !0), U.remove(s, t));
          },
        };
      });
  var wt = e.location,
    xt = { guid: Date.now() },
    Et = /\?/;
  x.parseXML = function (t) {
    var n, s;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {}
    return (
      (s = n && n.getElementsByTagName("parsererror")[0]),
      (n && !s) ||
        x.error(
          "Invalid XML: " +
            (s
              ? x
                  .map(s.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : t)
        ),
      n
    );
  };
  var Tt = /\[\]$/,
    Ct = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    $t = /^(?:input|select|textarea|keygen)/i;
  function Mt(e, t, n, s) {
    var i;
    if (Array.isArray(t))
      x.each(t, function (t, i) {
        n || Tt.test(e)
          ? s(e, i)
          : Mt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              s
            );
      });
    else if (n || "object" !== b(t)) s(e, t);
    else for (i in t) Mt(e + "[" + i + "]", t[i], n, s);
  }
  (x.param = function (e, t) {
    var n,
      s = [],
      i = function (e, t) {
        var n = h(t) ? t() : t;
        s[s.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
      x.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Mt(n, e[n], t, i);
    return s.join("&");
  }),
    x.fn.extend({
      serialize: function () {
        return x.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = x.prop(this, "elements");
          return e ? x.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !x(this).is(":disabled") &&
              $t.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !ue.test(e))
            );
          })
          .map(function (e, t) {
            var n = x(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? x.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ct, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ct, "\r\n") };
          })
          .get();
      },
    });
  var kt = /%20/g,
    Pt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Dt = /^(?:GET|HEAD)$/,
    Ot = /^\/\//,
    It = {},
    zt = {},
    Nt = "*/".concat("*"),
    jt = g.createElement("a");
  function Ht(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var s,
        i = 0,
        r = t.toLowerCase().match(z) || [];
      if (h(n))
        for (; (s = r[i++]); )
          "+" === s[0]
            ? ((s = s.slice(1) || "*"), (e[s] = e[s] || []).unshift(n))
            : (e[s] = e[s] || []).push(n);
    };
  }
  function qt(e, t, n, s) {
    var i = {},
      r = e === zt;
    function a(o) {
      var l;
      return (
        (i[o] = !0),
        x.each(e[o] || [], function (e, o) {
          var d = o(t, n, s);
          return "string" != typeof d || r || i[d]
            ? r
              ? !(l = d)
              : void 0
            : (t.dataTypes.unshift(d), a(d), !1);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function Bt(e, t) {
    var n,
      s,
      i = x.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : s || (s = {}))[n] = t[n]);
    return s && x.extend(!0, e, s), e;
  }
  (jt.href = wt.href),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            wt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bcomponents/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": x.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, x.ajaxSettings), t) : Bt(x.ajaxSettings, e);
      },
      ajaxPrefilter: Ht(It),
      ajaxTransport: Ht(zt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var s,
          i,
          r,
          a,
          o,
          l,
          d,
          c,
          p,
          u,
          f = x.ajaxSetup({}, n),
          h = f.context || f,
          m = f.context && (h.nodeType || h.jquery) ? x(h) : x.event,
          v = x.Deferred(),
          y = x.Callbacks("once memory"),
          b = f.statusCode || {},
          w = {},
          E = {},
          T = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (d) {
                if (!a)
                  for (a = {}; (t = At.exec(r)); )
                    a[t[1].toLowerCase() + " "] = (
                      a[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = a[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return d ? r : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == d &&
                  ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == d && (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (d) C.always(e[C.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return s && s.abort(t), S(0, t), this;
            },
          };
        if (
          (v.promise(C),
          (f.url = ((t || f.url || wt.href) + "").replace(
            Ot,
            wt.protocol + "//"
          )),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [""]),
          null == f.crossDomain)
        ) {
          l = g.createElement("a");
          try {
            (l.href = f.url),
              (l.href = l.href),
              (f.crossDomain =
                jt.protocol + "//" + jt.host != l.protocol + "//" + l.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = x.param(f.data, f.traditional)),
          qt(It, f, n, C),
          d)
        )
          return C;
        for (p in ((c = x.event && f.global) &&
          0 == x.active++ &&
          x.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !Dt.test(f.type)),
        (i = f.url.replace(Pt, "")),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (f.data = f.data.replace(kt, "+"))
          : ((u = f.url.slice(i.length)),
            f.data &&
              (f.processData || "string" == typeof f.data) &&
              ((i += (Et.test(i) ? "&" : "?") + f.data), delete f.data),
            !1 === f.cache &&
              ((i = i.replace(Lt, "$1")),
              (u = (Et.test(i) ? "&" : "?") + "_=" + xt.guid++ + u)),
            (f.url = i + u)),
        f.ifModified &&
          (x.lastModified[i] &&
            C.setRequestHeader("If-Modified-Since", x.lastModified[i]),
          x.etag[i] && C.setRequestHeader("If-None-Match", x.etag[i])),
        ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", f.contentType),
        C.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          C.setRequestHeader(p, f.headers[p]);
        if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || d))
          return C.abort();
        if (
          ((T = "abort"),
          y.add(f.complete),
          C.done(f.success),
          C.fail(f.error),
          (s = qt(zt, f, n, C)))
        ) {
          if (((C.readyState = 1), c && m.trigger("ajaxSend", [C, f]), d))
            return C;
          f.async &&
            0 < f.timeout &&
            (o = e.setTimeout(function () {
              C.abort("timeout");
            }, f.timeout));
          try {
            (d = !1), s.send(w, S);
          } catch (t) {
            if (d) throw t;
            S(-1, t);
          }
        } else S(-1, "No Transport");
        function S(t, n, a, l) {
          var p,
            u,
            g,
            w,
            E,
            T = n;
          d ||
            ((d = !0),
            o && e.clearTimeout(o),
            (s = void 0),
            (r = l || ""),
            (C.readyState = 0 < t ? 4 : 0),
            (p = (200 <= t && t < 300) || 304 === t),
            a &&
              (w = (function (e, t, n) {
                for (
                  var s, i, r, a, o = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === s &&
                      (s = e.mimeType || t.getResponseHeader("Content-Type"));
                if (s)
                  for (i in o)
                    if (o[i] && o[i].test(s)) {
                      l.unshift(i);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                      r = i;
                      break;
                    }
                    a || (a = i);
                  }
                  r = r || a;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(f, C, a)),
            !p &&
              -1 < x.inArray("script", f.dataTypes) &&
              x.inArray("json", f.dataTypes) < 0 &&
              (f.converters["text script"] = function () {}),
            (w = (function (e, t, n, s) {
              var i,
                r,
                a,
                o,
                l,
                d = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
              for (r = c.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && s && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = c.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(a = d[l + " " + r] || d["* " + r]))
                      for (i in d)
                        if (
                          (o = i.split(" "))[1] === r &&
                          (a = d[l + " " + o[0]] || d["* " + o[0]])
                        ) {
                          !0 === a
                            ? (a = d[i])
                            : !0 !== d[i] && ((r = o[0]), c.unshift(o[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + r,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, w, C, p)),
            p
              ? (f.ifModified &&
                  ((E = C.getResponseHeader("Last-Modified")) &&
                    (x.lastModified[i] = E),
                  (E = C.getResponseHeader("etag")) && (x.etag[i] = E)),
                204 === t || "HEAD" === f.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = w.state), (u = w.data), (p = !(g = w.error))))
              : ((g = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || T) + ""),
            p ? v.resolveWith(h, [u, T, C]) : v.rejectWith(h, [C, T, g]),
            C.statusCode(b),
            (b = void 0),
            c && m.trigger(p ? "ajaxSuccess" : "ajaxError", [C, f, p ? u : g]),
            y.fireWith(h, [C, T]),
            c &&
              (m.trigger("ajaxComplete", [C, f]),
              --x.active || x.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function (e, t, n) {
        return x.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return x.get(e, void 0, t, "script");
      },
    }),
    x.each(["get", "post"], function (e, t) {
      x[t] = function (e, n, s, i) {
        return (
          h(n) && ((i = i || s), (s = n), (n = void 0)),
          x.ajax(
            x.extend(
              { url: e, type: t, dataType: i, data: n, success: s },
              x.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    x.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (x._evalUrl = function (e, t, n) {
      return x.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          x.globalEval(e, t, n);
        },
      });
    }),
    x.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (h(e) && (e = e.call(this[0])),
            (t = x(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return h(e)
          ? this.each(function (t) {
              x(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = x(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = h(e);
        return this.each(function (n) {
          x(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              x(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (x.expr.pseudos.hidden = function (e) {
      return !x.expr.pseudos.visible(e);
    }),
    (x.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (x.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    Rt = x.ajaxSettings.xhr();
  (f.cors = !!Rt && "withCredentials" in Rt),
    (f.ajax = Rt = !!Rt),
    x.ajaxTransport(function (t) {
      var n, s;
      if (f.cors || (Rt && !t.crossDomain))
        return {
          send: function (i, r) {
            var a,
              o = t.xhr();
            if (
              (o.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) o[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              o.overrideMimeType &&
              o.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              o.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    s =
                    o.onload =
                    o.onerror =
                    o.onabort =
                    o.ontimeout =
                    o.onreadystatechange =
                      null),
                  "abort" === e
                    ? o.abort()
                    : "error" === e
                    ? "number" != typeof o.status
                      ? r(0, "error")
                      : r(o.status, o.statusText)
                    : r(
                        _t[o.status] || o.status,
                        o.statusText,
                        "text" !== (o.responseType || "text") ||
                          "string" != typeof o.responseText
                          ? { binary: o.response }
                          : { text: o.responseText },
                        o.getAllResponseHeaders()
                      ));
              };
            }),
              (o.onload = n()),
              (s = o.onerror = o.ontimeout = n("error")),
              void 0 !== o.onabort
                ? (o.onabort = s)
                : (o.onreadystatechange = function () {
                    4 === o.readyState &&
                      e.setTimeout(function () {
                        n && s();
                      });
                  }),
              (n = n("abort"));
            try {
              o.send((t.hasContent && t.data) || null);
            } catch (i) {
              if (n) throw i;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    x.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    x.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return x.globalEval(e), e;
        },
      },
    }),
    x.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    x.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (s, i) {
            (t = x("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              g.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Wt,
    Xt = [],
    Gt = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || x.expando + "_" + xt.guid++;
      return (this[e] = !0), e;
    },
  }),
    x.ajaxPrefilter("json jsonp", function (t, n, s) {
      var i,
        r,
        a,
        o =
          !1 !== t.jsonp &&
          (Gt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Gt.test(t.data) &&
              "data");
      if (o || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          o
            ? (t[o] = t[o].replace(Gt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || x.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          s.always(function () {
            void 0 === r ? x(e).removeProp(i) : (e[i] = r),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(i)),
              a && h(r) && r(a[0]),
              (a = r = void 0);
          }),
          "script"
        );
    }),
    (f.createHTMLDocument =
      (((Wt = g.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Wt.childNodes.length)),
    (x.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (f.createHTMLDocument
              ? (((s = (t =
                  g.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = g.location.href),
                t.head.appendChild(s))
              : (t = g)),
          (r = !n && []),
          (i = k.exec(e))
            ? [t.createElement(i[1])]
            : ((i = be([e], t, r)),
              r && r.length && x(r).remove(),
              x.merge([], i.childNodes)));
      var s, i, r;
    }),
    (x.fn.load = function (e, t, n) {
      var s,
        i,
        r,
        a = this,
        o = e.indexOf(" ");
      return (
        -1 < o && ((s = ht(e.slice(o))), (e = e.slice(0, o))),
        h(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          x
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (r = arguments),
                a.html(s ? x("<div>").append(x.parseHTML(e)).find(s) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (x.expr.pseudos.animated = function (e) {
      return x.grep(x.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (x.offset = {
      setOffset: function (e, t, n) {
        var s,
          i,
          r,
          a,
          o,
          l,
          d = x.css(e, "position"),
          c = x(e),
          p = {};
        "static" === d && (e.style.position = "relative"),
          (o = c.offset()),
          (r = x.css(e, "top")),
          (l = x.css(e, "left")),
          ("absolute" === d || "fixed" === d) && -1 < (r + l).indexOf("auto")
            ? ((a = (s = c.position()).top), (i = s.left))
            : ((a = parseFloat(r) || 0), (i = parseFloat(l) || 0)),
          h(t) && (t = t.call(e, n, x.extend({}, o))),
          null != t.top && (p.top = t.top - o.top + a),
          null != t.left && (p.left = t.left - o.left + i),
          "using" in t ? t.using.call(e, p) : c.css(p);
      },
    }),
    x.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                x.offset.setOffset(this, e, t);
              });
        var t,
          n,
          s = this[0];
        return s
          ? s.getClientRects().length
            ? ((t = s.getBoundingClientRect()),
              (n = s.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            s = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === x.css(s, "position")) t = s.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = s.ownerDocument,
                e = s.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === x.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== s &&
              1 === e.nodeType &&
              (((i = x(e).offset()).top += x.css(e, "borderTopWidth", !0)),
              (i.left += x.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - x.css(s, "marginTop", !0),
            left: t.left - i.left - x.css(s, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === x.css(e, "position");

          )
            e = e.offsetParent;
          return e || se;
        });
      },
    }),
    x.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function (s) {
          return R(
            this,
            function (e, s, i) {
              var r;
              if (
                (m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === i)
              )
                return r ? r[t] : e[s];
              r
                ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset)
                : (e[s] = i);
            },
            e,
            s,
            arguments.length
          );
        };
      }
    ),
    x.each(["top", "left"], function (e, t) {
      x.cssHooks[t] = Be(f.pixelPosition, function (e, n) {
        if (n)
          return (n = qe(e, t)), ze.test(n) ? x(e).position()[t] + "px" : n;
      });
    }),
    x.each({ Height: "height", Width: "width" }, function (e, t) {
      x.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, s) {
          x.fn[s] = function (i, r) {
            var a = arguments.length && (n || "boolean" != typeof i),
              o = n || (!0 === i || !0 === r ? "margin" : "border");
            return R(
              this,
              function (t, n, i) {
                var r;
                return m(t)
                  ? 0 === s.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      r["scroll" + e],
                      t.body["offset" + e],
                      r["offset" + e],
                      r["client" + e]
                    ))
                  : void 0 === i
                  ? x.css(t, n, o)
                  : x.style(t, n, i, o);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    x.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        x.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    x.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, s) {
        return this.on(t, e, n, s);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    x.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        x.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (x.proxy = function (e, t) {
    var n, s, r;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
      return (
        (s = i.call(arguments, 2)),
        ((r = function () {
          return e.apply(t || this, s.concat(i.call(arguments)));
        }).guid = e.guid =
          e.guid || x.guid++),
        r
      );
  }),
    (x.holdReady = function (e) {
      e ? x.readyWait++ : x.ready(!0);
    }),
    (x.isArray = Array.isArray),
    (x.parseJSON = JSON.parse),
    (x.nodeName = M),
    (x.isFunction = h),
    (x.isWindow = m),
    (x.camelCase = F),
    (x.type = b),
    (x.now = Date.now),
    (x.isNumeric = function (e) {
      var t = x.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (x.trim = function (e) {
      return null == e ? "" : (e + "").replace(Ft, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return x;
      });
  var Yt = e.jQuery,
    Vt = e.$;
  return (
    (x.noConflict = function (t) {
      return e.$ === x && (e.$ = Vt), t && e.jQuery === x && (e.jQuery = Yt), x;
    }),
    void 0 === t && (e.jQuery = e.$ = x),
    x
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    "use strict";
    function e(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function t(n, s) {
      void 0 === n && (n = {}),
        void 0 === s && (s = {}),
        Object.keys(s).forEach((i) => {
          void 0 === n[i]
            ? (n[i] = s[i])
            : e(s[i]) &&
              e(n[i]) &&
              Object.keys(s[i]).length > 0 &&
              t(n[i], s[i]);
        });
    }
    const n = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
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
    function s() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, n), e;
    }
    const i = {
      document: n,
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
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function r() {
      const e = "undefined" != typeof window ? window : {};
      return t(e, i), e;
    }
    class a extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function o(e) {
      void 0 === e && (e = []);
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...o(e)) : t.push(e);
        }),
        t
      );
    }
    function l(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function d(e, t) {
      const n = r(),
        i = s();
      let o = [];
      if (!t && e instanceof a) return e;
      if (!e) return new a(o);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            o.push(t.childNodes[e]);
        } else
          o = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) n.push(s[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) o.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof a) return e;
        o = e;
      }
      return new a(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(o)
      );
    }
    d.fn = a.prototype;
    const c = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const s = o(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...s);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const s = o(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...s);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const s = o(t.map((e) => e.split(" ")));
        return (
          l(this, (e) => s.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const s = o(t.map((e) => e.split(" ")));
        this.forEach((e) => {
          s.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let [s, i, r, a] = t;
        function o(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), d(t).is(i))) r.apply(t, n);
          else {
            const e = d(t).parents();
            for (let t = 0; t < e.length; t += 1)
              d(e[t]).is(i) && r.apply(e[t], n);
          }
        }
        function l(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] && (([s, r, a] = t), (i = void 0)),
          a || (a = !1);
        const c = s.split(" ");
        let p;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (p = 0; p < c.length; p += 1) {
              const e = c[p];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: r, proxyListener: o }),
                t.addEventListener(e, o, a);
            }
          else
            for (p = 0; p < c.length; p += 1) {
              const e = c[p];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: r, proxyListener: l }),
                t.addEventListener(e, l, a);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let [s, i, r, a] = t;
        "function" == typeof t[1] && (([s, r, a] = t), (i = void 0)),
          a || (a = !1);
        const o = s.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const t = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const n = this[e];
            let s;
            if (
              (!i && n.dom7Listeners
                ? (s = n.dom7Listeners[t])
                : i && n.dom7LiveListeners && (s = n.dom7LiveListeners[t]),
              s && s.length)
            )
              for (let e = s.length - 1; e >= 0; e -= 1) {
                const i = s[e];
                (r && i.listener === r) ||
                (r &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === r)
                  ? (n.removeEventListener(t, i.proxyListener, a),
                    s.splice(e, 1))
                  : r ||
                    (n.removeEventListener(t, i.proxyListener, a),
                    s.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function () {
        const e = r();
        for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
          n[s] = arguments[s];
        const i = n[0].split(" "),
          a = n[1];
        for (let t = 0; t < i.length; t += 1) {
          const s = i[t];
          for (let t = 0; t < this.length; t += 1) {
            const i = this[t];
            if (e.CustomEvent) {
              const t = new e.CustomEvent(s, {
                detail: a,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = n.filter((e, t) => t > 0)),
                i.dispatchEvent(t),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = r();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = r(),
            t = s(),
            n = this[0],
            i = n.getBoundingClientRect(),
            a = t.body,
            o = n.clientTop || a.clientTop || 0,
            l = n.clientLeft || a.clientLeft || 0,
            d = n === e ? e.scrollY : n.scrollTop,
            c = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + d - o, left: i.left + c - l };
        }
        return null;
      },
      css: function (e, t) {
        const n = r();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (const t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = r(),
          n = s(),
          i = this[0];
        let o, l;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (o = d(e), l = 0; l < o.length; l += 1) if (o[l] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof a) {
          for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
            if (o[l] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return d([]);
        if (e < 0) {
          const n = t + e;
          return d(n < 0 ? [] : [this[n]]);
        }
        return d([this[e]]);
      },
      append: function () {
        let e;
        const t = s();
        for (let n = 0; n < arguments.length; n += 1) {
          e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          for (let n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const s = t.createElement("div");
              for (s.innerHTML = e; s.firstChild; )
                this[n].appendChild(s.firstChild);
            } else if (e instanceof a)
              for (let t = 0; t < e.length; t += 1) this[n].appendChild(e[t]);
            else this[n].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        const t = s();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(s.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof a)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
              ? d([this[0].nextElementSibling])
              : d([])
            : this[0].nextElementSibling
            ? d([this[0].nextElementSibling])
            : d([])
          : d([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return d([]);
        for (; n.nextElementSibling; ) {
          const s = n.nextElementSibling;
          e ? d(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return d(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && d(t.previousElementSibling).is(e)
              ? d([t.previousElementSibling])
              : d([])
            : t.previousElementSibling
            ? d([t.previousElementSibling])
            : d([]);
        }
        return d([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return d([]);
        for (; n.previousElementSibling; ) {
          const s = n.previousElementSibling;
          e ? d(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return d(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? d(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return d(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let s = this[n].parentNode;
          for (; s; )
            e ? d(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return d(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return d(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].children;
          for (let n = 0; n < s.length; n += 1)
            (e && !d(s[n]).is(e)) || t.push(s[n]);
        }
        return d(t);
      },
      filter: function (e) {
        return d(l(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    function p(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function u() {
      return Date.now();
    }
    function f(e, t) {
      void 0 === t && (t = "x");
      const n = r();
      let s, i, a;
      const o = (function (e) {
        const t = r();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((i = o.transform || o.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new n.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((a =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = a.toString().split(","))),
        "x" === t &&
          (i = n.WebKitCSSMatrix
            ? a.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (i = n.WebKitCSSMatrix
            ? a.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        i || 0
      );
    }
    function h(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function m(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function g() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != s && !m(s)) {
          const n = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = n.length; t < i; t += 1) {
            const i = n[t],
              r = Object.getOwnPropertyDescriptor(s, i);
            void 0 !== r &&
              r.enumerable &&
              (h(e[i]) && h(s[i])
                ? s[i].__swiper__
                  ? (e[i] = s[i])
                  : g(e[i], s[i])
                : !h(e[i]) && h(s[i])
                ? ((e[i] = {}), s[i].__swiper__ ? (e[i] = s[i]) : g(e[i], s[i]))
                : (e[i] = s[i]));
          }
        }
      }
      return e;
    }
    function v(e, t, n) {
      e.style.setProperty(t, n);
    }
    function y(e) {
      let { swiper: t, targetPosition: n, side: s } = e;
      const i = r(),
        a = -t.translate;
      let o,
        l = null;
      const d = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const c = n > a ? "next" : "prev",
        p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (o = new Date().getTime()), null === l && (l = o);
          const e = Math.max(Math.min((o - l) / d, 1), 0),
            r = 0.5 - Math.cos(e * Math.PI) / 2;
          let c = a + r * (n - a);
          if ((p(c, n) && (c = n), t.wrapperEl.scrollTo({ [s]: c }), p(c, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: c });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let b, w, x;
    function E() {
      return (
        b ||
          (b = (function () {
            const e = r(),
              t = s();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        b
      );
    }
    function T(e) {
      return (
        void 0 === e && (e = {}),
        w ||
          (w = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = E(),
              s = r(),
              i = s.navigator.platform,
              a = t || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              l = s.screen.width,
              d = s.screen.height,
              c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = a.match(/(iPad).*OS\s([\d_]+)/);
            const u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              f = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let m = "MacIntel" === i;
            return (
              !p &&
                m &&
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
                ].indexOf(`${l}x${d}`) >= 0 &&
                ((p = a.match(/(Version)\/([\d.]+)/)),
                p || (p = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !h && ((o.os = "android"), (o.android = !0)),
              (p || f || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        w
      );
    }
    function C() {
      return (
        x ||
          (x = (function () {
            const e = r();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
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
        x
      );
    }
    Object.keys(c).forEach((e) => {
      Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
    });
    var S = {
        on(e, t, n) {
          const s = this;
          if ("function" != typeof t) return s;
          const i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][i](t);
            }),
            s
          );
        },
        once(e, t, n) {
          const s = this;
          if ("function" != typeof t) return s;
          function i() {
            s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
              r[a] = arguments[a];
            t.apply(s, r);
          }
          return (i.__emitterProxy = t), s.on(e, i, n);
        },
        onAny(e, t) {
          const n = this;
          if ("function" != typeof e) return n;
          const s = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((s, i) => {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners) return e;
          let t, n, s;
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
            r[a] = arguments[a];
          return (
            "string" == typeof r[0] || Array.isArray(r[0])
              ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
              : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
            n.unshift(s),
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(s, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(s, n);
                  });
            }),
            e
          );
        },
      },
      $ = {
        updateSize: function () {
          const e = this;
          let t, n;
          const s = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : s[0].clientWidth),
            (n =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : s[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
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
          const s = e.params,
            { $wrapperEl: i, size: r, rtlTranslate: a, wrongRTL: o } = e,
            l = e.virtual && s.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = i.children(`.${e.params.slideClass}`),
            p = l ? e.virtual.slides.length : c.length;
          let u = [];
          const f = [],
            h = [];
          let m = s.slidesOffsetBefore;
          "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
          let g = s.slidesOffsetAfter;
          "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
          const y = e.snapGrid.length,
            b = e.slidesGrid.length;
          let w = s.spaceBetween,
            x = -m,
            E = 0,
            T = 0;
          if (void 0 === r) return;
          "string" == typeof w &&
            w.indexOf("%") >= 0 &&
            (w = (parseFloat(w.replace("%", "")) / 100) * r),
            (e.virtualSize = -w),
            a
              ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            s.centeredSlides &&
              s.cssMode &&
              (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
              v(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const C = s.grid && s.grid.rows > 1 && e.grid;
          let S;
          C && e.grid.initSlides(p);
          const $ =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => void 0 !== s.breakpoints[e].slidesPerView
            ).length > 0;
          for (let i = 0; i < p; i += 1) {
            S = 0;
            const a = c.eq(i);
            if (
              (C && e.grid.updateSlide(i, a, p, t), "none" !== a.css("display"))
            ) {
              if ("auto" === s.slidesPerView) {
                $ && (c[i].style[t("width")] = "");
                const r = getComputedStyle(a[0]),
                  o = a[0].style.transform,
                  l = a[0].style.webkitTransform;
                if (
                  (o && (a[0].style.transform = "none"),
                  l && (a[0].style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  S = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                else {
                  const e = n(r, "width"),
                    t = n(r, "padding-left"),
                    s = n(r, "padding-right"),
                    i = n(r, "margin-left"),
                    o = n(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) S = e + i + o;
                  else {
                    const { clientWidth: n, offsetWidth: r } = a[0];
                    S = e + t + s + i + o + (r - n);
                  }
                }
                o && (a[0].style.transform = o),
                  l && (a[0].style.webkitTransform = l),
                  s.roundLengths && (S = Math.floor(S));
              } else
                (S = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
                  s.roundLengths && (S = Math.floor(S)),
                  c[i] && (c[i].style[t("width")] = `${S}px`);
              c[i] && (c[i].swiperSlideSize = S),
                h.push(S),
                s.centeredSlides
                  ? ((x = x + S / 2 + E / 2 + w),
                    0 === E && 0 !== i && (x = x - r / 2 - w),
                    0 === i && (x = x - r / 2 - w),
                    Math.abs(x) < 0.001 && (x = 0),
                    s.roundLengths && (x = Math.floor(x)),
                    T % s.slidesPerGroup == 0 && u.push(x),
                    f.push(x))
                  : (s.roundLengths && (x = Math.floor(x)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                      e.params.slidesPerGroup ==
                      0 && u.push(x),
                    f.push(x),
                    (x = x + S + w)),
                (e.virtualSize += S + w),
                (E = S),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
            a &&
              o &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              i.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
            C && e.grid.updateWrapperSize(S, u, t),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < u.length; n += 1) {
              let i = u[n];
              s.roundLengths && (i = Math.floor(i)),
                u[n] <= e.virtualSize - r && t.push(i);
            }
            (u = t),
              Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
                u.push(e.virtualSize - r);
          }
          if ((0 === u.length && (u = [0]), 0 !== s.spaceBetween)) {
            const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
            c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
              [n]: `${w}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (e -= s.spaceBetween);
            const t = e - r;
            u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (e -= s.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              u.forEach((e, n) => {
                u[n] = e - t;
              }),
                f.forEach((e, n) => {
                  f[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: u,
              slidesGrid: f,
              slidesSizesGrid: h,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
              v(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (p !== d && e.emit("slidesLengthChange"),
            u.length !== y &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            f.length !== b && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
          ) {
            const t = `${s.containerModifierClass}backface-hidden`,
              n = e.$el.hasClass(t);
            p <= s.maxBackfaceHiddenSlides
              ? n || e.$el.addClass(t)
              : n && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            s = t.virtual && t.params.virtual.enabled;
          let i,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const a = (e) =>
            s
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                n.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !s) break;
                n.push(a(e));
              }
          else n.push(a(t.activeIndex));
          for (i = 0; i < n.length; i += 1)
            if (void 0 !== n[i]) {
              const e = n[i].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: s, rtlTranslate: i, snapGrid: r } = t;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          i && (a = e),
            s.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < s.length; e += 1) {
            const o = s[e];
            let l = o.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
            const d =
                (a + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + n.spaceBetween),
              c =
                (a - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + n.spaceBetween),
              p = -(a - l),
              u = p + t.slidesSizesGrid[e];
            ((p >= 0 && p < t.size - 1) ||
              (u > 1 && u <= t.size) ||
              (p <= 0 && u >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(e),
              s.eq(e).addClass(n.slideVisibleClass)),
              (o.progress = i ? -d : d),
              (o.originalProgress = i ? -c : c);
          }
          t.visibleSlides = d(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            s = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: r, isEnd: a } = t;
          const o = r,
            l = a;
          0 === s
            ? ((i = 0), (r = !0), (a = !0))
            : ((i = (e - t.minTranslate()) / s), (r = i <= 0), (a = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: r, isEnd: a }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            a && !l && t.emit("reachEnd toEdge"),
            ((o && !r) || (l && !a)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: s,
              activeIndex: i,
              realIndex: r,
            } = e,
            a = e.virtual && n.virtual.enabled;
          let o;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (o = a
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            o.addClass(n.slideActiveClass),
            n.loop &&
              (o.hasClass(n.slideDuplicateClass)
                ? s
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = o
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let d = o
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === d.length &&
            ((d = t.eq(-1)), d.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? s
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : s
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              d.hasClass(n.slideDuplicateClass)
                ? s
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: s,
              snapGrid: i,
              params: r,
              activeIndex: a,
              realIndex: o,
              snapIndex: l,
            } = t;
          let d,
            c = e;
          if (void 0 === c) {
            for (let e = 0; e < s.length; e += 1)
              void 0 !== s[e + 1]
                ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2
                  ? (c = e)
                  : n >= s[e] && n < s[e + 1] && (c = e + 1)
                : n >= s[e] && (c = e);
            r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (i.indexOf(n) >= 0) d = i.indexOf(n);
          else {
            const e = Math.min(r.slidesPerGroupSkip, c);
            d = e + Math.floor((c - e) / r.slidesPerGroup);
          }
          if ((d >= i.length && (d = i.length - 1), c === a))
            return void (
              d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
            );
          const p = parseInt(
            t.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          Object.assign(t, {
            snapIndex: d,
            realIndex: p,
            previousIndex: a,
            activeIndex: c,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            o !== p && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            s = d(e).closest(`.${n.slideClass}`)[0];
          let i,
            r = !1;
          if (s)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === s) {
                (r = !0), (i = e);
                break;
              }
          if (!s || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = s),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  d(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      M = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: s,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return n ? -s : s;
          if (t.cssMode) return s;
          let r = f(i[0], e);
          return n && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: s,
              params: i,
              $wrapperEl: r,
              wrapperEl: a,
              progress: o,
            } = n;
          let l,
            d = 0,
            c = 0;
          n.isHorizontal() ? (d = s ? -e : e) : (c = e),
            i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
            i.cssMode
              ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -d : -c)
              : i.virtualTranslate ||
                r.transform(`translate3d(${d}px, ${c}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? d : c);
          const p = n.maxTranslate() - n.minTranslate();
          (l = 0 === p ? 0 : (e - n.minTranslate()) / p),
            l !== o && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, s, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === s && (s = !0);
          const r = this,
            { params: a, wrapperEl: o } = r;
          if (r.animating && a.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            d = r.maxTranslate();
          let c;
          if (
            ((c = s && e > l ? l : s && e < d ? d : e),
            r.updateProgress(c),
            a.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!r.support.smoothScroll)
                return (
                  y({
                    swiper: r,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(c),
                n &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(c),
                n &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        n && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
    function k(e) {
      let { swiper: t, runCallbacks: n, direction: s, step: i } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = s;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${i}`),
        n && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`),
          "next" === o
            ? t.emit(`slideNextTransition${i}`)
            : t.emit(`slidePrevTransition${i}`);
      }
    }
    var P = {
        slideTo: function (e, t, n, s, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: d,
            previousIndex: c,
            activeIndex: p,
            rtlTranslate: u,
            wrapperEl: f,
            enabled: h,
          } = r;
          if (
            (r.animating && o.preventInteractionOnTransition) ||
            (!h && !s && !i)
          )
            return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, a);
          let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (p || o.initialSlide || 0) === (c || 0) &&
              n &&
              r.emit("beforeSlideChangeStart");
          const v = -l[g];
          if ((r.updateProgress(v), o.normalizeSlideIndex))
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * d[e]),
                s = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1]
                ? t >= n && t < s - (s - n) / 2
                  ? (a = e)
                  : t >= n && t < s && (a = e + 1)
                : t >= n && (a = e);
            }
          if (r.initialized && a !== p) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (p || 0) !== a
            )
              return !1;
          }
          let b;
          if (
            ((b = a > p ? "next" : a < p ? "prev" : "reset"),
            (u && -v === r.translate) || (!u && v === r.translate))
          )
            return (
              r.updateActiveIndex(a),
              o.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== o.effect && r.setTranslate(v),
              "reset" !== b && (r.transitionStart(n, b), r.transitionEnd(n, b)),
              !1
            );
          if (o.cssMode) {
            const e = r.isHorizontal(),
              n = u ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  y({ swiper: r, targetPosition: n, side: e ? "left" : "top" }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(a),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(n, b),
            0 === t
              ? r.transitionEnd(n, b)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(n, b));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          const i = this;
          let r = e;
          return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            { animating: i, enabled: r, params: a } = s;
          if (!r) return s;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return a.rewind && s.isEnd
            ? s.slideTo(0, e, t, n)
            : s.slideTo(s.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            {
              params: i,
              animating: r,
              snapGrid: a,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: d,
            } = s;
          if (!d) return s;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = c(l ? s.translate : -s.translate),
            u = a.map((e) => c(e));
          let f = a[u.indexOf(p) - 1];
          if (void 0 === f && i.cssMode) {
            let e;
            a.forEach((t, n) => {
              p >= t && (e = n);
            }),
              void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            (void 0 !== f &&
              ((h = o.indexOf(f)),
              h < 0 && (h = s.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((h = h - s.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            i.rewind && s.isBeginning)
          ) {
            const i =
              s.params.virtual && s.params.virtual.enabled && s.virtual
                ? s.virtual.slides.length - 1
                : s.slides.length - 1;
            return s.slideTo(i, e, t, n);
          }
          return s.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, s) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = 0.5);
          const i = this;
          let r = i.activeIndex;
          const a = Math.min(i.params.slidesPerGroupSkip, r),
            o = a + Math.floor((r - a) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[o]) {
            const e = i.snapGrid[o];
            l - e > (i.snapGrid[o + 1] - e) * s &&
              (r += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[o - 1];
            l - e <= (i.snapGrid[o] - e) * s && (r -= i.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, i.slidesGrid.length - 1)),
            i.slideTo(r, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            s =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              d(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - s / 2 ||
                  r > e.slides.length - e.loopedSlides + s / 2
                  ? (e.loopFix(),
                    (r = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    p(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - s
                ? (e.loopFix(),
                  (r = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  p(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      },
      L = {
        loopCreate: function () {
          const e = this,
            t = s(),
            { params: n, $wrapperEl: i } = e,
            r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
          r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let a = r.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (a.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let s = 0; s < e; s += 1) {
                const e = d(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                r.append(e);
              }
              a = r.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = a.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
          const o = [],
            l = [];
          a.each((t, n) => {
            const s = d(t);
            n < e.loopedSlides && l.push(t),
              n < a.length && n >= a.length - e.loopedSlides && o.push(t),
              s.attr("data-swiper-slide-index", n);
          });
          for (let e = 0; e < l.length; e += 1)
            r.append(d(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            r.prepend(d(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: s,
            allowSlidePrev: i,
            allowSlideNext: r,
            snapGrid: a,
            rtlTranslate: o,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const d = -a[t] - e.getTranslate();
          t < s
            ? ((l = n.length - 3 * s + t),
              (l += s),
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d))
            : t >= n.length - s &&
              ((l = -n.length + t + s),
              (l += s),
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d)),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = r),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
    function A(e) {
      const t = this,
        n = s(),
        i = r(),
        a = t.touchEventsData,
        { params: o, touches: l, enabled: c } = t;
      if (!c) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let p = e;
      p.originalEvent && (p = p.originalEvent);
      let f = d(p.target);
      if ("wrapper" === o.touchEventsTarget && !f.closest(t.wrapperEl).length)
        return;
      if (
        ((a.isTouchEvent = "touchstart" === p.type),
        !a.isTouchEvent && "which" in p && 3 === p.which)
      )
        return;
      if (!a.isTouchEvent && "button" in p && p.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      o.noSwipingClass &&
        "" !== o.noSwipingClass &&
        p.target &&
        p.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (f = d(e.path[0]));
      const h = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        m = !(!p.target || !p.target.shadowRoot);
      if (
        o.noSwiping &&
        (m
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  return n && n !== s() && n !== r()
                    ? (n.assignedSlot && (n = n.assignedSlot),
                      n.closest(e) || t(n.getRootNode().host))
                    : null;
                })(t)
              );
            })(h, p.target)
          : f.closest(h)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !f.closest(o.swipeHandler)[0]) return;
      (l.currentX =
        "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
        (l.currentY =
          "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
      const g = l.currentX,
        v = l.currentY,
        y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (y && (g <= b || g >= i.innerWidth - b)) {
        if ("prevent" !== y) return;
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
        (l.startX = g),
        (l.startY = v),
        (a.touchStartTime = u()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (a.allowThresholdMove = !1),
        "touchstart" !== p.type)
      ) {
        let e = !0;
        f.is(a.focusableElements) &&
          ((e = !1), "SELECT" === f[0].nodeName && (a.isTouched = !1)),
          n.activeElement &&
            d(n.activeElement).is(a.focusableElements) &&
            n.activeElement !== f[0] &&
            n.activeElement.blur();
        const s = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !s) ||
          f[0].isContentEditable ||
          p.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", p);
    }
    function D(e) {
      const t = s(),
        n = this,
        i = n.touchEventsData,
        { params: r, touches: a, rtlTranslate: o, enabled: l } = n;
      if (!l) return;
      let c = e;
      if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          n.emit("touchMoveOpposite", c)
        );
      if (i.isTouchEvent && "touchmove" !== c.type) return;
      const p =
          "touchmove" === c.type &&
          c.targetTouches &&
          (c.targetTouches[0] || c.changedTouches[0]),
        f = "touchmove" === c.type ? p.pageX : c.pageX,
        h = "touchmove" === c.type ? p.pageY : c.pageY;
      if (c.preventedByNestedSwiper) return (a.startX = f), void (a.startY = h);
      if (!n.allowTouchMove)
        return (
          d(c.target).is(i.focusableElements) || (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(a, {
              startX: f,
              startY: h,
              currentX: f,
              currentY: h,
            }),
            (i.touchStartTime = u()))
          )
        );
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (n.isVertical()) {
          if (
            (h < a.startY && n.translate <= n.maxTranslate()) ||
            (h > a.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (f < a.startX && n.translate <= n.maxTranslate()) ||
          (f > a.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        c.target === t.activeElement &&
        d(c.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
      )
        return;
      (a.currentX = f), (a.currentY = h);
      const m = a.currentX - a.startX,
        g = a.currentY - a.startY;
      if (n.params.threshold && Math.sqrt(m ** 2 + g ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (n.isHorizontal() && a.currentY === a.startY) ||
        (n.isVertical() && a.currentX === a.startX)
          ? (i.isScrolling = !1)
          : m * m + g * g >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", c),
        void 0 === i.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
        i.isMoved ||
          (r.loop && !r.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", c)),
        n.emit("sliderMove", c),
        (i.isMoved = !0);
      let v = n.isHorizontal() ? m : g;
      (a.diff = v),
        (v *= r.touchRatio),
        o && (v = -v),
        (n.swipeDirection = v > 0 ? "prev" : "next"),
        (i.currentTranslate = v + i.startTranslate);
      let y = !0,
        b = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (b = 0),
        v > 0 && i.currentTranslate > n.minTranslate()
          ? ((y = !1),
            r.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + v) ** b))
          : v < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((y = !1),
            r.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - v) ** b)),
        y && (c.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            void (a.diff = n.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
          r.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          r.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function O(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: s,
          touches: i,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      s.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = u(),
        c = d - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = u()),
        p(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let f;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (f = s.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: f });
      let h = 0,
        m = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== a[e + t]
          ? f >= a[e] && f < a[e + t] && ((h = e), (m = a[e + t] - a[e]))
          : f >= a[e] && ((h = e), (m = a[a.length - 1] - a[a.length - 2]));
      }
      let g = null,
        v = null;
      s.rewind &&
        (t.isBeginning
          ? (v =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const y = (f - a[h]) / m,
        b = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (c > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (y >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? g : h + b)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (y > 1 - s.longSwipesRatio
              ? t.slideTo(h + b)
              : null !== v && y < 0 && Math.abs(y) > s.longSwipesRatio
              ? t.slideTo(v)
              : t.slideTo(h));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation ||
        (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
          ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + b),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : h))
          : l.target === t.navigation.nextEl
          ? t.slideTo(h + b)
          : t.slideTo(h);
      }
    }
    function I() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e;
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
        (e.allowSlidePrev = i),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function z(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function N() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
      if (!s) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let j = !1;
    function H() {}
    const q = (e, t) => {
      const n = s(),
        {
          params: i,
          touchEvents: r,
          el: a,
          wrapperEl: o,
          device: l,
          support: d,
        } = e,
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (d.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !d.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        a[p](r.start, e.onTouchStart, t),
          a[p](
            r.move,
            e.onTouchMove,
            d.passiveListener ? { passive: !1, capture: c } : c
          ),
          a[p](r.end, e.onTouchEnd, t),
          r.cancel && a[p](r.cancel, e.onTouchEnd, t);
      } else
        a[p](r.start, e.onTouchStart, !1),
          n[p](r.move, e.onTouchMove, c),
          n[p](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        a[p]("click", e.onClick, !0),
        i.cssMode && o[p]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              I,
              !0
            )
          : e[u]("observerUpdate", I, !0);
    };
    var B = {
      attachEvents: function () {
        const e = this,
          t = s(),
          { params: n, support: i } = e;
        (e.onTouchStart = A.bind(e)),
          (e.onTouchMove = D.bind(e)),
          (e.onTouchEnd = O.bind(e)),
          n.cssMode && (e.onScroll = N.bind(e)),
          (e.onClick = z.bind(e)),
          i.touch && !j && (t.addEventListener("touchstart", H), (j = !0)),
          q(e, "on");
      },
      detachEvents: function () {
        q(this, "off");
      },
    };
    const _ = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: s,
              $el: i,
              device: r,
              support: a,
            } = e,
            o = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((s) => {
                        e[s] && n.push(t + s);
                      })
                    : "string" == typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !a.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: s },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
              ],
              n.containerModifierClass
            );
          t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      W = {
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
    function X(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const s = Object.keys(n)[0],
          i = n[s];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in i
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                g(t, n))
              : g(t, n))
          : g(t, n);
      };
    }
    const G = {
        eventsEmitter: S,
        update: $,
        translate: M,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: s } = n;
            s.cssMode ||
              (s.autoHeight && n.updateAutoHeight(),
              k({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: s } = n;
            (n.animating = !1),
              s.cssMode ||
                (n.setTransition(0),
                k({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: P,
        loop: L,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: B,
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: n,
                loopedSlides: s = 0,
                params: i,
                $el: r,
              } = e,
              a = i.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
            if (!o || e.currentBreakpoint === o) return;
            const l = (o in a ? a[o] : void 0) || e.originalParams,
              d = _(e, i),
              c = _(e, l),
              p = i.enabled;
            d && !c
              ? (r.removeClass(
                  `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !d &&
                c &&
                (r.addClass(`${i.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === i.grid.fill)) &&
                  r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const u = l.direction && l.direction !== i.direction,
              f = i.loop && (l.slidesPerView !== i.slidesPerView || u);
            u && n && e.changeDirection(), g(e.params, l);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              p && !h ? e.disable() : !p && h && e.enable(),
              (e.currentBreakpoint = o),
              e.emit("_beforeBreakpoint", l),
              f &&
                n &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - s + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t, n) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !n))
            )
              return;
            let s = !1;
            const i = r(),
              a = "window" === t ? i.innerHeight : n.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? i.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
                : a <= n.clientWidth && (s = r);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: s } = n;
            if (s) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: R,
        images: {
          loadImage: function (e, t, n, s, i, a) {
            const o = r();
            let l;
            function c() {
              a && a();
            }
            d(e).parent("picture")[0] || (e.complete && i)
              ? c()
              : t
              ? ((l = new o.Image()),
                (l.onload = c),
                (l.onerror = c),
                s && (l.sizes = s),
                n && (l.srcset = n),
                t && (l.src = t))
              : c();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const s = e.imagesToLoad[n];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      F = {};
    class Y {
      constructor() {
        let e, t;
        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
          s[i] = arguments[i];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
          t || (t = {}),
          (t = g({}, t)),
          e && !t.el && (t.el = e),
          t.el && d(t.el).length > 1)
        ) {
          const e = [];
          return (
            d(t.el).each((n) => {
              const s = g({}, t, { el: n });
              e.push(new Y(s));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = E()),
          (r.device = T({ userAgent: t.userAgent })),
          (r.browser = C()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const a = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: X(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const o = g({}, W, a);
        return (
          (r.params = g({}, o, F, t)),
          (r.originalParams = g({}, r.params)),
          (r.passedParams = g({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = d),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: d(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
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
              focusableElements: r.params.focusableElements,
              lastClickTime: u(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
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
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = n.minTranslate(),
          i = (n.maxTranslate() - s) * e + s;
        n.translateTo(i, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const s = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: s }), e.emit("_slideClass", n, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: s,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = s[o].swiperSlideSize;
          for (let n = o + 1; n < s.length; n += 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let n = o - 1; n >= 0; n -= 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < s.length; e += 1)
            (t ? i[e] + r[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
        else for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || s()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          s = n.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${s}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = d(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = d(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children(i());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = s().createElement("div");
          (r = d(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
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
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: s, $el: i, $wrapperEl: r, slides: a } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            s.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        g(F, e);
      }
      static get extendedDefaults() {
        return F;
      }
      static get defaults() {
        return W;
      }
      static installModule(e) {
        Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
        const t = Y.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => Y.installModule(e)), Y)
          : (Y.installModule(e), Y);
      }
    }
    function V(e, t, n, i) {
      const r = s();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((s) => {
            if (!n[s] && !0 === n.auto) {
              let a = e.$el.children(`.${i[s]}`)[0];
              a ||
                ((a = r.createElement("div")),
                (a.className = i[s]),
                e.$el.append(a)),
                (n[s] = a),
                (t[s] = a);
            }
          }),
        n
      );
    }
    function U(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function K(e) {
      const t = this,
        { $wrapperEl: n, params: s } = t;
      if ((s.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
        for (let t = 0; t < e.length; t += 1) e[t] && n.append(e[t]);
      else n.append(e);
      s.loop && t.loopCreate(), s.observer || t.update();
    }
    function Q(e) {
      const t = this,
        { params: n, $wrapperEl: s, activeIndex: i } = t;
      n.loop && t.loopDestroy();
      let r = i + 1;
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
        r = i + e.length;
      } else s.prepend(e);
      n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(r, 0, !1);
    }
    function J(e, t) {
      const n = this,
        { $wrapperEl: s, params: i, activeIndex: r } = n;
      let a = r;
      i.loop &&
        ((a -= n.loopedSlides),
        n.loopDestroy(),
        (n.slides = s.children(`.${i.slideClass}`)));
      const o = n.slides.length;
      if (e <= 0) return void n.prependSlide(t);
      if (e >= o) return void n.appendSlide(t);
      let l = a > e ? a + 1 : a;
      const d = [];
      for (let t = o - 1; t >= e; t -= 1) {
        const e = n.slides.eq(t);
        e.remove(), d.unshift(e);
      }
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
        l = a > e ? a + t.length : a;
      } else s.append(t);
      for (let e = 0; e < d.length; e += 1) s.append(d[e]);
      i.loop && n.loopCreate(),
        i.observer || n.update(),
        i.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
    }
    function Z(e) {
      const t = this,
        { params: n, $wrapperEl: s, activeIndex: i } = t;
      let r = i;
      n.loop &&
        ((r -= t.loopedSlides),
        t.loopDestroy(),
        (t.slides = s.children(`.${n.slideClass}`)));
      let a,
        o = r;
      if ("object" == typeof e && "length" in e) {
        for (let n = 0; n < e.length; n += 1)
          (a = e[n]), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
        o = Math.max(o, 0);
      } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
      n.loop && t.loopCreate(),
        n.observer || t.update(),
        n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
    }
    function ee() {
      const e = this,
        t = [];
      for (let n = 0; n < e.slides.length; n += 1) t.push(n);
      e.removeSlide(t);
    }
    function te(e) {
      const {
        effect: t,
        swiper: n,
        on: s,
        setTranslate: i,
        setTransition: r,
        overwriteParams: a,
        perspective: o,
        recreateShadows: l,
        getEffectParams: d,
      } = e;
      let c;
      s("beforeInit", () => {
        if (n.params.effect !== t) return;
        n.classNames.push(`${n.params.containerModifierClass}${t}`),
          o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
        const e = a ? a() : {};
        Object.assign(n.params, e), Object.assign(n.originalParams, e);
      }),
        s("setTranslate", () => {
          n.params.effect === t && i();
        }),
        s("setTransition", (e, s) => {
          n.params.effect === t && r(s);
        }),
        s("transitionEnd", () => {
          if (n.params.effect === t && l) {
            if (!d || !d().slideShadows) return;
            n.slides.each((e) => {
              n.$(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .remove();
            }),
              l();
          }
        }),
        s("virtualUpdate", () => {
          n.params.effect === t &&
            (n.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && n.slides && n.slides.length && (i(), (c = !1));
            }));
        });
    }
    function ne(e, t) {
      return e.transformEl
        ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
        : t;
    }
    function se(e) {
      let { swiper: t, duration: n, transformEl: s, allSlides: i } = e;
      const { slides: r, activeIndex: a, $wrapperEl: o } = t;
      if (t.params.virtualTranslate && 0 !== n) {
        let e,
          n = !1;
        (e = i ? (s ? r.find(s) : r) : s ? r.eq(a).find(s) : r.eq(a)),
          e.transitionEnd(() => {
            if (n) return;
            if (!t || t.destroyed) return;
            (n = !0), (t.animating = !1);
            const e = ["webkitTransitionEnd", "transitionend"];
            for (let t = 0; t < e.length; t += 1) o.trigger(e[t]);
          });
      }
    }
    function ie(e, t, n) {
      const s = "swiper-slide-shadow" + (n ? `-${n}` : ""),
        i = e.transformEl ? t.find(e.transformEl) : t;
      let r = i.children(`.${s}`);
      return (
        r.length ||
          ((r = d(
            `<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`
          )),
          i.append(r)),
        r
      );
    }
    Object.keys(G).forEach((e) => {
      Object.keys(G[e]).forEach((t) => {
        Y.prototype[t] = G[e][t];
      });
    }),
      Y.use([
        function (e) {
          let { swiper: t, on: n, emit: s } = e;
          const i = r();
          let a = null,
            o = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            d = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((a = new ResizeObserver((e) => {
                  o = i.requestAnimationFrame(() => {
                    const { width: n, height: s } = t;
                    let i = n,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: s, target: a } = e;
                      (a && a !== t.el) ||
                        ((i = s ? s.width : (n[0] || n).inlineSize),
                        (r = s ? s.height : (n[0] || n).blockSize));
                    }),
                      (i === n && r === s) || l();
                  });
                })),
                a.observe(t.el))
              : (i.addEventListener("resize", l),
                i.addEventListener("orientationchange", d));
          }),
            n("destroy", () => {
              o && i.cancelAnimationFrame(o),
                a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                i.removeEventListener("resize", l),
                i.removeEventListener("orientationchange", d);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: s, emit: i } = e;
          const a = [],
            o = r(),
            l = function (e, t) {
              void 0 === t && (t = {});
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                a.push(n);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.$el[0], { childList: t.params.observeSlideChildren }),
                  l(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    const re = [
      function (e) {
        let t,
          { swiper: n, extendParams: s, on: i, emit: r } = e;
        function a(e, t) {
          const s = n.params.virtual;
          if (s.cache && n.virtual.cache[t]) return n.virtual.cache[t];
          const i = s.renderSlide
            ? d(s.renderSlide.call(n, e, t))
            : d(
                `<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
              );
          return (
            i.attr("data-swiper-slide-index") ||
              i.attr("data-swiper-slide-index", t),
            s.cache && (n.virtual.cache[t] = i),
            i
          );
        }
        function o(e) {
          const {
              slidesPerView: t,
              slidesPerGroup: s,
              centeredSlides: i,
            } = n.params,
            { addSlidesBefore: o, addSlidesAfter: l } = n.params.virtual,
            { from: d, to: c, slides: p, slidesGrid: u, offset: f } = n.virtual;
          n.params.cssMode || n.updateActiveIndex();
          const h = n.activeIndex || 0;
          let m, g, v;
          (m = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top"),
            i
              ? ((g = Math.floor(t / 2) + s + l),
                (v = Math.floor(t / 2) + s + o))
              : ((g = t + (s - 1) + l), (v = s + o));
          const y = Math.max((h || 0) - v, 0),
            b = Math.min((h || 0) + g, p.length - 1),
            w = (n.slidesGrid[y] || 0) - (n.slidesGrid[0] || 0);
          function x() {
            n.updateSlides(),
              n.updateProgress(),
              n.updateSlidesClasses(),
              n.lazy && n.params.lazy.enabled && n.lazy.load(),
              r("virtualUpdate");
          }
          if (
            (Object.assign(n.virtual, {
              from: y,
              to: b,
              offset: w,
              slidesGrid: n.slidesGrid,
            }),
            d === y && c === b && !e)
          )
            return (
              n.slidesGrid !== u && w !== f && n.slides.css(m, `${w}px`),
              n.updateProgress(),
              void r("virtualUpdate")
            );
          if (n.params.virtual.renderExternal)
            return (
              n.params.virtual.renderExternal.call(n, {
                offset: w,
                from: y,
                to: b,
                slides: (function () {
                  const e = [];
                  for (let t = y; t <= b; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void (n.params.virtual.renderExternalUpdate
                ? x()
                : r("virtualUpdate"))
            );
          const E = [],
            T = [];
          if (e) n.$wrapperEl.find(`.${n.params.slideClass}`).remove();
          else
            for (let e = d; e <= c; e += 1)
              (e < y || e > b) &&
                n.$wrapperEl
                  .find(
                    `.${n.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                  .remove();
          for (let t = 0; t < p.length; t += 1)
            t >= y &&
              t <= b &&
              (void 0 === c || e
                ? T.push(t)
                : (t > c && T.push(t), t < d && E.push(t)));
          T.forEach((e) => {
            n.$wrapperEl.append(a(p[e], e));
          }),
            E.sort((e, t) => t - e).forEach((e) => {
              n.$wrapperEl.prepend(a(p[e], e));
            }),
            n.$wrapperEl.children(".swiper-slide").css(m, `${w}px`),
            x();
        }
        s({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        }),
          (n.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }),
          i("beforeInit", () => {
            n.params.virtual.enabled &&
              ((n.virtual.slides = n.params.virtual.slides),
              n.classNames.push(`${n.params.containerModifierClass}virtual`),
              (n.params.watchSlidesProgress = !0),
              (n.originalParams.watchSlidesProgress = !0),
              n.params.initialSlide || o());
          }),
          i("setTranslate", () => {
            n.params.virtual.enabled &&
              (n.params.cssMode && !n._immediateVirtual
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    o();
                  }, 100)))
                : o());
          }),
          i("init update resize", () => {
            n.params.virtual.enabled &&
              n.params.cssMode &&
              v(n.wrapperEl, "--swiper-virtual-size", `${n.virtualSize}px`);
          }),
          Object.assign(n.virtual, {
            appendSlide: function (e) {
              if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1)
                  e[t] && n.virtual.slides.push(e[t]);
              else n.virtual.slides.push(e);
              o(!0);
            },
            prependSlide: function (e) {
              const t = n.activeIndex;
              let s = t + 1,
                i = 1;
              if (Array.isArray(e)) {
                for (let t = 0; t < e.length; t += 1)
                  e[t] && n.virtual.slides.unshift(e[t]);
                (s = t + e.length), (i = e.length);
              } else n.virtual.slides.unshift(e);
              if (n.params.virtual.cache) {
                const e = n.virtual.cache,
                  t = {};
                Object.keys(e).forEach((n) => {
                  const s = e[n],
                    r = s.attr("data-swiper-slide-index");
                  r && s.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                    (t[parseInt(n, 10) + i] = s);
                }),
                  (n.virtual.cache = t);
              }
              o(!0), n.slideTo(s, 0);
            },
            removeSlide: function (e) {
              if (null == e) return;
              let t = n.activeIndex;
              if (Array.isArray(e))
                for (let s = e.length - 1; s >= 0; s -= 1)
                  n.virtual.slides.splice(e[s], 1),
                    n.params.virtual.cache && delete n.virtual.cache[e[s]],
                    e[s] < t && (t -= 1),
                    (t = Math.max(t, 0));
              else
                n.virtual.slides.splice(e, 1),
                  n.params.virtual.cache && delete n.virtual.cache[e],
                  e < t && (t -= 1),
                  (t = Math.max(t, 0));
              o(!0), n.slideTo(t, 0);
            },
            removeAllSlides: function () {
              (n.virtual.slides = []),
                n.params.virtual.cache && (n.virtual.cache = {}),
                o(!0),
                n.slideTo(0, 0);
            },
            update: o,
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i, emit: a } = e;
        const o = s(),
          l = r();
        function c(e) {
          if (!t.enabled) return;
          const { rtlTranslate: n } = t;
          let s = e;
          s.originalEvent && (s = s.originalEvent);
          const i = s.keyCode || s.charCode,
            r = t.params.keyboard.pageUpDown,
            d = r && 33 === i,
            c = r && 34 === i,
            p = 37 === i,
            u = 39 === i,
            f = 38 === i,
            h = 40 === i;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && u) || (t.isVertical() && h) || c)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && p) || (t.isVertical() && f) || d)
          )
            return !1;
          if (
            !(
              s.shiftKey ||
              s.altKey ||
              s.ctrlKey ||
              s.metaKey ||
              (o.activeElement &&
                o.activeElement.nodeName &&
                ("input" === o.activeElement.nodeName.toLowerCase() ||
                  "textarea" === o.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (d || c || p || u || f || h)
            ) {
              let e = !1;
              if (
                t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
              )
                return;
              const s = t.$el,
                i = s[0].clientWidth,
                r = s[0].clientHeight,
                a = l.innerWidth,
                o = l.innerHeight,
                d = t.$el.offset();
              n && (d.left -= t.$el[0].scrollLeft);
              const c = [
                [d.left, d.top],
                [d.left + i, d.top],
                [d.left, d.top + r],
                [d.left + i, d.top + r],
              ];
              for (let t = 0; t < c.length; t += 1) {
                const n = c[t];
                if (n[0] >= 0 && n[0] <= a && n[1] >= 0 && n[1] <= o) {
                  if (0 === n[0] && 0 === n[1]) continue;
                  e = !0;
                }
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((d || c || p || u) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (((c || u) && !n) || ((d || p) && n)) && t.slideNext(),
                (((d || p) && !n) || ((c || u) && n)) && t.slidePrev())
              : ((d || c || f || h) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (c || h) && t.slideNext(),
                (d || f) && t.slidePrev()),
              a("keyPress", i);
          }
        }
        function p() {
          t.keyboard.enabled ||
            (d(o).on("keydown", c), (t.keyboard.enabled = !0));
        }
        function u() {
          t.keyboard.enabled &&
            (d(o).off("keydown", c), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          n({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          i("init", () => {
            t.params.keyboard.enabled && p();
          }),
          i("destroy", () => {
            t.keyboard.enabled && u();
          }),
          Object.assign(t.keyboard, { enable: p, disable: u });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s, emit: i } = e;
        const a = r();
        let o;
        n({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        }),
          (t.mousewheel = { enabled: !1 });
        let l,
          c = u();
        const f = [];
        function h() {
          t.enabled && (t.mouseEntered = !0);
        }
        function m() {
          t.enabled && (t.mouseEntered = !1);
        }
        function g(e) {
          return !(
            (t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta) ||
            (t.params.mousewheel.thresholdTime &&
              u() - c < t.params.mousewheel.thresholdTime) ||
            (!(e.delta >= 6 && u() - c < 60) &&
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), i("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), i("scroll", e.raw)),
              (c = new a.Date().getTime()),
              1))
          );
        }
        function v(e) {
          let n = e,
            s = !0;
          if (!t.enabled) return;
          const r = t.params.mousewheel;
          t.params.cssMode && n.preventDefault();
          let a = t.$el;
          if (
            ("container" !== t.params.mousewheel.eventsTarget &&
              (a = d(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !a[0].contains(n.target) && !r.releaseOnEdges)
          )
            return !0;
          n.originalEvent && (n = n.originalEvent);
          let c = 0;
          const h = t.rtlTranslate ? -1 : 1,
            m = (function (e) {
              let t = 0,
                n = 0,
                s = 0,
                i = 0;
              return (
                "detail" in e && (n = e.detail),
                "wheelDelta" in e && (n = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = n), (n = 0)),
                (s = 10 * t),
                (i = 10 * n),
                "deltaY" in e && (i = e.deltaY),
                "deltaX" in e && (s = e.deltaX),
                e.shiftKey && !s && ((s = i), (i = 0)),
                (s || i) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((s *= 40), (i *= 40))
                    : ((s *= 800), (i *= 800))),
                s && !t && (t = s < 1 ? -1 : 1),
                i && !n && (n = i < 1 ? -1 : 1),
                { spinX: t, spinY: n, pixelX: s, pixelY: i }
              );
            })(n);
          if (r.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
              c = -m.pixelX * h;
            } else {
              if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
              c = -m.pixelY;
            }
          else
            c =
              Math.abs(m.pixelX) > Math.abs(m.pixelY)
                ? -m.pixelX * h
                : -m.pixelY;
          if (0 === c) return !0;
          r.invert && (c = -c);
          let v = t.getTranslate() + c * r.sensitivity;
          if (
            (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (s =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())),
            s && t.params.nested && n.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const e = {
                time: u(),
                delta: Math.abs(c),
                direction: Math.sign(c),
              },
              s =
                l &&
                e.time < l.time + 500 &&
                e.delta <= l.delta &&
                e.direction === l.direction;
            if (!s) {
              (l = void 0), t.params.loop && t.loopFix();
              let a = t.getTranslate() + c * r.sensitivity;
              const d = t.isBeginning,
                u = t.isEnd;
              if (
                (a >= t.minTranslate() && (a = t.minTranslate()),
                a <= t.maxTranslate() && (a = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(a),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!d && t.isBeginning) || (!u && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(o), (o = void 0), f.length >= 15 && f.shift();
                const n = f.length ? f[f.length - 1] : void 0,
                  s = f[0];
                if (
                  (f.push(e),
                  n && (e.delta > n.delta || e.direction !== n.direction))
                )
                  f.splice(0);
                else if (
                  f.length >= 15 &&
                  e.time - s.time < 500 &&
                  s.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const n = c > 0 ? 0.8 : 0.2;
                  (l = e),
                    f.splice(0),
                    (o = p(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, n);
                    }, 0));
                }
                o ||
                  (o = p(() => {
                    (l = e),
                      f.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (s || i("scroll", n),
                t.params.autoplay &&
                  t.params.autoplayDisableOnInteraction &&
                  t.autoplay.stop(),
                a === t.minTranslate() || a === t.maxTranslate())
              )
                return !0;
            }
          } else {
            const n = {
              time: u(),
              delta: Math.abs(c),
              direction: Math.sign(c),
              raw: e,
            };
            f.length >= 2 && f.shift();
            const s = f.length ? f[f.length - 1] : void 0;
            if (
              (f.push(n),
              s
                ? (n.direction !== s.direction ||
                    n.delta > s.delta ||
                    n.time > s.time + 150) &&
                  g(n)
                : g(n),
              (function (e) {
                const n = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
                  return !0;
                return !1;
              })(n))
            )
              return !0;
          }
          return (
            n.preventDefault ? n.preventDefault() : (n.returnValue = !1), !1
          );
        }
        function y(e) {
          let n = t.$el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (n = d(t.params.mousewheel.eventsTarget)),
            n[e]("mouseenter", h),
            n[e]("mouseleave", m),
            n[e]("wheel", v);
        }
        function b() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", v), !0)
            : !t.mousewheel.enabled &&
                (y("on"), (t.mousewheel.enabled = !0), !0);
        }
        function w() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, v), !0)
            : !!t.mousewheel.enabled &&
                (y("off"), (t.mousewheel.enabled = !1), !0);
        }
        s("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && w(),
            t.params.mousewheel.enabled && b();
        }),
          s("destroy", () => {
            t.params.cssMode && b(), t.mousewheel.enabled && w();
          }),
          Object.assign(t.mousewheel, { enable: b, disable: w });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s, emit: i } = e;
        function r(e) {
          let n;
          return (
            e &&
              ((n = d(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                n.length > 1 &&
                1 === t.$el.find(e).length &&
                (n = t.$el.find(e))),
            n
          );
        }
        function a(e, n) {
          const s = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[n ? "addClass" : "removeClass"](s.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
        }
        function o() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: n } = t.navigation;
          a(n, t.isBeginning && !t.params.rewind),
            a(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              t.slidePrev();
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
        }
        function p() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = V(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const n = r(e.nextEl),
            s = r(e.prevEl);
          n && n.length > 0 && n.on("click", c),
            s && s.length > 0 && s.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            t.enabled ||
              (n && n.addClass(e.lockClass), s && s.addClass(e.lockClass));
        }
        function u() {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off("click", l),
              n.removeClass(t.params.navigation.disabledClass));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            p(), o();
          }),
          s("toEdge fromEdge lock unlock", () => {
            o();
          }),
          s("destroy", () => {
            u();
          }),
          s("enable disable", () => {
            const { $nextEl: e, $prevEl: n } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              n &&
                n[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          s("click", (e, n) => {
            const { $nextEl: s, $prevEl: r } = t.navigation,
              a = n.target;
            if (t.params.navigation.hideOnClick && !d(a).is(r) && !d(a).is(s)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))
              )
                return;
              let e;
              s
                ? (e = s.hasClass(t.params.navigation.hiddenClass))
                : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                i(!0 === e ? "navigationShow" : "navigationHide"),
                s && s.toggleClass(t.params.navigation.hiddenClass),
                r && r.toggleClass(t.params.navigation.hiddenClass);
            }
          }),
          Object.assign(t.navigation, { update: o, init: p, destroy: u });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s, emit: i } = e;
        const r = "swiper-pagination";
        let a;
        n({
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
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, n) {
          const { bulletActiveClass: s } = t.params.pagination;
          e[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`);
        }
        function p() {
          const e = t.rtl,
            n = t.params.pagination;
          if (l()) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            r = t.pagination.$el;
          let p;
          const u = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((p = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                p > s - 1 - 2 * t.loopedSlides && (p -= s - 2 * t.loopedSlides),
                p > u - 1 && (p -= u),
                p < 0 && "bullets" !== t.params.paginationType && (p = u + p))
              : (p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const s = t.pagination.bullets;
            let i, l, u;
            if (
              (n.dynamicBullets &&
                ((a = s
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  t.isHorizontal() ? "width" : "height",
                  a * (n.dynamicMainBullets + 4) + "px"
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((o += p - (t.previousIndex - t.loopedSlides || 0)),
                  o > n.dynamicMainBullets - 1
                    ? (o = n.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (i = Math.max(p - o, 0)),
                (l = i + (Math.min(s.length, n.dynamicMainBullets) - 1)),
                (u = (l + i) / 2)),
              s.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${n.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              r.length > 1)
            )
              s.each((e) => {
                const t = d(e),
                  s = t.index();
                s === p && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (s >= i &&
                      s <= l &&
                      t.addClass(`${n.bulletActiveClass}-main`),
                    s === i && c(t, "prev"),
                    s === l && c(t, "next"));
              });
            else {
              const e = s.eq(p),
                r = e.index();
              if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const e = s.eq(i),
                  a = s.eq(l);
                for (let e = i; e <= l; e += 1)
                  s.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= s.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      s.eq(s.length - e).addClass(
                        `${n.bulletActiveClass}-main`
                      );
                    s.eq(s.length - n.dynamicMainBullets - 1).addClass(
                      `${n.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(a, "next");
                else c(e, "prev"), c(a, "next");
              }
            }
            if (n.dynamicBullets) {
              const i = Math.min(s.length, n.dynamicMainBullets + 4),
                r = (a * i - a) / 2 - u * a,
                o = e ? "right" : "left";
              s.css(t.isHorizontal() ? o : "top", `${r}px`);
            }
          }
          if (
            ("fraction" === n.type &&
              (r.find(U(n.currentClass)).text(n.formatFractionCurrent(p + 1)),
              r.find(U(n.totalClass)).text(n.formatFractionTotal(u))),
            "progressbar" === n.type)
          ) {
            let e;
            e = n.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const s = (p + 1) / u;
            let i = 1,
              a = 1;
            "horizontal" === e ? (i = s) : (a = s),
              r
                .find(U(n.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
                .transition(t.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (r.html(n.renderCustom(t, p + 1, u)), i("paginationRender", r[0]))
            : i("paginationUpdate", r[0]),
            t.params.watchOverflow &&
              t.enabled &&
              r[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
        function u() {
          const e = t.params.pagination;
          if (l()) return;
          const n =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            s = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
            let i = t.params.loop
              ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              i > n &&
              (i = n);
            for (let n = 0; n < i; n += 1)
              e.renderBullet
                ? (r += e.renderBullet.call(t, n, e.bulletClass))
                : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            s.html(r), (t.pagination.bullets = s.find(U(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((r = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            s.html(r)),
            "progressbar" === e.type &&
              ((r = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              s.html(r)),
            "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
        }
        function f() {
          t.params.pagination = V(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let n = d(e.el);
          0 !== n.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              n.length > 1 &&
              ((n = t.$el.find(e.el)),
              n.length > 1 &&
                (n = n.filter((e) => d(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
            n.addClass(e.modifierClass + e.type),
            n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (o = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              n.addClass(e.progressbarOppositeClass),
            e.clickable &&
              n.on("click", U(e.bulletClass), function (e) {
                e.preventDefault();
                let n = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (n += t.loopedSlides), t.slideTo(n);
              }),
            Object.assign(t.pagination, { $el: n, el: n[0] }),
            t.enabled || n.addClass(e.lockClass));
        }
        function h() {
          const e = t.params.pagination;
          if (l()) return;
          const n = t.pagination.$el;
          n.removeClass(e.hiddenClass),
            n.removeClass(e.modifierClass + e.type),
            n.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && n.off("click", U(e.bulletClass));
        }
        s("init", () => {
          f(), u(), p();
        }),
          s("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && p();
          }),
          s("snapIndexChange", () => {
            t.params.loop || p();
          }),
          s("slidesLengthChange", () => {
            t.params.loop && (u(), p());
          }),
          s("snapGridLengthChange", () => {
            t.params.loop || (u(), p());
          }),
          s("destroy", () => {
            h();
          }),
          s("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            p();
          }),
          s("click", (e, n) => {
            const s = n.target,
              { $el: r } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              r.length > 0 &&
              !d(s).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                  (t.navigation.prevEl && s === t.navigation.prevEl))
              )
                return;
              const e = r.hasClass(t.params.pagination.hiddenClass);
              i(!0 === e ? "paginationShow" : "paginationHide"),
                r.toggleClass(t.params.pagination.hiddenClass);
            }
          }),
          Object.assign(t.pagination, {
            render: u,
            update: p,
            init: f,
            destroy: h,
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        const a = s();
        let o,
          l,
          c,
          u,
          f = !1,
          h = null,
          m = null;
        function g() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e, rtlTranslate: n, progress: s } = t,
            { $dragEl: i, $el: r } = e,
            a = t.params.scrollbar;
          let o = l,
            d = (c - l) * s;
          n
            ? ((d = -d),
              d > 0 ? ((o = l - d), (d = 0)) : -d + l > c && (o = c + d))
            : d < 0
            ? ((o = l + d), (d = 0))
            : d + l > c && (o = c - d),
            t.isHorizontal()
              ? (i.transform(`translate3d(${d}px, 0, 0)`),
                (i[0].style.width = `${o}px`))
              : (i.transform(`translate3d(0px, ${d}px, 0)`),
                (i[0].style.height = `${o}px`)),
            a.hide &&
              (clearTimeout(h),
              (r[0].style.opacity = 1),
              (h = setTimeout(() => {
                (r[0].style.opacity = 0), r.transition(400);
              }, 1e3)));
        }
        function v() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e } = t,
            { $dragEl: n, $el: s } = e;
          (n[0].style.width = ""),
            (n[0].style.height = ""),
            (c = t.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
            (u =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (l =
              "auto" === t.params.scrollbar.dragSize
                ? c * u
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (n[0].style.width = `${l}px`)
              : (n[0].style.height = `${l}px`),
            (s[0].style.display = u >= 1 ? "none" : ""),
            t.params.scrollbar.hide && (s[0].style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              e.$el[t.isLocked ? "addClass" : "removeClass"](
                t.params.scrollbar.lockClass
              );
        }
        function y(e) {
          return t.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        }
        function b(e) {
          const { scrollbar: n, rtlTranslate: s } = t,
            { $el: i } = n;
          let r;
          (r =
            (y(e) -
              i.offset()[t.isHorizontal() ? "left" : "top"] -
              (null !== o ? o : l / 2)) /
            (c - l)),
            (r = Math.max(Math.min(r, 1), 0)),
            s && (r = 1 - r);
          const a =
            t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
          t.updateProgress(a),
            t.setTranslate(a),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function w(e) {
          const n = t.params.scrollbar,
            { scrollbar: s, $wrapperEl: i } = t,
            { $el: a, $dragEl: l } = s;
          (f = !0),
            (o =
              e.target === l[0] || e.target === l
                ? y(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            l.transition(100),
            b(e),
            clearTimeout(m),
            a.transition(0),
            n.hide && a.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", e);
        }
        function x(e) {
          const { scrollbar: n, $wrapperEl: s } = t,
            { $el: i, $dragEl: a } = n;
          f &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            b(e),
            s.transition(0),
            i.transition(0),
            a.transition(0),
            r("scrollbarDragMove", e));
        }
        function E(e) {
          const n = t.params.scrollbar,
            { scrollbar: s, $wrapperEl: i } = t,
            { $el: a } = s;
          f &&
            ((f = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
            n.hide &&
              (clearTimeout(m),
              (m = p(() => {
                a.css("opacity", 0), a.transition(400);
              }, 1e3))),
            r("scrollbarDragEnd", e),
            n.snapOnRelease && t.slideToClosest());
        }
        function T(e) {
          const {
              scrollbar: n,
              touchEventsTouch: s,
              touchEventsDesktop: i,
              params: r,
              support: o,
            } = t,
            l = n.$el[0],
            d = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            c = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!l) return;
          const p = "on" === e ? "addEventListener" : "removeEventListener";
          o.touch
            ? (l[p](s.start, w, d), l[p](s.move, x, d), l[p](s.end, E, c))
            : (l[p](i.start, w, d), a[p](i.move, x, d), a[p](i.end, E, c));
        }
        function C() {
          const { scrollbar: e, $el: n } = t;
          t.params.scrollbar = V(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const s = t.params.scrollbar;
          if (!s.el) return;
          let i = d(s.el);
          t.params.uniqueNavElements &&
            "string" == typeof s.el &&
            i.length > 1 &&
            1 === n.find(s.el).length &&
            (i = n.find(s.el));
          let r = i.find(`.${t.params.scrollbar.dragClass}`);
          0 === r.length &&
            ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
            i.append(r)),
            Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
            s.draggable && t.params.scrollbar.el && T("on"),
            i &&
              i[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
        }
        function S() {
          t.params.scrollbar.el && T("off");
        }
        n({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        }),
          (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          i("init", () => {
            C(), v(), g();
          }),
          i("update resize observerUpdate lock unlock", () => {
            v();
          }),
          i("setTranslate", () => {
            g();
          }),
          i("setTransition", (e, n) => {
            !(function (e) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                t.scrollbar.$dragEl.transition(e);
            })(n);
          }),
          i("enable disable", () => {
            const { $el: e } = t.scrollbar;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
          }),
          i("destroy", () => {
            S();
          }),
          Object.assign(t.scrollbar, {
            updateSize: v,
            setTranslate: g,
            init: C,
            destroy: S,
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({ parallax: { enabled: !1 } });
        const i = (e, n) => {
            const { rtl: s } = t,
              i = d(e),
              r = s ? -1 : 1,
              a = i.attr("data-swiper-parallax") || "0";
            let o = i.attr("data-swiper-parallax-x"),
              l = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale"),
              p = i.attr("data-swiper-parallax-opacity");
            if (
              (o || l
                ? ((o = o || "0"), (l = l || "0"))
                : t.isHorizontal()
                ? ((o = a), (l = "0"))
                : ((l = a), (o = "0")),
              (o =
                o.indexOf("%") >= 0
                  ? parseInt(o, 10) * n * r + "%"
                  : o * n * r + "px"),
              (l =
                l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px"),
              null != p)
            ) {
              const e = p - (p - 1) * (1 - Math.abs(n));
              i[0].style.opacity = e;
            }
            if (null == c) i.transform(`translate3d(${o}, ${l}, 0px)`);
            else {
              const e = c - (c - 1) * (1 - Math.abs(n));
              i.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
            }
          },
          r = () => {
            const { $el: e, slides: n, progress: s, snapGrid: r } = t;
            e
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((e) => {
                i(e, s);
              }),
              n.each((e, n) => {
                let a = e.progress;
                t.params.slidesPerGroup > 1 &&
                  "auto" !== t.params.slidesPerView &&
                  (a += Math.ceil(n / 2) - s * (r.length - 1)),
                  (a = Math.min(Math.max(a, -1), 1)),
                  d(e)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((e) => {
                      i(e, a);
                    });
              });
          };
        s("beforeInit", () => {
          t.params.parallax.enabled &&
            ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
        }),
          s("init", () => {
            t.params.parallax.enabled && r();
          }),
          s("setTranslate", () => {
            t.params.parallax.enabled && r();
          }),
          s("setTransition", (e, n) => {
            t.params.parallax.enabled &&
              (function (e) {
                void 0 === e && (e = t.params.speed);
                const { $el: n } = t;
                n.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).each((t) => {
                  const n = d(t);
                  let s =
                    parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                  0 === e && (s = 0), n.transition(s);
                });
              })(n);
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s, emit: i } = e;
        const a = r();
        n({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        }),
          (t.zoom = { enabled: !1 });
        let o,
          l,
          c,
          p = 1,
          u = !1;
        const h = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3,
          },
          m = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let v = 1;
        function y(e) {
          if (e.targetTouches.length < 2) return 1;
          const t = e.targetTouches[0].pageX,
            n = e.targetTouches[0].pageY,
            s = e.targetTouches[1].pageX,
            i = e.targetTouches[1].pageY;
          return Math.sqrt((s - t) ** 2 + (i - n) ** 2);
        }
        function b(e) {
          const n = t.support,
            s = t.params.zoom;
          if (((l = !1), (c = !1), !n.gestures)) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (l = !0), (h.scaleStart = y(e));
          }
          (h.$slideEl && h.$slideEl.length) ||
          ((h.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
          0 === h.$slideEl.length && (h.$slideEl = t.slides.eq(t.activeIndex)),
          (h.$imageEl = h.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (h.$imageWrapEl = h.$imageEl.parent(`.${s.containerClass}`)),
          (h.maxRatio = h.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
          0 !== h.$imageWrapEl.length)
            ? (h.$imageEl && h.$imageEl.transition(0), (u = !0))
            : (h.$imageEl = void 0);
        }
        function w(e) {
          const n = t.support,
            s = t.params.zoom,
            i = t.zoom;
          if (!n.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (c = !0), (h.scaleMove = y(e));
          }
          h.$imageEl && 0 !== h.$imageEl.length
            ? (n.gestures
                ? (i.scale = e.scale * p)
                : (i.scale = (h.scaleMove / h.scaleStart) * p),
              i.scale > h.maxRatio &&
                (i.scale = h.maxRatio - 1 + (i.scale - h.maxRatio + 1) ** 0.5),
              i.scale < s.minRatio &&
                (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** 0.5),
              h.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
            : "gesturechange" === e.type && b(e);
        }
        function x(e) {
          const n = t.device,
            s = t.support,
            i = t.params.zoom,
            r = t.zoom;
          if (!s.gestures) {
            if (!l || !c) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !n.android)
            )
              return;
            (l = !1), (c = !1);
          }
          h.$imageEl &&
            0 !== h.$imageEl.length &&
            ((r.scale = Math.max(Math.min(r.scale, h.maxRatio), i.minRatio)),
            h.$imageEl
              .transition(t.params.speed)
              .transform(`translate3d(0,0,0) scale(${r.scale})`),
            (p = r.scale),
            (u = !1),
            1 === r.scale && (h.$slideEl = void 0));
        }
        function E(e) {
          const n = t.zoom;
          if (!h.$imageEl || 0 === h.$imageEl.length) return;
          if (((t.allowClick = !1), !m.isTouched || !h.$slideEl)) return;
          m.isMoved ||
            ((m.width = h.$imageEl[0].offsetWidth),
            (m.height = h.$imageEl[0].offsetHeight),
            (m.startX = f(h.$imageWrapEl[0], "x") || 0),
            (m.startY = f(h.$imageWrapEl[0], "y") || 0),
            (h.slideWidth = h.$slideEl[0].offsetWidth),
            (h.slideHeight = h.$slideEl[0].offsetHeight),
            h.$imageWrapEl.transition(0));
          const s = m.width * n.scale,
            i = m.height * n.scale;
          if (!(s < h.slideWidth && i < h.slideHeight)) {
            if (
              ((m.minX = Math.min(h.slideWidth / 2 - s / 2, 0)),
              (m.maxX = -m.minX),
              (m.minY = Math.min(h.slideHeight / 2 - i / 2, 0)),
              (m.maxY = -m.minY),
              (m.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (m.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !m.isMoved && !u)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(m.minX) === Math.floor(m.startX) &&
                  m.touchesCurrent.x < m.touchesStart.x) ||
                  (Math.floor(m.maxX) === Math.floor(m.startX) &&
                    m.touchesCurrent.x > m.touchesStart.x))
              )
                return void (m.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(m.minY) === Math.floor(m.startY) &&
                  m.touchesCurrent.y < m.touchesStart.y) ||
                  (Math.floor(m.maxY) === Math.floor(m.startY) &&
                    m.touchesCurrent.y > m.touchesStart.y))
              )
                return void (m.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (m.isMoved = !0),
              (m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX),
              (m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY),
              m.currentX < m.minX &&
                (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
              m.currentX > m.maxX &&
                (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
              m.currentY < m.minY &&
                (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
              m.currentY > m.maxY &&
                (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
              g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x),
              g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y),
              g.prevTime || (g.prevTime = Date.now()),
              (g.x =
                (m.touchesCurrent.x - g.prevPositionX) /
                (Date.now() - g.prevTime) /
                2),
              (g.y =
                (m.touchesCurrent.y - g.prevPositionY) /
                (Date.now() - g.prevTime) /
                2),
              Math.abs(m.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
              Math.abs(m.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
              (g.prevPositionX = m.touchesCurrent.x),
              (g.prevPositionY = m.touchesCurrent.y),
              (g.prevTime = Date.now()),
              h.$imageWrapEl.transform(
                `translate3d(${m.currentX}px, ${m.currentY}px,0)`
              );
          }
        }
        function T() {
          const e = t.zoom;
          h.$slideEl &&
            t.previousIndex !== t.activeIndex &&
            (h.$imageEl && h.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            h.$imageWrapEl && h.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (p = 1),
            (h.$slideEl = void 0),
            (h.$imageEl = void 0),
            (h.$imageWrapEl = void 0));
        }
        function C(e) {
          const n = t.zoom,
            s = t.params.zoom;
          if (
            (h.$slideEl ||
              (e &&
                e.target &&
                (h.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
              h.$slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (h.$slideEl = t.$wrapperEl.children(
                      `.${t.params.slideActiveClass}`
                    ))
                  : (h.$slideEl = t.slides.eq(t.activeIndex))),
              (h.$imageEl = h.$slideEl
                .find(`.${s.containerClass}`)
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (h.$imageWrapEl = h.$imageEl.parent(`.${s.containerClass}`))),
            !h.$imageEl ||
              0 === h.$imageEl.length ||
              !h.$imageWrapEl ||
              0 === h.$imageWrapEl.length)
          )
            return;
          let i, r, o, l, c, u, f, g, v, y, b, w, x, E, T, C, S, $;
          t.params.cssMode &&
            ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
            h.$slideEl.addClass(`${s.zoomedSlideClass}`),
            void 0 === m.touchesStart.x && e
              ? ((i =
                  "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                (r =
                  "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((i = m.touchesStart.x), (r = m.touchesStart.y)),
            (n.scale = h.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            (p = h.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            e
              ? ((S = h.$slideEl[0].offsetWidth),
                ($ = h.$slideEl[0].offsetHeight),
                (o = h.$slideEl.offset().left + a.scrollX),
                (l = h.$slideEl.offset().top + a.scrollY),
                (c = o + S / 2 - i),
                (u = l + $ / 2 - r),
                (v = h.$imageEl[0].offsetWidth),
                (y = h.$imageEl[0].offsetHeight),
                (b = v * n.scale),
                (w = y * n.scale),
                (x = Math.min(S / 2 - b / 2, 0)),
                (E = Math.min($ / 2 - w / 2, 0)),
                (T = -x),
                (C = -E),
                (f = c * n.scale),
                (g = u * n.scale),
                f < x && (f = x),
                f > T && (f = T),
                g < E && (g = E),
                g > C && (g = C))
              : ((f = 0), (g = 0)),
            h.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${f}px, ${g}px,0)`),
            h.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${n.scale})`);
        }
        function S() {
          const e = t.zoom,
            n = t.params.zoom;
          h.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (h.$slideEl = t.$wrapperEl.children(
                  `.${t.params.slideActiveClass}`
                ))
              : (h.$slideEl = t.slides.eq(t.activeIndex)),
            (h.$imageEl = h.$slideEl
              .find(`.${n.containerClass}`)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (h.$imageWrapEl = h.$imageEl.parent(`.${n.containerClass}`))),
            h.$imageEl &&
              0 !== h.$imageEl.length &&
              h.$imageWrapEl &&
              0 !== h.$imageWrapEl.length &&
              (t.params.cssMode &&
                ((t.wrapperEl.style.overflow = ""),
                (t.wrapperEl.style.touchAction = "")),
              (e.scale = 1),
              (p = 1),
              h.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              h.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              h.$slideEl.removeClass(`${n.zoomedSlideClass}`),
              (h.$slideEl = void 0));
        }
        function $(e) {
          const n = t.zoom;
          n.scale && 1 !== n.scale ? S() : C(e);
        }
        function M() {
          const e = t.support;
          return {
            passiveListener: !(
              "touchstart" !== t.touchEvents.start ||
              !e.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            activeListenerWithCapture: !e.passiveListener || {
              passive: !1,
              capture: !0,
            },
          };
        }
        function k() {
          return `.${t.params.slideClass}`;
        }
        function P(e) {
          const { passiveListener: n } = M(),
            s = k();
          t.$wrapperEl[e]("gesturestart", s, b, n),
            t.$wrapperEl[e]("gesturechange", s, w, n),
            t.$wrapperEl[e]("gestureend", s, x, n);
        }
        function L() {
          o || ((o = !0), P("on"));
        }
        function A() {
          o && ((o = !1), P("off"));
        }
        function D() {
          const e = t.zoom;
          if (e.enabled) return;
          e.enabled = !0;
          const n = t.support,
            { passiveListener: s, activeListenerWithCapture: i } = M(),
            r = k();
          n.gestures
            ? (t.$wrapperEl.on(t.touchEvents.start, L, s),
              t.$wrapperEl.on(t.touchEvents.end, A, s))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.on(t.touchEvents.start, r, b, s),
              t.$wrapperEl.on(t.touchEvents.move, r, w, i),
              t.$wrapperEl.on(t.touchEvents.end, r, x, s),
              t.touchEvents.cancel &&
                t.$wrapperEl.on(t.touchEvents.cancel, r, x, s)),
            t.$wrapperEl.on(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              E,
              i
            );
        }
        function O() {
          const e = t.zoom;
          if (!e.enabled) return;
          const n = t.support;
          e.enabled = !1;
          const { passiveListener: s, activeListenerWithCapture: i } = M(),
            r = k();
          n.gestures
            ? (t.$wrapperEl.off(t.touchEvents.start, L, s),
              t.$wrapperEl.off(t.touchEvents.end, A, s))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.off(t.touchEvents.start, r, b, s),
              t.$wrapperEl.off(t.touchEvents.move, r, w, i),
              t.$wrapperEl.off(t.touchEvents.end, r, x, s),
              t.touchEvents.cancel &&
                t.$wrapperEl.off(t.touchEvents.cancel, r, x, s)),
            t.$wrapperEl.off(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              E,
              i
            );
        }
        Object.defineProperty(t.zoom, "scale", {
          get: () => v,
          set(e) {
            if (v !== e) {
              const t = h.$imageEl ? h.$imageEl[0] : void 0,
                n = h.$slideEl ? h.$slideEl[0] : void 0;
              i("zoomChange", e, t, n);
            }
            v = e;
          },
        }),
          s("init", () => {
            t.params.zoom.enabled && D();
          }),
          s("destroy", () => {
            O();
          }),
          s("touchStart", (e, n) => {
            t.zoom.enabled &&
              (function (e) {
                const n = t.device;
                h.$imageEl &&
                  0 !== h.$imageEl.length &&
                  (m.isTouched ||
                    (n.android && e.cancelable && e.preventDefault(),
                    (m.isTouched = !0),
                    (m.touchesStart.x =
                      "touchstart" === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX),
                    (m.touchesStart.y =
                      "touchstart" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY)));
              })(n);
          }),
          s("touchEnd", (e, n) => {
            t.zoom.enabled &&
              (function () {
                const e = t.zoom;
                if (!h.$imageEl || 0 === h.$imageEl.length) return;
                if (!m.isTouched || !m.isMoved)
                  return (m.isTouched = !1), void (m.isMoved = !1);
                (m.isTouched = !1), (m.isMoved = !1);
                let n = 300,
                  s = 300;
                const i = g.x * n,
                  r = m.currentX + i,
                  a = g.y * s,
                  o = m.currentY + a;
                0 !== g.x && (n = Math.abs((r - m.currentX) / g.x)),
                  0 !== g.y && (s = Math.abs((o - m.currentY) / g.y));
                const l = Math.max(n, s);
                (m.currentX = r), (m.currentY = o);
                const d = m.width * e.scale,
                  c = m.height * e.scale;
                (m.minX = Math.min(h.slideWidth / 2 - d / 2, 0)),
                  (m.maxX = -m.minX),
                  (m.minY = Math.min(h.slideHeight / 2 - c / 2, 0)),
                  (m.maxY = -m.minY),
                  (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
                  (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
                  h.$imageWrapEl
                    .transition(l)
                    .transform(
                      `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                    );
              })();
          }),
          s("doubleTap", (e, n) => {
            !t.animating &&
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              $(n);
          }),
          s("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && T();
          }),
          s("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T();
          }),
          Object.assign(t.zoom, {
            enable: D,
            disable: O,
            in: C,
            out: S,
            toggle: $,
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s, emit: i } = e;
        n({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let a = !1,
          o = !1;
        function l(e, n) {
          void 0 === n && (n = !0);
          const s = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const r =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            a = r.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
          !r.hasClass(s.elementClass) ||
            r.hasClass(s.loadedClass) ||
            r.hasClass(s.loadingClass) ||
            a.push(r[0]),
            0 !== a.length &&
              a.each((e) => {
                const a = d(e);
                a.addClass(s.loadingClass);
                const o = a.attr("data-background"),
                  c = a.attr("data-src"),
                  p = a.attr("data-srcset"),
                  u = a.attr("data-sizes"),
                  f = a.parent("picture");
                t.loadImage(a[0], c || o, p, u, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (o
                        ? (a.css("background-image", `url("${o}")`),
                          a.removeAttr("data-background"))
                        : (p &&
                            (a.attr("srcset", p), a.removeAttr("data-srcset")),
                          u && (a.attr("sizes", u), a.removeAttr("data-sizes")),
                          f.length &&
                            f.children("source").each((e) => {
                              const t = d(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (a.attr("src", c), a.removeAttr("data-src"))),
                      a.addClass(s.loadedClass).removeClass(s.loadingClass),
                      r.find(`.${s.preloaderClass}`).remove(),
                      t.params.loop && n)
                    ) {
                      const e = r.attr("data-swiper-slide-index");
                      r.hasClass(t.params.slideDuplicateClass)
                        ? l(
                            t.$wrapperEl
                              .children(
                                `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                              )
                              .index(),
                            !1
                          )
                        : l(
                            t.$wrapperEl
                              .children(
                                `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                              )
                              .index(),
                            !1
                          );
                    }
                    i("lazyImageReady", r[0], a[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  i("lazyImageLoad", r[0], a[0]);
              });
        }
        function c() {
          const { $wrapperEl: e, params: n, slides: s, activeIndex: i } = t,
            r = t.virtual && n.virtual.enabled,
            a = n.lazy;
          let c = n.slidesPerView;
          function p(t) {
            if (r) {
              if (
                e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (s[t]) return !0;
            return !1;
          }
          function u(e) {
            return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            o || (o = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${n.slideVisibleClass}`).each((e) => {
              l(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
            });
          else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && l(e);
          else l(i);
          if (a.loadPrevNext)
            if (c > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
              const e = a.loadPrevNextAmount,
                t = c,
                n = Math.min(i + t + Math.max(e, t), s.length),
                r = Math.max(i - Math.max(t, e), 0);
              for (let e = i + c; e < n; e += 1) p(e) && l(e);
              for (let e = r; e < i; e += 1) p(e) && l(e);
            } else {
              const t = e.children(`.${n.slideNextClass}`);
              t.length > 0 && l(u(t));
              const s = e.children(`.${n.slidePrevClass}`);
              s.length > 0 && l(u(s));
            }
        }
        function p() {
          const e = r();
          if (!t || t.destroyed) return;
          const n = t.params.lazy.scrollingElement
              ? d(t.params.lazy.scrollingElement)
              : d(e),
            s = n[0] === e,
            i = s ? e.innerWidth : n[0].offsetWidth,
            o = s ? e.innerHeight : n[0].offsetHeight,
            l = t.$el.offset(),
            { rtlTranslate: u } = t;
          let f = !1;
          u && (l.left -= t.$el[0].scrollLeft);
          const h = [
            [l.left, l.top],
            [l.left + t.width, l.top],
            [l.left, l.top + t.height],
            [l.left + t.width, l.top + t.height],
          ];
          for (let e = 0; e < h.length; e += 1) {
            const t = h[e];
            if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= o) {
              if (0 === t[0] && 0 === t[1]) continue;
              f = !0;
            }
          }
          const m = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          f
            ? (c(), n.off("scroll", p, m))
            : a || ((a = !0), n.on("scroll", p, m));
        }
        s("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          s("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
          }),
          s("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              c();
          }),
          s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
          }),
          s("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !o)) &&
              (t.params.lazy.checkInView ? p() : c());
          }),
          s("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? p() : c());
          }),
          s("slideChange", () => {
            const {
              lazy: e,
              cssMode: n,
              watchSlidesProgress: s,
              touchReleaseOnEdges: i,
              resistanceRatio: r,
            } = t.params;
            e.enabled && (n || (s && (i || 0 === r))) && c();
          }),
          Object.assign(t.lazy, { load: c, loadInSlide: l });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        function i(e, t) {
          const n = (function () {
            let e, t, n;
            return (s, i) => {
              for (t = -1, e = s.length; e - t > 1; )
                (n = (e + t) >> 1), s[n] <= i ? (t = n) : (e = n);
              return e;
            };
          })();
          let s, i;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((i = n(this.x, e)),
                  (s = i - 1),
                  ((e - this.x[s]) * (this.y[i] - this.y[s])) /
                    (this.x[i] - this.x[s]) +
                    this.y[s])
                : 0;
            }),
            this
          );
        }
        function r() {
          t.controller.control &&
            t.controller.spline &&
            ((t.controller.spline = void 0), delete t.controller.spline);
        }
        n({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (t.controller = { control: void 0 }),
          s("beforeInit", () => {
            t.controller.control = t.params.controller.control;
          }),
          s("update", () => {
            r();
          }),
          s("resize", () => {
            r();
          }),
          s("observerUpdate", () => {
            r();
          }),
          s("setTranslate", (e, n, s) => {
            t.controller.control && t.controller.setTranslate(n, s);
          }),
          s("setTransition", (e, n, s) => {
            t.controller.control && t.controller.setTransition(n, s);
          }),
          Object.assign(t.controller, {
            setTranslate: function (e, n) {
              const s = t.controller.control;
              let r, a;
              const o = t.constructor;
              function l(e) {
                const n = t.rtlTranslate ? -t.translate : t.translate;
                "slide" === t.params.controller.by &&
                  ((function (e) {
                    t.controller.spline ||
                      (t.controller.spline = t.params.loop
                        ? new i(t.slidesGrid, e.slidesGrid)
                        : new i(t.snapGrid, e.snapGrid));
                  })(e),
                  (a = -t.controller.spline.interpolate(-n))),
                  (a && "container" !== t.params.controller.by) ||
                    ((r =
                      (e.maxTranslate() - e.minTranslate()) /
                      (t.maxTranslate() - t.minTranslate())),
                    (a = (n - t.minTranslate()) * r + e.minTranslate())),
                  t.params.controller.inverse && (a = e.maxTranslate() - a),
                  e.updateProgress(a),
                  e.setTranslate(a, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(s))
                for (let e = 0; e < s.length; e += 1)
                  s[e] !== n && s[e] instanceof o && l(s[e]);
              else s instanceof o && n !== s && l(s);
            },
            setTransition: function (e, n) {
              const s = t.constructor,
                i = t.controller.control;
              let r;
              function a(n) {
                n.setTransition(e, t),
                  0 !== e &&
                    (n.transitionStart(),
                    n.params.autoHeight &&
                      p(() => {
                        n.updateAutoHeight();
                      }),
                    n.$wrapperEl.transitionEnd(() => {
                      i &&
                        (n.params.loop &&
                          "slide" === t.params.controller.by &&
                          n.loopFix(),
                        n.transitionEnd());
                    }));
              }
              if (Array.isArray(i))
                for (r = 0; r < i.length; r += 1)
                  i[r] !== n && i[r] instanceof s && a(i[r]);
              else i instanceof s && n !== i && a(i);
            },
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
          },
        });
        let i = null;
        function r(e) {
          const t = i;
          0 !== t.length && (t.html(""), t.html(e));
        }
        function a(e) {
          e.attr("tabIndex", "0");
        }
        function o(e) {
          e.attr("tabIndex", "-1");
        }
        function l(e, t) {
          e.attr("role", t);
        }
        function c(e, t) {
          e.attr("aria-roledescription", t);
        }
        function p(e, t) {
          e.attr("aria-label", t);
        }
        function u(e) {
          e.attr("aria-disabled", !0);
        }
        function f(e) {
          e.attr("aria-disabled", !1);
        }
        function h(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const n = t.params.a11y,
            s = d(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            s.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd ? r(n.lastSlideMessage) : r(n.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              s.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? r(n.firstSlideMessage) : r(n.prevSlideMessage)),
            t.pagination &&
              s.is(U(t.params.pagination.bulletClass)) &&
              s[0].click();
        }
        function m() {
          return (
            t.pagination && t.pagination.bullets && t.pagination.bullets.length
          );
        }
        function g() {
          return m() && t.params.pagination.clickable;
        }
        const v = (e, t, n) => {
            a(e),
              "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)),
              p(e, n),
              (function (e, t) {
                e.attr("aria-controls", t);
              })(e, t);
          },
          y = (e) => {
            const n = e.target.closest(`.${t.params.slideClass}`);
            if (!n || !t.slides.includes(n)) return;
            const s = t.slides.indexOf(n) === t.activeIndex,
              i =
                t.params.watchSlidesProgress &&
                t.visibleSlides &&
                t.visibleSlides.includes(n);
            s || i || t.slideTo(t.slides.indexOf(n), 0);
          };
        s("beforeInit", () => {
          i = d(
            `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
          );
        }),
          s("afterInit", () => {
            t.params.a11y.enabled &&
              (function () {
                const e = t.params.a11y;
                t.$el.append(i);
                const n = t.$el;
                e.containerRoleDescriptionMessage &&
                  c(n, e.containerRoleDescriptionMessage),
                  e.containerMessage && p(n, e.containerMessage);
                const s = t.$wrapperEl,
                  r =
                    e.id ||
                    s.attr("id") ||
                    `swiper-wrapper-${
                      ((a = 16),
                      void 0 === a && (a = 16),
                      "x"
                        .repeat(a)
                        .replace(/x/g, () =>
                          Math.round(16 * Math.random()).toString(16)
                        ))
                    }`;
                var a;
                const o =
                  t.params.autoplay && t.params.autoplay.enabled
                    ? "off"
                    : "polite";
                var u;
                (u = r),
                  s.attr("id", u),
                  (function (e, t) {
                    e.attr("aria-live", t);
                  })(s, o),
                  e.itemRoleDescriptionMessage &&
                    c(d(t.slides), e.itemRoleDescriptionMessage),
                  l(d(t.slides), e.slideRole);
                const f = t.params.loop
                  ? t.slides.filter(
                      (e) => !e.classList.contains(t.params.slideDuplicateClass)
                    ).length
                  : t.slides.length;
                let m, b;
                t.slides.each((n, s) => {
                  const i = d(n),
                    r = t.params.loop
                      ? parseInt(i.attr("data-swiper-slide-index"), 10)
                      : s;
                  p(
                    i,
                    e.slideLabelMessage
                      .replace(/\{\{index\}\}/, r + 1)
                      .replace(/\{\{slidesLength\}\}/, f)
                  );
                }),
                  t.navigation &&
                    t.navigation.$nextEl &&
                    (m = t.navigation.$nextEl),
                  t.navigation &&
                    t.navigation.$prevEl &&
                    (b = t.navigation.$prevEl),
                  m && m.length && v(m, r, e.nextSlideMessage),
                  b && b.length && v(b, r, e.prevSlideMessage),
                  g() &&
                    t.pagination.$el.on(
                      "keydown",
                      U(t.params.pagination.bulletClass),
                      h
                    ),
                  t.$el.on("focus", y, !0);
              })();
          }),
          s("fromEdge toEdge afterInit lock unlock", () => {
            t.params.a11y.enabled &&
              (function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const { $nextEl: e, $prevEl: n } = t.navigation;
                n &&
                  n.length > 0 &&
                  (t.isBeginning ? (u(n), o(n)) : (f(n), a(n))),
                  e && e.length > 0 && (t.isEnd ? (u(e), o(e)) : (f(e), a(e)));
              })();
          }),
          s("paginationUpdate", () => {
            t.params.a11y.enabled &&
              (function () {
                const e = t.params.a11y;
                m() &&
                  t.pagination.bullets.each((n) => {
                    const s = d(n);
                    t.params.pagination.clickable &&
                      (a(s),
                      t.params.pagination.renderBullet ||
                        (l(s, "button"),
                        p(
                          s,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            s.index() + 1
                          )
                        ))),
                      s.is(`.${t.params.pagination.bulletActiveClass}`)
                        ? s.attr("aria-current", "true")
                        : s.removeAttr("aria-current");
                  });
              })();
          }),
          s("destroy", () => {
            t.params.a11y.enabled &&
              (function () {
                let e, n;
                i && i.length > 0 && i.remove(),
                  t.navigation &&
                    t.navigation.$nextEl &&
                    (e = t.navigation.$nextEl),
                  t.navigation &&
                    t.navigation.$prevEl &&
                    (n = t.navigation.$prevEl),
                  e && e.off("keydown", h),
                  n && n.off("keydown", h),
                  g() &&
                    t.pagination.$el.off(
                      "keydown",
                      U(t.params.pagination.bulletClass),
                      h
                    ),
                  t.$el.off("focus", y, !0);
              })();
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({
          history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
        });
        let i = !1,
          a = {};
        const o = (e) =>
            e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          l = (e) => {
            const t = r();
            let n;
            n = e ? new URL(e) : t.location;
            const s = n.pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e),
              i = s.length;
            return { key: s[i - 2], value: s[i - 1] };
          },
          d = (e, n) => {
            const s = r();
            if (!i || !t.params.history.enabled) return;
            let a;
            a = t.params.url ? new URL(t.params.url) : s.location;
            const l = t.slides.eq(n);
            let d = o(l.attr("data-history"));
            if (t.params.history.root.length > 0) {
              let n = t.params.history.root;
              "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)),
                (d = `${n}/${e}/${d}`);
            } else a.pathname.includes(e) || (d = `${e}/${d}`);
            const c = s.history.state;
            (c && c.value === d) ||
              (t.params.history.replaceState
                ? s.history.replaceState({ value: d }, null, d)
                : s.history.pushState({ value: d }, null, d));
          },
          c = (e, n, s) => {
            if (n)
              for (let i = 0, r = t.slides.length; i < r; i += 1) {
                const r = t.slides.eq(i);
                if (
                  o(r.attr("data-history")) === n &&
                  !r.hasClass(t.params.slideDuplicateClass)
                ) {
                  const n = r.index();
                  t.slideTo(n, e, s);
                }
              }
            else t.slideTo(0, e, s);
          },
          p = () => {
            (a = l(t.params.url)), c(t.params.speed, t.paths.value, !1);
          };
        s("init", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              if (t.params.history) {
                if (!e.history || !e.history.pushState)
                  return (
                    (t.params.history.enabled = !1),
                    void (t.params.hashNavigation.enabled = !0)
                  );
                (i = !0),
                  (a = l(t.params.url)),
                  (a.key || a.value) &&
                    (c(0, a.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                      e.addEventListener("popstate", p));
              }
            })();
        }),
          s("destroy", () => {
            t.params.history.enabled &&
              (() => {
                const e = r();
                t.params.history.replaceState ||
                  e.removeEventListener("popstate", p);
              })();
          }),
          s("transitionEnd _freeModeNoMomentumRelease", () => {
            i && d(t.params.history.key, t.activeIndex);
          }),
          s("slideChange", () => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, emit: i, on: a } = e,
          o = !1;
        const l = s(),
          c = r();
        n({
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        });
        const p = () => {
            i("hashChange");
            const e = l.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
              const n = t.$wrapperEl
                .children(`.${t.params.slideClass}[data-hash="${e}"]`)
                .index();
              if (void 0 === n) return;
              t.slideTo(n);
            }
          },
          u = () => {
            if (o && t.params.hashNavigation.enabled)
              if (
                t.params.hashNavigation.replaceState &&
                c.history &&
                c.history.replaceState
              )
                c.history.replaceState(
                  null,
                  null,
                  `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""
                ),
                  i("hashSet");
              else {
                const e = t.slides.eq(t.activeIndex),
                  n = e.attr("data-hash") || e.attr("data-history");
                (l.location.hash = n || ""), i("hashSet");
              }
          };
        a("init", () => {
          t.params.hashNavigation.enabled &&
            (() => {
              if (
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
                return;
              o = !0;
              const e = l.location.hash.replace("#", "");
              if (e) {
                const n = 0;
                for (let s = 0, i = t.slides.length; s < i; s += 1) {
                  const i = t.slides.eq(s);
                  if (
                    (i.attr("data-hash") || i.attr("data-history")) === e &&
                    !i.hasClass(t.params.slideDuplicateClass)
                  ) {
                    const e = i.index();
                    t.slideTo(e, n, t.params.runCallbacksOnInit, !0);
                  }
                }
              }
              t.params.hashNavigation.watchState && d(c).on("hashchange", p);
            })();
        }),
          a("destroy", () => {
            t.params.hashNavigation.enabled &&
              t.params.hashNavigation.watchState &&
              d(c).off("hashchange", p);
          }),
          a("transitionEnd _freeModeNoMomentumRelease", () => {
            o && u();
          }),
          a("slideChange", () => {
            o && t.params.cssMode && u();
          });
      },
      function (e) {
        let t,
          { swiper: n, extendParams: i, on: r, emit: a } = e;
        function o() {
          const e = n.slides.eq(n.activeIndex);
          let s = n.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (s = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
            clearTimeout(t),
            (t = p(() => {
              let e;
              n.params.autoplay.reverseDirection
                ? n.params.loop
                  ? (n.loopFix(),
                    (e = n.slidePrev(n.params.speed, !0, !0)),
                    a("autoplay"))
                  : n.isBeginning
                  ? n.params.autoplay.stopOnLastSlide
                    ? d()
                    : ((e = n.slideTo(
                        n.slides.length - 1,
                        n.params.speed,
                        !0,
                        !0
                      )),
                      a("autoplay"))
                  : ((e = n.slidePrev(n.params.speed, !0, !0)), a("autoplay"))
                : n.params.loop
                ? (n.loopFix(),
                  (e = n.slideNext(n.params.speed, !0, !0)),
                  a("autoplay"))
                : n.isEnd
                ? n.params.autoplay.stopOnLastSlide
                  ? d()
                  : ((e = n.slideTo(0, n.params.speed, !0, !0)), a("autoplay"))
                : ((e = n.slideNext(n.params.speed, !0, !0)), a("autoplay")),
                ((n.params.cssMode && n.autoplay.running) || !1 === e) && o();
            }, s));
        }
        function l() {
          return (
            void 0 === t &&
            !n.autoplay.running &&
            ((n.autoplay.running = !0), a("autoplayStart"), o(), !0)
          );
        }
        function d() {
          return (
            !!n.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (n.autoplay.running = !1),
            a("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          n.autoplay.running &&
            (n.autoplay.paused ||
              (t && clearTimeout(t),
              (n.autoplay.paused = !0),
              0 !== e && n.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    n.$wrapperEl[0].addEventListener(e, f);
                  })
                : ((n.autoplay.paused = !1), o())));
        }
        function u() {
          const e = s();
          "hidden" === e.visibilityState && n.autoplay.running && c(),
            "visible" === e.visibilityState &&
              n.autoplay.paused &&
              (o(), (n.autoplay.paused = !1));
        }
        function f(e) {
          n &&
            !n.destroyed &&
            n.$wrapperEl &&
            e.target === n.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, f);
            }),
            (n.autoplay.paused = !1),
            n.autoplay.running ? o() : d());
        }
        function h() {
          n.params.autoplay.disableOnInteraction
            ? d()
            : (a("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, f);
            });
        }
        function m() {
          n.params.autoplay.disableOnInteraction ||
            ((n.autoplay.paused = !1), a("autoplayResume"), o());
        }
        (n.autoplay = { running: !1, paused: !1 }),
          i({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          r("init", () => {
            n.params.autoplay.enabled &&
              (l(),
              s().addEventListener("visibilitychange", u),
              n.params.autoplay.pauseOnMouseEnter &&
                (n.$el.on("mouseenter", h), n.$el.on("mouseleave", m)));
          }),
          r("beforeTransitionStart", (e, t, s) => {
            n.autoplay.running &&
              (s || !n.params.autoplay.disableOnInteraction
                ? n.autoplay.pause(t)
                : d());
          }),
          r("sliderFirstMove", () => {
            n.autoplay.running &&
              (n.params.autoplay.disableOnInteraction ? d() : c());
          }),
          r("touchEnd", () => {
            n.params.cssMode &&
              n.autoplay.paused &&
              !n.params.autoplay.disableOnInteraction &&
              o();
          }),
          r("destroy", () => {
            n.$el.off("mouseenter", h),
              n.$el.off("mouseleave", m),
              n.autoplay.running && d(),
              s().removeEventListener("visibilitychange", u);
          }),
          Object.assign(n.autoplay, { pause: c, run: o, start: l, stop: d });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let i = !1,
          r = !1;
        function a() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const n = e.clickedIndex,
            s = e.clickedSlide;
          if (s && d(s).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == n) return;
          let i;
          if (
            ((i = e.params.loop
              ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)
              : n),
            t.params.loop)
          ) {
            let e = t.activeIndex;
            t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
              (t.loopFix(),
              (t._clientLeft = t.$wrapperEl[0].clientLeft),
              (e = t.activeIndex));
            const n = t.slides
                .eq(e)
                .prevAll(`[data-swiper-slide-index="${i}"]`)
                .eq(0)
                .index(),
              s = t.slides
                .eq(e)
                .nextAll(`[data-swiper-slide-index="${i}"]`)
                .eq(0)
                .index();
            i = void 0 === n ? s : void 0 === s ? n : s - e < e - n ? s : n;
          }
          t.slideTo(i);
        }
        function o() {
          const { thumbs: e } = t.params;
          if (i) return !1;
          i = !0;
          const n = t.constructor;
          if (e.swiper instanceof n)
            (t.thumbs.swiper = e.swiper),
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (h(e.swiper)) {
            const s = Object.assign({}, e.swiper);
            Object.assign(s, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (t.thumbs.swiper = new n(s)),
              (r = !0);
          }
          return (
            t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", a),
            !0
          );
        }
        function l(e) {
          const n = t.thumbs.swiper;
          if (!n || n.destroyed) return;
          const s =
              "auto" === n.params.slidesPerView
                ? n.slidesPerViewDynamic()
                : n.params.slidesPerView,
            i = t.params.thumbs.autoScrollOffset,
            r = i && !n.params.loop;
          if (t.realIndex !== n.realIndex || r) {
            let a,
              o,
              l = n.activeIndex;
            if (n.params.loop) {
              n.slides.eq(l).hasClass(n.params.slideDuplicateClass) &&
                (n.loopFix(),
                (n._clientLeft = n.$wrapperEl[0].clientLeft),
                (l = n.activeIndex));
              const e = n.slides
                  .eq(l)
                  .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index(),
                s = n.slides
                  .eq(l)
                  .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index();
              (a =
                void 0 === e
                  ? s
                  : void 0 === s
                  ? e
                  : s - l == l - e
                  ? n.params.slidesPerGroup > 1
                    ? s
                    : l
                  : s - l < l - e
                  ? s
                  : e),
                (o = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else
              (a = t.realIndex), (o = a > t.previousIndex ? "next" : "prev");
            r && (a += "next" === o ? i : -1 * i),
              n.visibleSlidesIndexes &&
                n.visibleSlidesIndexes.indexOf(a) < 0 &&
                (n.params.centeredSlides
                  ? (a =
                      a > l
                        ? a - Math.floor(s / 2) + 1
                        : a + Math.floor(s / 2) - 1)
                  : a > l && n.params.slidesPerGroup,
                n.slideTo(a, e ? 0 : void 0));
          }
          let a = 1;
          const o = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (a = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (a = 1),
            (a = Math.floor(a)),
            n.slides.removeClass(o),
            n.params.loop || (n.params.virtual && n.params.virtual.enabled))
          )
            for (let e = 0; e < a; e += 1)
              n.$wrapperEl
                .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
                .addClass(o);
          else
            for (let e = 0; e < a; e += 1)
              n.slides.eq(t.realIndex + e).addClass(o);
        }
        (t.thumbs = { swiper: null }),
          s("beforeInit", () => {
            const { thumbs: e } = t.params;
            e && e.swiper && (o(), l(!0));
          }),
          s("slideChange update resize observerUpdate", () => {
            l();
          }),
          s("setTransition", (e, n) => {
            const s = t.thumbs.swiper;
            s && !s.destroyed && s.setTransition(n);
          }),
          s("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy();
          }),
          Object.assign(t.thumbs, { init: o, update: l });
      },
      function (e) {
        let { swiper: t, extendParams: n, emit: s, once: i } = e;
        n({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: n } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "currentX" : "currentY"],
                    time: u(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: n } = e;
                const {
                    params: r,
                    $wrapperEl: a,
                    rtlTranslate: o,
                    snapGrid: l,
                    touchEventsData: d,
                  } = t,
                  c = u() - d.touchStartTime;
                if (n < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (n > -t.maxTranslate())
                  t.slides.length < l.length
                    ? t.slideTo(l.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (r.freeMode.momentum) {
                    if (d.velocities.length > 1) {
                      const e = d.velocities.pop(),
                        n = d.velocities.pop(),
                        s = e.position - n.position,
                        i = e.time - n.time;
                      (t.velocity = s / i),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= r.freeMode.momentumVelocityRatio),
                      (d.velocities.length = 0);
                    let e = 1e3 * r.freeMode.momentumRatio;
                    const n = t.velocity * e;
                    let c = t.translate + n;
                    o && (c = -c);
                    let p,
                      f = !1;
                    const h =
                      20 *
                      Math.abs(t.velocity) *
                      r.freeMode.momentumBounceRatio;
                    let m;
                    if (c < t.maxTranslate())
                      r.freeMode.momentumBounce
                        ? (c + t.maxTranslate() < -h &&
                            (c = t.maxTranslate() - h),
                          (p = t.maxTranslate()),
                          (f = !0),
                          (d.allowMomentumBounce = !0))
                        : (c = t.maxTranslate()),
                        r.loop && r.centeredSlides && (m = !0);
                    else if (c > t.minTranslate())
                      r.freeMode.momentumBounce
                        ? (c - t.minTranslate() > h &&
                            (c = t.minTranslate() + h),
                          (p = t.minTranslate()),
                          (f = !0),
                          (d.allowMomentumBounce = !0))
                        : (c = t.minTranslate()),
                        r.loop && r.centeredSlides && (m = !0);
                    else if (r.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < l.length; t += 1)
                        if (l[t] > -c) {
                          e = t;
                          break;
                        }
                      (c =
                        Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) ||
                        "next" === t.swipeDirection
                          ? l[e]
                          : l[e - 1]),
                        (c = -c);
                    }
                    if (
                      (m &&
                        i("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = o
                          ? Math.abs((-c - t.translate) / t.velocity)
                          : Math.abs((c - t.translate) / t.velocity)),
                        r.freeMode.sticky)
                      ) {
                        const n = Math.abs((o ? -c : c) - t.translate),
                          s = t.slidesSizesGrid[t.activeIndex];
                        e =
                          n < s
                            ? r.speed
                            : n < 2 * s
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                      }
                    } else if (r.freeMode.sticky)
                      return void t.slideToClosest();
                    r.freeMode.momentumBounce && f
                      ? (t.updateProgress(p),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        a.transitionEnd(() => {
                          t &&
                            !t.destroyed &&
                            d.allowMomentumBounce &&
                            (s("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout(() => {
                              t.setTranslate(p),
                                a.transitionEnd(() => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (s("_freeModeNoMomentumRelease"),
                        t.updateProgress(c),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          a.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(c),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (r.freeMode.sticky) return void t.slideToClosest();
                    r.freeMode && s("_freeModeNoMomentumRelease");
                  }
                  (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      },
      function (e) {
        let t,
          n,
          s,
          { swiper: i, extendParams: r } = e;
        r({ grid: { rows: 1, fill: "column" } }),
          (i.grid = {
            initSlides: (e) => {
              const { slidesPerView: r } = i.params,
                { rows: a, fill: o } = i.params.grid;
              (n = t / a),
                (s = Math.floor(e / a)),
                (t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a),
                "auto" !== r && "row" === o && (t = Math.max(t, r * a));
            },
            updateSlide: (e, r, a, o) => {
              const { slidesPerGroup: l, spaceBetween: d } = i.params,
                { rows: c, fill: p } = i.params.grid;
              let u, f, h;
              if ("row" === p && l > 1) {
                const n = Math.floor(e / (l * c)),
                  s = e - c * l * n,
                  i = 0 === n ? l : Math.min(Math.ceil((a - n * c * l) / c), l);
                (h = Math.floor(s / i)),
                  (f = s - h * i + n * l),
                  (u = f + (h * t) / c),
                  r.css({ "-webkit-order": u, order: u });
              } else
                "column" === p
                  ? ((f = Math.floor(e / c)),
                    (h = e - f * c),
                    (f > s || (f === s && h === c - 1)) &&
                      ((h += 1), h >= c && ((h = 0), (f += 1))))
                  : ((h = Math.floor(e / n)), (f = e - h * n));
              r.css(o("margin-top"), 0 !== h ? d && `${d}px` : "");
            },
            updateWrapperSize: (e, n, s) => {
              const {
                  spaceBetween: r,
                  centeredSlides: a,
                  roundLengths: o,
                } = i.params,
                { rows: l } = i.params.grid;
              if (
                ((i.virtualSize = (e + r) * t),
                (i.virtualSize = Math.ceil(i.virtualSize / l) - r),
                i.$wrapperEl.css({ [s("width")]: `${i.virtualSize + r}px` }),
                a)
              ) {
                n.splice(0, n.length);
                const e = [];
                for (let t = 0; t < n.length; t += 1) {
                  let s = n[t];
                  o && (s = Math.floor(s)),
                    n[t] < i.virtualSize + n[0] && e.push(s);
                }
                n.push(...e);
              }
            },
          });
      },
      function (e) {
        let { swiper: t } = e;
        Object.assign(t, {
          appendSlide: K.bind(t),
          prependSlide: Q.bind(t),
          addSlide: J.bind(t),
          removeSlide: Z.bind(t),
          removeAllSlides: ee.bind(t),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({ fadeEffect: { crossFade: !1, transformEl: null } }),
          te({
            effect: "fade",
            swiper: t,
            on: s,
            setTranslate: () => {
              const { slides: e } = t,
                n = t.params.fadeEffect;
              for (let s = 0; s < e.length; s += 1) {
                const e = t.slides.eq(s);
                let i = -e[0].swiperSlideOffset;
                t.params.virtualTranslate || (i -= t.translate);
                let r = 0;
                t.isHorizontal() || ((r = i), (i = 0));
                const a = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e[0].progress), 0)
                  : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                ne(n, e)
                  .css({ opacity: a })
                  .transform(`translate3d(${i}px, ${r}px, 0px)`);
              }
            },
            setTransition: (e) => {
              const { transformEl: n } = t.params.fadeEffect;
              (n ? t.slides.find(n) : t.slides).transition(e),
                se({ swiper: t, duration: e, transformEl: n, allSlides: !0 });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        });
        const i = (e, t, n) => {
          let s = n
              ? e.find(".swiper-slide-shadow-left")
              : e.find(".swiper-slide-shadow-top"),
            i = n
              ? e.find(".swiper-slide-shadow-right")
              : e.find(".swiper-slide-shadow-bottom");
          0 === s.length &&
            ((s = d(
              `<div class="swiper-slide-shadow-${n ? "left" : "top"}"></div>`
            )),
            e.append(s)),
            0 === i.length &&
              ((i = d(
                `<div class="swiper-slide-shadow-${
                  n ? "right" : "bottom"
                }"></div>`
              )),
              e.append(i)),
            s.length && (s[0].style.opacity = Math.max(-t, 0)),
            i.length && (i[0].style.opacity = Math.max(t, 0));
        };
        te({
          effect: "cube",
          swiper: t,
          on: s,
          setTranslate: () => {
            const {
                $el: e,
                $wrapperEl: n,
                slides: s,
                width: r,
                height: a,
                rtlTranslate: o,
                size: l,
                browser: c,
              } = t,
              p = t.params.cubeEffect,
              u = t.isHorizontal(),
              f = t.virtual && t.params.virtual.enabled;
            let h,
              m = 0;
            p.shadow &&
              (u
                ? ((h = n.find(".swiper-cube-shadow")),
                  0 === h.length &&
                    ((h = d('<div class="swiper-cube-shadow"></div>')),
                    n.append(h)),
                  h.css({ height: `${r}px` }))
                : ((h = e.find(".swiper-cube-shadow")),
                  0 === h.length &&
                    ((h = d('<div class="swiper-cube-shadow"></div>')),
                    e.append(h))));
            for (let e = 0; e < s.length; e += 1) {
              const t = s.eq(e);
              let n = e;
              f && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
              let r = 90 * n,
                a = Math.floor(r / 360);
              o && ((r = -r), (a = Math.floor(-r / 360)));
              const d = Math.max(Math.min(t[0].progress, 1), -1);
              let c = 0,
                h = 0,
                g = 0;
              n % 4 == 0
                ? ((c = 4 * -a * l), (g = 0))
                : (n - 1) % 4 == 0
                ? ((c = 0), (g = 4 * -a * l))
                : (n - 2) % 4 == 0
                ? ((c = l + 4 * a * l), (g = l))
                : (n - 3) % 4 == 0 && ((c = -l), (g = 3 * l + 4 * l * a)),
                o && (c = -c),
                u || ((h = c), (c = 0));
              const v = `rotateX(${u ? 0 : -r}deg) rotateY(${
                u ? r : 0
              }deg) translate3d(${c}px, ${h}px, ${g}px)`;
              d <= 1 &&
                d > -1 &&
                ((m = 90 * n + 90 * d), o && (m = 90 * -n - 90 * d)),
                t.transform(v),
                p.slideShadows && i(t, d, u);
            }
            if (
              (n.css({
                "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                "transform-origin": `50% 50% -${l / 2}px`,
              }),
              p.shadow)
            )
              if (u)
                h.transform(
                  `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${
                    -r / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
                );
              else {
                const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                  t =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 +
                      Math.cos((2 * e * Math.PI) / 360) / 2),
                  n = p.shadowScale,
                  s = p.shadowScale / t,
                  i = p.shadowOffset;
                h.transform(
                  `scale3d(${n}, 1, ${s}) translate3d(0px, ${a / 2 + i}px, ${
                    -a / 2 / s
                  }px) rotateX(-90deg)`
                );
              }
            const g = c.isSafari || c.isWebView ? -l / 2 : 0;
            n.transform(
              `translate3d(0px,0,${g}px) rotateX(${
                t.isHorizontal() ? 0 : m
              }deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`
            ),
              n[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
          },
          setTransition: (e) => {
            const { $el: n, slides: s } = t;
            s
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              t.params.cubeEffect.shadow &&
                !t.isHorizontal() &&
                n.find(".swiper-cube-shadow").transition(e);
          },
          recreateShadows: () => {
            const e = t.isHorizontal();
            t.slides.each((t) => {
              const n = Math.max(Math.min(t.progress, 1), -1);
              i(d(t), n, e);
            });
          },
          getEffectParams: () => t.params.cubeEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0,
            transformEl: null,
          },
        });
        const i = (e, n, s) => {
          let i = t.isHorizontal()
              ? e.find(".swiper-slide-shadow-left")
              : e.find(".swiper-slide-shadow-top"),
            r = t.isHorizontal()
              ? e.find(".swiper-slide-shadow-right")
              : e.find(".swiper-slide-shadow-bottom");
          0 === i.length && (i = ie(s, e, t.isHorizontal() ? "left" : "top")),
            0 === r.length &&
              (r = ie(s, e, t.isHorizontal() ? "right" : "bottom")),
            i.length && (i[0].style.opacity = Math.max(-n, 0)),
            r.length && (r[0].style.opacity = Math.max(n, 0));
        };
        te({
          effect: "flip",
          swiper: t,
          on: s,
          setTranslate: () => {
            const { slides: e, rtlTranslate: n } = t,
              s = t.params.flipEffect;
            for (let r = 0; r < e.length; r += 1) {
              const a = e.eq(r);
              let o = a[0].progress;
              t.params.flipEffect.limitRotation &&
                (o = Math.max(Math.min(a[0].progress, 1), -1));
              const l = a[0].swiperSlideOffset;
              let d = -180 * o,
                c = 0,
                p = t.params.cssMode ? -l - t.translate : -l,
                u = 0;
              t.isHorizontal()
                ? n && (d = -d)
                : ((u = p), (p = 0), (c = -d), (d = 0)),
                (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length),
                s.slideShadows && i(a, o, s);
              const f = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
              ne(s, a).transform(f);
            }
          },
          setTransition: (e) => {
            const { transformEl: n } = t.params.flipEffect;
            (n ? t.slides.find(n) : t.slides)
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              se({ swiper: t, duration: e, transformEl: n });
          },
          recreateShadows: () => {
            const e = t.params.flipEffect;
            t.slides.each((n) => {
              const s = d(n);
              let r = s[0].progress;
              t.params.flipEffect.limitRotation &&
                (r = Math.max(Math.min(n.progress, 1), -1)),
                i(s, r, e);
            });
          },
          getEffectParams: () => t.params.flipEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null,
          },
        }),
          te({
            effect: "coverflow",
            swiper: t,
            on: s,
            setTranslate: () => {
              const { width: e, height: n, slides: s, slidesSizesGrid: i } = t,
                r = t.params.coverflowEffect,
                a = t.isHorizontal(),
                o = t.translate,
                l = a ? e / 2 - o : n / 2 - o,
                d = a ? r.rotate : -r.rotate,
                c = r.depth;
              for (let e = 0, t = s.length; e < t; e += 1) {
                const t = s.eq(e),
                  n = i[e],
                  o = (l - t[0].swiperSlideOffset - n / 2) / n,
                  p =
                    "function" == typeof r.modifier
                      ? r.modifier(o)
                      : o * r.modifier;
                let u = a ? d * p : 0,
                  f = a ? 0 : d * p,
                  h = -c * Math.abs(p),
                  m = r.stretch;
                "string" == typeof m &&
                  -1 !== m.indexOf("%") &&
                  (m = (parseFloat(r.stretch) / 100) * n);
                let g = a ? 0 : m * p,
                  v = a ? m * p : 0,
                  y = 1 - (1 - r.scale) * Math.abs(p);
                Math.abs(v) < 0.001 && (v = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(h) < 0.001 && (h = 0),
                  Math.abs(u) < 0.001 && (u = 0),
                  Math.abs(f) < 0.001 && (f = 0),
                  Math.abs(y) < 0.001 && (y = 0);
                const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${f}deg) rotateY(${u}deg) scale(${y})`;
                if (
                  (ne(r, t).transform(b),
                  (t[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                  r.slideShadows)
                ) {
                  let e = a
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    n = a
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length && (e = ie(r, t, a ? "left" : "top")),
                    0 === n.length && (n = ie(r, t, a ? "right" : "bottom")),
                    e.length && (e[0].style.opacity = p > 0 ? p : 0),
                    n.length && (n[0].style.opacity = -p > 0 ? -p : 0);
                }
              }
            },
            setTransition: (e) => {
              const { transformEl: n } = t.params.coverflowEffect;
              (n ? t.slides.find(n) : t.slides)
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({
          creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
          },
        });
        const i = (e) => ("string" == typeof e ? e : `${e}px`);
        te({
          effect: "creative",
          swiper: t,
          on: s,
          setTranslate: () => {
            const { slides: e, $wrapperEl: n, slidesSizesGrid: s } = t,
              r = t.params.creativeEffect,
              { progressMultiplier: a } = r,
              o = t.params.centeredSlides;
            if (o) {
              const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
              n.transform(`translateX(calc(50% - ${e}px))`);
            }
            for (let n = 0; n < e.length; n += 1) {
              const s = e.eq(n),
                l = s[0].progress,
                d = Math.min(
                  Math.max(s[0].progress, -r.limitProgress),
                  r.limitProgress
                );
              let c = d;
              o ||
                (c = Math.min(
                  Math.max(s[0].originalProgress, -r.limitProgress),
                  r.limitProgress
                ));
              const p = s[0].swiperSlideOffset,
                u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                f = [0, 0, 0];
              let h = !1;
              t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
              let m = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              d < 0
                ? ((m = r.next), (h = !0))
                : d > 0 && ((m = r.prev), (h = !0)),
                u.forEach((e, t) => {
                  u[t] = `calc(${e}px + (${i(m.translate[t])} * ${Math.abs(
                    d * a
                  )}))`;
                }),
                f.forEach((e, t) => {
                  f[t] = m.rotate[t] * Math.abs(d * a);
                }),
                (s[0].style.zIndex = -Math.abs(Math.round(l)) + e.length);
              const g = u.join(", "),
                v = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                y =
                  c < 0
                    ? `scale(${1 + (1 - m.scale) * c * a})`
                    : `scale(${1 - (1 - m.scale) * c * a})`,
                b =
                  c < 0
                    ? 1 + (1 - m.opacity) * c * a
                    : 1 - (1 - m.opacity) * c * a,
                w = `translate3d(${g}) ${v} ${y}`;
              if ((h && m.shadow) || !h) {
                let e = s.children(".swiper-slide-shadow");
                if ((0 === e.length && m.shadow && (e = ie(r, s)), e.length)) {
                  const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                  e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                }
              }
              const x = ne(r, s);
              x.transform(w).css({ opacity: b }),
                m.origin && x.css("transform-origin", m.origin);
            }
          },
          setTransition: (e) => {
            const { transformEl: n } = t.params.creativeEffect;
            (n ? t.slides.find(n) : t.slides)
              .transition(e)
              .find(".swiper-slide-shadow")
              .transition(e),
              se({ swiper: t, duration: e, transformEl: n, allSlides: !0 });
          },
          perspective: () => t.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: s } = e;
        n({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0 } }),
          te({
            effect: "cards",
            swiper: t,
            on: s,
            setTranslate: () => {
              const { slides: e, activeIndex: n } = t,
                s = t.params.cardsEffect,
                { startTranslate: i, isTouched: r } = t.touchEventsData,
                a = t.translate;
              for (let o = 0; o < e.length; o += 1) {
                const l = e.eq(o),
                  d = l[0].progress,
                  c = Math.min(Math.max(d, -4), 4);
                let p = l[0].swiperSlideOffset;
                t.params.centeredSlides &&
                  !t.params.cssMode &&
                  t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides &&
                    t.params.cssMode &&
                    (p -= e[0].swiperSlideOffset);
                let u = t.params.cssMode ? -p - t.translate : -p,
                  f = 0;
                const h = -100 * Math.abs(c);
                let m = 1,
                  g = -2 * c,
                  v = 8 - 0.75 * Math.abs(c);
                const y =
                    t.virtual && t.params.virtual.enabled
                      ? t.virtual.from + o
                      : o,
                  b =
                    (y === n || y === n - 1) &&
                    c > 0 &&
                    c < 1 &&
                    (r || t.params.cssMode) &&
                    a < i,
                  w =
                    (y === n || y === n + 1) &&
                    c < 0 &&
                    c > -1 &&
                    (r || t.params.cssMode) &&
                    a > i;
                if (b || w) {
                  const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                  (g += -28 * c * e),
                    (m += -0.5 * e),
                    (v += 96 * e),
                    (f = -25 * e * Math.abs(c) + "%");
                }
                if (
                  ((u =
                    c < 0
                      ? `calc(${u}px + (${v * Math.abs(c)}%))`
                      : c > 0
                      ? `calc(${u}px + (-${v * Math.abs(c)}%))`
                      : `${u}px`),
                  !t.isHorizontal())
                ) {
                  const e = f;
                  (f = u), (u = e);
                }
                const x =
                    c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                  E = `\n        translate3d(${u}, ${f}, ${h}px)\n        rotateZ(${
                    s.rotate ? g : 0
                  }deg)\n        scale(${x})\n      `;
                if (s.slideShadows) {
                  let e = l.find(".swiper-slide-shadow");
                  0 === e.length && (e = ie(s, l)),
                    e.length &&
                      (e[0].style.opacity = Math.min(
                        Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                (l[0].style.zIndex = -Math.abs(Math.round(d)) + e.length),
                  ne(s, l).transform(E);
              }
            },
            setTransition: (e) => {
              const { transformEl: n } = t.params.cardsEffect;
              (n ? t.slides.find(n) : t.slides)
                .transition(e)
                .find(".swiper-slide-shadow")
                .transition(e),
                se({ swiper: t, duration: e, transformEl: n });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
    ];
    return Y.use(re), Y;
  });
const swiper = new Swiper(".clean__inner .swiper", {
    slidesPerView: 1,
    loop: !0,
    navigation: {
      nextEl: ".clean__inner .swiper-button-next",
      prevEl: ".clean__inner .swiper-button-prev",
    },
    spaceBetween: 20,
    autoHeight: !0,
  }),
  servicesSwiper = new Swiper(".services__swiper", {
    slidesPerView: 1,
    loop: !0,
    spaceBetween: 20,
    pagination: { el: ".services-pagination" },
  }),
  aboutSwiper = new Swiper(".about-works__slider", {
    slidesPerView: 1,
    loop: !0,
    spaceBetween: 20,
    pagination: { el: ".about-pagination" },
  }),
  swiperReview = new Swiper(".swiper.reviews__swiper", {
    effect: "coverflow",
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    roundLengths: !0,
    initialSlide: 1,
    loop: !0,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 115,
      modifier: 1,
      slideShadows: !1,
    },
    navigation: {
      clickable: !0,
      nextEl: ".reviews__inner .swiper-button-next",
      prevEl: ".reviews__inner .swiper-button-prev",
    },
  }),
  swiperReviewMobile = new Swiper(".swiper.reviews__swiper-mobile", {
    slidesPerView: 1,
    loop: !0,
    spaceBetween: 30,
    pagination: { el: ".reviews-pagination" },
  }),
  tabsBtnsEl = document.querySelectorAll(".services__btn"),
  tabsTabInfoEl = document.querySelectorAll(".services__item");
let activeTabBtnEl = null,
  activeTabEl = null;
const headerListMenuEl = document.querySelectorAll(".mobile__menu-item"),
  burgerEl = document.querySelector(".header__burger-btn"),
  mobileMenuEl = document.querySelector(".mobile__wrap"),
  lessMoreBtnEl = document.querySelectorAll(".services__more"),
  showChar = 643;
function closeMenu() {
  mobileMenuEl.classList.toggle("show-menu"),
    mobileMenuEl.classList.contains("show-menu")
      ? (mobileMenuEl.style.top = "0")
      : (mobileMenuEl.style.top = "-100%");
}
function showLessText(e) {
  return [e.textContent.slice(0, 643), e.textContent.slice(643)];
}
headerListMenuEl.forEach((e) => {
  e.addEventListener("click", closeMenu);
}),
  burgerEl.addEventListener("click", () => closeMenu()),
  lessMoreBtnEl.forEach((e) => {
    let t = showLessText(e.previousElementSibling);
    const [n, s] = t;
    e.previousElementSibling.classList.add("hide-text"),
      (e.previousElementSibling.innerHTML = `${n}...`),
      e.addEventListener("click", () => {
        e.previousElementSibling.classList.contains("hide-text")
          ? ((e.textContent = "...less"),
            e.previousElementSibling.classList.remove("hide-text"),
            (e.previousElementSibling.innerHTML = `${n}${s}`))
          : ((e.textContent = "...more"),
            e.previousElementSibling.classList.add("hide-text"),
            (e.previousElementSibling.innerHTML = `${n}...`));
      });
  }),
  tabsBtnsEl[0].classList.add("services__btn--active"),
  tabsTabInfoEl[0].classList.add("services__item--active");
for (let e = 0; e < tabsBtnsEl.length; e++)
  tabsBtnsEl[e].addEventListener("click", () => {
    activeTabBtnEl &&
      (activeTabBtnEl.classList.remove("services__btn--active"),
      activeTabEl.classList.remove("services__item--active")),
      tabsBtnsEl[0].classList.contains("services__btn--active") &&
        (tabsBtnsEl[0].classList.remove("services__btn--active"),
        tabsTabInfoEl[0].classList.remove("services__item--active")),
      tabsBtnsEl[e].classList.add("services__btn--active"),
      tabsTabInfoEl[e].classList.add("services__item--active"),
      (activeTabBtnEl = tabsBtnsEl[e]),
      (activeTabEl = tabsTabInfoEl[e]);
  });
