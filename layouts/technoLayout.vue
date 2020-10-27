<template>
  <div class="dev layout__wrapper">
    <!-- Animated vertical lines -->
    <AnimatedLine :is-mobile="this.$store.state.isMobile" />

    <AsideMenu :is-mobile="this.$store.state.isMobile" />
    <Navbar />
    <main class="dev main background">
      <Nuxt />
    </main>
    <PrincipalFooter :prev="this.$store.state.nav.prev" :next="this.$store.state.nav.next" />
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
  created () {
    this.$store.commit('setMobileState', isMobile)
  }
}
</script>

<style lang="scss">
//
// This is how the layout is defined
//
.layout__wrapper {
  min-height: 100vh;

  display: grid;
  grid-template-rows: [layout-row-first] 50px
                      [layout-row-line-second] auto
                      [layout-row-line-last] 70px
                      [layout-row-end];

  grid-template-columns: [layout-col-first] 50px
                         [layout-col-line-second] 50px
                         [layout-col-line-third] auto
                         [layout-col-line-last] 50px
                         [layout-col-end];

  background-color: $principal;
}

.main {
  // Position of this class
  grid-row: layout-row-line-second / layout-row-line-last;
  grid-column: layout-col-line-second / layout-col-end;
}
</style>
