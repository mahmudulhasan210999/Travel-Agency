<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
