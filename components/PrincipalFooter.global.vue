<template>
  <footer class="dev footer">
    <div class="footer__next">
      <client-only>
        <arrow-right-icon class="icon" />
      </client-only>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>
