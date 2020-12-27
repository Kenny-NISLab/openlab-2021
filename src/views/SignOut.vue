<template>
	<div class="signout">
		<h1>ログアウト</h1>
		<MenuBar/>

		<div>
			<button @click="singout">Sing out Now!!</button>
		</div>
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