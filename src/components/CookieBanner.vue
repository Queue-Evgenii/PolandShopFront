<template>
  <transition name="cookie-fade">
    <div class="cookie-banner" v-if="isVisible">
      <div class="cookie-banner__text">
        Ta strona używa cookies. Korzystając ze strony wyrażasz zgodę na ich używanie,
        zgodnie z bieżącymi ustawieniami przeglądarki. Aby uzyskać więcej informacji na temat
        celu używania cookies i możliwości zmiany ustawień dotyczących cookies kliknij tutaj:
      </div>
      <div class="cookie-banner__actions">
        <button class="button cookie-banner__accept" @click="accept">
          <span>Zaakceptuj</span>
        </button>
        <router-link class="cookie-banner__link" to="/polityka-prywatnosci">
          Polityka prywatności
        </router-link>
      </div>
    </div>
  </transition>
</template>
<style lang="stylus">
  .cookie-banner{
    position fixed
    right 30px
    bottom 30px
    z-index 12
    display flex
    flex-direction column
    gap 25px
    width 100%
    max-width 480px
    padding 30px
    background-color #3D3D3D
    border-radius 10px
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
    &__text{
      font-size 16px
      line-height 22px
      color #fff
      text-align center
    }
    &__actions{
      display flex
      align-items center
      justify-content center
      gap 20px
      flex-wrap wrap
    }
    &__accept{
      min-width 200px
      min-height 50px
      span{
        padding 16px 5px
      }
    }
    &__link{
      font-size 16px
      line-height 22px
      color #fff
      @media(min-width: 769px) {
        &:hover{
          text-decoration underline
        }
      }
    }
    @media(max-width: 630px){
      right 0
      left 0
      bottom 15px
      max-width none
      padding 20px
      gap 20px
      &__text{
        font-size 14px
        line-height 20px
      }
      &__accept{
        min-width 100%
      }
    }
  }
  .cookie-fade-enter-active, .cookie-fade-leave-active{
    transition opacity 0.4s ease, transform 0.4s ease
  }
  .cookie-fade-enter-from, .cookie-fade-leave-to{
    opacity 0
    transform translateY(20px)
  }
</style>
<script>
  const STORAGE_KEY = 'cookiesAcceptedAt'
  const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000 // 6 miesięcy

  export default {
    name: 'CookieBanner',
    data () {
      return {
        isVisible: false
      }
    },
    methods: {
      accept () {
        localStorage.setItem(STORAGE_KEY, String(Date.now()))
        this.isVisible = false
      },
      isConsentValid () {
        const acceptedAt = Number(localStorage.getItem(STORAGE_KEY))
        if (!acceptedAt) return false
        return Date.now() - acceptedAt < CONSENT_LIFETIME
      }
    },
    mounted () {
      this.isVisible = !this.isConsentValid()
    }
  }
</script>
