<template>
  <b-container class="h-100 textDescription__container" fluid>
    <b-row class="h-100 align-items-center">
      <!-- col -->
      <b-col md="12" lg="6">
        <div>
          <div id="box__title_1">
            <h1 id="title1" class="main__title opacity-0 dev">
              Hi, my name is
            </h1>
          </div>

          <div id="box__title_2">
            <h1
              id="name__title"
              data-text="Ángel Guerrero"
              class="main__title opacity-0 dev"
            >
              Ángel Guerrero
            </h1>
          </div>

          <div id="subtitle" class="main__subtitle dev" />
        </div>
      </b-col>
      <!-- col -->
      <b-col lg="6" class="d-none d-lg-block">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <div id="personal__image" class="demo-3 box-shadow">
              <div class="glitch glitch--style-4">
                <div class="glitch__img" />
                <div class="glitch__img" />
                <div class="glitch__img" />
                <div class="glitch__img" />
                <div class="glitch__img" />
              </div>
            </div>
          </kinesis-element>
        </kinesis-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import TypeIt from 'typeit'

export default {
  components: {
    KinesisContainer,
    KinesisElement
  },

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
          .type('<span class="vue">Vue</span> <span class="heart">❤</span>', {
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

<style lang="scss" scoped>
.textDescription__container {
  background-image: url("~assets/images/pattern.svg");
}

.main__title {
  font-family: "Cy";
  margin: 4px 0;
  padding: 5px 0;
  font-size: 9vw;

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
  font-size: 5vw;

  @include media-screen-lg {
    padding-left: 60px;
    font-size: 2vw;
  }
}

// ==================
// Glitch
// ==================
.demo-3 {
  --color-text: tomato;
  --color-bg: #1d2121;
  --color-link: #454847;
  --color-link-hover: #fff;
  --color-info: #454847;
  --glitch-width: 40vmax;
  --glitch-height: calc(40vmax * 1);
  --color-title: #fff;
  --color-subtitle: #30efbf;

  // initial state
  opacity: 0;
  @include appear-from-opacity($duration: 3s, $delay: 2s);
}

.glitch--style-1 {
  --gap-horizontal: 20px;
  --gap-vertical: 2px;
  --time-anim: 2.25s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: none;
  --blend-mode-4: none;
  --blend-mode-5: none;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: transparent;
  --blend-color-4: transparent;
  --blend-color-5: transparent;
}

.glitch--style-2 {
  --gap-horizontal: 5px;
  --gap-vertical: 10px;
  --time-anim: 2s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: luminosity;
  --blend-mode-4: none;
  --blend-mode-5: none;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: #4d8c60;
  --blend-color-4: transparent;
  --blend-color-5: #c9b09a;
}

.glitch--style-3 {
  --gap-horizontal: 20px;
  --gap-vertical: 2px;
  --time-anim: 2.25s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: multiply;
  --blend-mode-4: none;
  --blend-mode-5: none;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: #af4563;
  --blend-color-4: transparent;
  --blend-color-5: transparent;
}

.glitch--style-4 {
  --gap-horizontal: 5px;
  --gap-vertical: 20px;
  --time-anim: 5s;
  --blend-mode-1: none;
  --blend-mode-2: exclusion;
  --blend-mode-3: hard-light;
  --blend-mode-4: overlay;
  --blend-mode-5: none;
  --blend-color-1: transparent;
  --blend-color-2: #52f1cd;
  --blend-color-3: #525df1;
  --blend-color-4: #f19b52;
  --blend-color-5: transparent;
}

.glitch--style-5 {
  --gap-horizontal: 50px;
  --gap-vertical: 100px;
  --time-anim: 2.25s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: none;
  --blend-mode-4: overlay;
  --blend-mode-5: overlay;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: transparent;
  --blend-color-4: #000;
  --blend-color-5: #8d16f2;
}

.glitch--style-6 {
  --gap-horizontal: 1px;
  --gap-vertical: 30px;
  --time-anim: 2.25s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: overlay;
  --blend-mode-4: none;
  --blend-mode-5: none;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: rgba(255, 255, 255, 0.2);
  --blend-color-4: transparent;
  --blend-color-5: transparent;
}

/* Glitch styles */
.glitch {
  position: relative;
  width: var(--glitch-width);
  max-width: 300px;
  height: var(--glitch-height);
  max-height: calc(300px * 1.25);
  overflow: hidden;
  margin: 0 auto;
}

.glitch__img {
  position: absolute;
  top: calc(-1 * var(--gap-vertical));
  left: calc(-1 * var(--gap-horizontal));
  width: calc(100% + var(--gap-horizontal) * 2);
  height: calc(100% + var(--gap-vertical) * 2);
  background: url(~assets/images/me.png) no-repeat 50% 0;
  background-color: var(--blend-color-1);
  background-size: cover;
  transform: translate3d(0, 0, 0);
  background-blend-mode: var(--blend-mode-1);
}

.glitch--style-2 .glitch__img {
  background-image: url(~assets/images/me.png);
}

.glitch--style-3 .glitch__img {
  background-image: url(~assets/images/me.png);
}

.glitch--style-4 .glitch__img {
  background-image: url(~assets/images/me.png);
}

.glitch--style-5 .glitch__img {
  background-image: url(~assets/images/me.png);
}

.glitch--style-6 .glitch__img {
  background-image: url(~assets/images/me.png);
}

/* Set the background colors for the glitch images*/
.glitch__img:nth-child(2) {
  background-color: var(--blend-color-2);
  background-blend-mode: var(--blend-mode-2);
}

.glitch__img:nth-child(3) {
  background-color: var(--blend-color-3);
  background-blend-mode: var(--blend-mode-3);
}

.glitch__img:nth-child(4) {
  background-color: var(--blend-color-4);
  background-blend-mode: var(--blend-mode-4);
}

.glitch__img:nth-child(5) {
  background-color: var(--blend-color-5);
  background-blend-mode: var(--blend-mode-5);
}

/* Hide all images except the first one */
.glitch__img:nth-child(n + 2) {
  opacity: 0;
}

/* Hovers */

.glitch:hover {
  // cursor: none;
}

/* On hover we show the 2nd, 3rd, 4th and 5th image*/
.glitch .glitch__img:nth-child(n + 2) {
  opacity: 1;
}

/* Hover animations for horizontal case */
.glitch .glitch__img:nth-child(2) {
  transform: translate3d(var(--gap-horizontal), 0, 0);
  animation: glitch-anim-1-horizontal var(--time-anim) infinite linear alternate;
}

.glitch > .glitch__img:nth-child(3) {
  transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
  animation: glitch-anim-2-horizontal var(--time-anim) infinite linear alternate;
}

.glitch > .glitch__img:nth-child(4) {
  transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
    scale3d(-1, -1, 1);
  animation: glitch-anim-3-horizontal var(--time-anim) infinite linear alternate;
}

/* Hover animations for vertical case */
.glitch--vertical .glitch__img:nth-child(2) {
  transform: translate3d(0, var(--gap-vertical), 0);
  animation: glitch-anim-1-vertical var(--time-anim) infinite linear alternate;
}

.glitch--vertical > .glitch__img:nth-child(3) {
  transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0);
  animation: glitch-anim-2-vertical var(--time-anim) infinite linear alternate;
}

.glitch--vertical > .glitch__img:nth-child(4) {
  transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0)
    scale3d(-1, -1, 1);
  animation: glitch-anim-3-vertical var(--time-anim) infinite linear alternate;
}

/* Hover flash animation on last image */
.glitch > .glitch__img:nth-child(5) {
  animation: glitch-anim-flash 0.5s steps(1, end) infinite;
}

/* Animations */

/* Horizontal */
@keyframes glitch-anim-1-horizontal {
  0% {
    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  10% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }
  20% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }
  30% {
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }
  40% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  50% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  60% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  70% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  80% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  90% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  100% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
}

