<template>
  <div class="dev wrapper">
    <!-- Nav -->
    <nav class="dev navbar">
      <div class="nav__menu d-none d-md-flex">
        <a href="#" class="menu__item">home </a>
        <a href="#" class="menu__item">about</a>
        <a href="#" class="menu__item">lab</a>
        <a href="#" class="menu__item">projects</a>
        <a href="#" class="menu__item">contact</a>
      </div>
    </nav>

    <!-- Aside menú -->
    <aside class="wrapper__menu">
      <div class="aside__header">
        <div class="aside__header-menu">
          <menu-icon class="icon" />
        </div>
        <h2 class="aside__title">
          &lt; Home /&gt;
        </h2>
      </div>
      <div class="aside__links">
        <github-icon class="link--icon icon" />
        <whatsapp-icon class="link--icon icon" />
        <gmail-icon class="link--icon icon" />
      </div>
    </aside>

    <!-- Main content -->
    <main class="dev main">
      <h1 class="main__title" data-aos="fade-right">
        Hi, my name is
      </h1>
      <h1 class="main__title" data-aos="fade-right" data-aos-delay="1000">
        Ángel Guerrero
      </h1>
      <h2 class="main__subtitle" data-aos="fade-right" data-aos-delay="2000">
        I <span class="title--cursive">design</span> and <span class="title--enfasis">develop</span> in Vue
      </h2>
    </main>

    <!-- Footer -->
    <footer class="dev footer">
      <div class="footer__next">
        <arrow-right-icon class="icon" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

$mainColor: #1111d8;

@font-face {
  font-family: "Cy";
  src: url("../assets/fonts/Cy/Cy-Regular.otf");
}
@font-face {
  font-family: "Cy Extra Bold";
  src: url("../assets/fonts/Cy/Cy-ExtraBold.otf");
}
@font-face {
  font-family: "Consolas";
  src: url("../assets/fonts/Consolas.ttf");
}

.icon {
  font-size: 22px;
  color: black;
}
.wrapper {
  height: 100%;
  background-color: rgb(255, 255, 253);
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
  grid-template-rows: 50px auto 70px;
}

.wrapper__menu {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: $mainColor;
  color: white;
}

.aside__header {
  height: 50%;
  position: relative;
}

.aside__header-menu {
  background-color: #FF13F7;
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
  background-color: $mainColor;

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
  background-color: $mainColor;
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

.main__subtitle {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 60px;
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

.navbar {
  background-color: $mainColor;
  grid-column-start: 2;
  grid-column-end: 5;
}

.nav__menu {
  width: 60%;
  margin-left: auto;
  height: 100%;
  display: flex;
}

.menu__item {
  flex-grow: 1;
  width: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Saira Semi Condensed', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
}
.menu__item:hover {
  background-color: darken($color: $mainColor, $amount: 10);
  color: white;
}

@keyframes slideBoxRight {
  0% {
    opacity: 0;
    transform: translateX(-1000px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.footer {
  background-color: $mainColor;

  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.footer__next {
  width: 100px;
  height: 100%;
  background-color: #FF13F7;

  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: slideBoxRight;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
.footer__next .icon {
  font-size: 36px;
  color: white;
}
</style>
