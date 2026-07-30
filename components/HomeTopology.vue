<template>
  <div ref="scene" class="home-topology" aria-hidden="true">
    <svg
      viewBox="0 0 1680 880"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
    >
      <defs>
        <linearGradient id="topology-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#3bffbe" stop-opacity="0" />
          <stop offset="0.48" stop-color="#3bffbe" stop-opacity="0.55" />
          <stop offset="1" stop-color="#00fff9" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="topology-pink" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ff8fd0" stop-opacity="0" />
          <stop offset="0.5" stop-color="#ff8fd0" stop-opacity="0.48" />
          <stop offset="1" stop-color="#835cf6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="topology-yellow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#ffe75f" stop-opacity="0" />
          <stop offset="0.55" stop-color="#ffe75f" stop-opacity="0.42" />
          <stop offset="1" stop-color="#ff8fd0" stop-opacity="0" />
        </linearGradient>
      </defs>

      <g class="home-topology__layer home-topology__layer--cyan">
        <path
          class="home-topology__path home-topology__path--signal"
          stroke="url(#topology-cyan)"
          d="M-80 160 H180 V110 H420 V170 H650 V220 H790"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-cyan)"
          d="M520 -20 V70 H740 V130 H920 V90 H1080"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-cyan)"
          d="M980 840 H1120 V740 H1320 V790 H1500 V700 H1760"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-cyan)"
          d="M-40 70 H120 V30 H300 V90 H460"
        />
        <path
          class="home-topology__path home-topology__path--signal"
          stroke="url(#topology-cyan)"
          d="M820 40 V100 H980 V60 H1120 V150 H1250"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-cyan)"
          d="M-20 300 H110 V260 H250 V320 H360"
        />
      </g>

      <g class="home-topology__layer home-topology__layer--pink">
        <path
          class="home-topology__path home-topology__path--signal"
          stroke="url(#topology-pink)"
          d="M1460 -40 V130 H1520 V260 H1440 V360 H1620 V470 H1800"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-pink)"
          d="M1660 -20 V90 H1600 V190 H1710 V310 H1810"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-pink)"
          d="M720 260 H860 V210 H1020 V280 H1160"
        />
        <path
          class="home-topology__path home-topology__path--signal"
          stroke="url(#topology-pink)"
          d="M1270 330 H1400 V280 H1540 V350 H1690"
        />
      </g>

      <g class="home-topology__layer home-topology__layer--yellow">
        <path
          class="home-topology__path home-topology__path--signal"
          stroke="url(#topology-yellow)"
          d="M260 230 H420 V180 H600 V240 H760"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-yellow)"
          d="M1180 120 H1320 V80 H1480 V160 H1600 V220 H1780"
        />
        <path
          class="home-topology__path home-topology__path--quiet"
          stroke="url(#topology-yellow)"
          d="M1040 -20 V40 H1200 V10 H1360"
        />
      </g>

    </svg>
  </div>
</template>

<script>
import {
  createScope,
  createTimeline
} from 'animejs'

export default {
  data: () => ({
    animeScope: null
  }),

  mounted () {
    const reduceMotion = (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 639px)').matches
    )

    this.animeScope = createScope({
      root: this.$refs.scene
    }).add(() => {
      if (reduceMotion) {
        return
      }

      const paths = Array.from(
        this.$refs.scene.querySelectorAll('.home-topology__path')
      )
      const pulsePaths = paths.map((path) => {
        const pulse = path.cloneNode(false)
        const length = path.getTotalLength()

        pulse.classList.remove(
          'home-topology__path',
          'home-topology__path--signal',
          'home-topology__path--quiet'
        )
        pulse.classList.add('home-topology__pulse')
        pulse.style.strokeDasharray = `110 ${length + 110}`
        pulse.style.strokeDashoffset = '110'
        pulse.dataset.length = length
        path.parentNode.appendChild(pulse)

        return pulse
      })

      const sequence = [0, 4, 10, 6, 1, 8, 11, 3, 9, 5, 7, 12, 2]
      const circuitTimeline = createTimeline({
        loop: true,
        loopDelay: 650
      })

      sequence.forEach((pathIndex, sequenceIndex) => {
        const pulse = pulsePaths[pathIndex]
        const length = Number(pulse.dataset.length)

        circuitTimeline.add(pulse, {
          strokeDashoffset: [110, -(length + 110)],
          opacity: [0, 1, 1, 0],
          duration: 1200,
          ease: 'linear'
        }, sequenceIndex * 1050)
      })
    })
  },

  beforeDestroy () {
    if (this.animeScope) {
      this.animeScope.revert()
      this.animeScope = null
    }
  }
}
</script>

<style scoped>
.home-topology {
  position: absolute;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.home-topology svg {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.home-topology__path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.15;
  vector-effect: non-scaling-stroke;
}

.home-topology__path--quiet {
  stroke-width: 0.75;
  opacity: 0.09;
}

.home-topology__path--signal {
  opacity: 0.13;
}

.home-topology__pulse {
  fill: none;
  opacity: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.home-topology__layer--cyan .home-topology__pulse {
  stroke: #3bffbe;
  filter: drop-shadow(0 0 4px rgba(59, 255, 190, 0.72));
}

.home-topology__layer--pink .home-topology__pulse {
  stroke: #ff8fd0;
  filter: drop-shadow(0 0 4px rgba(255, 143, 208, 0.68));
}

.home-topology__layer--yellow .home-topology__pulse {
  stroke: #ffe75f;
  filter: drop-shadow(0 0 4px rgba(255, 231, 95, 0.65));
}

@media screen and (max-width: 959px) {
  .home-topology svg {
    opacity: 0.38;
  }
}

@media screen and (max-width: 639px) {
  .home-topology svg {
    opacity: 0.22;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-topology svg {
    opacity: 0.24;
  }
}
</style>
