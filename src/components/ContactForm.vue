<script setup lang="ts">
import { reactive, ref } from 'vue'
// cont toast = useToast()
const getFormInitialState = () => ({ email: '', name: '', message: '' })
const agreed = ref(false)
const form = reactive(getFormInitialState())
const sending = ref(false)

const toggleAgreed = () => {
  agreed.value = !agreed.value
}

const validate = () => {
  sending.value = true
  setTimeout(() => {
    console.log('EMAIL SUCESSFULLY SENT', { ...form })
    // toast('Thank you! We\'ll be in touch soon...', { type: TYPE.SUCCESS, timeout: 1500, hideProgressBar: true })
    sending.value = false
    agreed.value = false
    Object.assign(form, getFormInitialState())
  }, 1000)
}

</script>

<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 text-light-gray">
    <div class="relative max-w-xl mx-auto">
      <svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Reach out to us!
        </h2>
        <p class="mt-4 text-lg leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="mt-12">
        <form
          action="#"
          method="POST"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          @submit.prevent="validate"
        >
          <div class="sm:col-span-2">
            <label for="name" block text-sm>
              Name *
            </label>
            <div class="mt-1">
              <input
                id="name"
                v-model="form.name"
                name="name"
                type="text"
                autocomplete="name"
                required
                class="form-input"
              >
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" block text-sm>
              Email *
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="form-input"
              >
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" block text-sm>
              Message *
            </label>
            <div class="mt-1">
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="4"
                required
                class="form-input"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex items-center">
              <switch-component
                v-model="agreed"
                :class="[agreed ? 'bg-gray' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0']"
                @click="toggleAgreed"
              >
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" :class="[agreed ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
              </switch-component>
              <div class="ml-3">
                <p class="text-base">
                  By selecting this, you agree to the
                  {{ ' ' }}
                  <a href="#" class="font-medium text-gray-dark hover:text-gray transition-colors underline">Privacy Policy</a>
                  {{ ' ' }}
                  and
                  {{ ' ' }}
                  <a href="#" class="font-medium text-gray-dark hover:text-gray transition-colors underline">Cookie Policy</a>.
                </p>
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded shadow-sm text-base font-medium text-white bg-gray focus:outline-none transition-all"
              :class="{
                'opacity-40': !agreed || sending,
                'hover:bg-gray-dark': agreed && !sending
              }"
              :disabled="!agreed || sending"
              @click="validate"
            >
              <span v-if="!sending">Let's talk</span>
              <div v-else class="relative">
                <span>Submitting</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute -right-7 top-0.5 h-5 w-5 animate-spin transform rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
