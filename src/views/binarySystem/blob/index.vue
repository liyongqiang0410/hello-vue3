<template>
  <div class="blob">
    <div class="item">
      <img class="copyImg" src="@/assets/img/1.png" alt="" />
      <p>{{ text }}</p>
      <div class="footer">
        <a-button @click="writeDataToClipboard">复 制</a-button>
        <a-button>粘 帖</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
export default {
  name: "blob",
  components: {},
  setup() {},
  data() {
    return {
      text: "一键复制图片文字",
      imgUrl: "img/1.png",
    };
  },
  mounted() {
    console.log(this.askWritePermission());
  },
  methods: {
    // 写入权限
    async askWritePermission() {
      try {
        const { state } = await navigator.permissions.query({
          name: "clipboard-write",
        });
        return state === "granted";
      } catch (error) {
        return false;
      }
    },
    // 创建文本原始数据类文件对象
    createTextBlob(text) {
      return new Blob([text], { type: "text/plain" });
    },
    // 创建图片原始数据类文件对象
    async createImageBlob(url) {
      const response = await fetch(url);
      return await response.blob();
    },
    // 写入剪切板
    async writeDataToClipboard() {
      if (this.askWritePermission()) {
        if (navigator.clipboard && navigator.clipboard.write) {
          const textBlob = this.createTextBlob(this.text);
          const imageBlob = await this.createImageBlob(
            document.getElementsByClassName("copyImg")[0].src
          );
          console.log(textBlob.type);
          console.log(imageBlob.type);
          try {
            this.select(document.querySelector(".item"));
            // Type image/jpeg not supported on write.
            await navigator.clipboard.write([
              // eslint 通不过
              // new ClipboardItem({
              //   [textBlob.type]: textBlob,
              //   [imageBlob.type]: imageBlob,
              // }),
            ]);
            message.success("文本和图像复制成功");
          } catch (error) {
            message.warning("文本和图像复制失败");
            console.error(error);
          }
        }
      }
    },
    select(element) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    },
  },
};
</script>

<style scoped lang="scss">
.blob {
  .item {
    user-select: none;
    padding: 20px;
    text-align: center;
    display: inline-block;
    box-shadow: 0px 0px 5px 5px #cccccc;
    img {
      width: 300px;
    }
    .footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
