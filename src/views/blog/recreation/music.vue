<template>
  <div style="background: var(--background)">
    <!-- 两句诗 -->
    <div class="my-animation-slide-top">
      <twoPoem :isBayinhe="true"></twoPoem>
    </div>

    <div class="page_main my-animation-slide-bottom">
      <div class="contianer border_style">
        <!-- <div v-for="(item, index) in funnys" :key="index">
          <div style="display: flex">
            <span class="iconRotate">
              <svg viewBox="0 0 1024 1024" width="28" height="28">
                <path
                  d="M502.272 948.224l-427.008-427.008c-1.536-1.536-1.536-3.584 0-4.608l427.008-427.008c1.536-1.536 3.584-1.536 4.608 0l427.008 427.008c1.536 1.536 1.536 3.584 0 4.608L506.88 948.224c-1.536 1.024-3.584 1.024-4.608 0z"
                  fill="#C9E6FF"></path>
                <path
                  d="M504.32 956.416c-2.56 0-5.632-1.024-7.68-3.072l-427.008-427.008c-4.096-4.096-4.096-11.264 0-15.36L496.64 83.456c4.096-4.096 11.264-4.096 15.36 0l427.008 427.008c4.096 4.096 4.096 11.264 0 15.36L512 953.344c-2.048 2.048-4.608 3.072-7.68 3.072z m-420.864-437.76l420.864 420.864 420.864-420.864L504.32 97.28l-420.864 421.376z"
                  fill="#2E66FF"></path>
                <path
                  d="M497.152 97.792l13.312 414.208 395.264-395.264c5.632-5.632 2.048-15.872-6.144-16.384L506.88 88.064c-5.632-0.512-9.728 4.096-9.728 9.728z"
                  fill="#FFFFFF"></path>
                <path
                  d="M503.296 529.92l-13.824-432.128c0-4.608 1.536-9.216 5.12-12.8s7.68-5.12 12.8-5.12l392.704 12.8c7.168 0 12.8 4.608 15.36 10.752 2.56 6.656 1.024 13.312-3.584 18.432l-408.576 408.064z m1.536-432.64l12.8 396.8 382.464-382.464c0.512-0.512 0.512-1.024 0.512-2.048-0.512-0.512-1.024-1.024-1.536-1.024l-392.704-12.8c-0.512 0-1.024 0.512-1.536 0.512v1.024z"
                  fill="#2E66FF"></path>
                <path
                  d="M522.24 946.688L508.416 532.48l-395.264 395.264c-5.632 5.632-2.048 15.872 6.144 16.384l392.704 12.8c5.632 0 10.24-4.608 10.24-10.24z"
                  fill="#FFFFFF"></path>
                <path
                  d="M512.512 964.096h-0.512l-392.704-12.8c-7.168 0-12.8-4.608-15.36-10.752-2.56-6.656-1.024-13.312 3.584-18.432l407.552-407.552 13.824 432.128c0 4.608-1.536 9.216-5.12 12.8-2.048 3.072-6.656 4.608-11.264 4.608z m-11.264-413.696l-382.464 382.464c-0.512 0.512-0.512 1.024-0.512 2.048 0.512 0.512 1.024 1.024 1.536 1.024l392.704 12.8c0.512 0 1.024-0.512 1.536-0.512 0 0 0.512-0.512 0.512-1.536l-13.312-396.288z"
                  fill="#2E66FF"></path>
                <path
                  d="M931.84 509.952l-414.208 13.312 395.264 395.264c5.632 5.632 15.872 2.048 16.384-6.144l12.8-392.704c0-5.632-4.608-10.24-10.24-9.728z"
                  fill="#FFB5EC"></path>
                <path
                  d="M919.552 929.28c-4.608 0-8.704-1.536-11.776-5.12l-407.552-407.552 432.128-13.824c4.608 0 9.216 1.536 12.8 5.12s5.12 8.192 5.12 12.8l-12.8 392.704c0 7.168-4.608 12.8-10.752 15.36-3.072 0-5.12 0.512-7.168 0.512z m-384-398.848l382.464 382.464c0.512 0.512 1.024 0.512 2.048 0.512 0.512-0.512 1.024-1.024 1.024-1.536l12.8-392.704c0-0.512-0.512-1.024-0.512-1.536 0 0-1.024-0.512-1.536-0.512l-396.288 13.312z"
                  fill="#2E66FF"></path>
                <path
                  d="M76.8 526.848l414.208-13.312-394.752-395.264c-5.632-5.632-15.872-2.048-16.384 6.144L67.072 517.12c0 5.632 4.096 10.24 9.728 9.728z"
                  fill="#FFF152"></path>
                <path
                  d="M76.8 534.528c-4.608 0-8.704-2.048-12.288-5.12-3.584-3.584-5.12-8.192-5.12-12.8l12.8-392.704c0-7.168 4.608-12.8 10.752-15.36 6.656-2.56 13.312-1.024 18.432 3.584l407.552 407.552-432.128 13.824v1.024z m12.8-411.136h-0.512c-0.512 0.512-1.024 1.024-1.024 1.536l-12.8 392.704c0 0.512 0.512 1.024 0.512 1.536 0 0 0.512 0.512 1.536 0.512L474.112 506.88 90.624 123.904c-0.512-0.512-1.024-0.512-1.024-0.512z"
                  fill="#2E66FF"></path>
              </svg>
            </span>
            <span class="funny-title">{{ index + 1 }}号厅：{{ item.classify }}</span>
          </div>
          <div class="process-wrap">
            <el-collapse v-model="activeName" accordion @change="changeFunny(item.classify)">
              <el-collapse-item :title="`您当前正处于${index + 1}号厅`" :name="index">
                <div class="my-animation-slide-bottom" v-if="!$common.isEmpty(item.data)">
                  <div class="funny-item">
                    <div class="funny-item-title">歌曲</div>
                    <div class="funny-item-introduction">歌手</div>
                  </div>
                  <div v-for="(funny, i) in item.data" :key="i" :title="item.title" class="funny-item" @click="playSound(funny.url)">
                    <div class="funny-item-title">{{ funny.title }}</div>
                    <div class="funny-item-introduction">{{ funny.introduction }}</div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
            <hr>
          </div>
        </div> -->

        <div v-if="$common.mobile() || mobile">
          <div style="cursor: default;" v-for="(item, index) in funnys" :key="index">
            <div class="funny-mobile-title">{{ item.classify }} - {{ item.count }}</div>
            <div class="funny-mobile-item" :class="{ active: currentIndex === index }" v-for="(funny, index) in item.data"
              :key="index" @click="playSound(funny.url, index)">
              <div class="funny-mobile-item-cover myLeft">
                <el-image :src="funny.cover" fit="cover" v-animate="'my-animation-imgblur'"></el-image>
              </div>
              <div
                style="display: flex; flex-direction: column; flex: 1; margin-left: 10px; justify-content: space-between;">
                <div class="funny-mobile-item-title">{{ funny.title }}</div>
                <div class="funny-mobile-item-content" style="display: flex; align-items: center;">
                  <span class="vip tag">VIP</span>
                  <span class="good tag">臻品母带</span>
                  <div style="margin-left: -10px;">{{ funny.introduction }} · {{ funny.remark }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <div style="cursor: default;" v-for="(item, index) in funnys" :key="index">
            <div class="funny-title">{{ item.classify }} - {{ item.count }}</div>
            <div class="funny-item">
              <div class="funny-item-cover"></div>
              <div class="funny-item-title">歌曲</div>
              <div class="funny-item-introduction">歌手</div>
              <div class="funny-item-remark">专辑</div>
            </div>
            <div class="funny-item funny-item-content" :class="{ active: currentIndex === index }"
              :title="funny.title + '-' + funny.introduction" v-for="(funny, index) in item.data" :key="index"
              @dblclick="playSound(funny.url, index)">
              <div class="funny-item-cover myLeft">
                <el-image :src="funny.cover" fit="cover" v-animate="'my-animation-imgblur'"></el-image>
              </div>
              <div class="funny-item-title">{{ funny.title }}<span>VIP</span></div>
              <div class="funny-item-introduction">{{ funny.introduction }}</div>
              <div class="funny-item-remark">{{ funny.remark }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 页脚 -->
    <div style="background: var(--background);">
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
const twoPoem = () => import("@/views/common/twoPoem");
const myFooter = () => import("@/views/common/myFooter");

export default {
  components: {
    twoPoem,
    myFooter,
  },

  data () {
    return {
      pagination: {
        current: 1,
        size: 9999,
        order: "title",
        desc: false,
        resourceType: "funny",
        classify: ""
      },
      activeName: 0,
      audio: null,
      funnys: [],
      funny: {
        classify: "",
        title: "",
        cover: "",
        url: ""
      },
      mobile: false,
      currentIndex: -1
    }
  },

  computed: {},

  watch: {},

  created () {
    this.getFunny();

    this.mobile = document.body.clientWidth < 768

    window.addEventListener('resize', () => {
      let docWidth = document.body.clientWidth
      if (docWidth < 768) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    })
  },

  beforeDestroy () {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  },

  mounted () { },

  methods: {
    getFunny () {
      this.$http.get(this.$constant.baseURL + "/webInfo/listFunny")
        .then((res) => {
          this.funnys = res.data;
          if (!this.$common.isEmpty(res.data)) {
            this.changeFunny(this.funnys[0].classify);
          }
          console.log(this.funnys);
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: "error"
          });
        });
    },

    listFunny () {
      this.$http.post(this.$constant.baseURL + "/webInfo/listResourcePath", this.pagination)
        .then((res) => {
          if (!this.$common.isEmpty(res.data) && !this.$common.isEmpty(res.data.records)) {
            this.funnys.forEach(funny => {
              if (funny.classify === this.pagination.classify) {
                // res.data.records.forEach(item => {
                //   const audioEle = new Audio(item.url)
                //   audioEle.addEventListener("loadedmetadata", function () {
                //     let duration = audioEle.duration; // 音频总时长，单位为秒
                //     let mm = Math.floor(duration / 60);
                //     let ss = Math.floor(duration % 60);
                //     item.duration = mm + ":" + ss.toString().padStart(2, "0"); // 赋值为 mm:ss 格式
                //   });
                // })
                funny.data = res.data.records
              }
              this.$forceUpdate();
            });
          }
          this.pagination.classify = "";
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: "error"
          });
        });
    },
    changeFunny (classify) {
      this.funnys.forEach(funny => {
        if (funny.classify === classify && this.$common.isEmpty(funny.data)) {
          this.pagination.classify = classify;
          this.listFunny();
        }
      });
    },
    playSound (src, index) {
      this.currentIndex = index;
      if (this.audio != null) {
        if (this.audio.src === src) {
          if (this.audio.paused) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        } else {
          this.audio.pause();
          this.audio.src = src;
          this.audio.load();
          this.audio.play();
        }
      } else {
        this.audio = new Audio(src);
        this.audio.play();
      }
    },
  }
}
</script>

