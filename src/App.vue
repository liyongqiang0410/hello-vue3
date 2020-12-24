<template>
  <div
    id="app"
    :style="{
      filter: checked ? 'invert(1) hue-rotate(180deg)' : '',
    }"
  >
    <router-view />
  </div>
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 是否开启暗黑模式
    const checked = ref(false);
    provide("themeSymbol", checked);
    function changeTheme(theme) {
      if (theme.value) {
        document
          .getElementsByTagName("html")[0]
          .setAttribute("style", "filter: invert(1) hue-rotate(180deg)");
      } else {
        document.getElementsByTagName("html")[0].setAttribute("style", "");
      }
    }
    provide("changeTheme", changeTheme);
    return {
      checked,
    };
  },
  mounted() {
    // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 6px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 3px;
  background: #9d3b77;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 3px;
  background: #ff9b5b;
}
::-webkit-scrollbar-corner {
  display: none;
}
</style>
