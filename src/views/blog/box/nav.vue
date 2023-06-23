<template>
  <div style="background: var(--background)">
    <!-- ---封面
      <div class="favorite-header my-animation-slide-top">
        ---背景图片
        <video class="index-video"
               autoplay="autoplay"
               muted="muted"
               loop="loop"
               :src="$constant.favoriteVideo">
        </video>
        <div style="position: absolute;left: 0;top: 0;padding: 20px">
          ---标题
          <div style="color: var(--white);margin: 10px">
            <div>
              记录
            </div>
            <div style="font-size: 36px;font-weight: bold;line-height: 2">
              百宝箱
            </div>
          </div>
          <div class="card-container">
            ---收藏夹
            <div @click="changeFavorite(1)"
                 class="card-item">
              <div class="favorite-image"></div>
              <div style="position: absolute;left: 0;top: 0;padding: 12px 25px 15px">
                <div class="card-name">
                  收藏夹
                </div>
                <div class="card-desc">
                  将 aleliauk.top 添加到您的收藏夹吧
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

    <!-- 两句诗 -->
    <div class="my-animation-slide-top">
      <twoPoem :isWangzhi="true"></twoPoem>
    </div>


    <!-- 内容 -->
    <div class="page_main my-animation-slide-bottom">
      <div class="contianer border_style">
        <!-- 收藏夹 -->
        <div v-show="card === 1 && !$common.isEmpty(collects)">
          <div v-for="(value, key) in collects" :key="key" style="margin-top: 20px">
            <div class="collect-classify">{{ key }}</div>
            <div class="favorite-item-wrap">
              <div v-for="(item, index) in value" :key="index" @click="toUrl(item.url)" class="favorite-item">
                <div class="favorite-item-image">
                  <el-image :src="item.cover" fit="cover" v-animate="'my-animation-imgblur'">
                  </el-image>
                </div>
                <div class="favorite-item-info">
                  <div class="favorite-item-icon">
                    <el-avatar :size="35" :src="item.icon" v-animate="'my-animation-imgblur'">
                    </el-avatar>
                  </div>
                  <div class="favorite-item-msg">
                    <span class="favorite-item-title">{{ item.title }}</span>
                    <span class="favorite-item-introduction">{{ item.introduction }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div style="background: var(--favoriteBg)">
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
const twoPoem = () => import("@/views/common/twoPoem");
const myFooter = () => import('@/views/common/myFooter')

export default {
  components: {
    twoPoem,
    myFooter,
  },

  data () {
    return {
      card: null,
      collects: {},
    }
  },

  computed: {},

  watch: {},

  created () {
    this.card = 1
    this.getCollect()
  },

  mounted () { },

  methods: {
    toUrl (url) {
      window.open(url)
    },
    changeFavorite (card) {
      this.card = card
      if (card === 1) {
        if (this.$common.isEmpty(this.collects)) {
          this.getCollect()
        }
      }
    },
    getCollect () {
      this.$http
        .get(this.$constant.baseURL + '/webInfo/listCollect')
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.collects = res.data
          }
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: 'error',
          })
        })
    },
  },
}
</script>

<style scoped>
.contianer {
  padding: 20px 40px 40px;
}

@media screen and (max-width: 768px) {
  .contianer {
    padding: 0 20px 20px;
  }
}

.collect-classify {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.favorite-item-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.favorite-item {
  margin: 8px;
  padding: 5px;
  width: calc(100% / 5 - 16px);
  height: 250px;
  background: var(--navCardBG);
  border-radius: 18px;
  border: 1px solid var(--navCardBorder);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.favorite-item:hover {
  background: rgba(57, 197, 187, 0.7);
}

.favorite-item-image .el-image {
  width: 100%;
  height: 165px;
  border-radius: 18px;
  transition: all 0.3s ease-in-out;
}

.favorite-item:hover .favorite-item-image .el-image {
  transform: scale(1.02);
}

.favorite-item-info {
  margin-top: 3px;
  display: flex;
}

.favorite-item-icon {
  margin-right: 10px;
}

.favorite-item-msg {
  position: relative;
  top: -3px;
  display: flex;
  flex-direction: column;
}

.favorite-item-title {
  font-weight: 700;
}

.favorite-item-introduction {
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


@media screen and (max-width: 1200px) {
  .favorite-item {
    width: calc(100% / 4 - 16px);
  }
}

@media screen and (max-width: 980px) {
  .favorite-item {
    width: calc(100% / 3 - 16px);
  }
}

@media screen and (max-width: 750px) {
  .favorite-item {
    width: calc(100% / 2 - 16px);
  }
}

@media screen and (max-width: 500px) {
  .favorite-item {
    width: calc(100% - 16px);
  }
}
</style>
