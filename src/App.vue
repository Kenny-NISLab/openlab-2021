<template>
	<v-app id="app">
		<v-main>
			<v-container>
				<router-view/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "app",
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
