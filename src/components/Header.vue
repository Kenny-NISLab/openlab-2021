<template>
  <v-app-bar
    class="bg"
    app
  >
    <v-app-bar-nav-icon @click="toggle" />
    <v-toolbar-title>
      <a
        href="/"
        style="text-decoration: none;"
      >NISLAB OpenLAB</a>
    </v-toolbar-title>

    <v-tabs v-show="uid">
      <v-tab
        v-for="menuItem in menuLogined"
        :key="menuItem.name"
        :to="menuItem.path"
      >
        {{ menuItem.name }}
      </v-tab>
    </v-tabs>

    <v-tabs v-show="!uid">
      <v-tab
        v-for="menuItem in menuLogouted"
        :key="menuItem.name"
        :to="menuItem.path"
      >
        {{ menuItem.name }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
import firebase from '@/firebase.js'
import storeDrawer from '@/store/drawer.js'
import storeMenu from '@/store/menu.js'


export default {
  name: 'Header',
  storeDrawer,
  data () {
    return {
      uid: '',
      navDrawer: false,
    }
  },
  computed: {
    state() {
      return storeDrawer.state.navDrawer
    },
    menuLogined() {
      return storeMenu.state.menuLogined
    },
    menuLogouted() {
      return storeMenu.state.menuLogouted
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })
  },
  methods: {
    toggle() {
      storeDrawer.commit('toggle',!storeDrawer.state.navDrawer)
    }
  }
}
</script>

<style scoped>
.v-toolbar__title {
  margin-right: 50px !important;
  overflow: visible !important;
}

@media screen and (max-width: 1024px) {
  .v-tabs {
    display: none;
  }
}
</style>
