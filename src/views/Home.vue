<template>
  <div class="view home">
    <h1 class="display-2 mb-1">
      Olá, seja bem vindo a um clone do
      <a class="text-orange" href="https://trello.com" target="_blank">Trello</a>
      feito com Vue.js
    </h1>

    <h3 class="display-4 mb-1">Abaixo segue algumas dicas para você utilizar a aplicação</h3>

    <ul class="tips">
      <li>
        Vá para os
        <span class="text-orange cursor-pointer" @click="navigateTo('Boards')">"Seus Quadros"</span>
        para visualizá-los e começar a gerenciar suas tarefas
      </li>
      <li>
        Nos seus quadros, você pode criar vários cartões que podem simbolizar diversos tipos de
        tarefas do seu projeto
      </li>
      <li>
        Você também pode criar diversas colunas além das padrões(que são "A fazer", "Fazendo",
        "Feita")
      </li>
    </ul>

    <h4 class="display-5 text-center">
      Este projeto foi desenvolvido com fins de estudo e prática de desenvolvimento web, construção
      e estilização de interfaces, o código fonte pode ser encontrado
      <a href="#" class="text-orange">
        aqui
      </a>
      e o caso queira entrar em contato com o desenvolvedor, basta clicar
      <a href="#" class="text-orange">
        aqui
      </a>
    </h4>
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
