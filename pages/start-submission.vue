<template>
  <div class="grid w-full h-screen place-content-center text-black">
    <div class="px-4">
      <div
        class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-12 md:p-16 shadow-xl"
      >
        <h2 class="font-bold text-5xl md:text-8xl text-center">
          Project Submitted
        </h2>
        <p class="text-center pt-16 text-2xl md:text-3xl">
          Thank you for submitting your project inquiry.
          <br />
          <br />
          We will review it and get back to you as soon as possible.
        </p>
        <div class="flex flex-col md:flex-row w-full pt-16 gap-8">
          <div
            class="w-[100%] md:w-1/2 bg-black rounded-xl text-white p-4 shadow-lg"
          >
            <p class="font-bold">Have a question?</p>
            Send us an email at
            <a
              class="underline"
              href="mailto:contact@epochdesign.dev"
              target="_blank"
              >contact@epochdesign.dev</a
            >
          </div>
          <button
            @click="gotoHome"
            class="w-[100%] md:w-1/2 bg-black rounded-xl text-white p-4 flex flex-row justify-between items-center shadow-lg hover:-translate-x-2 hover:-translate-y-1 transition-all duration-200"
          >
            <p class="font-bold text-2xl">Home</p>
            <img
              class="get_in_touch_arrow h-12"
              src="../assets/arrow-circle2.png"
              alt="arrow circle"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function gotoHome() {
  //send to homepage
  navigateTo("/");
}
</script>
