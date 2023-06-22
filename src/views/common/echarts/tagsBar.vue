<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState } from 'vuex';
export default {
  props: {
    allLabelList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      labelNameList: [],
      countOfLabelList: []
    }
  },
  methods: {
    getTagsList () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option;

      option = {
        title: {
          text: `Top ${this.labelNameList.length} 标签统计图📌`,
          left: 'center',
          textStyle: {
            color: this.isDark ? '#fff' : '#000'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '4%',
          right: '5%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            name: '标签',
            type: 'category',
            data: this.labelNameList,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            name: '文章篇数',
            type: 'value',
            axisLine: {
              show: true
            }
          }
        ],
        series: [
          {
            name: '文章篇数',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            type: 'bar',
            barWidth: '60%',
            data: this.countOfLabelList
          }
        ]
      };

      option && myChart.setOption(option)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },

    mapLabelList () {
      const newArr = this.allLabelList.filter(item => item.countOfLabel > 0).map(item => {
        return {
          id: item.id,
          labelName: item.labelName,
          countOfLabel: item.countOfLabel
        }
      });
      newArr.map(labels => {
        this.labelNameList.push(labels.labelName)
        this.countOfLabelList.push(labels.countOfLabel)
      })
    }
  },

  computed: {
    ...mapState({
      isDark: state => state.isDark,
    })
  },

  watch: {
    isDark () {
      this.getTagsList()
    },
    allLabelList () {
      this.getTagsList()
    },
    // countOfLabelList () {
    //   this.getTagsList()
    // },
  },

  created () {
    this.mapLabelList()
  },

  mounted () {
    this.getTagsList()
  },
}
</script>

<style scoped>
#main {
  height: 400px;
}
</style>