<template>
  <div class="wrapper">
    <chart :options="bar"  ref="bar"></chart>
  </div>
</template>
<style>
.echarts {
  width: 61.8%;
  min-width: 480px;
  height: 500px;
  margin: 0 auto 5em;
}
</style>

<script>
import ECharts from '../components/ECharts/Echarts.vue'
import Vue from 'vue'
Vue.component('chart', ECharts);

export default {
  data() {
    return {
      bar: {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data:['']
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [{
          name: '',
          type: 'bar',
          data: []
        }]
      }
    }
  },
  methods: {
    barclick(data){
    console.log(data);

    }
  },
  mounted() {

      this.$refs.bar.showLoading();
       Vue.http.get('http://www.lilidong.cn/demo/vue2.0.x+echart3.0.x/static/data/getchartdata.json')
         .then((response) => {
            var o =response.data.data
                  var tempDate = new Date;
      var ch = "来源:龙渊数据平台 数据更新时间：" + tempDate.getFullYear() + "." + (tempDate.getMonth() + 1) + "." + tempDate.getDate();
      var options = {
        title : {
          show : true,
          right : 40,
          bottom : 0,
          textStyle : {
            color : "#636677",
            fontSize : 16
          },
          text : ch
        },
        color : ["#f5895b", "#f9c148", "#86d2df", "#56a4b0", "#278b8d"],
        tooltip : {
          trigger : "axis",
          axisPointer : {
            type : "shadow"
          }
        },
        legend : {
          right : 40,
          top : 30,
          data: ["初创期", "发展期", "成熟期", "上市", "被收购"]
        },
        grid : {
          left : "3%",
          right : "4%",
          bottom : "18%",
          containLabel : true
        },
        yAxis : {
          type : "value",
          axisLine : {
            show : false
          },
          axisTick : {
            show : false
          },
          splitLine : {
            lineStyle : {
              color : "#e5e9ec"
            }
          }
        },
        xAxis : {
          type : "category",
          axisLine : {
            lineStyle : {
              color : "#e5e9ec"
            }
          },
          axisTick : {
            show : false
          },
          splitLine : {
            show : false
          },
          axisLabel : {
            rotate : -50,
            interval : 0
          },
          data : o.scope
        },
        series : [{
          name : o.series[0].name,
          type : "bar",
          barWidth : 30,
          stack : "总量",
          data : o.series[0].data
        }, {
          name : o.series[1].name,
          type : "bar",
          stack : "总量",
          data : o.series[1].data
        }, {
          name : o.series[2].name,
          type : "bar",
          stack : "总量",
          data : o.series[2].data
        }, {
          name : o.series[3].name,
          type : "bar",
          stack : "总量",
          data : o.series[3].data
        }, {
          name : o.series[4].name,
          type : "bar",
          stack : "总量",
          data : o.series[4].data
        }]
      };

      this.$refs.bar.mergeOptions(options)
      this.$refs.bar.hideLoading()
        })
       .catch(function(response) {
        console.log(0)
       });

    // setTimeout(() => {
    //   this.$refs.bar.mergeOptions({
    //     xAxis: {
    //       data: asyncData.categories
    //     },
    //     series: [{
    //       name: '销量',
    //       data: asyncData.data
    //     }]
    //   })
    //   this.$refs.bar.hideLoading()
    // }, 3000)
    
  },
  destroy: function () {
  }
}
</script>