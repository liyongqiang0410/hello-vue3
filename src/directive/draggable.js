export default {
  mounted(el) {
    el.style.cursor = "move";
    el.style.position = 'absolute';
    el.parentNode.style.position = 'relative';
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      console.log(disx, disy);
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = el.parentNode.clientWidth - parseInt(window.getComputedStyle(el).width)
        let maxY = el.parentNode.clientHeight - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}

