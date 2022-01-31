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
    <div class="relative max-w-4xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p class="mt-4 text-lg leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div id="container">
        <div class="grid grid-rows-4 grid-flow-col gap-2 rounded-md p-2 text-xs text-black dark:text-white text-center">
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            1
          </div>
          <div class="form-input w-50 h-50 mb-12 flex flex-col justify-center">
            2
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            3
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            4
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            5
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            6
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            7
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            8
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            9
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            10
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            11
          </div>
          <div class="form-input w-50 h-50 flex flex-col justify-center">
            12
          </div>
        </div>
      </div>

      <div class="mt-12">
        <div
          class="inline-grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div class="sm:col-span-2">
            <label for="message" block text-sm>
              Message *
            </label>
            <div class="mt-1">
              <div
                id="message"
                class="form-input w-50 h-50"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" block text-sm>
              Message *
            </label>
            <div class="mt-1">
              <div
                id="message"
                class="form-input w-50 h-50"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" block text-sm>
              Message *
            </label>
            <div class="mt-1">
              <div
                id="message"
                class="form-input w-50 h-50"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" block text-sm>
              Message *
            </label>
            <div class="mt-1">
              <div
                id="message"
                class="form-input w-50 h-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
