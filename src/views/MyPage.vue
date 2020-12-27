<template>
	<div class="mypage">
		<h1>マイページ</h1>
		<WelcomeUser/>
		<MenuBar/>
	</div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
	name: "mypage",
	components: {
		WelcomeUser,
		MenuBar
	}
};
</script>