import { login } from '@/api/user.js'
const state = {
  // 需要权限的路由数组
  router: null,
  // 所有路由的对象数组
  routerItemArr: [],
  // 所有路由对象的 name
  routerItemNameArr: [],
  userInfo: {
    name: 'admin',
    birthday: '04-10',
    role: "admin",
  },
  accessToken: 'abcdefghijklmnopqrstuvwxyz123456',
}

const mutations = {
  setRouter: (state, value) => {
    state.router = value
  },
  setRouterItemArr: (state, value) => { 
    state.routerItemArr = value
  },
  setRouterItemNameArr: (state, value) => { 
    state.routerItemNameArr = value
  },
  setUserInfo: (state, value) => {
    state.userInfo = value
  },
  setAccessToken: (state, value) => {
    state.accessToken = value
  }
}

// getter 类似于计算属性
const getters = {
  userName: (state) => {
    return state.userInfo.userName
  }
}

// 登陆获取token
const actions = {
  async login({ commit }, userInfo) {
    const { data } = await login(userInfo)
    const accessToken = data['tokenName']
    if (accessToken) {
      commit('setAccessToken', accessToken)
    } else {
      console.log(`登录接口异常，未正确返回token`)
    }
  },
}

export default { state, getters, mutations, actions }