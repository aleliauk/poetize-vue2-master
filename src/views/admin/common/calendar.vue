<template>
  <div>
    <el-calendar v-model="value"
                 :first-day-of-week="7">
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    }
  },
  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {},
}
</script>

<style scoped>
::v-deep .el-calendar .el-calendar__body {
  padding: 15px 20px 20px;
}

::v-deep .el-calendar-table .el-calendar-day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

/* ::v-deep .el-calendar-table td.is-selected {
  background-color: #fff;
} */

::v-deep .el-calendar-table td.is-today span {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #409eff;
  color: #fff;
  text-align: center;
  line-height: 25px;
}
</style>