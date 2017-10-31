<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__left">
        <p class="footer__text">©2017 Joshua Gallagher, All Rights Reserved.</p>
      </div>
      <div class="footer__right">
        <a href="#" class="footer__link">GitHub</a>
        <a href="#" class="footer__link">LinkedIn</a>
        <a href="#" class="footer__link">Blog</a>
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
    background: $blue
    &__content
      display: flex
      align-items: center
      width: 100%
      max-width: 1600px
      height: inherit
      font-size: 14px
    &__left
      display: flex
      justify-content: flex-start
      align-items: center
      width: 50%
    &__text
      margin: 0
      color: white
    &__right
      display: flex
      justify-content: flex-end
      align-items: center
      width: 50%
    &__link
      margin-right: 50px
      text-decoration: none
      color: white
      font-weight: bold
      &:last-child
        margin-right: 0
</style>
