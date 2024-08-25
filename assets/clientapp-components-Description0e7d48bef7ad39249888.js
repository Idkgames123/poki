"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9369], {
        4291: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => h
            });
            var r = s(8661),
                l = s(5441),
                a = s(512),
                n = s(6727),
                i = s(9801),
                o = s(1055),
                c = s(4211),
                d = s(9674),
                u = s(9363);
            const m = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-Breadcrumbs",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(9142), s.e(5314), s.e(10)]).then(s.bind(s, 6999)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 6999
                    }
                }),
                _ = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-StoreLinks",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(1488), s.e(8532)]).then(s.bind(s, 9691)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 9691
                    }
                }),
                p = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-Tags",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(9142), s.e(7979), s.e(5777)]).then(s.bind(s, 912)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve() {
                        return 912
                    }
                });

            function h(e) {
                let {
                    data: t,
                    isHomePage: s = !1,
                    children: n
                } = e;
                const h = (0, l.v9)(o.B),
                    v = (0, l.v9)(c.Nl),
                    f = (null == t ? void 0 : t.developer) || (null == t ? void 0 : t.rating),
                    E = !!t.tags && t.tags.length > 0;
                return r.default.createElement("article", {
                    className: u.description
                }, t.breadcrumbs && t.breadcrumbs.length > 0 ? r.default.createElement(m, {
                    breadcrumbs: t.breadcrumbs
                }) : s && r.default.createElement("div", {
                    className: u.description__preTitle
                }, h.about_title), r.default.createElement("header", {
                    style: u.description__titleContainer
                }, s ? r.default.createElement("h1", {
                    className: u.description__title
                }, t.title) : r.default.createElement("h2", {
                    className: u.description__title
                }, t.title)), f && r.default.createElement("div", {
                    className: u.description__labels
                }, t.developer && r.default.createElement("span", {
                    className: u.description__developer
                }, t.developer), t.rating && r.default.createElement(r.default.Fragment, null, r.default.createElement("span", {
                    className: u.description__label
                }, r.default.createElement(i.default, {
                    className: u.description__SVGIconStar,
                    name: "star"
                }), t.rating.rating.toFixed(1)), r.default.createElement("span", {
                    className: u.description__label
                }, (0, d.uf)(t.rating.up_count + t.rating.down_count), " ", h.votes))), r.default.createElement("div", {
                    className: (0, a.W)(u.description__localized, s && u.description__localized_isHomePage),
                    dangerouslySetInnerHTML: {
                        __html: t.body
                    }
                }), v && r.default.createElement(r.default.Fragment, null, r.default.createElement("h3", {
                    className: u.description__appStoreTitle
                }, h.get_the_app), r.default.createElement(_, {
                    urls: t.store_urls
                })), E && r.default.createElement(p, {
                    className: u.description__tags,
                    tags: t.tags
                }), n)
            }
        }
    }
]);