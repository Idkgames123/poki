"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9836], {
        9836: (e, i, t) => {
            t.r(i), t.d(i, {
                initiatePrivacyCenterNotificationEpic: () => C,
                isFamilyFriendlyAdsNotificationEpic: () => A
            });
            var n = t(8661),
                o = t(4848),
                a = t(1545),
                l = t(9127),
                r = t(4727),
                c = t(2006),
                u = t(533),
                d = t(5069),
                s = t(8384),
                f = t(1563),
                p = t(3904),
                E = t(5482),
                v = t(1055),
                _ = t(6241),
                y = t(5855),
                w = t(394),
                m = t(4481),
                h = t(9801);

            function C(e, i) {
                if ("undefined" == typeof window) return a.E;
                if ("CA" !== (0, E.Zn)(i.value)) return a.E;
                if ((0, y.J$)(i.value)) return a.E;
                const t = (0, _.lH)(i.value),
                    n = Date.now(),
                    o = {
                        id: n,
                        title: "🔐 We respect your privacy!",
                        message: "Opt-out of cookies for personalized ads, including ads on other websites and/or analytics",
                        autoExpire: 6e4,
                        actions: [{
                            title: "To Privacy Center",
                            onClick: () => {
                                const e = (0, m.Ep)(t, "content", "privacy-center");
                                (0, w.Z)().push(e), window.store.dispatch((0, f._I)({
                                    id: n
                                }))
                            }
                        }]
                    };
                return e.pipe((0, d.l)(s.JV.type), (0, l.U)((() => (0, f.sc)({
                    notification: o
                }))))
            }

            function A(e, i) {
                if ("undefined" == typeof window) return a.E;
                if (!(0, y.IF)(i.value)) return a.E;
                if ((0, y.oE)(i.value)) return a.E;
                const t = (0, v.B)(i.value);
                return e.pipe((0, d.l)(s.JV.type), (0, r.q)(1), (0, c.b)((() => {
                    var e, i;
                    const a = (0, o.ZP)(n.default.createElement(n.default.Fragment, null, n.default.createElement(h.default, {
                        width: "26",
                        height: "26",
                        name: "cookies"
                    }), t.family_mode_title));
                    null === (e = window) || void 0 === e || null === (i = e.store) || void 0 === i || i.dispatch((0, f.sc)({
                        notification: {
                            title: a,
                            childComponent: {
                                name: "FamilyModeCookieNotification"
                            },
                            autoExpire: 1e4,
                            onExplicitClose: () => {
                                var e, i;
                                null === (e = window) || void 0 === e || null === (i = e.store) || void 0 === i || i.dispatch((0, p.Z9)({
                                    consent: !0
                                }))
                            }
                        }
                    }))
                })), (0, u.l)())
            }
        }
    }
]);