<template>
	<div class="openlabReserveConfirm">
		<h1>以下の日時・情報で予約しますか？</h1>

		<v-row class="my-6" justify="center">
			<v-col cols="12">
				<v-simple-table>
					<template v-slot:default>
						<tbody>
							<tr>
								<td>お名前</td>
								<td>{{ name }}</td>
							</tr>
							<tr>
								<td>学籍番号</td>
								<td>{{ studentId }}</td>
							</tr>
							<tr>
								<td>メールアドレス</td>
								<td>{{ email }}</td>
							</tr>
							<tr>
								<td>予約日</td>
								<td>{{ date }}</td>
							</tr>
							<tr>
								<td>予約時間</td>
								<td>{{ time }}</td>
							</tr>
							<tr>
								<td>補足事項</td>
								<td>{{ message }}</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-col>
		</v-row>

		<v-btn class="mx-6" @click="backToReservation">戻る</v-btn>
		<v-btn class="mx-6" @click="confirmReservation">予約する</v-btn>
	</div>
</template>

<script>
import firebase from '../firebase.js';

export default {
	name: "confirmReserve",
	components: {
	},
	data() {
		return {
			uid: '',
			email: '',
			today: '',
			date: '',
			time: '',
			name: '',
			studentId: '',
			message: '',
			sumReserve: 0,
		}
	},
	methods: {
		confirmReservation(){
			firebase.database().ref('openlab/' + this.time).on('value', (parent) => {
				this.sumReserve = parent.numChildren();
			})
			if(this.sumReserve < 8){
				var newPostListRef = firebase.database().ref('openlab/' + this.time).push();
				var postListKey = newPostListRef.key;
				newPostListRef.set({
					id: postListKey,
					uid: this.uid,
					email: this.email,
					today: this.getToday(),
					date: '2021-02-15',
					time: this.time,
					name: this.name,
					studentId: this.studentId,
					message: this.message,
				});

				alert("研究室訪問の予約を受け付けました。");
				
				this.$router.push({
					path: "/openlab/reserve/verification",
					query: {
						email: this.email,
						date: this.date,
						time: this.time,
						name: this.name,
						studentId: this.studentId,
						message: this.message,
					}
				});
			}else{
				alert("エラーが発生しました。予約をやり直してください。");
				this.$router.push("/openlab/reserve");
			}
		},

		backToReservation(){
			this.$router.push("/openlab/reserve");
		},

        getToday(){
            let date = new Date();
            date.setTime(date.getTime() + 9*60*60*1000);
            return date.toISOString().substr(0,19);
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
		
		this.time = this.$route.query.time;
		this.name = this.$route.query.name;
		this.date = this.$route.query.date;
		this.studentId = this.$route.query.studentId;
		this.message = this.$route.query.message;
	}
};
</script>