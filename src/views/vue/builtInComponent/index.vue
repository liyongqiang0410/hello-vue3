<!--
 * @Author: liyongqiang
 * @Date: 2020-12-24 10:57:06
 * @LastEditTime: 2020-12-25 15:13:11
 * @FilePath: \hello-vue3\src\views\vue\builtInComponent\index.vue
-->
<template>
  <div class="buildInComponent">
    <h1 class="title">内置组件 Component</h1>
    <a-divider orientation="left">水平分割线</a-divider>
    <a-radio-group
      v-model:value="childComponent"
      @change="changeChildComponent"
      size="small"
      ref="myRef"
    >
      <a-radio-button value="childOne"> 子组件 one </a-radio-button>
      <a-radio-button value="childTwo"> 子组件 two </a-radio-button>
      <a-radio-button value="childThree"> 子组件 three </a-radio-button>
    </a-radio-group>
    <a-divider orientation="left"></a-divider>
    <div :ref="childCom">
      <span class="title3">未缓存</span>
      <a-divider orientation="left"></a-divider>
      <component :is="childComponent"></component>
    </div>
    <a-divider orientation="left"></a-divider>
    <div>
      <span class="title3">失活的组件将会被缓存！</span>
      <a-divider orientation="left"></a-divider>
      <keep-alive include="childOne,childThree" :max="3">
        <component :is="childComponent"></component>
      </keep-alive>
    </div>
    <a-divider orientation="left"></a-divider>
    <div>
      <span class="title3">异步组件</span>
      <a-divider orientation="left"></a-divider>
      <asyncChildOne />
    </div>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, reactive, nextTick } from "vue";
import childOne from "./components/childOne";
import childTwo from "./components/childTwo";
import childThree from "./components/childThree";
const asyncChildOne = defineAsyncComponent(() =>
  import("./components/childOne")
);
export default {
  name: "buildInComponent",
  components: {
    childOne,
    childTwo,
    childThree,
    asyncChildOne,
  },
  setup() {
    let childComponent = ref("childOne");

    function changeChildComponent(val) {
      childComponent = val;
    }

    // 绑定获取dom method one
    let myRef = ref(null);

    // 绑定获取dom method two
    let setref = "";
    const childCom = (el) => {
      setref = el;
    };
    nextTick(() => {
      console.log(myRef);
      console.dir(setref);
    });
    let keepAliveCom = reactive(["childOne", "childTwo", "childThree"]);
    return {
      myRef,
      childCom,
      childComponent,
      keepAliveCom,
      changeChildComponent,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.buildInComponent {
  .title {
    font-size: 22px;
    font-weight: 700;
  }
  .title3 {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
