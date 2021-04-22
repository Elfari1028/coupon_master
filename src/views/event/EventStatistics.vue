<template>
  <div id="coupon-stats-div" style="height: 100%; width: 100%">
    <div class="row">
      <div id="chart1" class="chart"></div>
      <div id="chart2" class="chart"></div>
      <div id="chart3" class="chart"></div>
    </div>
    <div class="row">
      <div id="chart4" class="chart"></div>
      <div id="chart5" class="chart"></div>
      <div id="chart6" class="chart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventStats",
  methods: {
    mountChart1() {
      var myChart = this.$echarts.init(document.getElementById("chart1"));
      var option = {
        title: {
          text: "最近一周活动数据",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["领取量", "使用量"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "使用量",
            type: "line",
            stack: "总量",
            data: [720, 632, 701, 734, 990, 1030, 1110],
          },
          {
            name: "领取量",
            type: "line",
            stack: "总量",
            data: [1820, 1932, 1901, 1934, 2290, 2330, 2320],
          },
        ],
      };
      myChart.setOption(option);
    },
    mountChart2() {
      var myChart = this.$echarts.init(document.getElementById("chart2"));
      var option = {
        title: {
          text: "活动按类型领取量",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["全部", "平台活动", "微信公众号活动", "网页活动"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "平台活动",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "微信公众号活动",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "网页活动",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      };
      myChart.setOption(option);
    },
    mountChart3() {
      var myChart = this.$echarts.init(document.getElementById("chart3"));
          var option = {
        title: {
          text: "活动按类型使用量",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["全部", "平台活动", "微信公众号活动", "网页活动"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "平台活动",
            type: "line",
            stack: "总量",
            data: [120, 82, 91, 34, 90, 130, 210],
          },
          {
            name: "微信公众号活动",
            type: "line",
            stack: "总量",
            data: [50, 132, 101, 54, 90, 230, 210],
          },
          {
            name: "网页活动",
            type: "line",
            stack: "总量",
            data: [120,232, 101, 224, 290, 130, 120],
          },
        ],
      };
      myChart.setOption(option);
    },
    mountChart4() {
      var myChart = this.$echarts.init(document.getElementById("chart4"));
      var option = {
        title: {
          text: "数据雷达",
        },

        tooltip: {},
        legend: {
          data: ["最大值", "实际指数"],
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: "分发率", max: 100 },
            { name: "引流量", max: 100 },
            { name: "使用率", max: 100 },
            { name: "销量刺激", max: 100 },
            { name: "利润刺激", max: 100 },
          ],
        },
        series: [
          {
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [100, 100, 100, 100, 100, 100],
                name: "最大值",
              },
              {
                value: [80, 90, 40, 70, 50],
                name: "实际指数",
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    mountChart5() {
      var myChart = this.$echarts.init(document.getElementById("chart5"));
      var option = {
        title: {
          text: "不同种类优惠券占比",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: "优惠券来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: false,
            },
            data: [
              
              { value: 1548, name: "网页推广" },
              { value: 1048, name: "平台推广" },
              { value: 5775, name: "微信公众号推广", selected: true },
              // { value: 679, name: "营销广告", selected: true },
            ],
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,

              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 1048, name: "满减券" },
              { value: 335, name: "折扣券" },
              { value: 310, name: "赠品券" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    mountChart6() {
      var myChart = this.$echarts.init(document.getElementById("chart6"));
      var option = {
        title:{
          text:"收益变化"
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.mountChart1();
    this.mountChart2();
    this.mountChart3();
    this.mountChart4();
    this.mountChart5();
    this.mountChart6();
  },
};
</script>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
  display: inline-block;
}
.row {
  padding-top: 50px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
</style>