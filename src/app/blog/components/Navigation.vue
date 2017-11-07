<template>
  <nav class="bnav">
    <div class="bnav__container">
      <router-link :to="{ name: 'blog' }" class="bnav__logo">
        <logo></logo>
      </router-link>
      <div class="bnav__links">
        <router-link v-if="this.$route.name !== 'blog'" :to="{ name: 'blog' }" class="bnav__link">Posts</router-link>
        <router-link :to="{ name: 'portfolio' }" class="button button--blue">Portfolio</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
  import logo from '@/app/global/components/Logo'

  export default {
    name: 'navigation',
    components: {
      logo
    }
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .bnav
    display: flex
    justify-content: center
    width: 100%
    height: 100px
    padding: 0 50px
    background-color: white
    &__container
      display: flex
      align-items: center
      width: 100%
      max-width: 1600px
      height: inherit
    &__logo
      display: flex
      justify-content: flex-start
      align-items: center
      width: 50%
      height: 100%
    &__links
      display: flex
      align-items: center
      justify-content: flex-end
      width: 50%
      height: 100%
      margin: 0
      padding: 0
      list-style-type: none
    &__link
      margin-right: 50px
      text-decoration: none
      color: $text
      font-size: 12px
      font-weight: 700
      font-family: 'Merriweather', serif
      transition: 250ms color ease-in-out
      &:hover
        color: $blue
</style>
