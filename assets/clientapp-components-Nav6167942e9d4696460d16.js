"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3541], {
        8080: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => h
            });
            var r = s(8661),
                n = s(5441),
                l = s(6727),
                o = s(9853),
                i = s(6241),
                a = s(8437);
            const c = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-Logo",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(1828), s.e(9142), s.e(7320), s.e(1514)]).then(s.bind(s, 4967)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 4967
                    }
                }),
                u = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-NavButtons",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(1828), s.e(9142), s.e(2274), s.e(4107)]).then(s.bind(s, 4408)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 4408
                    }
                });

            function v() {
                const e = (0, n.v9)(i.lH),
                    t = (0, n.v9)(o.Rt);
                return r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                    className: a.nav
                }, r.default.createElement(c, {
                    className: a.nav__innerLogo,
                    to: t,
                    title: e.title,
                    ariaLabel: e.title
                })), r.default.createElement(u, null))
            }
            const h = v
        }
    }
]);