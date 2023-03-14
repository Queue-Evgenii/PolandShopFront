<template>
  <div class="info-product__about about-product info-product__block">
    <h3 class="about-product__title  info-product__title">Opis</h3>
    <p class="about-product__text">
      {{aboutText}}
      <!-- <p>
        Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie
        pionowe.
        Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w
        krokachcm.
        Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm.
        Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą
        PCV.
      </p>
      <p>
        Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne
        powierzchnie pionowe.
        Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.
      </p>
      <p>
        Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą
        PCV.
        Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne
        powierzchnie pionowe.
        Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w
        krokach
        Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą
        PCV.
      </p>
      <p>
        Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne
        powierzchnie pionowe.
        Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w
        krokaccm.
      </p> -->
    </p>
  </div>
</template>
<script>
  export default{
    props: {
      aboutText: {
        type: String,
        required: true,
      }
    }
  }
</script>
<style lang="stylus">
.about-product {
  &__text {
    font-size: 20px;
    line-height: 25px;
    color: #000000;
    p {
      &:not(:last-child) {
        margin-bottom 25px
      }
    }
  }
}
</style>