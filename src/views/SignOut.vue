<template>
<div class="signout">
	<v-container>
		<h1>SING OUT</h1>
		<div>
			<router-link to="/">Home</router-link> |
			<router-link to="/mypage">マイページ</router-link>
		</div>

		<div>
			<button @click="singout">Sing out Now!!</button>
		</div>
	</v-container>
</div>
</template>

<script>
import firebase from "../firebase.js";
export default {
	name: "singout",
	methods: {
		singout() {
		firebase
			.auth()
			.signOut()
			.then(() => {
			alert("ログアウトしました。");
			this.$router.push("/signin");
			})
			.catch(error => {
			alert(error);
			});
		}
	}
};
</script>