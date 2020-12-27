<template>
	<div class="home">
		<h1>Home</h1>
		<WelcomeUser/>
		<MenuBar/>
	</div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
	name: "home",
	components: {
		WelcomeUser,
		MenuBar,
	}
}
</script>
