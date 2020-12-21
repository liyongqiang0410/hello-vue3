<template>
  <div style="display: flow-root; height: 100%; position: relative">
    <h1>已废弃api: documen.execCommand</h1>
    <div class="upper_arrow" v-longPress="longPress">
      自定义指令longPress: 长按
    </div>
    <div class="operation">
      <div class="execItem">
        <span class="execName">撤销: </span>
        <input
          class="execOperation"
          type="text"
          onkeyup="if(isNaN(value))execCommand('undo')"
          onafterpaste="if(isNaN(value))execCommand('undo')"
        />
      </div>
      <div class="execItem">
        <span class="execName">下划线:</span>
        <input
          class="execOperation"
          type="button"
          value="下划线"
          @click="underline"
        />
        <span>有用</span>
      </div>
      <div class="execItem">
        <span class="execName">全选:</span>
        <input
          class="execOperation"
          type="button"
          value="全选"
          @click="selectAll"
        />
        <span>有用</span>
      </div>
      <div class="execItem">
        <span class="execName">复制:</span>
        <input class="execOperation" type="button" value="复制" @click="copy" />
        <span>有用</span>
      </div>
      <div class="execItem">
        <span class="execName">另存为:</span>
        <input
          class="execOperation"
          type="button"
          value="另存为"
          onclick="document.execCommand('SaveAs',false,'C:\Users\Administrator\Documents\WeChat Files\wxid_0dcnzb6z71th11\FileStorage\File\2020-12')"
        />
      </div>
      <div class="execItem">
        <span class="execName">加粗:</span>
        <input class="execOperation" type="button" value="加粗" @click="bold" />
      </div>
      <div class="execItem">
        <span class="execName">尺寸:</span>
        <input
          class="execOperation"
          type="button"
          value="尺寸"
          @click="fontSize"
        />
      </div>
      <div class="execItem">
        <span class="execName">编辑:</span>
        <input
          class="execOperation"
          type="button"
          value="编辑"
          @click="contentReadOnly"
        />
      </div>
    </div>

    <div class="posi" @click="move" contenteditable="true"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  setup() {},
  methods: {
    longPress() {
      console.log("longPress");
    },
    underline() {
      document.execCommand("underline");
    },
    selectAll() {
      document.execCommand("selectAll");
    },
    copy() {
      document.execCommand("Copy", false, null);
    },
    move() {
      document.execCommand("2D-Position", true);
    },
    bold() {
      document.execCommand("bold", false);
    },
    fontSize() {
      document.execCommand("fontSize", false, 3);
    },
    contentReadOnly() {
      document.execCommand("contentReadOnly", false);
    },
  },
};
</script>

<style scoped lang="scss">
.operation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .execItem {
    width: 200px;
    height: 40px;
    .execName {
      display: inline-block;
      width: 60px;
      text-align: right;
      line-height: 40px;
    }
    .execOperation[type="text"] {
      width: 120px;
    }
    .execOperation[type="button"] {
      width: 80px;
    }
  }
}

.posi {
  position: absolute;
  width: 300px;
  height: 200px;
  background: #cccccc;
}
</style>