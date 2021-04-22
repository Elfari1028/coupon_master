<template>
  <div id="book-manage-div" style="height: 100%; width: 100%">
    <div class="button-row">
      <v-text-field
        class="select-item"
        name="search-input"
        max-width="500px"
        width="500px"
        outlined
        label="关键字"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn color="primary">筛选</v-btn>
    </div>
    <div>
      <v-card
        class="list-item"
        v-for="(item, index) in list"
        :key="index"
        outlined
        tile
        elevation="5"
      >
        <strong>{{ item.id }}</strong>
        <v-card-title>{{ item.name }}</v-card-title>
        <div>
          <v-chip class="chip" dark color="blue"
            >相关优惠券{{ item.couponCount }}个</v-chip
          >
          <v-chip class="chip" dark color="green"
            >创建时间{{ item.createDate }}个</v-chip
          >
        </div>
        <div style="margin-left: auto">
          <v-btn class="chip" color="default" dark>详情</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookSetManage",
  watch: {
    form: {
      handler() {
        //TODO axios.post()
      },
      deep: true,
    },
  },
  methods: {
    catColor(str) {
      var ret;
      switch (str) {
        case "平台活动":
          ret = "blue";
          break;
        case "微信公众号活动":
          ret = "green";
          break;
        case "网页活动":
          ret = "orange";
      }
      return ret;
    },

    statusColor(str) {
      var ret;
      switch (str) {
        case "草稿":
          ret = "default";
          break;
        case "审核中":
          ret = "yellow";
          break;
        case "已驳回":
          ret = "red";
          break;
        case "已生效":
          ret = "green";
          break;
        case "已关闭":
          ret = "black";
      }
      return ret;
    },
  },
  mounted(){
    this.$api.bookset.search(this.form).then((res)=>{
      this.list = res.list;
    });
  },
  data() {
    return {
      form: {
        keyword: "",
      },
      list: [
        {
          id: 123,
          name: "活动名称",
          description: "详情",
          createDate: "2021-04-21",
          couponCount: "21",
        },
      ],
    };
  },
};
</script>

<style scoped>
.botton-row {
  display: flex;
}
.select-item {
  display: inline-block;
  margin: 10px !important;
  padding: 10px !important;
}
.list-item {
  display: flex;
  /* justify-content: space-between; */
  align-content: center;
  align-items: center;
  margin: 0px 20px 10px 20px;
  padding: 0px 20px 0px 20px;
}
.chip {
  margin: 10px;
}
</style>