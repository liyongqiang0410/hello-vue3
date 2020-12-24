<template>
  <div class="inComponentChildTwo">
    <span>内置组件 子组件 two</span>
  </div>
</template>

<script>
export default {
  name: "inComponentChildTwo",
  components: {},
  setup() {},
  activated() {
    console.log("内置组件 子组件 two activated");
  },
  deactivated() {
    console.log("内置组件 子组件 two deactivated");
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
