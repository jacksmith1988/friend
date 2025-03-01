!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(c) {
            if (!c.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return b(c)
        }
        : b(a)
}("undefined" != typeof window ? window : this, function(aH, cb) {
    var bB = []
        , bZ = aH.document
        , a5 = Object.getPrototypeOf
        , bH = bB.slice
        , ah = bB.concat
        , b5 = bB.push
        , ci = bB.indexOf
        , bo = {}
        , av = bo.toString
        , aN = bo.hasOwnProperty
        , bN = aN.toString
        , aB = bN.call(Object)
        , aZ = {}
        , aT = function aH(a) {
        return "function" == typeof a && "number" != typeof a.nodeType
    }
        , cH = function aH(a) {
        return null != a && a === a.window
    }
        , co = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function bv(a, f, c) {
        var b, d = (f = f || bZ).createElement("script");
        if (d.text = a,
            c) {
            for (b in co) {
                c[b] && (d[b] = c[b])
            }
        }
        f.head.appendChild(d).parentNode.removeChild(d)
    }
    function cB(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? bo[av.call(a)] || "object" : typeof a
    }
    var an = "3.3.1"
        , cv = function(a, b) {
        return new cv.fn.init(a,b)
    }
        , cc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    cv.fn = cv.prototype = {
        jquery: "3.3.1",
        constructor: cv,
        length: 0,
        toArray: function() {
            return bH.call(this)
        },
        get: function(a) {
            return null == a ? bH.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = cv.merge(this.constructor(), a);
            return b.prevObject = this,
                b
        },
        each: function(a) {
            return cv.each(this, a)
        },
        map: function(a) {
            return this.pushStack(cv.map(this, function(c, b) {
                return a.call(c, b, c)
            }))
        },
        slice: function() {
            return this.pushStack(bH.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var c = this.length
                , b = +a + (a < 0 ? c : 0);
            return this.pushStack(b >= 0 && b < c ? [this[b]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: b5,
        sort: bB.sort,
        splice: bB.splice
    },
        cv.extend = cv.fn.extend = function() {
            var c, m, g, j, d, h, b = arguments[0] || {}, k = 1, p = arguments.length, f = !1;
            for ("boolean" == typeof b && (f = b,
                b = arguments[k] || {},
                k++),
                 "object" == typeof b || aT(b) || (b = {}),
                 k === p && (b = this,
                     k--); k < p; k++) {
                if (null != (c = arguments[k])) {
                    for (m in c) {
                        g = b[m],
                        b !== (j = c[m]) && (f && j && (cv.isPlainObject(j) || (d = Array.isArray(j))) ? (d ? (d = !1,
                            h = g && Array.isArray(g) ? g : []) : h = g && cv.isPlainObject(g) ? g : {},
                            b[m] = cv.extend(f, h, j)) : void 0 !== j && (b[m] = j))
                    }
                }
            }
            return b
        }
        ,
        cv.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isPlainObject: function(a) {
                var c, b;
                return !(!a || "[object Object]" !== av.call(a)) && (!(c = a5(a)) || "function" == typeof (b = aN.call(c, "constructor") && c.constructor) && bN.call(b) === aB)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) {
                    return !1
                }
                return !0
            },
            globalEval: function(a) {
                bv(a)
            },
            each: function(a, d) {
                var b, c = 0;
                if (aw(a)) {
                    for (b = a.length; c < b; c++) {
                        if (!1 === d.call(a[c], c, a[c])) {
                            break
                        }
                    }
                } else {
                    for (c in a) {
                        if (!1 === d.call(a[c], c, a[c])) {
                            break
                        }
                    }
                }
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(cc, "")
            },
            makeArray: function(a, c) {
                var b = c || [];
                return null != a && (aw(Object(a)) ? cv.merge(b, "string" == typeof a ? [a] : a) : b5.call(b, a)),
                    b
            },
            inArray: function(a, c, b) {
                return null == c ? -1 : ci.call(c, a, b)
            },
            merge: function(a, f) {
                for (var c = +f.length, d = 0, b = a.length; d < c; d++) {
                    a[b++] = f[d]
                }
                return a.length = b,
                    a
            },
            grep: function(c, k, f) {
                for (var h, d = [], g = 0, b = c.length, j = !f; g < b; g++) {
                    (h = !k(c[g], g)) !== j && d.push(c[g])
                }
                return d
            },
            map: function(a, h, c) {
                var f, b, d = 0, g = [];
                if (aw(a)) {
                    for (f = a.length; d < f; d++) {
                        null != (b = h(a[d], d, c)) && g.push(b)
                    }
                } else {
                    for (d in a) {
                        null != (b = h(a[d], d, c)) && g.push(b)
                    }
                }
                return ah.apply([], g)
            },
            guid: 1,
            support: aZ
        }),
    "function" == typeof Symbol && (cv.fn[Symbol.iterator] = bB[Symbol.iterator]),
        cv.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            bo["[object " + b + "]"] = b.toLowerCase()
        });
    function aw(a) {
        var c = !!a && "length"in a && a.length
            , b = cB(a);
        return !aT(a) && !cH(a) && ("array" === b || 0 === c || "number" == typeof c && c > 0 && c - 1 in a)
    }
    var aI = function(c4) {
        var dN, dw, dH, di, dz, ct, dK, dR, dq, cX, c8, dC, c1, df, db, d3, dU, dt, d0, cU = "sizzle" + 1 * new Date, dX = c4.document, dO = 0, cY = 0, c5 = cT(), dn = cT(), dL = cT(), c2 = function(a, b) {
            return a === b && (c8 = !0),
                0
        }, dx = {}.hasOwnProperty, cS = [], dl = cS.pop, dF = cS.push, dr = cS.push, dg = cS.slice, dA = function(a, d) {
            for (var b = 0, c = a.length; b < c; b++) {
                if (a[b] === d) {
                    return b
                }
            }
            return -1
        }, dD = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", du = "[\\x20\\t\\r\\n\\f]", dI = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", dj = "\\[" + du + "*(" + dI + ")(?:" + du + "*([*^$|!~]?=)" + du + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + dI + "))|)" + du + "*\\]", dY = ":(" + dI + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + dj + ")*)|.*)\\)|)", at = new RegExp(du + "+","g"), cV = new RegExp("^" + du + "+|((?:^|[^\\\\])(?:\\\\.)*)" + du + "+$","g"), c9 = new RegExp("^" + du + "*," + du + "*"), bt = new RegExp("^" + du + "*([>+~]|" + du + ")" + du + "*"), d6 = new RegExp("=" + du + "*([^\\]'\"]*?)" + du + "*\\]","g"), d1 = new RegExp(dY), dS = new RegExp("^" + dI + "$"), dV = {
            ID: new RegExp("^#(" + dI + ")"),
            CLASS: new RegExp("^\\.(" + dI + ")"),
            TAG: new RegExp("^(" + dI + "|[*])"),
            ATTR: new RegExp("^" + dj),
            PSEUDO: new RegExp("^" + dY),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + du + "*(even|odd|(([+-]|)(\\d*)n|)" + du + "*(?:([+-]|)" + du + "*(\\d+)|))" + du + "*\\)|)","i"),
            bool: new RegExp("^(?:" + dD + ")$","i"),
            needsContext: new RegExp("^" + du + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + du + "*((?:-\\d)?\\d*)" + du + "*\\)|)(?=[^-]|$)","i")
        }, dc = /^(?:input|select|textarea|button)$/i, d4 = /^h\d$/i, dG = /^[^{]+\{\s*\[native \w/, dm = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, dp = /[+~]/, d7 = new RegExp("\\\\([\\da-f]{1,6}" + du + "?|(" + du + ")|.)","ig"), c6 = function(a, d, b) {
            var c = "0x" + d - 65536;
            return c !== c || b ? d : c < 0 ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, 1023 & c | 56320)
        }, dP = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, dy = function(a, b) {
            return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        }, dJ = function() {
            dC()
        }, dk = dv(function(a) {
            return !0 === a.disabled && ("form"in a || "label"in a)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            dr.apply(cS = dg.call(dX.childNodes), dX.childNodes),
                cS[dX.childNodes.length].nodeType
        } catch (c4) {
            dr = {
                apply: cS.length ? function(a, b) {
                        dF.apply(a, dg.call(b))
                    }
                    : function(a, d) {
                        var b = a.length
                            , c = 0;
                        while (a[b++] = d[c++]) {}
                        a.length = b - 1
                    }
            }
        }
        function dB(b, w, q, j) {
            var p, u, k, a, d, g, y, n = w && w.ownerDocument, x = w ? w.nodeType : 9;
            if (q = q || [],
            "string" != typeof b || !b || 1 !== x && 9 !== x && 11 !== x) {
                return q
            }
            if (!j && ((w ? w.ownerDocument || w : dX) !== c1 && dC(w),
                w = w || c1,
                db)) {
                if (11 !== x && (d = dm.exec(b))) {
                    if (p = d[1]) {
                        if (9 === x) {
                            if (!(k = w.getElementById(p))) {
                                return q
                            }
                            if (k.id === p) {
                                return q.push(k),
                                    q
                            }
                        } else {
                            if (n && (k = n.getElementById(p)) && d0(w, k) && k.id === p) {
                                return q.push(k),
                                    q
                            }
                        }
                    } else {
                        if (d[2]) {
                            return dr.apply(q, w.getElementsByTagName(b)),
                                q
                        }
                        if ((p = d[3]) && dw.getElementsByClassName && w.getElementsByClassName) {
                            return dr.apply(q, w.getElementsByClassName(p)),
                                q
                        }
                    }
                }
                if (dw.qsa && !dL[b + " "] && (!d3 || !d3.test(b))) {
                    if (1 !== x) {
                        n = w,
                            y = b
                    } else {
                        if ("object" !== w.nodeName.toLowerCase()) {
                            (a = w.getAttribute("id")) ? a = a.replace(dP, dy) : w.setAttribute("id", a = cU),
                                u = (g = ct(b)).length;
                            while (u--) {
                                g[u] = "#" + a + " " + dW(g[u])
                            }
                            y = g.join(","),
                                n = dp.test(b) && dd(w.parentNode) || w
                        }
                    }
                    if (y) {
                        try {
                            return dr.apply(q, n.querySelectorAll(y)),
                                q
                        } catch (b) {} finally {
                            a === cU && w.removeAttribute("id")
                        }
                    }
                }
            }
            return dR(b.replace(cV, "$1"), w, q, j)
        }
        function cT() {
            var a = [];
            function b(d, c) {
                return a.push(d + " ") > dH.cacheLength && delete b[a.shift()],
                    b[d + " "] = c
            }
            return b
        }
        function dM(a) {
            return a[cU] = !0,
                a
        }
        function dT(a) {
            var b = c1.createElement("fieldset");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                    b = null
            }
        }
        function ds(a, d) {
            var c = a.split("|")
                , b = c.length;
            while (b--) {
                dH.attrHandle[c[b]] = d
            }
        }
        function cZ(a, d) {
            var b = d && a
                , c = b && 1 === a.nodeType && 1 === d.nodeType && a.sourceIndex - d.sourceIndex;
            if (c) {
                return c
            }
            if (b) {
                while (b = b.nextSibling) {
                    if (b === d) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }
        function da(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function dE(a) {
            return function(c) {
                var b = c.nodeName.toLowerCase();
                return ("input" === b || "button" === b) && c.type === a
            }
        }
        function c3(a) {
            return function(b) {
                return "form"in b ? b.parentNode && !1 === b.disabled ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && dk(b) === a : b.disabled === a : "label"in b && b.disabled === a
            }
        }
        function dh(a) {
            return dM(function(b) {
                return b = +b,
                    dM(function(e, g) {
                        var d, f = a([], e.length, b), c = f.length;
                        while (c--) {
                            e[d = f[c]] && (e[d] = !(g[d] = e[d]))
                        }
                    })
            })
        }
        function dd(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        dw = dB.support = {},
            dz = dB.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }
            ,
            dC = dB.setDocument = function(c) {
                var f, d, b = c ? c.ownerDocument || c : dX;
                return b !== c1 && 9 === b.nodeType && b.documentElement ? (c1 = b,
                    df = c1.documentElement,
                    db = !dz(c1),
                dX !== c1 && (d = c1.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", dJ, !1) : d.attachEvent && d.attachEvent("onunload", dJ)),
                    dw.attributes = dT(function(a) {
                        return a.className = "i",
                            !a.getAttribute("className")
                    }),
                    dw.getElementsByTagName = dT(function(a) {
                        return a.appendChild(c1.createComment("")),
                            !a.getElementsByTagName("*").length
                    }),
                    dw.getElementsByClassName = dG.test(c1.getElementsByClassName),
                    dw.getById = dT(function(a) {
                        return df.appendChild(a).id = cU,
                        !c1.getElementsByName || !c1.getElementsByName(cU).length
                    }),
                    dw.getById ? (dH.filter.ID = function(a) {
                            var g = a.replace(d7, c6);
                            return function(h) {
                                return h.getAttribute("id") === g
                            }
                        }
                            ,
                            dH.find.ID = function(a, h) {
                                if ("undefined" != typeof h.getElementById && db) {
                                    var g = h.getElementById(a);
                                    return g ? [g] : []
                                }
                            }
                    ) : (dH.filter.ID = function(a) {
                            var g = a.replace(d7, c6);
                            return function(h) {
                                var i = "undefined" != typeof h.getAttributeNode && h.getAttributeNode("id");
                                return i && i.value === g
                            }
                        }
                            ,
                            dH.find.ID = function(a, l) {
                                if ("undefined" != typeof l.getElementById && db) {
                                    var h, k, g, j = l.getElementById(a);
                                    if (j) {
                                        if ((h = j.getAttributeNode("id")) && h.value === a) {
                                            return [j]
                                        }
                                        g = l.getElementsByName(a),
                                            k = 0;
                                        while (j = g[k++]) {
                                            if ((h = j.getAttributeNode("id")) && h.value === a) {
                                                return [j]
                                            }
                                        }
                                    }
                                    return []
                                }
                            }
                    ),
                    dH.find.TAG = dw.getElementsByTagName ? function(a, g) {
                            return "undefined" != typeof g.getElementsByTagName ? g.getElementsByTagName(a) : dw.qsa ? g.querySelectorAll(a) : void 0
                        }
                        : function(a, l) {
                            var h, k = [], g = 0, j = l.getElementsByTagName(a);
                            if ("*" === a) {
                                while (h = j[g++]) {
                                    1 === h.nodeType && k.push(h)
                                }
                                return k
                            }
                            return j
                        }
                    ,
                    dH.find.CLASS = dw.getElementsByClassName && function(a, g) {
                        if ("undefined" != typeof g.getElementsByClassName && db) {
                            return g.getElementsByClassName(a)
                        }
                    }
                    ,
                    dU = [],
                    d3 = [],
                (dw.qsa = dG.test(c1.querySelectorAll)) && (dT(function(a) {
                    df.appendChild(a).innerHTML = "<a id='" + cU + "'></a><select id='" + cU + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    a.querySelectorAll("[msallowcapture^='']").length && d3.push("[*^$]=" + du + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length || d3.push("\\[" + du + "*(?:value|" + dD + ")"),
                    a.querySelectorAll("[id~=" + cU + "-]").length || d3.push("~="),
                    a.querySelectorAll(":checked").length || d3.push(":checked"),
                    a.querySelectorAll("a#" + cU + "+*").length || d3.push(".#.+[+~]")
                }),
                    dT(function(a) {
                        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var g = c1.createElement("input");
                        g.setAttribute("type", "hidden"),
                            a.appendChild(g).setAttribute("name", "D"),
                        a.querySelectorAll("[name=d]").length && d3.push("name" + du + "*[*^$|!~]?="),
                        2 !== a.querySelectorAll(":enabled").length && d3.push(":enabled", ":disabled"),
                            df.appendChild(a).disabled = !0,
                        2 !== a.querySelectorAll(":disabled").length && d3.push(":enabled", ":disabled"),
                            a.querySelectorAll("*,:x"),
                            d3.push(",.*:")
                    })),
                (dw.matchesSelector = dG.test(dt = df.matches || df.webkitMatchesSelector || df.mozMatchesSelector || df.oMatchesSelector || df.msMatchesSelector)) && dT(function(a) {
                    dw.disconnectedMatch = dt.call(a, "*"),
                        dt.call(a, "[s!='']:x"),
                        dU.push("!=", dY)
                }),
                    d3 = d3.length && new RegExp(d3.join("|")),
                    dU = dU.length && new RegExp(dU.join("|")),
                    f = dG.test(df.compareDocumentPosition),
                    d0 = f || dG.test(df.contains) ? function(a, i) {
                            var g = 9 === a.nodeType ? a.documentElement : a
                                , h = i && i.parentNode;
                            return a === h || !(!h || 1 !== h.nodeType || !(g.contains ? g.contains(h) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(h)))
                        }
                        : function(a, g) {
                            if (g) {
                                while (g = g.parentNode) {
                                    if (g === a) {
                                        return !0
                                    }
                                }
                            }
                            return !1
                        }
                    ,
                    c2 = f ? function(a, h) {
                            if (a === h) {
                                return c8 = !0,
                                    0
                            }
                            var g = !a.compareDocumentPosition - !h.compareDocumentPosition;
                            return g || (1 & (g = (a.ownerDocument || a) === (h.ownerDocument || h) ? a.compareDocumentPosition(h) : 1) || !dw.sortDetached && h.compareDocumentPosition(a) === g ? a === c1 || a.ownerDocument === dX && d0(dX, a) ? -1 : h === c1 || h.ownerDocument === dX && d0(dX, h) ? 1 : cX ? dA(cX, a) - dA(cX, h) : 0 : 4 & g ? -1 : 1)
                        }
                        : function(h, q) {
                            if (h === q) {
                                return c8 = !0,
                                    0
                            }
                            var k, m = 0, j = h.parentNode, l = q.parentNode, g = [h], p = [q];
                            if (!j || !l) {
                                return h === c1 ? -1 : q === c1 ? 1 : j ? -1 : l ? 1 : cX ? dA(cX, h) - dA(cX, q) : 0
                            }
                            if (j === l) {
                                return cZ(h, q)
                            }
                            k = h;
                            while (k = k.parentNode) {
                                g.unshift(k)
                            }
                            k = q;
                            while (k = k.parentNode) {
                                p.unshift(k)
                            }
                            while (g[m] === p[m]) {
                                m++
                            }
                            return m ? cZ(g[m], p[m]) : g[m] === dX ? -1 : p[m] === dX ? 1 : 0
                        }
                    ,
                    c1) : c1
            }
            ,
            dB.matches = function(a, b) {
                return dB(a, null, null, b)
            }
            ,
            dB.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== c1 && dC(a),
                    c = c.replace(d6, "='$1']"),
                dw.matchesSelector && db && !dL[c + " "] && (!dU || !dU.test(c)) && (!d3 || !d3.test(c))) {
                    try {
                        var b = dt.call(a, c);
                        if (b || dw.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                            return b
                        }
                    } catch (a) {}
                }
                return dB(c, c1, null, [a]).length > 0
            }
            ,
            dB.contains = function(a, b) {
                return (a.ownerDocument || a) !== c1 && dC(a),
                    d0(a, b)
            }
            ,
            dB.attr = function(a, d) {
                (a.ownerDocument || a) !== c1 && dC(a);
                var b = dH.attrHandle[d.toLowerCase()]
                    , c = b && dx.call(dH.attrHandle, d.toLowerCase()) ? b(a, d, !db) : void 0;
                return void 0 !== c ? c : dw.attributes || !db ? a.getAttribute(d) : (c = a.getAttributeNode(d)) && c.specified ? c.value : null
            }
            ,
            dB.escape = function(a) {
                return (a + "").replace(dP, dy)
            }
            ,
            dB.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            dB.uniqueSort = function(a) {
                var f, d = [], b = 0, c = 0;
                if (c8 = !dw.detectDuplicates,
                    cX = !dw.sortStable && a.slice(0),
                    a.sort(c2),
                    c8) {
                    while (f = a[c++]) {
                        f === a[c] && (b = d.push(c))
                    }
                    while (b--) {
                        a.splice(d[b], 1)
                    }
                }
                return cX = null,
                    a
            }
            ,
            di = dB.getText = function(a) {
                var f, b = "", d = 0, c = a.nodeType;
                if (c) {
                    if (1 === c || 9 === c || 11 === c) {
                        if ("string" == typeof a.textContent) {
                            return a.textContent
                        }
                        for (a = a.firstChild; a; a = a.nextSibling) {
                            b += di(a)
                        }
                    } else {
                        if (3 === c || 4 === c) {
                            return a.nodeValue
                        }
                    }
                } else {
                    while (f = a[d++]) {
                        b += di(f)
                    }
                }
                return b
            }
            ,
            (dH = dB.selectors = {
                cacheLength: 50,
                createPseudo: dM,
                match: dV,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(d7, c6),
                            a[3] = (a[3] || a[4] || a[5] || "").replace(d7, c6),
                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(),
                            "nth" === a[1].slice(0, 3) ? (a[3] || dB.error(a[0]),
                                a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && dB.error(a[0]),
                            a
                    },
                    PSEUDO: function(a) {
                        var c, b = !a[6] && a[2];
                        return dV.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : b && d1.test(b) && (c = ct(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (a[0] = a[0].slice(0, c),
                            a[2] = b.slice(0, c)),
                            a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(d7, c6).toLowerCase();
                        return "*" === a ? function() {
                                return !0
                            }
                            : function(c) {
                                return c.nodeName && c.nodeName.toLowerCase() === b
                            }
                    },
                    CLASS: function(a) {
                        var b = c5[a + " "];
                        return b || (b = new RegExp("(^|" + du + ")" + a + "(" + du + "|$)")) && c5(a, function(c) {
                            return b.test("string" == typeof c.className && c.className || "undefined" != typeof c.getAttribute && c.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, b) {
                        return function(e) {
                            var d = dB.attr(e, a);
                            return null == d ? "!=" === c : !c || (d += "",
                                "=" === c ? d === b : "!=" === c ? d !== b : "^=" === c ? b && 0 === d.indexOf(b) : "*=" === c ? b && d.indexOf(b) > -1 : "$=" === c ? b && d.slice(-b.length) === b : "~=" === c ? (" " + d.replace(at, " ") + " ").indexOf(b) > -1 : "|=" === c && (d === b || d.slice(0, b.length + 1) === b + "-"))
                        }
                    },
                    CHILD: function(c, k, f, h, d) {
                        var g = "nth" !== c.slice(0, 3)
                            , b = "last" !== c.slice(-4)
                            , j = "of-type" === k;
                        return 1 === h && 0 === d ? function(a) {
                                return !!a.parentNode
                            }
                            : function(A, w, B) {
                                var r, a, i, z, e, q, o = g !== b ? "nextSibling" : "previousSibling", E = A.parentNode, C = j && A.nodeName.toLowerCase(), s = !B && !j, D = !1;
                                if (E) {
                                    if (g) {
                                        while (o) {
                                            z = A;
                                            while (z = z[o]) {
                                                if (j ? z.nodeName.toLowerCase() === C : 1 === z.nodeType) {
                                                    return !1
                                                }
                                            }
                                            q = o = "only" === c && !q && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (q = [b ? E.firstChild : E.lastChild],
                                    b && s) {
                                        D = (e = (r = (a = (i = (z = E)[cU] || (z[cU] = {}))[z.uniqueID] || (i[z.uniqueID] = {}))[c] || [])[0] === dO && r[1]) && r[2],
                                            z = e && E.childNodes[e];
                                        while (z = ++e && z && z[o] || (D = e = 0) || q.pop()) {
                                            if (1 === z.nodeType && ++D && z === A) {
                                                a[c] = [dO, e, D];
                                                break
                                            }
                                        }
                                    } else {
                                        if (s && (D = e = (r = (a = (i = (z = A)[cU] || (z[cU] = {}))[z.uniqueID] || (i[z.uniqueID] = {}))[c] || [])[0] === dO && r[1]),
                                        !1 === D) {
                                            while (z = ++e && z && z[o] || (D = e = 0) || q.pop()) {
                                                if ((j ? z.nodeName.toLowerCase() === C : 1 === z.nodeType) && ++D && (s && ((a = (i = z[cU] || (z[cU] = {}))[z.uniqueID] || (i[z.uniqueID] = {}))[c] = [dO, D]),
                                                z === A)) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    return (D -= d) === h || D % h == 0 && D / h >= 0
                                }
                            }
                    },
                    PSEUDO: function(a, d) {
                        var c, b = dH.pseudos[a] || dH.setFilters[a.toLowerCase()] || dB.error("unsupported pseudo: " + a);
                        return b[cU] ? b(d) : b.length > 1 ? (c = [a, a, "", d],
                                dH.setFilters.hasOwnProperty(a.toLowerCase()) ? dM(function(g, h) {
                                    var j, i = b(g, d), f = i.length;
                                    while (f--) {
                                        g[j = dA(g, i[f])] = !(h[j] = i[f])
                                    }
                                }) : function(f) {
                                    return b(f, 0, c)
                                }
                        ) : b
                    }
                },
                pseudos: {
                    not: dM(function(a) {
                        var d = []
                            , b = []
                            , c = dK(a.replace(cV, "$1"));
                        return c[cU] ? dM(function(g, m, j, h) {
                            var k, f = c(g, null, h, []), l = g.length;
                            while (l--) {
                                (k = f[l]) && (g[l] = !(m[l] = k))
                            }
                        }) : function(f, g, h) {
                            return d[0] = f,
                                c(d, null, h, b),
                                d[0] = null,
                                !b.pop()
                        }
                    }),
                    has: dM(function(a) {
                        return function(b) {
                            return dB(a, b).length > 0
                        }
                    }),
                    contains: dM(function(a) {
                        return a = a.replace(d7, c6),
                            function(b) {
                                return (b.textContent || b.innerText || di(b)).indexOf(a) > -1
                            }
                    }),
                    lang: dM(function(a) {
                        return dS.test(a || "") || dB.error("unsupported lang: " + a),
                            a = a.replace(d7, c6).toLowerCase(),
                            function(c) {
                                var b;
                                do {
                                    if (b = db ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) {
                                        return (b = b.toLowerCase()) === a || 0 === b.indexOf(a + "-")
                                    }
                                } while ((c = c.parentNode) && 1 === c.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var a = c4.location && c4.location.hash;
                        return a && a.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === df
                    },
                    focus: function(a) {
                        return a === c1.activeElement && (!c1.hasFocus || c1.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: c3(!1),
                    disabled: c3(!0),
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        !0 === a.selected
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling) {
                            if (a.nodeType < 6) {
                                return !1
                            }
                        }
                        return !0
                    },
                    parent: function(a) {
                        return !dH.pseudos.empty(a)
                    },
                    header: function(a) {
                        return d4.test(a.nodeName)
                    },
                    input: function(a) {
                        return dc.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: dh(function() {
                        return [0]
                    }),
                    last: dh(function(a, b) {
                        return [b - 1]
                    }),
                    eq: dh(function(a, c, b) {
                        return [b < 0 ? b + c : b]
                    }),
                    even: dh(function(a, c) {
                        for (var b = 0; b < c; b += 2) {
                            a.push(b)
                        }
                        return a
                    }),
                    odd: dh(function(a, c) {
                        for (var b = 1; b < c; b += 2) {
                            a.push(b)
                        }
                        return a
                    }),
                    lt: dh(function(a, d, b) {
                        for (var c = b < 0 ? b + d : b; --c >= 0; ) {
                            a.push(c)
                        }
                        return a
                    }),
                    gt: dh(function(a, d, b) {
                        for (var c = b < 0 ? b + d : b; ++c < d; ) {
                            a.push(c)
                        }
                        return a
                    })
                }
            }).pseudos.nth = dH.pseudos.eq;
        for (dN in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            dH.pseudos[dN] = da(dN)
        }
        for (dN in {
            submit: !0,
            reset: !0
        }) {
            dH.pseudos[dN] = dE(dN)
        }
        function d5() {}
        d5.prototype = dH.filters = dH.pseudos,
            dH.setFilters = new d5,
            ct = dB.tokenize = function(f, p) {
                var j, g, k, b, m, q, h, d = dn[f + " "];
                if (d) {
                    return p ? 0 : d.slice(0)
                }
                m = f,
                    q = [],
                    h = dH.preFilter;
                while (m) {
                    j && !(g = c9.exec(m)) || (g && (m = m.slice(g[0].length) || m),
                        q.push(k = [])),
                        j = !1,
                    (g = bt.exec(m)) && (j = g.shift(),
                        k.push({
                            value: j,
                            type: g[0].replace(cV, " ")
                        }),
                        m = m.slice(j.length));
                    for (b in dH.filter) {
                        !(g = dV[b].exec(m)) || h[b] && !(g = h[b](g)) || (j = g.shift(),
                            k.push({
                                value: j,
                                type: b,
                                matches: g
                            }),
                            m = m.slice(j.length))
                    }
                    if (!j) {
                        break
                    }
                }
                return p ? m.length : m ? dB.error(f) : dn(f, q).slice(0)
            }
        ;
        function dW(a) {
            for (var d = 0, b = a.length, c = ""; d < b; d++) {
                c += a[d].value
            }
            return c
        }
        function dv(c, k, f) {
            var h = k.dir
                , d = k.next
                , g = d || h
                , b = f && "parentNode" === g
                , j = cY++;
            return k.first ? function(l, e, a) {
                    while (l = l[h]) {
                        if (1 === l.nodeType || b) {
                            return c(l, e, a)
                        }
                    }
                    return !1
                }
                : function(q, m, r) {
                    var i, a, e, o = [dO, j];
                    if (r) {
                        while (q = q[h]) {
                            if ((1 === q.nodeType || b) && c(q, m, r)) {
                                return !0
                            }
                        }
                    } else {
                        while (q = q[h]) {
                            if (1 === q.nodeType || b) {
                                if (e = q[cU] || (q[cU] = {}),
                                    a = e[q.uniqueID] || (e[q.uniqueID] = {}),
                                d && d === q.nodeName.toLowerCase()) {
                                    q = q[h] || q
                                } else {
                                    if ((i = a[g]) && i[0] === dO && i[1] === j) {
                                        return o[2] = i[2]
                                    }
                                    if (a[g] = o,
                                        o[2] = c(q, m, r)) {
                                        return !0
                                    }
                                }
                            }
                        }
                    }
                    return !1
                }
        }
        function d2(a) {
            return a.length > 1 ? function(e, c, d) {
                    var b = a.length;
                    while (b--) {
                        if (!a[b](e, c, d)) {
                            return !1
                        }
                    }
                    return !0
                }
                : a[0]
        }
        function cW(a, f, c) {
            for (var d = 0, b = f.length; d < b; d++) {
                dB(a, f[d], c)
            }
            return c
        }
        function dZ(c, m, g, j, d) {
            for (var h, b = [], k = 0, p = c.length, f = null != m; k < p; k++) {
                (h = c[k]) && (g && !g(h, j, d) || (b.push(h),
                f && m.push(k)))
            }
            return b
        }
        function dQ(a, g, c, f, b, d) {
            return f && !f[cU] && (f = dQ(f)),
            b && !b[cU] && (b = dQ(b, d)),
                dM(function(r, e, w, x) {
                    var q, i, k, t = [], j = [], n = e.length, m = r || cW(g || "*", w.nodeType ? [w] : w, []), A = !a || !r && g ? m : dZ(m, t, a, w, x), z = c ? b || (r ? a : n || f) ? [] : e : A;
                    if (c && c(A, z, w, x),
                        f) {
                        q = dZ(z, j),
                            f(q, [], w, x),
                            i = q.length;
                        while (i--) {
                            (k = q[i]) && (z[j[i]] = !(A[j[i]] = k))
                        }
                    }
                    if (r) {
                        if (b || a) {
                            if (b) {
                                q = [],
                                    i = z.length;
                                while (i--) {
                                    (k = z[i]) && q.push(A[i] = k)
                                }
                                b(null, z = [], q, x)
                            }
                            i = z.length;
                            while (i--) {
                                (k = z[i]) && (q = b ? dA(r, k) : t[i]) > -1 && (r[q] = !(e[q] = k))
                            }
                        }
                    } else {
                        z = dZ(z === e ? z.splice(n, z.length) : z),
                            b ? b(null, e, z, x) : dr.apply(e, z)
                    }
                })
        }
        function c0(g) {
            for (var r, k, j, l = g.length, b = dH.relative[g[0].type], q = b || dH.relative[" "], v = b ? 1 : 0, d = dv(function(a) {
                return a === r
            }, q, !0), h = dv(function(a) {
                return dA(r, a) > -1
            }, q, !0), m = [function(a, f, o) {
                var c = !b && (o || f !== dq) || ((r = f).nodeType ? d(a, f, o) : h(a, f, o));
                return r = null,
                    c
            }
            ]; v < l; v++) {
                if (k = dH.relative[g[v].type]) {
                    m = [dv(d2(m), k)]
                } else {
                    if ((k = dH.filter[g[v].type].apply(null, g[v].matches))[cU]) {
                        for (j = ++v; j < l; j++) {
                            if (dH.relative[g[j].type]) {
                                break
                            }
                        }
                        return dQ(v > 1 && d2(m), v > 1 && dW(g.slice(0, v - 1).concat({
                            value: " " === g[v - 2].type ? "*" : ""
                        })).replace(cV, "$1"), k, v < j && c0(g.slice(v, j)), j < l && c0(g = g.slice(j)), j < l && dW(g))
                    }
                    m.push(k)
                }
            }
            return d2(m)
        }
        function c7(a, f) {
            var c = f.length > 0
                , b = a.length > 0
                , d = function(t, e, z, A, i) {
                var n, p, G, B = 0, r = "0", F = t && [], g = [], D = dq, j = t || b && dH.find.TAG("*", i), l = dO += null == D ? 1 : Math.random() || 0.1, q = j.length;
                for (i && (dq = e === c1 || e || i); r !== q && null != (n = j[r]); r++) {
                    if (b && n) {
                        p = 0,
                        e || n.ownerDocument === c1 || (dC(n),
                            z = !db);
                        while (G = a[p++]) {
                            if (G(n, e || c1, z)) {
                                A.push(n);
                                break
                            }
                        }
                        i && (dO = l)
                    }
                    c && ((n = !G && n) && B--,
                    t && F.push(n))
                }
                if (B += r,
                c && r !== B) {
                    p = 0;
                    while (G = f[p++]) {
                        G(F, g, e, z)
                    }
                    if (t) {
                        if (B > 0) {
                            while (r--) {
                                F[r] || g[r] || (g[r] = dl.call(A))
                            }
                        }
                        g = dZ(g)
                    }
                    dr.apply(A, g),
                    i && !t && g.length > 0 && B + f.length > 1 && dB.uniqueSort(A)
                }
                return i && (dO = l,
                    dq = D),
                    F
            };
            return c ? dM(d) : d
        }
        return dK = dB.compile = function(a, g) {
            var c, f = [], b = [], d = dL[a + " "];
            if (!d) {
                g || (g = ct(a)),
                    c = g.length;
                while (c--) {
                    (d = c0(g[c]))[cU] ? f.push(d) : b.push(d)
                }
                (d = dL(a, c7(b, f))).selector = a
            }
            return d
        }
            ,
            dR = dB.select = function(g, s, m, j) {
                var q, v, k, a, h, r = "function" == typeof g && g, b = !j && ct(g = r.selector || g);
                if (m = m || [],
                1 === b.length) {
                    if ((v = b[0] = b[0].slice(0)).length > 2 && "ID" === (k = v[0]).type && 9 === s.nodeType && db && dH.relative[v[1].type]) {
                        if (!(s = (dH.find.ID(k.matches[0].replace(d7, c6), s) || [])[0])) {
                            return m
                        }
                        r && (s = s.parentNode),
                            g = g.slice(v.shift().value.length)
                    }
                    q = dV.needsContext.test(g) ? 0 : v.length;
                    while (q--) {
                        if (k = v[q],
                            dH.relative[a = k.type]) {
                            break
                        }
                        if ((h = dH.find[a]) && (j = h(k.matches[0].replace(d7, c6), dp.test(v[0].type) && dd(s.parentNode) || s))) {
                            if (v.splice(q, 1),
                                !(g = j.length && dW(v))) {
                                return dr.apply(m, j),
                                    m
                            }
                            break
                        }
                    }
                }
                return (r || dK(g, b))(j, s, !db, m, !s || dp.test(g) && dd(s.parentNode) || s),
                    m
            }
            ,
            dw.sortStable = cU.split("").sort(c2).join("") === cU,
            dw.detectDuplicates = !!c8,
            dC(),
            dw.sortDetached = dT(function(a) {
                return 1 & a.compareDocumentPosition(c1.createElement("fieldset"))
            }),
        dT(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ds("type|href|height|width", function(a, c, b) {
            if (!b) {
                return a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
            }
        }),
        dw.attributes && dT(function(a) {
            return a.innerHTML = "<input/>",
                a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ds("value", function(a, c, b) {
            if (!b && "input" === a.nodeName.toLowerCase()) {
                return a.defaultValue
            }
        }),
        dT(function(a) {
            return null == a.getAttribute("disabled")
        }) || ds(dD, function(a, d, b) {
            var c;
            if (!b) {
                return !0 === a[d] ? d.toLowerCase() : (c = a.getAttributeNode(d)) && c.specified ? c.value : null
            }
        }),
            dB
    }(aH);
    cv.find = aI,
        cv.expr = aI.selectors,
        cv.expr[":"] = cv.expr.pseudos,
        cv.uniqueSort = cv.unique = aI.uniqueSort,
        cv.text = aI.getText,
        cv.isXMLDoc = aI.isXML,
        cv.contains = aI.contains,
        cv.escapeSelector = aI.escape;
    var bi = function(a, f, c) {
        var d = []
            , b = void 0 !== c;
        while ((a = a[f]) && 9 !== a.nodeType) {
            if (1 === a.nodeType) {
                if (b && cv(a).is(c)) {
                    break
                }
                d.push(a)
            }
        }
        return d
    }
        , b6 = function(a, c) {
        for (var b = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== c && b.push(a)
        }
        return b
    }
        , aC = cv.expr.match.needsContext;
    function bC(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var ai = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function bb(a, c, b) {
        return aT(c) ? cv.grep(a, function(d, f) {
            return !!c.call(d, f, d) !== b
        }) : c.nodeType ? cv.grep(a, function(d) {
            return d === c !== b
        }) : "string" != typeof c ? cv.grep(a, function(d) {
            return ci.call(c, d) > -1 !== b
        }) : cv.filter(c, a, b)
    }
    cv.filter = function(a, d, b) {
        var c = d[0];
        return b && (a = ":not(" + a + ")"),
            1 === d.length && 1 === c.nodeType ? cv.find.matchesSelector(c, a) ? [c] : [] : cv.find.matches(a, cv.grep(d, function(f) {
                return 1 === f.nodeType
            }))
    }
        ,
        cv.fn.extend({
            find: function(a) {
                var f, c, d = this.length, b = this;
                if ("string" != typeof a) {
                    return this.pushStack(cv(a).filter(function() {
                        for (f = 0; f < d; f++) {
                            if (cv.contains(b[f], this)) {
                                return !0
                            }
                        }
                    }))
                }
                for (c = this.pushStack([]),
                         f = 0; f < d; f++) {
                    cv.find(a, b[f], c)
                }
                return d > 1 ? cv.uniqueSort(c) : c
            },
            filter: function(a) {
                return this.pushStack(bb(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(bb(this, a || [], !0))
            },
            is: function(a) {
                return !!bb(this, "string" == typeof a && aC.test(a) ? cv(a) : a || [], !1).length
            }
        });
    var bT, bp = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (cv.fn.init = function(a, f, c) {
            var b, d;
            if (!a) {
                return this
            }
            if (c = c || bT,
            "string" == typeof a) {
                if (!(b = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : bp.exec(a)) || !b[1] && f) {
                    return !f || f.jquery ? (f || c).find(a) : this.constructor(f).find(a)
                }
                if (b[1]) {
                    if (f = f instanceof cv ? f[0] : f,
                        cv.merge(this, cv.parseHTML(b[1], f && f.nodeType ? f.ownerDocument || f : bZ, !0)),
                    ai.test(b[1]) && cv.isPlainObject(f)) {
                        for (b in f) {
                            aT(this[b]) ? this[b](f[b]) : this.attr(b, f[b])
                        }
                    }
                    return this
                }
                return (d = bZ.getElementById(b[2])) && (this[0] = d,
                    this.length = 1),
                    this
            }
            return a.nodeType ? (this[0] = a,
                this.length = 1,
                this) : aT(a) ? void 0 !== c.ready ? c.ready(a) : a(cv) : cv.makeArray(a, this)
        }
    ).prototype = cv.fn,
        bT = cv(bZ);
    var a0 = /^(?:parents|prev(?:Until|All))/
        , bI = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    cv.fn.extend({
        has: function(a) {
            var c = cv(a, this)
                , b = c.length;
            return this.filter(function() {
                for (var d = 0; d < b; d++) {
                    if (cv.contains(this, c[d])) {
                        return !0
                    }
                }
            })
        },
        closest: function(c, j) {
            var f, h = 0, d = this.length, g = [], b = "string" != typeof c && cv(c);
            if (!aC.test(c)) {
                for (; h < d; h++) {
                    for (f = this[h]; f && f !== j; f = f.parentNode) {
                        if (f.nodeType < 11 && (b ? b.index(f) > -1 : 1 === f.nodeType && cv.find.matchesSelector(f, c))) {
                            g.push(f);
                            break
                        }
                    }
                }
            }
            return this.pushStack(g.length > 1 ? cv.uniqueSort(g) : g)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ci.call(cv(a), this[0]) : ci.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(cv.uniqueSort(cv.merge(this.get(), cv(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function bO(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}
        return a
    }
    cv.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return bi(a, "parentNode")
        },
        parentsUntil: function(a, c, b) {
            return bi(a, "parentNode", b)
        },
        next: function(a) {
            return bO(a, "nextSibling")
        },
        prev: function(a) {
            return bO(a, "previousSibling")
        },
        nextAll: function(a) {
            return bi(a, "nextSibling")
        },
        prevAll: function(a) {
            return bi(a, "previousSibling")
        },
        nextUntil: function(a, c, b) {
            return bi(a, "nextSibling", b)
        },
        prevUntil: function(a, c, b) {
            return bi(a, "previousSibling", b)
        },
        siblings: function(a) {
            return b6((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return b6(a.firstChild)
        },
        contents: function(a) {
            return bC(a, "iframe") ? a.contentDocument : (bC(a, "template") && (a = a.content || a),
                cv.merge([], a.childNodes))
        }
    }, function(a, b) {
        cv.fn[a] = function(d, e) {
            var c = cv.map(this, b, d);
            return "Until" !== a.slice(-5) && (e = d),
            e && "string" == typeof e && (c = cv.filter(e, c)),
            this.length > 1 && (bI[a] || cv.uniqueSort(c),
            a0.test(a) && c.reverse()),
                this.pushStack(c)
        }
    });
    var bw = /[^\x20\t\r\n\f]+/g;
    function b0(a) {
        var b = {};
        return cv.each(a.match(bw) || [], function(c, d) {
            b[d] = !0
        }),
            b
    }
    cv.Callbacks = function(c) {
        c = "string" == typeof c ? b0(c) : cv.extend({}, c);
        var m, g, j, d, h = [], b = [], k = -1, p = function() {
            for (d = d || c.once,
                     j = m = !0; b.length; k = -1) {
                g = b.shift();
                while (++k < h.length) {
                    !1 === h[k].apply(g[0], g[1]) && c.stopOnFalse && (k = h.length,
                        g = !1)
                }
            }
            c.memory || (g = !1),
                m = !1,
            d && (h = g ? [] : "")
        }, f = {
            add: function() {
                return h && (g && !a && (k = h.length - 1,
                    b.push(g)),
                    function a(e) {
                        cv.each(e, function(i, l) {
                            aT(l) ? c.unique && f.has(l) || h.push(l) : l && l.length && "string" !== cB(l) && a(l)
                        })
                    }(arguments),
                g && !a && p()),
                    this
            },
            remove: function() {
                return cv.each(arguments, function(a, l) {
                    var i;
                    while ((i = cv.inArray(l, h, i)) > -1) {
                        h.splice(i, 1),
                        i <= k && k--
                    }
                }),
                    this
            },
            has: function(a) {
                return a ? cv.inArray(a, h) > -1 : h.length > 0
            },
            empty: function() {
                return h && (h = []),
                    this
            },
            disable: function() {
                return d = b = [],
                    h = g = "",
                    this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return d = b = [],
                g || m || (h = g = ""),
                    this
            },
            locked: function() {
                return !!d
            },
            fireWith: function(a, i) {
                return d || (i = [a, (i = i || []).slice ? i.slice() : i],
                    b.push(i),
                m || p()),
                    this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!j
            }
        };
        return f
    }
    ;
    function a6(a) {
        return a
    }
    function cw(a) {
        throw a
    }
    function aa(a, f, c, d) {
        var b;
        try {
            a && aT(b = a.promise) ? b.call(a).done(f).fail(c) : a && aT(b = a.then) ? b.call(a, f, c) : f.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    cv.extend({
        Deferred: function(e) {
            var b = [["notify", "progress", cv.Callbacks("memory"), cv.Callbacks("memory"), 2], ["resolve", "done", cv.Callbacks("once memory"), cv.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", cv.Callbacks("once memory"), cv.Callbacks("once memory"), 1, "rejected"]]
                , d = "pending"
                , a = {
                state: function() {
                    return d
                },
                always: function() {
                    return c.done(arguments).fail(arguments),
                        this
                },
                "catch": function(f) {
                    return a.then(null, f)
                },
                pipe: function() {
                    var f = arguments;
                    return cv.Deferred(function(g) {
                        cv.each(b, function(j, k) {
                            var h = aT(f[k[4]]) && f[k[4]];
                            c[k[1]](function() {
                                var i = h && h.apply(this, arguments);
                                i && aT(i.promise) ? i.promise().progress(g.notify).done(g.resolve).fail(g.reject) : g[k[0] + "With"](this, h ? [i] : arguments)
                            })
                        }),
                            f = null
                    }).promise()
                },
                then: function(k, j, g) {
                    var h = 0;
                    function f(p, m, o, l) {
                        return function() {
                            var q = this
                                , r = arguments
                                , n = function() {
                                    var s, t;
                                    if (!(p < h)) {
                                        if ((s = o.apply(q, r)) === m.promise()) {
                                            throw new TypeError("Thenable self-resolution")
                                        }
                                        t = s && ("object" == typeof s || "function" == typeof s) && s.then,
                                            aT(t) ? l ? t.call(s, f(h, m, a6, l), f(h, m, cw, l)) : (h++,
                                                t.call(s, f(h, m, a6, l), f(h, m, cw, l), f(h, m, a6, m.notifyWith))) : (o !== a6 && (q = void 0,
                                                r = [s]),
                                                (l || m.resolveWith)(q, r))
                                    }
                                }
                                , i = l ? n : function() {
                                    try {
                                        n()
                                    } catch (s) {
                                        cv.Deferred.exceptionHook && cv.Deferred.exceptionHook(s, i.stackTrace),
                                        p + 1 >= h && (o !== cw && (q = void 0,
                                            r = [s]),
                                            m.rejectWith(q, r))
                                    }
                                }
                            ;
                            p ? i() : (cv.Deferred.getStackHook && (i.stackTrace = cv.Deferred.getStackHook()),
                                aH.setTimeout(i))
                        }
                    }
                    return cv.Deferred(function(i) {
                        b[0][3].add(f(0, i, aT(g) ? g : a6, i.notifyWith)),
                            b[1][3].add(f(0, i, aT(k) ? k : a6)),
                            b[2][3].add(f(0, i, aT(j) ? j : cw))
                    }).promise()
                },
                promise: function(f) {
                    return null != f ? cv.extend(f, a) : a
                }
            }
                , c = {};
            return cv.each(b, function(g, i) {
                var f = i[2]
                    , h = i[5];
                a[i[1]] = f.add,
                h && f.add(function() {
                    d = h
                }, b[3 - g][2].disable, b[3 - g][3].disable, b[0][2].lock, b[0][3].lock),
                    f.add(i[3].fire),
                    c[i[0]] = function() {
                        return c[i[0] + "With"](this === c ? void 0 : this, arguments),
                            this
                    }
                    ,
                    c[i[0] + "With"] = f.fireWith
            }),
                a.promise(c),
            e && e.call(c, c),
                c
        },
        when: function(c) {
            var j = arguments.length
                , f = j
                , g = Array(f)
                , d = bH.call(arguments)
                , b = cv.Deferred()
                , h = function(a) {
                return function(e) {
                    g[a] = this,
                        d[a] = arguments.length > 1 ? bH.call(arguments) : e,
                    --j || b.resolveWith(g, d)
                }
            };
            if (j <= 1 && (aa(c, b.done(h(f)).resolve, b.reject, !j),
            "pending" === b.state() || aT(d[f] && d[f].then))) {
                return b.then()
            }
            while (f--) {
                aa(d[f], h(f), b.reject)
            }
            return b.promise()
        }
    });
    var ao = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    cv.Deferred.exceptionHook = function(b, a) {
        aH.console && aH.console.warn && b && ao.test(b.name) && aH.console.warn("jQuery.Deferred exception: " + b.message, b.stack, a)
    }
        ,
        cv.readyException = function(a) {
            aH.setTimeout(function() {
                throw a
            })
        }
    ;
    var aO = cv.Deferred();
    cv.fn.ready = function(a) {
        return aO.then(a)["catch"](function(b) {
            cv.readyException(b)
        }),
            this
    }
        ,
        cv.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(a) {
                (!0 === a ? --cv.readyWait : cv.isReady) || (cv.isReady = !0,
                !0 !== a && --cv.readyWait > 0 || aO.resolveWith(bZ, [cv]))
            }
        }),
        cv.ready.then = aO.then;
    function ad() {
        bZ.removeEventListener("DOMContentLoaded", ad),
            aH.removeEventListener("load", ad),
            cv.ready()
    }
    "complete" === bZ.readyState || "loading" !== bZ.readyState && !bZ.documentElement.doScroll ? aH.setTimeout(cv.ready) : (bZ.addEventListener("DOMContentLoaded", ad),
        aH.addEventListener("load", ad));
    var cN = function(c, m, g, j, d, h, b) {
        var k = 0
            , p = c.length
            , f = null == g;
        if ("object" === cB(g)) {
            d = !0;
            for (k in g) {
                cN(c, m, k, g[k], !0, h, b)
            }
        } else {
            if (void 0 !== j && (d = !0,
            aT(j) || (b = !0),
            f && (b ? (m.call(c, j),
                m = null) : (f = m,
                    m = function(a, l, i) {
                        return f.call(cv(a), i)
                    }
            )),
                m)) {
                for (; k < p; k++) {
                    m(c[k], g, b ? j : j.call(c[k], k, m(c[k], g)))
                }
            }
        }
        return d ? c : f ? m.call(c) : p ? m(c[0], g) : h
    }
        , cC = /^-ms-/
        , cj = /-([a-z])/g;
    function cp(a, b) {
        return b.toUpperCase()
    }
    function aU(a) {
        return a.replace(cC, "ms-").replace(cj, cp)
    }
    var cI = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function bU() {
        this.expando = cv.expando + bU.uid++
    }
    bU.uid = 1,
        bU.prototype = {
            cache: function(a) {
                var b = a[this.expando];
                return b || (b = {},
                cI(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))),
                    b
            },
            set: function(a, f, c) {
                var d, b = this.cache(a);
                if ("string" == typeof f) {
                    b[aU(f)] = c
                } else {
                    for (d in f) {
                        b[aU(d)] = f[d]
                    }
                }
                return b
            },
            get: function(a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][aU(b)]
            },
            access: function(a, c, b) {
                return void 0 === c || c && "string" == typeof c && void 0 === b ? this.get(a, c) : (this.set(a, c, b),
                    void 0 !== b ? b : c)
            },
            remove: function(a, d) {
                var b, c = a[this.expando];
                if (void 0 !== c) {
                    if (void 0 !== d) {
                        b = (d = Array.isArray(d) ? d.map(aU) : (d = aU(d))in c ? [d] : d.match(bw) || []).length;
                        while (b--) {
                            delete c[d[b]]
                        }
                    }
                    (void 0 === d || cv.isEmptyObject(c)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function(a) {
                var b = a[this.expando];
                return void 0 !== b && !cv.isEmptyObject(b)
            }
        };
    var bc = new bU
        , bj = new bU
        , cO = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , aJ = /[A-Z]/g;
    function cd(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : cO.test(a) ? JSON.parse(a) : a)
    }
    function bD(a, d, b) {
        var c;
        if (void 0 === b && 1 === a.nodeType) {
            if (c = "data-" + d.replace(aJ, "-$&").toLowerCase(),
            "string" == typeof (b = a.getAttribute(c))) {
                try {
                    b = cd(b)
                } catch (a) {}
                bj.set(a, d, b)
            } else {
                b = void 0
            }
        }
        return b
    }
    cv.extend({
        hasData: function(a) {
            return bj.hasData(a) || bc.hasData(a)
        },
        data: function(a, c, b) {
            return bj.access(a, c, b)
        },
        removeData: function(a, b) {
            bj.remove(a, b)
        },
        _data: function(a, c, b) {
            return bc.access(a, c, b)
        },
        _removeData: function(a, b) {
            bc.remove(a, b)
        }
    }),
        cv.fn.extend({
            data: function(c, j) {
                var f, h, d, g = this[0], b = g && g.attributes;
                if (void 0 === c) {
                    if (this.length && (d = bj.get(g),
                    1 === g.nodeType && !bc.get(g, "hasDataAttrs"))) {
                        f = b.length;
                        while (f--) {
                            b[f] && 0 === (h = b[f].name).indexOf("data-") && (h = aU(h.slice(5)),
                                bD(g, h, d[h]))
                        }
                        bc.set(g, "hasDataAttrs", !0)
                    }
                    return d
                }
                return "object" == typeof c ? this.each(function() {
                    bj.set(this, c)
                }) : cN(this, function(e) {
                    var a;
                    if (g && void 0 === e) {
                        if (void 0 !== (a = bj.get(g, c))) {
                            return a
                        }
                        if (void 0 !== (a = bD(g, c))) {
                            return a
                        }
                    } else {
                        this.each(function() {
                            bj.set(this, c, e)
                        })
                    }
                }, null, j, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    bj.remove(this, a)
                })
            }
        }),
        cv.extend({
            queue: function(a, d, b) {
                var c;
                if (a) {
                    return d = (d || "fx") + "queue",
                        c = bc.get(a, d),
                    b && (!c || Array.isArray(b) ? c = bc.access(a, d, cv.makeArray(b)) : c.push(b)),
                    c || []
                }
            },
            dequeue: function(c, j) {
                j = j || "fx";
                var f = cv.queue(c, j)
                    , h = f.length
                    , d = f.shift()
                    , g = cv._queueHooks(c, j)
                    , b = function() {
                    cv.dequeue(c, j)
                };
                "inprogress" === d && (d = f.shift(),
                    h--),
                d && ("fx" === j && f.unshift("inprogress"),
                    delete g.stop,
                    d.call(c, b, g)),
                !h && g && g.empty.fire()
            },
            _queueHooks: function(a, c) {
                var b = c + "queueHooks";
                return bc.get(a, b) || bc.access(a, b, {
                    empty: cv.Callbacks("once memory").add(function() {
                        bc.remove(a, [c + "queue", b])
                    })
                })
            }
        }),
        cv.fn.extend({
            queue: function(a, c) {
                var b = 2;
                return "string" != typeof a && (c = a,
                    a = "fx",
                    b--),
                    arguments.length < b ? cv.queue(this[0], a) : void 0 === c ? this : this.each(function() {
                        var d = cv.queue(this, a, c);
                        cv._queueHooks(this, a),
                        "fx" === a && "inprogress" !== d[0] && cv.dequeue(this, a)
                    })
            },
            dequeue: function(a) {
                return this.each(function() {
                    cv.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(c, k) {
                var f, h = 1, d = cv.Deferred(), g = this, b = this.length, j = function() {
                    --h || d.resolveWith(g, [g])
                };
                "string" != typeof c && (k = c,
                    c = void 0),
                    c = c || "fx";
                while (b--) {
                    (f = bc.get(g[b], c + "queueHooks")) && f.empty && (h++,
                        f.empty.add(j))
                }
                return j(),
                    d.promise(k)
            }
        });
    var b1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , a7 = new RegExp("^(?:([+-])=|)(" + b1 + ")([a-z%]*)$","i")
        , bJ = ["Top", "Right", "Bottom", "Left"]
        , aj = function(a, b) {
        return "none" === (a = b || a).style.display || "" === a.style.display && cv.contains(a.ownerDocument, a) && "none" === cv.css(a, "display")
    }
        , b7 = function(c, j, f, h) {
        var d, g, b = {};
        for (g in j) {
            b[g] = c.style[g],
                c.style[g] = j[g]
        }
        d = f.apply(c, h || []);
        for (g in j) {
            c.style[g] = b[g]
        }
        return d
    };
    function ck(f, q, j, m) {
        var g, k, b = 20, p = m ? function() {
                return m.cur()
            }
            : function() {
                return cv.css(f, q, "")
            }
            , v = p(), h = j && j[3] || (cv.cssNumber[q] ? "" : "px"), d = (cv.cssNumber[q] || "px" !== h && +v) && a7.exec(cv.css(f, q));
        if (d && d[3] !== h) {
            v /= 2,
                h = h || d[3],
                d = +v || 1;
            while (b--) {
                cv.style(f, q, d + h),
                (1 - k) * (1 - (k = p() / v || 0.5)) <= 0 && (b = 0),
                    d /= k
            }
            d *= 2,
                cv.style(f, q, d + h),
                j = j || []
        }
        return j && (d = +d || +v || 0,
            g = j[1] ? d + (j[1] + 1) * j[2] : +j[2],
        m && (m.unit = h,
            m.start = d,
            m.end = g)),
            g
    }
    var bq = {};
    function ax(a) {
        var f, c = a.ownerDocument, d = a.nodeName, b = bq[d];
        return b || (f = c.body.appendChild(c.createElement(d)),
            b = cv.css(f, "display"),
            f.parentNode.removeChild(f),
        "none" === b && (b = "block"),
            bq[d] = b,
            b)
    }
    function aP(c, j) {
        for (var f, h, d = [], g = 0, b = c.length; g < b; g++) {
            (h = c[g]).style && (f = h.style.display,
                j ? ("none" === f && (d[g] = bc.get(h, "display") || null,
                d[g] || (h.style.display = "")),
                "" === h.style.display && aj(h) && (d[g] = ax(h))) : "none" !== f && (d[g] = "none",
                    bc.set(h, "display", f)))
        }
        for (g = 0; g < b; g++) {
            null != d[g] && (c[g].style.display = d[g])
        }
        return c
    }
    cv.fn.extend({
        show: function() {
            return aP(this, !0)
        },
        hide: function() {
            return aP(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                aj(this) ? cv(this).show() : cv(this).hide()
            })
        }
    });
    var bP = /^(?:checkbox|radio)$/i
        , aD = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        , a1 = /^$|^module$|\/(?:java|ecma)script/i
        , aV = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    aV.optgroup = aV.option,
        aV.tbody = aV.tfoot = aV.colgroup = aV.caption = aV.thead,
        aV.th = aV.td;
    function cJ(a, c) {
        var b;
        return b = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(c || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(c || "*") : [],
            void 0 === c || c && bC(a, c) ? cv.merge([a], b) : b
    }
    function cq(a, d) {
        for (var b = 0, c = a.length; b < c; b++) {
            bc.set(a[b], "globalEval", !d || bc.get(d[b], "globalEval"))
        }
    }
    var bx = /<|&#?\w+;/;
    function cD(k, C, x, A, v) {
        for (var y, b, B, D, w, g, m = C.createDocumentFragment(), z = [], j = 0, q = k.length; j < q; j++) {
            if ((y = k[j]) || 0 === y) {
                if ("object" === cB(y)) {
                    cv.merge(z, y.nodeType ? [y] : y)
                } else {
                    if (bx.test(y)) {
                        b = b || m.appendChild(C.createElement("div")),
                            B = (aD.exec(y) || ["", ""])[1].toLowerCase(),
                            D = aV[B] || aV._default,
                            b.innerHTML = D[1] + cv.htmlPrefilter(y) + D[2],
                            g = D[0];
                        while (g--) {
                            b = b.lastChild
                        }
                        cv.merge(z, b.childNodes),
                            (b = m.firstChild).textContent = ""
                    } else {
                        z.push(C.createTextNode(y))
                    }
                }
            }
        }
        m.textContent = "",
            j = 0;
        while (y = z[j++]) {
            if (A && cv.inArray(y, A) > -1) {
                v && v.push(y)
            } else {
                if (w = cv.contains(y.ownerDocument, y),
                    b = cJ(m.appendChild(y), "script"),
                w && cq(b),
                    x) {
                    g = 0;
                    while (y = b[g++]) {
                        a1.test(y.type || "") && x.push(y)
                    }
                }
            }
        }
        return m
    }
    !function() {
        var a = bZ.createDocumentFragment().appendChild(bZ.createElement("div"))
            , b = bZ.createElement("input");
        b.setAttribute("type", "radio"),
            b.setAttribute("checked", "checked"),
            b.setAttribute("name", "t"),
            a.appendChild(b),
            aZ.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
            a.innerHTML = "<textarea>x</textarea>",
            aZ.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }();
    var ap = bZ.documentElement
        , cx = /^key/
        , cf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , ay = /^([^.]*)(?:\.(.+)|)/;
    function aK() {
        return !0
    }
    function bk() {
        return !1
    }
    function b8() {
        try {
            return bZ.activeElement
        } catch (a) {}
    }
    function aE(c, k, f, h, d, g) {
        var b, j;
        if ("object" == typeof k) {
            "string" != typeof f && (h = h || f,
                f = void 0);
            for (j in k) {
                aE(c, j, f, h, k[j], g)
            }
            return c
        }
        if (null == h && null == d ? (d = f,
            h = f = void 0) : null == d && ("string" == typeof f ? (d = h,
            h = void 0) : (d = h,
            h = f,
            f = void 0)),
        !1 === d) {
            d = bk
        } else {
            if (!d) {
                return c
            }
        }
        return 1 === g && (b = d,
            (d = function(a) {
                    return cv().off(a),
                        b.apply(this, arguments)
                }
            ).guid = b.guid || (b.guid = cv.guid++)),
            c.each(function() {
                cv.event.add(this, k, d, h, f)
            })
    }
    cv.event = {
        global: {},
        add: function(m, F, A, D, x) {
            var B, b, E, G, z, j, q, C, k, w, v, H = bc.get(m);
            if (H) {
                A.handler && (A = (B = A).handler,
                    x = B.selector),
                x && cv.find.matchesSelector(ap, x),
                A.guid || (A.guid = cv.guid++),
                (G = H.events) || (G = H.events = {}),
                (b = H.handle) || (b = H.handle = function(a) {
                        return "undefined" != typeof cv && cv.event.triggered !== a.type ? cv.event.dispatch.apply(m, arguments) : void 0
                    }
                ),
                    z = (F = (F || "").match(bw) || [""]).length;
                while (z--) {
                    k = v = (E = ay.exec(F[z]) || [])[1],
                        w = (E[2] || "").split(".").sort(),
                    k && (q = cv.event.special[k] || {},
                        k = (x ? q.delegateType : q.bindType) || k,
                        q = cv.event.special[k] || {},
                        j = cv.extend({
                            type: k,
                            origType: v,
                            data: D,
                            handler: A,
                            guid: A.guid,
                            selector: x,
                            needsContext: x && cv.expr.match.needsContext.test(x),
                            namespace: w.join(".")
                        }, B),
                    (C = G[k]) || ((C = G[k] = []).delegateCount = 0,
                    q.setup && !1 !== q.setup.call(m, D, w, b) || m.addEventListener && m.addEventListener(k, b)),
                    q.add && (q.add.call(m, j),
                    j.handler.guid || (j.handler.guid = A.guid)),
                        x ? C.splice(C.delegateCount++, 0, j) : C.push(j),
                        cv.event.global[k] = !0)
                }
            }
        },
        remove: function(m, F, A, D, x) {
            var B, b, E, G, z, j, q, C, k, w, v, H = bc.hasData(m) && bc.get(m);
            if (H && (G = H.events)) {
                z = (F = (F || "").match(bw) || [""]).length;
                while (z--) {
                    if (E = ay.exec(F[z]) || [],
                        k = v = E[1],
                        w = (E[2] || "").split(".").sort(),
                        k) {
                        q = cv.event.special[k] || {},
                            C = G[k = (D ? q.delegateType : q.bindType) || k] || [],
                            E = E[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            b = B = C.length;
                        while (B--) {
                            j = C[B],
                            !x && v !== j.origType || A && A.guid !== j.guid || E && !E.test(j.namespace) || D && D !== j.selector && ("**" !== D || !j.selector) || (C.splice(B, 1),
                            j.selector && C.delegateCount--,
                            q.remove && q.remove.call(m, j))
                        }
                        b && !C.length && (q.teardown && !1 !== q.teardown.call(m, w, H.handle) || cv.removeEvent(m, k, H.handle),
                            delete G[k])
                    } else {
                        for (k in G) {
                            cv.event.remove(m, k + F[z], A, D, !0)
                        }
                    }
                }
                cv.isEmptyObject(G) && bc.remove(m, "handle events")
            }
        },
        dispatch: function(f) {
            var q = cv.event.fix(f), j, m, g, k, b, p, v = new Array(arguments.length), h = (bc.get(this, "events") || {})[q.type] || [], d = cv.event.special[q.type] || {};
            for (v[0] = q,
                     j = 1; j < arguments.length; j++) {
                v[j] = arguments[j]
            }
            if (q.delegateTarget = this,
            !d.preDispatch || !1 !== d.preDispatch.call(this, q)) {
                p = cv.event.handlers.call(this, q, h),
                    j = 0;
                while ((k = p[j++]) && !q.isPropagationStopped()) {
                    q.currentTarget = k.elem,
                        m = 0;
                    while ((b = k.handlers[m++]) && !q.isImmediatePropagationStopped()) {
                        q.rnamespace && !q.rnamespace.test(b.namespace) || (q.handleObj = b,
                            q.data = b.data,
                        void 0 !== (g = ((cv.event.special[b.origType] || {}).handle || b.handler).apply(k.elem, v)) && !1 === (q.result = g) && (q.preventDefault(),
                            q.stopPropagation()))
                    }
                }
                return d.postDispatch && d.postDispatch.call(this, q),
                    q.result
            }
        },
        handlers: function(c, m) {
            var g, j, d, h, b, k = [], p = m.delegateCount, f = c.target;
            if (p && f.nodeType && !("click" === c.type && c.button >= 1)) {
                for (; f !== this; f = f.parentNode || this) {
                    if (1 === f.nodeType && ("click" !== c.type || !0 !== f.disabled)) {
                        for (h = [],
                                 b = {},
                                 g = 0; g < p; g++) {
                            void 0 === b[d = (j = m[g]).selector + " "] && (b[d] = j.needsContext ? cv(d, this).index(f) > -1 : cv.find(d, this, null, [f]).length),
                            b[d] && h.push(j)
                        }
                        h.length && k.push({
                            elem: f,
                            handlers: h
                        })
                    }
                }
            }
            return f = this,
            p < m.length && k.push({
                elem: f,
                handlers: m.slice(p)
            }),
                k
        },
        addProp: function(a, b) {
            Object.defineProperty(cv.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: aT(b) ? function() {
                        if (this.originalEvent) {
                            return b(this.originalEvent)
                        }
                    }
                    : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[a]
                        }
                    }
                ,
                set: function(c) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: c
                    })
                }
            })
        },
        fix: function(a) {
            return a[cv.expando] ? a : new cv.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b8() && this.focus) {
                        return this.focus(),
                            !1
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === b8() && this.blur) {
                        return this.blur(),
                            !1
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && bC(this, "input")) {
                        return this.click(),
                            !1
                    }
                },
                _default: function(a) {
                    return bC(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
        cv.removeEvent = function(a, c, b) {
            a.removeEventListener && a.removeEventListener(c, b)
        }
        ,
        cv.Event = function(a, b) {
            if (!(this instanceof cv.Event)) {
                return new cv.Event(a,b)
            }
            a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? aK : bk,
                this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target,
                this.currentTarget = a.currentTarget,
                this.relatedTarget = a.relatedTarget) : this.type = a,
            b && cv.extend(this, b),
                this.timeStamp = a && a.timeStamp || Date.now(),
                this[cv.expando] = !0
        }
        ,
        cv.Event.prototype = {
            constructor: cv.Event,
            isDefaultPrevented: bk,
            isPropagationStopped: bk,
            isImmediatePropagationStopped: bk,
            isSimulated: !1,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = aK,
                a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = aK,
                a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = aK,
                a && !this.isSimulated && a.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        cv.each({
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
            "char": !0,
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
            which: function(a) {
                var b = a.button;
                return null == a.which && cx.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && cf.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, cv.event.addProp),
        cv.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            cv.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(c) {
                    var f, h = this, d = c.relatedTarget, g = c.handleObj;
                    return d && (d === h || cv.contains(h, d)) || (c.type = g.origType,
                        f = g.handler.apply(this, arguments),
                        c.type = b),
                        f
                }
            }
        }),
        cv.fn.extend({
            on: function(a, d, b, c) {
                return aE(this, a, d, b, c)
            },
            one: function(a, d, b, c) {
                return aE(this, a, d, b, c, 1)
            },
            off: function(a, f, c) {
                var d, b;
                if (a && a.preventDefault && a.handleObj) {
                    return d = a.handleObj,
                        cv(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                        this
                }
                if ("object" == typeof a) {
                    for (b in a) {
                        this.off(b, f, a[b])
                    }
                    return this
                }
                return !1 !== f && "function" != typeof f || (c = f,
                    f = void 0),
                !1 === c && (c = bk),
                    this.each(function() {
                        cv.event.remove(this, a, c, f)
                    })
            }
        });
    var bE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , ak = /<script|<style|<link/i
        , bd = /checked\s*(?:[^=]|=\s*.checked.)/i
        , bV = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function br(a, b) {
        return bC(a, "table") && bC(11 !== b.nodeType ? b : b.firstChild, "tr") ? cv(a).children("tbody")[0] || a : a
    }
    function a2(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
            a
    }
    function bK(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"),
            a
    }
    function bQ(c, m) {
        var g, j, d, h, b, k, p, f;
        if (1 === m.nodeType) {
            if (bc.hasData(c) && (h = bc.access(c),
                b = bc.set(m, h),
                f = h.events)) {
                delete b.handle,
                    b.events = {};
                for (d in f) {
                    for (g = 0,
                             j = f[d].length; g < j; g++) {
                        cv.event.add(m, d, f[d][g])
                    }
                }
            }
            bj.hasData(c) && (k = bj.access(c),
                p = cv.extend({}, k),
                bj.set(m, p))
        }
    }
    function by(a, c) {
        var b = c.nodeName.toLowerCase();
        "input" === b && bP.test(a.type) ? c.checked = a.checked : "input" !== b && "textarea" !== b || (c.defaultValue = a.defaultValue)
    }
    function b2(g, A, m, x) {
        A = ah.apply([], A);
        var j, q, z, B, k, a, h = 0, w = g.length, b = w - 1, D = A[0], C = aT(D);
        if (C || w > 1 && "string" == typeof D && !aZ.checkClone && bd.test(D)) {
            return g.each(function(c) {
                var d = g.eq(c);
                C && (A[0] = D.call(this, c, d.html())),
                    b2(d, A, m, x)
            })
        }
        if (w && (j = cD(A, g[0].ownerDocument, !1, g, x),
            q = j.firstChild,
        1 === j.childNodes.length && (j = q),
        q || x)) {
            for (B = (z = cv.map(cJ(j, "script"), a2)).length; h < w; h++) {
                k = j,
                h !== b && (k = cv.clone(k, !0, !0),
                B && cv.merge(z, cJ(k, "script"))),
                    m.call(g[h], k, h)
            }
            if (B) {
                for (a = z[z.length - 1].ownerDocument,
                         cv.map(z, bK),
                         h = 0; h < B; h++) {
                    k = z[h],
                    a1.test(k.type || "") && !bc.access(k, "globalEval") && cv.contains(a, k) && (k.src && "module" !== (k.type || "").toLowerCase() ? cv._evalUrl && cv._evalUrl(k.src) : bv(k.textContent.replace(bV, ""), a, k))
                }
            }
        }
        return g
    }
    function a8(a, g, c) {
        for (var f, b = g ? cv.filter(g, a) : a, d = 0; null != (f = b[d]); d++) {
            c || 1 !== f.nodeType || cv.cleanData(cJ(f)),
            f.parentNode && (c && cv.contains(f.ownerDocument, f) && cq(cJ(f, "script")),
                f.parentNode.removeChild(f))
        }
        return a
    }
    cv.extend({
        htmlPrefilter: function(a) {
            return a.replace(bE, "<$1></$2>")
        },
        clone: function(c, k, f) {
            var h, d, g, b, j = c.cloneNode(!0), l = cv.contains(c.ownerDocument, c);
            if (!(aZ.noCloneChecked || 1 !== c.nodeType && 11 !== c.nodeType || cv.isXMLDoc(c))) {
                for (b = cJ(j),
                         h = 0,
                         d = (g = cJ(c)).length; h < d; h++) {
                    by(g[h], b[h])
                }
            }
            if (k) {
                if (f) {
                    for (g = g || cJ(c),
                             b = b || cJ(j),
                             h = 0,
                             d = g.length; h < d; h++) {
                        bQ(g[h], b[h])
                    }
                } else {
                    bQ(c, j)
                }
            }
            return (b = cJ(j, "script")).length > 0 && cq(b, !l && cJ(c, "script")),
                j
        },
        cleanData: function(a) {
            for (var g, c, f, b = cv.event.special, d = 0; void 0 !== (c = a[d]); d++) {
                if (cI(c)) {
                    if (g = c[bc.expando]) {
                        if (g.events) {
                            for (f in g.events) {
                                b[f] ? cv.event.remove(c, f) : cv.removeEvent(c, f, g.handle)
                            }
                        }
                        c[bc.expando] = void 0
                    }
                    c[bj.expando] && (c[bj.expando] = void 0)
                }
            }
        }
    }),
        cv.fn.extend({
            detach: function(a) {
                return a8(this, a, !0)
            },
            remove: function(a) {
                return a8(this, a)
            },
            text: function(a) {
                return cN(this, function(b) {
                    return void 0 === b ? cv.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return b2(this, arguments, function(a) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || br(this, a).appendChild(a)
                })
            },
            prepend: function() {
                return b2(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = br(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return b2(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return b2(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && (cv.cleanData(cJ(a, !1)),
                        a.textContent = "")
                }
                return this
            },
            clone: function(a, b) {
                return a = null != a && a,
                    b = null == b ? a : b,
                    this.map(function() {
                        return cv.clone(this, a, b)
                    })
            },
            html: function(a) {
                return cN(this, function(b) {
                    var f = this[0] || {}
                        , c = 0
                        , d = this.length;
                    if (void 0 === b && 1 === f.nodeType) {
                        return f.innerHTML
                    }
                    if ("string" == typeof b && !ak.test(b) && !aV[(aD.exec(b) || ["", ""])[1].toLowerCase()]) {
                        b = cv.htmlPrefilter(b);
                        try {
                            for (; c < d; c++) {
                                1 === (f = this[c] || {}).nodeType && (cv.cleanData(cJ(f, !1)),
                                    f.innerHTML = b)
                            }
                            f = 0
                        } catch (b) {}
                    }
                    f && this.empty().append(b)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return b2(this, arguments, function(c) {
                    var b = this.parentNode;
                    cv.inArray(this, a) < 0 && (cv.cleanData(cJ(this)),
                    b && b.replaceChild(c, this))
                }, a)
            }
        }),
        cv.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            cv.fn[a] = function(d) {
                for (var g, j = [], f = cv(d), h = f.length - 1, c = 0; c <= h; c++) {
                    g = c === h ? this : this.clone(!0),
                        cv(f[c])[b](g),
                        b5.apply(j, g.get())
                }
                return this.pushStack(j)
            }
        });
    var cy = new RegExp("^(" + b1 + ")(?!px)[a-z%]+$","i")
        , ab = function(b) {
        var a = b.ownerDocument.defaultView;
        return a && a.opener || (a = aH),
            a.getComputedStyle(b)
    }
        , aq = new RegExp(bJ.join("|"),"i");
    !function() {
        function k() {
            if (d) {
                f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ap.appendChild(f).appendChild(d);
                var a = aH.getComputedStyle(d);
                e = "1%" !== a.top,
                    m = 12 === g(a.marginLeft),
                    d.style.right = "60%",
                    j = 36 === g(a.right),
                    h = 36 === g(a.width),
                    d.style.position = "absolute",
                    b = 36 === d.offsetWidth || "absolute",
                    ap.removeChild(f),
                    d = null
            }
        }
        function g(a) {
            return Math.round(parseFloat(a))
        }
        var e, h, b, j, m, f = bZ.createElement("div"), d = bZ.createElement("div");
        d.style && (d.style.backgroundClip = "content-box",
            d.cloneNode(!0).style.backgroundClip = "",
            aZ.clearCloneStyle = "content-box" === d.style.backgroundClip,
            cv.extend(aZ, {
                boxSizingReliable: function() {
                    return k(),
                        h
                },
                pixelBoxStyles: function() {
                    return k(),
                        j
                },
                pixelPosition: function() {
                    return k(),
                        e
                },
                reliableMarginLeft: function() {
                    return k(),
                        m
                },
                scrollboxSize: function() {
                    return k(),
                        b
                }
            }))
    }();
    function aQ(c, k, f) {
        var h, d, g, b, j = c.style;
        return (f = f || ab(c)) && ("" !== (b = f.getPropertyValue(k) || f[k]) || cv.contains(c.ownerDocument, c) || (b = cv.style(c, k)),
        !aZ.pixelBoxStyles() && cy.test(b) && aq.test(k) && (h = j.width,
            d = j.minWidth,
            g = j.maxWidth,
            j.minWidth = j.maxWidth = j.width = b,
            b = f.width,
            j.width = h,
            j.minWidth = d,
            j.maxWidth = g)),
            void 0 !== b ? b + "" : b
    }
    function af(a, b) {
        return {
            get: function() {
                if (!a()) {
                    return (this.get = b).apply(this, arguments)
                }
                delete this.get
            }
        }
    }
    var cP = /^(none|table(?!-c[ea]).+)/
        , cE = /^--/
        , cl = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , cr = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , aW = ["Webkit", "Moz", "ms"]
        , cK = bZ.createElement("div").style;
    function bW(a) {
        if (a in cK) {
            return a
        }
        var c = a[0].toUpperCase() + a.slice(1)
            , b = aW.length;
        while (b--) {
            if ((a = aW[b] + c)in cK) {
                return a
            }
        }
    }
    function bf(a) {
        var b = cv.cssProps[a];
        return b || (b = cv.cssProps[a] = bW(a) || a),
            b
    }
    function bl(a, d, b) {
        var c = a7.exec(d);
        return c ? Math.max(0, c[2] - (b || 0)) + (c[3] || "px") : d
    }
    function cQ(c, k, f, h, d, g) {
        var b = "width" === k ? 1 : 0
            , j = 0
            , l = 0;
        if (f === (h ? "border" : "content")) {
            return 0
        }
        for (; b < 4; b += 2) {
            "margin" === f && (l += cv.css(c, f + bJ[b], !0, d)),
                h ? ("content" === f && (l -= cv.css(c, "padding" + bJ[b], !0, d)),
                "margin" !== f && (l -= cv.css(c, "border" + bJ[b] + "Width", !0, d))) : (l += cv.css(c, "padding" + bJ[b], !0, d),
                    "padding" !== f ? l += cv.css(c, "border" + bJ[b] + "Width", !0, d) : j += cv.css(c, "border" + bJ[b] + "Width", !0, d))
        }
        return !h && g >= 0 && (l += Math.max(0, Math.ceil(c["offset" + k[0].toUpperCase() + k.slice(1)] - g - l - j - 0.5))),
            l
    }
    function aL(c, j, f) {
        var h = ab(c)
            , d = aQ(c, j, h)
            , g = "border-box" === cv.css(c, "boxSizing", !1, h)
            , b = g;
        if (cy.test(d)) {
            if (!f) {
                return d
            }
            d = "auto"
        }
        return b = b && (aZ.boxSizingReliable() || d === c.style[j]),
        ("auto" === d || !parseFloat(d) && "inline" === cv.css(c, "display", !1, h)) && (d = c["offset" + j[0].toUpperCase() + j.slice(1)],
            b = !0),
        (d = parseFloat(d) || 0) + cQ(c, j, f || (g ? "border" : "content"), b, h, d) + "px"
    }
    cv.extend({
        cssHooks: {
            opacity: {
                get: function(a, c) {
                    if (c) {
                        var b = aQ(a, "opacity");
                        return "" === b ? "1" : b
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(c, m, g, j) {
            if (c && 3 !== c.nodeType && 8 !== c.nodeType && c.style) {
                var d, h, b, k = aU(m), p = cE.test(m), f = c.style;
                if (p || (m = bf(k)),
                    b = cv.cssHooks[m] || cv.cssHooks[k],
                void 0 === g) {
                    return b && "get"in b && void 0 !== (d = b.get(c, !1, j)) ? d : f[m]
                }
                "string" == (h = typeof g) && (d = a7.exec(g)) && d[1] && (g = ck(c, m, d),
                    h = "number"),
                null != g && g === g && ("number" === h && (g += d && d[3] || (cv.cssNumber[k] ? "" : "px")),
                aZ.clearCloneStyle || "" !== g || 0 !== m.indexOf("background") || (f[m] = "inherit"),
                b && "set"in b && void 0 === (g = b.set(c, g, j)) || (p ? f.setProperty(m, g) : f[m] = g))
            }
        },
        css: function(c, k, f, h) {
            var d, g, b, j = aU(k);
            return cE.test(k) || (k = bf(j)),
            (b = cv.cssHooks[k] || cv.cssHooks[j]) && "get"in b && (d = b.get(c, !0, f)),
            void 0 === d && (d = aQ(c, k, h)),
            "normal" === d && k in cr && (d = cr[k]),
                "" === f || f ? (g = parseFloat(d),
                    !0 === f || isFinite(g) ? g || 0 : d) : d
        }
    }),
        cv.each(["height", "width"], function(a, b) {
            cv.cssHooks[b] = {
                get: function(c, d, f) {
                    if (d) {
                        return !cP.test(cv.css(c, "display")) || c.getClientRects().length && c.getBoundingClientRect().width ? aL(c, b, f) : b7(c, cl, function() {
                            return aL(c, b, f)
                        })
                    }
                },
                set: function(d, g, j) {
                    var f, h = ab(d), c = "border-box" === cv.css(d, "boxSizing", !1, h), k = j && cQ(d, b, j, c, h);
                    return c && aZ.scrollboxSize() === h.position && (k -= Math.ceil(d["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(h[b]) - cQ(d, b, "border", !1, h) - 0.5)),
                    k && (f = a7.exec(g)) && "px" !== (f[3] || "px") && (d.style[b] = g,
                        g = cv.css(d, b)),
                        bl(d, g, k)
                }
            }
        }),
        cv.cssHooks.marginLeft = af(aZ.reliableMarginLeft, function(a, b) {
            if (b) {
                return (parseFloat(aQ(a, "marginLeft")) || a.getBoundingClientRect().left - b7(a, {
                    marginLeft: 0
                }, function() {
                    return a.getBoundingClientRect().left
                })) + "px"
            }
        }),
        cv.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            cv.cssHooks[a + b] = {
                expand: function(d) {
                    for (var f = 0, c = {}, e = "string" == typeof d ? d.split(" ") : [d]; f < 4; f++) {
                        c[a + bJ[f] + b] = e[f] || e[f - 2] || e[0]
                    }
                    return c
                }
            },
            "margin" !== a && (cv.cssHooks[a + b].set = bl)
        }),
        cv.fn.extend({
            css: function(a, b) {
                return cN(this, function(d, k, g) {
                    var j, f, h = {}, c = 0;
                    if (Array.isArray(k)) {
                        for (j = ab(d),
                                 f = k.length; c < f; c++) {
                            h[k[c]] = cv.css(d, k[c], !1, j)
                        }
                        return h
                    }
                    return void 0 !== g ? cv.style(d, k, g) : cv.css(d, k)
                }, a, b, arguments.length > 1)
            }
        });
    function cg(a, f, c, d, b) {
        return new cg.prototype.init(a,f,c,d,b)
    }
    cv.Tween = cg,
        cg.prototype = {
            constructor: cg,
            init: function(a, g, c, f, b, d) {
                this.elem = a,
                    this.prop = c,
                    this.easing = b || cv.easing._default,
                    this.options = g,
                    this.start = this.now = this.cur(),
                    this.end = f,
                    this.unit = d || (cv.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = cg.propHooks[this.prop];
                return a && a.get ? a.get(this) : cg.propHooks._default.get(this)
            },
            run: function(a) {
                var c, b = cg.propHooks[this.prop];
                return this.options.duration ? this.pos = c = cv.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = c = a,
                    this.now = (this.end - this.start) * c + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    b && b.set ? b.set(this) : cg.propHooks._default.set(this),
                    this
            }
        },
        cg.prototype.init.prototype = cg.prototype,
        cg.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = cv.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0
                },
                set: function(a) {
                    cv.fx.step[a.prop] ? cv.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[cv.cssProps[a.prop]] && !cv.cssHooks[a.prop] ? a.elem[a.prop] = a.now : cv.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        },
        cg.propHooks.scrollTop = cg.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        cv.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        },
        cv.fx = cg.prototype.init,
        cv.fx.step = {};
    var bF, b3, a9 = /^(?:toggle|show|hide)$/, bL = /queueHooks$/;
    function al() {
        b3 && (!1 === bZ.hidden && aH.requestAnimationFrame ? aH.requestAnimationFrame(al) : aH.setTimeout(al, cv.fx.interval),
            cv.fx.tick())
    }
    function b9() {
        return aH.setTimeout(function() {
            bF = void 0
        }),
            bF = Date.now()
    }
    function cm(a, f) {
        var c, d = 0, b = {
            height: a
        };
        for (f = f ? 1 : 0; d < 4; d += 2 - f) {
            b["margin" + (c = bJ[d])] = b["padding" + c] = a
        }
        return f && (b.opacity = b.width = a),
            b
    }
    function bs(c, j, f) {
        for (var h, d = (bR.tweeners[j] || []).concat(bR.tweeners["*"]), g = 0, b = d.length; g < b; g++) {
            if (h = d[g].call(f, j, c)) {
                return h
            }
        }
    }
    function az(m, F, A) {
        var D, x, B, b, E, G, z, j, q = "width"in F || "height"in F, C = this, k = {}, w = m.style, v = m.nodeType && aj(m), H = bc.get(m, "fxshow");
        A.queue || (null == (b = cv._queueHooks(m, "fx")).unqueued && (b.unqueued = 0,
                E = b.empty.fire,
                b.empty.fire = function() {
                    b.unqueued || E()
                }
        ),
            b.unqueued++,
            C.always(function() {
                C.always(function() {
                    b.unqueued--,
                    cv.queue(m, "fx").length || b.empty.fire()
                })
            }));
        for (D in F) {
            if (x = F[D],
                a9.test(x)) {
                if (delete F[D],
                    B = B || "toggle" === x,
                x === (v ? "hide" : "show")) {
                    if ("show" !== x || !H || void 0 === H[D]) {
                        continue
                    }
                    v = !0
                }
                k[D] = H && H[D] || cv.style(m, D)
            }
        }
        if ((G = !cv.isEmptyObject(F)) || !cv.isEmptyObject(k)) {
            q && 1 === m.nodeType && (A.overflow = [w.overflow, w.overflowX, w.overflowY],
            null == (z = H && H.display) && (z = bc.get(m, "display")),
            "none" === (j = cv.css(m, "display")) && (z ? j = z : (aP([m], !0),
                z = m.style.display || z,
                j = cv.css(m, "display"),
                aP([m]))),
            ("inline" === j || "inline-block" === j && null != z) && "none" === cv.css(m, "float") && (G || (C.done(function() {
                w.display = z
            }),
            null == z && (j = w.display,
                z = "none" === j ? "" : j)),
                w.display = "inline-block")),
            A.overflow && (w.overflow = "hidden",
                C.always(function() {
                    w.overflow = A.overflow[0],
                        w.overflowX = A.overflow[1],
                        w.overflowY = A.overflow[2]
                })),
                G = !1;
            for (D in k) {
                G || (H ? "hidden"in H && (v = H.hidden) : H = bc.access(m, "fxshow", {
                    display: z
                }),
                B && (H.hidden = !v),
                v && aP([m], !0),
                    C.done(function() {
                        v || aP([m]),
                            bc.remove(m, "fxshow");
                        for (D in k) {
                            cv.style(m, D, k[D])
                        }
                    })),
                    G = bs(v ? H[D] : 0, D, C),
                D in H || (H[D] = G.start,
                v && (G.end = G.start,
                    G.start = 0))
            }
        }
    }
    function aR(c, j) {
        var f, h, d, g, b;
        for (f in c) {
            if (h = aU(f),
                d = j[h],
                g = c[f],
            Array.isArray(g) && (d = g[1],
                g = c[f] = g[0]),
            f !== h && (c[h] = g,
                delete c[f]),
            (b = cv.cssHooks[h]) && "expand"in b) {
                g = b.expand(g),
                    delete c[h];
                for (f in g) {
                    f in c || (c[f] = g[f],
                        j[f] = d)
                }
            } else {
                j[h] = d
            }
        }
    }
    function bR(f, q, j) {
        var m, g, k = 0, b = bR.prefilters.length, p = cv.Deferred().always(function() {
            delete v.elem
        }), v = function() {
            if (g) {
                return !1
            }
            for (var s = bF || b9(), e = Math.max(0, h.startTime + h.duration - s), l = 1 - (e / h.duration || 0), i = 0, c = h.tweens.length; i < c; i++) {
                h.tweens[i].run(l)
            }
            return p.notifyWith(f, [h, l, e]),
                l < 1 && c ? e : (c || p.notifyWith(f, [h, 1, 0]),
                    p.resolveWith(f, [h]),
                    !1)
        }, h = p.promise({
            elem: f,
            props: cv.extend({}, q),
            opts: cv.extend(!0, {
                specialEasing: {},
                easing: cv.easing._default
            }, j),
            originalProperties: q,
            originalOptions: j,
            startTime: bF || b9(),
            duration: j.duration,
            tweens: [],
            createTween: function(e, a) {
                var c = cv.Tween(f, h.opts, e, a, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(c),
                    c
            },
            stop: function(e) {
                var a = 0
                    , c = e ? h.tweens.length : 0;
                if (g) {
                    return this
                }
                for (g = !0; a < c; a++) {
                    h.tweens[a].run(1)
                }
                return e ? (p.notifyWith(f, [h, 1, 0]),
                    p.resolveWith(f, [h, e])) : p.rejectWith(f, [h, e]),
                    this
            }
        }), d = h.props;
        for (aR(d, h.opts.specialEasing); k < b; k++) {
            if (m = bR.prefilters[k].call(h, f, d, h.opts)) {
                return aT(m.stop) && (cv._queueHooks(h.elem, h.opts.queue).stop = m.stop.bind(m)),
                    m
            }
        }
        return cv.map(d, bs, h),
        aT(h.opts.start) && h.opts.start.call(f, h),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
            cv.fx.timer(cv.extend(v, {
                elem: f,
                anim: h,
                queue: h.opts.queue
            })),
            h
    }
    cv.Animation = cv.extend(bR, {
        tweeners: {
            "*": [function(a, c) {
                var b = this.createTween(a, c);
                return ck(b.elem, a, a7.exec(c), b),
                    b
            }
            ]
        },
        tweener: function(a, f) {
            aT(a) ? (f = a,
                a = ["*"]) : a = a.match(bw);
            for (var c, d = 0, b = a.length; d < b; d++) {
                c = a[d],
                    bR.tweeners[c] = bR.tweeners[c] || [],
                    bR.tweeners[c].unshift(f)
            }
        },
        prefilters: [az],
        prefilter: function(a, b) {
            b ? bR.prefilters.unshift(a) : bR.prefilters.push(a)
        }
    }),
        cv.speed = function(a, d, b) {
            var c = a && "object" == typeof a ? cv.extend({}, a) : {
                complete: b || !b && d || aT(a) && a,
                duration: a,
                easing: b && d || d && !aT(d) && d
            };
            return cv.fx.off ? c.duration = 0 : "number" != typeof c.duration && (c.duration in cv.fx.speeds ? c.duration = cv.fx.speeds[c.duration] : c.duration = cv.fx.speeds._default),
            null != c.queue && !0 !== c.queue || (c.queue = "fx"),
                c.old = c.complete,
                c.complete = function() {
                    aT(c.old) && c.old.call(this),
                    c.queue && cv.dequeue(this, c.queue)
                }
                ,
                c
        }
        ,
        cv.fn.extend({
            fadeTo: function(a, d, b, c) {
                return this.filter(aj).css("opacity", 0).show().end().animate({
                    opacity: d
                }, a, b, c)
            },
            animate: function(c, j, f, h) {
                var d = cv.isEmptyObject(c)
                    , g = cv.speed(j, f, h)
                    , b = function() {
                    var a = bR(this, cv.extend({}, c), g);
                    (d || bc.get(this, "finish")) && a.stop(!0)
                };
                return b.finish = b,
                    d || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
            },
            stop: function(a, d, b) {
                var c = function(f) {
                    var g = f.stop;
                    delete f.stop,
                        g(b)
                };
                return "string" != typeof a && (b = d,
                    d = a,
                    a = void 0),
                d && !1 !== a && this.queue(a || "fx", []),
                    this.each(function() {
                        var h = !0
                            , f = null != a && a + "queueHooks"
                            , g = cv.timers
                            , e = bc.get(this);
                        if (f) {
                            e[f] && e[f].stop && c(e[f])
                        } else {
                            for (f in e) {
                                e[f] && e[f].stop && bL.test(f) && c(e[f])
                            }
                        }
                        for (f = g.length; f--; ) {
                            g[f].elem !== this || null != a && g[f].queue !== a || (g[f].anim.stop(b),
                                h = !1,
                                g.splice(f, 1))
                        }
                        !h && b || cv.dequeue(this, a)
                    })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"),
                    this.each(function() {
                        var g, d = bc.get(this), f = d[a + "queue"], c = d[a + "queueHooks"], e = cv.timers, b = f ? f.length : 0;
                        for (d.finish = !0,
                                 cv.queue(this, a, []),
                             c && c.stop && c.stop.call(this, !0),
                                 g = e.length; g--; ) {
                            e[g].elem === this && e[g].queue === a && (e[g].anim.stop(!0),
                                e.splice(g, 1))
                        }
                        for (g = 0; g < b; g++) {
                            f[g] && f[g].finish && f[g].finish.call(this)
                        }
                        delete d.finish
                    })
            }
        }),
        cv.each(["toggle", "show", "hide"], function(a, c) {
            var b = cv.fn[c];
            cv.fn[c] = function(d, g, f) {
                return null == d || "boolean" == typeof d ? b.apply(this, arguments) : this.animate(cm(c, !0), d, g, f)
            }
        }),
        cv.each({
            slideDown: cm("show"),
            slideUp: cm("hide"),
            slideToggle: cm("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            cv.fn[a] = function(c, d, f) {
                return this.animate(b, c, d, f)
            }
        }),
        cv.timers = [],
        cv.fx.tick = function() {
            var a, c = 0, b = cv.timers;
            for (bF = Date.now(); c < b.length; c++) {
                (a = b[c])() || b[c] !== a || b.splice(c--, 1)
            }
            b.length || cv.fx.stop(),
                bF = void 0
        }
        ,
        cv.fx.timer = function(a) {
            cv.timers.push(a),
                cv.fx.start()
        }
        ,
        cv.fx.interval = 13,
        cv.fx.start = function() {
            b3 || (b3 = !0,
                al())
        }
        ,
        cv.fx.stop = function() {
            b3 = null
        }
        ,
        cv.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        cv.fn.delay = function(b, a) {
            return b = cv.fx ? cv.fx.speeds[b] || b : b,
                a = a || "fx",
                this.queue(a, function(d, e) {
                    var c = aH.setTimeout(d, b);
                    e.stop = function() {
                        aH.clearTimeout(c)
                    }
                })
        }
        ,
        function() {
            var a = bZ.createElement("input")
                , b = bZ.createElement("select").appendChild(bZ.createElement("option"));
            a.type = "checkbox",
                aZ.checkOn = "" !== a.value,
                aZ.optSelected = b.selected,
                (a = bZ.createElement("input")).value = "t",
                a.type = "radio",
                aZ.radioValue = "t" === a.value
        }();
    var aF, a3 = cv.expr.attrHandle;
    cv.fn.extend({
        attr: function(a, b) {
            return cN(this, cv.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                cv.removeAttr(this, a)
            })
        }
    }),
        cv.extend({
            attr: function(a, g, c) {
                var f, b, d = a.nodeType;
                if (3 !== d && 8 !== d && 2 !== d) {
                    return "undefined" == typeof a.getAttribute ? cv.prop(a, g, c) : (1 === d && cv.isXMLDoc(a) || (b = cv.attrHooks[g.toLowerCase()] || (cv.expr.match.bool.test(g) ? aF : void 0)),
                        void 0 !== c ? null === c ? void cv.removeAttr(a, g) : b && "set"in b && void 0 !== (f = b.set(a, c, g)) ? f : (a.setAttribute(g, c + ""),
                            c) : b && "get"in b && null !== (f = b.get(a, g)) ? f : null == (f = cv.find.attr(a, g)) ? void 0 : f)
                }
            },
            attrHooks: {
                type: {
                    set: function(a, c) {
                        if (!aZ.radioValue && "radio" === c && bC(a, "input")) {
                            var b = a.value;
                            return a.setAttribute("type", c),
                            b && (a.value = b),
                                c
                        }
                    }
                }
            },
            removeAttr: function(a, f) {
                var c, d = 0, b = f && f.match(bw);
                if (b && 1 === a.nodeType) {
                    while (c = b[d++]) {
                        a.removeAttribute(c)
                    }
                }
            }
        }),
        aF = {
            set: function(a, c, b) {
                return !1 === c ? cv.removeAttr(a, b) : a.setAttribute(b, b),
                    b
            }
        },
        cv.each(cv.expr.match.bool.source.match(/\w+/g), function(a, c) {
            var b = a3[c] || cv.find.attr;
            a3[c] = function(f, k, j) {
                var g, h, d = k.toLowerCase();
                return j || (h = a3[d],
                    a3[d] = g,
                    g = null != b(f, k, j) ? d : null,
                    a3[d] = h),
                    g
            }
        });
    var aX = /^(?:input|select|textarea|button)$/i
        , cL = /^(?:a|area)$/i;
    cv.fn.extend({
        prop: function(a, b) {
            return cN(this, cv.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[cv.propFix[a] || a]
            })
        }
    }),
        cv.extend({
            prop: function(a, g, c) {
                var f, b, d = a.nodeType;
                if (3 !== d && 8 !== d && 2 !== d) {
                    return 1 === d && cv.isXMLDoc(a) || (g = cv.propFix[g] || g,
                        b = cv.propHooks[g]),
                        void 0 !== c ? b && "set"in b && void 0 !== (f = b.set(a, c, g)) ? f : a[g] = c : b && "get"in b && null !== (f = b.get(a, g)) ? f : a[g]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = cv.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : aX.test(a.nodeName) || cL.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
    aZ.optSelected || (cv.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
                null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
        cv.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            cv.propFix[this.toLowerCase()] = this
        });
    function cs(a) {
        return (a.match(bw) || []).join(" ")
    }
    function bz(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    function cF(a) {
        return Array.isArray(a) ? a : "string" == typeof a ? a.match(bw) || [] : []
    }
    cv.fn.extend({
        addClass: function(c) {
            var k, f, h, d, g, b, j, l = 0;
            if (aT(c)) {
                return this.each(function(a) {
                    cv(this).addClass(c.call(this, a, bz(this)))
                })
            }
            if ((k = cF(c)).length) {
                while (f = this[l++]) {
                    if (d = bz(f),
                        h = 1 === f.nodeType && " " + cs(d) + " ") {
                        b = 0;
                        while (g = k[b++]) {
                            h.indexOf(" " + g + " ") < 0 && (h += g + " ")
                        }
                        d !== (j = cs(h)) && f.setAttribute("class", j)
                    }
                }
            }
            return this
        },
        removeClass: function(c) {
            var k, f, h, d, g, b, j, l = 0;
            if (aT(c)) {
                return this.each(function(a) {
                    cv(this).removeClass(c.call(this, a, bz(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if ((k = cF(c)).length) {
                while (f = this[l++]) {
                    if (d = bz(f),
                        h = 1 === f.nodeType && " " + cs(d) + " ") {
                        b = 0;
                        while (g = k[b++]) {
                            while (h.indexOf(" " + g + " ") > -1) {
                                h = h.replace(" " + g + " ", " ")
                            }
                        }
                        d !== (j = cs(h)) && f.setAttribute("class", j)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, d) {
            var b = typeof a
                , c = "string" === b || Array.isArray(a);
            return "boolean" == typeof d && c ? d ? this.addClass(a) : this.removeClass(a) : aT(a) ? this.each(function(e) {
                cv(this).toggleClass(a.call(this, e, bz(this), d), d)
            }) : this.each(function() {
                var h, f, g, e;
                if (c) {
                    f = 0,
                        g = cv(this),
                        e = cF(a);
                    while (h = e[f++]) {
                        g.hasClass(h) ? g.removeClass(h) : g.addClass(h)
                    }
                } else {
                    void 0 !== a && "boolean" !== b || ((h = bz(this)) && bc.set(this, "__className__", h),
                    this.setAttribute && this.setAttribute("class", h || !1 === a ? "" : bc.get(this, "__className__") || ""))
                }
            })
        },
        hasClass: function(a) {
            var d, b, c = 0;
            d = " " + a + " ";
            while (b = this[c++]) {
                if (1 === b.nodeType && (" " + cs(bz(b)) + " ").indexOf(d) > -1) {
                    return !0
                }
            }
            return !1
        }
    });
    var ar = /\r/g;
    cv.fn.extend({
        val: function(a) {
            var f, c, d, b = this[0];
            if (arguments.length) {
                return d = aT(a),
                    this.each(function(g) {
                        var e;
                        1 === this.nodeType && (null == (e = d ? a.call(this, g, cv(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = cv.map(e, function(h) {
                            return null == h ? "" : h + ""
                        })),
                        (f = cv.valHooks[this.type] || cv.valHooks[this.nodeName.toLowerCase()]) && "set"in f && void 0 !== f.set(this, e, "value") || (this.value = e))
                    })
            }
            if (b) {
                return (f = cv.valHooks[b.type] || cv.valHooks[b.nodeName.toLowerCase()]) && "get"in f && void 0 !== (c = f.get(b, "value")) ? c : "string" == typeof (c = b.value) ? c.replace(ar, "") : null == c ? "" : c
            }
        }
    }),
        cv.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = cv.find.attr(a, "value");
                        return null != b ? b : cs(cv.text(a))
                    }
                },
                select: {
                    get: function(c) {
                        var k, f, h, d = c.options, g = c.selectedIndex, b = "select-one" === c.type, j = b ? null : [], l = b ? g + 1 : d.length;
                        for (h = g < 0 ? l : b ? g : 0; h < l; h++) {
                            if (((f = d[h]).selected || h === g) && !f.disabled && (!f.parentNode.disabled || !bC(f.parentNode, "optgroup"))) {
                                if (k = cv(f).val(),
                                    b) {
                                    return k
                                }
                                j.push(k)
                            }
                        }
                        return j
                    },
                    set: function(c, j) {
                        var f, h, d = c.options, g = cv.makeArray(j), b = d.length;
                        while (b--) {
                            ((h = d[b]).selected = cv.inArray(cv.valHooks.option.get(h), g) > -1) && (f = !0)
                        }
                        return f || (c.selectedIndex = -1),
                            g
                    }
                }
            }
        }),
        cv.each(["radio", "checkbox"], function() {
            cv.valHooks[this] = {
                set: function(a, b) {
                    if (Array.isArray(b)) {
                        return a.checked = cv.inArray(cv(a).val(), b) > -1
                    }
                }
            },
            aZ.checkOn || (cv.valHooks[this].get = function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            )
        }),
        aZ.focusin = "onfocusin"in aH;
    var cz = /^(?:focusinfocus|focusoutblur)$/
        , ch = function(a) {
        a.stopPropagation()
    };
    cv.extend(cv.event, {
        trigger: function(A, r, j, w) {
            var b, z, B, k, e, y, f, g, C = [j || bZ], q = aN.call(A, "type") ? A.type : A, D = aN.call(A, "namespace") ? A.namespace.split(".") : [];
            if (z = g = B = j = j || bZ,
            3 !== j.nodeType && 8 !== j.nodeType && !cz.test(q + cv.event.triggered) && (q.indexOf(".") > -1 && (q = (D = q.split(".")).shift(),
                D.sort()),
                e = q.indexOf(":") < 0 && "on" + q,
                A = A[cv.expando] ? A : new cv.Event(q,"object" == typeof A && A),
                A.isTrigger = w ? 2 : 3,
                A.namespace = D.join("."),
                A.rnamespace = A.namespace ? new RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                A.result = void 0,
            A.target || (A.target = j),
                r = null == r ? [A] : cv.makeArray(r, [A]),
                f = cv.event.special[q] || {},
            w || !f.trigger || !1 !== f.trigger.apply(j, r))) {
                if (!w && !f.noBubble && !cH(j)) {
                    for (k = f.delegateType || q,
                         cz.test(k + q) || (z = z.parentNode); z; z = z.parentNode) {
                        C.push(z),
                            B = z
                    }
                    B === (j.ownerDocument || bZ) && C.push(B.defaultView || B.parentWindow || aH)
                }
                b = 0;
                while ((z = C[b++]) && !A.isPropagationStopped()) {
                    g = z,
                        A.type = b > 1 ? k : f.bindType || q,
                    (y = (bc.get(z, "events") || {})[A.type] && bc.get(z, "handle")) && y.apply(z, r),
                    (y = e && z[e]) && y.apply && cI(z) && (A.result = y.apply(z, r),
                    !1 === A.result && A.preventDefault())
                }
                return A.type = q,
                w || A.isDefaultPrevented() || f._default && !1 !== f._default.apply(C.pop(), r) || !cI(j) || e && aT(j[q]) && !cH(j) && ((B = j[e]) && (j[e] = null),
                    cv.event.triggered = q,
                A.isPropagationStopped() && g.addEventListener(q, ch),
                    j[q](),
                A.isPropagationStopped() && g.removeEventListener(q, ch),
                    cv.event.triggered = void 0,
                B && (j[e] = B)),
                    A.result
            }
        },
        simulate: function(a, d, b) {
            var c = cv.extend(new cv.Event, b, {
                type: a,
                isSimulated: !0
            });
            cv.event.trigger(c, null, d)
        }
    }),
        cv.fn.extend({
            trigger: function(a, b) {
                return this.each(function() {
                    cv.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, c) {
                var b = this[0];
                if (b) {
                    return cv.event.trigger(a, c, b, !0)
                }
            }
        }),
    aZ.focusin || cv.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, c) {
        var b = function(d) {
            cv.event.simulate(c, d.target, cv.event.fix(d))
        };
        cv.event.special[c] = {
            setup: function() {
                var e = this.ownerDocument || this
                    , d = bc.access(e, c);
                d || e.addEventListener(a, b, !0),
                    bc.access(e, c, (d || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                    , d = bc.access(e, c) - 1;
                d ? bc.access(e, c, d) : (e.removeEventListener(a, b, !0),
                    bc.remove(e, c))
            }
        }
    });
    var aA = aH.location
        , aM = Date.now()
        , bm = /\?/;
    cv.parseXML = function(c) {
        var b;
        if (!c || "string" != typeof c) {
            return null
        }
        try {
            b = (new a.DOMParser).parseFromString(c, "text/xml")
        } catch (a) {
            b = void 0
        }
        return b && !b.getElementsByTagName("parsererror").length || cv.error("Invalid XML: " + c),
            b
    }
    ;
    var ca = /\[\]$/
        , aG = /\r?\n/g
        , bG = /^(?:submit|button|image|reset|file)$/i
        , am = /^(?:input|select|textarea|keygen)/i;
    function bg(a, f, c, d) {
        var b;
        if (Array.isArray(f)) {
            cv.each(f, function(g, e) {
                c || ca.test(a) ? d(a, e) : bg(a + "[" + ("object" == typeof e && null != e ? g : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== cB(f)) {
                d(a, f)
            } else {
                for (b in f) {
                    bg(a + "[" + b + "]", f[b], c, d)
                }
            }
        }
    }
    cv.param = function(a, f) {
        var c, d = [], b = function(g, i) {
            var h = aT(i) ? i() : i;
            d[d.length] = encodeURIComponent(g) + "=" + encodeURIComponent(null == h ? "" : h)
        };
        if (Array.isArray(a) || a.jquery && !cv.isPlainObject(a)) {
            cv.each(a, function() {
                b(this.name, this.value)
            })
        } else {
            for (c in a) {
                bg(c, a[c], f, b)
            }
        }
        return d.join("&")
    }
        ,
        cv.fn.extend({
            serialize: function() {
                return cv.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = cv.prop(this, "elements");
                    return a ? cv.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !cv(this).is(":disabled") && am.test(this.nodeName) && !bG.test(a) && (this.checked || !bP.test(a))
                }).map(function(a, c) {
                    var b = cv(this).val();
                    return null == b ? null : Array.isArray(b) ? cv.map(b, function(d) {
                        return {
                            name: c.name,
                            value: d.replace(aG, "\r\n")
                        }
                    }) : {
                        name: c.name,
                        value: b.replace(aG, "\r\n")
                    }
                }).get()
            }
        });
    var bX = /%20/g
        , bu = /#.*$/
        , a4 = /([?&])_=[^&]*/
        , bM = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , bS = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , bA = /^(?:GET|HEAD)$/
        , b4 = /^\/\//
        , ba = {}
        , cA = {}
        , ac = "*/".concat("*")
        , au = bZ.createElement("a");
    au.href = aA.href;
    function aS(a) {
        return function(f, c) {
            "string" != typeof f && (c = f,
                f = "*");
            var e, b = 0, d = f.toLowerCase().match(bw) || [];
            if (aT(c)) {
                while (e = d[b++]) {
                    "+" === e[0] ? (e = e.slice(1) || "*",
                        (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
                }
            }
        }
    }
    function ag(c, j, f, h) {
        var d = {}
            , g = c === cA;
        function b(a) {
            var e;
            return d[a] = !0,
                cv.each(c[a] || [], function(i, m) {
                    var k = m(j, f, h);
                    return "string" != typeof k || g || d[k] ? g ? !(e = k) : void 0 : (j.dataTypes.unshift(k),
                        b(k),
                        !1)
                }),
                e
        }
        return b(j.dataTypes[0]) || !d["*"] && b("*")
    }
    function cR(a, f) {
        var c, d, b = cv.ajaxSettings.flatOptions || {};
        for (c in f) {
            void 0 !== f[c] && ((b[c] ? a : d || (d = {}))[c] = f[c])
        }
        return d && cv.extend(!0, a, d),
            a
    }
    function cG(c, k, f) {
        var h, d, g, b, j = c.contents, l = c.dataTypes;
        while ("*" === l[0]) {
            l.shift(),
            void 0 === h && (h = c.mimeType || k.getResponseHeader("Content-Type"))
        }
        if (h) {
            for (d in j) {
                if (j[d] && j[d].test(h)) {
                    l.unshift(d);
                    break
                }
            }
        }
        if (l[0]in f) {
            g = l[0]
        } else {
            for (d in f) {
                if (!l[0] || c.converters[d + " " + l[0]]) {
                    g = d;
                    break
                }
                b || (b = d)
            }
            g = g || b
        }
        if (g) {
            return g !== l[0] && l.unshift(g),
                f[g]
        }
    }
    function cn(f, q, j, m) {
        var g, k, b, p, v, h = {}, d = f.dataTypes.slice();
        if (d[1]) {
            for (b in f.converters) {
                h[b.toLowerCase()] = f.converters[b]
            }
        }
        k = d.shift();
        while (k) {
            if (f.responseFields[k] && (j[f.responseFields[k]] = q),
            !v && m && f.dataFilter && (q = f.dataFilter(q, f.dataType)),
                v = k,
                k = d.shift()) {
                if ("*" === k) {
                    k = v
                } else {
                    if ("*" !== v && v !== k) {
                        if (!(b = h[v + " " + k] || h["* " + k])) {
                            for (g in h) {
                                if ((p = g.split(" "))[1] === k && (b = h[v + " " + p[0]] || h["* " + p[0]])) {
                                    !0 === b ? b = h[g] : !0 !== h[g] && (k = p[0],
                                        d.unshift(p[1]));
                                    break
                                }
                            }
                        }
                        if (!0 !== b) {
                            if (b && f["throws"]) {
                                q = b(q)
                            } else {
                                try {
                                    q = b(q)
                                } catch (f) {
                                    return {
                                        state: "parsererror",
                                        error: b ? f : "No conversion from " + v + " to " + k
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: q
        }
    }
    cv.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: aA.href,
            type: "GET",
            isLocal: bS.test(aA.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ac,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": cv.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? cR(cR(a, cv.ajaxSettings), b) : cR(cv.ajaxSettings, a)
        },
        ajaxPrefilter: aS(ba),
        ajaxTransport: aS(cA),
        ajax: function(P, L) {
            "object" == typeof P && (L = P,
                P = void 0),
                L = L || {};
            var H, M, j, O, R, J, r, D, N, z, G = cv.ajaxSetup({}, L), F = G.context || G, V = G.context && (F.nodeType || F.jquery) ? cv(F) : cv.event, S = cv.Deferred(), K = cv.Callbacks("once memory"), U = G.statusCode || {}, q = {}, Q = {}, w = "canceled", B = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (r) {
                        if (!O) {
                            O = {};
                            while (b = bM.exec(j)) {
                                O[b[1].toLowerCase()] = b[2]
                            }
                        }
                        b = O[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return r ? j : null
                },
                setRequestHeader: function(a, b) {
                    return null == r && (a = Q[a.toLowerCase()] = Q[a.toLowerCase()] || a,
                        q[a] = b),
                        this
                },
                overrideMimeType: function(a) {
                    return null == r && (G.mimeType = a),
                        this
                },
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (r) {
                            B.always(a[B.status])
                        } else {
                            for (b in a) {
                                U[b] = [U[b], a[b]]
                            }
                        }
                    }
                    return this
                },
                abort: function(a) {
                    var b = a || w;
                    return H && H.abort(b),
                        I(0, b),
                        this
                }
            };
            if (S.promise(B),
                G.url = ((P || G.url || aA.href) + "").replace(b4, aA.protocol + "//"),
                G.type = L.method || L.type || G.method || G.type,
                G.dataTypes = (G.dataType || "*").toLowerCase().match(bw) || [""],
            null == G.crossDomain) {
                J = bZ.createElement("a");
                try {
                    J.href = G.url,
                        J.href = J.href,
                        G.crossDomain = au.protocol + "//" + au.host != J.protocol + "//" + J.host
                } catch (A) {
                    G.crossDomain = !0
                }
            }
            if (G.data && G.processData && "string" != typeof G.data && (G.data = cv.param(G.data, G.traditional)),
                ag(ba, G, L, B),
                r) {
                return B
            }
            (D = cv.event && G.global) && 0 == cv.active++ && cv.event.trigger("ajaxStart"),
                G.type = G.type.toUpperCase(),
                G.hasContent = !bA.test(G.type),
                M = G.url.replace(bu, ""),
                G.hasContent ? G.data && G.processData && 0 === (G.contentType || "").indexOf("application/x-www-form-urlencoded") && (G.data = G.data.replace(bX, "+")) : (z = G.url.slice(M.length),
                G.data && (G.processData || "string" == typeof G.data) && (M += (bm.test(M) ? "&" : "?") + G.data,
                    delete G.data),
                !1 === G.cache && (M = M.replace(a4, "$1"),
                    z = (bm.test(M) ? "&" : "?") + "_=" + aM++ + z),
                    G.url = M + z),
            G.ifModified && (cv.lastModified[M] && B.setRequestHeader("If-Modified-Since", cv.lastModified[M]),
            cv.etag[M] && B.setRequestHeader("If-None-Match", cv.etag[M])),
            (G.data && G.hasContent && !1 !== G.contentType || L.contentType) && B.setRequestHeader("Content-Type", G.contentType),
                B.setRequestHeader("Accept", G.dataTypes[0] && G.accepts[G.dataTypes[0]] ? G.accepts[G.dataTypes[0]] + ("*" !== G.dataTypes[0] ? ", " + ac + "; q=0.01" : "") : G.accepts["*"]);
            for (N in G.headers) {
                B.setRequestHeader(N, G.headers[N])
            }
            if (G.beforeSend && (!1 === G.beforeSend.call(F, B, G) || r)) {
                return B.abort()
            }
            if (w = "abort",
                K.add(G.complete),
                B.done(G.success),
                B.fail(G.error),
                H = ag(cA, G, L, B)) {
                if (B.readyState = 1,
                D && V.trigger("ajaxSend", [B, G]),
                    r) {
                    return B
                }
                G.async && G.timeout > 0 && (R = A.setTimeout(function() {
                    B.abort("timeout")
                }, G.timeout));
                try {
                    r = !1,
                        H.send(q, I)
                } catch (A) {
                    if (r) {
                        throw A
                    }
                    I(-1, A)
                }
            } else {
                I(-1, "No Transport")
            }
            function I(m, g, i, k) {
                var f, h, e, a, o, c = g;
                r || (r = !0,
                R && A.clearTimeout(R),
                    H = void 0,
                    j = k || "",
                    B.readyState = m > 0 ? 4 : 0,
                    f = m >= 200 && m < 300 || 304 === m,
                i && (a = cG(G, B, i)),
                    a = cn(G, a, B, f),
                    f ? (G.ifModified && ((o = B.getResponseHeader("Last-Modified")) && (cv.lastModified[M] = o),
                    (o = B.getResponseHeader("etag")) && (cv.etag[M] = o)),
                        204 === m || "HEAD" === G.type ? c = "nocontent" : 304 === m ? c = "notmodified" : (c = a.state,
                            h = a.data,
                            f = !(e = a.error))) : (e = c,
                    !m && c || (c = "error",
                    m < 0 && (m = 0))),
                    B.status = m,
                    B.statusText = (g || c) + "",
                    f ? S.resolveWith(F, [h, c, B]) : S.rejectWith(F, [B, c, e]),
                    B.statusCode(U),
                    U = void 0,
                D && V.trigger(f ? "ajaxSuccess" : "ajaxError", [B, G, f ? h : e]),
                    K.fireWith(F, [B, c]),
                D && (V.trigger("ajaxComplete", [B, G]),
                --cv.active || cv.event.trigger("ajaxStop")))
            }
            return B
        },
        getJSON: function(a, c, b) {
            return cv.get(a, c, b, "json")
        },
        getScript: function(a, b) {
            return cv.get(a, void 0, b, "script")
        }
    }),
        cv.each(["get", "post"], function(a, b) {
            cv[b] = function(c, f, g, d) {
                return aT(f) && (d = d || g,
                    g = f,
                    f = void 0),
                    cv.ajax(cv.extend({
                        url: c,
                        type: b,
                        dataType: d,
                        data: f,
                        success: g
                    }, cv.isPlainObject(c) && c))
            }
        }),
        cv._evalUrl = function(a) {
            return cv.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        cv.fn.extend({
            wrapAll: function(a) {
                var b;
                return this[0] && (aT(a) && (a = a.call(this[0])),
                    b = cv(a, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && b.insertBefore(this[0]),
                    b.map(function() {
                        var c = this;
                        while (c.firstElementChild) {
                            c = c.firstElementChild
                        }
                        return c
                    }).append(this)),
                    this
            },
            wrapInner: function(a) {
                return aT(a) ? this.each(function(b) {
                    cv(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var c = cv(this)
                        , b = c.contents();
                    b.length ? b.wrapAll(a) : c.append(a)
                })
            },
            wrap: function(a) {
                var b = aT(a);
                return this.each(function(c) {
                    cv(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function(a) {
                return this.parent(a).not("body").each(function() {
                    cv(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        cv.expr.pseudos.hidden = function(a) {
            return !cv.expr.pseudos.visible(a)
        }
        ,
        cv.expr.pseudos.visible = function(a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }
        ,
        cv.ajaxSettings.xhr = function() {
            try {
                return new a.XMLHttpRequest
            } catch (a) {}
        }
    ;
    var cu = {
        0: 200,
        1223: 204
    }
        , aY = cv.ajaxSettings.xhr();
    aZ.cors = !!aY && "withCredentials"in aY,
        aZ.ajax = aY = !!aY,
        cv.ajaxTransport(function(c) {
            var a, b;
            if (aZ.cors || aY && !c.crossDomain) {
                return {
                    send: function(g, h) {
                        var d, j = c.xhr();
                        if (j.open(c.type, c.url, c.async, c.username, c.password),
                            c.xhrFields) {
                            for (d in c.xhrFields) {
                                j[d] = c.xhrFields[d]
                            }
                        }
                        c.mimeType && j.overrideMimeType && j.overrideMimeType(c.mimeType),
                        c.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest");
                        for (d in g) {
                            j.setRequestHeader(d, g[d])
                        }
                        a = function(i) {
                            return function() {
                                a && (a = b = j.onload = j.onerror = j.onabort = j.ontimeout = j.onreadystatechange = null,
                                    "abort" === i ? j.abort() : "error" === i ? "number" != typeof j.status ? h(0, "error") : h(j.status, j.statusText) : h(cu[j.status] || j.status, j.statusText, "text" !== (j.responseType || "text") || "string" != typeof j.responseText ? {
                                        binary: j.response
                                    } : {
                                        text: j.responseText
                                    }, j.getAllResponseHeaders()))
                            }
                        }
                            ,
                            j.onload = a(),
                            b = j.onerror = j.ontimeout = a("error"),
                            void 0 !== j.onabort ? j.onabort = b : j.onreadystatechange = function() {
                                4 === j.readyState && f.setTimeout(function() {
                                    a && b()
                                })
                            }
                            ,
                            a = a("abort");
                        try {
                            j.send(c.hasContent && c.data || null)
                        } catch (f) {
                            if (a) {
                                throw f
                            }
                        }
                    },
                    abort: function() {
                        a && a()
                    }
                }
            }
        }),
        cv.ajaxPrefilter(function(a) {
            a.crossDomain && (a.contents.script = !1)
        }),
        cv.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return cv.globalEval(a),
                        a
                }
            }
        }),
        cv.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1),
            a.crossDomain && (a.type = "GET")
        }),
        cv.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var c, b;
                return {
                    send: function(d, e) {
                        c = cv("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", b = function(f) {
                                c.remove(),
                                    b = null,
                                f && e("error" === f.type ? 404 : 200, f.type)
                            }
                        ),
                            bZ.head.appendChild(c[0])
                    },
                    abort: function() {
                        b && b()
                    }
                }
            }
        });
    var cM = []
        , bY = /(=)\?(?=&|$)|\?\?/;
    cv.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = cM.pop() || cv.expando + "_" + aM++;
            return this[a] = !0,
                a
        }
    }),
        cv.ajaxPrefilter("json jsonp", function(h, d, f) {
            var c, e, b, g = !1 !== h.jsonp && (bY.test(h.url) ? "url" : "string" == typeof h.data && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && bY.test(h.data) && "data");
            if (g || "jsonp" === h.dataTypes[0]) {
                return c = h.jsonpCallback = aT(h.jsonpCallback) ? h.jsonpCallback() : h.jsonpCallback,
                    g ? h[g] = h[g].replace(bY, "$1" + c) : !1 !== h.jsonp && (h.url += (bm.test(h.url) ? "&" : "?") + h.jsonp + "=" + c),
                    h.converters["script json"] = function() {
                        return b || cv.error(c + " was not called"),
                            b[0]
                    }
                    ,
                    h.dataTypes[0] = "json",
                    e = aH[c],
                    aH[c] = function() {
                        b = arguments
                    }
                    ,
                    f.always(function() {
                        void 0 === e ? cv(aH).removeProp(c) : aH[c] = e,
                        h[c] && (h.jsonpCallback = d.jsonpCallback,
                            cM.push(c)),
                        b && aT(e) && e(b[0]),
                            b = e = void 0
                    }),
                    "script"
            }
        }),
        aZ.createHTMLDocument = function() {
            var a = bZ.implementation.createHTMLDocument("").body;
            return a.innerHTML = "<form></form><form></form>",
            2 === a.childNodes.length
        }(),
        cv.parseHTML = function(c, h, f) {
            if ("string" != typeof c) {
                return []
            }
            "boolean" == typeof h && (f = h,
                h = !1);
            var d, g, b;
            return h || (aZ.createHTMLDocument ? ((d = (h = bZ.implementation.createHTMLDocument("")).createElement("base")).href = bZ.location.href,
                h.head.appendChild(d)) : h = bZ),
                g = ai.exec(c),
                b = !f && [],
                g ? [h.createElement(g[1])] : (g = cD([c], h, b),
                b && b.length && cv(b).remove(),
                    cv.merge([], g.childNodes))
        }
        ,
        cv.fn.load = function(c, k, f) {
            var h, d, g, b = this, j = c.indexOf(" ");
            return j > -1 && (h = cs(c.slice(j)),
                c = c.slice(0, j)),
                aT(k) ? (f = k,
                    k = void 0) : k && "object" == typeof k && (d = "POST"),
            b.length > 0 && cv.ajax({
                url: c,
                type: d || "GET",
                dataType: "html",
                data: k
            }).done(function(a) {
                g = arguments,
                    b.html(h ? cv("<div>").append(cv.parseHTML(a)).find(h) : a)
            }).always(f && function(a, i) {
                b.each(function() {
                    f.apply(this, g || [a.responseText, i, a])
                })
            }
            ),
                this
        }
        ,
        cv.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            cv.fn[b] = function(c) {
                return this.on(b, c)
            }
        }),
        cv.expr.pseudos.animated = function(a) {
            return cv.grep(cv.timers, function(b) {
                return a === b.elem
            }).length
        }
        ,
        cv.offset = {
            setOffset: function(g, y, m) {
                var w, j, q, b, x, z, k, d = cv.css(g, "position"), h = cv(g), v = {};
                "static" === d && (g.style.position = "relative"),
                    x = h.offset(),
                    q = cv.css(g, "top"),
                    z = cv.css(g, "left"),
                    (k = ("absolute" === d || "fixed" === d) && (q + z).indexOf("auto") > -1) ? (b = (w = h.position()).top,
                        j = w.left) : (b = parseFloat(q) || 0,
                        j = parseFloat(z) || 0),
                aT(y) && (y = y.call(g, m, cv.extend({}, x))),
                null != y.top && (v.top = y.top - x.top + b),
                null != y.left && (v.left = y.left - x.left + j),
                    "using"in y ? y.using.call(g, v) : h.css(v)
            }
        },
        cv.fn.extend({
            offset: function(a) {
                if (arguments.length) {
                    return void 0 === a ? this : this.each(function(e) {
                        cv.offset.setOffset(this, a, e)
                    })
                }
                var d, b, c = this[0];
                if (c) {
                    return c.getClientRects().length ? (d = c.getBoundingClientRect(),
                        b = c.ownerDocument.defaultView,
                        {
                            top: d.top + b.pageYOffset,
                            left: d.left + b.pageXOffset
                        }) : {
                        top: 0,
                        left: 0
                    }
                }
            },
            position: function() {
                if (this[0]) {
                    var a, f, c, d = this[0], b = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === cv.css(d, "position")) {
                        f = d.getBoundingClientRect()
                    } else {
                        f = this.offset(),
                            c = d.ownerDocument,
                            a = d.offsetParent || c.documentElement;
                        while (a && (a === c.body || a === c.documentElement) && "static" === cv.css(a, "position")) {
                            a = a.parentNode
                        }
                        a && a !== d && 1 === a.nodeType && ((b = cv(a).offset()).top += cv.css(a, "borderTopWidth", !0),
                            b.left += cv.css(a, "borderLeftWidth", !0))
                    }
                    return {
                        top: f.top - b.top - cv.css(d, "marginTop", !0),
                        left: f.left - b.left - cv.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && "static" === cv.css(a, "position")) {
                        a = a.offsetParent
                    }
                    return a || ap
                })
            }
        }),
        cv.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, c) {
            var b = "pageYOffset" === c;
            cv.fn[a] = function(d) {
                return cN(this, function(f, j, g) {
                    var h;
                    if (cH(f) ? h = f : 9 === f.nodeType && (h = f.defaultView),
                    void 0 === g) {
                        return h ? h[c] : f[j]
                    }
                    h ? h.scrollTo(b ? h.pageXOffset : g, b ? g : h.pageYOffset) : f[j] = g
                }, a, d, arguments.length)
            }
        }),
        cv.each(["top", "left"], function(a, b) {
            cv.cssHooks[b] = af(aZ.pixelPosition, function(c, d) {
                if (d) {
                    return d = aQ(c, b),
                        cy.test(d) ? cv(c).position()[b] + "px" : d
                }
            })
        }),
        cv.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            cv.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                cv.fn[d] = function(f, g) {
                    var e = arguments.length && (c || "boolean" != typeof f)
                        , h = c || (!0 === f || !0 === g ? "margin" : "border");
                    return cN(this, function(m, k, j) {
                        var l;
                        return cH(m) ? 0 === d.indexOf("outer") ? m["inner" + a] : m.document.documentElement["client" + a] : 9 === m.nodeType ? (l = m.documentElement,
                            Math.max(m.body["scroll" + a], l["scroll" + a], m.body["offset" + a], l["offset" + a], l["client" + a])) : void 0 === j ? cv.css(m, k, h) : cv.style(m, k, j, h)
                    }, b, e ? f : void 0, e)
                }
            })
        }),
        cv.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
            cv.fn[b] = function(c, d) {
                return arguments.length > 0 ? this.on(b, null, c, d) : this.trigger(b)
            }
        }),
        cv.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        cv.fn.extend({
            bind: function(a, c, b) {
                return this.on(a, null, c, b)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, d, b, c) {
                return this.on(d, a, b, c)
            },
            undelegate: function(a, c, b) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", b)
            }
        }),
        cv.proxy = function(a, f) {
            var c, d, b;
            if ("string" == typeof f && (c = a[f],
                f = a,
                a = c),
                aT(a)) {
                return d = bH.call(arguments, 2),
                    b = function() {
                        return a.apply(f || this, d.concat(bH.call(arguments)))
                    }
                    ,
                    b.guid = a.guid = a.guid || cv.guid++,
                    b
            }
        }
        ,
        cv.holdReady = function(a) {
            a ? cv.readyWait++ : cv.ready(!0)
        }
        ,
        cv.isArray = Array.isArray,
        cv.parseJSON = JSON.parse,
        cv.nodeName = bC,
        cv.isFunction = aT,
        cv.isWindow = cH,
        cv.camelCase = aU,
        cv.type = cB,
        cv.now = Date.now,
        cv.isNumeric = function(a) {
            var b = cv.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        }
        ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return cv
    });
    var bh = aH.jQuery
        , bn = aH.$;
    return cv.noConflict = function(a) {
        return aH.$ === cv && (aH.$ = bn),
        a && aH.jQuery === cv && (aH.jQuery = bh),
            cv
    }
        ,
    cb || (aH.jQuery = aH.$ = cv),
        cv
});