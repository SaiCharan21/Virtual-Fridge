!(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (h, e) {
    var f = [],
        c = f.slice,
        m = f.concat,
        s = f.push,
        r = f.indexOf,
        n = {},
        t = n.toString,
        g = n.hasOwnProperty,
        v = {},
        i = "1.11.1",
        C = function (e, t) {
            return new C.fn.init(e, t);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        a = /^-ms-/,
        l = /-([\da-z])/gi,
        u = function (e, t) {
            return t.toUpperCase();
        };
    function d(e) {
        var t = e.length,
            n = C.type(e);
        return "function" !== n && !C.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (C.fn = C.prototype = {
        jquery: i,
        constructor: C,
        selector: "",
        length: 0,
        toArray: function () {
            return c.call(this);
        },
        get: function (e) {
            return null != e ? (e < 0 ? this[e + this.length] : this[e]) : c.call(this);
        },
        pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
            return C.each(this, e, t);
        },
        map: function (n) {
            return this.pushStack(
                C.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(c.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: s,
        sort: f.sort,
        splice: f.splice,
    }),
        (C.extend = C.fn.extend = function () {
            var e,
                t,
                n,
                i,
                r,
                o,
                a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++), "object" == typeof a || C.isFunction(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
                if (null != (r = arguments[s]))
                    for (i in r)
                        (e = a[i]),
                            a !== (n = r[i]) &&
                                (u && n && (C.isPlainObject(n) || (t = C.isArray(n))) ? ((o = t ? ((t = !1), e && C.isArray(e) ? e : []) : e && C.isPlainObject(e) ? e : {}), (a[i] = C.extend(u, o, n))) : void 0 !== n && (a[i] = n));
            return a;
        }),
        C.extend({
            expando: "jQuery" + (i + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === C.type(e);
            },
            isArray:
                Array.isArray ||
                function (e) {
                    return "array" === C.type(e);
                },
            isWindow: function (e) {
                return null != e && e == e.window;
            },
            isNumeric: function (e) {
                return !C.isArray(e) && 0 <= e - parseFloat(e);
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
                try {
                    if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (e) {
                    return !1;
                }
                if (v.ownLast) for (t in e) return g.call(e, t);
                for (t in e);
                return void 0 === t || g.call(e, t);
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[t.call(e)] || "object" : typeof e;
            },
            globalEval: function (e) {
                e &&
                    C.trim(e) &&
                    (
                        h.execScript ||
                        function (e) {
                            h.eval.call(h, e);
                        }
                    )(e);
            },
            camelCase: function (e) {
                return e.replace(a, "ms-").replace(l, u);
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (e, t, n) {
                var i = 0,
                    r = e.length,
                    o = d(e);
                if (n) {
                    if (o) for (; i < r && !1 !== t.apply(e[i], n); i++);
                    else for (i in e) if (!1 === t.apply(e[i], n)) break;
                } else if (o) for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(o, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (d(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (r) return r.call(t, e, n);
                    for (i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0; n < i; n++) if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; ) e[r++] = t[i++];
                if (n != n) for (; void 0 !== t[i]; ) e[r++] = t[i++];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    r = 0,
                    o = e.length,
                    a = [];
                if (d(e)) for (; r < o; r++) null != (i = t(e[r], r, n)) && a.push(i);
                else for (r in e) null != (i = t(e[r], r, n)) && a.push(i);
                return m.apply([], a);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), C.isFunction(e)))
                    return (
                        (n = c.call(arguments, 2)),
                        ((i = function () {
                            return e.apply(t || this, n.concat(c.call(arguments)));
                        }).guid = e.guid = e.guid || C.guid++),
                        i
                    );
            },
            now: function () {
                return +new Date();
            },
            support: v,
        }),
        C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var p = (function (n) {
        var e,
            h,
            b,
            o,
            i,
            m,
            f,
            g,
            w,
            u,
            c,
            v,
            T,
            r,
            y,
            x,
            a,
            s,
            C,
            N = "sizzle" + -new Date(),
            k = n.document,
            E = 0,
            d = 0,
            l = re(),
            p = re(),
            S = re(),
            j = function (e, t) {
                return e === t && (c = !0), 0;
            },
            L = "undefined",
            A = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            H = t.push,
            q = t.push,
            _ = t.slice,
            M =
                t.indexOf ||
                function (e) {
                    for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                    return -1;
                },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            P = B.replace("w", "w#"),
            R = "\\[" + O + "*(" + B + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + O + "*\\]",
            W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            $ = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            z = new RegExp("^" + O + "*," + O + "*"),
            I = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            U = new RegExp(W),
            V = new RegExp("^" + P + "$"),
            J = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i"),
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ne = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            };
        try {
            q.apply((t = _.call(k.childNodes)), k.childNodes), t[k.childNodes.length].nodeType;
        } catch (e) {
            q = {
                apply: t.length
                    ? function (e, t) {
                          H.apply(e, _.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function ie(e, t, n, i) {
            var r, o, a, s, l, u, c, f, d, p;
            if (((t ? t.ownerDocument || t : k) !== T && v(t), (n = n || []), !e || "string" != typeof e)) return n;
            if (1 !== (s = (t = t || T).nodeType) && 9 !== s) return [];
            if (y && !i) {
                if ((r = K.exec(e)))
                    if ((a = r[1])) {
                        if (9 === s) {
                            if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n;
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && C(t, o) && o.id === a) return n.push(o), n;
                    } else {
                        if (r[2]) return q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && h.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(a)), n;
                    }
                if (h.qsa && (!x || !x.test(e))) {
                    if (((f = c = N), (d = t), (p = 9 === s && e), 1 === s && "object" !== t.nodeName.toLowerCase())) {
                        for (u = m(e), (c = t.getAttribute("id")) ? (f = c.replace(ee, "\\$&")) : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--; ) u[l] = f + he(u[l]);
                        (d = (Z.test(e) && de(t.parentNode)) || t), (p = u.join(","));
                    }
                    if (p)
                        try {
                            return q.apply(n, d.querySelectorAll(p)), n;
                        } catch (e) {
                        } finally {
                            c || t.removeAttribute("id");
                        }
                }
            }
            return g(e.replace($, "$1"), t, n, i);
        }
        function re() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()], (e[t + " "] = n);
            };
        }
        function oe(e) {
            return (e[N] = !0), e;
        }
        function ae(e) {
            var t = T.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function se(e, t) {
            for (var n = e.split("|"), i = e.length; i--; ) b.attrHandle[n[i]] = t;
        }
        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ue(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function ce(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function fe(a) {
            return oe(function (o) {
                return (
                    (o = +o),
                    oe(function (e, t) {
                        for (var n, i = a([], e.length, o), r = i.length; r--; ) e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function de(e) {
            return e && typeof e.getElementsByTagName !== L && e;
        }
        for (e in ((h = ie.support = {}),
        (i = ie.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }),
        (v = ie.setDocument = function (e) {
            var t,
                l = e ? e.ownerDocument || e : k,
                n = l.defaultView;
            return l !== T && 9 === l.nodeType && l.documentElement
                ? ((r = (T = l).documentElement),
                  (y = !i(l)),
                  n &&
                      n !== n.top &&
                      (n.addEventListener
                          ? n.addEventListener(
                                "unload",
                                function () {
                                    v();
                                },
                                !1
                            )
                          : n.attachEvent &&
                            n.attachEvent("onunload", function () {
                                v();
                            })),
                  (h.attributes = ae(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (h.getElementsByTagName = ae(function (e) {
                      return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (h.getElementsByClassName =
                      G.test(l.getElementsByClassName) &&
                      ae(function (e) {
                          return (e.innerHTML = "<div class='a'></div><div class='a i'></div>"), (e.firstChild.className = "i"), 2 === e.getElementsByClassName("i").length;
                      })),
                  (h.getById = ae(function (e) {
                      return (r.appendChild(e).id = N), !l.getElementsByName || !l.getElementsByName(N).length;
                  })),
                  h.getById
                      ? ((b.find.ID = function (e, t) {
                            if (typeof t.getElementById !== L && y) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : [];
                            }
                        }),
                        (b.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                return e.getAttribute("id") === t;
                            };
                        }))
                      : (delete b.find.ID,
                        (b.filter.ID = function (e) {
                            var n = e.replace(te, ne);
                            return function (e) {
                                var t = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                                return t && t.value === n;
                            };
                        })),
                  (b.find.TAG = h.getElementsByTagName
                      ? function (e, t) {
                            if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e);
                        }
                      : function (e, t) {
                            var n,
                                i = [],
                                r = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" !== e) return o;
                            for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                            return i;
                        }),
                  (b.find.CLASS =
                      h.getElementsByClassName &&
                      function (e, t) {
                          if (typeof t.getElementsByClassName !== L && y) return t.getElementsByClassName(e);
                      }),
                  (a = []),
                  (x = []),
                  (h.qsa = G.test(l.querySelectorAll)) &&
                      (ae(function (e) {
                          (e.innerHTML = "<select msallowclip=''><option selected=''></option></select>"),
                              e.querySelectorAll("[msallowclip^='']").length && x.push("[*^$]=" + O + "*(?:''|\"\")"),
                              e.querySelectorAll("[selected]").length || x.push("\\[" + O + "*(?:value|" + F + ")"),
                              e.querySelectorAll(":checked").length || x.push(":checked");
                      }),
                      ae(function (e) {
                          var t = l.createElement("input");
                          t.setAttribute("type", "hidden"),
                              e.appendChild(t).setAttribute("name", "D"),
                              e.querySelectorAll("[name=d]").length && x.push("name" + O + "*[*^$|!~]?="),
                              e.querySelectorAll(":enabled").length || x.push(":enabled", ":disabled"),
                              e.querySelectorAll("*,:x"),
                              x.push(",.*:");
                      })),
                  (h.matchesSelector = G.test((s = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector))) &&
                      ae(function (e) {
                          (h.disconnectedMatch = s.call(e, "div")), s.call(e, "[s!='']:x"), a.push("!=", W);
                      }),
                  (x = x.length && new RegExp(x.join("|"))),
                  (a = a.length && new RegExp(a.join("|"))),
                  (t = G.test(r.compareDocumentPosition)),
                  (C =
                      t || G.test(r.contains)
                          ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    i = t && t.parentNode;
                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                            }
                          : function (e, t) {
                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                return !1;
                            }),
                  (j = t
                      ? function (e, t) {
                            if (e === t) return (c = !0), 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                                n ||
                                (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!h.sortDetached && t.compareDocumentPosition(e) === n)
                                    ? e === l || (e.ownerDocument === k && C(k, e))
                                        ? -1
                                        : t === l || (t.ownerDocument === k && C(k, t))
                                        ? 1
                                        : u
                                        ? M.call(u, e) - M.call(u, t)
                                        : 0
                                    : 4 & n
                                    ? -1
                                    : 1)
                            );
                        }
                      : function (e, t) {
                            if (e === t) return (c = !0), 0;
                            var n,
                                i = 0,
                                r = e.parentNode,
                                o = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : u ? M.call(u, e) - M.call(u, t) : 0;
                            if (r === o) return le(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                            for (; a[i] === s[i]; ) i++;
                            return i ? le(a[i], s[i]) : a[i] === k ? -1 : s[i] === k ? 1 : 0;
                        }),
                  l)
                : T;
        }),
        (ie.matches = function (e, t) {
            return ie(e, null, null, t);
        }),
        (ie.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== T && v(e), (t = t.replace(X, "='$1']")), h.matchesSelector && y && (!a || !a.test(t)) && (!x || !x.test(t))))
                try {
                    var n = s.call(e, t);
                    if (n || h.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {}
            return 0 < ie(t, T, null, [e]).length;
        }),
        (ie.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && v(e), C(e, t);
        }),
        (ie.attr = function (e, t) {
            (e.ownerDocument || e) !== T && v(e);
            var n = b.attrHandle[t.toLowerCase()],
                i = n && A.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
            return void 0 !== i ? i : h.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
        (ie.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ie.uniqueSort = function (e) {
            var t,
                n = [],
                i = 0,
                r = 0;
            if (((c = !h.detectDuplicates), (u = !h.sortStable && e.slice(0)), e.sort(j), c)) {
                for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                for (; i--; ) e.splice(n[i], 1);
            }
            return (u = null), e;
        }),
        (o = ie.getText = function (e) {
            var t,
                n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += o(t);
            return n;
        }),
        ((b = ie.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: J,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ie.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return J.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && U.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
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
                    var t = l[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) &&
                            l(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (typeof e.getAttribute !== L && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, i, r) {
                    return function (e) {
                        var t = ie.attr(e, n);
                        return null == t
                            ? "!=" === i
                            : !i ||
                                  ((t += ""),
                                  "=" === i
                                      ? t === r
                                      : "!=" === i
                                      ? t !== r
                                      : "^=" === i
                                      ? r && 0 === t.indexOf(r)
                                      : "*=" === i
                                      ? r && -1 < t.indexOf(r)
                                      : "$=" === i
                                      ? r && t.slice(-r.length) === r
                                      : "~=" === i
                                      ? -1 < (" " + t + " ").indexOf(r)
                                      : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function (p, e, t, h, m) {
                    var g = "nth" !== p.slice(0, 3),
                        v = "last" !== p.slice(-4),
                        y = "of-type" === e;
                    return 1 === h && 0 === m
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var i,
                                  r,
                                  o,
                                  a,
                                  s,
                                  l,
                                  u = g !== v ? "nextSibling" : "previousSibling",
                                  c = e.parentNode,
                                  f = y && e.nodeName.toLowerCase(),
                                  d = !n && !y;
                              if (c) {
                                  if (g) {
                                      for (; u; ) {
                                          for (o = e; (o = o[u]); ) if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                                          l = u = "only" === p && !l && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((l = [v ? c.firstChild : c.lastChild]), v && d)) {
                                      for (s = (i = (r = c[N] || (c[N] = {}))[p] || [])[0] === E && i[1], a = i[0] === E && i[2], o = s && c.childNodes[s]; (o = (++s && o && o[u]) || (a = s = 0) || l.pop()); )
                                          if (1 === o.nodeType && ++a && o === e) {
                                              r[p] = [E, s, a];
                                              break;
                                          }
                                  } else if (d && (i = (e[N] || (e[N] = {}))[p]) && i[0] === E) a = i[1];
                                  else for (; (o = (++s && o && o[u]) || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++a || (d && ((o[N] || (o[N] = {}))[p] = [E, a]), o !== e)); );
                                  return (a -= m) === h || (a % h == 0 && 0 <= a / h);
                              }
                          };
                },
                PSEUDO: function (e, o) {
                    var t,
                        a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return a[N]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, "", o]),
                          b.setFilters.hasOwnProperty(e.toLowerCase())
                              ? oe(function (e, t) {
                                    for (var n, i = a(e, o), r = i.length; r--; ) e[(n = M.call(e, i[r]))] = !(t[n] = i[r]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: oe(function (e) {
                    var i = [],
                        r = [],
                        s = f(e.replace($, "$1"));
                    return s[N]
                        ? oe(function (e, t, n, i) {
                              for (var r, o = s(e, null, i, []), a = e.length; a--; ) (r = o[a]) && (e[a] = !(t[a] = r));
                          })
                        : function (e, t, n) {
                              return (i[0] = e), s(i, null, n, r), !r.pop();
                          };
                }),
                has: oe(function (t) {
                    return function (e) {
                        return 0 < ie(t, e).length;
                    };
                }),
                contains: oe(function (t) {
                    return function (e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
                    };
                }),
                lang: oe(function (n) {
                    return (
                        V.test(n || "") || ie.error("unsupported lang: " + n),
                        (n = n.replace(te, ne).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === r;
                },
                focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                    return !1 === e.disabled;
                },
                disabled: function (e) {
                    return !0 === e.disabled;
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !b.pseudos.empty(e);
                },
                header: function (e) {
                    return Q.test(e.nodeName);
                },
                input: function (e) {
                    return Y.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: fe(function () {
                    return [0];
                }),
                last: fe(function (e, t) {
                    return [t - 1];
                }),
                eq: fe(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: fe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: fe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: fe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: fe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                }),
            },
        }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = ue(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = ce(e);
        function pe() {}
        function he(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function me(a, e, t) {
            var s = e.dir,
                l = t && "parentNode" === s,
                u = d++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[s]); ) if (1 === e.nodeType || l) return a(e, t, n);
                  }
                : function (e, t, n) {
                      var i,
                          r,
                          o = [E, u];
                      if (n) {
                          for (; (e = e[s]); ) if ((1 === e.nodeType || l) && a(e, t, n)) return !0;
                      } else
                          for (; (e = e[s]); )
                              if (1 === e.nodeType || l) {
                                  if ((i = (r = e[N] || (e[N] = {}))[s]) && i[0] === E && i[1] === u) return (o[2] = i[2]);
                                  if (((r[s] = o)[2] = a(e, t, n))) return !0;
                              }
                  };
        }
        function ge(r) {
            return 1 < r.length
                ? function (e, t, n) {
                      for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                      return !0;
                  }
                : r[0];
        }
        function ve(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
            return a;
        }
        function ye(p, h, m, g, v, e) {
            return (
                g && !g[N] && (g = ye(g)),
                v && !v[N] && (v = ye(v, e)),
                oe(function (e, t, n, i) {
                    var r,
                        o,
                        a,
                        s = [],
                        l = [],
                        u = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        f = !p || (!e && h) ? c : ve(c, s, p, n, i),
                        d = m ? (v || (e ? p : u || g) ? [] : t) : f;
                    if ((m && m(f, d, n, i), g)) for (r = ve(d, l), g(r, [], n, i), o = r.length; o--; ) (a = r[o]) && (d[l[o]] = !(f[l[o]] = a));
                    if (e) {
                        if (v || p) {
                            if (v) {
                                for (r = [], o = d.length; o--; ) (a = d[o]) && r.push((f[o] = a));
                                v(null, (d = []), r, i);
                            }
                            for (o = d.length; o--; ) (a = d[o]) && -1 < (r = v ? M.call(e, a) : s[o]) && (e[r] = !(t[r] = a));
                        }
                    } else (d = ve(d === t ? d.splice(u, d.length) : d)), v ? v(null, t, d, i) : q.apply(t, d);
                })
            );
        }
        function xe(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    l = me(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    u = me(
                        function (e) {
                            return -1 < M.call(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            return (!o && (n || t !== w)) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [me(ge(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[N]) {
                        for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                        return ye(1 < s && ge(c), 1 < s && he(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && xe(e.slice(s, n)), n < r && xe((e = e.slice(n))), n < r && he(e));
                    }
                    c.push(t);
                }
            return ge(c);
        }
        return (
            (pe.prototype = b.filters = b.pseudos),
            (b.setFilters = new pe()),
            (m = ie.tokenize = function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u = p[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, s = [], l = b.preFilter; a; ) {
                    for (o in ((n && !(i = z.exec(a))) || (i && (a = a.slice(i[0].length) || a), s.push((r = []))),
                    (n = !1),
                    (i = I.exec(a)) && ((n = i.shift()), r.push({ value: n, type: i[0].replace($, " ") }), (a = a.slice(n.length))),
                    b.filter))
                        !(i = J[o].exec(a)) || (l[o] && !(i = l[o](i))) || ((n = i.shift()), r.push({ value: n, type: o, matches: i }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? ie.error(e) : p(e, s).slice(0);
            }),
            (f = ie.compile = function (e, t) {
                var n,
                    g,
                    v,
                    y,
                    x,
                    i,
                    r = [],
                    o = [],
                    a = S[e + " "];
                if (!a) {
                    for (t || (t = m(e)), n = t.length; n--; ) (a = xe(t[n]))[N] ? r.push(a) : o.push(a);
                    (a = S(
                        e,
                        ((g = o),
                        (y = 0 < (v = r).length),
                        (x = 0 < g.length),
                        (i = function (e, t, n, i, r) {
                            var o,
                                a,
                                s,
                                l = 0,
                                u = "0",
                                c = e && [],
                                f = [],
                                d = w,
                                p = e || (x && b.find.TAG("*", r)),
                                h = (E += null == d ? 1 : Math.random() || 0.1),
                                m = p.length;
                            for (r && (w = t !== T && t); u !== m && null != (o = p[u]); u++) {
                                if (x && o) {
                                    for (a = 0; (s = g[a++]); )
                                        if (s(o, t, n)) {
                                            i.push(o);
                                            break;
                                        }
                                    r && (E = h);
                                }
                                y && ((o = !s && o) && l--, e && c.push(o));
                            }
                            if (((l += u), y && u !== l)) {
                                for (a = 0; (s = v[a++]); ) s(c, f, t, n);
                                if (e) {
                                    if (0 < l) for (; u--; ) c[u] || f[u] || (f[u] = D.call(i));
                                    f = ve(f);
                                }
                                q.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && ie.uniqueSort(i);
                            }
                            return r && ((E = h), (w = d)), c;
                        }),
                        y ? oe(i) : i)
                    )).selector = e;
                }
                return a;
            }),
            (g = ie.select = function (e, t, n, i) {
                var r,
                    o,
                    a,
                    s,
                    l,
                    u = "function" == typeof e && e,
                    c = !i && m((e = u.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && y && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                        u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    for (r = J.needsContext.test(e) ? 0 : o.length; r-- && ((a = o[r]), !b.relative[(s = a.type)]); )
                        if ((l = b.find[s]) && (i = l(a.matches[0].replace(te, ne), (Z.test(o[0].type) && de(t.parentNode)) || t))) {
                            if ((o.splice(r, 1), !(e = i.length && he(o)))) return q.apply(n, i), n;
                            break;
                        }
                }
                return (u || f(e, c))(i, t, !y, n, (Z.test(e) && de(t.parentNode)) || t), n;
            }),
            (h.sortStable = N.split("").sort(j).join("") === N),
            (h.detectDuplicates = !!c),
            v(),
            (h.sortDetached = ae(function (e) {
                return 1 & e.compareDocumentPosition(T.createElement("div"));
            })),
            ae(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                se("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (h.attributes &&
                ae(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                se("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ae(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                se(F, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                }),
            ie
        );
    })(h);
    (C.find = p), (C.expr = p.selectors), (C.expr[":"] = C.expr.pseudos), (C.unique = p.uniqueSort), (C.text = p.getText), (C.isXMLDoc = p.isXML), (C.contains = p.contains);
    var y = C.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;
    function w(e, n, i) {
        if (C.isFunction(n))
            return C.grep(e, function (e, t) {
                return !!n.call(e, t, e) !== i;
            });
        if (n.nodeType)
            return C.grep(e, function (e) {
                return (e === n) !== i;
            });
        if ("string" == typeof n) {
            if (b.test(n)) return C.filter(n, e, i);
            n = C.filter(n, e);
        }
        return C.grep(e, function (e) {
            return 0 <= C.inArray(e, n) !== i;
        });
    }
    (C.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : C.find.matches(
                      e,
                      C.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        C.fn.extend({
            find: function (e) {
                var t,
                    n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e)
                    return this.pushStack(
                        C(e).filter(function () {
                            for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0;
                        })
                    );
                for (t = 0; t < r; t++) C.find(e, i[t], n);
                return ((n = this.pushStack(1 < r ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e), n;
            },
            filter: function (e) {
                return this.pushStack(w(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(w(this, e || [], !0));
            },
            is: function (e) {
                return !!w(this, "string" == typeof e && y.test(e) ? C(e) : e || [], !1).length;
            },
        });
    var T,
        N = h.document,
        k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((C.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" != typeof e)
            return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : C.isFunction(e)
                ? void 0 !== T.ready
                    ? T.ready(e)
                    : e(C)
                : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), C.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : k.exec(e)) || (!n[1] && t)) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (((t = t instanceof C ? t[0] : t), C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)), x.test(n[1]) && C.isPlainObject(t)))
                for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
        }
        if ((i = N.getElementById(n[2])) && i.parentNode) {
            if (i.id !== n[2]) return T.find(e);
            (this.length = 1), (this[0] = i);
        }
        return (this.context = N), (this.selector = e), this;
    }).prototype = C.fn),
        (T = C(N));
    var E = /^(?:parents|prev(?:Until|All))/,
        S = { children: !0, contents: !0, next: !0, prev: !0 };
    function j(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    C.extend({
        dir: function (e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !C(r).is(n)); ) 1 === r.nodeType && i.push(r), (r = r[t]);
            return i;
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
    }),
        C.fn.extend({
            has: function (e) {
                var t,
                    n = C(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; t < i; t++) if (C.contains(this, n[t])) return !0;
                });
            },
            closest: function (e, t) {
                for (var n, i = 0, r = this.length, o = [], a = y.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
                return this.pushStack(1 < o.length ? C.unique(o) : o);
            },
            index: function (e) {
                return e ? ("string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
                return this.pushStack(C.unique(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        C.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return C.dir(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return C.dir(e, "parentNode", n);
                },
                next: function (e) {
                    return j(e, "nextSibling");
                },
                prev: function (e) {
                    return j(e, "previousSibling");
                },
                nextAll: function (e) {
                    return C.dir(e, "nextSibling");
                },
                prevAll: function (e) {
                    return C.dir(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return C.dir(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return C.dir(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return C.sibling((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return C.sibling(e.firstChild);
                },
                contents: function (e) {
                    return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes);
                },
            },
            function (i, r) {
                C.fn[i] = function (e, t) {
                    var n = C.map(this, r, e);
                    return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (S[i] || (n = C.unique(n)), E.test(i) && (n = n.reverse())), this.pushStack(n);
                };
            }
        );
    var L,
        A = /\S+/g,
        D = {};
    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", q, !1), h.removeEventListener("load", q, !1)) : (N.detachEvent("onreadystatechange", q), h.detachEvent("onload", q));
    }
    function q() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (H(), C.ready());
    }
    (C.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? D[r] ||
                  ((n = D[(e = r)] = {}),
                  C.each(e.match(A) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : C.extend({}, r);
        var i,
            t,
            o,
            a,
            s,
            l,
            u = [],
            c = !r.once && [],
            f = function (e) {
                for (t = r.memory && e, o = !0, s = l || 0, l = 0, a = u.length, i = !0; u && s < a; s++)
                    if (!1 === u[s].apply(e[0], e[1]) && r.stopOnFalse) {
                        t = !1;
                        break;
                    }
                (i = !1), u && (c ? c.length && f(c.shift()) : t ? (u = []) : d.disable());
            },
            d = {
                add: function () {
                    if (u) {
                        var e = u.length;
                        !(function i(e) {
                            C.each(e, function (e, t) {
                                var n = C.type(t);
                                "function" === n ? (r.unique && d.has(t)) || u.push(t) : t && t.length && "string" !== n && i(t);
                            });
                        })(arguments),
                            i ? (a = u.length) : t && ((l = e), f(t));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        u &&
                            C.each(arguments, function (e, t) {
                                for (var n; -1 < (n = C.inArray(t, u, n)); ) u.splice(n, 1), i && (n <= a && a--, n <= s && s--);
                            }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < C.inArray(e, u) : !(!u || !u.length);
                },
                empty: function () {
                    return (u = []), (a = 0), this;
                },
                disable: function () {
                    return (u = c = t = void 0), this;
                },
                disabled: function () {
                    return !u;
                },
                lock: function () {
                    return (c = void 0), t || d.disable(), this;
                },
                locked: function () {
                    return !c;
                },
                fireWith: function (e, t) {
                    return !u || (o && !c) || ((t = [e, (t = t || []).slice ? t.slice() : t]), i ? c.push(t) : f(t)), this;
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return d;
    }),
        C.extend({
            Deferred: function (e) {
                var o = [
                        ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", C.Callbacks("memory")],
                    ],
                    r = "pending",
                    a = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var r = arguments;
                            return C.Deferred(function (i) {
                                C.each(o, function (e, t) {
                                    var n = C.isFunction(r[e]) && r[e];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && C.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments);
                                    });
                                }),
                                    (r = null);
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? C.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    (a.pipe = a.then),
                    C.each(o, function (e, t) {
                        var n = t[2],
                            i = t[3];
                        (a[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        r = i;
                                    },
                                    o[1 ^ e][2].disable,
                                    o[2][2].lock
                                ),
                            (s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? a : this, arguments), this;
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var r,
                    t,
                    n,
                    i = 0,
                    o = c.call(arguments),
                    a = o.length,
                    s = 1 !== a || (e && C.isFunction(e.promise)) ? a : 0,
                    l = 1 === s ? e : C.Deferred(),
                    u = function (t, n, i) {
                        return function (e) {
                            (n[t] = this), (i[t] = 1 < arguments.length ? c.call(arguments) : e), i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
                        };
                    };
                if (1 < a) for (r = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) o[i] && C.isFunction(o[i].promise) ? o[i].promise().done(u(i, n, o)).fail(l.reject).progress(u(i, t, r)) : --s;
                return s || l.resolveWith(n, o), l.promise();
            },
        }),
        (C.fn.ready = function (e) {
            return C.ready.promise().done(e), this;
        }),
        C.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? C.readyWait++ : C.ready(!0);
            },
            ready: function (e) {
                if (!0 === e ? !--C.readyWait : !C.isReady) {
                    if (!N.body) return setTimeout(C.ready);
                    ((C.isReady = !0) !== e && 0 < --C.readyWait) || (L.resolveWith(N, [C]), C.fn.triggerHandler && (C(N).triggerHandler("ready"), C(N).off("ready")));
                }
            },
        }),
        (C.ready.promise = function (e) {
            if (!L)
                if (((L = C.Deferred()), "complete" === N.readyState)) setTimeout(C.ready);
                else if (N.addEventListener) N.addEventListener("DOMContentLoaded", q, !1), h.addEventListener("load", q, !1);
                else {
                    N.attachEvent("onreadystatechange", q), h.attachEvent("onload", q);
                    var n = !1;
                    try {
                        n = null == h.frameElement && N.documentElement;
                    } catch (e) {}
                    n &&
                        n.doScroll &&
                        (function t() {
                            if (!C.isReady) {
                                try {
                                    n.doScroll("left");
                                } catch (e) {
                                    return setTimeout(t, 50);
                                }
                                H(), C.ready();
                            }
                        })();
                }
            return L.promise(e);
        });
    var _,
        M = "undefined";
    for (_ in C(v)) break;
    (v.ownLast = "0" !== _),
        (v.inlineBlockNeedsLayout = !1),
        C(function () {
            var e, t, n, i;
            (n = N.getElementsByTagName("body")[0]) &&
                n.style &&
                ((t = N.createElement("div")),
                ((i = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                n.appendChild(i).appendChild(t),
                typeof t.style.zoom !== M && ((t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth), e && (n.style.zoom = 1)),
                n.removeChild(i));
        }),
        (function () {
            var e = N.createElement("div");
            if (null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete e.test;
                } catch (e) {
                    v.deleteExpando = !1;
                }
            }
            e = null;
        })(),
        (C.acceptData = function (e) {
            var t = C.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || (!0 !== t && e.getAttribute("classid") === t));
        });
    var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function B(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(O, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? C.parseJSON(n) : n));
                } catch (e) {}
                C.data(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    function P(e) {
        var t;
        for (t in e) if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function R(e, t, n, i) {
        if (C.acceptData(e)) {
            var r,
                o,
                a = C.expando,
                s = e.nodeType,
                l = s ? C.cache : e,
                u = s ? e[a] : e[a] && a;
            if ((u && l[u] && (i || l[u].data)) || void 0 !== n || "string" != typeof t)
                return (
                    u || (u = s ? (e[a] = f.pop() || C.guid++) : a),
                    l[u] || (l[u] = s ? {} : { toJSON: C.noop }),
                    ("object" != typeof t && "function" != typeof t) || (i ? (l[u] = C.extend(l[u], t)) : (l[u].data = C.extend(l[u].data, t))),
                    (o = l[u]),
                    i || (o.data || (o.data = {}), (o = o.data)),
                    void 0 !== n && (o[C.camelCase(t)] = n),
                    "string" == typeof t ? null == (r = o[t]) && (r = o[C.camelCase(t)]) : (r = o),
                    r
                );
        }
    }
    function W(e, t, n) {
        if (C.acceptData(e)) {
            var i,
                r,
                o = e.nodeType,
                a = o ? C.cache : e,
                s = o ? e[C.expando] : C.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    r = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in i ? [t] : (t = C.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; r--; ) delete i[t[r]];
                    if (n ? !P(i) : !C.isEmptyObject(i)) return;
                }
                (n || (delete a[s].data, P(a[s]))) && (o ? C.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : (a[s] = null));
            }
        }
    }
    C.extend({
        cache: {},
        noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
        hasData: function (e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !P(e);
        },
        data: function (e, t, n) {
            return R(e, t, n);
        },
        removeData: function (e, t) {
            return W(e, t);
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0);
        },
        _removeData: function (e, t) {
            return W(e, t, !0);
        },
    }),
        C.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    r,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 !== e)
                    return "object" == typeof e
                        ? this.each(function () {
                              C.data(this, e);
                          })
                        : 1 < arguments.length
                        ? this.each(function () {
                              C.data(this, e, t);
                          })
                        : o
                        ? B(o, e, C.data(o, e))
                        : void 0;
                if (this.length && ((r = C.data(o)), 1 === o.nodeType && !C._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && B(o, (i = C.camelCase(i.slice(5))), r[i]);
                    C._data(o, "parsedAttrs", !0);
                }
                return r;
            },
            removeData: function (e) {
                return this.each(function () {
                    C.removeData(this, e);
                });
            },
        }),
        C.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (t = (t || "fx") + "queue"), (i = C._data(e, t)), n && (!i || C.isArray(n) ? (i = C._data(e, t, C.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = C._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                C.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    C._data(e, n) ||
                    C._data(e, n, {
                        empty: C.Callbacks("once memory").add(function () {
                            C._removeData(e, t + "queue"), C._removeData(e, n);
                        }),
                    })
                );
            },
        }),
        C.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? C.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = C.queue(this, t, n);
                              C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    C.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    r = C.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --i || r.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = C._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t);
            },
        });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        z = ["Top", "Right", "Bottom", "Left"],
        I = function (e, t) {
            return (e = t || e), "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e);
        },
        X = (C.access = function (e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === C.type(n)) for (s in ((r = !0), n)) C.access(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== i &&
                ((r = !0),
                C.isFunction(i) || (a = !0),
                u &&
                    (t = a
                        ? (t.call(e, i), null)
                        : ((u = t),
                          function (e, t, n) {
                              return u.call(C(e), n);
                          })),
                t)
            )
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        }),
        U = /^(?:checkbox|radio)$/i;
    !(function () {
        var e = N.createElement("input"),
            t = N.createElement("div"),
            n = N.createDocumentFragment();
        if (
            ((t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (v.leadingWhitespace = 3 === t.firstChild.nodeType),
            (v.tbody = !t.getElementsByTagName("tbody").length),
            (v.htmlSerialize = !!t.getElementsByTagName("link").length),
            (v.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML),
            (e.type = "checkbox"),
            (e.checked = !0),
            n.appendChild(e),
            (v.appendChecked = e.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
            n.appendChild(t),
            (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
            (v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (v.noCloneEvent = !0),
            t.attachEvent &&
                (t.attachEvent("onclick", function () {
                    v.noCloneEvent = !1;
                }),
                t.cloneNode(!0).click()),
            null == v.deleteExpando)
        ) {
            v.deleteExpando = !0;
            try {
                delete t.test;
            } catch (e) {
                v.deleteExpando = !1;
            }
        }
    })(),
        (function () {
            var e,
                t,
                n = N.createElement("div");
            for (e in { submit: !0, change: !0, focusin: !0 }) (t = "on" + e), (v[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"), (v[e + "Bubbles"] = !1 === n.attributes[t].expando));
            n = null;
        })();
    var V = /^(?:input|select|textarea)$/i,
        J = /^key/,
        Y = /^(?:mouse|pointer|contextmenu)|click/,
        Q = /^(?:focusinfocus|focusoutblur)$/,
        G = /^([^.]*)(?:\.(.+)|)$/;
    function K() {
        return !0;
    }
    function Z() {
        return !1;
    }
    function ee() {
        try {
            return N.activeElement;
        } catch (e) {}
    }
    function te(e) {
        var t = ne.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
    }
    (C.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                m,
                g = C._data(e);
            if (g) {
                for (
                    n.handler && ((n = (l = n).handler), (r = l.selector)),
                        n.guid || (n.guid = C.guid++),
                        (a = g.events) || (a = g.events = {}),
                        (c = g.handle) ||
                            ((c = g.handle = function (e) {
                                return typeof C === M || (e && C.event.triggered === e.type) ? void 0 : C.event.dispatch.apply(c.elem, arguments);
                            }).elem = e),
                        s = (t = (t || "").match(A) || [""]).length;
                    s--;

                )
                    (p = m = (o = G.exec(t[s]) || [])[1]),
                        (h = (o[2] || "").split(".").sort()),
                        p &&
                            ((u = C.event.special[p] || {}),
                            (p = (r ? u.delegateType : u.bindType) || p),
                            (u = C.event.special[p] || {}),
                            (f = C.extend({ type: p, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && C.expr.match.needsContext.test(r), namespace: h.join(".") }, l)),
                            (d = a[p]) || (((d = a[p] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(e, i, h, c)) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))),
                            u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
                            r ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                            (C.event.global[p] = !0));
                e = null;
            }
        },
        remove: function (e, t, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                m,
                g = C.hasData(e) && C._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(A) || [""]).length; u--; )
                    if (((p = m = (s = G.exec(t[u]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
                        for (f = C.event.special[p] || {}, d = c[(p = (i ? f.delegateType : f.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--; )
                            (a = d[o]),
                                (!r && m !== a.origType) ||
                                    (n && n.guid !== a.guid) ||
                                    (s && !s.test(a.namespace)) ||
                                    (i && i !== a.selector && ("**" !== i || !a.selector)) ||
                                    (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        l && !d.length && ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) || C.removeEvent(e, p, g.handle), delete c[p]);
                    } else for (p in c) C.event.remove(e, p + t[u], n, i, !0);
                C.isEmptyObject(c) && (delete g.handle, C._removeData(e, "events"));
            }
        },
        trigger: function (e, t, n, i) {
            var r,
                o,
                a,
                s,
                l,
                u,
                c,
                f = [n || N],
                d = g.call(e, "type") ? e.type : e,
                p = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((a = u = n = n || N),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Q.test(d + C.event.triggered) &&
                    (0 <= d.indexOf(".") && ((d = (p = d.split(".")).shift()), p.sort()),
                    (o = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[C.expando] ? e : new C.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                    (e.namespace = p.join(".")),
                    (e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : C.makeArray(t, [e])),
                    (l = C.event.special[d] || {}),
                    i || !l.trigger || !1 !== l.trigger.apply(n, t)))
            ) {
                if (!i && !l.noBubble && !C.isWindow(n)) {
                    for (s = l.delegateType || d, Q.test(s + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), (u = a);
                    u === (n.ownerDocument || N) && f.push(u.defaultView || u.parentWindow || h);
                }
                for (c = 0; (a = f[c++]) && !e.isPropagationStopped(); )
                    (e.type = 1 < c ? s : l.bindType || d),
                        (r = (C._data(a, "events") || {})[e.type] && C._data(a, "handle")) && r.apply(a, t),
                        (r = o && a[o]) && r.apply && C.acceptData(a) && ((e.result = r.apply(a, t)), !1 === e.result && e.preventDefault());
                if (((e.type = d), !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(f.pop(), t)) && C.acceptData(n) && o && n[d] && !C.isWindow(n))) {
                    (u = n[o]) && (n[o] = null), (C.event.triggered = d);
                    try {
                        n[d]();
                    } catch (e) {}
                    (C.event.triggered = void 0), u && (n[o] = u);
                }
                return e.result;
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t,
                n,
                i,
                r,
                o,
                a,
                s = c.call(arguments),
                l = (C._data(this, "events") || {})[e.type] || [],
                u = C.event.special[e.type] || {};
            if ((((s[0] = e).delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, e))) {
                for (a = C.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                        (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
                            ((e.handleObj = i), (e.data = i.data), void 0 !== (n = ((C.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], o = 0; o < s; o++) void 0 === r[(n = (i = t[o]).selector + " ")] && (r[n] = i.needsContext ? 0 <= C(n, this).index(l) : C.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({ elem: l, handlers: r });
                    }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
        },
        fix: function (e) {
            if (e[C.expando]) return e;
            var t,
                n,
                i,
                r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Y.test(r) ? this.mouseHooks : J.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(o), t = i.length; t--; ) e[(n = i[t])] = o[n];
            return e.target || (e.target = o.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), a.filter ? a.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n,
                    i,
                    r,
                    o = t.button,
                    a = t.fromElement;
                return (
                    null == e.pageX &&
                        null != t.clientX &&
                        ((r = (i = e.target.ownerDocument || N).documentElement),
                        (n = i.body),
                        (e.pageX = t.clientX + ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) - ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
                        (e.pageY = t.clientY + ((r && r.scrollTop) || (n && n.scrollTop) || 0) - ((r && r.clientTop) || (n && n.clientTop) || 0))),
                    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== ee() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (e) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === ee() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if (C.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
                },
                _default: function (e) {
                    return C.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function (e, t, n, i) {
            var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
            i ? C.event.trigger(r, null, t) : C.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (C.removeEvent = N.removeEventListener
            ? function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                  var i = "on" + t;
                  e.detachEvent && (typeof e[i] === M && (e[i] = null), e.detachEvent(i, n));
              }),
        (C.Event = function (e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? K : Z)) : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || C.now()),
                (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
            isDefaultPrevented: Z,
            isPropagationStopped: Z,
            isImmediatePropagationStopped: Z,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = K), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = K), e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = K), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, r) {
            C.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        i = e.handleObj;
                    return (n && (n === this || C.contains(this, n))) || ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = r)), t;
                },
            };
        }),
        v.submitBubbles ||
            (C.event.special.submit = {
                setup: function () {
                    if (C.nodeName(this, "form")) return !1;
                    C.event.add(this, "click._submit keypress._submit", function (e) {
                        var t = e.target,
                            n = C.nodeName(t, "input") || C.nodeName(t, "button") ? t.form : void 0;
                        n &&
                            !C._data(n, "submitBubbles") &&
                            (C.event.add(n, "submit._submit", function (e) {
                                e._submit_bubble = !0;
                            }),
                            C._data(n, "submitBubbles", !0));
                    });
                },
                postDispatch: function (e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e, !0));
                },
                teardown: function () {
                    if (C.nodeName(this, "form")) return !1;
                    C.event.remove(this, "._submit");
                },
            }),
        v.changeBubbles ||
            (C.event.special.change = {
                setup: function () {
                    if (V.test(this.nodeName))
                        return (
                            ("checkbox" !== this.type && "radio" !== this.type) ||
                                (C.event.add(this, "propertychange._change", function (e) {
                                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
                                }),
                                C.event.add(this, "click._change", function (e) {
                                    this._just_changed && !e.isTrigger && (this._just_changed = !1), C.event.simulate("change", this, e, !0);
                                })),
                            !1
                        );
                    C.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        V.test(t.nodeName) &&
                            !C._data(t, "changeBubbles") &&
                            (C.event.add(t, "change._change", function (e) {
                                !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e, !0);
                            }),
                            C._data(t, "changeBubbles", !0));
                    });
                },
                handle: function (e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || ("radio" !== t.type && "checkbox" !== t.type)) return e.handleObj.handler.apply(this, arguments);
                },
                teardown: function () {
                    return C.event.remove(this, "._change"), !V.test(this.nodeName);
                },
            }),
        v.focusinBubbles ||
            C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                var r = function (e) {
                    C.event.simulate(i, e.target, C.event.fix(e), !0);
                };
                C.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this,
                            t = C._data(e, i);
                        t || e.addEventListener(n, r, !0), C._data(e, i, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this,
                            t = C._data(e, i) - 1;
                        t ? C._data(e, i, t) : (e.removeEventListener(n, r, !0), C._removeData(e, i));
                    },
                };
            }),
        C.fn.extend({
            on: function (e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    for (o in ("string" != typeof t && ((n = n || t), (t = void 0)), e)) this.on(o, t, n, e[o], r);
                    return this;
                }
                if ((null == n && null == i ? ((i = t), (n = t = void 0)) : null == i && ("string" == typeof t ? ((i = n), (n = void 0)) : ((i = n), (n = t), (t = void 0))), !1 === i)) i = Z;
                else if (!i) return this;
                return (
                    1 === r &&
                        ((a = i),
                        ((i = function (e) {
                            return C().off(e), a.apply(this, arguments);
                        }).guid = a.guid || (a.guid = C.guid++))),
                    this.each(function () {
                        C.event.add(this, e, i, n, t);
                    })
                );
            },
            one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                        !1 === n && (n = Z),
                        this.each(function () {
                            C.event.remove(this, e, n, t);
                        })
                    );
                for (r in e) this.off(r, t, e[r]);
                return this;
            },
            trigger: function (e, t) {
                return this.each(function () {
                    C.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
            },
        });
    var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ie = / jQuery\d+="(?:null|\d+)"/g,
        re = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        oe = /^\s+/,
        ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        se = /<([\w:]+)/,
        le = /<tbody/i,
        ue = /<|&#?\w+;/,
        ce = /<(?:script|style|link)/i,
        fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^$|\/(?:java|ecma)script/i,
        pe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
        },
        ge = te(N).appendChild(N.createElement("div"));
    function ve(e, t) {
        var n,
            i,
            r = 0,
            o = typeof e.getElementsByTagName !== M ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== M ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || C.nodeName(i, t) ? o.push(i) : C.merge(o, ve(i, t));
        return void 0 === t || (t && C.nodeName(e, t)) ? C.merge([e], o) : o;
    }
    function ye(e) {
        U.test(e.type) && (e.defaultChecked = e.checked);
    }
    function xe(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function be(e) {
        return (e.type = (null !== C.find.attr(e, "type")) + "/" + e.type), e;
    }
    function we(e) {
        var t = pe.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function Te(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) C._data(n, "globalEval", !t || C._data(t[i], "globalEval"));
    }
    function Ce(e, t) {
        if (1 === t.nodeType && C.hasData(e)) {
            var n,
                i,
                r,
                o = C._data(e),
                a = C._data(t, o),
                s = o.events;
            if (s) for (n in (delete a.handle, (a.events = {}), s)) for (i = 0, r = s[n].length; i < r; i++) C.event.add(t, n, s[n][i]);
            a.data && (a.data = C.extend({}, a.data));
        }
    }
    function Ne(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (((n = t.nodeName.toLowerCase()), !v.noCloneEvent && t[C.expando])) {
                for (i in (r = C._data(t)).events) C.removeEvent(t, i, r.handle);
                t.removeAttribute(C.expando);
            }
            "script" === n && t.text !== e.text
                ? ((be(t).text = e.text), we(t))
                : "object" === n
                ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))
                : "input" === n && U.test(e.type)
                ? ((t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value))
                : "option" === n
                ? (t.defaultSelected = t.selected = e.defaultSelected)
                : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
        }
    }
    (me.optgroup = me.option),
        (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td),
        C.extend({
            clone: function (e, t, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    l = C.contains(e.ownerDocument, e);
                if (
                    (v.html5Clone || C.isXMLDoc(e) || !re.test("<" + e.nodeName + ">") ? (o = e.cloneNode(!0)) : ((ge.innerHTML = e.outerHTML), ge.removeChild((o = ge.firstChild))),
                    !((v.noCloneEvent && v.noCloneChecked) || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e)))
                )
                    for (i = ve(o), s = ve(e), a = 0; null != (r = s[a]); ++a) i[a] && Ne(r, i[a]);
                if (t)
                    if (n) for (s = s || ve(e), i = i || ve(o), a = 0; null != (r = s[a]); a++) Ce(r, i[a]);
                    else Ce(e, o);
                return 0 < (i = ve(o, "script")).length && Te(i, !l && ve(e, "script")), (i = s = r = null), o;
            },
            buildFragment: function (e, t, n, i) {
                for (var r, o, a, s, l, u, c, f = e.length, d = te(t), p = [], h = 0; h < f; h++)
                    if ((o = e[h]) || 0 === o)
                        if ("object" === C.type(o)) C.merge(p, o.nodeType ? [o] : o);
                        else if (ue.test(o)) {
                            for (s = s || d.appendChild(t.createElement("div")), l = (se.exec(o) || ["", ""])[1].toLowerCase(), c = me[l] || me._default, s.innerHTML = c[1] + o.replace(ae, "<$1></$2>") + c[2], r = c[0]; r--; )
                                s = s.lastChild;
                            if ((!v.leadingWhitespace && oe.test(o) && p.push(t.createTextNode(oe.exec(o)[0])), !v.tbody))
                                for (r = (o = "table" !== l || le.test(o) ? ("<table>" !== c[1] || le.test(o) ? 0 : s) : s.firstChild) && o.childNodes.length; r--; )
                                    C.nodeName((u = o.childNodes[r]), "tbody") && !u.childNodes.length && o.removeChild(u);
                            for (C.merge(p, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                            s = d.lastChild;
                        } else p.push(t.createTextNode(o));
                for (s && d.removeChild(s), v.appendChecked || C.grep(ve(p, "input"), ye), h = 0; (o = p[h++]); )
                    if ((!i || -1 === C.inArray(o, i)) && ((a = C.contains(o.ownerDocument, o)), (s = ve(d.appendChild(o), "script")), a && Te(s), n)) for (r = 0; (o = s[r++]); ) de.test(o.type || "") && n.push(o);
                return (s = null), d;
            },
            cleanData: function (e, t) {
                for (var n, i, r, o, a = 0, s = C.expando, l = C.cache, u = v.deleteExpando, c = C.event.special; null != (n = e[a]); a++)
                    if ((t || C.acceptData(n)) && (o = (r = n[s]) && l[r])) {
                        if (o.events) for (i in o.events) c[i] ? C.event.remove(n, i) : C.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== M ? n.removeAttribute(s) : (n[s] = null), f.push(r));
                    }
            },
        }),
        C.fn.extend({
            text: function (e) {
                return X(
                    this,
                    function (e) {
                        return void 0 === e ? C.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || N).createTextNode(e));
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || xe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = xe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function (e, t) {
                for (var n, i = e ? C.filter(e, this) : this, r = 0; null != (n = i[r]); r++)
                    t || 1 !== n.nodeType || C.cleanData(ve(n)), n.parentNode && (t && C.contains(n.ownerDocument, n) && Te(ve(n, "script")), n.parentNode.removeChild(n));
                return this;
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && C.cleanData(ve(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                    e.options && C.nodeName(e, "select") && (e.options.length = 0);
                }
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return C.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return X(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ie, "") : void 0;
                        if ("string" == typeof e && !ce.test(e) && (v.htmlSerialize || !re.test(e)) && (v.leadingWhitespace || !oe.test(e)) && !me[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(ae, "<$1></$2>");
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)), (t.innerHTML = e));
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
                var t = arguments[0];
                return (
                    this.domManip(arguments, function (e) {
                        (t = this.parentNode), C.cleanData(ve(this)), t && t.replaceChild(e, this);
                    }),
                    t && (t.length || t.nodeType) ? this : this.remove()
                );
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (n, i) {
                n = m.apply([], n);
                var e,
                    t,
                    r,
                    o,
                    a,
                    s,
                    l = 0,
                    u = this.length,
                    c = this,
                    f = u - 1,
                    d = n[0],
                    p = C.isFunction(d);
                if (p || (1 < u && "string" == typeof d && !v.checkClone && fe.test(d)))
                    return this.each(function (e) {
                        var t = c.eq(e);
                        p && (n[0] = d.call(this, e, t.html())), t.domManip(n, i);
                    });
                if (u && ((e = (s = C.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild), 1 === s.childNodes.length && (s = e), e)) {
                    for (r = (o = C.map(ve(s, "script"), be)).length; l < u; l++) (t = s), l !== f && ((t = C.clone(t, !0, !0)), r && C.merge(o, ve(t, "script"))), i.call(this[l], t, l);
                    if (r)
                        for (a = o[o.length - 1].ownerDocument, C.map(o, we), l = 0; l < r; l++)
                            (t = o[l]), de.test(t.type || "") && !C._data(t, "globalEval") && C.contains(a, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(he, "")));
                    s = e = null;
                }
                return this;
            },
        }),
        C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
            C.fn[e] = function (e) {
                for (var t, n = 0, i = [], r = C(e), o = r.length - 1; n <= o; n++) (t = n === o ? this : this.clone(!0)), C(r[n])[a](t), s.apply(i, t.get());
                return this.pushStack(i);
            };
        });
    var ke,
        Ee,
        Se = {};
    function je(e, t) {
        var n,
            i = C(t.createElement(e)).appendTo(t.body),
            r = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : C.css(i[0], "display");
        return i.detach(), r;
    }
    function Le(e) {
        var t = N,
            n = Se[e];
        return (
            n ||
                (("none" !== (n = je(e, t)) && n) ||
                    ((t = ((ke = (ke || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ke[0].contentDocument).document).write(), t.close(), (n = je(e, t)), ke.detach()),
                (Se[e] = n)),
            n
        );
    }
    v.shrinkWrapBlocks = function () {
        return null != Ee
            ? Ee
            : ((Ee = !1),
              (t = N.getElementsByTagName("body")[0]) && t.style
                  ? ((e = N.createElement("div")),
                    ((n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    t.appendChild(n).appendChild(e),
                    typeof e.style.zoom !== M &&
                        ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                        (e.appendChild(N.createElement("div")).style.width = "5px"),
                        (Ee = 3 !== e.offsetWidth)),
                    t.removeChild(n),
                    Ee)
                  : void 0);
        var e, t, n;
    };
    var Ae,
        De,
        He = /^margin/,
        qe = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        _e = /^(top|right|bottom|left)$/;
    function Me(t, n) {
        return {
            get: function () {
                var e = t();
                if (null != e) {
                    if (!e) return (this.get = n).apply(this, arguments);
                    delete this.get;
                }
            },
        };
    }
    h.getComputedStyle
        ? ((Ae = function (e) {
              return e.ownerDocument.defaultView.getComputedStyle(e, null);
          }),
          (De = function (e, t, n) {
              var i,
                  r,
                  o,
                  a,
                  s = e.style;
              return (
                  (a = (n = n || Ae(e)) ? n.getPropertyValue(t) || n[t] : void 0),
                  n &&
                      ("" !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)),
                      qe.test(a) && He.test(t) && ((i = s.width), (r = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = r), (s.maxWidth = o))),
                  void 0 === a ? a : a + ""
              );
          }))
        : N.documentElement.currentStyle &&
          ((Ae = function (e) {
              return e.currentStyle;
          }),
          (De = function (e, t, n) {
              var i,
                  r,
                  o,
                  a,
                  s = e.style;
              return (
                  null == (a = (n = n || Ae(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]),
                  qe.test(a) && !_e.test(t) && ((i = s.left), (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), (s.left = "fontSize" === t ? "1em" : a), (a = s.pixelLeft + "px"), (s.left = i), o && (r.left = o)),
                  void 0 === a ? a : a + "" || "auto"
              );
          })),
        (function () {
            var e, t, n, r, o, a, s;
            function i() {
                var e, t, n, i;
                (t = N.getElementsByTagName("body")[0]) &&
                    t.style &&
                    ((e = N.createElement("div")),
                    ((n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    t.appendChild(n).appendChild(e),
                    (e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                    (r = o = !1),
                    (s = !0),
                    h.getComputedStyle &&
                        ((r = "1%" !== (h.getComputedStyle(e, null) || {}).top),
                        (o = "4px" === (h.getComputedStyle(e, null) || { width: "4px" }).width),
                        ((i = e.appendChild(N.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (i.style.marginRight = i.style.width = "0"),
                        (e.style.width = "1px"),
                        (s = !parseFloat((h.getComputedStyle(i, null) || {}).marginRight))),
                    (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                    ((i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                    (a = 0 === i[0].offsetHeight) && ((i[0].style.display = ""), (i[1].style.display = "none"), (a = 0 === i[0].offsetHeight)),
                    t.removeChild(n));
            }
            ((e = N.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (t = (n = e.getElementsByTagName("a")[0]) && n.style) &&
                    ((t.cssText = "float:left;opacity:.5"),
                    (v.opacity = "0.5" === t.opacity),
                    (v.cssFloat = !!t.cssFloat),
                    (e.style.backgroundClip = "content-box"),
                    (e.cloneNode(!0).style.backgroundClip = ""),
                    (v.clearCloneStyle = "content-box" === e.style.backgroundClip),
                    (v.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing),
                    C.extend(v, {
                        reliableHiddenOffsets: function () {
                            return null == a && i(), a;
                        },
                        boxSizingReliable: function () {
                            return null == o && i(), o;
                        },
                        pixelPosition: function () {
                            return null == r && i(), r;
                        },
                        reliableMarginRight: function () {
                            return null == s && i(), s;
                        },
                    }));
        })(),
        (C.swap = function (e, t, n, i) {
            var r,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = a[o];
            return r;
        });
    var Fe = /alpha\([^)]*\)/i,
        Oe = /opacity\s*=\s*([^)]*)/,
        Be = /^(none|table(?!-c[ea]).+)/,
        Pe = new RegExp("^(" + $ + ")(.*)$", "i"),
        Re = new RegExp("^([+-])=(" + $ + ")", "i"),
        We = { position: "absolute", visibility: "hidden", display: "block" },
        $e = { letterSpacing: "0", fontWeight: "400" },
        ze = ["Webkit", "O", "Moz", "ms"];
    function Ie(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ze.length; r--; ) if ((t = ze[r] + n) in e) return t;
        return i;
    }
    function Xe(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
            (i = e[a]).style &&
                ((o[a] = C._data(i, "olddisplay")),
                (n = i.style.display),
                t
                    ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && I(i) && (o[a] = C._data(i, "olddisplay", Le(i.nodeName))))
                    : ((r = I(i)), ((n && "none" !== n) || !r) && C._data(i, "olddisplay", r ? n : C.css(i, "display"))));
        for (a = 0; a < s; a++) (i = e[a]).style && ((t && "none" !== i.style.display && "" !== i.style.display) || (i.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function Ue(e, t, n) {
        var i = Pe.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function Ve(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += C.css(e, n + z[o], !0, r)),
                i
                    ? ("content" === n && (a -= C.css(e, "padding" + z[o], !0, r)), "margin" !== n && (a -= C.css(e, "border" + z[o] + "Width", !0, r)))
                    : ((a += C.css(e, "padding" + z[o], !0, r)), "padding" !== n && (a += C.css(e, "border" + z[o] + "Width", !0, r)));
        return a;
    }
    function Je(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ae(e),
            a = v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if ((((r = De(e, t, o)) < 0 || null == r) && (r = e.style[t]), qe.test(r))) return r;
            (i = a && (v.boxSizingReliable() || r === e.style[t])), (r = parseFloat(r) || 0);
        }
        return r + Ve(e, t, n || (a ? "border" : "content"), i, o) + "px";
    }
    function Ye(e, t, n, i, r) {
        return new Ye.prototype.init(e, t, n, i, r);
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = De(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: v.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    a,
                    s = C.camelCase(t),
                    l = e.style;
                if (((t = C.cssProps[s] || (C.cssProps[s] = Ie(l, s))), (a = C.cssHooks[t] || C.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (
                    ("string" === (o = typeof n) && (r = Re.exec(n)) && ((n = (r[1] + 1) * r[2] + parseFloat(C.css(e, t))), (o = "number")),
                    null != n && n == n && ("number" !== o || C.cssNumber[s] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i)))))
                )
                    try {
                        l[t] = n;
                    } catch (e) {}
            }
        },
        css: function (e, t, n, i) {
            var r,
                o,
                a,
                s = C.camelCase(t);
            return (
                (t = C.cssProps[s] || (C.cssProps[s] = Ie(e.style, s))),
                (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = De(e, t, i)),
                "normal" === o && t in $e && (o = $e[t]),
                "" === n || n ? ((r = parseFloat(o)), !0 === n || C.isNumeric(r) ? r || 0 : o) : o
            );
        },
    }),
        C.each(["height", "width"], function (e, r) {
            C.cssHooks[r] = {
                get: function (e, t, n) {
                    if (t)
                        return Be.test(C.css(e, "display")) && 0 === e.offsetWidth
                            ? C.swap(e, We, function () {
                                  return Je(e, r, n);
                              })
                            : Je(e, r, n);
                },
                set: function (e, t, n) {
                    var i = n && Ae(e);
                    return Ue(0, t, n ? Ve(e, r, n, v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, i), i) : 0);
                },
            };
        }),
        v.opacity ||
            (C.cssHooks.opacity = {
                get: function (e, t) {
                    return Oe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
                },
                set: function (e, t) {
                    var n = e.style,
                        i = e.currentStyle,
                        r = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        o = (i && i.filter) || n.filter || "";
                    (((n.zoom = 1) <= t || "" === t) && "" === C.trim(o.replace(Fe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || (i && !i.filter))) || (n.filter = Fe.test(o) ? o.replace(Fe, r) : o + " " + r);
                },
            }),
        (C.cssHooks.marginRight = Me(v.reliableMarginRight, function (e, t) {
            if (t) return C.swap(e, { display: "inline-block" }, De, [e, "marginRight"]);
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
            (C.cssHooks[r + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + z[t] + o] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                He.test(r) || (C.cssHooks[r + o].set = Ue);
        }),
        C.fn.extend({
            css: function (e, t) {
                return X(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            a = 0;
                        if (C.isArray(t)) {
                            for (i = Ae(e), r = t.length; a < r; a++) o[t[a]] = C.css(e, t[a], !1, i);
                            return o;
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
            show: function () {
                return Xe(this, !0);
            },
            hide: function () {
                return Xe(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          I(this) ? C(this).show() : C(this).hide();
                      });
            },
        }),
        (((C.Tween = Ye).prototype = {
            constructor: Ye,
            init: function (e, t, n, i, r, o) {
                (this.elem = e), (this.prop = n), (this.easing = r || "swing"), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (C.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Ye.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ye.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Ye.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Ye.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = Ye.prototype),
        ((Ye.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop]) ? ((t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0) : e.elem[e.prop];
                },
                set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop]) ? C.style(e.elem, e.prop, e.now + e.unit) : (e.elem[e.prop] = e.now);
                },
            },
        }).scrollTop = Ye.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (C.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
        }),
        (C.fx = Ye.prototype.init),
        (C.fx.step = {});
    var Qe,
        Ge,
        Ke,
        Ze,
        et,
        tt,
        nt,
        it = /^(?:toggle|show|hide)$/,
        rt = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        ot = /queueHooks$/,
        at = [
            function (t, e, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c = this,
                    f = {},
                    d = t.style,
                    p = t.nodeType && I(t),
                    h = C._data(t, "fxshow");
                n.queue ||
                    (null == (s = C._queueHooks(t, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (l = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || l();
                        })),
                    s.unqueued++,
                    c.always(function () {
                        c.always(function () {
                            s.unqueued--, C.queue(t, "fx").length || s.empty.fire();
                        });
                    }));
                1 === t.nodeType &&
                    ("height" in e || "width" in e) &&
                    ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                    (u = C.css(t, "display")),
                    "inline" === ("none" === u ? C._data(t, "olddisplay") || Le(t.nodeName) : u) && "none" === C.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Le(t.nodeName) ? (d.zoom = 1) : (d.display = "inline-block")));
                n.overflow &&
                    ((d.overflow = "hidden"),
                    v.shrinkWrapBlocks() ||
                        c.always(function () {
                            (d.overflow = n.overflow[0]), (d.overflowX = n.overflow[1]), (d.overflowY = n.overflow[2]);
                        }));
                for (i in e)
                    if (((r = e[i]), it.exec(r))) {
                        if ((delete e[i], (o = o || "toggle" === r), r === (p ? "hide" : "show"))) {
                            if ("show" !== r || !h || void 0 === h[i]) continue;
                            p = !0;
                        }
                        f[i] = (h && h[i]) || C.style(t, i);
                    } else u = void 0;
                if (C.isEmptyObject(f)) "inline" === ("none" === u ? Le(t.nodeName) : u) && (d.display = u);
                else
                    for (i in (h ? "hidden" in h && (p = h.hidden) : (h = C._data(t, "fxshow", {})),
                    o && (h.hidden = !p),
                    p
                        ? C(t).show()
                        : c.done(function () {
                              C(t).hide();
                          }),
                    c.done(function () {
                        var e;
                        for (e in (C._removeData(t, "fxshow"), f)) C.style(t, e, f[e]);
                    }),
                    f))
                        (a = ct(p ? h[i] : 0, i, c)), i in h || ((h[i] = a.start), p && ((a.end = a.start), (a.start = "width" === i || "height" === i ? 1 : 0)));
            },
        ],
        st = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = rt.exec(t),
                        o = (r && r[3]) || (C.cssNumber[e] ? "" : "px"),
                        a = (C.cssNumber[e] || ("px" !== o && +i)) && rt.exec(C.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) for (o = o || a[3], r = r || [], a = +i || 1; (a /= s = s || ".5"), C.style(n.elem, e, a + o), s !== (s = n.cur() / i) && 1 !== s && --l; );
                    return r && ((a = n.start = +a || +i || 0), (n.unit = o), (n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2])), n;
                },
            ],
        };
    function lt() {
        return (
            setTimeout(function () {
                Qe = void 0;
            }),
            (Qe = C.now())
        );
    }
    function ut(e, t) {
        var n,
            i = { height: e },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = z[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
        for (var i, r = (st[t] || []).concat(st["*"]), o = 0, a = r.length; o < a; o++) if ((i = r[o].call(n, t, e))) return i;
    }
    function ft(o, e, t) {
        var n,
            a,
            i = 0,
            r = at.length,
            s = C.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (a) return !1;
                for (var e = Qe || lt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return s.notifyWith(o, [u, n, t]), n < 1 && r ? t : (s.resolveWith(o, [u]), !1);
            },
            u = s.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, { specialEasing: {} }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Qe || lt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = C.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? s.resolveWith(o, [u, e]) : s.rejectWith(o, [u, e]), this;
                },
            }),
            c = u.props;
        for (
            !(function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (((r = t[(i = C.camelCase(n))]), (o = e[n]), C.isArray(o) && ((r = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (a = C.cssHooks[i]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
                    else t[i] = r;
            })(c, u.opts.specialEasing);
            i < r;
            i++
        )
            if ((n = at[i].call(u, o, c, u.opts))) return n;
        return (
            C.map(c, ct, u),
            C.isFunction(u.opts.start) && u.opts.start.call(o, u),
            C.fx.timer(C.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        );
    }
    (C.Animation = C.extend(ft, {
        tweener: function (e, t) {
            for (var n, i = 0, r = (e = C.isFunction(e) ? ((t = e), ["*"]) : e.split(" ")).length; i < r; i++) (n = e[i]), (st[n] = st[n] || []), st[n].unshift(t);
        },
        prefilter: function (e, t) {
            t ? at.unshift(e) : at.push(e);
        },
    })),
        (C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : { complete: n || (!n && t) || (C.isFunction(e) && e), duration: e, easing: (n && t) || (t && !C.isFunction(t) && t) };
            return (
                (i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
                }),
                i
            );
        }),
        C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(I).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                var r = C.isEmptyObject(t),
                    o = C.speed(e, n, i),
                    a = function () {
                        var e = ft(this, C.extend({}, t), o);
                        (r || C._data(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (r, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof r && ((o = e), (e = r), (r = void 0)),
                    e && !1 !== r && this.queue(r || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            n = C.timers,
                            i = C._data(this);
                        if (t) i[t] && i[t].stop && a(i[t]);
                        else for (t in i) i[t] && i[t].stop && ot.test(t) && a(i[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != r && n[t].queue !== r) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || C.dequeue(this, r);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = C._data(this),
                            n = t[a + "queue"],
                            i = t[a + "queueHooks"],
                            r = C.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--; ) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        C.each(["toggle", "show", "hide"], function (e, i) {
            var r = C.fn[i];
            C.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ut(i, !0), e, t, n);
            };
        }),
        C.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, i) {
            C.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n);
            };
        }),
        (C.timers = []),
        (C.fx.tick = function () {
            var e,
                t = C.timers,
                n = 0;
            for (Qe = C.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || C.fx.stop(), (Qe = void 0);
        }),
        (C.fx.timer = function (e) {
            C.timers.push(e), e() ? C.fx.start() : C.timers.pop();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
            Ge || (Ge = setInterval(C.fx.tick, C.fx.interval));
        }),
        (C.fx.stop = function () {
            clearInterval(Ge), (Ge = null);
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (i, e) {
            return (
                (i = (C.fx && C.fx.speeds[i]) || i),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = setTimeout(e, i);
                    t.stop = function () {
                        clearTimeout(n);
                    };
                })
            );
        }),
        (Ze = N.createElement("div")).setAttribute("className", "t"),
        (Ze.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (tt = Ze.getElementsByTagName("a")[0]),
        (nt = (et = N.createElement("select")).appendChild(N.createElement("option"))),
        (Ke = Ze.getElementsByTagName("input")[0]),
        (tt.style.cssText = "top:1px"),
        (v.getSetAttribute = "t" !== Ze.className),
        (v.style = /top/.test(tt.getAttribute("style"))),
        (v.hrefNormalized = "/a" === tt.getAttribute("href")),
        (v.checkOn = !!Ke.value),
        (v.optSelected = nt.selected),
        (v.enctype = !!N.createElement("form").enctype),
        (et.disabled = !0),
        (v.optDisabled = !nt.disabled),
        (Ke = N.createElement("input")).setAttribute("value", ""),
        (v.input = "" === Ke.getAttribute("value")),
        (Ke.value = "t"),
        Ke.setAttribute("type", "radio"),
        (v.radioValue = "t" === Ke.value);
    var dt = /\r/g;
    C.fn.extend({
        val: function (n) {
            var i,
                e,
                r,
                t = this[0];
            return arguments.length
                ? ((r = C.isFunction(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = r ? n.call(this, e, C(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : C.isArray(t) &&
                                (t = C.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value")) || (this.value = t));
                  }))
                : t
                ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(dt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : C.trim(C.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                            if (((n = i[l]).selected || l === r) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                                if (((t = C(n).val()), o)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = C.makeArray(t), a = r.length; a--; )
                            if (((i = r[a]), 0 <= C.inArray(C.valHooks.option.get(i), o)))
                                try {
                                    i.selected = n = !0;
                                } catch (e) {
                                    i.scrollHeight;
                                }
                            else i.selected = !1;
                        return n || (e.selectedIndex = -1), r;
                    },
                },
            },
        }),
        C.each(["radio", "checkbox"], function () {
            (C.valHooks[this] = {
                set: function (e, t) {
                    if (C.isArray(t)) return (e.checked = 0 <= C.inArray(C(e).val(), t));
                },
            }),
                v.checkOn ||
                    (C.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        });
    var pt,
        ht,
        mt = C.expr.attrHandle,
        gt = /^(?:checked|selected)$/i,
        vt = v.getSetAttribute,
        yt = v.input;
    C.fn.extend({
        attr: function (e, t) {
            return X(this, C.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e);
            });
        },
    }),
        C.extend({
            attr: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return typeof e.getAttribute === M
                        ? C.prop(e, t, n)
                        : ((1 === o && C.isXMLDoc(e)) || ((t = t.toLowerCase()), (i = C.attrHooks[t] || (C.expr.match.bool.test(t) ? ht : pt))),
                          void 0 === n
                              ? i && "get" in i && null !== (r = i.get(e, t))
                                  ? r
                                  : null == (r = C.find.attr(e, t))
                                  ? void 0
                                  : r
                              : null !== n
                              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : void C.removeAttr(e, t));
            },
            removeAttr: function (e, t) {
                var n,
                    i,
                    r = 0,
                    o = t && t.match(A);
                if (o && 1 === e.nodeType)
                    for (; (n = o[r++]); ) (i = C.propFix[n] || n), C.expr.match.bool.test(n) ? ((yt && vt) || !gt.test(n) ? (e[i] = !1) : (e[C.camelCase("default-" + n)] = e[i] = !1)) : C.attr(e, n, ""), e.removeAttribute(vt ? n : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
        }),
        (ht = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : (yt && vt) || !gt.test(n) ? e.setAttribute((!vt && C.propFix[n]) || n, n) : (e[C.camelCase("default-" + n)] = e[n] = !0), n;
            },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var o = mt[t] || C.find.attr;
            mt[t] =
                (yt && vt) || !gt.test(t)
                    ? function (e, t, n) {
                          var i, r;
                          return n || ((r = mt[t]), (mt[t] = i), (i = null != o(e, t, n) ? t.toLowerCase() : null), (mt[t] = r)), i;
                      }
                    : function (e, t, n) {
                          if (!n) return e[C.camelCase("default-" + t)] ? t.toLowerCase() : null;
                      };
        }),
        (yt && vt) ||
            (C.attrHooks.value = {
                set: function (e, t, n) {
                    if (!C.nodeName(e, "input")) return pt && pt.set(e, t, n);
                    e.defaultValue = t;
                },
            }),
        vt ||
            ((pt = {
                set: function (e, t, n) {
                    var i = e.getAttributeNode(n);
                    if ((i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))), (i.value = t += ""), "value" === n || t === e.getAttribute(n))) return t;
                },
            }),
            (mt.id = mt.name = mt.coords = function (e, t, n) {
                var i;
                if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null;
            }),
            (C.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified) return n.value;
                },
                set: pt.set,
            }),
            (C.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    pt.set(e, "" !== t && t, n);
                },
            }),
            C.each(["width", "height"], function (e, n) {
                C.attrHooks[n] = {
                    set: function (e, t) {
                        if ("" === t) return e.setAttribute(n, "auto"), t;
                    },
                };
            })),
        v.style ||
            (C.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || void 0;
                },
                set: function (e, t) {
                    return (e.style.cssText = t + "");
                },
            });
    var xt = /^(?:input|select|textarea|button|object)$/i,
        bt = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function (e, t) {
            return X(this, C.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return (
                (e = C.propFix[e] || e),
                this.each(function () {
                    try {
                        (this[e] = void 0), delete this[e];
                    } catch (e) {}
                })
            );
        },
    }),
        C.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 !== o || !C.isXMLDoc(e)) && ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : xt.test(e.nodeName) || (bt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
        }),
        v.hrefNormalized ||
            C.each(["href", "src"], function (e, t) {
                C.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4);
                    },
                };
            }),
        v.optSelected ||
            (C.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
                },
            }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this;
        }),
        v.enctype || (C.propFix.enctype = "encoding");
    var wt = /[\t\r\n\f]/g;
    C.fn.extend({
        addClass: function (t) {
            var e,
                n,
                i,
                r,
                o,
                a,
                s = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (C.isFunction(t))
                return this.each(function (e) {
                    C(this).addClass(t.call(this, e, this.className));
                });
            if (u)
                for (e = (t || "").match(A) || []; s < l; s++)
                    if ((i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " "))) {
                        for (o = 0; (r = e[o++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        (a = C.trim(i)), n.className !== a && (n.className = a);
                    }
            return this;
        },
        removeClass: function (t) {
            var e,
                n,
                i,
                r,
                o,
                a,
                s = 0,
                l = this.length,
                u = 0 === arguments.length || ("string" == typeof t && t);
            if (C.isFunction(t))
                return this.each(function (e) {
                    C(this).removeClass(t.call(this, e, this.className));
                });
            if (u)
                for (e = (t || "").match(A) || []; s < l; s++)
                    if ((i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : ""))) {
                        for (o = 0; (r = e[o++]); ) for (; 0 <= i.indexOf(" " + r + " "); ) i = i.replace(" " + r + " ", " ");
                        (a = t ? C.trim(i) : ""), n.className !== a && (n.className = a);
                    }
            return this;
        },
        toggleClass: function (r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o
                ? t
                    ? this.addClass(r)
                    : this.removeClass(r)
                : C.isFunction(r)
                ? this.each(function (e) {
                      C(this).toggleClass(r.call(this, e, this.className, t), t);
                  })
                : this.each(function () {
                      if ("string" === o) for (var e, t = 0, n = C(this), i = r.match(A) || []; (e = i[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                      else (o !== M && "boolean" !== o) || (this.className && C._data(this, "__className__", this.className), (this.className = this.className || !1 === r ? "" : C._data(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(wt, " ").indexOf(t)) return !0;
            return !1;
        },
    }),
        C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            e,
            n
        ) {
            C.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        }),
        C.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        });
    var Tt = C.now(),
        Ct = /\?/,
        Nt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (C.parseJSON = function (e) {
        if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
        var r,
            o = null,
            t = C.trim(e + "");
        return t &&
            !C.trim(
                t.replace(Nt, function (e, t, n, i) {
                    return r && t && (o = 0), 0 === o ? e : ((r = n || t), (o += !i - !n), "");
                })
            )
            ? Function("return " + t)()
            : C.error("Invalid JSON: " + e);
    }),
        (C.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                h.DOMParser ? (t = new DOMParser().parseFromString(e, "text/xml")) : (((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false"), t.loadXML(e));
            } catch (e) {
                t = void 0;
            }
            return (t && t.documentElement && !t.getElementsByTagName("parsererror").length) || C.error("Invalid XML: " + e), t;
        });
    var kt,
        Et,
        St = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        At = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qt = {},
        _t = {},
        Mt = "*/".concat("*");
    try {
        Et = location.href;
    } catch (e) {
        ((Et = N.createElement("a")).href = ""), (Et = Et.href);
    }
    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                r = e.toLowerCase().match(A) || [];
            if (C.isFunction(t)) for (; (n = r[i++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Ot(t, r, o, a) {
        var s = {},
            l = t === _t;
        function u(e) {
            var i;
            return (
                (s[e] = !0),
                C.each(t[e] || [], function (e, t) {
                    var n = t(r, o, a);
                    return "string" != typeof n || l || s[n] ? (l ? !(i = n) : void 0) : (r.dataTypes.unshift(n), u(n), !1);
                }),
                i
            );
        }
        return u(r.dataTypes[0]) || (!s["*"] && u("*"));
    }
    function Bt(e, t) {
        var n,
            i,
            r = C.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && C.extend(!0, e, n), e;
    }
    (kt = Ht.exec(Et.toLowerCase()) || []),
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Mt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": C.parseJSON, "text xml": C.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(qt),
            ajaxTransport: Ft(_t),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                    i,
                    c,
                    f,
                    d,
                    p,
                    h,
                    r,
                    m = C.ajaxSetup({}, t),
                    g = m.context || m,
                    v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                    y = C.Deferred(),
                    x = C.Callbacks("once memory"),
                    b = m.statusCode || {},
                    o = {},
                    a = {},
                    w = 0,
                    s = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === w) {
                                if (!r) for (r = {}; (t = Lt.exec(f)); ) r[t[1].toLowerCase()] = t[2];
                                t = r[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === w ? f : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return w || ((e = a[n] = a[n] || e), (o[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return w || (m.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (w < 2) for (t in e) b[t] = [b[t], e[t]];
                                else T.always(e[T.status]);
                            return this;
                        },
                        abort: function (e) {
                            var t = e || s;
                            return h && h.abort(t), l(0, t), this;
                        },
                    };
                if (
                    ((y.promise(T).complete = x.add),
                    (T.success = T.done),
                    (T.error = T.fail),
                    (m.url = ((e || m.url || Et) + "").replace(St, "").replace(Dt, kt[1] + "//")),
                    (m.type = t.method || t.type || m.method || m.type),
                    (m.dataTypes = C.trim(m.dataType || "*")
                        .toLowerCase()
                        .match(A) || [""]),
                    null == m.crossDomain &&
                        ((n = Ht.exec(m.url.toLowerCase())), (m.crossDomain = !(!n || (n[1] === kt[1] && n[2] === kt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (kt[3] || ("http:" === kt[1] ? "80" : "443")))))),
                    m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)),
                    Ot(qt, m, t, T),
                    2 === w)
                )
                    return T;
                for (i in ((p = m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                (m.type = m.type.toUpperCase()),
                (m.hasContent = !At.test(m.type)),
                (c = m.url),
                m.hasContent || (m.data && ((c = m.url += (Ct.test(c) ? "&" : "?") + m.data), delete m.data), !1 === m.cache && (m.url = jt.test(c) ? c.replace(jt, "$1_=" + Tt++) : c + (Ct.test(c) ? "&" : "?") + "_=" + Tt++)),
                m.ifModified && (C.lastModified[c] && T.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && T.setRequestHeader("If-None-Match", C.etag[c])),
                ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) && T.setRequestHeader("Content-Type", m.contentType),
                T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : m.accepts["*"]),
                m.headers))
                    T.setRequestHeader(i, m.headers[i]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === w)) return T.abort();
                for (i in ((s = "abort"), { success: 1, error: 1, complete: 1 })) T[i](m[i]);
                if ((h = Ot(_t, m, t, T))) {
                    (T.readyState = 1),
                        p && v.trigger("ajaxSend", [T, m]),
                        m.async &&
                            0 < m.timeout &&
                            (d = setTimeout(function () {
                                T.abort("timeout");
                            }, m.timeout));
                    try {
                        (w = 1), h.send(o, l);
                    } catch (e) {
                        if (!(w < 2)) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, i) {
                    var r,
                        o,
                        a,
                        s,
                        l,
                        u = t;
                    2 !== w &&
                        ((w = 2),
                        d && clearTimeout(d),
                        (h = void 0),
                        (f = i || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (r = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (a in s)
                                        if (s[a] && s[a].test(r)) {
                                            l.unshift(a);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (a in n) {
                                        if (!l[0] || e.converters[a + " " + l[0]]) {
                                            o = a;
                                            break;
                                        }
                                        i || (i = a);
                                    }
                                    o = o || i;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(m, T, n)),
                        (s = (function (e, t, n, i) {
                            var r,
                                o,
                                a,
                                s,
                                l,
                                u = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = c.shift())))
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(a = u[l + " " + o] || u["* " + o]))
                                            for (r in u)
                                                if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                                    !0 === a ? (a = u[r]) : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(m, s, T, r)),
                        r
                            ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (C.lastModified[c] = l), (l = T.getResponseHeader("etag")) && (C.etag[c] = l)),
                              204 === e || "HEAD" === m.type ? (u = "nocontent") : 304 === e ? (u = "notmodified") : ((u = s.state), (o = s.data), (r = !(a = s.error))))
                            : ((a = u), (!e && u) || ((u = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || u) + ""),
                        r ? y.resolveWith(g, [o, u, T]) : y.rejectWith(g, [T, u, a]),
                        T.statusCode(b),
                        (b = void 0),
                        p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [T, m, r ? o : a]),
                        x.fireWith(g, [T, u]),
                        p && (v.trigger("ajaxComplete", [T, m]), --C.active || C.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
            },
        }),
        C.each(["get", "post"], function (e, r) {
            C[r] = function (e, t, n, i) {
                return C.isFunction(t) && ((i = i || n), (n = t), (t = void 0)), C.ajax({ url: e, type: r, dataType: i, data: t, success: n });
            };
        }),
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            C.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (C._evalUrl = function (e) {
            return C.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
        }),
        C.fn.extend({
            wrapAll: function (t) {
                if (C.isFunction(t))
                    return this.each(function (e) {
                        C(this).wrapAll(t.call(this, e));
                    });
                if (this[0]) {
                    var e = C(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                                return e;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (n) {
                return C.isFunction(n)
                    ? this.each(function (e) {
                          C(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = C(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = C.isFunction(t);
                return this.each(function (e) {
                    C(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        C.nodeName(this, "body") || C(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (C.expr.filters.hidden = function (e) {
            return (e.offsetWidth <= 0 && e.offsetHeight <= 0) || (!v.reliableHiddenOffsets() && "none" === ((e.style && e.style.display) || C.css(e, "display")));
        }),
        (C.expr.filters.visible = function (e) {
            return !C.expr.filters.hidden(e);
        });
    var Pt = /%20/g,
        Rt = /\[\]$/,
        Wt = /\r?\n/g,
        $t = /^(?:submit|button|image|reset|file)$/i,
        zt = /^(?:input|select|textarea|keygen)/i;
    function It(n, e, i, r) {
        var t;
        if (C.isArray(e))
            C.each(e, function (e, t) {
                i || Rt.test(n) ? r(n, t) : It(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r);
            });
        else if (i || "object" !== C.type(e)) r(n, e);
        else for (t in e) It(n + "[" + t + "]", e[t], i, r);
    }
    (C.param = function (e, t) {
        var n,
            i = [],
            r = function (e, t) {
                (t = C.isFunction(t) ? t() : null == t ? "" : t), (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
        if ((void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || (e.jquery && !C.isPlainObject(e))))
            C.each(e, function () {
                r(this.name, this.value);
            });
        else for (n in e) It(n, e[n], t, r);
        return i.join("&").replace(Pt, "+");
    }),
        C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && zt.test(this.nodeName) && !$t.test(e) && (this.checked || !U.test(e));
                    })
                    .map(function (e, t) {
                        var n = C(this).val();
                        return null == n
                            ? null
                            : C.isArray(n)
                            ? C.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Wt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Wt, "\r\n") };
                    })
                    .get();
            },
        }),
        (C.ajaxSettings.xhr =
            void 0 !== h.ActiveXObject
                ? function () {
                      return (
                          (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Jt()) ||
                          (function () {
                              try {
                                  return new h.ActiveXObject("Microsoft.XMLHTTP");
                              } catch (e) {}
                          })()
                      );
                  }
                : Jt);
    var Xt = 0,
        Ut = {},
        Vt = C.ajaxSettings.xhr();
    function Jt() {
        try {
            return new h.XMLHttpRequest();
        } catch (e) {}
    }
    h.ActiveXObject &&
        C(h).on("unload", function () {
            for (var e in Ut) Ut[e](void 0, !0);
        }),
        (v.cors = !!Vt && "withCredentials" in Vt),
        (Vt = v.ajax = !!Vt) &&
            C.ajaxTransport(function (l) {
                var u;
                if (!l.crossDomain || v.cors)
                    return {
                        send: function (e, o) {
                            var t,
                                a = l.xhr(),
                                s = ++Xt;
                            if ((a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)) for (t in l.xhrFields) a[t] = l.xhrFields[t];
                            for (t in (l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e))
                                void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                            a.send((l.hasContent && l.data) || null),
                                (u = function (e, t) {
                                    var n, i, r;
                                    if (u && (t || 4 === a.readyState))
                                        if ((delete Ut[s], (u = void 0), (a.onreadystatechange = C.noop), t)) 4 !== a.readyState && a.abort();
                                        else {
                                            (r = {}), (n = a.status), "string" == typeof a.responseText && (r.text = a.responseText);
                                            try {
                                                i = a.statusText;
                                            } catch (e) {
                                                i = "";
                                            }
                                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : (n = r.text ? 200 : 404);
                                        }
                                    r && o(n, i, r, a.getAllResponseHeaders());
                                }),
                                l.async ? (4 === a.readyState ? setTimeout(u) : (a.onreadystatechange = Ut[s] = u)) : u();
                        },
                        abort: function () {
                            u && u(void 0, !0);
                        },
                    };
            }),
        C.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function (e) {
                    return C.globalEval(e), e;
                },
            },
        }),
        C.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        C.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var i,
                    r = N.head || C("head")[0] || N.documentElement;
                return {
                    send: function (e, n) {
                        ((i = N.createElement("script")).async = !0),
                            t.scriptCharset && (i.charset = t.scriptCharset),
                            (i.src = t.url),
                            (i.onload = i.onreadystatechange = function (e, t) {
                                (t || !i.readyState || /loaded|complete/.test(i.readyState)) && ((i.onload = i.onreadystatechange = null), i.parentNode && i.parentNode.removeChild(i), (i = null), t || n(200, "success"));
                            }),
                            r.insertBefore(i, r.firstChild);
                    },
                    abort: function () {
                        i && i.onload(void 0, !0);
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || C.expando + "_" + Tt++;
            return (this[e] = !0), e;
        },
    }),
        C.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
                r,
                o,
                a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Qt, "$1" + i)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                        return o || C.error(i + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (r = h[i]),
                    (h[i] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        (h[i] = r), e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)), o && C.isFunction(r) && r(o[0]), (o = r = void 0);
                    }),
                    "script"
                );
        }),
        (C.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || N);
            var i = x.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : ((i = C.buildFragment([e], t, r)), r && r.length && C(r).remove(), C.merge([], i.childNodes));
        });
    var Gt = C.fn.load;
    (C.fn.load = function (e, t, n) {
        if ("string" != typeof e && Gt) return Gt.apply(this, arguments);
        var i,
            r,
            o,
            a = this,
            s = e.indexOf(" ");
        return (
            0 <= s && ((i = C.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
            C.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
            0 < a.length &&
                C.ajax({ url: e, type: o, dataType: "html", data: t })
                    .done(function (e) {
                        (r = arguments), a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
                    })
                    .complete(
                        n &&
                            function (e, t) {
                                a.each(n, r || [e.responseText, t, e]);
                            }
                    ),
            this
        );
    }),
        (C.expr.filters.animated = function (t) {
            return C.grep(C.timers, function (e) {
                return t === e.elem;
            }).length;
        });
    var Kt = h.document.documentElement;
    function Zt(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    (C.offset = {
        setOffset: function (e, t, n) {
            var i,
                r,
                o,
                a,
                s,
                l,
                u = C.css(e, "position"),
                c = C(e),
                f = {};
            "static" === u && (e.style.position = "relative"),
                (s = c.offset()),
                (o = C.css(e, "top")),
                (l = C.css(e, "left")),
                (r = ("absolute" === u || "fixed" === u) && -1 < C.inArray("auto", [o, l]) ? ((a = (i = c.position()).top), i.left) : ((a = parseFloat(o) || 0), parseFloat(l) || 0)),
                C.isFunction(t) && (t = t.call(e, n, s)),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + r),
                "using" in t ? t.using.call(e, f) : c.css(f);
        },
    }),
        C.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              C.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    i = { top: 0, left: 0 },
                    r = this[0],
                    o = r && r.ownerDocument;
                return o
                    ? ((e = o.documentElement),
                      C.contains(e, r)
                          ? (typeof r.getBoundingClientRect !== M && (i = r.getBoundingClientRect()),
                            (n = Zt(o)),
                            { top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                          : i)
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = { top: 0, left: 0 },
                        i = this[0];
                    return (
                        "fixed" === C.css(i, "position")
                            ? (t = i.getBoundingClientRect())
                            : ((e = this.offsetParent()), (t = this.offset()), C.nodeName(e[0], "html") || (n = e.offset()), (n.top += C.css(e[0], "borderTopWidth", !0)), (n.left += C.css(e[0], "borderLeftWidth", !0))),
                        { top: t.top - n.top - C.css(i, "marginTop", !0), left: t.left - n.left - C.css(i, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Kt; e && !C.nodeName(e, "html") && "static" === C.css(e, "position"); ) e = e.offsetParent;
                    return e || Kt;
                });
            },
        }),
        C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, r) {
            var o = /Y/.test(r);
            C.fn[t] = function (e) {
                return X(
                    this,
                    function (e, t, n) {
                        var i = Zt(e);
                        if (void 0 === n) return i ? (r in i ? i[r] : i.document.documentElement[t]) : e[t];
                        i ? i.scrollTo(o ? C(i).scrollLeft() : n, o ? n : C(i).scrollTop()) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length,
                    null
                );
            };
        }),
        C.each(["top", "left"], function (e, n) {
            C.cssHooks[n] = Me(v.pixelPosition, function (e, t) {
                if (t) return (t = De(e, n)), qe.test(t) ? C(e).position()[n] + "px" : t;
            });
        }),
        C.each({ Height: "height", Width: "width" }, function (o, a) {
            C.each({ padding: "inner" + o, content: a, "": "outer" + o }, function (i, e) {
                C.fn[e] = function (e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        r = i || (!0 === e || !0 === t ? "margin" : "border");
                    return X(
                        this,
                        function (e, t, n) {
                            var i;
                            return C.isWindow(e)
                                ? e.document.documentElement["client" + o]
                                : 9 === e.nodeType
                                ? ((i = e.documentElement), Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o]))
                                : void 0 === n
                                ? C.css(e, t, r)
                                : C.style(e, t, n, r);
                        },
                        a,
                        n ? e : void 0,
                        n,
                        null
                    );
                };
            });
        }),
        (C.fn.size = function () {
            return this.length;
        }),
        (C.fn.andSelf = C.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return C;
            });
    var en = h.jQuery,
        tn = h.$;
    return (
        (C.noConflict = function (e) {
            return h.$ === C && (h.$ = tn), e && h.jQuery === C && (h.jQuery = en), C;
        }),
        typeof e === M && (h.jQuery = h.$ = C),
        C
    );
}),
    (function (d, p, h, e) {
        var n = { header: "js-header", jumbo: "js-jumbo", navAnchor: "js-anchor", navLink: "js-link", fixedHeader: "is-fixed", jumboScroll: "is-scroll", activeLink: "is-active" };
        function t(e, t) {
            (this.options = d.extend({}, n, t)), (this.element = e), this.init();
        }
        (t.prototype.init = function () {
            var l,
                u = d(this.element),
                e = d("." + this.options.navAnchor),
                c = d("." + this.options.navLink),
                t = d("." + this.options.header),
                n = d("." + this.options.jumbo),
                i = (u.height(), t.offset().top),
                f = [];
            for (
                d(p).scroll(
                    d.proxy(function () {
                        var e = d(p).scrollTop();
                        i < e ? (t.addClass(this.options.fixedHeader), n.addClass(this.options.jumboScroll)) : (t.removeClass(this.options.fixedHeader), n.removeClass(this.options.jumboScroll));
                    }, this)
                ),
                    e.click(function () {
                        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                            var e = d(this.hash);
                            if ((e = e.length ? e : d("[name=" + this.hash.slice(1) + "]")).length) return d("html,body").animate({ scrollTop: e.offset().top }, 1e3), !1;
                        }
                    }),
                    l = 0;
                l < c.length;
                l += 1
            ) {
                var r = c[l],
                    o = d(r).attr("href");
                f.push(o);
            }
            d(p).scroll(
                d.proxy(function () {
                    var e = d(p).scrollTop(),
                        t = d(p).height(),
                        n = d(h).height(),
                        i = u.height(),
                        r = d("section").eq(0);
                    for (l = 0; l < f.length; l += 1) {
                        var o = f[l],
                            a = d(o).offset().top - i,
                            s = d(o).height();
                        a <= e && e < a + s ? c.filter("[href='" + o + "']").addClass(this.options.activeLink) : c.filter("[href='" + o + "']").removeClass(this.options.activeLink);
                    }
                    e + t === n &&
                        (u.find("li").filter(":last-child").find(c).hasClass(this.options.activeLink) ||
                            (c.filter("." + this.options.activeLink).removeClass(this.options.activeLink), u.find("li").filter(":last-child").find(c).addClass(this.options.activeLink))),
                        e < r.offset().top &&
                            (u.find("li").filter(":first-child").find(c).hasClass(this.options.activeLink) ||
                                (c.filter("." + this.options.activeLink).removeClass(this.options.activeLink), u.find("li").filter(":first-child").find(c).addClass(this.options.activeLink)));
                }, this)
            );
        }),
            (d.fn.navKit = function (e) {
                return this.each(function () {
                    new t(this, e);
                });
            });
    })(jQuery, window, document),
    $(".js-nav").navKit(),
    (function (i, e, t, n) {
        var r = { item: "js-item", itemHidden: "is-hidden", filterLink: "js-filter", filterSelected: "is-selected" };
        function o(e, t) {
            (this.options = i.extend({}, r, t)), (this.element = e), this.init();
        }
        (o.prototype.init = function () {
            var e = i(this.element),
                t = e.find("." + this.options.item),
                n = (i("." + this.options.itemHidden), e.find("." + this.options.filterLink));
            i("." + this.options.filterSelected);
            n.on("click", function () {
                if (!i(this).hasClass("is-selected")) {
                    n.removeClass("is-selected"), i(this).addClass("is-selected");
                    var e = i(this).data("filter").toLowerCase();
                    t.each(function () {
                        i(this).data("cat").toLowerCase();
                        i(this).is("[data-cat*=" + e + "]") ? i(this).removeClass("is-hidden") : i(this).addClass("is-hidden");
                    });
                }
                return !1;
            });
        }),
            (i.fn.mixFilter = function (e) {
                return this.each(function () {
                    new o(this, e);
                });
            });
    })(jQuery, window, document),
    $(".js-portfolio").mixFilter();