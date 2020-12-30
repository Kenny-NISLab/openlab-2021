<template>
	<div class="reserveVisit">
		<h1>予約完了</h1>
		<WelcomeUser/>
		<MenuBar/>

        <h2>研究室訪問の予約が完了しました。</h2>

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

	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
	name: "verificateReserve",
	components: {
		WelcomeUser,
		MenuBar,
    },
    data() {
        return {
			uid: '',
			email: '',
			date: '',
			time: '',
			name: '',
			studentId: '',
			message: '',
        }
    },
    methods: {
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = user.uid;
            }else{
                this.uid = null;
            }
		});
		
		this.email = this.$route.query.email;
		this.date = this.$route.query.date;
		this.time = this.$route.query.time;
		this.name = this.$route.query.name;
		this.studentId = this.$route.query.studentId;
		this.message = this.$route.query.message;
    }
}
</script>
