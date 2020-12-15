<template>
  <div class="css1">{{ count }}</div>
  <addCount :id="'this is my id'" />
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
    const count = ref(0); // 申明简单属性
    function add(val) {
      console.log(val);
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
    // add() {
    //   this.count++;
    // },
  },
};
</script>

<style scoped lang="scss">
</style>