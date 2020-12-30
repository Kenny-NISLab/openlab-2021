<template>
	<div class="mypage">
		<h1>マイページ</h1>
		<WelcomeUser/>
		<MenuBar/>

		<v-btn class="" @click="showMyReservation">予約情報を取得する</v-btn>

		<v-row class="my-6" justify="center" v-for="reservation in myReservation" :key="reservation.id">
			<v-col cols="12">
			<v-simple-table>
				<template v-slot:default>
					<tbody>
						<tr>
							<td>お名前</td>
							<td>{{ reservation.name }}</td>
						</tr>
						<tr>
							<td>学籍番号</td>
							<td>{{ reservation.studentId }}</td>
						</tr>
						<tr>
							<td>メールアドレス</td>
							<td>{{ reservation.email }}</td>
						</tr>
						<tr>
							<td>予約日</td>
							<td>{{ reservation.date }}</td>
						</tr>
						<tr>
							<td>予約時間</td>
							<td>{{ reservation.time }}</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
			</v-col>
			<v-col cols="12">
			<v-btn @click="deleteReservation(reservation)">この予約をキャンセルする</v-btn>
			</v-col>
		</v-row>

	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
	name: "mypage",
	components: {
		WelcomeUser,
		MenuBar
	},
	data() {
		return {
			uid: '',
			myReservation: [],
		}
	},
	methods: {
		showMyReservation(){
			this.myReservation = [],
			firebase.database().ref('reservation').orderByChild('uid').equalTo(this.uid).on('value', (snapshot) => {
				snapshot.forEach((childSnapshot) => {
					this.myReservation.push(childSnapshot.val());
				})
			});
		},

		deleteReservation: function(targetReservation){
			this.$router.push({
				path: '/mypage/delete',
				query: {
					reservation: targetReservation,
				}
			});
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
	}
};
</script>