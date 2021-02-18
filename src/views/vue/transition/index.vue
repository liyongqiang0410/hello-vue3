<!--
//  *  ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
//  *  │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
//  *  └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
//  *  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
//  *  │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
//  *  ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
//  *  │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
//  *  ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
//  *  │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
//  *  ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
//  *  │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
//  *  ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
//  *  │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
//  *  └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
//  * 
//  * @Author: liyongqiang
//  * @Date: 2020-12-25 14:02:10
 * @LastEditTime: 2021-02-18 15:57:30
 * @FilePath: \hello-vue3\src\views\vue\transition\index.vue
 -->

<template>
  <div class="transition">
    <div class="operationBtn">
      <a-button type="danger" shape="round" @click="trigg">trigger</a-button>
    </div>
    <!-- 先出后进 -->
    <transition name="fade" mode="out-in">
      <a-button v-if="switchV" type="danger" @click="switchBtn">off</a-button>
      <a-button v-else @click="switchBtn">on</a-button>
    </transition>
    <transition name="fade">
      <div class="content" v-show="trigger">
        <span>{{ poet }}</span>
      </div>
    </transition>
    <h1>list</h1>
    <div class="opration">
      <a-button type="danger" @click="add">add</a-button>
      <a-button @click="remove">remove</a-button>
    </div>
    <transition-group name="fade-list" tag="p">
      <span v-for="item in list" :key="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "transition",
  components: {},
  setup() {
    let trigger = ref(false);
    let poet = ref("asdfghj");
    function trigg() {
      trigger.value = !trigger.value;
      console.log(trigger);
    }
    // 模式
    let switchV = ref(false);
    function switchBtn() {
      switchV.value = !switchV.value;
    }

    let list = reactive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let currentNum = ref(10);
    function add() {
      list.splice(
        Math.floor(Math.floor(Math.random() * list.length)),
        0,
        currentNum.value++
      );
    }
    function remove() {
      list.splice(Math.floor(Math.random() * list.length), 1);
    }

    return {
      trigger,
      trigg,
      poet,
      switchV,
      switchBtn,
      list,
      currentNum,
      add,
      remove,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.transition {
  height: 100%;
  .content {
    width: 40%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }

  h1,
  .opration {
    margin: 30px 0;
  }

  .fade-list-enter-active,
  .fade-list-leave-active {
    transition: all 1s ease-in-out;
  }

  .fade-list-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }

  .fade-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  span {
    padding: 0 10px;
    display: inline-block;
  }
}
</style>