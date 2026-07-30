<template>
  <div v-if="shouldAnimate" ref="field" class="cyber-field" aria-hidden="true">
    <div class="cyber-field__grid">
      <span
        v-for="i in 14"
        :key="i"
        class="cyber-field__pulse"
      />
    </div>
    <div class="cyber-field__scan" />
    <div class="cyber-field__vignette" />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    isMobile: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    animationContext: null,
    compactViewport: true,
    reduceMotion: false,
    viewportQuery: null
  }),

  computed: {
    shouldAnimate () {
      return (
        this.$route.path === '/' &&
        !this.compactViewport &&
        !this.reduceMotion
      )
    }
  },

  watch: {
    shouldAnimate (value) {
      if (value) {
        this.$nextTick(this.animate)
      } else {
        this.destroyAnimation()
      }
    }
  },

  mounted () {
    this.viewportQuery = window.matchMedia('(max-width: 639px)')
    this.compactViewport = this.viewportQuery.matches
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.viewportQuery.addListener(this.updateViewport)

    if (this.shouldAnimate) {
      this.animate()
    }
  },

  beforeDestroy () {
    if (this.viewportQuery) {
      this.viewportQuery.removeListener(this.updateViewport)
    }

    this.destroyAnimation()
  },

  methods: {
    updateViewport (event) {
      this.compactViewport = event.matches
    },

    animate () {
      if (!this.$refs.field || this.animationContext) {
        return
      }

      const field = this.$refs.field
      const grid = field.querySelector('.cyber-field__grid')
      const scan = field.querySelector('.cyber-field__scan')
      const pulses = field.querySelectorAll('.cyber-field__pulse')

      this.animationContext = gsap.context(() => {
        gsap.to(grid, {
          backgroundPosition: '0 72px, 72px 0',
          duration: 7,
          repeat: -1,
          ease: 'none'
        })

        gsap.fromTo(scan, {
          yPercent: -120,
          opacity: 0
        }, {
          yPercent: 760,
          opacity: 0.22,
          duration: 9,
          repeat: -1,
          repeatDelay: 3,
          ease: 'none'
        })

        gsap.set(pulses, {
          left: () => `${gsap.utils.random(8, 92)}%`,
          top: () => `${gsap.utils.random(10, 92)}%`,
          scale: 0,
          opacity: 0
        })

        gsap.to(pulses, {
          scale: () => gsap.utils.random(0.65, 1.35),
          opacity: () => gsap.utils.random(0.22, 0.58),
          duration: () => gsap.utils.random(1.4, 2.8),
          delay: () => gsap.utils.random(0, 6),
          repeat: -1,
          repeatDelay: () => gsap.utils.random(2, 7),
          repeatRefresh: true,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            amount: 5,
            from: 'random'
          }
        })
      }, field)
    },

    destroyAnimation () {
      if (this.animationContext) {
        this.animationContext.revert()
        this.animationContext = null
      }
    }
  }
}
</script>

<style scoped>
.cyber-field {
  position: fixed;
  z-index: -1;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 66%, rgba(0, 255, 249, 0.055), transparent 28%),
    #000814;
  perspective: 520px;
}

.cyber-field__grid {
  position: absolute;
  left: -25%;
  bottom: -28%;
  width: 150%;
  height: 88%;
  overflow: hidden;
  transform: rotateX(62deg);
  transform-origin: center top;
  background-image:
    linear-gradient(rgba(0, 255, 249, 0.13) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 249, 0.1) 1px, transparent 1px);
  background-size: 72px 72px;
  -webkit-mask-image: linear-gradient(to bottom, transparent 2%, rgba(0, 0, 0, 0.82) 28%, #000 100%);
  mask-image: linear-gradient(to bottom, transparent 2%, rgba(0, 0, 0, 0.82) 28%, #000 100%);
  opacity: 0.74;
  will-change: background-position;
}

.cyber-field__pulse {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #3bffbe;
  box-shadow:
    0 0 7px #3bffbe,
    0 0 18px rgba(0, 255, 249, 0.58);
  opacity: 0;
  will-change: transform, opacity;
}

.cyber-field__scan {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 12%;
  background: linear-gradient(to bottom, transparent, rgba(0, 255, 249, 0.055), transparent);
  opacity: 0;
  will-change: transform, opacity;
}

.cyber-field__vignette {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(0, 8, 20, 0.2) 0%, transparent 42%, rgba(0, 8, 20, 0.35) 100%),
    radial-gradient(ellipse at center, transparent 38%, rgba(0, 8, 20, 0.62) 100%);
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .cyber-field {
    display: none;
  }
}
</style>
