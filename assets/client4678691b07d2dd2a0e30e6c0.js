"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4678], {
        4678: (e, t, n) => {
            function r(e) {
                return new Promise(((t, n) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
                }))
            }

            function o(e, t) {
                const n = indexedDB.open(e);
                n.onupgradeneeded = () => n.result.createObjectStore(t);
                const o = r(n);
                return (e, n) => o.then((r => n(r.transaction(t, e).objectStore(t))))
            }
            let s;

            function u() {
                return s || (s = o("keyval-store", "keyval")), s
            }

            function c(e, t, n = u()) {
                return n("readwrite", (n => (n.put(t, e), r(n.transaction))))
            }

            function i(e, t = u()) {
                return t("readwrite", (t => (t.delete(e), r(t.transaction))))
            }

            function l(e = u()) {
                return e("readwrite", (e => (e.clear(), r(e.transaction))))
            }

            function a(e, t) {
                return e.openCursor().onsuccess = function() {
                    this.result && (t(this.result), this.result.continue())
                }, r(e.transaction)
            }

            function d(e = u()) {
                return e("readonly", (t => {
                    if (t.getAll && t.getAllKeys) return Promise.all([r(t.getAllKeys()), r(t.getAll())]).then((([e, t]) => e.map(((e, n) => [e, t[n]]))));
                    const n = [];
                    return e("readonly", (e => a(e, (e => n.push([e.key, e.value]))).then((() => n))))
                }))
            }
            n.d(t, {
                IV: () => i,
                MT: () => o,
                ZH: () => l,
                qh: () => d,
                t8: () => c
            })
        }
    }
]);