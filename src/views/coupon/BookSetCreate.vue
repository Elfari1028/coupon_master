<template>
  <div id="coupon-create-div" style="height: 100%; width: 100%; display: flex">
    <div class="wrap">
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第1步：基本信息 </v-card-title>
            <v-text-field
              label="书籍集合名称"
              :rules="formRules.basic"
              hide-details="auto"
            ></v-text-field>
            <br />
            <v-textarea
              v-model="form.description"
              outlined
              label="书籍集合描述"
            ></v-textarea>
          </div>
        </v-card>
      </div>
      <div class="stepcard">
        <v-card min-height="650px" height="100%" outlined shaped elevation="5">
          <div class="card-inner">
            <v-card-title> 第2步：添加书籍</v-card-title>
            <v-card-text>
              1.留空表示所有书籍 <br />
              2.使用逗号分隔多个ID,可以直接复制粘贴 <br />
              3.ID在前并用中括号围住, 可只填二者之一 <br />
              示例: <strong> [13412]书名,[12331],书名 </strong>
            </v-card-text>
            <div class="combbox-wrap">
              <v-combobox
                v-model="form.books"
                :items="books"
                chips
                clearable
                multiple
                :delimiters="[',']"
                label="选择优惠券适用书籍集合"
                solo
                @keyup="update"
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
            <v-btn depressed color="primary"> 创建 </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookSetCreate",
  components: {},
  watch: {},
  mounted() {
    window.vue = this;
  },
  computed: {
    price() {
      if (this.form.couponRule.category === "赞助推广") {
        return 12;
      } else return 0;
    },
    books() {
      return ["[ID3124]爱的故事", "[ID019234]饥饿游戏"];
    },
  },
  methods: {
    update() {
      console.log(this);
      console.log(this.form.books);
      var list = this.form.books[this.form.books.length - 1].split(",");
      this.form.books.pop(this.form.books.length - 1);
      this.form.books = [...this.form.books, ...list];
    },
    remove(item) {
      console.log(item);
      console.log(this.form.books);
      this.form.books.splice(
        this.form.books.findIndex((val) => {
          if (item === val) return true;
          else return false;
        }),
        1
      );
      console.log(this.form.books);
      this.form.scope = [...this.form.books];
    },
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        books: [],
      },
      formRules: {
        basic: [
          (value) => !!value || "Required.",
          (value) => (value && value.length >= 3) || "Min 3 characters",
        ],
      },
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
  justify-content: space-evenly;
}
.stepcard {
  display: inline-block;
  width: 35%;
  height: 80%;
}
.card-inner {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 30px;
}
.pickers {
  display: flex;
}
.combbox-wrap{
  overflow: auto;
  max-height: 500px;
}
</style>