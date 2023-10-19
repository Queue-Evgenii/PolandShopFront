<template>
  <div class="sidebar-filter">
    <div class="sidebar-filter__title">Filtry produktów</div>
    <form action="" class="sidebar-filter__form">
      <div class="sidebar-filter__section section-filter">
        <div class="section-filter__title cursor-initial">Cena £</div>
        <div class="section-filter__body active range-filter">
          <div id="range-slider" class="range-filter__range range-slider"></div>
          <div class="range-filter__values flex">
            <span class="range-filter__min">{{ lowerValue }}</span>
            <span class="range-filter__max">{{ upperValue }}</span>
          </div>
        </div>
      </div>
      <section-filter 
        name="Rodzaj produktu"
        :currentCategoryId="currentCategoryId"
        :class="{'active' : currentNavItem}"
        @onSelected="onSelected"
        @onChecked="onChecked"
      />
      <div class="sidebar-filter__section section-filter section-button">
        <div class="section-filter__body">
          <button class="section-filter__button button"><span>Stosować</span></button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import SectionFilter from "@/components/catalog/SectionFilter";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
export default {
  components: {
    SectionFilter
  },
  data () {
    return {
      timeout: null,
      rangeSlider: undefined,
      minValue: 0,
      maxValue: undefined,
      upperValue: undefined,
      lowerValue: 0,
      currentNavItem: true,
      isFirstCall: true,
    }
  },
  computed: {
    currentCategoryId() {
      return this.$route.params.id;
    },
  },
  methods: {
    onSelected () {
      this.currentNavItem = !this.currentNavItem;
    },
    clearFilters() {
      let item;
      do {
        item = this.$store.state.filterParams.find(el => el.includes("category_ids[]"));
        const index = this.$store.state.filterParams.indexOf(item);
        if (index >= 0) {
          this.$store.state.filterParams.splice(index, 1);
        }
      } while(item);
    },
    onChecked(id) {
      const string = `category_ids[]=${id}`;
      if (this.$store.state.filterParams.find(el => el === string)) {
        this.clearAnyFilter(string);
        this.setFilters();
        return;
      }
      this.addCategoryString(string);
    },
    addCategoryString(string) {
      this.$store.state.filterParams.push(string);
      this.setFilters();
    },
    clearAnyFilter(param) {
      const index = this.$store.state.filterParams.indexOf(param);
      if (index >= 0) {
        this.$store.state.filterParams.splice(index, 1);
      }
    },
    addMinPriceString(value) {
      const string = `price[min]=${value}`;
      const item = this.$store.state.filterParams.find(el => el.includes("price[min]"));
      const index = this.$store.state.filterParams.indexOf(item);
      if (index >= 0) {
        this.$store.state.filterParams.splice(index, 1);
      }
      this.$store.state.filterParams.push(string);
      this.setFilters();
    },
    addMaxPriceString(value) {
      const string = `price[max]=${value}`;
      const item = this.$store.state.filterParams.find(el => el.includes("price[max]"));
      const index = this.$store.state.filterParams.indexOf(item);
      if (index >= 0) {
        this.$store.state.filterParams.splice(index, 1);
      }
      this.$store.state.filterParams.push(string);
      this.setFilters();
    },
    createRange() {
      try{
        this.rangeSlider = noUiSlider.create(document.getElementById("range-slider"), {
          start: [this.lowerValue, this.upperValue],
          range: {
            min: this.minValue,
            max: this.maxValue,
          },
          connect: true,
        });
        this.getValuesOnUpdate();
      } catch (err) {
        console.log(err);
      }
    },
    getValuesOnUpdate() {
      this.rangeSlider.on("update", () => {
        if (this.rangeSlider) this.getValues();
      });
    },
    getValues() {
      const values = this.rangeSlider.get();

      if (this.lowerValue != Math.round(values[0])) {

        this.lowerValue = Math.round(values[0]);

        if (this.timeout) clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          this.addMinPriceString(this.lowerValue);
        }, 300);
      }

      if (this.upperValue != Math.round(values[1])) {

        this.upperValue = Math.round(values[1]);

        if (this.timeout) clearTimeout(this.timeout);
        
        this.timeout = setTimeout(() => {
          this.addMaxPriceString(this.upperValue);
        }, 300);
      }
    },
    setRangeValues(res) {
      this.lowerValue = this.minValue = parseInt(res.meta.min_price, 10);
      this.upperValue = this.maxValue = parseInt(res.meta.max_price, 10);
      this.createRange();
    },
    setFilters() {
      this.setStartupPage();
      this.$store.dispatch("setFilters", this.$store.state.filterParams.join("&"))
        .then(res => {
          if(this.isFirstCall) {
            this.setRangeValues(res);
            this.isFirstCall = false;
          }
          this.setDefaultCatalogValues(res);
        })
    },
    setStartupPage()  {
      this.clearAnyFilter("page=");
      this.$store.state.currentPage = 1;
      this.$store.state.filterParams.push("page=1");
    },
    setDefaultCatalogValues(res) {
      this.$store.state.catalog = res.data;
      this.$store.state.currentPage = 1;
      this.$store.state.maxCategoryPage = res.meta.last_page;
    }
  },
  mounted() {
    this.onChecked(this.currentCategoryId);
  },
  watch: {
    currentCategoryId() {
      this.clearFilters();
      this.onChecked(this.currentCategoryId);
    },
    currentProducts() {
      this.clearFilters();
    }
  }
}
</script> 
<style lang="stylus">
  .settings-products__body.active .sidebar-filter{
    transform translate(0, 140px)
  }
  .sidebar-filter{
    @media(min-width: 1201px){
      margin-top: 40px
      padding-top 60px
      border-top 1px solid #8B8B8B;
    }
    @media(max-width: 1200px){
      transform translate(0, -1000%)
      transition all 0.5s ease 0s
      position absolute
      z-index 1
      left 0
      right 0
      top 130%
      background: #FFFFFF;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding 35px 20px
    }
    &__title{
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #3D3D3D;
    }
    &__form{
      padding-top 20px
    }
    &__section{
      &.active .sidebar-filter__checkbox::after{
        transform rotate(0deg)
      }
    }
    &__checkbox::after{
        content ''
        display inline-block
        width 12px
        height 12px
        transition transform 0.3s ease 0s;
        transform rotate(-90deg)
        background url('../../assets/img/main/icons/arrow-bottom.png') center no-repeat
        @media(max-width: 1200px){
          display none
        }
    }
  }
  .section-button{
    border none !important
    button{
      width 230px !important
      margin 0 auto
      display block
      span{
        font-size: 24px;
        line-height: 28px;
      }
    }
    @media(min-width: 1201px){
      display none
    }
  }
  .section-filter{
    padding 20px 0
    &:not(:first-child){
      border-bottom 1px solid #CACACA;
    }
    &__title{
      display flex
      justify-content space-between
      align-items center
      width 100%
      cursor pointer
    }
    &__body{
      margin-top 0
      transition all 0.5s ease 0s
      max-height: 0
      opacity: 0
      visibility hidden
      &.active{
        max-height: none
        opacity 1
        visibility visible
      }
      @media(max-width: 1200px){
        max-height: none
        opacity 1
        visibility visible
        margin-top 25px
      }
    }
    &__body-line{
      position relative
      &::after{
        content ''
        position absolute
        right 0
        top 0
        bottom 0
        height 100%
        width 1px
        background-color #838383;
      }
      &::before{
        content ''
        position absolute
        right -4px
        top 8px
        height 9px
        width 9px
        background-color #838383;
        border-radius 50%
      }
    }
    &__item{
      &:not(:last-child){
        margin-bottom 15px
      }
      input{
        display none
      }
      label{
        position relative
        cursor pointer
        &::before{
          content: ''
          margin-right 10px
          display inline-block
          width 20px
          height 20px
          border 1px solid #CACACA;
          background-color #fff
          border-radius 3px
        }
        &::after{
          content: ''
          position absolute
          display inline-block
          width 14px
          height 14px
          background-color #adadad
          left 3px
          transform scale(0)
          transition transform 0.3s ease 0s
        }
      }
      input[type=checkbox]:checked + label{
        &::after{
          transform scale(1)
        }
      }
      input[type=checkbox]._current + label{
        color: #818181;
        cursor: default;
        &::after{
          background-color: #dadada;
        }
      }
    }
  }
  .range-filter{
    display flex
    flex-direction: column
    margin-top 24px;
    gap: 16px
    &__range{
    }
    &__values{
      margin-top: 7px;
      justify-content: space-between;
    }
    &__min,
    &__max{
      &::after{
        content: 'pln';
        margin-left: 5px;
      }
    }
  }
  .range-slider{
    height: 1px;
    background-color: transparent;
    cursor: pointer;
      border: none
    .noUi-connects {
      background-color: #888;
      height: 1px;
      border-radius: 0;
    }
    .noUi-connect {
      background-color: #000;
      height: 5px;
      border-radius: 0;
      width 94%;
      right 7px;
    }
    .noUi-handle{
      height: 15px;
      width: 15px;
      border: none
      background-color: #000;
      border-radius: 50%;
      box-shadow: none
      top -7.5px
      right -7.5px
      cursor: pointer;
      &::before, &::after{
        display none
      }
    }
    .noUi-origin{
      width 94%;
      &:not(:last-child) {
        right 15px;
      }
    }
    @media(max-width: 1200px) {
      .noUi-origin, .noUi-connect{
        width 98%;
      }
    }
    @media(max-width: 830px) {
      .noUi-origin, .noUi-connect{
        width 97%;
      }
    }
    @media(max-width: 640px) {
      .noUi-origin, .noUi-connect{
        width 96%;
      }
    }
    @media(max-width: 450px) {
      .noUi-origin, .noUi-connect{
        width 94%;
      }
    }
  }
  .cursor-initial{
    cursor: default;
  }
</style>