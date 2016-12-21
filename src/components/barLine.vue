<template>
  <div class="wrapper">
    <chart :options="bar"  ref="bar" @chartclick="barclick"></chart>
  </div>
</template>
<style>
body {
  margin: 0;
  padding: 3em 0 0;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #666;
  text-align: center;
}
a {
  color: inherit;
  text-decoration: none;
}
h1 {
  margin-bottom: 2em;
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #2c3e50;
  font-weight: 300;
}
body .echarts {
  width: 61.8%;
  min-width: 480px;
  height: 300px;
  margin: 0 auto 5em;
}
</style>

<script>
import ECharts from '../components/ECharts/Echarts.vue'
import Vue from 'vue'
Vue.component('chart', ECharts);
let asyncData = {
  categories: ["衬衫","ww","雪纺衫","裤子","高跟鞋","袜子"],
  data: [5, 20, 36, 10, 10, 20]
}
export default {
  data() {
    let data = []
    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }
    return {

      bar: {
        title: {
          text: '异步数据加载示例barline'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [{
          name: '销量',
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
    // simulating async data from server
    this.$refs.bar.showLoading();
    setTimeout(() => {
      this.$refs.bar.mergeOptions({
        xAxis: {
          data: asyncData.categories
        },
        series: [{
          name: '销量',
          data: asyncData.data
        }]
      })
      this.$refs.bar.hideLoading()
    }, 3000)
    
  },
  destroy: function () {
  }
}
</script>