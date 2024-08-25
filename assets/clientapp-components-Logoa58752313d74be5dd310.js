"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1514], {
        4967: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => f
            });
            var l = a(8661),
                i = a(5441),
                n = a(512),
                o = a(9801),
                c = a(477),
                r = a(3182),
                s = a(3067),
                d = a(9531);
            const f = function(e) {
                let {
                    className: t,
                    external: a = !1,
                    favicon: f = !1,
                    to: _,
                    title: u,
                    ariaLabel: m = "Poki"
                } = e;
                const h = (0, i.v9)(r.Wj),
                    E = () => {
                        (0, s.A)({
                            category: "logo",
                            action: "click",
                            label: h,
                            data: {
                                path: _
                            },
                            options: {
                                interaction: !0
                            }
                        })
                    },
                    L = f ? l.default.createElement(o.default, {
                        name: "fav",
                        height: "36",
                        width: "36"
                    }) : l.default.createElement(o.default, {
                        name: "poki",
                        width: "100%",
                        height: "100%"
                    }),
                    A = (0, n.Z)(d.logo, t);
                return _ ? l.default.createElement(c.default, {
                    className: A,
                    to: _,
                    target: a ? "_blank" : void 0,
                    title: u,
                    onClick: E,
                    ariaLabel: m
                }, L) : l.default.createElement("span", {
                    className: A
                }, L)
            }
        }
    }
]);