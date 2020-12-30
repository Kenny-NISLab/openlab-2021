<template>
	<div class="about">
		<h1>About</h1>
		<WelcomeUser/>
		<MenuBar/>
	</div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue';
import MenuBar from '../components/MenuBar.vue';
export default {
	name: 'about',
	components: {
		WelcomeUser,
		MenuBar,
	}
}
</script>