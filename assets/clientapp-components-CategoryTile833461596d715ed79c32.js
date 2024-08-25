"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7509], {
        9119: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => g
            });
            var i = a(8661),
                c = a(512),
                r = a(394),
                l = a(4481),
                s = a(6544),
                o = a(4833);
            const n = {
                "basic-category": 94,
                "promoted-category": 204
            };

            function g(e) {
                let {
                    className: t,
                    data: a,
                    list: g,
                    idx: d,
                    contentType: m,
                    onClick: _,
                    panelSection: u,
                    trackingIndex: y
                } = e;
                const p = n[m],
                    {
                        src: h,
                        srcset: f
                    } = function(e) {
                        let {
                            image: t,
                            width: a
                        } = e;
                        const i = (0, l.u2)({
                            image: t,
                            width: a
                        });
                        return {
                            src: i,
                            srcset: `${i} 1x, ${(0,l.u2)({image:t,width:2*a})} 2x`
                        }
                    }({
                        image: a.image,
                        width: p
                    }),
                    D = (0, c.W)(s.categoryTile, "basic-category" === m && s.categoryTile_basicCategory, "promoted-category" === m && s.categoryTile_promotedCategory, t);
                return i.default.createElement("a", {
                    className: D,
                    href: a.url,
                    onClick: e => {
                        e.preventDefault(), _ && _();
                        const {
                            pageY: t
                        } = e, i = y || d;
                        (0, o.y)({
                            id: a.id,
                            image: "a",
                            path: a.url,
                            width: p,
                            panelSection: u,
                            index: i,
                            type: "category",
                            list: g,
                            y: t
                        }), (0, r.Z)().push(a.url)
                    }
                }, i.default.createElement("img", {
                    className: s.categoryTile__image,
                    src: h,
                    srcSet: f,
                    width: p,
                    height: p,
                    alt: a.title,
                    loading: "lazy"
                }), i.default.createElement("span", {
                    className: s.categoryTile__title
                }, a.title))
            }
        }
    }
]);