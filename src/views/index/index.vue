<!--
 * @Author: liyongqiang
 * @Date: 2020-12-16 15:58:21
 * @LastEditTime: 2021-01-11 09:43:41
 * @FilePath: \hello-vue3\src\views\index\index.vue
-->
<template>
  <div v-waterMarker="{ text: '背景水印222', font: '14px', textColor: '#ccc' }">
    <img src="@/assets/img/1.jpg" alt="" @click="logName" v-permission="1" />
    <img src="@/assets/img/2.jpg" alt="" @click="logName" />
  </div>
</template>
<script>
import { firstMiXin } from "@/mixins/index";
export default {
  name: "index",
  mixins: [firstMiXin],
  setup() {},
  mounted() {},
  methods: {
    // mixin 混入 含有同名方法
    logName() {
      console.log("I am index component");
      // I am index component

      console.log(this.name);
      // I am first mixins
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: calc(100vh - 158px);
  object-fit: contain;
}
</style>
