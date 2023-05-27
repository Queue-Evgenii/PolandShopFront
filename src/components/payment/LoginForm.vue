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
          <ul v-if="v$.loginForm.password.$error || error" class="invalid-data-box">
            <li v-if="v$.loginForm.password.$dirty && v$.loginForm.password.required.$invalid" class="invalid-data-mark">This area is required</li>
            <li v-if="v$.loginForm.password.$dirty && v$.loginForm.password.$invalid" class="invalid-data-mark">Might be more than 5 characters</li>
            <li v-if="error" class="invalid-data-mark">{{ error }}</li>
          </ul>
        </li>
      </ul>
      <div class="login-form__actions form-payment__section-btn flex">
        <button type="button" @click="authorization()" class="login-form__submit form-payment__submit button">Zaloguj się</button>
      </div>
    </div>
    <div class="form-payment__section new-account-section">
      <div class="form-payment__title fz-24">Nowy Klient</div>
      <div class="login-form__actions form-payment__section-btn flex">
        <button type="button" @click="openForm();$store.state.isNewAccount = false" class="login-form__without-log form-payment__cancel button">Zakupy bez rejestracji</button>
        <button type="button" @click="openForm();$store.state.isNewAccount = true" class="login-form__submit form-payment__cancel button account">Stwórz konto</button>
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
      },
      error: '',
      existAccount: true,
    }
  },
  validations() {
    return {
      loginForm: {
        email: { required, email },
        password: { required, minLength: minLength(8) },
      }
    }
  },
  methods: {
    async authorization() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.$store.dispatch("authorization", this.loginForm)
        .then((res) => {
          localStorage.setItem("access_token", JSON.stringify(res.data.token))
          this.$store.state.isAuthorized = true;
          this.$store.state.isNewAccount = false;
          this.openForm()
        })
        .catch(err => {
          this.error = err.response.data.error
        })
    },
    openForm() {
      this.$emit('openForm');
    },
  },
}
</script>
