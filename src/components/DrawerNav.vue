<template>
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
</template>

<script>
import firebase from '@/firebase.js'
import store from '@/store'

export default {
  name: 'DrawerNav',
  data () {
    return {
      uid: '',
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
    navDrawer: {
      get() {
        return store.state.navDrawer
      },
      set(val) {
        store.commit('toggle', val)
      },
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
}
</script>
