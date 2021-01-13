<!--
 * @Author: liyongqiang
 * @Date: 2020-12-29 11:43:54
 * @LastEditTime: 2020-12-29 17:55:02
 * @FilePath: \hello-vue3\src\views\svg\offsetPath\index.vue
-->
<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    height="300"
    v-if="false"
  >
    <!-- <circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="3" fill="transparent" id="circle1" /> -->
    <!-- <circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="3" fill="transparent" id="circle2" /> -->
    <g>
      <!-- 外圆轨迹 天蓝 -->
      <circle
        cx="150"
        cy="150"
        r="50"
        stroke="skyblue"
        stroke-width="1"
        fill="transparent"
        id="circle0"
      />
      <g>
        <!-- 公转外圆 红-->
        <circle cx="100" cy="150" r="8" fill="red">
          <animateMotion
            path="M0 0 a50 50 0 1 0 100 0a50 50 0 1 0 -100 0z"
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="36"
            repeatCount="indefinite"
          ></animateMotion>
        </circle>
        <g>
          <!-- 公转轨迹小圆 蓝 透明度0.3-->
          <circle
            cx="100"
            cy="150"
            r="20"
            stroke="blue"
            stroke-opacity="0.3"
            fill="transparent"
          />
          <animateMotion
            path="M0 0 a50 50 0 1 0 100 0a50 50 0 1 0 -100 0z"
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="36"
            repeatCount="indefinite"
          ></animateMotion>
          <g>
            <!-- 公转小圆 橙 -->
            <circle cx="80" cy="150" r="3" fill="orange">
              <animateMotion
                path="M0 0 a20 20 0 1 0 40 0a20 20 0 1 0 -40 0z"
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="3"
                repeatCount="indefinite"
              ></animateMotion>
            </circle>
          </g>
        </g>
      </g>
    </g>
  </svg>
  <div class="offsetPath">
    <div class="sun"></div>
    <div class="earth"></div>
    <div class="moonTrack">
      <div class="moon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "offsetPath",
  components: {},
  setup() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.offsetPath {
  width: 300px;
  height: 300px;
  border: 1px solid #000;
  display: inline-block;
  position: relative;
  .sun {
    width: 125px;
    height: 125px;
    border-radius: 100%;
    background: radial-gradient(
      circle farthest-corner at center,
      #f5af19 10%,
      #f12711
    );
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -62px;
    margin-left: -62px;
  }
  .earth {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    position: absolute;
    background: radial-gradient(
      circle farthest-corner at center,
      white 20%,
      skyblue 80%,
      white
    );
    offset-path: path("M 50 150 A 75 75 0 0 1 250 150 A 75 75 0 0 1 50 150");
    animation: ani_earth 30s linear infinite;
  }
  @keyframes ani_earth {
    100% {
      offset-distance: 100%;
    }
  }
  .moonTrack {
    position: absolute;
    width: 60px;
    height: 60px;
    offset-path: path("M 50 150 A 75 75 0 0 1 250 150 A 75 75 0 0 1 50 150");
    animation: ani_earth 30s linear infinite;
  }
  .moon {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: red;
    position: absolute;
    // offset-path: path("M 5 150 A 45 45 0 0 1 95 150 A 45 45 0 0 1 5 150");
    // animation: ani_moon 3s linear infinite;
  }
  @keyframes ani_moon {
    100% {
      offset-distance: 100%;
    }
  }
}
</style>