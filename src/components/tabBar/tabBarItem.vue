<template>
  <div class="tabBarItem" @click="itemClick">
    <slot v-if="!isActive" name="bar_icon"></slot>
    <slot v-else name="bar_active"></slot>
    <div :style="activeStyle">
      <slot name="bar_name"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  // created() {
  //   this.isActive = this.$route.path.indexOf(this.path) !== -1
  // },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style scoped>
.tabBarItem {
  flex: 1;
  text-align: center;
}
.tabBarItem img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
