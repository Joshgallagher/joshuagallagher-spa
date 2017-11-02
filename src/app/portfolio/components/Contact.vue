<template>
  <p>Contact</p>
</template>
<script>
  export default {
    name: 'contact'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .contact
    display: flex
    justify-content: center
    width: 100%
    padding: 100px 0
    background: white
    &__heading
      width: 75%
      margin: 0
      padding: 0
      line-height: 1.6
      color: $text
      font-size: 50px
      font-weight: bold
    &__heading--highlight
      color: $blue
      text-decoration: none
</style>
