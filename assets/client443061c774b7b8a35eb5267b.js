"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4430], {
        4430: (e, i, t) => {
            t.r(i), t.d(i, {
                checkAutoRedirectEpic: () => q,
                checkPrivacyPolicyEpic: () => P,
                googleAnalyticsPrivacyEpic: () => I,
                hideNotificationsOnNavigateEpic: () => R,
                refreshCacheEpic$: () => B,
                sendDeviceCapabilitiesEpic: () => V,
                setViewportOrientationEpic: () => H,
                showUserFeedbackEpic: () => j,
                stateSyncEpic: () => T
            });
            var n = t(8661),
                o = t(4848),
                a = t(5069),
                l = t(1545),
                r = t(5158),
                c = t(9127),
                u = t(3071),
                p = t(2965),
                s = t(4727),
                d = t(2423),
                v = t(4978),
                f = t(2817),
                g = t(4975),
                h = t(378),
                m = t(2006),
                y = t(533),
                E = t(7877),
                w = t(8384),
                _ = t(1563),
                b = t(1405),
                A = t(3904),
                N = t(5482),
                k = t(1013),
                C = t(1055),
                L = t(3182),
                O = t(6241),
                U = t(5855),
                $ = t(552),
                D = t(3067),
                J = t(3605),
                S = t(8132);

            function H(e) {
                var i;
                if ("function" != typeof(null === (i = window) || void 0 === i ? void 0 : i.matchMedia)) return l.E;
                const t = window.matchMedia("(orientation: portrait)"),
                    n = (0, r.R)(window, "orientationchange").pipe((0, c.U)((() => t.matches))),
                    o = e.pipe((0, a.l)(w.JV.type));
                return (0, u.T)(o, n).pipe((0, p.b)(100), (0, c.U)((() => (0, w.It)({
                    orientation: t.matches ? "portrait" : "landscape"
                }))))
            }

            function P(e, i) {
                return l.E
            }

            function q(e, i) {
                var t, r, c;
                if (null === (t = window) || void 0 === t || null === (r = t.location) || void 0 === r || null === (c = r.hash) || void 0 === c || !c.includes("#utm_source=redirect") || (0, O.N0)(i.value) === J.n.APP) return l.E;
                const p = e.pipe((0, a.l)(w.dY.type), (0, g.h)((() => (0, N.Zv)(i.value)))),
                    d = e.pipe((0, h.j)((() => (0, U.oE)(i.value) ? (0, f.of)(l.E) : e.pipe((0, a.l)(A.Z9.type)))), (0, s.q)(1));
                return e.pipe((0, a.l)(w.JV.type), (0, s.q)(1), (0, v.w)((() => (0, u.T)(p, d))), (0, m.b)((() => {
                    var e, t, a;
                    let r, c;
                    const u = window.location.hash.replace("#utm_source=redirect-", "") || "";
                    window.location.hash = "", 5 === u.length && ([r, c] = u.split("-"));
                    const p = (0, L.Ao)(i.value),
                        s = p.find((e => {
                            var i;
                            return (null == e || null === (i = e.href) || void 0 === i ? void 0 : i.includes("poki.com/")) && (null == e ? void 0 : e.lang) === r
                        })),
                        d = p.find((e => {
                            var i;
                            return (null == e || null === (i = e.href) || void 0 === i ? void 0 : i.includes("poki.com/")) && (null == e ? void 0 : e.lang) === c
                        }));
                    if (!s || !d) return l.E;
                    const v = (0, o.sY)(n.default.createElement("img", {
                            src: "https://a.poki-cdn.com/images/icon-world-v2.svg",
                            alt: "",
                            style: {
                                width: "22px"
                            }
                        })),
                        f = (0, C.B)(i.value),
                        g = `${v} ${f.auto_redirect_title.replace("[language]",d.languageName)}`,
                        h = f.auto_redirect_message.replace("[language]", s.languageName),
                        m = null === (e = f.auto_redirect_button) || void 0 === e ? void 0 : e.replace("[language]", s.languageName);
                    (0, D.A)({
                        category: "page",
                        action: "autoRedirectImpression",
                        data: {
                            from: s.languageName,
                            to: d.languageName
                        }
                    }), null === (t = window) || void 0 === t || null === (a = t.store) || void 0 === a || a.dispatch((0, _.sc)({
                        notification: {
                            title: g,
                            childComponent: {
                                name: "AutoRedirectNotification",
                                props: {
                                    message: h,
                                    button: m,
                                    href: null == s ? void 0 : s.href,
                                    lang: null == s ? void 0 : s.lang
                                }
                            },
                            autoExpire: 1e4
                        }
                    }))
                })), (0, y.l)())
            }

            function I(e, i) {
                return e.pipe((0, a.l)(w.JV.type), (0, m.b)((() => {
                    const e = (0, L.uJ)(i.value),
                        t = `https://${(0,O.lH)(i.value).domain}${e}`;
                    console.info(`%cGoogle Analytics is blocked by Poki, refer to our privacy statement (${t})`, "background:rgb(0, 156, 255);color:#fff")
                })), (0, y.l)())
            }

            function V(e, i) {
                const n = (0, U.J1)(i.value),
                    o = (0, N.jL)(i.value);
                return !n || o > .5 ? l.E : e.pipe((0, a.l)(b.o.type), (0, s.q)(1), (0, d.g)(6e4), (0, m.b)((() => {
                    t.e(2916).then(t.bind(t, 2916)).then((e => {
                        let {
                            default: i
                        } = e;
                        i()
                    }))
                })), (0, y.l)())
            }

            function j(e, i) {
                const t = (0, N.jL)(i.value),
                    n = (0, N.Hl)(i.value),
                    o = (0, N.Zn)(i.value),
                    r = (0, O.lH)(i.value),
                    c = t < .05,
                    u = ["AU", "CA", "GB", "IE", "NZ", "US"].includes(o),
                    p = 3 === r.id;
                if (!u || !p || n || !c) return l.E;
                (0, D.A)({
                    category: "pps",
                    action: "trigger"
                });
                const v = "user-satisfaction",
                    m = e.pipe((0, a.l)(w.JV.type), (0, s.q)(1), (0, d.g)(36e4)),
                    y = e.pipe((0, a.l)(b.o.type), (0, g.h)((() => "game" !== (0, L.Wj)(i.value))), (0, s.q)(1));
                return m.pipe((0, h.j)((() => y)), (0, E.z)((() => (0, f.of)((0, _.sc)({
                    notification: {
                        id: v,
                        title: "Would you recommend Poki to your friends?",
                        childComponent: {
                            name: "UserSatisfaction",
                            props: {
                                notificationID: v
                            }
                        }
                    }
                }), (0, w.GH)()))))
            }

            function R(e, i) {
                return e.pipe((0, a.l)("@router/LOCATION_CHANGE"), (0, c.U)((() => (0, k._)(i.value))), (0, E.z)((e => e.filter((e => e.navigateToClose)).map((e => (0, _._I)({
                    id: e.id
                }))))))
            }

            function T(e, i) {
                if ("undefined" == typeof window) return l.E;
                const t = [],
                    n = (0, r.R)(document, "visibilitychange").pipe((0, g.h)((() => "hidden" === document.visibilityState))),
                    o = e.pipe((0, g.h)((e => $.t[e.type])), (0, m.b)((e => {
                        const {
                            state: i,
                            property: n
                        } = $.t[e.type], o = `${i}/${n}`;
                        t.includes(o) || t.push(o)
                    })));
                return (0, u.T)(n.pipe((0, m.b)((() => {
                    t.forEach((e => {
                        const [t, n] = e.split("/"), o = i.value[t][n];
                        (0, S.LS)(`state/${e}`, JSON.stringify(o))
                    })), t.length = 0
                }))), o).pipe((0, y.l)())
            }

            function B(e) {
                return e.pipe((0, a.l)(w.JV.type), (0, s.q)(1)).pipe((0, d.g)(864e5), (0, v.w)((() => e.pipe((0, a.l)(b.o.type), (0, m.b)((() => {
                    window.location.reload()
                })), (0, y.l)()))))
            }
        }
    }
]);