(()=>{"use strict";var o,e,a,t,r,n,s,i,d,c,p,l,k,u,m={705:o=>{o.exports=function(o){var e=[];return e.toString=function(){return this.map((function(e){var a="",t=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),t&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=o(e),t&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(o,a,t,r,n){"string"==typeof o&&(o=[[null,o,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(s[d]=!0)}for(var c=0;c<o.length;c++){var p=[].concat(o[c]);t&&s[p[0]]||(void 0!==n&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=n),a&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=a):p[2]=a),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},738:o=>{o.exports=function(o){return o[1]}},277:(o,e,a)=>{a.d(e,{Z:()=>i});var t=a(738),r=a.n(t),n=a(705),s=a.n(n)()(r());s.push([o.id,"#bookmarked{width:100px}a.bookmark-post{display:block;height:24px;width:24px}a.bookmark-post svg{fill:#2271b1}a.bookmark-post .icon-add{display:block}a.bookmark-post .icon-add-fill{display:none}a.bookmark-post .icon-added{display:none}a.bookmark-post .icon-remove{display:none}a.bookmark-post:hover svg{fill:#135e96}a.bookmark-post:hover .icon-add{display:none}a.bookmark-post:hover .icon-add-fill{display:block}a.bookmark-post:hover .icon-added{display:none}a.bookmark-post:hover .icon-remove{display:none}a.bookmark-post.just-bookmarked .icon-add{display:none}a.bookmark-post.just-bookmarked .icon-add-fill{display:none}a.bookmark-post.just-bookmarked .icon-added{display:block}a.bookmark-post.just-bookmarked .icon-remove{display:none}a.bookmark-post.just-bookmarked:hover .icon-add{display:none}a.bookmark-post.just-bookmarked:hover .icon-add-fill{display:none}a.bookmark-post.just-bookmarked:hover .icon-added{display:none}a.bookmark-post.just-bookmarked:hover .icon-remove{display:block}a.bookmark-post.bookmarked .icon-add{display:none}a.bookmark-post.bookmarked .icon-add-fill{display:none}a.bookmark-post.bookmarked .icon-added{display:block}a.bookmark-post.bookmarked .icon-remove{display:none}a.bookmark-post.bookmarked:hover .icon-add{display:none}a.bookmark-post.bookmarked:hover .icon-add-fill{display:none}a.bookmark-post.bookmarked:hover .icon-added{display:none}a.bookmark-post.bookmarked:hover .icon-remove{display:block}",""]);const i=s},379:o=>{var e=[];function a(o){for(var a=-1,t=0;t<e.length;t++)if(e[t].identifier===o){a=t;break}return a}function t(o,t){for(var n={},s=[],i=0;i<o.length;i++){var d=o[i],c=t.base?d[0]+t.base:d[0],p=n[c]||0,l="".concat(c," ").concat(p);n[c]=p+1;var k=a(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==k)e[k].references++,e[k].updater(u);else{var m=r(u,t);t.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function r(o,e){var a=e.domAPI(e);return a.update(o),function(e){if(e){if(e.css===o.css&&e.media===o.media&&e.sourceMap===o.sourceMap&&e.supports===o.supports&&e.layer===o.layer)return;a.update(o=e)}else a.remove()}}o.exports=function(o,r){var n=t(o=o||[],r=r||{});return function(o){o=o||[];for(var s=0;s<n.length;s++){var i=a(n[s]);e[i].references--}for(var d=t(o,r),c=0;c<n.length;c++){var p=a(n[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}n=d}}},569:o=>{var e={};o.exports=function(o,a){var t=function(o){if(void 0===e[o]){var a=document.querySelector(o);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(o){a=null}e[o]=a}return e[o]}(o);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(a)}},216:o=>{o.exports=function(o){var e=document.createElement("style");return o.setAttributes(e,o.attributes),o.insert(e,o.options),e}},565:(o,e,a)=>{o.exports=function(o){var e=a.nc;e&&o.setAttribute("nonce",e)}},795:o=>{o.exports=function(o){var e=o.insertStyleElement(o);return{update:function(a){!function(o,e,a){var t="";a.supports&&(t+="@supports (".concat(a.supports,") {")),a.media&&(t+="@media ".concat(a.media," {"));var r=void 0!==a.layer;r&&(t+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),t+=a.css,r&&(t+="}"),a.media&&(t+="}"),a.supports&&(t+="}");var n=a.sourceMap;n&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(t,o,e.options)}(e,o,a)},remove:function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(e)}}}},589:o=>{o.exports=function(o,e){if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}}},b={};function f(o){var e=b[o];if(void 0!==e)return e.exports;var a=b[o]={id:o,exports:{}};return m[o](a,a.exports,f),a.exports}f.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return f.d(e,{a:e}),e},f.d=(o,e)=>{for(var a in e)f.o(e,a)&&!f.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:e[a]})},f.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),f.nc=void 0,o=f(379),e=f.n(o),a=f(795),t=f.n(a),r=f(569),n=f.n(r),s=f(565),i=f.n(s),d=f(216),c=f.n(d),p=f(589),l=f.n(p),k=f(277),(u={}).styleTagTransform=l(),u.setAttributes=i(),u.insert=n().bind(null,"head"),u.domAPI=t(),u.insertStyleElement=c(),e()(k.Z,u),k.Z&&k.Z.locals&&k.Z.locals,document.querySelectorAll(".column-bookmarked .bookmark-post").forEach((function(o){return o.addEventListener("click",(function(o){var e=o.currentTarget,a=adminBookmarkPostData.ajax_url+"?"+new URLSearchParams({action:"bookmark_post",postId:e.dataset.postId});fetch(a,{method:"POST"}).then((function(o){return o.json()})).then((function(o){o.success&&(e.classList.contains("bookmarked")?(e.setAttribute("title","Add bookmark"),e.classList.remove("bookmarked")):(e.setAttribute("title","Remove bookmark"),e.classList.add("bookmarked")))}))}))}))})();