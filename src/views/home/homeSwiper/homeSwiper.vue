<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { swiper, swiperItem } from "@/components/swiper/index.js";
export default {
  components: {
    swiper,
    swiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
</style>