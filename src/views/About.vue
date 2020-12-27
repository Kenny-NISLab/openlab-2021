<template>
	<div class="about">
		<h1>This is an about page</h1>
		<MenuBar/>
	</div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue';
export default {
	name: 'about',
	components: {
		MenuBar,
	}
}
</script>