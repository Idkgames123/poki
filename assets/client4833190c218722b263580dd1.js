"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4833], {
        4833: (e, t, n) => {
            n.d(t, {
                y: () => a
            });
            var s = n(3067),
                _ = n(7986);

            function a(e) {
                var t;
                const n = window.store.getState(),
                    a = (null == e || null === (t = e.panelSection) || void 0 === t ? void 0 : t.length) > 0,
                    c = a ? {
                        searchExpanded: a,
                        terms: (0, _.xM)(n),
                        searchSessionId: (0, _.ZM)(n)
                    } : {},
                    i = { ...e,
                        ...c
                    };
                (0, s.A)({
                    category: "tile",
                    action: "click",
                    data: i
                })
            }
        }
    }
]);