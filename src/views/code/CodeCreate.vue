

<template>
  <div id="codecreate-div" style="height: 100%; width: 100%; display: flex">
    <div class="wrap">
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第1步：基本信息 </v-card-title>
            <v-text-field
              label="兑换码名称"
              :rules="formRules.basic"
              hide-details="auto"
            ></v-text-field>
            <br />
            <v-textarea
              v-model="form.description"
              outlined
              label="兑换码描述"
            ></v-textarea>
            <div class="pickers">
              <DatePicker v-model="form.start" label="有效期开始时间" />
              <DatePicker v-model="form.end" label="有效期结束时间" />
            </div>  
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
            <v-card-title> 第2步：兑换码模式 </v-card-title>

            <v-card-subtitle
              >您选择的兑换码模式是：{{ form.type }} <br /></v-card-subtitle
            >
            <div v-if="form.type === '立减码'">
              <v-card-text
                >在该模式下，您可以制定立减规则。请注意：优惠额不得小于等于商品价格。最小支付金额为0.01元。即5元的满减券必须满5.01元才可符合规则。您可使用该规则制定您理想的满减规则</v-card-text
              >
            </div>
            <div v-if="form.type === '兑换码'">
              <v-card-text
                >在该模式下，您可以制定赠品规则。可以兑换指定赠品。</v-card-text
              >
            </div>
            <div v-if="form.type === '折扣券'">
              <v-card-text
                >在该模式下，您可以制定折扣规则。请注意：优惠额不得小于等于商品价格。最小支付金额为0.01元。最高优惠99%。</v-card-text
              >
            </div>
            <v-divider></v-divider>
            <v-card-subtitle>规则</v-card-subtitle>
            <div v-if="form.type === '立减码'">

                  <v-text-field
                    prefix="立减"
                    suffix="元"
                    v-model="form.couponRule.off"
                    label=""
                    outlined
                  ></v-text-field>
       
            </div>
            <div v-if="form.type === '折扣码'">
          
                  <v-text-field
                    prefix="折扣"
                    suffix="%"
                    v-model="form.couponRule.discount"
                    label=""
                    outlined
                    messages="指用户支付原价的x%"
                  ></v-text-field>
   
            </div>
            <div v-if="form.type === '兑换码'">

                  <v-text-field
                    prefix="赠"
                    v-model="form.couponRule.giftID"
                    label="书本ID"
                    outlined
                  ></v-text-field>
     
            </div>

            <v-combobox
              v-model="form.scope"
              v-if="form.type!='兑换码'"
              :items="booksAvailable"
              chips
              clearable
              multiple
              :disabled="form.scope.length > 10"
              label="选择兑换码适用书籍集合,留空表示所有"
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
              请再次检查您的兑换码规则配置。<br />
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
  name: "CodeCreate",
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
        type: "兑换码", // 0 for AMAZON 1 for BUSINESS SELF_PAID 2 for PROMO
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
      types: ["立减码", "兑换码", "折扣码"],
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