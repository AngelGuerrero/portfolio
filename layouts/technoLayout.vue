<template>
  <div class="wrapper dev">
    <!-- Aside menú -->
    <AsideMenu :is-mobile="this.$store.state.isMobile" />

    <!-- Animated vertical lines -->
    <AnimatedLine :is-mobile="this.$store.state.isMobile" />

    <!-- Nav -->
    <Navbar />

    <!-- Main content -->
    <main class="dev main">
      <Nuxt />
    </main>

    <!-- Footer -->
    <PrincipalFooter />
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
/*
  Fonts loaded for this specific layout
 */
@font-face {
  font-family: "Cy";
  src: url("../assets/fonts/Cy/Cy-Regular.otf");
}
@font-face {
  font-family: "Cy Extra Bold";
  src: url("../assets/fonts/Cy/Cy-ExtraBold.otf");
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
}

body {
  overflow: hidden;
  cursor: url("~assets/images/cursor.svg"), auto;
}

.icon {
  font-size: 22px;
  color: black;
}

.react {
  color: #00d8ff;
}
.vue {
  color: #55e7a6;
}
.heart {
  color: red;
}

.title--cursive {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  font-weight: 300;
}

.title--enfasis {
  color: white;
  font-family: "Cy Extra Bold";
  position: relative;

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: -5px;
    left: 0px;
    height: 30%;
    background-color: #00ffee;

    animation-name: slideright;
    animation-delay: 3s;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
}

//
// This is how the layout is defined
//
.wrapper {
  min-height: 100vh;

  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
  grid-template-rows: 50px auto 70px;

  background-color: $principal;
  overflow: hidden;
}

.wrapper__menu {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  // background-color: $principal;
  color: white;
}

.main {
  // background-color: $principal;
  // background-color: black;
  grid-column-start: 2;
  grid-column-end: 5;
}
</style>
