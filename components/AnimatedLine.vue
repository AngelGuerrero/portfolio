<template>
  <div v-if="!isMobile" class="wrapper__lines">
    <div v-for="i in 270" :key="i.id" class="box" />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    //
    // It doesn't play animations on mobile devices
    //
    isMobile: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    max: 100,
    min: 5
  }),

  mounted () {
    if (this.isMobile) {
      return
    }

    this.animate()
  },

  methods: {
    animate () {
      gsap.to('.box', {
        // Properties
        //
        keyframes: [
          {
            scale: 'random(0, .2)',
            translateY: 'random(-1000, 1000)',
            translateX: 'random(-100, 1000)'
          },
          { opacity: 0.7 },
          {
            translateY: 'random(-1000, 10000)',
            scale: 'random(0, .2)',
            duration: 15
          },
          { opacity: 1 },
          {
            backgroundColor:
              'random(["purple", "cyan", "fiusha", "green", "white", "pink"])',
            translateY: 'random(-1000, 1000)',
            scale: 'random(0, .1)',
            duration: 10
          },
          { delay: 1 },
          { rotate: 90 },
          { delay: 1 },
          {
            backgroundColor:
              'random(["purple", "cyan", "fiusha", "green", "white", "pink"])',
            translateX: 'random(-100, 1000)',
            scale: 'random(0, .3)',
            duration: 30
          },
          {
            backgroundColor:
              'random(["purple", "cyan", "fiusha", "green", "white", "pink"])',
            translateX: 'random(-100, 1000)',
            translateY: 'random(-1000, 1000)',
            scale: 'random(0, .1)',
            opacity: 'random(0, .7)',
            duration: 3
          }
        ],
        //
        // Config
        duration: 50,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        //
        // Stagger
        stagger: {
          amount: 9.5,
          grid: 'auto',
          from: 'center',
          ease: 'slow( 0.7 0.7, 0.7 0.7, false)'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper__lines {
  width: 100%;
  height: 100%;
  background-color: $principal;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  overflow: hidden;
}

.box {
  width: 3px;
  height: 35%;
  background-color: cyan;
  scale: 0;
  opacity: 0;
}
</style>
