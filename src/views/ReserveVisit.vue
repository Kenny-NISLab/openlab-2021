<template>
	<div class="reserveVisit">
		<h1>事前日程での研究室訪問予約</h1>
		<WelcomeUser/>
		<MenuBar/>

        <h2>2021年2月15日のオープンラボ以外の日程で研究室訪問を希望される方は希望の日時を選択してください。</h2>
        <h3>オープンラボ当日の訪問を希望される方は<router-link to="openlab/reserve">こちら</router-link>からご予約ください。</h3>

        <v-form class="my-6" ref="reserveVisitForm">
            <h2>希望の日付を選択してください。</h2>
            <v-date-picker class="mb-6" v-model="date" elevation="2" :allowed-dates="allowedDates" min="2021-01-01" max="2021-02-28" required></v-date-picker>

            <v-select v-model="time" :items="times" label="時間を選んでください"></v-select>

            <v-text-field v-model="name" label="お名前" required></v-text-field>

            <v-text-field v-model="studentId" label="学籍番号" required></v-text-field>

            <v-text-field v-model="message" label="補足事項があれば記入してください"></v-text-field>

            <v-btn @click="submitReservation">予約確認</v-btn>
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
            date: '',
            time: '',
            times: ['11:00', '13:00', '15:00', '17:00'],
            name: '',
            studentId: '',
            message: '',
        }
    },
    methods: {
        submitReservation(){
            this.$router.push({
                path: '/reserve/confirm',
                query: {
                    date: this.date,
                    time: this.time,
                    name: this.name,
                    studentId: this.studentId,
                    message: this.message,
                }
            });
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
            }else{
                this.uid = null;
            }
        });
    }
}
</script>