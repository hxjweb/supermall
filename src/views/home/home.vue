<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">
        <span>购物街</span>
      </div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
  </div>
</template>
<script>
import navBar from "../../components/navBar";
import homeSwiper from "@/views/home/homeSwiper/homeSwiper.vue";
import homeRecommend from "@/views/home/homeRecommend.vue";
import homeFeature from "@/views/home/homeFeature.vue";
import { getHomeMultiData } from "../../views/home/home.js";

export default {
  components: {
    navBar,
    homeSwiper,
    homeRecommend,
    homeFeature
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultiData()
      .then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        // console.log(this.recommends);
      })
      .catch(err => {});
  }
};
</script>