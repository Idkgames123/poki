"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4552], {
        5425: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => _
            });
            var s = l(8661),
                r = l(5441),
                n = l(6727),
                u = l(512),
                o = l(8080),
                a = l(4211),
                i = l(7986),
                c = l(3285),
                d = l(1050);
            const v = (0, n.ZP)({
                resolved: {},
                chunkName: () => "app-components-SearchOverlay",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!l.m[t]
                },
                importAsync: () => Promise.all([l.e(1828), l.e(5121), l.e(241), l.e(4833), l.e(4278), l.e(8859), l.e(7342), l.e(5969), l.e(7563), l.e(3556), l.e(2406), l.e(978), l.e(4202), l.e(7467), l.e(7067), l.e(5565), l.e(2128), l.e(9800), l.e(2892), l.e(8071), l.e(5835)]).then(l.bind(l, 6666)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return l(t)
                },
                resolve() {
                    return 6666
                }
            });

            function _() {
                const [e, t] = (0, s.useState)(null), {
                    isMobile: l
                } = (0, s.useContext)(c.k), n = (0, r.v9)(a.Eo), _ = (0, r.v9)(i.RG);
                if ((0, s.useEffect)((() => {
                        e || !0 !== _ || (v.preload(), t(s.default.createElement(v, null)))
                    }), [_]), n) return null;
                const f = (0, u.Z)(d.pill, {
                    [d.pill_mobile]: l,
                    [d.pill_desktop]: !l
                });
                return s.default.createElement(s.default.Fragment, null, s.default.createElement("nav", {
                    className: f,
                    id: "nav"
                }, s.default.createElement(o.default, null)), e)
            }
        }
    }
]);