@keyframes glitch-anim-2-horizontal {
  0% {
    -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
  }
  15% {
    -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
  }
  22% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
  }
  31% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  45% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
  }
  51% {
    -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
  }
  63% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  76% {
    -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
  }
  81% {
    -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
  }
  94% {
    -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
  }
  100% {
    -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
  }
}

@keyframes glitch-anim-3-horizontal {
  0% {
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
  }
  5% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
  }
  10% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
  }
  25% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  27% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
  }
  30% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
  }
  33% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
  }
  37% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
  }
  40% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  45% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
  }
  50% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
  }
  53% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
  }
  57% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
  }
  60% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
  }
  65% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
  }
  70% {
    -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
  }
  73% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  80% {
    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
  }
  100% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
  }
}

/* Vertical */
@keyframes glitch-anim-1-vertical {
  0% {
    -webkit-clip-path: polygon(2% 0, 5% 0, 5% 100%, 2% 100%);
    clip-path: polygon(2% 0, 5% 0, 5% 100%, 2% 100%);
  }
  10% {
    -webkit-clip-path: polygon(15% 0, 15% 0, 15% 100%, 15% 100%);
    clip-path: polygon(15% 0, 15% 0, 15% 100%, 15% 100%);
  }
  20% {
    -webkit-clip-path: polygon(10% 0, 20% 0, 20% 100%, 10% 100%);
    clip-path: polygon(10% 0, 20% 0, 20% 100%, 10% 100%);
  }
  30% {
    -webkit-clip-path: polygon(1% 0, 2% 0, 2% 100%, 1% 100%);
    clip-path: polygon(1% 0, 2% 0, 2% 100%, 1% 100%);
  }
  40% {
    -webkit-clip-path: polygon(33% 0, 33% 0, 33% 100%, 33% 100%);
    clip-path: polygon(33% 0, 33% 0, 33% 100%, 33% 100%);
  }
  50% {
    -webkit-clip-path: polygon(44% 0, 44% 0, 44% 100%, 44% 100%);
    clip-path: polygon(44% 0, 44% 0, 44% 100%, 44% 100%);
  }
  60% {
    -webkit-clip-path: polygon(50% 0, 20% 0, 20% 100%, 50% 100%);
    clip-path: polygon(50% 0, 20% 0, 20% 100%, 50% 100%);
  }
  70% {
    -webkit-clip-path: polygon(70% 0, 70% 0, 70% 100% 70%, 70% 100%);
    clip-path: polygon(70% 0, 70% 0, 70% 100% 70%, 70% 100%);
  }
  80% {
    -webkit-clip-path: polygon(80% 0, 80% 0, 80% 100% 80%, 80% 100%);
    clip-path: polygon(80% 0, 80% 0, 80% 100% 80%, 80% 100%);
  }
  90% {
    -webkit-clip-path: polygon(50% 0, 55% 0, 55% 100%, 50% 100%);
    clip-path: polygon(50% 0, 55% 0, 55% 100%, 50% 100%);
  }
  100% {
    -webkit-clip-path: polygon(70% 0, 80% 0, 80% 100%, 70% 100%);
    clip-path: polygon(70% 0, 80% 0, 80% 100%, 70% 100%);
  }
}

