"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6014], {
        6014: (e, t, n) => {
            n.r(t), n.d(t, {
                fetchSaveGameEpic: () => Z,
                fixIOSFullscreen: () => te,
                forwardPostMessageEpic: () => Y,
                fullscreenEpic: () => re,
                gameLoadingFinishedEpic: () => ae,
                generateScreenshotEpic: () => le,
                mutateSaveGameEpic: () => z,
                pubHostInitializedEpic: () => q,
                receivePostMessageEpic: () => $,
                receiveScreenshotEpic: () => ce,
                sendBugReportEpic: () => se,
                setRecentGameEpic: () => ie,
                switchWorldToEpic: () => K,
                trackRecentGameEpic: () => oe,
                updatePokiURLParams: () => j,
                worldSwitchedToEpic: () => V
            });
            var i = n(4975),
                o = n(2006),
                r = n(9127),
                a = n(533),
                l = n(4978),
                s = n(1545),
                c = n(2817),
                u = n(5158),
                d = n(6108),
                p = n(2423),
                v = n(2965),
                g = n(3071),
                m = n(6196),
                w = n(3505),
                f = n(8928),
                h = n(5069),
                y = n(4678),
                E = n(8384),
                _ = n(9927),
                b = n(3067),
                k = n(4481),
                R = n(5482),
                S = n(6241),
                D = n(4211),
                B = n(3182),
                F = n(9563),
                L = n(365),
                I = n(8092),
                M = n(1405),
                G = n(8342),
                P = n(8939),
                x = n(3642),
                U = n(8419),
                O = n(1580),
                A = n(9485),
                H = n(8209),
                J = n(1247),
                N = n(6460),
                C = n(6213);
            const W = ["localhost", "games.poki.com", "game-cdn.poki.com"],
                T = {
                    CrossyMultiverseMessage_worldSwitchedTo: _.VN,
                    pubHostInitialized: _.B5,
                    [F.cO]: _.OB,
                    [F.xE]: _.aw,
                    [F.A$]: _.PP,
                    [F.Yn]: _.iq,
                    [F.Fj]: _.BF,
                    fetchSaveGame: _.WV,
                    mutateSaveGame: _.nE,
                    SaveGameMigrator: !0
                };

            function $(e) {
                return e.pipe((0, h.l)(_.y6.type), (0, i.h)((e => {
                    let {
                        event: t
                    } = e;
                    if (!t.data.type || !T[t.data.type]) return !1;
                    const n = (0, k._Y)(t.origin),
                        i = W.includes(n) || n.endsWith(".poki-gdn.com") || window.location.origin === t.origin,
                        o = document.querySelector('iframe[name="gameFrame"]'),
                        r = o && o.src.startsWith(t.origin);
                    return i || r
                })), (0, o.b)((e => {
                    let {
                        event: {
                            data: {
                                content: t,
                                type: n
                            }
                        }
                    } = e;
                    ["pokiMessageEvent", "pokiMessageDebug", "SaveGameMigrator"].includes(n) && ((0, b.A)({
                        category: "sdk",
                        action: "message",
                        data: {
                            content: t,
                            type: n
                        }
                    }), window.parent !== window && window.parent.postMessage({
                        content: t,
                        type: n
                    }, (0, C.yv)() ? "devs.poki.io" : "*"))
                })), (0, i.h)((e => {
                    let {
                        event: {
                            data: {
                                type: t
                            }
                        }
                    } = e;
                    return "function" == typeof T[t]
                })), (0, r.U)((e => {
                    let {
                        event: {
                            data: {
                                content: t,
                                type: n
                            },
                            source: i
                        }
                    } = e;
                    return T[n]({ ...t,
                        source: i
                    })
                })))
            }

            function K(e, t) {
                return e.pipe((0, h.l)(_.Ot.type), (0, i.h)((() => window.frames.gameFrame)), (0, i.h)((e => {
                    let {
                        world: n
                    } = e;
                    return (0, D.Bs)(t.value) !== n
                })), (0, o.b)((e => {
                    var t, n, i;
                    let {
                        world: o
                    } = e;
                    null === (t = window) || void 0 === t || null === (n = t.frames) || void 0 === n || null === (i = n.gameFrame) || void 0 === i || i.postMessage({
                        type: "CrossyMultiverseMessage_switchWorldTo",
                        content: {
                            worldName: o
                        }
                    }, "*")
                })), (0, r.U)((e => (0, _.Bn)({
                    world: e,
                    gameId: (0, B.J1)(t.value).id
                }))))
            }

            function V(e, t) {
                return e.pipe((0, h.l)(_.VN.type), (0, r.U)((e => {
                    let {
                        worldName: t
                    } = e;
                    return t
                })), (0, i.h)((e => (0, D.Bs)(t.value) !== e)), (0, r.U)((e => (0, _.Bn)({
                    world: e,
                    gameId: (0, B.J1)(t.value).id
                }))))
            }

            function j(e) {
                return e.pipe((0, h.l)(_.PP.type), (0, o.b)((e => {
                    const {
                        params: t
                    } = e;
                    if (!t) return;
                    const n = Object.keys(t),
                        i = new URLSearchParams(window.location.search),
                        o = [];
                    i.forEach(((e, t) => {
                        t.startsWith("gd") && o.push(t)
                    })), o.forEach((e => {
                        i.delete(e)
                    })), n.forEach((e => {
                        i.set(`gd${e}`, t[e])
                    })), window.history.replaceState({}, document.title, `${window.location.pathname}?${i.toString()}`)
                })), (0, a.l)())
            }

            function q(e, t) {
                return e.pipe((0, h.l)(_.B5.type), (0, l.w)((e => {
                    const n = (0, B.J1)(t.value);
                    return n ? ((0, b.A)({
                        category: "pubHost",
                        action: "initialized",
                        data: e
                    }), delete e.source, (0, c.of)((0, _.P8)({
                        gameId: n.id,
                        data: e
                    }))) : s.E
                })))
            }

            function z(e, t) {
                return e.pipe((0, h.l)(_.nE.type), (0, o.b)((async e => {
                    let {
                        action: n,
                        key: i,
                        value: o
                    } = e;
                    const r = (0, B.J1)(t.value);
                    if (r) try {
                        const e = (0, y.MT)(`savegame:${r.id}`, "ls");
                        "clear" === n ? await (0, y.ZH)(e) : "delete" === n ? await (0, y.IV)(i, e) : "set" === n && await (0, y.t8)(i, o, e)
                    } catch (e) {
                        console.error(e)
                    }
                })), (0, a.l)())
            }

            function Z(e, t) {
                return e.pipe((0, h.l)(_.WV.type), (0, o.b)((async () => {
                    const e = (0, B.J1)(t.value);
                    if (e) try {
                        var n, i, o;
                        const t = (0, y.MT)(`savegame:${e.id}`, "ls"),
                            r = (await (0, y.qh)(t)).reduce(((e, t) => {
                                let [n, i] = t;
                                return e[n] = i, e
                            }), {});
                        null === (n = window.frames) || void 0 === n || null === (i = n.gameFrame) || void 0 === i || null === (o = i.postMessage) || void 0 === o || o.call(i, {
                            type: "fetchedSaveGame",
                            data: r
                        }, "*")
                    } catch (e) {
                        console.error(e)
                    }
                })), (0, a.l)())
            }

            function Y() {
                return "undefined" != typeof messageListener && window.removeEventListener("message", messageListener), (0, u.R)(window, "message").pipe((0, d.O)(..."undefined" != typeof messageBuffer ? messageBuffer : []), (0, p.g)(0), (0, r.U)((e => (0, _.y6)({
                    event: e
                }))))
            }
            const Q = () => document.getElementById("game-container"),
                X = () => document.getElementById("game-element"),
                ee = () => {
                    X() && (0, A.k)()
                };

            function te(e, t) {
                if (!(0, R.eD)(t.value) || "undefined" == typeof window) return s.E;
                const n = (0, u.R)(window, "resize").pipe((0, p.g)(500), (0, l.w)((() => (ee(), s.E))), (0, v.b)(3e3)),
                    i = (0, u.R)(window, "orientationchange").pipe((0, l.w)((() => (ee(), s.E))), (0, v.b)(3e3));
                return e.pipe((0, h.l)(_.Gq.type), (0, p.g)(3e3), (0, o.b)((() => {
                    (0, L.u)(), ee()
                }))).pipe((0, l.w)((() => (0, g.T)(n, i))))
            }
            const ne = (e, t) => {
                var n, i, o, r;
                if (!e) return;
                const a = (0, R.At)(t),
                    l = (0, R.QJ)(t),
                    s = (0, B.J1)(t),
                    c = (0, R.eD)(t),
                    u = null === (n = window) || void 0 === n || null === (i = n.screen) || void 0 === i || null === (o = i.orientation) || void 0 === o ? void 0 : o.lock,
                    d = c && u && (null == s || null === (r = s.mobile_file) || void 0 === r ? void 0 : r.orientation);
                if (!a && !l) try {
                    e.requestFullscreen({
                        navigationUI: "hide"
                    }).catch((() => {}))
                } catch (e) {} finally {
                    e.focus()
                }
                var p;
                d && (p = s.mobile_file.orientation, ["portrait", "landscape"].includes(p) && window.screen.orientation.lock(p).catch((() => {})))
            };

            function ie(e, t) {
                if ("undefined" == typeof window) return s.E;
                const n = (0, S.lH)(t.value);
                return e.pipe((0, h.l)(E.JV.type, M.o.type), (0, i.h)((() => {
                    const e = "game" === (0, B.Wj)(t.value),
                        n = (0, B.Q4)(t.value);
                    return e && 200 === n
                })), (0, r.U)((() => {
                    const e = (0, B.J1)(t.value),
                        {
                            id: i
                        } = e || {};
                    if (!i) return s.E;
                    const o = [...(0, R.jw)(t.value)] || [],
                        r = o.findIndex((e => e.id === i)),
                        a = r > -1 ? o.filter((e => e.id !== i)) : o,
                        l = {
                            id: i,
                            pt: r > -1 ? o[r].pt : 0,
                            lp: Date.now()
                        };
                    a.unshift(l);
                    const c = a.slice(0, 100);
                    return (0, E.FR)({
                        recentGames: c,
                        siteID: n.id
                    })
                })))
            }

            function oe(e, t) {
                if ("undefined" == typeof window) return s.E;
                const n = (0, S.lH)(t.value),
                    i = e.pipe((0, h.l)(M.o.type));
                return e.pipe((0, h.l)(E.FR.type), (0, l.w)((() => (0, m.H)(6e4).pipe((0, r.U)((() => {
                    const {
                        id: e
                    } = (0, B.J1)(t.value), i = (0, R.jw)(t.value), o = i.find((t => t.id === e));
                    if (o) {
                        const t = parseInt(o.pt || 0, 10) + 1,
                            r = i.map((n => n.id === e ? { ...n,
                                pt: t
                            } : n));
                        return (0, E.FR)({
                            recentGames: r,
                            siteID: n.id
                        })
                    }
                    return s.E
                })), (0, w.R)(i)))))
            }

            function re(e, t) {
                const n = (0, u.R)(window, "fullscreenchange").pipe((0, l.w)((() => {
                        var e, n, i;
                        return ee(), (0, D.Eo)(t.value) !== !(null === (e = document) || void 0 === e || !e.fullscreenElement) && (!(0, R.eD)(t.value) || null !== (n = document) && void 0 !== n && n.fullscreenElement) ? (0, c.of)((0, _.K1)({
                            toggle: !(null === (i = document) || void 0 === i || !i.fullscreenElement)
                        })) : s.E
                    }))),
                    d = e.pipe((0, h.l)(_.Zx.type), (0, i.h)((e => {
                        let {
                            toggle: t
                        } = e;
                        return t
                    })), (0, o.b)((() => {
                        ne(document.body, t.value)
                    })), (0, r.U)((() => (0, _.K1)({
                        toggle: !0
                    })))),
                    p = () => {
                        var e, n, i;
                        if (!(0, D.Eo)(t.value)) return s.E;
                        null === (e = window) || void 0 === e || null === (n = e.PokiSDK) || void 0 === n || null === (i = n.stopVideoAd) || void 0 === i || i.call(n), (0, I.aH)();
                        try {
                            var o, r;
                            null === (o = document) || void 0 === o || null === (r = o.exitFullscreen) || void 0 === r || r.call(o).catch((() => {}))
                        } catch (e) {}
                        return window.removeEventListener("resize", ee), window.removeEventListener("orientationchange", ee), (0, c.of)((0, _.K1)({
                            toggle: !1
                        }))
                    },
                    v = e.pipe((0, h.l)(_.Zx.type), (0, i.h)((e => {
                        let {
                            toggle: t
                        } = e;
                        return !t
                    })), (0, l.w)((() => p()))),
                    m = e.pipe((0, h.l)("@@router/LOCATION_CHANGE"), (0, i.h)((() => !window.location.toString().includes("#fullscreen") && !window.location.toString().includes("#goog_rewarded"))), (0, l.w)((() => p()))),
                    f = e.pipe((0, h.l)(_.Gq.type), (0, i.h)((() => (0, R.eD)(t.value))), (0, l.w)((() => (0, g.T)((0, u.R)(Q(), "click"), (0, u.R)(X(), "click")).pipe((0, i.h)((() => (0, R.eD)(t.value))), (0, o.b)((() => {
                        ne(document.body, t.value)
                    })), (0, w.R)(v), (0, a.l)())))),
                    y = e.pipe((0, h.l)(_.K1.type), (0, l.w)((e => {
                        let {
                            toggle: t
                        } = e;
                        const {
                            body: n
                        } = document, i = document.getElementById("app-root");
                        return i.style.overflow = t ? "hidden" : "auto", i.style.height = t ? "100dvh" : "auto", t ? n.classList.add("isFullscreen") : n.classList.remove("isFullscreen"), s.E
                    })));
                return (0, g.T)(d, v, m, n, f, y)
            }

            function ae(e) {
                return e.pipe((0, h.l)(_.OB.type), (0, i.h)((e => {
                    let {
                        event: t
                    } = e;
                    return t === F.tn
                })), (0, r.U)((() => (0, _.sn)())))
            }

            function le(e, t) {
                return e.pipe((0, h.l)(_.mY.type), (0, f.p)(3e3), (0, i.h)((() => {
                    var e, t;
                    return null === (e = window) || void 0 === e || null === (t = e.frames) || void 0 === t ? void 0 : t.gameFrame
                })), (0, o.b)((e => {
                    var n;
                    let {
                        callback: i
                    } = e;
                    const o = "screenshot" === i,
                        r = (0, B.J1)(t.value);
                    window.frames.gameFrame.postMessage({
                        type: "pokiGenerateScreenshot",
                        hasFrame: o,
                        title: r.title,
                        thumbnail: null === (n = r.image) || void 0 === n ? void 0 : n.path,
                        callback: i
                    }, "*")
                })))
            }

            function se(e, t) {
                return e.pipe((0, h.l)(H._s.type), (0, f.p)(1e4), (0, l.w)((e => {
                    var n;
                    let {
                        screenshot: i,
                        errors: o
                    } = e;
                    const r = (0, U.fx)(t.value),
                        l = i ? `${r}\n\n${i}` : r,
                        s = (0, G.Z)(t.value, "tracking"),
                        c = (0, P.d)(t.value),
                        u = (0, D.R6)(t.value),
                        d = (0, S.lH)(t.value),
                        p = (0, B.J1)(t.value),
                        v = (0, O.N9)(t.value),
                        g = (0, D.FK)(t.value),
                        m = (0, D.tL)(t.value),
                        w = (0, x.W)(t.value),
                        f = (null == u ? void 0 : u.gameID) === p.pokifordevs_game_id ? u.gameVersion : void 0,
                        h = (null == w || null === (n = w.page) || void 0 === n ? void 0 : n.start) > 0 ? Date.now() - w.page.start : 0,
                        y = document.getElementById("game-element");
                    let E, _;
                    y && (E = `${y.clientWidth}x${y.clientHeight}`);
                    try {
                        const e = document.createElement("canvas"),
                            t = {
                                powerPreference: "high-performance",
                                failIfMajorPerformanceCaveat: !1
                            };
                        let n = e.getContext("webgl2", t);
                        if (n || (n = e.getContext("webgl", t), n || (n = e.getContext("experimental-webgl", t))), n) {
                            const e = n.getExtension("WEBGL_debug_renderer_info");
                            e && (_ = n.getParameter(e.UNMASKED_RENDERER_WEBGL)), _ || (_ = n.getParameter(n.RENDERER))
                        }
                    } catch (e) {}
                    return s("/playground-feedback", {
                        method: "POST",
                        body: JSON.stringify({
                            p4d_game_id: p.pokifordevs_game_id,
                            p4d_version_id: f,
                            type: "bugreport",
                            site_id: d.id,
                            message: l,
                            experiment: c,
                            adblock: v,
                            was_fullscreen: g,
                            game_resolution: E,
                            loading_finished: m,
                            time_on_page: h,
                            errors: o,
                            webgl_renderer: _,
                            device_pixel_ratio: window.devicePixelRatio || 1
                        })
                    }).pipe((0, a.l)())
                })))
            }

            function ce(e, t) {
                return e.pipe((0, h.l)(_.BF.type), (0, r.U)((e => null == e ? void 0 : e.data)), (0, l.w)((e => {
                    let {
                        screenshot: n,
                        errors: i,
                        callback: o
                    } = e;
                    if ("bugReport" === o) try {
                        return (0, c.of)((0, H._s)({
                            screenshot: n,
                            errors: i
                        }))
                    } catch (e) {
                        return s.E
                    }
                    if ("ratings" === o) try {
                        const e = (0, J.Cy)(t.value);
                        return (0, c.of)((0, N.CE)({
                            voteDirection: e.voteDirection,
                            message: e.message,
                            screenshot: n,
                            errors: i
                        }))
                    } catch (e) {
                        return s.E
                    }
                })))
            }
        }
    }
]);