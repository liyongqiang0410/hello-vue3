<!--
 * @Author: liyongqiang
 * @Date: 2020-12-16 15:58:21
 * @Powerd by @liyongqiang(1623386424)
 * @LastEditors: liyongqiang
 * @LastEditTime: 2021-01-14 12:00:55
 * @FilePath: \hello-vue3\src\views\css\css1\index.vue
-->
<template>
  <div class="css1" v-copy="count" @click="copy">父组件:{{ count }}</div>
  <addCount :id="'this is my id'" />
  <a-divider />
  <div class="text_fill">渐变字体</div>
  <!-- <span>H<sub>2</sub>O</span>
  <span>C<sup>14</sup>O<sub>2</sub></span> -->
  <img class="maskImage" src="@/assets/img/card.jpg" alt="" />
</template>

<script>
import addCount from "../components/addCount";
import { ref, provide } from "vue";
export default {
  name: "CSS1",
  components: {
    addCount,
  },
  setup() {
    const count = ref(1); // 申明简单属性
    function add() {
      // 操作属性方法
      count.value++;
    }
    provide("count", count); // 注册属性 在所有子组件中注入
    provide("add", add);
    return {
      count,
    };
  },
  methods: {
    copy() {
      console.log("copy");
    },
  },
};
</script>

<style scoped lang="scss">
.text_fill {
  font-size: 3rem;
  font-weight: bolder;
  background: linear-gradient(to right, #f12711, #f5af19);
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.maskImage {
  width: 300px;
  object-fit: contain;
  -webkit-mask-image: url("../../../assets/img/card-mask.png");
  mask-image: url("../../../assets/img/card-mask.png");
  -webkit-mask-size: 100%;
  mask-size: 100%;
}
</style>