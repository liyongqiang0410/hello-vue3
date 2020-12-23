const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本url 可使用kong '' 或相对路径 './' 如果项目部署在子路径上则设置为子路径名 '/childName/'
  publicPath: './',
  // 打包输出目录 默认: 'dist'
  outputDir: 'dist',
  // 指定生成的 index.html 的输出路径
  indexPath: 'vue3_index.html',
  // 静态资源文件夹
  assetsDir: '',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  lintOnSave: process.env.NODE_ENV !== 'production',
  // lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,

  devServer: {
    hot: true,
    port: '8080',
    host: 'localhost',
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "^/api": {
        target: "www.example.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": '/api'
        }
      }
    }
  },

  chainWebpack: config => {
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
  },

  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components')
      },
    },
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          exclude: [resolve('src/assets/icons')],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]',
              },
            },
          ],
        }
      ]
    }
  })
}