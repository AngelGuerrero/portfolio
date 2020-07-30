<template>
  <div class="dev wrapper">
    <nav class="dev navbar">
      <div class="nav__menu">
        <a href="#" class="menu__item">&lt; home /&gt;</a>
        <a href="#" class="menu__item">&lt; about /&gt;</a>
        <a href="#" class="menu__item">&lt; lab /&gt;</a>
        <a href="#" class="menu__item">&lt; projects /&gt;</a>
        <a href="#" class="menu__item">&lt; contact /&gt;</a>
      </div>
    </nav>

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

    <main class="dev main" />
    <footer class="dev footer">
      <arrow-right-icon class="icon" />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
.icon {
  font-size: 24px;
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
  background-color: white;
}

.aside__header {
  height: 50%;
  position: relative;
}

.aside__header-menu {
  /* background-color: blue; */
  border: 1px solid rgb(235, 235, 235);
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.aside__header-menu .icon {
  margin: 0;
  color: black;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}

.aside__title {
  width: 200%;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  overflow-wrap: normal;
  word-wrap: normal;
  color: rgb(90, 90, 97);

  position: absolute;
  top: 120px;

  transform: rotate(270deg) translateX(-50%) translateY(120%);
  transform-origin: 0px 0px;
}

.aside__links {
  height: 50%;
  border-right: 1px solid rgb(235, 235, 235);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.link--icon {
  margin-bottom: 30px;
  color: rgb(90, 90, 97);
}

.main {
  background-color: lightblue;
  grid-column-start: 2;
  grid-column-end: 5;
}

.navbar {
  background-color: white;
  grid-column-start: 2;
  grid-column-end: 5;
}

.nav__menu {
  width: 50%;
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
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(90, 90, 97);
}

.footer {
  background-color: white;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.footer .icon {
  width: 80px;
  font-size: 36px;
  margin: 0;
  color: rgb(90, 90, 97);
}
</style>
