import Router from '../router/index'
import Store from '../store/index'
import { reactive } from 'vue'

const role = Store.state.user.userInfo.role

// 白名单
const whiteRouter = ["/login", '/register', '/updatePwd', "/404", "/403"]

// 路由
const routerArr = Router.options.routes

// 需要登陆权限
const permissionRouter = reactive([]);
if (!Store.state.user.router) {
  routerArr.forEach(item => {
    if (item.permission) {
      permissionRouter.push(item)
    }
  })
  Store.commit("user/setRouter", permissionRouter[0].children)
}

// 所有路由项
const routerItemArr = []
if (Store.state.user.routerItemArr.length == 0) {
  innerRouter(permissionRouter)
  Store.commit("user/setRouterItemArr", routerItemArr)
}
function innerRouter(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]?.children?.length > 0) {
      routerItemArr.push(arr[index])
      innerRouter(arr[index].children)
    } else {
      routerItemArr.push(arr[index])
    }
  }
}

// 所有路由项 url 数组
const routerItemNameArr = []
if (Store.state.user.routerItemNameArr.length == 0) {
  for (let i = 0; i < routerItemArr.length; i++) {
    routerItemNameArr.push("/" + routerItemArr[i]?.mate.url)
  }
  Store.commit("user/setRouterItemNameArr", routerItemNameArr)
}

// 路由守卫 
Router.beforeEach(async (to, from, next) => {
  // 是否为白名单
  if (whiteRouter.includes(to.path)) {
    next()
    return
  }

  var currentRouter = null
  for (let i = 0; i < routerItemArr.length; i++) {
    if (to.path === "/" + routerItemArr[i].mate.url) {
      currentRouter = routerItemArr[i]
      break;
    }
  }

  // 是否登陆
  if (Store.state.user.accessToken) {
    // 路由是否存在
    if (routerItemNameArr.includes(to.path)) {
      if (currentRouter.mate?.permission.includes(role)) {
        next()
      } else {
        next("/403")
      }
    } else {
      next('/404')
    }
  } else {
    next("/login")
  }
})