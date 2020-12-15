<template>
  <div>
    <img src="@/assets/img/1.jpg" alt="" v-permission="1" />
  </div>
</template>
<script>
export default {
  name: "index",
  setup() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
