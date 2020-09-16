<template>
  <div id="app">
    <Header> </Header>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header,
  },

  mounted() {
    if (window.matchMedia('(max-width: 830px)').matches) {
      this.$swal.fire({
        icon: 'warning',
        title: 'Aviso',
        text:
          'Esse projeto não se adapta a telas de dispositivos móveis, para ter a melhor experiência possível você deve usar um computador',
      });
    }
  },
};
</script>
