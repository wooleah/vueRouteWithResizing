<template>
  <div class="marketPage">
    <h3>Market Page</h3>
    <TradeHeader/>
    <TradeConsole/>
  </div>
</template>

<script>
import TradeConsole from "../../components/market/TradeConsole";
import TradeHeader from "../../components/market/TradeHeader";
export default {
  components: {
    TradeConsole,
    TradeHeader
  }
};
</script>

<style>
.marketPage {
  background-color: salmon;
}
</style>
