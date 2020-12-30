<template>
	<div class="signin">
		<h1>ログイン</h1>
		<MenuBar/>

		<v-form>
			<v-text-field v-model="email" label="メールアドレス" required></v-text-field>
			<v-text-field v-model="password" type="password" label="パスワード" required></v-text-field>
			<v-btn @click="userSingIn">ログイン</v-btn>
		</v-form>

		<v-row class="mt-6" justify="center">
			<p>アカウントをお持ちでない方は <router-link to="/signup">こちらから新規登録</router-link></p>
		</v-row>
		<v-row justify="center">
			<p>パスワードを忘れた方は <router-link to="/resetpass">こちらから再設定</router-link></p>
		</v-row>
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
			email: '',
			password: '',
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
