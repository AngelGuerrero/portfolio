<template>
  <footer class="dev footer">
    <div class="footer__next my-btn">
      <client-only>
        <img
          class="fleche"
          src="~assets/images/fleche_verte_droite.svg"
          alt="Fleche icon"
          srcset="~assets/images/fleche_verte_droite.svg"
        >
      </client-only>
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

  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer__next {
  // opacity: 0;
  width: 100px;
  height: 100%;
  background-color: $principal;

  display: flex;
  justify-content: center;
  align-items: center;

  // animation-name: slideBoxRight;
  // animation-delay: 5s;
  // animation-duration: 3s;
  // animation-fill-mode: forwards;

  &:hover {
    cursor: pointer;
  }
}

.footer__next .icon {
  font-size: 36px;
  color: white;
}
</style>
