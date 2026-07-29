<template>
  <nuxt-link
    ref="link"
    :to="to"
    class="page-arrow"
    :class="`page-arrow--${direction}`"
    :aria-label="accessibleLabel"
  >
    <span class="page-arrow__label">
      {{ direction === 'left' ? 'Previous' : 'Next' }}
    </span>
    <img
      src="~assets/images/fleche_verte_droite.svg"
      alt=""
      aria-hidden="true"
      class="page-arrow__icon"
    >
  </nuxt-link>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    direction: {
      type: String,
      default: 'right',
      required: true,
      validator: value => ['left', 'right'].includes(value)
    },

    to: {
      type: String,
      required: true
    }
  },

  computed: {
    accessibleLabel () {
      const destination = this.to === '/' ? 'home' : this.to.replace(/^\//, '')
      const action = this.direction === 'left' ? 'previous' : 'next'

      return `Go to ${action} page: ${destination}`
    }
  },

  mounted () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.fromTo(
      this.$refs.link.$el,
      {
        opacity: 0,
        x: this.direction === 'left' ? -20 : 20
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: 'power3.out',
        delay: 0.25
      }
    )
  }
}
</script>

<style scoped>
.page-arrow {
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  min-width: 4rem;
  height: 100%;
  min-height: 4rem;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid transparent;
  padding: 0.55rem 0.7rem;
  background: rgba(0, 8, 20, 0.08);
  color: #3bffbe;
  cursor: pointer;
  touch-action: manipulation;
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease,
    color 180ms ease;
}

.page-arrow::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(59, 255, 190, 0.08), transparent 62%);
  opacity: 0;
  transition: opacity 180ms ease;
}

.page-arrow__label,
.page-arrow__icon {
  position: relative;
  z-index: 1;
}

.page-arrow__label {
  font-family: 'Manrope', sans-serif;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  line-height: 1;
  text-transform: uppercase;
}

.page-arrow__icon {
  display: block;
  width: 2.8rem;
  height: auto;
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.page-arrow--left {
  align-items: flex-start;
  text-align: left;
}

.page-arrow--left .page-arrow__icon {
  transform: rotate(180deg);
}

.page-arrow--right {
  align-items: flex-end;
  text-align: right;
}

.page-arrow:hover,
.page-arrow:focus-visible {
  border-color: #3bffbe;
  background: rgba(0, 18, 28, 0.78);
  box-shadow:
    inset 0 0 20px rgba(59, 255, 190, 0.05),
    0 0 18px rgba(59, 255, 190, 0.08);
  color: #ffffff;
  outline: none;
}

.page-arrow:hover::before,
.page-arrow:focus-visible::before {
  opacity: 1;
}

.page-arrow--right:hover .page-arrow__icon,
.page-arrow--right:focus-visible .page-arrow__icon {
  transform: translateX(5px);
}

.page-arrow--left:hover .page-arrow__icon,
.page-arrow--left:focus-visible .page-arrow__icon {
  transform: rotate(180deg) translateX(5px);
}

.page-arrow:focus-visible {
  outline: 2px solid #ffe75f;
  outline-offset: -3px;
}

@media (prefers-reduced-motion: reduce) {
  .page-arrow,
  .page-arrow::before,
  .page-arrow__icon {
    transition: none;
  }
}
</style>
