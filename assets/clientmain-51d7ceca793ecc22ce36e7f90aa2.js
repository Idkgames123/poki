"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7621], {
        552: (e, t, i) => {
            i.d(t, {
                h: () => c,
                t: () => s
            });
            var a = i(3904),
                r = i(8384),
                o = i(6460),
                n = i(1563);
            const c = [{
                    key: "state/client/recentGames",
                    rootKey: "client",
                    childKey: "recentGames",
                    validator: e => {
                        try {
                            return !Object.entries(e).some((e => {
                                const t = parseInt(e[0], 10);
                                if (Number.isNaN(t)) return !0;
                                return e[1].some((e => "number" != typeof e.id || "number" != typeof e.pt || void 0 !== e.lp && "number" != typeof e.lp))
                            }))
                        } catch (e) {
                            return !1
                        }
                    }
                }, {
                    key: "state/ratings/userVotes",
                    rootKey: "ratings",
                    childKey: "userVotes",
                    validator: e => {
                        try {
                            return !Object.entries(e).some((e => {
                                const t = parseInt(e[0], 10);
                                if (Number.isNaN(t)) return !0;
                                const i = e[1];
                                return 1 !== i && -1 !== i
                            }))
                        } catch (e) {
                            return !1
                        }
                    }
                }, {
                    key: "state/client/externalGames",
                    rootKey: "client",
                    childKey: "externalGames",
                    validator: e => {
                        try {
                            return !Object.entries(e).some((e => {
                                const t = parseInt(e[0], 10);
                                if (Number.isNaN(t)) return !0;
                                return "boolean" != typeof e[1]
                            }))
                        } catch (e) {
                            return !1
                        }
                    }
                }, {
                    key: "state/client/usPrivacyString",
                    rootKey: "client",
                    childKey: "usPrivacyString",
                    validator: e => "string" == typeof e
                }, {
                    key: "state/client/privacyPopupRevision",
                    rootKey: "client",
                    childKey: "privacyPopupRevision",
                    validator: e => "string" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/familyModeCookieConsent",
                    rootKey: "client",
                    childKey: "familyModeCookieConsent",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/privacyCenterViewed",
                    rootKey: "privacy",
                    childKey: "privacyCenterViewed",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/personalizedAds",
                    rootKey: "privacy",
                    childKey: "personalizedAds",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/pokiAnalytics",
                    rootKey: "privacy",
                    childKey: "pokiAnalytics",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/bingRemarketingEnabled",
                    rootKey: "privacy",
                    childKey: "bingRemarketingEnabled",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/googleRemarketingEnabled",
                    rootKey: "privacy",
                    childKey: "googleRemarketingEnabled",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/client/userSatisfactionShowed",
                    rootKey: "client",
                    childKey: "userSatisfactionShowed",
                    validator: e => "boolean" == typeof e
                }, {
                    key: "state/privacy/familyModeCookieConsent",
                    rootKey: "privacy",
                    childKey: "familyModeCookieConsent",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/notifications/muted",
                    rootKey: "notifications",
                    childKey: "muted",
                    validator: e => !!Array.isArray(e) && e.every((e => "string" == typeof e)),
                    bypassPrivacyStore: !0
                }],
                s = {
                    [r.FR.type]: {
                        state: "client",
                        property: "recentGames"
                    },
                    [r.jY.type]: {
                        state: "client",
                        property: "externalGames"
                    },
                    [o.Ns.type]: {
                        state: "ratings",
                        property: "userVotes"
                    },
                    [r.su.type]: {
                        state: "client",
                        property: "privacyPopupRevision"
                    },
                    [a.Z9.type]: {
                        state: "privacy",
                        property: "familyModeCookieConsent"
                    },
                    [a.RE.type]: {
                        state: "privacy",
                        property: "privacyCenterViewed"
                    },
                    [a.JO.type]: {
                        state: "privacy",
                        property: "personalizedAds"
                    },
                    [a.Mt.type]: {
                        state: "privacy",
                        property: "pokiAnalytics"
                    },
                    [a.$K.type]: {
                        state: "privacy",
                        property: "bingRemarketingEnabled"
                    },
                    [a.zc.type]: {
                        state: "privacy",
                        property: "googleRemarketingEnabled"
                    },
                    [r.GH.type]: {
                        state: "client",
                        property: "userSatisfactionShowed"
                    },
                    [n._I.type]: {
                        state: "notifications",
                        property: "muted"
                    }
                }
        },
        8132: (e, t, i) => {
            i.d(t, {
                LS: () => p,
                OY: () => l,
                rV: () => s
            });
            var a = i(552),
                r = i(5384);
            const o = 15552e6,
                n = 2592e6;

            function c(e) {
                var t;
                return null === (t = a.h.find((t => t.key === e))) || void 0 === t ? void 0 : t.bypassPrivacyStore
            }

            function s(e) {
                if ("undefined" != typeof window && localStorage) try {
                    var t;
                    if (!c(e) && !window.localStorageConsentSet && r.vO.includes(window.pokiCountry)) return;
                    const i = localStorage.getItem(e);
                    let a;
                    try {
                        a = JSON.parse(i)
                    } catch (t) {
                        localStorage.removeItem(e)
                    }
                    return null === (t = a) || void 0 === t ? void 0 : t.value
                } catch (e) {
                    return null
                }
            }

            function p(e, t) {
                if ("undefined" != typeof window && localStorage) try {
                    if (!c(e) && !window.localStorageConsentSet && r.vO.includes(window.pokiCountry)) return;
                    localStorage.setItem(e, JSON.stringify({
                        time: (new Date).getTime(),
                        value: t
                    }))
                } catch (e) {}
            }

            function l() {
                "undefined" != typeof window && localStorage && Object.values(a.h).forEach((e => {
                    try {
                        const t = localStorage.getItem(e.key),
                            i = JSON.parse(t);
                        if (!i) return;
                        const a = c(e.key) || window.isFamilyMode,
                            r = (new Date).getTime();
                        r >= i.time + (a ? n : o) && localStorage.removeItem(e.key)
                    } catch (e) {}
                }))
            }
        },
        2479: (e, t, i) => {
            i.d(t, {
                S1: () => n,
                UR: () => c,
                Xp: () => s
            });
            const a = new Map,
                r = "undefined" != typeof ResizeObserver;
            let o;

            function n() {
                r && (o = new ResizeObserver((e => {
                    e.forEach((e => {
                        let {
                            contentRect: t,
                            target: i
                        } = e;
                        const r = a.get(i);
                        r && r(t)
                    }))
                })))
            }

            function c(e) {
                r && (a.delete(e), o.unobserve(e))
            }

            function s(e, t) {
                e && r && (a.set(e, t), o.observe(e))
            }
        },
        9485: (e, t, i) => {
            i.d(t, {
                k: () => o
            });
            var a = i(5482),
                r = i(3182);

            function o() {
                let e = -1 !== navigator.userAgent.toLowerCase().search("firefox") ? 1 : 0;
                const t = window.store.getState(),
                    i = (0, a.eD)(t),
                    o = ["game", "preview", "mystery"].includes((0, r.Wj)(t));
                !i && o && window.innerHeight < 617 && (e = 16), window.scrollTo(0, e)
            }
        },
        6213: (e, t, i) => {
            i.d(t, {
                Zc: () => o,
                dK: () => a,
                yv: () => r
            });
            const a = () => {
                    var e;
                    return "undefined" == typeof window ? process.env.SERVICE_ENV : null === (e = window.ENV) || void 0 === e ? void 0 : e.SERVICE_ENV
                },
                r = () => "production" === a(),
                o = () => "acceptance" === a()
        },
        9674: (e, t, i) => {
            function a(e) {
                return e[0].toUpperCase() + e.slice(1)
            }
            i.d(t, {
                kC: () => a,
                uf: () => o
            });
            const r = "undefined" != typeof Intl ? new Intl.NumberFormat : {
                format: e => e
            };

            function o(e) {
                return r.format(e)
            }
        },
        3732: (e, t, i) => {
            i.d(t, {
                Z: () => r
            });
            var a = i(4481);

            function r(e, t) {
                if (!t) return "";
                let i = t.split(/(<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>)/gi);
                return i = i.map((t => {
                    if (!t) return;
                    const i = /<a([^>]+)href="([^"]*)"[^>]*>[^<]*<\/a>/gm;
                    return t.startsWith("<script") ? t.replace(i, (e => e.replace(/"/g, '\\"'))) : null == t ? void 0 : t.replace(i, ((t, i, r) => {
                        const o = r.replace(/https:\/\/|http:\/\//gi, "").replace(e.domain, ""),
                            n = t.toLowerCase(),
                            c = n.includes("onclick"),
                            s = n.includes('target="_blank"');
                        return !(0, a.pM)(o) || c || s ? t : t.replace(i, `${i}onclick="window.navigateTo('${o}');return false;" `)
                    }))
                })), i.join("")
            }
        },
        3485: (e, t, i) => {
            i.d(t, {
                Om: () => l,
                WM: () => s
            });
            var a = i(8734),
                r = i(4481),
                o = i(3732),
                n = i(5181),
                c = i(9674);

            function s(e, t) {
                const i = (0, a.vX)(),
                    o = Object.keys(t).filter((e => e && "xx" !== e && i[e])).map((a => {
                        var o;
                        const {
                            slug: n
                        } = t[a];
                        return {
                            href: (0, r.Ri)(i[a], e, n),
                            hrefLang: a,
                            lang: null === (o = i[a]) || void 0 === o ? void 0 : o.lang
                        }
                    }));
                if (t.en) {
                    const {
                        slug: a
                    } = t.en;
                    o.push({
                        href: (0, r.Ri)(i.en, e, a),
                        hrefLang: "x-default",
                        lang: "en"
                    })
                }
                return o
            }

            function p(e, t) {
                const i = (0, r.Ri)(t, "home");
                return {
                    "@type": "WebSite",
                    "@id": `${i}#website`,
                    name: "Poki",
                    url: i,
                    description: e.home_meta_description,
                    inLanguage: t.iso_lang,
                    publisher: {
                        "@type": "Organization",
                        "@id": "https://poki.com/#organization",
                        url: "https://poki.com",
                        name: "Poki",
                        description: "Poki is a free online games platform that offers more than 1500 games from a global community of creators to over 60 million monthly playing users.",
                        logo: "https://a.poki-cdn.com/img/favicon.svg",
                        brand: {
                            "@type": "Brand",
                            "@id": "https://poki.com/#brand",
                            name: "Poki",
                            slogan: "Let the world play"
                        },
                        email: "hello@poki.com",
                        sameAs: ["https://www.facebook.com/Poki", "https://linkedin.com/company/poki", "https://about.poki.com", "https://twitter.com/Poki", "https://www.similarweb.com/website/poki.com/", "https://www.youtube.com/poki", "https://www.tiktok.com/@poki_games", "https://medium.com/poki"]
                    }
                }
            }

            function l(e, t, i, a) {
                if ("home" === i) {
                    const o = (0, r.Ri)(e, i),
                        {
                            games: n
                        } = a.homeResults,
                        c = n.slice(0, 20),
                        s = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=630,f=png/opengraph/${e.id}/home/home-1200x630.png`,
                        l = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=675,f=png/opengraph/${e.id}/home/home-1200x675.png`,
                        g = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,f=png/opengraph/${e.id}/home/home-1200x1200.png`,
                        m = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=900,f=png/opengraph/${e.id}/home/home-1200x900.png`,
                        y = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=600,f=png/opengraph/${e.id}/home/home-1200x600.png`;
                    return {
                        meta: {
                            canonical: o,
                            title: t.home_meta_title,
                            description: t.home_meta_description
                        },
                        jsonLD: [{
                            "@context": "http://schema.org",
                            "@type": "WebPage",
                            "@id": `${o}#WebPage`,
                            url: o,
                            name: t.home_meta_title,
                            description: t.home_meta_description,
                            inLanguage: e.iso_lang,
                            image: [{
                                "@type": "ImageObject",
                                url: l,
                                width: "1200",
                                height: "675"
                            }, {
                                "@type": "ImageObject",
                                url: g,
                                width: "1200",
                                height: "1200"
                            }, {
                                "@type": "ImageObject",
                                url: m,
                                width: "1200",
                                height: "900"
                            }],
                            mainEntity: {
                                "@type": "ItemList",
                                name: t.breadcrumb_games,
                                itemListOrder: "http://schema.org/ItemListOrderAscending",
                                numberOfItems: c.length,
                                itemListElement: c.map(((t, i) => {
                                    let {
                                        title: a,
                                        slug: o
                                    } = t;
                                    return {
                                        "@type": "ListItem",
                                        position: i + 1,
                                        name: a,
                                        url: (0, r.Ri)(e, "game", o)
                                    }
                                }))
                            },
                            isPartOf: p(t, e)
                        }],
                        og: {
                            title: t.home_meta_title,
                            url: o,
                            description: t.home_meta_description,
                            locale: e.locale,
                            image: s,
                            "image:width": 1200,
                            "image:height": 630,
                            "image:alt": `${t.home_title} - ${e.title}`,
                            "image:type": "image/png",
                            site_name: "Poki",
                            type: "website"
                        },
                        twitter: {
                            card: "summary_large_image",
                            title: t.home_meta_title,
                            description: t.home_meta_description,
                            image: y,
                            "image:alt": `${t.home_title} - ${e.title}`,
                            site: "@Poki"
                        },
                        content: a
                    }
                }
                if ("category" === i) {
                    const n = (0, r.Ri)(e, i, a.category.slug),
                        s = [{
                            label: (0, c.kC)(e.title),
                            path: (0, r.Ep)(e, "home"),
                            url: (0, r.Ri)(e, "home")
                        }, ...(a.category.breadcrumb || []).map((t => ({
                            label: t.title,
                            path: (0, r.Ep)(e, "category", t.slug),
                            url: (0, r.Ri)(e, "category", t.slug)
                        })))],
                        {
                            games: l
                        } = a.category,
                        g = l.slice(0, 20),
                        m = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=630,f=png/opengraph/${e.id}/categories/${a.category.slug}-1200x630.png`,
                        y = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=675,f=png/opengraph/${e.id}/categories/${a.category.slug}-1200x675.png`,
                        d = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,f=png/opengraph/${e.id}/categories/${a.category.slug}-1200x1200.png`,
                        u = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=900,f=png/opengraph/${e.id}/categories/${a.category.slug}-1200x900.png`,
                        h = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=600,f=png/opengraph/${e.id}/categories/${a.category.slug}-1200x600.png`;
                    return {
                        id: a.category.id,
                        slug: a.category.slug,
                        meta: { ...a.category.meta,
                            canonical: n,
                            shortTitle: a.category.title
                        },
                        og: {
                            title: a.category.meta.title,
                            url: n,
                            description: a.category.meta.description,
                            locale: e.locale,
                            image: m,
                            "image:width": 1200,
                            "image:height": 630,
                            "image:alt": `${a.category.title} - ${e.title}`,
                            "image:type": "image/png",
                            site_name: "Poki",
                            type: "website"
                        },
                        twitter: {
                            card: "summary_large_image",
                            title: a.category.meta.title,
                            description: a.category.meta.description,
                            image: h,
                            "image:alt": `${a.category.title} - ${e.title}`,
                            site: "@Poki"
                        },
                        jsonLD: [{
                            "@context": "http://schema.org",
                            "@type": "CollectionPage",
                            "@id": `${n}#CollectionPage`,
                            url: n,
                            name: a.category.meta.title,
                            description: a.category.meta.description,
                            inLanguage: e.iso_lang,
                            image: [{
                                "@type": "ImageObject",
                                url: y,
                                width: "1200",
                                height: "675"
                            }, {
                                "@type": "ImageObject",
                                url: d,
                                width: "1200",
                                height: "1200"
                            }, {
                                "@type": "ImageObject",
                                url: u,
                                width: "1200",
                                height: "900"
                            }],
                            breadcrumb: {
                                "@type": "BreadcrumbList",
                                itemListElement: s.map(((e, t) => {
                                    let {
                                        label: i = "",
                                        url: a = ""
                                    } = e;
                                    return {
                                        "@type": "ListItem",
                                        position: t + 1,
                                        item: {
                                            "@type": "Thing",
                                            "@id": a,
                                            name: i
                                        }
                                    }
                                }))
                            },
                            mainEntity: {
                                "@type": "ItemList",
                                name: t.breadcrumb_games,
                                itemListOrder: "http://schema.org/ItemListOrderAscending",
                                numberOfItems: g.length,
                                itemListElement: g.map(((t, i) => {
                                    let {
                                        title: a,
                                        slug: o
                                    } = t;
                                    return {
                                        "@type": "ListItem",
                                        position: i + 1,
                                        name: a,
                                        url: (0, r.Ri)(e, "game", o)
                                    }
                                }))
                            },
                            hasPart: {
                                "@type": "FAQPage",
                                mainEntity: [{
                                    "@type": "Question",
                                    name: t.category_schema.replace("%CATEGORY_NAME%", a.category.title),
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: `<ol>${l.slice(0,10).map((t=>`<li><a href="${(0,r.Ri)(e,"game",t.slug)}">${t.title}</a></li>`))}</ol>`
                                    }
                                }, {
                                    "@type": "Question",
                                    name: t.category_schema_mobile.replace("%CATEGORY_NAME%", a.category.title),
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: `<ol>${l.filter((e=>e.mobile)).slice(0,5).map((t=>`<li><a href="${(0,r.Ri)(e,"game",t.slug)}">${t.title}</a></li>`))}</ol>`
                                    }
                                }]
                            },
                            isPartOf: p(t, e)
                        }],
                        description: {
                            breadcrumbs: s,
                            title: a.category.title,
                            body: (0, o.Z)(e, a.category.description)
                        },
                        content: a
                    }
                }
                if ("game" === i || "preview" === i || "mystery" === i) {
                    var s, l;
                    const g = (0, r.Ri)(e, i, a.game.slug),
                        m = [{
                            label: (0, c.kC)(e.title),
                            path: (0, r.Ep)(e, "home"),
                            url: (0, r.Ri)(e, "home")
                        }, ...(a.game.breadcrumb || []).map((t => ({
                            label: t.title,
                            path: (0, r.Ep)(e, "category", t.slug),
                            url: (0, r.Ri)(e, "category", t.slug)
                        }))), {
                            label: a.game.title,
                            path: (0, r.Ep)(e, "game", a.game.slug),
                            url: (0, r.Ri)(e, "game", a.game.slug)
                        }],
                        y = (0, r.u2)({
                            width: 1200,
                            height: 1200,
                            image: a.game.image,
                            format: "png"
                        }),
                        d = a.game.animated_thumbnail && (0, n.getVideo)({
                            videoUrl: a.game.animated_thumbnail,
                            videoSize: "3x3"
                        }).h264,
                        u = d ? {
                            video: d,
                            "video:type": "video/mp4",
                            "video:width": 314,
                            "video:height": 314
                        } : {};
                    return {
                        jsonLD: [{
                            "@context": "http://schema.org",
                            "@type": "ItemPage",
                            "@id": `${g}/#ItemPage`,
                            url: g,
                            name: a.game.meta.title,
                            description: a.game.meta.description,
                            inLanguage: e.iso_lang,
                            breadcrumb: {
                                "@type": "BreadcrumbList",
                                itemListElement: m.map(((e, t) => {
                                    let {
                                        label: i = "",
                                        url: a = ""
                                    } = e;
                                    return {
                                        "@type": "ListItem",
                                        position: t + 1,
                                        item: {
                                            "@type": "Thing",
                                            "@id": a,
                                            name: i
                                        }
                                    }
                                }))
                            },
                            mainEntity: {
                                "@type": ["VideoGame", "WebApplication"],
                                name: a.game.title,
                                description: a.game.meta.description,
                                url: g,
                                image: y,
                                applicationCategory: "GameApplication",
                                applicationSubCategory: null === (s = a.game.breadcrumb) || void 0 === s || null === (l = s[0]) || void 0 === l ? void 0 : l.title,
                                operatingSystem: "Web Browser",
                                gamePlatform: "Poki",
                                availableOnDevice: ["Mobile", "Tablet", "Desktop"],
                                author: {
                                    "@type": "Person",
                                    name: a.game.developer
                                },
                                aggregateRating: a.game.rating && {
                                    "@type": "AggregateRating",
                                    worstRating: 1,
                                    bestRating: 5,
                                    ratingValue: a.game.rating.rating,
                                    ratingCount: a.game.rating.up_count + a.game.rating.down_count
                                },
                                offers: {
                                    "@type": "Offer",
                                    category: "free",
                                    price: 0,
                                    priceCurrency: "EUR",
                                    availability: "http://schema.org/InStock"
                                }
                            },
                            isPartOf: p(t, e)
                        }],
                        og: {
                            title: a.game.meta.title,
                            url: g,
                            description: a.game.meta.description,
                            locale: e.locale,
                            image: y,
                            "image:width": 1200,
                            "image:height": 1200,
                            "image:type": "image/png",
                            "image:alt": `${a.game.title} - ${e.title}`,
                            site_name: "Poki",
                            type: "website",
                            ...u
                        },
                        twitter: {
                            card: "summary_large_image",
                            title: a.game.meta.title,
                            description: a.game.meta.description,
                            image: y,
                            "image:alt": `${a.game.title} - ${e.title}`,
                            site: "@Poki"
                        },
                        id: a.game.id,
                        slug: a.game.slug,
                        meta: { ...a.game.meta,
                            canonical: g
                        },
                        description: {
                            id: a.game.id,
                            breadcrumbs: m,
                            title: a.game.title,
                            developer: a.game.developer,
                            body: (0, o.Z)(e, a.game.description),
                            tags: a.game.categories.map((e => {
                                let {
                                    title: t,
                                    url: i
                                } = e;
                                return {
                                    label: t,
                                    url: i
                                }
                            })),
                            store_urls: a.game.store_urls,
                            rating: a.game.rating,
                            image: a.game.image
                        },
                        content: a,
                        rating: a.game.rating
                    }
                }
                if ("contact" === i) {
                    const a = (0, r.Ri)(e, i, "contact");
                    return {
                        jsonLD: [{
                            "@context": "http://schema.org",
                            "@type": "ContactPage",
                            url: a,
                            name: t.nav_contact,
                            inLanguage: e.iso_lang,
                            breadcrumb: {
                                "@type": "BreadcrumbList",
                                itemListElement: [{
                                    "@type": "ListItem",
                                    position: 1,
                                    item: {
                                        "@type": "Thing",
                                        "@id": (0, r.Ri)(e, "home"),
                                        name: (0, c.kC)(e.title)
                                    }
                                }, {
                                    "@type": "ListItem",
                                    position: 2,
                                    item: {
                                        "@type": "Thing",
                                        "@id": a,
                                        name: t.nav_contact
                                    }
                                }]
                            },
                            isPartOf: p(t, e)
                        }],
                        meta: {
                            title: t.nav_contact
                        }
                    }
                }
            }
        },
        4481: (e, t, i) => {
            i.d(t, {
                C2: () => l,
                Dj: () => f,
                Ep: () => n,
                L6: () => p,
                Ri: () => c,
                SK: () => o,
                XP: () => r,
                Z0: () => h,
                _Y: () => s,
                nN: () => g,
                pM: () => m,
                u2: () => y,
                vf: () => u
            });
            var a = i(8514);
            const r = {
                category: "/",
                content: "/c/",
                game: "/g/",
                game_suffix: "",
                prefix: "",
                preview: "/preview",
                mystery: "/mystery"
            };

            function o(e, t) {
                return Object.keys(t).reduce(((e, i) => function(e, t, i) {
                    return e && t ? [e, /\?/.test(e) ? "&" : "?", t, i ? `=${i}` : ""].join("") : e
                }(e, i, t[i])), e)
            }

            function n(e, t, i) {
                const a = { ...r,
                    ...e.paths
                };
                return "home" === t ? a.prefix && "/en" !== a.prefix ? a.prefix : "/" : "content" === t ? [a.prefix, a.content, i].join("") : "preview" === t ? [a.prefix, a.preview, "/", i].join("") : "mystery" === t ? [a.prefix, a.mystery, "/", i].join("") : ("game" === t ? [a.prefix, a.game, i, a.game_suffix] : [a.prefix, a.category, i]).join("")
            }

            function c(e, t, i) {
                const a = n(e, t, i);
                return `https://${e.domain}${a}`
            }

            function s(e) {
                const t = e.match(/^(?:https?:\/\/)?(?:www\.)?([^:/]+)/);
                return t ? t[1] : null
            }

            function p(e, t, i) {
                const a = { ...r,
                    ...e.paths
                };
                let o;
                switch (t) {
                    case "game":
                        o = new RegExp(`^${a.prefix}${a.game.replace(/\+/g,"\\+")}([^?]*)${a.game_suffix}(?:\\?.*)?$`);
                        break;
                    case "category":
                        o = new RegExp(`^${a.prefix}${a.category.replace(/\+/g,"\\+")}([^?/]*)`);
                        break;
                    case "content":
                        o = new RegExp(`^${a.prefix}${a.content}(.*)`);
                        break;
                    case "preview":
                        o = new RegExp(`^${a.prefix}/preview/([^/?]*)`);
                        break;
                    case "mystery":
                        o = new RegExp(`^${a.prefix}/mystery/([^/?]*)`);
                        break;
                    default:
                        throw new Error(`No implementation for extracting slugs of type ${t}`)
                }
                const n = o.exec(i);
                return n ? n[1] : ""
            }

            function l(e, t) {
                t = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (!e) return !1;
                    const i = "/" === e[0],
                        a = "https://poki.io";
                    let r;
                    try {
                        r = i ? new URL(e, a) : new URL(e)
                    } catch (t) {
                        throw new Error(`${t}: ${e}`)
                    }
                    return t.forEach((e => {
                        r.searchParams.delete(e)
                    })), i ? decodeURI(r.toString().replace(a, "")) : decodeURI(r.toString())
                }(t);
                const i = { ...r,
                    ...e.paths
                };
                if ("/" === t || "" !== i.prefix && t === i.prefix) return "home";
                if (new RegExp(`^${i.prefix}${i.content}(.*)$`).test(t)) return "content";
                if (new RegExp(`^${i.prefix}${i.preview}(.*)$`).test(t)) return "preview";
                if (new RegExp(`^${i.prefix}${i.mystery}(.*)$`).test(t)) return "mystery";
                return new RegExp(`^${i.prefix}${i.game.replace(/\+/g,"\\+")}.*${i.game_suffix}$`).test(t) ? "game" : "category"
            }

            function g(e, t) {
                const i = new URLSearchParams(t).get(e);
                return null === i ? "" : i
            }

            function m(e) {
                return /^\//.test(e)
            }

            function y(e) {
                let {
                    width: t,
                    height: i = t,
                    image: a = {},
                    quality: r = 78,
                    blur: o = 0,
                    format: n = "auto"
                } = e;
                const c = "https://img.poki-cdn.com/",
                    {
                        path: s
                    } = a;
                return s ? `${c}cdn-cgi/image/quality=${r},${t?`width=${t}`:""},${i?`height=${i}`:""}${o?`,blur=${o}`:""},fit=cover,f=${n}/${s.replace(c,"")}` : ""
            }
            const d = [...Object.values(a.Z).map((e => e.multiverse && e.multiverse.worldKey)).filter((e => !!e))],
                u = e => {
                    const t = new URLSearchParams;
                    for (const [i, a] of new URLSearchParams(e)) d.includes(i) && t.append(i, a);
                    const i = t.toString();
                    return i ? `?${i}` : ""
                };

            function h(e) {
                const t = g("filter", e);
                return t ? t.split(",") : []
            }
            const f = "/en/two-player"
        },
        2971: (e, t, i) => {
            function a() {
                let e = Math.floor(Date.now() / 1e3),
                    t = "";
                for (let i = 0; i < 4; i++) t = String.fromCharCode(255 & e) + t, e >>= 8;
                if (window.crypto && crypto.getRandomValues && Uint32Array) {
                    const e = new Uint32Array(12);
                    crypto.getRandomValues(e);
                    for (let i = 0; i < 12; i++) t += String.fromCharCode(255 & e[i])
                } else
                    for (let e = 0; e < 12; e++) t += String.fromCharCode(Math.floor(256 * Math.random()));
                return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            i.d(t, {
                V: () => a
            })
        }
    }
]);