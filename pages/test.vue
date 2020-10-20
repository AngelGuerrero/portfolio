<template>
  <div class="demo-3">
    <div class="grid">
      <div class="grid__item">
        <div class="glitch glitch--style-2">
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
        </div>
        <h1 class="grid__item-title">
          Prone <span>Abjectness</span></h2>
        </h1>
      </div>
      <div class="grid__item">
        <div class="glitch glitch--style-3">
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
        </div>
        <h1 class="grid__item-title">
          Equal <span>Undertaking</span></h2>
        </h1>
      </div>
      <div class="grid__item">
        <div class="glitch glitch--vertical glitch--style-4">
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
        </div>
        <h1 class="grid__item-title">
          Gifted <span>Friendliness</span></h2>
        </h1>
      </div>
      <div class="grid__item">
        <div class="glitch glitch--style-5">
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
        </div>
        <h1 class="grid__item-title">
          Past <span>Monotony</span></h2>
        </h1>
      </div>
      <div class="grid__item">
        <div class="glitch glitch--style-6">
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
        </div>
        <h1 class="grid__item-title">
          Ground <span>Curtness</span></h2>
        </h1>
      </div>
      <div class="grid__item">
        <div class="glitch glitch--style-7">
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
          <div class="glitch__img" />
        </div>
        <h2 class="grid__item-title">
          Wide <span>Distraction</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em;}pre{white-space:pre-wrap;}q{quotes:"\201C" "\201D" "\2018" "\2019";}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,select{text-transform:none;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}
*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  background: #1d2121;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  min-height: 100vh;
  color: #57585c;
  color: var(--color-text);
  background-color: #fff;
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Fade effect */
.js body {
  opacity: 0;
  transition: opacity 0.3s;
}

.js body.render {
  opacity: 1;
}

/* Page Loader */
.js .loading::before {
  content: '';
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-bg);
}

.js .loading::after {
  content: '';
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.4;
  background: var(--color-link);
  animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5,0.5,1);
  }
}

a {
  text-decoration: none;
  color: var(--color-link);
  outline: none;
}

a:hover,
a:focus {
  color: var(--color-link-hover);
  outline: none;
}

.hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  pointer-events: none;
}

.message {
  position: relative;
  z-index: 100;
  padding: 1.5em 1em;
  font-size: 0.85em;
  font-weight: bold;
  text-align: center;
  color: var(--color-bg);
  background: var(--color-text);
}

@supports(-webkit-clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%)) or (clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%)) {
  .message {
    display: none;
  }
}

/* Icons */
.icon {
  display: block;
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  fill: currentColor;
}

.icon--keyboard {
  display: none;
}

main {
  position: relative;
  width: 100%;
}

.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
}

.content--fixed {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: grid;
  align-content: space-between;
  width: 100%;
  max-width: none;
  min-height: 0;
  height: 100vh;
  padding: 1.5em;
  pointer-events: none;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto 4em;
  grid-template-areas: 'header header'
  '... ...'
  'github demos';
}

.content--fixed a {
  pointer-events: auto;
}

.content--top {
  padding: 1.5em 2em 1.5em 1.5em;
  justify-content: flex-start;
  min-height: 0;
  position: relative;
}

/* Header */
.codrops-header {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  align-self: start;
  grid-area: header;
  justify-self: start;
}

.demo-2 .codrops-header {
  justify-self: stretch;
}

.codrops-header__title {
  font-size: 1em;
  font-weight: bold;
  margin: 0;
}

.info {
  margin: 0 0 0 1.25em;
  color: var(--color-info);
}

.github {
  display: block;
  align-self: end;
  grid-area: github;
  justify-self: start;
}

.content--top .github {
  align-self: center;
  margin: 0 1em 0 auto;
}

.demos {
  position: relative;
  display: block;
  align-self: end;
  text-align: right;
  grid-area: demos;
}

.content--top .demos {
  align-self: center;
}

.demo {
  margin: 0 0 0 1em;
}

.demo:hover,
.demo:focus {
  opacity: 0.5;
}

.demo span {
  white-space: nowrap;
  pointer-events: none;
}

a.demo--current {
  pointer-events: none;
  color: var(--color-link-hover);
}

/* Top Navigation Style */
.codrops-links {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 1em 0 0;
  text-align: center;
  white-space: nowrap;
}

.codrops-icon {
  display: inline-block;
  margin: 0.15em;
  padding: 0.25em;
}

