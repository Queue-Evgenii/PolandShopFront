<template>
  <form class="payment-page__form form-payment">
    <div v-if="isRegistration" class="form-payment__section">
      <div class="form-payment__title">Szybkie zakupy</div>
      <ul class="form-payment__block">
        <FormItem
          :destination="'userInfo'"
          :dataItem="formItems.email"
          :vuelidate="v$['userInfo'][formItems.email.objId]"
          v-model="userInfo[formItems.email.objId]"
          @onBlur="onBlur"
        />
        <FormItem
          :destination="'userInfo'"
          :dataItem="formItems.password"
          :vuelidate="v$['userInfo'][formItems.password.objId]"
          v-model="userInfo[formItems.password.objId]"
          @onBlur="onBlur"
        />
        <FormItem
          v-for="item in formItems.user"
          :key="item.id"
          :destination="'userInfo'"
          :dataItem="item"
          :vuelidate="v$['userInfo'][item.objId]"
          v-model="userInfo[item.objId]"
          @onBlur="onBlur"
        />
      </ul>
    </div>
    <div
      v-if="isAuthorized || isWithoutRegistration"
      class="form-payment__section"
    >
      <div class="form-payment__title">Adres dostawy</div>
      <ul class="form-payment__block">
        <li v-if="$store.state.isAuthorized" class="form-payment__row">
          <div class="form-payment__label">Adres e-mail *</div>
          <div class="form-payment__input input-width">{{ $store.state.tempUserData.userInfo.email }}</div>
        </li>
        <FormItem
          v-else
          :destination="'userInfo'"
          :dataItem="formItems.email"
          :vuelidate="v$['userInfo'][formItems.email.objId]"
          v-model="userInfo[formItems.email.objId]"
          @onBlur="onBlur"
        />
        <FormItem
          v-for="item in formItems.delivery"
          :key="item.id"
          :destination="'deliveryInfo'"
          :dataItem="item"
          :vuelidate="v$['deliveryInfo'][item.objId]"
          :countriesList="countriesList"
          v-model="deliveryInfo[item.objId]"
          @onBlur="onBlur"
        />
      </ul>
      <div class="radio-block" style="padding-left: 25px">
        <input id="other-address" type="checkbox" class="form-payment__radiobox">
        <label @click="isOther = !isOther" for="other-address" class="form-payment__label-radio">Proszę użyć innego adresu rozliczeniowego</label>
      </div>
    </div>
    <div class="form-payment__section dropdown-section" :class="isOther ? '_active' : ''" ref="dropdownSection">
      <div class="form-payment__title">Adres dostawy</div>
      <ul class="form-payment__block">
        <FormItem
          v-for="item in formItems.otherDelivery"
          :key="item.id"
          :destination="'otherDeliveryInfo'"
          :dataItem="item"
          :vuelidate="v$['otherDeliveryInfo'][item.objId]"
          :countriesList="countriesList"
          v-model="otherDeliveryInfo[item.objId]"
          @onBlur="onBlur"
        />
      </ul>
    </div>
    <div v-if="isAuthorized || isWithoutRegistration" class="form-payment__section">
      <ul class="form-payment__block">
        <FormItem
          v-for="item in formItems.agreements"
          :key="item.id"
          :destination="'agreements'"
          :dataItem="item"
          :vuelidate="v$['agreements'][item.objId]"
          v-model="agreements[item.objId]"
          @onBlur="onBlur"
        >
          <a href="" class="form-payment__slot-text hover-underline">{{ item.popupText }}</a>
        </FormItem>
        <li class="form-payment__row">
          <div class="form-payment__text">Administratorem danych osobowych zbieranych za pośrednictwem sklepu internetowego jest *****. Północna 85, ****, NIP: *****, REGON ****. Dane są lub mogą być przetwarzane w celach oraz na podstawach wskazanych szczegółowo w polityce prywatności (np. realizacja umowy, marketing bezpośredni). Polityka prywatności zawiera pełną informację na temat przetwarzania danych przez administratora wraz z prawami przysługującymi osobie, której dane dotyczą. Szybki kontakt z administratorem: **** lub tel.: ***</div>
        </li>
      </ul>
    </div>
    <div v-if="errMsg.length > 0" class="invalid-data-mark" style="margin-bottom: 16px">
      {{ errMsg }}
    </div>
    <div class="form-payment__section-btn flex">
      <button class="form-payment__cancel button" type="button" @click="goBackPopup()">Cancel</button>
      <button v-if="isRegistration" class="form-payment__submit button" type="button" @click="registration()">Registration</button>
      <button v-else class="form-payment__submit button" type="button" @click="submitForm()">Płacić</button>
    </div>
  </form>
