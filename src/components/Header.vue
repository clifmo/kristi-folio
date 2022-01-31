<script setup lang="ts">

const navOpen = ref(false)
const openNav = () => {
  navOpen.value = !navOpen.value
}
</script>

<template>
  <header h="24" w="full" flex justify-between items="center" px="4" class="dark:bg-gray-900 text-gray-700 dark:text-gray-100">
    <a href="#">Logo</a>

    <nav>
      <button class="md:hidden" @click="openNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <ul
        class="
                  fixed
                  opacity-0
                  left-0
                  right-0
                  min-h-screen
                  px-4
                  pt-8
                  space-y-4
                  text-gray-900
                  dark:text-white
                  transform
                  transition
                  duration-300
                  translate-x-full
                  md:relative md:flex md:opacity-100 md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0
               "
      >
        <li class="">
          <a href="#" @click="openNav">Home</a>
        </li>
        <li class="">
          <a href="#features" @click="openNav">Features</a>
        </li>
        <li>
          <a href="#about" @click="openNav">About</a>
        </li>
        <li>
          <a href="#contact" @click="openNav">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
