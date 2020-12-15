function checkArray(key) {
  let arr = ['admin', 'superAdmin', 'user']
  let index = arr.indexOf(key)
  if (index > -1) {
    return true // 有权限
  } else {
    return false // 无权限
  }
}

const permission = {
  mounted(el, binding) {
    var permission = binding.value // 获取到 v-permission的值
    if (permission) {
      var hasPermission = checkArray(permission)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  },
  updated(el, binding) {
    var permission = binding.value // 获取到 v-permission的值
    if (permission) {
      var hasPermission = checkArray(permission)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  },
}

export default permission
