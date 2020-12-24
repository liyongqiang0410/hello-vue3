<template>
  <div class="suspense">
    <!-- Suspense 单根节点组件 -->
    <Suspense>
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
import suspenseLoading from "./components/loading";
import event from "./components/event";
export default {
  name: "suspense",
  components: {
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
