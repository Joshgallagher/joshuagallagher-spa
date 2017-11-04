<template>
  <div class="welcome">
    <h1 class="welcome__heading">Hello, World!</h1>
    <p class="welcome__text">Here, you’ll find many different guides and tutorials on web technologies. Most of the guides will cover Laravel, Lumen and Vue.js. However, now and then I will dabble in some Java and software development principles.</p>
  </div>
</template>
<script>
  export default {
    name: 'welcome'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .welcome
    display: flex
    align-items: center
    flex-direction: column
    margin: 100px 0
    padding: 0 50px
    &__heading
      width: 100%
      max-width: 800px
      margin: 0 0 20px 0
      line-height: 75px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__text
      width: 100%
      max-width: 800px
      margin: 0
      line-height: 38px
      color: $text
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif
</style>
