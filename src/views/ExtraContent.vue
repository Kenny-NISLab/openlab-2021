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
          md="3"
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
        '/photos/01.jpg'
      ],
      questions: [
        {
          q: '質問です',
          ans: '回答です'
        }
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
