// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xTx8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9b27c8504684b93a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"e4QD4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _event1Png = require("./img/gimp/event1.png");
var _event1PngDefault = parcelHelpers.interopDefault(_event1Png);
var _event2Png = require("./img/gimp/event2.png");
var _event2PngDefault = parcelHelpers.interopDefault(_event2Png);
var _event3Png = require("./img/gimp/event3.png");
var _event3PngDefault = parcelHelpers.interopDefault(_event3Png);
var _event4Png = require("./img/gimp/event4.png");
var _event4PngDefault = parcelHelpers.interopDefault(_event4Png);
var _event5Png = require("./img/gimp/event5.png");
var _event5PngDefault = parcelHelpers.interopDefault(_event5Png);
var _event6Png = require("./img/gimp/event6.png");
var _event6PngDefault = parcelHelpers.interopDefault(_event6Png);
var _event7Png = require("./img/gimp/event7.png");
var _event7PngDefault = parcelHelpers.interopDefault(_event7Png);
var _event8Png = require("./img/gimp/event8.png");
var _event8PngDefault = parcelHelpers.interopDefault(_event8Png);
var _event9Png = require("./img/gimp/event9.png");
var _event9PngDefault = parcelHelpers.interopDefault(_event9Png);
var _event10Png = require("./img/gimp/event10.png");
var _event10PngDefault = parcelHelpers.interopDefault(_event10Png);
var _event11Png = require("./img/gimp/event11.png");
var _event11PngDefault = parcelHelpers.interopDefault(_event11Png);
var _event12Png = require("./img/gimp/event12.png");
var _event12PngDefault = parcelHelpers.interopDefault(_event12Png);
var _event13Png = require("./img/gimp/event13.png");
var _event13PngDefault = parcelHelpers.interopDefault(_event13Png);
var _event14Png = require("./img/gimp/event14.png");
var _event14PngDefault = parcelHelpers.interopDefault(_event14Png);
var _event15Png = require("./img/gimp/event15.png");
var _event15PngDefault = parcelHelpers.interopDefault(_event15Png);
var _event16Png = require("./img/gimp/event16.png");
var _event16PngDefault = parcelHelpers.interopDefault(_event16Png);
var _event17Png = require("./img/gimp/event17.png");
var _event17PngDefault = parcelHelpers.interopDefault(_event17Png);
var _event18Png = require("./img/gimp/event18.png");
var _event18PngDefault = parcelHelpers.interopDefault(_event18Png);
var _event19Png = require("./img/gimp/event19.png");
var _event19PngDefault = parcelHelpers.interopDefault(_event19Png);
var _event20Png = require("./img/gimp/event20.png");
var _event20PngDefault = parcelHelpers.interopDefault(_event20Png);
// menu
const game = document.querySelector(`.game`);
const menu = document.querySelector(`.menu-main`);
let img;
// wybór postaci
let img1 = document.querySelector(`.char-img-1`);
let img2 = document.querySelector(`.char-img-2`);
let img3 = document.querySelector(`.char-img-3`);
let img4 = document.querySelector(`.char-img-4`);
let img5 = document.querySelector(`.char-img-5`);
let charSelectedData;
setTimeout(()=>{
    let charSelected = document.querySelector(`.menu-main`);
    charSelectedData = charSelected.addEventListener(`click`, (e)=>{
        // console.log(e.target.id);
        img1.style.backgroundColor = "rgb(218, 197, 131)";
        img2.style.backgroundColor = "rgb(218, 197, 131)";
        img3.style.backgroundColor = "rgb(218, 197, 131)";
        img4.style.backgroundColor = "rgb(218, 197, 131)";
        img5.style.backgroundColor = "rgb(218, 197, 131)";
        img = document.getElementById(e.target.id);
        img.style.backgroundColor = "rgb(253, 234, 173)";
    });
}, 10);
let character = document.querySelector(`.character`);
function setCharacter() {
    console.log(img.src);
    console.log(img.id);
    character.style.backgroundImage = `url(${img.src})`;
}
// start
let startButton = document.querySelector(`.start-btn`);
startButton.addEventListener(`click`, ()=>{
    menu.style.display = "none";
    game.style.display = "flex";
    game.style.opacity = "90%";
    const buttons = document.getElementsByTagName(`button`);
    const arrowButton = document.querySelector(`.arrow-button`);
    const leftContainer = document.querySelector(`.left-container`);
    const rightContainer = document.querySelector(`.right-container`);
    for (const button of buttons)button.style.display = "none";
    arrowButton.style.display = "block";
    arrowButton.classList.add(`animation`);
    leftContainer.style.display = "none";
    rightContainer.style.display = "none";
    highlightRound();
    setCharacter();
});
// postawienie pionka
let setCharacterOnBtn11 = document.querySelector(".arrow-button");
setCharacterOnBtn11.addEventListener(`click`, ()=>{
    game.style.opacity = "100%";
    const buttons = document.getElementsByTagName(`button`);
    const leftContainer = document.querySelector(`.left-container`);
    const rightContainer = document.querySelector(`.right-container`);
    const clickStartHex = document.querySelector(`.click-start-hex`);
    const char = document.querySelector(`.character`);
    const arrowButton = document.querySelector(`.arrow-button`);
    const boardBg = document.querySelector(`.board-bg`);
    for (const button of buttons)button.style.display = "block";
    leftContainer.style.display = "flex";
    rightContainer.style.display = "flex";
    clickStartHex.style.display = "none";
    char.style.display = "block";
    arrowButton.classList.remove(`animation`);
    boardBg.style.display = "none";
});
// zmienne do miejsc specjalnych
let caveUsed = false;
let oasisUsed = false;
// itemy
let axe = 0;
let sword = 0;
let shoes = 0;
let coat = 0;
let torch = 0;
let sejmitar = 0;
let frozenCrown = 0;
let securis = 0;
// surowce
let stone = 0;
let grass = 0;
let flint = 0;
let wood = 0;
let lotos = 0;
// statystyki
let life = 20;
let energy = 10;
let starvation = 10;
let sanity = 10;
let temperature = 5;
let lifeView = document.querySelector(`.life-bar`);
let lifeValue = document.querySelector(`.life-value`);
let energyView = document.querySelector(`.energy-bar`);
let energyValue = document.querySelector(`.energy-value`);
let starvationView = document.querySelector(`.starvation-bar`);
let starvationValue = document.querySelector(`.starvation-value`);
let sanityView = document.querySelector(`.sanity-bar`);
let sanityValue = document.querySelector(`.sanity-value`);
let temperatureView = document.querySelector(`.temperature-bar`);
let temperatureValue = document.querySelector(`.temperature-value`);
let prevLife = 10;
let prevEnergy = 10;
let prevStarvation = 10;
let prevSanity = 10;
let prevTemperature = 5;
lifeChange();
energyChange();
starvationChange();
sanityChange();
temperatureChange();
function lifeChange() {
    setTimeout(function() {
        const lifeChangeSpan = document.querySelector(`.life-notification`);
        lifeChangeSpan.style.display = `flex`;
        if (prevLife > life) lifeChangeSpan.innerHTML = `<p>Życie -${prevLife - life}`;
        else if (prevLife < life) lifeChangeSpan.innerHTML = `<p>Życie +${life - prevLife}`;
        setTimeout(function() {
            lifeChangeSpan.style.display = `none`;
        }, 800);
        prevLife = life;
    }, 100);
    lifeView.style.height = life * 5 + "%";
    lifeValue.innerHTML = `${life}/20`;
    if (life < 1) gameOver();
}
function energyChange() {
    setTimeout(function() {
        const energyChangeSpan = document.querySelector(`.energy-notification`);
        energyChangeSpan.style.display = `flex`;
        if (prevEnergy > energy) energyChangeSpan.innerHTML = `<p>Energia -${prevEnergy - energy}`;
        else if (prevEnergy < energy) energyChangeSpan.innerHTML = `<p>Energia +${energy - prevEnergy}`;
        setTimeout(function() {
            energyChangeSpan.style.display = `none`;
        }, 800);
        prevEnergy = energy;
    }, 100);
    energyView.style.height = energy * 10 + "%";
    energyValue.innerHTML = `${energy}/10`;
}
function starvationChange() {
    setTimeout(function() {
        const starvationChangeSpan = document.querySelector(`.starvation-notification`);
        starvationChangeSpan.style.display = `flex`;
        if (prevStarvation > starvation) starvationChangeSpan.innerHTML = `<p>Głód -${prevStarvation - starvation}`;
        else if (prevStarvation < starvation) starvationChangeSpan.innerHTML = `<p>Głód +${starvation - prevStarvation}`;
        setTimeout(function() {
            starvationChangeSpan.style.display = `none`;
        }, 800);
        prevStarvation = starvation;
    }, 100);
    starvationView.style.height = starvation * 10 + "%";
    starvationValue.innerHTML = `${starvation}/10`;
}
function sanityChange() {
    setTimeout(function() {
        const sanityChangeSpan = document.querySelector(`.sanity-notification`);
        sanityChangeSpan.style.display = `flex`;
        if (prevSanity > sanity) sanityChangeSpan.innerHTML = `<p>Psychika -${prevSanity - sanity}`;
        else if (prevSanity < sanity) sanityChangeSpan.innerHTML = `<p>Psychika +${sanity - prevSanity}`;
        setTimeout(function() {
            sanityChangeSpan.style.display = `none`;
        }, 800);
        prevSanity = sanity;
    }, 100);
    sanityView.style.height = sanity * 10 + "%";
    sanityValue.innerHTML = `${sanity}/10`;
}
function temperatureChange() {
    setTimeout(function() {
        const temperatureChangeSpan = document.querySelector(`.temperature-notification`);
        temperatureChangeSpan.style.display = `flex`;
        if (prevTemperature > temperature) temperatureChangeSpan.innerHTML = `<p>Temperatura -${prevTemperature - temperature}`;
        else if (prevTemperature < temperature) temperatureChangeSpan.innerHTML = `<p>Temperatura +${temperature - prevTemperature}`;
        setTimeout(function() {
            temperatureChangeSpan.style.display = `none`;
        }, 800);
        prevTemperature = temperature;
    }, 100);
    temperatureView.style.height = temperature * 10 + "%";
    temperatureValue.innerHTML = `${temperature}/10`;
}
// buttony w lewym containerze
const btnEatOneGrass = document.querySelector(`#btn-eat-1-grass`);
const btnEatTwoGrass = document.querySelector(`#btn-eat-2-grass`);
const btnEatFood = document.querySelector(`#btn-eat-food`);
const btnDrinkRedBull = document.querySelector(`#btn-drink-red-bull`);
const btnEatSasuage = document.querySelector(`#btn-eat-sasuage`);
btnEatOneGrass.disabled = true;
btnEatTwoGrass.disabled = true;
btnEatFood.disabled = true;
btnDrinkRedBull.disabled = true;
btnEatSasuage.disabled = true;
let fireCard = 0;
let eventArrayCount;
let gnomActive = false;
let gnomKilled = false;
let gnom = 0;
let addStatsAfterKillGnom = 0;
let winWithGnomeToAddFireCard = 0;
let mistOn = false;
let hiena = 0;
let frozenGolemActive = false;
let orangutan = 0;
let fight = 0;
// ruch gracza
let btnId;
let destinationHex = undefined;
let previousDestinationHex;
// współrzędne
let xDistance;
let yDistance;
let previousXDistance;
let previousYDistance;
let xCharDistance;
let yCharDistance;
let distance;
// 2
let btnId2;
let destinationHex2;
let previousDestinationHex2;
// współrzędne 2
let xDistance2;
let yDistance2;
let xCharDistance2;
let yCharDistance2;
let distance2 = 0;
let cantMove = false;
let biomData;
const charNotification = document.querySelector(`.char-notification`);
// sprawdzenie odległości:
let useHexButtonClicked = false;
let hexClicked2 = document.querySelector(`.game-board`);
let clickedId2 = hexClicked2.addEventListener(`click`, function(e) {
    if (energy > 0) {
        let btnValue = e.target.value;
        if (e.target.id !== undefined) {
            btnId2 = e.target.id;
            biomData = document.getElementById(btnId2);
            console.log(" ");
            checkDistance();
            function checkDistance() {
                if (btnValue !== undefined) {
                    destinationHex2 = document.getElementById(`${btnId2}`);
                    xDistance2 = destinationHex2.offsetLeft;
                    yDistance2 = destinationHex2.offsetTop;
                    console.log("Kliknięto: " + xDistance2, yDistance2);
                    if (previousXDistance == undefined && previousYDistance == undefined) {
                        previousXDistance = xDistance2;
                        previousYDistance = yDistance2;
                    }
                    xCharDistance2 = previousXDistance - xDistance2;
                    yCharDistance2 = previousYDistance - yDistance2;
                    distance2 = Math.sqrt(Math.pow(xCharDistance2, 2) + Math.pow(yCharDistance2, 2));
                    if (distance2 > 60) {
                        let charAnim = document.querySelector(`.character`);
                        charAnim.classList.add(`character-animation`);
                        setTimeout(function() {
                            charAnim.classList.remove(`character-animation`);
                        }, 600);
                        // komunikat postaci
                        charNotification.classList.add(`char-notification-padding`);
                        charNotification.style.fontSize = `35px`;
                        charNotification.innerHTML = `<p>Za daleko!</p>`;
                        setTimeout(function() {
                            charNotification.style.fontSize = `0px`;
                            charNotification.classList.remove(`char-notification-padding`);
                        }, 900);
                    }
                // przypisanie poprzednich współrzędnych
                // console.log(distance2);
                // if (distance2 < 60) {
                // 	previousDestinationHex2 = destinationHex2;
                // 	previousXDistance2 = previousDestinationHex2.offsetLeft;
                // 	previousYDistance2 = previousDestinationHex2.offsetTop;
                // }
                }
            }
        }
    }
});
// ustalanie pozycji na hexie
let hexClicked = document.querySelector(`.game-board`);
let clickedId = hexClicked.addEventListener(`click`, function(e) {
    // if (mistOn == false) {
    // 	checkSpecialEnergyBurn();
    // } else
    if (mistOn == true) checkSpecialEnergyBurnMist();
    console.log("Use Hex Button Clicked: " + useHexButtonClicked);
    if (useHexButtonClicked == false) {
        if (energy > 0 && cantMove == false) {
            let btnValue = e.target.value;
            // wykonaj ruch jeśli wszystko w porządku
            // console.log(e.target.id);
            // console.log("distance2: " + distance2);
            console.log("distance: " + distance2);
            if (e.target.id !== undefined && distance2 < 60) {
                console.log("wykonano 2 segment");
                btnId = e.target.id;
                let charAnim = document.querySelector(`.character`);
                charAnim.classList.remove(`character-animation`);
                // let moveCharacterLink = document.getElementById(btnId);
                moveCharacter();
                // ruch postaci literalnie
                // console.log("btn value: " + btnValue);
                function moveCharacter() {
                    if (btnValue !== undefined) {
                        let characterLink = document.querySelector(`.character`);
                        destinationHex = document.getElementById(`${btnId}`);
                        console.log("Postać wcześniej stała na: " + previousXDistance, previousYDistance);
                        xDistance = destinationHex.offsetLeft;
                        yDistance = destinationHex.offsetTop;
                        xCharDistance = previousXDistance - xDistance;
                        yCharDistance = previousYDistance - yDistance;
                        distance = Math.sqrt(Math.pow(xCharDistance, 2) + Math.pow(yCharDistance, 2));
                        console.log("Postać obecnie stoi na: " + xDistance, yDistance);
                        // przerzucenie diva z postacią do innego buttona
                        destinationHex.appendChild(characterLink);
                        energyBurn();
                        console.log("btnId: " + btnId2);
                        // przypisanie poprzednich współrzędnych
                        previousDestinationHex = destinationHex;
                        previousXDistance = previousDestinationHex.offsetLeft;
                        previousYDistance = previousDestinationHex.offsetTop;
                        lightUpUseButton();
                        gnomFight();
                    }
                }
                // utrata energii
                function energyBurn() {
                    if (distance < 60 && distance > 40) {
                        energy -= 1;
                        energyChange();
                        console.log("odjęto energię: -1");
                    }
                }
            }
        } else if (energy <= 0) {
            let charAnim = document.querySelector(`.character`);
            charAnim.classList.add(`character-animation`);
            setTimeout(function() {
                charAnim.classList.remove(`character-animation`);
            }, 600);
            console.log("Nie masz energii");
            // komunikat postaci
            charNotification.classList.add(`char-notification-padding`);
            charNotification.style.fontSize = `40px`;
            charNotification.innerHTML = `<p>Nie masz energii!</p>`;
            setTimeout(function() {
                charNotification.style.fontSize = `0px`;
                charNotification.classList.remove(`char-notification-padding`);
            }, 900);
        }
    } else if (useHexButtonClicked == true) {
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        console.log("Aktywowano już pole, nie możesz iść dalej");
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `30px`;
        charNotification.innerHTML = `<p>Aktywowałeś już pole, nie możesz iść dalej! <br />Zakończ turę.</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 1500);
    }
});
// utrata energii za knieje i fjord
// function checkSpecialEnergyBurn() {
// 	console.log("btnId2: " + btnId2);
// 	if (distance2 != 0 && distance2 < 60) {
// 		if (energy > 1) {
// 			if (biomData.title == "jungle" || biomData.title == "fjord") {
// 				if (useHexButtonClicked == false) {
// 					energy -= 1;
// 					energyChange();
// 					console.log("odjęto energie za pole specjalne: " + -1);
// 				}
// 				cantMove = false;
// 			} else {
// 				cantMove = false;
// 			}
// 		} else if (energy <= 1) {
// 			if (biomData.title == "jungle" || biomData.title == "fjord") {
// 				let charAnim = document.querySelector(`.character`);
// 				charAnim.classList.add(`character-animation`);
// 				setTimeout(function () {
// 					charAnim.classList.remove(`character-animation`);
// 				}, 600);
// 				cantMove = true;
// 				console.log("braknie Ci 1 energii na ten ruch");
// 				// komunikat postaci
// 				charNotification.classList.add(`char-notification-padding`);
// 				charNotification.style.fontSize = `35px`;
// 				charNotification.innerHTML = `<p>Nie masz wystarczająco energii!</p>`;
// 				setTimeout(function () {
// 					charNotification.style.fontSize = `0px`;
// 					charNotification.classList.remove(`char-notification-padding`);
// 				}, 1300);
// 			} else {
// 				cantMove = false;
// 			}
// 		}
// 	}
// }
// plansza tur
let round = 1;
let roundHighlighted;
function highlightRound() {
    roundHighlighted = document.querySelector(`.round${round}`);
    roundHighlighted.classList.add(`round-highlight`);
    useHexButtonClicked = false;
    console.log("Use Hex Button Clicked 3:" + useHexButtonClicked);
}
// przycisk 'Zakończ turę'
let cardAlreadyRevealed = false;
const roundEndButton = document.querySelector(`.end-round`);
roundEndButton.addEventListener(`click`, ()=>{
    console.log("Use Hex Button Clicked 2:" + useHexButtonClicked);
    roundHighlighted.classList.remove(`round-highlight`);
    round++;
    if (torch == 1) torchLoose();
    if (frozenCrown == 1) crownLoose();
    if (round > 24) // ZAKOŃCZENIE GRY
    endGame();
    else highlightRound();
    // dodawanie energii na koniec tury, sprawdzanie czy są lacie
    console.log("shoes: " + shoes);
    if (shoes == 0) {
        if (energy <= 8) {
            energy += 2;
            energyChange();
        } else {
            energy = 9;
            energy += 1;
            energyChange();
        }
    } else if (shoes == 1) {
        if (energy <= 7) {
            energy += 3;
            energyChange();
        } else {
            energy = 8;
            energy += 2;
            energyChange();
        }
    }
    biomFeatures();
    dayNightStatsBurn();
    // INICJOWANIE WYDARZEŃ ------------- WYDARZENIA
    // randomizowanie wydarzeń
    // JAK TO DZIAŁA ?!?!?!?!?!!?!?!?!?
    // -------------------------------------------------------------
    console.log("round: " + round);
    if (round == 2) {
        for(eventArrayCount = [], i = 0; i < 20; ++i)eventArrayCount[i] = i;
        shuffle(eventArrayCount);
        function shuffle(array) {
            let tmp, current, top = array.length;
            if (top) while(--top){
                current = Math.floor(Math.random() * (top + 1));
                // console.log("Current: " + current);
                // console.log("");
                tmp = array[current];
                // console.log("tmp: " + tmp);
                // console.log("");
                array[current] = array[top];
                array[top] = tmp;
            }
            eventArrayCount = array;
        }
    }
    // zmienna odpowiedzialna za aktywnego gnoma
    gnomActive = false;
    // powtórzenie nocnych wydarzeń
    if (event3 == true) {
        event3AtDayNight();
        event3 = false;
    }
    if (event4 == true) {
        event4AtDayNight();
        event4 = false;
    }
    if (event5 == true) {
        event5AtDayNight();
        event5 = false;
    }
    if (event6 == true) {
        event6AtDayNight();
        event6 = false;
    }
    if (event8 == true) {
        mistEnergyBurnOn();
        event8 = false;
    } else mistOn = false;
    if (event10 == true) {
        event10AtDayNight();
        event10 = false;
        event10active = false;
    }
    if (event11 == true) {
        event11AtDayNight();
        event11 = false;
    }
    if (event12 == true) {
        event12AtDayNight();
        event12 = false;
    }
    if (event13 == true) {
        event13AtDayNight();
        event13 = false;
    }
    if (event15 == true) {
        event12AtDayNight();
        event15 = false;
    }
    if (event16 == true) {
        event16AtDayNight();
        event16 = false;
    }
    if (event17 == true) {
        event17AtDayNight();
        event17 = false;
    }
    if (event18 == true) {
        event18AtDayNight();
        event18 = false;
    }
    if (event20 == true) {
        event20AtDayNight();
        event20 = false;
    }
    fight = 0;
    // -------------------------------------------------------------
    console.log("tablica: " + eventArrayCount);
    // if (round % 2 == 1) eventsTable[0]();
    console.log(eventArrayCount);
    // PERFORMANCE
    // if (round == 3) eventsTable[6]();
    // if (round == 5) eventsTable[6]();
    // if (round == 7) eventsTable[6]();
    // if (round == 9) eventsTable[6]();
    // if (round == 11) eventsTable[6]();
    // if (round == 13) eventsTable[6]();
    // if (round == 15) eventsTable[6]();
    // if (round == 17) eventsTable[6]();
    // if (round == 19) eventsTable[6]();
    // if (round == 21) eventsTable[6]();
    // if (round == 23) eventsTable[6]();
    if (round == 3) eventsTable[eventArrayCount[0]]();
    if (round == 5) eventsTable[eventArrayCount[1]]();
    if (round == 7) eventsTable[eventArrayCount[2]]();
    if (round == 9) eventsTable[eventArrayCount[3]]();
    if (round == 11) eventsTable[eventArrayCount[4]]();
    if (round == 13) eventsTable[eventArrayCount[5]]();
    if (round == 15) eventsTable[eventArrayCount[6]]();
    if (round == 17) eventsTable[eventArrayCount[7]]();
    if (round == 19) eventsTable[eventArrayCount[8]]();
    if (round == 21) eventsTable[eventArrayCount[9]]();
    if (round == 23) eventsTable[eventArrayCount[10]]();
    cardAlreadyRevealed = true;
    if (gnomActive == true && btnId == 165) setTimeout(function() {
        gnomFight();
    }, 1500);
    if (fight == 0) lightUpUseButton();
});
// przycisk 'Aktywuj pole'
let useSpot = document.querySelector(`.use-spot`);
useSpot.disabled = true;
function lightUpUseButton() {
    if (destinationHex.classList.contains(`stone`) || destinationHex.classList.contains(`wood`) || destinationHex.classList.contains(`grass`) || destinationHex.classList.contains(`flint`) || destinationHex.classList.contains(`lotos`) || destinationHex.classList.contains(`tent`) || destinationHex.classList.contains(`fire`) || destinationHex.classList.contains(`frozen-crown`) || destinationHex.classList.contains(`oasis`) || destinationHex.classList.contains(`cave`) || destinationHex.classList.contains(`boss`)) {
        useSpot.disabled = false;
        useSpot.classList.add(`use-spot-active`);
    } else {
        useSpot.disabled = true;
        useSpot.classList.remove(`use-spot-active`);
    }
}
// Aktywacja pola akcji
useSpot.addEventListener(`click`, ()=>{
    // aktywacja oazy
    if (destinationHex.classList.contains(`oasis`)) oasisActivated();
    else if (destinationHex.classList.contains(`cave`)) caveActivated();
    else if (destinationHex.classList.contains(`tent`)) tentActivated();
    else if (destinationHex.classList.contains(`boss`)) bossActivated();
    else if (destinationHex.classList.contains(`fire`)) firePlace();
    else if (destinationHex.classList.contains(`stone`) || destinationHex.classList.contains(`wood`) || destinationHex.classList.contains(`grass`) || destinationHex.classList.contains(`flint`) || destinationHex.classList.contains(`lotos`)) getResource();
    else if (btnId == 102) {
        if (frozenCrown == 0) {
            if (energy > 0) frozenGolemFight();
            else if (energy == 0) {
                let charAnim = document.querySelector(`.character`);
                charAnim.classList.add(`character-animation`);
                setTimeout(function() {
                    charAnim.classList.remove(`character-animation`);
                }, 600);
                console.log("Nie masz energii");
                // komunikat postaci
                charNotification.classList.add(`char-notification-padding`);
                charNotification.style.fontSize = `40px`;
                charNotification.innerHTML = `<p>Nie masz energii!</p>`;
                setTimeout(function() {
                    charNotification.style.fontSize = `0px`;
                    charNotification.classList.remove(`char-notification-padding`);
                }, 1200);
            }
        } else {
            let charAnim = document.querySelector(`.character`);
            charAnim.classList.add(`character-animation`);
            setTimeout(function() {
                charAnim.classList.remove(`character-animation`);
            }, 600);
            console.log("masz już lodową koronę");
            // komunikat postaci
            charNotification.classList.add(`char-notification-padding`);
            charNotification.style.fontSize = `40px`;
            charNotification.innerHTML = `<p>Masz już Lodową Koronę!</p>`;
            setTimeout(function() {
                charNotification.style.fontSize = `0px`;
                charNotification.classList.remove(`char-notification-padding`);
            }, 1200);
        }
    }
});
// dodawanie surowca do inwentarza
function addResourceToBackpack(item) {
    if (item == "stone") {
        stone++;
        addStone();
    } else if (item == "wood") {
        wood++;
        addWood();
    } else if (item == "grass") {
        grass++;
        addGrass();
    } else if (item == "flint") {
        flint++;
        addFlint();
    } else if (item == "lotos") {
        lotos++;
        addLotos();
    }
    console.log(`Twój plecak: 
	Lotos: ${lotos}, 
	Flint: ${flint}, 
	Grass: ${grass}, 
	Stone: ${stone}, 
	Wood: ${wood}`);
    checkAvailableItems();
}
// animacja dodawania surowca do inwentarza
// kamień
let stoneAddLink = document.querySelector(`.stone-anim`);
function addStone() {
    stoneAddLink.classList.add(`stone-animation`);
    setTimeout(function() {
        stoneAddLink.classList.remove(`stone-animation`);
    }, 1000);
    changeStoneValue();
}
function changeStoneValue() {
    setTimeout(function() {
        const stoneCount = document.querySelector(`.stone-count`);
        stoneCount.innerHTML = `x${stone}`;
    }, 900);
}
// drewno
let woodAddLink = document.querySelector(`.wood-anim`);
function addWood() {
    woodAddLink.classList.add(`wood-animation`);
    setTimeout(function() {
        woodAddLink.classList.remove(`wood-animation`);
    }, 1000);
    changeWoodValue();
}
function changeWoodValue() {
    setTimeout(function() {
        const woodCount = document.querySelector(`.wood-count`);
        woodCount.innerHTML = `x${wood}`;
    }, 900);
}
// trawa
let grassAddLink = document.querySelector(`.grass-anim`);
function addGrass() {
    grassAddLink.classList.add(`grass-animation`);
    setTimeout(function() {
        grassAddLink.classList.remove(`grass-animation`);
    }, 1000);
    changeGrassValue();
}
function changeGrassValue() {
    setTimeout(function() {
        const grassCount = document.querySelector(`.grass-count`);
        grassCount.innerHTML = `x${grass}`;
    }, 900);
    // aktywacja/dezaktywacja przycisków jedzenia trawy
    if (grass >= 2) {
        btnEatOneGrass.disabled = false;
        btnEatTwoGrass.disabled = false;
        btnEatOneGrass.classList.add(`btn-eat-1-grass-active`);
        btnEatTwoGrass.classList.add(`btn-eat-2-grass-active`);
    } else if (grass == 1) {
        btnEatOneGrass.disabled = false;
        btnEatTwoGrass.disabled = true;
        btnEatOneGrass.classList.add(`btn-eat-1-grass-active`);
        btnEatTwoGrass.classList.remove(`btn-eat-2-grass-active`);
    } else {
        btnEatOneGrass.disabled = true;
        btnEatTwoGrass.disabled = true;
        btnEatOneGrass.classList.remove(`btn-eat-1-grass-active`);
        btnEatTwoGrass.classList.remove(`btn-eat-2-grass-active`);
    }
}
// krzesiwo
let flintAddLink = document.querySelector(`.flint-anim`);
function addFlint() {
    flintAddLink.classList.add(`flint-animation`);
    setTimeout(function() {
        flintAddLink.classList.remove(`flint-animation`);
    }, 1000);
    changeFlintValue();
}
function changeFlintValue() {
    setTimeout(function() {
        const flintCount = document.querySelector(`.flint-count`);
        flintCount.innerHTML = `x${flint}`;
    }, 900);
}
// lotos
let lotosAddLink = document.querySelector(`.lotos-anim`);
function addLotos() {
    lotosAddLink.classList.add(`lotos-animation`);
    setTimeout(function() {
        lotosAddLink.classList.remove(`lotos-animation`);
    }, 1000);
    changeLotosValue();
}
function changeLotosValue() {
    setTimeout(function() {
        const lotosCount = document.querySelector(`.lotos-count`);
        lotosCount.innerHTML = `x${lotos}`;
    }, 900);
}
// sprawdzanie odblokowania przedmiotów
const axeButton = document.querySelector(`.axe`);
const shoesButton = document.querySelector(`.shoes`);
const torchButton = document.querySelector(`.torch`);
const swordButton = document.querySelector(`.sword`);
const foodButton = document.querySelector(`.food`);
const coatButton = document.querySelector(`.coat`);
axeButton.disabled = true;
shoesButton.disabled = true;
torchButton.disabled = true;
swordButton.disabled = true;
foodButton.disabled = true;
coatButton.disabled = true;
const axeShadowLink = document.querySelector(`.axe-shadow`);
const shoesShadowLink = document.querySelector(`.shoes-shadow`);
const torchShadowLink = document.querySelector(`.torch-shadow`);
const swordShadowLink = document.querySelector(`.sword-shadow`);
const foodShadowLink = document.querySelector(`.food-shadow`);
const coatShadowLink = document.querySelector(`.coat-shadow`);
function checkAvailableItems() {
    // sprawdzanie axa
    if (stone >= 1 && wood >= 1) {
        axeButton.disabled = false;
        axeShadowLink.classList.remove(`shadow`);
        axeButton.classList.add(`item-clickable`);
    } else {
        axeButton.disabled = true;
        axeShadowLink.classList.add(`shadow`);
        axeButton.classList.remove(`item-clickable`);
    }
    // sprawdzanie laci i ponczo
    if (grass >= 2) {
        shoesButton.disabled = false;
        shoesShadowLink.classList.remove(`shadow`);
        shoesButton.classList.add(`item-clickable`);
        coatButton.disabled = false;
        coatShadowLink.classList.remove(`shadow`);
        coatButton.classList.add(`item-clickable`);
    } else {
        shoesButton.disabled = true;
        shoesShadowLink.classList.add(`shadow`);
        shoesButton.classList.remove(`item-clickable`);
        coatButton.disabled = true;
        coatShadowLink.classList.add(`shadow`);
        coatButton.classList.remove(`item-clickable`);
    }
    // sprawdzanie pochodni
    if (wood >= 1 && flint >= 1) {
        torchButton.disabled = false;
        torchShadowLink.classList.remove(`shadow`);
        torchButton.classList.add(`item-clickable`);
    } else {
        torchButton.disabled = true;
        torchShadowLink.classList.add(`shadow`);
        torchButton.classList.remove(`item-clickable`);
    }
    // sprawdzanie miecza
    if (wood >= 1 && stone >= 2) {
        swordButton.disabled = false;
        swordShadowLink.classList.remove(`shadow`);
        swordButton.classList.add(`item-clickable`);
    } else {
        swordButton.disabled = true;
        swordShadowLink.classList.add(`shadow`);
        swordButton.classList.remove(`item-clickable`);
    }
    // sprawdzanie lecza
    if (wood >= 1 && flint >= 1 && lotos >= 1) {
        foodButton.disabled = false;
        foodShadowLink.classList.remove(`shadow`);
        foodButton.classList.add(`item-clickable`);
    } else {
        foodButton.disabled = true;
        foodShadowLink.classList.add(`shadow`);
        foodButton.classList.remove(`item-clickable`);
    }
}
// craftowanie itemów
axeButton.addEventListener(`click`, ()=>{
    const axeContainer = document.getElementById(`axe-container`);
    axeContainer.classList.add(`axe-container`);
    axeButton.classList.remove(`axe`);
    let axeAnimation = document.querySelector(`#axe-anim`);
    axeAnimation.classList.add(`axe-animation`);
    axe = 1;
    stone -= 1;
    changeStoneValue();
    wood -= 1;
    changeWoodValue();
    checkAvailableItems();
});
shoesButton.addEventListener(`click`, ()=>{
    const shoesContainer = document.getElementById(`shoes-container`);
    shoesContainer.classList.add(`shoes-container`);
    shoesButton.classList.remove(`shoes`);
    let shoesAnimation = document.querySelector(`#shoes-anim`);
    shoesAnimation.classList.add(`shoes-animation`);
    shoes = 1;
    grass -= 2;
    changeGrassValue();
    checkAvailableItems();
});
torchButton.addEventListener(`click`, ()=>{
    const torchContainer = document.getElementById(`torch-container`);
    torchContainer.classList.add(`torch-container`);
    torchButton.classList.remove(`torch`);
    let torchAnimation = document.querySelector(`#torch-anim`);
    torchAnimation.classList.add(`torch-animation`);
    torch = 1;
    wood -= 1;
    changeWoodValue();
    flint -= 1;
    changeFlintValue();
    checkAvailableItems();
});
swordButton.addEventListener(`click`, ()=>{
    const swordContainer = document.getElementById(`sword-container`);
    swordContainer.classList.add(`sword-container`);
    swordButton.classList.remove(`sword`);
    let swordAnimation = document.querySelector(`#sword-anim`);
    swordAnimation.classList.add(`sword-animation`);
    sword = 1;
    stone -= 2;
    changeStoneValue();
    wood -= 1;
    changeWoodValue();
    checkAvailableItems();
});
foodButton.addEventListener(`click`, ()=>{
    const foodContainer = document.getElementById(`food-container`);
    foodContainer.classList.add(`food-container`);
    foodButton.classList.remove(`food`);
    let foodAnimation = document.querySelector(`#food-anim`);
    foodAnimation.classList.add(`food-animation`);
    lotos -= 1;
    changeLotosValue();
    wood -= 1;
    changeWoodValue();
    flint -= 1;
    changeFlintValue();
    checkAvailableItems();
    // odblokowanie buttona "zjedz leczo"
    btnEatFood.disabled = false;
    btnEatFood.classList.add(`btn-eat-food-active`);
});
coatButton.addEventListener(`click`, ()=>{
    const coatContainer = document.getElementById(`coat-container`);
    coatContainer.classList.add(`coat-container`);
    coatButton.classList.remove(`coat`);
    let coatAnimation = document.querySelector(`#coat-anim`);
    coatAnimation.classList.add(`coat-animation`);
    coat = 1;
    grass -= 2;
    changeGrassValue();
    checkAvailableItems();
});
// pozyskiwanie surowców
function getResource() {
    if (energy > 0 || axe == 1) {
        useSpot.disabled = true;
        useSpot.classList.remove(`use-spot-active`);
        if (axe == 0) {
            energy -= 1;
            energyChange();
        }
        addResourceToBackpack(destinationHex.classList[2]);
        useHexButtonClicked = true;
    } else {
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        console.log("Nie masz wystarczająco energii na wydobycie surowca");
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `35px`;
        charNotification.innerHTML = `<p>Brak energii na wydobycie surowca!</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 2000);
    }
}
// OGNISKO
function firePlace() {
    if (flint >= 1) {
        if (energy < 7) {
            energy += 3;
            energyChange();
        } else {
            energy = 10;
            energyChange();
        }
        if (sanity < 10) {
            sanity++;
            sanityChange();
        }
        if (temperature < 5) {
            temperature++;
            temperatureChange();
        }
        console.log("sejmitar: " + sejmitar);
        fireRoll = Math.floor(Math.random() * 5);
        // ----------------
        // ----------------
        if (fireRoll == 0 && sejmitar == 0) {
            // sejmitar
            const sejmitarAnim = document.querySelector(`#sejmitar-anim`);
            const sejmitarAnimation = document.querySelector(`#sejmitar`);
            const sejmitarContainer = document.getElementById(`sejmitar-container`);
            sejmitar++;
            sejmitarAnimation.classList.add(`sejmitar-anim`);
            setTimeout(function() {
                sejmitarContainer.classList.add(`sejmitar-container`);
                sejmitarAnim.classList.add(`sejmitar-animation`);
            }, 1600);
        } else // czerwony byk i kiełbaski
        addFireCard();
        flint -= 1;
        changeFlintValue();
        checkAvailableItems();
        useSpot.disabled = true;
        useSpot.classList.remove(`use-spot-active`);
        useHexButtonClicked = true;
    } else {
        console.log("Nie masz krzesiwa");
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `40px`;
        charNotification.innerHTML = `<p>Nie masz krzesiwa!</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 1500);
    }
}
function addFireCard() {
    winWithGnomeToAddFireCard = 0;
    fireCard++;
    // animacja
    const redBullSasuageAnimation = document.querySelector(`#sasuage-and-redbull-roll`);
    redBullSasuageAnimation.classList.add(`redbull-sasuages-anim`);
    setTimeout(function() {
        redBullSasuageAnimation.classList.remove(`redbull-sasuages-anim`);
    }, 2900);
    // podświetlenie i aktywowanie buttonów
    setTimeout(function() {
        const drinkRedBullActive = document.querySelector(`.btn-drink-red-bull`);
        drinkRedBullActive.classList.add(`btn-drink-red-bull-active`);
        btnDrinkRedBull.disabled = false;
        const eatSasuageActive = document.querySelector(`.btn-eat-sasuage`);
        eatSasuageActive.classList.add(`btn-eat-sasuage-active`);
        btnEatSasuage.disabled = false;
        const fireIcon = document.querySelector(`.fire-place-icon-false`);
        fireIcon.classList.add(`fire-place-icon-true`);
        // zmiana wartości pod ikoną ogniska
        const fireIconSpan = document.querySelector(`.fire-place-span`);
        fireIconSpan.innerHTML = `x${fireCard}`;
    }, 2600);
}
// Czeluść - Boss
let tanatosKilled = false;
let tanatosActive = 0;
function bossActivated() {
    if (securis == 1) {
        if (tanatosKilled == false) {
            if (energy != 0) {
                useSpot.disabled = true;
                useSpot.classList.remove(`use-spot-active`);
                useHexButtonClicked = true;
                tanatosActive = 1;
                // walka z bossem
                fight = 1;
                win = false;
                cubesBtn.classList.add(`cubes-active`);
                // ustawienie szarego tła
                boardBg.classList.add("block-whole-background");
                boardBg.style.display = "block";
                // schowanie postaci
                charHide.style.display = "none";
                // wyłączanie przycisku rundy
                const endRoundButton = document.querySelector(`.end-round`);
                endRoundButton.disabled = true;
                // pole walki z potworem - pokazanie i animacja
                const fightCard = document.querySelector(`.monster-fight-card`);
                const monsterName = document.querySelector(`.monster-name`);
                const fightSumSpan = document.querySelector(`.fight-sum-span`);
                fightCard.style.display = `flex`;
                fightCard.classList.remove(`fight-animation-out`);
                fightCard.classList.add(`fight-animation-in`);
                monsterName.innerHTML = `Tanatos (Boss)`;
                cubesBtn.disabled = false;
                endLooseFight.disabled = true;
                endLooseFight.classList.remove(`end-loose-fight-active`);
                fightSumSpan.innerHTML = ``;
                cubeResult.innerHTML = ``;
                randomCube = 0;
            } else if (energy == 0) {
                console.log("Nie masz energii!");
                let charAnim = document.querySelector(`.character`);
                charAnim.classList.add(`character-animation`);
                setTimeout(function() {
                    charAnim.classList.remove(`character-animation`);
                }, 600);
                // komunikat postaci
                charNotification.classList.add(`char-notification-padding`);
                charNotification.style.fontSize = `40px`;
                charNotification.innerHTML = `<p>Nie masz energii!</p>`;
                setTimeout(function() {
                    charNotification.style.fontSize = `0px`;
                    charNotification.classList.remove(`char-notification-padding`);
                }, 1500);
            }
        } else if (tanatosKilled == true) {
            console.log("Tanatos nie żyje!");
            let charAnim = document.querySelector(`.character`);
            charAnim.classList.add(`character-animation`);
            setTimeout(function() {
                charAnim.classList.remove(`character-animation`);
            }, 600);
            // komunikat postaci
            charNotification.classList.add(`char-notification-padding`);
            charNotification.style.fontSize = `40px`;
            charNotification.innerHTML = `<p>Tanatos nie żyje!</p>`;
            setTimeout(function() {
                charNotification.style.fontSize = `0px`;
                charNotification.classList.remove(`char-notification-padding`);
            }, 1500);
        }
    } else if (securis == 0) {
        console.log("Potrzebujesz Securisa");
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `40px`;
        charNotification.innerHTML = `<p>Potrzebujesz Securisa!</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 1500);
    }
}
function looseSecuris() {
    const securisAnimation = document.querySelector(`#securis`);
    const securisAnim = document.querySelector(`#securis-anim`);
    const securisContainer = document.getElementById(`securis-container`);
    securisAnimation.classList.remove(`securis-anim`);
    securisContainer.classList.remove(`securis-container`);
    securisAnim.classList.remove(`securis-animation`);
}
// LODOWA KORONA
function frozenGolemFight() {
    // wyłączenie przycisku "Aktywuj pole"
    useHexButtonClicked = true;
    useSpot.disabled = true;
    useSpot.classList.remove(`use-spot-active`);
    frozenGolemActive = true;
    win = false;
    cubesBtn.classList.add(`cubes-active`);
    // ustawienie szarego tła
    boardBg.classList.add("block-whole-background");
    boardBg.style.display = "block";
    // schowanie postaci
    charHide.style.display = "none";
    // wyłączanie przycisku rundy
    const endRoundButton = document.querySelector(`.end-round`);
    endRoundButton.disabled = true;
    // pole walki z potworem - pokazanie i animacja
    win = false;
    const fightCard = document.querySelector(`.monster-fight-card`);
    const monsterName = document.querySelector(`.monster-name`);
    const fightSumSpan = document.querySelector(`.fight-sum-span`);
    fightCard.style.display = `flex`;
    fightCard.classList.remove(`fight-animation-out`);
    fightCard.classList.add(`fight-animation-in`);
    monsterName.innerHTML = `Lodowy Golem`;
    cubesBtn.disabled = false;
    endLooseFight.disabled = true;
    endLooseFight.classList.remove(`end-loose-fight-active`);
    fightSumSpan.innerHTML = ``;
    cubeResult.innerHTML = ``;
    randomCube = 0;
    // pokazanie buttona "Użyj sejmitaru" jeśli sejmitar == 1
    if (sejmitar == 1) {
        const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
        showUseSejmitarBtn.style.display = `block`;
        win = true;
    }
}
// NAMIOT SKRZATA
function tentActivated() {
    if (securis == 0) {
        if (energy < 4) {
            energy += 6;
            energyChange();
        } else {
            energy = 10;
            energyChange();
        }
        if (starvation < 10) {
            starvation++;
            starvationChange();
        }
        const securisAnimation = document.querySelector(`#securis`);
        const securisAnim = document.querySelector(`#securis-anim`);
        const securisContainer = document.getElementById(`securis-container`);
        securis = 1;
        securisAnimation.classList.add(`securis-anim`);
        setTimeout(function() {
            securisContainer.classList.add(`securis-container`);
            securisAnim.classList.add(`securis-animation`);
        }, 1600);
        useSpot.disabled = true;
        useSpot.classList.remove(`use-spot-active`);
        useHexButtonClicked = true;
    } else if (securis == 1) {
        console.log("Nie możesz wejść do namiotu z Securisem!");
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `30px`;
        charNotification.innerHTML = `<p>Nie możesz wejść do namiotu z Securisem!</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 1500);
    }
}
// JASKINIA WRÓŻBIARSTWA
function caveActivated() {
    if (caveUsed == false) {
        if (sanity < 10) {
            sanity++;
            sanityChange();
        }
        energy = 10;
        energyChange();
        caveUsed = true;
        useHexButtonClicked = true;
        useSpot.disabled = true;
        useSpot.classList.remove(`use-spot-active`);
    } else if (caveUsed == true) {
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        console.log("Jaskinia została już raz użyta");
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `35px`;
        charNotification.innerHTML = `<p>Jaskinia została już raz użyta!</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 2000);
    }
}
// OAZA
function oasisActivated() {
    if (oasisUsed == false) {
        if (starvation < 10) {
            starvation++;
            starvationChange();
        }
        if (energy < 7) {
            energy += 3;
            energyChange();
        } else {
            energy = 10;
            energyChange();
        }
        if (sanity < 10) {
            sanity++;
            sanityChange();
        }
        if (temperature < 5) {
            temperature++;
            temperatureChange();
        } else if (temperature > 5) {
            temperature--;
            temperatureChange();
        }
        oasisUsed = true;
        useHexButtonClicked = true;
        useSpot.disabled = true;
        useSpot.classList.remove(`use-spot-active`);
    } else {
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        console.log("Oaza została już raz użyta");
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `35px`;
        charNotification.innerHTML = `<p>Oaza została już raz użyta!</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 2000);
    }
}
// buttony po lewej
btnEatOneGrass.addEventListener(`click`, ()=>{
    if (energy <= 8) {
        energy += 2;
        energyChange();
    } else {
        energy = 10;
        energyChange();
    }
    grass -= 1;
    changeGrassValue();
    checkAvailableItems();
});
btnEatTwoGrass.addEventListener(`click`, ()=>{
    if (energy <= 6) {
        energy += 4;
        energyChange();
    } else {
        energy = 10;
        energyChange();
    }
    if (starvation < 10) {
        starvation += 1;
        starvationChange();
    }
    grass -= 2;
    changeGrassValue();
    checkAvailableItems();
});
btnEatFood.addEventListener(`click`, ()=>{
    if (life <= 15) {
        life += 5;
        lifeChange();
    } else {
        life = 20;
        lifeChange();
    }
    if (starvation <= 8) {
        starvation += 2;
        starvationChange();
    } else {
        starvation;
        starvationChange();
    }
    btnEatFood.disabled = true;
    btnEatFood.classList.remove(`btn-eat-food-active`);
    const foodContainer = document.getElementById(`food-container`);
    foodContainer.classList.remove(`food-container`);
    foodButton.classList.add(`food`);
    let foodAnimation = document.querySelector(`#food-anim`);
    foodAnimation.classList.remove(`food-animation`);
});
// Użycie karty ogniska
btnDrinkRedBull.addEventListener(`click`, ()=>{
    fireCard--;
    if (energy < 2) {
        energy += 8;
        energyChange();
    } else {
        energy = 10;
        energyChange();
    }
    const fireIconSpan = document.querySelector(`.fire-place-span`);
    fireIconSpan.innerHTML = `x${fireCard}`;
    if (fireCard == 0) redBullSasuagesBtnTurnOff();
});
btnEatSasuage.addEventListener(`click`, ()=>{
    fireCard--;
    if (starvation < 6) {
        starvation += 4;
        starvationChange();
    } else {
        starvation = 10;
        starvationChange();
    }
    const fireIconSpan = document.querySelector(`.fire-place-span`);
    fireIconSpan.innerHTML = `x${fireCard}`;
    if (fireCard == 0) redBullSasuagesBtnTurnOff();
});
// wygaszenie buttonów czerwonego byka i kiełbasek
function redBullSasuagesBtnTurnOff() {
    const drinkRedBullActive = document.querySelector(`.btn-drink-red-bull`);
    drinkRedBullActive.classList.remove(`btn-drink-red-bull-active`);
    btnDrinkRedBull.disabled = true;
    const eatSasuageActive = document.querySelector(`.btn-eat-sasuage`);
    eatSasuageActive.classList.remove(`btn-eat-sasuage-active`);
    btnEatSasuage.disabled = true;
    const fireIcon = document.querySelector(`.fire-place-icon-false`);
    fireIcon.classList.remove(`fire-place-icon-true`);
}
// działanie biomu na statystyki gracza
function biomFeatures() {
    // Rubież i Knieja
    if (biomData.title == "outland" || biomData.title == "jungle") {
        if (temperature < 5) {
            temperature++;
            temperatureChange();
        } else if (temperature > 5) {
            temperature--;
            temperatureChange();
        }
    }
    // Pustynia
    if (biomData.title == "desert") {
        if (btnId != 85 && btnId != 86 && btnId != 96 && btnId != 97 && btnId != 98 && btnId != 107 && btnId != 108) {
            if (starvation == 0) {
                life--;
                lifeChange();
            } else {
                starvation--;
                starvationChange();
            }
            if (temperature == 10) {
                life--;
                lifeChange();
            } else {
                temperature++;
                temperatureChange();
            }
        }
    }
    // Lodowa Grań
    if (biomData.title == "northrend") {
        if (frozenCrown == 0) {
            if (sanity == 0) {
                life--;
                lifeChange();
            } else {
                sanity--;
                sanityChange();
            }
        }
        if (temperature == 0) {
            life--;
            lifeChange();
        } else {
            temperature--;
            temperatureChange();
        }
    }
    // Krater
    if (biomData.title == "crater") {
        if (sanity == 0) {
            life--;
            lifeChange();
        } else {
            sanity--;
            sanityChange();
        }
        if (temperature == 10) {
            life--;
            lifeChange();
        } else {
            temperature++;
            temperatureChange();
        }
    }
}
// Utrata głodu i psychiki w zależności od pory dnia
function dayNightStatsBurn() {
    if (round % 2 == 0 && frozenCrown == 0 && torch == 0) {
        if (sanity == 0) {
            life--;
            lifeChange();
        } else {
            sanity--;
            sanityChange();
        }
    } else if (round % 2 == 1) {
        if (starvation == 0) {
            life--;
            lifeChange();
        } else {
            starvation--;
            starvationChange();
        }
    }
}
// utrata pochodni
function torchLoose() {
    if (destinationHex.title == `northrend`) {
        torch = 0;
        const torchContainer = document.getElementById(`torch-container`);
        torchContainer.classList.remove(`torch-container`);
        torchButton.classList.add(`torch`);
        let torchAnimation = document.querySelector(`#torch-anim`);
        torchAnimation.classList.remove(`torch-animation`);
    }
}
// utrata lodowej korony
function crownLoose() {
    if (destinationHex.title == `desert` || destinationHex.title == `crater` || event10active == true) {
        const frozenCrownAnim = document.querySelector(`#frozenCrown-anim`);
        const frozenCrownAnimation = document.querySelector(`#frozenCrown`);
        const frozenCrownContainer = document.getElementById(`frozenCrown-container`);
        frozenCrown = 0;
        frozenCrownAnimation.classList.remove(`frozenCrown-anim`);
        frozenCrownContainer.classList.remove(`frozenCrown-container`);
        frozenCrownAnim.classList.remove(`frozenCrown-animation`);
    }
}
// INSTRUKCJA
const instructionBtn = document.querySelector(`.instruction`);
const instructionContainer = document.querySelector(`.instruction-container`);
instructionBtn.addEventListener(`click`, function() {
    console.log(`CZEGO NIE POWIĘKSZA`);
    instructionContainer.style.display = `flex`;
});
const closeInstruction = document.querySelector(`.close-instruction`);
closeInstruction.addEventListener(`click`, function() {
    instructionContainer.style.display = `none`;
});
// Zmienne do eventów
let event3 = false;
let event4 = false;
let event5 = false;
let event6 = false;
let event8 = false;
let event10 = false;
let event11 = false;
let event12 = false;
let event13 = false;
let event15 = false;
let event16 = false;
let event17 = false;
let event18 = false;
let event20 = false;
let event10active = false;
// <----------- WYDARZENIA ------------>
const endLooseFight = document.querySelector(`.end-loose-fight`);
const cubesBtn = document.querySelector(`.cubes`);
const boardBg = document.querySelector(`.board-bg`);
const charHide = document.querySelector(`.character`);
const cubeResult = document.querySelector(`.cube-result`);
let cubesBtnClick;
const cardReverseAnim = document.getElementById(`event-card-reverse-anim`);
const cardEventAnim = document.getElementById(`card2`);
const revealEventCard = document.getElementById(`card1`);
let randomCube;
let eventsTable = [
    // wydarzenie 1 - Złowroga ciemność
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event1PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event1PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        if (biomData.title != `crater` && torch == 0 && frozenCrown == 0) setTimeout(function() {
            if (round < 9) {
                if (sanity == 0) {
                    life--;
                    lifeChange();
                } else {
                    sanity--;
                    sanityChange();
                }
            } else if (round >= 9 && round < 17) {
                if (sanity == 0) {
                    life -= 2;
                    lifeChange();
                } else if (sanity == 1) {
                    sanity--;
                    sanityChange();
                    life--;
                    lifeChange();
                } else {
                    sanity -= 2;
                    sanityChange();
                }
            } else if (round >= 17) {
                if (sanity == 0) {
                    life -= 3;
                    lifeChange();
                } else if (sanity == 1) {
                    life -= 2;
                    lifeChange();
                    sanity--;
                    sanityChange();
                } else if (sanity == 2) {
                    life--;
                    lifeChange();
                    sanity -= 2;
                    sanityChange();
                } else {
                    sanity -= 3;
                    sanityChange();
                }
            }
        }, 1500);
    },
    // wydarzenie 2 - Harpioperze
    function() {
        fight = 1;
        // połączenie zmiennej z klikanym buttonem pod klasą
        // .cubes-active
        // zamiana kolejności powiela każdy kolejny rzut o 1.
        // W takim ułożeniu Listener
        // na buttonie wywala error ale działa ... ;x
        cubesBtn.classList.add(`cubes-active`);
        // ustawienie szarego tła
        boardBg.classList.add("block-whole-background");
        boardBg.style.display = "block";
        // schowanie postaci
        charHide.style.display = "none";
        // wyłączanie przycisku rundy
        const endRoundButton = document.querySelector(`.end-round`);
        endRoundButton.disabled = true;
        // animacja karty wydarzenia
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event2PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event2PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        // pole walki z potworem - pokazanie i animacja
        setTimeout(function() {
            const fightCard = document.querySelector(`.monster-fight-card`);
            const monsterName = document.querySelector(`.monster-name`);
            const fightSumSpan = document.querySelector(`.fight-sum-span`);
            fightCard.style.display = `flex`;
            fightCard.classList.remove(`fight-animation-out`);
            fightCard.classList.add(`fight-animation-in`);
            monsterName.innerHTML = `Wielkie Harpioperze`;
            cubesBtn.disabled = false;
            endLooseFight.disabled = true;
            endLooseFight.classList.remove(`end-loose-fight-active`);
            fightSumSpan.innerHTML = ``;
            cubeResult.innerHTML = ``;
            randomCube = 0;
            // pokazanie buttona "Użyj sejmitaru" jeśli sejmitar == 1
            if (sejmitar == 1) {
                const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
                showUseSejmitarBtn.style.display = `block`;
            }
        }, 1500);
    },
    // wydarzenie 3 - Zamieć
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event3PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event3PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event3 = true;
        event3AtDayNight();
    },
    // wydarzenie 4 - Trujące powietrze
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event4PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event4PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event4 = true;
        event4AtDayNight();
    },
    // wydarzenie 5 - Upiorognom
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event5PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event5PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event5 = true;
        event5AtDayNight();
    },
    // wydarzenie 6 - Burza piaskowa
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event6PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event6PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event6 = true;
        event6AtDayNight();
    },
    // wydarzenie 7 - Szczurokrety
    function() {
        if (biomData.title != `crater` && biomData.title != `northrend`) {
            fight = 1;
            win = false;
            cubesBtn.classList.add(`cubes-active`);
            // ustawienie szarego tła
            boardBg.classList.add("block-whole-background");
            boardBg.style.display = "block";
            // schowanie postaci
            charHide.style.display = "none";
            // wyłączanie przycisku rundy
            const endRoundButton = document.querySelector(`.end-round`);
            endRoundButton.disabled = true;
            // pole walki z potworem - pokazanie i animacja
            setTimeout(function() {
                const fightCard = document.querySelector(`.monster-fight-card`);
                const monsterName = document.querySelector(`.monster-name`);
                const fightSumSpan = document.querySelector(`.fight-sum-span`);
                fightCard.style.display = `flex`;
                fightCard.classList.remove(`fight-animation-out`);
                fightCard.classList.add(`fight-animation-in`);
                monsterName.innerHTML = `Ogromne Szczurokrety`;
                cubesBtn.disabled = false;
                endLooseFight.disabled = true;
                endLooseFight.classList.remove(`end-loose-fight-active`);
                fightSumSpan.innerHTML = ``;
                cubeResult.innerHTML = ``;
                randomCube = 0;
                // pokazanie buttona "Użyj sejmitaru" jeśli sejmitar == 1
                if (sejmitar == 1) {
                    const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
                    showUseSejmitarBtn.style.display = `block`;
                }
            }, 1500);
        }
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event7PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event7PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
    },
    // wydarzenie 8 - Gęsta mgła
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event8PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event8PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event8 = true;
        mistEnergyBurnOn();
    },
    // wydarzenie 9 - Monstrualne hybrydy germańskich rottweilerów i alpak peruwiańskich
    function() {
        fight = 1;
        win = false;
        cubesBtn.classList.add(`cubes-active`);
        // ustawienie szarego tła
        boardBg.classList.add("block-whole-background");
        boardBg.style.display = "block";
        // schowanie postaci
        charHide.style.display = "none";
        // wyłączanie przycisku rundy
        const endRoundButton = document.querySelector(`.end-round`);
        endRoundButton.disabled = true;
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event9PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event9PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        // pole walki z potworem - pokazanie i animacja
        setTimeout(function() {
            win = false;
            const fightCard = document.querySelector(`.monster-fight-card`);
            const monsterName = document.querySelector(`.monster-name`);
            const fightSumSpan = document.querySelector(`.fight-sum-span`);
            fightCard.style.display = `flex`;
            fightCard.classList.remove(`fight-animation-out`);
            fightCard.classList.add(`fight-animation-in`);
            monsterName.innerHTML = `Psiapak`;
            cubesBtn.disabled = false;
            endLooseFight.disabled = true;
            endLooseFight.classList.remove(`end-loose-fight-active`);
            fightSumSpan.innerHTML = ``;
            cubeResult.innerHTML = ``;
            randomCube = 0;
            // pokazanie buttona "Użyj sejmitaru" jeśli sejmitar == 1
            if (sejmitar == 1) {
                const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
                showUseSejmitarBtn.style.display = `block`;
            }
        }, 1500);
    },
    // wydarzenie 10 - Rozgrzana od słońca ziemia
    function() {
        event10active = true;
        crownLoose();
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event10PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event10PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event10 = true;
        event10AtDayNight();
    },
    // wydarzenie 11 - Tęcza
    function() {
        console.log("11 ruszyła");
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event11PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event11PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event11 = true;
        event11AtDayNight();
    },
    // wydarzenie 12 - Opary z potężnym stężeniem soli
    function() {
        console.log("12 ruszyła");
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event12PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event12PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event12 = true;
        event12AtDayNight();
    },
    // wydarzenie 13 - Tornado
    function() {
        console.log("13 ruszyła");
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event13PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event13PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event13 = true;
        event13AtDayNight();
    },
    // wydarzenie 14 - Orangutan
    // Z KAŻDYM NASTEPNYM WYWOLANIEM TEGO WYDARZENIA
    // DODAWANE STATYSTYKI POWIELAJĄ SIĘ
    function() {
        console.log("14 ruszyła");
        fight = 1;
        // ustawienie szarego tła
        boardBg.classList.add("block-whole-background");
        boardBg.style.display = "block";
        // schowanie postaci
        charHide.style.display = "none";
        // wyłączanie przycisku rundy
        const endRoundButton = document.querySelector(`.end-round`);
        endRoundButton.disabled = true;
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event14PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event14PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        orangutanChoice();
    },
    // wydarzenie 15 - Muchołówki (połączone z eventem 12)
    // bo robią to samo
    function() {
        console.log("15 ruszyła");
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event15PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event15PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event15 = true;
        event12AtDayNight();
    },
    // wydarzenie 16 - Epidemia grypy
    function() {
        console.log("16 ruszyła");
        console.log("cardEventAnim:", cardEventAnim); // Dodaj to
        console.log("Przed zmianą:", cardEventAnim.style.backgroundImage);
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event16PngDefault.default})`;
        console.log("Po zmianie:", cardEventAnim.style.backgroundImage);
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event16PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event16 = true;
        event16AtDayNight();
    },
    // wydarzenie 17 - Pożar i dym
    function() {
        console.log("To nie powinno");
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event17PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event17PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event17 = true;
        event17AtDayNight();
    },
    // wydarzenie 18 - Zimny, ulewny deszcz
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event18PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event18PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event18 = true;
        event18AtDayNight();
    },
    // wydarzenie 19 - Wygłodniałe hieny
    function() {
        // podmiana paragrafu z informacją o warunku wygranej
        const conditionalOfWinP = document.getElementById(`when-do-i-win-fight`);
        conditionalOfWinP.innerHTML = `Wygrywasz wyrzucając 5 lub 6 (z mieczem 4)`;
        fight = 1;
        hiena = 1;
        cubesBtn.classList.add(`cubes-active`);
        // ustawienie szarego tła
        boardBg.classList.add("block-whole-background");
        boardBg.style.display = "block";
        // schowanie postaci
        charHide.style.display = "none";
        // wyłączanie przycisku rundy
        const endRoundButton = document.querySelector(`.end-round`);
        endRoundButton.disabled = true;
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event19PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event19PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        // pole walki z potworem - pokazanie i animacja
        setTimeout(function() {
            win = false;
            const fightCard = document.querySelector(`.monster-fight-card`);
            const monsterName = document.querySelector(`.monster-name`);
            const fightSumSpan = document.querySelector(`.fight-sum-span`);
            fightCard.style.display = `flex`;
            fightCard.classList.remove(`fight-animation-out`);
            fightCard.classList.add(`fight-animation-in`);
            monsterName.innerHTML = `Wyglodniale Hieny`;
            cubesBtn.disabled = false;
            endLooseFight.disabled = true;
            endLooseFight.classList.remove(`end-loose-fight-active`);
            fightSumSpan.innerHTML = ``;
            cubeResult.innerHTML = ``;
            randomCube = 0;
            // pokazanie buttona "Użyj sejmitaru" jeśli sejmitar == 1
            if (sejmitar == 1) {
                const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
                showUseSejmitarBtn.style.display = `block`;
            }
        }, 1500);
    },
    // wydarzenie 20 - Duchy poległych wcześniej graczy
    function() {
        cardReverseAnim.classList.add(`card-reverse-animation`);
        cardEventAnim.classList.add(`event-card-2-animation`);
        cardEventAnim.style.backgroundImage = `url(${0, _event20PngDefault.default})`;
        setTimeout(function() {
            revealEventCard.classList.add(`event-card-1`);
            revealEventCard.style.backgroundImage = `url(${0, _event20PngDefault.default})`;
            cardReverseAnim.classList.remove(`card-reverse-animation`);
            cardEventAnim.classList.remove(`event-card-2-animation`);
        }, 2000);
        event20 = true;
        event20AtDayNight();
    }
];
// EVENT 3
function event3AtDayNight() {
    if (biomData.title != `crater` && biomData.title != `desert` && btnId != 12 && btnId != 165) setTimeout(function() {
        if (round < 9) {
            if (temperature == 0) {
                life--;
                lifeChange();
            } else {
                temperature--;
                temperatureChange();
            }
        } else if (round >= 9 && round < 17) {
            if (temperature == 0) {
                life -= 2;
                lifeChange();
            } else if (temperature == 1) {
                life--;
                lifeChange();
                temperature--;
                temperatureChange();
            } else {
                temperature -= 2;
                temperatureChange();
            }
        } else if (round >= 17) {
            if (temperature == 0) {
                life -= 3;
                lifeChange();
            } else if (temperature == 1) {
                life -= 2;
                lifeChange();
                temperature--;
                temperatureChange();
            } else if (temperature == 2) {
                life--;
                lifeChange();
                temperature -= 2;
                temperatureChange();
            } else {
                temperature -= 3;
                temperatureChange();
            }
        }
    }, 1000);
}
// EVENT 4 - Trujące powietrze
function event4AtDayNight() {
    setTimeout(function() {
        if (round < 9) {
            life -= 2;
            lifeChange();
        } else if (round >= 9 && round < 17) {
            life -= 3;
            lifeChange();
        } else if (round >= 17) {
            life -= 4;
            lifeChange();
        }
    }, 1000);
}
// EVENT 5 - Upiorognom
function event5AtDayNight() {
    gnomActive = true;
    if (gnomKilled == false) {
        if (frozenCrown == 0) setTimeout(function() {
            if (round < 9) {
                if (sanity == 0) {
                    life--;
                    lifeChange();
                } else {
                    sanity--;
                    sanityChange();
                }
            } else if (round >= 9 && round < 17) {
                if (sanity == 0) {
                    life -= 2;
                    lifeChange();
                } else if (sanity == 1) {
                    life--;
                    lifeChange();
                    sanity--;
                    sanityChange();
                } else {
                    sanity -= 2;
                    sanityChange();
                }
            } else if (round >= 17) {
                if (sanity == 0) {
                    life -= 3;
                    lifeChange();
                } else if (sanity == 1) {
                    sanity--;
                    sanityChange();
                    life -= 2;
                    lifeChange();
                } else if (sanity == 2) {
                    sanity -= 2;
                    sanityChange();
                    life--;
                    lifeChange();
                } else {
                    sanity -= 3;
                    sanityChange();
                }
            }
        }, 1000);
    }
}
// walka z upiorognomem - EVENT 5
function gnomFight() {
    if (gnomActive == true && btnId == 165 && gnomKilled == false && energy > 0) {
        setTimeout(function() {
            fight = 1;
            gnom = 1;
            win = false;
            // połączenie zmiennej z klikanym buttonem pod klasą
            // .cubes-active
            // zamiana kolejności powiela każdy kolejny rzut o 1.
            // W takim ułożeniu Listener
            // na buttonie wywala error ale działa ... ;x
            cubesBtn.classList.add(`cubes-active`);
            // ustawienie szarego tła
            boardBg.classList.add("block-whole-background");
            boardBg.style.display = "block";
            // schowanie postaci
            charHide.style.display = "none";
            // wyłączanie przycisku rundy
            const endRoundButton = document.querySelector(`.end-round`);
            endRoundButton.disabled = true;
            const fightCard = document.querySelector(`.monster-fight-card`);
            const monsterName = document.querySelector(`.monster-name`);
            const fightSumSpan = document.querySelector(`.fight-sum-span`);
            fightCard.style.display = `flex`;
            fightCard.classList.remove(`fight-animation-out`);
            fightCard.classList.add(`fight-animation-in`);
            monsterName.innerHTML = `Upiorognom`;
            cubesBtn.disabled = false;
            endLooseFight.disabled = true;
            endLooseFight.classList.remove(`end-loose-fight-active`);
            fightSumSpan.innerHTML = ``;
            cubeResult.innerHTML = ``;
            randomCube = 0;
            // pokazanie buttona "Użyj sejmitaru" jeśli sejmitar == 1
            if (sejmitar == 1) {
                const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
                showUseSejmitarBtn.style.display = `block`;
            }
        }, 500);
        gnomKilled = true;
        gnomActive = false;
        addStatsAfterKillGnom = 1;
    } else if (gnomActive == true && btnId == 165 && gnomKilled == false) {
        let charAnim = document.querySelector(`.character`);
        charAnim.classList.add(`character-animation`);
        setTimeout(function() {
            charAnim.classList.remove(`character-animation`);
        }, 600);
        // komunikat postaci
        charNotification.classList.add(`char-notification-padding`);
        charNotification.style.fontSize = `30px`;
        charNotification.innerHTML = `<p>Nie masz energii by walczyć z gnomem</p>`;
        setTimeout(function() {
            charNotification.style.fontSize = `0px`;
            charNotification.classList.remove(`char-notification-padding`);
        }, 2500);
    }
}
// EVENT 6
function event6AtDayNight() {
    if (biomData.title == `desert` || biomData.title == `outland`) setTimeout(function() {
        if (round < 9) {
            life -= 2;
            lifeChange();
        } else if (round >= 9 && round < 17) {
            life -= 4;
            lifeChange();
        } else if (round >= 17) {
            life -= 6;
            lifeChange();
        }
    }, 1000);
}
// utrata energii za mgłe - EVENT 8
function mistEnergyBurnOn() {
    mistOn = true;
}
function mistEnergyBurnOff() {
    mistOn = false;
}
function checkSpecialEnergyBurnMist() {
    if (distance2 != 0 && distance2 < 60) {
        if (energy > 1) {
            energy -= 1;
            energyChange();
            console.log("odjęto energie za mgłe: -2");
            cantMove = false;
        } else if (energy <= 1) {
            let charAnim = document.querySelector(`.character`);
            charAnim.classList.add(`character-animation`);
            setTimeout(function() {
                charAnim.classList.remove(`character-animation`);
            }, 600);
            cantMove = true;
            console.log("Nie masz energii na chodzenie we mgle");
        }
    }
}
// EVENT 10 - Paląca ziemia
function event10AtDayNight() {
    if (biomData.title != `northrend`) {
        frozenCrown = 0;
        setTimeout(function() {
            if (round < 9) {
                if (temperature == 10) {
                    life--;
                    lifeChange();
                } else {
                    temperature++;
                    temperatureChange();
                }
            } else if (round >= 9 && round < 17) {
                if (temperature == 10) {
                    life -= 2;
                    lifeChange();
                } else if (temperature == 9) {
                    temperature++;
                    temperatureChange();
                    life--;
                    lifeChange();
                } else {
                    temperature += 2;
                    temperatureChange();
                }
            } else if (round >= 17) {
                if (temperature == 10) {
                    life -= 3;
                    lifeChange();
                } else if (temperature == 9) {
                    life -= 2;
                    lifeChange();
                    temperature++;
                    temperatureChange();
                } else if (temperature == 8) {
                    life--;
                    lifeChange();
                    temperature += 2;
                    temperatureChange();
                } else {
                    temperature += 3;
                    temperatureChange();
                }
            }
        }, 1000);
    }
}
// EVENT 11 - Tęcza
function event11AtDayNight() {
    if (biomData.title != `jungle`) setTimeout(function() {
        if (energy < 8) {
            energy += 2;
            energyChange();
        } else {
            energy = 10;
            energyChange();
        }
        if (frozenCrown == 0) {
            if (round < 9) {
                if (sanity == 0) {
                    life--;
                    lifeChange();
                } else {
                    sanity--;
                    sanityChange();
                }
            } else if (round >= 9 && round < 17) {
                if (sanity == 0) {
                    life -= 2;
                    lifeChange();
                } else if (sanity == 1) {
                    life--;
                    lifeChange();
                    sanity--;
                    sanityChange();
                } else {
                    sanity -= 2;
                    sanityChange();
                }
            } else if (round >= 17) {
                if (sanity == 0) {
                    life -= 3;
                    lifeChange();
                } else if (sanity == 1) {
                    life -= 2;
                    lifeChange();
                    sanity--;
                    sanityChange();
                } else if (sanity == 2) {
                    life--;
                    lifeChange();
                    sanity -= 2;
                    sanityChange();
                } else {
                    sanity -= 3;
                    sanityChange();
                }
            }
        }
    }, 1000);
}
// EVENT 12 i 15 - Stężenie soli / Muchołówki
function event12AtDayNight() {
    setTimeout(function() {
        if (round < 9) {
            if (starvation == 0) {
                life--;
                lifeChange();
            } else {
                starvation--;
                starvationChange();
            }
        } else if (round >= 9 && round < 17) {
            if (starvation == 0) {
                life -= 2;
                lifeChange();
            } else if (starvation == 1) {
                life--;
                lifeChange();
                starvation--;
                starvationChange();
            } else {
                starvation -= 2;
                starvationChange();
            }
        } else if (round >= 17) {
            if (starvation == 0) {
                life -= 3;
                lifeChange();
            } else if (starvation == 1) {
                life -= 2;
                starvation--;
                starvationChange();
            } else if (starvation == 2) {
                life--;
                lifeChange();
                starvation -= 2;
                starvationChange();
            } else {
                starvation -= 3;
                starvationChange();
            }
        }
    }, 1000);
}
// EVENT 13 - Tornado
function event13AtDayNight() {
    if (biomData.title != `jungle` && btnId != 165) setTimeout(function() {
        if (round < 9) {
            life--;
            lifeChange();
        } else if (round >= 9 && round < 17) {
            life -= 2;
            lifeChange();
        } else if (round >= 17) {
            life -= 3;
            lifeChange();
        }
    }, 1000);
}
// EVENT 14 - Orangutan
function orangutanChoice() {
    const choiceCard = document.querySelector(`.orangutan-choice-card`);
    setTimeout(function() {
        const orangutanName = document.querySelector(`.orangutan-name`);
        choiceCard.style.display = `flex`;
        choiceCard.classList.remove(`fight-animation-out`);
        choiceCard.classList.add(`fight-animation-in`);
        orangutanName.innerHTML = `Elegancki Orangutan`;
    }, 1500);
    const stealOrangutan = document.querySelector(`.steal-orangutan-btn`);
    const fightOrangutan = document.querySelector(`.fight-orangutan-btn`);
    // button "okradnij orangutana"
    stealOrangutan.addEventListener(`click`, ()=>{
        if (starvation < 10) {
            starvation++;
            starvationChange();
        }
        if (frozenCrown == 0) {
            if (sanity == 0) {
                life--;
                lifeChange();
            } else {
                sanity--;
                sanityChange();
            }
        }
        fight = 0;
        lightUpUseButton();
        boardBg.classList.remove("block-whole-background");
        boardBg.style.display = "none";
        // pojawienie się postaci
        charHide.style.display = "block";
        // włączanie przycisku rundy
        const endRoundButton = document.querySelector(`.end-round`);
        endRoundButton.disabled = false;
        // schowaj kartę wyboru
        choiceCard.classList.add(`fight-animation-out`);
        choiceCard.classList.remove(`fight-animation-in`);
        setTimeout(function() {
            choiceCard.style.display = `none`;
        }, 500);
    });
    // button "walcz z orangutanem"
    fightOrangutan.addEventListener(`click`, function() {
        orangutan = 1;
        win = false;
        // schowaj kartę wyboru
        choiceCard.classList.add(`fight-animation-out`);
        choiceCard.classList.remove(`fight-animation-in`);
        setTimeout(function() {
            choiceCard.style.display = `none`;
        }, 500);
        cubesBtn.classList.add(`cubes-active`);
        // ustawienie szarego tła
        boardBg.classList.add("block-whole-background");
        boardBg.style.display = "block";
        // schowanie postaci
        charHide.style.display = "none";
        // wyłączanie przycisku rundy
        const endRoundButton = document.querySelector(`.end-round`);
        endRoundButton.disabled = true;
        // pokaż kartę walki
        const fightCard = document.querySelector(`.monster-fight-card`);
        const monsterName = document.querySelector(`.monster-name`);
        const fightSumSpan = document.querySelector(`.fight-sum-span`);
        fightCard.style.display = `flex`;
        fightCard.classList.remove(`fight-animation-out`);
        fightCard.classList.add(`fight-animation-in`);
        monsterName.innerHTML = `Elegancki Orangutan`;
        cubesBtn.disabled = false;
        endLooseFight.disabled = true;
        endLooseFight.classList.remove(`end-loose-fight-active`);
        fightSumSpan.innerHTML = ``;
        cubeResult.innerHTML = ``;
        randomCube = 0;
        // pokazanie buttona "Użyj sejmitaru" jeśli sejmitar == 1
        if (sejmitar == 1) {
            const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
            showUseSejmitarBtn.style.display = `block`;
        }
    });
}
function fightOrangutanWinSpan() {
    orangutan = 0;
    const fightSumSpan = document.querySelector(`.fight-sum-span`);
    fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia +8</span>`;
    if (energy < 1) {
        energy += 9;
        energyChange();
    } else {
        energy = 10;
        energyChange();
    }
}
// EVENT 16 - Epidemia grypy
function event16AtDayNight() {
    setTimeout(function() {
        if (round < 9) {
            if (temperature == 10) {
                life--;
                lifeChange();
            } else {
                temperature++;
                temperatureChange();
            }
        } else if (round >= 9 && round < 17) {
            if (temperature == 10) {
                life -= 2;
                lifeChange();
            } else if (temperature == 9) {
                life--;
                lifeChange();
                temperature++;
                temperatureChange();
            } else {
                temperature += 2;
                temperatureChange();
            }
        } else if (round >= 17) {
            if (temperature == 10) {
                life -= 3;
                lifeChange();
            } else if (temperature == 9) {
                life -= 2;
                lifeChange();
                temperature++;
                temperatureChange();
            } else if (temperature == 8) {
                life--;
                lifeChange();
                temperature += 2;
                temperatureChange();
            } else {
                temperature += 3;
                temperatureChange();
            }
        }
    }, 1000);
}
// EVENT 17 - Pożar i dym
function event17AtDayNight() {
    if (biomData.title == `jungle` || biomData.title == `fjord`) // dodawanie temperatury z innego wydarzenia (bo robi to samo)
    event16AtDayNight();
    else setTimeout(function() {
        if (round < 9) {
            life--;
            lifeChange();
        } else if (round >= 9 && round < 17) {
            life -= 2;
            lifeChange();
        } else if (round >= 17) {
            life -= 3;
            lifeChange();
        }
    }, 1000);
}
// EVENT 18 - Zimny, ulewny deszcz
function event18AtDayNight() {
    setTimeout(function() {
        if (round < 9) {
            if (temperature == 0) {
                life--;
                lifeChange();
            } else {
                temperature--;
                temperatureChange();
            }
        } else if (round >= 9 && round < 17) {
            if (temperature == 0) {
                life -= 2;
                lifeChange();
            } else if (temperature == 1) {
                life--;
                lifeChange();
                temperature--;
                temperatureChange();
            } else {
                temperature -= 2;
                temperatureChange();
            }
        } else if (round >= 17) {
            if (temperature == 0) {
                life -= 3;
                lifeChange();
            } else if (temperature == 1) {
                life -= 2;
                lifeChange();
                temperature--;
                temperatureChange();
            } else if (temperature == 2) {
                life--;
                lifeChange();
                temperature -= 2;
                temperatureChange();
            } else {
                temperature -= 3;
                temperatureChange();
            }
        }
    }, 1000);
}
// EVENT 20 - Duchy poległych wcześniej  graczy
function event20AtDayNight() {
    if (btnId != 12 && btnId != 165) {
        if (frozenCrown == 0) setTimeout(function() {
            if (round < 9) {
                if (sanity == 0) {
                    life--;
                    lifeChange();
                } else {
                    sanity--;
                    sanityChange();
                }
            } else if (round >= 9 && round < 17) {
                if (sanity == 0) {
                    life -= 2;
                    lifeChange();
                } else if (sanity == 1) {
                    life--;
                    lifeChange();
                    sanity--;
                    sanityChange();
                } else {
                    sanity -= 2;
                    sanityChange();
                }
            } else if (round >= 17) {
                if (sanity == 0) {
                    life -= 3;
                    lifeChange();
                } else if (sanity == 1) {
                    life -= 2;
                    lifeChange();
                    sanity--;
                    sanityChange();
                } else if (sanity == 2) {
                    life--;
                    lifeChange();
                    sanity -= 2;
                    sanityChange();
                } else {
                    sanity -= 3;
                    sanityChange();
                }
            }
        }, 1000);
    }
}
// rzut kością i pokazanie wyniku
cubesBtnClick = document.querySelector(`.cubes-active`);
cubesBtnClick.addEventListener(`click`, ()=>{
    win = false;
    console.log("RZUCONO KOŚCIĄ");
    cubeResult.innerHTML = `<p> </p>`;
    setTimeout(function() {
        randomCube = Math.ceil(Math.random() * 6);
        console.log("Wynik z kostki: " + randomCube);
        cubeResult.innerHTML = `<p>${randomCube}</p>`;
        winOrLoose();
    }, 50);
});
// sprawdzanie wyniku walki z potworem
let win;
function winOrLoose() {
    const fightSumSpan = document.querySelector(`.fight-sum-span`);
    if (hiena == 0 && tanatosActive == 0) {
        if (sword == 1) {
            if (randomCube <= 2) {
                win = false;
                energy--;
                energyChange();
                if (coat == 0) {
                    life -= 2;
                    lifeChange();
                } else if (coat == 1) {
                    life--;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Porażka, spróbuje ponownie</p><span> energia -1 / życie -2</span>`;
                console.log("DONE1 " + randomCube);
            } else {
                win = true;
                energy--;
                energyChange();
                fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia -1</span>`;
                endLooseFight.classList.add(`end-loose-fight-active`);
                cubesBtn.classList.remove(`cubes-active`);
                endLooseFight.disabled = false;
                console.log("DONE2 " + randomCube);
                cubesBtn.disabled = true;
                gnomActive = false;
            }
        } else if (sword == 0) {
            if (randomCube <= 3) {
                win = false;
                energy--;
                energyChange();
                if (coat == 0) {
                    life -= 2;
                    lifeChange();
                } else if (coat == 1) {
                    life--;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Porażka, spróbuje ponownie</p><span> energia -1 / życie -2</span>`;
                console.log("DONE3 " + randomCube);
            } else {
                win = true;
                energy--;
                energyChange();
                fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia -1</span>`;
                endLooseFight.classList.add(`end-loose-fight-active`);
                cubesBtn.classList.remove(`cubes-active`);
                endLooseFight.disabled = false;
                console.log("DONE4 " + randomCube);
                cubesBtn.disabled = true;
                gnomActive = false;
            }
        }
    } else if (hiena == 1) {
        if (sword == 1) {
            if (randomCube <= 3) {
                win = false;
                energy--;
                energyChange();
                if (coat == 0) {
                    life--;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Porażka, spróbuje ponownie</p><span> energia -1 / życie -1</span>`;
                console.log("DONE1 - Hiena " + randomCube);
            } else {
                win = true;
                energy--;
                energyChange();
                starvation++;
                starvationChange();
                fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia -1 / głód +1</span>`;
                endLooseFight.classList.add(`end-loose-fight-active`);
                cubesBtn.classList.remove(`cubes-active`);
                endLooseFight.disabled = false;
                console.log("DONE2 - Hiena " + randomCube);
                cubesBtn.disabled = true;
                gnomActive = false;
                hiena = 0;
            }
        } else if (sword == 0) {
            if (randomCube <= 4) {
                win = false;
                energy--;
                energyChange();
                if (coat == 0) {
                    life--;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Porażka, spróbuje ponownie</p><span> energia -1 / życie -1</span>`;
                console.log("DONE3 - Hiena " + randomCube);
            } else {
                win = true;
                energy--;
                energyChange();
                starvation++;
                starvationChange();
                fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia -1 / głód +1</span>`;
                endLooseFight.classList.add(`end-loose-fight-active`);
                cubesBtn.classList.remove(`cubes-active`);
                endLooseFight.disabled = false;
                console.log("DONE4 " + randomCube);
                cubesBtn.disabled = true;
                gnomActive = false;
                hiena = 0;
            }
        }
    } else if (tanatosActive == 1) {
        if (sword == 1) {
            if (randomCube <= 2) {
                win = false;
                energy--;
                energyChange();
                sanity--;
                sanityChange();
                if (coat == 0) {
                    life -= 4;
                    lifeChange();
                } else if (coat == 1) {
                    life -= 3;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Porażka, spróbuje ponownie</p><span> energia -1 / psychika -1 / życie -4</span>`;
                console.log("DONE1 - Tanatos " + randomCube);
            } else {
                win = true;
                if (energy < 5) {
                    energy += 5;
                    energyChange();
                } else {
                    energy = 10;
                    energyChange();
                }
                if (sanity < 5) {
                    sanity += 5;
                    sanityChange();
                } else {
                    sanity = 10;
                    sanityChange();
                }
                if (starvation < 5) {
                    starvation += 5;
                    starvationChange();
                } else {
                    starvation = 10;
                    starvationChange();
                }
                if (life < 15) {
                    life += 5;
                    lifeChange();
                } else {
                    life = 20;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia +5 / psychika +5 / głód +5 / życie +5</span>`;
                endLooseFight.classList.add(`end-loose-fight-active`);
                cubesBtn.classList.remove(`cubes-active`);
                endLooseFight.disabled = false;
                console.log("DONE2 - Tanatos " + randomCube);
                cubesBtn.disabled = true;
                gnomActive = false;
                tanatosActive = 0;
                securis = 0;
                tanatosKilled = true;
                looseSecuris();
            }
        } else if (sword == 0) {
            if (randomCube <= 3) {
                win = false;
                energy--;
                energyChange();
                sanity--;
                sanityChange();
                if (coat == 0) {
                    life -= 4;
                    lifeChange();
                } else if (coat == 1) {
                    life -= 3;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Porażka, spróbuje ponownie</p><span> energia -1 / psychika -1 / życie -4</span>`;
                console.log("DONE3 - Tanatos " + randomCube);
            } else {
                win = true;
                if (energy < 5) {
                    energy += 5;
                    energyChange();
                } else {
                    energy = 10;
                    energyChange();
                }
                if (sanity < 5) {
                    sanity += 5;
                    sanityChange();
                } else {
                    sanity = 10;
                    sanityChange();
                }
                if (starvation < 5) {
                    starvation += 5;
                    starvationChange();
                } else {
                    starvation = 10;
                    starvationChange();
                }
                if (life < 15) {
                    life += 5;
                    lifeChange();
                } else {
                    life = 20;
                    lifeChange();
                }
                fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia +5 / psychika +5 / głód +5 / życie +5</span>`;
                endLooseFight.classList.add(`end-loose-fight-active`);
                cubesBtn.classList.remove(`cubes-active`);
                endLooseFight.disabled = false;
                console.log("DONE4 " + randomCube);
                cubesBtn.disabled = true;
                gnomActive = false;
                tanatosActive = 0;
                securis = 0;
                tanatosKilled = true;
                looseSecuris();
            }
        }
    }
    checkStatsToContinueFight(fightSumSpan, win);
    statsAfterKillGnom();
    if (win == true && orangutan == 1) fightOrangutanWinSpan();
}
function statsAfterKillGnom() {
    if (addStatsAfterKillGnom == 1 && win == true) {
        addStatsAfterKillGnom = 0;
        winWithGnomeToAddFireCard = 1;
        const fightSumSpan = document.querySelector(`.fight-sum-span`);
        if (energy < 6) {
            energy += 4;
            energyChange();
        } else {
            energy = 10;
            energyChange();
        }
        if (sanity < 7) {
            sanity += 3;
            sanityChange();
        } else {
            sanity = 10;
            sanityChange();
        }
        fightSumSpan.innerHTML = `<p>Zwycięstwo!</p><span> energia +3 / Psychika + 3 / Karta Ogniska</span>`;
        win = false;
        gnom = 0;
    }
}
// sprawdzanie stanu energii po odbytej walce
function checkStatsToContinueFight(fightFinalText, win) {
    if (energy == 0 && win == false) {
        addStatsAfterKillGnom = 0;
        fightFinalText.innerHTML = `<p>Przegrałeś walkę padając z wyczerpania</p><span> życie -6</span>`;
        if (hiena == 1) {
            fightFinalText.innerHTML = `<p>Przegrałeś walkę padając z wyczerpania</p><span> życie -4</span>`;
            hiena = 0;
            life -= 3;
            lifeChange();
        } else {
            life -= 4;
            lifeChange();
        }
        if (tanatosActive == 1) {
            securis = 0;
            looseSecuris();
            tanatosActive = 0;
        }
        endLooseFight.classList.add(`end-loose-fight-active`);
        cubesBtn.classList.remove(`cubes-active`);
        console.log("DONE5 " + randomCube);
        endLooseFight.disabled = false;
        cubesBtn.disabled = true;
        gnomActive = true;
        gnomKilled = false;
        frozenGolemActive = false;
        orangutan = 0;
    }
}
// Naciśnięcie przycisku "Użyj sejmitaru"
let useSejmitarBtnClick = document.querySelector(`.use-sejmitar-btn`);
useSejmitarBtnClick.addEventListener(`click`, ()=>{
    if (tanatosActive == 1) console.log("Nie możesz użyć Sejmitaru!");
    else {
        const sejmitarAnim = document.querySelector(`#sejmitar-anim`);
        const sejmitarAnimation = document.querySelector(`#sejmitar`);
        const sejmitarContainer = document.getElementById(`sejmitar-container`);
        sejmitar = 0;
        sejmitarAnimation.classList.remove(`sejmitar-anim`);
        sejmitarContainer.classList.remove(`sejmitar-container`);
        sejmitarAnim.classList.remove(`sejmitar-animation`);
        const showUseSejmitarBtn = document.querySelector(`.use-sejmitar-btn-container`);
        showUseSejmitarBtn.style.display = `none`;
        endFight();
        console.log(`orangutan222: ` + orangutan);
        if (orangutan == 1) fightOrangutanWinSpan();
        orangutan = 0;
        if (hiena == 1) {
            if (starvation < 10) {
                starvation++;
                starvationChange();
            }
        }
        hiena = 0;
        if (gnom == 1) {
            win = true;
            addStatsAfterKillGnom = 1;
            statsAfterKillGnom();
        }
        gnom = 0;
        fight = 0;
        lightUpUseButton();
    }
});
// Przycisk "Zakończ" po walce z potworem
endLooseFight.addEventListener(`click`, endFight);
// Zakończenie walki
function endFight() {
    const conditionalOfWinP = document.getElementById(`when-do-i-win-fight`);
    conditionalOfWinP.innerHTML = `Wygrywasz wyrzucając 4,5 lub 6 (z mieczem 3)`;
    fight = 0;
    lightUpUseButton();
    boardBg.classList.remove("block-whole-background");
    boardBg.style.display = "none";
    // pojawienie się postaci
    charHide.style.display = "block";
    // włączanie przycisku rundy
    const endRoundButton = document.querySelector(`.end-round`);
    endRoundButton.disabled = false;
    const fightCard = document.querySelector(`.monster-fight-card`);
    fightCard.classList.remove(`fight-animation-in`);
    fightCard.classList.add(`fight-animation-out`);
    setTimeout(function() {
        fightCard.style.display = `none`;
    }, 500);
    console.log("winWithGnomeToAddFireCard: " + winWithGnomeToAddFireCard);
    if (winWithGnomeToAddFireCard == 1) addFireCard();
    addStatsAfterKillGnom = 0;
    if (frozenGolemActive == true && win == 1) {
        frozenGolemActive = false;
        const frozenCrownAnimation = document.querySelector(`#frozenCrown`);
        const frozenCrownAnim = document.querySelector(`#frozenCrown-anim`);
        const frozenCrownContainer = document.getElementById(`frozenCrown-container`);
        frozenCrown = 1;
        frozenCrownAnimation.classList.add(`frozenCrown-anim`);
        setTimeout(function() {
            frozenCrownContainer.classList.add(`frozenCrown-container`);
            frozenCrownAnim.classList.add(`frozenCrown-animation`);
        }, 1600);
    }
}
function gameOver() {
    // schowanie całej gry
    const gameWindow = document.querySelector(`.game`);
    setTimeout(function() {
        gameWindow.classList.add(`end-game-fade-out`);
        setTimeout(function() {
            gameWindow.style.display = `none`;
            // wyświetlenie okna "Game Over"
            const gameOverWindow = document.querySelector(`.gameover-container`);
            gameOverWindow.style.display = `flex`;
        }, 1500);
    }, 800);
}
function endGame() {
    // schowanie całej gry
    const gameWindow = document.querySelector(`.game`);
    gameWindow.style.display = `none`;
    // wyświetlenie okna "End Game"
    const endGameWindow = document.querySelector(`.end-game-container`);
    endGameWindow.style.display = `flex`;
    // przypisanie wartości w tabeli
    const lifeSummary = document.querySelector(`.life-summary`);
    const starvationSummary = document.querySelector(`.starvation-summary`);
    const sanitySummary = document.querySelector(`.sanity-summary`);
    const itemsSummary = document.querySelector(`.items-summary`);
    const pointsSummary = document.querySelector(`.points-summary`);
    lifeSummary.innerHTML = `${life} pkt.`;
    starvationSummary.innerHTML = `${starvation} pkt.`;
    sanitySummary.innerHTML = `${sanity} pkt.`;
    let itemsSum = (axe + coat + torch + shoes + sword + sejmitar + frozenCrown) * 2;
    itemsSummary.innerHTML = `${itemsSum} pkt.`;
    // dodanie punktów
    let pointsSum = life + starvation + sanity + itemsSum;
    pointsSummary.innerHTML = `${pointsSum} pkt.`;
}
const tryAgainButton = document.querySelector(`.try-again-btn`);
tryAgainButton.addEventListener(`click`, function() {
    location.reload();
});
const playAgainButton = document.querySelector(`.play-again-btn`);
playAgainButton.addEventListener(`click`, function() {
    location.reload();
}); // animacja itemow chowa sie pod karty wydarzeń
 // DO ZROBIENIA
 // w całej krainie nastaje ciemność - sprawdzić czy działa w kraterze
 // rozgrzana ziemia pali stopy - korona znika nawet gdy stoi sie na lodowej grani - a nie powinna

},{"./img/gimp/event16.png":"bBpTi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./img/gimp/event1.png":"csIlC","./img/gimp/event2.png":"6mAoy","./img/gimp/event3.png":"i2LrM","./img/gimp/event4.png":"4WhBW","./img/gimp/event5.png":"82GyO","./img/gimp/event6.png":"lp4LF","./img/gimp/event7.png":"czVtR","./img/gimp/event8.png":"1eTyn","./img/gimp/event9.png":"arr0P","./img/gimp/event10.png":"1aM3n","./img/gimp/event11.png":"gINex","./img/gimp/event12.png":"gBBKy","./img/gimp/event13.png":"b0PHx","./img/gimp/event14.png":"ggOfd","./img/gimp/event15.png":"1wctj","./img/gimp/event17.png":"cpsPt","./img/gimp/event18.png":"kaCdy","./img/gimp/event19.png":"h54JY","./img/gimp/event20.png":"5XBoH"}],"bBpTi":[function(require,module,exports) {
module.exports = require("ce63e61fdf8eb7f").getBundleURL("djT5B") + "event16.9721aa64.png" + "?" + Date.now();

},{"ce63e61fdf8eb7f":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"csIlC":[function(require,module,exports) {
module.exports = require("706a8543c367820f").getBundleURL("djT5B") + "event1.c6c40bd5.png" + "?" + Date.now();

},{"706a8543c367820f":"lgJ39"}],"6mAoy":[function(require,module,exports) {
module.exports = require("7fc48f96f588d1e6").getBundleURL("djT5B") + "event2.301b3c97.png" + "?" + Date.now();

},{"7fc48f96f588d1e6":"lgJ39"}],"i2LrM":[function(require,module,exports) {
module.exports = require("537b1e41aa40e3a3").getBundleURL("djT5B") + "event3.38496959.png" + "?" + Date.now();

},{"537b1e41aa40e3a3":"lgJ39"}],"4WhBW":[function(require,module,exports) {
module.exports = require("87f22bffe3ca1991").getBundleURL("djT5B") + "event4.0b9cd8ca.png" + "?" + Date.now();

},{"87f22bffe3ca1991":"lgJ39"}],"82GyO":[function(require,module,exports) {
module.exports = require("2ef1d9c13dbc999d").getBundleURL("djT5B") + "event5.e15a8b82.png" + "?" + Date.now();

},{"2ef1d9c13dbc999d":"lgJ39"}],"lp4LF":[function(require,module,exports) {
module.exports = require("39152129e5bb226b").getBundleURL("djT5B") + "event6.cae1bec7.png" + "?" + Date.now();

},{"39152129e5bb226b":"lgJ39"}],"czVtR":[function(require,module,exports) {
module.exports = require("85d277b1b64dd5d8").getBundleURL("djT5B") + "event7.5c7844b8.png" + "?" + Date.now();

},{"85d277b1b64dd5d8":"lgJ39"}],"1eTyn":[function(require,module,exports) {
module.exports = require("69931c135fb2c686").getBundleURL("djT5B") + "event8.32b4608b.png" + "?" + Date.now();

},{"69931c135fb2c686":"lgJ39"}],"arr0P":[function(require,module,exports) {
module.exports = require("2b62968c179341bf").getBundleURL("djT5B") + "event9.ad5d3b65.png" + "?" + Date.now();

},{"2b62968c179341bf":"lgJ39"}],"1aM3n":[function(require,module,exports) {
module.exports = require("f0253637989bf750").getBundleURL("djT5B") + "event10.eb538521.png" + "?" + Date.now();

},{"f0253637989bf750":"lgJ39"}],"gINex":[function(require,module,exports) {
module.exports = require("682cf7f81e906873").getBundleURL("djT5B") + "event11.1e0dd6f1.png" + "?" + Date.now();

},{"682cf7f81e906873":"lgJ39"}],"gBBKy":[function(require,module,exports) {
module.exports = require("537b52a9f3096cf9").getBundleURL("djT5B") + "event12.97f6b890.png" + "?" + Date.now();

},{"537b52a9f3096cf9":"lgJ39"}],"b0PHx":[function(require,module,exports) {
module.exports = require("539e6770cbc0cfb2").getBundleURL("djT5B") + "event13.7ffb77b0.png" + "?" + Date.now();

},{"539e6770cbc0cfb2":"lgJ39"}],"ggOfd":[function(require,module,exports) {
module.exports = require("f00c6e40203030c5").getBundleURL("djT5B") + "event14.9fed5df7.png" + "?" + Date.now();

},{"f00c6e40203030c5":"lgJ39"}],"1wctj":[function(require,module,exports) {
module.exports = require("85b58b7a39f57ee2").getBundleURL("djT5B") + "event15.08ee3496.png" + "?" + Date.now();

},{"85b58b7a39f57ee2":"lgJ39"}],"cpsPt":[function(require,module,exports) {
module.exports = require("4f9a385bf27873f4").getBundleURL("djT5B") + "event17.fd345fdb.png" + "?" + Date.now();

},{"4f9a385bf27873f4":"lgJ39"}],"kaCdy":[function(require,module,exports) {
module.exports = require("4f04165ff7670f07").getBundleURL("djT5B") + "event18.d11f6c5d.png" + "?" + Date.now();

},{"4f04165ff7670f07":"lgJ39"}],"h54JY":[function(require,module,exports) {
module.exports = require("efa4aa177bcc84ec").getBundleURL("djT5B") + "event19.6c283c8f.png" + "?" + Date.now();

},{"efa4aa177bcc84ec":"lgJ39"}],"5XBoH":[function(require,module,exports) {
module.exports = require("a2f16f15f83bdc16").getBundleURL("djT5B") + "event20.c2e39b1c.png" + "?" + Date.now();

},{"a2f16f15f83bdc16":"lgJ39"}]},["1xTx8","e4QD4"], "e4QD4", "parcelRequire333c")

//# sourceMappingURL=index.4684b93a.js.map
