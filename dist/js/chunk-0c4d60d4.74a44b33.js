(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c4d60d4"],{"0648":function(e,t,c){},"0da1":function(e,t,c){"use strict";c("9c02")},"2e4a":function(e,t,c){"use strict";var a=c("7a23");const s={class:"recent-products"},i={class:"products"},r={class:"products__container container"},n=Object(a["g"])("div",{class:"products__title recent-products__title"},"Niedawno przeglądałeś:",-1),o={class:"products__items"},d=["onClick"],l={class:"item-product__info flex"},u={class:"item-product__image"},p=["src"],b={key:0},j={class:"item-product__label"},m={class:"item-product__price"},g={class:"item-product__actions actions-product flex"},f=["onClick"],v=Object(a["g"])("button",{type:"button",class:"actions-product__favorite"},null,-1);function O(e,t,c,O,A,_){const w=Object(a["F"])("router-link");return Object(a["z"])(),Object(a["f"])("div",s,[Object(a["g"])("div",i,[Object(a["g"])("div",r,[n,Object(a["g"])("div",o,[(Object(a["z"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(c.recentProducts,e=>(Object(a["z"])(),Object(a["f"])("div",{class:"products__item item-product",key:e.id},[Object(a["j"])(w,{to:{name:"productItem",params:{id:e.id}}},{default:Object(a["K"])(()=>[Object(a["g"])("div",{class:"item-product__body flex",onClick:t=>_.addToRecent(e)},[Object(a["g"])("div",l,[Object(a["g"])("div",u,[Object(a["g"])("img",{src:e.preview,alt:""},null,8,p),e.mark?(Object(a["z"])(),Object(a["f"])("span",b,Object(a["H"])(e.mark),1)):Object(a["e"])("",!0)]),Object(a["g"])("div",j,Object(a["H"])(e.name),1),Object(a["g"])("div",m,Object(a["H"])(e.price),1)]),Object(a["g"])("div",g,[Object(a["g"])("button",{onClick:t=>{_.addToCart(e),t.stopPropagation(),t.preventDefault(),_.showAlert()},type:"button",class:"actions-product__button"},"Dodaj do koszyka",8,f),v])],8,d)]),_:2},1032,["to"])]))),128))])])])])}var A={props:{recentProducts:{type:Array}},methods:{addToCart(e){this.$emit("addToCart",e)},showAlert(){const e=document.querySelector(".access-alert__container");e.classList.add("show-access-alert"),setTimeout(()=>e.classList.remove("show-access-alert"),1e3)},addToRecent(e){this.$store.state.recentList.find(t=>t.id===e.id)||this.$store.state.recentList.unshift(e)}}},_=(c("0da1"),c("6b0d")),w=c.n(_);const y=w()(A,[["render",O]]);t["a"]=y},"337e":function(e,t,c){e.exports=c.p+"img/product-1.8656eacc.png"},"40d52":function(e,t){e.exports="data:image/png;base64,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"},4222:function(e,t,c){"use strict";var a=c("7a23");const s={class:"preview-product__body"},i={class:"preview-product__image"},r=["src"],n={class:"preview-product__info"},o={class:"preview-product__label"},d={class:"preview-product__price"},l=Object(a["g"])("span",null,"PLN",-1),u={class:"preview-product__quantity"},p=Object(a["g"])("span",null,"Ilość:",-1);function b(e,t,c,b,j,m){return Object(a["z"])(),Object(a["f"])("ul",s,[(Object(a["z"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(c.Items,e=>(Object(a["z"])(),Object(a["f"])("li",{class:"preview-product__item",key:e.id},[Object(a["g"])("div",i,[Object(a["g"])("img",{src:e.preview,alt:""},null,8,r)]),Object(a["g"])("div",n,[Object(a["g"])("div",o,Object(a["H"])(e.name),1),Object(a["g"])("div",d,[Object(a["i"])(Object(a["H"])(e.price),1),l]),Object(a["g"])("div",u,[p,Object(a["i"])(Object(a["H"])(e.quantity),1)])])]))),128))])}var j={props:{Items:{type:Array,required:[]}}},m=(c("7c92"),c("6b0d")),g=c.n(m);const f=g()(j,[["render",b]]);t["a"]=f},4595:function(e,t,c){"use strict";c("add7")},"50a3":function(e,t,c){e.exports=c.p+"img/product-4.04a42570.png"},"7c92":function(e,t,c){"use strict";c("0648")},"7cbe":function(e,t,c){},"7d4a":function(e,t,c){e.exports=c.p+"img/product-3.c8386f73.png"},"9c02":function(e,t,c){},"9f70":function(e,t,c){e.exports=c.p+"img/ads-image.2bdb7364.png"},add7:function(e,t,c){},ba3f:function(e,t,c){"use strict";var a=c("7a23"),s=c("9f70"),i=c.n(s);const r={class:"page__ads ads"},n=Object(a["h"])('<div class="ads__container container"><div class="ads__row flex"><div class="ads__item ads__content"><div class="ads__title">Promocje - 30%</div><p class="ads__text">Wpisz swój adres e-mail, jeśli chcesz otrzymywać najnowsze informacje o promocjach.</p></div><div class="ads__item ads__images"><div class="ads__images flex"><div class="ads__image"><img src="'+i.a+'" alt=""></div><div class="ads__image"><img src="'+i.a+'" alt=""></div><div class="ads__image"><img src="'+i.a+'" alt=""></div></div></div><div class="ads__item ads__action"><button type="button" class="ads__button button"><span>Wybierz ze zniżką - 30%</span></button></div></div></div>',1),o=[n];function d(e,t){return Object(a["z"])(),Object(a["f"])("div",r,o)}c("4595");var l=c("6b0d"),u=c.n(l);const p={},b=u()(p,[["render",d]]);t["a"]=b},cc55:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),s=c("40d52"),i=c.n(s);const r={class:"cart"},n={class:"page"},o={class:"page__cart cart-page"},d={class:"cart-page__container container"},l={class:"cart-page__content flex"},u={class:"cart-page__present present-cart"},p=Object(a["g"])("div",{class:"present-cart__title flex"},[Object(a["g"])("img",{src:i.a,alt:""}),Object(a["g"])("span",null,"Darmowy prezent do zakupu")],-1),b=Object(a["g"])("div",{class:"present-cart__footer flex"},[Object(a["g"])("button",{class:"present-cart__button"},[Object(a["g"])("span",null,"Dodaj do koszyka")])],-1);function j(e,t,c,s,i,j){const m=Object(a["F"])("cart-component"),g=Object(a["F"])("preview-product"),f=Object(a["F"])("recent-products"),v=Object(a["F"])("page-ads"),O=Object(a["F"])("layout-default");return Object(a["z"])(),Object(a["f"])("div",r,[Object(a["j"])(O,null,{default:Object(a["K"])(()=>[Object(a["g"])("main",n,[Object(a["g"])("div",o,[Object(a["g"])("div",d,[Object(a["g"])("div",l,[Object(a["j"])(m,{cartList:j.cartList},null,8,["cartList"]),Object(a["g"])("div",u,[p,Object(a["j"])(g,{Items:i.FreeToStoreItems},null,8,["Items"]),b])])])]),0!==j.recentList.length?(Object(a["z"])(),Object(a["d"])(f,{key:0,recentProducts:j.recentList},null,8,["recentProducts"])):Object(a["e"])("",!0),Object(a["j"])(v)])]),_:1})])}var m=c("7c64"),g=c("4222"),f=c("3b2a"),v=c("2e4a"),O=c("ba3f"),A={name:"CatalogView",layouts:"default",components:{LayoutDefault:m["a"],CartComponent:f["a"],RecentProducts:v["a"],PageAds:O["a"],PreviewProduct:g["a"]},computed:{cartList(){return this.$store.state.cartList},recentList(){return this.$store.state.recentList}},data(){return{FreeToStoreItems:[{id:1,title:"Profil aluminiowy uniwersalny bezuszczelkowy",image:c("f778"),price:"0",quantity:"1"},{id:2,title:"Profil aluminiowy uniwersalny bezuszczelkowy",image:c("f778"),price:"0",quantity:"1"}],mainProducts:[{id:1,image:c("337e"),href:"#",mark:"Najlepiej sprzedający się",label:"Profil aluminiowy uniwersalny bezuszczelkowy",price:75},{id:2,image:c("d687"),href:"#",mark:"",label:"Profil aluminiowy uniwersalny bezuszczelkowy",price:75},{id:3,image:c("7d4a"),href:"#",mark:"Najlepiej sprzedający się",label:"Profil aluminiowy uniwersalny bezuszczelkowy",price:75},{id:4,image:c("50a3"),href:"#",mark:"",label:"Profil aluminiowy uniwersalny bezuszczelkowy",price:75}]}}},_=(c("f3f7"),c("6b0d")),w=c.n(_);const y=w()(A,[["render",j]]);t["default"]=y},d687:function(e,t,c){e.exports=c.p+"img/product-2.c15c62a7.png"},f3f7:function(e,t,c){"use strict";c("7cbe")},f778:function(e,t,c){e.exports=c.p+"img/product-img-1.a37d8ab8.png"}}]);
//# sourceMappingURL=chunk-0c4d60d4.74a44b33.js.map