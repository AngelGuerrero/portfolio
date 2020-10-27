<template>
  <footer class="dev footer__wrapper dev">
    <div class="w-100 h-100 dev">
      <b-row class="h-100">
        <!-- prev -->
        <b-col col="1" sm="2" md="2" lg="1" class="dev my-col p-0">
          <ArrowBtn v-show="prev" direction="left" :to="prev" />
        </b-col>

        <!-- Default Slot -->
        <!-- Hidden on small devices -->
        <b-col sm="8" md="8" lg="10" class="dev my-col d-none d-sm-flex">
          <p class="h5 react">
            Website under construction 🚧
          </p>
        </b-col>

        <!-- next -->
        <b-col col="1" sm="2" md="2" lg="1" class="dev my-col p-0">
          <ArrowBtn v-show="next" direction="right" :to="next" />
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    prev: {
      type: String,
      default: ''
    },

    next: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.footer__wrapper {
  grid-row: layout-row-line-last / layout-row-end;
  grid-column: layout-col-line-second / layout-col-end;
}

.my-col {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
