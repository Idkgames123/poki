"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2182], {
        6128: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var i = n(4890),
                o = n(6087),
                a = n(9927);
            const r = {
                takeover: null,
                pokiSDKLoaded: !1,
                adStackLoaded: !1,
                adStackReadyForLoad: !1,
                adBlocked: !1,
                mobileAdsOpportunity: !1
            };

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === o.xZ.type ? { ...e,
                    pokiSDKLoaded: !0
                } : t.type === o.qs.type ? { ...e,
                    adStackLoaded: !0
                } : t.type === a.Gq.type ? { ...e,
                    adStackReadyForLoad: !0
                } : t.type === o.Ux.type ? { ...e,
                    adBlocked: !0
                } : t.type === o.WY.type ? { ...e,
                    takeover: t.takeover
                } : t.type === o.V6.type ? { ...e,
                    takeover: null
                } : t.type === o.M.type ? { ...e,
                    mobileAdsOpportunity: t.allowed
                } : e
            }
            var l = n(8413);
            const c = {
                base: n(3520).baseBackgrounds.default,
                apiOverride: null,
                multiverse: null,
                immersiveTakeover: null
            };

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === l.Z.type ? { ...c
                } : t.type === l.A.type ? { ...e,
                    [t.layer]: t.background
                } : e
            }
            var u = n(1405),
                p = n(8384);
            const g = {
                bot: !1,
                cache: 0,
                device: "desktop",
                isIpadOS: !1,
                isIos: !1,
                visibility: !0,
                history: [],
                geo: "NL",
                ccpaApplies: !1,
                host: "poki.com",
                viewportOrientation: "portrait",
                loadingPage: !1,
                recentGames: [],
                hydrated: !1,
                asyncEpicFired: !1,
                consentStatus: void 0,
                usPrivacyString: "1---",
                consistentRandomSeed: Math.random(),
                externalGames: {},
                privacyPopupRevision: "0",
                isAdsBlockedVisible: !1,
                userSatisfactionShowed: !1
            };

            function y() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                if (t.type === p.Qi.type) return { ...e,
                    hydrated: !0
                };
                if (t.type === p.JV.type) return { ...e,
                    asyncEpicFired: !0
                };
                if (t.type === p.hG.type) return { ...e,
                    device: t.device
                };
                if (t.type === p.XX.type) return { ...e,
                    geo: t.geo
                };
                if (t.type === p.mz.type) return { ...e,
                    host: t.host
                };
                if (t.type === u.o.type) return { ...e,
                    history: [t.path, ...e.history]
                };
                if (t.type === p.It.type) return { ...e,
                    viewportOrientation: t.orientation
                };
                if (t.type === p.FR.type) {
                    const {
                        recentGames: n,
                        siteID: i
                    } = t;
                    return { ...e,
                        recentGames: { ...e.recentGames,
                            [i]: n
                        }
                    }
                }
                return t.type === p.dY.type ? { ...e,
                    consentStatus: t.consentStatus
                } : t.type === p.X1.type ? { ...e,
                    usPrivacyString: t.usPrivacyString
                } : t.type === p.AR.type ? { ...e,
                    consistentRandomSeed: t.rand
                } : t.type === p.jY.type ? { ...e,
                    externalGames: { ...e.externalGames,
                        [t.gameId]: !0
                    }
                } : t.type === p.su.type ? { ...e,
                    privacyPopupRevision: t.revision
                } : t.type === p.Bl.type ? { ...e,
                    isAdsBlockedVisible: t.isVisible
                } : t.type === p.GH.type ? { ...e,
                    userSatisfactionShowed: !0
                } : e
            }
            var v = n(2296);

            function m() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === v.R.type ? { ...e,
                    ...t.conversions
                } : e
            }
            var f = n(868);
            const h = {
                config: {}
            };

            function b() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === f.W.type ? { ...e,
                    config: t.config
                } : e
            }
            const k = {
                    isFullscreen: !1,
                    wasFullscreen: !1,
                    showAdStatus: !1,
                    adStatusEvent: "",
                    adDuration: 0,
                    adCurrentTime: 0,
                    loadingFinished: !1
                },
                P = {
                    activeWorld: null
                };

            function _() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === a.Bn.type ? { ...e,
                    [t.gameId]: { ...P,
                        ...e[t.gameId],
                        activeWorld: t.world
                    }
                } : t.type === a.K1.type ? { ...e,
                    isFullscreen: t.toggle,
                    wasFullscreen: e.wasFullscreen || t.toggle
                } : t.type === u.o.type ? { ...e,
                    wasFullscreen: !1,
                    loadingFinished: !1
                } : t.type === a.sn.type ? { ...e,
                    loadingFinished: !0
                } : t.type === a.P8.type ? { ...e,
                    [t.gameId]: { ...P,
                        ...e[t.gameId],
                        pubHostData: t.data
                    }
                } : t.type === a.rg.type ? { ...e,
                    showAdStatus: !0
                } : t.type === a.oK.type ? { ...e,
                    showAdStatus: !1
                } : t.type === a.Iy.type ? { ...e,
                    adStatusEvent: t.event
                } : t.type === a.BZ.type ? { ...e,
                    adDuration: t.duration,
                    adCurrentTime: t.currentTime
                } : e
            }
            const w = {
                    currentPagePath: null,
                    previousPagePath: null,
                    pages: {}
                },
                S = {
                    pokifordevs_team_id: void 0,
                    developer: void 0
                };

            function E() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                const n = e.pages && e.pages[t.path] || S;
                return t.type === u.o.type ? { ...e,
                    pages: { ...e.pages,
                        [t.path]: { ...n,
                            pokifordevs_team_id: t.pokifordevs_team_id,
                            developer: t.developer
                        }
                    },
                    currentPagePath: t.path,
                    previousPagePath: e.currentPagePath
                } : e
            }
            var C = n(6460);
            const L = {
                voteEpicInitilized: !1,
                userVotes: {},
                previousUserVotes: {},
                feedbackGiven: {},
                ratingsData: {}
            };

            function R() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === C.m3.type ? { ...e,
                    voteEpicInitilized: !0
                } : t.type === C.Ns.type ? { ...e,
                    userVotes: { ...e.userVotes,
                        [t.gameId]: t.direction
                    },
                    previousUserVotes: { ...e.previousUserVotes,
                        [t.gameId]: e.userVotes[t.gameId]
                    },
                    feedbackGiven: { ...e.feedbackGiven,
                        [t.gameId]: !1
                    }
                } : t.type === C.CE.type ? { ...e,
                    feedbackGiven: { ...e.feedbackGiven,
                        [t.gameId]: !0
                    }
                } : t.type === C.yF.type ? { ...e,
                    ratingsData: { ...t.ratingsData
                    }
                } : e
            }
            var O = n(8209);
            const A = {
                reportEpicInitilized: !1,
                isReporting: !1,
                reportData: null
            };

            function x() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === O.Gj.type ? { ...e,
                    reportEpicInitilized: !0
                } : t.type === O.pH.type ? { ...e,
                    isReporting: !0
                } : t.type === O.I0.type ? { ...e,
                    isReporting: !1
                } : t.type === O.IM.type ? { ...e,
                    reportData: t.message
                } : e
            }
            var D = n(8971),
                G = n(1563),
                H = n(3605),
                I = n(3904);
            const F = {
                privacyCenterViewed: !1,
                personalizedAds: !0,
                pokiAnalytics: !0,
                bingRemarketingEnabled: !0,
                googleRemarketingEnabled: !0,
                enableCMP: !0,
                sendDeviceCapabilities: !0,
                isFamilyMode: !1,
                familyModeCookieConsent: !1
            };

            function J() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === I.RE.type ? { ...e,
                    privacyCenterViewed: t.toggle
                } : t.type === I.JO.type ? { ...e,
                    personalizedAds: t.toggle
                } : t.type === I.Mt.type ? { ...e,
                    pokiAnalytics: t.toggle
                } : t.type === I.$K.type ? { ...e,
                    bingRemarketingEnabled: t.toggle
                } : t.type === I.zc.type ? { ...e,
                    googleRemarketingEnabled: t.toggle
                } : t.type === I.ou.type ? { ...e,
                    enableCMP: t.toggle
                } : t.type === I.ju.type ? { ...e,
                    sendDeviceCapabilities: t.toggle
                } : t.type === I.lX.type ? { ...e,
                    isFamilyMode: t.toggle
                } : t.type === I.Z9.type ? { ...e,
                    familyModeCookieConsent: t.consent
                } : e
            }
            var Z = n(7620);
            const B = {
                mysteryGame: {
                    game: null,
                    triggered: !1
                }
            };

            function W() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Z.L.type ? { ...e,
                    mysteryGame: {
                        game: t.game,
                        triggered: !1
                    }
                } : t.type === Z.b.type ? { ...e,
                    mysteryGame: {
                        game: null,
                        triggered: !0
                    }
                } : e
            }
            const V = e => {
                let {
                    basename: t,
                    defaultLocation: n = {}
                } = e;
                const i = {
                    location: n,
                    action: null,
                    basename: t
                };
                return function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                        {
                            type: t,
                            payload: n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("@@router/LOCATION_CHANGE" === t) {
                        const {
                            location: t,
                            action: i
                        } = n || {};
                        return { ...e,
                            location: t,
                            action: i
                        }
                    }
                    return e
                }
            };
            var j = n(9459);
            const N = e => (0, i.UY)({
                router: V({
                    defaultLocation: e.location
                }),
                ads: s,
                background: d,
                client: y,
                currency: m,
                experiment: b,
                game: _,
                pages: E,
                ratings: R,
                bugReport: x,
                search: D.ZP.reducer,
                notifications: G.ZP.reducer,
                site: H.Z,
                privacy: J,
                mystery: W,
                [j.gk.reducerPath]: j.gk.reducer
            })
        },
        3605: (e, t, n) => {
            n.d(t, {
                Z: () => r,
                n: () => o
            });
            var i = n(7691);
            const o = {
                    WEB: "web",
                    APP: "app"
                },
                a = {
                    mode: o.WEB
                };

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === i.nH.type ? { ...e,
                    site: t.site
                } : t.type === i.YB.type ? { ...e,
                    sites: t.sites
                } : t.type === i.fH.type ? { ...e,
                    localisations: t.localisations
                } : t.type === i.r0.type ? { ...e,
                    mode: t.mode
                } : e
            }
        },
        1580: (e, t, n) => {
            n.d(t, {
                HO: () => f,
                Jv: () => w,
                N9: () => h,
                XZ: () => m,
                eS: () => _,
                fD: () => k,
                sY: () => y,
                xU: () => v,
                y0: () => P
            });
            var i = n(2222),
                o = n(5482),
                a = n(3182),
                r = n(6241),
                s = n(5855),
                l = n(9853),
                c = n(8939),
                d = n(841),
                u = n(9312);
            let p;
            try {
                var g;
                null !== (g = navigator) && void 0 !== g && g.cookieDeprecationLabel && navigator.cookieDeprecationLabel.getValue().then((e => {
                    p = e
                }))
            } catch (e) {}
            const y = (0, i.P1)(l.Vu, r.lH, a.J1, c.d, o.eD, ((e, t, n, i, o) => {
                const a = {
                    tag: "pg-v3c3082190ca887d80fa7bc255d208581d5b0298d",
                    ab: Math.round(100 * Math.random()).toString(),
                    experiment: i,
                    page_has_mpu: "no",
                    page_has_skyscraper: "no",
                    page_has_lead: "no",
                    cookieDepL: p,
                    site_id: t.id
                };
                if (n && (a["game-id"] = n.id, a.categories = (n.categories || []).map((e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })), i && (a.expid_content_gameid = `${i}|${n.id}`)), e && (a.debug = e), !o) {
                    let e = 3;
                    const t = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                        n = Object.keys(d.f0);
                    for (let i = 0; i < n.length; i++) {
                        const o = d.f0[n[i]] || 0,
                            a = d.f0[n[i + 1]] || 1 / 0;
                        if (t >= o && t <= a) {
                            e = n[i];
                            break
                        }
                    }
                    a.page_has_lead = "yes", e >= 12 && (a.page_has_mpu = "yes"), ["9", "11", "17"].includes(e) && (a.page_has_skyscraper = "yes")
                }
                return a
            }));

            function v(e) {
                return e.ads.takeover
            }

            function m(e) {
                return e.ads.pokiSDKLoaded
            }

            function f(e) {
                return e.ads.adStackLoaded
            }
            const h = e => e.ads.adBlocked,
                b = (0, i.P1)(o.eD, (e => e.ads.adStackReadyForLoad), ((e, t) => !e || t));

            function k(e) {
                return e.ads.mobileAdsOpportunity
            }
            const P = (0, i.P1)(m, o.Zv, b, s.XN, ((e, t, n, i) => i ? e && t && n : e && n)),
                _ = (0, i.P1)(a.J1, (e => {
                    const t = [];
                    return null != e && e.categories && e.categories.forEach((e => {
                        e.iabCategories && e.iabCategories.split(",").forEach((e => {
                            t.includes(e) || t.push(e)
                        }))
                    })), t.sort(), t
                }));
            const w = (0, i.P1)(a.$g, _, (function(e) {
                const t = (0, a.J1)(e);
                return t && t.keywords ? t.keywords : ""
            }), o.eD, a.J1, r.lH, ((e, t, n, i, o, a) => {
                const r = (0, u.Z)(),
                    s = 3 === a.id ? "Poki" : a.domain_title;
                return {
                    site: {
                        name: s,
                        domain: window.location.hostname,
                        ...e ? {
                            ref: `https://${window.location.host}${e}`
                        } : {},
                        page: window.location.href,
                        cat: t,
                        cattax: 1,
                        sectioncat: t,
                        pagecat: t,
                        keywords: n,
                        mobile: i ? 1 : 0,
                        privacypolicy: 1,
                        publisher: {
                            name: s,
                            domain: a.domain,
                            cat: ["IAB9-30"],
                            cattax: 1
                        },
                        content: o ? {
                            id: `${o.id}`,
                            title: o.title,
                            artist: o.developer,
                            url: window.location.href,
                            cat: t,
                            cattax: 1,
                            context: 2,
                            keywords: n,
                            sourcerelationship: 1
                        } : {}
                    },
                    device: {
                        w: r.width,
                        h: r.height
                    }
                }
            }))
        },
        2768: (e, t, n) => {
            n.d(t, {
                B: () => r,
                X: () => a
            });
            var i = n(2222);
            const o = ["immersiveTakeover", "custom", "apiOverride", "base"],
                a = (0, i.P1)((e => e.background), (e => {
                    let t = e.base;
                    return Object.values(o).some((n => !!e[n] && (t = e[n], !0))), t
                }));

            function r(e) {
                return null !== e.background.immersiveTakeover
            }
        },
        5482: (e, t, n) => {
            n.d(t, {
                $9: () => s,
                At: () => m,
                Hl: () => w,
                KT: () => g,
                OK: () => k,
                QJ: () => f,
                QP: () => P,
                Si: () => c,
                Zn: () => r,
                Zv: () => _,
                eD: () => d,
                jL: () => v,
                jw: () => y,
                nE: () => p,
                oW: () => S,
                rQ: () => b,
                tl: () => u,
                yu: () => h,
                z7: () => l
            });
            var i = n(2222),
                o = n(5384),
                a = n(6241);

            function r(e) {
                return e.client.geo
            }

            function s(e) {
                return e.client.viewportOrientation
            }

            function l(e) {
                var t;
                const n = null == e || null === (t = e.client) || void 0 === t ? void 0 : t.history;
                return !n || n.length <= 1
            }
            const c = e => e.client.device;

            function d(e) {
                const {
                    device: t
                } = e.client;
                return "tablet" === t || "mobile" === t
            }
            const u = e => e.client.ccpaApplies,
                p = (0, i.P1)((e => e.client.geo), (e => o.vO.includes(e))),
                g = e => e.client.loadingPage && e.client.hydrated,
                y = (0, i.P1)(a.lH, (e => e.client.recentGames), ((e, t) => e && t && t[e.id] ? t[e.id] : [])),
                v = e => e.client.consistentRandomSeed,
                m = e => e.client.isIpadOS,
                f = e => e.client.isIos,
                h = e => e.client.usPrivacyString;

            function b(e, t) {
                const {
                    externalGames: n
                } = e.client;
                return n[t] || !1
            }
            const k = e => e.client.privacyPopupRevision,
                P = e => e.client.isAdsBlockedVisible,
                _ = (0, i.P1)((e => e.client.consentStatus), u, p, ((e, t, n) => t || !n || e === o.El)),
                w = e => e.client.userSatisfactionShowed,
                S = e => e.client.asyncEpicFired
        },
        2831: (e, t, n) => {
            n.d(t, {
                p: () => p
            });
            var i = n(2222),
                o = n(5482),
                a = n(3182),
                r = n(6241);
            const s = {};
            var l = n(3642),
                c = n(8939),
                d = n(5855),
                u = n(9853);
            const p = (0, i.P1)(o.Zn, l.W, (function() {
                return "undefined" == typeof window ? s : JSON.parse(JSON.stringify(window.user || {}))
            }), r.lH, c.d, a.Wj, a.J1, a.uY, u.dY, d.Rd, ((e, t, n, i, o, a, r, s, l, c) => {
                let d = {};
                "game" === a && (d = {
                    id: r.id,
                    type: "game",
                    path: l,
                    content: {
                        game: {
                            id: r.id
                        }
                    }
                }), "category" === a && (d = {
                    id: s.id,
                    type: "category",
                    path: l
                }), "home" === a && (d = {
                    type: "home",
                    id: 0,
                    path: l
                });
                return {
                    geo: e,
                    session: t,
                    user: n,
                    site: i,
                    experiment: o,
                    page: d,
                    tag: "pg-3c3082190ca887d80fa7bc255d208581d5b0298d",
                    isPokiAnalyticsEnabled: c
                }
            }))
        },
        8939: (e, t, n) => {
            function i(e) {
                var t, n, i;
                return null === (t = e.experiment) || void 0 === t || null === (n = t.config) || void 0 === n || null === (i = n.playground) || void 0 === i ? void 0 : i.sdk_version
            }

            function o(e) {
                var t, n;
                return null === (t = e.experiment) || void 0 === t || null === (n = t.config) || void 0 === n ? void 0 : n.id
            }
            n.d(t, {
                R: () => i,
                d: () => o
            })
        },
        4211: (e, t, n) => {
            n.d(t, {
                Bs: () => d,
                Eo: () => h,
                FK: () => b,
                Nl: () => m,
                R6: () => p,
                VF: () => _,
                WW: () => y,
                ad: () => w,
                dW: () => g,
                hS: () => k,
                lC: () => P,
                n8: () => f,
                tL: () => S
            });
            var i = n(2222),
                o = n(3182),
                a = n(9853),
                r = n(5482),
                s = n(6070),
                l = n(3672);
            const c = (0, i.P1)(o.J1, (e => e.game), ((e, t) => t[e && e.id] || {}));

            function d(e) {
                const t = c(e);
                return null == t ? void 0 : t.activeWorld
            }
            const u = (0, i.P1)(o.J1, (e => (0, l.wy)(null == e ? void 0 : e.id)));

            function p(e) {
                const t = c(e);
                return (null == t ? void 0 : t.pubHostData) || null
            }

            function g(e) {
                const t = (0, o.J1)(e);
                return !(null == t || !t.fullscreen)
            }
            const y = (0, i.P1)(a.CG, u, ((e, t) => {
                    const n = {};
                    if (t) {
                        const i = new URLSearchParams(e).get(t.worldKey);
                        n[t.worldKey] = i || t.defaultWorld
                    }
                    return n
                })),
                v = ["googleplay", "apple", "steam"],
                m = (0, i.P1)(o.J1, (e => !!(e && e.store_urls && v.some((t => void 0 !== e.store_urls[t]))))),
                f = (0, i.P1)(o.J1, r.At, o.Wj, s.z8, ((e, t, n, i) => {
                    var o;
                    return "game" === n ? "flash" === (null == e || null === (o = e.file) || void 0 === o ? void 0 : o.render_type) || (null == e ? void 0 : e.alternative_game_enabled) || t && !(null != e && e.mobile_available) : "mystery" === n && !i
                })),
                h = e => e.game.isFullscreen,
                b = e => e.game.wasFullscreen,
                k = e => e.game.showAdStatus,
                P = e => e.game.adStatusEvent,
                _ = e => e.game.adDuration,
                w = e => e.game.adCurrentTime,
                S = e => e.game.loadingFinished
        },
        6010: (e, t, n) => {
            n.d(t, {
                O: () => s,
                L: () => l
            });
            var i = n(2222),
                o = n(1010);
            var a = n(5482),
                r = n(1580);

            function s(e) {
                const t = (0, a.eD)(e),
                    n = o.Z[t ? "mobile" : "desktop"];
                return Object.values(n).map((t => t(e)))
            }
            const l = (0, i.P1)(s, (function(e) {
                return e.currency
            }), r.Jv, ((e, t, n) => ({
                adUnits: e,
                config: {
                    debug: !1,
                    useBidCache: !0,
                    currency: {
                        adServerCurrency: "EUR",
                        rates: t,
                        defaultRates: t
                    },
                    ortb2: n
                }
            })))
        },
        1055: (e, t, n) => {
            n.d(t, {
                B: () => r
            });
            var i = n(2222),
                o = n(9459),
                a = n(6241);
            const r = (0, i.P1)((e => o.gk.endpoints.getLocalisations.select({
                site: (0, a.lH)(e)
            })(e)), (e => (null == e ? void 0 : e.data) || []))
        },
        6070: (e, t, n) => {
            n.d(t, {
                Jd: () => r,
                r0: () => a,
                z8: () => s
            });
            var i = n(2222),
                o = n(3182);
            const a = e => e.mystery.mysteryGame.game,
                r = (0, i.P1)(a, o.Wj, o.J1, o.uY, ((e, t, n, i) => {
                    if (null == e || !e.path) return !1;
                    const {
                        categories: o
                    } = e;
                    return 0 === o.length || ("game" === t ? n.categories.some((e => {
                        let {
                            id: t
                        } = e;
                        return o.includes(t)
                    })) : "category" !== t || o.includes(i.id))
                })),
                s = e => e.mystery.mysteryGame.triggered
        },
        1013: (e, t, n) => {
            n.d(t, {
                _: () => i,
                d: () => o
            });
            const i = e => e.notifications.stack;

            function o(e, t) {
                const {
                    stack: n
                } = e.notifications;
                return n.find((e => e.id === t)) || null
            }
        },
        3182: (e, t, n) => {
            n.d(t, {
                $g: () => m,
                Ao: () => S,
                Br: () => A,
                GD: () => y,
                J1: () => k,
                Q4: () => x,
                Tm: () => L,
                Wj: () => f,
                ZQ: () => v,
                ex: () => h,
                ox: () => O,
                uJ: () => E,
                uY: () => P,
                vJ: () => C
            });
            var i = n(2222),
                o = n(5482),
                a = n(1055),
                r = n(6241),
                s = n(4481),
                l = n(5855),
                c = n(8734),
                d = n(5384),
                u = n(9459),
                p = n(8939),
                g = n(9853);

            function y(e) {
                return e.router.location.pathname
            }
            const v = (0, i.P1)((function(e) {
                return e.router.location.search
            }), (e => (0, s.Z0)(e)));

            function m(e) {
                return e.pages.previousPagePath
            }
            const f = (0, i.P1)(r.lH, y, ((e, t) => (0, s.C2)(e, t)));

            function h(e) {
                const {
                    pages: t
                } = e, n = y(e), i = m(e), o = t.pages[n], a = i ? t.pages[i] : null;
                return null != o && o.pokifordevs_team_id && null != a && a.pokifordevs_team_id ? o.pokifordevs_team_id === a.pokifordevs_team_id : !(null == o || !o.developer || null == a || !a.developer) && o.developer === a.developer
            }
            const b = e => u.gk.endpoints.getGame.select({
                slug: (0, g.Ge)(e),
                site: (0, r.lH)(e),
                device: (0, o.Si)(e),
                geo: (0, o.Zn)(e),
                experiment: (0, p.d)(e),
                pageType: f(e),
                path: (0, g.dY)(e)
            })(e);

            function k(e) {
                const t = f(e);
                if ("game" !== t && "preview" !== t && "mystery" !== t) return {};
                const n = b(e);
                return "fulfilled" === n.status ? n.data : {}
            }
            const P = e => {
                    if (!("category" === f(e))) return {};
                    const t = (e => u.gk.endpoints.getCategory.select({
                        slug: (0, g.Ge)(e),
                        site: (0, r.lH)(e),
                        device: (0, o.Si)(e),
                        geo: (0, o.Zn)(e),
                        experiment: (0, p.d)(e),
                        filter: v(e)
                    })(e))(e);
                    return "fulfilled" === t.status ? t.data : {}
                },
                _ = e => u.gk.endpoints.getHomepage.select({
                    site: (0, r.lH)(e),
                    device: (0, o.Si)(e),
                    geo: (0, o.Zn)(e),
                    experiment: (0, p.d)(e)
                })(e);

            function w(e) {
                if (!("home" === f(e))) return {};
                const t = _(e);
                return "fulfilled" === t.status ? t.data : {}
            }
            const S = (0, i.P1)(f, k, P, w, ((e, t, n, i) => {
                    let o = [];
                    return "game" === e && (o = t.alternates), "category" === e && (o = null == n ? void 0 : n.alternates), "home" === e && (o = i.alternates), o ? o.filter((e => {
                        let {
                            hrefLang: t
                        } = e;
                        return "x-default" !== t
                    })).map((e => {
                        let {
                            href: t,
                            hrefLang: n,
                            lang: i,
                            title: o
                        } = e;
                        return {
                            href: t,
                            hrefLang: n,
                            title: o,
                            lang: i,
                            languageName: (0, c.vX)()[n].languageName
                        }
                    })).sort(((e, t) => e.languageName.localeCompare(t.languageName, "en"))) : []
                })),
                E = (0, i.P1)(r.lH, o.Zn, ((e, t) => (0, s.Ep)(e, "content", (d.vO.includes(t) ? "" : "global-") + "privacy-statement"))),
                C = (0, i.P1)(r.lH, o.Zn, ((e, t) => (0, s.Ep)(e, "content", (d.vO.includes(t) ? "" : "global-") + "cookie-statement"))),
                L = (0, i.P1)(r.lH, o.Zn, ((e, t) => (0, s.Ep)(e, "content", (d.vO.includes(t) ? "" : "global-") + "terms-of-use"))),
                R = (0, i.P1)(r.lH, (e => (0, s.Ep)(e, "content", "contact"))),
                O = (0, i.P1)(r.lH, a.B, R, E, C, L, l.IF, o.Zn, ((e, t, n, i, o, a, r, l) => [{
                    label: t.about,
                    url: "https://about.poki.com",
                    external: !0
                }, {
                    label: t.developers,
                    url: "https://developers.poki.com",
                    external: !0
                }, {
                    label: t.jobs,
                    url: "https://jobs.poki.com",
                    external: !0
                }, r ? null : {
                    label: t.poki_kids,
                    url: "https://kids.poki.com",
                    external: !0
                }, {
                    label: t.privacy_statement,
                    url: i
                }, r ? null : {
                    label: t.cookie_statement,
                    url: o
                }, {
                    label: t.nav_terms_of_use,
                    url: a
                }, "CA" === l ? {
                    label: "Privacy Center",
                    url: (0, s.Ep)(e, "content", "privacy-center")
                } : null, {
                    label: t.faq,
                    url: (0, s.Ep)(e, "content", "faq")
                }, {
                    label: t.nav_contact,
                    url: n
                }].filter((e => null !== e))));

            function A(e) {
                const t = u.gk.endpoints.getImvitaConfigs.select({})(e);
                return "fulfilled" === t.status ? t.data : {}
            }

            function x(e) {
                const t = f(e);
                let n = 200;
                if ("category" === t) {
                    const t = P(e);
                    t && 0 !== Object.keys(t).length || (n = 404)
                }
                if ("game" === t) {
                    const t = k(e);
                    t && 0 !== Object.keys(t).length || (n = 404)
                }
                if ("home" === t) {
                    const t = w(e);
                    t && 0 !== Object.keys(t).length || (n = 404)
                }
                return n
            }
        },
        5855: (e, t, n) => {
            n.d(t, {
                IF: () => l,
                J$: () => i,
                J1: () => u,
                KB: () => c,
                Rd: () => o,
                XN: () => s,
                hL: () => a,
                oE: () => d,
                yc: () => r
            });
            const i = e => e.privacy.privacyCenterViewed,
                o = e => e.privacy.pokiAnalytics,
                a = e => e.privacy.bingRemarketingEnabled,
                r = e => e.privacy.googleRemarketingEnabled,
                s = e => e.privacy.enableCMP,
                l = e => e.privacy.isFamilyMode,
                c = e => e.privacy.personalizedAds,
                d = e => e.privacy.familyModeCookieConsent;

            function u(e) {
                const t = o(e),
                    n = l(e),
                    i = e.privacy.sendDeviceCapabilities;
                return t && i && !n
            }
        },
        9853: (e, t, n) => {
            n.d(t, {
                CG: () => r,
                Ge: () => m,
                PC: () => c,
                Rt: () => y,
                Vu: () => g,
                c2: () => v,
                dY: () => u,
                nC: () => p,
                o2: () => l
            });
            var i = n(2222),
                o = n(6241),
                a = n(4481);

            function r(e) {
                var t, n;
                return null === (t = e.router) || void 0 === t || null === (n = t.location) || void 0 === n ? void 0 : n.search
            }
            const s = ["cache", "device", "site", "browserfamily", "traffic-tag"],
                l = (0, i.P1)(r, (e => {
                    const t = new URLSearchParams;
                    for (const [n, i] of new URLSearchParams(e)) s.includes(n) || t.append(n, i);
                    const n = t.toString();
                    return n ? `?${n}` : ""
                })),
                c = (0, i.P1)(r, (e => {
                    const t = {};
                    return new URLSearchParams(e).forEach(((e, n) => {
                        n.toLowerCase().startsWith("gd") && (t[n] = e)
                    })), t
                })),
                d = (0, i.P1)(r, a.vf);

            function u(e) {
                var t, n;
                return null === (t = e.router) || void 0 === t || null === (n = t.location) || void 0 === n ? void 0 : n.pathname
            }
            const p = (0, i.P1)((e => {
                    var t, n;
                    return null === (t = e.router) || void 0 === t || null === (n = t.location) || void 0 === n ? void 0 : n.pathname
                }), d, ((e, t) => e + t)),
                g = ((0, i.P1)(((e, t) => t || p(e)), (e => e.client.host), l, ((e, t, n) => `${t}${e}${n}`)), (0, i.P1)((e => e.router.location.search.replace(/^\?/, "")), (e => {
                    if (!e) return;
                    const t = e.split("&").find((e => /^debug=/.test(e)));
                    if (!t) return;
                    const [, ...n] = t.split("=");
                    return n.join("=")
                }))),
                y = (0, i.P1)(o.lH, (e => (0, a.Ep)(e, "home")));

            function v(e, t) {
                if (!t) return;
                const n = r(e);
                return new URLSearchParams(n).get(t) || void 0
            }

            function m(e) {
                const t = u(e),
                    n = (0, o.lH)(e),
                    i = (0, a.C2)(n, t);
                return (0, a.L6)(n, i, t)
            }
        },
        7986: (e, t, n) => {
            function i(e) {
                return e.search.expanded
            }

            function o(e) {
                return e.search.pending
            }

            function a(e) {
                return e.search.error
            }

            function r(e) {
                return e.search.query
            }

            function s(e) {
                return e.search.searchSessionId
            }

            function l(e) {
                return e.search.results
            }

            function c(e) {
                return e.search.quickSearchCategories
            }
            n.d(t, {
                RG: () => i,
                ZM: () => s,
                dY: () => c,
                sy: () => l,
                wc: () => a,
                xM: () => r,
                yO: () => o
            })
        },
        3642: (e, t, n) => {
            function i() {
                return "undefined" == typeof window ? {} : JSON.parse(JSON.stringify(window.session || {}))
            }
            n.d(t, {
                W: () => i
            })
        },
        6241: (e, t, n) => {
            n.d(t, {
                N0: () => s,
                lH: () => a,
                u: () => r
            });
            var i = n(2222),
                o = n(4481);

            function a(e) {
                return e.site.site
            }

            function r(e) {
                return e.site.sites
            }(0, i.P1)(a, (e => {
                let {
                    paths: t
                } = e;
                return { ...o.XP,
                    ...t
                }
            })), (0, i.P1)(a, (e => {
                let {
                    iso_lang: t
                } = e;
                return ["ar", "he"].includes(t)
            }));
            const s = e => e.site.mode
        },
        8734: (e, t, n) => {
            n.d(t, {
                ET: () => s,
                JZ: () => r,
                vX: () => l
            });
            var i = n(4481);
            const o = {},
                a = {},
                r = [],
                s = e => {
                    Object.entries(e).forEach((e => {
                        let [t, n] = e;
                        "xx" !== n.iso_lang && (o[t] = n, r.push({
                            href: (0, i.Ri)(n, "home"),
                            hrefLang: n.iso_lang,
                            lang: n.lang
                        }), a[n.iso_lang] = n)
                    })), r.push({
                        href: (0, i.Ri)(o[3], "home"),
                        hrefLang: "x-default"
                    })
                },
                l = () => a
        }
    }
]);