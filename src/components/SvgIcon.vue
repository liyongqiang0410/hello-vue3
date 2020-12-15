<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed } from "vue";
export default {
  name: "svgIcon",
  props: {
    iconClass: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.iconClass}`;
    });
    const svgClass = computed(() => {
      if (props.className) {
        return "svg-icon" + props.className;
      } else {
        return "svg-icon";
      }
    });
    return {
      iconName,
      svgClass,
    };
  },
};
</script>

<style scoped lang="scss">
.svg-icon {
  width: 20px;
  height: 20px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>