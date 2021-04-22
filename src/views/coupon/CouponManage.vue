<template>
  <div id="coupon-manage-div" style="height: 100%; width: 100%">
    <div class="button-row">
      <!-- <v-btn color="primary">创建优惠券</v-btn> -->
      <v-select
        class="select-item"
        outlined
        v-model="form.category"
        :items="categories"
        label="合作模式"
      ></v-select>
      <v-select
        class="select-item"
        outlined
        v-model="form.type"
        :items="types"
        label="优惠模式"
      ></v-select>
      <v-select
        class="select-item"
        outlined
        v-model="form.status"
        :items="types"
        label="状态"
      ></v-select>
      <v-text-field
        class="select-item"
        name="search-input"
        max-width="200px"
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
          <v-chip class="chip" dark :color="statusColor(item.status)">{{
            item.status
          }}</v-chip>
          <v-chip class="chip" dark :color="catColor(item.category)">{{
            item.category
          }}</v-chip>
          <v-chip class="chip" dark :color="typeColor(item.type)">{{
            item.type
          }}</v-chip>
          <v-chip class="chip" dark color="default"
            >已使用 {{ item.used }} /{{ item.total }}</v-chip
          >
        </div>
        <div style="margin-left: auto; ">
          <v-btn class="chip" color="red" dark>关闭</v-btn>
          <v-btn class="chip" color="green" dark>开启</v-btn>
          <v-btn class="chip" color="default" dark>详情</v-btn>

          <v-btn class="chip" color="purple" dark>修订</v-btn>
          <v-btn class="chip" color="orange" dark>审批</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CouponManage",
  watch: {
    form: {
      handler() {
        //TODO axios.post()
      },
      deep: true,
    },
  },
  mounted(){
    this.$api.coupon.search(this.form).then((res)=>{
        this.list = res.list;
    })
  },
  methods: {
    catColor(str) {
      var ret;
      switch (str) {
        case "合作推广":
          ret = "blue";
          break;
        case "赞助推广":
          ret = "green";
          break;
        case "平台推广":
          ret = "orange";
      }
      return ret;
    },
    typeColor(str) {
      var ret;
      switch (str) {
        case "满减券":
          ret = "blue";
          break;
        case "赠品券":
          ret = "green";
          break;
        case "折扣券":
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
  data() {
    return {
      form: {
        type: "全部",
        category: "全部",
        status: "全部",
        expiration: "全部",
        keyword: "",
      },
      list: [
        {
          id: 123,
          name: "优惠券名称",
          description: "详情",
          category: "合作推广",
          type: "满减券",
          status: "已生效",
          start: "2021-04-21",
          end: "2021-04-22",
          expiration: "未开始",
          total: 100,
          used: 50,
          activity_count: 5,
          coupon_rule: {
            discount: 10,
            threshold: 100,
            off: 100,
            giftID: 10,
          },
          scope: [],
        },
      ],
      categories: ["全部", "合作推广", "赞助推广", "平台推广"],
      types: ["全部", "满减券", "赠品券", "折扣券"],
      statuses: ["全部", "草稿", "审核中", "已驳回", "已生效", "已关闭"],
      expiration:["未开始","未过期","已过期"]
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