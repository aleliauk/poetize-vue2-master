import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
    children: [
      // 首页
      {
        path: "/",
        name: "index",
        component: () => import("@/views/index.vue"),
      },

      // 文章
      {
        path: "/article",
        name: "article",
        component: () => import("../views/article"),
      },
      // 文章——归档
      {
        path: "/article/archives",
        name: "archives",
        component: () => import("@/views/blog/article/archives.vue"),
        meta: {
          keepAlive: true, //需要被缓存
        },
      },
      // 文章——标签
      {
        path: "/article/tags",
        name: "tags",
        component: () => import("@/views/blog/article/tags.vue"),
        meta: {
          keepAlive: true, //需要被缓存
        },
      },
      // 文章——分类
      {
        path: "/article/categories",
        name: "categories",
        component: () => import("@/views/blog/article/categories.vue"),
        meta: {
          keepAlive: true, //需要被缓存
        },
      },

      // 休闲——八音盒
      {
        path: "/recreation/music",
        name: "music",
        component: () => import("@/views/blog/recreation/music.vue"),
      },
      // // 休闲——影院
      // {
      //   path: "/recreation/movies",
      //   name: "movies",
      //   component: () => import("@/views/blog/recreation/movies.vue"),
      // },
      // // 休闲——游戏
      // {
      //   path: "/recreation/games",
      //   name: "games",
      //   component: () => import("@/views/blog/recreation/games.vue"),
      // },

      // // 八宝箱——画廊
      // {
      //   path: "/box/gallery",
      //   name: "gallery",
      //   component: () => import("@/views/blog/box/gallery.vue"),
      // },
      // // 八宝箱——动画
      // {
      //   path: "/box/animation",
      //   name: "animation",
      //   component: () => import("@/views/blog/box/animation.vue"),
      // },
      // 八宝箱——网址导航
      {
        path: "/box/nav",
        name: "nav",
        component: () => import("@/views/blog/box/nav.vue"),
      },

      // 社交——朋友圈
      {
        path: "/social/fcircle",
        name: "fcircle",
        component: () => import("@/views/blog/social/fcircle.vue"),
      },
      // 社交——留言板
      {
        path: "/social/message",
        name: "message",
        component: () => import("@/views/blog/social/message.vue"),
      },
      // 社交——友人帐
      {
        path: "/social/friend",
        name: "friend",
        component: () => import("@/views/blog/social/friend.vue"),
      },

      // // 网站——网站统计
      // {
      //   path: "/site/webstatistics",
      //   name: "webstatistics",
      //   component: () => import("@/views/blog/site/webStatistics.vue"),
      // },
      // // 网站——文章统计
      // {
      //   path: "/site/articlestatistics",
      //   name: "articlestatistics",
      //   component: () => import("@/views/blog/site/articleStatistics.vue"),
      // },
      // // 网站——旧时光
      // {
      //   path: "/site/time",
      //   name: "time",
      //   component: () => import("@/views/blog/site/time.vue"),
      // },

      // 个人——唠叨
      // {
      //   path: "/personal/prattle",
      //   name: "prattle",
      //   component: () => import("@/views/blog/personal/prattle.vue"),
      // },
      // 个人——恋爱小屋
      {
        path: "/personal/love",
        name: "love",
        component: () => import("@/views/blog/personal/love.vue"),
      },
      // 个人——关于
      {
        path: "/personal/about",
        name: "about",
        component: () => import("@/views/blog/personal/about.vue"),
      },

      // 文章列表
      {
        path: "/sort",
        name: "sort",
        component: () => import("../views/sort.vue"),
      },

      // 个人中心
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user.vue"),
      },
      // {
      //   path: "/letter",
      //   name: "letter",
      //   component: () => import("../views/letter.vue"),
      // },
    ],
  },
  // admin后台管理
  {
    path: "/admin",
    redirect: "/main",
    meta: { requiresAuth: true },
    component: () => import("../views/admin/admin"),
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("../views/admin/main"),
      },
      {
        path: "/webEdit",
        name: "webEdit",
        component: () => import("../views/admin/webEdit"),
      },
      {
        path: "/userList",
        name: "userList",
        component: () => import("../views/admin/userList"),
      },
      {
        path: "/postList",
        name: "postList",
        component: () => import("../views/admin/postList"),
      },
      {
        path: "/postEdit",
        name: "postEdit",
        component: () => import("../views/admin/postEdit"),
      },
      {
        path: "/sortList",
        name: "sortList",
        component: () => import("../views/admin/sortList"),
      },
      {
        path: "/commentList",
        name: "commentList",
        component: () => import("../views/admin/commentList"),
      },
      {
        path: "/treeHoleList",
        name: "treeHoleList",
        component: () => import("../views/admin/treeHoleList"),
      },
      {
        path: "/resourceList",
        name: "resourceList",
        component: () => import("../views/admin/resourceList"),
      },
      {
        path: "/loveList",
        name: "loveList",
        component: () => import("../views/admin/loveList"),
      },
      {
        path: "/resourcePathList",
        name: "resourcePathList",
        component: () => import("../views/admin/resourcePathList"),
      },
    ],
  },
  // 后台登录页面
  {
    path: "/verify",
    name: "verify",
    component: () => import("../views/admin/verify"),
  },
  // 404
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404/index.vue"),
  },
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  store.commit("updateActiveIndex", to.path);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!Boolean(localStorage.getItem("adminToken"))) {
      next({
        path: "/verify",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
