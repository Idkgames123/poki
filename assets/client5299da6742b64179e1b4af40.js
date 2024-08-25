"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5299], {
        5299: (e, r, u) => {
            u.r(r), u.d(r, {
                popImmersiveTakeoverBackgroundEpic: () => f,
                pushImmersiveTakeoverBackgroundEpic: () => k,
                pushMultiverseBackground: () => _,
                pushPageBackgroundEpic: () => A
            });
            var t = u(5069),
                o = u(9127),
                n = u(4727),
                a = u(3071),
                i = u(4975),
                c = u(6087),
                l = u(8413),
                p = u(8384),
                s = u(9927),
                d = u(1405),
                g = u(3182),
                v = u(9853),
                y = u(3672),
                m = u(3520);

            function k(e) {
                return e.pipe((0, t.l)(c.WY.type), (0, o.U)((e => {
                    var r, u;
                    return null == e || null === (r = e.takeover) || void 0 === r || null === (u = r.config) || void 0 === u ? void 0 : u.background
                })), (0, o.U)((e => {
                    let {
                        color: r,
                        imageLeft: u,
                        imageRight: t
                    } = e;
                    return (0, l.A)({
                        layer: "immersiveTakeover",
                        background: {
                            color: r,
                            imageLeft: u,
                            imageRight: t,
                            style: "dual-cover"
                        }
                    })
                })))
            }

            function f(e) {
                return e.pipe((0, t.l)(c.V6.type), (0, o.U)((() => (0, l.Z)())))
            }

            function A(e, r) {
                const u = e.pipe((0, t.l)(p.JV.type), (0, n.q)(1)),
                    i = e.pipe((0, t.l)(d.o.type)),
                    s = e.pipe((0, t.l)(c.V6.type));
                return (0, a.T)(u, i, s).pipe((0, o.U)((() => {
                    const e = (0, g.Wj)(r.value);
                    if ("preview" === e) {
                        const {
                            preview: e
                        } = m.baseBackgrounds;
                        return (0, l.A)({
                            layer: "custom",
                            background: e
                        })
                    }
                    if ("mystery" === e) {
                        const {
                            mystery: e
                        } = m.baseBackgrounds;
                        return (0, l.A)({
                            layer: "custom",
                            background: e
                        })
                    }
                    if ("game" === e) {
                        const e = (0, g.J1)(r.value),
                            u = (0, y.wy)(e.id),
                            t = u ? (0, v.c2)(r.value, u.worldKey) || u.defaultWorld : void 0,
                            o = (0, y.A9)(e.id, t);
                        return (0, l.A)({
                            layer: "custom",
                            background: o
                        })
                    }
                    if ("category" === e) {
                        const e = (0, g.uY)(r.value),
                            u = (0, y.rt)(e.id);
                        return (0, l.A)({
                            layer: "custom",
                            background: u
                        })
                    }
                    return (0, l.Z)()
                })))
            }

            function _(e) {
                return e.pipe((0, t.l)(s.Bn.type), (0, o.U)((e => {
                    let {
                        gameId: r,
                        world: u
                    } = e;
                    return (0, y.A9)(r, u)
                })), (0, i.h)((e => !!e)), (0, o.U)((e => (0, l.A)({
                    layer: "custom",
                    background: e
                }))))
            }
        }
    }
]);