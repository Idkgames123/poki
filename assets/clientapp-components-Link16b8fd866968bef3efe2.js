"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9142], {
        477: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => s
            });
            var r = l(8661),
                a = l(4481),
                n = l(394);

            function s(e) {
                let {
                    className: t,
                    children: l,
                    to: s,
                    onClick: _,
                    target: f,
                    title: u,
                    rel: i,
                    style: o,
                    refForwarded: c,
                    ariaLabel: d
                } = e;
                return "_blank" === f && (i = i ? `noopener ${i}` : "noopener"), r.default.createElement("a", {
                    className: t,
                    href: s,
                    onClick: e => {
                        _ && _(e), !(0, a.pM)(s) || e.defaultPrevented || 0 !== e.button || f || function(e) {
                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                        }(e) || (e.preventDefault(), (0, n.Z)().push(s))
                    },
                    rel: i,
                    target: f,
                    title: u,
                    style: o,
                    ref: c,
                    "aria-label": d
                }, l)
            }
        }
    }
]);