<template>
  <div
    class="layOut"
    :style="{ '--theme': checked ? 'invert(1) hue-rotate(180deg)' : '' }"
  >
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <!-- logo -->
        <div class="logo" style="text-align: left; display: flex">
          <img src="@/assets/img/logo.png" alt="" />
          <span class="logoTitle">hello vue3</span>
        </div>
        <!-- 菜单 -->
        <a-menu
          style="text-align: left"
          theme="dark"
          mode="inline"
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
        >
          <template v-for="item in router" :key="item.path">
            <!-- 无 children 路由 -->
            <router-link :to="`/${item.path}`">
              <a-menu-item v-if="!!!item.children" :key="item.name">
                <SvgIcon :iconClass="item.mate.icon"></SvgIcon>
                <span v-if="!collapsed" style="margin-left: 10px">{{
                  item.mate.title
                }}</span>
              </a-menu-item>
            </router-link>
            <!-- children 路由长度为 1 隐藏父级菜单-->
            <div
              v-if="item?.children?.length === 1"
              :key="item.children[0].name"
            >
              <router-link :to="`/${item.children[0].mate.url}`">
                <a-menu-item>
                  <SvgIcon :iconClass="item.children[0].mate.icon"></SvgIcon>
                  <span v-if="!collapsed" style="margin-left: 10px">{{
                    item.children[0].mate.title
                  }}</span>
                </a-menu-item>
              </router-link>
            </div>
            <!-- 路由的 children 大于 1 显示父级菜单-->
            <a-sub-menu
              v-if="item?.children?.length > 1"
              :key="item.name"
              style="color: #1890ff"
            >
              <template #title>
                <SvgIcon
                  :iconClass="item.mate.icon"
                  style="fill: rgba(255, 255, 255, 0.65)"
                ></SvgIcon>
                <span
                  v-if="!collapsed"
                  style="margin-left: 10px; color: rgba(255, 255, 255, 0.65)"
                  >{{ item.mate.title }}</span
                >
              </template>
              <div v-for="tem in item.children" :key="tem.name">
                <router-link :to="`/${tem.mate.url}`">
                  <a-menu-item key="tem.name">
                    <SvgIcon :iconClass="tem.mate.icon"></SvgIcon>
                    <span v-if="!collapsed" style="margin-left: 10px">{{
                      tem.mate.title
                    }}</span>
                  </a-menu-item>
                </router-link>
              </div>
            </a-sub-menu>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <!-- layout 头部 -->
        <a-layout-header
          style="
            background: #fff;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0px;
            box-shadow: 0 5px 5px #f5f8f9;
          "
        >
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="trigger"
          />
          <menu-fold-outlined v-else class="trigger" @click="trigger" />
          <span
            style="
              padding: 0px 24px;
              display: flex;
              align-items: center;
              height: 64px;
            "
          >
            <a-switch
              checked-children="暗"
              un-checked-children="亮"
              v-model:checked="checked"
            />
            <a-popover>
              <template #content>
                <span>{{ fullscreen ? "退出全屏" : "全屏" }}</span>
              </template>
              <FullscreenOutlined
                v-if="!fullscreen"
                style="font-size: 30px; padding: 0px 24px; cursor: pointer"
                @click="handleFullScreen"
              />
              <FullscreenExitOutlined
                v-else
                style="font-size: 30px; padding: 0px 24px; cursor: pointer"
                @click="handleFullScreen"
              />
            </a-popover>
            <a-avatar size="large" style="cursor: pointer; margin-right: 24px">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <span style="color: #000; font-weight: 700"> admin </span>
          </span>
        </a-layout-header>
        <!-- layout 展示主体 -->
        <a-layout-content
          :style="{
            margin: '24px 16px 0px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
            textAlign: 'left',
            overflow: 'auto',
          }"
        >
          <router-view />
        </a-layout-content>
        <a-layout-footer :style="{ padding: '0px 24px' }"
          >Powered by &copy; liyongqiang</a-layout-footer
        >
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import { ref, inject } from "vue";
export default {
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
  },
  name: "layOut",
  props: {},
  setup() {
    // 是否开启暗黑模式
    const checked = inject("themeSymbol");
    const changeTheme = inject("changeTheme");
    changeTheme(checked);
    // 是否全屏
    const fullscreen = ref(false);
    return {
      checked,
      fullscreen,
    };
  },
  data() {
    return {
      // 合并侧边栏
      collapsed: false,
      openKeys: [],
      selectedKeys: ["index"],
      // 路由
      router: null,
    };
  },
  mounted() {
    this.router = this.$store.state.user.router;
    // console.log(this.router);
  },
  methods: {
    trigger() {
      this.collapsed = !this.collapsed;
    },
    // 全屏退出全屏
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>

<style>
.layOut,
.ant-layout {
  height: 100vh;
}
.logoTitle {
  min-width: 0px;
  width: 119px;
  max-width: 119px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  height: 32px;
  line-height: 32px;
  display: inline-block;
}
/* .ant-layout-sider {
  background: #fff;
} */

.ant-menu-submenu-arrow::before,
.ant-menu-submenu-arrow::after {
  border-color: #1890ff;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
}

.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
  padding: 0 16px !important;
  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    border-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    padding 1s cubic-bezier(0.25, 0.8, 0.5, 1) 1s;
}
img,
video {
  filter: var(--theme);
}
</style>
