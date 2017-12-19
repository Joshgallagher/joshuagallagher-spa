<template>
  <div class="post-item" v-bind:class="{ 'post-item--last' : index + 1 === length }">
    <div class="post-item__type">{{ post.created_at }}<span>·</span>By {{ post.user.data.name }}</div>
    <div class="post-item__head">
      <router-link :to="{ name: 'article', params: { slug: post.slug } }" class="post-item__name">{{ post.title }}</router-link>
      <div class="post-item__tag post-item__tag">Blog Post</div>
    </div>
    <p class="post-item__info">{{ post.teaser }}</p>
  </div>
</template>
<script>
  export default {
    name: 'post-item',
    props: {
      'post': {
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
      }
    }
  }
</script>
<style lang="sass">
  @import '~sass/base/vars'

  .post-item
    display: flex
    flex-direction: column
    margin-bottom: 50px
    &--last
      margin-bottom: 0
    &__type
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif;
      span
        margin: 0 10px
    &__head
      display: flex
      align-items: center
      flex-direction: row
      margin: 20px 0
    &__name
      margin: 0
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
      &:hover
        color: $blue
    &__tag
      min-width: 100px
      margin-left: 20px
      padding: 3px 7px
      line-height: 20px
      text-align: center
      text-transform: uppercase
      color: #fff
      font-size: 11px
      font-weight: 600
      font-family: Montserrat, sans-serif
      border-radius: 3px
      background-color: $purple
    &__info
      margin: 0
      line-height: 38px
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif

  @media screen and (max-width: 768px)
    .post-item
      margin-bottom: 30px
      &--last
        margin-bottom: 0 !important
      &__head
        align-items: flex-start
        flex-direction: column
      &__name
        width: 100%
        font-size: 25px
        line-height: 33px
        overflow: unset
        white-space: unset
        text-overflow: unset
      &__tag
        width: 100%
        margin: 15px 0 0 0
  @media screen and (max-width: 425px)
    .post-item
      &__info
        font-size: 18px
        line-height: 35px
</style>
