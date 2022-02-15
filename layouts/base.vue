<template>
  <div class="dev bg-transparent wrapper overflow-x-hidden">
    <!-- ================================================
        Animated vertical lines.

        This component set the background color, it has
        a fixed position, its with and hight is 100%.
        ================================================ -->
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
      <PrincipalFooter
        :prev="this.$store.state.nav.prev"
        :next="this.$store.state.nav.next"
      />
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
  min-height: 100vh;

  display: grid;
  // grid-gap: 5px;
  grid-template-areas:
    'burger nav'
    'aside__left main'
    'footer footer';

  grid-template-columns: 4rem 1fr;
  grid-template-rows: 4rem 1fr 4rem;

  @include media-screen-md {
    grid-template-areas:
      'burger nav nav'
      'aside__left main aside__right'
      'footer footer footer';
    grid-template-columns: 4rem 1fr 4rem;
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
