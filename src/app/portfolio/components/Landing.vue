<template>
  <div class="landing">
    <h1 class="heading">I build <span class="heading heading--highlighted">cool things</span> on the web, and <span class="heading heading--highlighted">blog</span> about it.</h1>
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
    width: 100%
    padding: 150px 0
    background: white
  .heading
    width: 75%
    margin: 0
    padding: 0
    color: $text
    font-size: 80px
    font-weight: bold
    line-height: 1.6
    &--highlighted
      color: $blue
</style>