@keyframes glitch-anim-2-vertical {
  0% {
    -webkit-clip-path: polygon(25% 0, 30% 0, 30% 100%, 25% 100%);
    clip-path: polygon(25% 0, 30% 0, 30% 100%, 25% 100%);
  }
  15% {
    -webkit-clip-path: polygon(3% 0, 3% 0, 3% 100%, 3% 100%);
    clip-path: polygon(3% 0, 3% 0, 3% 100%, 3% 100%);
  }
  22% {
    -webkit-clip-path: polygon(5% 0, 20% 0, 20% 100%, 5% 100%);
    clip-path: polygon(5% 0, 20% 0, 20% 100%, 5% 100%);
  }
  31% {
    -webkit-clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
    clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
  }
  45% {
    -webkit-clip-path: polygon(40% 0, 40% 0, 40% 100%, 40% 100%);
    clip-path: polygon(40% 0, 40% 0, 40% 100%, 40% 100%);
  }
  51% {
    -webkit-clip-path: polygon(52% 0, 59% 0, 59% 100%, 52% 100%);
    clip-path: polygon(52% 0, 59% 0, 59% 100%, 52% 100%);
  }
  63% {
    -webkit-clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
    clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
  }
  76% {
    -webkit-clip-path: polygon(75% 0, 75% 0, 75% 100%, 75% 100%);
    clip-path: polygon(75% 0, 75% 0, 75% 100%, 75% 100%);
  }
  81% {
    -webkit-clip-path: polygon(65% 0, 40% 0, 40% 100%, 65% 100%);
    clip-path: polygon(65% 0, 40% 0, 40% 100%, 65% 100%);
  }
  94% {
    -webkit-clip-path: polygon(45% 0, 50% 0, 50% 100%, 45% 100%);
    clip-path: polygon(45% 0, 50% 0, 50% 100%, 45% 100%);
  }
  100% {
    -webkit-clip-path: polygon(14% 0, 33% 0, 33% 100%, 14% 100%);
    clip-path: polygon(14% 0, 33% 0, 33% 100%, 14% 100%);
  }
}

