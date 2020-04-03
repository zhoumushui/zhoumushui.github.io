!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.gc = t() : e.gc = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i])return n[i].exports;
            var r = n[i] = {exports: {}, id: i, loaded: !1};
            return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        "use strict";
        var i = n(1);
        n(3), n(7);
        var r = {};
        r.package = n(9), r.$ = i;
        var o = n(10),
            a = '\n<div class="gc-comments-item">\n    <div class="gc-comments-item-hd">\n        <img class="gc-comments-item-hd-avatar" src="{{user.avatar_url}}" />\n        <a href="https://github.com/{{user.login}}" class="gc-comments-item-hd-user">{{user.login}}</a>\n        <a href="{{html_url}}" class="gc-comments-item-hd-date">{{created_at}}</a>\n    </div>\n    <div class="gc-comments-item-bd">\n        <p>{{body_html}}</p>\n    </div>\n</div>\n';
        r.load = function (e, t, n, r) {
            var s = i(n);
            r = r || "(⊙o⊙) No comments", s.addClass("gc-comments");
            var c = "https://github.com/" + e + "/issues/" + t, l = e.split("/"), u = l[0], d = l[1];
            s.find('a[href="{{issues_link}}"],a[href="issues_link"]').each(function () {
                var e = i(this);
                e.attr("href", c), e.html(e.html().replace(/(\{\{issues_link\}\}|issues_link)/g, c))
            });
            var f = i('<div style="display:inline-block;position:relative;top:0.15em;height:20px;"><iframe style="display:inline;" src="https://ghbtns.com/github-btn.html?user=' + u + "&repo=" + d + '&type=star&count=true" frameborder="0" scrolling="0" width="120px" height="20px"></iframe></div>');
            f.appendTo(s.find(".gc-comments-title"));
            var p = i('<div class="gc-comments-loading">Loading</div>');
            s.append(p), i.ajax({
                type: "get",
                url: "https://api.github.com/repos/" + e + "/issues/" + t + "/comments?per_page=100",
                headers: {Accept: "application/vnd.github.full+json"},
                dataType: "json"
            }).done(function (e) {
                if (p.hide(), 0 === e.length) {
                    var t = i('<div class="gc-comments-nocomments">' + r + "</div>");
                    return void s.append(t)
                }
                var n = [];
                i.each(e, function (e, t) {
                    t.created_at = o(t.created_at), t.updated_at = o(t.updated_at);
                    var r = a.replace(/\{\{([^{}]+)\}\}/g, function () {
                        var e = arguments[1];
                        e = e.split(".");
                        var n = t;
                        return i.each(e, function (e, t) {
                            n = n[t]
                        }), n
                    });
                    n.push(r)
                }), s.append(n.join(""))
            }).fail(function (e) {
                if (p.hide(), e = e.responseJSON, e.message)return void s.append("<div>" + e.message + "</div>")
            })
        }, i(function () {
            return "undefined" == typeof window.__NIMO__gc_load && (window.__NIMO__gc_load = !0, void i(".gc-comments").each(function () {
                    var e = i(this), t = e.data();
                    t.repos && r.load(t.repos, t.issues, e, t.nocommentstip)
                }))
        }), e.exports = r
    }, function (e, t, n) {
        var i, r;
        (function (e) {
            "use strict";
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            !function (t, i) {
                "object" === n(e) && "object" === n(e.exports) ? e.exports = t.document ? i(t, !0) : function (e) {
                    if (!e.document)throw new Error("jQuery requires a window with a document");
                    return i(e)
                } : i(t)
            }("undefined" != typeof window ? window : void 0, function (o, a) {
                function s(e) {
                    var t = !!e && "length" in e && e.length, n = ye.type(e);
                    return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }

                function c(e, t, n) {
                    if (ye.isFunction(t))return ye.grep(e, function (e, i) {
                        return !!t.call(e, i, e) !== n
                    });
                    if (t.nodeType)return ye.grep(e, function (e) {
                        return e === t !== n
                    });
                    if ("string" == typeof t) {
                        if (je.test(t))return ye.filter(t, e, n);
                        t = ye.filter(t, e)
                    }
                    return ye.grep(e, function (e) {
                        return ye.inArray(e, t) > -1 !== n
                    })
                }

                function l(e, t) {
                    do e = e[t]; while (e && 1 !== e.nodeType);
                    return e
                }

                function u(e) {
                    var t = {};
                    return ye.each(e.match(_e) || [], function (e, n) {
                        t[n] = !0
                    }), t
                }

                function d() {
                    ce.addEventListener ? (ce.removeEventListener("DOMContentLoaded", f), o.removeEventListener("load", f)) : (ce.detachEvent("onreadystatechange", f), o.detachEvent("onload", f))
                }

                function f() {
                    (ce.addEventListener || "load" === o.event.type || "complete" === ce.readyState) && (d(), ye.ready())
                }

                function p(e, t, n) {
                    if (void 0 === n && 1 === e.nodeType) {
                        var i = "data-" + t.replace(Be, "-$1").toLowerCase();
                        if (n = e.getAttribute(i), "string" == typeof n) {
                            try {
                                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Fe.test(n) ? ye.parseJSON(n) : n)
                            } catch (e) {
                            }
                            ye.data(e, t, n)
                        } else n = void 0
                    }
                    return n
                }

                function h(e) {
                    var t;
                    for (t in e)if (("data" !== t || !ye.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
                    return !0
                }

                function m(e, t, i, r) {
                    if (Re(e)) {
                        var o, a, s = ye.expando, c = e.nodeType, l = c ? ye.cache : e, u = c ? e[s] : e[s] && s;
                        if (u && l[u] && (r || l[u].data) || void 0 !== i || "string" != typeof t)return u || (u = c ? e[s] = se.pop() || ye.guid++ : s), l[u] || (l[u] = c ? {} : {toJSON: ye.noop}), "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t || (r ? l[u] = ye.extend(l[u], t) : l[u].data = ye.extend(l[u].data, t)), a = l[u], r || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[ye.camelCase(t)] = i), "string" == typeof t ? (o = a[t], null == o && (o = a[ye.camelCase(t)])) : o = a, o
                    }
                }

                function g(e, t, n) {
                    if (Re(e)) {
                        var i, r, o = e.nodeType, a = o ? ye.cache : e, s = o ? e[ye.expando] : ye.expando;
                        if (a[s]) {
                            if (t && (i = n ? a[s] : a[s].data)) {
                                ye.isArray(t) ? t = t.concat(ye.map(t, ye.camelCase)) : t in i ? t = [t] : (t = ye.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                                for (; r--;)delete i[t[r]];
                                if (n ? !h(i) : !ye.isEmptyObject(i))return
                            }
                            (n || (delete a[s].data, h(a[s]))) && (o ? ye.cleanData([e], !0) : ge.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                        }
                    }
                }

                function v(e, t, n, i) {
                    var r, o = 1, a = 20, s = i ? function () {
                            return i.cur()
                        } : function () {
                            return ye.css(e, t, "")
                        }, c = s(), l = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
                        u = (ye.cssNumber[t] || "px" !== l && +c) && We.exec(ye.css(e, t));
                    if (u && u[3] !== l) {
                        l = l || u[3], n = n || [], u = +c || 1;
                        do o = o || ".5", u /= o, ye.style(e, t, u + l); while (o !== (o = s() / c) && 1 !== o && --a)
                    }
                    return n && (u = +u || +c || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = u, i.end = r)), r
                }

                function y(e) {
                    var t = Ge.split("|"), n = e.createDocumentFragment();
                    if (n.createElement)for (; t.length;)n.createElement(t.pop());
                    return n
                }

                function b(e, t) {
                    var n, i, r = 0,
                        o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                    if (!o)for (o = [], n = e.childNodes || e; null != (i = n[r]); r++)!t || ye.nodeName(i, t) ? o.push(i) : ye.merge(o, b(i, t));
                    return void 0 === t || t && ye.nodeName(e, t) ? ye.merge([e], o) : o
                }

                function x(e, t) {
                    for (var n, i = 0; null != (n = e[i]); i++)ye._data(n, "globalEval", !t || ye._data(t[i], "globalEval"))
                }

                function w(e) {
                    Xe.test(e.type) && (e.defaultChecked = e.checked)
                }

                function k(e, t, n, i, r) {
                    for (var o, a, s, c, l, u, d, f = e.length, p = y(t), h = [], m = 0; m < f; m++)if (a = e[m], a || 0 === a)if ("object" === ye.type(a)) ye.merge(h, a.nodeType ? [a] : a); else if (Qe.test(a)) {
                        for (c = c || p.appendChild(t.createElement("div")), l = (Ue.exec(a) || ["", ""])[1].toLowerCase(), d = Je[l] || Je._default, c.innerHTML = d[1] + ye.htmlPrefilter(a) + d[2], o = d[0]; o--;)c = c.lastChild;
                        if (!ge.leadingWhitespace && Ye.test(a) && h.push(t.createTextNode(Ye.exec(a)[0])), !ge.tbody)for (a = "table" !== l || Ke.test(a) ? "<table>" !== d[1] || Ke.test(a) ? 0 : c : c.firstChild, o = a && a.childNodes.length; o--;)ye.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
                        for (ye.merge(h, c.childNodes), c.textContent = ""; c.firstChild;)c.removeChild(c.firstChild);
                        c = p.lastChild
                    } else h.push(t.createTextNode(a));
                    for (c && p.removeChild(c), ge.appendChecked || ye.grep(b(h, "input"), w), m = 0; a = h[m++];)if (i && ye.inArray(a, i) > -1) r && r.push(a); else if (s = ye.contains(a.ownerDocument, a), c = b(p.appendChild(a), "script"), s && x(c), n)for (o = 0; a = c[o++];)Ve.test(a.type || "") && n.push(a);
                    return c = null, p
                }

                function T() {
                    return !0
                }

                function C() {
                    return !1
                }

                function N() {
                    try {
                        return ce.activeElement
                    } catch (e) {
                    }
                }

                function E(e, t, i, r, o, a) {
                    var s, c;
                    if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) {
                        "string" != typeof i && (r = r || i, i = void 0);
                        for (c in t)E(e, c, i, r, t[c], a);
                        return e
                    }
                    if (null == r && null == o ? (o = i, r = i = void 0) : null == o && ("string" == typeof i ? (o = r, r = void 0) : (o = r, r = i, i = void 0)), o === !1) o = C; else if (!o)return e;
                    return 1 === a && (s = o, o = function (e) {
                        return ye().off(e), s.apply(this, arguments)
                    }, o.guid = s.guid || (s.guid = ye.guid++)), e.each(function () {
                        ye.event.add(this, t, o, r, i)
                    })
                }

                function S(e, t) {
                    return ye.nodeName(e, "table") && ye.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
                }

                function j(e) {
                    return e.type = (null !== ye.find.attr(e, "type")) + "/" + e.type, e
                }

                function A(e) {
                    var t = lt.exec(e.type);
                    return t ? e.type = t[1] : e.removeAttribute("type"), e
                }

                function L(e, t) {
                    if (1 === t.nodeType && ye.hasData(e)) {
                        var n, i, r, o = ye._data(e), a = ye._data(t, o), s = o.events;
                        if (s) {
                            delete a.handle, a.events = {};
                            for (n in s)for (i = 0, r = s[n].length; i < r; i++)ye.event.add(t, n, s[n][i])
                        }
                        a.data && (a.data = ye.extend({}, a.data))
                    }
                }

                function D(e, t) {
                    var n, i, r;
                    if (1 === t.nodeType) {
                        if (n = t.nodeName.toLowerCase(), !ge.noCloneEvent && t[ye.expando]) {
                            r = ye._data(t);
                            for (i in r.events)ye.removeEvent(t, i, r.handle);
                            t.removeAttribute(ye.expando)
                        }
                        "script" === n && t.text !== e.text ? (j(t).text = e.text, A(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ge.html5Clone && e.innerHTML && !ye.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Xe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }
                }

                function H(e, t, n, i) {
                    t = ue.apply([], t);
                    var r, o, a, s, c, l, u = 0, d = e.length, f = d - 1, p = t[0], h = ye.isFunction(p);
                    if (h || d > 1 && "string" == typeof p && !ge.checkClone && ct.test(p))return e.each(function (r) {
                        var o = e.eq(r);
                        h && (t[0] = p.call(this, r, o.html())), H(o, t, n, i)
                    });
                    if (d && (l = k(t, e[0].ownerDocument, !1, e, i), r = l.firstChild, 1 === l.childNodes.length && (l = r), r || i)) {
                        for (s = ye.map(b(l, "script"), j), a = s.length; u < d; u++)o = l, u !== f && (o = ye.clone(o, !0, !0), a && ye.merge(s, b(o, "script"))), n.call(e[u], o, u);
                        if (a)for (c = s[s.length - 1].ownerDocument, ye.map(s, A), u = 0; u < a; u++)o = s[u], Ve.test(o.type || "") && !ye._data(o, "globalEval") && ye.contains(c, o) && (o.src ? ye._evalUrl && ye._evalUrl(o.src) : ye.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ut, "")));
                        l = r = null
                    }
                    return e
                }

                function q(e, t, n) {
                    for (var i, r = t ? ye.filter(t, e) : e, o = 0; null != (i = r[o]); o++)n || 1 !== i.nodeType || ye.cleanData(b(i)), i.parentNode && (n && ye.contains(i.ownerDocument, i) && x(b(i, "script")), i.parentNode.removeChild(i));
                    return e
                }

                function _(e, t) {
                    var n = ye(t.createElement(e)).appendTo(t.body), i = ye.css(n[0], "display");
                    return n.detach(), i
                }

                function M(e) {
                    var t = ce, n = ht[e];
                    return n || (n = _(e, t), "none" !== n && n || (pt = (pt || ye("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (pt[0].contentWindow || pt[0].contentDocument).document, t.write(), t.close(), n = _(e, t), pt.detach()), ht[e] = n), n
                }

                function O(e, t) {
                    return {
                        get: function () {
                            return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                        }
                    }
                }

                function R(e) {
                    if (e in At)return e;
                    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = jt.length; n--;)if (e = jt[n] + t, e in At)return e
                }

                function F(e, t) {
                    for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)i = e[a], i.style && (o[a] = ye._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ie(i) && (o[a] = ye._data(i, "olddisplay", M(i.nodeName)))) : (r = Ie(i), (n && "none" !== n || !r) && ye._data(i, "olddisplay", r ? n : ye.css(i, "display"))));
                    for (a = 0; a < s; a++)i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
                    return e
                }

                function B(e, t, n) {
                    var i = Nt.exec(t);
                    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
                }

                function P(e, t, n, i, r) {
                    for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += ye.css(e, n + ze[o], !0, r)), i ? ("content" === n && (a -= ye.css(e, "padding" + ze[o], !0, r)), "margin" !== n && (a -= ye.css(e, "border" + ze[o] + "Width", !0, r))) : (a += ye.css(e, "padding" + ze[o], !0, r), "padding" !== n && (a += ye.css(e, "border" + ze[o] + "Width", !0, r)));
                    return a
                }

                function W(e, t, n) {
                    var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = bt(e),
                        a = ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, o);
                    if (r <= 0 || null == r) {
                        if (r = xt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), gt.test(r))return r;
                        i = a && (ge.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
                    }
                    return r + P(e, t, n || (a ? "border" : "content"), i, o) + "px"
                }

                function z(e, t, n, i, r) {
                    return new z.prototype.init(e, t, n, i, r)
                }

                function I() {
                    return o.setTimeout(function () {
                        Lt = void 0
                    }), Lt = ye.now()
                }

                function $(e, t) {
                    var n, i = {height: e}, r = 0;
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)n = ze[r], i["margin" + n] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }

                function X(e, t, n) {
                    for (var i, r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), o = 0, a = r.length; o < a; o++)if (i = r[o].call(n, t, e))return i
                }

                function U(e, t, n) {
                    var i, r, o, a, s, c, l, u, d = this, f = {}, p = e.style, h = e.nodeType && Ie(e),
                        m = ye._data(e, "fxshow");
                    n.queue || (s = ye._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || c()
                    }), s.unqueued++, d.always(function () {
                        d.always(function () {
                            s.unqueued--, ye.queue(e, "fx").length || s.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ye.css(e, "display"), u = "none" === l ? ye._data(e, "olddisplay") || M(e.nodeName) : l, "inline" === u && "none" === ye.css(e, "float") && (ge.inlineBlockNeedsLayout && "inline" !== M(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ge.shrinkWrapBlocks() || d.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }));
                    for (i in t)if (r = t[i], Ht.exec(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i])continue;
                            h = !0
                        }
                        f[i] = m && m[i] || ye.style(e, i)
                    } else l = void 0;
                    if (ye.isEmptyObject(f)) "inline" === ("none" === l ? M(e.nodeName) : l) && (p.display = l); else {
                        m ? "hidden" in m && (h = m.hidden) : m = ye._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ye(e).show() : d.done(function () {
                            ye(e).hide()
                        }), d.done(function () {
                            var t;
                            ye._removeData(e, "fxshow");
                            for (t in f)ye.style(e, t, f[t])
                        });
                        for (i in f)a = X(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
                    }
                }

                function V(e, t) {
                    var n, i, r, o, a;
                    for (n in e)if (i = ye.camelCase(n), r = t[i], o = e[n], ye.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ye.cssHooks[i], a && "expand" in a) {
                        o = a.expand(o), delete e[i];
                        for (n in o)n in e || (e[n] = o[n], t[n] = r)
                    } else t[i] = r
                }

                function Y(e, t, n) {
                    var i, r, o = 0, a = Y.prefilters.length, s = ye.Deferred().always(function () {
                        delete c.elem
                    }), c = function () {
                        if (r)return !1;
                        for (var t = Lt || I(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, c = l.tweens.length; a < c; a++)l.tweens[a].run(o);
                        return s.notifyWith(e, [l, o, n]), o < 1 && c ? n : (s.resolveWith(e, [l]), !1)
                    }, l = s.promise({
                        elem: e,
                        props: ye.extend({}, t),
                        opts: ye.extend(!0, {specialEasing: {}, easing: ye.easing._default}, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Lt || I(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var i = ye.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(i), i
                        },
                        stop: function (t) {
                            var n = 0, i = t ? l.tweens.length : 0;
                            if (r)return this;
                            for (r = !0; n < i; n++)l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }), u = l.props;
                    for (V(u, l.opts.specialEasing); o < a; o++)if (i = Y.prefilters[o].call(l, e, u, l.opts))return ye.isFunction(i.stop) && (ye._queueHooks(l.elem, l.opts.queue).stop = ye.proxy(i.stop, i)), i;
                    return ye.map(u, X, l), ye.isFunction(l.opts.start) && l.opts.start.call(e, l), ye.fx.timer(ye.extend(c, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
                }

                function G(e) {
                    return ye.attr(e, "class") || ""
                }

                function J(e) {
                    return function (t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var i, r = 0, o = t.toLowerCase().match(_e) || [];
                        if (ye.isFunction(n))for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                    }
                }

                function Q(e, t, n, i) {
                    function r(s) {
                        var c;
                        return o[s] = !0, ye.each(e[s] || [], function (e, s) {
                            var l = s(t, n, i);
                            return "string" != typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
                        }), c
                    }

                    var o = {}, a = e === rn;
                    return r(t.dataTypes[0]) || !o["*"] && r("*")
                }

                function K(e, t) {
                    var n, i, r = ye.ajaxSettings.flatOptions || {};
                    for (i in t)void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
                    return n && ye.extend(!0, e, n), e
                }

                function Z(e, t, n) {
                    for (var i, r, o, a, s = e.contents, c = e.dataTypes; "*" === c[0];)c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)for (a in s)if (s[a] && s[a].test(r)) {
                        c.unshift(a);
                        break
                    }
                    if (c[0] in n) o = c[0]; else {
                        for (a in n) {
                            if (!c[0] || e.converters[a + " " + c[0]]) {
                                o = a;
                                break
                            }
                            i || (i = a)
                        }
                        o = o || i
                    }
                    if (o)return o !== c[0] && c.unshift(o), n[o]
                }

                function ee(e, t, n, i) {
                    var r, o, a, s, c, l = {}, u = e.dataTypes.slice();
                    if (u[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())if ("*" === o) o = c; else if ("*" !== c && c !== o) {
                        if (a = l[c + " " + o] || l["* " + o], !a)for (r in l)if (s = r.split(" "), s[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                            a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], u.unshift(s[1]));
                            break
                        }
                        if (a !== !0)if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }

                function te(e) {
                    return e.style && e.style.display || ye.css(e, "display")
                }

                function ne(e) {
                    if (!ye.contains(e.ownerDocument || ce, e))return !0;
                    for (; e && 1 === e.nodeType;) {
                        if ("none" === te(e) || "hidden" === e.type)return !0;
                        e = e.parentNode
                    }
                    return !1
                }

                function ie(e, t, i, r) {
                    var o;
                    if (ye.isArray(t)) ye.each(t, function (t, o) {
                        i || ln.test(e) ? r(e, o) : ie(e + "[" + ("object" === ("undefined" == typeof o ? "undefined" : n(o)) && null != o ? t : "") + "]", o, i, r)
                    }); else if (i || "object" !== ye.type(t)) r(e, t); else for (o in t)ie(e + "[" + o + "]", t[o], i, r)
                }

                function re() {
                    try {
                        return new o.XMLHttpRequest
                    } catch (e) {
                    }
                }

                function oe() {
                    try {
                        return new o.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {
                    }
                }

                function ae(e) {
                    return ye.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
                }

                var se = [], ce = o.document, le = se.slice, ue = se.concat, de = se.push, fe = se.indexOf, pe = {},
                    he = pe.toString, me = pe.hasOwnProperty, ge = {}, ve = "1.12.4", ye = function e(t, n) {
                        return new e.fn.init(t, n)
                    }, be = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, xe = /^-ms-/, we = /-([\da-z])/gi, ke = function (e, t) {
                        return t.toUpperCase()
                    };
                ye.fn = ye.prototype = {
                    jquery: ve, constructor: ye, selector: "", length: 0, toArray: function () {
                        return le.call(this)
                    }, get: function (e) {
                        return null != e ? e < 0 ? this[e + this.length] : this[e] : le.call(this)
                    }, pushStack: function (e) {
                        var t = ye.merge(this.constructor(), e);
                        return t.prevObject = this, t.context = this.context, t
                    }, each: function (e) {
                        return ye.each(this, e)
                    }, map: function (e) {
                        return this.pushStack(ye.map(this, function (t, n) {
                            return e.call(t, n, t)
                        }))
                    }, slice: function () {
                        return this.pushStack(le.apply(this, arguments))
                    }, first: function () {
                        return this.eq(0)
                    }, last: function () {
                        return this.eq(-1)
                    }, eq: function (e) {
                        var t = this.length, n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    }, end: function () {
                        return this.prevObject || this.constructor()
                    }, push: de, sort: se.sort, splice: se.splice
                }, ye.extend = ye.fn.extend = function () {
                    var e, t, i, r, o, a, s = arguments[0] || {}, c = 1, l = arguments.length, u = !1;
                    for ("boolean" == typeof s && (u = s, s = arguments[c] || {}, c++), "object" === ("undefined" == typeof s ? "undefined" : n(s)) || ye.isFunction(s) || (s = {}), c === l && (s = this, c--); c < l; c++)if (null != (o = arguments[c]))for (r in o)e = s[r], i = o[r], s !== i && (u && i && (ye.isPlainObject(i) || (t = ye.isArray(i))) ? (t ? (t = !1, a = e && ye.isArray(e) ? e : []) : a = e && ye.isPlainObject(e) ? e : {}, s[r] = ye.extend(u, a, i)) : void 0 !== i && (s[r] = i));
                    return s
                }, ye.extend({
                    expando: "jQuery" + (ve + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e)
                    },
                    noop: function () {
                    },
                    isFunction: function (e) {
                        return "function" === ye.type(e)
                    },
                    isArray: Array.isArray || function (e) {
                        return "array" === ye.type(e)
                    },
                    isWindow: function (e) {
                        return null != e && e == e.window
                    },
                    isNumeric: function (e) {
                        var t = e && e.toString();
                        return !ye.isArray(e) && t - parseFloat(t) + 1 >= 0
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e)return !1;
                        return !0
                    },
                    isPlainObject: function (e) {
                        var t;
                        if (!e || "object" !== ye.type(e) || e.nodeType || ye.isWindow(e))return !1;
                        try {
                            if (e.constructor && !me.call(e, "constructor") && !me.call(e.constructor.prototype, "isPrototypeOf"))return !1
                        } catch (e) {
                            return !1
                        }
                        if (!ge.ownFirst)for (t in e)return me.call(e, t);
                        for (t in e);
                        return void 0 === t || me.call(e, t)
                    },
                    type: function (e) {
                        return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : n(e)) || "function" == typeof e ? pe[he.call(e)] || "object" : "undefined" == typeof e ? "undefined" : n(e)
                    },
                    globalEval: function (e) {
                        e && ye.trim(e) && (o.execScript || function (e) {
                            o.eval.call(o, e)
                        })(e)
                    },
                    camelCase: function (e) {
                        return e.replace(xe, "ms-").replace(we, ke)
                    },
                    nodeName: function (e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function (e, t) {
                        var n, i = 0;
                        if (s(e))for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++); else for (i in e)if (t.call(e[i], i, e[i]) === !1)break;
                        return e
                    },
                    trim: function (e) {
                        return null == e ? "" : (e + "").replace(be, "")
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (s(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : de.call(n, e)), n
                    },
                    inArray: function (e, t, n) {
                        var i;
                        if (t) {
                            if (fe)return fe.call(t, e, n);
                            for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)if (n in t && t[n] === e)return n
                        }
                        return -1
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, i = 0, r = e.length; i < n;)e[r++] = t[i++];
                        if (n !== n)for (; void 0 !== t[i];)e[r++] = t[i++];
                        return e.length = r, e
                    },
                    grep: function (e, t, n) {
                        for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++)i = !t(e[o], o), i !== s && r.push(e[o]);
                        return r
                    },
                    map: function (e, t, n) {
                        var i, r, o = 0, a = [];
                        if (s(e))for (i = e.length; o < i; o++)r = t(e[o], o, n), null != r && a.push(r); else for (o in e)r = t(e[o], o, n), null != r && a.push(r);
                        return ue.apply([], a)
                    },
                    guid: 1,
                    proxy: function e(t, n) {
                        var i, e, r;
                        if ("string" == typeof n && (r = t[n], n = t, t = r), ye.isFunction(t))return i = le.call(arguments, 2), e = function () {
                            return t.apply(n || this, i.concat(le.call(arguments)))
                        }, e.guid = t.guid = t.guid || ye.guid++, e
                    },
                    now: function () {
                        return +new Date
                    },
                    support: ge
                }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = se[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    pe["[object " + t + "]"] = t.toLowerCase()
                });
                var Te = function (e) {
                    function t(e, t, n, i) {
                        var r, o, a, s, c, l, d, p, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)return n;
                        if (!i && ((t ? t.ownerDocument || t : P) !== H && D(t), t = t || H, _)) {
                            if (11 !== m && (l = ve.exec(e)))if (r = l[1]) {
                                if (9 === m) {
                                    if (!(a = t.getElementById(r)))return n;
                                    if (a.id === r)return n.push(a), n
                                } else if (h && (a = h.getElementById(r)) && F(t, a) && a.id === r)return n.push(a), n
                            } else {
                                if (l[2])return K.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName)return K.apply(n, t.getElementsByClassName(r)), n
                            }
                            if (w.qsa && !X[e + " "] && (!M || !M.test(e))) {
                                if (1 !== m) h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = B), d = N(e), o = d.length, c = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;)d[o] = c + " " + f(d[o]);
                                    p = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                                }
                                if (p)try {
                                    return K.apply(n, h.querySelectorAll(p)), n
                                } catch (e) {
                                } finally {
                                    s === B && t.removeAttribute("id")
                                }
                            }
                        }
                        return S(e.replace(se, "$1"), t, n, i)
                    }

                    function n() {
                        function e(n, i) {
                            return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
                        }

                        var t = [];
                        return e
                    }

                    function i(e) {
                        return e[B] = !0, e
                    }

                    function r(e) {
                        var t = H.createElement("div");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function o(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;)k.attrHandle[n[i]] = t
                    }

                    function a(e, t) {
                        var n = t && e,
                            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                        if (i)return i;
                        if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                        return e ? 1 : -1
                    }

                    function s(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e
                        }
                    }

                    function c(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function l(e) {
                        return i(function (t) {
                            return t = +t, i(function (n, i) {
                                for (var r, o = e([], n.length, t), a = o.length; a--;)n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                            })
                        })
                    }

                    function u(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }

                    function d() {
                    }

                    function f(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++)i += e[t].value;
                        return i
                    }

                    function p(e, t, n) {
                        var i = t.dir, r = n && "parentNode" === i, o = z++;
                        return t.first ? function (t, n, o) {
                            for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o)
                        } : function (t, n, a) {
                            var s, c, l, u = [W, o];
                            if (a) {
                                for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, a))return !0
                            } else for (; t = t[i];)if (1 === t.nodeType || r) {
                                if (l = t[B] || (t[B] = {}), c = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = c[i]) && s[0] === W && s[1] === o)return u[2] = s[2];
                                if (c[i] = u, u[2] = e(t, n, a))return !0
                            }
                        }
                    }

                    function h(e) {
                        return e.length > 1 ? function (t, n, i) {
                            for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
                            return !0
                        } : e[0]
                    }

                    function m(e, n, i) {
                        for (var r = 0, o = n.length; r < o; r++)t(e, n[r], i);
                        return i
                    }

                    function g(e, t, n, i, r) {
                        for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s)));
                        return a
                    }

                    function v(e, t, n, r, o, a) {
                        return r && !r[B] && (r = v(r)), o && !o[B] && (o = v(o, a)), i(function (i, a, s, c) {
                            var l, u, d, f = [], p = [], h = a.length, v = i || m(t || "*", s.nodeType ? [s] : s, []),
                                y = !e || !i && t ? v : g(v, f, e, s, c), b = n ? o || (i ? e : h || r) ? [] : a : y;
                            if (n && n(y, b, s, c), r)for (l = g(b, p), r(l, [], s, c), u = l.length; u--;)(d = l[u]) && (b[p[u]] = !(y[p[u]] = d));
                            if (i) {
                                if (o || e) {
                                    if (o) {
                                        for (l = [], u = b.length; u--;)(d = b[u]) && l.push(y[u] = d);
                                        o(null, b = [], l, c)
                                    }
                                    for (u = b.length; u--;)(d = b[u]) && (l = o ? ee(i, d) : f[u]) > -1 && (i[l] = !(a[l] = d))
                                }
                            } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, c) : K.apply(a, b)
                        })
                    }

                    function y(e) {
                        for (var t, n, i, r = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, c = p(function (e) {
                            return e === t
                        }, a, !0), l = p(function (e) {
                            return ee(t, e) > -1
                        }, a, !0), u = [function (e, n, i) {
                            var r = !o && (i || n !== j) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                            return t = null, r
                        }]; s < r; s++)if (n = k.relative[e[s].type]) u = [p(h(u), n)]; else {
                            if (n = k.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                                for (i = ++s; i < r && !k.relative[e[i].type]; i++);
                                return v(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, s < i && y(e.slice(s, i)), i < r && y(e = e.slice(i)), i < r && f(e))
                            }
                            u.push(n)
                        }
                        return h(u)
                    }

                    function b(e, n) {
                        var r = n.length > 0, o = e.length > 0, a = function (i, a, s, c, l) {
                            var u, d, f, p = 0, h = "0", m = i && [], v = [], y = j, b = i || o && k.find.TAG("*", l),
                                x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                            for (l && (j = a === H || a || l); h !== w && null != (u = b[h]); h++) {
                                if (o && u) {
                                    for (d = 0, a || u.ownerDocument === H || (D(u), s = !_); f = e[d++];)if (f(u, a || H, s)) {
                                        c.push(u);
                                        break
                                    }
                                    l && (W = x)
                                }
                                r && ((u = !f && u) && p--, i && m.push(u))
                            }
                            if (p += h, r && h !== p) {
                                for (d = 0; f = n[d++];)f(m, v, a, s);
                                if (i) {
                                    if (p > 0)for (; h--;)m[h] || v[h] || (v[h] = J.call(c));
                                    v = g(v)
                                }
                                K.apply(c, v), l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                            }
                            return l && (W = x, j = y), m
                        };
                        return r ? i(a) : a
                    }

                    var x, w, k, T, C, N, E, S, j, A, L, D, H, q, _, M, O, R, F, B = "sizzle" + 1 * new Date,
                        P = e.document, W = 0, z = 0, I = n(), $ = n(), X = n(), U = function (e, t) {
                            return e === t && (L = !0), 0
                        }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], J = G.pop, Q = G.push, K = G.push, Z = G.slice,
                        ee = function (e, t) {
                            for (var n = 0, i = e.length; n < i; n++)if (e[n] === t)return n;
                            return -1
                        },
                        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                        oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                        ae = new RegExp(ne + "+", "g"),
                        se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                        ce = new RegExp("^" + ne + "*," + ne + "*"),
                        le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                        ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(oe),
                        fe = new RegExp("^" + ie + "$"), pe = {
                            ID: new RegExp("^#(" + ie + ")"),
                            CLASS: new RegExp("^\\.(" + ie + ")"),
                            TAG: new RegExp("^(" + ie + "|[*])"),
                            ATTR: new RegExp("^" + re),
                            PSEUDO: new RegExp("^" + oe),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + te + ")$", "i"),
                            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/,
                        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g,
                        xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                        we = function (e, t, n) {
                            var i = "0x" + t - 65536;
                            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                        }, ke = function () {
                            D()
                        };
                    try {
                        K.apply(G = Z.call(P.childNodes), P.childNodes), G[P.childNodes.length].nodeType
                    } catch (e) {
                        K = {
                            apply: G.length ? function (e, t) {
                                Q.apply(e, Z.call(t))
                            } : function (e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++];);
                                e.length = n - 1
                            }
                        }
                    }
                    w = t.support = {}, C = t.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, D = t.setDocument = function (e) {
                        var t, n, i = e ? e.ownerDocument || e : P;
                        return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, q = H.documentElement, _ = !C(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), w.attributes = r(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), w.getElementsByTagName = r(function (e) {
                            return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
                        }), w.getElementsByClassName = ge.test(H.getElementsByClassName), w.getById = r(function (e) {
                            return q.appendChild(e).id = B, !H.getElementsByName || !H.getElementsByName(B).length
                        }), w.getById ? (k.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && _) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }, k.filter.ID = function (e) {
                            var t = e.replace(xe, we);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete k.find.ID, k.filter.ID = function (e) {
                            var t = e.replace(xe, we);
                            return function (e) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), k.find.TAG = w.getElementsByTagName ? function (e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, i = [], r = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[r++];)1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, k.find.CLASS = w.getElementsByClassName && function (e, t) {
                                if ("undefined" != typeof t.getElementsByClassName && _)return t.getElementsByClassName(e)
                            }, O = [], M = [], (w.qsa = ge.test(H.querySelectorAll)) && (r(function (e) {
                            q.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || M.push(".#.+[+~]")
                        }), r(function (e) {
                            var t = H.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                        })), (w.matchesSelector = ge.test(R = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && r(function (e) {
                            w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), O.push("!=", oe)
                        }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(q.compareDocumentPosition), F = t || ge.test(q.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function (e, t) {
                            if (t)for (; t = t.parentNode;)if (t === e)return !0;
                            return !1
                        }, U = t ? function (e, t) {
                            if (e === t)return L = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === P && F(P, e) ? -1 : t === H || t.ownerDocument === P && F(P, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                        } : function (e, t) {
                            if (e === t)return L = !0, 0;
                            var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], c = [t];
                            if (!r || !o)return e === H ? -1 : t === H ? 1 : r ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                            if (r === o)return a(e, t);
                            for (n = e; n = n.parentNode;)s.unshift(n);
                            for (n = t; n = n.parentNode;)c.unshift(n);
                            for (; s[i] === c[i];)i++;
                            return i ? a(s[i], c[i]) : s[i] === P ? -1 : c[i] === P ? 1 : 0
                        }, H) : H
                    }, t.matches = function (e, n) {
                        return t(e, null, null, n)
                    }, t.matchesSelector = function (e, n) {
                        if ((e.ownerDocument || e) !== H && D(e), n = n.replace(ue, "='$1']"), w.matchesSelector && _ && !X[n + " "] && (!O || !O.test(n)) && (!M || !M.test(n)))try {
                            var i = R.call(e, n);
                            if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i;
                        } catch (e) {
                        }
                        return t(n, H, null, [e]).length > 0
                    }, t.contains = function (e, t) {
                        return (e.ownerDocument || e) !== H && D(e), F(e, t)
                    }, t.attr = function (e, t) {
                        (e.ownerDocument || e) !== H && D(e);
                        var n = k.attrHandle[t.toLowerCase()],
                            i = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                        return void 0 !== i ? i : w.attributes || !_ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, t.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, t.uniqueSort = function (e) {
                        var t, n = [], i = 0, r = 0;
                        if (L = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), L) {
                            for (; t = e[r++];)t === e[r] && (i = n.push(r));
                            for (; i--;)e.splice(n[i], 1)
                        }
                        return A = null, e
                    }, T = t.getText = function (e) {
                        var t, n = "", i = 0, r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent)return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                            } else if (3 === r || 4 === r)return e.nodeValue
                        } else for (; t = e[i++];)n += T(t);
                        return n
                    }, k = t.selectors = {
                        cacheLength: 50,
                        createPseudo: i,
                        match: pe,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {dir: "parentNode", first: !0},
                            " ": {dir: "parentNode"},
                            "+": {dir: "previousSibling", first: !0},
                            "~": {dir: "previousSibling"}
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            }, CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                            }, PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(xe, we).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            }, CLASS: function (e) {
                                var t = I[e + " "];
                                return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && I(e, function (e) {
                                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                    })
                            }, ATTR: function (e, n, i) {
                                return function (r) {
                                    var o = t.attr(r, e);
                                    return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                                }
                            }, CHILD: function (e, t, n, i, r) {
                                var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                                return 1 === i && 0 === r ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, c) {
                                    var l, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                        g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !c && !s, b = !1;
                                    if (g) {
                                        if (o) {
                                            for (; m;) {
                                                for (f = t; f = f[m];)if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                            for (f = g, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === W && l[1], b = p && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)if (1 === f.nodeType && ++b && f === t) {
                                                u[e] = [W, p, b];
                                                break
                                            }
                                        } else if (y && (f = t, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === W && l[1], b = p), b === !1)for (; (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [W, b]), f !== t)););
                                        return b -= r, b === i || b % i === 0 && b / i >= 0
                                    }
                                }
                            }, PSEUDO: function (e, n) {
                                var r,
                                    o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return o[B] ? o(n) : o.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                    for (var i, r = o(e, n), a = r.length; a--;)i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                                }) : function (e) {
                                    return o(e, 0, r)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: i(function (e) {
                                var t = [], n = [], r = E(e.replace(se, "$1"));
                                return r[B] ? i(function (e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function (e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }), has: i(function (e) {
                                return function (n) {
                                    return t(e, n).length > 0
                                }
                            }), contains: i(function (e) {
                                return e = e.replace(xe, we), function (t) {
                                    return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                                }
                            }), lang: i(function (e) {
                                return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function (t) {
                                    var n;
                                    do if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }), target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            }, root: function (e) {
                                return e === q
                            }, focus: function (e) {
                                return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            }, enabled: function (e) {
                                return e.disabled === !1
                            }, disabled: function (e) {
                                return e.disabled === !0
                            }, checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            }, selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                            }, empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                                return !0
                            }, parent: function (e) {
                                return !k.pseudos.empty(e)
                            }, header: function (e) {
                                return me.test(e.nodeName)
                            }, input: function (e) {
                                return he.test(e.nodeName)
                            }, button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            }, text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            }, first: l(function () {
                                return [0]
                            }), last: l(function (e, t) {
                                return [t - 1]
                            }), eq: l(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }), even: l(function (e, t) {
                                for (var n = 0; n < t; n += 2)e.push(n);
                                return e
                            }), odd: l(function (e, t) {
                                for (var n = 1; n < t; n += 2)e.push(n);
                                return e
                            }), lt: l(function (e, t, n) {
                                for (var i = n < 0 ? n + t : n; --i >= 0;)e.push(i);
                                return e
                            }), gt: l(function (e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;)e.push(i);
                                return e
                            })
                        }
                    }, k.pseudos.nth = k.pseudos.eq;
                    for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[x] = s(x);
                    for (x in{submit: !0, reset: !0})k.pseudos[x] = c(x);
                    return d.prototype = k.filters = k.pseudos, k.setFilters = new d, N = t.tokenize = function (e, n) {
                        var i, r, o, a, s, c, l, u = $[e + " "];
                        if (u)return n ? 0 : u.slice(0);
                        for (s = e, c = [], l = k.preFilter; s;) {
                            i && !(r = ce.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), o.push({
                                value: i,
                                type: r[0].replace(se, " ")
                            }), s = s.slice(i.length));
                            for (a in k.filter)!(r = pe[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
                                value: i,
                                type: a,
                                matches: r
                            }), s = s.slice(i.length));
                            if (!i)break
                        }
                        return n ? s.length : s ? t.error(e) : $(e, c).slice(0)
                    }, E = t.compile = function (e, t) {
                        var n, i = [], r = [], o = X[e + " "];
                        if (!o) {
                            for (t || (t = N(e)), n = t.length; n--;)o = y(t[n]), o[B] ? i.push(o) : r.push(o);
                            o = X(e, b(r, i)), o.selector = e
                        }
                        return o
                    }, S = t.select = function (e, t, n, i) {
                        var r, o, a, s, c, l = "function" == typeof e && e, d = !i && N(e = l.selector || e);
                        if (n = n || [], 1 === d.length) {
                            if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && k.relative[o[1].type]) {
                                if (t = (k.find.ID(a.matches[0].replace(xe, we), t) || [])[0], !t)return n;
                                l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                            }
                            for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)if ((c = k.find[s]) && (i = c(a.matches[0].replace(xe, we), ye.test(o[0].type) && u(t.parentNode) || t))) {
                                if (o.splice(r, 1), e = i.length && f(o), !e)return K.apply(n, i), n;
                                break
                            }
                        }
                        return (l || E(e, d))(i, t, !_, n, !t || ye.test(e) && u(t.parentNode) || t), n
                    }, w.sortStable = B.split("").sort(U).join("") === B, w.detectDuplicates = !!L, D(), w.sortDetached = r(function (e) {
                        return 1 & e.compareDocumentPosition(H.createElement("div"))
                    }), r(function (e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || o("type|href|height|width", function (e, t, n) {
                        if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), w.attributes && r(function (e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || o("value", function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
                    }), r(function (e) {
                        return null == e.getAttribute("disabled")
                    }) || o(te, function (e, t, n) {
                        var i;
                        if (!n)return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }), t
                }(o);
                ye.find = Te, ye.expr = Te.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = Te.uniqueSort, ye.text = Te.getText, ye.isXMLDoc = Te.isXML, ye.contains = Te.contains;
                var Ce = function (e, t, n) {
                    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                        if (r && ye(e).is(n))break;
                        i.push(e)
                    }
                    return i
                }, Ne = function (e, t) {
                    for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                    return n
                }, Ee = ye.expr.match.needsContext, Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, je = /^.[^:#\[\.,]*$/;
                ye.filter = function (e, t, n) {
                    var i = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ye.find.matchesSelector(i, e) ? [i] : [] : ye.find.matches(e, ye.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
                }, ye.fn.extend({
                    find: function (e) {
                        var t, n = [], i = this, r = i.length;
                        if ("string" != typeof e)return this.pushStack(ye(e).filter(function () {
                            for (t = 0; t < r; t++)if (ye.contains(i[t], this))return !0
                        }));
                        for (t = 0; t < r; t++)ye.find(e, i[t], n);
                        return n = this.pushStack(r > 1 ? ye.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                    }, filter: function (e) {
                        return this.pushStack(c(this, e || [], !1))
                    }, not: function (e) {
                        return this.pushStack(c(this, e || [], !0))
                    }, is: function (e) {
                        return !!c(this, "string" == typeof e && Ee.test(e) ? ye(e) : e || [], !1).length
                    }
                });
                var Ae, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, De = ye.fn.init = function (e, t, n) {
                    var i, r;
                    if (!e)return this;
                    if (n = n || Ae, "string" == typeof e) {
                        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Le.exec(e), !i || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (i[1]) {
                            if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ce, !0)), Se.test(i[1]) && ye.isPlainObject(t))for (i in t)ye.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this
                        }
                        if (r = ce.getElementById(i[2]), r && r.parentNode) {
                            if (r.id !== i[2])return Ae.find(e);
                            this.length = 1, this[0] = r
                        }
                        return this.context = ce, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ye.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ye) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ye.makeArray(e, this))
                };
                De.prototype = ye.fn, Ae = ye(ce);
                var He = /^(?:parents|prev(?:Until|All))/, qe = {children: !0, contents: !0, next: !0, prev: !0};
                ye.fn.extend({
                    has: function (e) {
                        var t, n = ye(e, this), i = n.length;
                        return this.filter(function () {
                            for (t = 0; t < i; t++)if (ye.contains(this, n[t]))return !0
                        })
                    }, closest: function (e, t) {
                        for (var n, i = 0, r = this.length, o = [], a = Ee.test(e) || "string" != typeof e ? ye(e, t || this.context) : 0; i < r; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                        return this.pushStack(o.length > 1 ? ye.uniqueSort(o) : o)
                    }, index: function (e) {
                        return e ? "string" == typeof e ? ye.inArray(this[0], ye(e)) : ye.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    }, add: function (e, t) {
                        return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))))
                    }, addBack: function (e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), ye.each({
                    parent: function e(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    }, parents: function (e) {
                        return Ce(e, "parentNode")
                    }, parentsUntil: function (e, t, n) {
                        return Ce(e, "parentNode", n)
                    }, next: function (e) {
                        return l(e, "nextSibling")
                    }, prev: function (e) {
                        return l(e, "previousSibling")
                    }, nextAll: function (e) {
                        return Ce(e, "nextSibling")
                    }, prevAll: function (e) {
                        return Ce(e, "previousSibling")
                    }, nextUntil: function (e, t, n) {
                        return Ce(e, "nextSibling", n)
                    }, prevUntil: function (e, t, n) {
                        return Ce(e, "previousSibling", n)
                    }, siblings: function (e) {
                        return Ne((e.parentNode || {}).firstChild, e)
                    }, children: function (e) {
                        return Ne(e.firstChild)
                    }, contents: function (e) {
                        return ye.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ye.merge([], e.childNodes)
                    }
                }, function (e, t) {
                    ye.fn[e] = function (n, i) {
                        var r = ye.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ye.filter(i, r)), this.length > 1 && (qe[e] || (r = ye.uniqueSort(r)), He.test(e) && (r = r.reverse())), this.pushStack(r)
                    }
                });
                var _e = /\S+/g;
                ye.Callbacks = function (e) {
                    e = "string" == typeof e ? u(e) : ye.extend({}, e);
                    var t, n, i, r, o = [], a = [], s = -1, c = function () {
                        for (r = e.once, i = t = !0; a.length; s = -1)for (n = a.shift(); ++s < o.length;)o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                    }, l = {
                        add: function () {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                ye.each(n, function (n, i) {
                                    ye.isFunction(i) ? e.unique && l.has(i) || o.push(i) : i && i.length && "string" !== ye.type(i) && t(i)
                                })
                            }(arguments), n && !t && c()), this
                        }, remove: function () {
                            return ye.each(arguments, function (e, t) {
                                for (var n; (n = ye.inArray(t, o, n)) > -1;)o.splice(n, 1), n <= s && s--
                            }), this
                        }, has: function (e) {
                            return e ? ye.inArray(e, o) > -1 : o.length > 0
                        }, empty: function () {
                            return o && (o = []), this
                        }, disable: function () {
                            return r = a = [], o = n = "", this
                        }, disabled: function () {
                            return !o
                        }, lock: function () {
                            return r = !0, n || l.disable(), this
                        }, locked: function () {
                            return !!r
                        }, fireWith: function (e, n) {
                            return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                        }, fire: function () {
                            return l.fireWith(this, arguments), this
                        }, fired: function () {
                            return !!i
                        }
                    };
                    return l
                }, ye.extend({
                    Deferred: function (e) {
                        var t = [["resolve", "done", ye.Callbacks("once memory"), "resolved"], ["reject", "fail", ye.Callbacks("once memory"), "rejected"], ["notify", "progress", ye.Callbacks("memory")]],
                            n = "pending", i = {
                                state: function () {
                                    return n
                                }, always: function () {
                                    return r.done(arguments).fail(arguments), this
                                }, then: function () {
                                    var e = arguments;
                                    return ye.Deferred(function (n) {
                                        ye.each(t, function (t, o) {
                                            var a = ye.isFunction(e[t]) && e[t];
                                            r[o[1]](function () {
                                                var e = a && a.apply(this, arguments);
                                                e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                            })
                                        }), e = null
                                    }).promise()
                                }, promise: function (e) {
                                    return null != e ? ye.extend(e, i) : i
                                }
                            }, r = {};
                        return i.pipe = i.then, ye.each(t, function (e, o) {
                            var a = o[2], s = o[3];
                            i[o[1]] = a.add, s && a.add(function () {
                                n = s
                            }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                                return r[o[0] + "With"](this === r ? i : this, arguments), this
                            }, r[o[0] + "With"] = a.fireWith
                        }), i.promise(r), e && e.call(r, r), r
                    }, when: function (e) {
                        var t, n, i, r = 0, o = le.call(arguments), a = o.length,
                            s = 1 !== a || e && ye.isFunction(e.promise) ? a : 0, c = 1 === s ? e : ye.Deferred(),
                            l = function (e, n, i) {
                                return function (r) {
                                    n[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : r, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                                }
                            };
                        if (a > 1)for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++)o[r] && ye.isFunction(o[r].promise) ? o[r].promise().progress(l(r, n, t)).done(l(r, i, o)).fail(c.reject) : --s;
                        return s || c.resolveWith(i, o), c.promise()
                    }
                });
                var Me;
                ye.fn.ready = function (e) {
                    return ye.ready.promise().done(e), this
                }, ye.extend({
                    isReady: !1, readyWait: 1, holdReady: function (e) {
                        e ? ye.readyWait++ : ye.ready(!0)
                    }, ready: function (e) {
                        (e === !0 ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, e !== !0 && --ye.readyWait > 0 || (Me.resolveWith(ce, [ye]), ye.fn.triggerHandler && (ye(ce).triggerHandler("ready"), ye(ce).off("ready"))))
                    }
                }), ye.ready.promise = function (e) {
                    if (!Me)if (Me = ye.Deferred(), "complete" === ce.readyState || "loading" !== ce.readyState && !ce.documentElement.doScroll) o.setTimeout(ye.ready); else if (ce.addEventListener) ce.addEventListener("DOMContentLoaded", f), o.addEventListener("load", f); else {
                        ce.attachEvent("onreadystatechange", f), o.attachEvent("onload", f);
                        var t = !1;
                        try {
                            t = null == o.frameElement && ce.documentElement
                        } catch (e) {
                        }
                        t && t.doScroll && !function e() {
                            if (!ye.isReady) {
                                try {
                                    t.doScroll("left")
                                } catch (t) {
                                    return o.setTimeout(e, 50)
                                }
                                d(), ye.ready()
                            }
                        }()
                    }
                    return Me.promise(e)
                }, ye.ready.promise();
                var Oe;
                for (Oe in ye(ge))break;
                ge.ownFirst = "0" === Oe, ge.inlineBlockNeedsLayout = !1, ye(function () {
                    var e, t, n, i;
                    n = ce.getElementsByTagName("body")[0], n && n.style && (t = ce.createElement("div"), i = ce.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ge.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
                }), function () {
                    var e = ce.createElement("div");
                    ge.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        ge.deleteExpando = !1
                    }
                    e = null
                }();
                var Re = function (e) {
                    var t = ye.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
                    return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
                }, Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Be = /([A-Z])/g;
                ye.extend({
                    cache: {},
                    noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
                    hasData: function (e) {
                        return e = e.nodeType ? ye.cache[e[ye.expando]] : e[ye.expando], !!e && !h(e)
                    },
                    data: function (e, t, n) {
                        return m(e, t, n)
                    },
                    removeData: function (e, t) {
                        return g(e, t)
                    },
                    _data: function (e, t, n) {
                        return m(e, t, n, !0)
                    },
                    _removeData: function (e, t) {
                        return g(e, t, !0)
                    }
                }), ye.fn.extend({
                    data: function e(t, i) {
                        var r, o, e, a = this[0], s = a && a.attributes;
                        if (void 0 === t) {
                            if (this.length && (e = ye.data(a), 1 === a.nodeType && !ye._data(a, "parsedAttrs"))) {
                                for (r = s.length; r--;)s[r] && (o = s[r].name, 0 === o.indexOf("data-") && (o = ye.camelCase(o.slice(5)), p(a, o, e[o])));
                                ye._data(a, "parsedAttrs", !0)
                            }
                            return e
                        }
                        return "object" === ("undefined" == typeof t ? "undefined" : n(t)) ? this.each(function () {
                            ye.data(this, t)
                        }) : arguments.length > 1 ? this.each(function () {
                            ye.data(this, t, i)
                        }) : a ? p(a, t, ye.data(a, t)) : void 0
                    }, removeData: function (e) {
                        return this.each(function () {
                            ye.removeData(this, e)
                        })
                    }
                }), ye.extend({
                    queue: function e(t, n, i) {
                        var e;
                        if (t)return n = (n || "fx") + "queue", e = ye._data(t, n), i && (!e || ye.isArray(i) ? e = ye._data(t, n, ye.makeArray(i)) : e.push(i)), e || []
                    }, dequeue: function (e, t) {
                        t = t || "fx";
                        var n = ye.queue(e, t), i = n.length, r = n.shift(), o = ye._queueHooks(e, t), a = function () {
                            ye.dequeue(e, t)
                        };
                        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
                    }, _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return ye._data(e, n) || ye._data(e, n, {
                                empty: ye.Callbacks("once memory").add(function () {
                                    ye._removeData(e, t + "queue"), ye._removeData(e, n)
                                })
                            })
                    }
                }), ye.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                            var n = ye.queue(this, e, t);
                            ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e)
                        })
                    }, dequeue: function (e) {
                        return this.each(function () {
                            ye.dequeue(this, e)
                        })
                    }, clearQueue: function (e) {
                        return this.queue(e || "fx", [])
                    }, promise: function (e, t) {
                        var n, i = 1, r = ye.Deferred(), o = this, a = this.length, s = function () {
                            --i || r.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = ye._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                        return s(), r.promise(t)
                    }
                }), function () {
                    var e;
                    ge.shrinkWrapBlocks = function () {
                        if (null != e)return e;
                        e = !1;
                        var t, n, i;
                        return n = ce.getElementsByTagName("body")[0], n && n.style ? (t = ce.createElement("div"), i = ce.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ce.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
                    }
                }();
                var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    We = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
                    ze = ["Top", "Right", "Bottom", "Left"], Ie = function (e, t) {
                        return e = t || e, "none" === ye.css(e, "display") || !ye.contains(e.ownerDocument, e)
                    }, $e = function e(t, n, i, r, o, a, s) {
                        var c = 0, l = t.length, u = null == i;
                        if ("object" === ye.type(i)) {
                            o = !0;
                            for (c in i)e(t, n, c, i[c], !0, a, s)
                        } else if (void 0 !== r && (o = !0, ye.isFunction(r) || (s = !0), u && (s ? (n.call(t, r), n = null) : (u = n, n = function (e, t, n) {
                                return u.call(ye(e), n)
                            })), n))for (; c < l; c++)n(t[c], i, s ? r : r.call(t[c], c, n(t[c], i)));
                        return o ? t : u ? n.call(t) : l ? n(t[0], i) : a
                    }, Xe = /^(?:checkbox|radio)$/i, Ue = /<([\w:-]+)/, Ve = /^$|\/(?:java|ecma)script/i, Ye = /^\s+/,
                    Ge = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
                !function () {
                    var e = ce.createElement("div"), t = ce.createDocumentFragment(), n = ce.createElement("input");
                    e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ge.leadingWhitespace = 3 === e.firstChild.nodeType, ge.tbody = !e.getElementsByTagName("tbody").length, ge.htmlSerialize = !!e.getElementsByTagName("link").length, ge.html5Clone = "<:nav></:nav>" !== ce.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ge.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ce.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ge.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.noCloneEvent = !!e.addEventListener, e[ye.expando] = 1, ge.attributes = !e.getAttribute(ye.expando)
                }();
                var Je = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: ge.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                };
                Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td;
                var Qe = /<|&#?\w+;/, Ke = /<tbody/i;
                !function () {
                    var e, t, n = ce.createElement("div");
                    for (e in{
                        submit: !0,
                        change: !0,
                        focusin: !0
                    })t = "on" + e, (ge[e] = t in o) || (n.setAttribute(t, "t"), ge[e] = n.attributes[t].expando === !1);
                    n = null
                }();
                var Ze = /^(?:input|select|textarea)$/i, et = /^key/,
                    tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, nt = /^(?:focusinfocus|focusoutblur)$/,
                    it = /^([^.]*)(?:\.(.+)|)/;
                ye.event = {
                    global: {},
                    add: function (e, t, n, i, r) {
                        var o, a, s, c, l, u, d, f, p, h, m, g = ye._data(e);
                        if (g) {
                            for (n.handler && (c = n, n = c.handler, r = c.selector), n.guid || (n.guid = ye.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function (e) {
                                return "undefined" == typeof ye || e && ye.event.triggered === e.type ? void 0 : ye.event.dispatch.apply(u.elem, arguments)
                            }, u.elem = e), t = (t || "").match(_e) || [""], s = t.length; s--;)o = it.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = ye.event.special[p] || {}, p = (r ? l.delegateType : l.bindType) || p, l = ye.event.special[p] || {}, d = ye.extend({
                                type: p,
                                origType: m,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && ye.expr.match.needsContext.test(r),
                                namespace: h.join(".")
                            }, c), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), ye.event.global[p] = !0);
                            e = null
                        }
                    },
                    remove: function (e, t, n, i, r) {
                        var o, a, s, c, l, u, d, f, p, h, m, g = ye.hasData(e) && ye._data(e);
                        if (g && (u = g.events)) {
                            for (t = (t || "").match(_e) || [""], l = t.length; l--;)if (s = it.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                                for (d = ye.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = f.length; o--;)a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                                c && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ye.removeEvent(e, p, g.handle), delete u[p])
                            } else for (p in u)ye.event.remove(e, p + t[l], n, i, !0);
                            ye.isEmptyObject(u) && (delete g.handle, ye._removeData(e, "events"))
                        }
                    },
                    trigger: function (e, t, i, r) {
                        var a, s, c, l, u, d, f, p = [i || ce], h = me.call(e, "type") ? e.type : e,
                            m = me.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (c = d = i = i || ce, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(h + ye.event.triggered) && (h.indexOf(".") > -1 && (m = h.split("."), h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, e = e[ye.expando] ? e : new ye.Event(h, "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e), e.isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ye.makeArray(t, [e]), u = ye.event.special[h] || {}, r || !u.trigger || u.trigger.apply(i, t) !== !1)) {
                            if (!r && !u.noBubble && !ye.isWindow(i)) {
                                for (l = u.delegateType || h, nt.test(l + h) || (c = c.parentNode); c; c = c.parentNode)p.push(c), d = c;
                                d === (i.ownerDocument || ce) && p.push(d.defaultView || d.parentWindow || o)
                            }
                            for (f = 0; (c = p[f++]) && !e.isPropagationStopped();)e.type = f > 1 ? l : u.bindType || h, a = (ye._data(c, "events") || {})[e.type] && ye._data(c, "handle"), a && a.apply(c, t), a = s && c[s], a && a.apply && Re(c) && (e.result = a.apply(c, t), e.result === !1 && e.preventDefault());
                            if (e.type = h, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), t) === !1) && Re(i) && s && i[h] && !ye.isWindow(i)) {
                                d = i[s], d && (i[s] = null), ye.event.triggered = h;
                                try {
                                    i[h]()
                                } catch (e) {
                                }
                                ye.event.triggered = void 0, d && (i[s] = d)
                            }
                            return e.result
                        }
                    },
                    dispatch: function (e) {
                        e = ye.event.fix(e);
                        var t, n, i, r, o, a = [], s = le.call(arguments),
                            c = (ye._data(this, "events") || {})[e.type] || [], l = ye.event.special[e.type] || {};
                        if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                            for (a = ye.event.handlers.call(this, e, c), t = 0; (r = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((ye.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, e), e.result
                        }
                    },
                    handlers: function (e, t) {
                        var n, i, r, o, a = [], s = t.delegateCount, c = e.target;
                        if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; c != this; c = c.parentNode || this)if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; n < s; n++)o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ye(r, this).index(c) > -1 : ye.find(r, this, null, [c]).length), i[r] && i.push(o);
                            i.length && a.push({elem: c, handlers: i})
                        }
                        return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
                    },
                    fix: function (e) {
                        if (e[ye.expando])return e;
                        var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
                        for (a || (this.fixHooks[r] = a = tt.test(r) ? this.mouseHooks : et.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ye.Event(o), t = i.length; t--;)n = i[t], e[n] = o[n];
                        return e.target || (e.target = o.srcElement || ce), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function (e, t) {
                            var n, i, r, o = t.button, a = t.fromElement;
                            return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ce, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                        }
                    },
                    special: {
                        load: {noBubble: !0}, focus: {
                            trigger: function () {
                                if (this !== N() && this.focus)try {
                                    return this.focus(), !1
                                } catch (e) {
                                }
                            }, delegateType: "focusin"
                        }, blur: {
                            trigger: function () {
                                if (this === N() && this.blur)return this.blur(), !1
                            }, delegateType: "focusout"
                        }, click: {
                            trigger: function () {
                                if (ye.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                            }, _default: function (e) {
                                return ye.nodeName(e.target, "a")
                            }
                        }, beforeunload: {
                            postDispatch: function (e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    },
                    simulate: function (e, t, n) {
                        var i = ye.extend(new ye.Event, n, {type: e, isSimulated: !0});
                        ye.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
                    }
                }, ye.removeEvent = ce.removeEventListener ? function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                } : function (e, t, n) {
                    var i = "on" + t;
                    e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
                }, ye.Event = function (e, t) {
                    return this instanceof ye.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T : C) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), void(this[ye.expando] = !0)) : new ye.Event(e, t)
                }, ye.Event.prototype = {
                    constructor: ye.Event,
                    isDefaultPrevented: C,
                    isPropagationStopped: C,
                    isImmediatePropagationStopped: C,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = T, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        this.isPropagationStopped = T, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = T, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, ye.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function (e, t) {
                    ye.event.special[e] = {
                        delegateType: t, bindType: t, handle: function (e) {
                            var n, i = this, r = e.relatedTarget, o = e.handleObj;
                            return r && (r === i || ye.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                }), ge.submit || (ye.event.special.submit = {
                    setup: function () {
                        return !ye.nodeName(this, "form") && void ye.event.add(this, "click._submit keypress._submit", function (e) {
                                var t = e.target,
                                    n = ye.nodeName(t, "input") || ye.nodeName(t, "button") ? ye.prop(t, "form") : void 0;
                                n && !ye._data(n, "submit") && (ye.event.add(n, "submit._submit", function (e) {
                                    e._submitBubble = !0
                                }), ye._data(n, "submit", !0))
                            })
                    }, postDispatch: function (e) {
                        e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ye.event.simulate("submit", this.parentNode, e))
                    }, teardown: function () {
                        return !ye.nodeName(this, "form") && void ye.event.remove(this, "._submit")
                    }
                }), ge.change || (ye.event.special.change = {
                    setup: function () {
                        return Ze.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ye.event.add(this, "propertychange._change", function (e) {
                            "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                        }), ye.event.add(this, "click._change", function (e) {
                            this._justChanged && !e.isTrigger && (this._justChanged = !1), ye.event.simulate("change", this, e)
                        })), !1) : void ye.event.add(this, "beforeactivate._change", function (e) {
                            var t = e.target;
                            Ze.test(t.nodeName) && !ye._data(t, "change") && (ye.event.add(t, "change._change", function (e) {
                                !this.parentNode || e.isSimulated || e.isTrigger || ye.event.simulate("change", this.parentNode, e)
                            }), ye._data(t, "change", !0))
                        })
                    }, handle: function (e) {
                        var t = e.target;
                        if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
                    }, teardown: function () {
                        return ye.event.remove(this, "._change"), !Ze.test(this.nodeName)
                    }
                }), ge.focusin || ye.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                    var n = function (e) {
                        ye.event.simulate(t, e.target, ye.event.fix(e))
                    };
                    ye.event.special[t] = {
                        setup: function () {
                            var i = this.ownerDocument || this, r = ye._data(i, t);
                            r || i.addEventListener(e, n, !0), ye._data(i, t, (r || 0) + 1)
                        }, teardown: function () {
                            var i = this.ownerDocument || this, r = ye._data(i, t) - 1;
                            r ? ye._data(i, t, r) : (i.removeEventListener(e, n, !0), ye._removeData(i, t))
                        }
                    }
                }), ye.fn.extend({
                    on: function (e, t, n, i) {
                        return E(this, e, t, n, i)
                    }, one: function (e, t, n, i) {
                        return E(this, e, t, n, i, 1)
                    }, off: function (e, t, i) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" === ("undefined" == typeof e ? "undefined" : n(e))) {
                            for (o in e)this.off(o, t, e[o]);
                            return this
                        }
                        return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = C), this.each(function () {
                            ye.event.remove(this, e, i, t)
                        })
                    }, trigger: function (e, t) {
                        return this.each(function () {
                            ye.event.trigger(e, t, this)
                        })
                    }, triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n)return ye.event.trigger(e, t, n, !0);
                    }
                });
                var rt = / jQuery\d+="(?:null|\d+)"/g, ot = new RegExp("<(?:" + Ge + ")[\\s/>]", "i"),
                    at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                    st = /<script|<style|<link/i, ct = /checked\s*(?:[^=]|=\s*.checked.)/i, lt = /^true\/(.*)/,
                    ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, dt = y(ce),
                    ft = dt.appendChild(ce.createElement("div"));
                ye.extend({
                    htmlPrefilter: function (e) {
                        return e.replace(at, "<$1></$2>")
                    }, clone: function e(t, n, i) {
                        var r, o, e, a, s, c = ye.contains(t.ownerDocument, t);
                        if (ge.html5Clone || ye.isXMLDoc(t) || !ot.test("<" + t.nodeName + ">") ? e = t.cloneNode(!0) : (ft.innerHTML = t.outerHTML, ft.removeChild(e = ft.firstChild)), !(ge.noCloneEvent && ge.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ye.isXMLDoc(t)))for (r = b(e), s = b(t), a = 0; null != (o = s[a]); ++a)r[a] && D(o, r[a]);
                        if (n)if (i)for (s = s || b(t), r = r || b(e), a = 0; null != (o = s[a]); a++)L(o, r[a]); else L(t, e);
                        return r = b(e, "script"), r.length > 0 && x(r, !c && b(t, "script")), r = s = o = null, e
                    }, cleanData: function (e, t) {
                        for (var n, i, r, o, a = 0, s = ye.expando, c = ye.cache, l = ge.attributes, u = ye.event.special; null != (n = e[a]); a++)if ((t || Re(n)) && (r = n[s], o = r && c[r])) {
                            if (o.events)for (i in o.events)u[i] ? ye.event.remove(n, i) : ye.removeEvent(n, i, o.handle);
                            c[r] && (delete c[r], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), se.push(r))
                        }
                    }
                }), ye.fn.extend({
                    domManip: H, detach: function (e) {
                        return q(this, e, !0)
                    }, remove: function (e) {
                        return q(this, e)
                    }, text: function (e) {
                        return $e(this, function (e) {
                            return void 0 === e ? ye.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ce).createTextNode(e))
                        }, null, e, arguments.length)
                    }, append: function () {
                        return H(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = S(this, e);
                                t.appendChild(e)
                            }
                        })
                    }, prepend: function () {
                        return H(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = S(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    }, before: function () {
                        return H(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    }, after: function () {
                        return H(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    }, empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) {
                            for (1 === e.nodeType && ye.cleanData(b(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                            e.options && ye.nodeName(e, "select") && (e.options.length = 0)
                        }
                        return this
                    }, clone: function (e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map(function () {
                            return ye.clone(this, e, t)
                        })
                    }, html: function (e) {
                        return $e(this, function (e) {
                            var t = this[0] || {}, n = 0, i = this.length;
                            if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(rt, "") : void 0;
                            if ("string" == typeof e && !st.test(e) && (ge.htmlSerialize || !ot.test(e)) && (ge.leadingWhitespace || !Ye.test(e)) && !Je[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = ye.htmlPrefilter(e);
                                try {
                                    for (; n < i; n++)t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(b(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (e) {
                                }
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    }, replaceWith: function () {
                        var e = [];
                        return H(this, arguments, function (t) {
                            var n = this.parentNode;
                            ye.inArray(this, e) < 0 && (ye.cleanData(b(this)), n && n.replaceChild(t, this))
                        }, e)
                    }
                }), ye.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function (e, t) {
                    ye.fn[e] = function (e) {
                        for (var n, i = 0, r = [], o = ye(e), a = o.length - 1; i <= a; i++)n = i === a ? this : this.clone(!0), ye(o[i])[t](n), de.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
                var pt, ht = {HTML: "block", BODY: "block"}, mt = /^margin/,
                    gt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"), vt = function (e, t, n, i) {
                        var r, o, a = {};
                        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
                        r = n.apply(e, i || []);
                        for (o in t)e.style[o] = a[o];
                        return r
                    }, yt = ce.documentElement;
                !function () {
                    function e() {
                        var e, u, d = ce.documentElement;
                        d.appendChild(c), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = i = s = !1, n = a = !0, o.getComputedStyle && (u = o.getComputedStyle(l), t = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, i = "4px" === (u || {width: "4px"}).width, l.style.marginRight = "50%", n = "4px" === (u || {marginRight: "4px"}).marginRight, e = l.appendChild(ce.createElement("div")), e.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", l.style.width = "1px", a = !parseFloat((o.getComputedStyle(e) || {}).marginRight), l.removeChild(e)), l.style.display = "none", r = 0 === l.getClientRects().length, r && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", e = l.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === e[0].offsetHeight, r && (e[0].style.display = "", e[1].style.display = "none", r = 0 === e[0].offsetHeight)), d.removeChild(c)
                    }

                    var t, n, i, r, a, s, c = ce.createElement("div"), l = ce.createElement("div");
                    l.style && (l.style.cssText = "float:left;opacity:.5", ge.opacity = "0.5" === l.style.opacity, ge.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === l.style.backgroundClip, c = ce.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", c.appendChild(l), ge.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, ye.extend(ge, {
                        reliableHiddenOffsets: function () {
                            return null == t && e(), r
                        }, boxSizingReliable: function () {
                            return null == t && e(), i
                        }, pixelMarginRight: function () {
                            return null == t && e(), n
                        }, pixelPosition: function () {
                            return null == t && e(), t
                        }, reliableMarginRight: function () {
                            return null == t && e(), a
                        }, reliableMarginLeft: function () {
                            return null == t && e(), s
                        }
                    }))
                }();
                var bt, xt, wt = /^(top|right|bottom|left)$/;
                o.getComputedStyle ? (bt = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = o), t.getComputedStyle(e)
                }, xt = function (e, t, n) {
                    var i, r, o, a, s = e.style;
                    return n = n || bt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || ye.contains(e.ownerDocument, e) || (a = ye.style(e, t)), n && !ge.pixelMarginRight() && gt.test(a) && mt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
                }) : yt.currentStyle && (bt = function (e) {
                        return e.currentStyle
                    }, xt = function (e, t, n) {
                        var i, r, o, a, s = e.style;
                        return n = n || bt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), gt.test(a) && !wt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
                    });
                var kt = /alpha\([^)]*\)/i, Tt = /opacity\s*=\s*([^)]*)/i, Ct = /^(none|table(?!-c[ea]).+)/,
                    Nt = new RegExp("^(" + Pe + ")(.*)$", "i"),
                    Et = {position: "absolute", visibility: "hidden", display: "block"},
                    St = {letterSpacing: "0", fontWeight: "400"}, jt = ["Webkit", "O", "Moz", "ms"],
                    At = ce.createElement("div").style;
                ye.extend({
                    cssHooks: {
                        opacity: {
                            get: function (e, t) {
                                if (t) {
                                    var n = xt(e, "opacity");
                                    return "" === n ? "1" : n
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
                    cssProps: {float: ge.cssFloat ? "cssFloat" : "styleFloat"},
                    style: function e(t, i, r, o) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var a, s, c, l = ye.camelCase(i), e = t.style;
                            if (i = ye.cssProps[l] || (ye.cssProps[l] = R(l) || l), c = ye.cssHooks[i] || ye.cssHooks[l], void 0 === r)return c && "get" in c && void 0 !== (a = c.get(t, !1, o)) ? a : e[i];
                            if (s = "undefined" == typeof r ? "undefined" : n(r), "string" === s && (a = We.exec(r)) && a[1] && (r = v(t, i, a), s = "number"), null != r && r === r && ("number" === s && (r += a && a[3] || (ye.cssNumber[l] ? "" : "px")), ge.clearCloneStyle || "" !== r || 0 !== i.indexOf("background") || (e[i] = "inherit"), !(c && "set" in c && void 0 === (r = c.set(t, r, o)))))try {
                                e[i] = r
                            } catch (e) {
                            }
                        }
                    },
                    css: function (e, t, n, i) {
                        var r, o, a, s = ye.camelCase(t);
                        return t = ye.cssProps[s] || (ye.cssProps[s] = R(s) || s), a = ye.cssHooks[t] || ye.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = xt(e, t, i)), "normal" === o && t in St && (o = St[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
                    }
                }), ye.each(["height", "width"], function (e, t) {
                    ye.cssHooks[t] = {
                        get: function (e, n, i) {
                            if (n)return Ct.test(ye.css(e, "display")) && 0 === e.offsetWidth ? vt(e, Et, function () {
                                return W(e, t, i)
                            }) : W(e, t, i)
                        }, set: function (e, n, i) {
                            var r = i && bt(e);
                            return B(e, n, i ? P(e, t, i, ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, r), r) : 0)
                        }
                    }
                }), ge.opacity || (ye.cssHooks.opacity = {
                    get: function (e, t) {
                        return Tt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                    }, set: function (e, t) {
                        var n = e.style, i = e.currentStyle,
                            r = ye.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                            o = i && i.filter || n.filter || "";
                        n.zoom = 1, (t >= 1 || "" === t) && "" === ye.trim(o.replace(kt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = kt.test(o) ? o.replace(kt, r) : o + " " + r)
                    }
                }), ye.cssHooks.marginRight = O(ge.reliableMarginRight, function (e, t) {
                    if (t)return vt(e, {display: "inline-block"}, xt, [e, "marginRight"])
                }), ye.cssHooks.marginLeft = O(ge.reliableMarginLeft, function (e, t) {
                    if (t)return (parseFloat(xt(e, "marginLeft")) || (ye.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - vt(e, {marginLeft: 0}, function () {
                                return e.getBoundingClientRect().left
                            }) : 0)) + "px"
                }), ye.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                    ye.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)r[e + ze[i] + t] = o[i] || o[i - 2] || o[0];
                            return r
                        }
                    }, mt.test(e) || (ye.cssHooks[e + t].set = B)
                }), ye.fn.extend({
                    css: function (e, t) {
                        return $e(this, function (e, t, n) {
                            var i, r, o = {}, a = 0;
                            if (ye.isArray(t)) {
                                for (i = bt(e), r = t.length; a < r; a++)o[t[a]] = ye.css(e, t[a], !1, i);
                                return o
                            }
                            return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t)
                        }, e, t, arguments.length > 1)
                    }, show: function () {
                        return F(this, !0)
                    }, hide: function () {
                        return F(this)
                    }, toggle: function (e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                            Ie(this) ? ye(this).show() : ye(this).hide()
                        })
                    }
                }), ye.Tween = z, z.prototype = {
                    constructor: z, init: function (e, t, n, i, r, o) {
                        this.elem = e, this.prop = n, this.easing = r || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ye.cssNumber[n] ? "" : "px")
                    }, cur: function () {
                        var e = z.propHooks[this.prop];
                        return e && e.get ? e.get(this) : z.propHooks._default.get(this)
                    }, run: function (e) {
                        var t, n = z.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
                    }
                }, z.prototype.init.prototype = z.prototype, z.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                        }, set: function (e) {
                            ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, ye.easing = {
                    linear: function (e) {
                        return e
                    }, swing: function (e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    }, _default: "swing"
                }, ye.fx = z.prototype.init, ye.fx.step = {};
                var Lt, Dt, Ht = /^(?:toggle|show|hide)$/, qt = /queueHooks$/;
                ye.Animation = ye.extend(Y, {
                    tweeners: {
                        "*": [function (e, t) {
                            var n = this.createTween(e, t);
                            return v(n.elem, e, We.exec(t), n), n
                        }]
                    }, tweener: function (e, t) {
                        ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
                        for (var n, i = 0, r = e.length; i < r; i++)n = e[i], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(t)
                    }, prefilters: [U], prefilter: function (e, t) {
                        t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
                    }
                }), ye.speed = function (e, t, i) {
                    var r = e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) ? ye.extend({}, e) : {
                        complete: i || !i && t || ye.isFunction(e) && e,
                        duration: e,
                        easing: i && t || t && !ye.isFunction(t) && t
                    };
                    return r.duration = ye.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ye.fx.speeds ? ye.fx.speeds[r.duration] : ye.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                        ye.isFunction(r.old) && r.old.call(this), r.queue && ye.dequeue(this, r.queue)
                    }, r
                }, ye.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(Ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
                    }, animate: function (e, t, n, i) {
                        var r = ye.isEmptyObject(e), o = ye.speed(t, n, i), a = function () {
                            var t = Y(this, ye.extend({}, e), o);
                            (r || ye._data(this, "finish")) && t.stop(!0)
                        };
                        return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                    }, stop: function (e, t, n) {
                        var i = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                            var t = !0, r = null != e && e + "queueHooks", o = ye.timers, a = ye._data(this);
                            if (r) a[r] && a[r].stop && i(a[r]); else for (r in a)a[r] && a[r].stop && qt.test(r) && i(a[r]);
                            for (r = o.length; r--;)o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                            !t && n || ye.dequeue(this, e)
                        })
                    }, finish: function (e) {
                        return e !== !1 && (e = e || "fx"), this.each(function () {
                            var t, n = ye._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ye.timers,
                                a = i ? i.length : 0;
                            for (n.finish = !0, ye.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++)i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), ye.each(["toggle", "show", "hide"], function (e, t) {
                    var n = ye.fn[t];
                    ye.fn[t] = function (e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r)
                    }
                }), ye.each({
                    slideDown: $("show"),
                    slideUp: $("hide"),
                    slideToggle: $("toggle"),
                    fadeIn: {opacity: "show"},
                    fadeOut: {opacity: "hide"},
                    fadeToggle: {opacity: "toggle"}
                }, function (e, t) {
                    ye.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                }), ye.timers = [], ye.fx.tick = function () {
                    var e, t = ye.timers, n = 0;
                    for (Lt = ye.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                    t.length || ye.fx.stop(), Lt = void 0
                }, ye.fx.timer = function (e) {
                    ye.timers.push(e), e() ? ye.fx.start() : ye.timers.pop()
                }, ye.fx.interval = 13, ye.fx.start = function () {
                    Dt || (Dt = o.setInterval(ye.fx.tick, ye.fx.interval))
                }, ye.fx.stop = function () {
                    o.clearInterval(Dt), Dt = null
                }, ye.fx.speeds = {slow: 600, fast: 200, _default: 400}, ye.fn.delay = function (e, t) {
                    return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                        var i = o.setTimeout(t, e);
                        n.stop = function () {
                            o.clearTimeout(i)
                        }
                    })
                }, function () {
                    var e, t = ce.createElement("input"), n = ce.createElement("div"), i = ce.createElement("select"),
                        r = i.appendChild(ce.createElement("option"));
                    n = ce.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ge.getSetAttribute = "t" !== n.className, ge.style = /top/.test(e.getAttribute("style")), ge.hrefNormalized = "/a" === e.getAttribute("href"), ge.checkOn = !!t.value, ge.optSelected = r.selected, ge.enctype = !!ce.createElement("form").enctype, i.disabled = !0, ge.optDisabled = !r.disabled, t = ce.createElement("input"), t.setAttribute("value", ""), ge.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ge.radioValue = "t" === t.value
                }();
                var _t = /\r/g, Mt = /[\x20\t\r\n\f]+/g;
                ye.fn.extend({
                    val: function (e) {
                        var t, n, i, r = this[0];
                        {
                            if (arguments.length)return i = ye.isFunction(e), this.each(function (n) {
                                var r;
                                1 === this.nodeType && (r = i ? e.call(this, n, ye(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ye.isArray(r) && (r = ye.map(r, function (e) {
                                        return null == e ? "" : e + ""
                                    })), t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                            });
                            if (r)return t = ye.valHooks[r.type] || ye.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)
                        }
                    }
                }), ye.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = ye.find.attr(e, "value");
                                return null != t ? t : ye.trim(ye.text(e)).replace(Mt, " ")
                            }
                        }, select: {
                            get: function (e) {
                                for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, c = r < 0 ? s : o ? r : 0; c < s; c++)if (n = i[c], (n.selected || c === r) && (ge.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ye.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = ye(n).val(), o)return t;
                                    a.push(t)
                                }
                                return a
                            }, set: function (e, t) {
                                for (var n, i, r = e.options, o = ye.makeArray(t), a = r.length; a--;)if (i = r[a], ye.inArray(ye.valHooks.option.get(i), o) > -1)try {
                                    i.selected = n = !0
                                } catch (e) {
                                    i.scrollHeight
                                } else i.selected = !1;
                                return n || (e.selectedIndex = -1), r
                            }
                        }
                    }
                }), ye.each(["radio", "checkbox"], function () {
                    ye.valHooks[this] = {
                        set: function (e, t) {
                            if (ye.isArray(t))return e.checked = ye.inArray(ye(e).val(), t) > -1
                        }
                    }, ge.checkOn || (ye.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                });
                var Ot, Rt, Ft = ye.expr.attrHandle, Bt = /^(?:checked|selected)$/i, Pt = ge.getSetAttribute,
                    Wt = ge.input;
                ye.fn.extend({
                    attr: function (e, t) {
                        return $e(this, ye.attr, e, t, arguments.length > 1)
                    }, removeAttr: function (e) {
                        return this.each(function () {
                            ye.removeAttr(this, e)
                        })
                    }
                }), ye.extend({
                    attr: function (e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof e.getAttribute ? ye.prop(e, t, n) : (1 === o && ye.isXMLDoc(e) || (t = t.toLowerCase(), r = ye.attrHooks[t] || (ye.expr.match.bool.test(t) ? Rt : Ot)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ye.find.attr(e, t), null == i ? void 0 : i))
                    }, attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!ge.radioValue && "radio" === t && ye.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    }, removeAttr: function (e, t) {
                        var n, i, r = 0, o = t && t.match(_e);
                        if (o && 1 === e.nodeType)for (; n = o[r++];)i = ye.propFix[n] || n, ye.expr.match.bool.test(n) ? Wt && Pt || !Bt.test(n) ? e[i] = !1 : e[ye.camelCase("default-" + n)] = e[i] = !1 : ye.attr(e, n, ""), e.removeAttribute(Pt ? n : i)
                    }
                }), Rt = {
                    set: function (e, t, n) {
                        return t === !1 ? ye.removeAttr(e, n) : Wt && Pt || !Bt.test(n) ? e.setAttribute(!Pt && ye.propFix[n] || n, n) : e[ye.camelCase("default-" + n)] = e[n] = !0, n
                    }
                }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = Ft[t] || ye.find.attr;
                    Wt && Pt || !Bt.test(t) ? Ft[t] = function (e, t, i) {
                        var r, o;
                        return i || (o = Ft[t], Ft[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ft[t] = o), r
                    } : Ft[t] = function (e, t, n) {
                        if (!n)return e[ye.camelCase("default-" + t)] ? t.toLowerCase() : null
                    }
                }), Wt && Pt || (ye.attrHooks.value = {
                    set: function (e, t, n) {
                        return ye.nodeName(e, "input") ? void(e.defaultValue = t) : Ot && Ot.set(e, t, n)
                    }
                }), Pt || (Ot = {
                    set: function (e, t, n) {
                        var i = e.getAttributeNode(n);
                        if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n))return t
                    }
                }, Ft.id = Ft.name = Ft.coords = function (e, t, n) {
                    var i;
                    if (!n)return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
                }, ye.valHooks.button = {
                    get: function (e, t) {
                        var n = e.getAttributeNode(t);
                        if (n && n.specified)return n.value
                    }, set: Ot.set
                }, ye.attrHooks.contenteditable = {
                    set: function (e, t, n) {
                        Ot.set(e, "" !== t && t, n)
                    }
                }, ye.each(["width", "height"], function (e, t) {
                    ye.attrHooks[t] = {
                        set: function (e, n) {
                            if ("" === n)return e.setAttribute(t, "auto"), n
                        }
                    }
                })), ge.style || (ye.attrHooks.style = {
                    get: function (e) {
                        return e.style.cssText || void 0
                    }, set: function (e, t) {
                        return e.style.cssText = t + ""
                    }
                });
                var zt = /^(?:input|select|textarea|button|object)$/i, It = /^(?:a|area)$/i;
                ye.fn.extend({
                    prop: function (e, t) {
                        return $e(this, ye.prop, e, t, arguments.length > 1)
                    }, removeProp: function (e) {
                        return e = ye.propFix[e] || e, this.each(function () {
                            try {
                                this[e] = void 0, delete this[e]
                            } catch (e) {
                            }
                        })
                    }
                }), ye.extend({
                    prop: function (e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)return 1 === o && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, r = ye.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                    }, propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = ye.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : zt.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    }, propFix: {for: "htmlFor", class: "className"}
                }), ge.hrefNormalized || ye.each(["href", "src"], function (e, t) {
                    ye.propHooks[t] = {
                        get: function (e) {
                            return e.getAttribute(t, 4)
                        }
                    }
                }), ge.optSelected || (ye.propHooks.selected = {
                    get: function (e) {
                        var t = e.parentNode;
                        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                    }, set: function (e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    ye.propFix[this.toLowerCase()] = this
                }), ge.enctype || (ye.propFix.enctype = "encoding");
                var $t = /[\t\r\n\f]/g;
                ye.fn.extend({
                    addClass: function (e) {
                        var t, n, i, r, o, a, s, c = 0;
                        if (ye.isFunction(e))return this.each(function (t) {
                            ye(this).addClass(e.call(this, t, G(this)))
                        });
                        if ("string" == typeof e && e)for (t = e.match(_e) || []; n = this[c++];)if (r = G(n), i = 1 === n.nodeType && (" " + r + " ").replace($t, " ")) {
                            for (a = 0; o = t[a++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = ye.trim(i), r !== s && ye.attr(n, "class", s)
                        }
                        return this
                    }, removeClass: function (e) {
                        var t, n, i, r, o, a, s, c = 0;
                        if (ye.isFunction(e))return this.each(function (t) {
                            ye(this).removeClass(e.call(this, t, G(this)))
                        });
                        if (!arguments.length)return this.attr("class", "");
                        if ("string" == typeof e && e)for (t = e.match(_e) || []; n = this[c++];)if (r = G(n), i = 1 === n.nodeType && (" " + r + " ").replace($t, " ")) {
                            for (a = 0; o = t[a++];)for (; i.indexOf(" " + o + " ") > -1;)i = i.replace(" " + o + " ", " ");
                            s = ye.trim(i), r !== s && ye.attr(n, "class", s)
                        }
                        return this
                    }, toggleClass: function (e, t) {
                        var i = "undefined" == typeof e ? "undefined" : n(e);
                        return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function (n) {
                            ye(this).toggleClass(e.call(this, n, G(this), t), t)
                        }) : this.each(function () {
                            var t, n, r, o;
                            if ("string" === i)for (n = 0, r = ye(this), o = e.match(_e) || []; t = o[n++];)r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== i || (t = G(this), t && ye._data(this, "__className__", t), ye.attr(this, "class", t || e === !1 ? "" : ye._data(this, "__className__") || ""))
                        })
                    }, hasClass: function (e) {
                        var t, n, i = 0;
                        for (t = " " + e + " "; n = this[i++];)if (1 === n.nodeType && (" " + G(n) + " ").replace($t, " ").indexOf(t) > -1)return !0;
                        return !1
                    }
                }), ye.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                    ye.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }), ye.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                });
                var Xt = o.location, Ut = ye.now(), Vt = /\?/,
                    Yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                ye.parseJSON = function (e) {
                    if (o.JSON && o.JSON.parse)return o.JSON.parse(e + "");
                    var t, n = null, i = ye.trim(e + "");
                    return i && !ye.trim(i.replace(Yt, function (e, i, r, o) {
                        return t && i && (n = 0), 0 === n ? e : (t = r || i, n += !o - !r, "")
                    })) ? Function("return " + i)() : ye.error("Invalid JSON: " + e)
                }, ye.parseXML = function (e) {
                    var t, n;
                    if (!e || "string" != typeof e)return null;
                    try {
                        o.DOMParser ? (n = new o.DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new o.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                    } catch (e) {
                        t = void 0
                    }
                    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t
                };
                var Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                    Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/,
                    en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nn = {}, rn = {},
                    on = "*/".concat("*"), an = Xt.href, sn = tn.exec(an.toLowerCase()) || [];
                ye.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: an,
                        type: "GET",
                        isLocal: Kt.test(sn[1]),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": on,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": ye.parseJSON,
                            "text xml": ye.parseXML
                        },
                        flatOptions: {url: !0, context: !0}
                    },
                    ajaxSetup: function (e, t) {
                        return t ? K(K(e, ye.ajaxSettings), t) : K(ye.ajaxSettings, e)
                    },
                    ajaxPrefilter: J(nn),
                    ajaxTransport: J(rn),
                    ajax: function (e, t) {
                        function i(e, t, n, i) {
                            var r, a, f, b, x, k = t;
                            2 !== w && (w = 2, l && o.clearTimeout(l), d = void 0, c = i || "", T.readyState = e > 0 ? 4 : 0, r = e >= 200 && e < 300 || 304 === e, n && (b = Z(p, T, n)), b = ee(p, b, T, r), r ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ye.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (ye.etag[s] = x)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, a = b.data, f = b.error, r = !f)) : (f = k, !e && k || (k = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || k) + "", r ? g.resolveWith(h, [a, k, T]) : g.rejectWith(h, [T, k, f]), T.statusCode(y), y = void 0, u && m.trigger(r ? "ajaxSuccess" : "ajaxError", [T, p, r ? a : f]), v.fireWith(h, [T, k]), u && (m.trigger("ajaxComplete", [T, p]), --ye.active || ye.event.trigger("ajaxStop")))
                        }

                        "object" === ("undefined" == typeof e ? "undefined" : n(e)) && (t = e, e = void 0), t = t || {};
                        var r, a, s, c, l, u, d, f, p = ye.ajaxSetup({}, t), h = p.context || p,
                            m = p.context && (h.nodeType || h.jquery) ? ye(h) : ye.event, g = ye.Deferred(),
                            v = ye.Callbacks("once memory"), y = p.statusCode || {}, b = {}, x = {}, w = 0,
                            k = "canceled", T = {
                                readyState: 0, getResponseHeader: function (e) {
                                    var t;
                                    if (2 === w) {
                                        if (!f)for (f = {}; t = Qt.exec(c);)f[t[1].toLowerCase()] = t[2];
                                        t = f[e.toLowerCase()]
                                    }
                                    return null == t ? null : t
                                }, getAllResponseHeaders: function () {
                                    return 2 === w ? c : null
                                }, setRequestHeader: function (e, t) {
                                    var n = e.toLowerCase();
                                    return w || (e = x[n] = x[n] || e, b[e] = t), this
                                }, overrideMimeType: function (e) {
                                    return w || (p.mimeType = e), this
                                }, statusCode: function (e) {
                                    var t;
                                    if (e)if (w < 2)for (t in e)y[t] = [y[t], e[t]]; else T.always(e[T.status]);
                                    return this
                                }, abort: function (e) {
                                    var t = e || k;
                                    return d && d.abort(t), i(0, t), this
                                }
                            };
                        if (g.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || an) + "").replace(Gt, "").replace(en, sn[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ye.trim(p.dataType || "*").toLowerCase().match(_e) || [""], null == p.crossDomain && (r = tn.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === sn[1] && r[2] === sn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (sn[3] || ("http:" === sn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ye.param(p.data, p.traditional)), Q(nn, p, t, T), 2 === w)return T;
                        u = ye.event && p.global, u && 0 === ye.active++ && ye.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Zt.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Vt.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Jt.test(s) ? s.replace(Jt, "$1_=" + Ut++) : s + (Vt.test(s) ? "&" : "?") + "_=" + Ut++)), p.ifModified && (ye.lastModified[s] && T.setRequestHeader("If-Modified-Since", ye.lastModified[s]), ye.etag[s] && T.setRequestHeader("If-None-Match", ye.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + on + "; q=0.01" : "") : p.accepts["*"]);
                        for (a in p.headers)T.setRequestHeader(a, p.headers[a]);
                        if (p.beforeSend && (p.beforeSend.call(h, T, p) === !1 || 2 === w))return T.abort();
                        k = "abort";
                        for (a in{success: 1, error: 1, complete: 1})T[a](p[a]);
                        if (d = Q(rn, p, t, T)) {
                            if (T.readyState = 1, u && m.trigger("ajaxSend", [T, p]), 2 === w)return T;
                            p.async && p.timeout > 0 && (l = o.setTimeout(function () {
                                T.abort("timeout")
                            }, p.timeout));
                            try {
                                w = 1, d.send(b, i)
                            } catch (e) {
                                if (!(w < 2))throw e;
                                i(-1, e)
                            }
                        } else i(-1, "No Transport");
                        return T
                    },
                    getJSON: function (e, t, n) {
                        return ye.get(e, t, n, "json")
                    },
                    getScript: function (e, t) {
                        return ye.get(e, void 0, t, "script")
                    }
                }), ye.each(["get", "post"], function (e, t) {
                    ye[t] = function (e, n, i, r) {
                        return ye.isFunction(n) && (r = r || i, i = n, n = void 0), ye.ajax(ye.extend({
                            url: e,
                            type: t,
                            dataType: r,
                            data: n,
                            success: i
                        }, ye.isPlainObject(e) && e))
                    }
                }), ye._evalUrl = function (e) {
                    return ye.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        throws: !0
                    })
                }, ye.fn.extend({
                    wrapAll: function (e) {
                        if (ye.isFunction(e))return this.each(function (t) {
                            ye(this).wrapAll(e.call(this, t))
                        });
                        if (this[0]) {
                            var t = ye(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                                return e
                            }).append(this)
                        }
                        return this
                    }, wrapInner: function (e) {
                        return ye.isFunction(e) ? this.each(function (t) {
                            ye(this).wrapInner(e.call(this, t))
                        }) : this.each(function () {
                            var t = ye(this), n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    }, wrap: function (e) {
                        var t = ye.isFunction(e);
                        return this.each(function (n) {
                            ye(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    }, unwrap: function () {
                        return this.parent().each(function () {
                            ye.nodeName(this, "body") || ye(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }), ye.expr.filters.hidden = function (e) {
                    return ge.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : ne(e)
                }, ye.expr.filters.visible = function (e) {
                    return !ye.expr.filters.hidden(e)
                };
                var cn = /%20/g, ln = /\[\]$/, un = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i,
                    fn = /^(?:input|select|textarea|keygen)/i;
                ye.param = function (e, t) {
                    var n, i = [], r = function (e, t) {
                        t = ye.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                    if (void 0 === t && (t = ye.ajaxSettings && ye.ajaxSettings.traditional), ye.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function () {
                        r(this.name, this.value)
                    }); else for (n in e)ie(n, e[n], t, r);
                    return i.join("&").replace(cn, "+")
                }, ye.fn.extend({
                    serialize: function () {
                        return ye.param(this.serializeArray())
                    }, serializeArray: function () {
                        return this.map(function () {
                            var e = ye.prop(this, "elements");
                            return e ? ye.makeArray(e) : this
                        }).filter(function () {
                            var e = this.type;
                            return this.name && !ye(this).is(":disabled") && fn.test(this.nodeName) && !dn.test(e) && (this.checked || !Xe.test(e))
                        }).map(function (e, t) {
                            var n = ye(this).val();
                            return null == n ? null : ye.isArray(n) ? ye.map(n, function (e) {
                                return {name: t.name, value: e.replace(un, "\r\n")}
                            }) : {name: t.name, value: n.replace(un, "\r\n")}
                        }).get()
                    }
                }), ye.ajaxSettings.xhr = void 0 !== o.ActiveXObject ? function () {
                    return this.isLocal ? oe() : ce.documentMode > 8 ? re() : /^(get|post|head|put|delete|options)$/i.test(this.type) && re() || oe()
                } : re;
                var pn = 0, hn = {}, mn = ye.ajaxSettings.xhr();
                o.attachEvent && o.attachEvent("onunload", function () {
                    for (var e in hn)hn[e](void 0, !0)
                }), ge.cors = !!mn && "withCredentials" in mn, mn = ge.ajax = !!mn, mn && ye.ajaxTransport(function (e) {
                    if (!e.crossDomain || ge.cors) {
                        var t;
                        return {
                            send: function (n, i) {
                                var r, a = e.xhr(), s = ++pn;
                                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (r in e.xhrFields)a[r] = e.xhrFields[r];
                                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                                for (r in n)void 0 !== n[r] && a.setRequestHeader(r, n[r] + "");
                                a.send(e.hasContent && e.data || null), t = function (n, r) {
                                    var o, c, l;
                                    if (t && (r || 4 === a.readyState))if (delete hn[s], t = void 0, a.onreadystatechange = ye.noop, r) 4 !== a.readyState && a.abort(); else {
                                        l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                        try {
                                            c = a.statusText
                                        } catch (e) {
                                            c = ""
                                        }
                                        o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                                    }
                                    l && i(o, c, l, a.getAllResponseHeaders())
                                }, e.async ? 4 === a.readyState ? o.setTimeout(t) : a.onreadystatechange = hn[s] = t : t()
                            }, abort: function () {
                                t && t(void 0, !0)
                            }
                        }
                    }
                }), ye.ajaxSetup({
                    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                    contents: {script: /\b(?:java|ecma)script\b/},
                    converters: {
                        "text script": function (e) {
                            return ye.globalEval(e), e
                        }
                    }
                }), ye.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
                }), ye.ajaxTransport("script", function (e) {
                    if (e.crossDomain) {
                        var t, n = ce.head || ye("head")[0] || ce.documentElement;
                        return {
                            send: function (i, r) {
                                t = ce.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                                    (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                                }, n.insertBefore(t, n.firstChild)
                            }, abort: function () {
                                t && t.onload(void 0, !0)
                            }
                        }
                    }
                });
                var gn = [], vn = /(=)\?(?=&|$)|\?\?/;
                ye.ajaxSetup({
                    jsonp: "callback", jsonpCallback: function () {
                        var e = gn.pop() || ye.expando + "_" + Ut++;
                        return this[e] = !0, e
                    }
                }), ye.ajaxPrefilter("json jsonp", function (e, t, n) {
                    var i, r, a,
                        s = e.jsonp !== !1 && (vn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && vn.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0])return i = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(vn, "$1" + i) : e.jsonp !== !1 && (e.url += (Vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                        return a || ye.error(i + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", r = o[i], o[i] = function () {
                        a = arguments
                    }, n.always(function () {
                        void 0 === r ? ye(o).removeProp(i) : o[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, gn.push(i)), a && ye.isFunction(r) && r(a[0]), a = r = void 0
                    }), "script"
                }), ye.parseHTML = function (e, t, n) {
                    if (!e || "string" != typeof e)return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || ce;
                    var i = Se.exec(e), r = !n && [];
                    return i ? [t.createElement(i[1])] : (i = k([e], t, r), r && r.length && ye(r).remove(), ye.merge([], i.childNodes))
                };
                var yn = ye.fn.load;
                ye.fn.load = function (e, t, i) {
                    if ("string" != typeof e && yn)return yn.apply(this, arguments);
                    var r, o, a, s = this, c = e.indexOf(" ");
                    return c > -1 && (r = ye.trim(e.slice(c, e.length)), e = e.slice(0, c)), ye.isFunction(t) ? (i = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && (o = "POST"), s.length > 0 && ye.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done(function (e) {
                        a = arguments, s.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e)
                    }).always(i && function (e, t) {
                            s.each(function () {
                                i.apply(this, a || [e.responseText, t, e])
                            })
                        }), this
                }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    ye.fn[t] = function (e) {
                        return this.on(t, e)
                    }
                }), ye.expr.filters.animated = function (e) {
                    return ye.grep(ye.timers, function (t) {
                        return e === t.elem
                    }).length
                }, ye.offset = {
                    setOffset: function (e, t, n) {
                        var i, r, o, a, s, c, l, u = ye.css(e, "position"), d = ye(e), f = {};
                        "static" === u && (e.style.position = "relative"), s = d.offset(), o = ye.css(e, "top"), c = ye.css(e, "left"), l = ("absolute" === u || "fixed" === u) && ye.inArray("auto", [o, c]) > -1, l ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
                    }
                }, ye.fn.extend({
                    offset: function (e) {
                        if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                            ye.offset.setOffset(this, e, t)
                        });
                        var t, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
                        if (o)return t = o.documentElement, ye.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = ae(o), {
                            top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                            left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                        }) : i
                    }, position: function () {
                        if (this[0]) {
                            var e, t, n = {top: 0, left: 0}, i = this[0];
                            return "fixed" === ye.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ye.nodeName(e[0], "html") || (n = e.offset()), n.top += ye.css(e[0], "borderTopWidth", !0), n.left += ye.css(e[0], "borderLeftWidth", !0)), {
                                top: t.top - n.top - ye.css(i, "marginTop", !0),
                                left: t.left - n.left - ye.css(i, "marginLeft", !0)
                            }
                        }
                    }, offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && !ye.nodeName(e, "html") && "static" === ye.css(e, "position");)e = e.offsetParent;
                            return e || yt
                        })
                    }
                }), ye.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
                    var n = /Y/.test(t);
                    ye.fn[e] = function (i) {
                        return $e(this, function (e, i, r) {
                            var o = ae(e);
                            return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? ye(o).scrollLeft() : r, n ? r : ye(o).scrollTop()) : e[i] = r)
                        }, e, i, arguments.length, null)
                    }
                }), ye.each(["top", "left"], function (e, t) {
                    ye.cssHooks[t] = O(ge.pixelPosition, function (e, n) {
                        if (n)return n = xt(e, t), gt.test(n) ? ye(e).position()[t] + "px" : n
                    })
                }), ye.each({Height: "height", Width: "width"}, function (e, t) {
                    ye.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                        ye.fn[i] = function (i, r) {
                            var o = arguments.length && (n || "boolean" != typeof i),
                                a = n || (i === !0 || r === !0 ? "margin" : "border");
                            return $e(this, function (t, n, i) {
                                var r;
                                return ye.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ye.css(t, n, a) : ye.style(t, n, i, a)
                            }, t, o ? i : void 0, o, null)
                        }
                    })
                }), ye.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n)
                    }, unbind: function (e, t) {
                        return this.off(e, null, t)
                    }, delegate: function (e, t, n, i) {
                        return this.on(t, e, n, i)
                    }, undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    }
                }), ye.fn.size = function () {
                    return this.length
                }, ye.fn.andSelf = ye.fn.addBack, i = [], r = function () {
                    return ye
                }.apply(t, i), !(void 0 !== r && (e.exports = r));
                var bn = o.jQuery, xn = o.$;
                return ye.noConflict = function (e) {
                    return o.$ === ye && (o.$ = xn), e && o.jQuery === ye && (o.jQuery = bn), ye
                }, a || (o.jQuery = o.$ = ye), ye
            })
        }).call(t, n(2)(e))
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function (e, t, n) {
        var i = n(4);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }, function (e, t, n) {
        t = e.exports = n(5)(), t.push([e.id, '.gc-comments-item-bd{font-family:Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;font-size:1em;line-height:1.6;word-wrap:break-word}.gc-comments-item-bd:before{display:table;content:""}.gc-comments-item-bd:after{display:table;clear:both;content:""}.gc-comments-item-bd>:first-child{margin-top:0!important}.gc-comments-item-bd>:last-child{margin-bottom:0!important}.gc-comments-item-bd a:not([href]){color:inherit;text-decoration:none}.gc-comments-item-bd .absent{color:#c00}.gc-comments-item-bd .anchor{display:inline-block;padding-right:2px;margin-left:-18px}.gc-comments-item-bd .anchor:focus{outline:none}.gc-comments-item-bd h1,.gc-comments-item-bd h2,.gc-comments-item-bd h3,.gc-comments-item-bd h4,.gc-comments-item-bd h5,.gc-comments-item-bd h6{margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.gc-comments-item-bd h1 .octicon-link,.gc-comments-item-bd h2 .octicon-link,.gc-comments-item-bd h3 .octicon-link,.gc-comments-item-bd h4 .octicon-link,.gc-comments-item-bd h5 .octicon-link,.gc-comments-item-bd h6 .octicon-link{color:#000;vertical-align:middle;visibility:hidden}.gc-comments-item-bd h1:hover .anchor,.gc-comments-item-bd h2:hover .anchor,.gc-comments-item-bd h3:hover .anchor,.gc-comments-item-bd h4:hover .anchor,.gc-comments-item-bd h5:hover .anchor,.gc-comments-item-bd h6:hover .anchor{text-decoration:none}.gc-comments-item-bd h1:hover .anchor .octicon-link,.gc-comments-item-bd h2:hover .anchor .octicon-link,.gc-comments-item-bd h3:hover .anchor .octicon-link,.gc-comments-item-bd h4:hover .anchor .octicon-link,.gc-comments-item-bd h5:hover .anchor .octicon-link,.gc-comments-item-bd h6:hover .anchor .octicon-link{visibility:visible}.gc-comments-item-bd h1 code,.gc-comments-item-bd h1 tt,.gc-comments-item-bd h2 code,.gc-comments-item-bd h2 tt,.gc-comments-item-bd h3 code,.gc-comments-item-bd h3 tt,.gc-comments-item-bd h4 code,.gc-comments-item-bd h4 tt,.gc-comments-item-bd h5 code,.gc-comments-item-bd h5 tt,.gc-comments-item-bd h6 code,.gc-comments-item-bd h6 tt{font-size:inherit}.gc-comments-item-bd h1{padding-bottom:.3em;font-size:2.25em;line-height:1.2;border-bottom:1px solid #eee}.gc-comments-item-bd h1 .anchor{line-height:1}.gc-comments-item-bd h2{padding-bottom:.3em;font-size:1.75em;line-height:1.225;border-bottom:1px solid #eee}.gc-comments-item-bd h2 .anchor{line-height:1}.gc-comments-item-bd h3{font-size:1.5em;line-height:1.43}.gc-comments-item-bd h3 .anchor{line-height:1.2}.gc-comments-item-bd h4{font-size:1.25em}.gc-comments-item-bd h4 .anchor{line-height:1.2}.gc-comments-item-bd h5{font-size:1em}.gc-comments-item-bd h5 .anchor{line-height:1.1}.gc-comments-item-bd h6{font-size:1em;color:#777}.gc-comments-item-bd h6 .anchor{line-height:1.1}.gc-comments-item-bd blockquote,.gc-comments-item-bd dl,.gc-comments-item-bd ol,.gc-comments-item-bd p,.gc-comments-item-bd pre,.gc-comments-item-bd table,.gc-comments-item-bd ul{margin-top:0;margin-bottom:16px}.gc-comments-item-bd hr{height:4px;padding:0;margin:16px 0;background-color:#e7e7e7;border:0 none}.gc-comments-item-bd ol,.gc-comments-item-bd ul{padding-left:2em}.gc-comments-item-bd ol.no-list,.gc-comments-item-bd ul.no-list{padding:0;list-style-type:none}.gc-comments-item-bd ol ol,.gc-comments-item-bd ol ul,.gc-comments-item-bd ul ol,.gc-comments-item-bd ul ul{margin-top:0;margin-bottom:0}.gc-comments-item-bd li>p{margin-top:16px}.gc-comments-item-bd dl{padding:0}.gc-comments-item-bd dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.gc-comments-item-bd dl dd{padding:0 16px;margin-bottom:16px}.gc-comments-item-bd blockquote{padding:0 15px;color:#777;border-left:4px solid #ddd}.gc-comments-item-bd blockquote>:first-child{margin-top:0}.gc-comments-item-bd blockquote>:last-child{margin-bottom:0}.gc-comments-item-bd table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.gc-comments-item-bd table th{font-weight:700}.gc-comments-item-bd table td,.gc-comments-item-bd table th{padding:6px 13px;border:1px solid #ddd}.gc-comments-item-bd table tr{background-color:#fff;border-top:1px solid #ccc}.gc-comments-item-bd table tr:nth-child(2n){background-color:#f8f8f8}.gc-comments-item-bd img{max-width:100%;box-sizing:content-box;background-color:#fff}.gc-comments-item-bd img[align=right]{padding-left:20px}.gc-comments-item-bd img[align=left]{padding-right:20px}.gc-comments-item-bd .emoji{max-width:none}.gc-comments-item-bd span.frame{display:block;overflow:hidden}.gc-comments-item-bd span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid #ddd}.gc-comments-item-bd span.frame span img{display:block;float:left}.gc-comments-item-bd span.frame span span{display:block;padding:5px 0 0;clear:both;color:#333}.gc-comments-item-bd span.align-center{display:block;overflow:hidden;clear:both}.gc-comments-item-bd span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.gc-comments-item-bd span.align-center span img{margin:0 auto;text-align:center}.gc-comments-item-bd span.align-right{display:block;overflow:hidden;clear:both}.gc-comments-item-bd span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.gc-comments-item-bd span.align-right span img{margin:0;text-align:right}.gc-comments-item-bd span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.gc-comments-item-bd span.float-left span{margin:13px 0 0}.gc-comments-item-bd span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.gc-comments-item-bd span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.gc-comments-item-bd code,.gc-comments-item-bd tt{padding:0;padding-top:.2em;padding-bottom:.2em;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.gc-comments-item-bd code:after,.gc-comments-item-bd code:before,.gc-comments-item-bd tt:after,.gc-comments-item-bd tt:before{letter-spacing:-.2em;content:"\\A0"}.gc-comments-item-bd code br,.gc-comments-item-bd tt br{display:none}.gc-comments-item-bd del code{text-decoration:inherit}.gc-comments-item-bd pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0}.gc-comments-item-bd .highlight{margin-bottom:16px}.gc-comments-item-bd .highlight pre,.gc-comments-item-bd pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.gc-comments-item-bd .highlight pre{margin-bottom:0;word-break:normal}.gc-comments-item-bd pre{word-wrap:normal}.gc-comments-item-bd pre code,.gc-comments-item-bd pre tt{display:inline;max-width:none;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.gc-comments-item-bd pre code:after,.gc-comments-item-bd pre code:before,.gc-comments-item-bd pre tt:after,.gc-comments-item-bd pre tt:before{content:normal}.gc-comments-item-bd kbd{display:inline-block;padding:3px 5px;font-size:11px;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-bottom-color:#bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.gc-comments-item-bd .pl-c{color:#969896}.gc-comments-item-bd .pl-c1,.gc-comments-item-bd .pl-s .pl-v{color:#0086b3}.gc-comments-item-bd .pl-e,.gc-comments-item-bd .pl-en{color:#795da3}.gc-comments-item-bd .pl-s .pl-s1,.gc-comments-item-bd .pl-smi{color:#333}.gc-comments-item-bd .pl-ent{color:#63a35c}.gc-comments-item-bd .pl-k{color:#a71d5d}.gc-comments-item-bd .pl-pds,.gc-comments-item-bd .pl-s,.gc-comments-item-bd .pl-s .pl-pse .pl-s1,.gc-comments-item-bd .pl-sr,.gc-comments-item-bd .pl-sr .pl-cce,.gc-comments-item-bd .pl-sr .pl-sra,.gc-comments-item-bd .pl-sr .pl-sre{color:#183691}.gc-comments-item-bd .pl-v{color:#ed6a43}.gc-comments-item-bd .pl-id{color:#b52a1d}.gc-comments-item-bd .pl-ii{background-color:#b52a1d;color:#f8f8f8}.gc-comments-item-bd .pl-sr .pl-cce{color:#63a35c;font-weight:700}.gc-comments-item-bd .pl-ml{color:#693a17}.gc-comments-item-bd .pl-mh,.gc-comments-item-bd .pl-mh .pl-en,.gc-comments-item-bd .pl-ms{color:#1d3e81;font-weight:700}.gc-comments-item-bd .pl-mq{color:teal}.gc-comments-item-bd .pl-mi{color:#333;font-style:italic}.gc-comments-item-bd .pl-mb{color:#333;font-weight:700}.gc-comments-item-bd .pl-md{background-color:#ffecec;color:#bd2c00}.gc-comments-item-bd .pl-mi1{background-color:#eaffea;color:#55a532}.gc-comments-item-bd .pl-mdr{color:#795da3;font-weight:700}.gc-comments-item-bd .pl-mo{color:#1d3e81}', ""])
    }, function (e, t) {
        "use strict";
        e.exports = function () {
            var e = [];
            return e.toString = function () {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                }
            }, e
        }
    }, function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n], r = p[i.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++)r.parts[o](i.parts[o]);
                    for (; o < i.parts.length; o++)r.parts.push(l(i.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < i.parts.length; o++)a.push(l(i.parts[o], t));
                    p[i.id] = {id: i.id, refs: 1, parts: a}
                }
            }
        }

        function r(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var r = e[i], o = r[0], a = r[1], s = r[2], c = r[3], l = {css: a, media: s, sourceMap: c};
                n[o] ? n[o].parts.push(l) : t.push(n[o] = {id: o, parts: [l]})
            }
            return t
        }

        function o(e, t) {
            var n = g(), i = b[b.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t); else {
                if ("bottom" !== e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function a(e) {
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1)
        }

        function s(e) {
            var t = document.createElement("style");
            return t.type = "text/css", o(e, t), t
        }

        function c(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", o(e, t), t
        }

        function l(e, t) {
            var n, i, r;
            if (t.singleton) {
                var o = y++;
                n = v || (v = s(t)), i = u.bind(null, n, o, !1), r = u.bind(null, n, o, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), i = f.bind(null, n), r = function () {
                a(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = s(t), i = d.bind(null, n), r = function () {
                a(n)
            });
            return i(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)return;
                    i(e = t)
                } else r()
            }
        }

        function u(e, t, n, i) {
            var r = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = x(t, r); else {
                var o = document.createTextNode(r), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }

        function d(e, t) {
            var n = t.css, i = t.media;
            if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n; else {
                for (; e.firstChild;)e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function f(e, t) {
            var n = t.css, i = t.sourceMap;
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var r = new Blob([n], {type: "text/css"}), o = e.href;
            e.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
        }

        var p = {}, h = function (e) {
            var t;
            return function () {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t
            }
        }, m = h(function () {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }), g = h(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), v = null, y = 0, b = [];
        e.exports = function (e, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = m()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = r(e);
            return i(n, t), function (e) {
                for (var o = [], a = 0; a < n.length; a++) {
                    var s = n[a], c = p[s.id];
                    c.refs--, o.push(c)
                }
                if (e) {
                    var l = r(e);
                    i(l, t)
                }
                for (var a = 0; a < o.length; a++) {
                    var c = o[a];
                    if (0 === c.refs) {
                        for (var u = 0; u < c.parts.length; u++)c.parts[u]();
                        delete p[c.id]
                    }
                }
            }
        };
        var x = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function (e, t, n) {
        var i = n(8);
        "string" == typeof i && (i = [[e.id, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }, function (e, t, n) {
        t = e.exports = n(5)(), t.push([e.id, '.gc-comments{font:1em/1.5 Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif}.gc-comments a{color:#333;text-decoration:none}.gc-comments-item{border-radius:2px;border:1px solid #ccc;margin-bottom:10px}.gc-comments-item-hd{border-top-left-radius:2px;border-top-right-radius:2px;position:relative;padding:10px;padding-left:40px;line-height:16px;background:linear-gradient(top,#fcfcfc,#f9f9f9);border-bottom:1px solid #ccc}.gc-comments-item-hd-avatar{position:absolute;left:10px;top:5px;width:22px;height:22px;border-radius:3px;vertical-align:middle;padding:1px;background-color:#fff;border:1px solid #ccc}.gc-comments-item-hd-user{font-weight:700;margin-left:.5em;margin-right:.5em}a.gc-comments-item-hd-date{color:#999;font-size:.8em}.gc-comments-item-bd{padding-left:1em;padding-right:1em;font-size:1em;background-color:#fff}.gc-comments-title{font-size:1.6em;line-height:1.6em}.gc-comments-info{background-image:linear-gradient(180deg,#fcf8e3 0,#f8efc0);background-repeat:repeat-x;border-color:#f5e79e;text-shadow:0 1px 0 hsla(0,0%,100%,.2);box-shadow:inset 0 1px 0 hsla(0,0%,100%,.25),0 1px 2px rgba(0,0,0,.05);color:#8a6d3b;background-color:#fcf8e3;padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px;border-color:#faebcc}.gc-comments-info a{color:#428bca}.gc-comments-loading{width:60px;height:60px;position:relative;margin-left:auto;margin-right:auto;font-size:.8em;line-height:60px;text-align:center;color:#ddd}.gc-comments-loading:after,.gc-comments-loading:before{content:" ";width:100%;height:100%;border-radius:50%;background-color:#6cc644;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:gccommentsloadinganiamte 2s infinite ease-in-out;animation:gccommentsloadinganiamte 2s infinite ease-in-out}.gc-comments-loading:after{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes gccommentsloadinganiamte{0%,to{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes gccommentsloadinganiamte{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}', ""])
    }, function (e, t) {
        e.exports = {
            filename: "gc.js",
            homepage: "http://zhoumushui.github.io/comment/",
            name: "github-comments",
            version: "0.5.0",
            description: "Github 留言系统",
            main: "lib/index.js",
            scripts: {
                test: 'echo "Error: no test specified" && exit 1',
                dev: "webpack --watch --colors --progress",
                s: "node server.js"
            },
            repository: {type: "git", url: "git+https://github.com/nimojs/github-comments.git"},
            keywords: ["github", "comments", "issues"],
            author: "nimojs",
            license: "MIT",
            bugs: {url: "https://github.com/zhoumushui/zhoumushui.github.io/issues"},
            devDependencies: {
                "babel-core": "^6.13.2",
                "babel-loader": "^6.2.5",
                "babel-preset-es2015": "^6.13.2",
                "css-loader": "^0.23.1",
                "es3ify-loader": "^0.2.0",
                "json-loader": "^0.5.4",
                "static-server": "^2.0.3",
                "style-loader": "^0.13.1",
                webpack: "^1.13.2"
            },
            dependencies: {jquery: "^1.12.0"}
        }
    }, function (e, t) {
        "use strict";
        function n(e, t) {
            var n = "" + e;
            for (t = t || 2; n.length < t;)n = "0" + n;
            return n
        }

        function i(e) {
            var t = new Date(e.replace(/T/, " ").replace(/Z/, " UTC").replace(/\-/g, "/"));
            return t.getFullYear() + "-" + n(t.getMonth() + 1) + "-" + n(t.getDate()) + " " + n(t.getHours()) + ":" + n(t.getMinutes()) + ":" + n(t.getSeconds())
        }

        e.exports = i
    }])
});