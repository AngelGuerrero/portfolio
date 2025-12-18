<template>
  <div
    class="dev
          w-full
          flex
          md:px-0"
  >
    <!-- col -->
    <div
      class="dev
            w-full
            flex
            flex-col
            justify-center
            text-center
            md:text-left
            md:w-1/2"
    >
      <div id="box__title_1">
        <h1
          id="title1"
          :class="{ 'opacity-0': !isMobile }"
          class="dev
                font-cy-regular
                text-custom-md
                sm:text-4xl
                lg:text-custom-md

                bg-hero-texture
                bg-400
                bg-clip-text
                text-transparent
                title-background--animation

                md:pl-8
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
          :class="{ 'opacity-0': !isMobile }"
          class="dev
                font-cy-regular
                text-custom-md
                sm:text-4xl
                lg:text-custom-md

                bg-hero-texture
                bg-400
                bg-clip-text
                text-transparent
                title-background--animation

                md:pl-8
                my-1
                p-0 dev"
        >
          Ángel Guerrero
        </h1>
      </div>

      <!-- ================================================
        Do not show animations in mobile devices
        ================================================ -->
      <div
        v-if="!isMobile"
        id="subtitle"
        class="main__subtitle
              dev
              text-base
              sm:text-xl
              lg:text-2xl
              md:pl-8"
      />
      <div
        v-else
        class="main__subtitle
              dev
              text-base
              sm:text-xl
              lg:text-2xl
              md:pl-8"
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
    <div class="dev w-1/2 hidden md:block">
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
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'components/TextDescription.vue:mounted', message: 'TextDescription component mounted', data: { isMobile: this.isMobile, elementExists: !!this.$el, elementClasses: this.$el ? this.$el.className : null }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'D' }) }).catch(() => {})
    // #endregion

    if (this.isMobile) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'components/TextDescription.vue:mounted', message: 'TextDescription skipping animation (mobile)', data: { isMobile: this.isMobile }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'D' }) }).catch(() => {})
      // #endregion
      return
    }

    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'components/TextDescription.vue:mounted', message: 'TextDescription starting animation', data: { isMobile: this.isMobile }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'D' }) }).catch(() => {})
    // #endregion

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

<style lang="scss">
.main__title {
  @apply font-cy-regular text-transparent bg-hero-texture bg-clip-text bg-400 bg-center;
}

.title-background--animation {
  animation-name: bgAnimation;
  animation-duration: 35s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}

.box__title__disappear {
  position: relative;

  &::after {
    content: '';
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.animation__underscore {
  position: relative;

  &::after {
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
}
</style>
