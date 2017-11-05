<template>
  <div class="project" v-bind:class="{ 'project--last' : index + 1 === length }">
    <div class="project__type">{{ project.date }}<span>·</span>{{ project.platforms }}</div>
    <div class="project__head">
      <a href="#" class="project__name">{{ project.name }}</a>
      <div class="project__tag project__tag--completed" v-if="project.status === 'Completed'">{{ project.status }}</div>
      <div class="project__tag project__tag--ongoing" v-if="project.status === 'Ongoing'">{{ project.status }}</div>
      <div class="project__tag project__tag--coming" v-else="">{{ project.status }}</div>
    </div>
    <p class="project__info">{{ project.about }}</p>
  </div>
</template>
<script>
  export default {
    name: 'project',
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
  @import '~sass/main'

  .project
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
      font-family: 'Montserrat', sans-serif;
</style>
