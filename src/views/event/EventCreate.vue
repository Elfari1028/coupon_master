<template>
  <div id="event-create-div" style="height: 100%; width: 100%; display: flex">
    <div class="wrap">
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第1步：基本信息 </v-card-title>
            <v-text-field
              label="活动名称"
              :rules="formRules.basic"
              hide-details="auto"
            ></v-text-field>
            <br />
            <v-textarea
              v-model="form.description"
              outlined
              label="活动描述"
            ></v-textarea>
            <div class="pickers">
              <DatePicker v-model="form.start" label="开始时间" />
              <DatePicker v-model="form.end" label="结束时间" />
            </div>
            <v-select
              v-model="form.category"
              :items="categories"
              label="类型"
            ></v-select>

            <v-text-field
              label="活动链接"
              :rules="formRules.basic"
              hide-details="auto"
            ></v-text-field>
          </div>
        </v-card>
      </div>
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第2步：关联优惠券 </v-card-title>
            <v-combobox
              v-model="form.coupons"
              :items="couponsAvailable"
              chips
              clearable
              label="选择优惠券,最多十个"
              multiple
              prepend-icon="mdi-filter-variant"
              solo
              no-data-text="不得留空"
            >
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  v-bind="attrs"
                  :input-value="selected"
                  close
                  @click="select"
                  @click:close="remove(item)"
                >
                  <strong>{{ item }}</strong>
                </v-chip>
              </template>
            </v-combobox>
          </div>
        </v-card>
      </div>
      <div class="stepcard">
        <v-card min-heigh="200px" height="auto" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第3步：提交审核 </v-card-title>
            <v-card-text>
              提交审核后,管理员将对您的活动申请进行审核;<br />
              审核通过后,
              您将可以在管理页查看到各个优惠券获取所需要调用的接口;<br />
              接口以POST形式调用,并需同时提供KEY与用户ID;
            </v-card-text>
            <v-btn depressed color="primary"> 提交审核 </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";
export default {
  name: "EventCreate",
  components: { DatePicker },
  computed: {
    couponsAvailable() {
      return this.coupons;
    },
    price() {
      if (this.form.couponRule.category === "赞助推广") {
        return 12;
      } else return 0;
    },
  },
  mounted(){
    this.$api.coupon.list().then((res)=>{
      this.coupons = res.list;
    })
  },
  methods: {
    remove(item) {
      console.log(item);
      console.log(this.form.coupons);
      this.form.coupons.splice(
        this.form.coupons.findIndex((val) => {
          if (item === val) return true;
          else return false;
        }),
        1
      );
      console.log(this.form.coupons);
      // [...this.form.coupons];
    },
  },
  data() {
    return {
      coupons:[],
      form: {
        name: "",
        description: "",
        category: "合作推广",
        link: "",
        start:"",
        end:"",
        coupons: [],
      },
      formRules: {
        basic: [
          (value) => !!value || "Required.",
          (value) => (value && value.length >= 3) || "Min 3 characters",
        ],
      },
      categories: ["平台活动", "微信公众号活动", "网页活动"],
    };
  },
};
</script>

<style >
.wrap {
  height: 100%;
  width: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
}
.stepcard {
  /* display: inline-block; */
  width: 30%;
  margin: auto;
  height: 80%;
}
.card-inner {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}
.pickers {
  display: flex;
}
</style>