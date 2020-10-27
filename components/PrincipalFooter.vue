<template>
  <footer class="dev footer__wrapper dev">
    <div class="w-100 h-100 dev">
      <b-row class="h-100">
        <!-- prev -->
        <b-col col="1" md="1" class="dev my-col p-0">
          <div class="back__arrow">
            <div class="left__arrow">
              <nuxt-link to="/me">
                <img
                  src="~assets/images/fleche_verte_droite.svg"
                  alt="Arrow icon"
                  srcset="~assets/images/fleche_verte_droite.svg"
                >
              </nuxt-link>
            </div>
          </div>
        </b-col>

        <!-- Default Slot -->
        <b-col col="10" md="10" class="dev my-col">
          <p class="h5 react">
            Website under construction 🚧
          </p>
        </b-col>

        <!-- next -->
        <b-col col="1" md="1" class="dev my-col p-0">
          <div class="back__arrow">
            <div class="right__arrow">
              <nuxt-link to="/me">
                <img
                  src="~assets/images/fleche_verte_droite.svg"
                  alt="Arrow icon"
                  srcset="~assets/images/fleche_verte_droite.svg"
                >
              </nuxt-link>
            </div>
          </div>
        </b-col>
      </b-row>
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
.footer__wrapper {
  grid-row: layout-row-line-last / layout-row-end;
  grid-column: layout-col-line-second / layout-col-end;
}

.my-col {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin before($animation, $content) {
  content: $content;
  width: 100%;
  height: 100%;
  border: 3px solid $accent;
  padding: 5px;
  color: $accent;
  font-size: 14px;
  text-transform: uppercase;
  @if ($content == prev) {
    text-align: right;
  }

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  animation-name: $animation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}

.back__arrow {
  width: 100%;
  height: 100%;
  position: relative;
}

// Arrows classes
.arrow__box {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left__arrow {
  @extend .arrow__box;
  img {
    transform: rotateZ(180deg) rotateX(180deg);
  }
}

.right__arrow {
  @extend .arrow__box;
}

// Actions
.back__arrow:hover .left__arrow {
  z-index: 2;
  &::before {
    @include before("moveBtnLeft", "prev");
  }
}
.back__arrow:hover .right__arrow {
  z-index: 2;
  &::before {
    @include before("moveBtnRight", "next");
  }
}
</style>
