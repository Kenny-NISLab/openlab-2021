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
      aria-label="YouTube"
      class="mb-16"
    >
      <h1 class="heading--main">
        研究室紹介動画を公開しています！
      </h1>
      <v-row>
        <v-col cols="12">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9JMPzY-NRDE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
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
      ]
    }
  }
}
</script>
