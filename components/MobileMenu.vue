<template>
  <transition :css="false" @enter="enter" @leave="leave">
    <div
      v-if="isOpen"
      id="mobile-menu"
      ref="dialog"
      class="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      tabindex="-1"
      @keydown.esc="close"
      @keydown.tab="trapFocus"
      @pointermove="moveScene"
    >
      <div class="mobile-menu__panels" aria-hidden="true">
        <span v-for="panel in 5" :key="panel" class="mobile-menu__panel" />
      </div>

      <div class="mobile-menu__atmosphere" aria-hidden="true">
        <div ref="grid" class="mobile-menu__grid cyber-grid" />
        <div ref="orb" class="mobile-menu__orb" />
        <div class="mobile-menu__scan" />
      </div>

      <div class="mobile-menu__shell">
        <header class="mobile-menu__header menu-meta">
        </header>

        <div class="mobile-menu__stage">
          <p
            ref="previewWord"
            class="mobile-menu__preview"
            aria-hidden="true"
          >
            {{ displayedItem.title }}
          </p>

          <nav class="mobile-menu__nav" aria-label="Primary navigation">
            <nuxt-link
              v-for="(item, index) in menu"
              :key="item.to"
              ref="menuLinks"
              :to="item.to"
              :exact="item.exact"
              active-class="mobile-menu__link--active"
              exact-active-class="mobile-menu__link--active"
              class="mobile-menu__link"
              @mouseenter.native="activateItem(index)"
              @focus.native="activateItem(index)"
              @mouseleave.native="resetItem"
              @click.native="close"
            >
              <span class="mobile-menu__number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="mobile-menu__label">{{ item.title }}</span>
            </nuxt-link>
          </nav>
        </div>

        <footer class="mobile-menu__footer">
          <a
            class="mobile-menu__resume"
            href="/angel_guerrero_resume.pdf"
            download
            @mouseenter="activateResume"
            @focus="activateResume"
            @mouseleave="resetItem"
            @click="close"
          >
            <span>Resume.pdf</span>
            <span aria-hidden="true">Download ↓</span>
          </a>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data: () => ({
    menu: [
      {
        title: 'Home',
        to: '/',
        exact: true,
        description: 'The starting point'
      },
      {
        title: 'Me',
        to: '/me',
        exact: false,
        description: 'A little of my story'
      },
      {
        title: 'Memories',
        to: '/memories',
        exact: false,
        description: 'Words, code and motion'
      }
    ],
    hoveredIndex: null,
    previousFocus: null,
    reduceMotion: false
  }),

  computed: {
    isOpen () {
      return this.$store.state.isMenuOpen
    },

    currentIndex () {
      const index = this.menu.findIndex((item) => {
        if (item.exact) {
          return this.$route.path === item.to
        }

        return this.$route.path.startsWith(item.to)
      })

      return index >= 0 ? index : 0
    },

    displayedItem () {
      if (this.hoveredIndex === 'resume') {
        return { title: 'Resume' }
      }

      const index = this.hoveredIndex === null
        ? this.currentIndex
        : this.hoveredIndex

      return this.menu[index]
    },

    currentRouteLabel () {
      return `Current / ${this.menu[this.currentIndex].title}`
    }
  },

  watch: {
    isOpen (value) {
      if (value) {
        this.previousFocus = document.activeElement
        this.hoveredIndex = null
        document.body.style.overflow = 'hidden'
        this.$nextTick(() => {
          const firstLink = this.$refs.menuLinks && this.$refs.menuLinks[0]

          if (firstLink && firstLink.$el) {
            firstLink.$el.focus()
          }
        })
      } else {
        document.body.style.overflow = ''
      }
    },

    $route () {
      this.close()
    }
  },

  mounted () {
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  beforeDestroy () {
    document.body.style.overflow = ''
    gsap.killTweensOf([this.$refs.orb, this.$refs.grid])
  },

  methods: {
    close () {
      if (!this.isOpen) {
        return
      }

      this.$store.commit('closeMenu')
      this.$nextTick(() => {
        if (this.previousFocus && this.previousFocus.focus) {
          this.previousFocus.focus()
        }
      })
    },

    enter (el, done) {
      const panels = el.querySelectorAll('.mobile-menu__panel')
      const links = el.querySelectorAll('.mobile-menu__link')
      const meta = el.querySelector('.menu-meta')
      const preview = el.querySelector('.mobile-menu__preview')
      const footer = el.querySelector('.mobile-menu__footer')

      if (this.reduceMotion) {
        gsap.set([el, panels, links, meta, preview, footer], {
          clearProps: 'all'
        })
        done()
        return
      }

      const timeline = gsap.timeline({ onComplete: done })

      timeline.set(el, { opacity: 1 })
      timeline.fromTo(
        panels,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 0.72,
          stagger: 0.055,
          ease: 'expo.inOut'
        }
      )
      timeline.fromTo(
        this.$refs.grid,
        { opacity: 0, scale: 1.12, rotation: -1.5 },
        {
          opacity: 0.42,
          scale: 1,
          rotation: 0,
          duration: 1.05,
          ease: 'power3.out'
        },
        '-=0.42'
      )
      timeline.fromTo(
        meta,
        { x: -28, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: 'power3.out' },
        '-=0.72'
      )
      timeline.fromTo(
        preview,
        { y: 44, opacity: 0, filter: 'blur(12px)' },
        {
          y: 0,
          opacity: 0.075,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'power3.out'
        },
        '-=0.5'
      )
      timeline.fromTo(
        links,
        {
          yPercent: 115,
          opacity: 0,
          clipPath: 'inset(0 0 100% 0)'
        },
        {
          yPercent: 0,
          opacity: 1,
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.72,
          stagger: 0.09,
          ease: 'expo.out'
        },
        '-=0.58'
      )
      timeline.fromTo(
        footer,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.42, ease: 'power2.out' },
        '-=0.35'
      )
    },

    leave (el, done) {
      if (this.reduceMotion) {
        done()
        return
      }

      const panels = el.querySelectorAll('.mobile-menu__panel')
      const links = el.querySelectorAll('.mobile-menu__link')
      const timeline = gsap.timeline({ onComplete: done })

      timeline.to(links, {
        y: -24,
        opacity: 0,
        duration: 0.22,
        stagger: 0.035,
        ease: 'power2.in'
      })
      timeline.to(
        panels,
        {
          scaleY: 0,
          transformOrigin: 'bottom center',
          duration: 0.48,
          stagger: {
            each: 0.04,
            from: 'end'
          },
          ease: 'expo.inOut'
        },
        '-=0.08'
      )
    },

    activateItem (index) {
      this.hoveredIndex = index
      this.animatePreview()
    },

    activateResume () {
      this.hoveredIndex = 'resume'
      this.animatePreview()
    },

    resetItem () {
      this.hoveredIndex = null
      this.animatePreview()
    },

    animatePreview () {
      if (this.reduceMotion) {
        return
      }

      this.$nextTick(() => {
        gsap.fromTo(
          this.$refs.previewWord,
          { y: 22, opacity: 0, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 0.075,
            filter: 'blur(0px)',
            duration: 0.42,
            ease: 'power3.out',
            overwrite: true
          }
        )
      })
    },

    moveScene (event) {
      if (this.reduceMotion || !this.$refs.orb || !this.$refs.grid) {
        return
      }

      const horizontal = (event.clientX / window.innerWidth) - 0.5
      const vertical = (event.clientY / window.innerHeight) - 0.5

      gsap.to(this.$refs.orb, {
        x: horizontal * 130,
        y: vertical * 90,
        duration: 1.25,
        ease: 'power3.out',
        overwrite: 'auto'
      })
      gsap.to(this.$refs.grid, {
        x: horizontal * -18,
        y: vertical * -12,
        duration: 1.5,
        ease: 'power3.out',
        overwrite: 'auto'
      })
    },

    trapFocus (event) {
      const focusable = this.$refs.dialog.querySelectorAll(
        'a[href], button:not([disabled])'
      )

      if (!focusable.length) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
  }
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 90;
  min-height: 100vh;
  overflow: hidden;
  background: #000814;
  color: #ffffff;
}

