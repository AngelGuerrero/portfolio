<template>
  <div>
    <div id="box__title_1">
      <h1 id="title1" class="main__title dev opacity-0">
        Hi, my name is
      </h1>
    </div>

    <div id="box__title_2">
      <h1 id="name__title" data-text="Ángel Guerrero" class="main__title opacity-0" @mousemove="onMouseMove">
        Ángel Guerrero
      </h1>
    </div>

    <img id="personal__image" src="~assets/images/me.png" alt="Personal image">

    <!-- <div class="glitch glitch--style-1">
      <div class="glitch__img" />
      <div class="glitch__img" />
      <div class="glitch__img" />
      <div class="glitch__img" />
      <div class="glitch__img" />
    </div> -->

    <div id="subtitle" class="main__subtitle dev" />
  </div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  mounted () {
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
          .type('I <span class="title--cursive">decign</span>')
          .pause(500)
          .move(-3)
          .delete(1)
          .type('s')
          .move('END')

          .type(' and')
          .type(' <span class="title--enfasis">develop</span>')
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
          .type('<span class="react">React</span>', { delay: 1500 })
          .pause(1500)
          .delete(5)

        // Vue
          .type('<span class="vue">Vue</span> <span class="heart">❤</span>', { delay: 1500 })

        typeit.go()
      }, 3000)

      // 10s
      // remove all classes
      setTimeout(() => {
        removeClass('box__title_1', 'box__title__disappear')
        removeClass('box__title_2', 'box__title__disappear')
      }, 10000)
    },

    onMouseMove (e) {
      const mainTitle = document.getElementById('name__title')
      mainTitle.style.cursor = 'crosshair'

      const personalImage = document.getElementById('personal__image')

      const x = e.clientX
      const y = e.clientY

      // console.log(`x: ${x}`)
      // console.log(`y: ${y}`)

      if (x < 770) {
        personalImage.style.transform = `translate(${x * -0.3}px, ${y * 0.4}px)`
      }
    },

    glitchEffect (params) {

    }
  }
}
</script>

<style lang="scss" scoped>
#name__title {
  &:hover {
    color: $gold;
    cursor: crosshair;
  }
}

.main__title {
  font-family: "Cy";
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 9vw;
  color: white;

  @include media-screen-md {
    padding-left: 60px;
    font-size: 60px;
  }
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
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 5vw;

  @include media-screen-md {
    padding-left: 60px;
    font-size: 30px;
  }
}

#personal__image {
  width: 25%;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 5%;
  transform: translate(15%, 15%);
}

// ==================
.glitch {
  color: rgb(223, 191, 191);
  position: relative;
  // font-size: 8vw;
  // margin: 70px 200px;
  animation: glitch 5s 5s infinite;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
}

@keyframes glitch {
  1%{
    transform: rotateX(10deg) skewX(90deg);
  }
  2%{
    transform: rotateX(0deg) skewX(0deg);
  }
}

@keyframes noise-1 {
  $steps: 30;
  @for $i from 1 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

@keyframes noise-2 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

.scanlines {
  overflow: hidden;
  mix-blend-mode: difference;
}

.scanlines::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.05) .5%,
    transparent 1%
  );

  animation: fudge 7s ease-in-out alternate infinite;
}

@keyframes fudge {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(0px, 2%);
  }
}

.glow {
  @extend .glitch;
  text-shadow: 0 0 1000px rgb(223, 191, 191);
  color: transparent;
  position: absolute;
  top: 0;
}

.subtitle {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: .8vw;
  color: rgba(165, 141, 141, .4);
  text-transform: uppercase;
  letter-spacing: 1em;
  text-align: center;
  position: absolute;
  left: 17%;
  animation: glitch-2 5s 5.02s infinite;
}

@keyframes glitch-2 {
  1%{
    transform: rotateX(10deg) skewX(70deg);
  }
  2%{
    transform: rotateX(0deg) skewX(0deg);
  }
}
</style>
