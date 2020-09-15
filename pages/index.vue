<template>
  <div class="dev wrapper">
    <!-- Nav -->
    <Navbar />

    <!-- Aside menú -->
    <aside class="wrapper__menu">
      <div class="aside__header">
        <div class="aside__header-menu">
          <client-only>
            <menu-icon class="icon" />
          </client-only>
        </div>
        <!-- <h2 class="aside__title">
          &lt; Home /&gt;
        </h2> -->
      </div>
      <div class="aside__links">
        <client-only>
          <github-icon class="link--icon icon" />
          <whatsapp-icon class="link--icon icon" />
          <gmail-icon class="link--icon icon" />
        </client-only>
      </div>
    </aside>

    <!-- Main content -->
    <main class="dev main">
      <div class="background_tag">
        <h2 class="">
          &lt; Home /&gt;
        </h2>
      </div>

      <div id="box__title_1" class="dev">
        <h1 id="title1" class="main__title opacity-0">
          Hi, my name is
        </h1>
      </div>

      <div id="box__title_2" class="dev">
        <h1 id="title2" class="main__title opacity-0">
          Ángel Guerrero
        </h1>
      </div>

      <div id="subtitle" class="main__subtitle dev" />
    </main>

    <!-- Footer -->
    <footer class="dev footer">
      <div class="footer__next">
        <client-only>
          <arrow-right-icon class="icon" />
        </client-only>
      </div>
    </footer>
  </div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  mounted () {
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
      setTimeout(_ => removeClass('title2', 'opacity-0'), 1000)
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
  }
}
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;

  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
  grid-template-rows: 50px auto 70px;

  background-color: rgb(255, 255, 253);
}

.wrapper__menu {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: $principal;
  color: white;
}

.aside__header {
  height: 50%;
  position: relative;
}

.aside__header-menu {
  background-color: $hotpink;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 10px;
}
.aside__header-menu .icon {
  color: white;
  font-size: 36px;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.aside__title {
  font-family: 'Courgette', cursive;
  font-weight: 700;
  font-size: 1.0rem;

  width: 200%;
  text-transform: uppercase;
  letter-spacing: 3px;
  overflow-wrap: normal;
  word-wrap: normal;
  color: white;

  position: absolute;
  top: 120px;

  transform: rotate(270deg) translateX(-50%) translateY(120%);
  transform-origin: 0px 0px;
}

.aside__links {
  height: 50%;
  background-color: $principal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.link--icon {
  margin-bottom: 30px;
  color: white;
  cursor: pointer;
}

.main {
  background-color: $principal;
  grid-column-start: 2;
  grid-column-end: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.main__title {
  font-family: "Cy";
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 60px;
  font-size: 3rem;
  color: white;

  @include media-screen-md {
    font-size: 60px;
  }
}

.slideRight {
  opacity: 0;
  animation-name: slideBoxRight;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.main__subtitle {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 60px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 20px;

  @include media-screen-md {
    font-size: 40px;
  }
}

.title--cursive {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  font-weight: 300;
}

@keyframes slideright {
  0% {
    opacity: 0;
    width: 0%;
  }
  100% {
    opacity: 1;
    width: 70%;
  }
}

.title--enfasis {
  color: white;
  font-family: "Cy Extra Bold";
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 30%;
    background-color: #00FFEE;

    animation-name: slideright;
    animation-delay: 3s;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
}

.footer {
  background-color: $principal;

  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.footer__next {
  opacity: 0;
  width: 100px;
  height: 100%;
  background-color: $hotpink;

  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: slideBoxRight;
  animation-delay: 10s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
.footer__next .icon {
  font-size: 36px;
  color: white;
}

.background_tag {
  color: white;
  position: fixed;
  top: 20%;
  left: 5%;
  opacity: 0.2;

  h2 {
    font-size: 3rem !important;
    font-family: 'Courgette', cursive;
  }
}

@keyframes revealBoxRight {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.box__title {
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

.react {
  color: #00d8ff;
}
.vue {
  color: #55e7a6;
}
.heart {
  color: red;
}
</style>
