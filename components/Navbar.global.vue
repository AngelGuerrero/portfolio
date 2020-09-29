<template>
  <nav class="dev navbar p-0 d-flex">
    <div class="nav__menu dev d-none d-md-flex w-50 h-100 ml-auto">
      <a href="#" class="menu__item dev d-flex justify-content-center align-items-center flex-grow-1">home </a>
      <a href="#" class="menu__item dev d-flex justify-content-center align-items-center flex-grow-1">about</a>
      <a href="#" class="menu__item dev d-flex justify-content-center align-items-center flex-grow-1">lab</a>
      <a href="#" class="menu__item dev d-flex justify-content-center align-items-center flex-grow-1">projects</a>
      <a href="#" class="menu__item dev d-flex justify-content-center align-items-center flex-grow-1">contact</a>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  content-visibility: auto;
  background-color: $principal;
  grid-column: 2/5;
  grid-row: 1/2;
}

.menu__item {
  font-family: 'Saira Semi Condensed', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: $gold;
}

.menu__item:hover {
  background-color: darken($color: $principal, $amount: 10);
  color: $hotpink;
}
</style>
