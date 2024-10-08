"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8085], {
        8085: (e, n, t) => {
            t.d(n, {
                NO: () => q,
                Yn: () => B,
                mw: () => L
            });
            var i, r = -1,
                a = function(e) {
                    addEventListener("pageshow", (function(n) {
                        n.persisted && (r = n.timeStamp, e(n))
                    }), !0)
                },
                o = function() {
                    var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
                    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
                },
                c = function() {
                    var e = o();
                    return e && e.activationStart || 0
                },
                u = function(e, n) {
                    var t = o(),
                        i = "navigate";
                    return r >= 0 ? i = "back-forward-cache" : t && (document.prerendering || c() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : t.type && (i = t.type.replace(/_/g, "-"))), {
                        name: e,
                        value: void 0 === n ? -1 : n,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: i
                    }
                },
                f = function(e, n, t) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var i = new PerformanceObserver((function(e) {
                                Promise.resolve().then((function() {
                                    n(e.getEntries())
                                }))
                            }));
                            return i.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, t || {})), i
                        }
                    } catch (e) {}
                },
                s = function(e, n, t, i) {
                    var r, a;
                    return function(o) {
                        n.value >= 0 && (o || i) && ((a = n.value - (r || 0)) || void 0 === r) && (r = n.value, n.delta = a, n.rating = function(e, n) {
                            return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good"
                        }(n.value, t), e(n))
                    }
                },
                d = function(e) {
                    requestAnimationFrame((function() {
                        return requestAnimationFrame((function() {
                            return e()
                        }))
                    }))
                },
                l = function(e) {
                    document.addEventListener("visibilitychange", (function() {
                        "hidden" === document.visibilityState && e()
                    }))
                },
                v = function(e) {
                    var n = !1;
                    return function() {
                        n || (e(), n = !0)
                    }
                },
                m = -1,
                p = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                },
                h = function(e) {
                    "hidden" === document.visibilityState && m > -1 && (m = "visibilitychange" === e.type ? e.timeStamp : 0, y())
                },
                g = function() {
                    addEventListener("visibilitychange", h, !0), addEventListener("prerenderingchange", h, !0)
                },
                y = function() {
                    removeEventListener("visibilitychange", h, !0), removeEventListener("prerenderingchange", h, !0)
                },
                E = function() {
                    return m < 0 && (m = p(), g(), a((function() {
                        setTimeout((function() {
                            m = p(), g()
                        }), 0)
                    }))), {
                        get firstHiddenTime() {
                            return m
                        }
                    }
                },
                T = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", (function() {
                        return e()
                    }), !0) : e()
                },
                C = [1800, 3e3],
                b = [.1, .25],
                L = function(e, n) {
                    n = n || {},
                        function(e, n) {
                            n = n || {}, T((function() {
                                var t, i = E(),
                                    r = u("FCP"),
                                    o = f("paint", (function(e) {
                                        e.forEach((function(e) {
                                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - c(), 0), r.entries.push(e), t(!0)))
                                        }))
                                    }));
                                o && (t = s(e, r, C, n.reportAllChanges), a((function(i) {
                                    r = u("FCP"), t = s(e, r, C, n.reportAllChanges), d((function() {
                                        r.value = performance.now() - i.timeStamp, t(!0)
                                    }))
                                })))
                            }))
                        }(v((function() {
                            var t, i = u("CLS", 0),
                                r = 0,
                                o = [],
                                c = function(e) {
                                    e.forEach((function(e) {
                                        if (!e.hadRecentInput) {
                                            var n = o[0],
                                                t = o[o.length - 1];
                                            r && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (r += e.value, o.push(e)) : (r = e.value, o = [e])
                                        }
                                    })), r > i.value && (i.value = r, i.entries = o, t())
                                },
                                v = f("layout-shift", c);
                            v && (t = s(e, i, b, n.reportAllChanges), l((function() {
                                c(v.takeRecords()), t(!0)
                            })), a((function() {
                                r = 0, i = u("CLS", 0), t = s(e, i, b, n.reportAllChanges), d((function() {
                                    return t()
                                }))
                            })), setTimeout(t, 0))
                        })))
                },
                A = 0,
                S = 1 / 0,
                _ = 0,
                w = function(e) {
                    e.forEach((function(e) {
                        e.interactionId && (S = Math.min(S, e.interactionId), _ = Math.max(_, e.interactionId), A = _ ? (_ - S) / 7 + 1 : 0)
                    }))
                },
                I = function() {
                    "interactionCount" in performance || i || (i = f("event", w, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                P = [],
                D = new Map,
                M = 0,
                O = function() {
                    return (i ? A : performance.interactionCount || 0) - M
                },
                k = [],
                H = function(e) {
                    if (k.forEach((function(n) {
                            return n(e)
                        })), e.interactionId || "first-input" === e.entryType) {
                        var n = P[P.length - 1],
                            t = D.get(e.interactionId);
                        if (t || P.length < 10 || e.duration > n.latency) {
                            if (t) e.duration > t.latency ? (t.entries = [e], t.latency = e.duration) : e.duration === t.latency && e.startTime === t.entries[0].startTime && t.entries.push(e);
                            else {
                                var i = {
                                    id: e.interactionId,
                                    latency: e.duration,
                                    entries: [e]
                                };
                                D.set(i.id, i), P.push(i)
                            }
                            P.sort((function(e, n) {
                                return n.latency - e.latency
                            })), P.length > 10 && P.splice(10).forEach((function(e) {
                                return D.delete(e.id)
                            }))
                        }
                    }
                },
                N = [200, 500],
                B = function(e, n) {
                    n = n || {}, T((function() {
                        var t;
                        I();
                        var i, r = u("INP"),
                            o = function(e) {
                                e.forEach(H);
                                var n, t = (n = Math.min(P.length - 1, Math.floor(O() / 50)), P[n]);
                                t && t.latency !== r.value && (r.value = t.latency, r.entries = t.entries, i())
                            },
                            c = f("event", o, {
                                durationThreshold: null !== (t = n.durationThreshold) && void 0 !== t ? t : 40
                            });
                        i = s(e, r, N, n.reportAllChanges), c && ("PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && c.observe({
                            type: "first-input",
                            buffered: !0
                        }), l((function() {
                            o(c.takeRecords()), i(!0)
                        })), a((function() {
                            M = 0, P.length = 0, D.clear(), r = u("INP"), i = s(e, r, N, n.reportAllChanges)
                        })))
                    }))
                },
                F = [2500, 4e3],
                R = {},
                q = function(e, n) {
                    n = n || {}, T((function() {
                        var t, i = E(),
                            r = u("LCP"),
                            o = function(e) {
                                n.reportAllChanges || (e = e.slice(-1)), e.forEach((function(e) {
                                    e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - c(), 0), r.entries = [e], t())
                                }))
                            },
                            m = f("largest-contentful-paint", o);
                        if (m) {
                            t = s(e, r, F, n.reportAllChanges);
                            var p = v((function() {
                                R[r.id] || (o(m.takeRecords()), m.disconnect(), R[r.id] = !0, t(!0))
                            }));
                            ["keydown", "click"].forEach((function(e) {
                                addEventListener(e, (function() {
                                    return e = p, n = self.requestIdleCallback || self.setTimeout, t = -1, e = v(e), "hidden" === document.visibilityState ? e() : (t = n(e), l(e)), t;
                                    var e, n, t
                                }), !0)
                            })), l(p), a((function(i) {
                                r = u("LCP"), t = s(e, r, F, n.reportAllChanges), d((function() {
                                    r.value = performance.now() - i.timeStamp, R[r.id] = !0, t(!0)
                                }))
                            }))
                        }
                    }))
                };
            new Date
        }
    }
]);