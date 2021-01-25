<!--
//  * @Author: liyongqiang
//  * @Date: 2021-01-18 09:12:37
//  * @Powerd by @liyongqiang(1623386424)
 * @LastEditors: liyongqiang
 * @LastEditTime: 2021-01-18 09:23:16
 * @FilePath: \hello-vue3\src\views\js\optimize\index.vue
-->
<template>
  <div class="optimize"></div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "optimize",
  components: {},
  setup() {
    let obj = reactive({
      name: "asdfghjkl",
      age: 0,
    });
    return {
      obj,
    };
  },
  mounted() {
    let { name = requireKey("name"), age = requireKey("age") } = this.obj;
    console.log(name, age);
    function requireKey(key) {
      console.error(`${key} is null or undefined, plc check it`);
    }
  },
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
