<template>
  <nav class="pnav">
    <div class="pnav__container">
      <a href="#" class="pnav__logo">
        <logo></logo>
      </a>
      <div class="pnav__links">
        <a href="#" class="button button--blue">blog</a>
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

  .pnav
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
</style>
