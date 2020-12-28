<!--
 * @Author: liyongqiang
 * @Date: 2020-12-24 14:15:47
 * @LastEditTime: 2020-12-28 15:14:17
 * @FilePath: \hello-vue3\src\views\vue\suspense\components\event.vue
-->
<template>
  <div class="event">处理一些事件</div>
</template>

<script>
function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
export default {
  name: "event",
  components: {},
  async setup() {
    await sleep(2000);
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
