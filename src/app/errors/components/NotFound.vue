<template>
  <div class="not-found">
    <h2>Not Found!</h2>
    <p>You have ended up in the wild. <router-link :to="{ name: 'portfolio' }">Go back!</router-link></p>
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
    flex-direction: column
    width: 100vw
    height: 100vh
    background-color: white
    h2
      line-height: 75px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    p
      margin: 0 0 50px 0
      padding: 0
      line-height: 55px
      color: $text
      font-size: 25px
      font-weight: 300
      font-family: 'Montserrat', sans-serif
      &:last-child
        margin-bottom: 0
      a
        text-decoration: none
        color: $blue
        font-weight: 500
        transition: 250ms color ease-in-out
        &:hover
          color: $dblue
</style>
