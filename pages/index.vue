<template>
  <div class="dev wrapper">
    <!-- Nav -->
    <Navbar />

    <!-- Aside menú -->
    <AsideMenu />

    <!-- Main content -->
    <main class="dev main d-flex align-items-center">
      <div class="background_tag">
        <h2> &lt; Home /&gt; </h2>
      </div>

      <TextDescription />
    </main>

    <!-- Footer -->
    <PrincipalFooter />
  </div>
</template>

<script>
import TextDescription from '@/components/TextDescription'

export default {
  components: {
    TextDescription
  }
}
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;

  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
  grid-template-rows: 50px auto 50px;

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

.main {
  background-color: $principal;
  grid-column-start: 2;
  grid-column-end: 5;
}

.slideRight {
  opacity: 0;
  animation-name: slideBoxRight;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.background_tag {
  color: white;
  position: fixed;
  top: 20%;
  left: 18%;
  opacity: 0.2;

  @include media-screen-sm {
    left: 5%;
  }

  h2 {
    font-size: 2rem !important;
    font-family: 'Courgette', cursive;

    @include media-screen-md {
      font-size: 3rem !important;
    }
  }
}

</style>
