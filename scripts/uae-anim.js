/** This file was autogenerated by Haiku at 20200423230104.
Copyright (c) 2020 mckvr4. All rights reserved.
*/
var HaikuComponentEmbed_mckvr4_uae = function () { function e(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e } function t(e, t) { return t = { exports: {} }, e(t, t.exports), t.exports } var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, i = t(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.tokenize = function (e, t) { for (var a = [], i = e, r = i.length, s = 0; i.length > 0;) { for (var n = 0; n < t.length; n++) { var o = t[n], l = o.re.exec(i); if (l) { var d = l[0]; a.push({ value: d, type: o.type }), i = i.slice(l[0].length, i.length); break } } if (s++ > r) throw new Error("Unable to tokenize expression " + e) } return a }; var a = [{ type: "whitespace", re: /^[\s]+/ }, { type: "paren_open", re: /^\(/ }, { type: "paren_close", re: /^\)/ }, { type: "square_open", re: /^\[/ }, { type: "square_close", re: /^]/ }, { type: "curly_open", re: /^\{/ }, { type: "curly_close", re: /^\}/ }, { type: "rest", re: /^\.\.\./ }, { type: "colon", re: /^:/ }, { type: "comma", re: /^,/ }, { type: "identifier", re: /^[a-zA-Z0-9_$]+/ }]; t.tokenizeParameters = function (e) { return t.tokenize(e, a) }; var i = "~!@#$%^&*-_=+/|:'<,>.?".split("").join("\\"), r = [{ type: "whitespace", re: /^[\s]+/ }, { type: "paren_open", re: /^\(/ }, { type: "paren_close", re: /^\)/ }, { type: "number", re: /^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i }, { type: "symbol", re: new RegExp("^([$" + i + "][$" + i + "]*)([^\\n\\S]*:(?!:))?") }, { type: "identifier", re: new RegExp("^([$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*)([^\\n\\S]*:(?!:))?") }]; t.tokenizeDirective = function (e) { var a = t.tokenize(e, r).filter(function (e) { return "whitespace" !== e.type }); return a.forEach(function (e) { "number" === e.type && (e.value = Number(e.value)) }), a }, t.isNumeric = function (e) { return !isNaN(parseFloat(e)) && isFinite(e) } }); e(i); i.tokenize, i.tokenizeParameters, i.tokenizeDirective, i.isNumeric; var r = t(function (e, t) { function a(e, t, a) { var i = { value: null, type: "void" }; if (a.length < 1 || e > a.length) return i; for (var r = 0, s = 0; s < a.length; s++)if (a[s].type === t && (r += 1), r === e) return a[s]; return i } function r(e) { if (e.length < 1) return []; for (var t, a = "", i = "", r = e.shift(), s = []; r;) { switch (r.type) { case "whitespace": i = " "; break; case "comma": i = ","; break; case "colon": i = ":"; break; case "paren_open": i = "[", s.push("square"); break; case "paren_close": i = "]", s.pop(); break; case "square_open": i = "[", s.push("square"); break; case "square_close": i = "]", s.pop(); break; case "curly_open": i = "{", s.push("curly"); break; case "curly_close": i = "}", s.pop(); break; case "rest": t = e.shift(), i = JSON.stringify({ __rest: t.value }); break; case "identifier": i = '"' + r.value + '"', !e[0] || "comma" !== e[0].type && "square_close" !== e[0].type && "curly_close" !== e[0].type || (i += "square" === s[s.length - 1] ? "" : ':"' + r.value + '"'); break; default: i = "" }a += i, r = e.shift() } return JSON.parse(a) } function s(e) { for (var t = i.tokenizeParameters(e), a = [], s = 0; s < t.length; s++)"whitespace" !== t[s].type && a.push(t[s]); try { return r(a) } catch (t) { return console.warn("Unable to parse signature " + e, t), [] } } function n(e) { var t = e.toString(); ")" === t[t.length - 1] && "(" === t[0] && (t = t.slice(1)); var r = t.indexOf("("), n = t.indexOf(")"), o = t.slice(0, r), l = t.slice(r, n + 1), d = t.slice(n + 1, t.length), u = d.slice(d.indexOf("{") + 1, d.length - 1).trim(), c = { type: d.match(/^\s*=>\s*{/) ? "ArrowFunctionExpression" : "FunctionExpression", name: a(2, "identifier", i.tokenizeParameters(o)).value, params: s(l), body: u }; return e.injectee && (c.injectee = !0), { __function: c } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n }); e(r); var s = t(function (e, t) { function a(e, t) { if (!e.specification) { var a = r.default(e); a && a.__function ? (e.specification = a.__function, t && (e.specification.params = t)) : e.specification = !0 } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a }); e(s); var n = t(function (e, t) { function a() { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; var a = e.shift(); return "function" != typeof a ? (console.warn("[haiku core] Inject expects a function as the first argument"), a) : (e.length > 0 ? s.default(a, e) : s.default(a, null), a.injectee = !0, a) } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a }); e(n); var o = "Haiku Core is a JavaScript library for building user interfaces", l = "https://www.haikuforteams.com", d = { lib: "lib", dom: "dom", components: "components", dist: "dist" }, u = "https://github.com/HaikuTeam/core", c = ["Matthew Trost <matthew@haiku.ai>", "Zack Brown <zack@haiku.ai>", "Taylor Poe <taylor@haiku.ai>", "Sasha Joseph <sasha@haiku.ai>"], h = { "@angular/core": "^6.0.9", async: "^2.5.0", chokidar: "^1.7.0", "cross-env": "^5.1.6", depcheck: "^0.6.7", express: "4.14.1", filesize: "3.5.10", "fs-extra": "^4.0.2", "haiku-testing": "5.0.0", handlebars: "^4.0.8", "istanbul-reporter-cobertura-haiku": "^1.0.2", jsdom: "^11.1.0", "leaked-handles": "^5.2.0", nodemon: "1.11.0", nyc: "^13.0.1", opn: "^5.3.0", react: "^16.0.0", "react-dom": "^16.0.0", "react-router-dom": "^4.1.1", rollup: "^0.53.3", "rollup-plugin-commonjs": "^8.2.6", "rollup-plugin-json": "^2.3.0", "rollup-plugin-node-resolve": "^3.0.0", "rollup-plugin-uglify-es": "^0.0.1", rxjs: "^6.3.3", "tap-spec": "^4.1.2", tape: "^4.9.0", "ts-loader": "^4.4.2", "ts-node": "^6.1.0", "tsconfig-paths": "^3.3.2", tslint: "^5.11.0", "tslint-config-haiku": "^1.0.16", "tslint-no-circular-imports": "^0.5.0", typescript: "^3.0.3", webpack: "^4.16.0", "webpack-cli": "^3.0.8" }, f = { "@angular/core": "^6.0.9", react: "^16.0.0 || ^15.4.2", "react-dom": "^16.0.0 || ^15.4.2" }, k = { name: "@haiku/core", version: "5.0.0", description: o, homepage: l, directories: d, repository: u, main: "index.js", authors: c, license: "MIT", devDependencies: h, peerDependencies: f }, p = Object.freeze({ name: "@haiku/core", version: "5.0.0", description: o, homepage: l, directories: d, repository: u, main: "index.js", authors: c, license: "MIT", devDependencies: h, peerDependencies: f, default: k }), v = p && k || p, y = t(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var i = v.version, r = function () { var e = {}; return "undefined" != typeof window ? e = window : void 0 !== a && (e = a), e.haiku || (e.haiku = {}), e.haiku[i] || (e.haiku[i] = {}), e.haiku[i].models || (e.haiku[i].models = {}), e.haiku[i].idCounter || (e.haiku[i].idCounter = 1e3), e.haiku[i].enhance || (e.haiku[i].enhance = s.default), e.haiku[i].inject || (e.haiku[i].inject = n.default), e.haiku[i] }(); t.default = r }); e(y); y.default; var m = { metadata: { username: "michael+2@mckvr.com", uuid: "179e2668-67e3-4c01-b6f3-21f1870e37da", organization: "mckvr4", project: "uae", branch: "master", folder: "/Users/michael/.haiku/projects/mckvr4/uae", version: "0.0.2", root: "https://cdn.haiku.ai/ff525dae-88e5-46bd-8458-6fb1df6ab441/9e091ef03a65d5601b334fccfe8d7174ab945128/", core: "5.0.0", title: "Main", type: "haiku", relpath: "code/main/code.js" }, options: {}, states: {}, eventHandlers: {}, timelines: { Default: { "haiku:Sand-005bb29064183655": { "style.position": "absolute", "sizeMode.x": 1, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 519, fill: "none", "sizeAbsolute.y": 8, "sizeMode.y": 1, "translation.x": 300, "translation.y": 522.4, "style.zIndex": 1 }, "haiku:Left-cbbe407d8c1a74dc": { x: 1, y: 28, width: 22, height: 66, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 250: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 250: { value: 500, edited: !0, curve: "linear" }, 950: { value: 0, edited: !0 } } }, "haiku:Floor1-2f0164fac1c95ae9": { "sizeAbsolute.y": 113, "sizeMode.x": 1, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 78, "style.position": "absolute", fill: "none", "sizeMode.y": 1, "translation.x": 300, "translation.y": 477.96046199999995, "style.zIndex": 5, "scale.x": 1.374, "scale.y": 1.374 }, "haiku:Floor1-c37dcb5a89ffa59d": { fill: "#194148", stroke: "#637A7F", strokeWidth: 2 }, "haiku:Right-4d9b0013deae0a91": { d: "M54.625 33H77V112H54.625V33Z", strokeDasharray: { 0: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "linear" }, 600: { value: 0, edited: !0 } } }, "haiku:Left-dd09f5199b807b33": { x: 1, y: 60, width: 21.5625, height: 52, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 67: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 67: { value: 500, edited: !0, curve: "linear" }, 750: { value: 0, edited: !0 } } }, "haiku:Center-0e989d3013b458f9": { d: "M7.5 1H70.5V112H7.5V1Z", strokeDasharray: { 0: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "linear" }, 800: { value: 0, edited: !0 } } }, "haiku:Vector-06addfa29000c85d": { d: "M518.745 5.16142C510.337 7.37624 498.63 7.37623 490.223 5.16142L480.736 2.66238C472.328 0.447566 460.621 0.447567 452.214 2.66239L442.727 5.16142C434.319 7.37624 422.612 7.37623 414.205 5.16142L404.718 2.66238C396.311 0.447565 384.603 0.447565 376.196 2.66238L366.709 5.16142C358.302 7.37624 346.594 7.37623 338.187 5.16142L328.7 2.66238C320.293 0.447566 308.585 0.447567 300.178 2.66239L290.691 5.16142C282.284 7.37624 270.577 7.37623 262.169 5.16142L252.682 2.66238C244.275 0.447566 232.568 0.447567 224.16 2.66239L214.674 5.16142C206.266 7.37624 194.559 7.37623 186.151 5.16142L176.665 2.66238C168.257 0.447565 156.55 0.447565 148.142 2.66238L138.656 5.16142C130.248 7.37624 118.541 7.37623 110.133 5.16142L100.647 2.66238C92.2391 0.447566 80.5319 0.447567 72.1243 2.66239L62.6378 5.16142C54.2302 7.37624 42.523 7.37623 34.1154 5.16142L24.6288 2.66238C17.473 0.777329 0.0595542 1.82039 0.0595542 1.82039", stroke: "#637A7F", strokeWidth: 2, strokeLinejoin: "round", strokeDasharray: { 0: { value: 1e3, edited: !0 } }, strokeDashoffset: { 0: { value: 1e3, edited: !0, curve: "easeInOutQuad" }, 200: { value: 1e3, edited: !0, curve: "linear" }, 2200: { value: 0, edited: !0 } } }, "haiku:Floor2-8f4e97f8d14ee1a3": { "sizeAbsolute.y": 95, "sizeMode.x": 1, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 57, "style.position": "absolute", fill: "none", "sizeMode.y": 1, "translation.x": 300, "translation.y": 338.67, "style.zIndex": 4, "scale.x": 1.374, "scale.y": 1.374 }, "haiku:Floor2-a33879a5fb8e7f4a": { fill: "#194148", stroke: "#637A7F", strokeWidth: 2 }, "haiku:Right-bd437b3f30908e6c": { x: 34, y: 56, width: 22, height: 38, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 250: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 250: { value: 500, edited: !0, curve: "linear" }, 950: { value: 0, edited: !0 } } }, "haiku:Main-03757d2ca1026e0a": { "style.WebkitTapHighlightColor": "rgba(0,0,0,0)", "style.position": "relative", "style.overflowX": "hidden", "style.overflowY": "hidden", "sizeAbsolute.x": 600, "sizeAbsolute.y": 600, "sizeMode.x": 1, "sizeMode.y": 1, "sizeMode.z": 1, "style.background": { 0: { value: "#194148", edited: !0 } } }, "haiku:Center-ef04f3a2cfafd84a": { x: 7, y: 1, width: 44, height: 93, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 250: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 250: { value: 500, edited: !0, curve: "linear" }, 950: { value: 0, edited: !0 } } }, "haiku:Floor3-27aac42303fd3834": { "sizeAbsolute.y": 103, "sizeMode.x": 1, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 37, "style.position": "absolute", fill: "none", "sizeMode.y": 1, "translation.x": 300, "translation.y": 205.83500512695315, "style.zIndex": 3, "scale.x": 1.374, "scale.y": 1.374 }, "haiku:Floor3-4096c24bafa8fc17": { fill: "#194148", stroke: "#637A7F", strokeWidth: 2 }, "haiku:Right-3881c0af4d1dbdf1": { x: 13, y: 15, width: 23, height: 87, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 400: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 400: { value: 500, edited: !0, curve: "linear" }, 1200: { value: 0, edited: !0 } } }, "haiku:Left-e47e3b883a95010b": { x: 1, y: 42, width: 23, height: 60, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 400: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 400: { value: 500, edited: !0, curve: "linear" }, 1200: { value: 0, edited: !0 } } }, "haiku:Center-fc5a28a19c538eb0": { x: 8, y: 1, width: 22, height: 101, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 400: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 400: { value: 500, edited: !0, curve: "linear" }, 1200: { value: 0, edited: !0 } } }, "haiku:Floor4-d96ba96f57bde5c9": { "sizeAbsolute.y": 65, "sizeMode.x": 1, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 14, "style.position": "absolute", fill: "none", "sizeMode.y": 1, "translation.x": 300, "translation.y": 93.074, "style.zIndex": 2, "scale.x": 1.374, "scale.y": 1.374 }, "haiku:Rectangle-71-3d822020202f54c4": { x: 1, y: 1, width: 12, height: 63, fill: "#194148", stroke: "#637A7F", strokeWidth: 2, strokeDasharray: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 867: { value: 500, edited: !0 } }, strokeDashoffset: { 0: { value: 500, edited: !0, curve: "easeInOutQuad" }, 867: { value: 500, edited: !0, curve: "linear" }, 1567: { value: 0, edited: !0 } } }, "haiku:Mast-e5373b9a6ffd2e46": { "style.position": "absolute", "sizeAbsolute.y": 41, "style.margin": "0", "style.padding": "0", "style.border": "0", "sizeAbsolute.x": 2, "sizeMode.x": 1, fill: "none", "sizeMode.y": 1, "translation.x": 300, "translation.y": 48.844, "style.zIndex": 6, "scale.y": { 0: { value: 0, edited: !0, curve: "easeInOutQuad" }, 1567: { value: 0, edited: !0, curve: "easeInOutQuad" }, 2200: { value: 1, edited: !0 } }, "origin.y": 1 }, "haiku:Rectangle-72-75c3a052dac8d7b7": { x: .5, y: .5, width: 1, height: 40, fill: "#194148", stroke: "#637A7F" } } }, template: { elementName: "div", attributes: { "haiku-id": "Main-03757d2ca1026e0a", "haiku-title": "Main" }, children: [{ elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Mast-e5373b9a6ffd2e46", "haiku-title": "mast", "haiku-source": "designs/rAPrNHucqt4XAwk6egpWyr-UAE.figma.contents/frames/mast.svg" }, children: [{ elementName: "g", attributes: { "haiku-id": "Mast-8188ff0884c450d1", id: "mast" }, children: [{ elementName: "rect", attributes: { "haiku-id": "Rectangle-72-75c3a052dac8d7b7", id: "Rectangle 72" }, children: [] }] }] }, { elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Floor4-d96ba96f57bde5c9", "haiku-title": "floor4", "haiku-source": "designs/rAPrNHucqt4XAwk6egpWyr-UAE.figma.contents/frames/floor4.svg#lock" }, children: [{ elementName: "g", attributes: { "haiku-id": "Floor4-2c48bfbe4a02e016", id: "floor4" }, children: [{ elementName: "rect", attributes: { "haiku-id": "Rectangle-71-3d822020202f54c4", id: "Rectangle 71" }, children: [] }] }] }, { elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Floor3-27aac42303fd3834", "haiku-title": "floor3", "haiku-source": "designs/rAPrNHucqt4XAwk6egpWyr-UAE.figma.contents/frames/floor3.svg#lock" }, children: [{ elementName: "g", attributes: { "haiku-id": "Floor3-4096c24bafa8fc17", id: "floor3" }, children: [{ elementName: "rect", attributes: { "haiku-id": "Right-3881c0af4d1dbdf1", id: "RIGHT" }, children: [] }, { elementName: "rect", attributes: { "haiku-id": "Left-e47e3b883a95010b", id: "LEFT" }, children: [] }, { elementName: "rect", attributes: { "haiku-id": "Center-fc5a28a19c538eb0", id: "CENTER" }, children: [] }] }] }, { elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Floor2-8f4e97f8d14ee1a3", "haiku-title": "floor2", "haiku-source": "designs/rAPrNHucqt4XAwk6egpWyr-UAE.figma.contents/frames/floor2.svg#lock" }, children: [{ elementName: "g", attributes: { "haiku-id": "Floor2-a33879a5fb8e7f4a", id: "floor2" }, children: [{ elementName: "rect", attributes: { "haiku-id": "Right-bd437b3f30908e6c", id: "RIGHT" }, children: [] }, { elementName: "rect", attributes: { "haiku-id": "Left-cbbe407d8c1a74dc", id: "LEFT" }, children: [] }, { elementName: "rect", attributes: { "haiku-id": "Center-ef04f3a2cfafd84a", id: "CENTER" }, children: [] }] }] }, { elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Floor1-2f0164fac1c95ae9", "haiku-title": "floor1", "haiku-source": "designs/rAPrNHucqt4XAwk6egpWyr-UAE.figma.contents/frames/floor1.svg#lock" }, children: [{ elementName: "g", attributes: { "haiku-id": "Floor1-c37dcb5a89ffa59d", id: "floor1" }, children: [{ elementName: "path", attributes: { "haiku-id": "Right-4d9b0013deae0a91", id: "RIGHT" }, children: [] }, { elementName: "rect", attributes: { "haiku-id": "Left-dd09f5199b807b33", id: "LEFT" }, children: [] }, { elementName: "path", attributes: { "haiku-id": "Center-0e989d3013b458f9", id: "CENTER" }, children: [] }] }] }, { elementName: "svg", attributes: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "haiku-id": "Sand-005bb29064183655", "haiku-title": "sand", "haiku-source": "designs/rAPrNHucqt4XAwk6egpWyr-UAE.figma.contents/frames/sand.svg#lock", "haiku-locked": !0 }, children: [{ elementName: "g", attributes: { "haiku-id": "Sand-8225d7fa2efaea09", id: "sand" }, children: [{ elementName: "path", attributes: { "haiku-id": "Vector-06addfa29000c85d", id: "Vector" }, children: [] }] }] }] } }; return t(function (e) { function t() { return console.error('[haiku core] core version 5.0.0 seems to be missing. index.embed.js expects it at window.HaikuCore["5.0.0"], but we cannot find it. you may need to add a <script src="path/to/HaikuCore.js"><\/script> to fix this.'), m } var a = window.HaikuResolve && window.HaikuResolve("5.0.0"); if (a) e.exports = a(m); else { for (var i in m) t[i] = m[i]; e.exports = t } }) }();