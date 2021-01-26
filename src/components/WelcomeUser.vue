<template>
  <h4 v-show="useremail">
    ようこそ {{ useremail }} さん
  </h4>
</template>

<script>
import firebase from '../firebase.js'

export default {
  name: 'Welcomeuser',
  data () {
    return {
      useremail: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.useremail = user.email
      } else {
        this.useremail = null
      }
    })
  }
}
</script>

<style scoped>
h4 {
  text-align: right;
}
</style>
