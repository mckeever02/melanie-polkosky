/** This file was autogenerated by Haiku at 20200422201109.
Copyright (c) 2020 mckvr4. All rights reserved.
*/
var HaikuComponentEmbed_mckvr4_mickeyMouse = function () { function e(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e } function t(e, t) { return t = { exports: {} }, e(t, t.exports), t.exports } var i = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, a = t(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.tokenize = function (e, t) { for (var i = [], a = e, r = a.length, n = 0; a.length > 0;) { for (var s = 0; s < t.length; s++) { var o = t[s], l = o.re.exec(a); if (l) { var u = l[0]; i.push({ value: u, type: o.type }), a = a.slice(l[0].length, a.length); break } } if (n++ > r) throw new Error("Unable to tokenize expression " + e) } return i }; var i = [{ type: "whitespace", re: /^[\s]+/ }, { type: "paren_open", re: /^\(/ }, { type: "paren_close", re: /^\)/ }, { type: "square_open", re: /^\[/ }, { type: "square_close", re: /^]/ }, { type: "curly_open", re: /^\{/ }, { type: "curly_close", re: /^\}/ }, { type: "rest", re: /^\.\.\./ }, { type: "colon", re: /^:/ }, { type: "comma", re: /^,/ }, { type: "identifier", re: /^[a-zA-Z0-9_$]+/ }]; t.tokenizeParameters = function (e) { return t.tokenize(e, i) }; var a = "~!@#$%^&*-_=+/|:'<,>.?".split("").join("\\"), r = [{ type: "whitespace", re: /^[\s]+/ }, { type: "paren_open", re: /^\(/ }, { type: "paren_close", re: /^\)/ }, { type: "number", re: /^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i }, { type: "symbol", re: new RegExp("^([$" + a + "][$" + a + "]*)([^\\n\\S]*:(?!:))?") }, { type: "identifier", re: new RegExp("^([$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*)([^\\n\\S]*:(?!:))?") }]; t.tokenizeDirective = function (e) { var i = t.tokenize(e, r).filter(function (e) { return "whitespace" !== e.type }); return i.forEach(function (e) { "number" === e.type && (e.value = Number(e.value)) }), i }, t.isNumeric = function (e) { return !isNaN(parseFloat(e)) && isFinite(e) } }); e(a); a.tokenize, a.tokenizeParameters, a.tokenizeDirective, a.isNumeric; var r = t(function (e, t) { function i(e, t, i) { var a = { value: null, type: "void" }; if (i.length < 1 || e > i.length) return a; for (var r = 0, n = 0; n < i.length; n++)if (i[n].type === t && (r += 1), r === e) return i[n]; return a } function r(e) { if (e.length < 1) return []; for (var t, i = "", a = "", r = e.shift(), n = []; r;) { switch (r.type) { case "whitespace": a = " "; break; case "comma": a = ","; break; case "colon": a = ":"; break; case "paren_open": a = "[", n.push("square"); break; case "paren_close": a = "]", n.pop(); break; case "square_open": a = "[", n.push("square"); break; case "square_close": a = "]", n.pop(); break; case "curly_open": a = "{", n.push("curly"); break; case "curly_close": a = "}", n.pop(); break; case "rest": t = e.shift(), a = JSON.stringify({ __rest: t.value }); break; case "identifier": a = '"' + r.value + '"', !e[0] || "comma" !== e[0].type && "square_close" !== e[0].type && "curly_close" !== e[0].type || (a += "square" === n[n.length - 1] ? "" : ':"' + r.value + '"'); break; default: a = "" }i += a, r = e.shift() } return JSON.parse(i) } function n(e) { for (var t = a.tokenizeParameters(e), i = [], n = 0; n < t.length; n++)"whitespace" !== t[n].type && i.push(t[n]); try { return r(i) } catch (t) { return console.warn("Unable to parse signature " + e, t), [] } } function s(e) { var t = e.toString(); ")" === t[t.length - 1] && "(" === t[0] && (t = t.slice(1)); var r = t.indexOf("("), s = t.indexOf(")"), o = t.slice(0, r), l = t.slice(r, s + 1), u = t.slice(s + 1, t.length), c = u.slice(u.indexOf("{") + 1, u.length - 1).trim(), d = { type: u.match(/^\s*=>\s*{/) ? "ArrowFunctionExpression" : "FunctionExpression", name: i(2, "identifier", a.tokenizeParameters(o)).value, params: n(l), body: c }; return e.injectee && (d.injectee = !0), { __function: d } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s }); e(r); var n = t(function (e, t) { function i(e, t) { if (!e.specification) { var i = r.default(e); i && i.__function ? (e.specification = i.__function, t && (e.specification.params = t)) : e.specification = !0 } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i }); e(n); var s = t(function (e, t) { function i() { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; var i = e.shift(); return "function" != typeof i ? (console.warn("[haiku core] Inject expects a function as the first argument"), i) : (e.length > 0 ? n.default(i, e) : n.default(i, null), i.injectee = !0, i) } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i }); e(s); var o = "Haiku Core is a JavaScript library for building user interfaces", l = "https://www.haikuforteams.com", u = { lib: "lib", dom: "dom", components: "components", dist: "dist" }, c = "https://github.com/HaikuTeam/core", d = ["Matthew Trost <matthew@haiku.ai>", "Zack Brown <zack@haiku.ai>", "Taylor Poe <taylor@haiku.ai>", "Sasha Joseph <sasha@haiku.ai>"], p = { "@angular/core": "^6.0.9", async: "^2.5.0", chokidar: "^1.7.0", "cross-env": "^5.1.6", depcheck: "^0.6.7", express: "4.14.1", filesize: "3.5.10", "fs-extra": "^4.0.2", "haiku-testing": "5.0.0", handlebars: "^4.0.8", "istanbul-reporter-cobertura-haiku": "^1.0.2", jsdom: "^11.1.0", "leaked-handles": "^5.2.0", nodemon: "1.11.0", nyc: "^13.0.1", opn: "^5.3.0", react: "^16.0.0", "react-dom": "^16.0.0", "react-router-dom": "^4.1.1", rollup: "^0.53.3", "rollup-plugin-commonjs": "^8.2.6", "rollup-plugin-json": "^2.3.0", "rollup-plugin-node-resolve": "^3.0.0", "rollup-plugin-uglify-es": "^0.0.1", rxjs: "^6.3.3", "tap-spec": "^4.1.2", tape: "^4.9.0", "ts-loader": "^4.4.2", "ts-node": "^6.1.0", "tsconfig-paths": "^3.3.2", tslint: "^5.11.0", "tslint-config-haiku": "^1.0.16", "tslint-no-circular-imports": "^0.5.0", typescript: "^3.0.3", webpack: "^4.16.0", "webpack-cli": "^3.0.8" }, f = { "@angular/core": "^6.0.9", react: "^16.0.0 || ^15.4.2", "react-dom": "^16.0.0 || ^15.4.2" }, h = { name: "@haiku/core", version: "5.0.0", description: o, homepage: l, directories: u, repository: c, main: "index.js", authors: d, license: "MIT", devDependencies: p, peerDependencies: f }, v = Object.freeze({ name: "@haiku/core", version: "5.0.0", description: o, homepage: l, directories: u, repository: c, main: "index.js", authors: d, license: "MIT", devDependencies: p, peerDependencies: f, default: h }), m = v && h || v, k = t(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var a = m.version, r = function () { var e = {}; return "undefined" != typeof window ? e = window : void 0 !== i && (e = i), e.haiku || (e.haiku = {}), e.haiku[a] || (e.haiku[a] = {}), e.haiku[a].models || (e.haiku[a].models = {}), e.haiku[a].idCounter || (e.haiku[a].idCounter = 1e3), e.haiku[a].enhance || (e.haiku[a].enhance = n.default), e.haiku[a].inject || (e.haiku[a].inject = s.default), e.haiku[a] }(); t.default = r }); e(k); k.default; var y = { metadata: { version: "0.0.3", username: "michael+2@mckvr.com", organization: "mckvr4", project: "mickeyMouse", branch: "master", folder: "/Users/michael/.haiku/projects/mckvr4/mickeyMouse", uuid: "8008f7a1-46f3-4146-ac6d-63318e9b14d0", root: "https://cdn.haiku.ai/e43648cd-e7dc-4722-967b-c1b07ac7859e/9ab6dd611b00a0dff3adc64ff48b5cd486215249/", core: "5.0.0", title: "Main", type: "haiku", relpath: "code/main/code.js" }, options: {}, states: {}, eventHandlers: {}, timelines: { Default: { "haiku:Main-03757d2ca1026e0a": { "style.WebkitTapHighlightColor": "rgba(0,0,0,0)", "style.position": "relative", "style.overflowX": "hidden", "style.overflowY": "hidden", "sizeAbsolute.x": 600, "sizeAbsolute.y": 600, "sizeMode.x": 1, "sizeMode.y": 1, "sizeMode.z": 1, "style.background": { 0: { value: "rgba(0, 0, 0, 0)", edited: !0, curve: "easeInOutQuad" }, 3617: { value: "rgba(0, 0, 0, 0)", edited: !0 } } }, "haiku:Ellipse-56-8a922364c1074ea8": { cx: 130, cy: 130, r: 129, stroke: "#637A7F", strokeWidth: 2, strokeDasharray: { 0: { value: 1e3, edited: !0 } }, strokeDashoffset: { 0: { value: 1e3, edited: !0, curve: "easeInQuad" }, 3000: { value: 0, edited: !0 } }, fillOpacity: { 0: { value: 0, edited: !0 } } }, "haiku:Ellipse-55-e4de3b952af75e0c": { cx: 79.5, cy: 79.5, r: 78.5, stroke: "#637A7F", strokeWidth: 2, strokeDasharray: { 0: { value: 1e3, edited: !0 }, 2000: { value: 1e3, edited: !0 } }, strokeDashoffset: { 0: { value: 1e3, edited: !0 }, 2000: { value: 1e3, edited: !0, curve: "easeInCubic" }, 3000: { value: 0, edited: !0 } }, fillOpacity: { 0: { value: 0, edited: !0 } } }, "haiku:Ellipse-54-0a7ae789c570215a": { cx: 79.5, cy: 79.5, r: 78.5, stroke: "#637A7F", strokeWidth: 2, strokeDasharray: { 0: { value: 1e3, edited: !0 }, 2500: { value: 1e3, edited: !0 } }, strokeDashoffset: { 0: { value: 1e3, edited: !0 }, 2500: { value: 1e3, edited: !0, curve: "easeInCubic" }, 3300: { value: 0, edited: !0 } }, fillOpacity: { 0: { value: 0, edited: !0 } } }, "haiku:Frame-1-c70456ab83cc3063": { "origin.y": .5, "style.position": "absolute", "translation.x": 284.76380558482987, "translation.y": 324.17788253354416, "rotation.z": .178, "scale.x": { 0: { value: 1, edited: !0 }, 2617: { value: 1, edited: !0, curve: "easeInBack" }, 3617: { value: 1.28, edited: !0 } }, "scale.y": { 0: { value: 1, edited: !0 }, 2617: { value: 1, edited: !0, curve: "easeInBack" }, 3617: { value: 1.28, edited: !0 } }, "style.overflow": "visible", "origin.x": .5, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 260, "sizeMode.x": 1, "sizeAbsolute.y": 260, "sizeMode.y": 1, "style.zIndex": { 0: { value: 2, edited: !0 } } }, "haiku:Frame-2-5bda90d1cabb2480": { "origin.y": .5, "style.position": "absolute", "translation.x": 148.57938879995362, "translation.y": 137.75995124166738, "rotation.z": .178, "scale.x": { 0: { value: 1, edited: !0 }, 2617: { value: 1, edited: !0, curve: "easeInBack" }, 3617: { value: 1.28, edited: !0 } }, "scale.y": { 0: { value: 1, edited: !0 }, 2617: { value: 1, edited: !0, curve: "easeInBack" }, 3617: { value: 1.28, edited: !0 } }, "style.overflow": "visible", "origin.x": .5, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 159, "sizeMode.x": 1, "sizeAbsolute.y": 159, "sizeMode.y": 1, "style.zIndex": { 0: { value: 3, edited: !0 } } }, "haiku:Frame-3-7ec72304e5b784b7": { "origin.y": .5, "style.position": "absolute", "translation.x": 470.96838879995363, "translation.y": 196.4089512416674, "rotation.z": .178, "scale.x": { 0: { value: 1, edited: !0 }, 2617: { value: 1, edited: !0, curve: "easeInBack" }, 3600: { value: 1.28, edited: !0 } }, "scale.y": { 0: { value: 1, edited: !0 }, 2617: { value: 1, edited: !0, curve: "easeInBack" }, 3600: { value: 1.28, edited: !0 } }, "style.overflow": "visible", "origin.x": .5, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 159, "sizeMode.x": 1, "sizeAbsolute.y": 159, "sizeMode.y": 1, "style.zIndex": { 0: { value: 4, edited: !0 } } } } }, template: { elementName: "div", attributes: { "haiku-id": "Main-03757d2ca1026e0a", "haiku-title": "Main" }, children: [{ elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Frame-3-7ec72304e5b784b7", "haiku-title": "Frame 3", "haiku-source": "designs/1DD6dWmpb4UkGTJHQXA2mj-Untitled.figma.contents/frames/Frame 3.svg#lock" }, children: [{ elementName: "g", attributes: { "haiku-id": "Frame-3-dee9ffaffb8961a2", id: "Frame 3" }, children: [{ elementName: "circle", attributes: { "haiku-id": "Ellipse-54-0a7ae789c570215a", id: "Ellipse 54" }, children: [] }] }] }, { elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Frame-2-5bda90d1cabb2480", "haiku-title": "Frame 2", "haiku-source": "designs/1DD6dWmpb4UkGTJHQXA2mj-Untitled.figma.contents/frames/Frame 2.svg#lock" }, children: [{ elementName: "g", attributes: { "haiku-id": "Frame-2-8853f3f8d168002d", id: "Frame 2" }, children: [{ elementName: "circle", attributes: { "haiku-id": "Ellipse-55-e4de3b952af75e0c", id: "Ellipse 55" }, children: [] }] }] }, { elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Frame-1-c70456ab83cc3063", "haiku-title": "Frame 1", "haiku-source": "designs/1DD6dWmpb4UkGTJHQXA2mj-Untitled.figma.contents/frames/Frame 1.svg#lock" }, children: [{ elementName: "g", attributes: { "haiku-id": "Frame-1-85a13f5ec7c648ef", id: "Frame 1" }, children: [{ elementName: "circle", attributes: { "haiku-id": "Ellipse-56-8a922364c1074ea8", id: "Ellipse 56" }, children: [] }] }] }] } }; return t(function (e) { function t() { return console.error('[haiku core] core version 5.0.0 seems to be missing. index.embed.js expects it at window.HaikuCore["5.0.0"], but we cannot find it. you may need to add a <script src="path/to/HaikuCore.js"><\/script> to fix this.'), y } var i = window.HaikuResolve && window.HaikuResolve("5.0.0"); if (i) e.exports = i(y); else { for (var a in y) t[a] = y[a]; e.exports = t } }) }();