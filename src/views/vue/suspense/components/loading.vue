<!--
 * @Author: liyongqiang
 * @Date: 2020-12-24 14:03:41
 * @LastEditTime: 2020-12-28 15:29:50
 * @FilePath: \hello-vue3\src\views\vue\suspense\components\loading.vue
-->
<template>
  <div class="suspenseLoading">
    <a-spin class="loading" tip="Loading..."> </a-spin>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "",
  components: {},
  setup() {
    const spinning = ref(true);
    return {
      spinning,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.suspenseLoading {
  height: 100%;
  & > .loading {
    background: rgba($color: #ffffff, $alpha: 0.8);
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    /deep/.ant-spin-dot-spin {
      position: absolute;
      top: 40%;
      margin-left: -10px;
    }
    /deep/.ant-spin-text {
      position: absolute;
      text-align: center;
      width: 100%;
      top: calc(40% + 30px);
    }
  }
}
</style>
