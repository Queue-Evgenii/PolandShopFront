(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f30a0f0"],{"00da":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJHSURBVHgB7Zi7Sx1BFMaP5v28YgJpQkhSpQkBE0hICARCmkggNikTyxCEdAnEJFc7G/8HewtFtBPUQgQRG1tFUSwEn6jXx1X0+5wz3nHdx+w2WuwHv51hmPn27J3ZmbNXxOgVGAAr4CCGMhgD3yRc9WAQbCX4bIBe8MgOfAJ2EwaF8TMQQHMGj3VQV4VLP3ivRt1gVaJVAz6AG9rvgRrRZxbcB5ugU+JFn89aH+SlpFF1i59+OE/yVNteO22/PX16tP9SNS7XtHHFc3DJqd/R8rLTtiB+WtaytlrOgfIgrPIgrM5NEDuSThed+r6Wa5JeBS33aMiz4A1oABNSeX+j1OzUJ7ScFvMwV0BRy52EAOq1Ps7LF0m/55PWgHExo89X12DBc9AeaJNwtaS4OXfoJg6qcgw4NS/BJYkWj+BJiT/kboNn4EJMnyUwJSePgLOV+0vcAg+lciiFiW8DF2PScc9kpRDTh/nLiJhpORYTlKSsyqU9wvw/2Pb0mAZ/7MDGFDd3CS7Otow+Hzkd3Ceei8mIfkn8YuFi+ytm2jg1d8VMDRej3bBm5PTrG9Q98E9MhjbEhrJG1CV+anSe4oW2vXXavnv6dGj/LW7bdhtelfS6qaX7Om5LOl3NT1GrPAirPAgrBmE3mYLnmFqnXtZy0WmrET/Z+21yxxwA77Qh6VuUalCDOfBYTH5xHcxrAAysL8GHh+QnrbPv0d8CWb7KiwHjpgwe/Jg+8fcAv85LCYO4Gw6LSQnDxFRtVCpHQRTMYzkDdRx0CFPFHLvkWAmCAAAAAElFTkSuQmCC"},1908:function(e,t,n){"use strict";n("43d9")},3707:function(e,t,n){"use strict";var a=n("7a23");const s={class:"subslider__image"},r=["src"],i={class:"subslider__label"},o={key:1,class:"loading"};function c(e,t,n,c,l,d){const u=Object(a["resolveComponent"])("router-link"),p=Object(a["resolveComponent"])("swiper-slide"),b=Object(a["resolveComponent"])("swiper");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["subslider",l.subSlides.length<4?"no-button":""])},[0!==l.subSlides.length?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:0,modules:c.modules,"space-between":15,loop:!0,scrollbar:!1,navigation:!0,breakpoints:{1590:{slidesPerView:4},1350:{slidesPerView:3},1200:{slidesPerView:2},1130:{slidesPerView:4},920:{slidesPerView:3},520:{slidesPerView:2},300:{slidesPerView:1}},onSwiper:c.onSwiper,onSlideChange:c.onSlideChange,class:"subslider__wrapper"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l.subSlides,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:e.id},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{class:"subslider__slide",to:{name:"catalogList",params:{id:e.id}}},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",s,[e.preview?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",{key:0,src:e.preview,alt:""},null,8,r)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",i,Object(a["toDisplayString"])(e.name),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules","onSwiper","onSlideChange"])):Object(a["createCommentVNode"])("",!0),0===l.subSlides.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",o)):Object(a["createCommentVNode"])("",!0)],2)}var l=n("d15c"),d=n("f754"),u=n("4da1"),p=(n("6bde"),{data(){return{subSlides:[]}},methods:{fetchCategory(){this.$store.dispatch("getCategories").then(e=>{this.subSlides=e.data.filter(e=>0===e.children.length)})}},mounted(){this.fetchCategory()},components:{Swiper:l["a"],SwiperSlide:d["a"]},setup(){const e=()=>{},t=()=>{};return{onSwiper:e,onSlideChange:t,modules:[u["b"],u["c"],u["d"],u["a"]]}}}),b=(n("dbb1"),n("6b0d")),f=n.n(b);const g=f()(p,[["render",c]]);t["a"]=g},"43d9":function(e,t,n){},4951:function(e,t,n){},"59e4":function(e,t,n){"use strict";n("ae9c")},"5a0f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFhSURBVHgB7Zc9L0RBFIZfSgo6HxG5ROiIBiGytPwJBVFoRCnx2WlEoqBQ0IgVnXIT6ysSokC1Gi06DY2EfSe7k8yenGSz2bPdPMmTzMmc2TnJ3jlzLxCJVEadiOfoAL2mp0p+M12gPaiev+I+R9rkMv0PnFBybkWOhetaMU9lklpqUIgz6zeoDzY7F5vnRPxJH2HPqx+Ez0wDXaO99ILuKgsTukq7UD2/9I7u0C9EIhFDwqPdSJfoKD2B3qY7ijmDsMFdOXvaxBZKO+OkkvOMGl4HYQeeFhunRNxK+2FPSivmTCS9iPiDXsGeez+QrxCzdIxm6LGyMKGLtAk2vNFt+o1IJGJIeLTdm787tsM0TQ+V/ISu0G7Y8EA36I+c2Edpm55SFudgfx1s+h8PO7Bs/0MibqN9sGccSjFpkXQj4nd6CXsyfiCvgxk6gkJhWWVhO52nnbDBfR0coPB3RSIVkwdVOZEHRcqtngAAAABJRU5ErkJggg=="},"689a":function(e,t,n){"use strict";n("bd67")},8832:function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){return function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(1),r=a(s);e.exports=r.default},function(e,t,n){n(2);var a=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=a.exports},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.id,a,""]]),n(5)(a,{}),a.locals&&(e.exports=a.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function a(e,t){for(var n=0;n<e.length;n++){var a=e[n],s=u[a.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](a.parts[r]);for(;r<a.parts.length;r++)s.parts.push(c(a.parts[r],t))}else{var i=[];for(r=0;r<a.parts.length;r++)i.push(c(a.parts[r],t));u[a.id]={id:a.id,refs:1,parts:i}}}}function s(e){for(var t=[],n={},a=0;a<e.length;a++){var s=e[a],r=s[0],i=s[1],o=s[2],c=s[3],l={css:i,media:o,sourceMap:c};n[r]?n[r].parts.push(l):t.push(n[r]={id:r,parts:[l]})}return t}function r(e,t){var n=f(),a=h[h.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function c(e,t){var n,a,s;if(t.singleton){var r=m++;n=g||(g=o(t)),a=l.bind(null,n,r,!1),s=l.bind(null,n,r,!0)}else n=o(t),a=d.bind(null,n),s=function(){i(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}function l(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=v(t,s);else{var r=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function d(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=p((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),f=p((function(){return document.head||document.getElementsByTagName("head")[0]})),g=null,m=0,h=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return a(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i],c=u[o.id];c.refs--,r.push(c)}if(e){var l=s(e);a(l,t)}for(i=0;i<r.length;i++){c=r[i];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete u[c.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,a){var s,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,r=e.default);var o="function"==typeof r?r.options:r;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),a){var c=o.computed||(o.computed={});Object.keys(a).forEach((function(e){var t=a[e];c[e]=function(){return t}}))}return{esModule:s,exports:r,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var a={index:n,content:n+1,selected:n===this.selected-1};t[n]=a}else{for(var s=Math.floor(this.pageRange/2),r=function(n){var a={index:n,content:n+1,selected:n===e.selected-1};t[n]=a},i=function(e){var n={disabled:!0,breakView:!0};t[e]=n},o=0;o<this.marginPages;o++)r(o);var c=0;this.selected-s>0&&(c=this.selected-1-s);var l=c+this.pageRange-1;l>=this.pageCount&&(l=this.pageCount-1,c=l-this.pageRange+1);for(var d=c;d<=l&&d<=this.pageCount-1;d++)r(d);c>this.marginPages&&i(c-1),l+1<this.pageCount-this.marginPages&&i(l+1);for(var u=this.pageCount-1;u>=this.pageCount-this.marginPages;u--)r(u)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,(function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])}))},9588:function(e,t,n){"use strict";var a=n("7a23");const s={class:"products__item item-product"},r={class:"item-product__info flex"},i={class:"item-product__image"},o=["src"],c={key:0},l={class:"item-product__text-row"},d={class:"item-product__label"},u={class:"item-product__price"},p={class:"item-product__actions actions-product flex"};function b(e,t,n,b,f,g){const m=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createVNode"])(m,{to:{name:"productItem",params:{id:n.product.id}}},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",{class:"item-product__body flex",onClick:t[2]||(t[2]=e=>g.addToRecent(n.product))},[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("img",{src:n.product.preview,alt:""},null,8,o),n.product.mark?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",c,Object(a["toDisplayString"])(n.product.labelMark),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",d,Object(a["toDisplayString"])(n.product.name),1),Object(a["createElementVNode"])("div",u,Object(a["toDisplayString"])(n.product.price),1)])]),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("button",{onClick:t[0]||(t[0]=e=>{this.showAlert(n.product),g.addToCart(n.product),e.stopPropagation(),e.preventDefault()}),type:"button",class:Object(a["normalizeClass"])(["actions-product__button",g.getQuantity(n.product)>=n.product.quantity?"_disabled":""])}," Dodaj do koszyka ",2),Object(a["createElementVNode"])("button",{onClick:t[1]||(t[1]=e=>{g.changeFavoriteList(n.product),e.stopPropagation(),e.preventDefault()}),type:"button",class:Object(a["normalizeClass"])(["actions-product__favorite",{favorite:!0===g.checkIsFavorite(n.product)}])},null,2)])])]),_:1},8,["to"])])}n("14d9");var f={props:{product:{type:Object,required:!0}},methods:{getQuantity(e){if(!this.$store.state.cartList.find(t=>t.id===e.id))return 0;const t=this.$store.state.cartList.find(t=>t.id===e.id);return t.amount},addToCart(e){this.$emit("addToCart",e)},changeFavoriteList(e){if(this.$store.state.favoriteItems.find(t=>t.id===e.id)){let t=this.$store.state.favoriteItems.find(t=>t.id===e.id);t.isFavorite=!1;let n=this.$store.state.favoriteItems;const a=n.indexOf(n.find(t=>t.id===e.id));n.splice(a,1),localStorage.setItem("favoriteItems",JSON.stringify(n))}else{e.isFavorite=!0;const t=this.$store.state.favoriteItems;t.push(e),localStorage.setItem("favoriteItems",JSON.stringify(t))}},checkIsFavorite(e){return this.$store.state.favoriteItems.find(t=>t.id===e.id)?(e.isFavorite=!0,!0):(e.isFavorite=!1,!1)},addToRecent(e){this.$store.state.recentList.find(t=>t.id===e.id)||this.$store.state.recentList.unshift(e)},showAlert(e){if(this.getQuantity(e)<e.quantity){const e=document.querySelector(".access-alert__container");e.classList.add("show-access-alert"),setTimeout(()=>e.classList.remove("show-access-alert"),1e3)}}}},g=n("6b0d"),m=n.n(g);const h=m()(f,[["render",b]]);t["a"]=h},a9e5:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const s={class:"wrapper"},r={class:"page"},i={class:"page__catalog catalog-page"},o={class:"catalog-page__container container"},c={class:"catalog-page__row row"},l={class:"catalog-page__sidebar sidebar"},d={class:"catalog-page__content content"},u={class:"catalog-page__slider"},p={class:"catalog-page__products"};function b(e,t,n,b,f,g){const m=Object(a["resolveComponent"])("aside-sidebar"),h=Object(a["resolveComponent"])("aside-filter"),v=Object(a["resolveComponent"])("sub-slider"),k=Object(a["resolveComponent"])("catalog-products"),O=Object(a["resolveComponent"])("recent-products"),j=Object(a["resolveComponent"])("page-ads"),C=Object(a["resolveComponent"])("layout-default"),_=Object(a["resolveComponent"])("NotFound");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[f.is404?(Object(a["openBlock"])(),Object(a["createBlock"])(_,{key:1})):(Object(a["openBlock"])(),Object(a["createBlock"])(C,{key:0},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("main",r,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",o,[g.SidebarWidth?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:0})),Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("aside",l,[g.SidebarWidth?(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:0})):Object(a["createCommentVNode"])("",!0),g.SidebarWidth?(Object(a["openBlock"])(),Object(a["createBlock"])(h,{key:1,filterItems:f.filterItems},null,8,["filterItems"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",u,[Object(a["createVNode"])(v,{subSlides:f.categoryItems},null,8,["subSlides"])]),Object(a["createElementVNode"])("div",p,[Object(a["createVNode"])(k,{catalogProducts:f.catalogProducts,productsLabel:f.productsLabel},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{filterItems:f.filterItems},null,8,["filterItems"])]),_:1},8,["catalogProducts","productsLabel"])])])])])]),0!==g.recentList.length?(Object(a["openBlock"])(),Object(a["createBlock"])(O,{key:0,recentProducts:g.recentList},null,8,["recentProducts"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(j)])]),_:1}))])}var f=n("7c64"),g=n("0588"),m=n("3707");const h={class:"sidebar-filter"},v=Object(a["createElementVNode"])("div",{class:"sidebar-filter__title"},"Filtry produktów",-1),k={action:"",class:"sidebar-filter__form"},O={class:"sidebar-filter__section section-filter"},j=Object(a["createElementVNode"])("div",{class:"section-filter__title"},"Cena £",-1),C={class:"section-filter__body active range-filter"},_=["min","max"],y={class:"range-filter__values flex"},P={class:"range-filter__min"},S={class:"range-filter__max"},x=Object(a["createElementVNode"])("div",{class:"sidebar-filter__section section-filter section-button"},[Object(a["createElementVNode"])("div",{class:"section-filter__body"},[Object(a["createElementVNode"])("button",{class:"section-filter__button button"},[Object(a["createElementVNode"])("span",null,"Stosować")])])],-1);function A(e,t,n,s,r,i){const o=Object(a["resolveComponent"])("section-filter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",h,[v,Object(a["createElementVNode"])("form",k,[Object(a["createElementVNode"])("div",O,[j,Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("input",{type:"range",name:"",id:"",min:r.filterSlider.sliderMinValue,max:r.filterSlider.sliderMaxValue,class:"range-slider"},null,8,_),Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("span",P,Object(a["toDisplayString"])(r.filterSlider.sliderMinValue),1),Object(a["createElementVNode"])("span",S,Object(a["toDisplayString"])(r.filterSlider.sliderMaxValue),1)])])]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.filterItems,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(o,{key:e.id,item:e,class:Object(a["normalizeClass"])({active:r.currentNavItem===e.id}),onOnSelected:i.onSelected},null,8,["item","class","onOnSelected"]))),128)),x])])}const V={class:"section-filter__title"},w={class:"section-filter__body section-filter__body-line"},N=["id"],B=["for"];function L(e,t,n,s,r,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"sidebar-filter__section section-filter",onClick:t[0]||(t[0]=e=>i.onSelected(n.item.id))},[Object(a["createElementVNode"])("span",V,Object(a["toDisplayString"])(n.item.name),1),Object(a["createElementVNode"])("ul",w,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.item.filterInputs,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"section-filter__item",key:e.id},[Object(a["createElementVNode"])("input",{type:"checkbox",id:e.for},null,8,N),Object(a["createElementVNode"])("label",{class:"flex",for:e.for},Object(a["toDisplayString"])(e.label),9,B)]))),128))])])}var E={props:{item:{type:Object,required:!0}},methods:{onSelected(e){this.$emit("onSelected",e)}}},I=(n("689a"),n("6b0d")),T=n.n(I);const F=T()(E,[["render",L]]);var M=F,R={data(){return{filterSlider:{sliderValue:50,sliderMinValue:0,sliderMaxValue:350},currentNavItem:null}},props:{filterItems:{type:Array,required:!0}},components:{SectionFilter:M},methods:{onSelected(e){this.currentNavItem!==e?this.currentNavItem=e:this.currentNavItem===e&&(this.currentNavItem=null)}}};n("59e4");const D=T()(R,[["render",A]]);var J=D,H=n("00da"),z=n.n(H),Q=n("5a0f"),G=n.n(Q);const X={class:"catalog-products products"},U={class:"products__title"},W={class:"catalog-products__settings settings-products"},q={class:"settings-products__menu flex"},$=Object(a["createElementVNode"])("button",{type:"button",class:"settings-products__order"},"Cena rosnąco",-1),Y={class:"settings-products__view flex"},Z=Object(a["createElementVNode"])("img",{src:z.a,alt:""},null,-1),K=[Z],ee=Object(a["createElementVNode"])("img",{src:G.a,alt:""},null,-1),te=[ee],ne={class:"settings-products__body",ref:"filters"},ae={key:0,class:"catalog-page__notice"},se={key:1,class:"products__items",ref:"products"},re={key:2,class:"products__navi navi-products"},ie=Object(a["createElementVNode"])("div",{class:"navi-products__button"},[Object(a["createElementVNode"])("button",{type:"button"},"Załaduj jeszcze 10 produktów")],-1);function oe(e,t,n,s,r,i){const o=Object(a["resolveComponent"])("product-item"),c=Object(a["resolveComponent"])("paginate");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",X,[Object(a["createElementVNode"])("div",U,Object(a["toDisplayString"])(n.productsLabel),1),Object(a["createElementVNode"])("div",W,[Object(a["createElementVNode"])("div",q,[Object(a["createElementVNode"])("button",{type:"button",class:"settings-products__filters",onClick:t[0]||(t[0]=(...e)=>i.filtersToggle&&i.filtersToggle(...e))},"Filtr"),$,Object(a["createElementVNode"])("div",Y,[Object(a["createElementVNode"])("button",{type:"button",class:"settings-products__view-columns",ref:"column",onClick:t[1]||(t[1]=(...e)=>i.filtersLayout&&i.filtersLayout(...e))},K,512),Object(a["createElementVNode"])("button",{type:"button",class:"settings-products__view-rows",onClick:t[2]||(t[2]=(...e)=>i.filtersLayout&&i.filtersLayout(...e))},te)])]),Object(a["createElementVNode"])("div",ne,[Object(a["renderSlot"])(e.$slots,"default")],512)]),0===n.catalogProducts.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ae,"Category does not contain products yet ;(")):Object(a["createCommentVNode"])("",!0),0!==n.catalogProducts.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",se,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(i.getItems,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(o,{key:e.id,product:e,onAddToCart:i.addToCart},null,8,["product","onAddToCart"]))),128))],512)):Object(a["createCommentVNode"])("",!0),n.catalogProducts.length>this.perPage?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",re,[ie,Object(a["createVNode"])(c,{"page-count":i.getPaginateCount,"page-range":1,"container-class":"paginate-products","page-class":"paginate-products__number","prev-class":"paginate-products__prev","next-class":"paginate-products__next","break-view-text":"●","click-handler":i.paginateClickCallback},null,8,["page-count","click-handler"])])):Object(a["createCommentVNode"])("",!0)])}n("14d9");var ce=n("9588"),le=n("8832"),de=n.n(le),ue={data(){return{currentPage:1,perPage:16}},props:{catalogProducts:{type:Array},productsLabel:{type:String,required:!0}},components:{Paginate:de.a,ProductItem:ce["a"]},methods:{paginateClickCallback(e){this.currentPage=Number(e)},filtersToggle(e){const t=e.target,n=this.$refs.filters;t.classList.toggle("active"),n.classList.toggle("active")},filtersLayout(e){const t=this.$refs.column,n=t.nextElementSibling;let a=this.$refs.products;if(t===e.target){for(let e of a.children)e.classList.remove("item-product-row");a.classList.remove("products-items-row")}else if(n===e.target){for(let e of a.children)e.classList.add("item-product-row");a.classList.add("products-items-row")}},addToCart(e){const t=this.$store.state.cartList;if(this.$store.state.cartList.find(t=>t.id===e.id)){const n=t.find(t=>t.id===e.id);n.amount<n.quantity&&n.amount++}else e.quantity>0&&(e.amount=1,t.push(e),localStorage.setItem("cartItems",JSON.stringify(t)))}},computed:{getPaginateCount(){return Math.ceil(this.catalogProducts.length/this.perPage)},getItems(){let e=(this.currentPage-1)*this.perPage,t=this.currentPage*this.perPage;return this.catalogProducts.slice(e,t),this.catalogProducts.slice(e,t)}}};n("ec0c");const pe=T()(ue,[["render",oe]]);var be=pe,fe=n("2e4a"),ge=n("ba3f"),me=n("be4d"),he={name:"CatalogView",layouts:"default",created(){this.categoryItems=this.categoryList},components:{LayoutDefault:f["a"],AsideSidebar:g["a"],AsideFilter:J,SubSlider:m["a"],CatalogProducts:be,RecentProducts:fe["a"],PageAds:ge["a"],NotFound:me["a"]},data(){return{filterItems:[{name:"Rodzaj produktu",id:1,filterInputs:[{label:"Profil",id:1,for:"1-1"},{label:"Listwa wykończeniowa",id:2,for:"1-2"},{label:"Termo pierścienie",id:3,for:"1-3"}]},{name:"Rodzaj produktu",id:2,filterInputs:[{label:"Listwa wykończeniowa",id:1,for:"2-1"},{label:"Profil",id:2,for:"2-2"},{label:"Termo pierścienie",id:3,for:"2-3"}]},{name:"Rodzaj produktu",id:3,filterInputs:[{label:"Listwa wykończeniowa",id:1,for:"3-1"},{label:"Profil",id:2,for:"3-2"},{label:"Termo pierścienie",id:3,for:"3-3"}]},{name:"Rodzaj produktu",id:4,filterInputs:[{label:"Listwa wykończeniowa",id:1,for:"4-1"},{label:"Profil",id:2,for:"4-2"},{label:"Termo pierścienie",id:3,for:"4-3"}]},{name:"Rodzaj produktu",id:5,filterInputs:[{label:"Listwa wykończeniowa",id:1,for:"5-1"},{label:"Profil",id:2,for:"5-2"},{label:"Termo pierścienie",id:3,for:"5-3"}]}],categoryItems:[],catalogProducts:[],productsLabel:"",is404:!1}},computed:{currentCatId(){return parseInt(this.$route.params.id)||1},recentList(){return this.$store.state.recentList},SidebarWidth(){return!(window.innerWidth<=1200)},MobileWidth(){return!(window.innerWidth<=768)}},watch:{currentCatId(){setTimeout(()=>{this.fetchProductsByCategoryId(this.currentCatId)},0)}},methods:{fetchProductsByCategoryId(e){this.$store.dispatch("listProductsByIdCategory",e).then(e=>{this.is404=!1,this.catalogProducts=e.data.products,this.productsLabel=e.data.name}).catch(()=>{this.is404=!0})}},mounted(){this.fetchProductsByCategoryId(this.currentCatId)}};const ve=T()(he,[["render",b]]);t["default"]=ve},ae9c:function(e,t,n){},bc4c:function(e,t,n){},bd67:function(e,t,n){},be4d:function(e,t,n){"use strict";var a=n("7a23");const s={class:"PageNotFound"},r={class:"container page404"},i=Object(a["createElementVNode"])("h1",{class:"top-footer__title"},"404",-1),o=Object(a["createElementVNode"])("h2",{class:"top-footer__title"},"Page Not Found",-1);function c(e,t,n,c,l,d){const u=Object(a["resolveComponent"])("router-link"),p=Object(a["resolveComponent"])("LayoutDefault");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",r,[i,o,Object(a["createVNode"])(u,{to:{name:"home"},class:"top-footer__title"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Back to Home Page")]),_:1})])]),_:1})])}var l=n("7c64"),d={components:{LayoutDefault:l["a"]}},u=(n("1908"),n("6b0d")),p=n.n(u);const b=p()(d,[["render",c]]);t["a"]=b},dbb1:function(e,t,n){"use strict";n("4951")},ec0c:function(e,t,n){"use strict";n("bc4c")}}]);
//# sourceMappingURL=chunk-9f30a0f0.db6abbce.js.map