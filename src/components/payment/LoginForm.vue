<template>
  <form action="" class="payment-page__form form-payment">
    <div class="form-payment__section">
      <div class="form-payment__title fz-24">Już zarejestrowany?</div>
      <ul class="form-payment__block">
        <li class="form-payment__row">
          <label for="email" class="form-payment__label">Adres e-mail *</label>
          <input
            id="email"
            type="text"
            class="form-payment__input input-width"
            placeholder="Adres e-mail"
            v-model="loginForm.email"
            :class="[
              v$.loginForm.email.$error ? 'invalid-data-input' : '',
              v$.loginForm.email.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.loginForm.email.$error" class="invalid-data-box">
            <li v-if="v$.loginForm.email.$dirty && v$.loginForm.email.required.$invalid" class="invalid-data-mark">This area is required</li>
            <li v-if="v$.loginForm.email.$dirty && v$.loginForm.email.$invalid" class="invalid-data-mark">This area is invalid</li>
          </ul>
        </li>
        <li class="form-payment__row">
          <label for="password" class="form-payment__label">Hasło *</label>
          <input
            id="password"
            type="password"
            class="form-payment__input input-width"
            placeholder="Hasło"
            v-model="loginForm.password"
            :class="[
              v$.loginForm.password.$error ? 'invalid-data-input' : '',
              v$.loginForm.password.$dirty ? 'valid-data-input' : '',
            ]"
          >
          <ul v-if="v$.loginForm.password.$error" class="invalid-data-box">
            <li v-if="v$.loginForm.password.$dirty && v$.loginForm.password.required.$invalid" class="invalid-data-mark">This area is required</li>
            <li v-if="v$.loginForm.password.$dirty && v$.loginForm.password.$invalid" class="invalid-data-mark">Might be more than 5 characters</li>
          </ul>
        </li>
      </ul>
      <div class="login-form__actions form-payment__section-btn flex">
        <button v-if="!isVerify" @click="submitForm();$event.preventDefault()" class="login-form__submit form-payment__submit button">Zaloguj się</button>
        <div v-else class="login-form__verify flex"><span>Verify your email</span></div>
        <button @click="openForm(this.loginForm);$event.preventDefault()" class="login-form__without-log form-payment__cancel button">Zakupy bez rejestracji</button>
      </div>
    </div>
  </form>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default{
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
        isAuthorized: false,
      },
      existAccount: false,
      isVerify: false,
    }
  },
  validations() {
    return {
      loginForm: {
        email: { required, email },
        password: { required, minLength: minLength(5) },
      }
    }
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.setLoginForm();
      if(this.existAccount){
        this.loginForm.isAuthorized = true;
        this.openForm(this.loginForm);
        return;
      }
      this.isVerify = true;
    },
    openForm(data) {
      this.$emit('openForm', data);
    },
    checkLoginForm() {
      let data = localStorage.getItem('loginForm');
      if(data){
        data = JSON.parse(data);
        this.loginForm.email = data.email;
        this.loginForm.password = data.password;
      }
    },
    setLoginForm() {
      let data = localStorage.getItem('loginForm');
      if(!data){
        localStorage.setItem('loginForm', JSON.stringify(this.loginForm));
      }
    }
  },
  mounted() {
    this.checkLoginForm();
  }
}
</script>
