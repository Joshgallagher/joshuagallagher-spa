<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__cpr">©2017 Joshua Gallagher, All Rights Reserved.</p>
      <div class="footer__links">
        <a href="https://github.com/Joshgallagher" target="blank" class="footer__link">GitHub</a>
        <a href="https://www.linkedin.com/in/joshua-gallagher-616653127" target="blank" class="footer__link">LinkedIn</a>
        <router-link :to="{name: 'blog' }" class="footer__link">Blog</router-link>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'page-end'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .footer
    display: flex
    justify-content: center
    width: 100%
    height: 100px
    padding: 0 50px
    background-color: $blue
    &__container
      display: flex
      align-items: center
      width: 100%
      max-width: 1600px
      height: inherit
    &__cpr
      display: flex
      justify-content: flex-start
      width: 50%
      color: white
      font-size: 12px
      font-weight: 300
      font-family: 'Montserrat', sans-serif
    &__links
      display: flex
      justify-content: flex-end
      width: 50%
    &__link
      margin-right: 50px
      text-decoration: none
      color: white
      font-size: 12px
      font-weight: 700
      font-family: 'Merriweather', serif
      &:last-child
        margin-right: 0
</style>
