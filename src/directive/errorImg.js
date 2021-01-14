/*
 * @Author: liyongqiang
 * @Date: 2021-01-14 14:26:36
 * @Powerd by @liyongqiang(1623386424)
 * @LastEditors: liyongqiang
 * @LastEditTime: 2021-01-14 15:01:04
 * @FilePath: \hello-vue3\src\directive\errorImg.js
 */
import errorDefaultImg from '@/assets/defaultImg/errorImg.svg'
export default {
  mounted(el, binding) {
    let imgUrl = binding.value
    if (imgUrl) {
      imgExist(imgUrl).then(res => {
        console.log('资源地址状态', res);
        if (res) el.src = imgUrl
        else el.src = errorDefaultImg
      })
    } else {
      el.src = errorDefaultImg
    }
  }
}
let imgExist = function (url) {
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = () => {
      resolve(true)
    }
    img.src = url
    img.onerror = () => {
      resolve(false)
    }
  })
}