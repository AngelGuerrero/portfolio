<template>
  <div class="back__arrow">
    <div :class="[direction === 'left' ? 'left__arrow' : 'right__arrow']">
      <nuxt-link :to="to">
        <img
          src="~assets/images/fleche_verte_droite.svg"
          alt="Arrow icon"
          srcset="~assets/images/fleche_verte_droite.svg"
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'right',
      required: true
    },

    to: {
      type: String,
      required: true
    }
  },

  mounted () {
    this.$anime({
      targets: '.right__arrow',
      translateX: [-1000, 0],
      duration: 10000
    })
  }
}
</script>

<style lang="scss" scoped>
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
