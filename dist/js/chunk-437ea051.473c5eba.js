(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-437ea051"],{"8f9a":function(t,e,o){"use strict";o("bfb6")},9588:function(t,e,o){"use strict";var s=o("7a23");const i={class:"products__item item-product"},a={class:"item-product__info flex"},c={class:"item-product__image"},r=["src"],n={key:0},d={class:"item-product__text-row"},u={class:"item-product__label"},l={class:"item-product__price"},b={class:"item-product__actions actions-product flex"};function f(t,e,o,f,p,v){const m=Object(s["F"])("router-link");return Object(s["z"])(),Object(s["f"])("div",i,[Object(s["j"])(m,{to:{name:"productItem",params:{id:o.product.id}}},{default:Object(s["K"])(()=>[Object(s["g"])("div",{class:"item-product__body flex",onClick:e[2]||(e[2]=t=>v.addToRecent(o.product))},[Object(s["g"])("div",a,[Object(s["g"])("div",c,[Object(s["g"])("img",{src:o.product.preview,alt:""},null,8,r),o.product.mark?(Object(s["z"])(),Object(s["f"])("span",n,Object(s["H"])(o.product.labelMark),1)):Object(s["e"])("",!0)]),Object(s["g"])("div",d,[Object(s["g"])("div",u,Object(s["H"])(o.product.name),1),Object(s["g"])("div",l,Object(s["H"])(o.product.price),1)])]),Object(s["g"])("div",b,[Object(s["g"])("button",{onClick:e[0]||(e[0]=t=>{this.showAlert(o.product),v.addToCart(o.product),t.stopPropagation(),t.preventDefault()}),type:"button",class:Object(s["q"])(["actions-product__button",v.getQuantity(o.product)>=o.product.quantity?"_disabled":""])}," Dodaj do koszyka ",2),Object(s["g"])("button",{onClick:e[1]||(e[1]=t=>{v.changeFavoriteList(o.product),t.stopPropagation(),t.preventDefault()}),type:"button",class:Object(s["q"])(["actions-product__favorite",{favorite:!0===v.checkIsFavorite(o.product)}])},null,2)])])]),_:1},8,["to"])])}o("14d9");var p={props:{product:{type:Object,required:!0}},methods:{getQuantity(t){if(!this.$store.state.cartList.find(e=>e.id===t.id))return 0;const e=this.$store.state.cartList.find(e=>e.id===t.id);return e.amount},addToCart(t){this.$emit("addToCart",t)},changeFavoriteList(t){if(this.$store.state.favoriteItems.find(e=>e.id===t.id)){let e=this.$store.state.favoriteItems.find(e=>e.id===t.id);e.isFavorite=!1;let o=this.$store.state.favoriteItems;const s=o.indexOf(o.find(e=>e.id===t.id));o.splice(s,1),localStorage.setItem("favoriteItems",JSON.stringify(o))}else{t.isFavorite=!0;const e=this.$store.state.favoriteItems;e.push(t),localStorage.setItem("favoriteItems",JSON.stringify(e))}},checkIsFavorite(t){return this.$store.state.favoriteItems.find(e=>e.id===t.id)?(t.isFavorite=!0,!0):(t.isFavorite=!1,!1)},addToRecent(t){this.$store.state.recentList.find(e=>e.id===t.id)||this.$store.state.recentList.unshift(t)},showAlert(t){if(this.getQuantity(t)<t.quantity){const t=document.querySelector(".access-alert__container");t.classList.add("show-access-alert"),setTimeout(()=>t.classList.remove("show-access-alert"),1e3)}}}},v=o("6b0d"),m=o.n(v);const j=m()(p,[["render",f]]);e["a"]=j},bebb:function(t,e,o){"use strict";o.r(e);var s=o("7a23");const i={class:"favorite"},a={class:"page"},c={class:"page__favorite favorite-page"},r={class:"favorite-page__container container"},n={class:"favorite-page__content"};function d(t,e,o,d,u,l){const b=Object(s["F"])("FavoriteComponent"),f=Object(s["F"])("LayoutDefault");return Object(s["z"])(),Object(s["f"])("div",i,[Object(s["j"])(f,null,{default:Object(s["K"])(()=>[Object(s["g"])("div",a,[Object(s["g"])("div",c,[Object(s["g"])("div",r,[Object(s["g"])("div",n,[Object(s["j"])(b)])])])])]),_:1})])}var u=o("7c64");const l={class:"favorite-page__component"},b=Object(s["g"])("div",{class:"favorite-page__title big-title"},"Uratowani produkty",-1),f={class:"favorite-page__items"},p={key:0,class:"favorite-block"},v={class:"products__items"},m={key:1,class:"favorite-block"},j=Object(s["g"])("div",{class:"empty-block"},[Object(s["i"])("Your uratowane is "),Object(s["g"])("span",null,"empty!")],-1),O=[j];function g(t,e,o,i,a,c){const r=Object(s["F"])("ProductItem");return Object(s["z"])(),Object(s["f"])("div",l,[b,Object(s["g"])("div",f,[0!==a.favoriteItems.length?(Object(s["z"])(),Object(s["f"])("div",p,[Object(s["g"])("div",v,[(Object(s["z"])(!0),Object(s["f"])(s["a"],null,Object(s["D"])(a.favoriteItems,t=>(Object(s["z"])(),Object(s["d"])(r,{key:t.id,product:t,onAddToCart:c.addToCart},null,8,["product","onAddToCart"]))),128))])])):(Object(s["z"])(),Object(s["f"])("div",m,O))])])}o("14d9");var _=o("9588"),h={data(){return{favoriteItems:[]}},methods:{getFavoriteItems(){console.log(this.$store.state.favoriteItems),this.favoriteItems=this.$store.state.favoriteItems},addToCart(t){const e=this.$store.state.cartList;if(this.$store.state.cartList.find(e=>e.id===t.id)){const o=e.find(e=>e.id===t.id);o.amount<o.quantity&&o.amount++}else t.quantity>0&&(t.amount=1,e.push(t),localStorage.setItem("cartItems",JSON.stringify(e)))}},mounted(){this.getFavoriteItems()},computed:{currentFavoriteList(){return localStorage.getItem("favoriteItems")}},watch:{currentFavoriteList(){setTimeout(()=>{this.getFavoriteItems()},0)}},components:{ProductItem:_["a"]}},I=(o("8f9a"),o("6b0d")),y=o.n(I);const k=y()(h,[["render",g]]);var F=k,w={components:{LayoutDefault:u["a"],FavoriteComponent:F}};const L=y()(w,[["render",d]]);e["default"]=L},bfb6:function(t,e,o){}}]);
//# sourceMappingURL=chunk-437ea051.473c5eba.js.map