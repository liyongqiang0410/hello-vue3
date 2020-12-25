<!--
 * @Author: liyongqiang
 * @Date: 2020-12-24 16:10:21
 * @LastEditTime: 2020-12-25 11:33:39
 * @FilePath: \hello-vue3\src\views\vue\teleport\index.vue
-->
<template>
  <Loading v-if="showLoading" />
  <div>
    <a-button
      type="primary"
      size="small"
      shape="round"
      @click="triggerShowLoading"
    >
      triggerClick
    </a-button>
    <div class="imitationBtn">click</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "teleport",
  components: {},
  setup() {
    let showLoading = ref(false);
    function triggerShowLoading() {
      showLoading.value = !showLoading.value;
      const timeOut = setTimeout(() => {
        showLoading.value = !showLoading.value;
        clearTimeout(timeOut);
      }, 3000);
    }
    return {
      showLoading,
      triggerShowLoading,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.imitationBtn {
  display: inline-block;
  height: 32px;
  line-height: 20px;
  padding: 5px 20px;
  border: 1px solid #cccccc;
  border-radius: 16px;
  box-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 1px 3px rgba(0, 0, 0, 0.1), 0 3px 5px rgba(0, 0, 0, 0.1),
    0 5px 10px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1),
    0 20px 20px rgba(0, 0, 0, 0.15);
  &:active {
    box-shadow: none;
  }
}
</style>