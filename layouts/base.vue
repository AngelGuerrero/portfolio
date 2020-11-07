<template>
  <div class="dev wrapper bg-custom-main">
    <!-- Animated vertical lines -->
    <AnimatedLine :is-mobile="this.$store.state.isMobile" />

    <div class="icon__burger">
      <IconBurger />
    </div>

    <nav class="nav">
      <Navbar />
    </nav>

    <aside class="aside__left">
      <AsideMenu :is-mobile="this.$store.state.isMobile" />
    </aside>

    <main class="main">
      <Nuxt />
    </main>

    <!-- FIX: Add content aside right -->
    <aside class="aside__right hidden sm:block" />

    <footer class="footer">
      <PrincipalFooter :prev="this.$store.state.nav.prev" :next="this.$store.state.nav.next" />
    </footer>
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
// ██╗      █████╗ ██╗   ██╗ ██████╗ ██╗   ██╗████████╗
// ██║     ██╔══██╗╚██╗ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝
// ██║     ███████║ ╚████╔╝ ██║   ██║██║   ██║   ██║
// ██║     ██╔══██║  ╚██╔╝  ██║   ██║██║   ██║   ██║
// ███████╗██║  ██║   ██║   ╚██████╔╝╚██████╔╝   ██║
// ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝  ╚═════╝    ╚═╝
//
.wrapper {
  height: 100vh;

  display: grid;
  // grid-gap: 5px;
  grid-template-areas:
    "burger nav"
    "aside__left main"
    "footer footer"
  ;

  grid-template-columns: 3rem 1fr;
  grid-template-rows: 3rem 1fr 4rem;

  @media screen and (min-width: 640px) {
    grid-template-areas:
      "burger nav nav"
      "aside__left main aside__right"
      "footer footer footer"
    ;
    grid-template-columns: 3rem 1fr 3rem;
  }
}

.icon__burger {
  grid-area: burger;
}

.nav {
  grid-area: nav;
}

.aside__left {
  grid-area: aside__left;
}

.main {
  grid-area: main;
}

.aside__right {
  grid-area: aside__right;
}

.footer {
  grid-area: footer;
}
</style>
