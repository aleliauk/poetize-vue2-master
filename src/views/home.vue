<template>
  <div>
    <!-- el过渡动画 -->
    <transition name="el-fade-in-linear">
      <!-- 导航栏 -->
      <div @mouseenter="hoverEnter = true" @mouseleave="hoverEnter = false"
        :class="[{ enter: toolbar.enter }, { hoverEnter: (hoverEnter || this.$route.path === '/favorite') && !toolbar.enter }]"
        class="toolbar-content myBetween">
        <!-- 网站名称 -->
        <div class="toolbar-title">
          <h2 @click="$router.push({ path: '/' })">{{ $store.state.webInfo.webName }}</h2>
        </div>

        <!-- 手机导航按钮 -->
        <div v-if="$common.mobile() || mobile" class="toolbar-mobile-menu" @click="toolbarDrawer = !toolbarDrawer"
          :class="{ enter: toolbar.enter }">
          <i class="el-icon-s-operation"></i>
        </div>

        <!-- PC导航列表 -->
        <!-- <div v-else>
          <ul class="scroll-menu">
            <li @click="$router.push({ path: '/' })">
              <div class="my-menu">
                🏡 <span>首页</span>
              </div>
            </li>

            <li v-for="(menu, index) in $store.getters.navigationBar"
              @click="$router.push({ path: '/sort', query: { sortId: menu.id, labelId: menu.labels[0].id } })"
              :key="index">
              <div class="my-menu">
                📒 <span>{{ menu.sortName }}</span>
              </div>
            </li>

            <li @click="$router.push({ path: '/love' })">
              <div class="my-menu">
                💋 <span>爱情买卖</span>
              </div>
            </li>

            <li @click="$router.push({ path: '/favorite' })">
              <div class="my-menu">
                🧰 <span>百宝箱</span>
              </div>
            </li>

            <li @click="goIm()">
              <div class="my-menu">
                💬 <span>聊天室</span>
              </div>
            </li>

            <li @click="$router.push({ path: '/funny' })">
              <div class="my-menu">
                🎺 <span>音乐馆</span>
              </div>
            </li>

            <li @click="$router.push({ path: '/message' })">
              <div class="my-menu">
                📪 <span>留言板</span>
              </div>
            </li>

            <li @click="$router.push({ path: '/friend' })">
              <div class="my-menu">
                💃 <span>友人帐</span>
              </div>
            </li>

            <li @click="$router.push({ path: '/about' })">
              <div class="my-menu">
                🐟 <span>关于</span>
              </div>
            </li>

            <li>
              <el-dropdown placement="bottom">
                <el-avatar class="user-avatar" :size="36" style="margin-top: 12px"
                  :src="!$common.isEmpty($store.state.currentUser) ? $store.state.currentUser.avatar : $store.state.webInfo.avatar">
                </el-avatar>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="$router.push({ path: '/user' })"
                    v-if="!$common.isEmpty($store.state.currentUser)">
                    <i class="fa fa-user-circle" aria-hidden="true"></i> <span>个人中心</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="logout()" v-if="!$common.isEmpty($store.state.currentUser)">
                    <i class="fa fa-sign-out" aria-hidden="true"></i> <span>退出</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="$router.push({ path: '/user' })"
                    v-if="$common.isEmpty($store.state.currentUser)">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> <span>登陆</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </div> -->

        <!-- PC导航列表 -->
        <PcMenus v-else @logout="logout" @goIm="goIm" @goChatGPT="goChatGPT" />


      </div>

    </transition>

    <div id="main-container">
      <router-view></router-view>
    </div>

    <!-- 回到顶部按钮 -->
    <div href="#" class="cd-top" v-if="!$common.mobile()" @click="toTop()"></div>

    <div class="toolButton">
      <div class="backTop" v-if="$common.mobile() && toolButton" @click="toTop()">
        <!-- 回到顶部按钮 -->
        <svg viewBox="0 0 1024 1024" width="50" height="50">
          <path
            d="M696.741825 447.714002c2.717387-214.485615-173.757803-312.227566-187.33574-320.371729-10.857551 5.430775-190.050127 103.168727-187.33274 320.371729-35.297037 24.435488-73.306463 65.1623-67.875688 135.752376 5.430775 70.589076 76.018851 119.460051 103.168726 116.745664 27.152875-2.716387 19.004713-21.7221 19.004713-21.7221l8.148162-38.011425s40.721814 59.732525 51.583363 59.732525h146.609927c13.574938 0 51.585363-59.732525 51.585363-59.732525l8.147162 38.011425s-8.147162 19.005713 19.004713 21.7221c27.148876 2.714388 97.738951-46.156588 103.168727-116.745664s-32.57965-111.316888-67.876688-135.752376z m-187.33574-2.713388c-5.426776 0-70.589076-2.717387-78.733239-78.737238 2.713388-73.306463 73.306463-78.733239 78.733239-81.450626 5.430775 0 76.02385 8.144163 78.736238 81.450626-8.143163 76.019851-73.305463 78.737238-78.736238 78.737238z m0 0"
            fill="#000000"></path>
          <path
            d="M423.602441 746.060699c6.47054-6.297579 12.823107-7.017417 21.629121-2.784372 34.520213 16.582259 70.232157 19.645568 107.031855 9.116944 8.118169-2.323476 15.974396-5.475765 23.598677-9.22392 13.712907-6.73648 26.003134 0.8878 26.080116 16.13936 0.109975 22.574907-0.024994 45.142816 0.080982 67.709725 0.031993 7.464316-2.277486 13.322995-9.44387 16.608254-7.277358 3.333248-13.765895 1.961558-19.526595-3.264264-3.653176-3.313253-7.063407-6.897444-10.634601-10.304675-6.563519-6.259588-6.676494-6.25259-10.625603 1.603638-8.437097 16.80121-16.821205 33.623415-25.257302 50.423625-2.489438 4.953882-5.706713 9.196925-11.411426 10.775569-8.355115 2.315478-15.772442-1.070758-20.272427-9.867774-8.774021-17.15313-17.269104-34.453228-25.918153-51.669344-3.750154-7.469315-3.9891-7.479313-10.141712-1.514658-3.715162 3.602187-7.31435 7.326347-11.142486 10.800563-5.571743 5.060858-11.934308 6.269586-18.936728 3.207277-6.82746-2.984327-9.869774-8.483086-9.892769-15.685462-0.070984-23.506697-0.041991-47.018393-0.020995-70.532089 0.007998-4.679944 1.46467-8.785018 4.803916-11.538397z"
            fill="#000000"></path>
        </svg>
      </div>

      <el-popover placement="left" :close-delay="500" trigger="hover">
        <div slot="reference">
          <i class="fa fa-cog iconRotate" aria-hidden="true"></i>
        </div>
        <div class="my-setting">
          <div>
            <!-- 太阳按钮 -->
            <i v-if="$store.state.isDark" class="el-icon-sunny iconRotate" @click="changeColor()"></i>
            <!-- 月亮按钮 -->
            <i v-else class="fa fa-moon-o" aria-hidden="true" @click="changeColor()"></i>
          </div>
          <div>
            <!-- 雪花按钮(默认) -->
            <i v-if="!mouseAnimation" class="fa fa-snowflake-o" aria-hidden="true" @click="changeMouseAnimation()"></i>
            <!-- 雪花按钮(特效) -->
            <svg v-else @click="changeMouseAnimation()" t="1687306182645" style="vertical-align: middle;"
              class="icon iconRotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3019"
              width="25" height="25">
              <path d="M496 30.4L472 72v880l24 41.6 24-41.6V72z" fill="#59C2E0" p-id="3020"></path>
              <path
                d="M496 240l-96-64v-48l96 64zM496 336L368 256v-48l128 80zM496 240l96-64v-48l-96 64zM496 336l128-80v-48L496 288zM496 784l-96 64v48l96-64zM496 688L368 768v48l128-80zM496 784l96 64v48l-96-64zM496 688l128 80v48L496 736z"
                fill="#59C2E0" p-id="3021"></path>
              <path d="M79.2 752.8h48l761.6-440 24-41.6h-48l-761.6 440z" fill="#59C2E0" p-id="3022"></path>
              <path d="M260 648l-7.2 115.2-41.6 24 7.2-115.2zM343.2 600l-5.6 151.2-41.6 24 5.6-151.2z" fill="#59C2E0"
                p-id="3023"></path>
              <path
                d="M260 648l-103.2-51.2-41.6 24L218.4 672zM343.2 600l-133.6-70.4-41.6 24L301.6 624zM731.2 376l103.2 51.2 41.6-24L772.8 352zM648 424l133.6 71.2 41.6-24L689.6 400z"
                fill="#59C2E0" p-id="3024"></path>
              <path d="M731.2 376l7.2-115.2 41.6-24-7.2 115.2zM648 424l5.6-150.4 41.6-24-5.6 150.4z" fill="#59C2E0"
                p-id="3025"></path>
              <path d="M912.8 752.8h-48l-761.6-440-24-41.6h48l761.6 440z" fill="#59C2E0" p-id="3026"></path>
              <path d="M732 648l7.2 115.2 41.6 24-7.2-115.2zM648.8 600l5.6 151.2 41.6 24-5.6-151.2z" fill="#59C2E0"
                p-id="3027"></path>
              <path
                d="M732 648l103.2-51.2 41.6 24L773.6 672zM648.8 600l133.6-70.4 41.6 24L690.4 624zM260.8 376l-103.2 51.2-41.6-24L219.2 352zM344 424l-133.6 71.2-41.6-24L302.4 400zM260.8 376l-7.2-115.2-41.6-24 7.2 115.2z"
                fill="#59C2E0" p-id="3028"></path>
              <path d="M344 424l-5.6-150.4-41.6-24 5.6 150.4z" fill="#59C2E0" p-id="3029"></path>
              <path
                d="M496 663.2l-131.2-75.2V436.8L496 360.8l131.2 75.2v151.2L496 663.2zM404.8 564.8L496 616.8l91.2-52.8v-104L496 407.2l-91.2 52.8v104.8z"
                fill="#59C2E0" p-id="3030"></path>
            </svg>
          </div>
        </div>
      </el-popover>
    </div>

    <!-- 点击动画 -->
    <canvas v-if="mouseAnimation" id="mousedown" style="position:fixed;left:0;top:0;pointer-events:none;z-index: 1000">
    </canvas>

    <!-- 手机端导航列表 -->
    <el-drawer :visible.sync="toolbarDrawer" :show-close="false" size="65%" custom-class="toolbarDrawer" title="欢迎光临"
      direction="ltr">
      <!-- <div>
        <ul class="small-menu">
          <li @click="smallMenu({ path: '/' })">
            <div>
              🏡 <span>首页</span>
            </div>
          </li>

          <li v-for="(menu, index) in $store.getters.navigationBar"
            @click="smallMenu({ path: '/sort', query: { sortId: menu.id, labelId: menu.labels[0].id } })" :key="index">
            <div>
              📒 <span>{{ menu.sortName }}</span>
            </div>
          </li>

          爱情买卖
          <li @click="smallMenu({ path: '/love' })">
            <div>
              💋 <span>爱情买卖</span>
            </div>
          </li>

          百宝箱
          <li @click="smallMenu({ path: '/favorite' })">
            <div>
              🧰 <span>百宝箱</span>
            </div>
          </li>

          聊天室
          <li @click="goIm()">
            <div>
              💬 <span>聊天室</span>
            </div>
          </li>
          音乐
          <li @click="smallMenu({ path: '/funny' })">
            <div>
              🎺 <span>音乐馆</span>
            </div>
          </li>
          留言
          <li @click="smallMenu({ path: '/message' })">
            <div>
              📪 <span>留言板</span>
            </div>
          </li>
          友人帐
          <li @click="smallMenu({ path: '/friend' })">
            <div>
              💃 <span>友人帐</span>
            </div>
          </li>

          关于
          <li @click="smallMenu({ path: '/about' })">
            <div>
              🐟 <span>关于</span>
            </div>
          </li>

          <template v-if="$common.isEmpty($store.state.currentUser)">
            <li @click="smallMenu({ path: '/user' })">
              <div>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                <span>&nbsp;登录</span>
              </div>
            </li>
          </template>
          <template v-else>
            <li @click="smallMenu({ path: '/user' })">
              <div>
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <span>&nbsp;个人中心</span>
              </div>
            </li>
            <li @click="smallMenuLogout()">
              <div>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                <span>&nbsp;退出</span>
              </div>
            </li>
          </template>
        </ul>
      </div> -->

      <!-- 手机端导航列表 -->
      <MobileMenus @smallMenuLogout="smallMenuLogout" @goIm="goIm" @goChatGPT="goChatGPT" />
    </el-drawer>
  </div>