@media screen and (max-width: 55em) {
  .message {
    display: block;
  }
  .content {
    flex-direction: column;
    height: auto;
    min-height: 0;
  }
  .content--fixed {
    position: relative;
    z-index: 1000;
    display: block;
    padding: 0.85em;
  }
  .codrops-header {
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
  .codrops-header__title {
    font-weight: bold;
    padding-bottom: 0.25em;
    text-align: center;
  }
  .github {
    display: block;
    margin: 1em auto;
  }
  .content--top .github {
      margin: 1em 0;
  }
  .codrops-links {
    margin: 0;
  }
  .demos {
    text-align: center;
  }
  .demo {
    margin: 0 0.5em;
  }
}

.demo-3 {
  --color-text: tomato;
  --color-bg: #1d2121;
  --color-link: #454847;
  --color-link-hover: #fff;
  --color-info: #454847;
  --glitch-width: 40vmax;
  --glitch-height: calc(40vmax * 1.25);
  --color-title: #fff;
  --color-subtitle: #30efbf;
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
  --gap-horizontal: 3px;
  --gap-vertical: 70px;
  --time-anim: 2.25s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: overlay;
  --blend-mode-4: none;
  --blend-mode-5: none;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: rgba(255,255,255,0.2);
  --blend-color-4: transparent;
  --blend-color-5: transparent;
}

.grid {
  margin: 50vh auto 0;
    position: relative;
    padding: 0 1em;
    width: 100%;
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(2, 1fr);
}

.grid__item {
    margin: 0 0 40vh;
    position: relative;
}

.grid__item:nth-child(odd) {
  margin-top: -40vh;
}

.grid__item-title {
  position: absolute;
  margin: 0;
  font-size: 6vw;
  color: var(--color-title);
  font-family: 'Barlow', sans-serif;
  font-weight: 800;
  padding: 30vh 0.5em 0;
  top: 0;
  pointer-events: none;
  line-height: 1;
}

.grid__item:nth-child(odd) .grid__item-title {
  right: 0;
  text-align: right;
  padding-top: 10vh;
}

.grid__item-title span {
  display: block;
  position: relative;
  font-size: 50%;
  font-weight: 500;
  opacity: 0;
  color: var(--color-subtitle);
}

.glitch:hover + .grid__item-title span {
  opacity: 1;
  animation: glitch-anim-text 0.5s linear;
}

@media screen and (max-width: 55em) {
  .grid { grid-template-columns: 100%; margin-top: 3em; }
  .grid__item { margin: 0 0 3em; }
  .grid__item:nth-child(odd) { margin-top: 0; }
  .grid__item-title, .grid__item:nth-child(odd) .grid__item-title { font-size: 2em; text-align: center; width: 100%; padding: 0; top: 20%; }
}

/* Glitch styles */
.glitch {
  position: relative;
  width: var(--glitch-width);
  max-width: 400px;
  height: var(--glitch-height);
  max-height: calc(400px * 1.25);
  overflow: hidden;
  margin: 0 auto;
}

.glitch:hover {
  cursor: pointer;
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
  transform: translate3d(0,0,0);
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
.glitch__img:nth-child(n+2) {
  opacity: 0;
}

/* Hovers */

/* On hover we show the 2nd, 3rd, 4th and 5th image*/
.glitch:hover .glitch__img:nth-child(n+2) {
  opacity: 1;
}

/* Hover animations for horizontal case */
.glitch:hover .glitch__img:nth-child(2) {
  transform: translate3d(var(--gap-horizontal),0,0);
  animation: glitch-anim-1-horizontal var(--time-anim) infinite linear alternate;
}

.glitch:hover > .glitch__img:nth-child(3) {
  transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0);
  animation: glitch-anim-2-horizontal var(--time-anim) infinite linear alternate;
}

.glitch:hover > .glitch__img:nth-child(4) {
  transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
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
  transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0) scale3d(-1,-1,1);
  animation: glitch-anim-3-vertical var(--time-anim) infinite linear alternate;
}

/* Hover flash animation on last image */
.glitch:hover > .glitch__img:nth-child(5) {
  animation: glitch-anim-flash 0.5s steps(1,end) infinite;
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
    -webkit-clip-path: polygon(15% 0, 16% 0, 16% 100%, 15% 100%);;
    clip-path: polygon(15% 0, 16% 0, 16% 100%, 15% 100%);
  }
  37% {
    -webkit-clip-path: polygon(40% 0, 39% 0, 39% 100%, 40% 100%);;
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
    transform: translate3d(-10px,0,0) scale3d(-1,-1,1);
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
    transform: translate3d(-10px,0,0) scale3d(-1,-1,1);
  }
  100% {
    opacity: 1;
    transform: translate3d(0,0,0) scale3d(1,1,1);
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
  33%, 100% {
    opacity: 0;
    transform: translate3d(0,0,0);
  }
}
</style>
