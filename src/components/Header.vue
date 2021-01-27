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
import store from '@/store'


export default {
  name: 'Header',
  store,
  data () {
    return {
      uid: '',
      navDrawer: false,
      menuLogined: [
        {
          name: 'HOME',
          path: '/'
        },
        {
          name: 'コンテンツ',
          path: '/about'
        },
        {
          name: 'オープンラボ訪問予約',
          path: '/openlab/reserve'
        },
        {
          name: 'マイページ',
          path: '/mypage'
        },
        {
          name: 'お問い合わせ',
          path: '/contact'
        },
        {
          name: 'ログアウト',
          path: '/signout'
        }
      ],
      menuLogouted: [
        {
          name: 'HOME',
          path: '/'
        },
        {
          name: 'コンテンツ',
          path: '/about'
        },
        {
          name: 'ログイン・新規登録',
          path: '/signin'
        }
      ]
    }
  },
  computed: {
    state() {
      return store.state.navDrawer;
    },
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
      store.commit('toggle',!store.state.navDrawer)
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
