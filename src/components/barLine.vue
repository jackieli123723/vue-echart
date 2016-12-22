<template>
  <div class="wrapper">
    <chart :options="bar"  ref="bar" ></chart>
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
          text: 'ss'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: []
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
       Vue.http.get('static/data/time.json')
         .then((response) => {
         console.log(response.data.msg)
          
                  var tempDate = new Date;
                var ch = "来源:龙渊数据平台 数据更新时间：" + tempDate.getFullYear() + "." + (tempDate.getMonth() + 1) + "." + tempDate.getDate();
      
  
                    var t = response.data.data;
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
          color : ["#f9c148", "#f5895b", "#86d2df", "#56a4b0", "#278b8d"],
          toolbox : {
            show : true,
            feature : {
              saveAsImage : {
                name : '折线图',
                pixelRatio : 1.5
              }
            }
          },
          tooltip : {
            trigger : "axis",
            backgroundColor : "#f6f8fa",
            borderColor : "#ebf0f4",
            borderWidth : 1,
            textStyle : {
              color : "#333"
            },
            axisPointer : {
              type : "line",
              lineStyle : {
                color : "#f07727",
                type : "dashed"
              }
            },
            formatter: "{b} <br /> {a0} : {c0} 个月"
          },
          grid : {
            left : "3%",
            right : "6%",
            bottom : "12%",
            containLabel : true
          },
          xAxis : {
            type : "category",
            boundaryGap : true,
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
            data : t.xAxis_data
          },
          yAxis : {
            nameTextStyle : {
              color : "#333"
            },
            type : "value",
            axisLabel : {
              show : true,
              formatter: "{value} 个月"
            },
            axisLine : {
              show : false
            },
            axisTick : {
              show : false
            },
            splitLine : {
              show : true
            }
          },
          series : [{
            name : "所有行业平均",
            type : "line",
            stack : "总量",
            label : {
              normal : {
                show : true,
                position : "top",
               formatter: "{c} 个月",
                textStyle : {
                  color : "#f5895b"
                }
              }
            },
            areaStyle : {
              normal : {}
            },
            data : t.series_data

          }]
        };
                    
     this.$refs.bar.mergeOptions(options)
      this.$refs.bar.hideLoading()  

        
         
        })
       .catch(function(response) {
        console.log(0)
       });

  },
  destroy: function () {
  }
}
</script>