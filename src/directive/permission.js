/**
 * 角色身份确认
 * @param {*} key 角色身份
 */
function checkArray(key) {
  // 全部角色
  let arr = ['admin', 'superAdmin', 'user']
  let index = arr.indexOf(key)
  if (index > -1) {
    return true
  } else {
    return false
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
