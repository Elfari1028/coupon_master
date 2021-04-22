

<template>
  <div id="coupon-create-div" style="height: 100%; width: 100%; display: flex">
    <div class="wrap">
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第1步：基本信息 </v-card-title>
            <v-text-field
              label="优惠规则名称"
              :rules="formRules.basic"
              hide-details="auto"
            ></v-text-field>
            <br />
            <v-textarea
              v-model="form.description"
              outlined
              label="优惠规则描述"
            ></v-textarea>
            <div class="pickers">
              <DatePicker :disabled="false" v-model="form.start" label="有效期开始时间" />
              <DatePicker :disabled="false" v-model="form.end" label="有效期结束时间" />
            </div>
            <v-select
              v-model="form.category"
              :items="categories"
              label="合作模式"
            ></v-select>
            <v-select
              v-model="form.type"
              :items="types"
              label="优惠模式"
            ></v-select>
            <v-text-field
              label="数量"
              :rules="formRules.basic"
              hide-details="auto"
            ></v-text-field>
          </div>
        </v-card>
      </div>
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第2步：优惠模式 </v-card-title>

            <v-card-subtitle
              >您选择的优惠模式是：{{ form.type }} <br />您选择的合作模式是：{{
                form.category
              }}</v-card-subtitle
            >
            <div v-if="form.category === '合作推广'">
              <v-card-text
                >在{{
                  form.category
                }}模式下，您无需预付优惠券的成本。你可以设置返利比例(返利计算公式：返利比例*每笔订单实付价格)，平台将审核您的申请。若通过审核，您则可以将此券绑定至活动中。若未通过，请根据审核意见修改数量与返利比例。</v-card-text
              >
            </div>
            <div v-if="form.category === '赞助推广'">
              <v-card-text
                >在{{
                  form.category
                }}模式下，您将需要支付优惠券的成本。同时您也可以设置返利比例(返利计算公式：返利比例*每笔订单实付价格)，平台将审核您的申请。若通过审核，您则可以将此券绑定至活动中。若未通过，请根据审核意见修改数量与返利比例。</v-card-text
              >
            </div>
            <div v-if="form.category === '平台推广'">
              <v-card-text
                >在{{
                  form.category
                }}模式由平台运营人员管理使用，无需支付费用。平台财务将审核您的申请。若通过审核，您则可以将此券绑定至活动中。若未通过，请根据审核意见修改数量与返利比例。</v-card-text
              >
            </div>
            <div v-if="form.type === '满减券'">
              <v-card-text
                >在该模式下，您可以制定满减规则。请注意：优惠额不得小于等于商品价格。最小支付金额为0.01元。即5元的满减券必须满5.01元才可符合规则。您可使用该规则制定您理想的满减规则</v-card-text
              >
            </div>
            <div v-if="form.type === '赠品券'">
              <v-card-text
                >在该模式下，您可以制定赠品规则。购买指定商品将获得指定赠品。</v-card-text
              >
            </div>
            <div v-if="form.type === '折扣券'">
              <v-card-text
                >在该模式下，您可以制定折扣规则。请注意：优惠额不得小于等于商品价格。最小支付金额为0.01元。最高优惠99%。</v-card-text
              >
            </div>
            <v-divider></v-divider>
            <v-card-subtitle>优惠规则</v-card-subtitle>
            <div v-if="form.type === '满减券'">
              <v-row>
                <v-col cols="4" sm="4">
                  <v-text-field
                    prefix="满"
                    suffix="元"
                    v-model="form.couponRule.threshold"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4" sm="4">
                  <v-text-field
                    prefix="减"
                    suffix="元"
                    v-model="form.couponRule.off"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
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
                    prefix="满"
                    suffix="元"
                    v-model="form.couponRule.threshold"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="4" sm="4">
                  <v-text-field
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
                    prefix="满"
                    suffix="元"
                    v-model="form.couponRule.threshold"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-text-field
                    prefix="赠"
                    v-model="form.couponRule.giftID"
                    label="书本ID"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
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
              :disabled="form.scope.length > 10"
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
      <div class="stepcard">
        <v-card min-heigh="200px" height="auto" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第3步：确认 </v-card-title>
            <div>
              请再次检查您的优惠券规则配置。<br />
              在该规则下，您需要预付
              <br />
              <h1 style="display: inline">{{ price }}</h1>
              元
            </div>
            <br />
            <v-btn depressed color="primary"> 支付并继续 </v-btn>
          </div></v-card
        >
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";
export default {
  name: "CouponCreate",
  components: { DatePicker },
  computed: {
    price() {
      if (this.form.couponRule.category === "赞助推广") {
        return 12;
      } else return 0;
    },
    booksAvailable() {
      return this.booksets;
    },
  },
  mounted(){
    this.$api.bookset.list().then((res)=>{
      if(res.success === true){
        this.booksets = res.list;
      }
    });
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
      booksets:[],
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