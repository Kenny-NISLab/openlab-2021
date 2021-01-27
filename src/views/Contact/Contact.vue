<template>
  <div class="contactMe">
    <h1>問い合わせ</h1>
    <WelcomeUser />

    <v-form ref="contactForm">
      <v-text-field
        v-model="contactForm.name"
        label="お名前"
        :rules="nameRules"
        required
      />
      <v-text-field
        v-model="contactForm.studentId"
        label="学籍番号"
        :rules="studentIdRules"
        required
      />
      <v-text-field
        v-model="contactForm.message"
        label="問い合わせ内容"
        :rules="messageRules"
        required
      />

      <h2
        v-show="error_message !== ''"
        class="my-3"
      >
        {{ error_message }}
      </h2>

      <v-btn @click="sendContact()">
        問い合わせする
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import firebase from '@/firebase.js'
import WelcomeUser from '@/components/WelcomeUser.vue'
export default {
  name: 'Contact',
  components: {
    WelcomeUser
  },
  data () {
    return {
      contactForm: {
        email: '',
        name: '',
        studentId: '',
        message: ''
      },
      nameRules: [
        v => !!v || '必須項目です'
      ],
      studentIdRules: [
        v => !!v || '必須項目です',
        v => v.length >= 8 || '学籍番号が短すぎます'
      ],
      messageRules: [
        v => !!v || '必須項目です'
      ],
      error_message: ''
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.contactForm.email = user.email
      } else {
        this.contactForm.email = null
      }
    })
  },
  methods: {
    sendContact () {
      if (this.$refs.contactForm.validate()) {
        this.error_message = ''
        this.$router.push({
          path: '/contact/confirm',
          query: {
            contactForm: this.contactForm
          }
        })
      } else {
        this.error_message = '正しく入力してください。'
      }
    }
  }
}
</script>
