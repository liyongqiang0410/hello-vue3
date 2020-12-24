<template>
  <div class="suspenseLoading">
    <a-spin tip="Loading...">
      <div class="spin-content">我的描述文案是自定义的。。。</div>
    </a-spin>
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
}
</style>
