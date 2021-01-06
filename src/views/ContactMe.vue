<template>
	<div class="contactMe">
		<h1>お問い合わせ</h1>
		<WelcomeUser/>

		<v-form ref="contactForm">
			<v-text-field v-model="contactform.name" label="お名前" :rules="nameRules" required></v-text-field>
			<v-text-field v-model="contactform.studentId" label="学籍番号" :rules="studentIdRules" required></v-text-field>
			<v-text-field v-model="contactform.message" label="本文" :rules="messageRules" required></v-text-field>

            <h2 class="my-3" v-show="error_message !== ''">{{ error_message }}</h2>

			<v-btn @click="sendContact()">送信する</v-btn>
		</v-form>
	</div>
</template>

<script>
import firebase from "../firebase.js";
import WelcomeUser from '../components/WelcomeUser.vue';
export default {
	name: 'contactme',
	components: {
		WelcomeUser,
	},
	data() {
		return {
			contactform: {
				email: '',
				name: '',
				studentId: '',
				message: '',
			},
			nameRules: [
				v => !!v || '必須項目です',
			],
			studentIdRules: [
				v => !!v || '必須項目です',
				v => v.length >= 8 || '学籍番号が短すぎます',
			],
			messageRules: [
				v => !!v || '必須項目です',
			],
			error_message: '',
		}
	},
	methods: {
		sendContact: function(){
			if(this.$refs.contactForm.validate()){
				this.error_message = '';
				const mailer = firebase.functions().httpsCallable('sendMail');
				mailer(this.contactform).then(() => {
					alert('お問い合わせを受け付けました。');
					this.$router.push('/');
				}).catch(err => {
					console.log(err);
					alert('お問い合わせを送信できませんでした。やり直してください。');
				})
			}else{
				this.error_message = '正しく入力されていません。';
			}
		}
	},
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
				this.contactform.email = user.email;
            }else{
				this.contactform.email = null;
            }
        });
    }
}
</script>