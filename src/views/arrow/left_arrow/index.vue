<template>
  <div class="left_arrow">深克隆</div>
  <a-divider />
  <div>原始数据: {{ obj }}</div>
  <a-button @click="clone" size="small">克隆</a-button>
  <div>克隆数据: {{ a }}</div>
  <a-button @click="changeClone" size="small">改变克隆数据</a-button>
  <div>{{ nameToRef }}</div>
  <a-button @click="changToRef">改变ToRef</a-button>
  <a-divider />
  <div>torefs原始数据: {{ state }}</div>
  <div>{{ foo }}</div>
  <a-button @click="torefs" size="small">torefs</a-button><br />
  <a-divider />
  <a-button @click="changeStr('afuiyauhf')" size="small">改变str</a-button>
  <a-divider />
</template>

<script>
import { reactive, toRaw, toRef, toRefs } from "vue";
export default {
  name: "",
  components: {},
  data() {
    return {
      a: null,
    };
  },
  setup() {
    const obj = reactive({
      str: "liyongqiang",
      num: 765907200000,
      bool: false,
      undef: undefined,
      nul: null,
      obj: {
        name: "liyongqiang",
      },
      nameArr: ["l", "i", "y", "o", "n", "g", "q", "i", "a", "n", "g"],
      nameExp: /(li | yong | qiang)/gi,
      nameDate: new Date(),
    });

    const nameToRef = toRef(obj, "str");
    function changToRef() {
      nameToRef.value = "asdfghjkl";
    }

    function changeStr(s) {
      obj.str = s;
      console.log(obj);
    }

    const state = reactive({
      foo: 1,
      bar: 2,
    });
    const stateAsRefs = toRefs(state);
    function torefs() {
      stateAsRefs.foo.value++;
    }

    return {
      obj,
      nameToRef,
      state,
      ...stateAsRefs,
      torefs,
      changeStr,
      changToRef,
    };
  },
  methods: {
    clone() {
      let b = this.deepClone(toRaw(this.obj));
      b.nameArr.push("1");
      this.a = reactive(b);
    },
    deepClone(target) {
      if (target instanceof Object) {
        let result = {};
        if (target instanceof Array) {
          result = [];
        } else if (target instanceof Function) {
          result = (...args) => {
            return target.call(this, ...args);
          };
        } else if (target instanceof RegExp) {
          result = new RegExp(target.source, target.flags);
        } else if (target instanceof Date) {
          result = new Date(target);
        }
        Object.keys(target).forEach((k) => {
          result[k] = this.deepClone(target[k]);
        });
        return result;
      }
      return target;
    },
    changeClone() {
      this.a.bool = true;
    },
  },
};
</script>

<style scoped lang="scss">
</style>