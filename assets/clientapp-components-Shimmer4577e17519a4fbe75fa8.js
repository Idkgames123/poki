"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1291], {
        3276: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => o
            });
            var s = l(8661),
                a = l(512),
                r = l(9453);

            function o(e) {
                let {
                    sourcePicture: t,
                    destinationPicture: l
                } = e;
                return s.default.createElement("div", {
                    className: r.shimmer
                }, s.default.createElement("figure", {
                    className: r.shimmer__img
                }, t), s.default.createElement("figure", {
                    className: (0, a.Z)(r.shimmer__img, r.shimmer__img_dest)
                }, l), s.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    height: "100%",
                    className: r.shimmer__svg
                }, s.default.createElement("defs", null, s.default.createElement("linearGradient", {
                    id: "lgrad",
                    x1: "0%",
                    y1: "100%",
                    x2: "100%",
                    y2: "0%"
                }, s.default.createElement("stop", {
                    offset: "0%",
                    style: {
                        "stop-color": "rgb(255, 255, 255)",
                        "stop-opacity": 0
                    }
                }), s.default.createElement("stop", {
                    offset: "25%",
                    style: {
                        "stop-color": "rgb(255, 255, 255)",
                        "stop-opacity": 0
                    }
                }), s.default.createElement("stop", {
                    offset: "50%",
                    style: {
                        "stop-color": "rgb(255, 255, 255)",
                        "stop-opacity": 1
                    }
                }), s.default.createElement("stop", {
                    offset: "75%",
                    style: {
                        "stop-color": "rgb(255, 255, 255)",
                        "stop-opacity": 0
                    }
                }), s.default.createElement("stop", {
                    offset: "100%",
                    style: {
                        "stop-color": "rgb(238, 130, 238)",
                        "stop-opacity": 0
                    }
                }))), s.default.createElement("rect", {
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%",
                    fill: "url(#lgrad)"
                })))
            }
        }
    }
]);