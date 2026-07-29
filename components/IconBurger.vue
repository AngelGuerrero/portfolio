<template>
  <button
    id="menu-trigger"
    type="button"
    class="menu-trigger"
    :class="{ 'menu-trigger--open': isOpen }"
    :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
    aria-controls="mobile-menu"
    :aria-expanded="isOpen ? 'true' : 'false'"
    @click="$store.commit('toggleMenu')"
  >
    <span class="menu-trigger__signal" aria-hidden="true" />
    <span class="menu-trigger__bars" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
    <span class="menu-trigger__label" aria-hidden="true">
      {{ isOpen ? 'Open' : 'Menu' }}
    </span>
  </button>
</template>

<script>
export default {
  computed: {
    isOpen () {
      return this.$store.state.isMenuOpen
    }
  }
}
</script>

<style scoped>
.menu-trigger {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.28rem;
  overflow: hidden;
  border: 0;
  background: #20aa8c;
  color: #00131c;
  cursor: pointer;
  transition:
    background-color 300ms ease,
    color 300ms ease,
    box-shadow 300ms ease;
}

.menu-trigger::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 55%);
  opacity: 0;
  transition: opacity 300ms ease;
}

.menu-trigger:hover::before,
.menu-trigger:focus-visible::before {
  opacity: 1;
}

.menu-trigger:focus-visible {
  outline: 2px solid #ffe75f;
  outline-offset: -3px;
}

.menu-trigger__signal {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(0, 19, 28, 0.34);
  transition: background-color 300ms ease, box-shadow 300ms ease;
}

.menu-trigger__bars {
  position: relative;
  display: block;
  width: 28px;
  height: 18px;
}

.menu-trigger__bars i {
  position: absolute;
  left: 0;
  display: block;
  width: 28px;
  height: 2px;
  background: currentColor;
  transform-origin: center;
  transition:
    top 360ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 180ms ease,
    width 260ms ease;
}

.menu-trigger__bars i:nth-child(1) {
  top: 1px;
}

.menu-trigger__bars i:nth-child(2) {
  top: 8px;
  width: 20px;
}

.menu-trigger__bars i:nth-child(3) {
  top: 15px;
}

.menu-trigger:hover .menu-trigger__bars i:nth-child(2) {
  width: 28px;
}

.menu-trigger__label {
  position: relative;
  font-family: 'Manrope', sans-serif;
  font-size: 0.45rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  line-height: 1;
  text-transform: uppercase;
}

.menu-trigger--open {
  background: #061923;
  color: #3bffbe;
  box-shadow:
    inset 0 0 0 1px rgba(59, 255, 190, 0.45),
    inset 0 0 25px rgba(59, 255, 190, 0.08);
}

.menu-trigger--open .menu-trigger__signal {
  background: #ffe75f;
  box-shadow: 0 0 8px rgba(255, 231, 95, 0.75);
  animation: triggerPulse 1.5s ease-in-out infinite;
}

.menu-trigger--open .menu-trigger__bars i:nth-child(1) {
  top: 8px;
  transform: rotate(45deg);
}

.menu-trigger--open .menu-trigger__bars i:nth-child(2) {
  width: 0;
  opacity: 0;
}

.menu-trigger--open .menu-trigger__bars i:nth-child(3) {
  top: 8px;
  transform: rotate(-45deg);
}

@keyframes triggerPulse {
  0%,
  100% {
    opacity: 0.55;
  }

  50% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .menu-trigger,
  .menu-trigger::before,
  .menu-trigger__signal,
  .menu-trigger__bars i {
    transition: none;
  }

  .menu-trigger--open .menu-trigger__signal {
    animation: none;
  }
}
</style>