@keyframes glitch-anim-3-vertical {
  0% {
    -webkit-clip-path: polygon(1% 0, 3% 0, 3% 100%, 1% 100%);
    clip-path: polygon(1% 0, 3% 0, 3% 100%, 1% 100%);
  }
  5% {
    -webkit-clip-path: polygon(10% 0, 9% 0, 9% 100%, 10% 100%);
    clip-path: polygon(10% 0, 9% 0, 9% 100%, 10% 100%);
  }
  10% {
    -webkit-clip-path: polygon(5% 0, 6% 0 6% 100%, 5% 100%);
    clip-path: polygon(5% 0, 6% 0 6% 100%, 5% 100%);
  }
  25% {
    -webkit-clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
    clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
  }
  27% {
    -webkit-clip-path: polygon(10% 0, 10% 0, 10% 100%, 10% 100%);
    clip-path: polygon(10% 0, 10% 0, 10% 100%, 10% 100%);
  }
  30% {
    -webkit-clip-path: polygon(30% 0, 25% 0, 25% 100%, 30% 100%);
    clip-path: polygon(30% 0, 25% 0, 25% 100%, 30% 100%);
  }
  33% {
    -webkit-clip-path: polygon(15% 0, 16% 0, 16% 100%, 15% 100%);
    clip-path: polygon(15% 0, 16% 0, 16% 100%, 15% 100%);
  }
  37% {
    -webkit-clip-path: polygon(40% 0, 39% 0, 39% 100%, 40% 100%);
    clip-path: polygon(40% 0, 39% 0, 39% 100%, 40% 100%);
  }
  40% {
    -webkit-clip-path: polygon(20% 0, 21% 0, 21% 100%, 20% 100%);
    clip-path: polygon(20% 0, 21% 0, 21% 100%, 20% 100%);
  }
  45% {
    -webkit-clip-path: polygon(60% 0, 55% 0, 55% 100%, 60% 100%);
    clip-path: polygon(60% 0, 55% 0, 55% 100%, 60% 100%);
  }
  50% {
    -webkit-clip-path: polygon(30% 0, 31% 0, 31% 100%, 30% 100%);
    clip-path: polygon(30% 0, 31% 0, 31% 100%, 30% 100%);
  }
  53% {
    -webkit-clip-path: polygon(70% 0, 69% 0, 69% 100%, 70% 100%);
    clip-path: polygon(70% 0, 69% 0, 69% 100%, 70% 100%);
  }
  57% {
    -webkit-clip-path: polygon(40% 0, 41% 0, 41% 100%, 40% 100%);
    clip-path: polygon(40% 0, 41% 0, 41% 100%, 40% 100%);
  }
  60% {
    -webkit-clip-path: polygon(80% 0, 75% 0, 75% 100%, 80% 100%);
    clip-path: polygon(80% 0, 75% 0, 75% 100%, 80% 100%);
  }
  65% {
    -webkit-clip-path: polygon(50% 0, 51% 0, 51% 100%, 50% 100%);
    clip-path: polygon(50% 0, 51% 0, 51% 100%, 50% 100%);
  }
  70% {
    -webkit-clip-path: polygon(90% 0, 90% 0, 90% 100%, 90% 100%);
    clip-path: polygon(90% 0, 90% 0, 90% 100%, 90% 100%);
  }
  73% {
    -webkit-clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
    clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
  }
  80% {
    -webkit-clip-path: polygon(100% 0, 99% 0, 99% 100%, 100% 100%);
    clip-path: polygon(100% 0, 99% 0, 99% 100%, 100% 100%);
  }
  100% {
    -webkit-clip-path: polygon(70% 0, 71% 0, 71% 100%, 70% 100%);
    clip-path: polygon(70% 0, 71% 0, 71% 100%, 70% 100%);
  }
}

@keyframes glitch-anim-text {
  0% {
    opacity: 1;
    transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  10% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  20% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  35% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  50% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  60% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  70% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  80% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
  90% {
    transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

/* Flash */
@keyframes glitch-anim-flash {
  0% {
    opacity: 0.2;
    transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
  }
  33%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
</style>
