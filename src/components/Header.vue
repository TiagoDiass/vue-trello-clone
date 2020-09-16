<template>
  <header class="header">
    <h2 class="logo" @click="$router.push('/home')">
      <span class="text-orange">Vue</span><span class="font-weight-light">Trello</span>
    </h2>

    <nav>
      <router-link tag="a" to="/home">
        <i class="fas fa-home"></i>
        Home
      </router-link>

      <router-link tag="a" to="/">
        <i class="fas fa-clipboard-list"></i>
        Seu Quadro
      </router-link>

      <a href="https://github.com/TiagoDiass/vue-trello-clone" target="_blank">
        <i class="fas fa-code"></i>
        Código Fonte
      </a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
