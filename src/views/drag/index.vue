<template>
  <div class="drag">
    <div class="move_item" v-draggable>1</div>
    <div class="move_item" v-draggable>2</div>
    <div class="move_item" v-draggable>3</div>
    <div class="move_item" v-draggable>4</div>
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