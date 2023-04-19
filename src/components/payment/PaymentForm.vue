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
