<template>
  <div class="blog">
    <navigation></navigation>
    <div class="blog__wrapper">
      <div class="blog__welcome">
        <h1 class="blog__welcome-heading">Hello, World!</h1>
        <p class="blog__welcome-text">On this blog, you will find many different tutorials on web technologies. Most of the guides will cover Laravel, Lumen, Vue.js and related technologies. However, now and then I will dabble in some Java and software development principles.</p>
      </div>
      <div class="blog__articles">
        <div class="blog__articles-list">
          <article-item v-for="(article, index) in articles" :article="article" :key="index" :index="index" :length="articles.length"></article-item>
          <a href="#" class="blog__articles-load" @click.prevent="load(meta)" v-if="meta.pagination.links.next">Load More</a>
          <p class="blog__articles-load blog__articles-load--none" v-else>That's All For Now.</p>
        </div>
      </div>
    </div>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from '@/app/global/components/Navigation'
  import articleItem from './ArticleItem'
  import pageEnd from '@/app/global/components/PageEnd'

  import store from '@/store'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'blog',
    components: {
      navigation,
      articleItem,
      pageEnd
    },
    beforeRouteEnter (to, from, next) {
      store.dispatch('blog/getArticles')
        .then(() => next())
    },
    beforeRouteUpdate (to, from, next) {
      store.dispatch('blog/getArticles')
        .then(() => next())
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
  @import '~sass/base/vars'

  .blog
    background-color: white
    &__wrapper
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      padding: 0 50px
    &__welcome
      width: 100%
      max-width: 800px
      padding: 100px 0 0
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
      padding: 100px 0
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
    &__articles-load--none
      pointer-events: none

    @media screen and (max-width: 1024px)
      &__wrapper
        padding: 0 50px
      &__welcome
        padding: 50px 0 0
      &__welcome-heading
        line-height: 70px
        font-size: 50px
      &__welcome-text
        font-size: 22px
        line-height: 45px
      &__articles
        padding: 50px 0
      &__articles-load
        margin-top: 0
    @media screen and (max-width: 768px)
      &__wrapper
        padding: 0 35px
      &__welcome
        padding: 35px 0 0
      &__welcome-heading
        font-size: 40px
        line-height: 55px
      &__welcome-text
        font-size: 20px
        line-height: 38px
      &__articles
        padding: 35px 0
    @media screen and (max-width: 490px)
      &__welcome-heading
        font-size: 30px
        line-height: 45px
    @media screen and (max-width: 425px)
      &__wrapper
        padding: 0 20px
      &__welcome
        padding: 20px 0 0
      &__welcome-text
        font-size: 20px
        line-height: 38px
</style>
