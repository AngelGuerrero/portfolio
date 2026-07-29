<template>
  <div
    class="dev wrapper overflow-x-hidden"
    :class="
      this.$store.state.isMobile ? 'bg-custom-main-500' : 'bg-transparent'
    "
  >
    <!-- ================================================
        Animated vertical lines.

        This component set the background color, it has
        a fixed position, its with and hight is 100%.
        ================================================ -->
    <AnimatedLine :is-mobile="this.$store.state.isMobile" />

    <div class="icon__burger">
      <IconBurger />
    </div>

    <MobileMenu />
    <PageTransition />

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
import AnimatedLine from '~/components/AnimatedLine.vue'
import IconBurger from '~/components/IconBurger.vue'
import Navbar from '~/components/Navbar.vue'
import AsideMenu from '~/components/AsideMenu.vue'
import MobileMenu from '~/components/MobileMenu.vue'
import PageTransition from '~/components/PageTransition.vue'
import PrincipalFooter from '~/components/PrincipalFooter.vue'

export default {
  components: {
    AnimatedLine,
    IconBurger,
    Navbar,
    AsideMenu,
    MobileMenu,
    PageTransition,
    PrincipalFooter
  },

  beforeMount () {
    this.viewportQuery = window.matchMedia('(max-width: 767px)')
    this.updateViewport(this.viewportQuery)
  },

  mounted () {
    this.viewportQuery.addListener(this.updateViewport)
  },

  beforeDestroy () {
    if (this.viewportQuery) {
      this.viewportQuery.removeListener(this.updateViewport)
    }
  },

  methods: {
    updateViewport (event) {
      this.$store.commit('setMobileState', event.matches)
    }
  }
}
</script>

<style>
.wrapper {
  height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'burger nav'
    'aside__left main'
    'footer footer';
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 4rem 1fr 4rem;
}

@media screen and (max-width: 767px) {
  .wrapper {
    height: auto;
  }
}

@media screen and (min-width: 768px) {
  .wrapper {
    grid-template-areas:
      'burger nav nav'
      'aside__left main aside__right'
      'footer footer footer';
    grid-template-columns: 4rem 1fr 4rem;
  }
}

.icon__burger {
  grid-area: burger;
  position: relative;
  z-index: 100;
}

.nav {
  grid-area: nav;
}

.aside__left {
  grid-area: aside__left;
}

.main {
  grid-area: main;
  min-width: 0;
  min-height: 0;
}

.aside__right {
  grid-area: aside__right;
}

.footer {
  grid-area: footer;
}
</style>
