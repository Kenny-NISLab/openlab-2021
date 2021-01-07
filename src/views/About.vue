<template>
	<div class="about">
		<h1>コンテンツ</h1>
		<h2>ここでは、皆様の役に立つかもしれない情報を発信します。</h2>

		<v-alert outlined type="warning" border="left">コンテンツは随時更新する予定ですが、ぶっちゃけた話はオープンラボ当日にお話しできるかと思います！<br/>みなさんの研究室選びのお役に立てるよう情報発信します！</v-alert>

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
		<h3>質問箱でいただいた質問や、例年よくいただく質問に対して、佐藤研究室の学生が回答します！</h3>
		<v-row class="my-4">
			<v-col>
				<v-expansion-panels accordion>
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
					q: 'コアタイムはありますか？',
					ans: 'ありません。週1回のチームミーティングと全体ミーティング、月1回の月例発表会があるので、そこで進捗報告等を行います。主体性を持って研究室生活を送りましょう！',
				},
				{
					q: '小板研との違いを教えてください',
					ans: '同じ「ネットワーク情報システム研究室」を掲げていますが基本的に別の研究室です。部屋も分かれており、研究室としての交流もほとんどないため、その辺りはご留意ください。',
				},
				{
					q: 'プログラミングが苦手なんですが大丈夫ですか？',
					ans: '苦手な人もたくさんいるので大丈夫です！プログラミングを使わない研究も多くあります。例年、研究室配属される新4年生でプログラミングが得意な人は少数派です。'
				},
				{
					q: '大学院に進学する人が多い研究室ですか？',
					ans: '例年、6〜8割程度の学生が進学しています。逆に言えば、2〜4割りの学生は就職しますのでどちらの進路でもご心配なく！',
				}
			]
		}
	}
}
</script>