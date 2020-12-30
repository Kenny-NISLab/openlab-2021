<template>
	<div class="openlabReserve">
		<h1>オープンラボ訪問予約</h1>
		<WelcomeUser/>
		<MenuBar/>

        <h2>2021年2月15日にオープンラボを開催します。</h2>
        <h2>オフラインでの訪問を希望される方は希望の時間を選択してください。</h2>

        <v-btn class="my-6">予約空き状況を取得する</v-btn>

        <v-simple-table>
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
                        <td>{{ item.state }} / 8</td>
                        <td><v-btn @click="submitReservation(item.time)">予約する</v-btn></td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
	name: "openlabReserve",
	components: {
		WelcomeUser,
		MenuBar,
    },
    data() {
        return {
            uid: '',
            items: [
                {
                    time: '10:00',
                    state: 0,
                },
                {
                    time: '11:00',
                    state: 0,
                },
                {
                    time: '13:00',
                    state: 0,
                },
                {
                    time: '14:00',
                    state: 0,
                },
                {
                    time: '15:00',
                    state: 0,
                },
                {
                    time: '16:00',
                    state: 0,
                },
                {
                    time: '17:00',
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