"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5802], {
        390: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => o
            });
            var r = a(8661),
                s = a(413),
                l = a(512);

            function o(e) {
                let {
                    className: t,
                    style: a
                } = e;
                const o = (0, l.Z)(s.fakeTile, t);
                return r.default.createElement("div", {
                    className: o,
                    style: a
                })
            }
        },
        9774: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => _
            });
            var r = a(8661),
                s = a(5441),
                l = a(512),
                o = a(390),
                n = a(9853),
                i = a(3285),
                m = a(9485),
                d = a(4481),
                c = a(3374),
                u = a(9845),
                p = a(3885);
            const g = {
                mobile: 30,
                desktop: 60
            };

            function _() {
                const {
                    isMobile: e
                } = (0, r.useContext)(i.k), t = (0, s.v9)(n.dY).includes(d.Dj), a = (0, l.Z)(c.pageGrid, {
                    [u.pageCategory_mobile]: e
                }, {
                    [u.pageCategory_desktop]: !e
                }, t && !e && p.pageCategoryFilter_desktop, t && e && p.pageCategoryFilter_mobile), _ = e ? g.mobile : g.desktop;
                return (0, r.useEffect)((() => {
                    (0, m.k)()
                })), r.default.createElement("div", {
                    className: a
                }, !t && r.default.createElement(o.default, {
                    className: u.pageCategory__titleBox
                }), Array.from({
                    length: _
                }).map(((e, t) => r.default.createElement(o.default, {
                    key: t,
                    className: `ip${t}`,
                    style: {
                        "--fakeTileAnimationDelay": .1 * t + "s"
                    }
                }))))
            }
        },
        8356: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => c
            });
            var r = a(8661),
                s = a(512),
                l = a(390),
                o = a(3374),
                n = a(5790),
                i = a(3285),
                m = a(9485);
            const d = {
                mobile: 30,
                desktop: 60
            };

            function c() {
                const {
                    isMobile: e
                } = (0, r.useContext)(i.k), t = (0, s.Z)(o.pageGrid, {
                    [n.pageGame_mobile]: e
                }, {
                    [n.pageGame_desktop]: !e
                }), a = e ? d.mobile : d.desktop;
                return (0, r.useEffect)((() => {
                    (0, m.k)()
                })), r.default.createElement("div", {
                    className: t
                }, e && r.default.createElement(l.default, {
                    className: n.pageGame__titleBox
                }), r.default.createElement(l.default, {
                    className: (0, s.Z)(n.pageGame__gameWrapper, {
                        [n.pageGame__gameWrapper_mobile]: e
                    })
                }), !e && r.default.createElement(r.default.Fragment, null, r.default.createElement(l.default, {
                    className: n.pageGame__advertismentA79
                }), r.default.createElement(l.default, {
                    className: n.pageGame__advertismentA32
                }), r.default.createElement(l.default, {
                    className: n.pageGame__advertismentA16
                })), r.default.createElement(l.default, {
                    className: "ir0"
                }), r.default.createElement(l.default, {
                    className: "ir1"
                }), Array.from({
                    length: a
                }).map(((e, t) => r.default.createElement(l.default, {
                    key: `pageGameSkeleton-${t}`,
                    style: {
                        "--fakeTileAnimationDelay": .1 * t + "s"
                    }
                }))))
            }
        },
        648: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => c
            });
            var r = a(8661),
                s = a(512),
                l = a(390),
                o = a(3285),
                n = a(9485),
                i = a(3374),
                m = a(8830);
            const d = {
                mobile: 23,
                desktop: 60
            };

            function c() {
                const {
                    isMobile: e
                } = (0, r.useContext)(o.k), t = e ? m.pageHome_mobile : m.pageHome_desktop, a = e ? d.mobile : d.desktop;
                return (0, r.useEffect)((() => {
                    (0, n.k)()
                })), r.default.createElement("div", {
                    className: (0, s.Z)(i.pageGrid, t)
                }, Array.from({
                    length: a
                }).map(((e, t) => r.default.createElement(l.default, {
                    className: `ip${t}`,
                    key: t,
                    style: {
                        "--fakeTileAnimationDelay": .1 * t + "s"
                    }
                }))))
            }
        },
        3682: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => d
            });
            var r = a(8661),
                s = a(5441),
                l = a(6727),
                o = a(2768),
                n = a(5482),
                i = a(1468);
            const m = (0, l.ZP)({
                resolved: {},
                chunkName: () => "app-components-Spinner",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => Promise.all([a.e(9401), a.e(2302)]).then(a.bind(a, 2379)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve() {
                    return 2379
                }
            });

            function d(e) {
                let {
                    forceLoadingState: t = !1
                } = e;
                const a = (0, s.v9)((e => (0, o.X)(e)));
                return (0, s.v9)((e => (0, n.KT)(e))) || t ? r.default.createElement(r.default.Fragment, null, r.default.createElement(m, {
                    className: i.pageLoader,
                    style: {
                        backgroundColor: a.color
                    },
                    small: !1
                }), t && r.default.createElement("div", {
                    className: i.pageLoader__filler
                })) : null
            }
        },
        1842: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => k
            });
            var r = a(8661),
                s = a(5441),
                l = a(278),
                o = a(6727),
                n = a(512),
                i = a(2768),
                m = a(1013),
                d = a(3285),
                c = a(3388),
                u = a(2479),
                p = a(6213);
            const g = (0, o.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-PageBackground",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(9590), a.e(7592), a.e(1735)]).then(a.bind(a, 6137)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve() {
                        return 6137
                    }
                }),
                _ = (0, o.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-PageLoader",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.resolve().then(a.bind(a, 3682)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve() {
                        return 3682
                    }
                }),
                v = (0, o.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-Footer",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(1828), a.e(9142), a.e(7320), a.e(1514), a.e(1152), a.e(5622)]).then(a.bind(a, 4700)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve() {
                        return 4700
                    }
                }),
                f = (0, o.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-NotificationStack",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(5235).then(a.bind(a, 7115)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve() {
                        return 7115
                    }
                }),
                h = (0, o.ZP)({
                    resolved: {},
                    chunkName: () => "app-components-AcceptanceWarning",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(8526), a.e(6557)]).then(a.bind(a, 834)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve() {
                        return 834
                    }
                }),
                y = (0, p.Zc)();

            function k(e) {
                let {
                    children: t
                } = e;
                const {
                    isMobile: a
                } = (0, r.useContext)(d.k), [o, p] = (0, r.useState)(null), k = (0, s.v9)(m._), A = (0, s.v9)(i.X);
                return (0, r.useEffect)((() => {
                    (0, u.S1)()
                }), []), (0, r.useEffect)((() => {
                    o || "default" === A.style || p(r.default.createElement(g, null))
                }), [A]), r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                    className: (0, n.Z)(c.root, {
                        [c.root_desktop]: !a,
                        [c.root_mobile]: a
                    })
                }, t), r.default.createElement(l.Z, {
                    whenVisible: !0
                }, r.default.createElement(v, null)), r.default.createElement(l.Z, {
                    whenIdle: !0
                }, r.default.createElement(_, null)), k.length > 0 && r.default.createElement(f, null), o, y && r.default.createElement(h, null))
            }
        },
        413: (e, t, a) => {
            a.r(t), a.d(t, {
                fakeTile: () => r,
                fakeTileBlinkAnimation: () => s
            });
            var r = "YwmMMIAFGWWCLiX3IDSl",
                s = "MzbKIFk6afkjJ3xw3s3x"
        },
        3374: (e, t, a) => {
            a.r(t), a.d(t, {
                pageGrid: () => r,
                pageTopContent: () => s
            });
            var r = "vtbwTfQNi80Hes0DzmGs",
                s = "pgTlDsvMokOdehB3D11L"
        },
        9845: (e, t, a) => {
            a.r(t), a.d(t, {
                pageCategory__schemaList: () => r,
                pageCategory__schemaTitle: () => s,
                pageCategory__titleBox: () => l,
                pageCategory__topContent: () => o,
                pageCategory_desktop: () => n,
                pageCategory_mobile: () => i
            });
            var r = "WcMY3e5nv_iqM7rLTINg",
                s = "Vz1O5jCIfTAEjuWB2uXg",
                l = "rg0q25sDgc3c2A__7hrD",
                o = "Wz4fsOmhQR4bEYpqHqhc",
                n = "JgLfL7LclbiAmVJ1BGIg",
                i = "BFj5_MRnlqMNxEud7CSZ"
        },
        3885: (e, t, a) => {
            a.r(t), a.d(t, {
                pageCategoryFilter__relatedCategoriesTitle: () => r,
                pageCategoryFilter_desktop: () => s,
                pageCategoryFilter_mobile: () => l
            });
            var r = "KpYHZTUJmzhJK1c3RUjs",
                s = "EUmPjlmDmqYX2VN2YgpR",
                l = "Uy28YrXSGrp4PYXDd9Dy"
        },
        5790: (e, t, a) => {
            a.r(t), a.d(t, {
                pageGame__advertismentA16: () => r,
                pageGame__advertismentA32: () => s,
                pageGame__advertismentA79: () => l,
                pageGame__externallyHostedCommunication: () => o,
                pageGame__gameWrapper: () => n,
                pageGame__gameWrapper_mobile: () => i,
                pageGame__multiverseCompanion: () => m,
                pageGame__pixel: () => d,
                pageGame__titleBox: () => c,
                pageGame_desktop: () => u,
                pageGame_desktop_hasMultiverse: () => p,
                pageGame_desktop_hasTakeover: () => g,
                pageGame_mobile: () => _
            });
            var r = "b_oSiF5rBJIqhq7hsN_U",
                s = "ujDmVcWGkbWvOqygag3K",
                l = "fdbvfqZ58O5bCYiCaNgd",
                o = "lwfhBFf00emgvcGoqV0g",
                n = "cM0dvuoLEJDmDILA2Jo8",
                i = "ZJTKr_MXUFVVsJpV_qiz",
                m = "r11h61tGmggKFXqPRlQw",
                d = "nQ32Q_5I94EeoEsR3ljg",
                c = "cjI2e42faicGCm1ksKXp",
                u = "KOhrFB4QDKEFN2uykSgp",
                p = "Hz0Ws4fX8bMqOYP1kVhz",
                g = "RlUXPDIHC5o_sVPxHp0G",
                _ = "Fs5S79qEs9av8TQAeTeb"
        },
        8830: (e, t, a) => {
            a.r(t), a.d(t, {
                pageHome_desktop: () => r,
                pageHome_mobile: () => s
            });
            var r = "Eu3YePRYW_jQ2bgCbNjr",
                s = "sVO_yY3sP6R0A04SxJ_L"
        },
        1468: (e, t, a) => {
            a.r(t), a.d(t, {
                pageLoader: () => r,
                pageLoaderWrapperFadeInAnimation: () => s,
                pageLoader__filler: () => l
            });
            var r = "BpGdi4Nhd9PmA4jbCDMd",
                s = "sbvbNDKUibhBW2I87TGN",
                l = "W8compNR7UyaOS_MWPEf"
        },
        3388: (e, t, a) => {
            a.r(t), a.d(t, {
                root: () => r,
                root_desktop: () => s,
                root_mobile: () => l
            });
            var r = "lStd1276e_IhuA3g3FIs",
                s = "s9w4UjUUDL2klmhRDNdo",
                l = "ADMPJVcFvhX6udYDGs_x"
        }
    }
]);