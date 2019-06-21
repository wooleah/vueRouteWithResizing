<template>
  <div class="tradePage">
    <h3 class="title">Trade page</h3>
    <transition name="slide-left" mode="out-in">
      <SideBar class="left" v-show="renderSidebar"></SideBar>
    </transition>
    <transition name="slide-right" mode="out-in" @after-leave="afterLeave">
      <router-view class="right" :windowWidth="windowWidth"></router-view>
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
    this.$nextTick(() => {
      window.addEventListener("resize", this.detectWindowWidth);
      this.detectWindowWidth();
      this.moveToMarketPageInBigScreen();
    });
  },
  beforeDestory() {
    window.removeEventListener("resize", this.detectWindowWidth);
  },
  data() {
    return {
      windowWidth: 0,
      selectedPage: null,
      selectedWallet: 21,
      topMarket: "BAT-BTC"
    };
  },
  computed: {
    renderSidebar() {
      return (
        this.$route.name === "trade" ||
        ((this.$route.name === "orders" || this.$route.name === "market") &&
          this.windowWidth >= 768)
      );
    }
  },
  watch: {
    windowWidth: function(newWidth, oldWidth) {
      this.windowWidth = newWidth;
      // window size getting larger
      if (this.windowWidth >= 768 && oldWidth < this.windowWidth) {
        const params =
          this.selectedPage === "market"
            ? { market: this.topMarket }
            : { walletId: this.selectedWallet };
        this.$router.replace({ name: this.selectedPage, params });
      }
      this.moveToMarketPageInBigScreen();
    }
  },
  methods: {
    afterLeave() {
      // console.log("afterLeave");
    },
    detectWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    moveToMarketPageInBigScreen() {
      if (this.windowWidth >= 768 && this.$route.name === "trade") {
        this.$router.replace({
          name: "market",
          params: { market: this.topMarket }
        });
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === "orders" || to.name === "market") {
      this.selectedPage = to.name;
    }

    next();
  }
};
</script>

<style lang="scss">
$screen-tablet: 768px;

.tradePage {
  background-color: seagreen;
  color: black;
  width: 800px;
  height: 800px;
  display: grid;
  grid-template-columns: [left-start] 1fr [left-end right-start] 3fr [right-end];
  grid-template-rows: [title-start] 1fr [title-end content-start] 3fr [content-end];
  overflow: hidden;

  .title {
    grid-row: title;
    grid-column: left-start/right-end;
  }
  .left {
    grid-row: content;
    grid-column: left;
    transition: 0.5s;

    @media (max-width: $screen-tablet) {
      grid-column: left-start/right-end;
    }
  }
  .right {
    grid-row: content;
    grid-column: right;

    @media (max-width: $screen-tablet) {
      grid-column: left-start/right-end;
    }
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-right-enter {
  transform: translateX(50px);
  opacity: 0;
  @media (max-width: $screen-tablet) {
    transform: translateX(100%);
  }
}

.slide-right-enter-active {
  transition: all 0.4s ease-out;
}
.slide-right-leave-active {
  transition: all 0.4s ease-out;
}

.slide-right-leave-to {
  transform: translateX(50px);
  opacity: 0;
  @media (max-width: $screen-tablet) {
    transform: translateX(100%);
  }
}

.slide-left-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-enter-active {
  transition: all 0.4s ease-out;
}
.slide-left-leave-active {
  transition: all 0.4s ease-out;
}

.slide-left-leave {
  // transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
