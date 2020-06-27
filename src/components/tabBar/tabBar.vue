<template>
  <div class="tabBar">
    <tab-bar-item path="/home">
      <img src="../../assets/img/tabBar/home.png" slot="bar_icon" />
      <img src="../../assets/img/tabBar/home_active.png" slot="bar_active" />
      <div slot="bar_name">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cate">
      <img src="../../assets/img/tabBar/categories.png" slot="bar_icon" />
      <img src="../../assets/img/tabBar/categories_active.png" slot="bar_active" />
      <div slot="bar_name">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img src="../../assets/img/tabBar/shopcart.png" slot="bar_icon" />
      <img src="../../assets/img/tabBar/shopcart_active.png" slot="bar_active" />
      <div slot="bar_name">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="../../assets/img/tabBar/profile.png" slot="bar_icon" />
      <img src="../../assets/img/tabBar/profile_active.png" slot="bar_active" />
      <div slot="bar_name">我的</div>
    </tab-bar-item>
  </div>
</template>
<script>
import tabBarItem from "../tabBar/tabBarItem.vue";
export default {
  name: "tabBar",
  components: {
    tabBarItem
  }
};
</script>
<style scoped>
.tabBar {
  height: 49px;
  background: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;
}
</style>
