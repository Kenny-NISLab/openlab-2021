<template>
  <v-app id="app">
    <Header />
    <DrawerNav />
    <v-main id="main">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import store from '@/store'
import Header from '@/components/Header.vue'
import DrawerNav from '@/components/DrawerNav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  store,
  components: {
    Header,
    DrawerNav,
    Footer
  },
  data () {
    return {
      navDrawer: store.state.navDrawer
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  width: 100%;
  font-family: 'Noto Sans JP', 'Roboto', sans-serif;
  background-color: #fafafa;
}

#main {
  width: 1200px;
  margin: 0 auto;
}
</style>

<style>
h1 {
  position: relative;
  padding: 0.3em 0.5em;
  margin: 0.8em 0;
  border-left: solid 6px #3fc1c9;
}

h2 {
  padding: 0.5em 0.8em;
  margin: 0.8em 0;
  color: #364f6b;
  background-color: #f5f5f5;
  border-radius: 6px;
}

h3 {
  padding: 0.3em;
  border-bottom: solid 2px #364f6b;
}
</style>
