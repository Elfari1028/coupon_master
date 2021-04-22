<template>
  <div class="home" >
    <div class="banner">
        <h1 style="color:white;">Welcome to Coupon Master</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
   data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
};
</script>

<style>
.home{
  width:100%;
  height:100%;
}
.banner{
  margin-top: 20px;
  width:100%;
  height:800px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  justify-content: space-around;
  display: flex;
  align-items: center;
}

</style>