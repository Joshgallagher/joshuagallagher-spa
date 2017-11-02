<template>
  <div class="contact">
    <h2 class="contact__heading">Have a placement available next year? Want to work together? <a href="mailto:hello@joshuagallagher.io" class="contact__heading--highlight">Mail me!</a></h2>
  </div>
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
    margin: 100px auto
    padding: 0 50px
    &__heading
      width: 100%
      max-width: 800px
      margin: 0
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__heading--highlight
      text-decoration: none
      color: $blue
      transition: 250ms color ease-in-out
      &:hover
        color: $dblue
</style>
