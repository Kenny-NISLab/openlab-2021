<template>
  <div class="mypage">
    <h1 class="heading--main">
      マイページ
    </h1>
    <WelcomeUser />

    <h2
      v-show="titleMessage"
      class="heading--sub my-6"
    >
      {{ titleMessage }}
    </h2>
    <p class="heading--accent">
      予約は3日前までキャンセルできます。それ以降は直接お問い合わせください。
    </p>

    <v-row
      v-for="openlabReservation in myOpenlabReservation"
      :key="openlabReservation.id"
      class="my-6"
      justify="center"
    >
      <v-col cols="12">
        <v-simple-table>
          <template #default>
            <tbody>
              <tr>
                <td>お名前</td>
                <td>{{ openlabReservation.name }}</td>
              </tr>
              <tr>
                <td>学籍番号</td>
                <td>{{ openlabReservation.studentId }}</td>
              </tr>
              <tr>
                <td>メールアドレス</td>
                <td>{{ openlabReservation.email }}</td>
              </tr>
              <tr>
                <td>予約日</td>
                <td>{{ openlabReservation.date }}</td>
              </tr>
              <tr>
                <td>予約時間</td>
                <td>{{ openlabReservation.time }}</td>
              </tr>
              <tr>
                <td>補足事項</td>
                <td>{{ openlabReservation.message }}</td>
              </tr>
              <tr>
                <td colspan="2">
                  <v-btn
                    v-show="isThreeDaysBefore(openlabReservation.date)"
                    @click="deleteOpenlabReservation(openlabReservation)"
                  >
                    この予約をキャンセルする
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from '@/firebase.js'
import WelcomeUser from '@/components/WelcomeUser.vue'

export default {
  name: 'Mypage',
  components: {
    WelcomeUser
  },
  data () {
    return {
      uid: '',
      times: ['11:00', '11:30', '13:00', '13:30', '14:00', '14:15', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'],
      myOpenlabReservation: [],
      titleMessage: ''
    }
  },
  async created () {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })

    this.titleMessage = 'オープンラボ訪問の予約情報'
    this.myOpenlabReservation = []

    for (const i in this.times) {
      await firebase.database().ref('openlab/' + this.times[i]).orderByChild('uid').equalTo(this.uid).on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          this.myOpenlabReservation.push(childSnapshot.val())
        })
      })
    }
  },
  methods: {
    deleteOpenlabReservation: function (targetReservation) {
      this.$router.push({
        path: '/openlab/reserve/delete',
        query: {
          reservation: targetReservation
        }
      })
    },

    isThreeDaysBefore: function (targetDate) {
      const arr = targetDate.split('-')
      const day1 = new Date(arr[0], arr[1], arr[2])
      const year1 = day1.getFullYear()
      const month1 = day1.getMonth()
      const date1 = day1.getDate()
      // console.log(year1, month1, date1);

      const day2 = new Date()
      const year2 = day2.getFullYear()
      const month2 = day2.getMonth() + 1
      const date2 = day2.getDate() + 2
      // console.log(year2, month2, date2);

      if (year1 === year2) {
        if (month1 === month2) {
          return date1 > date2
        } else {
          return month1 > month2
        }
      } else {
        return year1 > year2
      }
    }
  }
}
</script>
