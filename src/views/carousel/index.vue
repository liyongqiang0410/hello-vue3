<!--
//  *                        _oo0oo_
//  *                       o8888888o
//  *                       88" . "88
//  *                       (| -_- |)
//  *                       0\  =  /0
//  *                     ___/`---'\___
//  *                   .' \\|     |// '.
//  *                  / \\|||  :  |||// \
//  *                 / _||||| -:- |||||- \
//  *                |   | \\\  - /// |   |
//  *                | \_|  ''\---/''  |_/ |
//  *                \  .-\__  '-'  ___/-. /
//  *              ___'. .'  /--.--\  `. .'___
//  *           ."" '<  `.___\_<|>_/___.' >' "".
//  *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//  *          \  \ `_.   \_ __\ /__ _/   .-` /  /
//  *      =====`-.____`.___ \_____/___.-`___.-'=====
//  *                        `=---='
//  * 
//  * 
//  *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  * 
//  *            佛祖保佑       永不宕机     永无BUG
//  * 
//  * @Author: liyongqiang
//  * @Date: 2020-12-25 16:05:50
 * @LastEditTime: 2020-12-29 11:03:40
 * @FilePath: \hello-vue3\src\views\carousel\index.vue
 -->
<template>
  <div class="carousel">
    <div class="conic" draggable="false"></div>
  </div>
  <!-- 
    <dialog ref="dialog" class="dialog" open>
      <div class="header">提 示</div>
      <span class="closeBtn" @click="closeDialog">&times;</span>
    </dialog>
   -->
</template>

<script>
import { ref } from "vue";
export default {
  name: "carousel",
  components: {},
  setup() {
    const dialog = ref(null);
    console.dir(dialog);
    function closeDialog() {
      console.log(1);
      dialog.value.close();
    }
    return {
      dialog,
      closeDialog,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.carousel {
  height: 100%;
  .conic {
    height: 400px;
    width: 400px;
    border-radius: 200px;
    background: conic-gradient(from 45deg, white, 70%, deepSkyBlue);
    mask-image: radial-gradient(closest-side, transparent 75%, black 76%);
  }
}
.dialog {
  width: 40%;
  height: 300px;
  position: absolute;
  top: 15vh;
  left: 50vw;
  margin-left: -20%;
  border: 1px solid #cccccc;
  border-radius: 15px;
  box-shadow: 0 0 5px 5px #cccccc;
  .header {
    font-size: 20px;
    font-weight: 700;
    padding: 5px 20px;
    border-bottom: 1px solid #cccccc;
  }
  .closeBtn {
    width: 31px;
    text-align: center;
    cursor: pointer;
    font-size: 30px;
    line-height: 31px;
    position: absolute;
    right: 30px;
    top: 5px;
  }
}
</style>


