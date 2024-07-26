<script setup lang="ts">
const projects = ['1', '2', '3']
</script>

<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 text-black">
    <div class="relative mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p class="mt-4 text-lg leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div id="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start px-8">
          <div class="project-preview">
            1
          </div>
          <div class="project-preview">
            2
          </div>
          <div class="project-preview">
            3
          </div>
          <div class="project-preview">
            4
          </div>
          <div class="project-preview">
            5
          </div>
          <div class="project-preview">
            6
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
