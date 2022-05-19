<template>
  <div class="view home">
    <h1 class="display-2 mb-1">
      Hey, welcome to a
      <a class="text-orange" href="https://trello.com" target="_blank">Trello</a>
      clone built with Vue.js
    </h1>

    <ul class="tips">
      <li>
        Go to the
        <span class="text-orange cursor-pointer" @click="navigateTo('Board')">"Your board"</span>
        to view it and start managing your tasks
      </li>

      <li>
        In your board you can create as many cards as you want to help you manage your project tasks
      </li>

      <li>
        This project has been developed with the aim of studying and praciting web development,
        interfaces building and styling, the source code can be found
        <a
          href="https://github.com/TiagoDiass/vue-trello-clone"
          class="text-orange"
          target="_blank"
        >
          here
        </a>
      </li>
    </ul>

    <h4 class="display-5 text-center"></h4>
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    navigateTo(name) {
      this.$router.push({ name });
    },
  },
};
</script>
