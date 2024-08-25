"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4091], {
        1563: (e, t, n) => {
            n.d(t, {
                FV: () => r,
                ZP: () => a,
                _I: () => s,
                sc: () => i
            });
            const o = (0, n(9829).oM)({
                    name: "notifications",
                    initialState: {
                        stack: [],
                        muted: []
                    },
                    reducers: {
                        setNotification: (e, t) => {
                            const {
                                notification: n
                            } = t.payload;
                            n.id = n.id || Date.now(), n.isClosed = n.isClosed || !1, e.stack.push(n)
                        },
                        removeNotification: (e, t) => {
                            e.stack = e.stack.filter((e => e.id !== t.payload.id))
                        },
                        setCloseNotification: (e, t) => {
                            const {
                                id: n
                            } = t.payload;
                            e.stack = e.stack.map((t => t.id === n ? (t.muteAfterClose && e.muted.push(n), { ...t,
                                isClosed: !0
                            }) : t))
                        }
                    }
                }),
                {
                    setNotification: i,
                    removeNotification: r,
                    setCloseNotification: s
                } = o.actions,
                a = o
        },
        8971: (e, t, n) => {
            n.d(t, {
                AF: () => S,
                UL: () => I,
                ZP: () => _,
                hF: () => $,
                ik: () => A,
                ql: () => P,
                rw: () => q,
                v2: () => C,
                w6: () => k
            });
            var o = n(9829),
                i = n(5482),
                r = n(3182),
                s = n(7986),
                a = n(6241),
                l = n(8939),
                d = n(9033),
                c = n(4581),
                u = n(3067),
                p = n(4481),
                h = n(2971);
            const y = `${(0,d.Lq)()}/search/query`,
                m = `${(0,d.Lq)()}/category`,
                v = {
                    content: []
                },
                f = {
                    query: "",
                    expanded: !1,
                    results: v,
                    pending: !1,
                    doneOnce: !1,
                    error: !1,
                    popularSearches: [],
                    searchSessionId: 0,
                    quickSearchCategories: []
                },
                g = (e, t, n) => ({
                    data: (0, c.zP)(e, t, n),
                    score: (null == n ? void 0 : n.score) || ("game" === t ? 1 : 0)
                });

            function w(e) {
                let {
                    site: t,
                    device: n,
                    hits: o
                } = e;
                const i = function(e) {
                        var t, n;
                        let {
                            site: o,
                            device: i,
                            hits: r
                        } = e;
                        const s = (null == r || null === (t = r.categories) || void 0 === t ? void 0 : t.map((e => g(o, "category", e)))) || [],
                            a = (null == r || null === (n = r.games) || void 0 === n ? void 0 : n.map((e => g(o, "game", e)))) || [];
                        return {
                            categories: s,
                            games: "mobile" === i ? a.filter((e => e.data.mobile)) : a
                        }
                    }({
                        site: t,
                        device: n,
                        hits: o
                    }),
                    r = [...i.categories.map((e => ({ ...e,
                        category: !0
                    }))), ...i.games];
                return r.sort(((e, t) => t.score - e.score)), "mobile" === n && r.splice(50), r
            }

            function b(e) {
                let {
                    state: t,
                    query: n,
                    numberOfResults: o = 0,
                    isQuickCategorySearch: i = !1
                } = e;
                const a = (0, s.ZM)(t),
                    l = (0, r.Wj)(t),
                    d = o > 0 ? "success" : "empty";
                (0, u.A)({
                    category: "search",
                    action: "results",
                    label: l,
                    data: {
                        query: n,
                        result: d,
                        numberOfResults: o,
                        searchSessionId: a,
                        isQuickCategorySearch: i
                    }
                })
            }
            const k = (0, o.hg)("search/fetchSearch", (async (e, t) => {
                    if (e.query.length < 2) return {
                        content: []
                    };
                    const n = t.getState(),
                        o = (0, a.lH)(n),
                        r = (0, i.Si)(n),
                        s = (0, i.Zn)(n),
                        d = (0, l.d)(n),
                        c = await fetch(`${y}/${o.id}?q=${encodeURIComponent(e.query)}&device=${r}&country=${s}${d?`&experiment=${d}`:""}`),
                        u = await c.json();
                    if (!u.categories.length && !u.games.length) return b({
                        state: n,
                        query: e.query
                    }), {
                        content: []
                    };
                    const p = w({
                        site: o,
                        device: r,
                        hits: u
                    });
                    return b({
                        state: n,
                        query: e.query,
                        numberOfResults: p.length
                    }), {
                        content: p
                    }
                })),
                S = (0, o.hg)("search/fetchQuickSearchCategories", (async (e, t) => {
                    const n = t.getState(),
                        o = (0, a.lH)(n),
                        r = (0, i.Zn)(n),
                        s = (0, i.Si)(n),
                        l = await fetch(`${(0,d.Lq)()}/quicksearch?site=${o.id}&country=${r}&device=${s}`);
                    return (await l.json()).map((e => {
                        let {
                            title: t,
                            slug: n
                        } = e;
                        return {
                            title: t,
                            slug: n,
                            url: (0, p.Ep)(o, "category", n)
                        }
                    }))
                })),
                A = (0, o.hg)("search/fetchSearchCategoryResults", (async (e, t) => {
                    if (!e) return {
                        content: []
                    };
                    const n = t.getState(),
                        o = (0, a.lH)(n),
                        r = (0, i.Si)(n),
                        s = (0, i.Zn)(n),
                        d = (0, l.d)(n),
                        c = await fetch(`${m}/${encodeURIComponent(e)}?site=${o.id}&device=${r}&country=${s}${d?`&experiment=${d}`:""}`),
                        u = await c.json(),
                        p = {
                            categories: u.related_categories || [],
                            games: u.games || []
                        };
                    return b({
                        state: n,
                        query: e,
                        numberOfResults: p.categories.length + p.games.length,
                        isQuickCategorySearch: !0
                    }), {
                        content: w({
                            site: o,
                            device: r,
                            hits: p
                        })
                    }
                })),
                E = (0, o.oM)({
                    name: "search",
                    initialState: f,
                    reducers: {
                        closeSearch(e) {
                            e.expanded = !1, e.doneOnce = !1, e.error = !1, e.pending = !1, e.results = v
                        },
                        openSearch(e) {
                            e.searchSessionId = (0, h.V)(), e.expanded = !0, e.query = ""
                        },
                        setSearchQuery(e, t) {
                            e.query = t.payload.query
                        },
                        resetSearch(e) {
                            e.query = "", e.results = v, e.pending = !1, e.doneOnce = !1, e.error = !1
                        },
                        closeSearchIfOpen(e) {
                            e.expanded && (e.expanded = !1)
                        }
                    },
                    extraReducers: e => {
                        e.addCase(k.pending, (e => {
                            e.pending = !0
                        })).addCase(k.fulfilled, ((e, t) => {
                            e.pending = !1, e.results = [...t.payload.content]
                        })).addCase(k.rejected, (e => {
                            e.pending = !1, e.error = !0
                        })).addCase(A.pending, (e => {
                            e.pending = !0
                        })).addCase(A.fulfilled, ((e, t) => {
                            e.pending = !1, e.results = [...t.payload.content]
                        })).addCase(A.rejected, (e => {
                            e.pending = !1, e.error = !0
                        })).addCase(S.fulfilled, ((e, t) => {
                            e.quickSearchCategories = t.payload
                        }))
                    }
                }),
                {
                    closeSearch: $,
                    openSearch: I,
                    setSearchQuery: P,
                    resetSearch: C,
                    closeSearchIfOpen: q
                } = E.actions,
                _ = E
        },
        3367: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var o = n(8661),
                i = n(6727),
                r = n(1366),
                s = n(1524),
                a = n(648),
                l = n(9774),
                d = n(8356),
                c = n(3682),
                u = n(4481);
            const p = (0, i.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-PageHome",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => Promise.all([n.e(9590), n.e(4593), n.e(241), n.e(4639)]).then(n.bind(n, 8818)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return 8818
                    }
                }, {
                    fallback: o.default.createElement(a.default, null)
                }),
                h = (0, i.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-PageCategory",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => Promise.all([n.e(9590), n.e(4593), n.e(5465)]).then(n.bind(n, 2036)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return 2036
                    }
                }, {
                    fallback: o.default.createElement(l.default, null)
                }),
                y = (0, i.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-PageGame",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => Promise.all([n.e(9590), n.e(4593), n.e(2386), n.e(9834), n.e(8147), n.e(2539), n.e(8039), n.e(3389)]).then(n.bind(n, 5282)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return 5282
                    }
                }, {
                    fallback: o.default.createElement(d.default, null)
                }),
                m = (0, i.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-PageError",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => Promise.all([n.e(9590), n.e(4593), n.e(8039)]).then(n.bind(n, 670)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return 670
                    }
                }, {
                    fallback: o.default.createElement(c.default, null)
                }),
                v = (0, i.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-PageContent",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => Promise.all([n.e(9733), n.e(9083)]).then(n.bind(n, 1573)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return 1573
                    }
                }, {
                    fallback: o.default.createElement(c.default, null)
                });

            function f(e) {
                let {
                    ssrPath: t,
                    ssrSearch: n,
                    site: i
                } = e;
                return o.default.createElement(r.F0, {
                    ssrPath: t,
                    ssrSearch: n,
                    hook: s.tL
                }, o.default.createElement(r.rs, null, o.default.createElement(r.AW, {
                    path: `${(0,u.Ep)(i,"home","")}`,
                    component: p
                }), o.default.createElement(r.AW, {
                    nest: !0,
                    path: `${(0,u.Ep)(i,"game",":slug")}`,
                    component: y
                }), o.default.createElement(r.AW, {
                    nest: !0,
                    path: `${(0,u.Ep)(i,"content",":slug")}`,
                    component: v
                }), o.default.createElement(r.AW, {
                    nest: !0,
                    path: `${(0,u.Ep)(i,"preview",":slug")}`,
                    component: y
                }), o.default.createElement(r.AW, {
                    nest: !0,
                    path: `${(0,u.Ep)(i,"mystery",":slug")}`,
                    component: y
                }), o.default.createElement(r.AW, {
                    path: `${(0,u.Ep)(i,"category",":slug")}`,
                    component: h
                }), o.default.createElement(r.AW, {
                    component: m
                })))
            }
        },
        9033: (e, t, n) => {
            n.d(t, {
                Lq: () => l,
                Ns: () => c,
                UO: () => u,
                ZP: () => d
            });
            var o = n(4762),
                i = n(6213),
                r = n(2323);
            const s = "undefined" != typeof XMLHttpRequest ? XMLHttpRequest : n.n(r)();

            function a(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const i = `${e}${t}`;
                return arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? fetch(i, n) : (0, o.h)({
                    createXHR: () => new s,
                    url: i,
                    ...n,
                    crossDomain: !0
                })
            }

            function l() {
                let e = {
                    acceptance: "https://api-acceptance.poki.io",
                    production: "https://api.poki.com",
                    local: "http://localhost:10019"
                };
                "undefined" == typeof window && "cluster" === process.env.DEPLOY_ENV && (e = {
                    acceptance: "http://content.mothership.svc.cluster.local",
                    production: "http://content.mothership.svc.cluster.local",
                    local: "http://localhost:10019"
                }), "undefined" == typeof window && process.env.OVERWRITE_API_LOCATION && (e = {
                    acceptance: process.env.OVERWRITE_API_LOCATION,
                    production: process.env.OVERWRITE_API_LOCATION,
                    local: process.env.OVERWRITE_API_LOCATION
                });
                return e[(0, i.dK)()] || "https://api.poki.com"
            }

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return a(l(), e, t, n)
            }

            function c(e, t) {
                const n = {
                    acceptance: "https://vote-acceptance.poki.io",
                    production: "https://vote.poki.io",
                    local: "http://localhost:10066"
                };
                return a(n[(0, i.dK)()] || n.production, e, t)
            }

            function u(e, t) {
                return a("https://t.poki.io", e, t)
            }
        },
        3520: (e, t, n) => {
            n.d(t, {
                baseBackgrounds: () => o
            });
            const o = {
                default: {
                    style: "default"
                },
                preview: {
                    color: "var(--grey-7)",
                    image: "https://a.poki-cdn.com/images/bg-diamante-lowpo.svg",
                    style: "tile"
                },
                mystery: {
                    color: "var(--yellow-8)",
                    imageLeft: "https://a.poki-cdn.com/cdn-cgi/image/f=auto,quality=78/images/bg-playtest-left.png",
                    imageRight: "https://a.poki-cdn.com/cdn-cgi/image/f=auto,quality=78/images/bg-playtest-right.png",
                    style: "dual-cover"
                }
            }
        },
        9598: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var o = n(9829),
                i = n(5545),
                r = n(6201),
                s = n(6241),
                a = n(6128),
                l = n(8734),
                d = n(9459),
                c = n(9927),
                u = n(1563),
                p = n(8342),
                h = n(552),
                y = n(8132);

            function m(e) {
                return Object.values(h.h).reduce(((e, t) => {
                    if ("undefined" == typeof window) return e;
                    try {
                        const n = (0, y.rV)(t.key);
                        if (n) {
                            const o = JSON.parse(n);
                            t.validator(o) ? e[t.rootKey][t.childKey] = o : localStorage.removeItem(t.key)
                        }
                    } catch (e) {
                        localStorage.removeItem(t.key)
                    }
                    return e
                }), e)
            }

            function v(e, t, h) {
                const y = (0, i.k)({
                        dependencies: {
                            createApi: p.Z
                        }
                    }),
                    {
                        createReduxHistory: v,
                        routerMiddleware: f
                    } = (0, r.v4)({
                        history: e
                    }),
                    g = (0, a.Z)(e),
                    w = (0, o.xC)({
                        reducer: g,
                        middleware: e => e({
                            serializableCheck: {
                                ignoredActions: [c.y6.type, c.OB.type, u.sc.type],
                                ignoredPaths: ["notifications"]
                            }
                        }).concat([f, y, d.gk.middleware]),
                        preloadedState: m(h)
                    });
                return "undefined" != typeof window && (window.store = w, (0, l.ET)((0, s.u)(w.getState()))), v(w), "function" == typeof t && y.run(t), "undefined" != typeof window && n.e(2593).then(n.bind(n, 2593)).then((e => {
                    let {
                        fireCombinedAsyncEpics: t
                    } = e;
                    "function" == typeof requestIdleCallback ? requestIdleCallback((() => {
                        t()
                    }), {
                        timeout: 2e3
                    }) : setTimeout((() => {
                        t()
                    }), 1)
                })), w
            }
        },
        4581: (e, t, n) => {
            n.d(t, {
                Pi: () => r,
                dr: () => s,
                zP: () => i
            });
            var o = n(4481);

            function i(e, t, n) {
                let i, {
                    id: r,
                    developer: s,
                    slug: a,
                    image: l,
                    image_alt: d,
                    mobile: c,
                    title: u,
                    media: p,
                    is_new: h,
                    animated_thumbnail: y,
                    iab_categories: m
                } = n;
                if (p) {
                    var v;
                    const e = p.map((e => "video" === e.type && e));
                    e.length > 1 && e.sort(((e, t) => (null == e ? void 0 : e.position) > (null == t ? void 0 : t.position) ? 1 : -1)), i = null === (v = e[0]) || void 0 === v ? void 0 : v.path
                }
                return {
                    id: r,
                    developer: s,
                    mobile: c,
                    title: u,
                    type: t,
                    image: l,
                    imageAlt: d,
                    url: (0, o.Ep)(e, t, a),
                    slug: a,
                    video: i,
                    isNew: h,
                    animatedThumbnail: y,
                    iabCategories: m
                }
            }

            function r(e) {
                return e.filter((e => e.mobile))
            }

            function s() {
                let e = arguments.length > 1 ? arguments[1] : void 0;
                return "mobile" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "desktop") ? [...e].sort(((e, t) => e.mobile === t.mobile ? 0 : e.mobile ? -1 : 1)) : e
            }
        },
        6805: (e, t, n) => {
            function o(e) {
                const t = `poki/${e}`,
                    n = e => ({
                        type: t,
                        ...e
                    });
                return n.type = t, n
            }
            n.d(t, {
                Z: () => o
            })
        },
        8342: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var o = n(9033);
            const i = {
                api: o.ZP,
                vote: o.Ns,
                tracking: o.UO
            };

            function r(e) {
                return i[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "api"]
            }
        },
        9312: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            const o = () => ({
                width: window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth,
                height: window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight
            })
        },
        3067: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = n(2831);
            const i = "undefined" != typeof window && new URLSearchParams(window.location.search).has("verboseLogging");

            function r(e) {
                var t, n;
                let {
                    category: r,
                    action: s,
                    label: a,
                    data: l,
                    options: d
                } = e;
                if ("undefined" == typeof window) return;
                const c = window;
                if (c.context = (0, o.p)(c.store.getState()), i && console.info(`[pushEvent] ${r} ${s} ${a}`, l, d), (null === (t = c.context) || void 0 === t || !t.isPokiAnalyticsEnabled) && "settingsUpdated" !== s) return;
                let u = `${r}-${s}`;
                s || (u = r), a && (u += `-${a}`), null === (n = c.pokiGTM) || void 0 === n || n.push({
                    event: u,
                    category: r,
                    action: s,
                    label: a,
                    data: l || {},
                    options: d || {}
                })
            }
        },
        3672: (e, t, n) => {
            n.d(t, {
                A9: () => r,
                rt: () => s,
                wy: () => a
            });
            var o = n(8514),
                i = n(9404);

            function r(e, t) {
                if (!o.Z[e]) return;
                if (!t || !o.Z[e].multiverse) return o.Z[e].background;
                const n = o.Z[e].multiverse.worlds.find((e => {
                    let {
                        slug: n
                    } = e;
                    return n === t
                }));
                return n ? n.background || o.Z[e].background : void 0
            }

            function s(e) {
                return null === i.Z || void 0 === i.Z ? void 0 : i.Z[e]
            }

            function a(e) {
                return o.Z[e] ? o.Z[e].multiverse : void 0
            }
        },
        8092: (e, t, n) => {
            function o() {
                var e, t, n, o;
                return (null === (e = window) || void 0 === e || null === (t = e.frames) || void 0 === t ? void 0 : t.gameFrame) || (null === (n = document) || void 0 === n || null === (o = n.getElementById("game-element")) || void 0 === o ? void 0 : o.contentWindow) || {
                    postMessage: () => {}
                }
            }

            function i() {
                return document.getElementById("game-player")
            }

            function r() {
                return document.getElementById("poki-video-ad-container")
            }

            function s() {
                var e, t, n;
                if (!window.PokiSDK) return;
                const o = r(),
                    s = i();
                if (o && s) {
                    const e = s.getBoundingClientRect();
                    o.style.left = `${e.left}px`, o.style.top = `${e.top+(window.scrollY||0)}px`, o.style.width = `${e.width}px`, o.style.height = `${e.height}px`
                }
                null === (e = window) || void 0 === e || null === (t = e.PokiSDK) || void 0 === t || null === (n = t.resizeVideoAd) || void 0 === n || n.call(t)
            }

            function a() {
                const e = r();
                e && (e.style.display = "none")
            }

            function l(e) {
                const t = document.createElement("div");
                return t.style.position = e ? "fixed" : "absolute", t.style.zIndex = "9999", t.style.overflow = "hidden", t.style.display = "none", t.style.background = "#000", t.id = "poki-video-ad-container", document.body.appendChild(t), t
            }

            function d(e, t) {
                const n = document.getElementById(e.containerID);
                var i, r, s;
                n && (null === (i = window) || void 0 === i || null === (r = i.PokiSDK) || void 0 === r || null === (s = r.destroyAd) || void 0 === s || s.call(r, n), n.remove());
                (t || o()).postMessage({
                    type: "hoist_displayAd_destroy",
                    data: e
                }, "*")
            }

            function c(e, t, n) {
                const r = n || o();
                if (!window.PokiSDK) return void d(e, r);
                const s = i();
                if (s) {
                    var a, l, c;
                    const n = s.getBoundingClientRect(),
                        {
                            x: o,
                            y: i,
                            w: u,
                            h: p
                        } = e.location || {
                            x: 0,
                            y: 0,
                            w: 1e5,
                            h: 1e5
                        },
                        h = Math.floor(o + u),
                        y = Math.floor(p + i),
                        m = Math.ceil(n.width),
                        v = Math.ceil(n.height);
                    if (h < 0 || h > m || y < 0 || y > v) return console.error(`That ad doesn't fit (frame: ${m}x${v} // loc ${o} ${i} ${u} ${p} ${h} ${y})`), void d(e, r);
                    let f = document.getElementById(e.containerID);
                    f || (f = document.createElement("div"), f.style.position = t ? "fixed" : "absolute", f.style.zIndex = "9998", f.style.overflow = "hidden", f.id = e.containerID, document.body.appendChild(f)), f.style.width = `${u}px`, f.style.height = `${p}px`, f.style.left = `${n.left+o}px`, f.style.top = `${n.top+i}px`, f.setAttribute("poki-ad-running", !0), f.setAttribute("x", o), f.setAttribute("y", i), null === (a = window) || void 0 === a || null === (l = a.PokiSDK) || void 0 === l || null === (c = l.hoistDisplayAd) || void 0 === c || c.call(l, {
                        container: f,
                        adUnitPath: e.adUnitPath,
                        size: e.size,
                        opportunityId: e.opportunityId,
                        duringGameplay: () => e.duringGameplay,
                        onCanDestroy: () => {
                            r.postMessage({
                                type: "hoist_displayAd_onCanDestroy",
                                data: {
                                    opportunityId: e.opportunityId
                                }
                            }, "*")
                        },
                        onDisplayRendered: t => {
                            r.postMessage({
                                type: "hoist_displayAd_onDisplayRendered",
                                data: {
                                    opportunityId: e.opportunityId,
                                    isEmpty: t
                                }
                            }, "*")
                        },
                        onPreconditionsFailed: () => {
                            f.remove(), d(e, r)
                        }
                    })
                }
            }

            function u(e, t) {
                const n = t || o();
                var i, l, d, c, u, p;
                (function() {
                    if (!window.PokiSDK) return;
                    const e = r();
                    e && (s(), e.style.display = "block")
                }(), "PR" === e.position) ? null === (i = window) || void 0 === i || null === (l = i.PokiSDK) || void 0 === l || null === (d = l.rewardedBreak) || void 0 === d || d.call(l, (() => {
                    n.postMessage({
                        type: "hoist_videoAd_onStart",
                        data: {
                            opportunityId: e.opportunityId
                        }
                    }, "*")
                })).then((t => {
                    a(), (t => {
                        n.postMessage({
                            type: "hoist_videoAd_onFinish",
                            data: {
                                opportunityId: e.opportunityId,
                                rewardAllowed: t
                            }
                        }, "*")
                    })(t)
                })): null === (c = window) || void 0 === c || null === (u = c.PokiSDK) || void 0 === u || null === (p = u.commercialBreak) || void 0 === p || p.call(u, (() => {
                    n.postMessage({
                        type: "hoist_videoAd_onStart",
                        data: {
                            opportunityId: e.opportunityId
                        }
                    }, "*")
                })).then((() => {
                    a(), n.postMessage({
                        type: "hoist_videoAd_onFinish",
                        data: {
                            opportunityId: e.opportunityId
                        }
                    }, "*")
                }))
            }

            function p(e, t, n) {
                var i, r, s;
                null === (i = window) || void 0 === i || null === (r = i.PokiSDK) || void 0 === r || null === (s = r.setGameSpecificSettings) || void 0 === s || s.call(r, e.adTiming, e.specialConditions, n);
                (t || o()).postMessage({
                    type: "hoist_playgroundInit",
                    data: {
                        adBlocked: e.isAdBlocked
                    }
                }, "*")
            }

            function h() {
                document.querySelectorAll("div[poki-ad-running]").forEach((e => {
                    d({
                        containerID: e.id
                    })
                }))
            }

            function y() {
                window.addEventListener("resize", (() => {
                    ! function() {
                        if (!window.PokiSDK) return;
                        const e = r(),
                            t = i();
                        if (e && t) {
                            const n = t.getBoundingClientRect();
                            e.style.left = `${n.left}px`, e.style.top = `${n.top+(window.scrollY||0)}px`
                        }
                    }(),
                    function() {
                        if (!window.PokiSDK) return;
                        const e = i();
                        if (e) {
                            const t = e.getBoundingClientRect();
                            document.querySelectorAll("div[poki-ad-running]").forEach((e => {
                                e.style.left = `${t.left+parseInt(e.getAttribute("x"),10)}px`, e.style.top = `${t.top+parseInt(e.getAttribute("y"),10)}px`
                            }))
                        }
                    }()
                }))
            }
            n.d(t, {
                $8: () => y,
                AF: () => l,
                QL: () => v,
                X2: () => p,
                aH: () => h,
                eX: () => d,
                ml: () => f,
                rR: () => c,
                u9: () => u
            });
            const m = "undefined" != typeof ResizeObserver ? new ResizeObserver((() => {
                s(), h()
            })) : null;

            function v() {
                const e = i();
                e && m && m.observe(e)
            }

            function f() {
                const e = i();
                e && m && m.unobserve(e)
            }
        },
        3142: (e, t, n) => {
            function o(e) {
                return ["GB", "NL"].includes(e)
            }
            n.d(t, {
                Z: () => o
            })
        },
        7253: (e, t, n) => {
            n.d(t, {
                N7: () => l,
                S1: () => s,
                p_: () => a
            });
            var o = n(841);
            const i = new Map,
                r = "undefined" != typeof IntersectionObserver;

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r && (window.observers = window.observers || {}, window.observers[e] = new IntersectionObserver((t => {
                    t.filter((e => e.isIntersecting)).forEach((t => {
                        let {
                            boundingClientRect: n,
                            target: o
                        } = t;
                        const r = i.get(o);
                        i.delete(o), window.observers[e].unobserve(o), r && r(n)
                    }))
                }), t))
            }

            function a(e, t) {
                r && window.observers[e] && (i.delete(t), window.observers[e].unobserve(t))
            }

            function l(e, t, n) {
                if (r && window.observers[e] && t)
                    if (r) a(t), i.set(t, n), window.observers[e].observe(t);
                    else {
                        const {
                            cellSize: e
                        } = o.cssVars;
                        n({
                            width: e
                        })
                    }
            }
        },
        132: (e, t, n) => {
            n.d(t, {
                v: () => o
            });
            const o = e => new Promise(((t, n) => {
                const o = document.createElement("script");
                o.type = "text/javascript", o.src = e, o.onload = t, o.onerror = n, document.head.appendChild(o)
            }))
        },
        9263: (e, t, n) => {
            function o(e) {
                if (!e) throw new Error("waitForDOMNode requires a selector");
                const t = document.querySelector(e);
                return new Promise((n => {
                    t && n(t);
                    const o = new MutationObserver((() => {
                        document.querySelector(e) && (n(document.querySelector(e)), o.disconnect())
                    }));
                    o.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }))
            }
            n.d(t, {
                Z: () => o
            })
        },
        3171: (e, t, n) => {
            function o(e) {
                "undefined" != typeof window && window.pbjs.que.push((() => {
                    var t, n, o;
                    const i = {
                        ortb2: { ...window.pbjs.getConfig("ortb2"),
                            ...e
                        }
                    };
                    window.pbjs.setConfig(i), null === (t = window) || void 0 === t || null === (n = t.PokiSDK) || void 0 === n || null === (o = n.configureA9) || void 0 === o || o.call(n, i)
                }))
            }
            n.d(t, {
                J: () => o
            })
        }
    }
]);