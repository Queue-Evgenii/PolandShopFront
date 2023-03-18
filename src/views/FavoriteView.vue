
import LayoutDefault from '../layouts/LayoutDefault.vue';

<template>
  <div class="favorite">
    <LayoutDefault>
      <div class="page">
        <div class="page__favorite favorite-page">
          <div class="favorite-page__container container">
            <div class="favorite-page__content">
              <FavoriteComponent />
            </div>
          </div>
        </div>
      </div>
    </LayoutDefault>
  </div>
</template>
<script>
import LayoutDefault from '../layouts/LayoutDefault'
import FavoriteComponent from '../components/favorite/FavoriteComponent'
export default {
  components: {
    LayoutDefault,
    FavoriteComponent,
  }
}
</script>
