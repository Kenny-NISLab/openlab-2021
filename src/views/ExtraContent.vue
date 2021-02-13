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
