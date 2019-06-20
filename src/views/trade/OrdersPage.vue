<template>
  <div class="ordersPage">
    <div>Orders for wallet: {{$route.params.walletId}}</div>
    <ul>
      <li>order1</li>
      <li>order2</li>
      <li>order3</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.ordersPage {
  background-color: skyblue;
}
</style>
