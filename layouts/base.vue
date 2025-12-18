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
// #region agent log
import { isMobile } from 'mobile-device-detect'
// #endregion

import AnimatedLine from '~/components/AnimatedLine.vue'
import IconBurger from '~/components/IconBurger.vue'
import Navbar from '~/components/Navbar.vue'
import AsideMenu from '~/components/AsideMenu.vue'
import PrincipalFooter from '~/components/PrincipalFooter.vue'

export default {
  components: {
    AnimatedLine,
    IconBurger,
    Navbar,
    AsideMenu,
    PrincipalFooter
  },

  created () {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'layouts/base.vue:created', message: 'Layout base created hook started', data: { isMobile: typeof isMobile !== 'undefined' ? isMobile : 'undefined', storeExists: !!this.$store }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'A' }) }).catch(() => {})
    // #endregion

    try {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'layouts/base.vue:created', message: 'Before setMobileState commit', data: { isMobileValue: isMobile, storeState: this.$store.state }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
      // #endregion

      this.$store.commit('setMobileState', isMobile)

      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'layouts/base.vue:created', message: 'After setMobileState commit', data: { storeState: this.$store.state }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
      // #endregion
    } catch (error) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'layouts/base.vue:created', message: 'Error in created hook', data: { error: error.message, stack: error.stack }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'A' }) }).catch(() => {})
      // #endregion
      throw error
    }
  },

  mounted () {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'layouts/base.vue:mounted', message: 'Layout base mounted', data: { storeState: this.$store.state, componentsLoaded: true }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'C' }) }).catch(() => {})
    // #endregion
  }
}
</script>

<style>
.wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'burger nav'
    'aside__left main'
    'footer footer';
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 4rem 1fr 4rem;
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
