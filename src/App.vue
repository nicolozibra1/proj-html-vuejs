<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
  <!-- <ProgressBar /> -->
</template>

<script>
import {store} from './data/store.js'
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ProgressBar from './components/ProgressBar.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
      ProgressBar
    },
    data() {
      return {
        store,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
