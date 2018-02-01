<template>
  <div class="not-found">
    <h2>Not Found!</h2>
  </div>
</template>
<script>
  export default {
    name: 'not-found'
  }
</script>
<style lang="sass">
  @import '~sass/base/vars'

  .not-found
    display: flex
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh
    background-color: white
    h2
      line-height: 75px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
</style>
