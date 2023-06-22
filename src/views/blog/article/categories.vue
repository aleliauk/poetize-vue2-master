<template>
  <div  style="background: var(--background)">
    <!-- 两句诗 -->
    <div class="my-animation-slide-top">
      <twoPoem :isFenlei="true"></twoPoem>
    </div>

    <div class="page_main my-animation-slide-bottom">
      <div class="contianer border_style">
        <CetegoriesPie />
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
const CetegoriesPie = () => import("@/views/common/echarts/cetegoriesPie.vue");
export default {
  components: {
    twoPoem,
    myFooter,
    CetegoriesPie
  },
  created () {
    this.getArticles()
  },
  methods: {
    // 文章列表
    getArticles () {
      this.$http
        .get(this.$constant.baseURL + '/webInfo/getSortInfo')
        .then((res) => {
          const result = res.data.filter(item => item.countOfSort > 0).map(item => {
            return {
              name: item.sortName,
              value: item.countOfSort
            }
          })
          this.$store.commit('loadEchrats', result) // echarts
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

<style></style>