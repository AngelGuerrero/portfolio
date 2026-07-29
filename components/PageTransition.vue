<template>
  <div
    ref="root"
    class="route-transition"
    data-page-transition
    aria-hidden="true"
  >
    <div class="route-transition__panels">
      <span
        v-for="panel in 5"
        :key="panel"
        ref="panels"
        class="route-transition__panel"
      />
    </div>

    <div ref="label" class="route-transition__label">
      <span aria-hidden="true" />
      <p>{{ destination }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data: () => ({
    beforeHook: null,
    afterHook: null,
    destination: '',
    isCovered: false,
    reduceMotion: false
  }),

  mounted () {
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.beforeHook = this.$router.beforeEach(this.coverPage)
    this.afterHook = this.$router.afterEach(this.revealPage)
  },

  beforeDestroy () {
    if (this.beforeHook) {
      this.beforeHook()
    }

    if (this.afterHook) {
      this.afterHook()
    }

    gsap.killTweensOf([
      this.$refs.root,
      this.$refs.label,
      ...(this.$refs.panels || [])
    ])
  },

  methods: {
    coverPage (to, from, next) {
      if (
        this.reduceMotion ||
        !from.name ||
        to.path === from.path ||
        !this.$refs.root
      ) {
        next()
        return
      }

      const panels = this.$refs.panels
      this.destination = this.formatDestination(to.path)
      gsap.killTweensOf([this.$refs.root, this.$refs.label, ...panels])

      panels.forEach((panel, index) => {
        gsap.set(panel, {
          scaleX: 0,
          transformOrigin: index % 2 === 0 ? 'left center' : 'right center'
        })
      })

      gsap.set(this.$refs.root, {
        autoAlpha: 1,
        pointerEvents: 'auto'
      })
      gsap.set(this.$refs.label, {
        opacity: 0,
        y: 14
      })

      gsap.timeline({
        onComplete: () => {
          this.isCovered = true
          next()
        }
      })
        .to(panels, {
          scaleX: 1,
          duration: 0.62,
          stagger: 0.045,
          ease: 'expo.inOut'
        })
        .to(
          this.$refs.label,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power3.out'
          },
          '-=0.28'
        )
    },

    revealPage () {
      if (this.reduceMotion || !this.isCovered) {
        return
      }

      window.requestAnimationFrame(() => {
        this.$nextTick(() => {
          const panels = this.$refs.panels
          const page = document.querySelector('.main > *')

          panels.forEach((panel, index) => {
            gsap.set(panel, {
              transformOrigin: index % 2 === 0
                ? 'right center'
                : 'left center'
            })
          })

          const timeline = gsap.timeline({
            onComplete: () => {
              this.isCovered = false
              gsap.set(this.$refs.root, {
                autoAlpha: 0,
                pointerEvents: 'none'
              })
            }
          })

          timeline.to(this.$refs.label, {
            opacity: 0,
            y: -12,
            duration: 0.2,
            ease: 'power2.in'
          })
          timeline.to(
            panels,
            {
              scaleX: 0,
              duration: 0.7,
              stagger: {
                each: 0.045,
                from: 'end'
              },
              ease: 'expo.inOut'
            },
            '-=0.05'
          )

          if (page) {
            timeline.fromTo(
              page,
              {
                opacity: 0.4,
                y: 14,
                scale: 0.992,
                filter: 'blur(6px)'
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.65,
                ease: 'power3.out',
                clearProps: 'transform,filter'
              },
              '-=0.5'
            )
          }
        })
      })
    },

    formatDestination (path) {
      if (path === '/') {
        return 'Loading / Home'
      }

      const label = path
        .split('/')
        .filter(Boolean)
        .pop()
        .replace(/-/g, ' ')

      return `Loading / ${label}`
    }
  }
}
</script>

<style scoped>
.route-transition {
  position: fixed;
  z-index: 120;
  inset: 0;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.route-transition__panels {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}

.route-transition__panel {
  display: block;
  background:
    linear-gradient(90deg, #00121c, #06232d 55%, #00121c);
}

.route-transition__panel:nth-child(even) {
  background:
    linear-gradient(90deg, #00101a, #09202e 50%, #00101a);
}

.route-transition__panel:nth-child(3) {
  border-top: 1px solid rgba(59, 255, 190, 0.16);
  border-bottom: 1px solid rgba(255, 143, 208, 0.12);
  background:
    radial-gradient(circle at center, rgba(59, 255, 190, 0.09), transparent 42%),
    linear-gradient(90deg, #00121c, #072831 55%, #00121c);
}

.route-transition__label {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transform: translate(-50%, -50%);
}

.route-transition__label span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3bffbe;
  box-shadow:
    0 0 0 5px rgba(59, 255, 190, 0.09),
    0 0 16px rgba(59, 255, 190, 0.5);
}

.route-transition__label p {
  margin: 0;
  color: #dce8ec;
  font-family: 'Manrope', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .route-transition {
    display: none;
  }
}
</style>
