(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d68aab"],{3707:function(e,t,o){"use strict";var c=o("7a23");const a={class:"subslider__image"},s=["src"],r={class:"subslider__label"},n={key:1,class:"skeleton"},l=Object(c["createElementVNode"])("div",{class:"skeleton-item"},null,-1),i=Object(c["createElementVNode"])("div",{class:"skeleton-item"},null,-1),d=Object(c["createElementVNode"])("div",{class:"skeleton-item"},null,-1),m=Object(c["createElementVNode"])("div",{class:"skeleton-item"},null,-1),b=[l,i,d,m];function u(e,t,o,l,i,d){const m=Object(c["resolveComponent"])("router-link"),u=Object(c["resolveComponent"])("swiper-slide"),p=Object(c["resolveComponent"])("swiper");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["subslider",d.subSlides.length<4||0===d.subSlides.length?"no-button":""])},[0!==d.subSlides.length?(Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:0,modules:l.modules,"space-between":15,loop:!0,scrollbar:!1,navigation:!0,breakpoints:{1590:{slidesPerView:4},1350:{slidesPerView:3},1200:{slidesPerView:2},1130:{slidesPerView:4},920:{slidesPerView:3},300:{slidesPerView:2}},onSwiper:l.onSwiper,onSlideChange:l.onSlideChange,class:"subslider__wrapper"},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(d.subSlides,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:e.id},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(m,{class:"subslider__slide",to:{name:"catalogList",params:{id:e.id}},onClick:t[0]||(t[0]=e=>d.filterReset())},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",a,[e.preview?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,src:e.preview,alt:""},null,8,s)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",r,Object(c["toDisplayString"])(e.name),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules","onSwiper","onSlideChange"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,b))],2)}var p=o("d15c"),j=o("f754"),O=o("4da1"),g=(o("6bde"),{computed:{subSlides(){return this.$store.state.categoriesWithProducts}},methods:{filterReset(){this.$store.state.filterParams=["sort[type]=asc","sort[column]=name"]}},components:{Swiper:p["a"],SwiperSlide:j["a"]},setup(){const e=()=>{},t=()=>{};return{onSwiper:e,onSlideChange:t,modules:[O["b"],O["c"],O["d"],O["a"]]}}}),k=(o("7b3f"),o("6b0d")),v=o.n(k);const f=v()(g,[["render",u]]);t["a"]=f},4453:function(e,t,o){},"49fb":function(e,t,o){},"73a4":function(e,t,o){},7757:function(e,t,o){e.exports=o.p+"img/slide-bg.0acc6902.png"},"7b3f":function(e,t,o){"use strict";o("73a4")},"7d97":function(e,t,o){"use strict";o.r(t);var c=o("7a23");const a={class:"wrapper"},s={class:"page"},r={class:"home-page"},n={class:"home-page__container container"},l={class:"home-page__row row"},i={class:"home-page__sidebar sidebar"},d={class:"home-page__content content"};function m(e,t,o,m,b,u){const p=Object(c["resolveComponent"])("aside-sidebar"),j=Object(c["resolveComponent"])("main-slider"),O=Object(c["resolveComponent"])("sub-slider"),g=Object(c["resolveComponent"])("home-catalogue"),k=Object(c["resolveComponent"])("recent-products"),v=Object(c["resolveComponent"])("page-ads"),f=Object(c["resolveComponent"])("layout-default");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createVNode"])(f,null,{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("main",s,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("aside",i,[Object(c["createVNode"])(p,{asideItems:e.categoryItems},null,8,["asideItems"])]),Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(j,{mainSlides:b.mainSlides},null,8,["mainSlides"]),Object(c["createVNode"])(O)])])])]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.$store.state.categoriesWithProducts,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:e.id,category:e,favoriteItems:b.favoriteItems,onAddToCart:u.addToCart},null,8,["category","favoriteItems","onAddToCart"]))),128)),0!==u.recentList.length?(Object(c["openBlock"])(),Object(c["createBlock"])(k,{key:0,recentProducts:u.recentList,onAddToCart:u.addToCart},null,8,["recentProducts","onAddToCart"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(v)])]),_:1})])}o("14d9");var b=o("7c64"),u=o("0588");const p={class:"mainslider"},j={class:"mainslider__image"},O=["src"];function g(e,t,o,a,s,r){const n=Object(c["resolveComponent"])("swiper-slide"),l=Object(c["resolveComponent"])("swiper");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p,[Object(c["createVNode"])(l,{modules:a.modules,"slides-per-view":1,"space-between":0,loop:!0,autoplay:{delay:5e3},navigation:"",pagination:{clickable:!0},scrollbar:!1,onSwiper:a.onSwiper,onSlideChange:a.onSlideChange},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.mainSlides,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:e.id},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("img",{src:e.image,alt:""},null,8,O)])]),_:2},1024))),128))]),_:1},8,["modules","onSwiper","onSlideChange"])])}var k=o("d15c"),v=o("f754"),f=o("4da1"),h=(o("6bde"),{props:{mainSlides:{type:Array}},components:{Swiper:k["a"],SwiperSlide:v["a"]},setup(){const e=()=>{},t=()=>{};return{onSwiper:e,onSlideChange:t,modules:[f["b"],f["c"],f["d"],f["a"]]}}}),C=(o("d830"),o("6b0d")),w=o.n(C);const y=w()(h,[["render",g]]);var S=y,B=o("3707");const V={class:"page-products"},_={class:"mainproducts products"},N={class:"products__container container"},E={key:0,class:"products__title"};function I(e,t,o,a,s,r){const n=Object(c["resolveComponent"])("router-link"),l=Object(c["resolveComponent"])("product-item");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",V,[Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("div",N,[0!==o.category.products.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",E,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.catalogId)+" ",1),Object(c["createVNode"])(n,{to:{name:"catalogList",params:{id:o.category.id}}},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(o.category.name||""),1)]),_:1},8,["to"])])):Object(c["createCommentVNode"])("",!0),0!==o.category.products.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:1,class:Object(c["normalizeClass"])(o.isCatalog?"subcategory-wrapper products__items":"products__items")},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.category.products,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:e.id},[t<4?(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:0,product:e,favoriteItems:o.favoriteItems,onAddToCart:r.addToCart},null,8,["product","favoriteItems","onAddToCart"])):Object(c["createCommentVNode"])("",!0)],64))),128))],2)):Object(c["createCommentVNode"])("",!0)])])])}var L=o("9588"),P={props:{isCatalog:{type:Boolean,default:!1},category:{required:!0,type:Object},favoriteItems:{type:Array,required:!0}},data(){return{isSkeleton:!0}},components:{ProductItem:L["a"]},methods:{addToCart(e){this.$emit("addToCart",e)}}};o("df03");const T=w()(P,[["render",I]]);var A=T,x=o("2e4a"),$=o("ba3f"),D={name:"HomeView",layouts:"default",created(){this.categoryItems=this.categoryList},computed:{recentList(){return this.$store.state.recentList}},data(){return{favoriteItems:[],mainSlides:[{id:1,url:"#",label:"Dodaj do koszyka",image:o("7757")},{id:2,url:"#",label:"Dodaj to koszyka",image:o("7757")},{id:3,url:"#",label:"Dodaj to koszyka",image:o("7757")},{id:4,url:"#",label:"Dodaj to koszyka",image:o("7757")}]}},methods:{addToCart(e){const t=this.$store.state.cartList;if(this.$store.state.cartList.find(t=>t.id===e.id)){const o=t.find(t=>t.id===e.id);o.amount<o.quantity&&o.amount++}else e.quantity>0&&(e.amount=1,t.push(e),localStorage.setItem("cartItems",JSON.stringify(t)))},getFavorites(){this.isAuthorised?this.$store.dispatch("getFavorites").then(e=>{this.favoriteItems=e.data}):this.favoriteItems=this.$store.state.favoriteItems}},mounted(){this.getFavorites()},components:{LayoutDefault:b["a"],AsideSidebar:u["a"],MainSlider:S,SubSlider:B["a"],HomeCatalogue:A,RecentProducts:x["a"],PageAds:$["a"]}};const F=w()(D,[["render",m]]);t["default"]=F},d830:function(e,t,o){"use strict";o("49fb")},df03:function(e,t,o){"use strict";o("4453")}}]);
//# sourceMappingURL=chunk-10d68aab.3ea77626.js.map