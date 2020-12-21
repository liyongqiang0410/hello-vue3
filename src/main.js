import { createApp } from 'vue'
import App from './App.vue'
import './utils/permission.js'
import router from './router/index.js'
import store from './store/index.js'
// lodash 工具
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// svg-sprite-loader
import './assets/icons/index'
// ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

// 自动引入全局组件
const requireComponent = require.context('./components', false, /.vue$/)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  // 获取和目录深度无关的文件名
  const componentName = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')))
  // 全局注册组件
  app.component(componentName, componentConfig.default || componentConfig)
})

// 自动引入自定义指令
const requireDirective = require.context("./directive", false, /\.js$/)
requireDirective.keys().forEach(fileName => {
  const directiveConfig = requireDirective(fileName)
  const direct = fileName.split("/").pop().replace(/\.\w+$/, "");
  app.directive(direct, directiveConfig.default || directiveConfig)
})

app.use(router).use(store).use(Antd).mount('#app')
