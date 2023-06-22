<template>
  <div id="main" v-if="this.articleCreateTimeList && this.articleCreateTotalList"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState } from 'vuex';
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      articleCreateTimeList: [],
      articleCreateTotalList: []
    }
  },
  methods: {
    getArticleList () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option;

      option = {
        color: ['#41c8be'],
        title: {
          text: '文章发布统计图📖',
          left: "center",
          textStyle: {
            color: this.isDark ? '#fff' : '#000'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            label: {
              backgroundColor: '#6a7985'
            }
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
            name: '日期',
            type: 'category',
            boundaryGap: false,
            data: this.articleCreateTimeList
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
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
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
            emphasis: {
              focus: 'series'
            },
            data: this.articleCreateTotalList
          }
        ]
      }

      option && myChart.setOption(option)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    setArticleTotal () {
      // 时间
      const articleCreateTimeList = this.articles.reduce((acc, article) => {
        const createTime = new Date(article.createTime);
        const yearMonth = createTime.getFullYear() + '-' + (createTime.getMonth() + 1 < 10 ? '0' : '') + (createTime.getMonth() + 1);
        if (!acc.includes(yearMonth)) {
          acc.unshift(yearMonth);
        }
        return acc;
      }, []);
      this.articleCreateTimeList = articleCreateTimeList

      // 文章数
      const months = this.articles.map(article => new Date(article.createTime).getMonth() + 1);
      const result = months.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
      }, {});
      // 将结果存入一个数组中
      this.articleCreateTotalList = Object.values(result)
    }
  },

  computed: {
    ...mapState({
      isDark: state => state.isDark,
    })
  },

  watch: {
    isDark () {
      this.getArticleList()
    },
    articles () {
      var chartInstance = echarts.getInstanceByDom(document.getElementById('main'));
      if (chartInstance) {
        chartInstance.dispose();
      }
      this.getArticleList()
    },
  },

  created () {
    this.setArticleTotal()
  },

  mounted () {
    this.getArticleList()
  },
}
</script>

<style scoped>
#main {
  height: 400px;
}
</style>