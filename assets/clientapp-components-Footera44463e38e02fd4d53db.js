"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5622], {
        4700: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => p
            });
            var a = l(8661),
                o = l(5441),
                r = l(6727),
                n = l(4967),
                s = l(477),
                i = l(3182),
                c = l(5482),
                d = l(8939),
                u = l(1055),
                _ = l(7020);
            const f = (0, r.ZP)({
                resolved: {},
                chunkName: () => "app-components-SiteSelector",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!l.m[t]
                },
                importAsync: () => Promise.all([l.e(1828), l.e(5969), l.e(6135), l.e(6757), l.e(7999)]).then(l.bind(l, 3767)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return l(t)
                },
                resolve() {
                    return 3767
                }
            });

            function m() {
                window.__tcfapi("displayConsentUi", 2, (() => {}))
            }

            function v() {
                window.__uspapi("displayUspUi")
            }

            function p() {
                const [e, t] = (0, a.useState)(null), l = (0, o.v9)(c.nE), r = (0, o.v9)(c.tl), p = (0, o.v9)(i.ox), E = (0, o.v9)(d.R), N = (0, o.v9)(u.B), b = `Poki 3c3082190ca887d80fa7bc255d208581d5b0298d - SDK ${E||"v2"}`;
                return (0, a.useEffect)((() => {
                    t(a.default.createElement(f, null))
                }), []), a.default.createElement("footer", {
                    className: _.footer
                }, a.default.createElement("div", {
                    className: _.footer__content
                }, a.default.createElement("div", {
                    className: _.footer__brand
                }, a.default.createElement("div", {
                    className: _.footer__logo
                }, a.default.createElement(n.default, {
                    title: N.footer_logo_alt_text,
                    ariaLabel: N.footer_logo_alt_text,
                    external: !0,
                    to: "https://about.poki.com/"
                })), a.default.createElement("span", {
                    className: _.footer__mission
                }, "Let the world play")), a.default.createElement("div", {
                    className: _.footer__links
                }, l && a.default.createElement("button", {
                    onClick: m,
                    className: _.footer__link,
                    type: "button"
                }, a.default.createElement("span", {
                    role: "img",
                    "aria-label": N.cookie
                }, "⚙️"), " ", N.cookie), r && a.default.createElement("button", {
                    onClick: v,
                    className: _.footer__link,
                    type: "button"
                }, a.default.createElement("span", {
                    role: "img",
                    "aria-label": "Do Not Sell My Data"
                }, "⚙️"), " ", "Do Not Sell My Data"), p.map((e => a.default.createElement(s.default, {
                    className: _.footer__link,
                    key: e.url,
                    to: e.url,
                    target: e.external ? "_blank" : void 0,
                    rel: e.external ? "nofollow" : void 0
                }, e.label)))), a.default.createElement("div", {
                    className: _.footer__icons
                }, e)), a.default.createElement("div", {
                    className: _.footer__version
                }, b))
            }
        }
    }
]);