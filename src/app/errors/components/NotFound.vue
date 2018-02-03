<template>
  <div class="not-found">
    <navigation></navigation>
    <div class="not-found__wrapper">
      <h2>Not Found!</h2>
      <p>You have ended up in the wild. <router-link :to="{ name: 'portfolio' }">Go back!</router-link></p>
    </div>
  </div>
</template>
<script>
  import navigation from '@/app/global/components/Navigation'

  export default {
    name: 'not-found',
    components: {
      navigation
    }
  }
</script>
<style lang="sass">
  @import '~sass/base/vars'

  .not-found
    > .nav
      position: absolute
    &__wrapper
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      width: 100vw
      height: 100vh
      padding: 0 50px
      background-color: white
      h2
        margin: 0 0 20px 0
        line-height: 75px
        color: $text
        font-size: 60px
        font-weight: 700
        font-family: 'Merriweather', serif
      p
        margin: 0
        padding: 0
        text-align: center
        line-height: 38px
        color: $text
        font-size: 20px
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
    @media screen and (max-width: 1024px)
      h2
        line-height: 70px
        font-size: 50px
      p
        font-size: 22px
        line-height: 45px
    @media screen and (max-width: 768px)
      &__wrapper
        padding: 0 35px
      h2
        font-size: 40px
        line-height: 55px
      p
        font-size: 20px
        line-height: 38px
    @media screen and (max-width: 490px)
      h2
        font-size: 30px
        line-height: 45px
    @media screen and (max-width: 425px)
      &__wrapper
        padding: 0 20px
      p
        font-size: 20px
        line-height: 38px
</style>
