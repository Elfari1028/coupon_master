<template>
  <v-app>
    <v-navigation-drawer app permanent expand-on-hover elevation="5">
      <!-- --><v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <div class="c-avatar">
              <v-icon outline circle>mdi-account</v-icon>
            </div>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Alphar Abdugeni</v-list-item-title>
            <v-list-item-subtitle>alpharabdugeni@outlook.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link href="/#/">
          <v-list-item-icon>
            <v-icon>mdi-home-variant-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-group :value="false" prepend-icon="mdi-tag">
          <template v-slot:activator>
            <v-list-item-title>优惠券</v-list-item-title>
          </template>
                    <v-list-item link href="/#/coupon/bookset/create">
            <v-list-item-icon>
              <v-icon small>mdi-tag-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>创建书籍集合</v-list-item-title>
          </v-list-item>
                    <v-list-item link href="/#/coupon/bookset/manage">
            <v-list-item-icon>
              <v-icon small>mdi-tag-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>管理书籍集合</v-list-item-title>
          </v-list-item>
          <v-list-item link href="/#/coupon/create">
            <v-list-item-icon>
              <v-icon small>mdi-tag-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>创建优惠券</v-list-item-title>
          </v-list-item>
          <v-list-item link href="/#/coupon/manage">
            <v-list-item-icon>
              <v-icon small>mdi-tag-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>优惠券管理</v-list-item-title>
          </v-list-item>
          <v-list-item link href="/#/coupon/stats">
            <v-list-item-icon>
              <v-icon small>mdi-chart-areaspline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>活动数据统计</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>
        <v-list-group :value="false" prepend-icon="mdi-sign-direction">
          <template v-slot:activator>
            <v-list-item-title>促销活动</v-list-item-title>
          </template>
          <v-list-item link href="/#/event/create">
            <v-list-item-icon>
              <v-icon small>mdi-sign-direction-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>创建促销活动</v-list-item-title>
          </v-list-item>
          <v-list-item link href="/#/event/manage">
            <v-list-item-icon>
              <v-icon small>mdi-routes</v-icon>
            </v-list-item-icon>
            <v-list-item-title>活动管理</v-list-item-title>
          </v-list-item>
          <v-list-item link href="/#/event/stats">
            <v-list-item-icon>
              <v-icon small>mdi-chart-areaspline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>活动数据统计</v-list-item-title>
          </v-list-item>
        </v-list-group>
                <v-divider></v-divider>
        <v-list-group :value="false" prepend-icon="mdi-sign-direction">
          <template v-slot:activator>
            <v-list-item-title>兑换码</v-list-item-title>
          </template>
          <v-list-item link href="/#/code/create">
            <v-list-item-icon>
              <v-icon small>mdi-sign-direction-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>购买并创建兑换码</v-list-item-title>
          </v-list-item>
          <v-list-item link href="/#/code/manage">
            <v-list-item-icon>
              <v-icon small>mdi-routes</v-icon>
            </v-list-item-icon>
            <v-list-item-title>兑换码管理</v-list-item-title>
          </v-list-item>
          <v-list-item link href="/#/code/stats">
            <v-list-item-icon>
              <v-icon small>mdi-chart-areaspline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>兑换码数据统计</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="darkGrey" dark>
      <div class="d-flex align-center">
        <v-icon style="margin-right: 10px">mdi-ticket-percent-outline</v-icon>
        <span>CouponMaster</span>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",
  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.c-avatar {
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  border-color: gray;
}
</style>