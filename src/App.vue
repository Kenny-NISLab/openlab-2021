<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="navDrawer"
      app
    >
      <v-list nav>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>NISLAB OpenLAB</v-list-item-title>
            <v-list-item-subtitle>ネットワーク情報システム研究室<br>佐藤研究室</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item-group v-show="uid">
          <v-list-item
            v-for="menuItem in menuLogined"
            :key="menuItem.name"
            :to="menuItem.path"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group v-show="!uid">
          <v-list-item
            v-for="menuItem in menuLogouted"
            :key="menuItem.name"
            :to="menuItem.path"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="bg"
      app
    >
      <v-app-bar-nav-icon @click="navDrawer=!navDrawer" />
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

    <v-main id="main">
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import firebase from '@/firebase.js'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
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
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })
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

.v-toolbar__title {
  margin-right: 50px !important;
  overflow: visible !important;
}

@media screen and (max-width: 1000px) {
  .v-tabs {
    display: none;
  }
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
