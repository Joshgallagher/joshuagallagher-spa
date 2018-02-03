<template>
  <nav class="nav">
    <div class="nav__container">
      <router-link v-if="this.$route.name === 'blog'" :to="{ name: 'blog' }" class="nav__logo">
        <logo></logo>
      </router-link>
      <router-link v-else :to="{ name: 'portfolio' }" class="nav__logo">
        <logo></logo>
      </router-link>
      <div v-if="this.$route.name === 'blog' || this.$route.name === 'article' || this.$route.name === 'portfolio'" class="nav__links">
        <div v-if="this.$route.name === 'blog' || this.$route.name === 'article'">
          <router-link v-if="this.$route.name !== 'blog'" :to="{ name: 'blog' }" class="nav__link">Posts</router-link>
          <router-link :to="{ name: 'portfolio' }" class="button button--blue">Portfolio</router-link>
        </div>
        <router-link v-else :to="{ name: 'blog' }" class="button button--blue">Blog</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
  import logo from './Logo'

  export default {
    name: 'navigation',
    components: {
      logo
    }
  }
</script>
<style lang="sass">
  @import '~sass/base/vars'

  .nav
    display: flex
    justify-content: center
    width: 100%
    padding: 30px 50px
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
      width: 25%
      height: 100%
    &__links
      display: flex
      align-items: center
      justify-content: flex-end
      width: 75%
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

  @media screen and (max-width: 1024px)
    .nav
      padding: 30px 50px
  @media screen and (max-width: 768px)
    .nav
      padding: 15px 35px
      &__link
        margin-right: 35px
  @media screen and (max-width: 425px)
    .nav
      padding: 15px 20px
</style>
