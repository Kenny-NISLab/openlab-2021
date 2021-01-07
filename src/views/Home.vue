<template>
	<div class="home">
		<h1>2021年2月15日(月) NISLAB オープンラボ 開催！</h1>
		<WelcomeUser/>

		<v-row class="my-6">
			<v-col cols="12" md="6">
				<v-carousel cycle width="100%" height="100%">
					<v-carousel-item v-for="image in images" :key="image">
						<v-img :src="image"></v-img>
					</v-carousel-item>
				</v-carousel>
			</v-col>
			<v-col cols="12" md="6" align-self="center">
				<p>こんにちは！<br/>ネットワーク情報システム研究室（<b>NISLAB</b>） 佐藤研究室です。</p>
				<p>学部3年生を中心とした（1・2年生も大歓迎！）在学生の皆さんに向けた<span class="accent--text">オープンラボを2021年2月15日(月)に開催します</span>。</p>
				<p>当日は、zoomを用いたオンライン開催と現地でのオフライン開催のハイブリッド開催を予定しています。</p>
				<p>当日は十分な予防対策を行うことはもちろんのこと、事前の状況を見てプログラムの変更も想定しています。</p>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<v-alert border="right" colored-border type="error" elevation="2">オフラインでの研究室訪問を希望される方は予約が必要です。必ずご確認ください。</v-alert>
			</v-col>
		</v-row>

		<v-row v-show="!uid">
			<v-col cols="12">
				<v-alert border="right" colored-border type="warning" elevation="2">質問や相談等のお問い合わせは、ログインしていただくことでメニューが表示されます。</v-alert>
			</v-col>
		</v-row>
		
		<h1>オープンラボ要領</h1>
		<h3>今年度のオープンラボはオンライン/オフラインのハイブリッド開催をします</h3>
		<h4 class="mx-2 my-2">それぞれ時間が異なりますので、両方参加していただくことも可能です。<br/>3年生だけでなく、1/2年生も大歓迎ですので是非ご参加ください！</h4>

		<v-row class="my-6">
			<!-- オンライン開催 -->
			<v-col cols="12" md="6">
				<v-card width="100%">
					<v-card-title><b>オンライン開催</b></v-card-title>
					<v-card-subtitle>zoomにて開催しますので、どなたでも気軽に参加いただけます。</v-card-subtitle>
					<v-divider class="mx-3"></v-divider>
					<v-card-title>プログラム</v-card-title>
					<v-card-subtitle>研究室紹介や例年よく出る質問などを紹介し、参加してくださるみなさんの質問等にもお答えします。<br/>希望者には、ブレイクアウトルームを用いた相談会なども開催予定です。</v-card-subtitle>
					<v-card-text>
						<ul>
							<li>研究室紹介</li>
							<ul>
								<li>研究内容や学ぶ内容について</li>
								<li>研究室での生活について</li>
								<li>先輩がどうやって研究室を選んだのか</li>
							</ul>
							<li>質疑応答</li>
							<ul>
								<li>例年よくでる質問</li>
								<li>皆さんからの質問対応</li>
							</ul>
							<li>相談会</li>
						</ul>
					</v-card-text>
					<v-card-title>開催日時</v-card-title>
					<v-card-subtitle><b>13:00</b>と<b>15:00</b>の2回開催します。<br/>50分程度を予定していますが、途中参加/退出も大歓迎です！<br/>zoomはビデオをオンにする必要はありません。<br/>聞くだけでも大歓迎ですのでぜひご参加ください。</v-card-subtitle>
					<v-card-title>参加方法</v-card-title>
					<v-card-subtitle>前日までにzoomの参加URLを下記に記載しますのでそちらから参加ください。</v-card-subtitle>
					<v-card-text>
						<v-simple-table dense>
							<template v-slot:default>
								<tbody>
									<tr>
										<th colspan="2" class="text-center">[ 13:00 - 14:00 ]</th>
									</tr>
									<tr>
										<td class="text-center">ID</td>
										<td></td>
									</tr>
									<tr>
										<td class="text-center">Password</td>
										<td></td>
									</tr>
									<tr>
										<td class="text-center">URL</td>
										<td><a href="#" target="_blank">こちらから参加(現在は無効なURLです)</a></td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-card-text>
					<v-card-text>
						<v-simple-table dense>
							<template v-slot:default>
								<tbody>
									<tr>
										<th colspan="2" class="text-center">[ 15:00 - 16:00 ]</th>
									</tr>
									<tr>
										<td class="text-center">ID</td>
										<td></td>
									</tr>
									<tr>
										<td class="text-center">Password</td>
										<td></td>
									</tr>
									<tr>
										<td class="text-center">URL</td>
										<td><a href="#" target="_blank">こちらから参加(現在は無効なURLです)</a></td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-card-text>
				</v-card>
			</v-col>

			<!-- オフライン開催 -->
			<v-col cols="12" md="6">
				<v-card width="100%">
					<v-card-title><b>オフライン開催</b></v-card-title>
					<v-card-subtitle>研究室に直接訪問し、雰囲気等を味わっていただけます。<br/>感染対策を十分に行った上で実施します。</v-card-subtitle>
					<v-divider class="mx-3"></v-divider>
					<v-card-title>プログラム</v-card-title>
					<v-card-subtitle>訪問してくださる皆さんとの会話を大切にし、皆さんの研究室配属（それ以外の内容も大歓迎！）に関する相談などを受け付けます。<br/>簡単な研究室紹介や例年よく出る質問などを紹介し、参加してくださるみなさんの質問等にもお答えします。</v-card-subtitle>
					<v-card-text>
						<ul>
							<li>相談会</li>
							<li>質疑応答</li>
							<li>研究室紹介</li>
							<ul>
								<li>研究室の様子や過ごし方について</li>
								<li>先輩がどうやって研究室を選んだのか</li>
								<li>就職活動の進め方</li>
							</ul>
						</ul>
					</v-card-text>
					<v-card-title>開催日時</v-card-title>
					<v-card-subtitle><b>11:00</b>・<b>11:30</b>・<b>14:15</b>・<b>16:00</b>・<b>16:30</b>の5回に分けて開催します。<br/>感染対策として、各回の定員を6名とさせていただき<u>完全予約制</u>にて実施させていただきます。<br/>実際に研究室生活を送ることになる部屋の様子や雰囲気を知ってもらうだけでなく、様々なお話をしたいと思っています。<br/>「ちょっと話を聞いてみたいだけなんだけど…」という方もぜひご予約ください！</v-card-subtitle>
					<v-card-title>参加方法</v-card-title>
					<v-card-subtitle>2日前までに<router-link to="/openlab/reserve">こちら(ログインが必要です)</router-link>から参加を希望する時間の予約を行ってください。<br/>各回の定員を6名とさせていただいておりますので、ご希望の方はお早めにご予約ください。</v-card-subtitle>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';
export default {
	name: "home",
	components: {
		WelcomeUser,
	},
	data (){
		return {
			uid: '',
			model: 0,
			images: [
				'/carousel/slider03.jpg',
				'/carousel/slider01.jpg',
				'/carousel/slider04.jpg',
				'/carousel/slider05.jpg',
				'/carousel/slider02.jpg',
			],
		}
	},
	created() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = user.uid;
            }else{
                this.uid = null;
            }
		});
	}
}
</script>
