<template>
  <div class="bottom_arrow">
    <h1 style="font-weight: 700">单行</h1>
    <div class="line" :title="str">
      {{ str }}
    </div>
    <h1 style="font-weight: 700">多行</h1>
    <div class="mult_line" :title="str">{{ str }}</div>
    <div class="grid">
      <div class="grid_item"><div>1</div></div>
      <div class="grid_item"><div>2</div></div>
      <div class="grid_item"><div>3</div></div>
      <div class="grid_item"><div>4</div></div>
      <div class="grid_item"><div>5</div></div>
      <div class="grid_item"><div>6</div></div>
      <div class="grid_item"><div>7</div></div>
      <div class="grid_item"><div>8</div></div>
      <div class="grid_item"><div>9</div></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "",
  components: {},
  setup() {
    const str = ref(`
数组: 
      优点:可以通过下标值访问,效率高
      缺点:查找数据时需要先对数据进行排序,生成有序数组,才能提高查找效率;并且在插入和删除元素时,需要大量的位移操作
链表: 
      优点:数据的插入和删除操作效率都很高
      缺点:查找效率低,需要从头开始依次查找,直到找到目标数据为止;当需要在链表中间位置插入或删除数据时,插入或删除的效率都不高.
哈希表:      
      优点:哈希表的插入/查询/删除效率都非常高
      缺点:空间利用率不高,底层使用的数组中很多单元没有被利用;并且哈希表中的元素是无序的,不能按照固定顺序遍历哈希表中的元素;而且不能快速找出哈希表中最大值或最小值这些特殊值.
树结构:
      优点:树结构综合了上述三种结构的优点,同时也弥补了它们存在的缺点(虽然效率不一定都比它们高),比如树结构中数据都是有序的,查找效率高;空间利用率高;并且可以快速获取最大值和最小值等.`);
    return {
      str,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
// 单行省略
.line {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
// 多行省略
.mult_line {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 定行
  -webkit-box-orient: vertical;
}
.grid {
  text-align: center;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  .grid_item {
    border: 1px solid #13a1fc50;
    & > div {
      background: linear-gradient(#002f78, #002f78) left top,
        linear-gradient(#002f78, #002f78) left top,
        linear-gradient(#002f78, #002f78) right top,
        linear-gradient(#002f78, #002f78) right top,
        linear-gradient(#002f78, #002f78) left bottom,
        linear-gradient(#002f78, #002f78) left bottom,
        linear-gradient(#002f78, #002f78) right bottom,
        linear-gradient(#002f78, #002f78) right bottom;
      background-repeat: no-repeat;
      background-size: 3px 20px, 20px 3px;
      height: calc(100% + 4px);
      margin: -2px;
      border-radius: 3px;
    }
  }
}
</style>