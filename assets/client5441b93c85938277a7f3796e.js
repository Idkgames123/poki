"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5441], {
        5441: (t, e, n) => {
            n.d(e, {
                zt: () => a,
                dC: () => r.unstable_batchedUpdates,
                wU: () => x,
                I0: () => v,
                v9: () => g,
                oR: () => h
            });
            var r = n(8661),
                u = r.default.createContext(null);
            var i = function(t) {
                    t()
                },
                s = function() {
                    return i
                },
                c = {
                    notify: function() {}
                };
            var o = function() {
                function t(t, e) {
                    this.store = t, this.parentSub = e, this.unsubscribe = null, this.listeners = c, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
                }
                var e = t.prototype;
                return e.addNestedSub = function(t) {
                    return this.trySubscribe(), this.listeners.subscribe(t)
                }, e.notifyNestedSubs = function() {
                    this.listeners.notify()
                }, e.handleChangeWrapper = function() {
                    this.onStateChange && this.onStateChange()
                }, e.isSubscribed = function() {
                    return Boolean(this.unsubscribe)
                }, e.trySubscribe = function() {
                    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = function() {
                        var t = s(),
                            e = null,
                            n = null;
                        return {
                            clear: function() {
                                e = null, n = null
                            },
                            notify: function() {
                                t((function() {
                                    for (var t = e; t;) t.callback(), t = t.next
                                }))
                            },
                            get: function() {
                                for (var t = [], n = e; n;) t.push(n), n = n.next;
                                return t
                            },
                            subscribe: function(t) {
                                var r = !0,
                                    u = n = {
                                        callback: t,
                                        next: null,
                                        prev: n
                                    };
                                return u.prev ? u.prev.next = u : e = u,
                                    function() {
                                        r && null !== e && (r = !1, u.next ? u.next.prev = u.prev : n = u.prev, u.prev ? u.prev.next = u.next : e = u.next)
                                    }
                            }
                        }
                    }())
                }, e.tryUnsubscribe = function() {
                    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = c)
                }, t
            }();
            const a = function(t) {
                var e = t.store,
                    n = t.context,
                    i = t.children,
                    s = (0, r.useMemo)((function() {
                        var t = new o(e);
                        return t.onStateChange = t.notifyNestedSubs, {
                            store: e,
                            subscription: t
                        }
                    }), [e]),
                    c = (0, r.useMemo)((function() {
                        return e.getState()
                    }), [e]);
                (0, r.useEffect)((function() {
                    var t = s.subscription;
                    return t.trySubscribe(), c !== e.getState() && t.notifyNestedSubs(),
                        function() {
                            t.tryUnsubscribe(), t.onStateChange = null
                        }
                }), [s, c]);
                var a = n || u;
                return r.default.createElement(a.Provider, {
                    value: s
                }, i)
            };
            n(8679), n(9864);
            var f = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect;
            n(4890);

            function b() {
                return (0, r.useContext)(u)
            }

            function l(t) {
                void 0 === t && (t = u);
                var e = t === u ? b : function() {
                    return (0, r.useContext)(t)
                };
                return function() {
                    return e().store
                }
            }
            var h = l();

            function d(t) {
                void 0 === t && (t = u);
                var e = t === u ? h : l(t);
                return function() {
                    return e().dispatch
                }
            }
            var v = d(),
                p = function(t, e) {
                    return t === e
                };

            function y(t) {
                void 0 === t && (t = u);
                var e = t === u ? b : function() {
                    return (0, r.useContext)(t)
                };
                return function(t, n) {
                    void 0 === n && (n = p);
                    var u = e(),
                        i = function(t, e, n, u) {
                            var i, s = (0, r.useReducer)((function(t) {
                                    return t + 1
                                }), 0)[1],
                                c = (0, r.useMemo)((function() {
                                    return new o(n, u)
                                }), [n, u]),
                                a = (0, r.useRef)(),
                                b = (0, r.useRef)(),
                                l = (0, r.useRef)(),
                                h = (0, r.useRef)(),
                                d = n.getState();
                            try {
                                i = t !== b.current || d !== l.current || a.current ? t(d) : h.current
                            } catch (t) {
                                throw a.current && (t.message += "\nThe error may be correlated with this previous error:\n" + a.current.stack + "\n\n"), t
                            }
                            return f((function() {
                                b.current = t, l.current = d, h.current = i, a.current = void 0
                            })), f((function() {
                                function t() {
                                    try {
                                        var t = b.current(n.getState());
                                        if (e(t, h.current)) return;
                                        h.current = t
                                    } catch (t) {
                                        a.current = t
                                    }
                                    s()
                                }
                                return c.onStateChange = t, c.trySubscribe(), t(),
                                    function() {
                                        return c.tryUnsubscribe()
                                    }
                            }), [n, c]), i
                        }(t, n, u.store, u.subscription);
                    return (0, r.useDebugValue)(i), i
                }
            }
            var S, g = y();

            function C(t, e) {
                return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
            }

            function x(t, e) {
                if (C(t, e)) return !0;
                if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
                var n = Object.keys(t),
                    r = Object.keys(e);
                if (n.length !== r.length) return !1;
                for (var u = 0; u < n.length; u++)
                    if (!Object.prototype.hasOwnProperty.call(e, n[u]) || !C(t[n[u]], e[n[u]])) return !1;
                return !0
            }
            S = r.unstable_batchedUpdates, i = S
        }
    }
]);