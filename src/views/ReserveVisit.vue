<template>
	<div class="reserveVisit">
		<h1>訪問予約</h1>
		<WelcomeUser/>
		<MenuBar/>

        <v-form>
            <h2>希望の日付を選択してください。</h2>
            <v-date-picker class="mb-6" v-model="date" elevation="2" :allowed-dates="allowedDates" min="2021-01-01" max="2021-02-28" required></v-date-picker>

            <v-select v-model="time" :items="times" label="時間を選んでください"></v-select>

            <v-text-field v-model="name" label="お名前" required></v-text-field>

            <v-text-field v-model="studentId" label="学籍番号" required></v-text-field>

            <v-text-field v-model="message" label="補足事項があれば記入してください"></v-text-field>

            <v-btn @click="submitReservation">予約する</v-btn>
        </v-form>
	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
	name: "reserveVisit",
	components: {
		WelcomeUser,
		MenuBar,
    },
    data() {
        return {
            uid: '',
            email: '',
            today: '',
            date: new Date().toISOString().substr(0,10),
            time: '',
            times: ['', '11:00', '13:00', '15:00', '17:00'],
            name: '',
            studentId: '',
            message: '',
        }
    },
    methods: {
        submitReservation() {
            firebase.database().ref('reservation').push().set({
                uid: this.uid,
                email: this.email,
                today: this.getToday(),
                date: this.date,
                time: this.time,
                name: this.name,
                studentId: this.studentId,
                message: this.message,
            });

            alert("研究室訪問の予約を受け付けました。");
        },

        getToday(){
            let date = new Date();
            date.setTime(date.getTime() + 9*60*60*1000);
            return date.toISOString().substr(0,19);
        },

        allowedDates(val) {
            let day = new Date();
            day = new Date(
                day.getFullYear(),
                day.getMonth(),
                day.getDate() + 1,
            );
            return day <= new Date(val);
        },
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = user.uid;
                this.email = user.email;
            }else{
                this.uid = null;
                this.email = null;
            }
        });
    }
}
</script>
