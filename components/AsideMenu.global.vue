<template>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>
