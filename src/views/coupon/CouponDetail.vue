<template>
  <div id="coupon-detail-div" style="height: 100%; width: 100%; display: flex">
    <div class="wrap">
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 基本信息 </v-card-title>
            <v-text-field
              disabled
              label="优惠规则名称"
              :rules="formRules.basic"
              hide-details="auto"
            ></v-text-field>
            <br />
            <v-textarea
              disabled
              v-model="form.description"
              outlined
              label="优惠规则描述"
            ></v-textarea>
            <div class="pickers">
              <DatePicker
                v-model="form.start"
                label="有效期开始时间"
                :disbaled="true"
              />
              <DatePicker
                v-model="form.end"
                label="有效期结束时间"
                :disabled="true"
              />
            </div>
            <div class="pickers">
              <v-select
                disabled
                style="margin-right: 30px"
                v-model="form.category"
                :items="categories"
                label="合作模式"
              ></v-select>
              <v-select
                disabled
                style="margin-right: 30px"
                v-model="form.type"
                :items="types"
                label="优惠模式"
              ></v-select>
              <v-text-field
                disabled
                style="margin-right: 30px"
                label="数量"
                :rules="formRules.basic"
                hide-details="auto"
              ></v-text-field>
            </div>
             <v-card-subtitle>优惠规则</v-card-subtitle>
            <div v-if="form.type === '满减券'">
              <v-row>
                <v-col cols="4" sm="4">
                  <v-text-field
                   disabled
                    prefix="满"
                    suffix="元"
                    v-model="form.couponRule.threshold"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4" sm="4">
                  <v-text-field
                   disabled
                    prefix="减"
                    suffix="元"
                    v-model="form.couponRule.off"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                   disabled
                    v-if="form.category != '平台推广'"
                    prefix="返利"
                    suffix="%"
                    v-model="form.couponRule.giftID"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div v-if="form.type === '折扣券'">
              <v-row>
                <v-col cols="4" sm="4">
                  <v-text-field
                   disabled
                    prefix="满"
                    suffix="元"
                    v-model="form.couponRule.threshold"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="4" sm="4">
                  <v-text-field
                   disabled
                    prefix="折扣"
                    suffix="%"
                    v-model="form.couponRule.discount"
                    label=""
                    outlined
                    messages="指用户支付原价的x%"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                   disabled
                    v-if="form.category != '平台推广'"
                    prefix="返利"
                    suffix="%"
                    v-model="form.couponRule.giftID"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div v-if="form.type === '赠品券'">
              <v-row>
                <v-col cols="4">
                  <v-text-field
                   disabled
                    prefix="满"
                    suffix="元"
                    v-model="form.couponRule.threshold"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-text-field
                   disabled
                    prefix="赠"
                    v-model="form.couponRule.giftID"
                    label="书本ID"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                   disabled
                    v-if="form.category != '平台推广'"
                    prefix="返利"
                    suffix="%"
                    v-model="form.couponRule.profit"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>

            <v-combobox
              v-model="form.scope"
              :items="booksAvailable"
              chips
              clearable
              multiple
              disabled
              label="选择优惠券适用书籍集合,留空表示所有"
              solo
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
      <div class="stepcard2">
        <v-card min-height="650px" min-width="300px" height="100%" outlined shaped elevation="5">
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";
export default {
  name: "CouponDetail",
  components: { DatePicker },
  computed: {
    price() {
      if (this.form.couponRule.category === "赞助推广") {
        return 12;
      } else return 0;
    },
    booksAvailable() {
      return ["[ID3124]爱的故事", "[ID019234]饥饿游戏"];
    },
  },
  methods: {
    remove(item) {
      // console.log(item);
      // console.log(this.form.scope);
      this.form.scope.splice(
        this.form.scope.findIndex((val) => {
          if (item === val) return true;
          else return false;
        }),
        1
      );
      // console.log(this.form.scope);
      // this.form.scope = [...this.form.scope];
    },
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        amount: "",
        category: "合作推广",
        type: "满减券", // 0 for AMAZON 1 for BUSINESS SELF_PAID 2 for PROMO
        couponRule: {
          discount: 0,
          threshold: 0,
          off: 0,
          giftID: "",
        },
        profit: 0,
        scope: [],
        start: "",
        end: "",
      },
      formRules: {
        basic: [
          (value) => !!value || "Required.",
          (value) => (value && value.length >= 3) || "Min 3 characters",
        ],
      },
      categories: ["合作推广", "赞助推广", "平台推广"],
      types: ["满减券", "赠品券", "折扣券"],
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
  display: inline-block;
  margin: 10px;
  width: 60%;
  height: 80%;
}
.stepcard2 {
  display: inline-block;
  width: 30%;
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