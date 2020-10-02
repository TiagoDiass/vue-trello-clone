<template>
  <div class="view home">
    <h1 class="display-2 mb-1">
      Olá, seja bem vindo a um clone do
      <a class="text-orange" href="https://trello.com" target="_blank">Trello</a>
      feito com Vue.js
    </h1>

    <ul class="tips">
      <li>
        Vá para o
        <span class="text-orange cursor-pointer" @click="navigateTo('Board')">"Seu Quadro"</span>
        para visualizá-lo e começar a gerenciar suas tarefas
      </li>
      <li>
        No seus quadro, você pode criar vários cartões que podem simbolizar diversos tipos de
        tarefas do seu projeto
      </li>
      <!-- <li>
        Você também pode criar diversas colunas além das padrões(que são "A fazer", "Fazendo",
        "Feita")
      </li> -->
      <li>
        Este projeto foi desenvolvido com fins de estudo e prática de desenvolvimento web,
        construção e estilização de interfaces, o código fonte pode ser encontrado
        <a
          href="https://github.com/TiagoDiass/vue-trello-clone"
          class="text-orange"
          target="_blank"
        >
          aqui
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
