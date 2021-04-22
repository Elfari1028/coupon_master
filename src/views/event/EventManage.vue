<template>
  <div id="event-manage-div" style="height: 100%; width: 100%">
    <div class="button-row">
      <v-select
        class="select-item"
        outlined
        v-model="form.category"
        :items="categories"
        label="活动类型"
      ></v-select>
      <v-select
        class="select-item"
        outlined
        v-model="form.status"
        :items="statuses"
        label="状态"
      ></v-select>
      <v-select
        class="select-item"
        outlined
        v-model="form.expiration"
        :items="expiration"
        label="有效期"
      ></v-select>
      <v-text-field
      v-model="form.keyword"
        class="select-item"
        name="search-input"
        max-width="200px"
        outlined
        label="关键字"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn color="primary" @click="handle">筛选</v-btn>
    </div>
    <div>
      <v-card
        class="list-item"
        v-for="(item, index) in getevents"
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
          <v-chip class="chip" dark color="default"
            >相关优惠券 {{ item.coupon_count }}
          </v-chip>
        </div>
        <div style="margin-left: auto">
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
  name: "EventManage",
  watch: {
    form: {
      handler() {
        //TODO axios.post()
      },
      deep: true,
    },
  },
  mounted() {
    this.$api.event.search(this.form).then((res) => {
      this.events = res.list;
      // console.log(res.data);
    });
  },
  computed: {
    getevents() {
      return this.events;
    },
  },
  methods: {
    handle() {
      this.$api.event.search(this.form).then((res) => {
        this.events = res.list;
        // console.log(res.data);
      });
    },
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
  data() {
    return {
      events: [],
      form: {
        category: "全部",
        status: "全部",
        expiration: "全部",
        keyword: "",
      },
      list: [
        {
          id: 123,
          name: "活动名称",
          description: "详情",
          category: "平台活动",
          status: "已生效",
          start: "2021-04-21",
          end: "2021-04-22",
          expiration: "未开始",
          coupon_count: 5,
          scope: [],
        },
      ],
      statuses: ["全部", "草稿", "审核中", "已驳回", "已生效", "已关闭"],
      expiration: ["全部", "未开始", "未过期", "已过期"],
      categories: ["全部", "平台活动", "微信公众号活动", "网页活动"],
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