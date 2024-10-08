"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8859], {
        1346: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => R
            });
            var i = s(8661),
                l = s(6727),
                r = s(5441),
                n = s(512),
                o = s(241),
                a = s(2479),
                u = s(4833),
                c = s(2768),
                m = s(5482),
                d = s(394),
                h = s(4481),
                p = s(4278),
                y = s(2338);
            const v = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-Shimmer",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(9450), s.e(1291)]).then(s.bind(s, 3276)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 3276
                    }
                }),
                M = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-TileLabel",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(1828), s.e(170), s.e(9406)]).then(s.bind(s, 5060)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 5060
                    }
                }),
                b = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-TileVideo",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.resolve().then(s.bind(s, 5181)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 5181
                    }
                }),
                f = {
                    LARGE: 2,
                    MEDIUM: 1,
                    SMALL: 0
                };

            function g(e) {
                let {
                    useAltImg: t = !1,
                    forceTakeover: s = !1,
                    data: i,
                    lazy: l,
                    isMobile: r,
                    list: n,
                    idx: a,
                    componentKey: u,
                    takeover: c,
                    isMapped: m
                } = e;
                const {
                    image: d,
                    imageAlt: h
                } = i, p = !m && l;
                return (0, o.I7)({
                    list: n,
                    idx: a,
                    image: t ? h : d,
                    alt: i.title,
                    lazy: p,
                    componentKey: u,
                    isMobile: r,
                    takeover: s || c
                })
            }
            const A = {
                    width: 628,
                    quality: 6,
                    blur: 12
                },
                E = {
                    width: 408,
                    quality: 10,
                    blur: 5
                };

            function S(e, t) {
                const {
                    width: s,
                    quality: i,
                    blur: l
                } = t ? E : A;
                return (0, h.u2)({
                    width: s,
                    image: {
                        path: e
                    },
                    quality: i,
                    blur: l
                })
            }

            function _(e) {
                return e > 300 ? o.eY[3] : e < 300 && e > 200 ? o.eY[2] : o.eY[1]
            }

            function L(e, t) {
                return e >= o.eY[2] && e < o.eY[3] && "game" === t ? f.MEDIUM : e >= o.eY[3] && "game" === t ? f.LARGE : f.SMALL
            }

            function R(e) {
                let {
                    className: t,
                    type: s = "game",
                    data: l = {
                        id: 0,
                        image: {
                            path: ""
                        },
                        isNew: !1,
                        slug: "",
                        title: "",
                        url: "",
                        isGoodSearchResults: !1
                    },
                    alwaysShowTitle: h,
                    list: A,
                    idx: E,
                    componentKey: R,
                    label: k,
                    lazy: T = !0,
                    isMobile: w = !1,
                    onClick: N,
                    panelSection: q,
                    trackingIndex: x
                } = e;
                const D = (0, i.useRef)(null),
                    I = (0, i.useRef)(null),
                    [C, G] = (0, i.useState)(!1),
                    K = (0, r.v9)(c.B),
                    P = (0, r.v9)(m.jL),
                    {
                        size: Y,
                        isMapped: z
                    } = (0, o.GR)({
                        list: A,
                        idx: E,
                        componentKey: R,
                        isMobile: w
                    }),
                    U = o.eY[Y],
                    O = (0, i.useRef)(U),
                    [Z, B] = (0, i.useState)(L(U, s)),
                    j = (null == l ? void 0 : l.imageAlt) && P >= .5,
                    H = (0, i.useMemo)((() => g({
                        useAltImg: j,
                        forceTakeover: !1,
                        data: l,
                        lazy: T,
                        isMobile: w,
                        list: A,
                        idx: E,
                        componentKey: R,
                        takeover: K,
                        isMapped: z
                    })), [j, K]),
                    W = (0, i.useCallback)((e => {
                        let {
                            width: t
                        } = e;
                        const i = _(t);
                        i !== O.current && (O.current = i, B(L(i, s)))
                    }), [s]),
                    V = (0, i.useMemo)((() => !w && ("home" === R || "category" === R) && Z >= f.MEDIUM && (null == l ? void 0 : l.animatedThumbnail)), [w, R, Z, l]),
                    X = (0, i.useMemo)((() => {
                        if (!V) return null;
                        const e = null == l ? void 0 : l.animatedThumbnail,
                            t = Z === f.LARGE ? "3x3" : "2x2";
                        return i.default.createElement(b, {
                            ref: I,
                            videoUrl: e,
                            videoSize: t
                        })
                    }), [V, Z, l]);
                (0, i.useEffect)((() => (z && null != D && D.current && (0, a.Xp)(D.current, W), () => {
                    z && null != D && D.current && (0, a.UR)(D.current)
                })), [z, W]);
                const $ = (0, i.useMemo)((() => S(l.image.path, w)), [l.image.path, w]),
                    F = (0, i.useMemo)((() => (0, p.i)({
                        label: k,
                        isNew: l.isNew
                    })), [k, l.isNew]),
                    J = (0, i.useMemo)((() => 29160 === l.id && Z === f.LARGE), [l.id, Z]),
                    Q = (0, i.useMemo)((() => J), [J]),
                    ee = (0, i.useCallback)((() => {
                        G(!0)
                    }), []),
                    te = (0, i.useCallback)((() => {
                        G(!1)
                    }), []),
                    se = (0, i.useCallback)((e => {
                        e.preventDefault(), N && N();
                        const {
                            pageY: t
                        } = e, i = x || E;
                        (0, u.y)({
                            id: l.id,
                            image: j ? "b" : "a",
                            path: l.url,
                            width: O,
                            panelSection: q,
                            index: i,
                            type: s,
                            list: A,
                            y: t
                        }), (0, d.Z)().push(l.url)
                    }), [N, l.id, j, l.url, O, q, E, x, s, A]),
                    ie = (0, i.useMemo)((() => (0, n.W)(y.summaryTile, "game" === s && y.summaryTile_fixedAspectRatio, l.isGoodSearchResults && y.summaryTile_goodSearchResult, h && y.summaryTile_showTitle, z && y.summaryTile_container, t)), [s, l.isGoodSearchResults, h, z, t]),
                    le = (0, i.useMemo)((() => T || "game" !== s ? {} : {
                        backgroundImage: `url(${$})`
                    }), [T, s, $]);
                return i.default.createElement("a", {
                    className: ie,
                    ref: D,
                    href: l.url,
                    onClick: se,
                    onMouseEnter: V ? ee : void 0,
                    onMouseLeave: V ? te : void 0,
                    style: le
                }, !Q && H, i.default.createElement("span", {
                    className: (0, n.W)(y.summaryTile__title, "global-cq-title")
                }, l.title), J && H && i.default.createElement(v, {
                    sourcePicture: H,
                    destinationPicture: (0, o.I7)({
                        list: A,
                        idx: E,
                        image: { ...l.image,
                            path: "7a35d4a468a820f1dc72b9ad22e9aeec.jpg"
                        },
                        alt: l.title,
                        lazy: !1,
                        componentKey: R,
                        isMobile: w
                    })
                }), V && C && X, F && i.default.createElement(M, {
                    label: F
                }))
            }
        }
    }
]);