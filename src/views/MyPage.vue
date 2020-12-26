<template>
<div class="mypage">
	<v-container>
		<h1>マイページ</h1>
		<WelcomeUser/>

		<div>
			<router-link to="/">Home</router-link> |
			<router-link to="/signout">ログアウト</router-link> |
			<router-link to="/mypage">マイページ</router-link> |
			<router-link to="/contactme">お問い合わせ</router-link>
		</div>

	</v-container>
</div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue';

export default {
	name: "mypage",
	components: {
		WelcomeUser
	}
};
</script>