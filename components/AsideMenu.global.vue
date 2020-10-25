<template>
  <aside class="wrapper__menu">
    <div :class="{ 'header--animation': !isMobile }" class="aside__header">
      <div
        class="aside__header-menu d-flex justify-content-center align-items-center d-md-none"
      >
        <client-only>
          <menu-icon class="icon" />
        </client-only>
      </div>
    </div>

    <div :class="{ 'links--animation': !isMobile }" class="aside__links">
      <client-only>
        <a
          href="https://github.com/AngelGuerrero"
          target="_blank"
          title="Ver perfil de GitHub y códigos"
        >
          <github-icon
            class="link--icon icon"
            title="Ver perfil de GitHub y códigos"
          />
        </a>
        <a
          href="https://wa.link/upltbr"
          target="_blank"
          title="Abrir chat de Whatsapp"
        >
          <whatsapp-icon
            class="link--icon icon"
            title="Abrir chat de Whatsapp"
          />
        </a>
        <a
          href="mailto:lasantiagoguerrero@gmail.com"
          target="_blank"
          title="Mandar correo electrónico"
        >
          <gmail-icon
            class="link--icon icon"
            title="¡Mandar correo electrónico!"
          />
        </a>
      </client-only>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    //
    // Doesn't play animations on mobile devices
    //
    isMobile: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.aside__header {
  height: 50%;
  position: relative;
}

.header--animation {
  // initial state
  opacity: 0;
  @include appear-from-opacity($duration: 5s, $delay: 2s);
}

.aside__header-menu {
  background-color: $accent;
  height: 50px;

  cursor: pointer;
  padding-bottom: 10px;
}
.aside__header-menu .icon {
  font-size: 36px;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.aside__title {
  font-family: "Courgette", cursive;
  font-weight: 700;
  font-size: 1rem;

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

.links--animation {
  @include appear-from-opacity($duration: 8s, $delay: 4s);
}

.link--icon {
  margin-bottom: 30px;
  color: white;
  &:hover {
    color: $accent;
    cursor: pointer;
  }
}
</style>
