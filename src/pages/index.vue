<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="bg-base">
    <div i-carbon-campsite text-4xl inline-block />
    <h1>
      <a rel="noreferrer" href="#" target="_blank" font-sans="lato">
        Kristin P.S. Molina
      </a>
    </h1>
    <h2 op75>
      Opinionated Technical Marketer
    </h2>

    <div py-4 />

    <div w-65 m-auto>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
  <Project />
</template>
