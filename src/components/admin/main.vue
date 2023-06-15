<template>
  <div>
    <div class="header shadow-box-box border-radius">
      <div class="avatar">
        <el-avatar class="user-avatar"
                   :size="100"
                   :src="$store.state.currentUser.avatar || $store.state.currentAdmin.avatar">
        </el-avatar>
      </div>
      <div class="info">
        <h2>{{$store.state.holle}}，{{$store.state.currentUser.username || $store.state.currentAdmin.username}}，祝你开心每一天！</h2>
        <p>管理员 | {{$store.state.webInfo.webName}}</p>
      </div>
    </div>
    <div class="information myBetween">
      <div v-for="item in $store.state.information"
           :key="item.id"
           :title="item.title"
           :style="{backgroundColor: item.bgc}"
           class="information-item userTotal shadow-box-box">
        <div class="information-item-title">{{item.title}}</div>
        <div class="information-item-content">
          <span>{{ item.number }}</span>
          <i :class="item.icon"></i>
        </div>
      </div>
    </div>
    <div class="mian">
      <div class="calendar shadow-box-box border-radius">
        <Calendar />
      </div>
      <div class="echarts shadow-box-box border-radius">
        <Echarts />
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from './common/calendar.vue'
import Echarts from './common/echarts.vue'
export default {
  components: { Calendar, Echarts },
  data() {
    return {
      pagination: {
        current: 1,
        size: 100,
        total: 0,
        searchKey: '',
        recommendStatus: null,
        sortId: null,
        labelId: null,
      },
      echatrsList: [],
    }
  },

  computed: {},

  watch: {},

  created() {
    this.getUsers() // 用户列表
    this.getArticles() // 文章列表
    this.getComments() //留言列表
    this.getWebInfo() // 网站信息
    this.getSortInfo() // 分类
    this.$store.commit('loadHolleTime') // holle
  },

  mounted() {},

  methods: {
    // 用户列表
    getUsers() {
      this.$http
        .post(
          this.$constant.baseURL + '/admin/user/list',
          this.pagination,
          true
        )
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.$store.commit('loadUserList', res.data.total)
          }
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: 'error',
          })
        })
    },

    // 文章列表
    getArticles() {
      this.$http
        .post(
          this.$constant.baseURL + '/admin/article/boss/list',
          this.pagination,
          true
        )
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            // 文章总数
            this.$store.commit('loadArticleList', res.data.total)
          }
          // 浏览量
          const newSum = res.data.records.reduce((Sum, item) => {
            return (Sum += item.viewCount)
          }, 0)
          this.$store.commit('loadpageView', newSum)

          // 分类浏览数
          const result = Object.values(
            res.data.records.reduce((acc, value) => {
              const key = value.sort.sortName
              if (acc[key]) {
                acc[key].value += value.viewCount // 若已存在该 key，则累计 viewCount
              } else {
                acc[key] = { name: key, value: value.viewCount } // 否则创建该 key，并将 viewCount 赋值给该 key
              }
              return acc
            }, {})
          )
          this.$store.commit('loadEchrats', result) // echarts
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: 'error',
          })
        })
    },

    // 留言列表
    getComments() {
      this.$http
        .post(
          this.$constant.baseURL + '/admin/treeHole/boss/list',
          this.pagination,
          true
        )
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.$store.commit('loadMessageList', res.data.total)
          }
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: 'error',
          })
        })
    },

    // 网站信息
    getWebInfo() {
      if (this.$store.state.webInfo.webName === '') {
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
      }
    },

    // 分类
    getSortInfo() {
      this.$http
        .get(this.$constant.baseURL + '/webInfo/getSortInfo')
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.$store.commit('loadSortInfo', res.data)
            this.$store.commit('loadSortInfoList', res.data.length)
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
.header {
  display: flex;
  align-items: center;
  padding: 30px;
  height: 160px;
  background-color: var(--white);
}

.info {
  margin-left: 30px;
}

.information {
  margin: 30px 0;
}

.information-item {
  padding: 30px;
  width: 19%;
  height: 160px;
  border-radius: 15px;
  color: var(--white);
}

.information-item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
}

.information-item-content i {
  font-size: 70px;
  opacity: 0.5;
}

.mian {
  display: flex;
}

.calendar {
  margin-right: 30px;
  padding: 15px;
  width: 45%;
  background-color: var(--white);
}

.echarts {
  width: 55%;
  background-color: var(--white);
  padding: 20px;
}
</style>
