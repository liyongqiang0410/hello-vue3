<template>
  <div class="">子组件: {{ count }}</div>
  <a-button type="primary" @click="eAdd(count)"> add </a-button>
</template>

<script>
import { inject } from "vue";
export default {
  name: "",
  components: {},
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  emits: {
    // 验证自定义事件
    add: (value) => {
      if (value === "undefined" || value === null) return false;
      else return true;
    },
  },
  setup() {
    const count = inject("count", 0);
    const eAdd = inject("add");
    return {
      count,
      eAdd,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
</style>