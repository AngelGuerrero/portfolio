<template>
  <nav class="dev navbar p-0 d-flex">
    <div class="nav__menu dev d-none d-md-flex w-50 h-100 ml-auto">
      <a href="#" class="menu__item dev">home </a>
      <a href="#" class="menu__item dev">about</a>
      <a href="#" class="menu__item dev">lab</a>
      <a href="#" class="menu__item dev">projects</a>
      <a href="#" class="menu__item dev">contact</a>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $principal;
  grid-column: 2/5;
  grid-row: 1/2;

  .nav__menu {
    // initial state
    opacity: 0;
    @include appear-from-opacity($duration: 3s, $delay: 2s);
  }
}

.menu__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  font-family: "Saira Semi Condensed", sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: $gold;
}

.menu__item:hover {
  background-color: darken($color: $principal, $amount: 10);
  color: $accent;
}
</style>
