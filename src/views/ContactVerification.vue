<template>
  <div class="openlabReserveConfirm">
    <h1>問い合わせ完了</h1>
    <WelcomeUser/>
    <h2>問い合わせが完了しました。</h2>
    <h3>後ほど、メールにてご回答させていただきます。</h3>

    <v-row class="my-6" justify="center">
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
  </div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue'
export default {
  name: 'ContactVerification',
  components: {
    WelcomeUser
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
  }
}
</script>