</template>

<script>
import mousedown from '../utils/mousedown'
import PcMenus from '@/views/common/menus/pcMenus.vue'
import MobileMenus from '@/views/common/menus/mobileMenus.vue'

export default {
  components: {
    PcMenus,
    MobileMenus
  },
  data () {
    return {
      toolButton: false,
      hoverEnter: false,
      mouseAnimation: false,
      scrollTop: 0,
      toolbarDrawer: false,
      mobile: false,
    }
  },
  mounted () {
    if (this.mouseAnimation) {
      mousedown()
    }
    window.addEventListener('scroll', this.onScrollPage)
    let root = document.querySelector(':root')
    if (this.isDaylight()) {
      // 深色模式
      this.$store.state.isDark = true
      root.style.setProperty('--background', '#272727')
      root.style.setProperty('--fontColor', 'white')
      root.style.setProperty('--borderColor', '#4F4F4F')
      root.style.setProperty('--borderHoverColor', 'black')
      root.style.setProperty('--articleFontColor', '#E4E4E4')
      root.style.setProperty('--articleGreyFontColor', '#D4D4D4')
      root.style.setProperty('--commentContent', '#D4D4D4')
      root.style.setProperty('--favoriteBg', '#1e1e1e')
      root.style.setProperty('--navCardBG', '#343434e8')
      root.style.setProperty('--navCardBorder', '#525252')
      root.style.setProperty('--musicHoverBG', '#FFFFFF14')
      root.style.setProperty('--musicFontColor', '#d3d3d3')
    } else {
      // 浅色模式
      this.$store.state.isDark = false
      root.style.setProperty('--background', 'white')
      root.style.setProperty('--fontColor', 'black')
      root.style.setProperty('--borderColor', 'rgba(0, 0, 0, 0.5)')
      root.style.setProperty('--borderHoverColor', 'rgba(110, 110, 110, 0.4)')
      root.style.setProperty('--articleFontColor', '#1F1F1F')
      root.style.setProperty('--articleGreyFontColor', '#616161')
      root.style.setProperty('--commentContent', '#F7F9FE')
      root.style.setProperty('--favoriteBg', '#f7f9fe')
      root.style.setProperty('--navCardBG', '#e2f2f2')
      root.style.setProperty('--navCardBorder', '#d3d3d3')
      root.style.setProperty('--musicHoverBG', '#f2f3f5')
      root.style.setProperty('--musicFontColor', '#525252')
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScrollPage)
  },
  watch: {
    scrollTop (scrollTop, oldScrollTop) {
      //如果滑动距离超过屏幕高度三分之一视为进入页面，背景改为白色
      let enter = scrollTop > 0
      const top = scrollTop - oldScrollTop < 0
      let isShow = scrollTop - window.innerHeight > 30
      this.toolButton = isShow
      if (isShow && !this.$common.mobile()) {
        if (window.innerHeight > 950) {
          $('.cd-top').css('top', '0')
        } else {
          $('.cd-top').css('top', window.innerHeight - 950 + 'px')
        }
      } else if (!isShow && !this.$common.mobile()) {
        $('.cd-top').css('top', '-900px')
      }

      //导航栏显示与颜色
      let toolbarStatus = {
        enter: enter,
        visible: top,
      }
      this.$store.commit('changeToolbarStatus', toolbarStatus)
    },
  },
  created () {
    let toolbarStatus = {
      enter: false,
      visible: true,
    }
    this.getWebInfo()
    this.getSortInfo()
    this.$store.commit('changeToolbarStatus', toolbarStatus)

    this.mobile = document.body.clientWidth < 1150

    window.addEventListener('resize', () => {
      let docWidth = document.body.clientWidth
      if (docWidth < 1150) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    })
  },
  computed: {
    toolbar () {
      return this.$store.state.toolbar
    },
  },
  methods: {
    smallMenu (path) {
      this.$router.push(path)
      this.toolbarDrawer = false
    },

    smallMenuLogout () {
      this.logout()
      this.toolbarDrawer = false
    },

    // 跳转到chatgpt
    goChatGPT () {
      if (this.$common.isEmpty(this.$store.state.currentUser)) {
        this.$message({
          message: '请先登录！',
          type: 'error',
        })
      } 
      else {
        window.open("https://chatgpt.aleliauk.top", "_blank");
      }
    },

    // 跳转到聊天室
    goIm () {
      if (this.$common.isEmpty(this.$store.state.currentUser)) {
        this.$message({
          message: '请先登录！',
          type: 'error',
        })
      } else {
        let userToken = this.$common.encrypt(localStorage.getItem('userToken'))
        window.open(this.$constant.imBaseURL + '?userToken=' + userToken)
      }
    },
    logout () {
      this.$http
        .get(this.$constant.baseURL + '/user/logout')
        .then((res) => { })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: 'error',
          })
        })
      this.$store.commit('loadCurrentUser', {})
      localStorage.removeItem('userToken')
      this.$router.push({ path: '/' })
    },
    getWebInfo () {
      this.$http
        .get(this.$constant.baseURL + '/webInfo/getWebInfo')
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.$store.commit('loadWebInfo', res.data)
          }
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: 'error',
          })
        })
    },
    getSortInfo () {
      this.$http
        .get(this.$constant.baseURL + '/webInfo/getSortInfo')
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.$store.commit('loadSortInfo', res.data)
          }
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: 'error',
          })
        })
    },
    changeColor () {
      this.$store.commit('updataIsDark', !this.$store.state.isDark)
      let root = document.querySelector(':root')

      if (this.$store.state.isDark) {
        // 深色模式
        root.style.setProperty('--background', '#272727')
        root.style.setProperty('--fontColor', 'white')
        root.style.setProperty('--borderColor', '#4F4F4F')
        root.style.setProperty('--borderHoverColor', 'black')
        root.style.setProperty('--articleFontColor', '#E4E4E4')
        root.style.setProperty('--articleGreyFontColor', '#D4D4D4')
        root.style.setProperty('--commentContent', '#616161')
        root.style.setProperty('--favoriteBg', '#1e1e1e')
        root.style.setProperty('--navCardBG', '#343434e8')
        root.style.setProperty('--navCardBorder', '#525252')
        root.style.setProperty('--musicHoverBG', '#FFFFFF14')
        root.style.setProperty('--musicFontColor', '#d3d3d3')
      } else {
        // 浅色模式
        root.style.setProperty('--background', 'white')
        root.style.setProperty('--fontColor', 'black')
        root.style.setProperty('--borderColor', 'rgba(0, 0, 0, 0.5)')
        root.style.setProperty('--borderHoverColor', 'rgba(110, 110, 110, 0.4)')
        root.style.setProperty('--articleFontColor', '#1F1F1F')
        root.style.setProperty('--articleGreyFontColor', '#616161')
        root.style.setProperty('--commentContent', '#F7F9FE')
        root.style.setProperty('--favoriteBg', '#f7f9fe')
        root.style.setProperty('--navCardBG', '#e2f2f2')
        root.style.setProperty('--navCardBorder', '#d3d3d3')
        root.style.setProperty('--musicHoverBG', '#f2f3f5')
        root.style.setProperty('--musicFontColor', '#525252')
      }
    },
    toTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    onScrollPage () {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
    },
    isDaylight () {
      let currDate = new Date()
      if (currDate.getHours() > 22 || currDate.getHours() < 7) {
        return true
      } else {
        return false
      }
    },
    changeMouseAnimation () {
      this.mouseAnimation = !this.mouseAnimation
      if (this.mouseAnimation) {
        this.$nextTick(() => {
          mousedown()
        })
      }
    },
  },
}
</script>

