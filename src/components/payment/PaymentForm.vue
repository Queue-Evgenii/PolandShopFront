<template>
  <form action="" class="payment-page__form form-payment">
    <div class="form-payment__section">
      <div class="form-payment__title">Adres dostawy</div>
      <ul class="form-payment__block">
        <li class="form-payment__row">
          <label for="region" class="form-payment__label">Kraj/region</label>
          <input id="region" type="text" class="form-payment__input input-width" placeholder="Region">
        </li>
        <li class="form-payment__row">
          <label for="username" class="form-payment__label">Imię Nazwisko</label>
          <input id="username" type="text" class="form-payment__input input-width" placeholder="Imie">
        </li>
        <li class="form-payment__row n-row">
          <label for="cod" class="form-payment__label f1-1">Kod pocztowy</label>
          <input id="cod" type="text" class="form-payment__input w-110" placeholder="Kod">
          <button class="form-payment__button">Znajdź adres</button>
        </li>
        <li class="form-payment__row">
          <label for="phone" class="form-payment__label">Telefoniczny numer kontaktowy</label>
          <input class="form-payment__input input-width" id="phone" type="tel" placeholder="Kontaktowy numer">
<!--          I cant remember for which point these code-->
<!--          <div class="form-payment__input input-width">-->
<!--            <div class="form-payment__select"></div>-->
<!--            <input id="phone" type="text">-->
<!--          </div>-->
        </li>
      </ul>
    </div>
    <div class="form-payment__section">
      <div class="form-payment__title">Wybierz opcję dostawy</div>
      <ul class="form-payment__block">
        <div class="form-payment__row radio-block">
          <input id="delivery" type="checkbox" class="form-payment__radiobox">
          <label for="delivery" class="form-payment__label-radio">
            <p>Standardowy zakres dostawy</p>
            <p>Wysyłka w ciągu 2-3 dni</p>
            <span>Koszt dostawy 5 PLN</span>
          </label>
        </div>
      </ul>
    </div>
    <div class="form-payment__sections">
      <div class="form-payment__section">
        <div class="form-payment__title">Wybierz metodę płatności</div>
        <ul class="form-payment__block">
          <li class="form-payment__row radio-block">
            <input id="payment" type="checkbox" class="form-payment__radiobox">
            <label for="payment" class="form-payment__label-radio">
              <p>Karta kredytowa / debetowa</p>
            </label>
          </li>
          <li class="form-payment__row">
            <label for="CardNum" class="form-payment__label">Numer karty</label>
            <input id="CardNum" type="text" class="form-payment__input input-width" placeholder="Numer karty">
          </li>
          <li class="form-payment__row">
            <label for="name" class="form-payment__label">Nazwa na mapie</label>
            <input id="name" type="text" class="form-payment__input input-width" placeholder="Nazwa na mapie">
          </li>
          <li class="form-payment__row">
            <label for="cardDate" class="form-payment__label">Data ważności</label>
            <input id="cardDate" type="text" class="form-payment__input" placeholder="__/__">
          </li>
          <li class="form-payment__row">
            <label for="CV2" class="form-payment__label">Kod zabezpieczający (CV2)</label>
            <input id="CV2" type="text" class="form-payment__input" placeholder="_ _ _">
          </li>
        </ul>
      </div>
      <div class="form-payment__section">
        <div class="form-payment__title-bold">Dostawa adresu</div>
        <ul class="form-payment__block">
          <li class="form-payment__row radio-block">
            <input id="delivery-adress" type="checkbox" class="form-payment__radiobox">
            <label for="delivery-adress" class="form-payment__label-radio">
              <p>Użyj mojego adresu wysyłki</p>
            </label>
          </li>
          <li class="form-payment__row">
            <label for="AdressChange" class="form-payment__label">Zmiana adresu</label>
            <input id="AdressChange" type="text" class="form-payment__input" placeholder="Warszawa Polska">
          </li>
        </ul>
      </div>
    </div>
    <div class="form-payment__section-btn flex">
      <button class="form-payment__cancel button" type="button" @click="goBackPopup()">Cancel</button>
      <button class="form-payment__submit button" type="submit">Płacić</button>
    </div>
  </form>
</template>
<style lang="stylus">
.form-payment {
  &__sections{
    display flex
    @media(max-width: 768px){
      flex-direction column-reverse
    }
  }
  &__section-btn {
    justify-content left
    gap: 30px
    @media(max-width: 475px){
      flex-wrap: wrap
    }
  }
  &__title {
  }
  &__block {
    padding 40px 0 40px 70px
    display flex
    flex-direction: column
    gap: 35px
    @media(max-width: 768px){
      padding 40px 0
    }
  }
  &__row {
    display flex
    flex-direction: column
    gap: 15px
  }
  &__label{
  }
  &__input {
    background-color transparent
    padding 10px 15px
    border: 1px solid #8B8B8B;
    border-radius: 5px
    max-width:300px
    input{
      background-color transparent
    }
  }
  &__button {
    width 162px
    padding 15px
    font-size: 14px;
    line-height: 16px;
    color: #FF0031;
    border 1px solid #FF0031;
    border-radius 5px
    transition background 0.3s ease 0s;
    &:hover{
      background-color #ff0031;
      color: #fff;
    }
  }
  &__cancel {
    background transparent
    color: #ff0031;
    border: 1px solid #ff0031;
    width 190px
    min-width: initial;
    @media(max-width: 992px){
      width 100%
    }
    &:hover{
      background-color #ff0031;
      color: #fff;
    }
  }
  &__submit{
    color: #fff
    font-weight 700
    font-size 14px
    line-height 16px
    width 215px
    @media(max-width: 992px){
      width 100%
    }
  }
  &__radiobox {
    display none
  }
  &__label-radio {
    position relative
    padding-left 30px
    p{
        margin-bottom 10px
    }
    span{
      display inline-block
      margin-top 5px
      color: #FF0031;
      font-weight: 700;
    }
    &::before{
      content: ''
      position absolute
      left 0
      top 3px
      width 16px
      height 16px
      border: 1px solid #272727;
      border-radius: 50%
    }
    &::after{
      content: ''
      position absolute
      left 4px
      top 7px
      width 7.5px
      height 7.5px
      border-radius: 50%
      background-color #ff5070
      transform: scale(0)
      transition: all 0.3s ease 0s
    }
  }
}
.input-width{
  width 300px
}
.radio-block {
  input[type=checkbox]:checked + label {
    &::after{
      transform: scale(1)
    }
  }
}
.f1-1{
  flex: 1 1 100%
}
.n-row{
  flex-direction: row
  flex-wrap: wrap
}
.w-110{
  flex: 0 0 122px
  max-width: 122px
}
</style>
<script>
export default {
  methods: {
    goBackPopup() {
      this.$emit("goBackPopup");
    }
  }
}
</script>
