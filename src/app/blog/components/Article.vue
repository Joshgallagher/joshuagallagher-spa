<template>
  <div class="article">
    <navigation></navigation>
    <div class="article__wrapper">
      <div class="article__header">
        <h1 class="article__heading">{{ article.title }}</h1>
        <div class="article__info">{{ article.created_at }}<span>·</span>By {{ article.user.data.name}}</div>
      </div>
      <div class="article__content" v-html="article.body"></div>
      <div class="article__articles">
        <h2 class="article__articles-heading">Latest Posts</h2>
        <div class="article__articles-list">
          <article-item v-for="(article, index) in articles" :article="article" :key="index" :index="index" :length="articles.length" :hasTeaser=false></article-item>
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
    name: 'article',
    components: {
      navigation,
      articleItem,
      pageEnd
    },
    mounted () {
      this.getArticles()
    },
    beforeRouteEnter (to, from, next) {
      this.getArticle(this.$route.params.slug)
    },
    computed: {
      ...mapGetters({
        article: 'blog/article',
        articles: 'blog/articles'
      })
    },
    methods: {
      ...mapActions({
        getArticle: 'blog/getArticle',
        getArticles: 'blog/getArticles'
      })
    }
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .article
    &__wrapper
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      padding: 0 50px
    &__header
      width: 100%
      max-width: 800px
      margin: 100px 0 50px 0
    &__heading
      width: 100%
      margin: 0 0 20px 0
      line-height: 75px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__info
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif;
      span
        margin: 0 10px
    &__content
      width: 100%
      max-width: 800px
      *:first-child
        margin-top: 0
      *:last-child
        margin-bottom: 0
      h2
        margin: 50px 0 25px
        line-height: 35px
        text-decoration: none
        color: $text
        font-size: 28px
        font-weight: 700
        font-family: Merriweather, serif
      h3
        margin: 50px 0 25px
        line-height: 28px
        text-decoration: none
        color: $text
        font-size: 20px
        font-weight: 700
        font-family: Merriweather, serif
      p
        margin: 0 0 25px 0
        line-height: 38px
        color: $text
        font-size: 20px
        font-weight: 300
        font-family: 'Montserrat', sans-serif
        &:last-child
          margin-bottom: 0
      a
        text-decoration: underline
        color: $blue
        font-weight: 500
        transition: 250ms color ease-in-out
        &:hover
          color: $dblue
      pre
        margin: 25px 0
        padding: 20px
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace
        background-color: $bg
        border-radius: 3px
        > code
          color: $text
          line-height: 28px
          font-size: 15px
      > code
        padding: 2px 4px
        font-size: 90%
        color: $blue
        background-color: rgba($blue, .10)
        border-radius: 3px
      ul, ol
        margin-bottom: 25px
        li
          margin: 0 0 10px 0
          line-height: 38px
          font-size: 20px
          font-weight: 300
          font-family: 'Montserrat', sans-serif
          &:last-child
            margin-bottom: 0
      hr
        display: block
        width: 100px
        height: 1px
        margin: 50px 0 50px
        background-color: $line
        border: none
    &__articles
      width: 100%
      max-width: 800px
      margin: 75px 0 100px
    &__articles-heading
      margin: 0 0 50px 0
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__articles-list
      width: 100%
      max-width: 800px
</style>
