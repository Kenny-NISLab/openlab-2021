<template>
    <div class="resetPassword">
        <h1>パスワード再設定</h1>
		<MenuBar/>

        <v-form ref="resetPasswordForm">
            <v-text-field v-model="email" label="メールアドレス" :rules="emailRules" required></v-text-field>
            <h2 class="my-3" v-show="error_message !== ''">{{ error_message }}</h2>
            <v-btn @click="resetPasswordUser">再設定メールを送信する</v-btn>
        </v-form>
    </div>
</template>

<script>
import firebase from "../firebase.js";
import MenuBar from '../components/MenuBar.vue';
export default {
    name: "resetPassword",
    components: {
        MenuBar,
    },
    data() {
        return {
            email: '',
			emailRules: [
				v => !!v || '必須項目です',
				v => /.+@.+\..+/.test(v) || 'メールアドレスが不正な形式です',
			],
            error_message: '',
        };
    },
    methods: {
        resetPasswordUser() {
            if(this.$refs.resetPasswordForm.validate()){
                this.error_message = '';
                firebase.auth().sendPasswordResetEmail(this.email).then(() => {
                    alert(this.email + 'にメールを送信しました。');
                    this.$router.push("/signin");
                }).catch(() => {
                    this.error_message = '登録されたメールアドレスが存在しない可能性があります。';
                });
            }else{
                this.error_message = 'メールアドレスを正しく入力してください。';
            }
        }
    },
};
</script>