"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [278], {
        278: (e, n, t) => {
            function r() {
                return r = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, r.apply(this, arguments)
            }
            t.d(n, {
                Z: () => c
            });
            var i = t(8661),
                o = i.useLayoutEffect;

            function s() {
                return !0
            }
            const c = function(e) {
                var n = (0, i.useRef)(null),
                    t = (0, i.useReducer)(s, !1),
                    c = t[0],
                    u = t[1],
                    f = e.noWrapper,
                    a = e.ssrOnly,
                    l = e.whenIdle,
                    d = e.whenVisible,
                    p = e.promise,
                    h = e.on,
                    v = void 0 === h ? [] : h,
                    y = e.children,
                    E = e.didHydrate,
                    _ = function(e, n) {
                        if (null == e) return {};
                        var t, r, i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                        return i
                    }(e, ["noWrapper", "ssrOnly", "whenIdle", "whenVisible", "promise", "on", "children", "didHydrate"]);
                o((function() {
                    n.current.hasChildNodes() || u()
                }), []), (0, i.useEffect)((function() {
                    c && E && E()
                }), [c]), (0, i.useEffect)((function() {
                    if (!a && !c) {
                        var e = n.current,
                            t = [];
                        if (p && p.then(u, u), d) {
                            var r = f ? e : e.firstElementChild;
                            if (!r || "undefined" == typeof IntersectionObserver) return u();
                            var i = new IntersectionObserver((function(e) {
                                e.forEach((function(e) {
                                    (e.isIntersecting || e.intersectionRatio > 0) && u()
                                }))
                            }), "object" == typeof d ? d : {
                                rootMargin: "250px"
                            });
                            i.observe(r), t.push((function() {
                                i.disconnect()
                            }))
                        }
                        if (l)
                            if ("undefined" != typeof requestIdleCallback) {
                                var o = requestIdleCallback(u, {
                                    timeout: 500
                                });
                                t.push((function() {
                                    cancelIdleCallback(o)
                                }))
                            } else {
                                var s = setTimeout(u, 2e3);
                                t.push((function() {
                                    clearTimeout(s)
                                }))
                            }
                        return [].concat(v).forEach((function(n) {
                                e.addEventListener(n, u, {
                                    once: !0,
                                    passive: !0
                                }), t.push((function() {
                                    e.removeEventListener(n, u, {})
                                }))
                            })),
                            function() {
                                t.forEach((function(e) {
                                    e()
                                }))
                            }
                    }
                }), [c, v, a, l, d, E, p, f]);
                var O = "string" == typeof f ? f : "div";
                return c ? f ? y : (0, i.createElement)(O, r({
                    ref: n,
                    style: {
                        display: "contents"
                    }
                }, _), y) : (0, i.createElement)(O, r({}, _, {
                    ref: n,
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: ""
                    }
                }))
            }
        }
    }
]);