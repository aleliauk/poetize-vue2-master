<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  methods: {
    drawChart() {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: '文章阅读量',
            type: 'pie',
            radius: [50, 160],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 6,
            },
            label: {
              show: false,
              position: 'center',
              fontFamily: 'zhuziAwa1n',
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
    chartData() {
      return this.$store.state.echatrsList
    },
  },

  watch: {
    chartData() {
      this.drawChart()
    },
  },

  mounted() {
    this.drawChart()
  },
}
</script>

<style scoped>
#main {
  width: 100%;
  height: 100%;
}
</style>