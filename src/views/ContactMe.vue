<template>
	<div class="contactMe">
		<h1>お問い合わせ</h1>
		<WelcomeUser/>
		<MenuBar/>
	</div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';
export default {
	name: 'contactme',
	components: {
		WelcomeUser,
		MenuBar,
	}
}
</script>