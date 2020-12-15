import router from '@/router/index.js'
// 系统配置页 列属性
const sysConfigColumn = [
  {
    align: 'center',
    dataIndex: 'index',
    key: 'index',
    width: '110px',
    slots: { title: 'columnTitle' }
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',

  },
  {
    title: '图标',
    dataIndex: 'mate.icon',
    key: 'mate.icon',
    width: '20%',
    slots: { customRender: 'icon' }
  },
  {
    title: '文件路径',
    dataIndex: 'mate.filePath',
    key: 'mate.filePath',
    width: '20%',
  },
  {
    title: 'route',
    dataIndex: 'mate.url',
    key: 'mate.url',
  },
  {
    align: 'center',
    title: '操作',
    dataIndex: 'record',
    slots: { customRender: 'action' }
  }
]

const sysConfigData = router.options.routes
export {
  sysConfigColumn,
  sysConfigData
}