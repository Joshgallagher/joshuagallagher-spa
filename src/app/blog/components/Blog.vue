<template>
  <div class="blog">
    <navigation></navigation>
    <div class="blog__wrapper">
      <div class="blog__welcome">
        <h1 class="blog__welcome-heading">Hello, World!</h1>
        <p class="blog__welcome-text">Here, you’ll find many different guides and tutorials on web technologies. Most of the guides will cover Laravel, Lumen and Vue.js. However, now and then I will dabble in some Java and software development principles.</p>
      </div>
      <div class="blog__articles">
        <div class="blog__articles-list">
          <article-item v-for="(article, index) in articles" :article="article" :key="index" :index="index" :length="articles.length"></article-item>
          <a href="#" class="blog__articles-load" @click.prevent="load(meta)">Load More</a>
        </div>
      </div>
    </div>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from './Navigation'
  import articleItem from './ArticleItem'
  import pageEnd from '@/app/global/components/PageEnd'

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'blog',
    components: {
      navigation,
      articleItem,
      pageEnd
    },
    mounted () {
      this.getArticles(1)
    },
    computed: {
      ...mapGetters({
        articles: 'blog/articles',
        meta: 'blog/meta'
      })
    },
    methods: {
      ...mapActions({
        getArticles: 'blog/getArticles',
        loadMoreArticles: 'blog/loadMoreArticles'
      }),
      load (meta) {
        this.loadMoreArticles(meta)
      }
    }
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .blog
    &__wrapper
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      padding: 0 50px
    &__welcome
      width: 100%
      max-width: 800px
      margin: 100px 0 0
    &__welcome-heading
      margin: 0 0 20px 0
      line-height: 75px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__welcome-text
      margin: 0
      line-height: 38px
      color: $text
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif
    &__articles
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      margin: 100px 0
    &__articles-list
      display: flex
      flex-direction: column
      align-items: center
      width: 100%
      max-width: 800px
    &__articles-load
      display: flex
      margin: 50px 0 0 0
      text-decoration: none
      color: $text
      font-size: 12px
      font-weight: 700
      font-family: 'Merriweather', serif
      transition: 250ms color ease-in-out
      &:hover
        color: $blue
</style>
