<template>
	<v-app id="app">
		<v-app-bar app color="primary"></v-app-bar>

		<v-main>
			<v-container>
				<router-view/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style scoped>
#app{
	max-width: 1000px;
	margin: 0 auto;
	text-align: center;
}
</style>