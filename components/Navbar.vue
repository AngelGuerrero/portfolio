<script setup>
const route = useRoute()

const menu = [
  { title: 'Home', to: '/', active: false },
  { title: 'Me', to: 'me', active: false },
  { title: 'Projects', to: 'projects', active: false },
  { title: 'Contact', to: 'contact', active: false }
]

const menuList = computed(() => menu.map(item => (item.to === route.path ? { ...item, active: true } : item)))
</script>

<template>
  <nav class="flex justify-end h-full mr-auto dev navbar">
    <!-- Menu -->
    <div class="hidden dev nav__menu sm:flex">
      <div v-for="item in menuList" :key="item.id" class="dev">
        <NuxtLink
          :to="item.to"
          exact
          class="flex items-center h-full px-8 font-sans text-sm font-bold lowercase transition duration-700 border-b-4 border-custom-main-500 text-custom-blue-700 hover:bg-custom-blue-900 hover:text-custom-blue-500 hover:border-custom-contrast-500">
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>

    <!-- Connected Status -->
    <div class="self-center visible w-full dev sm:hidden">
      <!-- <ConnectedStatus /> -->
    </div>
  </nav>
</template>
