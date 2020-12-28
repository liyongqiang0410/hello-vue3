/*
 * @Author: liyongqiang
 * @Date: 2020-12-21 16:31:04
 * @LastEditTime: 2020-12-28 09:48:50
 * @FilePath: \hello-vue3\src\directive\lazy.js
 */
import baseImg from "@/assets/defaultImg/default.jpg";
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // if (entry.intersectionRatio > 0.5) {
      !entry.target.isLoaded && showImage(entry.target, entry.target.data_src);
    }
  })
})
function showImage(el, imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    el.isLoaded = true;
  }
}
export default {
  mounted(el, binding) {
    el.src = baseImg;
    el.data_src = binding.value;
    //! 开始观察
    observer.observe(el);
  },
  unmounted() {
    //! 关闭观察
    observer.disconnect();
  }
}