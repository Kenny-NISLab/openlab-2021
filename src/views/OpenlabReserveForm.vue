<template>
	<div class="openlabReserveForm">
		<h1>オープンラボ訪問予約</h1>
		<WelcomeUser/>
		<MenuBar/>

        <v-form ref="reserveVisitForm">
            <h2>2021年2月15日 {{ time }} で予約します。</h2>

            <h2 class="my-3" v-show="error_message !== ''">{{ error_message }}</h2>

            <v-text-field v-model="name" label="お名前" :rules="nameRules" required></v-text-field>

            <v-text-field v-model="studentId" label="学籍番号" :rules="studentIdRules" required></v-text-field>

            <v-text-field v-model="message" label="補足事項があれば記入してください"></v-text-field>

            <v-btn class="mx-6" @click="backToReservation">戻る</v-btn>
            <v-btn class="mx-6" @click="submitReservation">予約確認</v-btn>
        </v-form>
	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
	name: "openlabReserveForm",
	components: {
		WelcomeUser,
		MenuBar,
	},
	data() {
		return {
            uid: '',
            name: '',
            nameRules: [
				v => !!v || '必須項目です',
            ],
            time: '',
            studentId: '',
            studentIdRules: [
				v => !!v || '必須項目です',
				v => v.length >= 8 || '学籍番号が短すぎます',
            ],
            message: '',
            error_message: '',
		}
	},
    methods: {
        submitReservation(){
            if(this.$refs.reserveVisitForm.validate()){
                this.error_message = '',
                this.$router.push({
                    path: '/openlab/reserve/confirm',
                    query: {
                        date: '2021-02-15',
                        time: this.time,
                        name: this.name,
                        studentId: this.studentId,
                        message: this.message,
                    }
                })
            }else{
                this.error_message = 'メールアドレスとパスワードを正しく入力してください。';
            }

        },

		backToReservation(){
			this.$router.push("/openlab/reserve");
		},
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = user.uid;
            }else{
                this.uid = null;
            }
        });

        this.time = this.$route.query.time;
    }
}
</script>
