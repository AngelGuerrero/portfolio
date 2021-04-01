<template>
  <nav class="dev navbar mr-auto h-full flex justify-end">
    <!-- Menu -->
    <div class="dev nav__menu hidden sm:flex">
      <div v-for="item in menuList" :key="item.id" class="dev">
        <nuxt-link
          :to="item.to"
          exact
          class="h-full
                flex
                items-center
                px-8
                font-saira
                uppercase
                text-custom-blue
                hover:bg-custom-green
                hover:text-black
                "
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>

    <!-- Connected Status -->
    <div class="dev visible sm:hidden w-full self-center">
      <ConnectedStatus />
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Home', to: '/', active: false },
      { title: 'Me', to: 'me', active: false }
      // { title: 'Lab', to: 'lab', active: false },
      // { title: 'Project', to: 'projects', active: false },
      // { title: 'Contact', to: 'contact', active: false }
    ]
  }),

  computed: {
    menuList () {
      return this.menu.map((item) => {
        item.active = item.to === this.$route.path
        return item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  .nav__menu {
    // initial state
    opacity: 0;
    @include appear-from-opacity($duration: 3s, $delay: 0.5s);
  }
}
</style>
