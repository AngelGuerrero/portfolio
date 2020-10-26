<template>
  <footer class="dev footer d-flex align-items-center justify-content-between">
    <div>
      <p class="text__status px-3">
        Website under construction 🚧
      </p>
    </div>

    <div class="footer__next">
      <nuxt-link to="/me">
        <img
          class="fleche"
          src="~assets/images/fleche_verte_droite.svg"
          alt="Fleche icon"
          srcset="~assets/images/fleche_verte_droite.svg"
        >
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  mounted () {
    this.$anime({
      targets: '.footer__next',
      translateX: [-1000, 0],
      duration: 10000
    })
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $principal;

  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;
}

.footer__next {
  width: 100px;
  height: 100%;
  background-color: $principal;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover {
    &::before {
      content: "NEXT";
      color: $accent;
      font-size: 14px;
      width: 100%;
      height: 100%;
      border: 3px solid $accent;
      padding: 2px;

      transition: all 1s;

      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      animation-name: "moveBtn";
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }
}

.footer__next .icon {
  font-size: 36px;
  color: white;
}

.text__status {
  color: $accent;
}
</style>
