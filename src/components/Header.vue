<template>
  <nav>
    <router-link :to="{name: 'wallet'}" exact-active-class="active">Wallet</router-link>
    <router-link :to="{name: 'trade'}" exact-active-class="active">Trade</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$selected: #014666;
a {
  color: #00aeff;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: $selected;
  }
}
nav .router-link-active {
  color: $selected;
}
</style>
