"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3218], {
        1010: (e, a, d) => {
            d.d(a, {
                Z: () => n
            });
            var i = d(1354),
                r = d(3061),
                p = d(5302),
                m = d(2222),
                s = d(5482),
                t = d(6241),
                b = d(4632);
            const o = (0, m.P1)(t.lH, s.Si, ((e, a) => ({
                    code: `/${b.ZP.networkId}/mobile_gamebar_320x50/${e.id}_mobile_gamebar_320x50`,
                    height: 50,
                    width: 320,
                    bids: [{
                        bidder: "appnexus",
                        params: {
                            placementId: b.Vf[a].gamebar
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            delDomain: "poki-d.openx.net",
                            unit: b.HR[a].gamebar
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: b.nk[a].gamebar
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: b.RA[a].gamebar
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06",
                            ext: {
                                placement_name: b.hL[a].gamebar
                            }
                        }
                    }, {
                        bidder: "adagio",
                        params: {
                            organizationId: "1155",
                            site: e.domain.replace(/\./g, "-"),
                            placement: b.ES[a].gamebar,
                            useAdUnitCodeAsAdUnitElementId: !0,
                            environment: "desktop",
                            pagetype: "game",
                            category: "games"
                        }
                    }, {
                        bidder: "richaudience",
                        params: {
                            pid: b.vv[a].gamebar,
                            supplyType: "site"
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: 18608,
                            siteId: 498726,
                            zoneId: b.Tq[a].gamebar
                        }
                    }, {
                        bidder: "sharethrough",
                        params: {
                            pkey: b.J0[a].gamebar
                        }
                    }, {
                        bidder: "triplelift",
                        params: {
                            inventoryCode: "Poki_HDX_Prebid"
                        }
                    }],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [320, 50]
                            ]
                        }
                    }
                }))),
                n = {
                    desktop: {
                        desktop_gp_728x90: i.Z,
                        desktop_gp_300x250: p.Z,
                        desktop_gp_160x600: r.Z
                    },
                    mobile: {
                        mobile_gamebar_320x50: o
                    }
                }
        }
    }
]);