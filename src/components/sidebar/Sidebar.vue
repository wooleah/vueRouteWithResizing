<template>
  <div class="sideBar">
    <TradeWallet/>
    <MarketList/>
  </div>
</template>

<script>
import TradeWallet from "./TradeWallet";
import MarketList from "./MarketList";
export default {
  components: {
    TradeWallet,
    MarketList
  }
};
</script>

<style lang="scss">
.sideBar {
  background-color: gold;
}
</style>
