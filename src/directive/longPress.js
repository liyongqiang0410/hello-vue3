export default {
  mounted(el, binding) {
    if (typeof binding.value !== 'function') {
      throw "callback is not a function"
    }

    let pressTimer = null;

    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler()
        }, 2000)
      }
    }

    let cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }

    const handler = (e) => {
      binding.value(e)
    }

    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    // 取消计时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  },
  unmounted(el) {
    el.removeEventListener('click', el.handler)
  },
}