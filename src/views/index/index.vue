<template>
  <div v-waterMarker="{ text: '背景水印222', font: '14px', textColor: '#ccc' }">
    <img src="@/assets/img/1.jpg" alt="" />
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
  height: calc(100vh - 158px);
  object-fit: contain;
}
</style>
