"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [365], {
        365: (n, l, t) => {
            function e() {
                const n = document.getElementById("game-element");
                try {
                    var l, t;
                    null == n || null === (l = n.contentWindow) || void 0 === l || null === (t = l.frames[0]) || void 0 === t || t.focus()
                } catch (l) {
                    try {
                        var e;
                        null == n || null === (e = n.contentWindow) || void 0 === e || e.focus()
                    } catch (l) {
                        null == n || n.focus()
                    }
                }
            }
            t.d(l, {
                u: () => e
            })
        }
    }
]);