<template>
  <nav class="dev navbar h-full flex justify-between">
    <!-- Icon burger -->
    <div
      class="dev
              bg-custom-accent
              w-16
              m-1
              flex
              justify-center
              items-center
              hover:bg-custom-contrast
              cursor-pointer"
    >
      <img
        src="~/assets/images/menu.svg"
        class="dev
              flex
              justify-center
              items-center
              p-3
              cursor-pointer"
      >
    </div>
    <!-- Menu -->
    <div class="dev nav__menu hidden sm:flex">
      <div
        v-for="item in menuList"
        :key="item.id"
        class="dev
              flex
              items-center
              flex-1
              px-5
              md:px-10
              font-saira
              uppercase
              text-custom-contrast
              hover:text-custom-enfasis"
      >
        <nuxt-link :to="item.to" exact>
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Home', to: '/', active: false },
      { title: 'Me', to: 'me', active: false },
      { title: 'Lab', to: 'lab', active: false },
      { title: 'Project', to: 'projects', active: false },
      { title: 'Contact', to: 'contact', active: false }
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
    @include appear-from-opacity($duration: 3s, $delay: 1s);
  }
}
</style>
