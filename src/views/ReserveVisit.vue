<template>
	<div class="reserveVisit">
		<h1>事前日程での研究室訪問予約</h1>
		<WelcomeUser/>
		<MenuBar/>

        <h2>2021年2月15日のオープンラボ以外の日程で研究室訪問を希望される方は希望の日時を選択してください。</h2>
        <h3>オープンラボ当日の訪問を希望される方は<router-link to="openlab/reserve">こちら</router-link>からご予約ください。</h3>

        <v-form class="my-6" ref="reserveVisitForm">
            <h2 class="my-2">希望の日付を選択してください。</h2>

            <v-date-picker class="mb-6" v-model="date" elevation="2" :allowed-dates="allowedDates" min="2021-01-01" max="2021-02-28" required></v-date-picker>

            <v-select v-model="time" :items="times" label="時間を選んでください" :rules="timeRules" required></v-select>

            <v-text-field v-model="name" label="お名前" :rules="nameRules" required></v-text-field>

            <v-text-field v-model="studentId" label="学籍番号" :rules="studentIdRules" required></v-text-field>

            <v-text-field v-model="message" label="補足事項があれば記入してください"></v-text-field>

            <h2 class="my-3" v-show="error_message !== ''">{{ error_message }}</h2>
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
            timeRules: [
				v => !!v || '必須項目です',
            ],
            times: ['11:00', '13:00', '15:00', '17:00'],
            name: '',
            nameRules: [
				v => !!v || '必須項目です',
            ],
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
            if( this.date === '' ){
                this.error_message = '日付を選択してください';
            }else if(this.$refs.reserveVisitForm.validate()){
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
            }else{
                this.error_message = '正しく入力できていない箇所があります。';
            }
        },

        allowedDates(val) {
            let today = new Date();
            today = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate() + 1,
            );

            let day = new Date(val);

            if( day.getFullYear() === 2021 && day.getMonth() === 1 && day.getDate() === 15){
                return false;
            }

            if( day.getFullYear() === 2021 && day.getMonth() === 0 && day.getDate() === 27){
                return false;
            }

            if( day.getFullYear() === 2021 && day.getMonth() === 0 && day.getDate() === 28){
                return false;
            }

            if( day.getDay() === 0 || day.getDay() === 6){
                return false;
            }

            return today <= day;
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