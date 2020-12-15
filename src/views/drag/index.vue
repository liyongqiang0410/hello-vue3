<template>
  <div class="drag">
    <div class="move_item" v-draggable></div>
    <div class="move_item" v-draggable></div>
    <div class="move_item" v-draggable></div>
    <div class="move_item" v-draggable></div>
  </div>
</template>

<script>
export default {
  name: "drag",
  components: {},
  setup() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.drag {
  height: 100%;
  .move_item {
    width: 200px;
    height: 124px;
    background: #ffe8f7;
  }
}
</style>