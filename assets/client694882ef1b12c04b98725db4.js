"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6948], {
        6948: (s, e, t) => {
            function n(s, e) {
                if (s instanceof RegExp) return {
                    keys: !1,
                    pattern: s
                };
                var t, n, i, _, r = [],
                    f = "",
                    u = s.split("/");
                for (u[0] || u.shift(); i = u.shift();) "*" === (t = i[0]) ? (r.push(t), f += "?" === i[1] ? "(?:/(.*))?" : "/(.*)") : ":" === t ? (n = i.indexOf("?", 1), _ = i.indexOf(".", 1), r.push(i.substring(1, ~n ? n : ~_ ? _ : i.length)), f += ~n && !~_ ? "(?:/([^/]+?))?" : "/([^/]+?)", ~_ && (f += (~n ? "?" : "") + "\\" + i.substring(_))) : f += "/" + i;
                return {
                    keys: r,
                    pattern: new RegExp("^" + f + (e ? "(?=$|/)" : "/?$"), "i")
                }
            }
            t.d(e, {
                Q: () => n
            })
        }
    }
]);