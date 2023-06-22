<template>
  <div class="pagination-wrap">
    <div class="myCenter">
      <div @click="pageArticles(pagination.current - 1)" class="pagination" v-if="pagination.current != 1">
        上一页
      </div>
      <div @click="pageArticles(pagination.current + 1)" class="pagination"
        v-if="pagination.total / pagination.size > pagination.current && pagination.current >= 1">
        下一页
      </div>
    </div>
    <div style="user-select: none;">
      ~~我也是有底线的~~
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true
    }
  },
  methods: {
    pageArticles (current) {
      this.$emit('pageArticles', current)
    }
  },
}
</script>

<style scoped>
.pagination-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: calc(100% - 40px);
}

.pagination {
  padding: 13px 15px;
  margin: 0 5px 40px;
  border: 1px solid var(--lightGray);
  border-radius: 3rem;
  color: var(--greyFont);
  width: 100px;
  user-select: none;
  cursor: pointer;
  text-align: center;
}

.pagination:hover {
  border: 1px solid var(--themeBackground);
  color: var(--themeBackground);
  box-shadow: 0 0 5px var(--themeBackground);
}
</style>