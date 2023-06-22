import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toolbar: {
      visible: false,
      enter: true,
    },
    sortInfo: [],
    currentUser: {},
    currentAdmin: {},
    webInfo: {
      webName: "",
      webTitle: [],
      notices: [],
      footer: "",
      backgroundImage: "",
      avatar: "",
    },
    activeIndex: "",
    information: [
      {
        id: 1,
        title: "用户",
        number: null,
        icon: "el-icon-user",
        bgc: "#fa708b",
      },
      {
        id: 2,
        title: "分类",
        number: null,
        icon: "el-icon-notebook-2",
        bgc: "#38acf5",
      },
      {
        id: 3,
        title: "文章",
        number: null,
        icon: "el-icon-collection",
        bgc: "#EF794F",
      },
      {
        id: 4,
        title: "留言",
        number: null,
        icon: "el-icon-chat-dot-square",
        bgc: "#8e6beb",
      },
      {
        id: 5,
        title: "总访问量",
        number: null,
        icon: "el-icon-view",
        bgc: "#3fc8a9",
      },
    ],
    holle: "",
    echatrsList: [],
    isDark: null,
  },
  getters: {
    articleTotal: (state) => {
      if (state.sortInfo !== null && state.sortInfo.length !== 0) {
        if (state.sortInfo.length === 1) {
          return state.sortInfo[0].countOfSort;
        } else {
          return state.sortInfo.reduce((prev, curr) => {
            if (typeof prev === "number") {
              return prev + curr.countOfSort;
            } else {
              return prev.countOfSort + curr.countOfSort;
            }
          });
        }
      } else {
        return 0;
      }
    },
    navigationBar: (state) => {
      if (state.sortInfo !== null && state.sortInfo.length !== 0) {
        return state.sortInfo.filter((f) => f.sortType === 0);
      } else {
        return [];
      }
    },
    tagsTotal: (state) => {
      if (state.sortInfo !== null && state.sortInfo.length !== 0) {
        return state.sortInfo.reduce((acc, cru) => {
          return (cru.labels.length += acc);
        }, 0);
      }
    },
  },
  mutations: {
    updataIsDark(state, isDark) {
      state.isDark = isDark;
    },
    changeToolbarStatus(state, toolbarState) {
      state.toolbar = toolbarState;
    },
    loadSortInfo(state, sortInfo) {
      if (sortInfo !== null && sortInfo.length !== 0) {
        state.sortInfo = sortInfo.sort((s1, s2) => s1.priority - s2.priority);
      }
    },
    loadCurrentUser(state, user) {
      state.currentUser = user;
    },
    loadCurrentAdmin(state, user) {
      state.currentAdmin = user;
    },
    loadWebInfo(state, webInfo) {
      webInfo.webTitle = webInfo.webTitle.split("");
      webInfo.notices = JSON.parse(webInfo.notices);
      state.webInfo = webInfo;
    },
    updateActiveIndex(state, activeIndex) {
      state.activeIndex = activeIndex;
    },
    loadUserList(state, userTotal) {
      state.information[0].number = userTotal;
    },
    loadSortInfoList(state, sortInfoTotal) {
      state.information[1].number = sortInfoTotal;
    },
    loadArticleList(state, article) {
      state.information[2].number = article;
    },
    loadMessageList(state, messageTotal) {
      state.information[3].number = messageTotal;
    },
    loadpageView(state, pageViewTotal) {
      state.information[4].number = pageViewTotal;
    },
    loadHolleTime(state) {
      const hour = new Date().getHours();
      if (hour < 6) {
        state.holle = "凌晨好";
      } else if (hour < 9) {
        state.holle = "早上好";
      } else if (hour < 12) {
        state.holle = "上午好";
      } else if (hour < 14) {
        state.holle = "中午好";
      } else if (hour < 17) {
        state.holle = "下午好";
      } else if (hour < 19) {
        state.holle = "傍晚好";
      } else if (hour < 22) {
        state.holle = "晚上好";
      }
    },
    loadEchrats(state, echratsList) {
      state.echatrsList = echratsList;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
});
