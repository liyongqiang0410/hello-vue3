<template>
  <div class="icon">
    <div class="icon_tem" v-for="(item, index) in iconArr" :key="index">
      <SvgIcon :iconClass="item" class="span"></SvgIcon>
      <div class="iconName">{{ item }}</div>
    </div>
    <div class="icon_tem1"></div>
    <div class="icon_tem1"></div>
    <div class="icon_tem1"></div>
    <div class="icon_tem1"></div>
    <div class="icon_tem1"></div>
    <div class="icon_tem1"></div>
    <div class="icon_tem1"></div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "icon",
  components: {},
  setup() {
    const iconArr = reactive([]);
    onMounted(() => {
      const reqIcon = require.context("@/assets/icons/svg", false, /\.svg$/);
      reqIcon.keys().forEach((el) => {
        iconArr.push(el.replace(/(\.\/|\.svg)/g, ""));
      });
    });
    return {
      iconArr,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.icon {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  .icon_tem {
    width: 13%;
    min-width: 105px;
    height: 100px;
    border: 1px dashed #ccc;
    border-radius: 4px;
    text-align: center;
    background: #f5f8f9;
    padding: 20px 10px 40px;
    &:hover {
      color: cornflowerblue;
    }
    .span {
      width: 40px;
      height: 40px;
    }
    .iconName {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .icon_tem1 {
    width: 13%;
    min-width: 105px;
    height: 24px;
  }
}
</style>