<template>
  <div>
    <!-- 两句诗 -->
    <div class="my-animation-slide-top">
      <twoPoem :isWenzhang="true"></twoPoem>
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
    myFooter
  },
}
</script>

<style></style>