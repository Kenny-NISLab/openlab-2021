<template>
  <article aria-label="追加コンテンツ">
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.youtube-video{
  width:100%;
  padding-bottom: 56.25%;
  height:0px;
  position: relative;

  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
