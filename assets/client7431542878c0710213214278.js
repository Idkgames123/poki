"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7431], {
        6201: (t, e, o) => {
            o.d(e, {
                v4: () => y
            });
            const n = "@@router/CALL_HISTORY_METHOD",
                r = "@@router/LOCATION_CHANGE",
                a = (t, e) => ({
                    type: r,
                    payload: {
                        location: t,
                        action: e
                    }
                });

            function c(t) {
                return (...e) => ({
                    type: n,
                    payload: {
                        method: t,
                        args: e
                    }
                })
            }
            const i = c("push"),
                s = c("replace"),
                u = c("go"),
                l = c("goBack"),
                p = c("goForward"),
                h = c("back"),
                f = c("forward");

            function d(t, e) {
                return "string" != typeof t || t.startsWith(e) ? "object" == typeof t && t.pathname && !t.pathname.startsWith(e) ? Object.assign(Object.assign({}, t), {
                    pathname: e + t.pathname
                }) : t : e + t
            }
            const y = ({
                history: t,
                routerReducerKey: e = "router",
                reduxTravelling: o = !1,
                showHistoryAction: c = !1,
                selectRouterState: y,
                savePreviousLocations: g = 0,
                batch: b,
                reachGlobalHistory: v,
                basename: m
            }) => {
                let w = !1;
                const _ = (t, e, o) => w ? t({
                    location: e,
                    action: o
                }) : t(e, o);
                "function" != typeof b && (b = t => {
                    t()
                }), "function" != typeof y && (y = t => t[e]);
                const O = (({
                        savePreviousLocations: t = 0,
                        basename: e
                    }) => {
                        const o = {
                                location: null,
                                action: null,
                                basename: e
                            },
                            n = isNaN(t) ? 0 : t;
                        return n && (o.previousLocations = []), (t = o, {
                            type: e,
                            payload: a
                        } = {}) => {
                            if (e === r) {
                                const {
                                    location: e,
                                    action: o
                                } = a || {}, r = n ? [{
                                    location: e,
                                    action: o
                                }, ...t.previousLocations.slice(0, n)] : void 0;
                                return Object.assign(Object.assign({}, t), {
                                    location: e,
                                    action: o,
                                    previousLocations: r
                                })
                            }
                            return t
                        }
                    })({
                        savePreviousLocations: g,
                        basename: m
                    }),
                    k = (({
                        history: t,
                        showHistoryAction: e,
                        basename: o
                    }) => () => r => a => {
                        if (a.type !== n) return r(a);
                        const c = a.payload.method,
                            i = a.payload.args;
                        switch (c) {
                            case "push":
                                {
                                    let e = i;o && i.length > 0 && (e = [d(i[0], o), ...i.slice(1)]),
                                    t.push(...e);
                                    break
                                }
                            case "replace":
                                {
                                    let e = i;o && i.length > 0 && (e = [d(i[0], o), ...i.slice(1)]),
                                    t.replace(...e);
                                    break
                                }
                            case "go":
                                t.go(...i);
                                break;
                            case "back":
                            case "goBack":
                                t.goBack && t.goBack(...i), t.back && t.back(...i);
                                break;
                            case "forward":
                            case "goForward":
                                t.goForward && t.goForward(...i), t.forward && t.forward(...i)
                        }
                        return e ? r(a) : void 0
                    })({
                        history: t,
                        showHistoryAction: c,
                        basename: m
                    });
                let E = !1;
                return {
                    routerReducer: O,
                    routerMiddleware: k,
                    createReduxHistory: e => {
                        let n = [];
                        return e.dispatch(a(t.location, t.action)), o && (e => {
                            e.subscribe((() => {
                                const o = y(e.getState()).location,
                                    n = t.location;
                                var r, a;
                                o && n && (a = n, (r = o).pathname !== a.pathname || r.search !== a.search || r.hash !== a.hash) && (E = !0, t.push({
                                    pathname: o.pathname,
                                    search: o.search,
                                    hash: o.hash
                                }))
                            }))
                        })(e), t.listen(((t, o) => {
                            if (t.location && (o = t.action, t = t.location, w = !0), E) {
                                E = !1;
                                const t = y(e.getState());
                                n.forEach((e => _(e, t.location, t.action)))
                            } else b((() => {
                                e.dispatch(a(t, o));
                                const r = y(e.getState());
                                n.forEach((t => _(t, r.location, r.action)))
                            }))
                        })), v && v.listen((({
                            location: t,
                            action: o
                        }) => {
                            if ("POP" !== o) {
                                const r = {
                                    pathname: t.pathname,
                                    search: t.search,
                                    hash: t.hash,
                                    key: t.key,
                                    state: t.state
                                };
                                b((() => {
                                    e.dispatch(a(r, o));
                                    const t = y(e.getState());
                                    n.forEach((e => _(e, t.location, t.action)))
                                }))
                            }
                        })), {
                            block: t.block,
                            createHref: t.createHref,
                            push: (...t) => e.dispatch(i(...t)),
                            replace: (...t) => e.dispatch(s(...t)),
                            go: (...t) => e.dispatch(u(...t)),
                            goBack: (...t) => e.dispatch(l(...t)),
                            goForward: (...t) => e.dispatch(p(...t)),
                            back: (...t) => e.dispatch(h(...t)),
                            forward: (...t) => e.dispatch(f(...t)),
                            listen: t => (n.indexOf(t) < 0 && n.push(t), () => {
                                n = n.filter((e => e !== t))
                            }),
                            get location() {
                                return y(e.getState()).location
                            },
                            get action() {
                                return y(e.getState()).action
                            },
                            get length() {
                                return t.length
                            },
                            get listenObject() {
                                return w
                            }
                        }
                    }
                }
            }
        },
        2915: (t, e, o) => {
            o.d(e, {
                l: () => r
            });
            var n = o(3071);

            function r() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var o = function() {
                    for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                    return n.T.apply(void 0, t.map((function(t) {
                        var o = t.apply(void 0, e);
                        if (!o) throw new TypeError('combineEpics: one of the provided Epics "' + (t.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                        return o
                    })))
                };
                try {
                    Object.defineProperty(o, "name", {
                        value: "combineEpics(" + t.map((function(t) {
                            return t.name || "<anonymous>"
                        })).join(", ") + ")"
                    })
                } catch (t) {}
                return o
            }
        },
        5545: (t, e, o) => {
            o.d(e, {
                k: () => h
            });
            var n = o(6678),
                r = o(9248),
                a = o(9635),
                c = o(9526),
                i = o(9127),
                s = o(7877),
                u = o(8720),
                l = function(t, e) {
                    return l = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    }, l(t, e)
                };
            Object.create;
            Object.create;
            var p = function(t) {
                function e(e, o) {
                    var n = t.call(this, (function(t) {
                        var e = n.__notifier.subscribe(t);
                        return e && !e.closed && t.next(n.value), e
                    })) || this;
                    return n.__notifier = new r.x, n.value = o, e.subscribe((function(t) {
                        t !== n.value && (n.value = t, n.__notifier.next(t))
                    })), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function o() {
                        this.constructor = t
                    }
                    l(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
                }(e, t), e
            }(o(230).y);

            function h(t) {
                void 0 === t && (t = {});
                var e = new(0, n.N.constructor)(n.N.schedulerActionCtor);
                var o, l = new r.x,
                    h = function(n) {
                        o = n;
                        var h = new r.x,
                            f = new r.x,
                            d = h.asObservable().pipe((0, c.Q)(e)),
                            y = new p(f.pipe((0, c.Q)(e)), o.getState());
                        return l.pipe((0, i.U)((function(e) {
                                var o = e(d, y, t.dependencies);
                                if (!o) throw new TypeError('Your root Epic "' + (e.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                                return o
                            })), (0, s.z)((function(t) {
                                return (0, a.D)(t).pipe((0, u.R)(e), (0, c.Q)(e))
                            }))).subscribe(o.dispatch),
                            function(t) {
                                return function(e) {
                                    var n = t(e);
                                    return f.next(o.getState()), h.next(e), n
                                }
                            }
                    };
                return h.run = function(t) {
                    l.next(t)
                }, h
            }
        },
        5069: (t, e, o) => {
            o.d(e, {
                l: () => a
            });
            var n = o(4975),
                r = function(t, e) {
                    return t === e || "function" == typeof e && t === e.toString()
                };

            function a() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var o = t.length;
                return (0, n.h)(1 === o ? function(e) {
                    return r(e.type, t[0])
                } : function(e) {
                    for (var n = 0; n < o; n++)
                        if (r(e.type, t[n])) return !0;
                    return !1
                })
            }
        }
    }
]);