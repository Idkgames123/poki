! function() {
    function e(e, t) {
        fetch(e, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: t,
            mode: "no-cors",
            keepalive: !0,
            credentials: "omit"
        }).catch((function(a) {
            console.error(a);
            try {
                var n = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                n.open("POST", e, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(t)
            } catch (e) {}
        }))
    }

    function t(t, a, n) {
        console.error(t);
        var o = [{
            k: "where",
            v: a
        }, {
            k: "error",
            v: t.name && t.message ? "".concat(t.name, ": ").concat(t.message) : JSON.stringify(t)
        }];
        if (void 0 !== n) {
            var i = n;
            "string" != typeof t && (i = JSON.stringify(t)), o.push({
                k: "extra",
                v: i
            })
        }
        e("https://t.poki.io/l", JSON.stringify({
            c: "observer-error",
            ve: 7,
            d: o
        }))
    }
    window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
    var a = "poki_session";
    window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
    var n = ["poki.at", "poki.be", "poki.by", "poki.ch", "poki.cn", "poki.co.id", "poki.co.il", "poki.com.br", "poki.com", "poki.cz", "poki.de", "poki.dk", "poki.fi", "poki.it", "poki.jp", "poki.nl", "poki.pl", "poki.pt", "poki.se", "www.trochoi.net"];

    function o(e, t) {
        if (!e) return !1;
        if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
        if (!e.tab_id) return !1;
        if (!e.expire || Date.now() > e.expire) return !1;
        if (e.expire > Date.now() + 18e5) return !1;
        if (t) {
            if (void 0 !== e.referrer_domain) {
                var a = function() {
                    try {
                        var e = new URL(document.referrer).hostname;
                        return n.indexOf(e) > -1 ? "poki" : e
                    } catch (e) {}
                    return ""
                }();
                if ("poki" !== a && a !== e.referrer_domain) return !1
            }
            var o = new URLSearchParams(window.location.search);
            if (["gclid", "msclkid", "yclid", "ttclid", "fbclid", "utm_campaign", "campaign", "adgroup", "creative", "utm_term"].some((function(e) {
                    return o.has(e)
                })) || "web_app_manifest" === o.get("utm_source") || "bing" === o.get("utm_source") || "cpc" === o.get("utm_medium") || "rtb-cpm" === o.get("utm_medium")) return !1
        }
        return !0
    }

    function i() {
        var e = null;
        o(window[window._pokiSessionGlobalName], !1) && (e = window[window._pokiSessionGlobalName]);
        try {
            var n = sessionStorage.getItem(a);
            if (n) {
                var i = JSON.parse(n);
                o(i, !0) && (!e || i.depth > e.depth) && (e = i)
            }
        } catch (e) {
            try {
                t(e, "getSession", sessionStorage.getItem(a))
            } catch (n) {
                t(e, "getSession", n)
            }
        }
        return e
    }

    function r(e) {
        try {
            var n = i();
            if (!n) return;
            e(n);
            var o = JSON.stringify(n);
            try {
                sessionStorage.setItem(a, o)
            } catch (e) {}
            window[window._pokiSessionGlobalName] = n,
                function(e, t, a) {
                    document.cookie = "".concat(e, "=").concat(t, "; path=/; samesite=lax; max-age=").concat(Math.min(a || 15552e3, 15552e3))
                }(a, o)
        } catch (e) {
            t(e, "updateSessionProperties")
        }
    }
    const d = {},
        {
            documentElement: l,
            body: c,
            compatMode: s
        } = document,
        p = c && c.clientWidth && c.clientHeight;
    l && l.clientWidth && l.clientHeight && ("CSS1Compat" === s || !p) ? d.size = l.clientWidth + "x" + l.clientHeight : d.size = c.clientWidth + "x" + c.clientHeight;
    let u = null,
        v = !1;

    function y(e) {
        var t;
        if (u = 0, null != e && null !== (t = e.purpose) && void 0 !== t && t.consents)
            for (let t = 1; t <= 10; t++) e.purpose.consents[t] && (u |= 1 << t)
    }

    function g() {
        window.__tcfapi && !v && (window.__tcfapi("addEventListener", 2, (e, t) => {
            !t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || y(e)
        }), window.__tcfapi("getTCData", 2, (e, t) => {
            t && y(e)
        }), v = !0)
    }
    g();
    const k = {
        action: "a",
        browser_size: "bs",
        category: "c",
        connect: "co",
        connection_type: "ct",
        count: "cn",
        cpus: "cu",
        data: "d",
        depth: "de",
        dns: "dn",
        dom_complete: "dc",
        domain: "do",
        experiment: "ex",
        first_byte: "fb",
        flash_version: "f",
        game_id: "gid",
        game_version_id: "vid",
        has_adblock: "ha",
        hash: "h",
        id: "id",
        insert_id: "ii",
        interaction: "i",
        is_new: "in",
        key: "k",
        label: "l",
        landing_page: "lp",
        language: "la",
        last_byte: "lb",
        message: "m",
        name: "n",
        nav: "n",
        page: "p",
        pageview_id: "pvid",
        path: "pa",
        previous_page: "pp",
        protocol: "pr",
        query_params: "qp",
        referrer: "r",
        screen_orientation: "sor",
        screen_resolution: "sc",
        scroll_y: "sy",
        session: "s",
        site_id: "si",
        stack: "s",
        tab_id: "ti",
        tag_id: "t",
        tcf_purpose_consents: "tpc",
        time_on_page: "tp",
        time_on_previous_page: "tr",
        time_on_site: "ts",
        time_spa_load: "sl",
        timeout: "to",
        timestamp: "tt",
        timezone: "tz",
        transfer_size: "tr",
        type: "ty",
        user: "u",
        user_id: "ui",
        value: "v",
        version: "ve"
    };
    let m = !1;
    const f = ["AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "ES", "EE", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "SE", "GB"];

    function w(e) {
        m = e
    }

    function h() {
        return (void 0 === window.pokiBingRemarketing || window.pokiBingRemarketing) && (window.pokiCountry && !f.includes(window.pokiCountry) || m)
    }

    function _() {
        return (void 0 === window.pokiGoogleRemarketing || window.pokiGoogleRemarketing) && (window.pokiCountry && !f.includes(window.pokiCountry) || m)
    }
    const b = "AW-962655633";

    function I() {
        if (window.gtagLoaded) return;
        window.gtagLoaded = !0, window.gtag("set", "allow_ad_personalization_signals", !0), window.gtag("set", "restricted_data_processing", !1), window.gtag("set", "linker", {
            accept_incoming: !0
        }), window.gtag("js", new Date);
        const e = _() ? "granted" : "denied";
        window.gtag("consent", "default", {
            ad_storage: e,
            ad_user_data: e,
            ad_personalization: e,
            analytics_storage: e
        }), window.gtag("config", b, {
            send_page_view: !1,
            conversion_linker: !0
        });
        const t = document.createElement("script");
        t.src = "https://www.googletagmanager.com/gtag/js?id=".concat(b);
        const a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(t, a)
    }

    function S(e) {
        I();
        const t = e ? "granted" : "denied";
        window.gtag("consent", "update", {
            ad_storage: t,
            ad_user_data: t,
            ad_personalization: t,
            analytics_storage: t
        })
    }

    function D(e) {
        I(), window.gtag("event", "conversion", {
            send_to: "".concat(b, "/").concat(e),
            value: 1,
            currency: "USD"
        })
    }

    function T() {
        return /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(navigator.userAgent)
    }

    function A() {
        return /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
    }

    function B() {
        window.uetq || (window.uetq = [], window.uetq.push("config", "tcf", {
            enabled: !0
        }), function(e, t, a, n, o) {
            var i, r, d;
            e[o] = e[o] || [], i = function() {
                var t = {
                    ti: "5066235"
                };
                t.q = e[o], e[o] = new UET(t), e[o].push("pageLoad")
            }, (r = t.createElement(a)).src = "//bat.bing.com/bat.js", r.async = 1, r.onload = r.onreadystatechange = function() {
                var e = this.readyState;
                e && "loaded" !== e && "complete" !== e || (i(), r.onload = r.onreadystatechange = null)
            }, (d = t.getElementsByTagName(a)[0]).parentNode.insertBefore(r, d)
        }(window, document, "script", 0, "uetq"))
    }
    window.gtag_enable_tcf_support = !0, window.dataLayer = window.dataLayer || [], window.gtagLoaded = !1, window.gtag = function() {
        dataLayer.push(arguments)
    };
    let C, E;

    function P(e) {
        const t = i();
        if (!t) return;
        C = performance.now(), E && clearInterval(E);
        const a = t.gameplayTotalTime || 0;
        a <= 9e5 && (E = setTimeout(() => {
            if (t.gclid && _() && (T() ? D("1RivCPGb38gBEJHrg8sD") : A() ? D("nA26CIzb3qQBEJHrg8sD") : D("Q-g4CKu_36QBEJHrg8sD")), h()) {
                B();
                let t = "desktop";
                T() ? t = "mobile" : A() && (t = "tablet");
                let a = !1;
                window.api && window.api.getAdblock && (a = window.api.getAdblock()), window.uetq.push("event", "15-minute-play-time", {
                    event_category: t,
                    event_label: e,
                    event_value: a ? 1 : 0
                })
            }
        }, 9e5 - a))
    }

    function M() {
        C && (r(e => {
            e.gameplayTotalTime = (e.gameplayTotalTime || 0) + (performance.now() - C)
        }), C = void 0), E && clearInterval(E)
    }

    function G(e) {
        return "object" != typeof e ? [{
            key: "arg",
            value: JSON.stringify(e)
        }] : Object.keys(e).map(t => {
            if ("category" === t || "action" === t || "label" === t || "eventNoun" === t || "eventVerb" === t) return !1;
            let a = e[t];
            return "object" == typeof a && (a = JSON.stringify(a)), {
                key: t,
                value: a
            }
        }).filter(e => !!e)
    }

    function N(e) {
        const {
            position: t
        } = e.content.data;
        switch (t) {
            case "PP":
                return "preroll";
            case "PM":
                return "midroll";
            case "PR":
                return "rewarded";
            default:
                return "unknown-".concat(t)
        }
    }

    function R(e) {
        return e < 0 ? 0 : e < 30 ? Math.floor(e) : e < 60 ? 30 : e < 120 ? 60 : e < 300 ? 120 : e < 600 ? 300 : e < 1200 ? 600 : e < 1800 ? 1200 : 1800
    }
    window._pokiContextGlobalName = window._pokiContextGlobalName || "context";
    let L = !1;

    function H(e, a, n, o = "", d = [], l = {}) {
        var c, s, p, u, v, y;
        const g = window[window._pokiContextGlobalName],
            {
                session: k,
                user: m
            } = g;
        if ("pageview" === a && !g.site.id) return;
        const f = Math.max(Date.now() - k.page.start, 0),
            w = function() {
                try {
                    return !i()
                } catch (e) {
                    return t(e, "isSessionExpired"), !0
                }
            }();
        let h, _ = 0;
        ("pageview" !== a || k.depth > 1) && (_ = Math.max(Date.now() - k.landing_page.start, 0)), "pageview" === a && k.previous_page.start && (h = k.page.start - k.previous_page.start);
        let b, I = null === (c = e.content) || void 0 === c || null === (s = c.pokifordevs) || void 0 === s ? void 0 : s.game_id,
            S = null === (p = e.content) || void 0 === p || null === (u = p.pokifordevs) || void 0 === u ? void 0 : u.game_version_id;
        I || ({
            gameID: I
        } = e), S || (S = e.gameVersion), g.site.id || "pubhost" !== a || "initialized" !== n ? "pageview" !== a || L || (L = !0, ({
            referrer: b
        } = document)) : ({
            referrer: b
        } = document);
        let D = 0;
        k.expire && (D = Math.ceil((k.expire - Date.now()) / 1e3)), w && "pageview" !== a || (l.interaction && r((function(e) {
            e.expire = Date.now() + 18e5
        })), window[window._pokiTrackerGlobalName].push({
            session: {
                id: k.id,
                depth: k.depth,
                count: k.count
            },
            user: {
                id: m.id,
                is_new: m.is_new
            },
            page: {
                path: k.page.path,
                type: k.page.type,
                id: e.storeNoPageID ? void 0 : k.page.id,
                pageview_id: k.page.pageview_id
            },
            previous_page: {
                path: k.previous_page.path,
                type: k.previous_page.type,
                id: k.previous_page.id,
                pageview_id: k.previous_page.pageview_id
            },
            landing_page: {
                path: k.landing_page.path,
                type: k.landing_page.type,
                id: k.landing_page.id,
                pageview_id: k.landing_page.pageview_id
            },
            category: a,
            action: n,
            label: o,
            data: d,
            interaction: l.interaction,
            site_id: g.site.id,
            tag_id: g.tag,
            referrer: b,
            flash_version: g.flashVersion,
            time_on_site: _,
            time_spa_load: e.loadTime,
            time_on_page: f,
            time_on_previous_page: h,
            tab_id: k.tab_id,
            has_adblock: null === (v = window.api) || void 0 === v || null === (y = v.getAdblock) || void 0 === y ? void 0 : y.call(v),
            once_per_pageview: l.once_per_pageview,
            game_id: I || void 0,
            game_version_id: S || void 0,
            experiment: g.experiment,
            timeout: D
        }))
    }

    function q(a) {
        const n = window[window._pokiContextGlobalName],
            {
                event: o
            } = a,
            i = a.eventData || a.data || {};
        try {
            if ("sdk-message" === o)
                if ("pokiTrackingScreenDisplayAdImpression" === i.content.event) H(i, "ad", "displayImpression", i.content.data.platformAd ? "platform" : "ingame", [{
                    key: "opportunityId",
                    value: i.content.data.opportunityId
                }, {
                    key: "adUnitPath",
                    value: i.content.data.adUnitPath
                }, {
                    key: "prebidBid",
                    value: i.content.data.prebidBid
                }, {
                    key: "prebidBidder",
                    value: i.content.data.prebidBidder
                }, {
                    key: "prebidWon",
                    value: i.content.data.prebidWon || i.content.data.preBidWon
                }, {
                    key: "prebidSecondBid",
                    value: i.content.data.prebidSecondBid
                }, {
                    key: "prebidSecondBidder",
                    value: i.content.data.prebidSecondBidder
                }, {
                    key: "dfpIsBackfill",
                    value: i.content.data.dfpIsBackfill
                }, {
                    key: "dfpLineItemId",
                    value: i.content.data.dfpLineItemId
                }, {
                    key: "duringGameplay",
                    value: i.content.data.duringGameplay
                }, {
                    key: "houseAdId",
                    value: i.content.data.houseAdId
                }, {
                    key: "isEmpty",
                    value: i.content.data.isEmpty
                }, {
                    key: "adDomain",
                    value: i.content.data.adDomain
                }, {
                    key: "trigger",
                    value: i.content.data.refreshType
                }, {
                    key: "number",
                    value: i.content.data.refreshNumber
                }, {
                    key: "blocked",
                    value: i.content.data.blocked
                }]);
                else if ("pokiTrackingScreenDisplayAdRequested" === i.content.event) H(i, "ad", "displayRequest", i.content.data.platformAd ? "platform" : "ingame", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adUnitPath",
                value: i.content.data.adUnitPath
            }, {
                key: "duringGameplay",
                value: i.content.data.duringGameplay
            }, {
                key: "trigger",
                value: i.content.data.refreshType
            }, {
                key: "number",
                value: i.content.data.refreshNumber
            }]);
            else if ("pokiTrackingScreenDisplayAdDestroy" !== i.content.event || i.content.data.platformAd)
                if ("pokiTrackingScreenDisplayAdDestroy" === i.content.event && i.content.data.platformAd) H(i, "platform", "destroyAd", "", [{
                    key: "opportunityId",
                    value: i.content.data.opportunityId
                }]);
                else if ("pokiTrackingScreenGameLoadingFinished" === i.content.event) H(i, "game", "loadingFinished", "", [{
                key: "time_on_page",
                value: i.content.data.now
            }, {
                key: "transferSize",
                value: i.content.data.transferSize
            }, {
                key: "trackers",
                value: i.content.data.trackers
            }, {
                key: "external_resources",
                value: i.content.data.external_resources
            }], {
                once_per_pageview: !0
            });
            else if ("pokiTrackingScreenGameplayStart" === i.content.event) {
                var d, l, c;
                H(i, "game", "play", "start", G(i.content.data), {
                    interaction: !0
                }), P(null === (d = n.page) || void 0 === d || null === (l = d.content) || void 0 === l || null === (c = l.game) || void 0 === c ? void 0 : c.id)
            } else if ("pokiTrackingScreenGameplayStop" === i.content.event) M(), H(i, "game", "play", "stop", G(i.content.data), {
                interaction: !0
            });
            else if ("pokiTrackingAdsStatusError" === i.content.event) H(i, "ad", "error", "", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "waterfall",
                value: i.content.data.waterfall
            }]);
            else if ("pokiTrackingSdkStatusFailed" === i.content.event) H(i, "ad", "failed", "", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingAdsStatusBuffering" === i.content.event) H(i, "ad", "videoBuffering", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsVideoError" === i.content.event) H(i, "ad", "videoError", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "message",
                value: i.content.data.message
            }, {
                key: "errorCode",
                value: i.content.data.errorCode
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }, {
                key: "creativeId",
                value: i.content.data.creativeId
            }, ...1 === i.content.data.waterfall ? [{
                key: "imaAdID",
                value: i.content.data.IMAAdID
            }, {
                key: "imaAdSystem",
                value: i.content.data.IMAAdSystem
            }, {
                key: "imaContentType",
                value: i.content.data.IMAContentType
            }, {
                key: "imaTitle",
                value: i.content.data.IMATitle
            }, {
                key: "imaUniversalAdIDRegistry",
                value: i.content.data.IMAUniversalAdIDRegistry
            }, {
                key: "imaUniversalAdIDValue",
                value: i.content.data.IMAUniversalAdIDValue
            }, {
                key: "imaUniversalAdIDs",
                value: i.content.data.IMAUniversalAdIDs
            }, {
                key: "imaWrapperIDs",
                value: i.content.data.IMAWrapperIDs
            }, {
                key: "hbPrebidLikelyWon",
                value: i.content.data.HBPrebidLikelyWon
            }, {
                key: "hbAdDomain",
                value: i.content.data.HBAdDomain
            }, {
                key: "hbBidder",
                value: i.content.data.HBBidder
            }, {
                key: "hbAdId",
                value: i.content.data.HBAdId
            }, {
                key: "hbCreativeId",
                value: i.content.data.HBCreativeId
            }, {
                key: "apsBidder",
                value: i.content.data.APSBidder
            }] : [], ...i.content.data.HBVastXML ? [{
                key: "hbVastXML",
                value: i.content.data.HBVastXML
            }] : []]);
            else if ("pokiTrackingAdsVideoLoaderError" === i.content.event) H(i, "ad", "videoLoaderError", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusPrebidRequested" === i.content.event) H(i, "ad", "videoPrebidRequested", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "blocked",
                value: i.content.data.blocked
            }]);
            else if ("pokiTrackingAdsStatusReady" === i.content.event) H(i, "ad", "videoReady", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusSkipped" === i.content.event) H(i, "ad", "videoSkipped", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }], {
                interaction: !0
            });
            else if ("pokiTrackingAdsVideoClicked" === i.content.event) H(i, "ad", "videoClicked", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }], {
                interaction: !0
            });
            else if ("pokiTrackingAdsStatusCompleted" === i.content.event) H(i, "ad", "videoCompleted", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusImpression" === i.content.event) H(i, "ad", "videoImpression", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "prebidBidder",
                value: i.content.data.prebidBidder
            }, {
                key: "prebidBid",
                value: i.content.data.prebidBid
            }, {
                key: "creativeId",
                value: i.content.data.creativeId
            }, {
                key: "adUnitPath",
                value: i.content.data.adUnitPath
            }, {
                key: "houseAdId",
                value: i.content.data.houseAdId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsVideoPaused" === i.content.event) H(i, "ad", "videoPaused", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusRequested" === i.content.event) H(i, "ad", "videoRequest", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingAdsVideoResumed" === i.content.event) H(i, "ad", "videoResumed", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusStarted" === i.content.event) H(i, "ad", "videoStarted", N(i), [{
                key: "waterfall",
                value: i.content.data.waterfall
            }, {
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "duration",
                value: i.content.data.duration
            }, {
                key: "skip",
                value: i.content.data.skip
            }, {
                key: "prebidBidder",
                value: i.content.data.prebidBidder
            }, {
                key: "prebidBid",
                value: i.content.data.prebidBid
            }, {
                key: "creativeId",
                value: i.content.data.creativeId
            }, {
                key: "adUnitPath",
                value: i.content.data.adUnitPath
            }, {
                key: "houseAdId",
                value: i.content.data.houseAdId
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingRewardedWebRequest" === i.content.event) H(i, "ad", "rewardedWeb", "request", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebReady" === i.content.event) H(i, "ad", "rewardedWeb", "ready", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebImpression" === i.content.event) H(i, "ad", "rewardedWeb", "impression", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "adUnitPath",
                value: i.content.data.adUnitPath
            }, {
                key: "bid",
                value: i.content.data.bid
            }, {
                key: "bidder",
                value: i.content.data.bidder
            }, {
                key: "prebidBidder",
                value: i.content.data.prebidBidder
            }, {
                key: "prebidWon",
                value: i.content.data.prebidWon || i.content.data.preBidWon
            }, {
                key: "adDomain",
                value: i.content.data.adDomain
            }]);
            else if ("pokiTrackingRewardedWebClosedGranted" === i.content.event) H(i, "ad", "rewardedWeb", "closedGranted", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebClosedDeclined" === i.content.event || "pokiTrackingRewardedWebclosedDeclined" === i.content.event) H(i, "ad", "rewardedWeb", "closedDeclined", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebEmpty" === i.content.event) H(i, "ad", "rewardedWeb", "empty", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingScreenFirstRound" === i.content.event) {
                var s, p, u, v, y, g;
                const e = _();
                if (H(i, "game", "play", "first", [{
                        key: "hasGoogleConsent",
                        value: e
                    }], {
                        interaction: !0,
                        once_per_pageview: !0
                    }), P(null === (s = n.page) || void 0 === s || null === (p = s.content) || void 0 === p || null === (u = p.game) || void 0 === u ? void 0 : u.id), "GB" === n.geo) return;
                const t = null === (v = n.page) || void 0 === v || null === (y = v.content) || void 0 === y || null === (g = y.game) || void 0 === g ? void 0 : g.id;
                let a = !1;
                if (window.api && window.api.getAdblock && (a = window.api.getAdblock()), h()) {
                    B();
                    let e = "desktop";
                    T() ? e = "mobile" : A() && (e = "tablet"), window.uetq.push("event", "game-play-first", {
                        event_category: e,
                        event_label: t,
                        event_value: a ? 1 : 0
                    }), a || window.uetq.push("event", "", {
                        ecomm_prodid: t,
                        ecomm_pagetype: "product"
                    })
                }
                e && (L = n.user.id, q = n.page.id, I(), window.gtag("event", "page_view", {
                    send_to: b,
                    user_id: L,
                    value: 0,
                    items: [{
                        id: q,
                        google_business_vertical: "custom"
                    }]
                }), D("KzjDCPH3l6IBEJHrg8sD"), D("YAozCMbHmZQDEJHrg8sD"), T() ? (D("GcnkCL2-mZQDEJHrg8sD"), D("yoVJCODb6pMDEJHrg8sD")) : A() ? (D("LpAFCNHG6pMDEJHrg8sD"), D("NC5BCKnU6pMDEJHrg8sD")) : (D("tmXGCPitoJQDEJHrg8sD"), D("vjKvCO35q4cDEJHrg8sD"), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? D("AT-CCLLI3qQBEJHrg8sD") : D("XuGfCNXE3qQBEJHrg8sD")))
            } else if ("pokiTrackingScreenCommercialBreak" === i.content.event) H(i, "game", "commercialBreak", "", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("pokiTrackingScreenRewardedBreak" === i.content.event) H(i, "game", "rewardedBreak", "", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "category",
                value: i.content.data.category
            }, {
                key: "details",
                value: i.content.data.details
            }, {
                key: "placement",
                value: i.content.data.placement
            }, {
                key: "from",
                value: i.content.data.from
            }].filter(e => void 0 !== e.value), {
                interaction: !0
            });
            else if ("SaveGameMigrator" === i.type && "error" === i.content.event) H(i, "game", "saveGameMigrator", "error", [{
                key: "error",
                value: i.content.error
            }]);
            else if ("SaveGameMigrator" === i.type && "start" === i.content.event) H(i, "game", "saveGameMigrator", "start");
            else if ("SaveGameMigrator" === i.type && "timeout" === i.content.event) H(i, "game", "saveGameMigrator", "timeout");
            else if ("pokiTrackingSdkStatusInitialized" === i.content.event) H(i, "game", "sdkInitialized", "", [], {
                once_per_pageview: !0
            });
            else if ("pokiTrackingScreenDisplayAdRequest" !== i.content.event || i.content.data.platformAd)
                if ("pokiTrackingScreenDisplayAdRequest" === i.content.event && i.content.data.platformAd) H(i, "platform", "displayAd", "", [{
                    key: "opportunityId",
                    value: i.content.data.opportunityId
                }, {
                    key: "size",
                    value: i.content.data.size
                }]);
                else if ("pokiTrackingCustom" === i.content.event) H(i, i.content.data.category || i.content.data.eventNoun, i.content.data.action || i.content.data.eventVerb, "", G(i.content.data.eventData || {}));
            else if ("pokiTrackingMeasure" === i.content.event) {
                const {
                    user: t,
                    session: a
                } = n, o = { ...i.content.data,
                    user_id: t.id,
                    pageview_id: a.page.pageview_id
                };
                e("https://t.poki.io/game-event", JSON.stringify(o))
            } else "pokiTrackingScreenPlayerActive" === i.content.event ? H(i, "game", "playerActive", "", [], {
                interaction: !0
            }) : "pokiTrackingPlaytestShowModal" === i.content.event ? H(i, "playtest", "showModal", "", [{
                key: "show",
                value: i.content.data.show
            }]) : "pokiTrackingPlaytestAccepted" === i.content.event ? H(i, "playtest", "accepted", "", [], {
                interaction: !0
            }) : "pokiTrackingPlaytestRejected" === i.content.event ? H(i, "playtest", "rejected", "", [], {
                interaction: !0
            }) : "pokiTrackingPlaytestNoCanvas" === i.content.event ? H(i, "playtest", "noCanvas", "", []) : "pokiTrackingPlaytestStarting" === i.content.event ? H(i, "playtest", "starting", "", []) : "pokiTrackingPlaytestConnected" === i.content.event ? H(i, "playtest", "connected", "", [{
                key: "peer",
                value: i.content.data.peer
            }, {
                key: "playtest_id",
                value: i.content.data.playtest_id
            }]) : "pokiTrackingPlaytestClosed" === i.content.event ? H(i, "playtest", "closed", "", [{
                key: "reason",
                value: i.content.data.reason
            }]) : "pokiTrackingPlaytestError" === i.content.event ? H(i, "playtest", "error", "", [{
                key: "message",
                value: i.content.data.message
            }]) : "pokiTrackingScreenisAdBlockFunctionCall" === i.content.event && H(i, "game", "isAdBlockedCalled", "", []);
            else H(i, "game", "displayAd", "", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }, {
                key: "size",
                value: i.content.data.size
            }]);
            else H(i, "game", "destroyAd", "ingame", [{
                key: "opportunityId",
                value: i.content.data.opportunityId
            }]);
            else if ("adslot-renderEnded" === o) H(i, "ad", "displayImpression", "platform", [{
                key: "trigger",
                value: i.refreshType
            }, {
                key: "adUnitPath",
                value: i.adUnitPath
            }, {
                key: "number",
                value: i.refreshNumber
            }, {
                key: "opportunityId",
                value: i.opportunityId
            }, {
                key: "prebidBid",
                value: i.prebidBid
            }, {
                key: "prebidBidder",
                value: i.prebidBidder
            }, {
                key: "prebidWon",
                value: i.prebidWon || i.preBidWon
            }, {
                key: "prebidSecondBid",
                value: i.prebidSecondBid
            }, {
                key: "prebidSecondBidder",
                value: i.prebidSecondBidder
            }, {
                key: "dfpIsBackfill",
                value: i.dfpIsBackfill
            }, {
                key: "dfpLineItemId",
                value: i.dfpLineItemId
            }, {
                key: "houseAdId",
                value: i.houseAdId
            }, {
                key: "isEmpty",
                value: i.isEmpty
            }, {
                key: "adDomain",
                value: i.adDomain
            }]);
            else if ("ads-adblocked" === o) H(i, "ad", "adblocked", "platform", [{
                key: "playground",
                value: i.playground
            }, {
                key: "sdk",
                value: i.sdk
            }]);
            else if ("ads-notFound" === o) H(i, "ad", "notFound", "platform", [{
                key: "event",
                value: i.event
            }, {
                key: "code",
                value: i.code
            }, {
                key: "refreshType",
                value: i.refreshType
            }]);
            else if ("ads-render" === o) H(i, "ad", "displayRequest", "platform", [{
                key: "trigger",
                value: i.refreshType
            }, {
                key: "adUnitPath",
                value: i.adUnitPath
            }, {
                key: "number",
                value: i.refreshNumber
            }, {
                key: "opportunityId",
                value: i.opportunityId
            }]);
            else if ("housead-click" === o) H(i, "ad", "houseAdClick", "platform", [{
                key: "houseAdId",
                value: i.houseAdId
            }]);
            else if ("consent-full" === o) w(!0), S(!0), H(i, "consent", "full"),
                function(e) {
                    if ("GB" !== e.geo) {
                        window._comscore = window._comscore || [], window._comscore.push({
                            c1: "2",
                            c2: "20061681"
                        });
                        var t = document.createElement("script");
                        t.src = "https://sb.scorecardresearch.com/cs/20061681/beacon.js";
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(t, a)
                    }
                }(n);
            else if ("consent-no" === o) w(!1), S(!1), H(i, "consent", "no");
            else if ("consent-noniab" === o) {
                const {
                    nonIABConsents: e
                } = i;
                H(i, "consent", "noniab", "", [{
                    key: "consents",
                    value: JSON.stringify(e)
                }])
            } else if ("consent-npa" === o) H(i, "consent", "npa");
            else if ("consent-unknown" === o) H(i, "consent", "unknown");
            else if ("consent-bootError" === o) H(i, "consent", "bootError");
            else if (o.startsWith("rating-")) H(i, "game", "rating", o.substr(13).toLowerCase(), [{
                key: "previous_vote",
                value: i.previousVote
            }], {
                interaction: !0
            });
            else if ("sdk-details" === o) H(i, "game", "sdkDetails", "", [{
                key: "version",
                value: i.version
            }], {
                once_per_pageview: !0
            });
            else if ("react-prehydrate" === o) {
                const e = [{
                    key: "bot.verified",
                    value: window.pokiBotVerified
                }, {
                    key: "bot.score",
                    value: window.pokiBotScore
                }];
                void 0 !== i.isIPad && e.push({
                    key: "isIPad",
                    value: i.isIPad
                });
                const t = () => {
                    H(i, "page", "reactPrehydrate", n.page.type, e)
                };
                try {
                    navigator.cookieDeprecationLabel.getValue().then(t => {
                        t && e.push({
                            key: "cookieDeprecationLabel",
                            value: t
                        })
                    }).finally(() => {
                        t()
                    })
                } catch (e) {
                    t()
                }
            } else if ("tile-click" === o) i.searchExpanded ? H(i, "search", "tileClick", n.page.type, [{
                key: "id",
                value: i.id
            }, {
                key: "type",
                value: i.type
            }, {
                key: "index",
                value: i.index
            }, {
                key: "path",
                value: i.path
            }, {
                key: "list",
                value: i.list
            }, {
                key: "terms",
                value: i.terms
            }, {
                key: "searchSessionId",
                value: i.searchSessionId
            }, {
                key: "panelSection",
                value: i.panelSection
            }], {
                interaction: !0
            }) : H(i, "page", "tileClick", n.page.type, [{
                key: "id",
                value: i.id
            }, {
                key: "type",
                value: i.type
            }, {
                key: "index",
                value: i.index
            }, {
                key: "path",
                value: i.path
            }, {
                key: "list",
                value: i.list
            }, {
                key: "thumbnail",
                value: i.image
            }], {
                interaction: !0
            });
            else if ("pubHost-initialized" === o) {
                var k, m;
                H(i, "pubhost", "initialized", "", [{
                    key: "topOrigin",
                    value: i.topOrigin
                }, {
                    key: "bot.verified",
                    value: null === (k = i.bot) || void 0 === k ? void 0 : k.verified
                }, {
                    key: "bot.score",
                    value: null === (m = i.bot) || void 0 === m ? void 0 : m.score
                }])
            } else if ("page-pulse" === o) {
                M(), P();
                const e = Math.floor((Date.now() - n.session.page.start) / 1e3),
                    t = function(e) {
                        return R(e)
                    }(e),
                    a = function(e) {
                        return R(e - 30)
                    }(e);
                if ((30 === t && a < 30 || 60 === t && a < 60 || 120 === t && a < 120 || 300 === t && a < 300 || 600 === t && a < 600 || 1200 === t && a < 1200 || 1800 === t && a < 1800) && H(i, "page", "timeSpent", "".concat(t, "s")), "GB" === n.geo) return;
                if (e >= 300 && e < 330) {
                    if (h() && "game" === n.page.type) {
                        var f, C, E;
                        B();
                        const e = null === (f = n.page) || void 0 === f || null === (C = f.content) || void 0 === C || null === (E = C.game) || void 0 === E ? void 0 : E.id;
                        let t = !1;
                        window.api && window.api.getAdblock && (t = window.api.getAdblock());
                        let a = "desktop";
                        T() ? a = "mobile" : A() && (a = "tablet"), window.uetq.push("event", "page_timeSpent-300", {
                            event_category: a,
                            event_label: e,
                            event_value: t ? 1 : 0
                        })
                    }
                    "game" === n.page.type && _() && (D("2IEyCPmFmZQDEJHrg8sD"), T() ? D("AYEACNah6pMDEJHrg8sD") : A() ? D("y05mCNeWmZQDEJHrg8sD") : D("lsPJCLbOqYEBEJHrg8sD"))
                } else e >= 900 && e < 930 && "game" === n.page.type && _() && (T() ? D("t5VrCLXIlMkBEJHrg8sD") : A() ? D("WUfoCMSC5LkBEJHrg8sD") : D("Gh96CL-84MkBEJHrg8sD"))
            } else if ("appStoreButton-click" === o) H(i, "game", "appstoreClick", i.store, [], {
                interaction: !0
            });
            else if ("home-click" === o) H(i, "home", "click", n.page.type, [], {
                interaction: !0
            });
            else if ("logo-click" === o) H(i, "logo", "click", n.page.type, [], {
                interaction: !0
            });
            else if ("fullscreenButton-click" === o) H(i, "fullscreenButton", "click", "", [{
                key: "targetState",
                value: i.targetState
            }], {
                interaction: !0
            });
            else if ("page-pillClick" === o) H(i, "page", "pillClick", "", [], {
                interaction: !0
            });
            else if ("page-pillDrag" === o) H(i, "page", "pillDrag", "", [{
                key: "x",
                value: i.x
            }, {
                key: "y",
                value: i.y
            }], {
                interaction: !0
            });
            else if ("page-autoRedirectClick" === o) H(i, "page", "autoRedirect", "click", [], {
                interaction: !0
            });
            else if ("searchPanel-close" === o) H(i, "searchPanel", "close", n.page.type, [{
                key: "searchSessionId",
                value: i.searchSessionId
            }], {
                interaction: !0
            });
            else if ("searchPanel-open" === o) H(i, "searchPanel", "open", n.page.type, [{
                key: "searchSessionId",
                value: i.searchSessionId
            }], {
                interaction: !0
            });
            else if ("game-launch" === o) H(i, "game", "launch", "", [], {
                interaction: !0
            });
            else if ("page-view" !== o && "pageview" !== o || 0 === i.counter) {
                const {
                    category: e,
                    action: t,
                    options: o
                } = a;
                let {
                    label: r
                } = a;
                null != o && o.pageTypeAsLabel && (r = n.page.type), H(i, e, t, r, G(i), o)
            } else H(i, "pageview", "", "", [], {
                    interaction: !0
                }), M(),
                function(e, t) {
                    const a = new URLSearchParams(t).get(e);
                    return null === a ? "" : a
                }("gclid", window.location.search) && r(e => {
                    e.gclid = !0
                })
        } catch (e) {
            t(e, "gtm")
        }
        var L, q
    }
    const x = window;
    x._pokiTrackerGlobalName = x._pokiTrackerGlobalName || "tracker", x[x._pokiTrackerGlobalName] = x[x._pokiTrackerGlobalName] || [];
    const W = x[x._pokiTrackerGlobalName];
    for (W.uniqueEvents = {}, W.firstPageview = !0, W.installTCFHandler = g, W.push = function(e, a, n, o, i, r) {
            return d => {
                if ("function" != typeof d) try {
                    var l, c;
                    if (d.version = 7, !d.category) return;
                    if (d.once_per_pageview) {
                        const e = "".concat(d.category, "-").concat(d.action || "", "-").concat(d.label || "");
                        if (a.uniqueEvents[e]) return;
                        a.uniqueEvents[e] = !0
                    }
                    if (delete d.once_per_pageview, "pageview" === d.category && (a.uniqueEvents = {}, d.query_params = e.location.search.substr(1), d.hash = e.location.hash.substr(1)), void 0 !== d.action && null !== d.action && (d.action = d.action.toString()), "" === d.action && delete d.action, void 0 !== d.label && null !== d.label && (d.label = d.label.toString()), "" === d.label && delete d.label, Array.isArray(d.data))
                        for (let e = 0; e < d.data.length; e++) void 0 !== d.data[e].value && null !== d.data[e].value && (d.data[e].value = d.data[e].value.toString());
                    else delete d.data;
                    if (d.cpus = e.navigator.hardwareConcurrency || 0, d.domain = e.location.hostname, d.protocol = e.location.protocol.substr(0, e.location.protocol.length - 1), d.scroll_y = e.scrollY, d.timezone = (new Date).getTimezoneOffset(), d.timestamp = Date.now(), d.tcf_purpose_consents = r(), e.navigator.connection && e.navigator.connection.effectiveType && (d.connection_type = e.navigator.connection.effectiveType), d.user && (d.user.language = e.navigator.language), d.screen_resolution = e.screen.width + "x" + e.screen.height, d.screen_orientation = null === (l = e.screen) || void 0 === l || null === (c = l.orientation) || void 0 === c ? void 0 : c.type, d.browser_size = i.size, "pageview" === d.category && a.firstPageview && e.performance && e.performance.getEntriesByType) try {
                        const t = e.performance.getEntriesByType("navigation");
                        if (t.length > 0) {
                            const e = t[0];
                            d.nav = {
                                connect: Math.round(e.connectEnd - e.connectStart),
                                dns: Math.round(e.domainLookupEnd - e.domainLookupStart),
                                dom_complete: Math.round(e.domComplete),
                                first_byte: Math.round(e.responseStart - e.requestStart),
                                last_byte: Math.round(e.responseEnd - e.requestStart),
                                transfer_size: e.transferSize
                            }
                        }
                    } catch (e) {}
                    d.insert_id = o(), d = function e(t) {
                        return Object.keys(t).forEach(a => {
                            if (!k[a]) return console.error("unknown field ".concat(a)), void delete t[a];
                            if (Array.isArray(t[a])) {
                                if (0 === t[a].length) return void delete t[a];
                                for (let n = 0; n < t[a].length; n++) t[a][n] = e(t[a][n])
                            } else {
                                if (null === t[a] || void 0 === t[a]) return void delete t[a];
                                "object" == typeof t[a] && e(t[a])
                            }
                            const n = k[a];
                            a !== n && (t[n] = t[a], delete t[a])
                        }), t
                    }(d), n("https://t.poki.io/t", JSON.stringify(d)), "pageview" === d.category && (a.firstPageview = !1)
                } catch (e) {
                    t(e, "push")
                } else d()
            }
        }(x, W, e, (function() {
            for (var e = Math.floor(Date.now() / 1e3), t = "", a = 0; a < 4; a++) t = String.fromCharCode(255 & e) + t, e >>= 8;
            if (window.crypto && crypto.getRandomValues && Uint32Array) {
                var n = new Uint32Array(12);
                crypto.getRandomValues(n);
                for (var o = 0; o < 12; o++) t += String.fromCharCode(255 & n[o])
            } else
                for (var i = 0; i < 12; i++) t += String.fromCharCode(Math.floor(256 * Math.random()));
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }), d, (function() {
            return u
        })); W.length > 0;) W.push(W.shift());
    ! function() {
        for (window.pokiGTM = window.pokiGTM || [], window.pokiGTM.push = q, window.pokiGTM.push({
                event: "pageview",
                eventData: {}
            }); window.pokiGTM.length > 0;) window.pokiGTM.push(window.pokiGTM.shift())
    }()
}();