<template>
  <article aria-label="追加コンテンツ">
    <section aria-label="写真ギャラリー">
      <h1 class="heading--main">
        オープンラボ終了後限定の追加コンテンツをお届けします！
      </h1>
      <h2 class="heading--sub">
        オープンラボへのご参加、ありがとうございました！
      </h2>
      <v-row>
        <v-col
          v-for="image in images"
          :key="image"
          class="d-flex child-flex"
          sm="4"
          cols="6"
        >
          <v-card>
            <v-img :src="image" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section
      aria-label="研究室紹介動画をYouTubeで公開"
      class="mb-16"
    >
      <h1 class="heading--main">
        研究室紹介動画を公開しています！
      </h1>
      <v-row>
        <v-col
          class="youtube-video"
          cols="12"
        >
          <iframe
            src="https://www.youtube.com/embed/9JMPzY-NRDE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </v-col>
      </v-row>
    </section>
    <section aria-label="アンケート結果">
      <h1 class="heading--main">
        アンケート結果を公開！
      </h1>
      <v-alert
        outlined
        type="warning"
        border="left"
      >
        匿名アンケートですので、アンケートの信頼性については保証致しかねます。<br>
        みなさまの研究室選びの参考にしていただければと思います。<br>
        私たちがこの結果を何かに使用することは一切ございません。
      </v-alert>
    </section>
    <section aria-label="オープンラボでいただいた質問とそれに対する回答一覧">
      <h1 class="heading--main">
        オープンラボでいただいた質問を一部紹介します！
      </h1>
      <h2 class="heading--accent">
        多くいただいた質問や、時間の関係上答えることができなかった質問などにお答えします！
      </h2>
      <v-row class="my-4">
        <v-col>
          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(item, i) in questions"
              :key="i"
            >
              <v-expansion-panel-header>{{ item.q }}</v-expansion-panel-header>
              <v-expansion-panel-content>{{ item.ans }}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ExtraContent',
  components: {},
  data () {
    return {
      images: [
        '/photos/09.png',
        '/photos/10.png',
        '/photos/11.png',
        '/photos/12.png',
        '/photos/13.png',
        '/photos/14.png',
      ],
      questions: [
        {
          q: '院生の多い研究室ってどこですか？',
          ans: '回答です'
        },
        {
          q: 'プログラミングコードがしっかり書けないとダメなイメージがあるのですが、書けなくても大丈夫なのでしょうか。',
          ans: '回答です'
        },
        {
          q: '研究は1人で行っていきますか？',
          ans: '回答です'
        },
        {
          q: '英語は必須になりますか？',
          ans: '回答です'
        },
        {
          q: '院進学の試験は難しいですか？',
          ans: '回答です'
        },
        {
          q: '院進学と就職の割合はどのくらいですか？',
          ans: '回答です'
        },
        {
          q: '研究内容がとても難しそうで不安なのですが大丈夫でしょうか？',
          ans: '回答です'
        },
        {
          q: '学部生、院生それぞれ普段の課題やすべきことはどれくらいありますか？',
          ans: '回答です'
        },
        {
          q: 'ミーティングはオンラインですか？',
          ans: '回答です'
        },
        {
          q: '小板研と違うと聞きましたが大きな違いはなんですか？',
          ans: '回答です'
        },
        {
          q: '昨年実際に研究費で購入したものは何がありますか？',
          ans: '回答です'
        },
        {
          q: '試験の過去問とかありますか？',
          ans: '回答です'
        },
        {
          q: 'ゲームて具体的に何やりますか？',
          ans: '回答です'
        },
        {
          q: '土日に研究室に行く方もいますか？',
          ans: '回答です'
        },
        {
          q: 'ミーティングの雰囲気はどんな感じですか？',
          ans: '回答です'
        },
        {
          q: '書類の手続きを秘書さんにやっていただけるとありましたが、備品の購入以外に書類の手続きは何があるのでしょうか？',
          ans: '回答です'
        },
        {
          q: 'ドローンを活用した研究ってできますか？？',
          ans: '回答です'
        },
        {
          q: '優秀な方が多いとおっしゃってましたが、研究室に配属された後のスキルの要求は高いですか？',
          ans: '回答です'
        },
        {
          q: '院生になると車で登校できますか？',
          ans: '回答です'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.youtube-video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
