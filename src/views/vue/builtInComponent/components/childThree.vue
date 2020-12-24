<template>
  <div class="inComponentChildThree">
    <span>内置组件 子组件 three</span>
  </div>
</template>

<script>
export default {
  name: "inComponentChildThree",
  components: {},
  setup() {},
  activated() {
    console.log("内置组件 子组件 three activated");
  },
  deactivated() {
    console.log("内置组件 子组件 three deactivated");
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
