"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1442], {
        1442: (e, t, n) => {
            n.r(t), n.d(t, {
                clickMysteryGameEpic: () => m,
                fetchMysteryGameEpic: () => h
            });
            var r = n(5069),
                i = n(1545),
                a = n(6697),
                o = n(6108),
                c = n(4727),
                l = n(4978),
                p = n(7877),
                u = n(9635),
                f = n(9878),
                v = n(3505),
                s = n(2006),
                y = n(533),
                E = n(8384),
                _ = n(7620),
                d = n(5482),
                g = n(394);

            function h(e, t) {
                var n, s, y, g, h;
                const m = (0, d.Zn)(t.value),
                    A = (0, d.Si)(t.value);
                if (["GB", "NL", "CA"].includes(m)) return i.E;
                if (null !== (n = navigator) && void 0 !== n && null !== (s = n.connection) && void 0 !== s && s.effectiveType && "4g" !== (null === (y = navigator) || void 0 === y || null === (g = y.connection) || void 0 === g ? void 0 : g.effectiveType)) return i.E;
                if ((null === (h = navigator) || void 0 === h ? void 0 : h.hardwareConcurrency) < 8) return i.E;
                if (!document.createElement("canvas").getContext("webgl2", {
                        failIfMajorPerformanceCaveat: !0
                    })) return i.E;
                const D = (0, a.F)(3e5).pipe((0, o.O)(0)),
                    L = e.pipe((0, r.l)(_.b.type), (0, c.q)(1));
                return e.pipe((0, r.l)(E.JV.type), (0, c.q)(1), (0, l.w)((() => D.pipe((0, p.z)((() => (0, u.D)(fetch("https://mystery-game-tile.poki.io/v0/mystery-game")))), (0, p.z)((e => (0, u.D)(e.json()))), (0, l.w)((t => e.pipe((0, r.l)("@@router/LOCATION_CHANGE"), (0, c.q)(1), (0, l.w)((() => {
                    if (null == t || !t.path) return i.E;
                    const {
                        device_category: e
                    } = t;
                    if (e !== A && "any" !== e) return i.E;
                    const n = btoa(t.path),
                        r = { ...t,
                            path: n
                        };
                    return (0, u.D)([(0, _.L)({
                        game: r
                    })])
                }))))), (0, f.K)((() => i.E)), (0, v.R)(L)))))
            }

            function m(e) {
                return e.pipe((0, r.l)(_.b.type), (0, s.b)((e => {
                    let {
                        href: t
                    } = e;
                    (0, g.Z)().push(t)
                })), (0, y.l)())
            }
        }
    }
]);