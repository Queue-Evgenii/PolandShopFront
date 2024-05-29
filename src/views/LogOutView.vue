<template>
  <div :class="( !this.$store.state.isAuthorized ? 'ov-hidden' : '') + ' logout'">
    <layout-default>
      <main class="page container">
        <div class="title">
          Are you sure you want to log out?
        </div>
        <div
          class="flex"
          style="
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 92px;
          "
        >
          <router-link :to="{ name: 'home' }">
            <button type="button" class="cancel button">Cancel</button>
          </router-link>
          <router-link :to="{ name: 'home' }">
            <button class="accept button" type="button" @click.prevent="logout()">Log Out</button>
          </router-link>
        </div>
        <template v-if="!this.$store.state.isAuthorized">
          <div class="loader">
            <img style="max-width: 400px;" src="./../assets/img/main/icons/loader-new.gif" alt="">
          </div>
        </template>
      </main>
    </layout-default>
  </div>
</template>
<script>
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: "LogOutView",
  layouts: 'default',
  components: {
    LayoutDefault,
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$store.state.isAuthorized = false;
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 300);
    }
  },
  mounted() {
    if (!this.$store.state.isAuthorized) {
      this.$router.push({ name: "payment" });
    }
  }
}
</script>
<style>
.title {
  font-weight: 600;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  margin-top: 72px;
  margin-bottom: 48px;
}
.cancel {

  background: transparent;
  background-color: transparent;
  color: #ff0031;
  border: 1px solid #ff0031;
}
.accept {
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
}
.cancel,
.accept {
  display: block;
  width: 160px !important;
  min-width: 0 !important;
}
</style>