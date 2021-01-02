<template>
	<v-app id="app">
		<v-navigation-drawer v-model="navDrawer" app>
			<v-list nav>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>NISLAB OpenLAB</v-list-item-title>
						<v-list-item-subtitle>ネットワーク情報システム研究室<br/>佐藤研究室</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>
				
				<v-list-item-group v-show="uid">

					<v-list-item v-for="menuItem in menuLogined" :key="menuItem.name" :to="menuItem.path">
						<v-list-item-title>{{ menuItem.name }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>

				<v-list-item-group v-show="!uid">
					<v-list-item v-for="menuItem in menuLogouted" :key="menuItem.name" :to="menuItem.path">
						<v-list-item-title>{{ menuItem.name }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="secondary" app>
			<v-app-bar-nav-icon @click="navDrawer=!navDrawer"></v-app-bar-nav-icon>
			<v-toolbar-title>NISLAB OpenLAB</v-toolbar-title>

			<v-tabs v-show="uid">
				<v-tab v-for="menuItem in menuLogined" :key="menuItem.name" :to="menuItem.path">{{ menuItem.name }}</v-tab>
			</v-tabs>

			<v-tabs v-show="!uid">
				<v-tab v-for="menuItem in menuLogouted" :key="menuItem.name" :to="menuItem.path">{{ menuItem.name }}</v-tab>
			</v-tabs>
		</v-app-bar>

		<v-main id="main">
			<v-container>
				<router-view/>
			</v-container>
		</v-main>

		<v-footer color="primary" app></v-footer>
	</v-app>
</template>

<script>
import firebase from './firebase.js';
export default {
	name: 'App',
	components: {
	},
	data(){
		return {
			uid: '',
			navDrawer: null,
			menuLogined: [
				{
					name: 'HOME',
					path: '/'
				},
				{
					name: 'About',
					path: '/about'
				},
				{
					name: 'オープンラボ訪問予約',
					path: '/openlab/reserve'
				},
				{
					name: 'マイページ',
					path: '/mypage'
				},
				{
					name: 'ログアウト',
					path: '/signout'
				}
			],
			menuLogouted: [
				{
					name: 'HOME',
					path: '/'
				},
				{
					name: 'About',
					path: '/about'
				},
				{
					name: 'ログイン・新規登録',
					path: '/signin'
				}
			],
		}
	},
    created(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = user.uid;
            }else{
                this.uid = null;
            }
        });
    }
};
</script>

<style scoped>
#app{
	text-align: center;
}

#id{
	max-width: 1000px;
	margin: 0 auto;
	text-align: center;
}

.v-toolbar__title{
	overflow: visible !important;
	margin-right: 50px !important;
}

@media screen and (max-width: 1000px) {
	.v-tabs{
		display: none;
	}
}
</style>