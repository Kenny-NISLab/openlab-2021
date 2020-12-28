<template>
	<div class="signout">
		<h1>ログアウト</h1>
		<MenuBar/>

		<v-btn @click="singout">ログアウト</v-btn>
	</div>
</template>

<script>
import firebase from "../firebase.js";
import MenuBar from '../components/MenuBar.vue';
export default {
	name: "signout",
	components: {
		MenuBar,
	},
	methods: {
		singout() {
		firebase
			.auth()
			.signOut()
			.then(() => {
			alert("ログアウトしました。");
			this.$router.push("/");
			})
			.catch(error => {
			alert(error);
			});
		}
	}
};
</script>