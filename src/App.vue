<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="stylus">
  *{
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  :focus, :active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  html,body{
    height: 100%;
    width: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;background: inherit;}
  button::-moz-focus-inner {padding:0;border:0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none}
  ul li{list-style: none}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
  a{color: inherit;}
  body {
    font-family Arial, "Helvetica Neue", Helvetica, sans-serif
    margin 0;
    width 100%
    font-size 16px
    line-height 18px
    overflow-x: hidden
  }
  .wrapper{
    position relative
  }
  .container {
    max-width: 1860px;
    padding 0 30px
    margin: 0 auto;
    // overflow: hidden;
    @media(max-width: 350px) {
      padding 0 20px
    }
  }
  .flex{
    display flex
    align-items center
  }
  
  .navigation {
    padding 10px 0
    margin: 0 -10px;
  }
  .navigation a{
  padding: 0 10px;
  font-size: 14px;
  line-height: 114%;
  color: #8B8B8B;
  }
  .row{
    display flex !important
    column-gap: 60px
    }
    .sidebar{
      padding 40px 0 0 0
      @media(min-width: 1201px) {
        flex: 0 0 350px !important
      }
      @media(max-width: 1200px) {
        .sidebar-category__title{
          cursor pointer
        }
      }
    }
    .content{
      max-width: 1500px
      min-width: 0
      flex: 1 1 1500px !important
    }
    @media(max-width: 1200px){
      .row{
        flex-wrap wrap
      }
      .content{
        order: 0
        flex-basis: 100%
      }
      .sidebar{
        padding 0
        order: 1
        flex-basis: 100%
      }
    }
.button{
  border-radius: 8px
  background-color: #FF0031;
  min-width 240px
  min-height 50px
  transition: all 0.5s ease
  border 1px solid transparent
  span{
    display inline-block
    padding 16px 5px
    font-weight: 700;
    color: #fff
    width 100%
    height 100%
  }
  @media(max-width:1440px){
    //width 100%
  }
}

.quantity-product {
    display flex
    align-items center
    span{
      display inline-block
      font-size 32px
      color: #3D3D3D;
      padding 15px
      cursor: pointer
      
    }
    &__input {
      flex: 0 0 70px
      border 1px dashed #000
      input{
        background transparent
        padding: 5px 15px
        width 70px
        font-size 24px
        color: #3D3D3D;
      }
    }
  }
  .actions-product__favorite.favorite{
    background url('../src/assets/img/main/icons/favorite-on-hover.png') 0 0 no-repeat
  }
  .item-product {
  &__body {
    min-height 100%
    flex-direction column
    gap: 20px
    padding 30px
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    position relative
    background-color #fff
    border 2px solid rgba(256, 256, 256, 0.1)
    transition all 0.3s ease 0s
  }
  &__image {
    display block
    width 225px
    // max-width 270px
    height 200px
    img{
      width 100%
      height 100%
    }
    span{
      display inline-block
      width 160px
      padding 5px 0
      text-align center
      background: #FF0031;
      border-radius: 5px;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
      position absolute
      top 22px
      right 12px
    }
  }
  &__text-row{
    display flex
    flex-direction column;
    gap: 20px
    width 100%
    min-height: 80px
  }
  &__label {
    font-size 18px
    line-height: 21px;
    flex: 1 1 100%
  }
  &__price {
    flex: 0 0 auto;
    width 100%
    text-align left
    font-size 33px
    &::after{
      content: 'PLN'
      font-size 24px
      margin-left: 10px
    }
  }
  &__info{
    width 100%
    flex-direction column
    flex 1 1 100%
    gap 20px
  }
  &__actions {
  }
  @media(max-width: 1400px){
    flex-basis 50%
  }
}
.actions-product {
  width 100%
  min-width: 225px
  justify-content space-between
  gap 5px
  &__button {
    flex-shrink: 0
    padding 20px 30px
    max-width 195px
    text-align center
    font-size: 16px;
    border: 2px solid #000000;
    border-radius: 10px;
  }
  &__favorite {
    width 28px
    height 28px
    background url('../src/assets/img/main/icons/main-favorite.png') 0 0 no-repeat
    @media(min-width: 769px) {
      &:hover{
        background url('../src/assets/img/main/icons/favorite-on-hover.png') 0 0 no-repeat
      }
    }
  }
}
.products {
  margin 30px 0
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 25px;
    color: #3D3D3D;
  }
  &__items {
    padding 50px 0
    margin 0 -10px
    display grid
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    row-gap: 40px
    @media(max-width: 1335px){
      grid-template-columns: repeat(3, minmax(300px, 1fr));
    }
    @media(max-width: 992px) {
      grid-template-columns: repeat(2, minmax(300px, 1fr));
    }
    @media(max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    @media(max-width: 560px){
      padding 20px 0
    }
  }
  &__item {
    padding 0 10px
    margin 5px 0
    min-height 100%
  }
}
.products__not-exist{
  display: block;
  font-size: 24px;
  line-height: 1.5;
  padding: 50px 0;
}
.block{
  display block
}
.ali-c{
  align-items: center;
}
.big-title{
  text-align center
  font-size 30px
  line-height 34px
}
.empty-block{
  text-align center
  padding 50px 0
  font-size 32px
  line-height 114%
  span{
    color: #ff0031
  }
}
.clear-all{
  text-align center
  button{
    background transparent
    border 1px solid #ff0031
    font-size 28px
    line-height 114%
    max-width 350px
    span{
      color #ff0031
      
    }
  }
}
@media(min-width: 769px) {
    .clear-all{
      button {
        span{
          &:hover {
            color #fff
          }
        }
      }
    }
    .hover-underline{
      display inline-block
      &:hover{
          text-decoration underline
      }
    }
    .button:hover {
      border 1px solid #FF0031
      background-color: rgba(#FF0031, 0.5);
    }
    .quantity-product{
      span{
        &:not(._disabled):hover{
          color: #FF0031;
        }
      }
    }
    .item-product__body {
      &:hover{
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
        border: 2px solid #FF0031;
        .actions-product__button:not(._disabled){
          border: 2px solid #FF0031;
          color: #FF0031
          transition all 0.3s ease 0s
        }
      }
    }
    .actions-product__button{
      &:hover{
        background-color #FF0031;
        color: #fff !important
      }
    }
  }
  .not-exist-items{
    font-size: 20px;
    line-height: 25px;
    color: #000;
  }
  ._disabled{
    opacity 0.5 
    border-color: #3d3d3d !important
    background-color transparent !important
    color: #3d3d3d !important
    span{
      color: #3d3d3d !important
    }
    &:hover{
      cursor: default !important
      background-color transparent !important
      border-color: #3d3d3d !important
      color: #3d3d3d !important
      span{
        color: #3d3d3d !important
      }
    }
  }
</style>

