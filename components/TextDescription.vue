<template>
  <div class="dev flex">
    <!-- col -->
    <div class="dev w-full flex flex-col justify-center text-center xs:text-left lg:w-1/2">
      <div id="box__title_1">
        <h1 id="title1" :class="{ 'opacity-0': !isMobile }" class="main__title dev">
          Hi, my name is
        </h1>
      </div>

      <div id="box__title_2">
        <h1 id="name__title" data-text="Ángel Guerrero" :class="{ 'opacity-0': !isMobile }" class="main__title dev">
          Ángel Guerrero
        </h1>
      </div>

      <!-- Doesn't show animation in mobile devices -->
      <div v-if="!isMobile" id="subtitle" class="main__subtitle dev" />
      <div v-else class="main__subtitle">
        I <span class="font-sans italic">design</span> and
        <span class="font-cy-bold font-bold animation__underscore">develop</span> in
        <span class="text-custom-green">Vue</span>
        <span class="text-custom-red">❤</span>
      </div>
    </div>
    <!-- col -->
    <div class="dev w-1/2 hidden lg:block">
      <PersonalImage />
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'
import PersonalImage from './PersonalImage'

export default {
  components: {
    PersonalImage
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
    if (this.isMobile) { return }

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
      setTimeout(_ => removeClass('title1', 'opacity-0'), 1000)
      //
      // Second title
      setTimeout(() => {
        addClass('box__title_2', 'box__title__disappear')
        setTimeout(_ => removeClass('name__title', 'opacity-0'), 1000)
      }, 2000)

      // After 3 seconds
      setTimeout(() => {
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
          .type(' <span class="font-cy-bold animation__underscore">develop</span>')
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
          .type('<span class="text-custom-green">Vue</span> <span class="text-custom-red">❤</span>', {
            delay: 1500
          })

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

<style lang="scss">

.main__title {
  font-family: "Cy";
  margin: 4px 0;
  padding: 5px 0;
  font-size: 7vw;

  color: #ee6352;
  background-image: var(--gradient);
  background-clip: text;
  color: transparent;
  background-size: 400%;

  animation-name: bgAnimation;
  animation-duration: 35s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;

  @include media-screen-lg {
    padding-left: 60px;
    font-size: 5vw;
  }
}

.box__title__disappear {
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: $gold;
    position: absolute;
    top: 0;
    left: 0;

    animation-name: revealBoxRight;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
}

.main__subtitle {
  width: 100%;
  margin: 10px 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 4vw;

  @include media-screen-lg {
    padding-left: 60px;
    font-size: 2vw;
  }
}

.animation__underscore {
  position: relative;

  &::after {
    content: "";
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
}
</style>
