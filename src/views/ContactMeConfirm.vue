<template>
  <div class="openlabReserveConfirm">
    <h1>以下の内容で問い合わせしますか？</h1>
    <v-alert
      dense
      outlined
      type="error"
    >
      まだ問い合わせは完了していません。
    </v-alert>

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
                <td>{{ contactForm.name }}</td>
              </tr>
              <tr>
                <td>学籍番号</td>
                <td>{{ contactForm.studentId }}</td>
              </tr>
              <tr>
                <td>メールアドレス</td>
                <td>{{ contactForm.email }}</td>
              </tr>
              <tr>
                <td>問い合わせ内容</td>
                <td>{{ contactForm.message }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-btn
      class="mx-6"
      @click="backToContact()"
    >
      戻る
    </v-btn>
    <v-btn
      class="mx-6"
      @click="confirmContact()"
    >
      予約する
    </v-btn>
  </div>
</template>

<script>
import firebase from '../firebase.js'
export default {
  name: 'ConfirmContact',
  components: {
  },
  data () {
    return {
      contactForm: {}
    }
  },
  created () {
    this.contactForm = this.$route.query.contactForm
  },
  methods: {
    confirmContact () {
      const sendMail = firebase.functions().httpsCallable('sendContact')
      sendMail(this.contactForm)

      const newPostListRef = firebase.database().ref('contact').push()
      const postListKey = newPostListRef.key
      newPostListRef.set({
        id: postListKey,
        name: this.contactForm.name,
        email: this.contactForm.email,
        studentId: this.contactForm.studentId,
        message: this.contactForm.message
      })

      this.$router.push({
        path: '/contact/verification',
        query: {
          contactForm: this.contactForm
        }
      })
    },

    backToContact () {
      this.$router.push('/contact')
    }
  }
}
</script>
