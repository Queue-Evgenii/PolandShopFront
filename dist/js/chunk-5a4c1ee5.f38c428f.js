(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a4c1ee5"],{"2e4a":function(e,t,c){"use strict";var a=c("7a23");const s={class:"recent-products"},o={class:"products"},n={class:"products__container container"},i=Object(a["createElementVNode"])("div",{class:"products__title recent-products__title"},"Niedawno przeglądałeś:",-1),r={class:"products__items"},d=["onClick"],l={class:"item-product__info flex"},u={class:"item-product__image"},m=["src"],p={key:0},b={class:"item-product__label"},_={class:"item-product__price"},j={class:"item-product__actions actions-product flex"},v=["onClick"],O=Object(a["createElementVNode"])("button",{type:"button",class:"actions-product__favorite"},null,-1);function f(e,t,c,f,g,y){const k=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",n,[i,Object(a["createElementVNode"])("div",r,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.recentProducts,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"products__item item-product",key:e.id},[Object(a["createVNode"])(k,{to:{name:"productItem",params:{id:e.id}}},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",{class:"item-product__body flex",onClick:t=>y.addToRecent(e)},[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("img",{src:e.preview,alt:""},null,8,m),e.mark?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",p,Object(a["toDisplayString"])(e.mark),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",b,Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("div",_,Object(a["toDisplayString"])(e.price),1)]),Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("button",{onClick:t=>{y.addToCart(e),t.stopPropagation(),t.preventDefault(),y.showAlert(e)},type:"button",class:Object(a["normalizeClass"])(["actions-product__button",y.getQuantity(e)>=e.quantity?"_disabled":""])}," Dodaj do koszyka ",10,v),O])],8,d)]),_:2},1032,["to"])]))),128))])])])])}var g={props:{recentProducts:{type:Array}},methods:{getQuantity(e){if(!this.$store.state.cartList.find(t=>t.id===e.id))return 0;const t=this.$store.state.cartList.find(t=>t.id===e.id);return t.amount},addToCart(e){this.$emit("addToCart",e)},showAlert(e){if(this.getQuantity(e)<e.quantity){const e=document.querySelector(".access-alert__container");e.classList.add("show-access-alert"),setTimeout(()=>e.classList.remove("show-access-alert"),1e3)}},addToRecent(e){this.$store.state.recentList.find(t=>t.id===e.id)||this.$store.state.recentList.unshift(e)}}},y=(c("7693"),c("6b0d")),k=c.n(y);const w=k()(g,[["render",f]]);t["a"]=w},"4c6e":function(e,t,c){"use strict";c("da70")},7693:function(e,t,c){"use strict";c("d7cb")},"91fd":function(e,t,c){"use strict";c("9f3c")},"9f3c":function(e,t,c){},"9f70":function(e,t,c){e.exports=c.p+"img/ads-image.2bdb7364.png"},ba3f:function(e,t,c){"use strict";var a=c("7a23"),s=c("9f70"),o=c.n(s);const n={class:"page__ads ads"},i=Object(a["createStaticVNode"])('<div class="ads__container container"><div class="ads__row flex"><div class="ads__item ads__content"><div class="ads__title">Promocje - 30%</div><p class="ads__text">Wpisz swój adres e-mail, jeśli chcesz otrzymywać najnowsze informacje o promocjach.</p></div><div class="ads__item ads__images"><div class="ads__images flex"><div class="ads__image"><img src="'+o.a+'" alt=""></div><div class="ads__image"><img src="'+o.a+'" alt=""></div><div class="ads__image"><img src="'+o.a+'" alt=""></div></div></div><div class="ads__item ads__action"><button type="button" class="ads__button button"><span>Wybierz ze zniżką - 30%</span></button></div></div></div>',1),r=[i];function d(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,r)}c("4c6e");var l=c("6b0d"),u=c.n(l);const m={},p=u()(m,[["render",d]]);t["a"]=p},cc55:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const s={class:"cart"},o={class:"page"},n={class:"page__cart cart-page"},i={class:"cart-page__container container"},r={class:"cart-page__content flex"};function d(e,t,c,d,l,u){const m=Object(a["resolveComponent"])("cart-component"),p=Object(a["resolveComponent"])("recent-products"),b=Object(a["resolveComponent"])("page-ads"),_=Object(a["resolveComponent"])("layout-default");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createVNode"])(_,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("main",o,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(m,{cartList:u.cartList},null,8,["cartList"])])])]),0!==u.recentList.length?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:0,recentProducts:u.recentList},null,8,["recentProducts"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(b)])]),_:1})])}var l=c("7c64"),u=c("3b2a"),m=c("2e4a"),p=c("ba3f"),b={name:"CatalogView",layouts:"default",components:{LayoutDefault:l["a"],CartComponent:u["a"],RecentProducts:m["a"],PageAds:p["a"]},computed:{cartList(){return this.$store.state.cartList},recentList(){return this.$store.state.recentList}},data(){return{FreeToStoreItems:[{id:1,title:"Profil aluminiowy uniwersalny bezuszczelkowy",image:c("f778"),price:"0",quantity:"1"},{id:2,title:"Profil aluminiowy uniwersalny bezuszczelkowy",image:c("f778"),price:"0",quantity:"1"}]}}},_=(c("91fd"),c("6b0d")),j=c.n(_);const v=j()(b,[["render",d]]);t["default"]=v},d7cb:function(e,t,c){},da70:function(e,t,c){},f778:function(e,t,c){e.exports=c.p+"img/product-img-1.a37d8ab8.png"}}]);
//# sourceMappingURL=chunk-5a4c1ee5.f38c428f.js.map