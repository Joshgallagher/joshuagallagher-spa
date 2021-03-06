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
          <article-item v-for="(article, index) in articles" :article="article" :key="index" :index="index" :length="articles.length" :hasTeaser="false"></article-item>
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
    name: 'article',
    components: {
      navigation,
      articleItem,
      pageEnd
    },
    beforeRouteEnter (to, from, next) {
      store.dispatch('blog/getArticle', to.params.slug)
        .then(() => next())
    },
    beforeRouteUpdate (to, from, next) {
      store.dispatch('blog/getArticle', to.params.slug)
        .then(() => next())
    },
    mounted () {
      this.getArticles()
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
  @import '~sass/base/vars'

  .article
    background-color: white
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
        margin: 50px 0 0
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
        margin: 25px 0 25px 0
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
      blockquote
        padding: 10px 20px
        padding-left: 30px
        margin: 0 0 20px
        font-style: italic
        border-left: 4px solid $blue
      pre
        margin: 25px 0
        padding: 20px
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace
        background-color: $bg
        border-radius: 3px
        word-wrap: break-word
        white-space: pre-wrap
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

    @media screen and (max-width: 1024px)
      &__wrapper
        padding: 0 50px
      &__header
        margin: 50px 0 35px
      &__heading
        line-height: 70px
        font-size: 50px
      &__content
        > h3
          margin: 35px 0 10px
      &__articles
        margin: 35px 0 50px
      &__articles-heading
        margin-bottom: 35px
    @media screen and (max-width: 768px)
      &__wrapper
        padding: 0 35px
      &__header
        margin: 35px 0 35px
      &__heading
        font-size: 40px
        line-height: 55px
      &__content
        > p
          margin: 15px 0 15px
      &__articles
        margin: 20px 0 35px
      &__articles-heading
        font-size: 25px
        line-height: 33px
    @media screen and (max-width: 490px)
      &__heading
        font-size: 30px
        line-height: 45px
    @media screen and (max-width: 425px)
      &__wrapper
        padding: 0 20px
      &__header
        margin: 20px 0 35px
      &__content
        > h3
          margin: 20px 0 10px
      &__articles
        margin: 20px 0 35px
      &__articles-heading
        margin-bottom: 20px
      &__articles
        margin: 20px 0 20px
</style>