.mobile-menu__panels,
.mobile-menu__atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.mobile-menu__panels {
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.mobile-menu__panel {
  border-right: 1px solid rgba(59, 255, 190, 0.065);
  background:
    linear-gradient(180deg, rgba(3, 22, 34, 0.99), rgba(0, 8, 20, 0.995));
}

.mobile-menu__panel:nth-child(even) {
  background:
    linear-gradient(180deg, rgba(2, 18, 31, 0.99), rgba(0, 7, 18, 0.995));
}

.mobile-menu__atmosphere {
  z-index: 1;
  overflow: hidden;
}

.mobile-menu__grid {
  position: absolute;
  inset: -4%;
  opacity: 0.42;
  background-size: 64px 64px;
}

.mobile-menu__orb {
  position: absolute;
  top: 14%;
  left: 57%;
  width: min(40vw, 520px);
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(255, 68, 177, 0.13), rgba(0, 255, 249, 0.04) 44%, transparent 70%);
  filter: blur(16px);
}

.mobile-menu__scan {
  position: absolute;
  top: -20%;
  right: 0;
  left: 0;
  height: 18%;
  border-bottom: 1px solid rgba(59, 255, 190, 0.22);
  background: linear-gradient(180deg, transparent, rgba(59, 255, 190, 0.035));
  animation: menuScan 6s linear infinite;
}

