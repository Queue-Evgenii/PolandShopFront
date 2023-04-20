<template>
  <form action="" class="payment-page__form form-payment">
    <div class="form-payment__section">
      <div class="form-payment__title">Szybkie zakupy</div>
      <ul class="form-payment__block">
        <li v-if="!isAuthorized.status" class="form-payment__row">
          <label for="email" class="form-payment__label">Adres e-mail *</label>
          <input
            id="email"
            type="text"
            class="form-payment__input input-width"
            placeholder="Adres e-mail"
            v-model="paymentForm.email"
            :class="[
              v$.paymentForm.email.$error ? 'invalid-data-input' : '',
              v$.paymentForm.email.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.email.$error" class="invalid-data-box">
            <li v-if="v$.paymentForm.email.$dirty && v$.paymentForm.email.required.$invalid" class="invalid-data-mark">This area is required</li>
            <li v-if="v$.paymentForm.email.$dirty && v$.paymentForm.email.$invalid" class="invalid-data-mark">This area is invalid</li>
          </ul>
        </li>
        <li v-else class="form-payment__row">
          <div class="form-payment__label">Adres e-mail</div>
          <div class="form-payment__input input-width">{{ isAuthorized.email }}</div>
        </li>
        <li class="form-payment__row">
            <div class="form-payment__title">Tytuł</div>
          <div class="radio-block">
            <div class="radio-block-row">
              <input name="gender" id="male" type="radio" class="form-payment__radiobox" v-model="paymentForm.gender.male">
              <label for="male" class="form-payment__label-radio">Pan</label>
            </div>
            <div class="radio-block-row">
              <input name="gender" id="female" type="radio" class="form-payment__radiobox" v-model="paymentForm.gender.female">
              <label for="female" class="form-payment__label-radio">Pani</label>
            </div>
          </div>
        </li>
        <li class="form-payment__row">
          <label for="username" class="form-payment__label">Imię Nazwisko *</label>
          <input
            id="username"
            type="text"
            class="form-payment__input input-width"
            placeholder="Imie"
            v-model="paymentForm.username"
            :class="[
              v$.paymentForm.username.$error ? 'invalid-data-input' : '',
              v$.paymentForm.username.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.username.$error" class="invalid-data-box">
            <li v-if="v$.paymentForm.username.$dirty && v$.paymentForm.username.required.$invalid" class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <div class="form-payment__text">Wyrażam zgodę na otrzymywanie drogą mailową informacji handlowych, marketingowych, reklamowych (newsletter) od Administratora danych osobowych, którym jest ******* ************* ********, *********, ****. Administrator danych osobowych informuje, że podane przez Panią/Pana dane osobowe będą wykorzystywane jedynie w celu wysyłki newslettera do czasu rezygnacji z newslettera. Podanie danych jest dobrowolne, ale niezbędne w celu wysyłki newslettera, dane osobowe nie będą  przekazywane podmiotom trzecim bez uzyskania Pani/Pana odrębnej zgody. Ma Pani/Pan prawo w każdym czasie do przenoszenia danych, dostępu do treść danych osobowych oraz możliwość ich poprawiania, wniesienia sprzeciwu co do przetwarzania danych a także ma Pani/Pana także prawo do wniesienia skargi dot. przetwarzania danych osobowych do Prezesa Urzędu Ochrony Danych Osobowych.</div>
          <div class="radio-block">
            <input id="mailing" type="checkbox" class="form-payment__radiobox" v-model="paymentForm.lettering">
            <label for="mailing" class="form-payment__label-radio">Zapisz się do naszego newslettera.</label>
          </div>
        </li>
      </ul>
    </div>
    <div class="form-payment__section">
      <div class="form-payment__title">Adres dostawy</div>
      <ul class="form-payment__block">
        <li class="form-payment__row">
          <label for="username" class="form-payment__label">Imię Nazwisko *</label>
          <input
            id="username"
            type="text"
            class="form-payment__input input-width"
            placeholder="Imie"
            v-model="paymentForm.deliveryUsername"
            :class="[
              v$.paymentForm.deliveryUsername.$error ? 'invalid-data-input' : '',
              v$.paymentForm.deliveryUsername.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.deliveryUsername.$dirty && v$.paymentForm.deliveryUsername.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="firma" class="form-payment__label">Firma *</label>
          <input
            id="firma"
            class="form-payment__input input-width"
            placeholder="Firma"
            v-model="paymentForm.firma"
            :class="[
              v$.paymentForm.firma.$error ? 'invalid-data-input' : '',
              v$.paymentForm.firma.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.firma.$dirty && v$.paymentForm.firma.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="nip-ue" class="form-payment__label">NIP UE *</label>
          <input
            id="nip-ue"
            class="form-payment__input input-width"
            placeholder="NIP UE"
            v-model="paymentForm.nipue"
            :class="[
              v$.paymentForm.nipue.$error ? 'invalid-data-input' : '',
              v$.paymentForm.nipue.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.nipue.$dirty && v$.paymentForm.nipue.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="adress" class="form-payment__label">Adres *</label>
          <input
            id="adress"
            class="form-payment__input input-width"
            placeholder="ulica/plac koniecznie z numerem budynku"
            v-model="paymentForm.adress"
            :class="[
              v$.paymentForm.adress.$error ? 'invalid-data-input' : '',
              v$.paymentForm.adress.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.adress.$dirty && v$.paymentForm.adress.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <div class="n-row flex">
            <label for="cod" class="form-payment__label f1-1">Kod pocztowy *</label>
            <input
              id="cod"
              type="text"
              class="form-payment__input w-110"
              placeholder="Kod"
              v-model="paymentForm.mailCod"
              :class="[
                v$.paymentForm.mailCod.$error ? 'invalid-data-input' : '',
                v$.paymentForm.mailCod.$dirty ? 'valid-data-input' : '',
              ]"
            >
            <button class="form-payment__button">Znajdź adres</button>
          </div>
          <ul v-if="v$.paymentForm.mailCod.$dirty && v$.paymentForm.mailCod.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row form-payment__dropdowm dropdown-menu">
          <label class="form-payment__label">Kraj *</label>
          <div
            @click="isOpen = !isOpen"
            class="form-payment__label form-payment__input dropdown-menu__label"
            :class="isOpen ? '_active' : ''"
          >
            <span>{{ dropdownCountryValue.name }}</span>
          </div>
          <ul class="dropdown-menu__items" :class="isOpen ? '_active' : ''">
            <li
              @click="changeValue(item, this.dropdownCountryValue); isOpen = false"
              v-for="item in countriesList"
              :key="item.id"
              class="dropdown-menu__item form-payment__input"
              :class="item.id === dropdownCountryValue.id ? '_selected' : ''"
            >
              {{ item.name }}
            </li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="city" class="form-payment__label">Miasto *</label>
          <input
            id="city"
            class="form-payment__input input-width"
            placeholder="Miasto"
            v-model="paymentForm.city"
            :class="[
              v$.paymentForm.city.$error ? 'invalid-data-input' : '',
              v$.paymentForm.city.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.city.$dirty && v$.paymentForm.city.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="phone" class="form-payment__label">Telefoniczny numer kontaktowy *</label>
          <input
            class="form-payment__input input-width"
            id="phone"
            type="tel"
            placeholder="Kontaktowy numer"
            v-model="paymentForm.phone"
            :class="[
              v$.paymentForm.phone.$error ? 'invalid-data-input' : '',
              v$.paymentForm.phone.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.paymentForm.phone.$dirty && v$.paymentForm.phone.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <div class="radio-block">
            <input id="other-address" type="checkbox" class="form-payment__radiobox">
            <label @click="isOther = !isOther" for="other-address" class="form-payment__label-radio">Proszę użyć innego adresu rozliczeniowego</label>
          </div>
        </li>
      </ul>
    </div>
    <div class="form-payment__section dropdown-section" :class="isOther ? '_active' : ''" ref="dropdownSection">
      <div class="form-payment__title">Adres dostawy</div>
      <ul class="form-payment__block">
        <li class="form-payment__row">
          <label for="other-username" class="form-payment__label">Imię Nazwisko *</label>
          <input
            id="other-username"
            type="text"
            class="form-payment__input input-width"
            placeholder="Imie"
            v-model="otherPaymentForm.deliveryUsername"
            :class="[
              v$.otherPaymentForm.deliveryUsername.$error ? 'invalid-data-input' : '',
              v$.otherPaymentForm.deliveryUsername.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.otherPaymentForm.deliveryUsername.$dirty && v$.otherPaymentForm.deliveryUsername.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="other-firma" class="form-payment__label">Firma *</label>
          <input
            id="other-firma"
            class="form-payment__input input-width"
            placeholder="Firma"
            v-model="otherPaymentForm.firma"
            :class="[
              v$.otherPaymentForm.firma.$error ? 'invalid-data-input' : '',
              v$.otherPaymentForm.firma.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.otherPaymentForm.firma.$dirty && v$.otherPaymentForm.firma.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="other-nip-ue" class="form-payment__label">NIP UE *</label>
          <input
            id="other-nip-ue"
            class="form-payment__input input-width"
            placeholder="NIP UE"
            v-model="otherPaymentForm.nipue"
            :class="[
              v$.otherPaymentForm.nipue.$error ? 'invalid-data-input' : '',
              v$.otherPaymentForm.nipue.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.otherPaymentForm.nipue.$dirty && v$.otherPaymentForm.nipue.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="other-adress" class="form-payment__label">Adres *</label>
          <input
            id="other-adress"
            class="form-payment__input input-width"
            placeholder="ulica/plac koniecznie z numerem budynku"
            v-model="otherPaymentForm.adress"
            :class="[
              v$.otherPaymentForm.adress.$error ? 'invalid-data-input' : '',
              v$.otherPaymentForm.adress.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.otherPaymentForm.adress.$dirty && v$.otherPaymentForm.adress.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <div class="n-row flex">
            <label for="other-cod" class="form-payment__label f1-1">Kod pocztowy *</label>
            <input
              id="other-cod"
              type="text"
              class="form-payment__input w-110"
              placeholder="Kod"
              v-model="otherPaymentForm.mailCod"
              :class="[
                v$.otherPaymentForm.mailCod.$error ? 'invalid-data-input' : '',
                v$.otherPaymentForm.mailCod.$dirty ? 'valid-data-input' : '',
              ]"
            >
            <button class="form-payment__button">Znajdź adres</button>
          </div>
          <ul v-if="v$.otherPaymentForm.mailCod.$dirty && v$.otherPaymentForm.mailCod.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row form-payment__dropdowm dropdown-menu">
          <label class="form-payment__label">Kraj *</label>
          <div
            @click="otherIsOpen = !otherIsOpen"
            class="form-payment__label form-payment__input dropdown-menu__label"
            :class="otherIsOpen ? '_active' : ''"
          >
            <span>{{ otherDropdownCountryValue.name }}</span>
          </div>
          <ul class="dropdown-menu__items" :class="otherIsOpen ? '_active' : ''">
            <li
              @click="changeValue(item, this.otherDropdownCountryValue); otherIsOpen = false"
              v-for="item in countriesList"
              :key="item.id"
              class="dropdown-menu__item form-payment__input"
              :class="item.id === otherDropdownCountryValue.id ? '_selected' : ''"
            >
              {{ item.name }}
            </li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="other-city" class="form-payment__label">Miasto *</label>
          <input
            id="other-city"
            class="form-payment__input input-width"
            placeholder="Miasto"
            v-model="otherPaymentForm.city"
            :class="[
              v$.otherPaymentForm.city.$error ? 'invalid-data-input' : '',
              v$.otherPaymentForm.city.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.otherPaymentForm.city.$dirty && v$.otherPaymentForm.city.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="other-phone" class="form-payment__label">Telefoniczny numer kontaktowy *</label>
          <input
            id="other-phone"
            class="form-payment__input input-width"
            type="tel"
            placeholder="Kontaktowy numer"
            v-model="otherPaymentForm.phone"
            :class="[
              v$.otherPaymentForm.phone.$error ? 'invalid-data-input' : '',
              v$.otherPaymentForm.phone.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.otherPaymentForm.phone.$dirty && v$.otherPaymentForm.phone.required.$invalid" class="invalid-data-box">
            <li class="invalid-data-mark">This area is required</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="form-payment__section">
      <ul class="form-payment__block">
        <li class="form-payment__row">
          <div class="row-gap">
            <div class="radio-block">
              <input id="rules-agreement" type="checkbox" class="form-payment__radiobox" v-model="paymentForm.rulesAgreement">
              <label for="rules-agreement" class="form-payment__label-radio">Potwierdzam, że zapoznałem się z regulaminem sklepu internetowego</label>
            </div>
            <a href="" class="form-payment__text hover-underline">(Przeczytaj Regulamin Sklepu Internetowego)</a>
            <ul v-if="v$.paymentForm.rulesAgreement.$dirty && v$.paymentForm.rulesAgreement.sameAs.$invalid" class="invalid-data-box">
              <li class="invalid-data-mark">This area is required</li>
            </ul>
          </div>
          <div class="row-gap">
            <div class="radio-block">
              <input id="policy-agreement" type="checkbox" class="form-payment__radiobox" v-model="paymentForm.policyAgreement">
              <label for="policy-agreement" class="form-payment__label-radio">Potwierdzam, że zapoznałem się z polityką prywatności sklepu internetowego</label>
            </div>
            <a href="" class="form-payment__text hover-underline">(Przeczytaj Politykę Prywatności)</a>
            <ul v-if="v$.paymentForm.policyAgreement.$dirty && v$.paymentForm.policyAgreement.sameAs.$invalid" class="invalid-data-box">
              <li class="invalid-data-mark">This area is required</li>
            </ul>
          </div>
        </li>
        <li class="form-payment__row">
          <div class="form-payment__text">Administratorem danych osobowych zbieranych za pośrednictwem sklepu internetowego jest *****. Północna 85, ****, NIP: *****, REGON ****. Dane są lub mogą być przetwarzane w celach oraz na podstawach wskazanych szczegółowo w polityce prywatności (np. realizacja umowy, marketing bezpośredni). Polityka prywatności zawiera pełną informację na temat przetwarzania danych przez administratora wraz z prawami przysługującymi osobie, której dane dotyczą. Szybki kontakt z administratorem: **** lub tel.: ***</div>
        </li>
      </ul>
    </div>
    <div class="form-payment__section-btn flex">
      <button class="form-payment__cancel button" type="button" @click="goBackPopup()">Cancel</button>
      <button class="form-payment__submit button" type="submit" @click="submitForm();$event.preventDefault()">Płacić</button>
    </div>
  </form>
