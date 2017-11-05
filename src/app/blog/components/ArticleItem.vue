<template>
  <div class="article">
    <div class="article__type">{{ article.date }}<span>·</span>By {{ article.author }}</div>
    <a href="#" class="article__title" v-bind:class=titleColors[index]>{{ article.title }}</a>
    <p class="article__teaser" v-if="hasTeaser === true">{{ article.teaser }}</p>
  </div>
</template>
<script>
  export default {
    name: 'article-item',
    props: {
      'article': {
        type: Object,
        default: ''
      },
      'index': {
        type: Number,
        default: 0
      },
      'length': {
        type: Number,
        default: 0
      },
      'hasTeaser': {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        titleColors: [
          'article__title--green',
          'article__title--pink',
          'article__title--purple',
          'article__title--blue'
        ]
      }
    }
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .article
    display: flex
    flex-direction: column
    width: 100%
    margin-bottom: 50px
    &__type
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif;
      span
        margin: 0 10px
    &__title
      margin: 20px 0
      line-height: 35px
      text-decoration: none
      color: $text
      font-size: 28px
      font-weight: 700
      font-family: Merriweather, serif
      transition: 250ms color ease-in-out
      &--blue
        color: $blue
        &:hover
          color: $dblue
      &--pink
        color: $pink
        &:hover
          color: $dpink
      &--purple
        color: $purple
        &:hover
          color: $dpurple
      &--green
        color: $green
        &:hover
          color: $dgreen
    &__teaser
      margin: 0
      line-height: 38px
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif;
</style>
