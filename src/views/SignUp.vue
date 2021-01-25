<template>
  <div class="signup">
    <h1>アカウント作成</h1>

    <v-form ref="createAccountForm">
      <v-text-field v-model="email" label="メールアドレス" :rules="emailRules" required></v-text-field>
      <v-text-field v-model="password" type="password" label="パスワード" :rules="passwordRules" required></v-text-field>
      <v-text-field v-model="confirm_password" type="password" label="パスワードを再入力してください" :rules="confirm_passwordRules" required></v-text-field>
      <h2 v-show="error_message !== ''" class="my-3">{{ error_message }}</h2>
      <v-btn @click="createUserAccount">アカウントを作成する</v-btn>
    </v-form>
  </div>
</template>

<script>
import firebase from '../firebase.js'
export default {
  name: 'Signup',
  components: {
  },
  data () {
    return {
      email: '',
      emailRules: [
        v => !!v || '必須項目です',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正な形式です'
      ],
      password: '',
      passwordRules: [
        v => !!v || '必須項目です',
        v => v.length >= 8 || 'パスワードが短すぎます'
      ],
      confirm_password: '',
      confirm_passwordRules: [
        v => v === this.password || 'パスワードが一致しません'
      ],
      error_message: ''
    }
  },
  methods: {
    createUserAccount () {
      if (this.$refs.createAccountForm.validate()) {
        this.error_message = ''
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('アカウントを作成しました。 ' + this.email + ' に確認メールを送信しましたので、リンクをクリックして認証してください。')
            firebase.auth().languageCode = 'ja'
            firebase.auth().currentUser.sendEmailVerification().then(() => {
              this.$router.push('/')
            })
          })
          .catch((error) => {
            alert('Error: 既に登録されている可能性があります。')
            console.error(error.message)
          })
      } else {
        this.error_message = 'メールアドレスとパスワードを正しく入力してください。'
      }
    }
  }
}
</script>
