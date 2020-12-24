<template>
  <div class="inComponentChildOne">
    <span>内置组件 子组件 one</span>
  </div>
</template>

<script>
export default {
  name: "inComponentChildOne",
  components: {},
  setup() {},
  activated() {
    console.log("内置组件 子组件 one activated");
  },
  deactivated() {
    console.log("内置组件 子组件 one deactivated");
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
