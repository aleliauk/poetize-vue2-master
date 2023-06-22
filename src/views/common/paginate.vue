<template>
  <div>
    <ul>
      <li v-on:click="prevPage">Prev</li>
      <li v-for="(page, index) in pages" :key="index" v-bind:class="{ active: page == pagination.current }"
        v-on:click="changePage(page)">
        {{ page }}
      </li>
      <li v-on:click="nextPage">Next</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pagination: {
      type: Object,
      // required: true,
      default: {
        current: 1,
        size: 6,
        total: 0,
        searchKey: '',
        sortId: null,
      }
    },
  },
  computed: {
    pages: function () {
      let pages = []; // 存放页面的数组
      let total = this.pagination.total || 0; //总数
      let size = this.pagination.size || 10; //每页大小
      let current = this.pagination.current || 1; //当前页码

      //计算页码数
      let pageCount = Math.ceil(total / size);

      // 计算显示的页码
      let start = current - 2 > 0 ? current - 2 : 1;
      let end = start + 4 >= pageCount ? pageCount : start + 4;
      if (end === pageCount) {
        start = end - 4 > 0 ? end - 4 : 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    }
  },
  methods: {
    changePage: function (page) {
      // 触发父组件事件
      this.$emit("page-change", page);
    },
    nextPage: function () {
      // 触发父组件事件
      if (this.pagination.current < Math.ceil(this.pagination.total / this.pagination.size)) {
        this.$emit("page-change", this.pagination.current + 1);
      }
    },
    prevPage: function () {
      // 触发父组件事件
      if (this.pagination.current > 1) {
        this.$emit("page-change", this.pagination.current - 1);
      }
    }
  }
};
</script>