<style scoped>
.toolbar-content {
  width: 100%;
  height: 60px;
  color: var(--white);
  padding: 0 50px;
  /* 固定位置，不随滚动条滚动 */
  position: fixed;
  z-index: 100;
  /* 禁止选中文字 */
  user-select: none;
  transition: all 0.3s ease-in-out;
}

.toolbar-content.enter {
  background: var(--toolbarBackground);
  color: var(--toolbarFont);
  opacity: 0.95;
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
}

/* .toolbar-content.hoverEnter {
  background: var(--translucent);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
} */

.toolbar-title {
  width: 120px;
  cursor: pointer;
}

.toolbar-mobile-menu {
  font-size: 30px;
  margin-right: 15px;
  cursor: pointer;
}

.el-dropdown {
  font-size: unset;
  color: unset;
}

/* .el-popper[x-placement^='bottom'] {
  margin-top: -8px;
} */


.el-dropdown-menu {
  padding: 5px 0;
}

.el-dropdown-menu__item {
  font-size: unset;
}

.el-dropdown-menu__item:hover {
  background-color: var(--white);
  color: var(--themeColor);
}

.toolButton {
  width: 25px;
  position: fixed;
  right: 3vh;
  bottom: 3vh;
  animation: slide-bottom 0.5s ease-in-out both;
  z-index: 100;
  cursor: pointer;
  font-size: 25px;
}

.my-setting {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  cursor: pointer;
  font-size: 20px;
}

.my-setting i {
  padding: 5px;
}

.my-setting i:hover {
  color: var(--themeBackground);
}

.cd-top {
  background: var(--toTop) no-repeat center;
  position: fixed;
  right: 5vh;
  top: -900px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background-size: contain;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.backTop {
  transition: all 0.3s ease-in;
  position: relative;
  top: 0;
  left: -13px;
}

.backTop:hover {
  top: -10px;
}

@media screen and (max-width: 550px) {
  .toolbar-content {
    padding: 0 20px;
  }
}
</style>