</template>
<style lang="stylus">
.new-account-section{
  padding-top 50px;
  .form-payment__title{
    margin-bottom 40px;
  }
}
.account{
  display flex
  align-items center
  justify-content center
  column-gap: 10px
  &::before{
    content: '';
    display block
    width 15px
    height 15px
    background url("../../assets/img/header/icon/user.png") no-repeat center
    background-size: 100%
  }
  &:hover{
    &::before{
    background url("../../assets/img/header/icon/user-on-h.png") no-repeat center
    background-size: 100%
  }
  }
}
.radio-block{
  display: flex;
  gap: 20px;
}
.radio-block-row{
  display inline-block
  width min-content
}
.dropdown-section{
  transform: rotateY(-90deg);
  height 0
  &._active{
    transform: rotateY(0);
    transition: transform 0.5s ease 0s;
    height max-content
    margin-top: 48px
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
import FormItem from '@/components/payment/FormItem'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength, numeric } from '@vuelidate/validators'
import { PaymentFormStatus } from '../../models/PaymentFormStatus';
export default {
  components: {
    FormItem,
  },
  props: {
    errMsg: {
      type: String,
      default: "",
    },
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      formItems: {
        email: {
          type: 'text',
          name: 'Adres e-mail *',
          placeholder: 'Adres e-mail',
          objId: 'email',
          validation: true,
        },
        password: {
          type: 'text',
          name: 'Hasło *',
          placeholder: 'Hasło',
          objId: 'password',
          validation: true,
        },
        user: [
          {
            id: 1,
            type: 'text',
            name: 'Imię *',
            placeholder: 'Imie',
            objId: 'name',
            validation: true,
          },
          {
            id: 2,
            type: 'text',
            name: 'Nazwisko *',
            placeholder: 'Nazwisko',
            objId: 'surname',
            validation: true,
          },
          {
            id: 3,
            type: 'radio',
            name: 'Tytuł',
            objId: 'gender',
            validation: false,
            items: [
              {
                id: 0,
                name: 'Pan',
                value: 'male',
              },
              {
                id: 1,
                name: 'Pani',
                value: 'female',
              },
            ]
          },
        ],
        delivery: [
          {
            id: 0,
            type: 'text',
            name: 'Imię *',
            placeholder: 'Imie',
            objId: 'name',
            validation: true,
          },
          {
            id: 1,
            type: 'text',
            name: 'Nazwisko *',
            placeholder: 'Nazwisko',
            objId: 'surname',
            validation: true,
          },
          {
            id: 2,
            type: 'text',
            name: 'Firma',
            placeholder: 'Firma',
            objId: 'business',
            validation: false,
          },
          {
            id: 3,
            type: 'text',
            name: 'NIP UE',
            placeholder: 'NIP UE',
            objId: 'nip_ue',
            validation: false,
          },
          {
            id: 4,
            type: 'text',
            name: 'Adress *',
            placeholder: 'ulica/plac koniecznie z numerem budynku',
            objId: 'address',
            validation: true,
          },
          {
            id: 5,
            type: 'text',
            name: 'Kod pocztowy *',
            placeholder: 'Kod',
            objId: 'zip_code',
            validation: true,
          },
          {
            id: 6,
            type: 'select',
            name: 'Kraj *',
            objId: 'country',
            validation: true,
          },
          {
            id: 7,
            type: 'text',
            name: 'Miasto *',
            placeholder: 'Miasto',
            objId: 'city',
            validation: true,
          },
          {
            id: 8,
            type: 'text',
            name: 'Telefoniczny numer kontaktowy *',
            placeholder: 'Telefoniczny numer kontaktowy *',
            objId: 'phone',
            validation: true,
          },
          {
            id: 9,
            type: 'textarea',
            name: 'Wiadomość',
            placeholder: 'Wiadomość',
            objId: 'comment',
            validation: false,
          },
        ],
        otherDelivery: [
          {
            id: 0,
            type: 'text',
            name: 'Imię *',
            placeholder: 'Imie',
            objId: 'name',
            validation: true,
          },
          {
            id: 1,
            type: 'text',
            name: 'Nazwisko *',
            placeholder: 'Nazwisko',
            objId: 'surname',
            validation: true,
          },
          {
            id: 2,
            type: 'text',
            name: 'Firma',
            placeholder: 'Firma',
            objId: 'business',
            validation: false,
          },
          {
            id: 3,
            type: 'text',
            name: 'NIP UE',
            placeholder: 'NIP UE',
            objId: 'nip_ue',
            validation: false,
          },
          {
            id: 4,
            type: 'text',
            name: 'Adress *',
            placeholder: 'ulica/plac koniecznie z numerem budynku',
            objId: 'address',
            validation: true,
          },
          {
            id: 5,
            type: 'text',
            name: 'Kod pocztowy *',
            placeholder: 'Kod',
            objId: 'zip_code',
            validation: true,
          },
          {
            id: 6,
            type: 'select',
            name: 'Kraj *',
            objId: 'country',
            validation: true,
          },
          {
            id: 7,
            type: 'text',
            name: 'Miasto *',
            placeholder: 'Miasto',
            objId: 'city',
            validation: true,
          },
          {
            id: 8,
            type: 'text',
            name: 'Telefoniczny numer kontaktowy *',
            placeholder: 'Telefoniczny numer kontaktowy *',
            objId: 'phone',
            validation: true,
          },
        ],
        agreements: [
          {
            id: 0,
            type: 'checkbox',
            name: 'Potwierdzam, że zapoznałem się z regulaminem sklepu internetowego',
            objId: 'confirm_regulations_store',
            text: '',
            popupText: '(Przeczytaj Regulamin Sklepu Internetowego)',
            validation: true,
          },
          {
            id: 1,
            type: 'checkbox',
            name: 'Potwierdzam, że zapoznałem się z regulaminem sklepu internetowego',
            objId: 'confirm_privacy_policy',
            text: '',
            popupText: '(Przeczytaj Politykę Prywatności)',
            validation: true,
          },
          {
            id: 3,
            type: 'checkbox',
            name: 'Zapisz się do naszego newslettera.',
            objId: 'agree_to_receive_information',
            validation: true,
            text: 'Wyrażam zgodę na otrzymywanie drogą mailową informacji handlowych, marketingowych, reklamowych (newsletter) od Administratora danych osobowych, którym jest ******* ************* ********, *********, ****. Administrator danych osobowych informuje, że podane przez Panią/Pana dane osobowe będą wykorzystywane jedynie w celu wysyłki newslettera do czasu rezygnacji z newslettera. Podanie danych jest dobrowolne, ale niezbędne w celu wysyłki newslettera, dane osobowe nie będą przekazywane podmiotom trzecim bez uzyskania Pani/Pana odrębnej zgody. Ma Pani/Pan prawo w każdym czasie do przenoszenia danych, dostępu do treść danych osobowych oraz możliwość ich poprawiania, wniesienia sprzeciwu co do przetwarzania danych a także ma Pani/Pana także prawo do wniesienia skargi dot. przetwarzania danych osobowych do Prezesa Urzędu Ochrony Danych Osobowych.'
          }
        ]
      },
      userInfo: {
        email: '',
        password: '',
        name: '',
        surname: '',
        gender: '',
      },
      deliveryInfo: {
        name: '',
        surname: '',
        business: '',
        nip_ue: '',
        address: '',
        zip_code: '',
        country: 'Poland',
        city: '',
        phone: '',
        comment: '',
      },
      agreements: {
        confirm_regulations_store: false,
        confirm_privacy_policy: false,
        agree_to_receive_information: false,
      },
      otherDeliveryInfo: {
        name: '',
        surname: '',
        business: '',
        nip_ue: '',
        address: '',
        zip_code: '',
        country: 'Poland',
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
          name: 'Belgium'
        },
        {
          id: 3,
          name: 'The czech republic'
        },
        {
          id: 4,
          name: 'Denmark'
        },
        {
          id: 5,
          name: 'Finland'
        },
        {
          id: 6,
          name: 'France'
        },
        {
          id: 7,
          name: 'Spain'
        },
        {
          id: 8,
          name: 'Netherlands'
        },
        {
          id: 9,
          name: 'Southern Ireland'
        },
        {
          id: 10,
          name: 'Lithuania'
        },
        {
          id: 11,
          name: 'Germany'
        },
        {
          id: 12,
          name: 'Poland'
        },
        {
          id: 13,
          name: 'Portugal'
        },
        {
          id: 14,
          name: 'Sweden'
        },
        {
          id: 15,
          name: 'Slovakia'
        },
        {
          id: 16,
          name: 'Hungary'
        },
        {
          id: 17,
          name: 'Italy'
        },
        {
          id: 18,
          name: 'Latvia'
        },
      ],
      isOther: false,
      otherIsOpen: false,
    }
  },
  validations() {
    return {
      deliveryInfo: {
        name: { required },
        surname: { required },
        address: { required },
        zip_code: { required, numeric },
        city: { required },
        country: { required },
        phone: { required, numeric },
      },
      otherDeliveryInfo: {
        name: { required },
        surname: { required },
        address: { required },
        zip_code: { required, numeric },
        city: { required },
        country: { required },
        phone: { required, numeric },
      },
      agreements: {
        confirm_regulations_store: { sameAs: sameAs(true) },
        confirm_privacy_policy: { sameAs: sameAs(true) },
      },
      userInfo: {
        email: { required, email },
        name: { required },
        surname: { required },
        password: { required, minLength: minLength(8) },
      },
    }
  },
  methods: {
    async submitForm() {
      const isDeliveryCorrect = await this.v$.deliveryInfo.$validate();
      const isAgreementCorrect = await this.v$.agreements.$validate();
      
      if (!isDeliveryCorrect || !isAgreementCorrect) return;

      const userId = this.isWithoutRegistration ? null : JSON.parse(localStorage.getItem('user_id'));
      const { userInfo, deliveryInfo, otherDeliveryInfo, agreements } = this;
      const fullName = (info) => `${info.name} ${info.surname}`;

      const data = {
        user_id: userId,
        user_information: {
          ...userInfo,
          fullname: fullName(this.isWithoutRegistration ? deliveryInfo : userInfo),
          agree_to_receive_information: agreements.agree_to_receive_information,
        },
        deliver_information: {
          ...deliveryInfo,
          fullname: fullName(deliveryInfo),
        },
        alt_deliver_information: {
          ...otherDeliveryInfo,
          fullname: fullName(otherDeliveryInfo),
        },
        confirm_regulations_store: agreements.confirm_regulations_store,
        confirm_privacy_policy: agreements.confirm_privacy_policy,
      };

      if (this.isWithoutRegistration) {
        this.setDeliveryDataToLocalStorage();
      }

      this.$emit('submitForm', data);
    },
    async registration() {
      const isUserCorrect = await this.v$.userInfo.$validate();
      if (!isUserCorrect) return;
      const data = {
        ...this.userInfo,
        agree_to_receive_information: this.agreements.agree_to_receive_information
      }
      this.$emit('registration', data);
    },
    getUserData() {
      this.$store.dispatch('getUserData').then(res => {
        for(let key in this.userInfo) {
          this.userInfo[key] = this.$store.state.tempUserData.userInfo[key] = res.data[key];
        }
        localStorage.setItem('user_id', JSON.stringify(res.data.id));
        this.getDeliveryData();
      });
    },
    getDeliveryData() {
      this.$store.dispatch('getDeliveryData').then(res => {
        for(let key in this.deliveryInfo) {
          this.deliveryInfo[key] = this.$store.state.tempUserData.deliveryInfo[key] = res.data.deliver_information[key];
        }
      });
    },
    async onBlur(value, dest, validation) {
      let isValueCorrect = validation ? await this.v$[dest][value].$validate() : true;
      if(!isValueCorrect) {
        return;
      }
      if(!localStorage.getItem('access_token')) {
        return;
      }
      const data = {};
      if ((typeof this[dest][value] === 'boolean' || this[dest][value].length > 0) && this[dest][value] !== this.$store.state.tempUserData[dest][value]) {
        data[value] = this.$store.state.tempUserData[dest][value] = this[dest][value];
        this.$store.dispatch('updateUser', data);
      }
    },
    setDeliveryDataToLocalStorage() {
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      localStorage.setItem('deliveryInfo', JSON.stringify(this.deliveryInfo));
    },

    // Question! Do we need it?
    getUserDataFromLocalStorage() {
      let data = localStorage.getItem('userInfo');
      if(data){
        data = JSON.parse(data);
        this.userInfo = Object.assign({}, data);
      }
      data = localStorage.getItem('deliveryInfo');
      if(data){
        data = JSON.parse(data);
        this.deliveryInfo = Object.assign({}, data);
      }
    },
    goBackPopup() {
      this.$emit('goBackPopup');
    },
  },
  computed: {
    isAuthorized() {
      return this.$store.state.isAuthorized;
    },
    isRegistration() {
      return this.$store.state.paymentFormStatus === PaymentFormStatus.Registration;
    },
    isWithoutRegistration() {
      return this.$store.state.paymentFormStatus === PaymentFormStatus.WithoutRegistration;
    },
    getData() {
      return this.$store.state.tempUserData.userInfo;
    }
  },
  mounted() {
    if (this.isAuthorized) {
      if (!this.$store.state.cartList.length) {
        this.$router.replace({name: "home"});
        return;
      }
      this.getUserData();
      return;
    }
    this.getUserDataFromLocalStorage();
  },
  watch: {
    isAuthorized() {
      this.getUserData();
    }
  }
}
</script>
