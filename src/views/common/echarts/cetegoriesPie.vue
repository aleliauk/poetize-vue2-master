<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState } from 'vuex';
export default {
  methods: {
    drawChart () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: '文章分类统计图📇',
          left: "center",
          textStyle: {
            color: this.isDark ? '#fff' : '#000'
          }
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: '0%',
          left: 'center',
          textStyle: {
            color: this.isDark ? '#fff' : '#000'
          }
        },
        series: [
          {
            name: '文章阅读量',
            type: 'pie',
            radius: [50, 160],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: !this.isDark ? '#fff' : '#272727',
              borderWidth: 6,
            },
            label: {
              show: false,
              position: 'center',
              fontFamily: 'zhuziAwa1n',
              color: this.isDark ? '#fff' : '#000'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: this.chartData,
          },
        ],
      }

      option && myChart.setOption(option)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
  },

  computed: {
    ...mapState({
      isDark: state => state.isDark,
    }),
    chartData () {
      return this.$store.state.echatrsList
    },
  },

  watch: {
    isDark () {
      this.drawChart()
    },
    chartData () {
      this.drawChart()
    },
  },

  mounted () {
    this.drawChart()
  },
}
</script>

<style scoped>
#main {
  height: 450px;
}
</style>