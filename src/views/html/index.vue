<!--
//  *                        .::::.
//  *                      .::::::::.
//  *                     :::::::::::
//  *                  ..:::::::::::'
//  *               '::::::::::::'
//  *                 .::::::::::
//  *            '::::::::::::::..
//  *                 ..::::::::::::.
//  *               ``::::::::::::::::
//  *                ::::``:::::::::'        .:::.
//  *               ::::'   ':::::'       .::::::::.
//  *             .::::'      ::::     .:::::::'::::.
//  *            .:::'       :::::  .:::::::::' ':::::.
//  *           .::'        :::::.:::::::::'      ':::::.
//  *          .::'         ::::::::::::::'         ``::::.
//  *      ...:::           ::::::::::::'              ``::.
//  *     ````':.          ':::::::::'                  ::::..
//  *                        '.:::::'                    ':'````..
//  * 
//  * @Author: liyongqiang
//  * @Date: 2021-01-13 09:26:42
//  * @Powerd by @liyongqiang(1623386424)
 * @LastEditors: liyongqiang
 * @LastEditTime: 2021-01-14 14:59:57
 * @FilePath: \hello-vue3\src\views\html\index.vue
 -->
<template>
  <div class="html">
    <div class="nav">
      <label for="first">
        <span
          @click.stop="anchor(1)"
          :style="activeAnchor === 1 ? nav_item_style : ''"
          >first</span
        >
      </label>
      <label for="second">
        <span
          @click="anchor(2)"
          :style="activeAnchor === 2 ? nav_item_style : ''"
          >second</span
        >
      </label>
      <label for="third">
        <span
          @click="anchor(3)"
          :style="activeAnchor === 3 ? nav_item_style : ''"
          >third</span
        >
      </label>
      <label for="fourth">
        <span
          @click="anchor(4)"
          :style="activeAnchor === 4 ? nav_item_style : ''"
          >fourth</span
        >
      </label>
      <span></span>
    </div>
    <div class="main">
      <div id="first_out">
        <input type="text" id="first" />
        <img
          v-errorImg="
            'https://img-blog.csdnimg.cn/20191016152304540.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW9tYW5vbnlv,size_16,color_FFFFFF,t_70'
          "
          alt=""
        />
      </div>
      <div id="second_out">
        <input type="text" id="second" />
        <img v-errorImg="'https://img-blog.csdnimg.cn'" alt="" />
      </div>
      <div id="third_out">
        <input type="text" id="third" />
        <img v-errorImg="" alt="" />
      </div>
      <div id="fourth_out">
        <input type="text" id="fourth" />
        <img v-errorImg="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  setup() {},
  data() {
    return {
      activeAnchor: 1,
      nav_item_style: {
        fontSize: "16px",
        backgroundColor: "skyblue",
        color: "#fff",
        fontWeight: 700,
      },
      defaultImgSrc: require("@/assets/defaultImg/errorImg.svg"),
    };
  },
  methods: {
    anchor(num) {
      this.activeAnchor = num;
    },
    errorImg(e) {
      e.target.src = this.defaultImgSrc;
    },
  },
};
</script>

<style scoped lang="scss">
.html {
  height: 100%;
  .nav {
    height: 50px;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    background: #fff;
    box-shadow: 0px 0px 5px #cccccc;
    & > label {
      display: inline-block;
      cursor: pointer;
      & > span {
        box-sizing: content-box;
        display: inline-block;
        width: 50px;
        text-align: center;
        height: 30px;
        padding: 10px 20px;
        line-height: 30px;
      }
    }
    & > label:not(:first-child) {
      border-left: 1px solid skyblue;
    }
  }
  .main {
    height: calc(100% - 60px);
    overflow: auto;
    scroll-behavior: smooth;
    #first_out,
    #second_out,
    #third_out,
    #fourth_out {
      height: 100%;
      position: relative;
      & > input {
        position: absolute;
        left: 0;
        display: inline-block;
        width: 1px;
        height: 100%;
        outline: none;
        border: none;
        clip: rect(0 0 0 0);
      }
      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    #first_out {
      background: red;
    }
    #second_out {
      background: orange;
    }
    #third_out {
      background: yellow;
    }
    #fourth_out {
      background: green;
    }
  }
}
</style>