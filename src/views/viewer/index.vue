<!--
 * @Author: liyongqiang
 * @Date: 2020-12-28 15:57:04
 * @LastEditTime: 2020-12-28 16:38:10
 * @FilePath: \hello-vue3\src\views\viewer\index.vue
-->
<template>
  <div class="viewer">
    <img src="@/assets/img/1.png" alt="" @click="showImg" />
    <img src="@/assets/img/1.jpg" alt="" @click="showImg" />
    <img src="@/assets/img/2.jpg" alt="" @click="showImg" />
  </div>
</template>

<script>
import viewer from "viewerjs";
export default {
  name: "viewer",
  components: {},
  setup() {},
  methods: {
    showImg() {
      const gallery = new viewer(document.getElementsByClassName("viewer")[0], {
        show: () => {
          gallery.update();
        },
        hide: () => {
          gallery.destroy();
        },
        zIndex: 9999,
      });
      gallery.show();
    },
  },
};
</script>

<style scoped lang="scss">
.viewer {
  width: 100%;
  & > img {
    width: 100%;
    cursor: pointer;
  }
}
</style>