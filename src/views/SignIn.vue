<template>
<div class="signin">
	<v-container>
		<h1>SING IN</h1>
		<div>
			<router-link to="/">Home</router-link>
		</div>

		<div>
			<h3>E-mail</h3>
			<input type="text" placeholder="E-mail" v-model="email" />
		</div>
		<div>
			<h3>Password</h3>
			<input type="password" placeholder="Password" v-model="password" />
		</div>
		<button @click="userSingIn">Sing in Now!!</button>
	</v-container>
</div>
</template>

<script>
import firebase from "../firebase.js";
export default {
	name: "singin",
	data() {
		return {
		email: "",
		password: ""
		};
	},
	methods: {
		userSingIn() {
		firebase
			.auth()
			.signInWithEmailAndPassword(this.email, this.password)
			.then(() => {
			alert("ログインしました。");
			this.$router.push("/mypage");
			})
			.catch(() => {
				alert("メールアドレスかパスワードが間違っています。")
			});
		}
	}
};
</script>
