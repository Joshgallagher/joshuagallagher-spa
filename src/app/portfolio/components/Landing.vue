<template>
  <div class="landing">
    <h1 class="landing__heading">I build <a href="#" class="landing__heading--highlight">cool things</a> on the web, and <a href="#" class="landing__heading--highlight">blog</a> about it.</h1>
  </div>
</template>
<script>
  export default {
    name: 'landing'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .landing
    display: flex
    justify-content: center
    margin: 100px auto
    padding: 0 50px
    &__heading
      width: 100%
      max-width: 800px
      margin: 0
      line-height: 95px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif;
    &__heading--highlight
      text-decoration: none
      color: $blue
</style>
