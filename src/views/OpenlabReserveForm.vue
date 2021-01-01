<template>
	<div class="openlabReserveForm">
		<h1>オープンラボ訪問予約</h1>
		<WelcomeUser/>
		<MenuBar/>

        <v-form ref="reserveVisitForm">
            <h2>2021年2月15日 {{ time }} で予約します。</h2>

            <v-text-field v-model="name" label="お名前" required></v-text-field>

            <v-text-field v-model="studentId" label="学籍番号" required></v-text-field>

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
            time: '',
			studentId: '',
			message: '',
		}
	},
    methods: {
        submitReservation(){
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