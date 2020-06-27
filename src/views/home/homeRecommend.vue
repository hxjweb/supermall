<template>
  <div class="home_recommend">
    <div v-for="item in recommends" :key="item.link" class="home_recommend_item">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.home_recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
}
.home_recommend_item {
  flex: 1;
}
.home_recommend_item img {
  width: 70px;
  height: 70px;
}
</style>