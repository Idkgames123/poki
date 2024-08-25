"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7529], {
        7529: (e, t, r) => {
            r.r(t), r.d(t, {
                adRefreshExecution: () => $,
                adRefreshLogic: () => C,
                disableMobileAdsOpportunityEpic: () => x,
                hideAdsStatusEpic: () => W,
                receiveSDKEvent: () => M,
                setAdTimingsEpic: () => N,
                setMobileAdsOpportunityEpic: () => Z,
                startImmersiveTakeoverEpic: () => S,
                stopAdRefreshingForCustomCampaigns: () => H,
                stopImmersiveTakeoverEpic: () => F
            });
            var n = r(5069),
                p = r(4975),
                i = r(7877),
                u = r(2817),
                l = r(2006),
                o = r(9127),
                a = r(3505),
                s = r(6697),
                c = r(4978),
                d = r(3071),
                v = r(1036),
                h = r(533),
                y = r(2423),
                g = r(4727),
                f = r(7753),
                T = r(1545),
                _ = r(6087),
                m = r(9927),
                U = r(1405),
                w = r(1580),
                D = r(6010),
                E = r(3182),
                O = r(3067),
                A = r(4211),
                K = r(9563),
                B = r(5482),
                b = r(365),
                I = r(8384);
            const R = 6e4,
                V = 3e4,
                k = 5e3;
            let L = Date.now();

            function $(e, t) {
                return e.pipe((0, n.l)(_._g.type), (0, p.h)((() => !(0, A.Eo)(t.value))), (0, i.z)((e => {
                    let {
                        refreshType: r
                    } = e;
                    const n = (0, D.O)(t.value).map((e => {
                        let {
                            code: t
                        } = e;
                        return (0, _.SB)({
                            code: t,
                            refreshType: r
                        })
                    }));
                    return (0, u.of)(...n)
                })))
            }

            function C(e, t) {
                const r = e.pipe((0, n.l)("@@router/LOCATION_CHANGE", _.WY.type, _.tP.type)),
                    i = e.pipe((0, n.l)(m.K1.type), (0, p.h)((e => {
                        let {
                            toggle: t
                        } = e;
                        return !t
                    }))).pipe((0, l.b)((() => {
                        L = Date.now()
                    })), (0, o.U)((() => (0, _._g)({
                        trigger: "interaction",
                        refreshType: "direct"
                    }))), (0, a.R)(r)),
                    u = [K.$4, K.Fd, K.rV],
                    h = e.pipe((0, n.l)(m.OB.type), (0, p.h)((e => {
                        let {
                            event: t
                        } = e;
                        return u.includes(t)
                    })), (0, p.h)((() => Date.now() - L >= V)), (0, l.b)((() => {
                        L = Date.now()
                    })), (0, o.U)((() => (0, _._g)({
                        trigger: "smart",
                        refreshType: "smart"
                    }))), (0, a.R)(r)),
                    y = (0, s.F)(R).pipe((0, o.U)((() => (0, _._g)({
                        trigger: "dumb",
                        refreshType: "dumb"
                    }))), (0, a.R)(r));
                return e.pipe((0, n.l)(I.JV.type, U.o.type, _.V6.type), (0, p.h)((() => ["game"].includes((0, E.Wj)(t.value)))), (0, p.h)((() => !(0, B.eD)(t.value))), (0, l.b)((() => {
                    L = Date.now()
                })), (0, c.w)((() => (0, d.T)((0, v.s)((() => {
                    var e;
                    return null === (e = (0, E.J1)(t.value)) || void 0 === e ? void 0 : e.allow_smart_refresh
                }), h, y), i))))
            }

            function M(e) {
                return e.pipe((0, n.l)(m.aw.type), (0, l.b)((e => {
                    (0, O.A)({
                        category: "sdk",
                        action: "details",
                        data: e
                    })
                })), (0, h.l)())
            }

            function S(e, t) {
                return e.pipe((0, n.l)(m.OB.type), (0, p.h)((e => {
                    let {
                        event: t
                    } = e;
                    return t === K.T4
                })), (0, o.U)((e => {
                    let {
                        data: r
                    } = e;
                    const n = (0, E.Br)(t.value) || {},
                        p = [...(null == r ? void 0 : r.IMAWrapperIDs) || [], (null == r ? void 0 : r.creativeId) || 0];
                    for (let e = 0; e < p.length; e++)
                        if (n[p[e]]) return {
                            takeover: {
                                creativeId: p[e],
                                config: n[p[e]]
                            }
                        };
                    return {
                        takeover: !1
                    }
                })), (0, p.h)((e => {
                    let {
                        takeover: t
                    } = e;
                    return !!t
                })), (0, o.U)((e => (0, _.WY)(e))))
            }

            function F(e, t) {
                const r = e.pipe((0, n.l)(_._g.type)),
                    i = e.pipe((0, n.l)(U.o.type)),
                    u = e.pipe((0, n.l)(m.OB.type), (0, p.h)((e => {
                        let {
                            event: t
                        } = e;
                        return t === K.$K
                    }))),
                    l = u.pipe((0, y.g)(k), (0, g.q)(1), (0, c.w)((() => r)), (0, a.R)(i)),
                    s = (0, w.sY)(t.value);
                return (0, d.T)(i.pipe((0, p.h)((() => !!(0, w.xU)(t.value))), (0, o.U)((() => (0, _.V6)()))), i.pipe((0, p.h)((() => s && s.immersiveTakeover)), (0, o.U)((() => (0, _.ST)()))), u.pipe((0, c.w)((() => r.pipe((0, f.T)(1), (0, o.U)((() => (0, _.V6)())))))), l.pipe((0, o.U)((() => (0, _.ST)()))))
            }

            function N(e) {
                return e.pipe((0, n.l)(m.OB.type), (0, p.h)((e => {
                    let {
                        event: t
                    } = e;
                    return [K.cV, K.Zg, K.T4, K.$K, K.Fd, K.rV].includes(t)
                })), (0, o.U)((e => {
                    const {
                        data: t,
                        event: r
                    } = e;
                    switch (r) {
                        case K.Zg:
                        case K.$K:
                        case K.T4:
                            return (0, m.Iy)({
                                event: r
                            });
                        case K.cV:
                            return (0, m.BZ)({
                                duration: t.duration,
                                currentTime: t.currentTime
                            });
                        case K.Fd:
                        case K.rV:
                            return (0, m.rg)()
                    }
                })))
            }

            function W(e) {
                return e.pipe((0, n.l)(m.OB.type, U.o.type), (0, p.h)((e => {
                    let {
                        event: t,
                        type: r
                    } = e;
                    return [K.$K, K.Uo, K.jZ].includes(t) || r === U.o.type
                })), (0, l.b)((() => {
                    (0, b.u)()
                })), (0, o.U)((() => (0, m.oK)())))
            }

            function Z(e, t) {
                return (0, B.eD)(t.value) ? e.pipe((0, n.l)(m.OB.type), (0, p.h)((e => {
                    let {
                        event: t
                    } = e;
                    return [K.MI, K.$4, K.T4, K.$K].includes(t)
                })), (0, o.U)((e => {
                    let {
                        event: t
                    } = e;
                    return (0, _.M)({
                        allowed: [K.MI, K.$K].includes(t)
                    })
                }))) : T.E
            }

            function x(e, t) {
                return (0, B.eD)(t.value) ? e.pipe((0, n.l)(U.o.type, m.K1.type), (0, p.h)((e => e.type === m.K1.type && !0 === e.toggle)), (0, o.U)((() => (0, _.M)({
                    allowed: !1
                })))) : T.E
            }

            function H(e) {
                return e.pipe((0, n.l)(m.OB.type), (0, p.h)((e => {
                    let {
                        event: t
                    } = e;
                    return [K.kR].includes(t)
                })), (0, p.h)((e => {
                    let {
                        data: t
                    } = e;
                    return ["stopRefreshingForThisPage"].includes(t.dfpCreativeId)
                })), (0, l.b)((() => {
                    console.warn("force stopping refreshing, will activate next pageview")
                })), (0, o.U)((() => (0, _.tP)())))
            }
        }
    }
]);