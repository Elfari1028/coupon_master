<template>
  <div id="coupon-manage-div" style="height: 100%; width: 100%">
    <div class="button-row">
      <!-- <v-btn color="primary">创建优惠券</v-btn> -->

      <v-select
        class="select-item"
        outlined
        v-model="form.type"
        :items="types"
        label="模式"
      ></v-select>
      <v-select
        class="select-item"
        outlined
        v-model="form.expiration"
        :items="expiration"
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
          <v-chip class="chip" dark :color="typeColor(item.type)">{{
            item.type
          }}</v-chip>
          <v-chip class="chip" dark color="default"
            >已使用 {{ item.used }} /{{ item.total }}</v-chip
          >
        </div>
        <div style="margin-left: auto">
          <v-btn class="chip" color="red" dark>关闭</v-btn>
          <v-btn class="chip" color="green" dark>开启</v-btn>
          <v-btn class="chip" color="default" dark @click="changeRoute">详情</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeManage",
  watch: {
    form: {
      handler() {
        //TODO axios.post()
      },
      deep: true,
    },
  },
  mounted() {
    this.$api.code.search(this.form).then((res) => {
      this.list = res.list;
    });
  },
  methods: {
    changeRoute(){
this.$router.push('/code/detail')
    },
    typeColor(str) {
      var ret;
      switch (str) {
        case "立减码":
          ret = "blue";
          break;
        case "兑换码":
          ret = "green";
          break;
        case "折扣码":
          ret = "orange";
      }
      return ret;
    },
  },
  data() {
    return {
      form: {
        type: "全部",
        expiration: "全部",
        keyword: "",
      },
      list: [
        {
          id: 123,
          name: "兑换码名称",
          description: "详情",
          type: "立减码",
          start: "2021-04-21",
          end: "2021-04-22",
          expiration: "未开始",
          total: 100,
          used: 50,
          code_rule: {
            discount: 10,
            threshold: 100,
            off: 100,
            giftID: 10,
          },
          scope: [],
        },
      ],
      types: ["立减码", "兑换码", "折扣码"],
      expiration: ["未开始", "未过期", "已过期"],
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