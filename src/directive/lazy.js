import baseImg from "@/assets/defaultImg/default.jpg";
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
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
    observer.observe(el);
  },
  unmounted() {
    observer.disconnect();
  }
}