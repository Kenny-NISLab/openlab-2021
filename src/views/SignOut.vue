<template>
  <div class="signout">
    <h1>ログアウト</h1>
    <v-btn @click="singout">ログアウト</v-btn>
  </div>
</template>

<script>
import firebase from '../firebase.js'
export default {
  name: 'Signout',
  components: {
  },
  methods: {
    singout () {
      firebase.auth().signOut().then(() => {
        alert('ログアウトしました。')
        this.$router.push('/')
      })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
