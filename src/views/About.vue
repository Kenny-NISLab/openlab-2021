<template>
	<div class="about">
		<h1>コンテンツ</h1>
		<h2>ここでは、皆様の役に立つかもしれない情報を発信します。</h2>
		<v-row class="my-4">
			<v-col cols="12" sm="6">
				<v-card>
					<a href="https://twitter.com/nislab_sato" target="_blank">
						<v-img src="/sns/twitter01.png"></v-img>
					</a>
					<v-card-title>Twitter (<a href="https://twitter.com/nislab_sato" target="_blank">@nislab_sato</a>) やってます！</v-card-title>
					<v-card-subtitle>研究室の情報発信を中心に、質問箱でいただいた質問にもお答えしています！</v-card-subtitle>
				</v-card>
			</v-col>
			<v-col cols="12" sm="6">
				<v-card>
					<a href="https://nislab.doshisha.ac.jp" target="_blank">
						<v-img src="/sns/website01.png"></v-img>
					</a>
					<v-card-title>研究室サイト運営してます！</v-card-title>
					<v-card-subtitle>研究発表についての報告などもしています。<br/>近日、リニューアル予定！</v-card-subtitle>
				</v-card>
			</v-col>
		</v-row>

		<h1>よくある質問に答えます！</h1>
		<v-row class="mb-4">
			<v-col>
				<v-expansion-panels inset>
					<v-expansion-panel v-for="(item, i) in questions" :key="i">
						<v-expansion-panel-header>{{ item.q }}</v-expansion-panel-header>
						<v-expansion-panel-content>{{ item.ans }}</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>

		<h1>写真を一部公開！</h1>
		<v-row>
			<v-col class="d-flex child-flex" lg="3" md="4" sm="6" v-for="image in images" :key="image">
				<v-card>
					<v-img :src="image"></v-img>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	name: 'about',
	components: {
	},
	data() {
		return {
			images: [
				'/photos/03.jpg',
				'/photos/01.jpg',
				'/photos/04.jpg',
				'/photos/05.jpg',
				'/photos/02.jpg',
			],
			questions: [
				{
					q: 'どうやって研究室を選びましたか？',
					ans: '研究テーマ',
				},
				{
					q: 'どうやって研究室を選びましたか？',
					ans: '研究テーマ',
				},
			]
		}
	}
}
</script>