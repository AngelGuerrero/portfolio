<template>
  <div class="back__arrow">
    <div :class="[direction === 'left' ? 'left__arrow' : 'right__arrow']">
      <nuxt-link :to="to">
        <img src="~assets/images/fleche_verte_droite.svg" alt="Arrow icon"
            srcset="~assets/images/fleche_verte_droite.svg">
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


