<template>
  <div class="confirmOpenlabDelete">
    <h1 class="heading--main">
      以下の予約をキャンセルしますか？
    </h1>

    <v-row
      class="my-6"
      justify="center"
    >
      <v-col cols="12">
        <v-simple-table>
          <template #default>
            <tbody>
              <tr>
                <td>お名前</td>
                <td>{{ reservation.name }}</td>
              </tr>
              <tr>
                <td>学籍番号</td>
                <td>{{ reservation.studentId }}</td>
              </tr>
              <tr>
                <td>メールアドレス</td>
                <td>{{ reservation.email }}</td>
              </tr>
              <tr>
                <td>予約日</td>
                <td>{{ reservation.date }}</td>
              </tr>
              <tr>
                <td>予約時間</td>
                <td>{{ reservation.time }}</td>
              </tr>
              <tr>
                <td>補足事項</td>
                <td>{{ reservation.message }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-btn
      class="mx-6"
      @click="backToReservation"
    >
      戻る
    </v-btn>
    <v-btn
      class="mx-6"
      @click="confirmDeleteOpenlabReservation"
    >
      キャンセルする
    </v-btn>
  </div>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'ConfirmOpenlabDelete',
  components: {
  },
  data () {
    return {
      uid: '',
      reservation: ''
    }
  },
  created () {
    this.reservation = this.$route.query.reservation
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })
  },
  methods: {
    confirmDeleteOpenlabReservation () {
      firebase.database().ref('reservation/' + this.uid).remove()
      firebase.database().ref('openlab/' + this.reservation.time + '/' + this.reservation.id).remove().then(() => {
        alert('予約をキャンセルしました。')
        this.$router.push('/mypage')
      })
    },

    backToReservation () {
      this.$router.push('/mypage')
    }
  }
}
</script>
