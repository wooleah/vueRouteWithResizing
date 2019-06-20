<template>
  <div class="tradePage">
    <h3 class="title">Trade page</h3>
    <p>clientWidth: {{windowWidth}}</p>
    <transition name="slide-fade">
      <SideBar class="left"></SideBar>
    </transition>
    <transition name="slide-fade" mode="out-in" @after-leave="afterLeave">
      <router-view class="right"></router-view>
    </transition>
  </div>
</template>

<script>
import SideBar from "../../components/sidebar/Sidebar";
export default {
  components: {
    SideBar
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    this.windowWidth = document.documentElement.clientWidth;
    this.prevWindowWidth = this.windowWidth;
  },
  beforeDestory() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  data() {
    return {
      windowWidth: 0,
      prevWindowWidth: 0,
      isSmallScreen: null,
      selectedPage: null,
      selectedWallet: 21,
      topMarket: "BAT-BTC",
      hideSideBar: false
    };
  },
  methods: {
    afterLeave() {
      console.log("afterLeave");
    },
    // ONLY for resizing
    checkScreenSize() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth < 600) {
        this.$router.replace({ name: "trade" });
        this.isSmallScreen = true;
      }
      if (this.windowWidth >= 600) {
        const params =
          this.selectedPage === "market"
            ? { market: this.topMarket }
            : { walletId: this.selectedWallet };
        this.$router.replace({ name: this.selectedPage, params });
        this.isSmallScreen = false;
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === "orders") this.selectedPage = "orders";
    if (to.name === "market") this.selectedPage = "market";
    next();
  }
};
</script>

<style lang="scss">
.tradePage {
  background-color: seagreen;
  color: black;
  width: 800px;
  height: 800px;
  display: grid;
  grid-template-columns: [left-start] 1fr [left-end right-start] 3fr [right-end];
  grid-template-rows: [title-start] 1fr [title-end content-start] 3fr [content-end];

  .title {
    grid-row: title;
    grid-column: left-start/right-end;
  }
  .left {
    grid-row: content;
    grid-column: left;
  }
  .right {
    grid-row: content;
    grid-column: right;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
