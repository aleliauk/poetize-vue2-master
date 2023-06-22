<template>
  <div style="background: var(--background)">
    <!-- 两句诗 -->
    <div class="my-animation-slide-top">
      <twoPoem :isBiaoqian="true"></twoPoem>
    </div>

    <div class="page_main my-animation-slide-bottom">
      <div class="contianer border_style" style="text-align: center;">
        <TagsBar :allLabelList="allLabelList" />
        <div v-if="this.allLabelList">
          <div v-for="(label, index) in allLabelList" :key="index" class="tags">
            <proTag :info="label.labelName + ' ' + label.countOfLabel" :color="$constant.before_color_list[index]"
              style="margin: 10px">
            </proTag>
          </div>
        </div>
        <div v-else>
          <Skeleton v-for="(item, index) in 20" :key="index" :width="100" :height="38" style="margin: 10px" animated />
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
const proTag = () => import("@/views/common/proTag.vue");
const myFooter = () => import("@/views/common/myFooter");
const TagsBar = () => import("@/views/common/echarts/tagsBar.vue");
export default {
  components: {
    twoPoem,
    proTag,
    myFooter,
    TagsBar
  },
  data () {
    return {
      allLabelList: [],
    }
  },
  created () {
    this.mapLabel()
  },
  methods: {
    mapLabel () {
      this.allLabelList = this.$store.state.sortInfo.flatMap(item => item.labels.map(({ id, labelName, countOfLabel }) => ({ id, labelName, countOfLabel })))
    }
  },
}
</script>

<style scoped>
.tags {
  display: inline;
}
</style>