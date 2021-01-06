<template>
	<div class="about">
		<h1>About</h1>
		<WelcomeUser/>
	</div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue';
export default {
	name: 'about',
	components: {
		WelcomeUser,
	}
}
</script>