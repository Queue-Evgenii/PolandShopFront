<template>
  <form action="" class="payment-page__form form-payment">
    <div class="form-payment__section">
      <div class="form-payment__title">Już zarejestrowany?</div>
      <ul class="form-payment__block">
        <li class="form-payment__row">
          <label for="mail" class="form-payment__label">Adres e-mail</label>
          <input id="mail" type="text" class="form-payment__input input-width" placeholder="Adres e-mail">
        </li>
        <li class="form-payment__row">
          <label for="password" class="form-payment__label">Hasło</label>
          <input id="password" type="password" class="form-payment__input input-width" placeholder="Hasło">
        </li>
      </ul>
      <div class="login-form__actions form-payment__section-btn flex">
        <button class="login-form__submit form-payment__submit button">Zaloguj się</button>
        <button class="login-form__without-log form-payment__cancel button">Zakupy bez rejestracji</button>
      </div>
    </div>
  </form>
</template>