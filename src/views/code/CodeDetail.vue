<template>
  <div id="code-detail-div" style="height: 100%; width: 100% ;margin-top:50px;">
    <div style="margin-top:50px; display: flex; justify-content: space-around; margin: auto">
      <v-card outlined elevation="10" width="700px">
        <v-card-title>
          <strong>{{ data.id }}</strong
          >{{ data.name }}
        </v-card-title>
        <v-card-subtitle>状态：{{ data.status }}</v-card-subtitle>
        <v-card-subtitle>总数：{{ data.total }}</v-card-subtitle>
        <v-card-subtitle>已使用：{{ data.used }}</v-card-subtitle>
      </v-card>

      <v-card outlined elevation="10" width="700px">
        <v-card
          class="list-item"
          v-for="(item, index) in data.codelist"
          :key="index"
          outlined
          tile
          elevation="5"
        >
          <strong>{{ item.code}}</strong>
          <div>
            <v-chip class="chip" dark :color="item.stat==='未使用'?'green':'red'">{{
              item.stat
            }}</v-chip>
          </div>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeDetail",
  data() {
    return {
      data: {
        id: 100,
        name: "我的兑换码",
        status: "已生效",
        total: 10,
        used: 5,
        codelist: [
          { code: "ZM4PFP0339X9UB", stat: "已使用" },
          { code: "PJ9L6JS8JLDRUW", stat: "已使用" },
          { code: "ZMBLIGDGCWL65Y", stat: "已使用" },
          { code: "4AAYQT1GKPIK20", stat: "已使用" },
          { code: "8P5TEQR8X1S5BT", stat: "已使用" },
          { code: "6GLFA00WSCXTNF", stat: "未使用" },
          { code: "XA78BGXZJYXWAT", stat: "未使用" },
          { code: "BE460OAURN13KR", stat: "未使用" },
          { code: "LU57L8INATN9LF", stat: "未使用" },
          { code: "RW8SOGINNXBLOF", stat: "未使用" },
        ],
      },
    };
  },
};
</script>

<style scoped>
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