<template>
  <div class="project-item" v-bind:class="{ 'project-item--last' : index + 1 === length }">
    <div class="project-item__type">{{ project.date }}<span>·</span>{{ project.platforms }}</div>
    <div class="project-item__head">
      <a v-if="project.url != '#'" :href=project.url target="_blank" class="project-item__name">{{ project.name }}</a>
      <h2 v-else class="project-item__name project-item__name--no-link">{{ project.name }}</h2>
      <div class="project-item__tag" v-bind:class="'project-item__tag--' + project.status.toLowerCase()">{{ project.status }}</div>
    </div>
    <p class="project-item__info">{{ project.about }}</p>
  </div>
</template>
<script>
  export default {
    name: 'project-item',
    props: {
      'project': {
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

  .project-item
    display: flex
    flex-direction: column
    margin-bottom: 50px
    &--last
      margin-bottom: 0
    &__type
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif
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
      transition: 250ms color ease-in-out
      &:hover
        color: $blue
    &__name--no-link
      &:hover
        color: $text
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
      background-color: $blue
    &__tag--ongoing
      background-color: $blue
    &__tag--completed
      background-color: $green
    &__tag--coming
      background-color: $pink
    &__info
      margin: 0
      line-height: 38px
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif

  @media screen and (max-width: 768px)
    .project-item
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
    .project-item
      &__info
        font-size: 18px
        line-height: 35px
</style>
