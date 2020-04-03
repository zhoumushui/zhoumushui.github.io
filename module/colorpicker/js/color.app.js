function updateCounter(e, t) {
    $.ajax({
        dataType: "json",
        type: "post",
        url: site + "/ajax/update-counter",
        data: "hexcode=" + encodeURIComponent(e) + "&type=" + t,
        success: function (e) {
        }
    })
}
function updateUnicodeCounter(e, t) {
    $.ajax({
        dataType: "json",
        type: "post",
        url: site + "/ajax/update-unicode-counter",
        data: "unicode=" + encodeURIComponent(e) + "&type=" + t,
        success: function (e) {
        }
    })
}
function loadCarbonAds() {
    if ("production" == appEnv) {
        var e = '<script src="//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=materialuico" type="text/javascript" id="_carbonads_js"></script>';
        $(".ad_block").html(e)
    }
}
function log(e) {
    console.log(e)
}
function loadMoreIcons() {
    var e = $(".material_icons");
    e.scroll($.throttle(250, function () {
        e[0].scrollHeight - e.scrollTop() == e.outerHeight() && ($(".progress").show(), ga("send", {
            hitType: "event",
            eventCategory: "Material Icon Load More",
            eventAction: "Load More Clicked : " + pageNo,
            eventLabel: "Icon"
        }), $.ajax({
            dataType: "html",
            type: "get",
            url: site + "/icons",
            data: "p=" + pageNo++ + "&type=html",
            success: function (e) {
                $("#jetsContent").append(e), $(".progress").hide()
            }
        }))
    }))
}
!function (e, t) {
    var o, r = e.jQuery || e.Cowboy || (e.Cowboy = {});
    r.throttle = o = function (e, o, a, n) {
        function i() {
            function r() {
                l = +new Date, a.apply(c, u)
            }

            function i() {
                s = t
            }

            var c = this, d = +new Date - l, u = arguments;
            n && !s && r(), s && clearTimeout(s), n === t && d > e ? r() : o !== !0 && (s = setTimeout(n ? i : r, n === t ? e - d : e))
        }

        var s, l = 0;
        return "boolean" != typeof o && (n = a, a = o, o = t), r.guid && (i.guid = a.guid = a.guid || r.guid++), i
    }, r.debounce = function (e, r, a) {
        return a === t ? o(e, r, !1) : o(e, a, r !== !1)
    }
}(this), function () {
    var e, t, o, r, a, n, i, s, l, c, d, u, p, m, f, h, g, b, y, v, w, k, x, $, _, C, q, S, P, z, I, j, T, L, A, E, F,
        M, R, U, N, O, D, W, X, H, B, G, J = [].slice, Y = {}.hasOwnProperty, Z = function (e, t) {
            function o() {
                this.constructor = e
            }

            for (var r in t)Y.call(t, r) && (e[r] = t[r]);
            return o.prototype = t.prototype, e.prototype = new o, e.__super__ = t.prototype, e
        }, K = [].indexOf || function (e) {
                for (var t = 0, o = this.length; o > t; t++)if (t in this && this[t] === e)return t;
                return -1
            };
    for (v = {
        catchupTime: 500,
        initialRate: .03,
        minTime: 500,
        ghostTime: 500,
        maxProgressPerFrame: 10,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {checkInterval: 100, selectors: ["body"]},
        eventLag: {minSamples: 10, sampleCount: 3, lagThreshold: 3},
        ajax: {trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: []}
    }, S = function () {
        var e;
        return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
    }, z = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, y = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == z && (z = function (e) {
        return setTimeout(e, 50)
    }, y = function (e) {
        return clearTimeout(e)
    }), j = function (e) {
        var t, o;
        return t = S(), (o = function () {
            var r;
            return r = S() - t, r >= 33 ? (t = S(), e(r, function () {
                return z(o)
            })) : setTimeout(o, 33 - r)
        })()
    }, I = function () {
        var e, t, o;
        return o = arguments[0], t = arguments[1], e = 3 <= arguments.length ? J.call(arguments, 2) : [], "function" == typeof o[t] ? o[t].apply(o, e) : o[t]
    }, w = function () {
        var e, t, o, r, a, n, i;
        for (t = arguments[0], r = 2 <= arguments.length ? J.call(arguments, 1) : [], n = 0, i = r.length; i > n; n++)if (o = r[n])for (e in o)Y.call(o, e) && (a = o[e], null != t[e] && "object" == typeof t[e] && null != a && "object" == typeof a ? w(t[e], a) : t[e] = a);
        return t
    }, h = function (e) {
        var t, o, r, a, n;
        for (o = t = 0, a = 0, n = e.length; n > a; a++)r = e[a], o += Math.abs(r), t++;
        return o / t
    }, x = function (e, t) {
        var o, r, a;
        if (null == e && (e = "options"), null == t && (t = !0), a = document.querySelector("[data-pace-" + e + "]")) {
            if (o = a.getAttribute("data-pace-" + e), !t)return o;
            try {
                return JSON.parse(o)
            } catch (n) {
                return r = n, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", r) : void 0
            }
        }
    }, i = function () {
        function e() {
        }

        return e.prototype.on = function (e, t, o, r) {
            var a;
            return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (a = this.bindings)[e] && (a[e] = []), this.bindings[e].push({
                handler: t,
                ctx: o,
                once: r
            })
        }, e.prototype.once = function (e, t, o) {
            return this.on(e, t, o, !0)
        }, e.prototype.off = function (e, t) {
            var o, r, a;
            if (null != (null != (r = this.bindings) ? r[e] : void 0)) {
                if (null == t)return delete this.bindings[e];
                for (o = 0, a = []; o < this.bindings[e].length;)a.push(this.bindings[e][o].handler === t ? this.bindings[e].splice(o, 1) : o++);
                return a
            }
        }, e.prototype.trigger = function () {
            var e, t, o, r, a, n, i, s, l;
            if (o = arguments[0], e = 2 <= arguments.length ? J.call(arguments, 1) : [], null != (i = this.bindings) ? i[o] : void 0) {
                for (a = 0, l = []; a < this.bindings[o].length;)s = this.bindings[o][a], r = s.handler, t = s.ctx, n = s.once, r.apply(null != t ? t : this, e), l.push(n ? this.bindings[o].splice(a, 1) : a++);
                return l
            }
        }, e
    }(), null == window.Pace && (window.Pace = {}), w(Pace, i.prototype), P = Pace.options = w({}, v, window.paceOptions, x()), H = ["ajax", "document", "eventLag", "elements"], O = 0, W = H.length; W > O; O++)E = H[O], P[E] === !0 && (P[E] = v[E]);
    l = function (e) {
        function t() {
            return B = t.__super__.constructor.apply(this, arguments)
        }

        return Z(t, e), t
    }(Error), t = function () {
        function e() {
            this.progress = 0
        }

        return e.prototype.getElement = function () {
            var e;
            if (null == this.el) {
                if (e = document.querySelector(P.target), !e)throw new l;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
            }
            return this.el
        }, e.prototype.finish = function () {
            var e;
            return e = this.getElement(), e.className = e.className.replace("pace-active", ""), e.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, e.prototype.update = function (e) {
            return this.progress = e, this.render()
        }, e.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (e) {
                l = e
            }
            return this.el = void 0
        }, e.prototype.render = function () {
            var e, t;
            return null == document.querySelector(P.target) ? !1 : (e = this.getElement(), e.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? t = "99" : (t = this.progress < 10 ? "0" : "", t += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + t)), this.lastRenderedProgress = this.progress)
        }, e.prototype.done = function () {
            return this.progress >= 100
        }, e
    }(), s = function () {
        function e() {
            this.bindings = {}
        }

        return e.prototype.trigger = function (e, t) {
            var o, r, a, n, i;
            if (null != this.bindings[e]) {
                for (n = this.bindings[e], i = [], r = 0, a = n.length; a > r; r++)o = n[r], i.push(o.call(this, t));
                return i
            }
        }, e.prototype.on = function (e, t) {
            var o;
            return null == (o = this.bindings)[e] && (o[e] = []), this.bindings[e].push(t)
        }, e
    }(), N = window.XMLHttpRequest, U = window.XDomainRequest, R = window.WebSocket, k = function (e, t) {
        var o, r, a, n;
        n = [];
        for (r in t.prototype)try {
            a = t.prototype[r], n.push(null == e[r] && "function" != typeof a ? e[r] = a : void 0)
        } catch (i) {
            o = i
        }
        return n
    }, C = [], Pace.ignore = function () {
        var e, t, o;
        return t = arguments[0], e = 2 <= arguments.length ? J.call(arguments, 1) : [], C.unshift("ignore"), o = t.apply(null, e), C.shift(), o
    }, Pace.track = function () {
        var e, t, o;
        return t = arguments[0], e = 2 <= arguments.length ? J.call(arguments, 1) : [], C.unshift("track"), o = t.apply(null, e), C.shift(), o
    }, A = function (e) {
        var t;
        if (null == e && (e = "GET"), "track" === C[0])return "force";
        if (!C.length && P.ajax) {
            if ("socket" === e && P.ajax.trackWebSockets)return !0;
            if (t = e.toUpperCase(), K.call(P.ajax.trackMethods, t) >= 0)return !0
        }
        return !1
    }, c = function (e) {
        function t() {
            var e, o = this;
            t.__super__.constructor.apply(this, arguments), e = function (e) {
                var t;
                return t = e.open, e.open = function (r, a) {
                    return A(r) && o.trigger("request", {type: r, url: a, request: e}), t.apply(e, arguments)
                }
            }, window.XMLHttpRequest = function (t) {
                var o;
                return o = new N(t), e(o), o
            }, k(window.XMLHttpRequest, N), null != U && (window.XDomainRequest = function () {
                var t;
                return t = new U, e(t), t
            }, k(window.XDomainRequest, U)), null != R && P.ajax.trackWebSockets && (window.WebSocket = function (e, t) {
                var r;
                return r = null != t ? new R(e, t) : new R(e), A("socket") && o.trigger("request", {
                    type: "socket",
                    url: e,
                    protocols: t,
                    request: r
                }), r
            }, k(window.WebSocket, R))
        }

        return Z(t, e), t
    }(s), D = null, $ = function () {
        return null == D && (D = new c), D
    }, L = function (e) {
        var t, o, r, a;
        for (a = P.ajax.ignoreURLs, o = 0, r = a.length; r > o; o++)if (t = a[o], "string" == typeof t) {
            if (-1 !== e.indexOf(t))return !0
        } else if (t.test(e))return !0;
        return !1
    }, $().on("request", function (t) {
        var o, r, a, n, i;
        return n = t.type, a = t.request, i = t.url, L(i) ? void 0 : Pace.running || P.restartOnRequestAfter === !1 && "force" !== A(n) ? void 0 : (r = arguments, o = P.restartOnRequestAfter || 0, "boolean" == typeof o && (o = 0), setTimeout(function () {
            var t, o, i, s, l, c;
            if (t = "socket" === n ? a.readyState < 2 : 0 < (s = a.readyState) && 4 > s) {
                for (Pace.restart(), l = Pace.sources, c = [], o = 0, i = l.length; i > o; o++) {
                    if (E = l[o], E instanceof e) {
                        E.watch.apply(E, r);
                        break
                    }
                    c.push(void 0)
                }
                return c
            }
        }, o))
    }), e = function () {
        function e() {
            var e = this;
            this.elements = [], $().on("request", function () {
                return e.watch.apply(e, arguments)
            })
        }

        return e.prototype.watch = function (e) {
            var t, o, r, a;
            return r = e.type, t = e.request, a = e.url, L(a) ? void 0 : (o = "socket" === r ? new p(t) : new m(t), this.elements.push(o))
        }, e
    }(), m = function () {
        function e(e) {
            var t, o, r, a, n, i, s = this;
            if (this.progress = 0, null != window.ProgressEvent)for (o = null, e.addEventListener("progress", function (e) {
                return s.progress = e.lengthComputable ? 100 * e.loaded / e.total : s.progress + (100 - s.progress) / 2
            }), i = ["load", "abort", "timeout", "error"], r = 0, a = i.length; a > r; r++)t = i[r], e.addEventListener(t, function () {
                return s.progress = 100
            }); else n = e.onreadystatechange, e.onreadystatechange = function () {
                var t;
                return 0 === (t = e.readyState) || 4 === t ? s.progress = 100 : 3 === e.readyState && (s.progress = 50), "function" == typeof n ? n.apply(null, arguments) : void 0
            }
        }

        return e
    }(), p = function () {
        function e(e) {
            var t, o, r, a, n = this;
            for (this.progress = 0, a = ["error", "open"], o = 0, r = a.length; r > o; o++)t = a[o], e.addEventListener(t, function () {
                return n.progress = 100
            })
        }

        return e
    }(), r = function () {
        function e(e) {
            var t, o, r, n;
            for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), n = e.selectors, o = 0, r = n.length; r > o; o++)t = n[o], this.elements.push(new a(t))
        }

        return e
    }(), a = function () {
        function e(e) {
            this.selector = e, this.progress = 0, this.check()
        }

        return e.prototype.check = function () {
            var e = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return e.check()
            }, P.elements.checkInterval)
        }, e.prototype.done = function () {
            return this.progress = 100
        }, e
    }(), o = function () {
        function e() {
            var e, t, o = this;
            this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function () {
                return null != o.states[document.readyState] && (o.progress = o.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
            }
        }

        return e.prototype.states = {loading: 0, interactive: 50, complete: 100}, e
    }(), n = function () {
        function e() {
            var e, t, o, r, a, n = this;
            this.progress = 0, e = 0, a = [], r = 0, o = S(), t = setInterval(function () {
                var i;
                return i = S() - o - 50, o = S(), a.push(i), a.length > P.eventLag.sampleCount && a.shift(), e = h(a), ++r >= P.eventLag.minSamples && e < P.eventLag.lagThreshold ? (n.progress = 100, clearInterval(t)) : n.progress = 100 * (3 / (e + 3))
            }, 50)
        }

        return e
    }(), u = function () {
        function e(e) {
            this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = P.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = I(this.source, "progress"))
        }

        return e.prototype.tick = function (e, t) {
            var o;
            return null == t && (t = I(this.source, "progress")), t >= 100 && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / P.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), o = 1 - Math.pow(this.progress / 100, P.easeFactor), this.progress += o * this.rate * e, this.progress = Math.min(this.lastProgress + P.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, e
    }(), F = null, T = null, g = null, M = null, f = null, b = null, Pace.running = !1, _ = function () {
        return P.restartOnPushState ? Pace.restart() : void 0
    }, null != window.history.pushState && (X = window.history.pushState, window.history.pushState = function () {
        return _(), X.apply(window.history, arguments)
    }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function () {
        return _(), G.apply(window.history, arguments)
    }), d = {ajax: e, elements: r, document: o, eventLag: n}, (q = function () {
        var e, o, r, a, n, i, s, l;
        for (Pace.sources = F = [], i = ["ajax", "elements", "document", "eventLag"], o = 0, a = i.length; a > o; o++)e = i[o], P[e] !== !1 && F.push(new d[e](P[e]));
        for (l = null != (s = P.extraSources) ? s : [], r = 0, n = l.length; n > r; r++)E = l[r], F.push(new E(P));
        return Pace.bar = g = new t, T = [], M = new u
    })(), Pace.stop = function () {
        return Pace.trigger("stop"), Pace.running = !1, g.destroy(), b = !0, null != f && ("function" == typeof y && y(f), f = null), q()
    }, Pace.restart = function () {
        return Pace.trigger("restart"), Pace.stop(), Pace.start()
    }, Pace.go = function () {
        var e;
        return Pace.running = !0, g.render(), e = S(), b = !1, f = j(function (t, o) {
            var r, a, n, i, s, l, c, d, p, m, f, h, y, v, w, k;
            for (d = 100 - g.progress, a = f = 0, n = !0, l = h = 0, v = F.length; v > h; l = ++h)for (E = F[l], m = null != T[l] ? T[l] : T[l] = [], s = null != (k = E.elements) ? k : [E], c = y = 0, w = s.length; w > y; c = ++y)i = s[c], p = null != m[c] ? m[c] : m[c] = new u(i), n &= p.done, p.done || (a++, f += p.tick(t));
            return r = f / a, g.update(M.tick(t, r)), g.done() || n || b ? (g.update(100), Pace.trigger("done"), setTimeout(function () {
                return g.finish(), Pace.running = !1, Pace.trigger("hide")
            }, Math.max(P.ghostTime, Math.max(P.minTime - (S() - e), 0)))) : o()
        })
    }, Pace.start = function (e) {
        w(P, e), Pace.running = !0;
        try {
            g.render()
        } catch (t) {
            l = t
        }
        return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50)
    }, "function" == typeof define && define.amd ? define(function () {
        return Pace
    }) : "object" == typeof exports ? module.exports = Pace : P.startOnPageLoad && Pace.start()
}.call(this), finalSearchdata = {
    "3d rotation": ["3d rotation", "circular arrow", "rotate"],
    "ac unit": ["ac unit"],
    "access alarm": ["access alarm"],
    "access alarms": ["access alarms"],
    "access time": ["access time"],
    accessibility: ["accessibility"],
    accessible: ["accessible", "disabled", "handicapped", "wheelchair"],
    "account balance": ["account balance", "bank", "building", "money"],
    "account balance wallet": ["account balance wallet", "pouch", "purse"],
    "account box": ["account box", "accounting", "phonebook"],
    "account child": ["account child"],
    "account circle": ["account circle"],
    adb: ["adb", "bug"],
    add: ["add", "plus"],
    "add a photo": ["add a photo"],
    "add alarm": ["add alarm"],
    "add alert": ["add alert"],
    "add box": ["add box"],
    "add circle": ["add circle"],
    "add circle outline": ["add circle outline"],
    "add location": ["add location"],
    "add shopping cart": ["add shopping cart", "carts"],
    "add to photos": ["add to photos"],
    "add to queue": ["add to queue"],
    adjust: ["adjust"],
    "airline seat flat": ["airline seat flat"],
    "airline seat flat angled": ["airline seat flat angled"],
    "airline seat individual suite": ["airline seat individual suite"],
    "airline seat legroom extra": ["airline seat legroom extra"],
    "airline seat legroom normal": ["airline seat legroom normal"],
    "airline seat legroom reduced": ["airline seat legroom reduced"],
    "airline seat recline extra": ["airline seat recline extra"],
    "airline seat recline normal": ["airline seat recline normal"],
    flight: ["airplane", "flight", "travel transport"],
    "airplanemode active": ["airplanemode active"],
    "airplanemode inactive": ["airplanemode inactive"],
    "airplanemode off": ["airplanemode off"],
    "airplanemode on": ["airplanemode on"],
    airplay: ["airplay"],
    "airport shuttle": ["airport shuttle", "transport"],
    alarm: ["alarm", "clock", "reminder"],
    "alarm add": ["alarm add"],
    "alarm off": ["alarm off"],
    "alarm on": ["alarm on", "stopwatch"],
    album: ["album"],
    announcement: ["alert", "announcement"],
    "all inclusive": ["all inclusive"],
    "all out": ["all out", "unselect"],
    explicit: ["alphabets", "explicit"],
    timeline: ["analytics", "graphs", "reports", "timeline"],
    android: ["android"],
    pets: ["animals", "pets"],
    apps: ["apps"],
    archive: ["archive"],
    code: ["arrow", "code", "left right arrow", "next", "previous"],
    "arrow back": ["arrow back"],
    "arrow downward": ["arrow downward"],
    "arrow drop down": ["arrow drop down"],
    "arrow drop down circle": ["arrow drop down circle"],
    "arrow drop up": ["arrow drop up"],
    "arrow forward": ["arrow forward"],
    "arrow upward": ["arrow upward"],
    "swap horiz": ["arrows", "exchange", "swap horiz"],
    "art track": ["art track"],
    "chrome reader mode": ["article", "chrome reader mode"],
    "aspect ratio": ["aspect ratio", "resolution"],
    assessment: ["assessment", "evaluation", "graph"],
    assignment: ["assignment", "tasks"],
    "assignment ind": ["assignment ind"],
    "assignment late": ["assignment late"],
    "assignment return": ["assignment return", "left arrow"],
    "assignment returned": ["assignment returned", "down arrow", "download"],
    "assignment turned in": ["assignment turned in", "true sign"],
    assistant: ["assistant"],
    "assistant photo": ["assistant photo"],
    "credit card": ["ATM", "billing", "checkout", "credit card", "debit card", "purchase"],
    "attach file": ["attach file"],
    "attach money": ["attach money", "currency"],
    attachment: ["attachment"],
    audiotrack: ["audiotrack"],
    autorenew: ["autorenew", "rotation"],
    "av timer": ["av timer"],
    visibility: ["available", "eyes", "on", "visibility"],
    "perm identity": ["avatar", "perm identity"],
    backspace: ["backspace"],
    backup: ["backup", "upload"],
    "card travel": ["bag", "card travel", "suitcase", "tour"],
    "hot tub": ["bathtub", "hot tub"],
    "battery 20": ["battery 20"],
    "battery 30": ["battery 30"],
    "battery 50": ["battery 50"],
    "battery 60": ["battery 60"],
    "battery 80": ["battery 80"],
    "battery 90": ["battery 90"],
    "battery alert": ["battery alert", "full"],
    "battery charging 20": ["battery charging 20"],
    "battery charging 30": ["battery charging 30"],
    "battery charging 50": ["battery charging 50"],
    "battery charging 60": ["battery charging 60"],
    "battery charging 80": ["battery charging 80"],
    "battery charging 90": ["battery charging 90"],
    "battery charging full": ["battery charging full"],
    "battery full": ["battery full"],
    "battery std": ["battery std"],
    "battery unknown": ["battery unknown"],
    "beach access": ["beach access"],
    hotel: ["bed", "hotel", "sleep"],
    stars: ["bedge", "special", "stars"],
    beenhere: ["beenhere"],
    motorcycle: ["bike", "delivery", "motorcycle", "on the way", "vehicle"],
    receipt: ["bill", "receipt"],
    cake: ["birthday", "cake"],
    "invert colors": ["black and white", "invert colors"],
    block: ["block"],
    bluetooth: ["bluetooth"],
    "bluetooth audio": ["bluetooth audio"],
    "bluetooth connected": ["bluetooth connected"],
    "bluetooth disabled": ["bluetooth disabled"],
    "bluetooth searching": ["bluetooth searching"],
    "blur circular": ["blur circular"],
    "blur linear": ["blur linear"],
    "blur off": ["blur off"],
    "blur on": ["blur on"],
    book: ["book"],
    event: ["booking", "date", "event"],
    bookmark: ["bookmark", "pin"],
    "bookmark border": ["bookmark border"],
    "bookmark outline": ["bookmark outline"],
    "border all": ["border all"],
    "border bottom": ["border bottom"],
    "border clear": ["border clear"],
    "border color": ["border color"],
    "border horizontal": ["border horizontal"],
    "border inner": ["border inner"],
    "border left": ["border left"],
    "border outer": ["border outer"],
    "border right": ["border right"],
    "border style": ["border style"],
    "border top": ["border top"],
    "border vertical": ["border vertical"],
    face: ["boy", "child", "face"],
    "branding watermark": ["branding watermark"],
    "brightness 1": ["brightness 1"],
    "brightness 2": ["brightness 2"],
    "brightness 3": ["brightness 3"],
    "brightness 4": ["brightness 4"],
    "brightness 5": ["brightness 5"],
    "brightness 6": ["brightness 6"],
    "brightness 7": ["brightness 7"],
    "brightness auto": ["brightness auto"],
    "brightness high": ["brightness high"],
    "brightness low": ["brightness low"],
    "brightness medium": ["brightness medium"],
    radio: ["broadcast", "radio"],
    "broken image": ["broken image"],
    brush: ["brush"],
    "bubble chart": ["bubble chart"],
    "bug report": ["bug report", "defect", "virus"],
    build: ["build", "tools"],
    list: ["bullets", "list"],
    "burst mode": ["burst mode"],
    business: ["business"],
    "business center": ["business center"],
    cached: ["cached"],
    "view module": ["cadbury", "view module"],
    "date range": ["calendar", "date range", "time"],
    call: ["call"],
    "call end": ["call end"],
    "call made": ["call made"],
    "call merge": ["call merge"],
    "call missed": ["call missed"],
    "call missed outgoing": ["call missed outgoing"],
    "call received": ["call received"],
    "call split": ["call split"],
    "call to action": ["call to action"],
    camera: ["camera"],
    "camera alt": ["camera alt"],
    "camera enhance": ["camera enhance", "photography"],
    "camera front": ["camera front"],
    "camera rear": ["camera rear"],
    "camera roll": ["camera roll"],
    cancel: ["cancel"],
    "card giftcard": ["card giftcard", "presenting"],
    "card membership": ["card membership"],
    "shopping basket": ["cart", "shopping basket"],
    casino: ["casino"],
    cast: ["cast"],
    "cast connected": ["cast connected"],
    "center focus strong": ["center focus strong"],
    "center focus weak": ["center focus weak"],
    "event seat": ["chair", "event seat", "politics", "sitting", "sofa"],
    "change history": ["change history", "geometry shapes", "triangle"],
    chat: ["chat"],
    "chat bubble": ["chat bubble"],
    "chat bubble outline": ["chat bubble outline"],
    check: ["check"],
    "check box": ["check box", "tick"],
    "check box outline blank": ["check box outline blank"],
    "check circle": ["check circle", "correct", "positive"],
    "exit to app": ["checkin", "exit to app"],
    "chevron left": ["chevron left"],
    "chevron right": ["chevron right"],
    "child care": ["child care"],
    "child friendly": ["child friendly"],
    "smoke free": ["cigarette", "smoke free"],
    "donut large": ["circle", "donut large", "geometry", "shape"],
    "class": ["class"],
    clear: ["clear"],
    "clear all": ["clear all"],
    "touch app": ["click", "touch app", "touch screen"],
    close: ["close"],
    "closed caption": ["closed caption"],
    cloud: ["cloud"],
    "cloud circle": ["cloud circle"],
    "cloud done": ["cloud done"],
    "cloud download": ["cloud download"],
    "cloud off": ["cloud off"],
    "cloud queue": ["cloud queue"],
    "cloud upload": ["cloud upload"],
    collections: ["collections"],
    "collections bookmark": ["collections bookmark"],
    "format paint": ["color", "format paint"],
    "color lens": ["color lens"],
    colorize: ["color picker", "colorize"],
    comment: ["comment"],
    compare: ["compare"],
    "compare arrows": ["compare arrows", "next previous arrow"],
    explore: ["compass", "direction", "explore", "navigator"],
    done: ["complete", "done", "finish", "ok", "true"],
    computer: ["computer"],
    toc: ["conditions", "toc"],
    settings: ["configuration", "settings"],
    "confirmation number": ["confirmation number"],
    rowing: ["connectivity", "rowing"],
    home: ["construction", "home", "house"],
    "contact mail": ["contact mail"],
    "contact phone": ["contact phone"],
    contacts: ["contacts"],
    description: ["content", "description", "notes", "page", "paragraph"],
    "content copy": ["content copy"],
    "content cut": ["content cut", "seasor"],
    "content paste": ["content paste"],
    "control point": ["control point"],
    "control point duplicate": ["control point duplicate"],
    copyright: ["copyright"],
    wc: ["couple", "male female", "wc"],
    gavel: ["court", "gavel", "judge", "lawyer"],
    create: ["create", "pen", "pencil"],
    "create new folder": ["create new folder"],
    payment: ["creditcard", "debitcard", "payment"],
    crop: ["crop"],
    "crop 16 9": ["crop 16 9"],
    "crop 3 2": ["crop 3 2"],
    "crop 5 4": ["crop 5 4"],
    "crop 7 5": ["crop 7 5"],
    "crop din": ["crop din"],
    "crop free": ["crop free"],
    "crop landscape": ["crop landscape"],
    "crop original": ["crop original"],
    "crop portrait": ["crop portrait"],
    "crop rotate": ["crop rotate"],
    "crop square": ["crop square"],
    "group work": ["crowd", "group work", "team"],
    dashboard: ["dashboard"],
    "data usage": ["data usage"],
    dehaze: ["dehaze"],
    "delete": ["delete", "recycle"],
    "delete forever": ["delete forever"],
    "delete sweep": ["delete sweep"],
    web: ["desktop", "web"],
    "desktop mac": ["desktop mac"],
    "desktop windows": ["desktop windows"],
    details: ["details"],
    "developer board": ["developer board"],
    "developer mode": ["developer mode"],
    "device hub": ["device hub"],
    devices: ["devices"],
    "devices other": ["devices other"],
    "dialer sip": ["dialer sip"],
    dialpad: ["dialpad"],
    directions: ["directions"],
    "directions bike": ["directions bike", "drive", "vehicle transport"],
    "directions boat": ["directions boat"],
    "directions bus": ["directions bus"],
    "directions car": ["directions car"],
    "directions ferry": ["directions ferry"],
    "directions railway": ["directions railway"],
    "directions run": ["directions run"],
    "directions subway": ["directions subway"],
    "directions train": ["directions train"],
    "directions transit": ["directions transit"],
    "directions walk": ["directions walk"],
    "disc full": ["disc full"],
    eject: ["disk", "eject"],
    "thumb down": ["dislike", "dislikes", "downvotes", "thumb down"],
    "dnd forwardslash": ["dnd forwardslash"],
    "dnd on": ["dnd on"],
    dns: ["dns"],
    "do not disturb": ["do not disturb"],
    "do not disturb alt": ["do not disturb alt"],
    "do not disturb off": ["do not disturb off"],
    "do not disturb on": ["do not disturb on"],
    dock: ["dock"],
    "euro symbol": ["dollar", "euro symbol", "pound", "rupees"],
    domain: ["domain"],
    "done all": ["done all"],
    "donut small": ["donut small"],
    "fiber manual record": ["dot", "fiber manual record", "round"],
    "rounded corner": ["dotted", "rounded corner"],
    drafts: ["drafts"],
    "drag handle": ["drag handle"],
    "local bar": ["drink", "food", "local bar"],
    "drive eta": ["drive eta"],
    dvr: ["dvr"],
    language: ["earth", "language", "world"],
    edit: ["edit"],
    "edit location": ["edit location"],
    email: ["email"],
    "remove shopping cart": ["empty", "remove shopping cart"],
    "enhanced encryption": ["enhanced encryption"],
    input: ["enter", "input", "login"],
    equalizer: ["equalizer", "sound"],
    error: ["error"],
    "error outline": ["error outline"],
    "ev station": ["ev station", "gas station", "petrol pump"],
    "event available": ["event available"],
    "event busy": ["event busy"],
    "event note": ["event note"],
    "expand less": ["expand less"],
    "expand more": ["expand more"],
    exposure: ["exposure"],
    "exposure minus 1": ["exposure minus 1"],
    "exposure minus 2": ["exposure minus 2"],
    "exposure neg 1": ["exposure neg 1"],
    "exposure neg 2": ["exposure neg 2"],
    "exposure plus 1": ["exposure plus 1"],
    "exposure plus 2": ["exposure plus 2"],
    "exposure zero": ["exposure zero"],
    extension: ["extension", "plugins"],
    "highlight off": ["false", "highlight off", "wrong"],
    "question answer": ["faqs", "live chat", "messages", "question answer"],
    "fast forward": ["fast forward"],
    "fast rewind": ["fast rewind"],
    favorite: ["favorite", "like", "love", "upvote"],
    "favorite border": ["favorite border"],
    "favorite outline": ["favorite outline"],
    "featured play list": ["featured play list"],
    "featured video": ["featured video"],
    feedback: ["feedback", "notification", "outline"],
    "fiber dvr": ["fiber dvr"],
    "fiber new": ["fiber new"],
    "fiber pin": ["fiber pin"],
    "fiber smart record": ["fiber smart record"],
    "file download": ["file download"],
    "file upload": ["file upload"],
    theaters: ["film", "photo copy", "theaters"],
    filter: ["filter"],
    "filter 1": ["filter 1"],
    "filter 2": ["filter 2"],
    "filter 3": ["filter 3"],
    "filter 4": ["filter 4"],
    "filter 5": ["filter 5"],
    "filter 6": ["filter 6"],
    "filter 7": ["filter 7"],
    "filter 8": ["filter 8"],
    "filter 9": ["filter 9"],
    "filter 9 plus": ["filter 9 plus"],
    "filter b and w": ["filter b and w"],
    "filter center focus": ["filter center focus"],
    "filter drama": ["filter drama"],
    "filter frames": ["filter frames"],
    "filter hdr": ["filter hdr"],
    "filter list": ["filter list"],
    "filter none": ["filter none"],
    "filter tilt shift": ["filter tilt shift"],
    "filter vintage": ["filter vintage"],
    pageview: ["find", "pageview"],
    "find in page": ["find in page", "locate"],
    "find replace": ["find replace"],
    fingerprint: ["fingerprint", "thumb"],
    "first page": ["first page"],
    "fitness center": ["fitness center", "gym"],
    flag: ["flag"],
    flare: ["flare"],
    "flash auto": ["flash auto"],
    "flash off": ["flash off"],
    "flash on": ["flash on"],
    "flight land": ["flight land", "plane", "travel"],
    "flight takeoff": ["flight takeoff"],
    flip: ["flip"],
    "flip to back": ["flip to back"],
    "flip to front": ["flip to front"],
    save: ["floppy", "save"],
    "local florist": ["flowers", "local florist"],
    folder: ["folder"],
    "folder open": ["folder open"],
    "folder shared": ["folder shared"],
    "folder special": ["folder special"],
    "font download": ["font download"],
    "local cafe": ["food drink", "local cafe"],
    gif: ["format", "gif", "image type"],
    "format align center": ["format align center"],
    "format align justify": ["format align justify"],
    "format align left": ["format align left"],
    "format align right": ["format align right"],
    "format bold": ["format bold"],
    "format clear": ["format clear"],
    "format color fill": ["format color fill"],
    "format color reset": ["format color reset"],
    "format color text": ["format color text"],
    "format indent decrease": ["format indent decrease"],
    "format indent increase": ["format indent increase"],
    "format ital": ["format ital"],
    "format line spacing": ["format line spacing"],
    "format list bulleted": ["format list bulleted"],
    "format list numbered": ["format list numbered"],
    "format quote": ["format quote"],
    "format shapes": ["format shapes"],
    "format size": ["format size"],
    "format strikethrough": ["format strikethrough"],
    "format textdirection l to r": ["format textdirection l to r"],
    "format textdirection r to l": ["format textdirection r to l"],
    "format underline": ["format underline"],
    "format underlined": ["format underlined"],
    forum: ["forum"],
    forward: ["forward"],
    "forward 10": ["forward 10"],
    "forward 30": ["forward 30"],
    "forward 5": ["forward 5"],
    "free breakfast": ["free breakfast", "tea"],
    fullscreen: ["fullscreen"],
    "fullscreen exit": ["fullscreen exit"],
    functions: ["functions"],
    "g translate": ["g translate", "transalation"],
    gamepad: ["gamepad"],
    games: ["games"],
    gesture: ["gesture"],
    "get app": ["get app"],
    redeem: ["gift", "present", "redeem"],
    "golf course": ["golf course"],
    room: ["gps", "location", "position", "room"],
    "gps fixed": ["gps fixed"],
    "gps not fixed": ["gps not fixed"],
    "gps off": ["gps off"],
    grade: ["grade", "ratings"],
    gradient: ["gradient"],
    grain: ["grain"],
    grapheq: ["grapheq"],
    memory: ["graphic card", "memory"],
    "grid off": ["grid off"],
    "grid on": ["grid on"],
    group: ["group"],
    "group add": ["group add"],
    "pan tool": ["hand", "pan tool"],
    hd: ["hd", "high defination"],
    "hdr off": ["hdr off"],
    "hdr on": ["hdr on"],
    "hdr strong": ["hdr strong"],
    "hdr weak": ["hdr weak"],
    headset: ["headset"],
    "headset m": ["headset m"],
    "headset mic": ["headset mic"],
    healing: ["healing"],
    hearing: ["hearing", "listening"],
    help: ["help", "problem", "query", "question"],
    "help outline": ["help outline"],
    "high quality": ["high quality"],
    highlight: ["highlight", "tourch"],
    "highlight remove": ["highlight remove"],
    history: ["history"],
    "hourglass empty": ["hourglass empty", "loading", "wait"],
    "hourglass full": ["hourglass full"],
    http: ["http"],
    https: ["https", "protocol"],
    image: ["image"],
    "image aspect ratio": ["image aspect ratio"],
    "import contacts": ["import contacts"],
    "import export": ["import export"],
    "important devices": ["important devices", "mobile", "responsive"],
    inbox: ["inbox"],
    "indeterminate check box": ["indeterminate check box"],
    info: ["info", "information", "notify"],
    "info outline": ["info outline"],
    "insert chart": ["insert chart"],
    "insert comment": ["insert comment"],
    "insert drive file": ["insert drive file"],
    "insert emoticon": ["insert emoticon", "smiley"],
    "insert invitation": ["insert invitation"],
    "insert link": ["insert link"],
    "insert photo": ["insert photo"],
    "invert colors off": ["invert colors off"],
    "invert colors on": ["invert colors on"],
    iso: ["iso"],
    keyboard: ["keyboard", "typing"],
    "keyboard alt": ["keyboard alt"],
    "keyboard arrow down": ["keyboard arrow down"],
    "keyboard arrow left": ["keyboard arrow left"],
    "keyboard arrow right": ["keyboard arrow right"],
    "keyboard arrow up": ["keyboard arrow up"],
    "keyboard backspace": ["keyboard backspace"],
    "keyboard capslock": ["keyboard capslock"],
    "keyboard control": ["keyboard control"],
    "keyboard hide": ["keyboard hide"],
    "keyboard return": ["keyboard return"],
    "keyboard tab": ["keyboard tab"],
    "keyboard voice": ["keyboard voice"],
    kitchen: ["kitchen", "refrigerator"],
    label: ["label"],
    "label outline": ["label outline"],
    landscape: ["landscape"],
    laptop: ["laptop"],
    "laptop chromebook": ["laptop chromebook"],
    "laptop mac": ["laptop mac"],
    "laptop windows": ["laptop windows"],
    "last page": ["last page"],
    launch: ["launch", "open"],
    layers: ["layers"],
    "layers clear": ["layers clear"],
    "leak add": ["leak add"],
    "leak remove": ["leak remove"],
    lens: ["lens"],
    library: ["library"],
    "library add": ["library add", "new"],
    "library books": ["library books"],
    "library mus": ["library mus", "music"],
    "library mus2x": ["library mus2x"],
    "library mus3x": ["library mus3x"],
    "lightbulb outline": ["lightbulb outline"],
    "thumb up": ["likes", "thumb up", "upvotes"],
    "thumbs up down": ["likes dislikes", "thumbs up down"],
    "line style": ["line style", "row style"],
    "line weight": ["line weight"],
    "linear scale": ["linear scale"],
    reorder: ["lines", "reorder"],
    link: ["link"],
    "linked camera": ["linked camera"],
    "live help": ["live help"],
    "live tv": ["live tv", "streaming"],
    "local activity": ["local activity"],
    "local airport": ["local airport"],
    "local atm": ["local atm"],
    "local attraction": ["local attraction"],
    "local car wash": ["local car wash"],
    "local convenience store": ["local convenience store"],
    "local dining": ["local dining"],
    "local drink": ["local drink"],
    "local gas station": ["local gas station"],
    "local grocery store": ["local grocery store"],
    "local hospital": ["local hospital", "medical"],
    "local hotel": ["local hotel"],
    "local laundry service": ["local laundry service"],
    "local library": ["local library"],
    "local mall": ["local mall"],
    "local movies": ["local movies"],
    "local offer": ["local offer"],
    "local parking": ["local parking"],
    "local pharmacy": ["local pharmacy"],
    "local phone": ["local phone"],
    "local pizza": ["local pizza"],
    "local play": ["local play"],
    "local post office": ["local post office"],
    "local print shop": ["local print shop"],
    "local printshop": ["local printshop"],
    "local restaurant": ["local restaurant"],
    "local see": ["local see"],
    "local shipping": ["local shipping", "truck"],
    "local taxi": ["local taxi"],
    "location city": ["location city"],
    "location disabled": ["location disabled"],
    "location history": ["location history"],
    "location off": ["location off"],
    "location on": ["location on"],
    "location searching": ["location searching"],
    lock: ["lock", "locker", "secure"],
    "lock open": ["lock open", "unsecured"],
    "lock outline": ["lock outline"],
    looks: ["looks"],
    "looks 3": ["looks 3"],
    "looks 4": ["looks 4"],
    "looks 5": ["looks 5"],
    "looks 6": ["looks 6"],
    "looks one": ["looks one"],
    "looks two": ["looks two"],
    loop: ["loop", "reload"],
    "record voice over": ["loud", "record voice over", "speaking", "unmute"],
    loupe: ["loupe"],
    "low priority": ["low priority"],
    loyalty: ["loyalty"],
    m: ["m"],
    m2x: ["m2x"],
    m3x: ["m3x"],
    mail: ["mail"],
    "mail outline": ["mail outline"],
    map: ["map"],
    markunread: ["markunread"],
    "markunread mailbox": ["markunread mailbox"],
    wallpaper: ["media", "wallpaper"],
    "sd storage": ["memory card", "sd storage"],
    menu: ["menu"],
    "merge type": ["merge type"],
    message: ["message"],
    messenger: ["messenger"],
    mic: ["mic"],
    "mic none": ["mic none"],
    "mic off": ["mic off"],
    remove: ["minus", "remove"],
    mms: ["mms"],
    mnone: ["mnone"],
    "mode comment": ["mode comment"],
    "mode edit": ["mode edit"],
    update: ["modify", "update"],
    moff: ["moff"],
    "monetization on": ["monetization on"],
    "money off": ["money off"],
    "monochrome photos": ["monochrome photos"],
    mood: ["mood"],
    "mood bad": ["mood bad"],
    more: ["more"],
    "more horiz": ["more horiz"],
    "more vert": ["more vert"],
    terrain: ["mountain", "terrain"],
    mouse: ["mouse"],
    "move to inbox": ["move to inbox"],
    movie: ["movie"],
    "movie creation": ["movie creation"],
    "movie filter": ["movie filter"],
    "multiline chart": ["multiline chart"],
    "multitrack audio": ["multitrack audio"],
    musnote: ["musnote"],
    musvideo: ["musvideo"],
    "volume off": ["mute", "volume off"],
    "my library": ["my library"],
    "my library add": ["my library add"],
    "my library books": ["my library books"],
    "my library mus": ["my library mus"],
    "my location": ["my location"],
    nature: ["nature"],
    "nature people": ["nature people"],
    "navigate before": ["navigate before"],
    "navigate next": ["navigate next"],
    navigation: ["navigation"],
    "near me": ["near me"],
    "network cell": ["network cell", "signal"],
    "network check": ["network check"],
    "network locked": ["network locked"],
    "network wifi": ["network wifi"],
    "new releases": ["new releases"],
    "next week": ["next week"],
    nfc: ["nfc"],
    "no encryption": ["no encryption"],
    "no sim": ["no sim"],
    "not interested": ["not interested"],
    note: ["note"],
    "note add": ["note add"],
    notifications: ["notifications"],
    "notifications active": ["notifications active"],
    "notifications none": ["notifications none"],
    "notifications off": ["notifications off"],
    "notifications on": ["notifications on"],
    "notifications paused": ["notifications paused"],
    "now wallpaper": ["now wallpaper"],
    "now widgets": ["now widgets"],
    "power settings new": ["off", "power settings new", "shutdown"],
    work: ["office", "work"],
    "offline pin": ["offline pin", "success"],
    "ondemand video": ["ondemand video"],
    opacity: ["opacity"],
    "open in browser": ["open in browser"],
    "open in new": ["open in new"],
    "open with": ["open with"],
    pages: ["pages"],
    palette: ["palette"],
    panorama: ["panorama"],
    "panorama fish eye": ["panorama fish eye"],
    "panorama fisheye": ["panorama fisheye"],
    "panorama horizontal": ["panorama horizontal"],
    "panorama vertical": ["panorama vertical"],
    "panorama wide angle": ["panorama wide angle"],
    "party mode": ["party mode"],
    pause: ["pause"],
    "pause circle fill": ["pause circle fill"],
    "pause circle filled": ["pause circle filled"],
    "pause circle outline": ["pause circle outline"],
    people: ["people"],
    "people outline": ["people outline"],
    "perm camera": ["perm camera"],
    "perm camera m": ["perm camera m"],
    "perm camera mic": ["perm camera mic"],
    "perm contact cal": ["perm contact cal"],
    "perm contact calendar": ["perm contact calendar", "profile"],
    "perm data setting": ["perm data setting"],
    "perm device info": ["perm device info"],
    "perm device information": ["perm device information"],
    "perm media": ["perm media"],
    "perm phone msg": ["perm phone msg"],
    "perm scan wifi": ["perm scan wifi", "wireless"],
    person: ["person"],
    "person add": ["person add"],
    "person outline": ["person outline"],
    "person pin": ["person pin"],
    "person pin circle": ["person pin circle"],
    "personal video": ["personal video"],
    phone: ["phone"],
    "phone android": ["phone android"],
    "phone bluetooth speaker": ["phone bluetooth speaker"],
    "phone forwarded": ["phone forwarded"],
    "phone in talk": ["phone in talk", "ringing"],
    "phone iphone": ["phone iphone"],
    "phone locked": ["phone locked"],
    "phone missed": ["phone missed"],
    "phone paused": ["phone paused"],
    phonelink: ["phonelink"],
    "phonelink erase": ["phonelink erase"],
    "phonelink lock": ["phonelink lock"],
    "phonelink off": ["phonelink off"],
    "phonelink ring": ["phonelink ring"],
    "phonelink setup": ["phonelink setup"],
    photo: ["photo"],
    "photo album": ["photo album"],
    "photo camera": ["photo camera"],
    "photo filter": ["photo filter"],
    "photo library": ["photo library"],
    "photo size select actual": ["photo size select actual"],
    "photo size select large": ["photo size select large"],
    "photo size select small": ["photo size select small"],
    "picture as pdf": ["picture as pdf"],
    "picture in picture": ["picture in picture", "poster"],
    "picture in picture alt": ["picture in picture alt"],
    "pie chart": ["pie chart"],
    "pie chart outlined": ["pie chart outlined"],
    "pin drop": ["pin drop"],
    place: ["place"],
    "play arrow": ["play arrow"],
    "play circle fill": ["play circle fill"],
    "play circle filled": ["play circle filled"],
    "play circle filled white": ["play circle filled white"],
    "play circle outline": ["play circle outline"],
    "play download": ["play download"],
    "play for work": ["play for work"],
    "play install": ["play install"],
    "play shopping bag": ["play shopping bag"],
    "playlist add": ["playlist add"],
    "playlist add check": ["playlist add check"],
    "playlist play": ["playlist play"],
    "plus one": ["plus one"],
    poll: ["poll"],
    polymer: ["polymer"],
    pool: ["pool"],
    "portable wifi off": ["portable wifi off"],
    portrait: ["portrait"],
    power: ["power"],
    "power input": ["power input"],
    "pregnant woman": ["pregnancy", "pregnant woman"],
    "present to all": ["present to all"],
    print: ["print", "scan"],
    "priority high": ["priority high"],
    publ: ["publ"],
    publish: ["publish"],
    "query builder": ["query builder"],
    queue: ["queue"],
    "queue mus": ["queue mus"],
    "queue mus2x": ["queue mus2x"],
    "queue mus3x": ["queue mus3x"],
    "queue play next": ["queue play next"],
    "quick contacts dialer": ["quick contacts dialer"],
    "quick contacts mail": ["quick contacts mail"],
    "track changes": ["radar", "track changes", "tracking"],
    "radio button checked": ["radio button checked"],
    "radio button off": ["radio button off"],
    "radio button on": ["radio button on"],
    "radio button unchecked": ["radio button unchecked"],
    "rate review": ["rate review"],
    "recent actors": ["recent actors"],
    videocam: ["recording", "video camera", "videocam"],
    "restore page": ["recover", "restore page"],
    redo: ["redo"],
    refresh: ["refresh"],
    "remove circle": ["remove circle"],
    "remove circle outline": ["remove circle outline"],
    "remove from queue": ["remove from queue"],
    "remove red eye": ["remove red eye"],
    repeat: ["repeat"],
    "repeat one": ["repeat one"],
    replay: ["replay"],
    "replay 10": ["replay 10"],
    "replay 30": ["replay 30"],
    "replay 5": ["replay 5"],
    reply: ["reply"],
    "reply all": ["reply all"],
    report: ["report"],
    "report problem": ["report problem"],
    restaurant: ["restaurant"],
    "restaurant menu": ["restaurant menu"],
    restore: ["restore"],
    "trending flat": ["right arrow", "trending flat"],
    "ring volume": ["ring volume"],
    "room service": ["room service"],
    "rotate 90 degrees ccw": ["rotate 90 degrees ccw"],
    "rotate left": ["rotate left"],
    "rotate right": ["rotate right"],
    router: ["router"],
    "rss feed": ["rss feed"],
    "rv hookup": ["rv hookup"],
    satellite: ["satellite"],
    scanner: ["scanner"],
    schedule: ["schedule"],
    school: ["school"],
    "screen lock landscape": ["screen lock landscape"],
    "screen lock portrait": ["screen lock portrait"],
    "screen lock rotation": ["screen lock rotation"],
    "screen rotation": ["screen rotation"],
    "screen share": ["screen share"],
    "sd card": ["sd card"],
    search: ["search"],
    security: ["security"],
    "select all": ["select all"],
    send: ["send"],
    "sentiment dissatisfied": ["sentiment dissatisfied"],
    "sentiment neutral": ["sentiment neutral"],
    "sentiment satisfied": ["sentiment satisfied"],
    "sentiment very dissatisfied": ["sentiment very dissatisfied"],
    "sentiment very satisfied": ["sentiment very satisfied"],
    "settings applications": ["settings applications"],
    "settings backup restore": ["settings backup restore"],
    "settings bluetooth": ["settings bluetooth"],
    "settings brightness": ["settings brightness"],
    "settings cell": ["settings cell"],
    "settings display": ["settings display"],
    "settings ethernet": ["settings ethernet"],
    "settings input antenna": ["settings input antenna"],
    "settings input component": ["settings input component"],
    "settings input composite": ["settings input composite"],
    "settings input hdmi": ["settings input hdmi"],
    "settings input svideo": ["settings input svideo"],
    "settings overscan": ["settings overscan"],
    "settings phone": ["settings phone"],
    "settings power": ["settings power", "swith off"],
    "settings remote": ["settings remote"],
    "settings system daydream": ["settings system daydream"],
    "settings voice": ["settings voice"],
    share: ["share"],
    shop: ["shop"],
    "shop two": ["shop two"],
    "shopping cart": ["shopping cart"],
    "short text": ["short text"],
    "show chart": ["show chart"],
    shuffle: ["shuffle"],
    "signal cellular 0 bar": ["signal cellular 0 bar"],
    "signal cellular 1 bar": ["signal cellular 1 bar"],
    "signal cellular 2 bar": ["signal cellular 2 bar"],
    "signal cellular 3 bar": ["signal cellular 3 bar"],
    "signal cellular 4 bar": ["signal cellular 4 bar"],
    "signal cellular connected no internet 0 bar": ["signal cellular connected no internet 0 bar"],
    "signal cellular connected no internet 1 bar": ["signal cellular connected no internet 1 bar"],
    "signal cellular connected no internet 2 bar": ["signal cellular connected no internet 2 bar"],
    "signal cellular connected no internet 3 bar": ["signal cellular connected no internet 3 bar"],
    "signal cellular connected no internet 4 bar": ["signal cellular connected no internet 4 bar"],
    "signal cellular no sim": ["signal cellular no sim"],
    "signal cellular null": ["signal cellular null"],
    "signal cellular off": ["signal cellular off"],
    "signal wifi 0 bar": ["signal wifi 0 bar"],
    "signal wifi 1 bar": ["signal wifi 1 bar"],
    "signal wifi 1 bar lock": ["signal wifi 1 bar lock"],
    "signal wifi 2 bar": ["signal wifi 2 bar"],
    "signal wifi 2 bar lock": ["signal wifi 2 bar lock"],
    "signal wifi 3 bar": ["signal wifi 3 bar"],
    "signal wifi 3 bar lock": ["signal wifi 3 bar lock"],
    "signal wifi 4 bar": ["signal wifi 4 bar"],
    "signal wifi 4 bar lock": ["signal wifi 4 bar lock"],
    "signal wifi off": ["signal wifi off"],
    "signal wifi statusbar 1 bar": ["signal wifi statusbar 1 bar"],
    "signal wifi statusbar 2 bar": ["signal wifi statusbar 2 bar"],
    "signal wifi statusbar 3 bar": ["signal wifi statusbar 3 bar"],
    "signal wifi statusbar 4 bar": ["signal wifi statusbar 4 bar"],
    "signal wifi statusbar connected no internet": ["signal wifi statusbar connected no internet"],
    "signal wifi statusbar connected no internet 1": ["signal wifi statusbar connected no internet 1"],
    "signal wifi statusbar connected no internet 2": ["signal wifi statusbar connected no internet 2"],
    "signal wifi statusbar connected no internet 3": ["signal wifi statusbar connected no internet 3"],
    "signal wifi statusbar connected no internet 4": ["signal wifi statusbar connected no internet 4"],
    "signal wifi statusbar not connected": ["signal wifi statusbar not connected"],
    "signal wifi statusbar null": ["signal wifi statusbar null"],
    "speaker notes off": ["silent", "speaker notes off"],
    "sim card": ["sim card"],
    "sim card alert": ["sim card alert"],
    "skip next": ["skip next"],
    "skip previous": ["skip previous"],
    "view carousel": ["slider", "view carousel"],
    slideshow: ["slideshow"],
    "slow motion video": ["slow motion video"],
    smartphone: ["smartphone"],
    "smoking rooms": ["smoking rooms"],
    sms: ["sms"],
    "sms failed": ["sms failed"],
    snooze: ["snooze"],
    sort: ["sort"],
    "sort by alpha": ["sort by alpha"],
    spa: ["spa"],
    "space bar": ["space bar"],
    speaker: ["speaker"],
    "speaker group": ["speaker group"],
    "speaker notes": ["speaker notes"],
    "speaker phone": ["speaker phone"],
    spellcheck: ["spellcheck"],
    stop: ["square", "stop"],
    star: ["star"],
    "star border": ["star border"],
    "star half": ["star half"],
    "star outline": ["star outline"],
    "star rate": ["star rate"],
    "stay current landscape": ["stay current landscape"],
    "stay current portrait": ["stay current portrait"],
    "stay primary landscape": ["stay primary landscape"],
    "stay primary portrait": ["stay primary portrait"],
    "stop screen share": ["stop screen share"],
    storage: ["storage"],
    store: ["store"],
    "store mall directory": ["store mall directory"],
    straighten: ["straighten"],
    streetview: ["streetview"],
    "strikethrough s": ["strikethrough s"],
    style: ["style"],
    "subdirectory arrow left": ["subdirectory arrow left"],
    "subdirectory arrow right": ["subdirectory arrow right"],
    subject: ["subject"],
    subscriptions: ["subscriptions"],
    subtitles: ["subtitles"],
    subway: ["subway"],
    "supervisor account": ["supervisor account"],
    "surround sound": ["surround sound"],
    "swap calls": ["swap calls"],
    "swap vert": ["swap vert", "vertical"],
    "swap vert circle": ["swap vert circle"],
    "swap vertical circle": ["swap vertical circle"],
    "switch camera": ["switch camera"],
    "switch video": ["switch video"],
    sync: ["sync"],
    "sync disabled": ["sync disabled"],
    "sync problem": ["sync problem"],
    "sync problem red": ["sync problem red"],
    "system update": ["system update"],
    "system update alt": ["system update alt"],
    "system update tv": ["system update tv"],
    tab: ["tab"],
    "tab unselected": ["tab unselected"],
    tablet: ["tablet"],
    "tablet android": ["tablet android"],
    "tablet mac": ["tablet mac"],
    "tag faces": ["tag faces"],
    "tap and play": ["tap and play"],
    "text fields": ["text fields"],
    "text format": ["text format"],
    textsms: ["textsms"],
    texture: ["texture"],
    "time to leave": ["time to leave"],
    timelapse: ["timelapse"],
    timer: ["timer"],
    "timer 10": ["timer 10"],
    "timer 3": ["timer 3"],
    "timer auto": ["timer auto"],
    "timer off": ["timer off"],
    title: ["title"],
    today: ["today"],
    toll: ["toll"],
    tonality: ["tonality"],
    toys: ["toys"],
    traff: ["traff", "traffic"],
    train: ["train"],
    tram: ["tram"],
    "transfer within a station": ["transfer within a station"],
    transform: ["transform"],
    translate: ["translate"],
    "trending down": ["trending down"],
    "trending neutral": ["trending neutral"],
    "trending up": ["trending up"],
    tune: ["tune"],
    "turned in": ["turned in"],
    "turned in not": ["turned in not"],
    tv: ["tv"],
    unarchive: ["unarchive"],
    undo: ["undo"],
    "unfold less": ["unfold less"],
    "unfold more": ["unfold more"],
    usb: ["usb"],
    "verified user": ["verified user"],
    "vertical align bottom": ["vertical align bottom"],
    "vertical align center": ["vertical align center"],
    "vertical align top": ["vertical align top"],
    vibration: ["vibration"],
    "video call": ["video call"],
    "voice chat": ["video chat", "voice chat"],
    "video collection": ["video collection"],
    "video label": ["video label"],
    "video library": ["video library"],
    "videocam off": ["videocam off"],
    "videogame asset": ["videogame asset"],
    "view agenda": ["view agenda"],
    "view array": ["view array"],
    "view column": ["view column"],
    "view comfy": ["view comfy"],
    "view compact": ["view compact"],
    "view day": ["view day"],
    "view headline": ["view headline"],
    "view list": ["view list"],
    "view quilt": ["view quilt"],
    "view stream": ["view stream"],
    "view week": ["view week"],
    vignette: ["vignette"],
    "visibility off": ["visibility off"],
    voicemail: ["voicemail"],
    "volume down": ["volume down"],
    "volume mute": ["volume mute"],
    "volume up": ["volume up"],
    "vpn key": ["vpn key"],
    "vpn lock": ["vpn lock"],
    "wallet giftcard": ["wallet giftcard"],
    "wallet membership": ["wallet membership"],
    "wallet travel": ["wallet travel"],
    warning: ["warning"],
    watch: ["watch"],
    "watch later": ["watch later"],
    "wb auto": ["wb auto"],
    "wb cloudy": ["wb cloudy"],
    "wb incandescent": ["wb incandescent"],
    "wb iridescent": ["wb iridescent"],
    "wb irradescent": ["wb irradescent"],
    "wb sunny": ["wb sunny"],
    "web asset": ["web asset"],
    weekend: ["weekend"],
    whatshot: ["whatshot"],
    widgets: ["widgets"],
    wifi: ["wifi"],
    "wifi lock": ["wifi lock"],
    "wifi tethering": ["wifi tethering"],
    "wrap text": ["wrap text"],
    "youtube searched for": ["youtube searched for"],
    "zoom in": ["zoom in"],
    "zoom out": ["zoom out"],
    "zoom out map": ["zoom out map"]
};
var pageNo = 1;
$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")}}), $(document).ready(function () {
    cc.init(), popup.init(), loadMoreIcons(), muiSettings.init(), $(document).on("click", ".sidebar a", function () {
        $(".sidebar, .overlay").removeClass("open")
    }), $(document).on("click", ".r_icon_wrap .r_action", function (e) {
        e.preventDefault(), $(".r_icon_wrap").removeClass("open"), $(this).parents(".r_icon_wrap").addClass("open")
    }), $(document).on("click", ".r_tabs button", function (e) {
        var t = $(this).parents(".r_download");
        $(this).parent().addClass("active").siblings().removeClass("active");
        var o = $(this).parent().index() * t.find(".r_tabs_container > li").eq(0).outerWidth();
        t.find(".r_tabs_container li").eq(0).css("margin-left", "-" + o + "px")
    }), $(document).on("click", "#mc-embedded-subscribe", function (e) {
        e.preventDefault();
        var t = !0, o = $("#mce-EMAIL").val();
        o.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || ($("#mce-EMAIL").val("").attr("placeholder", "Invalid Email."), t = !1), t && $("#mc-embedded-subscribe-form").submit()
    })
}), $(function () {
    click2copy.init({success: "COPIED", timeout: 1e3})
});
var click2copy = {
    settings: "", init: function (e) {
        var t = '<input type="text" id="ss_click2copy" style="position:fixed; top:-999px; left:-999px;">';
        $("body").append(t), this.bindUIActions(), this.settings = e
    }, bindUIActions: function () {
        var e = this;
        $(document).on("click", ".click2copy", function () {
            e.copyThis($(this), $(this).data("copy"))
        })
    }, copyThis: function (e, t) {
        var o = this;
        if ($("#ss_click2copy").val(t).select(), document.execCommand("copy"), o.settings.success) {
            var r = e.text();
            e.text(o.settings.success).addClass("c2c_active"), setTimeout(function () {
                e.text(r).removeClass("c2c_active")
            }, o.settings.timeout)
        }
    }
}, muiSettings = {
    init: function () {
        this.bindUIActions(), this.checkSettings()
    }, bindUIActions: function () {
        var e = this;
        $(".mui_setting").on("change", function () {
            e.changeSetting($(this))
        })
    }, checkSettings: function () {
        var e = this;
        $(".mui_setting").each(function () {
            var t = $(this), o = t.data("key");
            if (null != localStorage.getItem(o)) {
                var r = JSON.parse(localStorage.getItem(o));
                e.changeSetting(t, r)
            }
        })
    }, changeSetting: function (e, t) {
        var o = this, r = e.data("key");
        if ("checkbox" == e.attr("type"))if ("undefined" != typeof t) e.prop("checked", t); else var t = e.prop("checked"); else if ("undefined" != typeof t) e.val(t); else var t = e.val();
        localStorage.setItem(r, t), o[r](r, t)
    }, view_color_ids: function (e, t) {
        var o = this;
        t ? ($(".color_id").show(), o.changeSetting($('.mui_setting[data-key="view_click_counts"]'), !1)) : $(".color_id").hide()
    }, view_click_counts: function (e, t) {
        var o = this;
        t ? ($(".click_counter").show(), $(".cb").each(function () {
            var e = $(this).data("clicks");
            $(this).find(".click_counter").html(e)
        }), o.changeSetting($('.mui_setting[data-key="view_color_ids"]'), !1)) : $(".click_counter").hide()
    }, view_header: function (e, t) {
        t ? $(".tr_header").show() : $(".tr_header").hide()
    }, top_30: function (e, t) {
        t ? $(".material_ui_colors").addClass("top30") : $(".material_ui_colors").removeClass("top30")
    }, full_width_palette: function (e, t) {
        t ? $(".content").addClass("full_width") : $(".content").removeClass("full_width")
    }
}, popup = {
    el: {}, data: {currentPopup: ""}, init: function () {
        popup.bindUIActions()
    }, bindUIActions: function () {
        $(document).on("click", ".popup_open", function () {
            popup.open($(this).data("popup"))
        }), $(document).on("click", ".popup_close", function () {
            popup.close($(this).parents(".popup").attr("id"))
        }), $(document).on("click", ".popup_overlay", function () {
            popup.close(popup.data.currentPopup)
        })
    }, open: function (e) {
        popup.data.currentPopup = e, $("#" + e).addClass("open"), $("#" + e).find(".popup_focus").focus(), $(".popup_overlay").addClass("open")
    }, close: function (e) {
        popup.data.currentPopup = "", $("#" + e).removeClass("open"), $(".popup_overlay").removeClass("open")
    }
};
$(document).on("pjax:complete", function () {
    twttr.widgets.load(), loadCarbonAds(), loadMoreIcons(), cc.setColorFormat(), cc.setCharacterFormat(), ga("set", "location", window.location.href), ga("send", "pageview");
    try {
        FB.XFBML.parse()
    } catch (e) {
    }
});
var cc = {
    el: {
        iconbox: $(".i_list li button"),
        colorbox: $(".color_table .cb"),
        colorFormat: $(".color_format > li > a"),
        colorCodeTitle: $(".colorcode_title .h_button_text"),
        colorWrap: $(".colors"),
        prevElem: ""
    }, data: {color_format: "", character_format: "", prev_code: ""}, init: function () {
        cc.bindUIActions(), cc.setColorFormat(), cc.setCharacterFormat()
    }, bindUIActions: function () {
        $(document).on("click", ".color_table .cb", cc.colorClick), $(document).on("click", ".i_list li button", cc.iconClick), $(document).on("click", ".copy_svg_code", cc.svgClick), $(document).on("click", ".i_button", cc.unicodeClick), $(document).on("click", ".color_format > li > a", function () {
            cc.setColorFormat($(this).data("val"))
        }), $(document).on("click", ".character_format > li > a", function () {
            cc.setCharacterFormat($(this).data("val"))
        }), $(document).on("click", ".open_color", function (e) {
            cc.colorOpen(e)
        }), $(document).on("copy", function () {
            $(".no_c2c").removeClass("open")
        })
    }, setColorFormat: function (e) {
        e ? (cc.data.color_format = e, localStorage.setItem("mui-color-format", e)) : localStorage.getItem("mui-color-format") ? cc.data.color_format = localStorage.getItem("mui-color-format") : (cc.data.color_format = "hex", localStorage.setItem("mui-color-format", cc.data.color_format)), $(".colorcode_title .h_button_text").text($('.color_format a[data-val="' + cc.data.color_format + '"]').text())
    }, setCharacterFormat: function (e) {
        e ? (cc.data.character_format = e, localStorage.setItem("mui-character-format", e)) : localStorage.getItem("mui-character-format") ? cc.data.character_format = localStorage.getItem("mui-character-format") : (cc.data.character_format = "symbol", localStorage.setItem("mui-character-format", cc.data.character_format)), $(".character_title .h_button_text").text("Copy : " + $('.character_format a[data-val="' + cc.data.character_format + '"]').text())
    }, colorOpen: function (e) {
        e.stopPropagation()
    }, colorClick: function () {
        $(".cb").removeClass("animate");
        var e = $(this).find(".color_id").text(), t = $(this).data("hex");
        cc.el.prevElem && cc.el.prevElem.removeClass("last").find(".color_id").text(cc.data.prev_code), $(".copier").val($(this).data(cc.data.color_format));
        var o = $("#colorCode").val();
        $(this).find(".color_id").text(o);
        var r = document.querySelector(".copier");
        r.select();
        try {
            succeeded = document.execCommand("copy")
        } catch (a) {
            succeeded = !1
        }
        succeeded || (console.log("Copy Command Not Available ! Your browser does not support Click-To-Copy functionality yet. We recommend latest Chrome/Firefox to use this tool."), $(".no_c2c").addClass("open")), $(this).addClass("animate last"), cc.el.prevElem = $(this), cc.data.prev_code = e, updateCounter(t, type)
    }, unicodeClick: function () {
        $(".i_button").removeClass("animate"), $(".copier").val($(this).data(cc.data.character_format));
        var e = $(this).data("unicode");
        $(".copier").val();
        var t = document.querySelector(".copier");
        t.select(), document.execCommand("copy"), $(this).addClass("animate last"), updateUnicodeCounter(e, type)
    }, svgClick: function () {
        $(".copier").val($(".svg_code").text());
        var e = ($(".copier").val(), document.querySelector(".copier"));
        e.select(), document.execCommand("copy"), $(this).text("Copied")
    }, iconClick: function () {
        $(".i_button").removeClass("animate"), $("#iconCode").val($(this).text());
        var e = document.querySelector("#iconCode");
        e.select(), document.execCommand("copy"), $(this).addClass("animate")
    }
};
$(window).bind("load", function () {
}), $(document).mouseup(function (e) {
    var t = $(".auto_close"), o = $(".opener");
    t.is(e.target) || 0 !== t.has(e.target).length || o.is(e.target) || 0 !== o.has(e.target).length || (t.removeClass("open"), $(".opener").removeClass("active"), $(".overlay").removeClass("open"))
}), $(document).on("click", ".opener", function () {
    $this = $(this), $this.toggleClass("active"), $(".opener").not($this).removeClass("active");
    var e = $("." + $this.data("open"));
    e.toggleClass("open"), $(".auto_close").not(e).removeClass("open"), $this.data("overlay") && $(".overlay").toggleClass("open")
}), $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length)return $("html,body").animate({scrollTop: e.offset().top}, 500), !1
        }
    })
}), $(function () {
    var e, t, o, r = 0, a = 0,
        n = '<li><div style="height: 40px;line-height: 40px;text-align: center;font-size: 12px;">O! That\'s Bummer :( </div></li></li>';
    $(document).on("keyup", "#materialIconSearch", function () {
        e = $(this).val(), t = "", "" != e ? (t = "", finalSearchdata && $.each(finalSearchdata, function (o, a) {
            $.each(a, function (a, n) {
                return -1 != n.search(new RegExp("^.*" + e + ".*", "gi")) ? 14 == r ? !1 : (k = o.replace(/ /g, "-"), value = n.replace(/ /g, "-"), t += '<li><a class="searchLink" href="' + site + "icons?s=" + value + '">' + n + "</a></li>", void r++) : void 0
            })
        }), "" == t && (t = n), $(".search_suggestions").html(t).addClass("open"), a = r, r = 0) : $(".search_suggestions").html("").removeClass("open")
    }), $(document).on("click", "#materialIconSearch", function () {
        $this = $(this), o = 0, $(document).unbind("keydown").on("keydown", function (e) {
            if (40 == e.keyCode)return o == a ? o = 1 : o++, $this.next().find("li:nth-of-type(" + o + ") a").focus(), !1;
            if (38 == e.keyCode)return 1 == o || 0 == o ? o = a : o--, $this.next().find("li:nth-of-type(" + o + ") a").focus(), !1;
            if (13 == e.keyCode); else {
                if (27 == e.keyCode)return $(document).unbind("keydown"), $this.val("").blur(), $this.next().html("").removeClass("open"), !1;
                $this.focus(), o = 0
            }
        })
    })
});
