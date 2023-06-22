<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             :default-active="activeIndex"
             text-color="#606266"
             active-text-color="#fff"
             background-color="#eef0f3"
             unique-opened
             menu-trigge="click"
             router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index"
                      :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs"
                          :index="subItem.index"
                          :key="subItem.index">
                <template slot="title">
                  {{ subItem.title }}
                </template>
                <el-menu-item v-for="threeItem in subItem.subs"
                              :key="threeItem.index"
                              :index="threeItem.index">
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else
                            :index="subItem.index"
                            :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index"
                        :key="item.index">
            <i :class="item.icon"></i>
            {{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          icon: 'el-icon-s-home',
          index: '/main',
          title: '系统首页',
        },
        {
          icon: 'el-icon-s-tools',
          index: '/webEdit',
          title: '网站设置',
        },
        {
          icon: 'el-icon-user-solid',
          index: '/userList',
          title: '用户管理',
        },
        {
          icon: 'el-icon-postcard',
          index: '/postList',
          title: '文章管理',
        },
        {
          icon: 'el-icon-notebook-2',
          index: '/sortList',
          title: '分类管理',
        },
        {
          icon: 'el-icon-edit-outline',
          index: '/commentList',
          title: '评论管理',
        },
        {
          icon: 'el-icon-s-comment',
          index: '/treeHoleList',
          title: '留言管理',
        },
        {
          icon: 'el-icon-paperclip',
          index: '/resourceList',
          title: '资源管理',
        },
        {
          icon: 'el-icon-bank-card',
          index: '/resourcePathList',
          title: '资源路径管理',
        },
        {
          icon: 'el-icon-sugar',
          index: '/loveList',
          title: '表白墙管理',
        },
      ],
    }
  },

  computed: {
    ...mapState({
      activeIndex: (state) => state.activeIndex,
    }),
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu {
  width: 240px;
  border: 0;
}

::v-deep .sidebar-el-menu .el-menu-item {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
}

::v-deep .sidebar-el-menu .el-menu-item i {
  margin-left: 20px;
  font-size: 20px;
}

::v-deep .sidebar-el-menu .is-active {
  background-color: #409eff !important;
}

.sidebar > ul {
  height: 100%;
}
</style>
