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
          <article-item v-for="(article, index) in articles.articles" :article="article" :key="article.id" :index="index" :length="articles.articles.length"></article-item>
          <a href="#" class="blog__articles-load">Load More</a>
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

  export default {
    name: 'blog',
    components: {
      navigation,
      articleItem,
      pageEnd
    },
    data () {
      return {
        articles: {
          articles: [
            {
              'id': 1,
              'title': 'Lumen with Laravel JWT',
              'date': '29/08/17',
              'author': 'Joshua Gallagher',
              'teaser': 'Sed venenatis, justo quis ornare egestas, velit augue lacinia orci, in vehicula risus ipsum vitae mi. Maecenas magna elit, mattis quis urna vitae, tempor tincidunt velit. Nam ornare nisl arcu. Mauris blandit in ante sit amet hendrerit.'
            },
            {
              'id': 2,
              'title': 'Lumen: Password Resets',
              'date': '29/08/17',
              'author': 'Joshua Gallagher',
              'teaser': 'Nulla dictum maximus tortor ac tempor. In hac habitasse platea dictumst. Cras tempus congue dui. Suspendisse ac eros vitae turpis posuere rutrum. Etiam vel erat ante. Etiam in tellus nunc. Ut ut neque est. Etiam ullamcorper justo ut tellus fermentum, eget suscipit lectus viverra.'
            },
            {
              'id': 3,
              'title': 'Say Hello to Fractal!',
              'date': '29/08/17',
              'author': 'Joshua Gallagher',
              'teaser': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo modi unde incidunt vitae, quae vel, dolorum quaerat fuga impedit cupiditate! Reiciendis pariatur qui, vel incidunt sint quisquam voluptatem soluta!'
            },
            {
              'id': 4,
              'title': 'Hello, World!',
              'date': '29/08/17',
              'author': 'Joshua Gallagher',
              'teaser': 'Ut vehicula, est ac venenatis aliquet, dui mauris euismod quam, in sollicitudin nunc nibh at eros. Phasellus tempor orci nec ligula fringilla consequat.'
            }
          ]
        }
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
