<template>
	<div class="signin">
		<h1>ログイン</h1>
		<MenuBar/>

		<div>
			<h3>E-mail</h3>
			<input type="text" placeholder="E-mail" v-model="email" />
		</div>
		<div>
			<h3>Password</h3>
			<input type="password" placeholder="Password" v-model="password" />
		</div>
		<button @click="userSingIn">Sing in Now!!</button>
	</div>
</template>

<script>
import firebase from "../firebase.js";
import MenuBar from '../components/MenuBar.vue';
export default {
	name: "signin",
	components: {
		MenuBar,
	},
	data() {
		return {
		email: "",
		password: ""
		};
	},
	methods: {
		userSingIn() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
			.then(() => {
				alert("ログインしました。");
				this.$router.push("/");
			})
			.catch(() => {
				alert("メールアドレスかパスワードが間違っています。")
			});
		}
	}
};
</script>
