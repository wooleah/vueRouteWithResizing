<template>
  <div class="marketPage">
    <h3>Market Page</h3>
    <TradeHeader/>
    <TradeConsole/>
    <router-link to="/trade" v-show="windowWidth < 768">Back</router-link>
  </div>
</template>

<script>
import TradeConsole from "../../components/market/TradeConsole";
import TradeHeader from "../../components/market/TradeHeader";
export default {
  components: {
    TradeConsole,
    TradeHeader
  },
  props: {
    windowWidth: {
      type: Number
    }
  }
};
</script>

<style>
.marketPage {
  background-color: salmon;
}
</style>
