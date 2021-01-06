<template>
	<div class="home">
		<h1>Home</h1>
		<WelcomeUser/>
	</div>
</template>

<script>
import WelcomeUser from '../components/WelcomeUser.vue';
export default {
	name: "home",
	components: {
		WelcomeUser,
	}
}
</script>
