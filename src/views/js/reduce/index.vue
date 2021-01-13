<!--
 *  ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 *  │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 *  └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 *  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 *  │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
 *  ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 *  │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 *  ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 *  │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 *  ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 *  │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 *  ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 *  │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 *  └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 * 
 * @Author: liyongqiang
 * @Date: 2021-01-11 14:08:59
 * @LastEditTime: 2021-01-12 15:17:04
 * @FilePath: \hello-vue3\src\views\js\reduce\index.vue
 -->
<template>
  <div class="reduce">{{ arrOne }}</div>
  <a-divider />
  <a-button type="primary" shape="round" @click="removeDuplicates"
    >去重</a-button
  >
  <div>{{ removeDuplicatesArr }}</div>
  <a-divider />
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "reduce",
  components: {},
  setup() {
    let arrOne = reactive([1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7]);
    let removeDuplicatesArr = reactive([]);
    function removeDuplicates() {
      removeDuplicatesArr = arrOne.reduce((acc, current) => {
        if (!acc.includes(current)) {
          acc.push(current);
        }
        return acc;
      }, removeDuplicatesArr);
    }
    let minValue = ref(0);
    function getMinValue() {
      minValue = arrOne.reduce((acc, current) => {
        if (current > acc) {
          return acc;
        }
        return current;
      }, minValue);
    }
    return {
      arrOne,
      removeDuplicatesArr,
      removeDuplicates,
      minValue,
      getMinValue,
    };
  },
  data() {
    return {
      student: {
        name: "stu",
        age: 18,
      },
    };
  },
  mounted() {
    console.log(Object.getOwnPropertyDescriptor(this.student, "name"));
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
