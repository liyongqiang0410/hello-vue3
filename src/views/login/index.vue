<template>
  <div class="login">
    <div class="content">
      <div class="title" id="title1">1</div>
      <div class="title" id="title2">2</div>
      <div class="title" id="title3">3</div>
      <div class="title" id="title4">4</div>
      <div class="title" id="title5">5</div>
      <div class="title" id="title6">6</div>
      <div class="title" id="title7">7</div>
      <div class="title" id="title8">8</div>
    </div>
    <div class="fixed">
      <div><a href="javascript:" @click="scrollTo('#title1')">1</a></div>
      <div><a href="javascript:" @click="scrollTo('#title2')">2</a></div>
      <div><a href="javascript:" @click="scrollTo('#title3')">3</a></div>
      <div><a href="javascript:" @click="scrollTo('#title4')">4</a></div>
      <div><a href="javascript:" @click="scrollTo('#title5')">5</a></div>
      <div><a href="javascript:" @click="scrollTo('#title6')">6</a></div>
      <div><a href="javascript:" @click="scrollTo('#title7')">7</a></div>
      <div><a href="javascript:" @click="scrollTo('#title8')">8</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  setup() {},
  methods: {
    scrollTo(idName) {
      document.querySelector(idName).scrollIntoView(true);
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  .content {
    height: 100vh;
    overflow: hidden;
    scroll-behavior: smooth;
    #title1 {
      background: #fff;
    }
    #title2 {
      background: #fff5ff;
    }
    #title3 {
      background: #ffe8f7;
    }
    #title4 {
      background: #ffdfca;
    }
    #title5 {
      background: #ffe694;
    }
    #title6 {
      background: #f9f871;
    }
    #title7 {
      background: #b1bdc5;
    }
    #title8 {
      background: #43655a;
    }
    .title {
      scroll-behavior: smooth;
      height: 400px;
    }
  }
  .fixed {
    position: fixed;
    top: 200px;
    right: 200px;
  }
}
</style>