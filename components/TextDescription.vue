<template>
  <div
    class="dev hero-composition"
  >
    <!-- col -->
    <div
      class="dev hero-copy"
    >
      <div id="box__title_1">
        <h1
          id="title1"
          class="dev
                hero-display
                text-custom-md
                sm:text-4xl
                lg:text-custom-md

                bg-hero-texture
                bg-400
                bg-clip-text
                text-transparent
                title-background--animation

                my-1
                p-0 dev"
        >
          Hi, my name is
        </h1>
      </div>

      <div id="box__title_2">
        <h1
          id="name__title"
          data-text="Ángel Guerrero"
          class="dev
                hero-display
                text-custom-md
                sm:text-4xl
                lg:text-custom-md

                bg-hero-texture
                bg-400
                bg-clip-text
                text-transparent
                title-background--animation

                my-1
                p-0 dev"
        >
          Ángel Guerrero
        </h1>
      </div>

      <div
        id="subtitle"
        class="main__subtitle
              dev
              text-base
              sm:text-xl
              lg:text-2xl"
      >
        I
        <span class="font-sans italic">design</span>
        and
        <span class="font-cy-bold font-bold animation__underscore">
          develop
        </span>
        in
        <span class="text-custom-green">Vue</span>
        <span class="text-custom-red">❤</span>
      </div>
    </div>

    <!-- col -->
    <div class="dev hero-photo">
      <PhotoComponent />
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'
import PhotoComponent from '~/components/PhotoComponent.vue'

export default {
  components: {
    PhotoComponent
  },

  props: {
    //
    // Doesn't play animations on mobile devices
    //
    isMobile: {
      type: Boolean,
      default: true
    }
  },

  mounted () {
    if (
      window.matchMedia('(max-width: 639px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    this.initTextAnimation()
  },

  methods: {
    initTextAnimation () {
      const addClass = (id, clazz) => {
        const item = document.getElementById(id)
        item.classList.add(clazz)
      }

      const removeClass = (id, clazz) => {
        const item = document.getElementById(id)
        item.classList.remove(clazz)
      }
      //
      // First title
      addClass('box__title_1', 'box__title__disappear')
      //
      // Second title
      setTimeout(() => {
        addClass('box__title_2', 'box__title__disappear')
      }, 2000)

      // After 3 seconds
      setTimeout(() => {
        const subtitle = document.getElementById('subtitle')

        if (!subtitle) {
          return
        }

        subtitle.innerHTML = ''

        const typeit = new TypeIt('#subtitle', {
          speed: 90,
          startDelay: 900,
          waitUntilVisible: true
        })
          .type('I <span class="font-sans italic">decign</span>')
          .pause(500)
          .move(-3)
          .delete(1)
          .type('s')
          .move('END')

          .type(' and')
          .type(
            ' <span class="font-cy-bold animation__underscore">develop</span>'
          )
          .pause(1000)
          .type(' in ')

          // Laravel
          .type('Laravel', { delay: 1500 })
          .delete(7)

          // C#
          .type('C#', { delay: 1500 })
          .delete(2)

          // SQL Server
          .type('SQL Server', { delay: 1500 })
          .delete(10)

          // Bootstrap
          .type('Bootstrap', { delay: 1500 })
          .delete(9)

          // React
          .type('<span class="text-custom-blue">React</span>', { delay: 1500 })
          .pause(1500)
          .delete(5)

          // Vue
          .type(
            '<span class="text-custom-green">Vue</span> <span class="text-custom-red">❤</span>',
            {
              delay: 1500
            }
          )

        typeit.go()
      }, 3000)

      // 10s
      // remove all classes
      setTimeout(() => {
        removeClass('box__title_1', 'box__title__disappear')
        removeClass('box__title_2', 'box__title__disappear')
      }, 10000)
    }
  }
}
</script>

<style>
.hero-composition {
  box-sizing: border-box;
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  padding: clamp(1rem, 5vw, 2rem);
}

.hero-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.hero-copy .hero-display {
  font-size: clamp(2.9rem, 12vw, 5rem);
  line-height: 1.04;
}

.hero-photo {
  display: none;
  min-width: 0;
}

@media screen and (max-width: 520px) {
  #name__title {
    padding: 0.04em 0.03em 0.08em;
    font-size: clamp(2.7rem, 11.5vw, 5rem);
    line-height: 1.1;
  }
}

.main__title {
  @apply text-transparent bg-hero-texture bg-clip-text bg-400 bg-center;
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  letter-spacing: -0.04em;
}

.hero-display {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  letter-spacing: -0.045em;
}

.title-background--animation {
  animation-name: bgAnimation;
  animation-duration: 35s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}

.box__title__disappear {
  position: relative;
}

.box__title__disappear::after {
  content: '';
  width: 100%;
  height: 100%;
  background-color: #fedc24;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: revealBoxRight;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.main__subtitle {
  width: 100%;
  margin: 10px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

@media screen and (min-width: 960px) {
  .hero-composition {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.78fr);
    gap: clamp(1.5rem, 4vw, 5rem);
    padding: 0 clamp(2rem, 4vw, 4rem);
  }

  .hero-copy {
    text-align: left;
  }

  .hero-copy .hero-display {
    font-size: clamp(3.4rem, 5.4vw, 5.4rem);
  }

  .hero-photo {
    display: block;
  }
}

.animation__underscore {
  position: relative;
}

.animation__underscore::after {
  content: '';
  position: absolute;
  z-index: 1;
  bottom: -5px;
  left: 0px;
  height: 30%;
  background-color: #00ffee;
  animation-name: slideright;
  animation-delay: 3s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@media (prefers-reduced-motion: reduce) {
  .title-background--animation,
  .animation__underscore::after {
    animation: none;
  }

  .animation__underscore::after {
    width: 70%;
  }
}
</style>
