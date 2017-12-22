<template>
  <div class="article-item" v-bind:class="{ 'article-item--no-teaser' : hasTeaser === false, 'article-item--last' : index + 1 === length && hasTeaser === false }">
    <div class="article-item__type">{{ article.created_at }}<span>·</span>By {{ article.user.data.name }}</div>
    <router-link :to="{ name: 'article', params: { slug: article.slug } }" class="article-item__title" v-bind:class="['article-item__title--' + getTitleColor(index), { 'article-item__title--no-teaser' : hasTeaser === false }, { 'article-item__title--last' : index + 1 === length && hasTeaser === false }]">{{ article.title }}</router-link>
    <p class="article-item__teaser" v-if="hasTeaser">{{ article.teaser }}</p>
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
        titleColors: ['green', 'pink', 'purple', 'blue']
      }
    },
    methods: {
      getTitleColor (index) {
        let colorsArr = this.titleColors
        let colorsArrLength = colorsArr.length
        return colorsArr[index % colorsArrLength]
      }
    }
  }
</script>
<style lang="sass">
  @import '~sass/base/vars'

  .article-item
    display: flex
    flex-direction: column
    width: 100%
    margin-bottom: 50px
    &--no-teaser
      margin-bottom: 20px
    &--last
      margin-bottom: 0
    &__type
      width: 100%
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif;
      span
        margin: 0 10px
    &__title
      width: 100%
      margin: 20px 0
      line-height: 35px
      text-decoration: none
      color: $text
      font-size: 28px
      font-weight: 700
      font-family: Merriweather, serif
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      transition: 250ms color ease-in-out
      &--no-teaser
        margin: 20px 0
      &--last
        margin-bottom: 0
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
      width: 100%
      margin: 0
      line-height: 38px
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif

  @media screen and (max-width: 768px)
    .article-item
      margin-bottom: 30px
      &--last
        margin-bottom: 0 !important
      &__head
        align-items: flex-start
        flex-direction: column
      &__title
        width: 100%
        font-size: 25px
        line-height: 33px
        overflow: unset
        white-space: unset
        text-overflow: unset
        &--no-teaser
          margin: 20px 0 0
      &__tag
        width: 100%
        margin: 15px 0 0 0
  @media screen and (max-width: 425px)
    .article-item
      &__teaser
        font-size: 18px
        line-height: 35px
</style>
