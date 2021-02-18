<!--
 * @Author: liyongqiang
 * @Date: 2020-12-24 10:22:14
 * @LastEditTime: 2021-02-18 14:36:07
 * @FilePath: \hello-vue3\src\views\vue\suspense\index.vue
-->
<template>
  <div class="suspense">
    <Suspense>
      <!-- Suspense template 单根节点组件 -->
      <template #default>
        <div>
          <event />
          <event />
          <event />
        </div>
      </template>
      <template #fallback>
        <suspenseLoading />
      </template>
    </Suspense>
  </div>
</template>

<script>
// import { defineAsyncComponent } from "vue";
import suspenseLoading from "./components/loading";
import event from "./components/event";
export default {
  name: "suspense",
  components: {
    // suspenseLoading: defineAsyncComponent(() => {
    //   import("./components/loading");
    // }),
    // event: defineAsyncComponent(() => {
    //   import("./components/event");
    // }),
    suspenseLoading,
    event,
  },
  setup() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.suspense {
  height: 100%;
}
</style>
