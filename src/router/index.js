/*
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 * 
 * @Author: liyongqiang
 * @Date: 2020-12-16 15:58:21
 * @LastEditTime: 2020-12-25 15:08:56
 * @FilePath: \hello-vue3\src\router\index.js
 */
import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/login',
      permission: true,
      component: () => import("@/views/layout/index"),
      mate: {
        url: '/',
        filePath: 'layout/index',
      },
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import("@/views/index/index"),
          mate: {
            title: "首页",
            icon: 'shouye',
            url: 'index',
            filePath: 'index/index',
            permission: ["admin"]
          }
        },
        {
          path: 'icon',
          name: 'icon',
          component: () => import("@/views/icon/index"),
          mate: {
            title: "icon 图标",
            icon: 'icon',
            url: 'icon',
            filePath: 'icon/index',
            permission: ["admin"]
          }
        },
        {
          path: 'drag',
          name: 'drag',
          component: () => import("@/views/drag/index"),
          mate: {
            title: "drag",
            icon: 'Movedraginterface',
            url: 'drag',
            filePath: 'drag/index',
            permission: ["admin"]
          }
        },
        {
          path: 'css',
          name: 'css',
          component: () => import("@/views/css/index"),
          mate: {
            title: "css",
            icon: 'css',
            filePath: 'css/index',
            url: 'css',
            permission: ["admin"]
          },
          children: [
            {
              path: 'css1',
              name: 'css1',
              component: () => import("@/views/css/css1/index"),
              mate: {
                title: "CSS",
                icon: 'CSS',
                filePath: 'css/css1/index',
                url: 'css/css1',
                permission: ["admin"]
              },
            }
          ]
        },
        {
          path: 'arrow',
          name: 'arrow',
          component: () => import("@/views/arrow/index"),
          mate: {
            title: "arrow",
            icon: 'run-up',
            filePath: 'arrow/index',
            url: 'arrow',
            permission: ["admin"]
          },
          children: [
            {
              path: 'upper_arrow',
              name: 'upper_arrow',
              component: () => import("@/views/arrow/upper_arrow/index"),
              mate: {
                title: "arrow-up-bold",
                icon: 'arrow-up-bold',
                filePath: 'arrow/upper_arrow/index',
                url: 'arrow/upper_arrow',
                permission: ["admin"]
              },
            }, {
              path: 'right_arrow',
              name: 'right_arrow',
              component: () => import("@/views/arrow/right_arrow/index"),
              mate: {
                title: "arrow-right-bold",
                icon: 'arrow-right-bold',
                filePath: 'arrow/right_arrow/index',
                url: 'arrow/right_arrow',
                permission: ["admin"]
              }
            }, {
              path: 'bottom_arrow',
              name: 'bottom_arrow',
              component: () => import("@/views/arrow/bottom_arrow/index"),
              mate: {
                title: "arrow-down-bold",
                icon: 'arrow-down-bold',
                filePath: 'arrow/bottom_arrow/index',
                url: 'arrow/bottom_arrow',
                permission: ["admin"]
              }
            }, {
              path: 'left_arrow',
              name: 'left_arrow',
              component: () => import("@/views/arrow/left_arrow/index"),
              mate: {
                title: "arrow-left-bold",
                icon: 'arrow-left-bold',
                filePath: 'arrow/left_arrow/index',
                url: 'arrow/left_arrow',
                permission: ["admin"]
              }
            }
          ]
        }, {
          path: 'binarySystem',
          name: 'binarySystem',
          component: () => import('@/views/binarySystem/index'),
          mate: {
            title: "binarySystem",
            icon: 'binarySystem',
            filePath: 'binarySystem/index',
            url: 'binarySystem',
            permission: ["admin"]
          },
          children: [
            {
              path: 'blob',
              name: 'blob',
              component: () => import("@/views/binarySystem/blob/index"),
              mate: {
                title: "blob",
                icon: 'binarySystem',
                filePath: 'binarySystem/blob/index',
                url: 'binarySystem/blob',
                permission: ["admin"]
              },
            }
          ]
        }, {
          path: 'vue',
          name: 'vue',
          component: () => import("@/views/vue/index"),
          mate: {
            title: 'Vue 内置组件',
            icon: 'Vue',
            url: 'vue',
            filePath: 'vue/index',
            permission: ['admin'],
          },
          children: [
            {
              path: 'builtInComponent',
              name: 'builtInComponent',
              component: () => import("@/views/vue/builtInComponent/index.vue"),
              mate: {
                title: '动态组件',
                icon: 'Vue',
                url: 'vue/builtInComponent',
                filePath: 'vue/builtInComponent/index',
                permission: ["admin"]
              }
            },
            {
              path: 'suspense',
              name: 'suspense',
              component: () => import("@/views/vue/suspense/index"),
              mate: {
                title: 'suspense 悬念',
                icon: 'Vue',
                url: 'vue/suspense',
                filePath: 'vue/suspense/index',
                permission: ["admin"]
              }
            }, {
              path: 'teleport',
              name: 'Teleport',
              component: () => import('@/views/vue/teleport/index'),
              mate: {
                title: 'teleport',
                icon: 'Vue',
                url: 'vue/teleport',
                filePath: 'vue/teleport/index',
                permission: ['admin']
              }
            }, {
              path: 'transition',
              name: 'transition',
              component: () => import('@/views/vue/transition/index'),
              mate: {
                title: 'transition',
                icon: 'Vue',
                url: 'vue/transition',
                filePath: 'vue/transition/index',
                permission: ['admin']
              }
            }
          ]
        }, {
          path: 'systemConfig',
          name: 'systemConfig',
          component: () => import('@/views/systemConfig/index'),
          mate: {
            title: '系统配置',
            icon: 'shezhiziduan',
            filePath: 'systemConfig/index',
            url: 'systemConfig',
            permission: ['superAdmin', "admin"]
          }
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: () => import("@/views/login/index"),
      mate: {
        icon: 'icon2',
        url: 'login',
        filePath: 'login/index',
      }
    }, {
      path: '/404',
      name: '404',
      component: () => import("@/views/404/index"),
      mate: {
        icon: 'icon404',
        url: '404',
        filePath: '404/index',
      }
    }, {
      path: '/403',
      name: '403',
      component: () => import("@/views/403/index"),
      mate: {
        icon: 'icon403',
        url: '403',
        filePath: '403/index',
      }
    }
  ]
});

export default router;
