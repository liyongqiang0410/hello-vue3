<!--
 * @Author: liyongqiang
 * @Date: 2020-12-16 15:58:21
 * @LastEditTime: 2020-12-28 09:52:30
 * @FilePath: \hello-vue3\src\views\arrow\right_arrow\index.vue
-->
<template>
  <div v-for="(item, index) in imgSrc" :key="index">
    <img alt="" :src="item" v-lazy="item" />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  setup() {},
  data() {
    return {
      imgSrc: [
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&fm=26&gp=0.jpg",
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&fm=26&gp=0.jpg",
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&fm=26&gp=0.jpg",
        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2004055534,3969071219&fm=26&gp=0.jpg",
        "https://t7.baidu.com/it/u=1517636615,1004658520&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=2807634364,1970895546&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=4017421036,2274377417&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=2152959341,2729289673&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=3562510523,2373638288&fm=193&f=GIF",
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  object-fit: contain;
}
</style>