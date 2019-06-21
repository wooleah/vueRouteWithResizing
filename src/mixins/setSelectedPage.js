export default {
  created() {
    this.$store.dispatch("setSelectedPage", this.$route.name);
  }
}