"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4107], {
        4408: (t, e, a) => {
            a.r(e), a.d(e, {
                default: () => f
            });
            var n = a(8661),
                l = a(5441),
                o = a(512),
                s = a(477),
                _ = a(9801),
                c = a(8971),
                u = a(1055),
                r = a(7986),
                m = a(9853),
                i = a(3067),
                h = a(8483);

            function f() {
                const t = (0, l.I0)(),
                    e = (0, l.v9)((t => (0, m.Rt)(t))),
                    a = (0, l.v9)((t => (0, r.RG)(t))),
                    f = (0, l.v9)((t => (0, u.B)(t)));
                return n.default.createElement("div", {
                    className: h.navButtons
                }, n.default.createElement(s.default, {
                    className: (0, o.Z)(h.navButtons__btn, h.navButtons__btn_home),
                    to: e,
                    onClick: () => (0, i.A)({
                        category: "home",
                        action: "click"
                    }),
                    title: f.home_icon_alt_text,
                    ariaLabel: f.home_icon_alt_text
                }, n.default.createElement(_.default, {
                    name: "home",
                    className: h.navButtons__homeSVGIcon
                })), n.default.createElement("button", {
                    onClick: () => {
                        t(a ? (0, c.rw)() : (0, c.UL)())
                    },
                    type: "button",
                    className: (0, o.Z)("buttonReset", h.navButtons__btn, h.navButtons__lookingGlassButton),
                    title: f.search_short,
                    "aria-label": f.search_short
                }, f.search, n.default.createElement(_.default, {
                    name: "search",
                    className: h.navButtons__lookingGlassSVGIcon
                })))
            }
        }
    }
]);