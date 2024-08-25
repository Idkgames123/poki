"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [556], {
        9459: (e, t, r) => {
            r.d(t, {
                DH: () => q,
                Lc: () => _,
                NL: () => v,
                TX: () => d,
                gk: () => g,
                nB: () => c,
                oP: () => $,
                x2: () => y
            });
            var a = r(848),
                i = r(5673),
                s = r(8734),
                n = r(9033),
                o = r(4581),
                l = r(3485);
            const u = (0, n.Lq)(),
                g = (0, a.LC)({
                    reducerPath: "api",
                    baseQuery: (0, i.ni)({
                        baseUrl: u
                    }),
                    endpoints: e => ({
                        getLocalisations: e.query({
                            query: e => {
                                let {
                                    site: t
                                } = e;
                                return `/localisations?site=${t.id}`
                            }
                        }),
                        getLocalisation: e.query({
                            query: e => {
                                let {
                                    site: t,
                                    slug: r
                                } = e;
                                return `/localisations/${r}/${t.lang}?country=${t.lang}&site=${t.id}`
                            }
                        }),
                        getHomepage: e.query({
                            query: e => {
                                let {
                                    site: t,
                                    device: r,
                                    geo: a,
                                    experiment: i
                                } = e;
                                return `/list/game/HOME?site=${t.id}&device=${r}&country=${a}&limit=${"mobile"===r?143:145}${i?`&experiment=${i}`:""}`
                            },
                            transformResponse: (e, t, r) => {
                                const {
                                    content: a
                                } = e;
                                return {
                                    games: a.map((e => (0, o.zP)(r.site, "game", e))),
                                    alternates: s.JZ
                                }
                            }
                        }),
                        getPopularSearches: e.query({
                            query: e => {
                                let {
                                    site: t,
                                    device: r,
                                    geo: a
                                } = e;
                                return `/search/clicks?site=${t.id}&country=${a}&amount=6&view=${r}`
                            },
                            transformResponse: (e, t, r) => (e || []).map((e => (0, o.zP)(r.site, "game", e)))
                        }),
                        getImvitaConfigs: e.query({
                            query: () => "/imvita"
                        }),
                        getCategory: e.query({
                            query: e => {
                                let {
                                    slug: t,
                                    site: r,
                                    device: a,
                                    geo: i,
                                    experiment: s,
                                    filter: n
                                } = e;
                                return `/category/${encodeURIComponent(t)}?site=${r.id}&device=${a}&country=${i}&limit=200${s?`&experiment=${s}`:""}${(null==n?void 0:n.length)>0?`&tags=${n.join(",")}`:""}`
                            },
                            transformResponse: (e, t, r) => {
                                const a = (0, o.dr)(r.device, (null == e ? void 0 : e.games) || []).map((e => (0, o.zP)(r.site, "game", e))),
                                    i = ((null == e ? void 0 : e.related_categories) || []).map((e => (0, o.zP)(r.site, "category", e))),
                                    s = (0, l.WM)("category", e.alternate_sites);
                                return delete e.related_categories, { ...e,
                                    games: a,
                                    relatedCategories: i,
                                    alternates: s
                                }
                            }
                        }),
                        getCategories: e.query({
                            query: e => {
                                let {
                                    site: t,
                                    list: r,
                                    device: a
                                } = e;
                                return `/list/category/${r}${t.id}?site=${t.id}&device=${a}&offset=0&limit=500`
                            },
                            transformResponse: (e, t, r) => {
                                const {
                                    content: a
                                } = e;
                                return a.map((e => (0, o.zP)(r.site, "category", e)))
                            }
                        }),
                        getGame: e.query({
                            query: e => {
                                let {
                                    site: t,
                                    slug: r,
                                    device: a,
                                    geo: i,
                                    experiment: s,
                                    pageType: n,
                                    path: o
                                } = e;
                                if ("preview" === n || "mystery" === n) {
                                    const e = o.split("/");
                                    let r, s;
                                    if ("mystery" === n) {
                                        const t = atob(e[3]);
                                        [r, s] = t.split("/")
                                    } else [r, s] = [e[3], e[4]];
                                    return r && s ? `/previewgame/${r}/${s}?country=${i}&device=${a}&site=${t.id}` : {
                                        url: null
                                    }
                                }
                                return `/game/${encodeURIComponent(r)}?site=${t.id}&device=${a}&country=${i}${s?`&experiment=${s}`:""}`
                            },
                            transformResponse: (e, t, r) => {
                                var a;
                                if (!e) throw new Error(`Game ${null==r?void 0:r.path} not found`);
                                const {
                                    categories: i,
                                    related_categories: s,
                                    related_games: n
                                } = e, u = i ? i.map((e => (0, o.zP)(r.site, "category", e))) : [], g = s ? s.map((e => (0, o.zP)(r.site, "category", e))) : [], m = "mobile" === r.device ? (0, o.Pi)(n) : n, c = m ? m.map((e => (0, o.zP)(r.site, "game", e))) : [], y = e.alternative_game ? (0, o.zP)(r.site, "game", e.alternative_game) : null, d = e.alternative_category ? (0, o.zP)(r.site, "category", e.alternative_category) : null, p = (0, l.WM)("game", e.alternate_sites);
                                delete e.related_categories, delete e.related_games;
                                const $ = {
                                    path: (null == e || null === (a = e.image) || void 0 === a ? void 0 : a.path) || "mystery-tile-square.png"
                                };
                                return { ...e,
                                    alternative_game: y,
                                    alternative_category: d,
                                    categories: u,
                                    relatedCategories: g,
                                    relatedGames: c,
                                    alternates: p,
                                    image: $
                                }
                            }
                        }),
                        getGamesByIDs: e.query({
                            query: e => {
                                let {
                                    site: t,
                                    ids: r,
                                    geo: a
                                } = e;
                                return `/games/?site=${t.id}&id=${r.join(",")}&country=${a}`
                            },
                            transformResponse: (e, t, r) => {
                                if (!e) return [];
                                return e.map((e => (0, o.zP)(r.site, "game", e)))
                            }
                        })
                    })
                }),
                {
                    useGetLocalisationsQuery: m,
                    useGetLocalisationQuery: c,
                    useGetHomepageQuery: y,
                    useGetPopularSearchesQuery: d,
                    useGetImvitaConfigsQuery: p,
                    useGetCategoryQuery: $,
                    useGetCategoriesQuery: v,
                    useGetGameQuery: _,
                    useGetGamesByIDsQuery: q
                } = g
        }
    }
]);