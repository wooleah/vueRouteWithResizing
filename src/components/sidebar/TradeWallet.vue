<template>
  <div>
    <h3>Wallet {{tradeWallet}}</h3>
    <router-link :to="{name: 'orders', params: {walletId: tradeWallet}}">Open order & History</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tradeWallet: 21
    };
  }
};
</script>

<style>
</style>
