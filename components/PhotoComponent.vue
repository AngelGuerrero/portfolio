<template>
  <div class="personal-image__wrapper">
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
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
    KinesisElement
  }
}
</script>

<style scoped>
.personal-image__wrapper {
  opacity: 0.4;
  transition: all 1s;
}

.personal-image__wrapper:hover {
  opacity: 1;
}

/* Glitch */
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

  opacity: 0;
  animation-name: appear;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
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
  background: url(~/assets/images/me.png) no-repeat 50% 0;
  background-color: var(--blend-color-1);
  background-size: cover;
  transform: translate3d(0, 0, 0);
  background-blend-mode: var(--blend-mode-1);
}

.glitch--style-2 .glitch__img {
  background-image: url(~/assets/images/me.png);
}

.glitch--style-3 .glitch__img {
  background-image: url(~/assets/images/me.png);
}

.glitch--style-4 .glitch__img {
  background-image: url(~/assets/images/me.png);
}

.glitch--style-5 .glitch__img {
  background-image: url(~/assets/images/me.png);
}

.glitch--style-6 .glitch__img {
  background-image: url(~/assets/images/me.png);
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

/* On hover we show the 2nd, 3rd, 4th and 5th image*/
.glitch:hover .glitch__img:nth-child(n + 2) {
  opacity: 1;
}

/* Hover animations for horizontal case */
.glitch:hover .glitch__img:nth-child(2) {
  transform: translate3d(var(--gap-horizontal), 0, 0);
  animation: glitch-anim-1-horizontal var(--time-anim) infinite linear alternate;
}

.glitch:hover > .glitch__img:nth-child(3) {
  transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
  animation: glitch-anim-2-horizontal var(--time-anim) infinite linear alternate;
}

.glitch:hover > .glitch__img:nth-child(4) {
  transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
    scale3d(-1, -1, 1);
  animation: glitch-anim-3-horizontal var(--time-anim) infinite linear alternate;
}

/* Hover animations for vertical case */
.glitch--vertical:hover .glitch__img:nth-child(2) {
  transform: translate3d(0, var(--gap-vertical), 0);
  animation: glitch-anim-1-vertical var(--time-anim) infinite linear alternate;
}

.glitch--vertical:hover > .glitch__img:nth-child(3) {
  transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0);
  animation: glitch-anim-2-vertical var(--time-anim) infinite linear alternate;
}

.glitch--vertical:hover > .glitch__img:nth-child(4) {
  transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0)
    scale3d(-1, -1, 1);
  animation: glitch-anim-3-vertical var(--time-anim) infinite linear alternate;
}

/* Hover flash animation on last image */
.glitch:hover > .glitch__img:nth-child(5) {
  animation: glitch-anim-flash 0.5s steps(1, end) infinite;
}

</style>
