<template>
  <div>
    <div>
      <h4>Choose currency2</h4>
      <span>{{currency2}}</span>
    </div>
    <ul>
      <router-link
        tag="li"
        :to="{name: 'market', params: {market: `${currency}-${currency2}`}}"
        v-for="currency in currencies"
        :key="currency"
      >
        <a>{{currency}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencies: ["BAT", "BCH", "TUSD"],
      currency2: "BTC"
    };
  }
};
</script>

<style>
</style>
