<template>
  <header class="header">
    <h2 class="logo" @click="$router.push('/')">
      <span class="text-orange">Vue</span><span class="font-weight-light">Trello</span>
    </h2>

    <nav>
      <router-link tag="a" to="/board">
        <i class="fas fa-clipboard-list"></i>
        Seu Quadro
      </router-link>

      <a href="#">
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
