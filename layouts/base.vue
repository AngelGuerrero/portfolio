<template>
  <div class="dev wrapper bg-custom-main">
    <!-- Animated vertical lines -->
    <AnimatedLine :is-mobile="this.$store.state.isMobile" />

    <nav class="nav">
      <Navbar />
    </nav>
    <aside class="aside_left">
      <AsideMenu :is-mobile="this.$store.state.isMobile" />
    </aside>
    <main class="main">
      <Nuxt />
    </main>
    <!-- FIX: Add content aside right -->
    <aside class="aside_right hidden sm:block" />
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
    "nav nav"
    "aside_left main"
    "aside_left footer"
  ;

  grid-template-rows: 4rem 1fr 4rem;
  grid-template-columns: 4rem auto;

  @media screen and (min-width: 640px) {
    grid-template-areas:
      "nav nav nav"
      "aside_left main aside_right"
      "aside_left footer footer"
    ;
    grid-template-columns: 4rem 1fr 5rem;
  }
}

.nav {
  grid-area: nav;
}

.aside_left {
  grid-area: aside_left;
}

.main {
  grid-area: main;
}

.aside_right {
  grid-area: aside_right;
}

.footer {
  grid-area: footer;
}
</style>
