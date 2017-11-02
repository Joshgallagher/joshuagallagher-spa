<template>
  <div class="planding">
    <h1 class="planding__heading">I build <a href="" class="planding__heading--highlight">cool things</a> on the web, and <a href="" class="planding__heading--highlight">blog</a> about it.</h1>
  </div>
</template>
<script>
  export default {
    name: 'landing'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .planding
    width: 100%
    max-width: 960px
    margin: 150px auto
    padding: 0 50px
    &__heading
      line-height: 1.4
      color: $text
      font-size: 70px
      font-weight: 700
    &__heading--highlight
      text-decoration: none
      color: $blue
</style>
