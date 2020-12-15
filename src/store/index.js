import { createStore } from 'vuex'

const modules = {}
// 自动引入全部模块
const requireModules = require.context('./modules', false, /.js$/)
requireModules.keys().forEach(fileName => {
  modules[fileName.replace(/(\.\/|\.js)/g, '')] = requireModules(fileName).default
});
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})
export default createStore({
  modules
})