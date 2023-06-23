<template>
  <div class="min-h-[100vh] grid grid-areas-layout grid-cols-layout grid-rows-layout dev">
    <!-- <AnimatedLine /> -->

    <header class="dev grid-in-header">
      <div class="icon__burger">
        <!-- <IconBurger /> -->
      </div>

      <Navbar />
    </header>

    <aside class="grid-in-left">
      aside left
      <!-- <AsideMenu /> -->
    </aside>

    <main class="dev grid-in-main">
      <slot />
    </main>

    <aside class="dev grid-in-right" />

    <footer class="dev grid-in-footer">
      footer
      <!-- <PrincipalFooter /> -->
    </footer>
  </div>
</template>
