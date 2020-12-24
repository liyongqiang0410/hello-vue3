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
</style>