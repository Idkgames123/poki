"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4406], {
        8928: (n, u, i) => {
            i.d(u, {
                p: () => f
            });
            var l = i(7991),
                e = i(6798),
                t = i(2566),
                c = i(7878),
                r = {
                    leading: !0,
                    trailing: !1
                };
            var o = i(6196);

            function f(n, u, i) {
                void 0 === u && (u = l.z), void 0 === i && (i = r);
                var f = (0, o.H)(n, u);
                return function(n, u) {
                    return void 0 === u && (u = r), (0, e.e)((function(i, l) {
                        var e = u.leading,
                            r = u.trailing,
                            o = !1,
                            f = null,
                            s = null,
                            _ = !1,
                            a = function() {
                                null == s || s.unsubscribe(), s = null, r && (b(), _ && l.complete())
                            },
                            d = function() {
                                s = null, _ && l.complete()
                            },
                            v = function(u) {
                                return s = (0, c.Xf)(n(u)).subscribe((0, t.x)(l, a, d))
                            },
                            b = function() {
                                if (o) {
                                    o = !1;
                                    var n = f;
                                    f = null, l.next(n), !_ && v(n)
                                }
                            };
                        i.subscribe((0, t.x)(l, (function(n) {
                            o = !0, f = n, (!s || s.closed) && (e ? b() : v(n))
                        }), (function() {
                            _ = !0, (!(r && o && s) || s.closed) && l.complete()
                        })))
                    }))
                }((function() {
                    return f
                }), i)
            }
        }
    }
]);