</template>
<style lang="stylus">
.radio-block{
  display: flex;
  gap: 20px;
}
.radio-block-row{
  display inline-block
  width min-content
}
.dropdown-section{
  transform: translate(0, -100%);
  height 0
  &._active{
    transform: translate(0, 0);
    transition: all 0.5s ease 0s;
    height max-content
  }
}
.dropdown-menu{
  position relative
  max-width: 300px
  z-index 2
  &__label{
    display flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    &::after{
      content: '';
      display inline-block;
      width 15px;
      height 15px;
      background: url('../../assets/img/main/icons/arrow-bottom.png') center no-repeat;
      background-size: 100%;
      transition: transform 0.5s ease 0s;
      transform: rotate(0)
    }
    &._active{
      &::after{
        transform: rotate(-180deg)
      }
    }
  }
  &__items{
    top 80px
    background: #fff;
    width 100%
    position absolute
    border: 1px solid #8b8b8b;
    border-radius: 5px;
    overflow scroll
    height 0
    visibility: hidden
    transition all 0.5s ease 0s
    &._active{
      height 220px
      visibility: visible
    }
  }
  &__item{
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
    &:last-child{
      border-bottom: none !important;
    }
  }
}
</style>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  props:{
    isAuthorized: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      paymentForm: {
        email: '',
        username: '',
        gender: {
          male: false,
          female: false,
        },
        lettering: false,
        deliveryUsername: '',
        firma: '',
        nipue: '',
        adress: '',
        mailCod: '',
        city: '',
        phone: '',
        rulesAgreement: false,
        policyAgreement: false,
      },
      otherPaymentForm: {
        deliveryUsername: '',
        firma: '',
        nipue: '',
        adress: '',
        mailCod: '',
        otherCountry: {},
        city: '',
        phone: '',
      },
      countriesList: [
        {
          id: 1,
          name: 'Austria'
        },
        {
          id: 2,
          name: 'Belgia'
        },
        {
          id: 3,
          name: 'Czechy'
        },
        {
          id: 4,
          name: 'Dania'
        },
        {
          id: 5,
          name: 'Finlandia'
        },
        {
          id: 6,
          name: 'Francja'
        },
        {
          id: 7,
          name: 'Hiszpania'
        },
        {
          id: 8,
          name: 'Holandia'
        },
        {
          id: 9,
          name: 'Irlandia Południowa'
        },
        {
          id: 10,
          name: 'Litwa'
        },
        {
          id: 11,
          name: 'Niemcy'
        },
        {
          id: 12,
          name: 'Polska'
        },
        {
          id: 13,
          name: 'Portugalia'
        },
        {
          id: 14,
          name: 'Szwecja'
        },
        {
          id: 15,
          name: 'Słowacja'
        },
        {
          id: 16,
          name: 'Węgry'
        },
        {
          id: 17,
          name: 'Włochy'
        },
        {
          id: 18,
          name: 'Łotwa'
        },
      ],
      dropdownCountryValue: {
        id: 12,
        name: 'Polska',
      },
      isOpen: false,
      isOther: false,
      otherDropdownCountryValue: {
        id: 12,
        name: 'Polska',
      },
      otherIsOpen: false,
    }
  },
  validations() {
    return {
      paymentForm: {
        email: { required, email },
        username: { required },
        deliveryUsername: { required },
        firma: { required },
        nipue: { required },
        adress: { required },
        mailCod: { required },
        city: { required },
        phone: { required },
        rulesAgreement: { sameAs: sameAs(true) },
        policyAgreement: { sameAs: sameAs(true) },
      },
      otherPaymentForm: {
        deliveryUsername: { required },
        firma: { required },
        nipue: { required },
        adress: { required },
        mailCod: { required },
        city: { required },
        phone: { required },
      },
    }
  },
  computed: {
  },
  methods: {
    async submitForm() {
      if(this.isAuthorized.status) {
        this.paymentForm.email = this.isAuthorized.email;
      }
      let isFormCorrect = await this.v$.paymentForm.$validate();
      if(this.isOther){
        isFormCorrect = await this.v$.otherPaymentForm.$validate();
      }
      if (!isFormCorrect) return;
      console.log('submitted')
      this.setLoginForm();
    },
    setLoginForm() {
      let data = localStorage.getItem('paymentForm');
      if(!data){
        this.paymentForm.country = this.dropdownCountryValue;
        localStorage.setItem('paymentForm', JSON.stringify(this.paymentForm));
      }
    },
    checkLoginForm() {
      let data = localStorage.getItem('paymentForm');
      if(data){
        data = JSON.parse(data);
        this.paymentForm = Object.assign({}, data)
      }
    },
    goBackPopup() {
      this.$emit("goBackPopup");
    },
    changeValue(item, attach) {
      attach.name = item.name;
      attach.id = item.id;
    }
  },
  mounted() {
    this.checkLoginForm();
  }
}
</script>