<style scoped>
.funny-title,
.funny-mobile-title {
  /* margin-left: 8px; */
  margin-bottom: 20px;
  color: var(--fontColor);
  font-size: 28px;
  font-weight: 700;
}

.funny-mobile-title {
  font-size: 22px;
}

.funny-item,
.funny-mobile-item {
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0 -8px;
  height: 60px;
  font-size: 16px;
  border-radius: 5px;
}

.funny-mobile-item {
  font-size: 14px;
}

.funny-item>div,
.funny-mobile-item div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.funny-item-content {
  cursor: pointer;
}

.funny-item-content .funny-item-introduction,
.funny-item-content .funny-item-remark,
.funny-mobile-item-content {
  color: var(--musicFontColor);
}

.funny-item-content:hover,
.funny-mobile-item:hover {
  background: var(--musicHoverBG);
}

.funny-item-cover {
  width: 50px;
}

.funny-item-title {
  flex: 7 1 0%;
  margin-left: 5px;
}

.funny-item-title span,
.funny-mobile-item-content .tag {
  margin-left: 15px;
  padding: 0 5px;
  border: 2px solid #31c27c;
  border-radius: 5px;
  font-size: 12px;
  color: #31c27c;
}

.funny-item-introduction {
  flex: 4 1 0%;
}

.funny-item-remark {
  flex: 4 1 0%;
}

.funny-item-cover .el-image,
.funny-mobile-item-cover .el-image {
  width: 44px;
  height: 44px;
  border-radius: 5px;
}

.funny-mobile-item-content {
  font-size: 12px;
}

.funny-mobile-item-content .tag {
  margin-left: 0;
  transform: scale(0.75);
  transform-origin: 0 50%;
}

.funny-mobile-item-content .good {
  transform: translateX(-4px) scale(0.8);
  color: #d1b777;
  border: 2px solid #d1b777;
}

.active {
  color: #31c27c
}
</style>
