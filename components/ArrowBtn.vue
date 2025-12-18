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
import { gsap } from 'gsap'

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
    gsap.to('.right__arrow', {
      duration: 4,
      keyframes: [{ translateX: -1100 }, { opacity: 1, translateX: 0 }]
    })
  }
}
</script>

<style scoped>
.back__arrow {
  width: 100%;
  height: 100%;
  position: relative;
}

.arrow__box {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left__arrow {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left__arrow img {
  transform: rotateZ(180deg) rotateX(180deg);
}

.right__arrow {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.back__arrow:hover .left__arrow {
  z-index: 2;
}

.back__arrow:hover .left__arrow::before {
  content: 'prev';
  width: 100%;
  height: 100%;
  border: 3px solid #3bffbe;
  padding: 5px;
  color: #3bffbe;
  font-size: 14px;
  text-transform: uppercase;
  text-align: right;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  animation-name: moveBtnLeft;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}

.back__arrow:hover .right__arrow {
  z-index: 2;
}

.back__arrow:hover .right__arrow::before {
  content: 'next';
  width: 100%;
  height: 100%;
  border: 3px solid #3bffbe;
  padding: 5px;
  color: #3bffbe;
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  animation-name: moveBtnRight;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}
</style>