.mobile-menu__shell {
  position: relative;
  z-index: 2;
  display: grid;
  width: min(calc(100% - 8rem), 1180px);
  height: 100vh;
  margin: 0 auto;
  grid-template-rows: auto minmax(0, 1fr) auto;
  padding: 2rem 0 1.5rem;
}

.mobile-menu__header,
.mobile-menu__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-menu__header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  color: #718993;
  font-family: 'Manrope', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.mobile-menu__header p {
  margin: 0;
}

.mobile-menu__open-state {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #3bffbe;
}

.mobile-menu__pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3bffbe;
  box-shadow: 0 0 0 rgba(59, 255, 190, 0.45);
  animation: menuPulse 1.8s ease-out infinite;
}

.mobile-menu__stage {
  position: relative;
  display: flex;
  min-height: 0;
  align-items: center;
  padding: 1.5rem 0;
}

.mobile-menu__preview {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  color: #8dffe0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(8rem, 21vw, 19rem);
  font-weight: 600;
  letter-spacing: -0.08em;
  line-height: 0.72;
  opacity: 0.075;
  text-align: center;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.mobile-menu__nav {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
}

.mobile-menu__link {
  display: grid;
  min-height: clamp(5.2rem, 10vh, 7.5rem);
  grid-template-columns: 58px minmax(230px, 0.78fr) minmax(190px, 1fr) 42px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #9aadb5;
  transition:
    border-color 220ms ease,
    color 220ms ease,
    padding 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu__link:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu__number {
  color: #55717b;
  font-family: 'Manrope', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  transition: color 220ms ease;
}

.mobile-menu__label {
  color: inherit;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5.2vw, 5.4rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.9;
  transition:
    color 220ms ease,
    text-shadow 220ms ease,
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu__description {
  color: #637983;
  font-family: 'Manrope', sans-serif;
  font-size: 0.78rem;
  transition: color 220ms ease, transform 300ms ease;
}

.mobile-menu__arrow {
  color: #5f7b84;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  text-align: right;
  transition:
    color 220ms ease,
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu__link:hover,
.mobile-menu__link:focus-visible,
.mobile-menu__link--active {
  border-color: rgba(59, 255, 190, 0.42);
  color: #ffffff;
  outline: none;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
}

.mobile-menu__link:hover .mobile-menu__label,
.mobile-menu__link:focus-visible .mobile-menu__label {
  color: #ffffff;
  text-shadow: 0 0 28px rgba(59, 255, 190, 0.2);
  transform: translateX(10px);
}

.mobile-menu__link:hover .mobile-menu__description,
.mobile-menu__link:focus-visible .mobile-menu__description,
.mobile-menu__link--active .mobile-menu__description {
  color: #9db1b9;
  transform: translateX(5px);
}

.mobile-menu__link:hover .mobile-menu__arrow,
.mobile-menu__link:focus-visible .mobile-menu__arrow {
  color: #ffe75f;
  transform: translate(5px, -5px);
}

.mobile-menu__link--active {
  background:
    linear-gradient(90deg, rgba(59, 255, 190, 0.085), transparent 65%);
}

.mobile-menu__link--active .mobile-menu__number,
.mobile-menu__link--active .mobile-menu__label {
  color: #3bffbe;
}

.mobile-menu__link--active .mobile-menu__number::after {
  content: '';
  display: inline-block;
  width: 18px;
  height: 1px;
  margin: 0 0 0.2rem 0.55rem;
  background: #ffe75f;
}

.mobile-menu__footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

.mobile-menu__resume {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  color: #ffe75f;
  font-family: 'Manrope', sans-serif;
  font-size: 0.74rem;
  font-weight: 600;
}

.mobile-menu__resume span:last-child {
  color: #6f858f;
  font-size: 0.64rem;
  transition: color 180ms ease, transform 180ms ease;
}

.mobile-menu__resume:hover span:last-child,
.mobile-menu__resume:focus-visible span:last-child {
  color: #ffe75f;
  transform: translateY(2px);
}

.mobile-menu__resume:focus-visible {
  outline: 1px solid #ffe75f;
  outline-offset: 5px;
}

.mobile-menu__close {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  border: 0;
  background: transparent;
  color: #8ca1aa;
  font-family: 'Manrope', sans-serif;
  font-size: 0.68rem;
  cursor: pointer;
}

.mobile-menu__close span {
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 0.3rem;
  padding: 0.28rem 0.4rem;
  color: #dce5e8;
  font-size: 0.58rem;
}

.mobile-menu__close:hover,
.mobile-menu__close:focus-visible {
  color: #ffffff;
  outline: none;
}

@keyframes menuPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 255, 190, 0.42);
  }

  70% {
    box-shadow: 0 0 0 8px rgba(59, 255, 190, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(59, 255, 190, 0);
  }
}

@keyframes menuScan {
  from {
    transform: translateY(-20vh);
  }

  to {
    transform: translateY(120vh);
  }
}

@media screen and (max-width: 767px) {
  .mobile-menu__shell {
    width: calc(100% - 2rem);
    padding: 1.1rem 0;
  }

  .mobile-menu__header {
    padding-right: 3.8rem;
    font-size: 0.58rem;
    letter-spacing: 0.08em;
  }

  .mobile-menu__header p {
    display: none;
  }

  .mobile-menu__stage {
    padding: 1rem 0;
  }

  .mobile-menu__preview {
    font-size: 32vw;
    white-space: normal;
  }

  .mobile-menu__link {
    min-height: 6.6rem;
    grid-template-columns: 34px minmax(0, 1fr) 30px;
  }

  .mobile-menu__description {
    display: none;
  }

  .mobile-menu__label {
    font-size: clamp(2.7rem, 14vw, 4.6rem);
  }

  .mobile-menu__arrow {
    font-size: 1rem;
  }

  .mobile-menu__footer {
    padding-bottom: 0.2rem;
  }

  .mobile-menu__resume span:last-child {
    display: none;
  }

  .mobile-menu__close {
    font-size: 0;
  }

  .mobile-menu__close span {
    font-size: 0.58rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu__scan,
  .mobile-menu__pulse {
    animation: none;
  }

  .mobile-menu__link,
  .mobile-menu__label,
  .mobile-menu__description,
  .mobile-menu__arrow {
    transition: none;
  }
}
</style>
