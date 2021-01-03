<template>
	<div class="mypage">
		<h1>マイページ</h1>
		<WelcomeUser/>
		<MenuBar/>

		<v-btn class="mx-4 my-4" @click="showMyOpenlabReservation">オープンラボ訪問の予約情報</v-btn>
		<v-btn class="mx-4 my-4" @click="showMyVisitReservation">事前訪問の予約情報</v-btn>

		<h3>予約は3日前までキャンセルできます。それ以降は直接お問い合わせください。</h3>

		<h1 v-show="titleMessage" class="my-6">{{ titleMessage }}</h1>

		<v-row class="my-6" justify="center" v-for="openlabReservation in myOpenlabReservation" :key="openlabReservation.id">
			<v-col cols="12">
			<v-simple-table>
				<template v-slot:default>
					<tbody>
						<tr>
							<td>お名前</td>
							<td>{{ openlabReservation.name }}</td>
						</tr>
						<tr>
							<td>学籍番号</td>
							<td>{{ openlabReservation.studentId }}</td>
						</tr>
						<tr>
							<td>メールアドレス</td>
							<td>{{ openlabReservation.email }}</td>
						</tr>
						<tr>
							<td>予約日</td>
							<td>{{ openlabReservation.date }}</td>
						</tr>
						<tr>
							<td>予約時間</td>
							<td>{{ openlabReservation.time }}</td>
						</tr>
						<tr>
							<td>補足事項</td>
							<td>{{ openlabReservation.message }}</td>
						</tr>
						<tr>
							<td colspan="2"><v-btn v-show="isThreeDaysBefore(openlabReservation.date)" @click="deleteOpenlabReservation(openlabReservation)">この予約をキャンセルする</v-btn></td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
			</v-col>
		</v-row>

		<v-row class="my-6" justify="center" v-for="visitReservation in myVisitReservation" :key="visitReservation.id">
			<v-col cols="12">
			<v-simple-table>
				<template v-slot:default>
					<tbody>
						<tr>
							<td>お名前</td>
							<td>{{ visitReservation.name }}</td>
						</tr>
						<tr>
							<td>学籍番号</td>
							<td>{{ visitReservation.studentId }}</td>
						</tr>
						<tr>
							<td>メールアドレス</td>
							<td>{{ visitReservation.email }}</td>
						</tr>
						<tr>
							<td>予約日</td>
							<td>{{ visitReservation.date }}</td>
						</tr>
						<tr>
							<td>予約時間</td>
							<td>{{ visitReservation.time }}</td>
						</tr>
						<tr>
							<td>補足事項</td>
							<td>{{ visitReservation.message }}</td>
						</tr>
						<tr>
							<td colspan="2"><v-btn v-show="isThreeDaysBefore(visitReservation.date)" @click="deleteVisitReservation(visitReservation)">この予約をキャンセルする</v-btn></td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
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
			times: ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
			myOpenlabReservation: [],
			myVisitReservation: [],
			titleMessage: '',
		}
	},
	methods: {
		showMyOpenlabReservation(){
			this.titleMessage = 'オープンラボ訪問の予約情報';
			this.myOpenlabReservation = [];
			this.myVisitReservation = [];
			for(let i in this.times){
				firebase.database().ref('openlab/' + this.times[i]).orderByChild('uid').equalTo(this.uid).on('value', (snapshot) => {
					snapshot.forEach((childSnapshot) => {
						this.myOpenlabReservation.push(childSnapshot.val());
					})
				})
			}
		},

		deleteOpenlabReservation: function(targetReservation){
			this.$router.push({
				path: '/openlab/reserve/delete',
				query: {
					reservation: targetReservation,
				}
			})
		},

		showMyVisitReservation(){
			this.titleMessage = '事前訪問の予約情報';
			this.myVisitReservation = [];
			this.myOpenlabReservation = [];
			firebase.database().ref('reservation').orderByChild('uid').equalTo(this.uid).on('value', (snapshot) => {
				snapshot.forEach((childSnapshot) => {
					this.myVisitReservation.push(childSnapshot.val());
				})
			});
		},

		deleteVisitReservation: function(targetReservation){
			this.$router.push({
				path: '/mypage/delete',
				query: {
					reservation: targetReservation,
				}
			});
		},

		isThreeDaysBefore: function(targetDate){
			var arr = targetDate.split('-');
			var day1 = new Date(arr[0], arr[1], arr[2]);
			var year1 = day1.getFullYear();
			var month1 = day1.getMonth();
			var date1 = day1.getDate();
			// console.log(year1, month1, date1);

			var day2 = new Date();
			var year2 = day2.getFullYear();
			var month2 = day2.getMonth() + 1;
			var date2 = day2.getDate() + 2;
			// console.log(year2, month2, date2);

			if(year1 === year2){
				if(month1 === month2){
					return date1 > date2;
				}else{
					return month1 > month2;
				}
			}else{
				return year1 > year2;
			}
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
};
</script>