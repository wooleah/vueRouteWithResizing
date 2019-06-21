<template>
  <div class="ordersPage">
    <div>Orders for wallet: {{$route.params.walletId}}</div>
    <ul>
      <li>order1</li>
      <li>order2</li>
      <li>order3</li>
    </ul>
    <router-link to="/trade" v-show="windowWidth < 768">Back</router-link>
  </div>
</template>

<script>
export default {
  props: {
    windowWidth: {
      type: Number
    }
  }
};
</script>

<style lang="scss">
.ordersPage {
  background-color: skyblue;
}
</style>
