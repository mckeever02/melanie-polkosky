/** This file was autogenerated by Haiku at 20200402210204.
Copyright (c) 2020 mckvr4. All rights reserved.
*/
var HaikuComponentEmbed_mckvr4_Bowls=function(){function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.tokenize=function(e,t){for(var a=[],i=e,r=i.length,s=0;i.length>0;){for(var l=0;l<t.length;l++){var n=t[l],o=n.re.exec(i);if(o){var u=o[0];a.push({value:u,type:n.type}),i=i.slice(o[0].length,i.length);break}}if(s++>r)throw new Error("Unable to tokenize expression "+e)}return a};var a=[{type:"whitespace",re:/^[\s]+/},{type:"paren_open",re:/^\(/},{type:"paren_close",re:/^\)/},{type:"square_open",re:/^\[/},{type:"square_close",re:/^]/},{type:"curly_open",re:/^\{/},{type:"curly_close",re:/^\}/},{type:"rest",re:/^\.\.\./},{type:"colon",re:/^:/},{type:"comma",re:/^,/},{type:"identifier",re:/^[a-zA-Z0-9_$]+/}];t.tokenizeParameters=function(e){return t.tokenize(e,a)};var i="~!@#$%^&*-_=+/|:'<,>.?".split("").join("\\"),r=[{type:"whitespace",re:/^[\s]+/},{type:"paren_open",re:/^\(/},{type:"paren_close",re:/^\)/},{type:"number",re:/^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i},{type:"symbol",re:new RegExp("^([$"+i+"][$"+i+"]*)([^\\n\\S]*:(?!:))?")},{type:"identifier",re:new RegExp("^([$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*)([^\\n\\S]*:(?!:))?")}];t.tokenizeDirective=function(e){var a=t.tokenize(e,r).filter(function(e){return"whitespace"!==e.type});return a.forEach(function(e){"number"===e.type&&(e.value=Number(e.value))}),a},t.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}});e(i);i.tokenize,i.tokenizeParameters,i.tokenizeDirective,i.isNumeric;var r=t(function(e,t){function a(e,t,a){var i={value:null,type:"void"};if(a.length<1||e>a.length)return i;for(var r=0,s=0;s<a.length;s++)if(a[s].type===t&&(r+=1),r===e)return a[s];return i}function r(e){if(e.length<1)return[];for(var t,a="",i="",r=e.shift(),s=[];r;){switch(r.type){case"whitespace":i=" ";break;case"comma":i=",";break;case"colon":i=":";break;case"paren_open":i="[",s.push("square");break;case"paren_close":i="]",s.pop();break;case"square_open":i="[",s.push("square");break;case"square_close":i="]",s.pop();break;case"curly_open":i="{",s.push("curly");break;case"curly_close":i="}",s.pop();break;case"rest":t=e.shift(),i=JSON.stringify({__rest:t.value});break;case"identifier":i='"'+r.value+'"',!e[0]||"comma"!==e[0].type&&"square_close"!==e[0].type&&"curly_close"!==e[0].type||(i+="square"===s[s.length-1]?"":':"'+r.value+'"');break;default:i=""}a+=i,r=e.shift()}return JSON.parse(a)}function s(e){for(var t=i.tokenizeParameters(e),a=[],s=0;s<t.length;s++)"whitespace"!==t[s].type&&a.push(t[s]);try{return r(a)}catch(t){return console.warn("Unable to parse signature "+e,t),[]}}function l(e){var t=e.toString();")"===t[t.length-1]&&"("===t[0]&&(t=t.slice(1));var r=t.indexOf("("),l=t.indexOf(")"),n=t.slice(0,r),o=t.slice(r,l+1),u=t.slice(l+1,t.length),d=u.slice(u.indexOf("{")+1,u.length-1).trim(),c={type:u.match(/^\s*=>\s*{/)?"ArrowFunctionExpression":"FunctionExpression",name:a(2,"identifier",i.tokenizeParameters(n)).value,params:s(o),body:d};return e.injectee&&(c.injectee=!0),{__function:c}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l});e(r);var s=t(function(e,t){function a(e,t){if(!e.specification){var a=r.default(e);a&&a.__function?(e.specification=a.__function,t&&(e.specification.params=t)):e.specification=!0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a});e(s);var l=t(function(e,t){function a(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=e.shift();return"function"!=typeof a?(console.warn("[haiku core] Inject expects a function as the first argument"),a):(e.length>0?s.default(a,e):s.default(a,null),a.injectee=!0,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a});e(l);var n="Haiku Core is a JavaScript library for building user interfaces",o={lib:"lib",dom:"dom",components:"components",dist:"dist"},u="https://github.com/HaikuTeam/core",d=["Matthew Trost <matthew@haiku.ai>","Zack Brown <zack@haiku.ai>","Taylor Poe <taylor@haiku.ai>","Sasha Joseph <sasha@haiku.ai>"],c={"@angular/core":"^6.0.9",async:"^2.5.0",chokidar:"^1.7.0","cross-env":"^5.1.6",depcheck:"^0.6.7",express:"4.14.1",filesize:"3.5.10","fs-extra":"^4.0.2","haiku-testing":"4.5.1",handlebars:"^4.0.8","istanbul-reporter-cobertura-haiku":"^1.0.2",jsdom:"^11.1.0","leaked-handles":"^5.2.0",nodemon:"1.11.0",nyc:"^13.0.1",opn:"^5.3.0",react:"^16.0.0","react-dom":"^16.0.0","react-router-dom":"^4.1.1",rollup:"^0.53.3","rollup-plugin-commonjs":"^8.2.6","rollup-plugin-json":"^2.3.0","rollup-plugin-node-resolve":"^3.0.0","rollup-plugin-uglify-es":"^0.0.1",rxjs:"^6.3.3","tap-spec":"^4.1.2",tape:"^4.9.0","ts-loader":"^4.4.2","ts-node":"^6.1.0","tsconfig-paths":"^3.3.2",tslint:"^5.11.0","tslint-config-haiku":"^1.0.16","tslint-no-circular-imports":"^0.5.0",typescript:"^3.0.3",webpack:"^4.16.0","webpack-cli":"^3.0.8"},f={"@angular/core":"^6.0.9",react:"^16.0.0 || ^15.4.2","react-dom":"^16.0.0 || ^15.4.2"},h={name:"@haiku/core",version:"4.5.1",description:n,homepage:"https://haiku.ai",directories:o,repository:u,main:"index.js",authors:d,license:"MIT",devDependencies:c,peerDependencies:f},p=Object.freeze({name:"@haiku/core",version:"4.5.1",description:n,homepage:"https://haiku.ai",directories:o,repository:u,main:"index.js",authors:d,license:"MIT",devDependencies:c,peerDependencies:f,default:h}),m=p&&h||p,k=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=m.version,r=function(){var e={};return"undefined"!=typeof window?e=window:void 0!==a&&(e=a),e.haiku||(e.haiku={}),e.haiku[i]||(e.haiku[i]={}),e.haiku[i].models||(e.haiku[i].models={}),e.haiku[i].idCounter||(e.haiku[i].idCounter=1e3),e.haiku[i].enhance||(e.haiku[i].enhance=s.default),e.haiku[i].inject||(e.haiku[i].inject=l.default),e.haiku[i]}();t.default=r});e(k);k.default;var v={metadata:{username:"michael+2@mckvr.com",uuid:"0be706f2-03cc-4303-8fa9-efc286c9149c",organization:"mckvr4",project:"Bowls",branch:"master",folder:"/Users/michael/.haiku/projects/mckvr4/Bowls",version:"0.0.3",root:"https://cdn.haiku.ai/d331f790-8740-4842-a163-616ad4fedc5b/28a5404b678a6cd91be14651d534eaddf17262b3/",core:"4.5.1",title:"Main",type:"haiku",relpath:"code/main/code.js"},options:{},states:{},eventHandlers:{},timelines:{Default:{"haiku:Frame-4-4f7dcfeef8a829d2":{"sizeMode.x":1,"sizeAbsolute.y":99,"style.margin":"0","style.padding":"0","style.border":"0","sizeAbsolute.x":160,fill:"none","style.position":"absolute","sizeMode.y":1,"translation.x":232.25,"translation.y":101,"style.zIndex":{0:{value:4,edited:!0}},"scale.x":1,"scale.y":1},"haiku:Main-03757d2ca1026e0a":{"style.WebkitTapHighlightColor":"rgba(0,0,0,0)","style.position":"relative","style.overflowX":"hidden","style.overflowY":"hidden","sizeAbsolute.x":400,"sizeAbsolute.y":400,"sizeMode.x":1,"sizeMode.y":1,"sizeMode.z":1,"style.backgroundColor":{0:{value:"rgba(25, 65, 72, 0)",edited:!0}}},"haiku:Ellipse-10-49e7291e311e0506":{d:"M142.03 166.479C64.0733 152.733 11.9657 78.5209 25.435 0.579639L308.334 50.4624C294.334 128.31 219.987 180.225 142.03 166.479Z",stroke:"#637A7F",strokeDasharray:{0:{value:1400,edited:!0}},strokeDashoffset:{0:{value:1400,edited:!0,curve:"easeInOutSine"},600:{value:0,edited:!0}},fill:{0:{value:"#194148",edited:!0}}},"haiku:Frame-2-8d8b4cc43d0103d8":{"style.position":"absolute","sizeAbsolute.y":161,"style.margin":"0","style.padding":"0","style.border":"0","sizeAbsolute.x":259,"sizeMode.x":1,fill:"none","sizeMode.y":1,"translation.x":228.75,"translation.y":222.5,"style.zIndex":{0:{value:6,edited:!0}},"scale.x":1,"scale.y":1},"haiku:Ellipse-9-3732853bda8ecc56":{d:"M139.905 139.499C74.6154 151.012 12.3473 107.555 0.58052 42.3742L237.609 0.579691C248.845 65.854 205.195 127.987 139.905 139.499Z",stroke:"#637A7F",strokeDasharray:{0:{value:1400,edited:!0}},strokeDashoffset:{0:{value:1400,edited:!0},200:{value:1400,edited:!0,curve:"easeInOutSine"},800:{value:0,edited:!0}},fill:{0:{value:"#194148",edited:!0}}},"haiku:Frame-3-4f93920cfd0850c9":{"sizeMode.x":1,"sizeAbsolute.y":130,"style.margin":"0","style.padding":"0","style.border":"0","sizeAbsolute.x":209,fill:"none","style.position":"absolute","sizeMode.y":1,"translation.x":218.25,"translation.y":161.7,"style.zIndex":{0:{value:5,edited:!0}},"scale.x":1,"scale.y":1},"haiku:Ellipse-8-abb585b8a26800ad":{d:"M96.1202 112.474C43.5187 103.199 8.34124 53.1655 17.3402 0.579537L208.419 34.272C198.89 86.7644 148.722 121.749 96.1202 112.474Z",stroke:"#637A7F",strokeDasharray:{0:{value:1400,edited:!0},400:{value:1400,edited:!0}},strokeDashoffset:{0:{value:1400,edited:!0},400:{value:1400,edited:!0,curve:"easeInOutSine"},1000:{value:0,edited:!0}},fill:{0:{value:"#194148",edited:!0}}},"haiku:Frame-1-5451f6da297ea974":{"style.position":"absolute","sizeAbsolute.y":192,"style.margin":"0","style.padding":"0","style.border":"0","sizeAbsolute.x":309,"sizeMode.x":1,fill:"none","sizeMode.y":1,"translation.x":196.25,"translation.y":302.5,"style.zIndex":{0:{value:7,edited:!0}},"scale.x":1,"scale.y":1},"haiku:Ellipse-7-6e25caae655f2405":{d:"M86.0078 85.6016C46.0232 92.652 7.8862 66.0918 0.581663 26.2164L145.971 0.580312C152.745 40.5492 125.992 78.5513 86.0078 85.6016Z",fill:"#194148",stroke:"#637A7F",fillOpacity:{0:{value:0,edited:!0},600:{value:0,edited:!0,curve:"easeInOutSine"},1200:{value:100,edited:!0}},strokeDasharray:{0:{value:1400,edited:!0},600:{value:1400,edited:!0}},strokeDashoffset:{0:{value:1400,edited:!0},600:{value:1400,edited:!0,curve:"easeInOutSine"},1200:{value:0,edited:!0}}},"haiku:Frame-7-2e5d5501b9660925-80e6f0":{"sizeAbsolute.y":45,fill:"none","style.margin":"0","style.padding":"0","style.border":"0","sizeAbsolute.x":45,"sizeMode.x":1,"style.position":"absolute","sizeMode.y":1,"translation.x":191.75,"translation.y":70,"style.zIndex":{0:{value:1,edited:!0}},"scale.x":{0:{value:0,edited:!0},1200:{value:0,edited:!0,curve:"easeInOutElastic"},2000:{value:1,edited:!0}},"scale.y":{0:{value:0,edited:!0},1200:{value:0,edited:!0,curve:"easeInOutElastic"},2000:{value:1,edited:!0}}},"haiku:Rectangle-1-3bf4c5657ba3fe2f-80e6f0":{x:.5,y:.5,width:44,height:44,rx:22,fill:"#194148",stroke:"#637A7F",strokeDasharray:{0:{value:0,edited:!0}},strokeDashoffset:{0:{value:0,edited:!0}}},"haiku:Frame-7-2e5d5501b9660925-80e6f0-5b6692":{"sizeAbsolute.y":45,fill:"none","style.margin":"0","style.padding":"0","style.border":"0","sizeAbsolute.x":45,"sizeMode.x":1,"style.position":"absolute","sizeMode.y":1,"translation.x":252.75,"translation.y":64,"style.zIndex":{0:{value:3,edited:!0}},"scale.x":{0:{value:0,edited:!0},800:{value:0,edited:!0,curve:"easeInOutElastic"},1617:{value:1,edited:!0}},"scale.y":{0:{value:0,edited:!0},800:{value:0,edited:!0,curve:"easeInOutElastic"},1617:{value:1,edited:!0}}},"haiku:Rectangle-1-3bf4c5657ba3fe2f-80e6f0-5b6692":{x:.5,y:.5,width:44,height:44,rx:22,fill:"#194148",stroke:"#637A7F",strokeDasharray:{0:{value:0,edited:!0}},strokeDashoffset:{0:{value:0,edited:!0}}},"haiku:Frame-7-2e5d5501b9660925-80e6f0-a81ae2":{"sizeAbsolute.y":45,fill:"none","style.margin":"0","style.padding":"0","style.border":"0","sizeAbsolute.x":45,"sizeMode.x":1,"style.position":"absolute","sizeMode.y":1,"translation.x":216.75,"translation.y":55,"style.zIndex":{0:{value:2,edited:!0}},"scale.x":{0:{value:0,edited:!0},1000:{value:0,edited:!0,curve:"easeInOutElastic"},1800:{value:1,edited:!0}},"scale.y":{0:{value:0,edited:!0},1000:{value:0,edited:!0,curve:"easeInOutElastic"},1800:{value:1,edited:!0}}},"haiku:Rectangle-1-3bf4c5657ba3fe2f-80e6f0-a81ae2":{x:.5,y:.5,width:44,height:44,rx:22,fill:"#194148",stroke:"#637A7F",strokeDasharray:{0:{value:0,edited:!0}},strokeDashoffset:{0:{value:0,edited:!0}}}}},template:{elementName:"div",attributes:{"haiku-id":"Main-03757d2ca1026e0a","haiku-title":"Main"},children:[{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Frame-7-2e5d5501b9660925-80e6f0-a81ae2","haiku-title":"Frame 7","haiku-source":"designs/f6zFyK1XRq8rygwf6uo3Q9-Bowls.figma.contents/frames/Frame 7.svg#lock"},children:[{elementName:"g",attributes:{"haiku-id":"Frame-7-c38fe5148caf6cd2-80e6f0-a81ae2","haiku-title":"Frame 7",id:"Frame 7-80e6f0-a81ae2"},children:[{elementName:"rect",attributes:{"haiku-id":"Rectangle-1-3bf4c5657ba3fe2f-80e6f0-a81ae2","haiku-title":"Rectangle 1",id:"Rectangle 1-80e6f0-a81ae2"},children:[]}]}]},{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Frame-7-2e5d5501b9660925-80e6f0-5b6692","haiku-title":"Frame 7","haiku-source":"designs/f6zFyK1XRq8rygwf6uo3Q9-Bowls.figma.contents/frames/Frame 7.svg#lock"},children:[{elementName:"g",attributes:{"haiku-id":"Frame-7-c38fe5148caf6cd2-80e6f0-5b6692","haiku-title":"Frame 7",id:"Frame 7-80e6f0-5b6692"},children:[{elementName:"rect",attributes:{"haiku-id":"Rectangle-1-3bf4c5657ba3fe2f-80e6f0-5b6692","haiku-title":"Rectangle 1",id:"Rectangle 1-80e6f0-5b6692"},children:[]}]}]},{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Frame-7-2e5d5501b9660925-80e6f0","haiku-title":"Frame 7","haiku-source":"designs/f6zFyK1XRq8rygwf6uo3Q9-Bowls.figma.contents/frames/Frame 7.svg#lock"},children:[{elementName:"g",attributes:{"haiku-id":"Frame-7-c38fe5148caf6cd2-80e6f0","haiku-title":"Frame 7",id:"Frame 7-80e6f0"},children:[{elementName:"rect",attributes:{"haiku-id":"Rectangle-1-3bf4c5657ba3fe2f-80e6f0","haiku-title":"Rectangle 1",id:"Rectangle 1-80e6f0"},children:[]}]}]},{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Frame-4-4f7dcfeef8a829d2","haiku-title":"Frame 4","haiku-source":"designs/f6zFyK1XRq8rygwf6uo3Q9-Bowls.figma.contents/frames/Frame 4.svg#lock"},children:[{elementName:"g",attributes:{"haiku-id":"Frame-4-4010c3c7c177b888",id:"Frame 4"},children:[{elementName:"path",attributes:{"haiku-id":"Ellipse-7-6e25caae655f2405",id:"Ellipse 7"},children:[]}]}]},{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Frame-3-4f93920cfd0850c9","haiku-title":"Frame 3","haiku-source":"designs/f6zFyK1XRq8rygwf6uo3Q9-Bowls.figma.contents/frames/Frame 3.svg#lock"},children:[{elementName:"g",attributes:{"haiku-id":"Frame-3-cb792052cd81f116",id:"Frame 3"},children:[{elementName:"path",attributes:{"haiku-id":"Ellipse-8-abb585b8a26800ad",id:"Ellipse 8"},children:[]}]}]},{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Frame-2-8d8b4cc43d0103d8","haiku-title":"Frame 2","haiku-source":"designs/f6zFyK1XRq8rygwf6uo3Q9-Bowls.figma.contents/frames/Frame 2.svg#lock"},children:[{elementName:"g",attributes:{"haiku-id":"Frame-2-42d3e322e81205a2",id:"Frame 2"},children:[{elementName:"path",attributes:{"haiku-id":"Ellipse-9-3732853bda8ecc56",id:"Ellipse 9"},children:[]}]}]},{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Frame-1-5451f6da297ea974","haiku-title":"Frame 1","haiku-source":"designs/f6zFyK1XRq8rygwf6uo3Q9-Bowls.figma.contents/frames/Frame 1.svg#lock"},children:[{elementName:"g",attributes:{"haiku-id":"Frame-1-e79972f1cd619c30",id:"Frame 1"},children:[{elementName:"path",attributes:{"haiku-id":"Ellipse-10-49e7291e311e0506",id:"Ellipse 10"},children:[]}]}]}]}};return t(function(e){function t(){return console.error('[haiku core] core version 4.5.1 seems to be missing. index.embed.js expects it at window.HaikuCore["4.5.1"], but we cannot find it. you may need to add a <script src="path/to/HaikuCore.js"><\/script> to fix this.'),v}var a=window.HaikuResolve&&window.HaikuResolve("4.5.1");if(a)e.exports=a(v);else{for(var i in v)t[i]=v[i];e.exports=t}})}();