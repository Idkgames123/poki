"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9406], {
        5060: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => c
            });
            var a = l(8661),
                r = l(512),
                n = l(9801),
                s = l(1254);
            const _ = e => {
                let {
                    label: t
                } = e;
                if (!t) return !1;
                switch (t) {
                    case "new":
                        return "fire";
                    case "restart":
                        return "restart"
                }
                return !1
            };

            function c(e) {
                let {
                    label: t
                } = e;
                const l = _({
                    label: t
                });
                return l ? a.default.createElement("div", {
                    className: (0, r.Z)("tile-label", s.tileLabel)
                }, a.default.createElement("div", {
                    className: s.tileLabel__container
                }, a.default.createElement(n.default, {
                    className: s.tileLabel__icon,
                    name: l
                }))) : null
            }
        }
    }
]);