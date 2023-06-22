<template>
  <div style="background: var(--background)">
    <!-- 两句诗 -->
    <div class="my-animation-slide-top">
      <twoPoem :isGuidang="true"></twoPoem>
    </div>

    <div class="page_main my-animation-slide-bottom">
      <div class="contianer border_style">
        <el-timeline>
          <el-timeline-item class="timeline-title" color="#fff">文章总览 - {{ $store.getters.articleTotal
          }}</el-timeline-item>
          <el-timeline-item v-for="(article, index) in articles" :key="index" color="#fff" size="large">
            <div class="aside-post-main" @click="$router.push({ path: '/article', query: { id: article.id } })"
              :title="article.articleTitle">
              <div class="aside-post-image">
                <el-image lazy class="my-el-image" :src="article.articleCover" fit="cover"
                  v-animate="'my-animation-imgblur'">
                  <div slot="error" class="image-slot">
                    <div class="error-aside-image">
                      {{ article.username }}
                    </div>
                  </div>
                </el-image>
              </div>
              <div class="articleInfo">
                <div class="aside-post-title">
                  {{ article.articleTitle }}
                </div>
                <div class="aside-post-date">
                  <i class="iconfont icon-rili"></i>
                  {{ article.createTime.slice(0, 10) }}
                </div>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
        <Pagination :pagination="pagination" @pageArticles="pageArticles" style="width: 100%;" />
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
const Pagination = () => import("@/views/common/pagination.vue");
export default {
  components: {
    twoPoem,
    myFooter,
    Pagination
  },
  data () {
    return {
      pagination: {
        current: 1,
        size: 12,
        total: 0,
        searchKey: '',
      },
      articles: []
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    pageArticles (current) {
      // const articlelist = document.getElementById('articlelist')
      // articlelist.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
      this.pagination.current = current
      this.getArticles()
    },
    getArticles () {
      this.$http
        .post(this.$constant.baseURL + '/article/listArticle', this.pagination)
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.articles = res.data.records
            this.pagination.total = res.data.total
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
.timeline-title.el-timeline-item {
  height: 100px;
  cursor: default;
}

.timeline-title.el-timeline-item ::v-deep.el-timeline-item__wrapper {
  top: -2px;
  font-size: 22px;
}

/* ::v-deep.el-timeline-item .el-timeline-item__timestamp.is-bottom {
  margin-top: 0;
} */

.el-timeline-item {
  height: 120px;
}

.el-timeline-item ::v-deep.el-timeline-item__wrapper {
  top: -42px;
  cursor: pointer;
  margin-left: 28px;
  padding-left: 0;
}

.el-timeline-item ::v-deep.el-timeline-item__wrapper .el-timeline-item__content {
  color: var(--fontColor);
}

::v-deep .el-timeline-item__node {
  border: 0;
}

::v-deep .el-timeline-item__node--normal {
  left: -8px;
  width: 26px;
  height: 26px;
  border: 5px solid var(--themeColor);
}

::v-deep .el-timeline-item__node--large {
  left: -3px;
  width: 16px;
  height: 16px;
  border: 3px solid var(--themeColor);
}

::v-deep .el-timeline-item__tail {
  border-left: 2px solid var(--themeColor);
}

.aside-post-main {
  display: flex;
}

.aside-post-image {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.aside-post-image .my-el-image {
  border-radius: 18px;
}

.my-el-image ::v-deep.el-image__inner {
  transition: all 1s;
}

.my-el-image:hover ::v-deep.el-image__inner {
  transform: scale(1.2);
}

.articleInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  font-size: 18px;
}

.aside-post-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /*这里的数字2表示最多显示2行*/
  -webkit-line-clamp: 2;
  overflow: hidden;
  transition: all .3s;
}

.aside-post-title:hover {
  transform: translateX(10px);
  color: var(--themeColor);
}

.aside-post-date {
  margin-top: 5px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .el-timeline {
    padding-left: 20px;
  }

  .el-timeline-item {
    height: 100px;
  }

  .timeline-title.el-timeline-item {
    height: 80px;
  }

  .aside-post-image {
    width: 80px;
    height: 80px;
  }

  .el-timeline-item ::v-deep.el-timeline-item__wrapper {
    top: -30px;
  }
}
</style>