<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "../src/components/tabBar/tabBar";
import router from "../src/router/router.js";
export default {
  name: "App",
  router,
  components: {
    tabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
.nav-bar {
  background: #ff8198;
  color: white;
}
</style>
