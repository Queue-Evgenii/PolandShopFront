<template>
  <footer class="footer">
    <div class="footer__top top-footer">
      <div class="top-footer__container container">
        <footer-copy v-if="!FooterWidth" />
        <div class="top-footer__row flex">
          <div class="top-footer__column" v-for="column in footerColumn" :key="column.id">
            <h5 class="top-footer__title">{{ column.title }}</h5>
            <ul class="top-footer__list" v-for="item in column.items" :key="item.id">
              <li class="top-footer__item hover-underline"><router-link :to="item.href" class="top-footer__link">{{ item.label }}</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom bottom-footer">
      <div class="bottom-footer__container container">
        <div class="bottom-footer__row flex">
          <footer-copy v-if="FooterWidth" />
          <div class="bottom-footer__column bottom-footer__social social-footer">
            <a href="#" class="social-footer__twitter"><img src="@/assets/img/header/icon/twitter-icon.png" alt=""></a>
            <a href="#" class="social-footer__facebook"><img src="@/assets/img/header/icon/fb-icon.png" alt=""></a>
          </div>
          <div class="bottom-footer__column bottom-footer__payment payment-footer">
            <h5 class="payment-footer__title">Metody Płatności</h5>
            <div class="payment-footer__icon"><img src="@/assets/img/header/icon/payment.png" alt=""></div>
          </div>
          <div class="bottom-footer__column bottom-footer__contact contact-footer">
            <div class="contact-footer__phones phones-footer flex">
              <div class="phones-header__icon"><img src="@/assets/img/header/icon/phone.png" alt=""></div>
              <div class="phones-footer__items">
               <a href="tel:48884074848" class="phones-footer__item hover-underline">+48 884 074 848</a>
              </div>
            </div>
            <div class="contact-footer__emailes flex">
              <div class="contact-footer__icon"><img src="@/assets/img/header/icon/email.png" alt=""></div>
              <a href="mailto:sufitypolandgroup@gmail.com" class="contact-footer__email hover-underline">sufitypolandgroup@gmail.com</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="footer__links">
      <div class="footer__container container flex">
        <router-link :to="{name: 'regulamin'}">Regulamin</router-link>
        <router-link :to="{name: 'reklamacje'}">Reklamacje</router-link>
        <router-link :to="{name: 'polityka-prywatnosci'}">Polityka prywatności</router-link>
      </div>
    </div>
  </footer>
</template>
<style lang="stylus">
.footer {
  &__top,
  &__bottom,
  &__links {
    padding 30px 0;
  }
  &__top,
  &__links {
    border-top 1px solid #8B8B8B85
  }
  &__bottom {
    @media(min-width: 689px){
      border-top 1px solid #8B8B8B85
    }
  }
  &__container {
    column-gap: 12px;
    row-gap: 16px;
    flex-wrap: wrap;
  }
}

.top-footer {
  &__row {
    align-items start !important
    flex-wrap wrap
    margin 0 -10px
    row-gap 15px
  }
  &__column {
    flex: 1 1 25%
    padding 0 10px
    @media(max-width: 992px) {
      flex: 1 1 50%
    }
    @media(max-width: 688px) {
      &:last-child,&:nth-child(3){
        display none
      }
    }
  }
  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #3D3D3D;
    margin-bottom 20px
  }
  &__list {
  }
  &__item {
    font-size: 16px;
    line-height: 30px;
    color: #3D3D3D;
  }
  &__link {
  }
}
.bottom-footer {
  &__row {
    flex-wrap wrap
    row-gap 55px
  }
  &__column {
    flex: 1 1 25%
    @media(max-width: 992px) {
      flex: 1 1 50%
    }
  }
  &__copy {
    @media(max-width: 688px) {
      flex: 1 1 100%
      margin-bottom 40px
    }
  }
  &__social {
  }
  &__contact {
    @media(max-width: 688px) {
      flex: 1 1 100%
    }
  }
}
.copy-footer {
  @media(max-width: 688px) {
    text-align center
    }
  &__logo {
    display inline-block
    margin-bottom 10px
  }
  &__text {
    @media(min-width: 689px) {
      max-width: 190px
    }
  }
}
.social-footer {
  display flex
  gap 30px
  &__twitter {
  }
  &__facebook {
  }
}
.payment-footer {
  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #3D3D3D;
    margin-left 10px
  }
  &__icon {
  }
}
.contact-footer {
  &__phones {
    gap 10px
    margin-bottom 20px
  }
  &__emailes{
    gap: 10px
  }
  &__email {
    color: #3D3D3D;
  }
}
.phones-footer{
  flex: 0 1 480px
  column-gap: 20px
  position relative
  &__icon{
  }
  &__items{
  margin 0 -20px
  transition transform 0.5s ease 0s
  }
  &__item{
    display inline-block
    font-size: 16px;
    line-height: 18px;
    color: #3D3D3D;
    padding 4px 20px
    white-space nowrap
    &:not(:first-child){
      border-left: 1px solid #D9D9D9;
    }
  }
}
</style>
<script>
import FooterCopy from '@/components/footer/FooterCopy'
export default {
  components: {
    FooterCopy,
  },
  props:{
    FooterWidth: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      footerColumn: [
        {
          id: 1,
          title: 'Pomoc i informacje',
          items: [
            {
              id: 1,
              label: 'Informacje o dostawie',
              href: '#'
            },
            {
              id: 2,
              label: 'Zwrot i wymiana',
              href: '#'
            },
            {
              id: 3,
              label: 'Pomoc',
              href: '#'
            },
            {
              id: 4,
              label: 'Połącz się z nami',
              href: '#'
            },
            {
              id: 5,
              label: 'Covid-19',
              href: '#'
            }
          ]
        },
        {
          id: 2,
          title: 'Informacje o firmie',
          items: [
            {
              id: 1,
              label: 'IWarunki korzystania',
              href: '#'
            },
            {
              id: 3,
              label: 'Informacje o pliku plików cookie',
              href: '#'
            },
            {
              id: 4,
              label: 'Inne wyjątki',
              href: '#'
            },
            {
              id: 5,
              label: 'Regulamin',
              href: '/regulamin'
            },
            {
              id: 6,
              label: 'Reklamacje',
              href: '/reklamacje'
            },
            {
              id: 7,
              label: 'Polityka prywatności',
              href: '/polityka-prywatnosci'
            },
          ]
        },
        {
          id: 3,
          title: 'O firmie',
          items: [
            {
              id: 1,
              label: 'IWarunki korzystania',
              href: '#'
            },
            {
              id: 3,
              label: 'Informacje o pliku plików cookie',
              href: '#'
            },
            {
              id: 4,
              label: 'Inne wyjątki',
              href: '#'
            }
          ]
        },
        {
          id: 4,
          title: 'Pomoc i informacje',
          items: [
            {
              id: 1,
              label: 'Informacje o dostawie',
              href: '#'
            },
            {
              id: 2,
              label: 'Zwrot i wymiana',
              href: '#'
            },
            {
              id: 3,
              label: 'Pomoc',
              href: '#'
            },
            {
              id: 4,
              label: 'Połącz się z nami',
              href: '#'
            },
            {
              id: 5,
              label: 'Covid-19',
              href: '#'
            }
          ]
        }
      ],
    }
  }
}
</script>