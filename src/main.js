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
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /.vue$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  // 全局注册组件
  app.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

// 自动引入全局指令
const requireDirective = require.context("./directive", false, /\.js$/)

requireDirective.keys().forEach(fileName => {
  const directiveConfig = requireDirective(fileName)
  const direct = fileName.split("/").pop().replace(/\.\w+$/, "");
  app.directive(direct, directiveConfig.default)
})

app.use(router).use(store).use(Antd).mount('#app')
