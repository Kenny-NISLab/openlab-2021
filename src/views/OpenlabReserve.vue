<template>
	<div class="openlabReserve">
		<h1>オープンラボ訪問予約</h1>
		<WelcomeUser/>

        <h2>2021年2月15日にオープンラボを開催します。</h2>
        <h2>オフラインでの訪問を希望される方は希望の時間を選択してください。</h2>
        <h4>前日（2月14日）までこちらから予約できます。</h4>

        <v-simple-table class="my-6">
            <template v-slot:default>
                <thead>
                    <tr>
                        <td>時間</td>
                        <td>予約状況</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.time">
                        <td>{{ item.time }}</td>
                        <td>{{ item.state }} / 6</td>
                        <td><v-btn v-show="item.state < 6 && isDayBefore()" @click="submitReservation(item.time)">予約する</v-btn></td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';

export default {
	name: "openlabReserve",
	components: {
		WelcomeUser,
    },
    data() {
        return {
            uid: '',
            items: [
                {
                    time: '11:00',
                    state: 0,
                },
                {
                    time: '11:30',
                    state: 0,
                },
                {
                    time: '14:00',
                    state: 0,
                },
                {
                    time: '16:00',
                    state: 0,
                },
                {
                    time: '16:30',
                    state: 0,
                },
            ],
        }
    },
    methods: {
        submitReservation: function(reserveTime){
            this.$router.push({
                path: '/openlab/reserve/form',
                query: {
                    time: reserveTime,
                }
            });
        },

        isDayBefore(){
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth()+1;
            var date = today.getDate();

            if(year === 2021){
                if( month === 2){
                    return date < 15;
                }else{
                    return month < 2;
                }
            }else{
                return year < 2021;
            }
        }
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = user.uid;
            }else{
                this.uid = null;
            }
        });

        for(let i in this.items){
            firebase.database().ref('openlab/' + this.items[i].time).on('value', (parent) => {
                this.items[i].state = parent.numChildren();
            });
        }
    }
}
</script>